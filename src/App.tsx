import { useCallback, useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Globe,
  Layers,
  Newspaper,
  Shield,
  TrendingUp,
  Wallet,
  Wrench,
} from 'lucide-react';
import { useClosedTrades } from './hooks/useClosedTrades';
import { TRANSLATIONS, type Lang } from './i18n';
import { HomePage, type PageId } from './components/HomePage';
import { ClosedTradesChart } from './components/ClosedTradesChart';
import { LiveTradeChart } from './components/LiveTradeChart';
import { EarningsCalculator } from './components/EarningsCalculator';
import { QuestionDesk } from './components/QuestionDesk';
import { CopyGuideModal } from './components/CopyGuideModal';

function parseHashToPage(hash: string): PageId {
  const clean = hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();
  if (clean === 'performance') return 'performance';
  if (clean === 'technology') return 'technology';
  if (clean === 'invest' || clean === 'faq' || clean === 'calculator') return 'invest';
  return 'home';
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [page, setPage] = useState<PageId>(() => parseHashToPage(window.location.hash));
  const [copyModalOpen, setCopyModalOpen] = useState<boolean>(false);

  const { trades, summary } = useClosedTrades();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  }, [lang]);

  useEffect(() => {
    const onHashChange = () => {
      setPage(parseHashToPage(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((target: PageId) => {
    const nextHash = target === 'home' ? '#/' : `#/${target}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navItems: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'performance', label: t.nav.performance },
    { id: 'technology', label: t.nav.technology },
    { id: 'invest', label: t.nav.invest },
  ];

  const agentIcons = [TrendingUp, Layers, Shield, Wallet, Newspaper];
  const agentStyles = [
    {
      iconBox: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
      badge: 'text-cyan-300 border-cyan-500/25 bg-cyan-500/10',
      border: 'border-white/10 hover:border-cyan-500/35',
    },
    {
      iconBox: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
      badge: 'text-emerald-300 border-emerald-500/25 bg-emerald-500/10',
      border: 'border-emerald-500/25 hover:border-emerald-500/45',
    },
    {
      iconBox: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
      badge: 'text-rose-300 border-rose-500/25 bg-rose-500/10',
      border: 'border-white/10 hover:border-rose-500/35',
    },
    {
      iconBox: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
      badge: 'text-amber-300 border-amber-500/25 bg-amber-500/10',
      border: 'border-white/10 hover:border-amber-500/35',
    },
    {
      iconBox: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
      badge: 'text-violet-300 border-violet-500/25 bg-violet-500/10',
      border: 'border-white/10 hover:border-violet-500/35',
    },
  ];

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-100 relative flex flex-col">
      {/* Subtle Quant Grid & Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 bg-quant-grid opacity-60" />
      <div
        className="pointer-events-none fixed -top-44 left-1/4 w-[620px] h-[420px] rounded-full opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none fixed top-1/3 right-0 w-[520px] h-[420px] rounded-full opacity-15 blur-[150px]"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      {/* Sticky 4-Page Global Navigation */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#06080f]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center">
              <Brain className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold text-lg tracking-tight text-white">KRONOS AI</span>
              <span className="hidden xl:inline-block text-[10.5px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-slate-300">
                {t.nav.badge}
              </span>
            </div>
          </button>

          {/* Desktop 4-Page Tabs */}
          <nav className="hidden md:flex items-center gap-1 rounded-xl bg-white/[0.04] border border-white/10 p-1">
            {navItems.map((item) => {
              const active = page === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold'
                      : 'text-slate-300 hover:text-white border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Trilingual EN | TR | 中文 Switcher */}
            <div className="inline-flex items-center rounded-lg bg-white/[0.04] border border-white/10 p-0.5 text-xs font-mono">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1 hidden sm:block" />
              {[
                { id: 'en' as const, label: 'EN' },
                { id: 'tr' as const, label: 'TR' },
                { id: 'zh' as const, label: '中文' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLang(opt.id)}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                    lang === opt.id ? 'bg-white/15 text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCopyModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-3.5 sm:px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>

        {/* Mobile 4-Page Tab Strip */}
        <div className="md:hidden border-t border-white/8 px-3 py-2 flex items-center justify-between gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const active = page === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={`flex-1 whitespace-nowrap px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  active
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* ACTIVE PAGE CONTENT */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6">
        {page === 'home' && (
          <HomePage
            lang={lang}
            trades={trades}
            summary={summary}
            onNavigate={navigate}
            onOpenCopyModal={() => setCopyModalOpen(true)}
          />
        )}

        {page === 'performance' && (
          <div className="py-10 space-y-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {t.pageHeaders.perfTitle}
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-slate-400 leading-relaxed">
                {t.pageHeaders.perfSub}
              </p>
            </div>

            <ClosedTradesChart lang={lang} trades={trades} isLiveSynced={summary.isLiveSynced} />
            <LiveTradeChart lang={lang} />

            {/* Next Page Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => navigate('home')}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.pageHeaders.backToHome}</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('technology')}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold px-5 py-2.5 text-sm transition-colors cursor-pointer"
              >
                <span>{t.pageHeaders.nextToTech}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {page === 'technology' && (
          <div className="py-10 space-y-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                {t.agents.eyebrow}
              </div>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {t.pageHeaders.techTitle}
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-slate-400 leading-relaxed">
                {t.pageHeaders.techSub}
              </p>
            </div>

            {/* Central Regime Orchestrator */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-300 tracking-wider">
                    {t.agents.orchestratorLabel}
                  </div>
                  <p className="mt-1 text-sm text-slate-200 leading-relaxed max-w-3xl">
                    {t.agents.orchestratorDesc}
                  </p>
                </div>
              </div>
              <span className="self-start md:self-center shrink-0 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#06080f] border border-emerald-500/30 text-emerald-300">
                {t.agents.syncedBadge}
              </span>
            </div>

            {/* 5 Specialized Agents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
              {t.agents.list.map((agent, idx) => {
                const Icon = agentIcons[idx];
                const style = agentStyles[idx];
                const spanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
                return (
                  <div
                    key={agent.code}
                    className={`${spanClass} rounded-2xl border bg-[#0b0f1a]/90 p-6 flex flex-col justify-between transition-colors ${style.border}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${style.iconBox}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${style.badge}`}>
                          {agent.code}
                        </span>
                      </div>
                      <div className="mt-4 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                        {agent.role}
                      </div>
                      <h3 className="mt-1 text-lg sm:text-xl font-semibold text-white">{agent.title}</h3>
                      <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{agent.desc}</p>
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-white/10 text-xs font-mono text-slate-300">
                      {agent.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 6-Month Engineering & R&D Rigor */}
            <div className="rounded-2xl border border-white/10 bg-[#0b0f1a]/85 p-6 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <Wrench className="w-4 h-4" />
                  {t.engineering.eyebrow}
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t.engineering.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.engineering.subtitle}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                {t.engineering.milestones.map((item) => (
                  <div
                    key={item.metric}
                    className="rounded-xl border border-white/10 bg-[#06080f]/90 p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-2xl font-mono font-bold text-emerald-400">{item.metric}</div>
                      <h3 className="mt-2 text-base font-semibold text-white">{item.label}</h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Page Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => navigate('performance')}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.nav.performance}</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('invest')}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold px-5 py-2.5 text-sm transition-colors cursor-pointer"
              >
                <span>{t.pageHeaders.nextToInvest}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {page === 'invest' && (
          <div className="py-10 space-y-12 pb-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {t.pageHeaders.investTitle}
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-slate-400 leading-relaxed">
                {t.pageHeaders.investSub}
              </p>
            </div>

            <EarningsCalculator
              lang={lang}
              summary={summary}
              onOpenCopyModal={() => setCopyModalOpen(true)}
            />

            <div id="faq">
              <QuestionDesk lang={lang} />
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => navigate('technology')}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.nav.technology}</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('home')}
                className="inline-flex items-center gap-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/15 text-slate-200 font-semibold px-5 py-2.5 text-sm transition-colors cursor-pointer"
              >
                <span>{t.pageHeaders.backToHome}</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Clean Institutional Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#04060c] py-9 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="font-display font-bold text-white">KRONOS AI QUANT</div>
              <div className="text-xs text-slate-400">{t.footer.tagline}</div>
            </div>
          </div>

          <p className="text-xs text-slate-500 max-w-xl leading-relaxed">{t.footer.disclaimer}</p>
        </div>
      </footer>

      {/* 30-Second Binance Copy Guide & Lead Trader Link Modal */}
      <CopyGuideModal
        open={copyModalOpen}
        onClose={() => setCopyModalOpen(false)}
        onGoToFaq={() => {
          setCopyModalOpen(false);
          navigate('invest');
        }}
        lang={lang}
        leadTraderUrl={summary.leadTraderUrl}
      />
    </div>
  );
}
