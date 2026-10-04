import React from 'react';
import { ShieldCheck, Award, Scale, BookCheck, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PhilosophySectionProps {
  onOpenConsultation?: (program?: string) => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  const pillarIcons = [BookCheck, UserCheck, ShieldCheck];

  return (
    <section id="keunggulan" className="py-16 md:py-20 border-y border-[#0F2415]/10 bg-[#EEFFD1]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Eyebrow & Headline Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-white border border-[#0F2415]/10 text-xs font-mono font-semibold text-[#0F2415] mb-2 w-fit">
              <Scale className="w-3.5 h-3.5 text-[#4FAE58]" />
              <span>{t.philosophy.badge}</span>
            </div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#0F2415] mt-1">
              {t.philosophy.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5C4E] mt-3 leading-relaxed">
              {t.philosophy.desc}
            </p>

            <div className="mt-6 p-4 rounded-[6px] bg-white border border-[#0F2415]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2415]">
                <Award className="w-4 h-4 text-[#4FAE58]" />
                <span>{t.philosophy.strategicValueTitle}</span>
              </div>
              <p className="text-xs text-[#4B5C4E] leading-relaxed whitespace-pre-line">
                {t.philosophy.strategicValueDesc}
              </p>
            </div>
          </div>

          {/* 3 Pillars of MMI Quality */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.philosophy.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[6px] border border-[#0F2415]/10 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-[4px] bg-[#EEFFD1] flex items-center justify-center text-[#0F2415] mb-3 border border-[#0F2415]/10">
                      <IconComp className="w-4 h-4 text-[#4FAE58]" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-[#0F2415] mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#4B5C4E] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#0F2415]/10 text-[11px] font-mono font-semibold text-[#0F2415]">
                    {pillar.footer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
