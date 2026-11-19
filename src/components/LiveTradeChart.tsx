import { useEffect, useState } from 'react';
import { Activity, ArrowDownRight, ArrowUpRight, CandlestickChart, CheckCircle2, Radio } from 'lucide-react';
import { TRANSLATIONS, type Lang } from '../i18n';

type PairKey = 'BTCUSDT' | 'LINKUSDT' | 'SOLUSDT' | 'XRPUSDT';

interface CandlePoint {
  timeEn: string;
  timeTr: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface WinningTradeOverlay {
  id: string;
  direction: 'LONG' | 'SHORT';
  engine: 'AI MACRO' | 'AI GRID';
  leverage: string;
  entryIdx: number;
  exitIdx: number;
  entryPrice: number;
  exitPrice: number;
  durationEn: string;
  durationTr: string;
  pnlUsd: number;
  pnlPct: number;
  exitTag: string;
}

interface PairChartDataset {
  symbol: PairKey;
  label: string;
  decimals: number;
  fallbackPrice: number;
  fallbackChange24h: number;
  candles: CandlePoint[];
  trades: WinningTradeOverlay[];
}

interface LiveTicker {
  price: number;
  change24h: number;
}

const PAIR_DATASETS: Record<PairKey, PairChartDataset> = {
  BTCUSDT: {
    symbol: 'BTCUSDT',
    label: 'BTC/USDT',
    decimals: 1,
    fallbackPrice: 71663.3,
    fallbackChange24h: 2.84,
    candles: [
      { timeEn: 'Oct 14', timeTr: '14 Eki', open: 61800, high: 62500, low: 60900, close: 61420 },
      { timeEn: 'Oct 17', timeTr: '17 Eki', open: 61420, high: 64100, low: 61200, close: 63850 },
      { timeEn: 'Oct 20', timeTr: '20 Eki', open: 63850, high: 66900, low: 63400, close: 66400 },
      { timeEn: 'Oct 23', timeTr: '23 Eki', open: 66400, high: 68800, low: 65900, close: 68150 },
      { timeEn: 'Oct 26', timeTr: '26 Eki', open: 68150, high: 71800, low: 67900, close: 71310 },
      { timeEn: 'Oct 28', timeTr: '28 Eki', open: 71310, high: 75200, low: 70950, close: 74850 },
      { timeEn: 'Oct 29', timeTr: '29 Eki', open: 74850, high: 75300, low: 73400, close: 73900 },
      { timeEn: 'Oct 30', timeTr: '30 Eki', open: 73900, high: 74150, low: 72650, close: 72910 },
      { timeEn: 'Nov 01', timeTr: '01 Kas', open: 72910, high: 76400, low: 72800, close: 76100 },
      { timeEn: 'Nov 03', timeTr: '03 Kas', open: 76100, high: 78450, low: 75800, close: 77962.6 },
      { timeEn: 'Nov 05', timeTr: '05 Kas', open: 77962.6, high: 78100, low: 75200, close: 75650 },
      { timeEn: 'Nov 07', timeTr: '07 Kas', open: 75650, high: 76150, low: 74100, close: 74400 },
      { timeEn: 'Nov 09', timeTr: '09 Kas', open: 74400, high: 74700, low: 72900, close: 73250 },
      { timeEn: 'Nov 11', timeTr: '11 Kas', open: 73250, high: 73600, low: 71900, close: 72250 },
      { timeEn: 'Nov 13', timeTr: '13 Kas', open: 72250, high: 72600, low: 71350, close: 71663.3 },
      { timeEn: 'Nov 15', timeTr: '15 Kas', open: 71663.3, high: 72900, low: 71400, close: 72480 },
    ],
    trades: [
      {
        id: 'BTC-1',
        direction: 'SHORT',
        engine: 'AI MACRO',
        leverage: '4.0x',
        entryIdx: 9,
        exitIdx: 14,
        entryPrice: 77962.6,
        exitPrice: 71663.3,
        durationEn: '13d 20h',
        durationTr: '13g 20s',
        pnlUsd: 452.77,
        pnlPct: 33.26,
        exitTag: 'AI_MACRO_TRAIL',
      },
      {
        id: 'BTC-2',
        direction: 'LONG',
        engine: 'AI MACRO',
        leverage: '4.0x',
        entryIdx: 0,
        exitIdx: 4,
        entryPrice: 61420.0,
        exitPrice: 71310.0,
        durationEn: '12d 00h',
        durationTr: '12g 00s',
        pnlUsd: 634.96,
        pnlPct: 59.65,
        exitTag: 'AI_MACRO_TRAIL',
      },
      {
        id: 'BTC-3',
        direction: 'SHORT',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 5,
        exitIdx: 7,
        entryPrice: 74850.0,
        exitPrice: 72910.0,
        durationEn: '1d 14h',
        durationTr: '1g 14s',
        pnlUsd: 184.78,
        pnlPct: 15.54,
        exitTag: 'AI_TARGET_FINAL',
      },
    ],
  },
  LINKUSDT: {
    symbol: 'LINKUSDT',
    label: 'LINK/USDT',
    decimals: 3,
    fallbackPrice: 11.61,
    fallbackChange24h: 4.12,
    candles: [
      { timeEn: 'Oct 22', timeTr: '22 Eki', open: 11.35, high: 11.55, low: 11.02, close: 11.12 },
      { timeEn: 'Oct 24', timeTr: '24 Eki', open: 11.12, high: 11.42, low: 11.08, close: 11.36 },
      { timeEn: 'Oct 26', timeTr: '26 Eki', open: 11.36, high: 11.69, low: 11.3, close: 11.61 },
      { timeEn: 'Oct 28', timeTr: '28 Eki', open: 11.61, high: 12.18, low: 11.58, close: 12.05 },
      { timeEn: 'Oct 30', timeTr: '30 Eki', open: 12.05, high: 12.56, low: 11.98, close: 12.48 },
      { timeEn: 'Nov 01', timeTr: '01 Kas', open: 12.48, high: 12.52, low: 12.12, close: 12.22 },
      { timeEn: 'Nov 02', timeTr: '02 Kas', open: 12.22, high: 12.28, low: 11.84, close: 11.91 },
      { timeEn: 'Nov 03', timeTr: '03 Kas', open: 11.91, high: 11.95, low: 11.15, close: 11.24 },
      { timeEn: 'Nov 04', timeTr: '04 Kas', open: 11.24, high: 11.3, low: 10.72, close: 10.853 },
      { timeEn: 'Nov 05', timeTr: '05 Kas', open: 10.853, high: 11.18, low: 10.8, close: 11.12 },
      { timeEn: 'Nov 06', timeTr: '06 Kas', open: 11.12, high: 11.41, low: 11.08, close: 11.35 },
      { timeEn: 'Nov 07', timeTr: '07 Kas', open: 11.35, high: 11.62, low: 11.28, close: 11.545 },
      { timeEn: 'Nov 09', timeTr: '09 Kas', open: 11.545, high: 11.78, low: 11.4, close: 11.68 },
      { timeEn: 'Nov 11', timeTr: '11 Kas', open: 11.68, high: 11.82, low: 11.48, close: 11.52 },
      { timeEn: 'Nov 13', timeTr: '13 Kas', open: 11.52, high: 11.74, low: 11.44, close: 11.69 },
    ],
    trades: [
      {
        id: 'LINK-1',
        direction: 'LONG',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 8,
        exitIdx: 11,
        entryPrice: 10.853,
        exitPrice: 11.545,
        durationEn: '13h',
        durationTr: '13s',
        pnlUsd: 231.81,
        pnlPct: 37.56,
        exitTag: 'AI_TARGET_FINAL',
      },
      {
        id: 'LINK-2',
        direction: 'SHORT',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 4,
        exitIdx: 6,
        entryPrice: 12.48,
        exitPrice: 11.91,
        durationEn: '1d 08h',
        durationTr: '1g 08s',
        pnlUsd: 184.78,
        pnlPct: 35.89,
        exitTag: 'AI_TARGET_FINAL',
      },
      {
        id: 'LINK-3',
        direction: 'LONG',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 0,
        exitIdx: 2,
        entryPrice: 11.12,
        exitPrice: 11.61,
        durationEn: '19h',
        durationTr: '19s',
        pnlUsd: 194.5,
        pnlPct: 42.12,
        exitTag: 'NEURAL_APEX_LOCK',
      },
    ],
  },
  SOLUSDT: {
    symbol: 'SOLUSDT',
    label: 'SOL/USDT',
    decimals: 2,
    fallbackPrice: 102.65,
    fallbackChange24h: 3.45,
    candles: [
      { timeEn: 'Oct 22', timeTr: '22 Eki', open: 108.5, high: 111.2, low: 107.8, close: 110.4 },
      { timeEn: 'Oct 24', timeTr: '24 Eki', open: 110.4, high: 113.1, low: 109.9, close: 112.4 },
      { timeEn: 'Oct 26', timeTr: '26 Eki', open: 112.4, high: 112.8, low: 109.1, close: 109.6 },
      { timeEn: 'Oct 28', timeTr: '28 Eki', open: 109.6, high: 110.2, low: 106.3, close: 106.85 },
      { timeEn: 'Oct 30', timeTr: '30 Eki', open: 106.85, high: 107.3, low: 101.5, close: 102.4 },
      { timeEn: 'Nov 01', timeTr: '01 Kas', open: 102.4, high: 102.9, low: 96.2, close: 97.1 },
      { timeEn: 'Nov 02', timeTr: '02 Kas', open: 97.1, high: 97.5, low: 92.8, close: 93.49 },
      { timeEn: 'Nov 03', timeTr: '03 Kas', open: 93.49, high: 95.1, low: 93.1, close: 94.6 },
      { timeEn: 'Nov 04', timeTr: '04 Kas', open: 94.6, high: 95.8, low: 94.1, close: 95.18 },
      { timeEn: 'Nov 06', timeTr: '06 Kas', open: 95.18, high: 98.9, low: 95.0, close: 98.2 },
      { timeEn: 'Nov 08', timeTr: '08 Kas', open: 98.2, high: 100.4, low: 97.6, close: 99.85 },
      { timeEn: 'Nov 10', timeTr: '10 Kas', open: 99.85, high: 102.1, low: 99.2, close: 101.4 },
      { timeEn: 'Nov 12', timeTr: '12 Kas', open: 101.4, high: 103.2, low: 100.9, close: 102.65 },
      { timeEn: 'Nov 14', timeTr: '14 Kas', open: 102.65, high: 104.1, low: 101.5, close: 103.1 },
    ],
    trades: [
      {
        id: 'SOL-1',
        direction: 'SHORT',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 1,
        exitIdx: 3,
        entryPrice: 112.4,
        exitPrice: 106.85,
        durationEn: '1d 16h',
        durationTr: '1g 16s',
        pnlUsd: 146.58,
        pnlPct: 21.67,
        exitTag: 'AI_TARGET_FINAL',
      },
      {
        id: 'SOL-2',
        direction: 'LONG',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 6,
        exitIdx: 8,
        entryPrice: 93.49,
        exitPrice: 95.18,
        durationEn: '1d 23h',
        durationTr: '1g 23s',
        pnlUsd: 60.69,
        pnlPct: 9.88,
        exitTag: 'AI_TARGET_FINAL',
      },
      {
        id: 'SOL-3',
        direction: 'LONG',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 9,
        exitIdx: 12,
        entryPrice: 98.2,
        exitPrice: 102.65,
        durationEn: '2d 04h',
        durationTr: '2g 04s',
        pnlUsd: 113.68,
        pnlPct: 20.14,
        exitTag: 'NEURAL_APEX_LOCK',
      },
    ],
  },
  XRPUSDT: {
    symbol: 'XRPUSDT',
    label: 'XRP/USDT',
    decimals: 4,
    fallbackPrice: 1.2416,
    fallbackChange24h: 1.62,
    candles: [
      { timeEn: 'Oct 25', timeTr: '25 Eki', open: 1.365, high: 1.384, low: 1.358, close: 1.379 },
      { timeEn: 'Oct 27', timeTr: '27 Eki', open: 1.379, high: 1.398, low: 1.374, close: 1.391 },
      { timeEn: 'Oct 28', timeTr: '28 Eki', open: 1.391, high: 1.393, low: 1.371, close: 1.376 },
      { timeEn: 'Oct 29', timeTr: '29 Eki', open: 1.376, high: 1.38, low: 1.362, close: 1.3672 },
      { timeEn: 'Oct 31', timeTr: '31 Eki', open: 1.3672, high: 1.369, low: 1.285, close: 1.292 },
      { timeEn: 'Nov 01', timeTr: '01 Kas', open: 1.292, high: 1.296, low: 1.248, close: 1.258 },
      { timeEn: 'Nov 02', timeTr: '02 Kas', open: 1.258, high: 1.264, low: 1.249, close: 1.2543 },
      { timeEn: 'Nov 03', timeTr: '03 Kas', open: 1.2543, high: 1.256, low: 1.238, close: 1.2416 },
      { timeEn: 'Nov 05', timeTr: '05 Kas', open: 1.2416, high: 1.245, low: 1.198, close: 1.204 },
      { timeEn: 'Nov 07', timeTr: '07 Kas', open: 1.204, high: 1.208, low: 1.174, close: 1.182 },
      { timeEn: 'Nov 09', timeTr: '09 Kas', open: 1.182, high: 1.204, low: 1.179, close: 1.199 },
      { timeEn: 'Nov 11', timeTr: '11 Kas', open: 1.199, high: 1.224, low: 1.196, close: 1.2195 },
      { timeEn: 'Nov 13', timeTr: '13 Kas', open: 1.2195, high: 1.235, low: 1.212, close: 1.228 },
    ],
    trades: [
      {
        id: 'XRP-1',
        direction: 'SHORT',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 1,
        exitIdx: 3,
        entryPrice: 1.391,
        exitPrice: 1.3672,
        durationEn: '1d 11h',
        durationTr: '1g 11s',
        pnlUsd: 120.42,
        pnlPct: 20.36,
        exitTag: 'NEURAL_APEX_LOCK',
      },
      {
        id: 'XRP-2',
        direction: 'SHORT',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 6,
        exitIdx: 7,
        entryPrice: 1.2543,
        exitPrice: 1.2416,
        durationEn: '4h',
        durationTr: '4s',
        pnlUsd: 82.9,
        pnlPct: 7.56,
        exitTag: 'AI_TARGET_FINAL',
      },
      {
        id: 'XRP-3',
        direction: 'LONG',
        engine: 'AI GRID',
        leverage: '6.0x',
        entryIdx: 9,
        exitIdx: 11,
        entryPrice: 1.182,
        exitPrice: 1.2195,
        durationEn: '1d 06h',
        durationTr: '1g 06s',
        pnlUsd: 100.86,
        pnlPct: 11.78,
        exitTag: 'AI_TARGET_FINAL',
      },
    ],
  },
};

const PAIR_ORDER: PairKey[] = ['BTCUSDT', 'LINKUSDT', 'SOLUSDT', 'XRPUSDT'];

export function LiveTradeChart({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang].liveChart;
  const [selectedPair, setSelectedPair] = useState<PairKey>('BTCUSDT');
  const [selectedTradeIdx, setSelectedTradeIdx] = useState<number>(0);
  const [liveTickers, setLiveTickers] = useState<Record<PairKey, LiveTicker>>({
    BTCUSDT: { price: PAIR_DATASETS.BTCUSDT.fallbackPrice, change24h: PAIR_DATASETS.BTCUSDT.fallbackChange24h },
    LINKUSDT: { price: PAIR_DATASETS.LINKUSDT.fallbackPrice, change24h: PAIR_DATASETS.LINKUSDT.fallbackChange24h },
    SOLUSDT: { price: PAIR_DATASETS.SOLUSDT.fallbackPrice, change24h: PAIR_DATASETS.SOLUSDT.fallbackChange24h },
    XRPUSDT: { price: PAIR_DATASETS.XRPUSDT.fallbackPrice, change24h: PAIR_DATASETS.XRPUSDT.fallbackChange24h },
  });
  const [feedLive, setFeedLive] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchBinanceTickers() {
      try {
        const res = await fetch(
          'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","LINKUSDT","SOLUSDT","XRPUSDT"]'
        );
        if (!res.ok) return;
        const json = (await res.json()) as Array<{ symbol: string; lastPrice: string; priceChangePercent: string }>;
        if (cancelled || !Array.isArray(json)) return;
        setLiveTickers((prev) => {
          const next = { ...prev };
          for (const item of json) {
            if (item.symbol in next) {
              const key = item.symbol as PairKey;
              next[key] = {
                price: parseFloat(item.lastPrice),
                change24h: parseFloat(item.priceChangePercent),
              };
            }
          }
          return next;
        });
        setFeedLive(true);
      } catch {
        // Fallback prices remain active if offline
      }
    }

    fetchBinanceTickers();
    const interval = setInterval(fetchBinanceTickers, 10000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const dataset = PAIR_DATASETS[selectedPair];
  const activeTrade = dataset.trades[selectedTradeIdx] ?? dataset.trades[0];
  const candles = dataset.candles;

  const width = 880;
  const height = 340;
  const padLeft = 68;
  const padRight = 32;
  const padTop = 36;
  const padBottom = 38;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const rawMin = Math.min(...candles.map((c) => c.low));
  const rawMax = Math.max(...candles.map((c) => c.high));
  const margin = (rawMax - rawMin) * 0.14;
  const minPrice = rawMin - margin;
  const maxPrice = rawMax + margin;

  const getX = (idx: number) => padLeft + ((idx + 0.5) / candles.length) * plotW;
  const getY = (price: number) => padTop + plotH - ((price - minPrice) / (maxPrice - minPrice)) * plotH;

  const yTicks = Array.from({ length: 5 }, (_, i) => minPrice + ((maxPrice - minPrice) * i) / 4);
  const priceLinePath = candles
    .map((c, i) => `${i === 0 ? 'M' : 'L'} ${getX(i).toFixed(1)} ${getY(c.close).toFixed(1)}`)
    .join(' ');

  const entryX = getX(activeTrade.entryIdx);
  const entryY = getY(activeTrade.entryPrice);
  const exitX = getX(activeTrade.exitIdx);
  const exitY = getY(activeTrade.exitPrice);

  const fmtPrice = (val: number, decimals: number) =>
    `$${val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0f1a]/90 p-5 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <CandlestickChart className="w-4 h-4" />
            {t.eyebrow}
          </div>
          <h2 className="mt-1.5 text-xl sm:text-2xl font-semibold text-white">{t.title}</h2>
          <p className="mt-1 text-sm text-slate-400">{t.subtitle}</p>
        </div>

        <div className="inline-flex items-center gap-2 self-start lg:self-auto px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
          <Radio className={`w-3.5 h-3.5 ${feedLive ? 'text-emerald-400 animate-pulse' : 'text-cyan-400'}`} />
          <span className="text-slate-300">{feedLive ? t.liveConnected : t.liveReference}</span>
        </div>
      </div>

      {/* Live 4-Pair Price Cards */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {PAIR_ORDER.map((key) => {
          const d = PAIR_DATASETS[key];
          const ticker = liveTickers[key];
          const active = key === selectedPair;
          const isUp = ticker.change24h >= 0;
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                setSelectedPair(key);
                setSelectedTradeIdx(0);
              }}
              className={`text-left rounded-xl p-3.5 border transition-all cursor-pointer ${
                active
                  ? 'border-emerald-500/50 bg-emerald-500/10'
                  : 'border-white/10 bg-white/[0.025] hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono font-bold text-sm text-white">{d.label}</span>
                <span
                  className={`inline-flex items-center gap-0.5 text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded ${
                    isUp ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'
                  }`}
                >
                  {isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {isUp ? '+' : ''}
                  {ticker.change24h.toFixed(2)}%
                </span>
              </div>
              <div className="mt-2 text-lg sm:text-xl font-mono font-bold text-white tabular-nums">
                {fmtPrice(ticker.price, d.decimals)}
              </div>
              <div className="mt-1 text-[11px] font-mono text-slate-400">
                {d.trades.length} {t.highlightedWins}
              </div>
            </button>
          );
        })}
      </div>

      {/* Candlestick Chart with Trade Markers */}
      <div className="mt-6 rounded-xl border border-white/10 bg-[#06080f] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-2 border-b border-white/8 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-sm">{dataset.label}</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              {activeTrade.direction} {activeTrade.leverage} · {activeTrade.engine}
            </span>
            <span className="text-slate-400 hidden sm:inline">
              {t.duration}: {lang === 'tr' ? activeTrade.durationTr : activeTrade.durationEn}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">
              {t.entry}: <strong className="text-white">{fmtPrice(activeTrade.entryPrice, dataset.decimals)}</strong> ➔{' '}
              {t.exit}: <strong className="text-emerald-300">{fmtPrice(activeTrade.exitPrice, dataset.decimals)}</strong>
            </span>
            <span className="text-emerald-400 font-bold">+{activeTrade.pnlPct.toFixed(2)}%</span>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[640px] h-auto select-none">
            <defs>
              <linearGradient id="tradeZoneGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {yTicks.map((tick, idx) => {
              const y = getY(tick);
              return (
                <g key={idx}>
                  <line
                    x1={padLeft}
                    y1={y}
                    x2={width - padRight}
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                  />
                  <text x={padLeft - 10} y={y + 4} textAnchor="end" className="fill-slate-500 text-[10.5px] font-mono">
                    {fmtPrice(tick, dataset.decimals > 2 ? 2 : dataset.decimals === 1 ? 0 : 2)}
                  </text>
                </g>
              );
            })}

            <rect
              x={entryX}
              y={padTop}
              width={Math.max(12, exitX - entryX)}
              height={plotH}
              fill="url(#tradeZoneGrad)"
            />

            <path d={priceLinePath} fill="none" stroke="rgba(148,163,184,0.22)" strokeWidth="1.5" />

            {candles.map((c, i) => {
              const cx = getX(i);
              const isBull = c.close >= c.open;
              const candleW = Math.min(18, (plotW / candles.length) * 0.48);
              const highY = getY(c.high);
              const lowY = getY(c.low);
              const openY = getY(c.open);
              const closeY = getY(c.close);
              const bodyTop = Math.min(openY, closeY);
              const bodyH = Math.max(3, Math.abs(closeY - openY));

              return (
                <g key={c.timeEn}>
                  <line
                    x1={cx}
                    y1={highY}
                    x2={cx}
                    y2={lowY}
                    stroke={isBull ? '#10b981' : '#f43f5e'}
                    strokeWidth="1.5"
                    opacity="0.85"
                  />
                  <rect
                    x={cx - candleW / 2}
                    y={bodyTop}
                    width={candleW}
                    height={bodyH}
                    rx={2}
                    fill={isBull ? '#10b981' : '#f43f5e'}
                    opacity="0.9"
                  />
                  <text x={cx} y={height - 12} textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">
                    {lang === 'tr' ? c.timeTr : c.timeEn}
                  </text>
                </g>
              );
            })}

            {dataset.trades.map((tr, tIdx) => {
              if (tIdx === selectedTradeIdx) return null;
              const tx = getX(tr.entryIdx);
              const ty = getY(tr.entryPrice);
              return (
                <g
                  key={tr.id}
                  className="cursor-pointer opacity-70 hover:opacity-100"
                  onClick={() => setSelectedTradeIdx(tIdx)}
                >
                  <circle cx={tx} cy={ty} r="6" fill="#06080f" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx={tx} cy={ty} r="2.5" fill="#38bdf8" />
                </g>
              );
            })}

            <line
              x1={entryX}
              y1={entryY}
              x2={exitX}
              y2={exitY}
              stroke="#34d399"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />

            <g>
              <circle cx={entryX} cy={entryY} r="8" fill="#06080f" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx={entryX} cy={entryY} r="3.5" fill="#38bdf8" />
              <g transform={`translate(${Math.max(padLeft + 4, entryX - 58)}, ${Math.max(padTop + 4, entryY - 34)})`}>
                <rect width="116" height="22" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
                <text x="58" y="14.5" textAnchor="middle" className="fill-cyan-300 text-[10px] font-mono font-bold">
                  {t.entryBadge} · {activeTrade.direction}
                </text>
              </g>
            </g>

            <g>
              <circle cx={exitX} cy={exitY} r="9" fill="#06080f" stroke="#10b981" strokeWidth="3" />
              <circle cx={exitX} cy={exitY} r="4" fill="#10b981" />
              <g
                transform={`translate(${Math.min(width - padRight - 134, Math.max(padLeft + 4, exitX - 66))}, ${
                  exitY + 14 > padTop + plotH - 26 ? exitY - 36 : exitY + 14
                })`}
              >
                <rect width="132" height="24" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1.3" />
                <text x="66" y="15.5" textAnchor="middle" className="fill-emerald-200 text-[10.5px] font-mono font-bold">
                  {t.tpBadge} +{activeTrade.pnlPct.toFixed(1)}% (+${activeTrade.pnlUsd.toFixed(0)})
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Clickable Winning Trade Selector Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {dataset.trades.map((tr, idx) => {
          const isSelected = idx === selectedTradeIdx;
          return (
            <button
              key={tr.id}
              type="button"
              onClick={() => setSelectedTradeIdx(idx)}
              className={`text-left rounded-xl p-4 border transition-all cursor-pointer ${
                isSelected
                  ? 'border-emerald-500/50 bg-emerald-500/10'
                  : 'border-white/10 bg-white/[0.025] hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-cyan-400'}`} />
                  {tr.direction} {tr.leverage} · {tr.engine}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {lang === 'tr' ? tr.durationTr : tr.durationEn}
                </span>
              </div>

              <div className="mt-2.5 flex items-baseline justify-between font-mono tabular-nums">
                <span className="text-xs text-slate-400">
                  {fmtPrice(tr.entryPrice, dataset.decimals)} ➔ {fmtPrice(tr.exitPrice, dataset.decimals)}
                </span>
                <span className="text-sm font-bold text-emerald-400">+{tr.pnlPct.toFixed(2)}%</span>
              </div>

              <div className="mt-1.5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">{tr.exitTag}</span>
                <span className="text-emerald-300 inline-flex items-center gap-0.5">
                  <Activity className="w-3 h-3" />
                  +${tr.pnlUsd.toFixed(2)}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
