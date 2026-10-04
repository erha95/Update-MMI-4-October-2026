import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS_MAP, CertQuizResult } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, RotateCcw, MessageCircle, CheckCircle2, Briefcase } from 'lucide-react';

interface PhaseAssessmentToolProps {
  onOpenConsultationWithMsg: (msg: string) => void;
}

export const PhaseAssessmentTool: React.FC<PhaseAssessmentToolProps> = ({
  onOpenConsultationWithMsg
}) => {
  const { t, isEn } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [scores, setScores] = useState<{
    wppe: number;
    wppep: number;
    wmi: number;
    wpee: number;
    waperd: number;
  }>({
    wppe: 0,
    wppep: 0,
    wmi: 0,
    wpee: 0,
    waperd: 0
  });
  const [result, setResult] = useState<CertQuizResult | null>(null);

  const handleSelectOption = (points: {
    wppe: number;
    wppep: number;
    wmi: number;
    wpee: number;
    waperd: number;
  }) => {
    const updatedScores = {
      wppe: scores.wppe + points.wppe,
      wppep: scores.wppep + points.wppep,
      wmi: scores.wmi + points.wmi,
      wpee: scores.wpee + points.wpee,
      waperd: scores.waperd + points.waperd
    };
    setScores(updatedScores);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine highest scoring scheme
      let winnerCode = 'WPPE';
      let highestScore = -1;

      const keys: Array<keyof typeof updatedScores> = ['wppe', 'wppep', 'wmi', 'wpee', 'waperd'];
      const mapKeyToCode: Record<string, string> = {
        wppe: 'WPPE',
        wppep: 'WPPE-P',
        wmi: 'WMI',
        wpee: 'WPEE',
        waperd: 'WAPERD'
      };

      for (const k of keys) {
        if (updatedScores[k] > highestScore) {
          highestScore = updatedScores[k];
          winnerCode = mapKeyToCode[k];
        }
      }

      setResult(QUIZ_RESULTS_MAP[winnerCode] || QUIZ_RESULTS_MAP.WPPE);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ wppe: 0, wppep: 0, wmi: 0, wpee: 0, waperd: 0 });
    setResult(null);
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];
  const translatedQ = t.quiz.questions[currentStep];

  const resultTranslated = result
    ? (t.quiz.results as Record<string, any>)[result.code]
    : null;

  return (
    <section id="kuis-sertifikasi" className="py-20 border-t border-[#0F2415]/10 bg-[#FAFFEF]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white rounded-[10px] border border-[#0F2415]/15 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          {/* Subtle neon highlight blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#B6FF1A]/20 blur-[80px]"
          />

          {!result ? (
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#0F2415]/10 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-[#EEFFD1] text-[#0F2415] text-xs font-mono font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#4FAE58]" />
                    <span>{t.quiz.badge}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F2415]">
                    {t.quiz.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5C4E] mt-1">
                    {t.quiz.subtitle}
                  </p>
                </div>

                {/* Step indicator */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#4B5C4E]">
                    {isEn
                      ? `Step ${currentStep + 1} of ${QUIZ_QUESTIONS.length}`
                      : `Langkah ${currentStep + 1} dari ${QUIZ_QUESTIONS.length}`}
                  </span>
                  <div className="flex gap-1">
                    {QUIZ_QUESTIONS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-5 h-1.5 rounded-full transition-colors ${
                          idx <= currentStep ? 'bg-[#0F2415]' : 'bg-[#0F2415]/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Current Question */}
              <div className="max-w-2xl">
                <span className="font-mono text-xs text-[#4FAE58] font-bold uppercase tracking-wider block mb-1">
                  {isEn ? `Question ${currentStep + 1}` : `Pertanyaan ${currentStep + 1}`}
                </span>
                <h4 className="font-display font-semibold text-xl sm:text-2xl text-[#0F2415] mb-2 leading-snug">
                  {translatedQ?.question || currentQ.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#4B5C4E] mb-6">
                  {translatedQ?.subtitle || currentQ.subtitle}
                </p>

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, oIdx) => {
                    const transOpt = translatedQ?.options?.[oIdx];
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(opt.points)}
                        className="w-full text-left p-4 sm:p-5 rounded-[6px] bg-[#FAFFEF] hover:bg-[#EEFFD1] border border-[#0F2415]/15 hover:border-[#0F2415]/30 transition-all flex items-start justify-between gap-4 group cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-white border border-[#0F2415]/20 flex items-center justify-center font-mono text-xs font-bold text-[#0F2415] shrink-0 mt-0.5 group-hover:bg-[#B6FF1A]">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-[#0F2415] leading-relaxed">
                              {transOpt?.text || opt.text}
                            </p>
                            <span className="font-mono text-[10px] text-[#4B5C4E] mt-1 inline-block bg-white/70 px-1.5 py-0.5 rounded-[2px] border border-[#0F2415]/10">
                              {transOpt?.tag || opt.tag}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#4B5C4E] shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Result View */
            <div className="animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#0F2415]/10 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-[#B6FF1A] text-[#0F2415] text-xs font-mono font-bold mb-1 border border-[#0F2415]/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {isEn
                        ? 'YOUR RECOMMENDED CERTIFICATION SCHEME'
                        : 'REKOMENDASI SKEMA SERTIFIKASI ANDA'}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F2415]">
                    {isEn ? result.titleEn : result.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#4B5C4E] font-medium mt-1">
                    {resultTranslated?.tagline || result.tagline}
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#4B5C4E] hover:text-[#0F2415] border border-[#0F2415]/20 px-3 py-1.5 rounded-[3px] bg-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.quiz.btnRetake}</span>
                </button>
              </div>

              {/* Diagnosis Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="p-4 rounded-[6px] bg-[#FAFFEF] border border-[#0F2415]/10">
                    <span className="font-mono text-xs font-bold text-[#0F2415] block mb-1">
                      {isEn ? 'Scheme Suitability Analysis:' : 'Analisis Kecocokan Skema:'}
                    </span>
                    <p className="text-xs sm:text-sm text-[#4B5C4E] leading-relaxed">
                      {resultTranslated?.summary || result.summary}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-[#0F2415] block mb-2.5">
                      {isEn
                        ? 'Career Opportunities Open to You:'
                        : 'Peluang Karier yang Terbuka untuk Anda:'}
                    </span>
                    <ul className="space-y-2">
                      {(resultTranslated?.careerProspects || result.careerProspects).map(
                        (career: string, cIdx: number) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F2415]"
                          >
                            <Briefcase className="w-4 h-4 text-[#4FAE58] shrink-0 mt-0.5" />
                            <span>{career}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-[#0F2415] block mb-2.5">
                      {isEn
                        ? 'Core Competency Units (SKKNI No. 20/2024):'
                        : 'Unit Kompetensi Utama (SKKNI No. 20/2024):'}
                    </span>
                    <div className="space-y-1.5">
                      {(resultTranslated?.keyUnits || result.keyUnits).map(
                        (unit: string, uIdx: number) => (
                          <div
                            key={uIdx}
                            className="p-2.5 rounded-[4px] bg-white border border-[#0F2415]/10 text-xs font-mono text-[#0F2415]"
                          >
                            {unit}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Right side CTA Box */}
                <div className="lg:col-span-5 bg-[#EEFFD1] p-6 rounded-[8px] border border-[#0F2415]/15 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#0F2415] block mb-2">
                      {isEn ? 'Recommended Program:' : 'Program yang Direkomendasikan:'}
                    </span>
                    <div className="p-3 bg-white rounded-[4px] border border-[#0F2415]/15 mb-4">
                      <span className="text-[10px] font-mono font-bold text-[#4FAE58] block">
                        {isEn ? 'OFFICIAL CERTIFICATION SCHEME' : 'SKEMA SERTIFIKASI RESMI'}
                      </span>
                      <span className="font-display font-bold text-base text-[#0F2415]">
                        {isEn ? result.titleEn : result.name}
                      </span>
                    </div>
                    <p className="text-xs text-[#4B5C4E] leading-relaxed mb-5">
                      {isEn
                        ? 'Discuss the syllabus, upcoming batch schedules (Executive Evening / Weekend), and registration with our certification advisors via WhatsApp.'
                        : 'Diskusikan silabus, jadwal kelas terdekat (Executive Evening / Weekend), dan skema pendaftaran bersama tim konsultan sertifikasi kami via WhatsApp.'}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <a
                      href={`https://wa.me/6285121067147?text=${encodeURIComponent(
                        resultTranslated?.waMessage || result.waMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-sans text-xs sm:text-sm font-bold py-3 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] rounded-[3px] transition-all flex items-center justify-center gap-2 border border-[#0F2415]/15 shadow-2xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#0F2415]" />
                      <span>
                        {isEn
                          ? `Consult Scheme ${result.code} via WhatsApp (0851-2106-7147)`
                          : `Konsultasi Skema ${result.code} via WhatsApp (0851-2106-7147)`}
                      </span>
                    </a>
                    <a
                      href="#program"
                      className="w-full block text-center font-sans text-xs font-semibold py-2 bg-white text-[#0F2415] rounded-[3px] border border-[#0F2415]/15 hover:bg-[#FAFFEF] transition-colors"
                    >
                      {isEn ? 'View All Program Syllabus Details' : 'Lihat Detail Silabus Semua Program'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
