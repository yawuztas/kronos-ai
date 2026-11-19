import { useState, type FormEvent } from 'react';
import { CheckCircle2, ChevronDown, HelpCircle, MessageSquare, Send } from 'lucide-react';
import { TRANSLATIONS, type Lang } from '../i18n';

export function QuestionDesk({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang].faq;
  const [openIdx, setOpenIdx] = useState<number>(0);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contact.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Interactive FAQ Accordion */}
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          {t.eyebrow}
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.title}</h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t.subtitle}</p>

        <div className="mt-6 space-y-3">
          {t.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? 'border-emerald-500/35 bg-[#0b0f1a]'
                    : 'border-white/10 bg-[#0b0f1a]/60 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-0.5 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Direct Question Box */}
      <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0b0f1a]/90 p-6 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2.5 text-white font-semibold text-lg">
          <MessageSquare className="w-5 h-5 text-emerald-400" />
          <span>{t.formTitle}</span>
        </div>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">{t.formDesc}</p>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <div className="text-base font-semibold text-white">{t.sentTitle}</div>
            <p className="text-xs text-slate-300 leading-relaxed">{t.sentDesc}</p>
            <button
              type="button"
              onClick={() => {
                setName('');
                setContact('');
                setMessage('');
                setSubmitted(false);
              }}
              className="mt-2 px-4 py-2 rounded-lg text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
            >
              {t.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-xl bg-[#06080f] border border-white/10 focus:border-emerald-500/50 focus:outline-none px-4 py-2.5 text-sm text-white placeholder:text-slate-500"
            />
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={t.contactPlaceholder}
              className="w-full rounded-xl bg-[#06080f] border border-white/10 focus:border-emerald-500/50 focus:outline-none px-4 py-2.5 text-sm text-white placeholder:text-slate-500"
            />
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full rounded-xl bg-[#06080f] border border-white/10 focus:border-emerald-500/50 focus:outline-none px-4 py-3 text-sm text-white placeholder:text-slate-500 resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 px-4 text-sm transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {t.submitBtn}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
