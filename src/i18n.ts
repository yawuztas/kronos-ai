export type Lang = 'en' | 'tr' | 'zh';

export interface Dictionary {
  nav: {
    badge: string;
    home: string;
    performance: string;
    technology: string;
    invest: string;
    cta: string;
  };
  home: {
    pill: string;
    headlineTop: string;
    headlineAccent: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    networkTitle: string;
    networkSub: string;
    portalPerfTag: string;
    portalPerfTitle: string;
    portalPerfDesc: string;
    portalPerfBtn: string;
    portalTechTag: string;
    portalTechTitle: string;
    portalTechDesc: string;
    portalTechBtn: string;
    hookTitle: string;
    hookSub: string;
    hookBtnCalc: string;
    perYear: string;
  };
  pageHeaders: {
    perfTitle: string;
    perfSub: string;
    techTitle: string;
    techSub: string;
    investTitle: string;
    investSub: string;
    nextToPerf: string;
    nextToTech: string;
    nextToInvest: string;
    backToHome: string;
  };
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    kpiRoiLabel: string;
    kpiRoiSub: string;
    kpiWinLabel: string;
    kpiWinSub: string;
    kpiDdLabel: string;
    kpiDdSub: string;
    kpiPfLabel: string;
    kpiPfSub: string;
    leadCardTitle: string;
    leadCardRole: string;
    leadCardLive: string;
    leadCardSince: string;
    leadCardArch: string;
    leadCardArchVal: string;
    leadCardScoreLabel: string;
    leadCardShield: string;
    leadCardSync: string;
  };
  engineering: {
    eyebrow: string;
    title: string;
    subtitle: string;
    milestones: Array<{
      metric: string;
      label: string;
      desc: string;
    }>;
  };
  curve: {
    title: string;
    badge: string;
    syncLive: string;
    subtitle: string;
    allLabel: string;
    selectedTrade: string;
    cumulativeRoi: string;
    portfolioVal: string;
    tradeResult: string;
    totalClosed: string;
    winRate: string;
    hoverHint: string;
    startPoint: string;
  };
  liveChart: {
    eyebrow: string;
    title: string;
    subtitle: string;
    liveConnected: string;
    liveReference: string;
    highlightedWins: string;
    entry: string;
    exit: string;
    duration: string;
    entryBadge: string;
    tpBadge: string;
  };
  agents: {
    eyebrow: string;
    title: string;
    subtitle: string;
    orchestratorLabel: string;
    orchestratorDesc: string;
    syncedBadge: string;
    list: Array<{
      code: string;
      role: string;
      title: string;
      desc: string;
      highlight: string;
    }>;
  };
  calculator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    depositLabel: string;
    horizonLabel: string;
    horizons: Array<{ months: number; label: string }>;
    modeLabel: string;
    modes: Array<{ id: 'base' | 'conservative'; name: string; desc: string; factor: number }>;
    estBalance: string;
    estProfit: string;
    avgMonthly: string;
    histMaxDd: string;
    deskBadge: string;
    deskTitle: string;
    deskDesc: string;
    deskStats: Array<{ label: string; value: string }>;
    deskCtaPrimary: string;
    deskCtaSecondary: string;
    deskFootnote: string;
  };
  copyModal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    settings: Array<{ label: string; value: string; note: string }>;
    stepsHeading: string;
    steps: string[];
    primaryBtn: string;
    secondaryBtn: string;
    custodyNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
    formTitle: string;
    formDesc: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    sentTitle: string;
    sentDesc: string;
    sendAnother: string;
  };
  footer: {
    tagline: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<Lang, Dictionary> = {
  en: {
    nav: {
      badge: 'MULTI-AGENT QUANT AI',
      home: 'Home',
      performance: 'Performance',
      technology: 'Technology',
      invest: 'Invest & Q&A',
      cta: 'Start Copy Trading',
    },
    home: {
      pill: 'ACTIVE SINCE FEB 14, 2026 · 5 AUTONOMOUS AI AGENTS',
      headlineTop: 'Maximum Efficiency. Minimum Risk.',
      headlineAccent: 'Engineered Autonomous Alpha.',
      subline:
        'Five synchronized AI agents. Six months of reset-on-change engineering validation. Realized returns in both trending and sideways markets.',
      ctaPrimary: 'Start Copy Trading',
      ctaSecondary: 'Explore Live Performance',
      networkTitle: '5-AGENT NEURAL CORE',
      networkSub: 'LIVE SYNCHRONIZED EXECUTION',
      portalPerfTag: 'VERIFIED CLOSED-TRADE RECORD',
      portalPerfTitle: '82 Closed Trades. +345.98% Realized.',
      portalPerfDesc:
        'Inspect every single closed trade since Feb 14, 2026 alongside real-time Binance prices and winning execution maps.',
      portalPerfBtn: 'Open Performance & Live Chart',
      portalTechTag: 'PROPRIETARY BLACK-BOX ARCHITECTURE',
      portalTechTitle: 'Five Agents. Zero Emotional Bias.',
      portalTechDesc:
        'Macro trend, liquidity grid, crash shield, wallet sizing, and global news sentiment — stress-tested via Vibe-Trading & Kronos.',
      portalTechBtn: 'Explore 5-Agent AI & R&D',
      hookTitle: 'What Does Compounding Discipline Look Like?',
      hookSub: 'Simulate 3-month, 6-month, or 1-year growth based on realized pace — and get the 30-second setup guide.',
      hookBtnCalc: 'Open Earnings Calculator & Q&A',
      perYear: '1-Year Est.',
    },
    pageHeaders: {
      perfTitle: 'Live Performance & Real-Time Market Map',
      perfSub: 'Realized closed-trade equity curve since Feb 14, 2026 paired with live Binance prices and winning AI entries.',
      techTitle: '5-Agent AI Architecture & Engineering Rigor',
      techSub: 'How five specialized autonomous agents and 6+ months of reset-on-change validation deliver maximum efficiency with controlled risk.',
      investTitle: 'Earnings Estimator, Copy Setup & Investor Q&A',
      investSub: 'Project your portfolio growth, review recommended non-custodial copy settings, or ask the engineering desk directly.',
      nextToPerf: 'Next: Live Performance & Charts',
      nextToTech: 'Next: 5-Agent AI & R&D Process',
      nextToInvest: 'Next: Earnings Calculator & Q&A',
      backToHome: 'Back to Overview',
    },
    hero: {
      pill: 'LIVE CLOSED-TRADE TRACK · ACTIVE SINCE FEB 14, 2026',
      title: 'Maximum Efficiency. Minimum Risk. Engineered Autonomous Alpha.',
      subtitle:
        'Built with pure engineering discipline: extract the highest risk-adjusted return at the lowest possible cost and drawdown. Powered by a 5-agent AI architecture, validated through 6+ months of strict dry-run resets, Vibe-Trading simulation engines, and Kronos interpretive intelligence.',
      ctaPrimary: 'Start Copy Trading',
      ctaSecondary: 'Explore Live Equity',
      kpiRoiLabel: 'Cumulative ROI',
      kpiRoiSub: 'Since Feb 14, 2026',
      kpiWinLabel: 'Win Rate',
      kpiWinSub: 'Closed Trades',
      kpiDdLabel: 'Max Drawdown',
      kpiDdSub: '3-Day Recovery',
      kpiPfLabel: 'Profit Factor',
      kpiPfSub: 'Sharpe 3.65 · Bi-Directional',
      leadCardTitle: 'KRONOS AI · Quant Engine',
      leadCardRole: '5-Agent Autonomous Futures Core',
      leadCardLive: 'LIVE TELEMETRY',
      leadCardSince: 'Live Track Since Feb 14, 2026',
      leadCardArch: 'Architecture',
      leadCardArchVal: '5-Agent Multi-Regime Swarm',
      leadCardScoreLabel: 'Live AI Consensus Score',
      leadCardShield: 'Aegis Risk Shield',
      leadCardSync: 'Read-Only Feed Sync',
    },
    engineering: {
      eyebrow: 'ENGINEERING & R&D DISCIPLINE',
      title: 'Six Months of Relentless Dry-Run Cycles. Zero Shortcuts.',
      subtitle:
        'True quantitative engineering follows one law: maximum efficiency, minimum cost. Every time a new safeguard, neural filter, or agent behavior was introduced, the entire validation clock was reset to zero and re-proven under real-time market turbulence.',
      milestones: [
        {
          metric: '6+ Months',
          label: 'Reset-on-Change Dry-Run Protocol',
          desc: 'Every strategy upgrade restarted live forward-testing from scratch — ensuring zero look-ahead bias and verified stability before deployment.',
        },
        {
          metric: 'Vibe + Kronos',
          label: 'Dual-Engine Simulation & Interpretation',
          desc: 'Stress-tested inside custom Vibe-Trading execution loops and interpreted via the Kronos analytical core to calibrate every edge case and safety layer.',
        },
        {
          metric: '5 AI Agents',
          label: 'Modern Multi-Agent Software Stack',
          desc: 'Engineered on contemporary distributed software architectures where specialized autonomous agents audit regime, liquidity, capital, risk, and news in parallel.',
        },
      ],
    },
    curve: {
      title: 'Live Closed-Trades Performance Curve',
      badge: 'CLOSED TRADES · SINCE FEB 14, 2026',
      syncLive: 'READ-ONLY AUTO SYNC',
      subtitle:
        'Realized performance plotted strictly across closed trades. Hover or tap anywhere along the curve to inspect individual closed positions.',
      allLabel: 'ALL (Feb 14)',
      selectedTrade: 'Selected Closed Trade',
      cumulativeRoi: 'Cumulative ROI',
      portfolioVal: 'Equity ($1,000 Base)',
      tradeResult: 'Trade Return',
      totalClosed: 'Closed Trades',
      winRate: 'Period Win Rate',
      hoverHint: 'Hover along the curve to inspect every closed trade',
      startPoint: 'Launch · Feb 14, 2026',
    },
    liveChart: {
      eyebrow: 'LIVE MARKET FEED & EXECUTION MAP',
      title: 'Real-Time Prices & Winning AI Entries',
      subtitle:
        'Live Binance market pricing paired with highlighted winning KRONOS AI Long & Short executions across our core liquidity universe.',
      liveConnected: 'LIVE MARKET FEED CONNECTED',
      liveReference: 'MARKET PRICE REFERENCE',
      highlightedWins: 'Highlighted Winning Setups',
      entry: 'Entry',
      exit: 'Take Profit',
      duration: 'Duration',
      entryBadge: 'ENTRY',
      tpBadge: 'TP',
    },
    agents: {
      eyebrow: 'PROPRIETARY MULTI-AGENT SWARM',
      title: 'Indicators Alone Are Blind. Five Specialized AI Agents Act as One.',
      subtitle:
        'Instead of a single fragile script, KRONOS AI deploys a coordinated multi-agent ecosystem. A central regime classifier reads market structure while five independent agents govern trends, liquidity, wallet sizing, safety, and global news.',
      orchestratorLabel: 'CENTRAL REGIME ORCHESTRATOR · PROPRIETARY BLACK-BOX',
      orchestratorDesc:
        'Continuously classifies market state (Macro Trend vs. Volatility Compression vs. Systemic Stress) and synchronizes all 5 autonomous agents in real time.',
      syncedBadge: '5 AGENTS · SYNCED',
      list: [
        {
          code: 'AGENT 01 · MACRO_SENTINEL',
          role: 'Trend & Breakout Division',
          title: 'Macro Regime Agent',
          desc: 'Monitors high-timeframe structural shifts and major directional breakouts. Enforces strict Anti-Whipsaw discipline so exhausted waves never trigger destructive re-entries.',
          highlight: 'Structural Breakout · Dynamic Trailing Compression',
        },
        {
          code: 'AGENT 02 · LIQUIDITY_HUNTER',
          role: 'Mean-Reversion Division',
          title: 'Micro Grid & Liquidity Agent',
          desc: 'Activates during sideways compression regimes to capture institutional liquidity sweeps across high-beta pairs with staged partial profit taking.',
          highlight: 'Range Compression · Two-Stage Profit Lock',
        },
        {
          code: 'AGENT 03 · AEGIS_SHIELD',
          role: 'Defensive Safety Division',
          title: 'Systemic Risk & Crash Agent',
          desc: 'Operates independently with supreme veto power. Detects hidden Bitcoin bleed, flash-crash velocity, and adverse volatility regimes — blocking risky entries or liquidating exposure immediately.',
          highlight: '3-Layer Circuit Breaker · Supreme Veto Authority',
        },
        {
          code: 'AGENT 04 · TREASURY_AI',
          role: 'Wallet & Sizing Division',
          title: 'Capital & Leverage Allocation Agent',
          desc: 'Manages the wallet like an institutional risk desk. Evaluates the composite AI confidence score to dynamically size entry capital, exit tranches, and isolated leverage per setup.',
          highlight: 'Confidence-Scaled Leverage · Dynamic Slot Control',
        },
        {
          code: 'AGENT 05 · SENTIMENT_RADAR',
          role: 'News & Macro Catalyst Division',
          title: 'Global News & Sentiment Agent',
          desc: 'Continuously ingests breaking crypto headlines, macroeconomic releases, and sudden narrative shifts — feeding real-time impact signals to bias direction or tighten defense ahead of news shocks.',
          highlight: 'Real-Time Catalyst Parsing · Pre-Impact Bias Shift',
        },
      ],
    },
    calculator: {
      eyebrow: 'COMPOUNDING EARNINGS ESTIMATOR',
      title: 'Estimate Your Portfolio Growth & Monthly Yield',
      subtitle:
        'Adjust your capital and horizon to see projected compounded portfolio value and average monthly earnings based on realized closed-trade performance since Feb 14, 2026.',
      depositLabel: 'Allocated Capital',
      horizonLabel: 'Time Horizon',
      horizons: [
        { months: 3, label: '3 Months' },
        { months: 6, label: '6 Months' },
        { months: 12, label: '1 Year' },
      ],
      modeLabel: 'Risk Profile',
      modes: [
        {
          id: 'base',
          name: 'Standard (1.0x)',
          desc: 'Full realized pace (~18.1%/mo compounded)',
          factor: 1.0,
        },
        {
          id: 'conservative',
          name: 'Conservative (0.65x)',
          desc: 'Reduced volatility sizing (~11.8%/mo compounded)',
          factor: 0.65,
        },
      ],
      estBalance: 'Projected Portfolio',
      estProfit: 'Estimated Net Profit',
      avgMonthly: 'Avg. Monthly Earnings',
      histMaxDd: 'Historical Max DD',
      deskBadge: 'LIVE TRACKING & EXECUTION DESK',
      deskTitle: 'Verified Strategy Ledger & Copy Guide',
      deskDesc:
        'Review real-time closed-trade telemetry, inspect recommended Binance Copy Trading settings, or message our engineering desk directly.',
      deskStats: [
        { label: 'Active Tracking Since', value: 'Feb 14, 2026' },
        { label: 'Active Autonomous Agents', value: '5 Synchronized Units' },
        { label: 'Recommended Copy Mode', value: 'Fixed Ratio · Isolated' },
        { label: 'Data Sync Protocol', value: 'Read-Only Live JSON' },
      ],
      deskCtaPrimary: 'Open 30s Copy Guide & Binance Link',
      deskCtaSecondary: 'Ask the Engineering Desk',
      deskFootnote: '100% Non-Custodial · Zero withdrawal access · Stop anytime',
    },
    copyModal: {
      eyebrow: '30-SECOND BINANCE COPY SETUP GUIDE',
      title: 'Recommended Copy Trading Parameters',
      subtitle:
        'To mirror the 5-agent risk profile accurately without premature stop-outs or missed partial exits, apply these exact settings on Binance Futures Copy Trading.',
      settings: [
        {
          label: 'Copy Mode (Critical)',
          value: 'Fixed Ratio',
          note: 'Preserves exact proportional sizing across Macro and Grid slots. Avoid Fixed Amount.',
        },
        {
          label: 'Recommended Capital',
          value: '$500+ ($1,000 Optimal)',
          note: 'Ensures Binance minimum order sizes execute smoothly during 50% partial take-profits.',
        },
        {
          label: 'Optional Stop-Loss Cap',
          value: '20% – 25%',
          note: 'Sits safely above the 10.08% historical Max DD so normal pullbacks don’t interrupt compounding.',
        },
        {
          label: 'Margin & Leverage',
          value: 'Isolated · Auto-Mirror',
          note: 'Let Treasury AI scale leverage dynamically (3.5x–6.0x) rather than overriding manually.',
        },
      ],
      stepsHeading: 'Quick Setup Checklist (30 Seconds)',
      steps: [
        'Open the KRONOS AI Lead Trader profile on Binance Futures Copy Trading.',
        'Click "Copy", choose "Fixed Ratio", and allocate your preferred USDT amount.',
        'Keep "Isolated Margin" mirrored automatically and confirm — you can pause or stop in one click anytime.',
      ],
      primaryBtn: 'Go to Binance Lead Trader Profile',
      secondaryBtn: 'Have a Question First?',
      custodyNote: '100% Non-Custodial · Your funds never leave your own Binance account',
    },
    faq: {
      eyebrow: 'INVESTOR TRUST & DIRECT INQUIRIES',
      title: 'Frequently Asked Questions',
      subtitle:
        'Clear answers to the most important questions global investors ask before allocating capital — plus a direct line to the engineering desk.',
      items: [
        {
          q: 'Do you have withdrawal access to my funds?',
          a: 'Never. Through Binance Copy Trading, your USDT stays 100% inside your own Binance account at all times. Lead Traders have zero custody and zero withdrawal permissions.',
        },
        {
          q: 'What is the minimum USDT required to copy effectively?',
          a: 'While Binance supports smaller test amounts, we recommend at least $500 USDT (and ideally $1,000+ USDT) in Fixed Ratio mode so that multi-slot entries and 50% staged take-profits mirror accurately without hitting exchange minimum notional limits.',
        },
        {
          q: 'How does profit sharing work?',
          a: 'Profit sharing is settled natively and transparently by Binance using the High-Water Mark principle (standard 10% share of realized net profit only). You pay zero performance fee during drawdown or break-even periods.',
        },
        {
          q: 'Can I pause or stop copying anytime?',
          a: 'Yes. You remain in complete control 24/7. You can stop copying, adjust your allocation, or close mirrored positions directly inside Binance with a single click — zero lock-up period.',
        },
        {
          q: 'How does the 5-agent architecture protect against market crashes?',
          a: 'Unlike single-script bots, Agent 03 (Aegis Shield) and Agent 05 (Sentiment Radar) independently monitor systemic BTC stress, sudden drops, and macro catalysts — overriding entries or exiting vulnerable positions before cascading liquidations occur.',
        },
      ],
      formTitle: 'Have a Specific Question?',
      formDesc: 'Write directly to the engineering desk — we reply promptly with technical or onboarding details.',
      namePlaceholder: 'Your name',
      contactPlaceholder: 'Email or preferred handle',
      messagePlaceholder: 'Ask anything about KRONOS AI, risk settings, or copy setup...',
      submitBtn: 'Send Inquiry',
      sentTitle: 'Inquiry Received',
      sentDesc: 'Thank you. Your message has been logged for our engineering desk — we will reply shortly.',
      sendAnother: 'Send Another Question',
    },
    footer: {
      tagline: 'Engineered 5-Agent Hybrid Quantitative Intelligence · Maximum Efficiency, Minimum Risk',
      disclaimer:
        'Risk Disclosure: Cryptocurrency futures trading involves substantial risk of loss. Realized historical performance since Feb 14, 2026 does not guarantee future results. Trade only with capital you can afford to risk.',
    },
  },

  tr: {
    nav: {
      badge: 'ÇOKLU-AJAN QUANT AI',
      home: 'Ana Sayfa',
      performance: 'Performans',
      technology: 'Teknoloji',
      invest: 'Kazanç & SSS',
      cta: 'Start Copy Trading',
    },
    home: {
      pill: '14 ŞUBAT 2026’DAN BERİ AKTİF · 5 OTONOM AI AJANI',
      headlineTop: 'Maksimum Verim. Minimum Risk.',
      headlineAccent: 'Mühendislik Odaklı Otonom AI.',
      subline:
        'Beş senkronize yapay zeka ajanı. 6+ aylık sıfırdan doğrulamalı Ar-Ge disiplini. Hem trendde hem yatay piyasada gerçekleşen getiri.',
      ctaPrimary: 'Start Copy Trading',
      ctaSecondary: 'Canlı Performansı İncele',
      networkTitle: '5 AJANLI SİNİRSEL ÇEKİRDEK',
      networkSub: 'CANLI SENKRONİZE YÜRÜTME',
      portalPerfTag: 'DOĞRULANMIŞ KAPANMIŞ İŞLEM KAYDI',
      portalPerfTitle: '82 Kapanmış İşlem. +%345.98 Getiri.',
      portalPerfDesc:
        '14 Şubat 2026’dan bugüne her bir kapanmış işlemi, canlı Binance fiyatlarını ve grafikteki kazanç noktalarını inceleyin.',
      portalPerfBtn: 'Performans ve Canlı Grafiği Aç',
      portalTechTag: 'TESCİLLİ KARA KUTU MİMARİSİ',
      portalTechTitle: 'Beş Uzman Ajan. Sıfır Duygu.',
      portalTechDesc:
        'Makro trend, likidite grid, kriz kalkanı, cüzdan yönetimi ve global haber analizi — Vibe-Trading ve Kronos ile test edildi.',
      portalTechBtn: '5 Ajanlı AI ve Ar-Ge Sürecini Gör',
      hookTitle: 'Bileşik Disiplin Sermayenizi Nereye Taşır?',
      hookSub: 'Gerçekleşen performansa göre 3 ay, 6 ay ve 1 yıllık kazancınızı hesaplayın ve 30 saniyelik kurulum rehberine ulaşın.',
      hookBtnCalc: 'Kazanç Hesaplayıcı ve SSS’yi Aç',
      perYear: '1 Yıllık Tahmini',
    },
    pageHeaders: {
      perfTitle: 'Canlı Performans & Piyasa İşlem Haritası',
      perfSub: '14 Şubat 2026’dan bu yana kapanmış işlemlerin gerçek kasa eğrisi, anlık Binance kurları ve AI kazanç noktaları.',
      techTitle: '5 Ajanlı AI Mimarisi & Mühendislik Süreci',
      techSub: 'Beş uzman otonom ajanın ve 6+ aylık sıfırdan doğrulamalı Ar-Ge disiplininin maksimum verimi nasıl ürettiğini keşfedin.',
      investTitle: 'Kazanç Hesaplayıcı, Kopyalama Rehberi & SSS',
      investSub: 'Aylık ve yıllık getiri projeksiyonunuzu hesaplayın, önerilen ayarları görün veya mühendislik ekibine doğrudan soru sorun.',
      nextToPerf: 'Sıradaki: Canlı Performans & Grafikler',
      nextToTech: 'Sıradaki: 5 Ajanlı AI & Ar-Ge Süreci',
      nextToInvest: 'Sıradaki: Kazanç Hesaplayıcı & SSS',
      backToHome: 'Ana Sayfaya Dön',
    },
    hero: {
      pill: 'CANLI KAPANMIŞ İŞLEM KAYDI · 14 ŞUBAT 2026’DAN BERİ AKTİF',
      title: 'Maksimum Verim. Minimum Risk. Mühendislik Odaklı Otonom AI.',
      subtitle:
        'Saf mühendislik disipliniyle tasarlandı: en düşük maliyet ve çekilme ile mümkün olan en yüksek verim. 5 uzman AI ajanından oluşan özel mimari; 6+ aylık kesintisiz dry-run döngüleri, Vibe-Trading simülasyon motoru ve Kronos yorumlama zekası ile geliştirildi.',
      ctaPrimary: 'Start Copy Trading',
      ctaSecondary: 'Canlı Kasayı İncele',
      kpiRoiLabel: 'Kümülatif Getiri',
      kpiRoiSub: '14 Şub 2026’dan Beri',
      kpiWinLabel: 'Kazanma Oranı',
      kpiWinSub: 'Kapanmış İşlem',
      kpiDdLabel: 'Max Çekilme (DD)',
      kpiDdSub: '3 Günde Toparlanma',
      kpiPfLabel: 'Profit Factor',
      kpiPfSub: 'Sharpe 3.65 · Çift Yönlü',
      leadCardTitle: 'KRONOS AI · Quant Motoru',
      leadCardRole: '5 Ajanlı Otonom Vadeli İşlem Çekirdeği',
      leadCardLive: 'CANLI TELEMETRİ',
      leadCardSince: 'Canlı Kayıt: 14 Şubat 2026',
      leadCardArch: 'Mimari Yapı',
      leadCardArchVal: '5 Ajanlı Çoklu-Rejim Sürüsü',
      leadCardScoreLabel: 'Anlık AI Konsensüs Skoru',
      leadCardShield: 'Aegis Risk Kalkanı',
      leadCardSync: 'Salt-Okunur Canlı Senkron',
    },
    engineering: {
      eyebrow: 'MÜHENDİSLİK & AR-GE DİSİPLİNİ',
      title: '6 Aylık Kesintisiz Dry-Run Döngüsü. Sıfır Tesadüf.',
      subtitle:
        'Gerçek mühendislik tek bir kurala dayanır: maksimum verim, minimum maliyet. Stratejiye yeni bir özellik, güvenlik kalkanı veya ajan katmanı eklendiği her an test süreci sıfırdan başlatılarak canlı piyasa koşullarında yeniden doğrulandı.',
      milestones: [
        {
          metric: '6+ Ay',
          label: 'Her Güncellemede Sıfırlanan Dry-Run',
          desc: 'Strateji değiştiğinde veya yeni güvenlik adımı eklendiğinde tüm gözlem süreci sıfırdan başlatıldı; geçmişi ezberlemeyen kararlı yapı kuruldu.',
        },
        {
          metric: 'Vibe + Kronos',
          label: 'Çift Motorlu Simülasyon & Yorumlama',
          desc: 'Özel Vibe-Trading motoruyla uç senaryolarda test edildi, Kronos analitik zekasıyla yorumlanarak her güvenlik adımı ince hesaplandı.',
        },
        {
          metric: '5 AI Ajanı',
          label: 'Güncel Yazılım & Özel Ajan Mimarisi',
          desc: 'Modern yazılım sistemleri üzerinde rejim, likidite, cüzdan yönetimi, kriz güvenliği ve global haber akışını paralel yöneten özel ajan ağı.',
        },
      ],
    },
    curve: {
      title: 'Kapanmış İşlemler Canlı Performans Grafiği',
      badge: 'KAPANMIŞ İŞLEM · 14 ŞUB 2026’DAN BERİ',
      syncLive: 'OTOMATİK CANLI SENKRON',
      subtitle:
        '14 Şubat 2026’dan bugüne yalnızca kapanmış işlemlerin gerçek kümülatif seyri. Grafik üzerinde gezinerek her bir kapanmış işlemi inceleyebilirsiniz.',
      allLabel: 'TÜMÜ (14 Şub)',
      selectedTrade: 'Seçili Kapanmış İşlem',
      cumulativeRoi: 'Kümülatif ROI',
      portfolioVal: 'Bakiye ($1,000 Baz)',
      tradeResult: 'İşlem Getirisi',
      totalClosed: 'Kapanan İşlem',
      winRate: 'Dönem Win Rate',
      hoverHint: 'Her kapanmış işlemi görmek için grafik üzerinde gezinin',
      startPoint: 'Başlangıç · 14 Şub 2026',
    },
    liveChart: {
      eyebrow: 'CANLI PİYASA FİYATLARI & İŞLEM HARİTASI',
      title: 'Anlık Kurlar ve AI Kazanç Noktaları',
      subtitle:
        'Ana likidite paritelerinde canlı piyasa fiyatları ve KRONOS AI’ın grafik üzerinde yakaladığı öne çıkan kârlı Long & Short işlemleri.',
      liveConnected: 'CANLI PİYASA VERİSİ BAĞLI',
      liveReference: 'PİYASA FİYAT REFERANSI',
      highlightedWins: 'Öne Çıkan Kazanç İşlemi',
      entry: 'Giriş',
      exit: 'Kâr Al',
      duration: 'Süre',
      entryBadge: 'GİRİŞ',
      tpBadge: 'TP',
    },
    agents: {
      eyebrow: 'TESCİLLİ ÇOKLU-AJAN MİMARİSİ',
      title: 'İndikatörler Tek Başına Kördür. 5 Uzman AI Ajanı Birlikte Çalışır.',
      subtitle:
        'Tek bir kırılgan script yerine, merkezi rejim tespit sistemiyle senkronize çalışan 5 bağımsız yapay zeka ajanı: trend takibi, yatay grid, kriz güvenliği, cüzdan/kaldıraç yönetimi ve global haber analizi.',
      orchestratorLabel: 'MERKEZİ REJİM ORKESTRATÖRÜ · KAPALI KUTU ZEKASI',
      orchestratorDesc:
        'Piyasa rejimini (Makro Trend / Yatay Sıkışma / Sistemik Stres) anlık tespit eder ve 5 uzman otonom ajanı eşzamanlı koordine eder.',
      syncedBadge: '5 AJAN · SENKRONİZE',
      list: [
        {
          code: 'AJAN 01 · MACRO_SENTINEL',
          role: 'Makro Trend Birimi',
          title: 'Makro Trend Takip Ajanı',
          desc: 'Büyük zaman dilimlerindeki yapısal yön kırılımlarını yakalar. Özel Anti-Whipsaw disiplini sayesinde yorgun dalgalarda testereye girmez.',
          highlight: 'Yapısal Kırılım · Dinamik Daralan Takip Stopu',
        },
        {
          code: 'AJAN 02 · LIQUIDITY_HUNTER',
          role: 'Yatay Piyasa Birimi',
          title: 'Grid & Likidite Avcısı Ajanı',
          desc: 'Yatay sıkışma dönemlerinde devreye girerek altcoinlerdeki kurumsal likidite süpürmelerini yakalar ve kademeli kâr realizasyonu uygular.',
          highlight: 'Yatay Sıkışma · İki Kademeli Kâr Kilidi',
        },
        {
          code: 'AJAN 03 · AEGIS_SHIELD',
          role: 'Güvenlik & Kriz Birimi',
          title: 'Sistemik Risk & Güvenlik Ajanı',
          desc: 'Üst veto yetkisiyle bağımsız çalışır. Ters bir piyasa akışı, gizli BTC kanaması veya ani şok tespit ettiğinde yeni girişleri kilitler veya açık işlemleri güvenle kapatır.',
          highlight: '3 Katmanlı Devre Kesici · Üst Veto Yetkisi',
        },
        {
          code: 'AJAN 04 · TREASURY_AI',
          role: 'Cüzdan & Kaldıraç Birimi',
          title: 'Sermaye & Kaldıraç Yönetim Ajanı',
          desc: 'Cüzdanı kurumsal risk masası gibi yönetir. Botun anlık güven skoruna göre giriş/çıkış miktarını, slot dağılımını ve izole kaldıraç oranını otonom ayarlar.',
          highlight: 'Güven Skorlu Kaldıraç · Dinamik Cüzdan Kontrolü',
        },
        {
          code: 'AJAN 05 · SENTIMENT_RADAR',
          role: 'Haber & Katalizör Birimi',
          title: 'Global Haber & Duygu Analiz Ajanı',
          desc: 'Güncel kripto ve makroekonomi haber akışlarını anlık tarar. Kritik gelişmelerin piyasa etkisini puanlayarak botun yön eğilimini ve savunma sertliğini proaktif yönlendirir.',
          highlight: 'Anlık Haber Etkisi · Proaktif Yön & Risk Ayarı',
        },
      ],
    },
    calculator: {
      eyebrow: 'BİLEŞİK KAZANÇ HESAPLAYICI',
      title: 'Ne Kadar Yatırırsanız Aylık & Yıllık Ne Olurdu?',
      subtitle:
        'Sermayenizi ve vadenizi seçin; 14 Şubat 2026’dan bu yana gerçekleşen kapanmış işlem performansına göre aylık ortalama kazanç ve bileşik kasa büyümesini görün.',
      depositLabel: 'Tahsis Edilen Sermaye',
      horizonLabel: 'Vade Süresi',
      horizons: [
        { months: 3, label: '3 Ay' },
        { months: 6, label: '6 Ay' },
        { months: 12, label: '1 Yıl' },
      ],
      modeLabel: 'Risk Profili',
      modes: [
        {
          id: 'base',
          name: 'Standart (1.0x)',
          desc: 'Gerçekleşen standart tempo (~aylık %18.1 bileşik)',
          factor: 1.0,
        },
        {
          id: 'conservative',
          name: 'Muhafazakâr (0.65x)',
          desc: 'Daha düşük dalgalanma (~aylık %11.8 bileşik)',
          factor: 0.65,
        },
      ],
      estBalance: 'Tahmini Portföy Değeri',
      estProfit: 'Tahmini Net Kazanç',
      avgMonthly: 'Aylık Ort. Kazanç',
      histMaxDd: 'Tarihsel Max DD',
      deskBadge: 'CANLI TAKİP & PERFORMANS MASASI',
      deskTitle: 'Doğrulanmış Takip & Kopyalama Rehberi',
      deskDesc:
        'Canlı kapanmış işlem metriklerini inceleyin, 30 saniyelik önerilen Binance Copy Trading ayarlarını görün veya teknik ekibe doğrudan soru bırakın.',
      deskStats: [
        { label: 'Canlı Takip Başlangıcı', value: '14 Şubat 2026' },
        { label: 'Aktif Otonom Ajan Sayısı', value: '5 Senkronize Birim' },
        { label: 'Önerilen Kopya Modu', value: 'Fixed Ratio · İzole' },
        { label: 'Veri Senkron Köprüsü', value: 'Salt-Okunur Canlı JSON' },
      ],
      deskCtaPrimary: '30 Sn Kopyalama Rehberi & Binance Linki',
      deskCtaSecondary: 'Mühendislik Ekibine Soru Sor',
      deskFootnote: '%100 Emanetsiz · Çekim yetkisi yok · İstediğiniz an durdurun',
    },
    copyModal: {
      eyebrow: '30 SANİYELİK BİNANCE KOPYALAMA REHBERİ',
      title: 'Önerilen Copy Trading Ayarları',
      subtitle:
        '5 ajanlı risk profilini erken stoplara takılmadan ve kademeli kâr alımları kaçırmadan birebir yansıtmak için Binance üzerinde şu ayarları seçmeniz önerilir:',
      settings: [
        {
          label: 'Kopyalama Modu (Önemli)',
          value: 'Fixed Ratio (Sabit Oran)',
          note: 'Makro ve Grid slotlarındaki oranları birebir korur. Fixed Amount önerilmez.',
        },
        {
          label: 'Önerilen Minimum Bakiye',
          value: '$500+ ($1,000 İdeal)',
          note: '%50 kısmi kâr alımında Binance minimum emir alt limitine takılmamak için idealdir.',
        },
        {
          label: 'Opsiyonel Zarar-Kes Limiti',
          value: '%20 – %25',
          note: 'Tarihsel %10.08 Max DD’nin üzerinde bırakılmalı ki normal geri çekilmelerde erken çıkılmasın.',
        },
        {
          label: 'Marjin & Kaldıraç',
          value: 'İzole · Otomatik Yansıt',
          note: 'Kaldıracı elle sabitlemeyin; Ajan 04 (Treasury AI) sinyale göre 3.5x–6.0x otomatik ayarlasın.',
        },
      ],
      stepsHeading: '30 Saniyelik Kurulum Kontrol Listesi',
      steps: [
        'Binance Futures Copy Trading üzerinde KRONOS AI Lead Trader profilini açın.',
        '"Kopyala" butonuna basıp "Fixed Ratio (Sabit Oran)" seçin ve USDT tutarınızı girin.',
        'İzole Marjin yansıtmasını açık bırakıp onaylayın — dilediğiniz saniye tek tıkla durdurabilirsiniz.',
      ],
      primaryBtn: 'Binance Lead Trader Profiline Git',
      secondaryBtn: 'Önce Bir Sorum Var',
      custodyNote: '%100 Kendi Hesabınızda · Paranız asla Binance cüzdanınızdan çıkmaz',
    },
    faq: {
      eyebrow: 'YATIRIMCI GÜVENİ & SORU-CEVAP',
      title: 'Sıkça Sorulan Sorular',
      subtitle:
        'Sermaye bağlamadan önce global yatırımcıların en sık sorduğu 5 temel sorunun net yanıtları ve doğrudan iletişim masası.',
      items: [
        {
          q: 'Çekim yetkiniz var mı? Param güvende mi?',
          a: 'Kesinlikle çekim yetkimiz yoktur. Binance Copy Trading altyapısında USDT bakiyeniz %100 kendi Binance hesabınızda kalır. Lead Trader’lar yalnızca işlem sinyali üretir; fonlarınıza dokunamaz veya çekemez.',
        },
        {
          q: 'Minimum kaç USDT ile kopyalamalıyım?',
          a: 'Binance daha küçük tutarlara izin verse de, çoklu slot girişlerinin ve %50 kısmi kâr alımlarının borsa minimum emir limitine takılmaması için Fixed Ratio modunda en az $500 USDT (ideal $1,000+ USDT) öneriyoruz.',
        },
        {
          q: 'Kâr paylaşımı nasıl işler?',
          a: 'Kâr paylaşımı tamamen Binance tarafından High-Water Mark kuralıyla otomatik hesaplanır (yalnızca gerçekleşen net kâr üzerinden standart %10 pay). Zarar veya başa-baş dönemlerde hiçbir ücret alınmaz.',
        },
        {
          q: 'İstediğim an kopyalamayı durdurabilir miyim?',
          a: 'Evet. 7/24 tam kontrol sizdedir. Herhangi bir kilit süresi veya ceza olmadan Binance içinden tek tıkla kopyalamayı durdurabilir, pozisyonlarınızı kapatabilir ve paranızı çekebilirsiniz.',
        },
        {
          q: '5 ajanlı mimari piyasa çöküşlerine karşı nasıl koruma sağlıyor?',
          a: 'Tek scriptli botların aksine Ajan 03 (Aegis Shield) ve Ajan 05 (Sentiment Radar) sistemik BTC baskısını, ani çöküş hızını ve haber katalizörlerini bağımsız izler; risk yükseldiğinde girişleri kilitler veya açık işlemleri koruma amaçlı kapatır.',
        },
      ],
      formTitle: 'Aklınıza Takılan Başka Bir Soru mu Var?',
      formDesc: 'Doğrudan mühendislik ekibine yazın; teknik detaylar veya kurulum hakkında hızlıca dönüş yapalım.',
      namePlaceholder: 'Adınız',
      contactPlaceholder: 'E-posta veya iletişim adresiniz',
      messagePlaceholder: 'KRONOS AI, risk ayarları veya takip süreci hakkında sorunuzu yazın...',
      submitBtn: 'Soruyu Gönder',
      sentTitle: 'Mesajınız Alındı',
      sentDesc: 'Teşekkürler. Sorunuz ekibimize iletildi; en kısa sürede dönüş yapacağız.',
      sendAnother: 'Yeni Soru Gönder',
    },
    footer: {
      tagline: '5 Ajanlı Hibrit Quant Zekası · Maksimum Verim, Minimum Risk',
      disclaimer:
        'Risk Bildirimi: Kripto vadeli işlemler yüksek risk içerir. 14 Şubat 2026’dan bu yana gerçekleşen geçmiş işlem performansı gelecekteki sonuçların garantisi değildir. Yalnızca riskini yönetebileceğiniz sermaye ile işlem yapınız.',
    },
  },

  zh: {
    nav: {
      badge: '多智能体量化 AI',
      home: '首页',
      performance: '实盘表现',
      technology: '核心技术',
      invest: '收益与问答',
      cta: '开始跟单',
    },
    home: {
      pill: '自 2026年2月14日 运行 · 5 大自主 AI 智能体',
      headlineTop: '极致效率。极低回撤。',
      headlineAccent: '工程级自主 AI 量化。',
      subline:
        '五大专业 AI 智能体实时协同，历经 6 个月以上严格归零模拟验证，在单边趋势与横盘震荡中双轨捕捉真实收益。',
      ctaPrimary: '开始跟单',
      ctaSecondary: '查看实盘表现',
      networkTitle: '五智能体神经量化内核',
      networkSub: '全天候实时协同执行',
      portalPerfTag: '真实平仓历史曲线',
      portalPerfTitle: '82 笔平仓。+345.98% 实盘累计收益。',
      portalPerfDesc:
        '逐笔查阅自 2026年2月14日 以来的全部已平仓记录，同步查看币安实时报价与精选多空盈利入场图谱。',
      portalPerfBtn: '进入实盘曲线与实时行情',
      portalTechTag: '专有黑盒多智能体架构',
      portalTechTitle: '五大智能体。零情绪干扰。',
      portalTechDesc:
        '宏观趋势、震荡网格、防崩盘护盾、资金杠杆管理与全球新闻雷达 —— 经 Vibe-Trading 与 Kronos 双引擎验证。',
      portalTechBtn: '探索五智能体与研发流程',
      hookTitle: '复利纪律能为您的资金带来什么？',
      hookSub: '按历史实盘节奏测算 3 个月、6 个月及 1 年预期收益，并获取 30 秒币安跟单参数指南。',
      hookBtnCalc: '打开收益测算与常见问题',
      perYear: '1 年预估净值',
    },
    pageHeaders: {
      perfTitle: '实盘收益曲线与实时盈利图谱',
      perfSub: '自 2026年2月14日 起的全部已平仓净值轨迹，叠加币安实时行情与 AI 精选开仓点位。',
      techTitle: '五智能体 AI 架构与工程研发纪律',
      techSub: '深入解析五大自主智能体协作机制，以及历经 6 个月以上归零重置验证的量化工程流程。',
      investTitle: '收益测算、30 秒跟单指南与投资者问答',
      investSub: '测算您的月均与年度预期回报，查看推荐的非托管跟单参数，或直接向工程团队咨询。',
      nextToPerf: '下一页：实盘曲线与实时行情',
      nextToTech: '下一页：五智能体 AI 与研发流程',
      nextToInvest: '下一页：收益测算与常见问题',
      backToHome: '返回首页概览',
    },
    hero: {
      pill: '实盘平仓记录 · 自 2026年2月14日 起持续运行',
      title: '极致效率。极低回撤。工程级自主 AI 量化。',
      subtitle:
        '以严谨的工程法则打造：用最低的成本与回撤，博取最高风险调整后收益。系统由五大专业 AI 智能体协同驱动，历经 6 个月以上严格模拟盘重置验证、Vibe-Trading 压力测试引擎与 Kronos 智能解析核心打磨而成。',
      ctaPrimary: '开始跟单',
      ctaSecondary: '查看实盘曲线',
      kpiRoiLabel: '累计收益率',
      kpiRoiSub: '自 2026年2月14日',
      kpiWinLabel: '历史胜率',
      kpiWinSub: '已平仓交易',
      kpiDdLabel: '最大回撤',
      kpiDdSub: '平均 3 天修复',
      kpiPfLabel: '盈亏比因子',
      kpiPfSub: '夏普 3.65 · 多空双向',
      leadCardTitle: 'KRONOS AI · 量化核心',
      leadCardRole: '五智能体自主合约执行引擎',
      leadCardLive: '实时遥测',
      leadCardSince: '始于 2026年2月14日',
      leadCardArch: '系统架构',
      leadCardArchVal: '五智能体多周期协同矩阵',
      leadCardScoreLabel: '实时 AI 共识置信分',
      leadCardShield: 'Aegis 风险护盾',
      leadCardSync: '只读数据自动同步',
    },
    engineering: {
      eyebrow: '工程纪律与研发验证',
      title: '历时 6 个月以上严格模拟验证，绝不走捷径。',
      subtitle:
        '真正的量化工程遵循唯一准则：最高效率、最低成本。每当新增风控护盾、策略参数或智能体模块，我们都将前向测试计时器彻底归零，在真实行情波动中重新验证稳定性。',
      milestones: [
        {
          metric: '6+ 个月',
          label: '每次迭代归零的模拟验证协议',
          desc: '每次策略升级均从零重启实盘前向验证，杜绝过度拟合与未来函数，确保跨周期稳健运行。',
        },
        {
          metric: 'Vibe + Kronos',
          label: '双引擎极端压力测试与深度解析',
          desc: '依托自研 Vibe-Trading 仿真回路与 Kronos 解析核心，对每一道风控阈值进行精细化工程校准。',
        },
        {
          metric: '5 大 AI 智能体',
          label: '现代分布式多智能体软件架构',
          desc: '摒弃脆弱的单一脚本，由五个独立自主智能体并行处理行情状态、流动性、资金分配、风控与全球资讯。',
        },
      ],
    },
    curve: {
      title: '实盘已平仓交易收益曲线',
      badge: '已平仓交易 · 自 2026年2月14日',
      syncLive: '只读接口自动同步',
      subtitle:
        '仅统计已平仓交易的真实累计净值走势。悬停或点击曲线上的任意节点，即可查看对应单笔平仓详情。',
      allLabel: '全部 (2月14日起)',
      selectedTrade: '当前选中平仓',
      cumulativeRoi: '累计收益率',
      portfolioVal: '账户净值 ($1,000 基准)',
      tradeResult: '单笔收益',
      totalClosed: '平仓笔数',
      winRate: '区间胜率',
      hoverHint: '移动鼠标浏览每一笔已平仓交易记录',
      startPoint: '启动日 · 2026年2月14日',
    },
    liveChart: {
      eyebrow: '实时行情与 AI 盈利入场图谱',
      title: '币安实时报价与 AI 精选盈利点位',
      subtitle:
        '接入币安实时市场行情，在四大核心流动性合约上直观展示 KRONOS AI 的精选多空盈利开仓与止盈点位。',
      liveConnected: '实时行情已连接',
      liveReference: '市场基准报价',
      highlightedWins: '笔精选盈利交易',
      entry: '入场价',
      exit: '止盈价',
      duration: '持仓时长',
      entryBadge: '开仓',
      tpBadge: '止盈',
    },
    agents: {
      eyebrow: '专有多智能体协同矩阵',
      title: '单一指标盲人摸象，五大专业 AI 智能体协同作战。',
      subtitle:
        '中央状态编排器实时识别市场阶段，五位独立分工的 AI 智能体同步接管趋势追踪、震荡网格、极端防崩盘风控、仓位杠杆调度以及全球新闻舆情研判。',
      orchestratorLabel: '中央状态编排引擎 · 专有黑盒内核',
      orchestratorDesc:
        '全天候识别市场结构（宏观趋势 / 波动率压缩 / 系统性风险），毫秒级协同调度五大自主智能体。',
      syncedBadge: '5 智能体 · 实时同步',
      list: [
        {
          code: '智能体 01 · MACRO_SENTINEL',
          role: '宏观趋势部门',
          title: '宏观趋势追踪智能体',
          desc: '捕捉大周期结构性趋势突破，内置专有防震荡（Anti-Whipsaw）锁定协议，杜绝在衰竭浪中反复来回磨损本金。',
          highlight: '结构突破 · 动态收紧追踪止盈',
        },
        {
          code: '智能体 02 · LIQUIDITY_HUNTER',
          role: '震荡流动性部门',
          title: '微网格与流动性捕手',
          desc: '在横盘波动率压缩期间激活，精准捕捉主流山寨币的机构扫损流动性，执行分阶段落袋锁盈机制。',
          highlight: '区间压缩 · 两段式止盈锁利',
        },
        {
          code: '智能体 03 · AEGIS_SHIELD',
          role: '安全风控部门',
          title: '系统性风险与防暴跌护盾',
          desc: '拥有最高独立否决权。全天候监测比特币隐性失血与闪崩动能，一旦察觉异常风险立即锁死开仓或紧急平仓避险。',
          highlight: '三层熔断护盾 · 最高否决权限',
        },
        {
          code: '智能体 04 · TREASURY_AI',
          role: '资金与杠杆部门',
          title: '钱包仓位与动态杠杆智能体',
          desc: '像机构风控台一样管理账户资金。依据实时 AI 置信分与当前敞口，自动调节单笔仓位比例与逐仓杠杆倍数。',
          highlight: '置信分动态杠杆 · 智能资金槽位',
        },
        {
          code: '智能体 05 · SENTIMENT_RADAR',
          role: '全球资讯催化部门',
          title: '实时新闻与情绪研判智能体',
          desc: '持续扫描全球加密突发新闻与宏观经济数据，量化消息面冲击权重，在剧烈波动传导至盘面前前瞻性调整方向与防御姿态。',
          highlight: '实时资讯解析 · 前瞻性防御校准',
        },
      ],
    },
    calculator: {
      eyebrow: '复利收益测算器',
      title: '测算您的资金增长与月均预期收益',
      subtitle:
        '滑动调整投入本金与周期，基于自 2026年2月14日 以来已实现的平仓增长节奏，直观预估月均收益与复利净值。',
      depositLabel: '跟单投入本金',
      horizonLabel: '测算周期',
      horizons: [
        { months: 3, label: '3 个月' },
        { months: 6, label: '6 个月' },
        { months: 12, label: '1 年' },
      ],
      modeLabel: '风控模式',
      modes: [
        {
          id: 'base',
          name: '标准跟单 (1.0x)',
          desc: '完全同步策略节奏（月均复利约 18.1%）',
          factor: 1.0,
        },
        {
          id: 'conservative',
          name: '稳健跟单 (0.65x)',
          desc: '更低波动敞口（月均复利约 11.8%）',
          factor: 0.65,
        },
      ],
      estBalance: '预估期末净值',
      estProfit: '预估净收益',
      avgMonthly: '月均预估盈利',
      histMaxDd: '历史最大回撤',
      deskBadge: '实时追踪与跟单配置台',
      deskTitle: '透明实盘账本与 30 秒跟单指南',
      deskDesc:
        '查看实时同步的平仓数据，获取推荐的币安合约跟单参数配置，或直接向我们的量化工程团队提问。',
      deskStats: [
        { label: '实盘追踪起始日', value: '2026年2月14日' },
        { label: '协同运行智能体', value: '5 单元全天候在线' },
        { label: '推荐币安跟单模式', value: '定比跟单 · 逐仓' },
        { label: '数据同步机制', value: '只读实时 JSON 接口' },
      ],
      deskCtaPrimary: '查看 30 秒跟单指南与币安主页',
      deskCtaSecondary: '向工程团队提问',
      deskFootnote: '100% 非托管 · 无提币权限 · 随时一键停止跟单',
    },
    copyModal: {
      eyebrow: '30 秒币安合约跟单配置指南',
      title: '推荐跟单参数设置',
      subtitle:
        '为确保精准复刻五智能体风控比例，避免因设置不当被提前止损或漏掉分批止盈，请在币安合约跟单中选择以下参数：',
      settings: [
        {
          label: '跟单模式（核心）',
          value: '定比跟单 (Fixed Ratio)',
          note: '精准保持宏观与网格仓位比例，不建议使用定额跟单。',
        },
        {
          label: '建议最低本金',
          value: '$500+ ($1,000 最佳)',
          note: '确保 50% 分批止盈与多仓位并行时不会触发交易所最小下单额限制。',
        },
        {
          label: '可选总止损线',
          value: '20% – 25%',
          note: '高于历史 10.08% 最大回撤，避免正常 3 天级回调误触止损打断复利。',
        },
        {
          label: '保证金与杠杆',
          value: '逐仓 · 跟随带单员',
          note: '无需手动覆盖杠杆，由智能体 04 (Treasury AI) 根据置信分自动在 3.5x–6.0x 调节。',
        },
      ],
      stepsHeading: '30 秒快速跟单步骤',
      steps: [
        '点击下方按钮前往币安合约带单主页找到 KRONOS AI。',
        '点击“跟单”，选择“定比跟单 (Fixed Ratio)”并输入投入 USDT 金额。',
        '保持逐仓与杠杆自动同步并确认即可 —— 随时可一键暂停或平仓退出。',
      ],
      primaryBtn: '前往币安带单员主页',
      secondaryBtn: '先咨询一个问题',
      custodyNote: '100% 非托管 · 资金始终保留在您本人的币安账户内',
    },
    faq: {
      eyebrow: '投资者信任保障与直接咨询',
      title: '常见问题解答 (FAQ)',
      subtitle:
        '针对全球跟单投资者最关心的资金安全、门槛与分润机制给出清晰解答，您也可以直接向工程团队留言。',
      items: [
        {
          q: '你们有权限提取我的资金吗？资金安全吗？',
          a: '绝对没有。通过币安合约跟单体系，您的 USDT 资金 100% 保留在您自己的币安账户中。带单员仅输出交易指令，绝无任何托管权或提币权限。',
        },
        {
          q: '跟单最低需要多少 USDT？',
          a: '尽管币安支持更低金额测试，但为确保多智能体分批止盈（50% 减仓）与多槽位开仓不触碰最小名义价值限制，建议使用“定比跟单”投入至少 $500 USDT（推荐 $1,000+ USDT）。',
        },
        {
          q: '利润分成是如何运作的？',
          a: '利润分成完全由币安平台按“高水位线（High-Water Mark）”原则自动透明结算（仅对已实现净利润收取标准 10% 分润）。回撤或未创新高期间不收取任何业绩费。',
        },
        {
          q: '我可以随时暂停或停止跟单吗？',
          a: '可以。您 7×24 小时拥有完全控制权，无任何锁定期或违约金。您随时可以在币安页面一键停止跟单、手动平仓或提取资金。',
        },
        {
          q: '五智能体架构如何在极端暴跌中保护账户？',
          a: '不同于单一脚本机器人，智能体 03 (Aegis 护盾) 与智能体 05 (全球资讯雷达) 独立监控比特币系统性失血、闪崩速度及突发利空，在连环爆仓发生前提前拦截多单或紧急平仓保护本金。',
        },
      ],
      formTitle: '还有其他技术或跟单问题？',
      formDesc: '直接留言给量化工程团队，我们将尽快通过您留下的联系方式回复。',
      namePlaceholder: '您的称呼',
      contactPlaceholder: '邮箱或常用联系方式',
      messagePlaceholder: '请输入您关于 KRONOS AI、风控参数或跟单设置的问题...',
      submitBtn: '提交咨询',
      sentTitle: '咨询已收到',
      sentDesc: '感谢您的留言！我们已记录您的消息，工程团队将尽快与您联系。',
      sendAnother: '提交新问题',
    },
    footer: {
      tagline: '五智能体混合量化引擎 · 极致效率，极低风险',
      disclaimer:
        '风险提示：加密货币合约交易存在较高本金损失风险。自 2026年2月14日 以来已实现的过往交易表现不代表未来收益保证，请仅使用您可承受风险的资金参与。',
    },
  },
};
