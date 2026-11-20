# ⚡ Kronos AI — Copy-Trading Performance Dashboard

A real-time trading performance dashboard that tracks and visualizes a crypto
copy-trading portfolio: closed-trade analytics, live market ticker, and an
earnings calculator — all in a fast, bilingual (TR/EN) single-page app.

> **Türkçe özet için aşağı kaydırın** / *Scroll down for the Turkish summary.*

## ✨ Features

- **Closed Trades Analytics** — 80+ historical trades with PnL %, leverage,
  ROI and cumulative balance visualizations (Recharts)
- **Live Trade Chart** — real-time BTC / LINK / SOL / XRP market data streamed
  from the public Binance API (no API key required)
- **Earnings Calculator** — interactive profit projection tool for potential
  copiers
- **Copy Guide Modal** — step-by-step instructions for following the lead
  trader on Binance Copy Trading
- **Bilingual UI** — full Turkish / English internationalization (`i18n.ts`)
- **Zero backend** — static data + public market endpoints only; deploys
  anywhere as a static site

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS 4 |
| Charts | Recharts |
| Icons | Lucide React |
| Data | Public Binance REST API, local `live-trades.json` feed |

## 🚀 Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (dist/)
npm run preview  # preview the production build
```

## 📁 Project Structure

```
src/
├── components/        # HomePage, LiveTradeChart, ClosedTradesChart,
│                      # EarningsCalculator, CopyGuideModal, QuestionDesk
├── data/              # closedTrades.ts — historical trade dataset
├── hooks/             # useClosedTrades — data fetching & sync logic
├── i18n.ts            # TR/EN translations
└── App.tsx
public/
└── live-trades.json   # trade feed synced from the lead trader
```

## 📄 License

All rights reserved. Personal project — see repository settings.

---

## 🇹🇷 Türkçe Özet

**Kronos AI**, bir kripto **copy-trading portföyünün** performansını gerçek
zamanlı takip eden, analiz eden ve görselleştiren tek sayfalık bir panodur.

- 📈 **Kapanmış işlem analitiği** — 80+ işlem; PnL %, kaldıraç, ROI ve kümülatif
  bakiye grafikleri
- 🔴 **Canlı piyasa verisi** — Binance public API'den BTC / LINK / SOL / XRP
  (API anahtarı gerekmez)
- 🧮 **Kazanç hesaplayıcı** — potansiyel kopyacılar için kâr projeksiyonu
- 📋 **Copy rehberi** — Binance Copy Trading'de lider trader'ı takip etme adımları
- 🌐 **İki dilli arayüz** — Türkçe / İngilizce

**Çalıştırma:** `npm install && npm run dev`
**Deploy:** Herhangi bir statik hosting (Vercel tek tıkla çalışır)
