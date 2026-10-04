import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Sparkles, BookOpen, ChevronRight, TrendingUp, MessageCircle } from 'lucide-react';
import { StageId } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenConsultation: (initialProgram?: string) => void;
  onOpenDiagnostic: () => void;
  onSelectStage?: (stage: StageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenDiagnostic
}) => {
  const { t, isEn } = useLanguage();
  const [selectedSchemeCode, setSelectedSchemeCode] = useState<'WPPE' | 'WPPE-P' | 'WMI' | 'WPEE' | 'WAPERD'>('WPPE');

  const currentSchemeData =
    t.hero.schemes.find((s) => s.code === selectedSchemeCode) || t.hero.schemes[0];

  return (
    <header className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Soft neon gradient glow in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full bg-[#B6FF1A]/30 blur-[100px] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-32 w-[340px] h-[340px] rounded-full bg-[#4FAE58]/15 blur-[90px] z-0"
      />

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-[#EEFFD1] border border-[#0F2415]/10 w-fit mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FAE58] animate-pulse" />
              <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#0F2415] font-medium">
                {t.hero.badge}
              </span>
            </div>

            <p className="font-display italic font-medium text-sm sm:text-base text-[#4B5C4E] mt-1">
              {t.hero.quote}
            </p>

            <h1 className="font-display font-semibold text-[2.2rem] sm:text-[3rem] lg:text-[3.3rem] leading-[1.08] text-[#0F2415] mt-3.5 tracking-tight">
              {t.hero.headlinePart1}
              <span className="bg-[#B6FF1A] px-2 py-0.5 inline-block text-[#0F2415] rounded-[2px] shadow-xs">
                {t.hero.headlineHighlight}
              </span>
              .
            </h1>

            <p className="mt-5 text-base sm:text-[1.06rem] text-[#4B5C4E] max-w-[48ch] leading-relaxed">
              {t.hero.subheadline}
            </p>

            {/* Quick Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs text-[#0F2415]">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-white border border-[#0F2415]/10 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#4FAE58]" />
                <span className="font-medium">{t.hero.badgeSkkni}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-white border border-[#0F2415]/10 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F2415]" />
                <span className="font-medium">{t.hero.badgeAccreditation}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-white border border-[#0F2415]/10 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FDE00]" />
                <span className="font-medium">{t.hero.badgePassRate}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#program"
                className="font-sans text-[0.88rem] font-bold px-6 py-3.5 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] rounded-[3px] transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2 cursor-pointer border border-[#0F2415]/10"
              >
                <span>{isEn ? 'Explore Programs' : 'Lihat Program Sertifikasi'}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                id="hero-diagnostic-btn"
                onClick={onOpenDiagnostic}
                className="font-sans text-[0.88rem] font-semibold px-5 py-3.5 border border-[#0F2415] text-[#0F2415] hover:bg-[#0F2415] hover:text-[#FAFFEF] rounded-[3px] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>{t.hero.btnQuiz}</span>
              </button>

              <a
                href="https://wa.me/6285121067147?text=Halo%20Tim%20Money%20Maker%20Institute%2C%20saya%20ingin%20konsultasi%20program%20sertifikasi%20pasar%20modal%2C%20biaya%20investasi%2C%20dan%20jadwal%20kelas."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.85rem] font-bold text-[#0F2415] hover:text-emerald-950 flex items-center gap-1.5 py-2 px-1 underline underline-offset-4"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WA: 0851-2106-7147</span>
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Certification Card Hub */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white/80 backdrop-blur-xs p-5 sm:p-7 rounded-[8px] border border-[#0F2415]/10 shadow-xs relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#0F2415]/10 mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#4B5C4E]" />
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#0F2415]">
                    {t.hero.schemesHeader}
                  </span>
                </div>
                <span className="font-mono text-[0.65rem] bg-[#EEFFD1] text-[#0F2415] px-2 py-0.5 rounded-[2px] font-medium">
                  {isEn ? '13 Schemes Available' : '13 Skema Tersedia'}
                </span>
              </div>

              {/* Scheme Tab Selector */}
              <div className="grid grid-cols-5 gap-1 p-1 bg-[#FAFFEF] rounded-[4px] border border-[#0F2415]/10 mb-4">
                {t.hero.schemes.map((scheme) => (
                  <button
                    key={scheme.code}
                    onClick={() => setSelectedSchemeCode(scheme.code as any)}
                    className={`py-1.5 px-1 text-center font-mono text-[11px] font-bold rounded-[3px] transition-all cursor-pointer ${
                      selectedSchemeCode === scheme.code
                        ? 'bg-[#0F2415] text-[#FAFFEF] shadow-xs'
                        : 'text-[#4B5C4E] hover:text-[#0F2415] hover:bg-white/60'
                    }`}
                  >
                    {scheme.code}
                  </button>
                ))}
              </div>

              {/* Selected Scheme Detail Box */}
              <div className="bg-[#FAFFEF] p-5 rounded-[6px] border border-[#0F2415]/10 space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#4FAE58] uppercase">
                      {currentSchemeData.code} • SKKNI No. 20/2024
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#0F2415] mt-0.5">
                      {currentSchemeData.name}
                    </h3>
                    <p className="text-xs font-medium text-[#4B5C4E] mt-0.5">
                      {isEn ? 'Career Target: ' : 'Target Karier: '}
                      <strong className="text-[#0F2415]">{currentSchemeData.role}</strong>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#4B5C4E] leading-relaxed">
                  {currentSchemeData.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#0F2415]/10 text-xs">
                  <div className="p-2 rounded-[3px] bg-white border border-[#0F2415]/10">
                    <span className="text-[10px] font-mono text-[#4B5C4E] block">
                      {isEn ? 'Learning Duration:' : 'Durasi Pembelajaran:'}
                    </span>
                    <span className="font-semibold text-[#0F2415]">{currentSchemeData.duration}</span>
                  </div>
                  <div className="p-2 rounded-[3px] bg-white border border-[#0F2415]/10">
                    <span className="text-[10px] font-mono text-[#4B5C4E] block">
                      {isEn ? 'Learning Format:' : 'Format Belajar:'}
                    </span>
                    <span className="font-semibold text-emerald-800">
                      {isEn ? 'Public & Private 1:1' : 'Public & Private 1:1'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/6285121067147?text=${encodeURIComponent(
                      isEn
                        ? `Hello Money Maker Institute (MMI) Team,\n\nI would like to consult regarding the *${currentSchemeData.code} (${currentSchemeData.name})* certification scheme.\nPlease provide upcoming schedule dates, investment fee details, and LSP IKEPAMI assessment preparation. Thank you.`
                        : `Halo Tim Money Maker Institute (MMI),\n\nSaya ingin berkonsultasi mengenai skema sertifikasi *${currentSchemeData.code} (${currentSchemeData.name})*.\nMohon info jadwal kelas terdekat, rincian biaya investasi, dan persiapan asesmen LSP IKEPAMI. Terima kasih.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full font-sans text-xs font-bold py-2.5 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] rounded-[3px] transition-colors flex items-center justify-center gap-1.5 border border-[#0F2415]/15"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#0F2415]" />
                    <span>
                      {isEn
                        ? `Consult ${currentSchemeData.code} via WhatsApp`
                        : `Konsultasi ${currentSchemeData.code} via WhatsApp`}
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-4 pt-3 border-t border-[#0F2415]/10 flex items-center justify-between text-[11px] text-[#4B5C4E]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4FAE58]" />
                  <span>Public &amp; Private 1:1</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F2415]" />
                  <span>{isEn ? 'Official BNSP Certificate' : 'Sertifikat Resmi BNSP'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
