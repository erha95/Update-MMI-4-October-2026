import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  onOpenConsultation: (initialProgram?: string) => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFFEF]/95 backdrop-blur-md shadow-xs border-b border-[#0F2415]/10'
          : 'bg-[#FAFFEF]/85 backdrop-blur-sm border-b border-[#0F2415]/10'
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex flex-col gap-0.5">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-[5px] bg-[#B6FF1A] flex items-center justify-center p-1 border border-[#0F2415]/20 shadow-xs transition-transform group-hover:scale-105">
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
            <div className="flex flex-col">
              <span className="font-display font-bold text-[1.1rem] tracking-tight text-[#0F2415]">
                Money Maker Institute <span className="text-xs font-mono font-medium text-[#4B5C4E]">(MMI)</span>
              </span>
            </div>
          </a>
          <span className="font-mono text-[0.68rem] text-[#4B5C4E] pl-9 tracking-tight hidden sm:block">
            {t.nav.brandSubtitle}
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#program"
            className="text-[0.88rem] text-[#4B5C4E] font-medium hover:text-[#0F2415] transition-colors"
          >
            {t.nav.programs}
          </a>
          <a
            href="#keunggulan"
            className="text-[0.88rem] text-[#4B5C4E] font-medium hover:text-[#0F2415] transition-colors"
          >
            {t.nav.methodsAndStandards}
          </a>
          <a
            href="#tahapan-kelulusan"
            className="text-[0.88rem] text-[#4B5C4E] font-medium hover:text-[#0F2415] transition-colors"
          >
            {t.nav.guidanceFlow}
          </a>
          <a
            href="#alur-sertifikasi"
            className="text-[0.88rem] text-[#4B5C4E] font-medium hover:text-[#0F2415] transition-colors"
          >
            {t.nav.bnspFlow}
          </a>
          <a
            href="#faq"
            className="text-[0.88rem] text-[#4B5C4E] font-medium hover:text-[#0F2415] transition-colors"
          >
            {t.nav.faq}
          </a>

          {/* Language Switcher */}
          <LanguageToggle />

          <a
            id="nav-consultation-btn"
            href="https://wa.me/6285121067147?text=Halo%20Tim%20Money%20Maker%20Institute%2C%20saya%20ingin%20konsultasi%20program%20sertifikasi%20pasar%20modal%2C%20biaya%20investasi%2C%20dan%20jadwal%20kelas."
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] font-bold px-3.5 py-2 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] rounded-[3px] transition-all hover:-translate-y-0.5 hover:shadow-md flex items-center gap-1.5 border border-[#0F2415]/10"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#0F2415]" />
            <span>{t.nav.consultWaBtn}</span>
          </a>
        </div>

        {/* Mobile menu trigger & Language Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle showIcon={false} />
          <a
            href="https://wa.me/6285121067147?text=Halo%20Tim%20Money%20Maker%20Institute%2C%20saya%20ingin%20konsultasi%20program%20sertifikasi%20pasar%20modal."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-2 py-1.5 bg-[#B6FF1A] text-[#0F2415] rounded-[3px] flex items-center gap-1 border border-[#0F2415]/15"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WA</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-[#0F2415] hover:bg-[#0F2415]/5 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFFEF] border-b border-[#0F2415]/15 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3.5 text-sm font-medium">
            <div className="flex items-center justify-between pb-2 border-b border-[#0F2415]/10">
              <span className="text-xs font-mono text-[#4B5C4E]">{t.common.language}:</span>
              <LanguageToggle />
            </div>
            <a
              href="#program"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4B5C4E] hover:text-[#0F2415] py-1 border-b border-[#0F2415]/5 flex items-center gap-2 font-semibold text-[#0F2415]"
            >
              <Award className="w-4 h-4 text-[#4FAE58]" />
              <span>{t.nav.mobilePrograms}</span>
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4B5C4E] hover:text-[#0F2415] py-1 border-b border-[#0F2415]/5"
            >
              {t.nav.methodsAndStandards}
            </a>
            <a
              href="#tahapan-kelulusan"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4B5C4E] hover:text-[#0F2415] py-1 border-b border-[#0F2415]/5"
            >
              {t.nav.guidanceFlow}
            </a>
            <a
              href="#kuis-sertifikasi"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="text-[#4B5C4E] hover:text-[#0F2415] py-1 border-b border-[#0F2415]/5 text-emerald-800 font-semibold"
            >
              {t.nav.mobileQuiz}
            </a>
            <a
              href="#alur-sertifikasi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4B5C4E] hover:text-[#0F2415] py-1 border-b border-[#0F2415]/5"
            >
              {t.nav.bnspFlow}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4B5C4E] hover:text-[#0F2415] py-1 border-b border-[#0F2415]/5"
            >
              {t.nav.faq}
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/6285121067147?text=Halo%20Tim%20Money%20Maker%20Institute%2C%20saya%20ingin%20konsultasi%20program%20sertifikasi%20pasar%20modal%2C%20biaya%20investasi%2C%20dan%20jadwal%20kelas."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center font-bold py-2.5 bg-[#B6FF1A] text-[#0F2415] rounded-[3px] border border-[#0F2415]/15 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#0F2415]" />
                <span>{t.common.waConsultation} (0851-2106-7147)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
