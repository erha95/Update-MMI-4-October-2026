import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  BookOpen,
  Video,
  Award,
  TrendingUp
} from 'lucide-react';
import { BinusMmiLogo } from './BinusMmiLogo';

export interface WmiScheduleItem {
  no: number;
  keterangan: string;
  tanggal: string;
  jam: string;
  durasi: string;
  category: 'tm' | 'pengetahuan' | 'keterampilan' | 'roleplay';
  description?: string;
}

export const WMI_SCHEDULE_DATA: WmiScheduleItem[] = [
  {
    no: 1,
    keterangan: 'Technical Meeting',
    tanggal: '16 November 2026',
    jam: '19.00 - 20.00',
    durasi: '1 Jam',
    category: 'tm',
    description: 'Orientasi kelas daring via Zoom, sosialisasi modul investasi, silabus SKKNI No. 20/2024 & persiapan pre-assessment.'
  },
  {
    no: 2,
    keterangan: 'Materi Aspek Pengetahuan',
    tanggal: '18 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'pengetahuan',
    description: 'Kerangka hukum pengelolaan investasi, regulasi OJK reksa dana, kode etik WMI, dan tata kelola manajer investasi.'
  },
  {
    no: 3,
    keterangan: 'Materi Aspek Pengetahuan',
    tanggal: '19 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'pengetahuan',
    description: 'Teori ekonomi makro, evaluasi instrumen pasar modal (ekuitas, obligasi, pasar uang), dan analisis fundamental emiten.'
  },
  {
    no: 4,
    keterangan: 'Materi Aspek Pengetahuan',
    tanggal: '20 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'pengetahuan',
    description: 'Modern Portfolio Theory (MPT), alokasi aset strategis & taktis, manajemen risiko portofolio reksa dana & KPD.'
  },
  {
    no: 5,
    keterangan: 'Materi Aspek Keterampilan (Kertas Kerja)',
    tanggal: '23 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'keterampilan',
    description: 'Penyusunan Kebijakan Investasi (IPS), perumusan strategi portofolio & kertas kerja valuasi aset efek.'
  },
  {
    no: 6,
    keterangan: 'Materi Aspek Keterampilan (Kertas Kerja)',
    tanggal: '24 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'keterampilan',
    description: 'Penyusunan laporan kinerja portofolio (Sharpe, Treynor, Jensen Alpha) & verifikasi kepatuhan limit investasi.'
  },
  {
    no: 7,
    keterangan: 'Roleplay',
    tanggal: '25 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'roleplay',
    description: 'Simulasi presentasi komite investasi, interaksi dengan investor institusi & presentasi mandat portofolio (Sesi 1).'
  },
  {
    no: 8,
    keterangan: 'Roleplay',
    tanggal: '26 November 2026',
    jam: '18.30 - 20.30',
    durasi: '2 Jam',
    category: 'roleplay',
    description: 'Simulasi komprehensif uji kompetensi lisan asesor LSP IKEPAMI dan evaluasi akhir kesiapan sertifikasi resmi (Sesi 2).'
  }
];

interface WmiScheduleTableProps {
  className?: string;
  showCta?: boolean;
}

export const WmiScheduleTable: React.FC<WmiScheduleTableProps> = ({
  className = '',
  showCta = true
}) => {
  const waLink =
    'https://wa.me/6285121067147?text=' +
    encodeURIComponent(
      'Halo Binus Center & Money Maker Institute, saya ingin mendaftar Program WMI (Wakil Manajer Investasi) Batch 16-26 November 2026 sesuai rincian jadwal yang tertera.'
    );

  const getCategoryBadge = (cat: WmiScheduleItem['category']) => {
    switch (cat) {
      case 'tm':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            <Video className="w-3 h-3" /> Orientasi
          </span>
        );
      case 'pengetahuan':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]">
            <BookOpen className="w-3 h-3" /> Teori & Regulasi
          </span>
        );
      case 'keterampilan':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FEF9C3] text-[#A16207] border border-[#FEF08A]">
            <Sparkles className="w-3 h-3" /> Praktik Kertas Kerja
          </span>
        );
      case 'roleplay':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]">
            <Award className="w-3 h-3" /> Simulasi Asesmen
          </span>
        );
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border-2 border-[#0F2415]/15 shadow-lg overflow-hidden flex flex-col font-sans ${className}`}
    >
      {/* Header bar matching user's Excel style */}
      <div className="bg-[#FEF08A] border-b-2 border-[#0F2415]/20 p-4 sm:p-5 text-center relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-2">
          <BinusMmiLogo size="sm" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0F2415] text-[#B6FF1A] font-mono text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF1A] animate-pulse" />
            <span>BATCH NOVEMBER 2026</span>
          </div>
        </div>
        <h3 className="font-display font-extrabold text-lg sm:text-2xl text-[#0F2415] tracking-tight">
          WMI (Wakil Manajer Investasi)
        </h3>
        <p className="text-xs sm:text-sm text-[#713F12] font-medium mt-0.5">
          Jadwal Pembelajaran Resmi Kemitraan BINUS CENTER × Money Maker Institute
        </p>
      </div>

      {/* Quick Summary Pill Bar */}
      <div className="bg-[#FAFFEF] px-4 py-2.5 border-b border-[#0F2415]/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-[#0F2415]">
          <Calendar className="w-4 h-4 text-[#E11D48]" />
          <span><strong>16 - 26 Nov 2026</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-[#0F2415]">
          <Clock className="w-4 h-4 text-[#E11D48]" />
          <span><strong>8 Sesi Pertemuan</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-[#0F2415]">
          <Video className="w-4 h-4 text-[#E11D48]" />
          <span>Online via <strong>Zoom Live</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-[#0F2415]">
          <Award className="w-4 h-4 text-[#E11D48]" />
          <span>Uji: <strong>Februari 2027</strong></span>
        </div>
      </div>

      {/* Main Table view */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-[#E2F7D8] text-[#0F2415] font-mono font-bold text-[11px] sm:text-xs uppercase border-b-2 border-[#0F2415]/20">
              <th className="py-3 px-3 sm:px-4 w-12 text-center border-r border-[#0F2415]/15">No</th>
              <th className="py-3 px-3 sm:px-5 border-r border-[#0F2415]/15">Keterangan</th>
              <th className="py-3 px-3 sm:px-4 border-r border-[#0F2415]/15 whitespace-nowrap">Tanggal</th>
              <th className="py-3 px-3 sm:px-4 border-r border-[#0F2415]/15 whitespace-nowrap">Jam</th>
              <th className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">Durasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#0F2415]/10">
            {WMI_SCHEDULE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <tr
                  key={item.no}
                  className={`transition-colors hover:bg-[#EEFFD1]/60 ${
                    isEven ? 'bg-[#F9FCF5]' : 'bg-[#EDF7E7]/40'
                  }`}
                >
                  <td className="py-3 px-3 sm:px-4 text-center font-mono font-bold text-[#0F2415] border-r border-[#0F2415]/10">
                    {item.no}
                  </td>
                  <td className="py-3 px-3 sm:px-5 border-r border-[#0F2415]/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-[#0F2415] text-xs sm:text-sm">
                        {item.keterangan}
                      </span>
                      {getCategoryBadge(item.category)}
                    </div>
                    {item.description && (
                      <p className="text-[11px] text-[#4B5C4E] leading-relaxed hidden sm:block">
                        {item.description}
                      </p>
                    )}
                  </td>
                  <td className="py-3 px-3 sm:px-4 font-medium text-[#0F2415] border-r border-[#0F2415]/10 whitespace-nowrap">
                    <span className="font-mono text-xs">{item.tanggal}</span>
                  </td>
                  <td className="py-3 px-3 sm:px-4 font-mono font-semibold text-[#0F2415] border-r border-[#0F2415]/10 whitespace-nowrap">
                    {item.jam} WIB
                  </td>
                  <td className="py-3 px-3 sm:px-4 text-center font-mono font-bold text-[#166534] whitespace-nowrap bg-black/[0.02]">
                    {item.durasi}
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* Table Footer matching user's green highlight */}
          <tfoot>
            <tr className="border-t-2 border-[#0F2415]/20 bg-white">
              <td
                colSpan={4}
                className="py-3.5 px-4 sm:px-6 text-right font-display font-extrabold text-sm sm:text-base text-[#0F2415] border-r border-[#0F2415]/15"
              >
                Total Durasi
              </td>
              <td className="py-3.5 px-4 text-center font-mono font-black text-sm sm:text-base text-[#0F2415] bg-[#00FF66] shadow-inner">
                14 Jam
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Note & CTA Footer */}
      {showCta && (
        <div className="p-4 sm:p-5 bg-[#FAFFEF] border-t border-[#0F2415]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#4B5C4E] space-y-0.5">
            <p className="flex items-center gap-1.5 font-semibold text-[#0F2415]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Termasuk 1 Jam Technical Meeting + 7 Sesi Materi & Roleplay (@ 2 Jam)</span>
            </p>
            <p className="text-[11px] text-[#64748B]">
              Mode Pembelajaran: Live Zoom Interaktif • Materi Aspek Pengetahuan, Kertas Kerja & Roleplay Portofolio
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#008080] hover:bg-[#006666] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-sm hover:scale-102 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#B6FF1A]" />
            <span>Daftar Batch WMI via WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
};
