import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MovingBannerSection } from './components/MovingBannerSection';
import { PhilosophySection } from './components/PhilosophySection';
import { JourneyStagesSection } from './components/JourneyStagesSection';
import { ProgramCatalogSection } from './components/ProgramCatalogSection';
import { PhaseAssessmentTool } from './components/PhaseAssessmentTool';
import { LicensingRoadmapSection } from './components/LicensingRoadmapSection';
import { StatsSection } from './components/StatsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ProgramItem, StageId } from './types';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { isEn } = useLanguage();
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<ProgramItem | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [consultationInitialProgram, setConsultationInitialProgram] = useState<string>(
    isEn
      ? 'WPPE — Broker-Dealer Representative (Level 5)'
      : 'WPPE — Wakil Perantara Pedagang Efek'
  );
  const [customWaMessage, setCustomWaMessage] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (programName?: string) => {
    if (programName) {
      setConsultationInitialProgram(programName);
    } else {
      setConsultationInitialProgram(
        isEn
          ? 'WPPE — Broker-Dealer Representative (Level 5)'
          : 'WPPE — Wakil Perantara Pedagang Efek'
      );
    }
    setCustomWaMessage(undefined);
    setConsultationModalOpen(true);
  };

  const handleOpenConsultationWithMsg = (msg: string) => {
    setCustomWaMessage(msg);
    setConsultationModalOpen(true);
  };

  const handleOpenDiagnostic = () => {
    const el = document.getElementById('kuis-sertifikasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStage = (_stageId: StageId) => {
    // optional stage selection handler
  };

  const floatingWaText = isEn
    ? 'Hello Money Maker Institute (MMI) Team, I would like to consult regarding upcoming batch schedules, tuition fees, and capital market certification schemes.'
    : 'Halo Tim Money Maker Institute (MMI), saya ingin berkonsultasi mengenai jadwal, biaya investasi, dan skema sertifikasi pasar modal.';

  return (
    <div className="min-h-screen bg-[#FAFFEF] text-[#0F2415] selection:bg-[#B6FF1A] selection:text-[#0F2415] flex flex-col font-sans">
      {/* Top sticky navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenDiagnostic={handleOpenDiagnostic}
          onSelectStage={handleSelectStage}
        />

        <MovingBannerSection
          onOpenConsultation={handleOpenConsultation}
        />

        <PhilosophySection />

        <JourneyStagesSection
          onOpenConsultation={handleOpenConsultation}
          onOpenProgramDetail={(_progId) => {
            // handle detail modal
          }}
        />

        <ProgramCatalogSection
          onSelectProgram={(program) => setSelectedProgramForModal(program)}
          onOpenConsultation={(progName) => handleOpenConsultation(progName)}
        />

        <PhaseAssessmentTool
          onOpenConsultationWithMsg={handleOpenConsultationWithMsg}
        />

        <LicensingRoadmapSection />

        <StatsSection />

        <FaqSection />

        <FinalCtaSection
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenDiagnostic={handleOpenDiagnostic}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Consultation Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/6285121067147?text=${encodeURIComponent(floatingWaText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#0F2415] hover:bg-[#1a3821] text-white px-4 py-3 rounded-full shadow-xl border border-[#B6FF1A]/30 transition-all hover:scale-105 active:scale-95"
          aria-label={isEn ? 'WhatsApp Consultation +62 851-2106-7147' : 'Konsultasi WhatsApp 0851-2106-7147'}
        >
          <div className="w-8 h-8 rounded-full bg-[#B6FF1A] text-[#0F2415] flex items-center justify-center shrink-0 shadow-xs">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <span className="text-[10px] font-mono text-[#B6FF1A] block leading-none font-bold uppercase">
              {isEn ? 'WhatsApp Consultation' : 'Konsultasi WhatsApp'}
            </span>
            <span className="text-xs font-bold text-white block mt-0.5">
              WA: 0851-2106-7147
            </span>
          </div>
        </a>
      </aside>

      {/* Program Detail Popup Modal */}
      <ProgramDetailModal
        program={selectedProgramForModal}
        onClose={() => setSelectedProgramForModal(null)}
        onOpenConsultation={(progName) => handleOpenConsultation(progName)}
      />

      {/* WhatsApp Consultation & Registration Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialProgram={consultationInitialProgram}
        customMessage={customWaMessage}
      />
    </div>
  );
}
