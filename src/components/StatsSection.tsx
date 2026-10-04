import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 border-y border-[#0F2415]/20 bg-[#0F2415] text-[#FAFFEF]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#FAFFEF]/10">
          {t.stats.items.map((item, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-4' : ''}`}>
              <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#B6FF1A] tracking-tight">
                {item.num}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-2">
                {item.label}
              </div>
              <div className="text-[11px] font-mono text-[#BFC9C1] mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
