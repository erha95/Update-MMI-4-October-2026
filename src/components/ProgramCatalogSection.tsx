import React, { useState } from 'react';
import { ProgramItem, ProgramCategory } from '../types';
import { PROGRAMS_DATA } from '../data/programsData';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Clock,
  BookOpen,
  MessageCircle,
  Users,
  User,
  ShieldCheck,
  CheckCircle2,
  Landmark,
  GraduationCap,
  Layers,
  Award
} from 'lucide-react';

interface ProgramCatalogSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
  onOpenConsultation: (programName?: string) => void;
}

export const ProgramCatalogSection: React.FC<ProgramCatalogSectionProps> = ({
  onSelectProgram,
  onOpenConsultation
}) => {
  const { t, isEn } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>('all');
  const [selectedClassTypeByProgram, setSelectedClassTypeByProgram] = useState<Record<string, 'public' | 'private'>>({});

  const categories: { id: ProgramCategory; label: string; count: number }[] = [
    { id: 'all', label: t.catalog.categories.all, count: PROGRAMS_DATA.length },
    {
      id: 'brokerage',
      label: t.catalog.categories.brokerage,
      count: PROGRAMS_DATA.filter((p) => p.category === 'brokerage').length
    },
    {
      id: 'investment-mgmt',
      label: t.catalog.categories.investmentMgmt,
      count: PROGRAMS_DATA.filter((p) => p.category === 'investment-mgmt').length
    },
    {
      id: 'underwriting',
      label: t.catalog.categories.underwriting,
      count: PROGRAMS_DATA.filter((p) => p.category === 'underwriting').length
    },
    {
      id: 'analysis',
      label: t.catalog.categories.analysis,
      count: PROGRAMS_DATA.filter((p) => p.category === 'analysis').length
    },
    {
      id: 'mutual-funds',
      label: t.catalog.categories.mutualFunds,
      count: PROGRAMS_DATA.filter((p) => p.category === 'mutual-funds').length
    },
    {
      id: 'risk-compliance',
      label: t.catalog.categories.riskCompliance,
      count: PROGRAMS_DATA.filter((p) => p.category === 'risk-compliance').length
    }
  ];

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleToggleClassType = (programId: string, type: 'public' | 'private') => {
    setSelectedClassTypeByProgram((prev) => ({
      ...prev,
      [programId]: type
    }));
  };

  return (
    <section id="program" className="py-20 md:py-28 border-t border-[#0F2415]/10 bg-[#FAFFEF]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mb-10">
          <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#4B5C4E] font-semibold block">
            {t.catalog.badge}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#0F2415] mt-2">
            {t.catalog.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5C4E] mt-3 leading-relaxed">
            {t.catalog.desc}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-[3px] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
                  : 'bg-white text-[#4B5C4E] hover:bg-[#EEFFD1] hover:text-[#0F2415] border border-[#0F2415]/10'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.2 rounded-[2px] ${
                  activeCategory === cat.id ? 'bg-[#B6FF1A] text-[#0F2415] font-bold' : 'bg-[#FAFFEF] text-[#4B5C4E]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => {
            const selectedClass = selectedClassTypeByProgram[prog.id] || 'public';
            const isPublic = selectedClass === 'public';

            return (
              <div
                key={prog.id}
                id={`card-${prog.id}`}
                className="bg-white rounded-[10px] border border-[#0F2415]/15 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
                style={{
                  borderTopWidth: '5px',
                  borderTopColor: '#4FAE58'
                }}
              >
                {prog.isPopular && (
                  <div className="absolute -top-3.5 right-4 bg-[#B6FF1A] text-[#0F2415] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-[2px] border border-[#0F2415]/20 flex items-center gap-1 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#0F2415]" />
                    <span>POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Top Metadata Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-[#0F2415] bg-[#FAFFEF] px-2 py-0.5 rounded-[2px] border border-[#0F2415]/15">
                        {prog.code}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-emerald-950 bg-[#EEFFD1] px-2 py-0.5 rounded-[2px]">
                        {prog.qualificationLevel}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#4B5C4E] font-semibold bg-[#FAFFEF] px-2 py-0.5 rounded-[2px] border border-[#0F2415]/10">
                      {isEn ? `${prog.learningHours.replace('Jam', 'Hours')}` : prog.learningHours}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F2415] leading-snug group-hover:text-emerald-950 transition-colors">
                    {isEn ? prog.titleEn : prog.name}
                  </h3>
                  <p className="font-mono text-[11px] text-[#4B5C4E] mt-0.5 line-clamp-1">
                    {isEn ? prog.name : prog.titleEn}
                  </p>

                  {/* 1. Deskripsi Singkat */}
                  <p className="text-xs text-[#4B5C4E] mt-3 line-clamp-3 leading-relaxed">
                    {prog.shortDesc}
                  </p>

                  {/* 4 Pillars Summary Box */}
                  <div className="mt-4 pt-3 border-t border-[#0F2415]/10 space-y-2 text-xs text-[#0F2415]">
                    {/* 2. Unit Kompetensi */}
                    <div className="flex items-center justify-between gap-2 text-[#4B5C4E]">
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#4FAE58] shrink-0" />
                        <span className="font-medium text-[#0F2415]">
                          {isEn ? 'Competency Units:' : 'Unit Kompetensi:'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs text-[#0F2415] bg-[#FAFFEF] px-2 py-0.5 rounded-[2px] border border-[#0F2415]/10">
                        {prog.unitKompetensi.length} {t.catalog.unitCount}
                      </span>
                    </div>

                    {/* 3. Syarat Peserta Ringkas */}
                    <div className="flex items-start gap-1.5 text-[#4B5C4E]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0F2415] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight line-clamp-2">
                        <strong>{isEn ? 'Prereq:' : 'Syarat:'}</strong> Min. {prog.persyaratanPeserta[0]?.split('+')[0]?.replace('Minimal', '').trim()} {isEn ? '(experience & BNSP pathways available)' : '(tersedia jalur pengalaman & BNSP)'}
                      </span>
                    </div>

                    {/* 4. Metode Pelatihan */}
                    <div className="flex items-center gap-1.5 text-[#4B5C4E]">
                      <Award className="w-3.5 h-3.5 text-[#4FAE58] shrink-0" />
                      <span className="text-[11px] text-[#0F2415]">
                        <strong>{isEn ? 'Method:' : 'Metode:'}</strong> {isEn ? 'Public, In House, & Private 1:1' : 'Publik, In House, & Private 1:1'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Class Format & Consultation Info */}
                <div className="mt-5 pt-4 border-t border-[#0F2415]/10">
                  {/* Class Format Switcher Toggle */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-[#0F2415] mb-1.5">
                      <span>{t.catalog.selectFormat}</span>
                      <span className="text-[10px] text-[#4FAE58] font-bold">
                        {isPublic ? 'Public Class' : 'Private Class 1:1'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 p-0.5 bg-[#FAFFEF] rounded-[4px] border border-[#0F2415]/15">
                      <button
                        type="button"
                        onClick={() => handleToggleClassType(prog.id, 'public')}
                        className={`py-1.5 px-2 text-xs font-semibold rounded-[3px] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isPublic
                            ? 'bg-[#0F2415] text-[#B6FF1A] shadow-2xs font-bold'
                            : 'text-[#4B5C4E] hover:text-[#0F2415]'
                        }`}
                      >
                        <Users className="w-3 h-3" />
                        <span>Public Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggleClassType(prog.id, 'private')}
                        className={`py-1.5 px-2 text-xs font-semibold rounded-[3px] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          !isPublic
                            ? 'bg-[#0F2415] text-[#B6FF1A] shadow-2xs font-bold'
                            : 'text-[#4B5C4E] hover:text-[#0F2415]'
                        }`}
                      >
                        <User className="w-3 h-3" />
                        <span>Private 1:1</span>
                      </button>
                    </div>
                  </div>

                  {/* Consultation Information Box */}
                  <div className="bg-[#FAFFEF] rounded-[6px] p-3 border border-[#0F2415]/10 space-y-2 mb-3 text-xs">
                    <ul className="space-y-1.5 text-[11px] text-[#4B5C4E] pl-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#4FAE58] shrink-0" />
                        <span className="text-[#0F2415] font-medium">
                          {isPublic ? prog.metodePelatihan.publicClass : prog.metodePelatihan.privateClass}
                        </span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#4FAE58] shrink-0" />
                        <span>{isEn ? 'APL-01/02 portfolio curation & roleplay' : 'Kurasi berkas APL-01/02 & simulasi roleplay'}</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Landmark className="w-3 h-3 text-[#0F2415] shrink-0" />
                        <span>{isEn ? 'Official LSP IKEPAMI assessment preparation' : 'Persiapan uji kompetensi LSP IKEPAMI'}</span>
                      </li>
                    </ul>

                    {/* WhatsApp Callout */}
                    <div className="pt-2 border-t border-[#0F2415]/10 bg-[#EEFFD1]/80 -mx-3 -mb-3 p-2.5 rounded-b-[5px] flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-mono font-bold text-[#4B5C4E] uppercase block">
                          {isEn ? 'TUITION FEES & SCHEDULE' : 'BIAYA INVESTASI & JADWAL'}
                        </span>
                        <span className="font-semibold text-xs text-[#0F2415]">
                          {isEn ? 'Official WhatsApp Service' : 'Layanan WhatsApp Resmi'}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-emerald-950 bg-white px-2 py-0.5 rounded-[2px] border border-[#0F2415]/15">
                        0851-2106-7147
                      </span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <button
                      onClick={() => onSelectProgram(prog)}
                      className="px-3 py-2.5 bg-white hover:bg-[#FAFFEF] border border-[#0F2415]/20 text-[#0F2415] text-xs font-semibold rounded-[3px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.catalog.btnDetail}</span>
                    </button>

                    <a
                      href={`https://wa.me/6285121067147?text=${encodeURIComponent(
                        isEn
                          ? `Hello Money Maker Institute (MMI) Team,\n\nI would like to inquire about the *${prog.titleEn} (${prog.code})* certification program in *${isPublic ? 'Public Class' : 'Private Class 1:1'}* format.\nPlease provide training fees, upcoming dates, and LSP IKEPAMI assessment preparation. Thank you.`
                          : `Halo Tim Money Maker Institute (MMI),\n\nSaya ingin berkonsultasi mengenai program sertifikasi *${prog.name} (${prog.code})* format *${isPublic ? 'Public Class' : 'Private Class 1:1'}*.\nMohon rincian biaya investasi, jadwal kelas terdekat, dan persiapan asesmen LSP IKEPAMI. Terima kasih.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] text-xs font-bold rounded-[3px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-[#0F2415]/15 shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#0F2415]" />
                      <span>{t.catalog.btnConsultCard}</span>
                    </a>
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
