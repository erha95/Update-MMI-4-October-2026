import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Maximize2,
  X,
  Upload,
  Calendar,
  CheckCircle2,
  Phone,
  Globe,
  ExternalLink,
  MessageCircle,
  GraduationCap,
  Zap,
  ThumbsUp,
  Flame
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BinusFlyerCard } from './BinusFlyerCard';
import { BinusMmiLogo } from './BinusMmiLogo';
import { WppeScheduleTable } from './WppeScheduleTable';
import { WmiScheduleTable } from './WmiScheduleTable';
import { WpeeScheduleTable } from './WpeeScheduleTable';

interface MovingBannerSectionProps {
  onOpenConsultation: (initialProgram?: string) => void;
}

export const MovingBannerSection: React.FC<MovingBannerSectionProps> = ({
  onOpenConsultation
}) => {
  const { isEn } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScheduleProgram, setSelectedScheduleProgram] = useState<'WPPE' | 'WMI' | 'WPEE' | null>(null);
  const [customFlyerUrl, setCustomFlyerUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalSlides = 2;

  // Auto-advance slider every 7 seconds
  useEffect(() => {
    if (isPaused || isModalOpen || selectedScheduleProgram !== null) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, selectedScheduleProgram]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomFlyerUrl(url);
    }
  };

  const binusWaLink =
    'https://wa.me/6285121067147?text=' +
    encodeURIComponent(
      'Halo Binus Center & Money Maker Institute, saya ingin mendaftar program Jadwal Sertifikasi Pasar Modal (WPPE / WMI / WPEE).'
    );

  return (
    <section
      id="kemitraan-binus"
      className="relative bg-[#FAFFEF] border-y border-[#0F2415]/10 overflow-hidden py-8 sm:py-12"
      aria-label="Moving Banner Kemitraan BINUS CENTER"
    >
      {/* 1. Moving Marquee Ticker Bar */}
      <div className="bg-[#0F2415] text-[#FAFFEF] py-2.5 mb-8 overflow-hidden shadow-inner flex items-center border-y border-[#B6FF1A]/30">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-mono tracking-wider font-semibold">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2 text-[#B6FF1A]">
                <Sparkles className="w-3.5 h-3.5 fill-[#B6FF1A]" />
                <span>OFFICIAL PARTNERSHIP: MONEY MAKER INSTITUTE × BINUS CENTER</span>
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B6FF1A]" />
                {isEn
                  ? 'OPEN ENROLLMENT: 28 SEPTEMBER 2026 — EXAM: FEBRUARY 2027'
                  : 'OPEN ENROLLMENT: 28 SEPTEMBER 2026 — UJI KOMPETENSI: FEBRUARI 2027'}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[#EEFFD1] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#B6FF1A]" />
                <span>WPPE (MULAI 17 NOV) • WMI (MULAI 18 NOV) • WPEE (MULAI 18 NOV)</span>
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[#B6FF1A] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>INFO & PENDAFTARAN WA: 0851-2106-7147</span>
              </span>
              <span className="text-white/40">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-[#EEFFD1] border border-[#0F2415]/15 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#4FAE58] animate-pulse" />
              <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#0F2415] font-bold">
                {isEn ? 'Official Institutional Partnership' : 'Jadwal Sertifikasi Resmi 2026/2027'}
              </span>
            </div>
            <div className="mt-1">
              <BinusMmiLogo size="lg" />
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="font-mono text-xs text-[#4B5C4E] hidden sm:inline">
              0{activeSlide + 1} / 0{totalSlides}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-md bg-white hover:bg-[#EEFFD1] border border-[#0F2415]/15 flex items-center justify-center text-[#0F2415] transition-colors shadow-2xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-md bg-white hover:bg-[#EEFFD1] border border-[#0F2415]/15 flex items-center justify-center text-[#0F2415] transition-colors shadow-2xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Interactive Carousel Container */}
        <div
          className="relative bg-white rounded-2xl border border-[#0F2415]/15 shadow-sm overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* SLIDE 1 (formerly Page 2): Full Detailed Flyer View */}
          {activeSlide === 0 && (
            <div className="p-6 sm:p-10 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded font-bold uppercase tracking-wider inline-block mb-1">
                    FLYER RESMI JADWAL SERTIFIKASI
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0F2415]">
                    Informasi Lengkap Tarif, Jadwal & Kontak Pendaftaran
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedScheduleProgram('WPPE')}
                    className="inline-flex items-center gap-1.5 bg-[#DCFCE7] hover:bg-[#bbf7d0] text-[#15803D] border border-[#16A34A]/30 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Jadwal WPPE (16-24 Nov)</span>
                  </button>
                  <button
                    onClick={() => setSelectedScheduleProgram('WMI')}
                    className="inline-flex items-center gap-1.5 bg-[#FFE4E6] hover:bg-[#fecdd3] text-[#BE123C] border border-[#E11D48]/30 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Jadwal WMI (16-26 Nov)</span>
                  </button>
                  <button
                    onClick={() => setSelectedScheduleProgram('WPEE')}
                    className="inline-flex items-center gap-1.5 bg-[#FEF9C3] hover:bg-[#fef08a] text-[#854D0E] border border-[#EAB308]/40 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#854D0E]" />
                    <span>Jadwal WPEE (16-30 Nov)</span>
                  </button>
                  <a
                    href={binusWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#008080] hover:bg-[#006666] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#B6FF1A]" />
                    <span>Chat WA Pendaftaran</span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#0F2415]/20 hover:bg-[#EEFFD1] text-[#0F2415] px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Layar Penuh</span>
                  </button>
                </div>
              </div>

              {/* Flyer Display */}
              <div className="max-w-4xl mx-auto shadow-md rounded-2xl overflow-hidden">
                {customFlyerUrl ? (
                  <img
                    src={customFlyerUrl}
                    alt="Flyer Binus Center"
                    className="w-full max-h-[560px] object-contain mx-auto"
                  />
                ) : (
                  <BinusFlyerCard
                    onOpenWppeSchedule={() => setSelectedScheduleProgram('WPPE')}
                    onOpenWmiSchedule={() => setSelectedScheduleProgram('WMI')}
                    onOpenWpeeSchedule={() => setSelectedScheduleProgram('WPEE')}
                  />
                )}
              </div>
            </div>
          )}

          {/* SLIDE 2 (formerly Page 3): Program Breakdown (WPPE, WMI, WPEE) */}
          {activeSlide === 1 && (
            <div className="p-6 sm:p-10 min-h-[440px] flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="bg-[#B6FF1A] text-[#0F2415] text-[11px] font-mono font-bold px-2.5 py-1 rounded">
                    RANCANGAN MODUL & JADWAL
                  </span>
                  <span className="text-xs font-mono text-[#4B5C4E]">
                    Binus Center & Money Maker Institute
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0F2415] mb-2">
                  Rincian 3 Skema Sertifikasi Kompetensi Pasar Modal
                </h3>
                <p className="text-sm text-[#4B5C4E] max-w-3xl mb-6">
                  Dirancang khusus dengan harga terjangkau bagi Mahasiswa Aktif dan Professional yang ingin memiliki lisensi resmi sebelum uji kompetensi di Februari 2027.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Card 1: WPPE with Schedule Breakdown */}
                  <div className="p-4 rounded-xl bg-white border-2 border-[#16A34A]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-extrabold text-lg text-[#16A34A]">WPPE</span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#DCFCE7] text-[#15803D]">
                            Nov 2026
                          </span>
                        </div>
                        <Zap className="w-4 h-4 text-[#16A34A] fill-[#16A34A]" />
                      </div>
                      <div className="text-xs space-y-1 mb-3 text-[#334155]">
                        <p>🎓 Mahasiswa: <strong>Rp 3.300.000,-</strong></p>
                        <p>💼 Professional: <strong>Rp 5.300.000,-</strong></p>
                      </div>
                      <div className="pt-2 border-t border-[#0F2415]/10 text-xs text-[#4B5C4E] space-y-1">
                        <p>📅 TM: <strong>16 Nov (19.00-20.00)</strong></p>
                        <p>📅 Kelas: <strong>17 - 24 Nov (18.30-20.30)</strong></p>
                        <p>⏱️ Durasi: <strong>12 Jam (6 Sesi) + 1 Jam TM</strong></p>
                        <p>💻 Mode: <strong>Online via Zoom</strong></p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedScheduleProgram('WPPE')}
                      className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 bg-[#DCFCE7] hover:bg-[#bbf7d0] text-[#15803D] font-mono text-[11px] font-bold py-2 px-2 rounded-lg border border-[#16A34A]/25 transition-all cursor-pointer shadow-2xs hover:scale-101"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Lihat Jadwal 7 Sesi (16-24 Nov) →</span>
                    </button>
                  </div>

                  {/* Card 2: WMI with Schedule Breakdown */}
                  <div className="p-4 rounded-xl bg-white border-2 border-[#E11D48]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-extrabold text-lg text-[#E11D48]">WMI</span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FFE4E6] text-[#BE123C]">
                            Nov 2026
                          </span>
                        </div>
                        <ThumbsUp className="w-4 h-4 text-[#E11D48] fill-[#E11D48]" />
                      </div>
                      <div className="text-xs space-y-1 mb-3 text-[#334155]">
                        <p>🎓 Mahasiswa: <strong>Rp 3.500.000,-</strong></p>
                        <p>💼 Professional: <strong>Rp 5.500.000,-</strong></p>
                      </div>
                      <div className="pt-2 border-t border-[#0F2415]/10 text-xs text-[#4B5C4E] space-y-1">
                        <p>📅 TM: <strong>16 Nov (19.00-20.00)</strong></p>
                        <p>📅 Kelas: <strong>18 - 26 Nov (18.30-20.30)</strong></p>
                        <p>⏱️ Durasi: <strong>14 Jam (7 Sesi) + 1 Jam TM</strong></p>
                        <p>💻 Mode: <strong>Online via Zoom</strong></p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedScheduleProgram('WMI')}
                      className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 bg-[#FFE4E6] hover:bg-[#fecdd3] text-[#BE123C] font-mono text-[11px] font-bold py-2 px-2 rounded-lg border border-[#E11D48]/25 transition-all cursor-pointer shadow-2xs hover:scale-101"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Lihat Jadwal 8 Sesi (16-26 Nov) →</span>
                    </button>
                  </div>

                  {/* Card 3: WPEE with Schedule Breakdown */}
                  <div className="p-4 rounded-xl bg-white border-2 border-[#EAB308]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-extrabold text-lg text-[#854D0E]">WPEE</span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FEF9C3] text-[#854D0E]">
                            Nov 2026
                          </span>
                        </div>
                        <Flame className="w-4 h-4 text-[#EAB308] fill-[#EAB308]" />
                      </div>
                      <div className="text-xs space-y-1 mb-3 text-[#334155]">
                        <p>🎓 Mahasiswa: <strong>Rp 3.700.000,-</strong></p>
                        <p>💼 Professional: <strong>Rp 5.700.000,-</strong></p>
                      </div>
                      <div className="pt-2 border-t border-[#0F2415]/10 text-xs text-[#4B5C4E] space-y-1">
                        <p>📅 TM: <strong>16 Nov (19.00-20.00)</strong></p>
                        <p>📅 Kelas: <strong>19 - 30 Nov (18.30-20.30)</strong></p>
                        <p>⏱️ Durasi: <strong>16 Jam (8 Sesi) + 1 Jam TM</strong></p>
                        <p>💻 Mode: <strong>Online via Zoom</strong></p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedScheduleProgram('WPEE')}
                      className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 bg-[#FEF9C3] hover:bg-[#fef08a] text-[#854D0E] font-mono text-[11px] font-bold py-2 px-2 rounded-lg border border-[#EAB308]/35 transition-all cursor-pointer shadow-2xs hover:scale-101"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Lihat Jadwal 9 Sesi (16-30 Nov) →</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#0F2415]/10">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#4B5C4E] mr-2">
                    <Globe className="w-4 h-4 text-[#008080]" />
                    <span>www.binuscenter.com</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedScheduleProgram('WPPE')}
                    className="inline-flex items-center gap-1.5 bg-[#DCFCE7] hover:bg-[#bbf7d0] text-[#15803D] border border-[#16A34A]/30 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Tabel Jadwal WPPE</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedScheduleProgram('WMI')}
                    className="inline-flex items-center gap-1.5 bg-[#FFE4E6] hover:bg-[#fecdd3] text-[#BE123C] border border-[#E11D48]/30 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Tabel Jadwal WMI</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedScheduleProgram('WPEE')}
                    className="inline-flex items-center gap-1.5 bg-[#FEF9C3] hover:bg-[#fef08a] text-[#854D0E] border border-[#EAB308]/40 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Tabel Jadwal WPEE</span>
                  </button>
                </div>
                <a
                  href={binusWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0F2415] hover:bg-[#1a3821] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 text-[#B6FF1A]" />
                  <span>Daftar Sekarang (0851-2106-7147)</span>
                </a>
              </div>
            </div>
          )}

          {/* Dots Pagination */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            {[...Array(totalSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx
                    ? 'w-6 bg-[#0F2415]'
                    : 'w-2 bg-[#0F2415]/25 hover:bg-[#0F2415]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Fullscreen Lightbox Modal for Flyer */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0F2415]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full my-auto shadow-2xl border border-white/20 p-4 sm:p-6 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#0F2415]/10 mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <BinusMmiLogo size="sm" />
                <span className="hidden sm:inline font-mono text-[10px] bg-[#EEFFD1] text-[#0F2415] px-2 py-0.5 rounded font-bold ml-1">
                  BATCH 2026/2027
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#0F2415]/5 hover:bg-[#0F2415]/10 flex items-center justify-center text-[#0F2415] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Flyer Body */}
            <div className="flex-1 flex flex-col items-center">
              {customFlyerUrl ? (
                <img
                  src={customFlyerUrl}
                  alt="Flyer Kemitraan BINUS CENTER x MMI"
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow border border-[#0F2415]/10"
                />
              ) : (
                <BinusFlyerCard
                  className="w-full"
                  onOpenWppeSchedule={() => {
                    setIsModalOpen(false);
                    setSelectedScheduleProgram('WPPE');
                  }}
                  onOpenWmiSchedule={() => {
                    setIsModalOpen(false);
                    setSelectedScheduleProgram('WMI');
                  }}
                  onOpenWpeeSchedule={() => {
                    setIsModalOpen(false);
                    setSelectedScheduleProgram('WPEE');
                  }}
                />
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-4 pt-3 border-t border-[#0F2415]/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#4B5C4E]">
                <span>WA Official:</span>
                <a
                  href={binusWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-[#0F2415] hover:underline"
                >
                  0851-2106-7147
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedScheduleProgram('WPPE');
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#15803D] bg-[#DCFCE7] hover:bg-[#bbf7d0] border border-[#16A34A]/30 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Jadwal WPPE</span>
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedScheduleProgram('WMI');
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#BE123C] bg-[#FFE4E6] hover:bg-[#fecdd3] border border-[#E11D48]/30 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Jadwal WMI</span>
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedScheduleProgram('WPEE');
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#854D0E] bg-[#FEF9C3] hover:bg-[#fef08a] border border-[#EAB308]/40 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Jadwal WPEE</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#4B5C4E] hover:bg-[#0F2415]/5 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={binusWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#008080] hover:bg-[#006666] text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#B6FF1A]" />
                  <span>Daftar via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Dedicated Schedule Modal (WPPE, WMI, WPEE) */}
      {selectedScheduleProgram !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0F2415]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedScheduleProgram(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full my-auto shadow-2xl border border-white/20 p-4 sm:p-6 relative flex flex-col max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar with Tabs */}
            <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#0F2415]/10 mb-4 gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedScheduleProgram('WPPE')}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedScheduleProgram === 'WPPE'
                      ? 'bg-[#16A34A] text-white shadow-xs'
                      : 'bg-[#DCFCE7] text-[#15803D] hover:bg-[#bbf7d0]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>WPPE (16-24 Nov)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedScheduleProgram('WMI')}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedScheduleProgram === 'WMI'
                      ? 'bg-[#E11D48] text-white shadow-xs'
                      : 'bg-[#FFE4E6] text-[#BE123C] hover:bg-[#fecdd3]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>WMI (16-26 Nov)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedScheduleProgram('WPEE')}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedScheduleProgram === 'WPEE'
                      ? 'bg-[#EAB308] text-[#0F2415] shadow-xs'
                      : 'bg-[#FEF9C3] text-[#854D0E] hover:bg-[#fef08a]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>WPEE (16-30 Nov)</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSelectedScheduleProgram(null)}
                className="w-8 h-8 rounded-full bg-[#0F2415]/5 hover:bg-[#0F2415]/10 flex items-center justify-center text-[#0F2415] transition-colors cursor-pointer"
                aria-label="Tutup Jadwal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Schedule Table Component */}
            {selectedScheduleProgram === 'WPPE' && (
              <WppeScheduleTable showCta={true} />
            )}
            {selectedScheduleProgram === 'WMI' && (
              <WmiScheduleTable showCta={true} />
            )}
            {selectedScheduleProgram === 'WPEE' && (
              <WpeeScheduleTable showCta={true} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
