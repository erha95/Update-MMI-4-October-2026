import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Quote, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { isEn } = useLanguage();

  const englishTestimonials: Record<
    string,
    { quote: string; program: string; role: string; company: string }
  > = {
    't-1': {
      quote:
        'The learning methodology was directly to the point, and the assessment simulation matched the actual LSP exam remarkably well. Coming from a non-accounting background, I passed as Competent on my very first attempt at LSP IKEPAMI.',
      program: 'WPPE Program (Stage 1: Professional)',
      role: 'Institutional Equity Sales',
      company: 'PT Mirae Asset Sekuritas Indonesia'
    },
    't-2': {
      quote:
        'The asset allocation and portfolio performance evaluation modules were taught directly by senior Fund Managers. Not just theoretical formulas, but real asset management industry insights that are immensely valuable in daily work.',
      program: 'WMI Program (Stage 1 & 2: Professional / Advisory)',
      role: 'Associate Portfolio Manager',
      company: 'PT Mandiri Manajemen Investasi'
    },
    't-3': {
      quote:
        "After 6 years working in securities, I decided to establish a boutique advisory firm. MMI's strategic guidance helped me formulate compliance SOPs, healthy unit economics, and an institutional client network.",
      program: '1:1 Advisory Mentoring (Stage 2: Firm Builder)',
      role: 'Founder & Managing Partner',
      company: 'Artha Capital Advisory'
    },
    't-4': {
      quote:
        'The evening cohort sessions were a lifesaver for my busy banking schedule. The practice question bank was spot-on, and the mentors patiently guided mutual fund risk profiling concepts until I successfully secured my BNSP credential.',
      program: 'WAPERD Program (Stage 1: Professional)',
      role: 'Priority Banking Wealth Specialist',
      company: 'PT Bank Central Asia Tbk'
    },
    't-5': {
      quote:
        "MMI's sequential philosophy makes complete sense. I learned how to diversify assets from operating business cashflows into an inflation-resilient multi-asset portfolio with a measurable Investment Policy Statement.",
      program: 'Portfolio Workshop & Mentoring (Stage 3: Wealth Allocator)',
      role: 'Private Investor & Ex-VP Finance',
      company: 'Independent Family Office'
    }
  };

  return (
    <section className="py-20 md:py-28 border-t border-[#0F2415]/10 bg-[#FAFFEF]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#4B5C4E] font-medium block">
            {isEn ? 'Alumni & Industry Network' : 'Jejaring Alumni & Industri'}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#0F2415] mt-2">
            {isEn
              ? 'Trusted by Capital Market Professionals & Industry Leaders'
              : 'Dipercaya Profesional Pasar Modal & Pelaku Bisnis'}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5C4E] mt-3">
            {isEn
              ? 'Real success stories from alumni who completed their competency assessments at LSP IKEPAMI, earned official BNSP credentials, and accelerated their careers in the capital market industry with Money Maker Institute.'
              : 'Cerita nyata dari alumni yang telah menyelesaikan uji kompetensi di LSP IKEPAMI, meraih sertifikat resmi BNSP, dan melesatkan karier profesionalnya di industri pasar modal bersama Money Maker Institute.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => {
            const enData = englishTestimonials[item.id];
            const displayQuote = isEn && enData ? enData.quote : item.quote;
            const displayProgram = isEn && enData ? enData.program : item.program;
            const displayRole = isEn && enData ? enData.role : item.role;
            const displayCompany = isEn && enData ? enData.company : item.company;

            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-[8px] border border-[#0F2415]/15 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] border"
                      style={{
                        backgroundColor: `${item.badgeColor}15`,
                        color: item.badgeColor,
                        borderColor: `${item.badgeColor}30`
                      }}
                    >
                      {displayProgram}
                    </span>
                    <Quote className="w-4 h-4 text-[#0F2415]/20" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B5C4E] leading-relaxed italic mb-6">
                    "{displayQuote}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-4 border-t border-[#0F2415]/10 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs text-white shrink-0 shadow-2xs"
                    style={{ backgroundColor: item.badgeColor }}
                  >
                    {item.avatarText}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-display font-bold text-sm text-[#0F2415] truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#4FAE58] font-medium truncate">
                      {displayRole}
                    </p>
                    <p className="text-[11px] font-mono text-[#4B5C4E] truncate flex items-center gap-1">
                      <Building2 className="w-3 h-3 inline" />
                      <span>{displayCompany}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
