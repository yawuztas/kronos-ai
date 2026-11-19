import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Brain,
  Calculator,
  Layers,
  Newspaper,
  Radio,
  Shield,
  Sparkles,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { type ClosedTradePoint, TELEMETRY_PULSE } from '../data/closedTrades';
import { type LiveFeedSummary } from '../hooks/useClosedTrades';
import { TRANSLATIONS, type Lang } from '../i18n';

export type PageId = 'home' | 'performance' | 'technology' | 'invest';

interface HomePageProps {
  lang: Lang;
  trades: ClosedTradePoint[];
  summary: LiveFeedSummary;
  onNavigate: (page: PageId) => void;
  onOpenCopyModal: () => void;
}

const ORBIT_AGENTS = [
  { id: 'MACRO', x: 200, y: 42, color: '#22d3ee', labelEn: 'MACRO', labelTr: 'MAKRO', labelZh: '宏观' },
  { id: 'GRID', x: 344, y: 128, color: '#34d399', labelEn: 'GRID', labelTr: 'GRİD', labelZh: '网格' },
  { id: 'AEGIS', x: 312, y: 274, color: '#fb7185', labelEn: 'AEGIS', labelTr: 'KALKAN', labelZh: '护盾' },
  { id: 'TREASURY', x: 88, y: 274, color: '#fbbf24', labelEn: 'WALLET', labelTr: 'CÜZDAN', labelZh: '资金' },
  { id: 'NEWS', x: 56, y: 128, color: '#a78bfa', labelEn: 'NEWS AI', labelTr: 'HABER AI', labelZh: '资讯 AI' },
];

export function HomePage({ lang, trades, summary, onNavigate, onOpenCopyModal }: HomePageProps) {
  const t = TRANSLATIONS[lang];
  const h = t.home;
  const [activeAgentIdx, setActiveAgentIdx] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAgentIdx((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // Build crisp mini equity SVG path from real closed trades
  const miniW = 540;
  const miniH = 140;
  const miniPoints = [{ roi: 0 }, ...trades.map((tr) => ({ roi: tr.roi }))];
  const maxRoi = Math.max(20, ...miniPoints.map((p) => p.roi));
  const minRoi = Math.min(0, ...miniPoints.map((p) => p.roi));
  const getMiniX = (i: number) => 8 + (i / Math.max(1, miniPoints.length - 1)) * (miniW - 16);
  const getMiniY = (roi: number) => miniH - 12 - ((roi - minRoi) / Math.max(1, maxRoi - minRoi)) * (miniH - 24);
  const miniLine = miniPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getMiniX(i).toFixed(1)} ${getMiniY(p.roi).toFixed(1)}`)
    .join(' ');
  const miniArea = `${miniLine} L ${getMiniX(miniPoints.length - 1).toFixed(1)} ${miniH} L ${getMiniX(0).toFixed(1)} ${miniH} Z`;

  const activePulse = TELEMETRY_PULSE[activeAgentIdx % TELEMETRY_PULSE.length];
  const pulseRegime =
    lang === 'en' ? activePulse.regimeEn : lang === 'tr' ? activePulse.regimeTr : activePulse.regimeZh;

  const sampleCaps = [1000, 5000, 10000];
  const agentMiniIcons = [TrendingUp, Layers, Shield, Wallet, Newspaper];
  const agentDotColors = ['bg-cyan-400', 'bg-emerald-400', 'bg-rose-400', 'bg-amber-400', 'bg-violet-400'];

  return (
    <div className="space-y-12 pb-16">
      {/* CINEMATIC HERO */}
      <section className="pt-10 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Monumental Slogan & Fast-Win Hook */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{h.pill}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.05]">
              {h.headlineTop}
              <span className="block mt-2 text-emerald-400">{h.headlineAccent}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">{h.subline}</p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenCopyModal}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3.5 text-sm transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <span>{h.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('performance')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-white font-medium px-5 py-3.5 text-sm transition-colors cursor-pointer"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>{h.ctaSecondary}</span>
              </button>
            </div>
          </div>

          {/* Right: Animated 5-Agent Neural Network Schematic */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-[#0a0f1c]/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.65)] relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono pb-3 border-b border-white/10">
                <span className="text-slate-300 font-semibold flex items-center gap-2">
                  <Brain className="w-4 h-4 text-emerald-400" />
                  {h.networkTitle}
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <Radio className="w-3 h-3 animate-pulse" />
                  {h.networkSub}
                </span>
              </div>

              {/* Radial 5-Agent SVG Schematic */}
              <div className="my-2">
                <svg viewBox="0 0 400 320" className="w-full h-auto select-none">
                  <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Outer Orbit Ring */}
                  <circle
                    cx="200"
                    cy="168"
                    r="122"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  <circle cx="200" cy="168" r="88" fill="url(#coreGlow)" />

                  {/* Animated Data Conduits from 5 Agents to Center Core */}
                  {ORBIT_AGENTS.map((node, idx) => {
                    const isActive = idx === activeAgentIdx;
                    return (
                      <line
                        key={node.id}
                        x1={node.x}
                        y1={node.y}
                        x2="200"
                        y2="168"
                        stroke={isActive ? node.color : 'rgba(148,163,184,0.22)'}
                        strokeWidth={isActive ? 2.2 : 1.2}
                        strokeDasharray="6 8"
                        className={isActive ? 'animate-dash-flow' : ''}
                      />
                    );
                  })}

                  {/* Center KRONOS AI Core */}
                  <g>
                    <circle cx="200" cy="168" r="44" fill="#06080f" stroke="#10b981" strokeWidth="2" />
                    <circle
                      cx="200"
                      cy="168"
                      r="52"
                      fill="none"
                      stroke="rgba(16,185,129,0.28)"
                      strokeWidth="1"
                    />
                    <text
                      x="200"
                      y="163"
                      textAnchor="middle"
                      className="fill-white text-[12px] font-mono font-bold tracking-wider"
                    >
                      KRONOS
                    </text>
                    <text
                      x="200"
                      y="179"
                      textAnchor="middle"
                      className="fill-emerald-400 text-[10px] font-mono font-semibold"
                    >
                      +{summary.cumulativeRoi.toFixed(0)}%
                    </text>
                  </g>

                  {/* 5 Orbiting Agent Nodes */}
                  {ORBIT_AGENTS.map((node, idx) => {
                    const isActive = idx === activeAgentIdx;
                    const label = lang === 'en' ? node.labelEn : lang === 'tr' ? node.labelTr : node.labelZh;
                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer"
                        onClick={() => setActiveAgentIdx(idx)}
                      >
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isActive ? 30 : 25}
                          fill="#06080f"
                          stroke={node.color}
                          strokeWidth={isActive ? 2.4 : 1.3}
                          opacity={isActive ? 1 : 0.78}
                        />
                        <text
                          x={node.x}
                          y={node.y - 2}
                          textAnchor="middle"
                          className="fill-slate-400 text-[8.5px] font-mono"
                        >
                          0{idx + 1}
                        </text>
                        <text
                          x={node.x}
                          y={node.y + 10}
                          textAnchor="middle"
                          fill={isActive ? '#ffffff' : '#cbd5e1'}
                          className="text-[9.5px] font-mono font-bold"
                        >
                          {label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Live Active Agent Telemetry Pill */}
              <div className="rounded-xl bg-[#06080f] border border-white/10 px-4 py-3 flex items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-white font-semibold truncate">{activePulse.pair}</span>
                  <span className="text-slate-500 hidden sm:inline">·</span>
                  <span className="text-cyan-300 truncate hidden sm:inline">{pulseRegime}</span>
                </div>
                <span className="text-emerald-400 font-semibold shrink-0">{activePulse.score}/100 AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONUMENTAL 4-METRIC PROOF STRIP */}
      <section className="rounded-2xl border border-white/10 bg-[#0b0f1a]/80 p-5 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="lg:border-r lg:border-white/10 lg:pr-5">
          <div className="text-xs font-mono text-slate-400">{t.hero.kpiRoiLabel}</div>
          <div className="mt-1 text-3xl sm:text-4xl font-mono font-bold text-emerald-400 tabular-nums">
            +{summary.cumulativeRoi.toFixed(1)}%
          </div>
          <div className="mt-0.5 text-xs font-mono text-slate-500">{t.hero.kpiRoiSub}</div>
        </div>
        <div className="lg:border-r lg:border-white/10 lg:pr-5">
          <div className="text-xs font-mono text-slate-400">{t.hero.kpiWinLabel}</div>
          <div className="mt-1 text-3xl sm:text-4xl font-mono font-bold text-white tabular-nums">
            {summary.winRate}%
          </div>
          <div className="mt-0.5 text-xs font-mono text-slate-500">
            {summary.closedTrades} {t.hero.kpiWinSub}
          </div>
        </div>
        <div className="lg:border-r lg:border-white/10 lg:pr-5">
          <div className="text-xs font-mono text-slate-400">{t.hero.kpiDdLabel}</div>
          <div className="mt-1 text-3xl sm:text-4xl font-mono font-bold text-cyan-300 tabular-nums">
            {summary.maxDrawdownPct}%
          </div>
          <div className="mt-0.5 text-xs font-mono text-slate-500">{t.hero.kpiDdSub}</div>
        </div>
        <div>
          <div className="text-xs font-mono text-slate-400">{t.hero.kpiPfLabel}</div>
          <div className="mt-1 text-3xl sm:text-4xl font-mono font-bold text-white tabular-nums">
            {summary.profitFactor}
          </div>
          <div className="mt-0.5 text-xs font-mono text-slate-500">{t.hero.kpiPfSub}</div>
        </div>
      </section>

      {/* ASYMMETRIC VISUAL PORTALS INTO PERFORMANCE & TECHNOLOGY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Portal 1: Live Equity Preview -> Performance Page */}
        <div
          onClick={() => onNavigate('performance')}
          className="lg:col-span-7 group rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-[#0b0f1a]/90 p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                {h.portalPerfTag}
              </span>
              <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                $1,000 ➔ ${summary.endingBalance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>
            <h2 className="mt-2.5 text-2xl sm:text-3xl font-bold text-white tracking-tight">{h.portalPerfTitle}</h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">{h.portalPerfDesc}</p>

            {/* Real Mini Equity Curve Preview */}
            <div className="mt-5 rounded-xl bg-[#06080f] border border-white/8 p-3 overflow-hidden">
              <svg viewBox={`0 0 ${miniW} ${miniH}`} className="w-full h-32">
                <defs>
                  <linearGradient id="miniAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={miniArea} fill="url(#miniAreaGrad)" />
                <path d={miniLine} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round" />
                <circle
                  cx={getMiniX(miniPoints.length - 1)}
                  cy={getMiniY(miniPoints[miniPoints.length - 1].roi)}
                  r="5"
                  className="fill-cyan-300 stroke-[#06080f] stroke-2"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
            <span>{h.portalPerfBtn}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Portal 2: 5-Agent Swarm Preview -> Technology Page */}
        <div
          onClick={() => onNavigate('technology')}
          className="lg:col-span-5 group rounded-2xl border border-white/10 hover:border-cyan-500/40 bg-[#0b0f1a]/90 p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">{h.portalTechTag}</span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl font-bold text-white tracking-tight">{h.portalTechTitle}</h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{h.portalTechDesc}</p>

            {/* Compact 5-Agent Status Stack */}
            <div className="mt-5 space-y-2">
              {t.agents.list.map((agent, idx) => {
                const Icon = agentMiniIcons[idx];
                return (
                  <div
                    key={agent.code}
                    className="flex items-center justify-between gap-2 rounded-lg bg-[#06080f] border border-white/8 px-3 py-2 text-xs font-mono"
                  >
                    <span className="flex items-center gap-2 text-slate-200 truncate">
                      <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{agent.title}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-300 shrink-0">
                      <span className={`w-1.5 h-1.5 rounded-full ${agentDotColors[idx]}`} />
                      ONLINE
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
            <span>{h.portalTechBtn}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </section>

      {/* COMPOUNDING CURIOSITY HOOK -> INVEST & Q&A PAGE */}
      <section className="rounded-2xl border border-emerald-500/25 bg-gradient-to-r from-[#0c1626] via-[#0b1322] to-[#08121d] p-6 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {t.calculator.eyebrow}
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">{h.hookTitle}</h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{h.hookSub}</p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 shrink-0">
            {sampleCaps.map((cap) => {
              const est1y = cap * Math.pow(1 + summary.monthlyCompoundRate, 12);
              return (
                <button
                  key={cap}
                  type="button"
                  onClick={() => onNavigate('invest')}
                  className="rounded-xl border border-white/10 hover:border-emerald-500/45 bg-[#06080f]/90 p-3.5 text-left transition-colors cursor-pointer"
                >
                  <div className="text-[11px] font-mono text-slate-400">${cap.toLocaleString('en-US')}</div>
                  <div className="mt-1 text-base sm:text-lg font-mono font-bold text-emerald-400 tabular-nums">
                    ${Math.round(est1y).toLocaleString('en-US')}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">{h.perYear}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('invest')}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-5 py-3 text-sm transition-colors cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>{h.hookBtnCalc}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenCopyModal}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 text-sm transition-colors cursor-pointer"
          >
            <span>{h.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
