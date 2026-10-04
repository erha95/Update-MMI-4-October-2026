import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isEn } = useLanguage();

  return (
    <footer className="border-t border-[#0F2415]/15 pt-12 pb-8 bg-[#FAFFEF]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-[5px] bg-[#B6FF1A] flex items-center justify-center p-1 border border-[#0F2415]/20 shadow-2xs">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#B6FF1A" />
                  <path
                    d="M5 17 L5 12 L9.5 12 L9.5 7 L14 7 L14 15 L19 15 L19 9"
                    stroke="#0F2415"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-[#0F2415]">
                Money Maker Institute (MMI)
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4B5C4E] leading-relaxed max-w-md">
              {t.footer.brandDesc}
            </p>

            <div className="mt-4 space-y-2 text-xs text-[#4B5C4E]">
              <p className="flex items-center gap-2 font-medium">
                <MessageCircle className="w-4 h-4 text-[#4FAE58] shrink-0" />
                <a
                  href={`https://wa.me/6285121067147?text=${encodeURIComponent(
                    isEn
                      ? 'Hello Money Maker Institute (MMI) Team, I would like to inquire about class schedules, fees, and capital market certification schemes.'
                      : 'Halo Tim Money Maker Institute (MMI), saya ingin berkonsultasi mengenai jadwal, biaya investasi, dan skema sertifikasi pasar modal.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F2415] text-[#0F2415] font-semibold underline underline-offset-2"
                >
                  {t.footer.waLabel}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4FAE58] shrink-0" />
                <span>{t.footer.address}</span>
              </p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F2415] mb-3">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4B5C4E]">
              <li>
                <a href="#keunggulan" className="hover:text-[#0F2415] transition-colors">
                  {t.nav.methodsAndStandards}
                </a>
              </li>
              <li>
                <a href="#tahapan-kelulusan" className="hover:text-[#0F2415] transition-colors">
                  {t.nav.guidanceFlow}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#0F2415] transition-colors">
                  {t.nav.programs}
                </a>
              </li>
              <li>
                <a href="#kuis-sertifikasi" className="hover:text-[#0F2415] transition-colors">
                  {t.quiz.title}
                </a>
              </li>
              <li>
                <a href="#alur-sertifikasi" className="hover:text-[#0F2415] transition-colors">
                  {t.nav.bnspFlow}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0F2415] transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Col */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F2415] mb-3">
              {t.footer.schemesTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4B5C4E]">
              <li>
                <a href="#program" className="hover:text-[#0F2415] transition-colors">
                  WPPE — {isEn ? 'Broker-Dealer Representative' : 'Wakil Perantara Pedagang Efek'}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#0F2415] transition-colors">
                  WPPE-P — {isEn ? 'Marketing Broker-Dealer Representative' : 'WPPE Pemasaran'}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#0F2415] transition-colors">
                  WMI — {isEn ? 'Investment Manager Representative' : 'Wakil Manajer Investasi'}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#0F2415] transition-colors">
                  WPEE — {isEn ? 'Underwriter Representative' : 'Wakil Penjamin Emisi Efek'}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#0F2415] transition-colors">
                  WAPERD — {isEn ? 'Mutual Fund Selling Agent' : 'Agen Penjual Efek Reksa Dana'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#0F2415]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#4B5C4E]">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.footer.standards}</span>
            <span>•</span>
            <span>{t.footer.accreditation}</span>
            <span>•</span>
            <span>{t.footer.consultation}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
