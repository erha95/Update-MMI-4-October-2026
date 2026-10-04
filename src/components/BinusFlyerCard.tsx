import React from 'react';
import {
  Zap,
  ThumbsUp,
  Flame,
  CheckCircle2,
  Phone,
  Globe,
  ExternalLink,
  QrCode
} from 'lucide-react';

import { BinusMmiLogo } from './BinusMmiLogo';

interface BinusFlyerCardProps {
  className?: string;
  isCompact?: boolean;
  onOpenWppeSchedule?: () => void;
  onOpenWmiSchedule?: () => void;
  onOpenWpeeSchedule?: () => void;
}

export const BinusFlyerCard: React.FC<BinusFlyerCardProps> = ({
  className = '',
  isCompact = false,
  onOpenWppeSchedule,
  onOpenWmiSchedule,
  onOpenWpeeSchedule
}) => {
  const waLink =
    'https://wa.me/6285121067147?text=' +
    encodeURIComponent(
      'Halo Binus Center & Money Maker Institute, saya ingin mendaftar program Jadwal Sertifikasi (WPPE / WMI / WPEE).'
    );

  return (
    <div
      className={`bg-[#F4F9FF] text-[#0F2415] rounded-2xl shadow-xl border border-[#0F2415]/15 overflow-hidden flex flex-col font-sans select-none ${className}`}
    >
      {/* Top Header */}
      <div className="p-4 sm:p-6 pb-2 sm:pb-3">
        <div className="flex items-center justify-between mb-4">
          {/* Logos Lockup matching flyer */}
          <BinusMmiLogo size={isCompact ? 'sm' : 'md'} />

          {/* Academic Year */}
          <div className="font-mono text-xs sm:text-sm font-bold text-[#4B5C4E] bg-white px-2.5 py-1 rounded-md border border-[#0F2415]/10 shadow-2xs">
            2026/2027
          </div>
        </div>

        {/* Title */}
        <div className="text-center pt-1 pb-3">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0F2415] tracking-tight">
            Jadwal Sertifikasi
          </h2>
          <div className="mt-2 space-y-0.5 text-xs sm:text-sm text-[#334155] font-medium">
            <p>
              Open Enrollment starts:{' '}
              <strong className="text-[#0F2415]">28 September 2026</strong>
            </p>
            <p>
              Uji Kompetensi: <strong className="text-[#0F2415]">Februari 2027</strong>
            </p>
            <p>
              Mode Pelatihan:{' '}
              <span className="bg-[#E0F2FE] text-[#0369A1] font-semibold px-2 py-0.5 rounded">
                Online (by Zoom)
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3 Columns Scheme Grid */}
      <div className="px-3 sm:px-6 pb-4 sm:pb-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 h-full">
          {/* SCHEME 1: WPPE */}
          <div className="bg-white rounded-xl border border-[#0F2415]/15 shadow-sm p-4 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between bg-[#16A34A] text-white px-3.5 py-2 rounded-lg font-bold shadow-xs mb-3">
                <span className="font-display text-base tracking-wide">WPPE</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>

              {/* Pricing Pills */}
              <div className="space-y-2 mb-4">
                <div className="bg-[#DCFCE7] border border-[#16A34A]/30 rounded-lg p-2 text-center shadow-2xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#166534] block font-semibold">
                    Mahasiswa Aktif
                  </span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#14532D]">
                    Rp. 3.300.000,- <span className="text-xs font-normal">/pax</span>
                  </span>
                </div>
                <div className="bg-[#F0FDF4] border border-[#16A34A]/20 rounded-lg p-2 text-center shadow-2xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#166534] block font-semibold">
                    Professional
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[#14532D]">
                    Rp. 5.300.000,- <span className="text-xs font-normal">/pax</span>
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="pt-2 border-t border-[#0F2415]/10 space-y-1.5 text-xs text-[#334155]">
                <span className="font-bold text-[#0F2415] block text-[11px] uppercase tracking-wider font-mono">
                  Informasi:
                </span>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>
                    TM (Online): <strong>16 Nov (19.00-20.00)</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>
                    Mulai pelatihan: <strong>17 November 2026</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>
                    Durasi: <strong>12 jam (6 sesi)</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>
                    Mode pelatihan: <strong>online (Zoom)</strong>
                  </span>
                </div>
              </div>

              {onOpenWppeSchedule && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenWppeSchedule();
                  }}
                  className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-[#DCFCE7] hover:bg-[#bbf7d0] text-[#15803D] font-mono text-[11px] font-bold py-1.5 px-2.5 rounded-lg border border-[#16A34A]/30 transition-all cursor-pointer shadow-2xs hover:scale-101"
                >
                  <span>📅 Lihat Jadwal 7 Sesi WPPE →</span>
                </button>
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#0F2415]/10">
              <span className="text-[10px] font-mono text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded font-semibold block text-center">
                Wakil Perantara Pedagang Efek
              </span>
            </div>
          </div>

          {/* SCHEME 2: WMI */}
          <div className="bg-white rounded-xl border border-[#0F2415]/15 shadow-sm p-4 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between bg-[#E11D48] text-white px-3.5 py-2 rounded-lg font-bold shadow-xs mb-3">
                <span className="font-display text-base tracking-wide">WMI</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ThumbsUp className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>

              {/* Pricing Pills */}
              <div className="space-y-2 mb-4">
                <div className="bg-[#FFE4E6] border border-[#E11D48]/30 rounded-lg p-2 text-center shadow-2xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9F1239] block font-semibold">
                    Mahasiswa Aktif
                  </span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#881337]">
                    Rp. 3.500.000,- <span className="text-xs font-normal">/pax</span>
                  </span>
                </div>
                <div className="bg-[#FFF1F2] border border-[#E11D48]/20 rounded-lg p-2 text-center shadow-2xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#9F1239] block font-semibold">
                    Professional
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[#881337]">
                    Rp. 5.500.000,- <span className="text-xs font-normal">/pax</span>
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="pt-2 border-t border-[#0F2415]/10 space-y-1.5 text-xs text-[#334155]">
                <span className="font-bold text-[#0F2415] block text-[11px] uppercase tracking-wider font-mono">
                  Informasi:
                </span>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    TM (Online): <strong>16 Nov (19.00-20.00)</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    Mulai pelatihan: <strong>18 November 2026</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    Durasi: <strong>14 jam (7 sesi) + 1 Jam TM</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    Mode pelatihan: <strong>online (Zoom)</strong>
                  </span>
                </div>
              </div>

              {onOpenWmiSchedule && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenWmiSchedule();
                  }}
                  className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-[#FFE4E6] hover:bg-[#fecdd3] text-[#BE123C] font-mono text-[11px] font-bold py-1.5 px-2.5 rounded-lg border border-[#E11D48]/30 transition-all cursor-pointer shadow-2xs hover:scale-101"
                >
                  <span>📅 Lihat Jadwal 8 Sesi WMI →</span>
                </button>
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#0F2415]/10">
              <span className="text-[10px] font-mono text-[#9F1239] bg-[#FFE4E6] px-2 py-0.5 rounded font-semibold block text-center">
                Wakil Manajer Investasi
              </span>
            </div>
          </div>

          {/* SCHEME 3: WPEE */}
          <div className="bg-white rounded-xl border border-[#0F2415]/15 shadow-sm p-4 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between bg-[#EAB308] text-[#0F2415] px-3.5 py-2 rounded-lg font-bold shadow-xs mb-3">
                <span className="font-display text-base tracking-wide">WPEE</span>
                <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                  <Flame className="w-3.5 h-3.5 fill-[#0F2415]" />
                </div>
              </div>

              {/* Pricing Pills */}
              <div className="space-y-2 mb-4">
                <div className="bg-[#FEF9C3] border border-[#EAB308]/40 rounded-lg p-2 text-center shadow-2xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#854D0E] block font-semibold">
                    Mahasiswa Aktif
                  </span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#713F12]">
                    Rp. 3.700.000,- <span className="text-xs font-normal">/pax</span>
                  </span>
                </div>
                <div className="bg-[#FEFCE8] border border-[#EAB308]/20 rounded-lg p-2 text-center shadow-2xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#854D0E] block font-semibold">
                    Professional
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[#713F12]">
                    Rp. 5.700.000,- <span className="text-xs font-normal">/pax</span>
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="pt-2 border-t border-[#0F2415]/10 space-y-1.5 text-xs text-[#334155]">
                <span className="font-bold text-[#0F2415] block text-[11px] uppercase tracking-wider font-mono">
                  Informasi:
                </span>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>
                    TM (Online): <strong>16 Nov (19.00-20.00)</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>
                    Mulai pelatihan: <strong>19 November 2026</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>
                    Durasi: <strong>16 jam (8 sesi) + 1 Jam TM</strong>
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>
                    Mode pelatihan: <strong>online (Zoom)</strong>
                  </span>
                </div>
              </div>

              {onOpenWpeeSchedule && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenWpeeSchedule();
                  }}
                  className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-[#FEF9C3] hover:bg-[#fef08a] text-[#854D0E] font-mono text-[11px] font-bold py-1.5 px-2.5 rounded-lg border border-[#EAB308]/40 transition-all cursor-pointer shadow-2xs hover:scale-101"
                >
                  <span>📅 Lihat Jadwal 9 Sesi WPEE →</span>
                </button>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#0F2415]/10">
              <span className="text-[10px] font-mono text-[#854D0E] bg-[#FEF9C3] px-2 py-0.5 rounded font-semibold block text-center">
                Wakil Penjamin Emisi Efek
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-[#008080] text-white p-4 sm:p-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display font-bold text-sm sm:text-base block mb-2 text-center md:text-left text-[#FAFFEF]">
              Untuk Informasi & Pendaftaran:
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#B6FF1A] transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
              >
                <div className="w-5 h-5 rounded-full bg-white text-[#008080] flex items-center justify-center">
                  <Phone className="w-3 h-3 fill-current" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] block opacity-80">WhatsApp</span>
                  <span className="font-bold font-mono">0851-2106-7147</span>
                </div>
              </a>

              <a
                href="https://www.binuscenter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#B6FF1A] transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
              >
                <div className="w-5 h-5 rounded-full bg-white text-[#008080] flex items-center justify-center">
                  <Globe className="w-3 h-3" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] block opacity-80">Website</span>
                  <span className="font-bold">www.binuscenter.com</span>
                </div>
              </a>

              <a
                href="https://linktr.ee/infobinuscenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B6FF1A] transition-colors text-xs opacity-90 hover:opacity-100 underline underline-offset-2"
              >
                <span>linktr.ee/infobinuscenter</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* QR Code section */}
          <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20">
            <div className="w-12 h-12 bg-white rounded p-1 flex items-center justify-center text-[#0F2415]">
              <QrCode className="w-10 h-10" />
            </div>
            <div className="text-[10px] leading-tight text-white/90">
              <span className="font-bold block">Scan untuk</span>
              <span>Daftar Cepat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
