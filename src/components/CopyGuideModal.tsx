import { useEffect } from 'react';
import { CheckCircle2, ExternalLink, ShieldCheck, SlidersHorizontal, X } from 'lucide-react';
import { TRANSLATIONS, type Lang } from '../i18n';

interface CopyGuideModalProps {
  open: boolean;
  onClose: () => void;
  onGoToFaq: () => void;
  lang: Lang;
  leadTraderUrl: string;
}

export function CopyGuideModal({ open, onClose, onGoToFaq, lang, leadTraderUrl }: CopyGuideModalProps) {
  const t = TRANSLATIONS[lang].copyModal;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0b0f1a] p-6 sm:p-8 shadow-[0_32px_90px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4" />
            {t.eyebrow}
          </div>
          <h3 className="mt-1.5 text-2xl font-bold text-white tracking-tight">{t.title}</h3>
          <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Recommended Settings Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {t.settings.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-[#06080f] p-4 flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">{item.label}</div>
              <div className="mt-1.5 text-base font-mono font-bold text-emerald-300">{item.value}</div>
              <div className="mt-1 text-xs text-slate-400 leading-relaxed">{item.note}</div>
            </div>
          ))}
        </div>

        {/* 30-Second Visual Steps */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-4 space-y-2.5">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-300">{t.stepsHeading}</div>
          {t.steps.map((step, i) => (
            <div key={step} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="font-mono text-slate-400 mr-1.5">0{i + 1}.</strong>
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={leadTraderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3.5 px-5 text-sm transition-colors shadow-[0_10px_28px_rgba(16,185,129,0.28)]"
          >
            <span>{t.primaryBtn}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onGoToFaq}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-medium py-3.5 px-5 text-sm transition-colors cursor-pointer"
          >
            {t.secondaryBtn}
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t.custodyNote}</span>
        </div>
      </div>
    </div>
  );
}
