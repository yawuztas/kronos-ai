import { useEffect, useState } from 'react';
import { CLOSED_TRADES, LIVE_TRACK_SUMMARY, type ClosedTradePoint } from '../data/closedTrades';

export interface LiveFeedSummary {
  launchDateIso: string;
  closedTrades: number;
  wins: number;
  losses: number;
  winRate: number;
  cumulativeRoi: number;
  startingBalance: number;
  endingBalance: number;
  maxDrawdownPct: number;
  profitFactor: number;
  sharpeRatio: number;
  monthlyCompoundRate: number;
  syncedAt: string;
  leadTraderUrl: string;
  isLiveSynced: boolean;
}

interface LiveTradesPayload {
  meta?: {
    syncedAt?: string;
    leadTraderUrl?: string;
    sharpeRatio?: number;
  };
  trades?: ClosedTradePoint[];
}

function computeSummary(
  trades: ClosedTradePoint[],
  meta?: LiveTradesPayload['meta'],
  isLiveSynced = false
): LiveFeedSummary {
  if (!trades.length) {
    return {
      ...LIVE_TRACK_SUMMARY,
      syncedAt: meta?.syncedAt ?? '2026-11-19T10:00:00Z',
      leadTraderUrl: meta?.leadTraderUrl ?? 'https://www.binance.com/en/copy-trading',
      isLiveSynced,
    };
  }

  let peak = 1000.0;
  let maxDd = 0;
  let wins = 0;
  let losses = 0;
  let grossWin = 0;
  let grossLoss = 0;

  for (const t of trades) {
    if (t.bal > peak) peak = t.bal;
    const dd = peak > 0 ? ((peak - t.bal) / peak) * 100 : 0;
    if (dd > maxDd) maxDd = dd;
    if (t.pnlUsd > 0) {
      wins += 1;
      grossWin += t.pnlUsd;
    } else {
      losses += 1;
      grossLoss += Math.abs(t.pnlUsd);
    }
  }

  const last = trades[trades.length - 1];
  const winRate = Number(((wins / trades.length) * 100).toFixed(1));
  const profitFactor = grossLoss > 0 ? Number((grossWin / grossLoss).toFixed(2)) : LIVE_TRACK_SUMMARY.profitFactor;
  const maxDrawdownPct = Number(maxDd.toFixed(2));

  // Derive equivalent monthly compound rate from Feb 14, 2026 to latest trade date
  const startMs = new Date(LIVE_TRACK_SUMMARY.launchDateIso).getTime();
  const endMs = new Date(last.date).getTime();
  const monthsElapsed = Math.max(1, (endMs - startMs) / (1000 * 60 * 60 * 24 * 30.4375));
  const totalMultiple = Math.max(1.01, last.bal / 1000.0);
  const monthlyCompoundRate = Math.pow(totalMultiple, 1 / monthsElapsed) - 1;

  return {
    launchDateIso: LIVE_TRACK_SUMMARY.launchDateIso,
    closedTrades: trades.length,
    wins,
    losses,
    winRate,
    cumulativeRoi: last.roi,
    startingBalance: 1000.0,
    endingBalance: last.bal,
    maxDrawdownPct,
    profitFactor,
    sharpeRatio: meta?.sharpeRatio ?? LIVE_TRACK_SUMMARY.sharpeRatio,
    monthlyCompoundRate,
    syncedAt: meta?.syncedAt ?? new Date().toISOString(),
    leadTraderUrl: meta?.leadTraderUrl ?? 'https://www.binance.com/en/copy-trading',
    isLiveSynced,
  };
}

export function useClosedTrades() {
  const [trades, setTrades] = useState<ClosedTradePoint[]>(CLOSED_TRADES);
  const [summary, setSummary] = useState<LiveFeedSummary>(() => computeSummary(CLOSED_TRADES, undefined, false));

  useEffect(() => {
    let cancelled = false;
    const endpoint = (import.meta.env.VITE_LIVE_TRADES_URL as string | undefined) || '/live-trades.json';

    async function syncFeed() {
      try {
        const res = await fetch(`${endpoint}?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) return;
        const payload = (await res.json()) as LiveTradesPayload;
        if (cancelled || !Array.isArray(payload.trades) || payload.trades.length === 0) return;
        setTrades(payload.trades);
        setSummary(computeSummary(payload.trades, payload.meta, true));
      } catch {
        // Keep embedded snapshot seamlessly if endpoint is offline
      }
    }

    syncFeed();
    const timer = setInterval(syncFeed, 60000);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  return { trades, summary };
}
