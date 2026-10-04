import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LicensingRoadmapSection: React.FC = () => {
  const { t, isEn } = useLanguage();

  return (
    <section id="alur-sertifikasi" className="py-20 md:py-28 border-t border-[#0F2415]/10 bg-[#FAFFEF]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#4B5C4E] font-medium block">
            {t.roadmap.badge}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#0F2415] mt-2">
            {t.roadmap.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5C4E] mt-3">
            {t.roadmap.desc}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.roadmap.steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-[8px] border border-[#0F2415]/15 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-sm font-bold bg-[#FAFFEF] text-[#0F2415] px-2.5 py-1 rounded-[2px] border border-[#0F2415]/10">
                    {isEn ? 'STEP ' : 'LANGKAH '}
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] bg-[#EEFFD1] text-[#0F2415] px-2 py-0.5 rounded-[2px] font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0F2415] mb-1">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-[#4FAE58] font-medium block mb-2">
                  {item.institution}
                </span>

                <p className="text-xs sm:text-sm text-[#4B5C4E] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#0F2415]/10 flex items-center gap-1.5 text-xs text-[#0F2415] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#4FAE58]" />
                <span>{isEn ? 'Standardized & Mentored' : 'Terstandarisasi & Didampingi'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
