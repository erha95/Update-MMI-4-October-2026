import React, { useState } from 'react';
import { ProgramItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Award,
  Check,
  CheckCircle2,
  MessageCircle,
  Users,
  User,
  Landmark,
  FileText,
  GraduationCap,
  Layers,
  BookOpen,
  Briefcase,
  Calendar
} from 'lucide-react';
import { WppeScheduleTable } from './WppeScheduleTable';
import { WmiScheduleTable } from './WmiScheduleTable';
import { WpeeScheduleTable } from './WpeeScheduleTable';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenConsultation: (programName: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenConsultation
}) => {
  const { t, isEn } = useLanguage();
  const [activeTab, setActiveTab] = useState<'desc' | 'units' | 'requirements' | 'methods' | 'schedule'>('desc');

  if (!program) return null;

  const displayName = isEn ? (program.titleEn || program.name) : program.name;
  const displayHours = isEn
    ? program.learningHours.replace(/Jam/gi, 'Hours').replace(/Bulan/gi, 'Months').replace(/Hari/gi, 'Days')
    : program.learningHours;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0F2415]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[10px] border border-[#0F2415]/20 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.modals.detail.close}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FAFFEF] text-[#0F2415] transition-colors border border-transparent hover:border-[#0F2415]/10 cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#0F2415]/10 p-6 sm:p-7 pr-12 bg-white shrink-0">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="font-mono text-xs font-bold bg-[#0F2415] text-[#B6FF1A] px-2.5 py-0.5 rounded-[2px]">
              {program.code}
            </span>
            <span className="font-mono text-xs font-bold text-[#0F2415] bg-[#EEFFD1] px-2.5 py-0.5 rounded-[2px] border border-[#0F2415]/15">
              {program.qualificationLevel}
            </span>
            <span className="font-mono text-xs font-semibold text-[#4B5C4E] bg-[#FAFFEF] px-2.5 py-0.5 rounded-[2px] border border-[#0F2415]/10">
              {displayHours}
            </span>
            <span className="font-mono text-xs font-medium text-[#4FAE58] bg-[#E4F7E2] px-2.5 py-0.5 rounded-[2px]">
              {program.stageName}
            </span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0F2415] leading-tight">
            {displayName}
          </h2>
          <p className="font-mono text-xs text-[#4B5C4E] mt-1">
            {isEn ? program.name : program.titleEn}
          </p>

          {/* Subfield & Legal Basis */}
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#4B5C4E]">
            {program.subfield && (
              <span className="font-medium">
                <strong>{isEn ? 'Subfield:' : 'Subbidang:'}</strong> {program.subfield}
              </span>
            )}
            <span className="font-medium text-emerald-950">
              <strong>{isEn ? 'Legal Framework:' : 'Landasan:'}</strong> {program.legalBasis}
            </span>
          </div>

          {/* Navigation Tabs for the 4 Key Elements */}
          <div className="flex items-center gap-1 sm:gap-2 mt-4 pt-4 border-t border-[#0F2415]/10 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('desc')}
              className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'desc'
                  ? 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
                  : 'bg-[#FAFFEF] text-[#4B5C4E] hover:text-[#0F2415] hover:bg-[#EEFFD1]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.modals.detail.tabs.desc}</span>
            </button>

            <button
              onClick={() => setActiveTab('units')}
              className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'units'
                  ? 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
                  : 'bg-[#FAFFEF] text-[#4B5C4E] hover:text-[#0F2415] hover:bg-[#EEFFD1]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.modals.detail.tabs.units} ({program.unitKompetensi.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'requirements'
                  ? 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
                  : 'bg-[#FAFFEF] text-[#4B5C4E] hover:text-[#0F2415] hover:bg-[#EEFFD1]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.modals.detail.tabs.requirements}</span>
            </button>

            <button
              onClick={() => setActiveTab('methods')}
              className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'methods'
                  ? 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
                  : 'bg-[#FAFFEF] text-[#4B5C4E] hover:text-[#0F2415] hover:bg-[#EEFFD1]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.modals.detail.tabs.methods}</span>
            </button>

            {program.code === 'WPPE' && (
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'bg-[#16A34A] text-white shadow-xs'
                    : 'bg-[#DCFCE7] text-[#15803D] hover:bg-[#bbf7d0]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Jadwal BINUS (16-24 Nov)</span>
              </button>
            )}

            {program.code === 'WMI' && (
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'bg-[#E11D48] text-white shadow-xs'
                    : 'bg-[#FFE4E6] text-[#BE123C] hover:bg-[#fecdd3]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Jadwal BINUS (16-26 Nov)</span>
              </button>
            )}

            {program.code === 'WPEE' && (
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-[3px] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'bg-[#EAB308] text-[#0F2415] shadow-xs'
                    : 'bg-[#FEF9C3] text-[#854D0E] hover:bg-[#fef08a]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Jadwal BINUS (16-30 Nov)</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm text-[#4B5C4E] bg-[#FAFFEF]/40">
          {/* TAB 1: DESKRIPSI PELATIHAN */}
          {activeTab === 'desc' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Special Partnership Banner for WPPE */}
              {program.code === 'WPPE' && (
                <div className="bg-[#FEF08A]/35 border-2 border-[#EAB308]/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold bg-[#0F2415] text-[#B6FF1A] px-2 py-0.5 rounded">
                        BATCH NOVEMBER 2026
                      </span>
                      <span className="font-mono text-xs font-bold text-[#854D0E]">
                        Kemitraan Resmi BINUS CENTER
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0F2415]">
                      Jadwal Kelas WPPE: 16 – 24 November 2026 (7 Sesi / 12 Jam)
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-0.5">
                      Technical Meeting 16 Nov • 6 Sesi Materi & Roleplay 17-24 Nov (18.30-20.30 WIB via Zoom)
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-mono text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Lihat Tabel Jadwal Lengkap →</span>
                  </button>
                </div>
              )}

              {/* Special Partnership Banner for WMI */}
              {program.code === 'WMI' && (
                <div className="bg-[#FEF08A]/35 border-2 border-[#EAB308]/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold bg-[#0F2415] text-[#B6FF1A] px-2 py-0.5 rounded">
                        BATCH NOVEMBER 2026
                      </span>
                      <span className="font-mono text-xs font-bold text-[#854D0E]">
                        Kemitraan Resmi BINUS CENTER
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0F2415]">
                      Jadwal Kelas WMI: 16 – 26 November 2026 (8 Sesi / 14 Jam)
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-0.5">
                      Technical Meeting 16 Nov • 7 Sesi Materi & Roleplay 18-26 Nov (18.30-20.30 WIB via Zoom)
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className="inline-flex items-center gap-1.5 bg-[#E11D48] hover:bg-[#be123c] text-white font-mono text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Lihat Tabel Jadwal Lengkap →</span>
                  </button>
                </div>
              )}

              {/* Special Partnership Banner for WPEE */}
              {program.code === 'WPEE' && (
                <div className="bg-[#FEF08A]/35 border-2 border-[#EAB308]/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold bg-[#0F2415] text-[#B6FF1A] px-2 py-0.5 rounded">
                        BATCH NOVEMBER 2026
                      </span>
                      <span className="font-mono text-xs font-bold text-[#854D0E]">
                        Kemitraan Resmi BINUS CENTER
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0F2415]">
                      Jadwal Kelas WPEE: 16 – 30 November 2026 (9 Sesi / 16 Jam)
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-0.5">
                      Technical Meeting 16 Nov • 8 Sesi Materi, Kertas Kerja & Roleplay 19-30 Nov (18.30-20.30 WIB via Zoom)
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className="inline-flex items-center gap-1.5 bg-[#EAB308] hover:bg-[#ca8a04] text-[#0F2415] font-mono text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Lihat Tabel Jadwal Lengkap →</span>
                  </button>
                </div>
              )}

              {/* Official Description */}
              <div className="bg-white p-5 rounded-[8px] border border-[#0F2415]/15 shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#0F2415] text-[#B6FF1A] flex items-center justify-center font-mono font-bold text-xs">
                    1
                  </span>
                  <h3 className="font-display font-bold text-base text-[#0F2415]">
                    {isEn ? 'Official Training Description' : 'Deskripsi Pelatihan Resmi'}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#0F2415] bg-[#FAFFEF] p-4 rounded-[6px] border border-[#0F2415]/10 font-sans">
                  {program.fullDesc}
                </p>
                <div className="mt-4 pt-3 border-t border-[#0F2415]/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-[#4B5C4E] block font-bold uppercase">
                      {isEn ? 'QUALIFICATION LEVEL:' : 'JENJANG KUALIFIKASI:'}
                    </span>
                    <span className="font-bold text-[#0F2415]">{program.qualificationLevel}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#4B5C4E] block font-bold uppercase">
                      {isEn ? 'TIME ALLOCATION:' : 'ALOKASI WAKTU:'}
                    </span>
                    <span className="font-bold text-[#0F2415]">{displayHours}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#4B5C4E] block font-bold uppercase">
                      {isEn ? 'LEGAL FRAMEWORK:' : 'DASAR HUKUM:'}
                    </span>
                    <span className="font-bold text-[#0F2415]">{program.legalBasis}</span>
                  </div>
                </div>
              </div>

              {/* Target Audience & Career Prospects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-[8px] border border-[#0F2415]/10 shadow-2xs">
                  <h4 className="font-display font-bold text-sm text-[#0F2415] mb-2.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#4FAE58]" />
                    <span>{t.modals.detail.targetAudienceTitle}</span>
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {program.targetAudience.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#0F2415]">
                        <Check className="w-3.5 h-3.5 text-[#4FAE58] shrink-0 mt-0.5" />
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-[8px] border border-[#0F2415]/10 shadow-2xs">
                  <h4 className="font-display font-bold text-sm text-[#0F2415] mb-2.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#4FAE58]" />
                    <span>{t.modals.detail.careerProspectsTitle}</span>
                  </h4>
                  <ul className="space-y-2 pl-1">
                    {program.careerProspects.map((career, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#0F2415]">
                        <Check className="w-3.5 h-3.5 text-[#4FAE58] shrink-0 mt-0.5" />
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fast highlights */}
              <div className="bg-white p-4 rounded-[8px] border border-[#0F2415]/10 shadow-2xs">
                <h4 className="font-display font-bold text-sm text-[#0F2415] mb-3">
                  {isEn ? 'MMI Program Advantages & Facilities:' : 'Keunggulan & Fasilitas Program MMI:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {program.benefits.map((ben, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#0F2415]">
                      <CheckCircle2 className="w-4 h-4 text-[#4FAE58] shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: UNIT KOMPETENSI */}
          {activeTab === 'units' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-white p-4 rounded-[8px] border border-[#0F2415]/15 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0F2415] text-[#B6FF1A] flex items-center justify-center font-mono font-bold text-xs">
                    2
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#0F2415]">
                      {t.modals.detail.unitsTitle} ({program.unitKompetensi.length} {isEn ? 'Units' : 'Unit'})
                    </h3>
                    <p className="text-xs text-[#4B5C4E]">
                      {isEn
                        ? `Indonesian National Work Competency Standard (${program.legalBasis})`
                        : `Standar Kompetensi Kerja Nasional Indonesia (${program.legalBasis})`}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold bg-[#FAFFEF] px-3 py-1 rounded-[3px] border border-[#0F2415]/15 text-[#0F2415]">
                  {isEn
                    ? `Total ${program.unitKompetensi.length} SKKNI Units`
                    : `Total ${program.unitKompetensi.length} Unit SKKNI`}
                </span>
              </div>

              <div className="space-y-2">
                {program.unitKompetensi.map((uk, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-[6px] bg-white border border-[#0F2415]/10 shadow-2xs flex items-start gap-3 hover:border-[#4FAE58]/50 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#FAFFEF] border border-[#0F2415]/20 text-[#0F2415] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-[#0F2415] leading-snug">
                        {uk}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SYARAT PESERTA */}
          {activeTab === 'requirements' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-white p-5 rounded-[8px] border border-[#0F2415]/15 shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#0F2415] text-[#B6FF1A] flex items-center justify-center font-mono font-bold text-xs">
                    3
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#0F2415]">
                      {t.modals.detail.requirementsTitle}
                    </h3>
                    <p className="text-xs text-[#4B5C4E]">
                      {isEn
                        ? 'Education qualifications, industry work experience, or prerequisite certifications'
                        : 'Kualifikasi jalur pendidikan, pengalaman kerja, atau sertifikasi prasyarat'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {program.persyaratanPeserta.map((syarat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-[6px] bg-[#FAFFEF] border border-[#0F2415]/15 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-white text-[#4FAE58] border border-[#4FAE58]/40 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <span className="font-mono text-[10px] font-bold text-[#4B5C4E] uppercase block mb-1">
                          {isEn ? `TRACK OPTION #${sIdx + 1}:` : `OPSI JALUR #${sIdx + 1}:`}
                        </span>
                        <p className="text-xs sm:text-sm text-[#0F2415] font-medium leading-relaxed">
                          {syarat}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3.5 bg-[#EEFFD1] rounded-[6px] border border-[#0F2415]/15 flex items-center justify-between gap-2">
                  <span className="text-xs text-[#0F2415] font-medium">
                    {isEn
                      ? 'Unsure about your background or portfolio documents? Our team will evaluate your CV for free.'
                      : 'Belum yakin dengan kualifikasi atau berkas portofolio Anda? Tim kami siap mengevaluasi CV Anda secara gratis.'}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation(displayName);
                    }}
                    className="shrink-0 px-3 py-1.5 bg-[#0F2415] text-[#B6FF1A] text-xs font-bold rounded-[3px] cursor-pointer"
                  >
                    {t.modals.detail.btnCheckQualification}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: METODE PELATIHAN & BIAYA */}
          {activeTab === 'methods' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="bg-white p-5 rounded-[8px] border border-[#0F2415]/15 shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#0F2415] text-[#B6FF1A] flex items-center justify-center font-mono font-bold text-xs">
                    4
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#0F2415]">
                      {t.modals.detail.methodsTitle}
                    </h3>
                    <p className="text-xs text-[#4B5C4E]">
                      {isEn
                        ? 'Available learning formats aligned with official certification standards'
                        : 'Pilihan format kelas yang tersedia sesuai materi pelatihan resmi'}
                    </p>
                  </div>
                </div>

                {/* 3 Formats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  <div className="p-4 rounded-[6px] bg-[#FAFFEF] border border-[#0F2415]/15">
                    <div className="flex items-center gap-1.5 text-[#4FAE58] mb-1 font-mono text-xs font-bold">
                      <Users className="w-4 h-4" />
                      <span>{isEn ? 'PUBLIC CLASS' : 'KELAS PUBLIK'}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0F2415]">
                      {program.metodePelatihan.publicClass}
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-1 leading-relaxed">
                      {isEn
                        ? 'Interactive executive cohort sessions with curated question banks and bourse case studies.'
                        : 'Sesi interaktif kelompok batch eksekutif dengan bank soal & studi kasus bursa.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-[6px] bg-[#FAFFEF] border border-[#0F2415]/15">
                    <div className="flex items-center gap-1.5 text-[#4FAE58] mb-1 font-mono text-xs font-bold">
                      <Landmark className="w-4 h-4 text-[#0F2415]" />
                      <span>{isEn ? 'IN-HOUSE CLASS' : 'KELAS IN HOUSE'}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0F2415]">
                      {program.metodePelatihan.inHouseClass}
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-1 leading-relaxed">
                      {isEn
                        ? 'Custom integrated curriculum delivered for corporations, brokerages, or banks.'
                        : 'Pelatihan kustom terintegrasi khusus untuk korporasi, sekuritas, atau bank.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-[6px] bg-[#FAFFEF] border border-[#0F2415]/15">
                    <div className="flex items-center gap-1.5 text-[#4FAE58] mb-1 font-mono text-xs font-bold">
                      <User className="w-4 h-4" />
                      <span>{isEn ? 'PRIVATE 1-ON-1 CLASS' : 'KELAS PRIVATE 1 ON 1'}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0F2415]">
                      {program.metodePelatihan.privateClass}
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-1 leading-relaxed">
                      {isEn
                        ? 'Intensive 1:1 coaching with Master Mentors featuring maximum schedule adaptability.'
                        : 'Mentoring intensif satu-satu bersama Master Mentor dengan penyesuaian jadwal super fleksibel.'}
                    </p>
                  </div>
                </div>

                {/* Delivery & Language */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div className="p-3 bg-white rounded-[6px] border border-[#0F2415]/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#4B5C4E] font-semibold">{t.modals.detail.deliveryModeLabel}</span>
                    <span className="font-bold text-xs text-[#0F2415]">{program.metodePelatihan.delivery}</span>
                  </div>
                  <div className="p-3 bg-white rounded-[6px] border border-[#0F2415]/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#4B5C4E] font-semibold">{t.modals.detail.languageLabel}</span>
                    <span className="font-bold text-xs text-[#0F2415]">{program.metodePelatihan.language}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Box */}
              <div className="bg-[#EEFFD1] p-5 rounded-[8px] border border-[#0F2415]/20 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#4B5C4E] uppercase block">
                      {t.modals.detail.pricingTitle}
                    </span>
                    <h4 className="font-display font-bold text-lg text-[#0F2415]">
                      {isEn ? 'Official WhatsApp Service Desk' : 'Layanan Resmi via WhatsApp'}
                    </h4>
                    <p className="text-xs text-[#4B5C4E] mt-1">
                      {isEn
                        ? 'Tuition fees, early bird / corporate group discounts, and upcoming cohort seat allocations are communicated through WhatsApp:'
                        : 'Informasi investasi, diskon early bird/corporate rate, dan kuota batch terdekat diinformasikan melalui WhatsApp:'}
                    </p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-[4px] border border-[#0F2415]/15 text-center">
                    <span className="font-mono text-xs font-bold text-emerald-950 block">
                      0851-2106-7147
                    </span>
                    <span className="text-[10px] text-[#4B5C4E]">Admin Hotline MMI</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: JADWAL KEMITRAAN BINUS CENTER (WPPE, WMI, WPEE) */}
          {activeTab === 'schedule' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {program.code === 'WPPE' && <WppeScheduleTable showCta={true} />}
              {program.code === 'WMI' && <WmiScheduleTable showCta={true} />}
              {program.code === 'WPEE' && <WpeeScheduleTable showCta={true} />}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#0F2415]/10 p-4 sm:p-5 bg-white flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-[3px] border border-[#0F2415]/20 text-xs font-semibold text-[#0F2415] hover:bg-[#FAFFEF] transition-colors cursor-pointer"
          >
            {t.modals.detail.close}
          </button>

          <a
            href={`https://wa.me/6285121067147?text=${encodeURIComponent(
              isEn
                ? `Hello Money Maker Institute (MMI) Team,\n\nI would like to consult about the certification program *${displayName} (${program.code})* [${program.qualificationLevel} - ${displayHours}].\nPlease provide investment fee details, upcoming batch dates, and LSP IKEPAMI assessment prerequisites. Thank you.`
                : `Halo Tim Money Maker Institute (MMI),\n\nSaya ingin berkonsultasi mengenai program sertifikasi *${program.name} (${program.code})* [${program.qualificationLevel} - ${program.learningHours}].\nMohon rincian biaya investasi, jadwal kelas terdekat, serta persyaratan asesmen LSP IKEPAMI. Terima kasih.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] text-xs font-bold rounded-[3px] transition-all flex items-center gap-2 border border-[#0F2415]/15 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#0F2415]" />
            <span>
              {isEn
                ? 'Direct WhatsApp Consultation (+62 851-2106-7147)'
                : 'Konsultasi WA Langsung (0851-2106-7147)'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
