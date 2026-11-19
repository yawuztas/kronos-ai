import { useState } from 'react';
import { Activity, ArrowRight, Calculator, MessageSquare, ShieldCheck } from 'lucide-react';
import { type LiveFeedSummary } from '../hooks/useClosedTrades';
import { TRANSLATIONS, type Lang } from '../i18n';

const CAPITAL_PRESETS = [1000, 2500, 5000, 10000, 25000];

interface EarningsCalculatorProps {
  lang: Lang;
  summary: LiveFeedSummary;
  onOpenCopyModal: () => void;
}

export function EarningsCalculator({ lang, summary, onOpenCopyModal }: EarningsCalculatorProps) {
  const t = TRANSLATIONS[lang].calculator;
  const [capital, setCapital] = useState<number>(5000);
  const [months, setMonths] = useState<number>(12);
  const [modeId, setModeId] = useState<'base' | 'conservative'>('base');

  const mode = t.modes.find((m) => m.id === modeId) ?? t.modes[0];
  const monthlyRate = summary.monthlyCompoundRate * mode.factor;
  const projectedBalance = capital * Math.pow(1 + monthlyRate, months);
  const netProfit = projectedBalance - capital;
  const avgMonthly = netProfit / months;
  const totalReturnPct = (netProfit / capital) * 100;
  const maxDd = summary.maxDrawdownPct * mode.factor;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left: Clean Earnings Calculator */}
      <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0b0f1a]/90 p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            {t.eyebrow}
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.title}</h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t.subtitle}</p>

          {/* Capital Slider + Presets */}
          <div className="mt-7">
            <div className="flex items-baseline justify-between mb-2.5">
              <span className="text-sm text-slate-300">{t.depositLabel}</span>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
                ${capital.toLocaleString('en-US')} <span className="text-sm text-slate-400">USDT</span>
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={capital}
              onChange={(e) => setCapital(parseInt(e.target.value, 10))}
              className="w-full quant-slider"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {CAPITAL_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setCapital(preset)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors cursor-pointer ${
                    capital === preset
                      ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300 font-semibold'
                      : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white'
                  }`}
                >
                  ${preset.toLocaleString('en-US')}
                </button>
              ))}
            </div>
          </div>

          {/* Horizon & Risk Mode */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">{t.horizonLabel}</div>
              <div className="grid grid-cols-3 gap-2">
                {t.horizons.map((h) => (
                  <button
                    key={h.months}
                    type="button"
                    onClick={() => setMonths(h.months)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-mono border transition-colors cursor-pointer ${
                      months === h.months
                        ? 'border-emerald-500/50 bg-emerald-500 text-slate-950 font-semibold'
                        : 'border-white/10 bg-white/[0.03] text-slate-300 hover:text-white'
                    }`}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">{t.modeLabel}</div>
              <div className="grid grid-cols-2 gap-2">
                {t.modes.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setModeId(m.id)}
                    className={`py-2.5 px-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer text-center ${
                      modeId === m.id
                        ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-200 font-semibold'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Result Highlight Panel */}
        <div className="mt-7 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-5 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">{t.estBalance}</div>
              <div className="mt-1 text-xl sm:text-2xl font-mono font-bold text-emerald-300 tabular-nums">
                ${Math.round(projectedBalance).toLocaleString('en-US')}
              </div>
              <div className="text-[11px] font-mono text-emerald-400/90">+{Math.round(totalReturnPct)}%</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">{t.estProfit}</div>
              <div className="mt-1 text-xl font-mono font-semibold text-white tabular-nums">
                +${Math.round(netProfit).toLocaleString('en-US')}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">{t.avgMonthly}</div>
              <div className="mt-1 text-xl font-mono font-semibold text-cyan-300 tabular-nums">
                +${Math.round(avgMonthly).toLocaleString('en-US')}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400">{t.histMaxDd}</div>
              <div className="mt-1 text-xl font-mono font-semibold text-rose-300 tabular-nums">
                -{maxDd.toFixed(1)}%
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400">{mode.desc}</div>
        </div>
      </div>

      {/* Right: Clean Tracking & Copy Guide Launch Card (No Telegram clutter) */}
      <div className="lg:col-span-5 rounded-2xl border border-white/12 bg-gradient-to-b from-[#0e1525] to-[#080c15] p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 text-[11px] font-mono text-cyan-300">
            <Activity className="w-3.5 h-3.5" />
            {t.deskBadge}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white tracking-tight">{t.deskTitle}</h3>
          <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{t.deskDesc}</p>

          <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-[#06080f]/80 p-4 font-mono text-xs">
            {t.deskStats.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-2 py-1 border-b border-white/[0.06] last:border-b-0"
              >
                <span className="text-slate-400">{row.label}</span>
                <span className="text-white font-semibold text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-2.5">
          <button
            type="button"
            onClick={onOpenCopyModal}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3.5 px-5 text-sm transition-colors shadow-[0_10px_28px_rgba(16,185,129,0.25)] cursor-pointer"
          >
            <span>{t.deskCtaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#faq"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-medium py-3 px-5 text-xs sm:text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            {t.deskCtaSecondary}
          </a>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.deskFootnote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
