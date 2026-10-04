import React, { useState } from 'react';
import { StageId } from '../types';
import { Check, BookOpen, UserCheck, ShieldCheck, Award, Users, FileCheck2, Landmark, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface JourneyStagesSectionProps {
  onOpenConsultation: (programName?: string) => void;
  onOpenProgramDetail?: (programId: string) => void;
}

export const JourneyStagesSection: React.FC<JourneyStagesSectionProps> = ({
  onOpenConsultation,
  onOpenProgramDetail
}) => {
  const { t, isEn } = useLanguage();
  const [activeTabByStage, setActiveTabByStage] = useState<Record<StageId, 'overview' | 'curriculum' | 'deliverables'>>({
    stage1: 'overview',
    stage2: 'overview',
    stage3: 'overview',
    stage4: 'overview'
  });

  const setStageTab = (stageId: StageId, tab: 'overview' | 'curriculum' | 'deliverables') => {
    setActiveTabByStage((prev) => ({ ...prev, [stageId]: tab }));
  };

  const stageIcons = {
    stage1: BookOpen,
    stage2: Users,
    stage3: FileCheck2,
    stage4: Landmark
  };

  return (
    <section id="tahapan-kelulusan" className="py-20 md:py-28 relative bg-[#FAFFEF]/50">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] bg-[#EEFFD1] text-[#0F2415] text-xs font-mono font-semibold mb-2 border border-[#0F2415]/10">
            <Award className="w-3.5 h-3.5 text-[#4FAE58]" />
            <span>{t.stages.badge}</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#0F2415] mt-1 leading-tight">
            {t.stages.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5C4E] mt-3 leading-relaxed">
            {t.stages.desc}
          </p>

          {/* 4-Step Quick Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 text-left">
            {t.stages.summaryCards.map((card, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-[6px] border shadow-2xs ${
                  idx === 3
                    ? 'bg-[#EEFFD1] border-[#0F2415]/15'
                    : 'bg-white border-[#0F2415]/10'
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-bold block ${
                    idx === 0
                      ? 'text-[#4FAE58]'
                      : idx === 1
                      ? 'text-[#8FDE00] text-emerald-700'
                      : idx === 2
                      ? 'text-[#B8860B]'
                      : 'text-[#0F2415]'
                  }`}
                >
                  {card.step}
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[#0F2415] block mt-0.5">
                  {card.title}
                </span>
                <span className="text-[11px] text-[#4B5C4E] leading-tight block mt-1">
                  {card.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stages List */}
        <div className="space-y-0 divide-y divide-[#0F2415]/10">
          {t.stages.items.map((stage) => {
            const isStage1 = stage.id === 'stage1';
            const isStage2 = stage.id === 'stage2';
            const isStage3 = stage.id === 'stage3';
            const isStage4 = stage.id === 'stage4';
            const activeTab = activeTabByStage[stage.id];
            const StageIcon = stageIcons[stage.id] || BookOpen;

            return (
              <div
                key={stage.id}
                id={`stage-${stage.id}`}
                className={`py-12 md:py-16 transition-colors ${
                  isStage2 || isStage4
                    ? 'bg-[#EEFCC9]/40 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 rounded-[8px] my-6 border border-[#8FDE00]/30 shadow-xs'
                    : ''
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Left Rail Column: Stage Dot & Indicator */}
                  <div className="hidden md:flex md:col-span-1 flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm ${
                        isStage1
                          ? 'bg-[#4FAE58]'
                          : isStage2
                          ? 'bg-[#8FDE00] text-black font-bold ring-4 ring-[#8FDE00]/30'
                          : isStage3
                          ? 'bg-[#B8860B]'
                          : 'bg-[#0F2415] text-[#B6FF1A] ring-4 ring-[#0F2415]/20'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold ${isStage2 ? 'text-[#0F2415]' : 'text-white'}`}>
                        0{stage.number}
                      </span>
                    </div>
                    <div className="w-[1px] h-44 bg-[#0F2415]/10 mt-3" />
                  </div>

                  {/* Main Content Column */}
                  <div className="md:col-span-11 flex flex-col">
                    {/* Header with Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-[3px] border ${
                          isStage1
                            ? 'bg-[#E4F7E2] text-[#4FAE58] border-[#4FAE58]/20'
                            : isStage2
                            ? 'bg-[#B6FF1A] text-[#0F2415] border-[#0F2415]/20 font-bold'
                            : isStage3
                            ? 'bg-[#FBF1D6] text-[#B8860B] border-[#B8860B]/20'
                            : 'bg-[#0F2415] text-[#B6FF1A] border-[#0F2415] font-bold'
                        }`}
                      >
                        {stage.badge}
                      </span>

                      <span
                        className={`font-mono text-[0.72rem] tracking-wider uppercase px-2.5 py-1 rounded-[3px] font-semibold flex items-center gap-1 ${
                          isStage1
                            ? 'bg-[#E4F7E2] text-[#4FAE58]'
                            : isStage2
                            ? 'bg-[#0F2415] text-[#B6FF1A]'
                            : isStage3
                            ? 'bg-[#FBF1D6] text-[#B8860B]'
                            : 'bg-[#EEFFD1] text-[#0F2415] border border-[#0F2415]/20'
                        }`}
                      >
                        {stage.focus}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#0F2415] mt-1">
                      {stage.name}{' '}
                      <span className="text-base sm:text-lg font-normal text-[#4B5C4E] block sm:inline">
                        — {stage.subtitle}
                      </span>
                    </h3>

                    <p className="text-[#4B5C4E] text-sm sm:text-base leading-relaxed mt-3 max-w-3xl">
                      {stage.description}
                    </p>

                    {/* View Switcher Tabs */}
                    <div className="flex flex-wrap gap-2 mt-6 border-b border-[#0F2415]/10 pb-2">
                      <button
                        onClick={() => setStageTab(stage.id, 'overview')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-[3px] transition-colors cursor-pointer ${
                          activeTab === 'overview'
                            ? 'bg-[#0F2415] text-white'
                            : 'bg-white text-[#4B5C4E] hover:bg-[#0F2415]/5 border border-[#0F2415]/10'
                        }`}
                      >
                        {t.stages.tabOverview}
                      </button>
                      <button
                        onClick={() => setStageTab(stage.id, 'curriculum')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-[3px] transition-colors cursor-pointer ${
                          activeTab === 'curriculum'
                            ? 'bg-[#0F2415] text-white'
                            : 'bg-white text-[#4B5C4E] hover:bg-[#0F2415]/5 border border-[#0F2415]/10'
                        }`}
                      >
                        {t.stages.tabCurriculum}
                      </button>
                      <button
                        onClick={() => setStageTab(stage.id, 'deliverables')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-[3px] transition-colors cursor-pointer ${
                          activeTab === 'deliverables'
                            ? 'bg-[#0F2415] text-white'
                            : 'bg-white text-[#4B5C4E] hover:bg-[#0F2415]/5 border border-[#0F2415]/10'
                        }`}
                      >
                        {t.stages.tabDeliverables}
                      </button>
                    </div>

                    {/* Tab: Overview */}
                    {activeTab === 'overview' && (
                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Workshop Box */}
                        <div className="bg-white p-5 rounded-[6px] border border-[#0F2415]/10 shadow-2xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 rounded-[3px] bg-[#FAFFEF] border border-[#0F2415]/10 text-[#0F2415]">
                                <StageIcon className="w-4 h-4 text-[#4FAE58]" />
                              </div>
                              <span className="font-display font-semibold text-base text-[#0F2415]">
                                {stage.workshopTitle}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#4B5C4E] leading-relaxed">
                              {stage.workshopDesc}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-[#0F2415]/10 flex items-center justify-between text-xs text-[#0F2415]">
                            <span className="font-mono font-medium">
                              {isStage2 ? 'Public Class / Private 1:1' : isStage4 ? 'LSP IKEPAMI x BNSP' : (isEn ? 'Online & Offline Classes' : 'Kelas Online & Offline')}
                            </span>
                            <span className="font-semibold text-emerald-800">
                              {isStage3 ? (isEn ? 'Roleplay & Mock Interview' : 'Roleplay & Mock Interview') : isStage4 ? (isEn ? 'BNSP Accredited' : 'Terakreditasi BNSP') : (isEn ? 'Structured & Interactive' : 'Terstruktur & Interaktif')}
                            </span>
                          </div>
                        </div>

                        {/* Mentoring Box */}
                        <div className="bg-white p-5 rounded-[6px] border border-[#0F2415]/10 shadow-2xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 rounded-[3px] bg-[#EEFFD1] border border-[#0F2415]/10 text-[#0F2415]">
                                <UserCheck className="w-4 h-4 text-emerald-800" />
                              </div>
                              <span className="font-display font-semibold text-base text-[#0F2415]">
                                {stage.mentoringTitle}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#4B5C4E] leading-relaxed">
                              {stage.mentoringDesc}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-[#0F2415]/10 flex items-center justify-between text-xs text-[#0F2415]">
                            <span className="font-mono font-medium">
                              {isStage4 ? (isEn ? 'BNSP Golden Garuda Certificate' : 'Sertifikat BNSP Garuda Emas') : (isEn ? '1:1 Personal Guidance' : 'Pendampingan Personal')}
                            </span>
                            <span className="font-semibold text-emerald-800">
                              {isEn ? 'Free Retake Guarantee' : 'Garansi Free Retake'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab: Curriculum Details */}
                    {activeTab === 'curriculum' && (
                      <div className="mt-5 bg-white p-5 rounded-[6px] border border-[#0F2415]/10 shadow-2xs">
                        <h4 className="font-display font-semibold text-sm text-[#0F2415] mb-3">
                          {isEn ? 'Detailed Syllabus & Mentoring Topics:' : 'Rincian Topik Silabus & Pendampingan:'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#0F2415] block mb-2">
                              {isEn ? 'Syllabus / Session Topics:' : 'Silabus / Topik Sesi:'}
                            </span>
                            <ul className="space-y-2 text-xs sm:text-sm text-[#4B5C4E]">
                              {stage.workshopTopics.map((topic, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="font-mono text-[10px] font-bold bg-[#FAFFEF] px-1.5 py-0.5 border border-[#0F2415]/15 rounded-[2px] mt-0.5">
                                    0{idx + 1}
                                  </span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="font-mono text-xs font-semibold text-[#0F2415] block mb-2">
                              {isEn ? 'Mentoring Facilities & Features:' : 'Fasilitas & Fitur Bimbingan:'}
                            </span>
                            <ul className="space-y-2 text-xs sm:text-sm text-[#4B5C4E]">
                              {stage.mentoringFeatures.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-[#4FAE58] shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab: Deliverables */}
                    {activeTab === 'deliverables' && (
                      <div className="mt-5 bg-white p-5 rounded-[6px] border border-[#0F2415]/10 shadow-2xs">
                        <h4 className="font-display font-semibold text-sm text-[#0F2415] mb-3">
                          {isEn
                            ? 'Candidate Deliverables, Portfolios & Credentials:'
                            : 'Output Dokumen, Portofolio & Legalitas yang Anda Dapatkan:'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {stage.deliverables.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-[4px] bg-[#FAFFEF] border border-[#0F2415]/10 flex items-start gap-2 text-xs sm:text-sm text-[#0F2415]"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#B6FF1A] flex items-center justify-center shrink-0 font-bold text-[10px]">
                                ✓
                              </div>
                              <span className="font-medium leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bottom Action for this Stage */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={`https://wa.me/6285121067147?text=${encodeURIComponent(
                          isEn
                            ? `Hello Money Maker Institute (MMI) Team,\n\nI would like to inquire about the certification guidance stage: *${stage.name}*.\nPlease provide details regarding training fees, schedules, and LSP IKEPAMI assessment preparation. Thank you.`
                            : `Halo Tim Money Maker Institute (MMI),\n\nSaya ingin berkonsultasi mengenai alur bimbingan sertifikasi tahap *${stage.name}*.\nMohon informasi rincian biaya investasi, jadwal kelas, dan persiapan asesmen LSP IKEPAMI. Terima kasih.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs sm:text-sm font-bold px-4 py-2 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] rounded-[3px] transition-colors border border-[#0F2415]/15 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <MessageCircle className="w-4 h-4 text-[#0F2415]" />
                        <span>
                          {isEn
                            ? `Inquire About ${stage.name} via WA`
                            : `Konsultasi Alur ${stage.name} via WA`}
                        </span>
                      </a>

                      <a
                        href="#program"
                        className="text-xs sm:text-sm font-medium text-[#4B5C4E] hover:text-[#0F2415] underline underline-offset-4"
                      >
                        {isEn
                          ? 'View Certification Schemes (WPPE, WPPE-P, WMI, WPEE, WAPERD) →'
                          : 'Lihat Pilihan Skema Sertifikasi (WPPE, WPPE-P, WMI, WPEE, WAPERD) →'}
                      </a>
                    </div>
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
