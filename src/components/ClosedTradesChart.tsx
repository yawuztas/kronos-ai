import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Radio, RefreshCw } from 'lucide-react';
import { type ClosedTradePoint } from '../data/closedTrades';
import { TRANSLATIONS, type Lang } from '../i18n';

type WindowFilter = '30D' | '90D' | '180D' | 'ALL';

const WINDOW_CUTOFFS: Record<WindowFilter, string> = {
  '30D': '2026-10-12',
  '90D': '2026-08-14',
  '180D': '2026-05-16',
  ALL: '2026-02-14',
};

function formatShortDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (lang === 'zh') return `${y}年${m}月${d}日`;
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsTr = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  const list = lang === 'en' ? monthsEn : monthsTr;
  return `${list[(m || 1) - 1]} ${d}, ${y}`;
}

function formatAxisDate(iso: string, lang: Lang): string {
  const [, m, d] = iso.split('-').map(Number);
  if (lang === 'zh') return `${m}/${d}`;
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsTr = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  const list = lang === 'en' ? monthsEn : monthsTr;
  return `${list[(m || 1) - 1]} ${d}`;
}

interface ClosedTradesChartProps {
  lang: Lang;
  trades: ClosedTradePoint[];
  isLiveSynced: boolean;
}

export function ClosedTradesChart({ lang, trades, isLiveSynced }: ClosedTradesChartProps) {
  const t = TRANSLATIONS[lang].curve;
  const [windowFilter, setWindowFilter] = useState<WindowFilter>('ALL');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const cutoff = WINDOW_CUTOFFS[windowFilter];
    const slice = trades.filter((tr) => tr.date >= cutoff);
    if (slice.length === 0) return trades;
    if (windowFilter === 'ALL') return slice;
    const prevIdx = trades.findIndex((tr) => tr.n === slice[0].n) - 1;
    const baseBal = prevIdx >= 0 ? trades[prevIdx].bal : 1000.0;
    return slice.map((tr) => ({
      ...tr,
      roi: Number((((tr.bal - baseBal) / baseBal) * 100).toFixed(2)),
    }));
  }, [windowFilter, trades]);

  const points: Array<ClosedTradePoint & { isStart?: boolean }> = useMemo(() => {
    const startBal =
      windowFilter === 'ALL'
        ? 1000.0
        : (() => {
            const firstIdx = trades.findIndex((tr) => tr.n === filtered[0]?.n);
            return firstIdx > 0 ? trades[firstIdx - 1].bal : 1000.0;
          })();
    const startAnchor: ClosedTradePoint & { isStart?: boolean } = {
      n: 0,
      date: WINDOW_CUTOFFS[windowFilter],
      pair: t.startPoint,
      dir: 'LONG',
      tag: 'AI GRID',
      lev: 0,
      pnlPct: 0,
      pnlUsd: 0,
      bal: startBal,
      roi: 0,
      isStart: true,
    };
    return [startAnchor, ...filtered];
  }, [filtered, windowFilter, t.startPoint, trades]);

  const activeIdx = hoverIndex !== null && hoverIndex < points.length ? hoverIndex : points.length - 1;
  const activePoint = points[activeIdx];

  const periodWins = filtered.filter((tr) => tr.pnlUsd > 0).length;
  const periodWinRate = filtered.length ? ((periodWins / filtered.length) * 100).toFixed(1) : '0.0';

  const width = 920;
  const height = 340;
  const padLeft = 62;
  const padRight = 24;
  const padTop = 26;
  const padBottom = 38;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const roiValues = points.map((p) => p.roi);
  const rawMin = Math.min(0, ...roiValues);
  const rawMax = Math.max(10, ...roiValues);
  const padY = (rawMax - rawMin) * 0.12;
  const minY = rawMin - padY;
  const maxY = rawMax + padY;

  const getX = (i: number) => padLeft + (i / Math.max(1, points.length - 1)) * plotW;
  const getY = (roi: number) => padTop + plotH - ((roi - minY) / (maxY - minY)) * plotH;

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getY(p.roi).toFixed(1)}`)
    .join(' ');

  const areaPath = `${linePath} L ${getX(points.length - 1).toFixed(1)} ${(padTop + plotH).toFixed(1)} L ${getX(0).toFixed(1)} ${(padTop + plotH).toFixed(1)} Z`;

  const yTicks = Array.from({ length: 5 }, (_, i) => minY + ((maxY - minY) * i) / 4);
  const xLabelIndices = Array.from({ length: 6 }, (_, i) => Math.round((i / 5) * (points.length - 1)));

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0f1a]/90 p-5 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{t.title}</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-mono text-emerald-300">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              {trades.length} {t.badge}
            </span>
            {isLiveSynced && (
              <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-0.5 text-[10.5px] font-mono text-cyan-300">
                <RefreshCw className="w-2.5 h-2.5" />
                {t.syncLive}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm text-slate-400 max-w-2xl">{t.subtitle}</p>
        </div>

        {/* Timeframe filter pills */}
        <div className="inline-flex self-start lg:self-auto rounded-xl bg-white/[0.04] p-1 border border-white/10">
          {(['30D', '90D', '180D', 'ALL'] as WindowFilter[]).map((key) => {
            const active = windowFilter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setWindowFilter(key);
                  setHoverIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                  active ? 'bg-emerald-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {key === 'ALL' ? t.allLabel : key}
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Trade Inspector Bar */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-3 rounded-xl bg-[#06080f] border border-white/8 p-4">
        <div>
          <div className="text-[11px] font-mono uppercase text-slate-500">{t.selectedTrade}</div>
          <div className="mt-1 text-sm font-mono font-semibold text-white">
            {activePoint.isStart ? (
              <span>{t.startPoint}</span>
            ) : (
              <span>
                #{activePoint.n} · {activePoint.pair}{' '}
                <span className={activePoint.dir === 'LONG' ? 'text-emerald-400' : 'text-cyan-400'}>
                  {activePoint.dir}
                </span>
              </span>
            )}
          </div>
          <div className="text-[11px] font-mono text-slate-500">{formatShortDate(activePoint.date, lang)}</div>
        </div>

        <div>
          <div className="text-[11px] font-mono uppercase text-slate-500">{t.cumulativeRoi}</div>
          <div
            className={`mt-1 text-lg sm:text-xl font-mono font-bold tabular-nums ${
              activePoint.roi >= 0 ? 'text-emerald-400' : 'text-rose-400'
            }`}
          >
            {activePoint.roi >= 0 ? '+' : ''}
            {activePoint.roi.toFixed(2)}%
          </div>
        </div>

        <div>
          <div className="text-[11px] font-mono uppercase text-slate-500">{t.portfolioVal}</div>
          <div className="mt-1 text-lg sm:text-xl font-mono font-semibold text-white tabular-nums">
            ${activePoint.bal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-mono uppercase text-slate-500">{t.tradeResult}</div>
          <div className="mt-1 text-base font-mono font-semibold tabular-nums">
            {activePoint.isStart ? (
              <span className="text-slate-400">—</span>
            ) : (
              <span
                className={`inline-flex items-center gap-0.5 ${
                  activePoint.pnlPct >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {activePoint.pnlPct >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {activePoint.pnlPct >= 0 ? '+' : ''}
                {activePoint.pnlPct.toFixed(2)}%
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-mono uppercase text-slate-500">
            {t.totalClosed} / {t.winRate}
          </div>
          <div className="mt-1 text-base font-mono font-semibold text-cyan-300 tabular-nums">
            {filtered.length} · {periodWinRate}%
          </div>
        </div>
      </div>

      {/* Continuous Closed-Trade Equity SVG */}
      <div className="mt-5 w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full min-w-[640px] h-auto select-none"
          onMouseLeave={() => setHoverIndex(null)}
        >
          <defs>
            <linearGradient id="liveCurveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {yTicks.map((tick, i) => {
            const y = getY(tick);
            return (
              <g key={i}>
                <line
                  x1={padLeft}
                  y1={y}
                  x2={width - padRight}
                  y2={y}
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="4 4"
                />
                <text x={padLeft - 10} y={y + 4} textAnchor="end" className="fill-slate-500 text-[10.5px] font-mono">
                  {tick >= 0 ? `+${Math.round(tick)}%` : `${Math.round(tick)}%`}
                </text>
              </g>
            );
          })}

          <line
            x1={padLeft}
            y1={getY(0)}
            x2={width - padRight}
            y2={getY(0)}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />

          <path d={areaPath} fill="url(#liveCurveGrad)" />
          <path d={linePath} fill="none" stroke="#10b981" strokeWidth="2.6" strokeLinejoin="round" />

          <line
            x1={getX(activeIdx)}
            y1={padTop}
            x2={getX(activeIdx)}
            y2={padTop + plotH}
            stroke="rgba(56,189,248,0.45)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />

          <circle
            cx={getX(activeIdx)}
            cy={getY(activePoint.roi)}
            r="6"
            className="fill-cyan-300 stroke-[#06080f] stroke-2"
          />

          {points.map((pt, i) => {
            const cx = getX(i);
            const sliceW = plotW / Math.max(1, points.length - 1);
            return (
              <rect
                key={`${pt.n}-${i}`}
                x={cx - sliceW / 2}
                y={padTop}
                width={Math.max(4, sliceW)}
                height={plotH + 20}
                fill="transparent"
                className="cursor-crosshair"
                onMouseEnter={() => setHoverIndex(i)}
                onClick={() => setHoverIndex(i)}
              />
            );
          })}

          {xLabelIndices.map((idx, k) => {
            const pt = points[idx];
            if (!pt) return null;
            return (
              <text
                key={`${idx}-${k}`}
                x={getX(idx)}
                y={height - 10}
                textAnchor="middle"
                className="fill-slate-500 text-[10.5px] font-mono"
              >
                {formatAxisDate(pt.date, lang)}
              </text>
            );
          })}
        </svg>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>{t.hoverHint}</span>
        <span>BINANCE FUTURES · ISOLATED USDT-M</span>
      </div>
    </div>
  );
}
