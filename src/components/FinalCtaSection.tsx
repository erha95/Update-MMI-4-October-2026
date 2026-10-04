import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FinalCtaSectionProps {
  onOpenConsultation: () => void;
  onOpenDiagnostic: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenConsultation,
  onOpenDiagnostic
}) => {
  const { t, isEn } = useLanguage();

  return (
    <section id="kontak" className="py-24 md:py-32 text-center relative overflow-hidden bg-[#FAFFEF] border-t border-[#0F2415]/10">
      {/* Background glow circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 -translate-x-1/2 w-[580px] sm:w-[720px] h-[580px] sm:h-[720px] bg-[#B6FF1A] rounded-full blur-[140px] opacity-35 z-0"
      />

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] bg-[#EEFFD1] text-[#0F2415] text-xs font-mono font-semibold mb-3 border border-[#0F2415]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#4FAE58]" />
            <span>{t.finalCta.badge}</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F2415] tracking-tight leading-tight">
            {t.finalCta.title}
          </h2>

          <p className="text-sm sm:text-base text-[#4B5C4E] mt-4 mb-8 leading-relaxed">
            {t.finalCta.desc}
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center items-center">
            <a
              href={`https://wa.me/6285121067147?text=${encodeURIComponent(
                isEn
                  ? 'Hello Money Maker Institute (MMI) Team, I would like to consult on capital market certification schemes, class schedules, and tuition fees.'
                  : 'Halo Tim Money Maker Institute (MMI), saya ingin berkonsultasi mengenai skema sertifikasi pasar modal, jadwal kelas, dan biaya investasi.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-bold px-7 py-3.5 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] rounded-[3px] transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 border border-[#0F2415]/10 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#0F2415]" />
              <span>{t.finalCta.btnWa}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="font-sans text-sm font-semibold px-6 py-3.5 border border-[#0F2415] text-[#0F2415] hover:bg-[#0F2415] hover:text-[#FAFFEF] rounded-[3px] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{t.finalCta.btnForm}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#4B5C4E]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4FAE58]" /> {t.finalCta.feature1}
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4FAE58]" /> {t.finalCta.feature2}
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4FAE58]" /> {t.finalCta.feature3}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
