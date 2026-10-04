import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
  customMessage?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialProgram = 'WPPE — Wakil Perantara Pedagang Efek',
  customMessage
}) => {
  const { t, isEn } = useLanguage();
  const [name, setName] = useState('');
  const [selectedInterest, setSelectedInterest] = useState(initialProgram);
  const [formatPref, setFormatPref] = useState<'public' | 'private'>('public');
  const [background, setBackground] = useState(
    isEn ? 'Finance & Banking Professional' : 'Profesional / Karyawan Keuangan'
  );
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialProgram) {
      setSelectedInterest(initialProgram);
    }
  }, [initialProgram]);

  if (!isOpen) return null;

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let text = '';
    if (customMessage) {
      text = customMessage;
    } else {
      text = isEn
        ? `Hello Money Maker Institute (MMI) Team,\n\nI would like to consult regarding capital market certification:\n- *Program/Scheme:* ${selectedInterest}\n- *Training Format:* ${formatPref === 'public' ? 'Public Class' : 'Private Class 1 on 1'}\n- *Name:* ${name || 'Prospective Candidate'}\n- *Background:* ${background}\n${notes ? `- *Notes/Inquiry:* ${notes}\n` : ''}\nPlease provide tuition details, upcoming cohort dates, and LSP IKEPAMI assessment requirements. Thank you.`
        : `Halo Tim Money Maker Institute (MMI),\n\nSaya ingin berkonsultasi mengenai program sertifikasi pasar modal:\n- *Program/Skema:* ${selectedInterest}\n- *Format Pelatihan:* ${formatPref === 'public' ? 'Public Class' : 'Private Class 1 on 1'}\n- *Nama:* ${name || 'Calon Peserta'}\n- *Latar Belakang:* ${background}\n${notes ? `- *Catatan/Pertanyaan:* ${notes}\n` : ''}\nMohon informasi rincian biaya investasi, jadwal kelas terdekat, dan persiapan asesmen LSP IKEPAMI. Terima kasih.`;
    }

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6285121067147?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2415]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[10px] border border-[#0F2415]/20 w-full max-w-lg p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={isEn ? 'Close modal' : 'Tutup formulir'}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FAFFEF] text-[#0F2415] transition-colors border border-transparent hover:border-[#0F2415]/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-[#0F2415]/10 pb-4 mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-[#EEFFD1] text-[#0F2415] text-xs font-mono font-semibold mb-1">
            <MessageCircle className="w-3.5 h-3.5 text-[#4FAE58]" />
            <span>{t.modals.consultation.badge}</span>
          </div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0F2415]">
            {t.modals.consultation.title}
          </h2>
          <p className="text-xs text-[#4B5C4E] mt-1">
            {t.modals.consultation.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLaunchWhatsApp} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-mono text-[11px] font-bold text-[#0F2415] mb-1">
              {t.modals.consultation.nameLabel}:
            </label>
            <input
              type="text"
              placeholder={t.modals.consultation.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAFFEF] border border-[#0F2415]/15 rounded-[3px] focus:outline-none focus:border-[#0F2415]"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] font-bold text-[#0F2415] mb-1">
              {t.modals.consultation.programLabel}:
            </label>
            <select
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAFFEF] border border-[#0F2415]/15 rounded-[3px] focus:outline-none focus:border-[#0F2415]"
            >
              <option value={isEn ? 'WPPE — Broker-Dealer Representative (Level 5)' : 'WPPE — Perantara Pedagang Efek (Jenjang 5)'}>
                WPPE — {isEn ? 'Broker-Dealer Representative (Level 5)' : 'Perantara Pedagang Efek (Jenjang 5)'}
              </option>
              <option value={isEn ? 'WPPE-P — Marketing Broker-Dealer Representative (Level 4)' : 'WPPE-P — Perantara Pedagang Efek Pemasaran (Jenjang 4)'}>
                WPPE-P — {isEn ? 'Marketing Broker-Dealer Representative (Level 4)' : 'Perantara Pedagang Efek Pemasaran (Jenjang 4)'}
              </option>
              <option value={isEn ? 'WMI — Investment Manager Representative (Level 5)' : 'WMI — Pengelolaan Investasi (Jenjang 5)'}>
                WMI — {isEn ? 'Investment Manager Representative (Level 5)' : 'Pengelolaan Investasi (Jenjang 5)'}
              </option>
              <option value={isEn ? 'WPEE — Underwriter Representative (Level 5)' : 'WPEE — Penjaminan Emisi Efek (Jenjang 5)'}>
                WPEE — {isEn ? 'Underwriter Representative (Level 5)' : 'Penjaminan Emisi Efek (Jenjang 5)'}
              </option>
              <option value={isEn ? 'WAPERD — Mutual Fund Selling Agent (Level 4)' : 'WAPERD — Penjualan Efek Reksa Dana (Jenjang 4)'}>
                WAPERD — {isEn ? 'Mutual Fund Selling Agent (Level 4)' : 'Penjualan Efek Reksa Dana (Jenjang 4)'}
              </option>
              <option value={isEn ? 'DPPI — Investment Product Design (Level 5)' : 'DPPI — Desain Produk Pengelolaan Investasi (Jenjang 5)'}>
                DPPI — {isEn ? 'Investment Product Design (Level 5)' : 'Desain Produk Pengelolaan Investasi (Jenjang 5)'}
              </option>
              <option value={isEn ? 'AEE — Equity Securities Analysis (Level 5)' : 'AEE — Analisis Efek Ekuitas (Jenjang 5)'}>
                AEE — {isEn ? 'Equity Securities Analysis (Level 5)' : 'Analisis Efek Ekuitas (Jenjang 5)'}
              </option>
              <option value={isEn ? 'AT — Technical Analysis (Level 5)' : 'AT — Analisis Teknikal (Jenjang 5)'}>
                AT — {isEn ? 'Technical Analysis (Level 5)' : 'Analisis Teknikal (Jenjang 5)'}
              </option>
              <option value={isEn ? 'ABU-S — Debt Securities & Sukuk Analysis (Level 5)' : 'ABU-S — Analisis Efek Bersifat Utang dan/atau Sukuk (Jenjang 5)'}>
                ABU-S — {isEn ? 'Debt Securities & Sukuk Analysis (Level 5)' : 'Analisis Efek Bersifat Utang dan/atau Sukuk (Jenjang 5)'}
              </option>
              <option value={isEn ? 'PI — Investment Advisor (Level 5)' : 'PI — Penasihat Investasi (Jenjang 5)'}>
                PI — {isEn ? 'Investment Advisor (Level 5)' : 'Penasihat Investasi (Jenjang 5)'}
              </option>
              <option value={isEn ? 'KKP — Corporate Financial Advisory (Level 5)' : 'KKP — Konsultasi Keuangan Perusahaan (Jenjang 5)'}>
                KKP — {isEn ? 'Corporate Financial Advisory (Level 5)' : 'Konsultasi Keuangan Perusahaan (Jenjang 5)'}
              </option>
              <option value={isEn ? 'KPJK — Financial Services Compliance (Level 6)' : 'KPJK — Kepatuhan Penyedia Jasa Keuangan (Jenjang 6)'}>
                KPJK — {isEn ? 'Financial Services Compliance (Level 6)' : 'Kepatuhan Penyedia Jasa Keuangan (Jenjang 6)'}
              </option>
              <option value={isEn ? 'MRPM — Capital Market Risk Management (Level 5)' : 'MRPM — Manajemen Risiko Pasar Modal (Jenjang 5)'}>
                MRPM — {isEn ? 'Capital Market Risk Management (Level 5)' : 'Manajemen Risiko Pasar Modal (Jenjang 5)'}
              </option>
              <option value={isEn ? 'General Consultation: 13 Schemes Mapping' : 'Konsultasi Umum: Pemetaan 13 Skema Sertifikasi'}>
                {isEn ? 'General Consultation: 13 Schemes Career Mapping' : 'Konsultasi Umum: Rekomendasi & Pemetaan Karier 13 Skema'}
              </option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-[11px] font-bold text-[#0F2415] mb-1">
              {t.modals.consultation.formatLabel}:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormatPref('public')}
                className={`py-2 px-3 text-xs font-semibold rounded-[3px] border transition-all cursor-pointer text-left ${
                  formatPref === 'public'
                    ? 'bg-[#0F2415] text-[#FAFFEF] border-[#0F2415]'
                    : 'bg-[#FAFFEF] text-[#4B5C4E] border-[#0F2415]/15 hover:border-[#0F2415]'
                }`}
              >
                <div className="font-bold">{isEn ? 'Public Class' : 'Public Class'}</div>
                <div className="text-[10px] opacity-80">{isEn ? 'Executive Cohort' : 'Batch Eksekutif'}</div>
              </button>
              <button
                type="button"
                onClick={() => setFormatPref('private')}
                className={`py-2 px-3 text-xs font-semibold rounded-[3px] border transition-all cursor-pointer text-left ${
                  formatPref === 'private'
                    ? 'bg-[#0F2415] text-[#FAFFEF] border-[#0F2415]'
                    : 'bg-[#FAFFEF] text-[#4B5C4E] border-[#0F2415]/15 hover:border-[#0F2415]'
                }`}
              >
                <div className="font-bold">{isEn ? 'Private Class 1:1' : 'Private Class 1:1'}</div>
                <div className="text-[10px] opacity-80">{isEn ? 'Flexible Schedule' : 'Jadwal Fleksibel'}</div>
              </button>
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] font-bold text-[#0F2415] mb-1">
              {t.modals.consultation.backgroundLabel}:
            </label>
            <select
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAFFEF] border border-[#0F2415]/15 rounded-[3px] focus:outline-none focus:border-[#0F2415]"
            >
              {t.modals.consultation.backgroundOptions.map((bgOpt, idx) => (
                <option key={idx} value={bgOpt}>
                  {bgOpt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-mono text-[11px] font-bold text-[#0F2415] mb-1">
              {t.modals.consultation.notesLabel}:
            </label>
            <textarea
              rows={2}
              placeholder={t.modals.consultation.notesPlaceholder}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAFFEF] border border-[#0F2415]/15 rounded-[3px] focus:outline-none focus:border-[#0F2415]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#B6FF1A] hover:bg-[#8FDE00] text-[#0F2415] font-sans font-bold text-xs sm:text-sm rounded-[3px] transition-all flex items-center justify-center gap-2 border border-[#0F2415]/15 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.modals.consultation.submitBtn}</span>
            </button>
            <p className="text-[11px] text-[#4B5C4E] text-center mt-2 font-mono">
              {t.modals.consultation.disclaimer}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
