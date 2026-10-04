import { StageId } from '../types';

export interface CertQuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    text: string;
    targetProgram: string;
    programCode: 'WPPE' | 'WPPE-P' | 'WMI' | 'WPEE' | 'WAPERD';
    tag: string;
    points: { wppe: number; wppep: number; wmi: number; wpee: number; waperd: number };
  }[];
}

export interface CertQuizResult {
  code: string;
  name: string;
  titleEn: string;
  badge: string;
  tagline: string;
  summary: string;
  careerProspects: string[];
  keyUnits: string[];
  waMessage: string;
}

export const QUIZ_QUESTIONS: CertQuizQuestion[] = [
  {
    id: 1,
    question: 'Apa target peran utama yang ingin Anda jalani di industri pasar modal?',
    subtitle: 'Pilihlah fokus karier yang paling sesuai dengan minat dan tujuan profesional Anda.',
    options: [
      {
        text: 'Menjadi Pialang Saham, Equity Sales/Trader, atau Dealer di Perusahaan Sekuritas',
        targetProgram: 'WPPE (Wakil Perantara Pedagang Efek)',
        programCode: 'WPPE',
        tag: 'Brokerage & Equity Trading',
        points: { wppe: 3, wppep: 1, wmi: 0, wpee: 0, waperd: 0 }
      },
      {
        text: 'Menjadi Sales Retail / Marketing Pemasaran Efek di Sekuritas atau Fintech Investasi',
        targetProgram: 'WPPE-P (WPPE Pemasaran)',
        programCode: 'WPPE-P',
        tag: 'Sales & Client Acquisition',
        points: { wppe: 1, wppep: 3, wmi: 0, wpee: 0, waperd: 1 }
      },
      {
        text: 'Mengelola Dana Nasabah, Analis Riset, atau Portofolio Fund Manager di Manajer Investasi',
        targetProgram: 'WMI (Wakil Manajer Investasi)',
        programCode: 'WMI',
        tag: 'Asset Management & Funds',
        points: { wppe: 0, wppep: 0, wmi: 3, wpee: 0, waperd: 0 }
      },
      {
        text: 'Menjadi Investment Banker, Penjamin Emisi IPO Saham/Obligasi Emiten di Bursa Efek',
        targetProgram: 'WPEE (Wakil Penjamin Emisi Efek)',
        programCode: 'WPEE',
        tag: 'Investment Banking & Corporate Finance',
        points: { wppe: 0, wppep: 0, wmi: 0, wpee: 3, waperd: 0 }
      },
      {
        text: 'Menjadi Agen Pemasaran Produk Reksa Dana di Perbankan (Wealth Management) atau Agen Penjual',
        targetProgram: 'WAPERD (Wakil Agen Penjual Efek Reksa Dana)',
        programCode: 'WAPERD',
        tag: 'Wealth Management & Mutual Funds',
        points: { wppe: 0, wppep: 1, wmi: 0, wpee: 0, waperd: 3 }
      }
    ]
  },
  {
    id: 2,
    question: 'Bagaimana latar belakang pengalaman Anda saat ini?',
    subtitle: 'Kami menyesuaikan materi pelatihan dengan tingkat pemahaman awal Anda.',
    options: [
      {
        text: 'Pemula / Fresh Graduate / Profesional yang ingin beralih ke industri pasar modal',
        targetProgram: 'WPPE / WPPE-P',
        programCode: 'WPPE-P',
        tag: 'Entry Level to Capital Market',
        points: { wppe: 2, wppep: 3, wmi: 1, wpee: 1, waperd: 2 }
      },
      {
        text: 'Praktisi aktif di perbankan / sekuritas yang membutuhkan sertifikasi profesi resmi BNSP',
        targetProgram: 'WPPE / WMI',
        programCode: 'WPPE',
        tag: 'Licensed Professional Upgrade',
        points: { wppe: 3, wppep: 1, wmi: 2, wpee: 2, waperd: 1 }
      },
      {
        text: 'Analis keuangan / Fund Accountant yang ingin naik jenjang menjadi Manajer Investasi',
        targetProgram: 'WMI (Wakil Manajer Investasi)',
        programCode: 'WMI',
        tag: 'Executive Portfolio Track',
        points: { wppe: 1, wppep: 0, wmi: 3, wpee: 1, waperd: 0 }
      },
      {
        text: 'Corporate finance / legal officer yang mempersiapkan penjaminan emisi efek (IPO emiten)',
        targetProgram: 'WPEE (Wakil Penjamin Emisi Efek)',
        programCode: 'WPEE',
        tag: 'Corporate & M&A Specialist',
        points: { wppe: 0, wppep: 0, wmi: 1, wpee: 3, waperd: 0 }
      }
    ]
  },
  {
    id: 3,
    question: 'Fasilitas pembelajaran apa yang paling Anda butuhkan untuk memastikan kelulusan?',
    subtitle: 'Money Maker Institute menyediakan metode bimbingan komprehensif hingga meraih Sertifikat Kompetensi BNSP.',
    options: [
      {
        text: 'Mentoring 1:1 Personal, Bedah Portofolio Asesor LSP & Garansi Free Retake Bimbingan',
        targetProgram: 'All Certifications',
        programCode: 'WPPE',
        tag: 'Garansi Pendampingan Penuh',
        points: { wppe: 2, wppep: 2, wmi: 2, wpee: 2, waperd: 2 }
      },
      {
        text: 'Latihan Soal CAT Intensif + Simulasi Roleplay Asesor & Bedah Portofolio APL-01/02',
        targetProgram: 'All Certifications',
        programCode: 'WMI',
        tag: 'Simulasi Asesor & Ujian CAT',
        points: { wppe: 2, wppep: 2, wmi: 2, wpee: 2, waperd: 2 }
      },
      {
        text: 'Pilihan Kelas Online & Offline Fleksibel (Malam / Akhir Pekan) dengan Modul Lengkap',
        targetProgram: 'All Certifications',
        programCode: 'WPEE',
        tag: 'Executive Learning Schedule',
        points: { wppe: 2, wppep: 2, wmi: 2, wpee: 2, waperd: 2 }
      }
    ]
  }
];

export const QUIZ_RESULTS_MAP: Record<string, CertQuizResult> = {
  WPPE: {
    code: 'WPPE',
    name: 'Wakil Perantara Pedagang Efek (WPPE)',
    titleEn: 'Broker-Dealer Representative',
    badge: 'Skema Paling Populer & Fundamental',
    tagline: 'Lisensi Wajib untuk Pialang, Dealer Saham, & Equity Trader di Bursa Efek Indonesia',
    summary: 'Berdasarkan pilihan Anda, program WPPE adalah pilihan paling ideal. Sertifikasi ini memberikan kewenangan hukum penuh untuk menerima, menginput pesanan nasabah, menganalisis saham, dan bertindak sebagai pialang resmi di perusahaan sekuritas anggota bursa.',
    careerProspects: [
      'Equity Sales & Broker Dealer di Perusahaan Sekuritas (BEI)',
      'Institutional Equity Trader & Dealing Room Specialist',
      'Investment Specialist & Equity Advisor di Bank / Fintech'
    ],
    keyUnits: [
      'K.661110.001.01 — Melakukan Analisis Efek Ekuitas',
      'K.661110.002.01 — Melaksanakan Transaksi Efek Nasabah',
      'K.661110.003.01 — Menerapkan Kepatuhan dan Etika Profesi WPPE'
    ],
    waMessage: 'Halo Tim MMI, saya sudah mengisi kuis rekomendasi sertifikasi di website dan hasil rekomendasi saya adalah WPPE (Wakil Perantara Pedagang Efek). Saya ingin konsultasi jadwal kelas, silabus SKKNI, dan pendaftaran.'
  },
  'WPPE-P': {
    code: 'WPPE-P',
    name: 'WPPE Pemasaran (WPPE-P)',
    titleEn: 'Broker-Dealer Marketing Representative',
    badge: 'Skema Cepat Khusus Marketing & Sales',
    tagline: 'Lisensi Resmi untuk Pemasaran Efek, Akuisisi Nasabah, & Edukasi Investasi Saham',
    summary: 'Program WPPE-P sangat cocok bagi Anda yang berfokus pada sisi komersial, pemasaran, dan akuisisi nasabah ritel untuk produk efek. Kurikulum terfokus pada kepatuhan pemasaran, perlindungan nasabah, dan etika komunikasi pasar modal.',
    careerProspects: [
      'Retail Equity Sales Officer di Sekuritas',
      'Marketing & Partnership Manager di Aplikasi Investasi / Fintech',
      'Relationship Manager Saham & Edukator Pasar Modal'
    ],
    keyUnits: [
      'K.661110.004.01 — Melakukan Pemasaran Efek Bersifat Ekuitas',
      'K.661110.005.01 — Menerapkan Prinsip Perlindungan Nasabah Pasar Modal'
    ],
    waMessage: 'Halo Tim MMI, saya sudah mengisi kuis rekomendasi sertifikasi di website dan hasil rekomendasi saya adalah WPPE-P (Pemasaran). Saya ingin konsultasi jadwal kelas dan pendaftaran.'
  },
  WMI: {
    code: 'WMI',
    name: 'Wakil Manajer Investasi (WMI)',
    titleEn: 'Investment Manager Representative',
    badge: 'Skema Prestisius Pengelola Dana',
    tagline: 'Lisensi Pengelolaan Portofolio Investasi Kolektif & Dana Kelolaan (AUM) Nasabah',
    summary: 'Program WMI diperuntukkan bagi profesional yang ingin mengelola dana nasabah institusi/ritel, meracik produk reksa dana, KPD (Kontrak Pengelolaan Dana), dan memimpin divisi portofolio di perusahaan Manajer Investasi.',
    careerProspects: [
      'Portfolio Manager / Fund Manager di Perusahaan Asset Management',
      'Chief Investment Officer (CIO) & Senior Research Analyst',
      'Wealth & Investment Strategist di Family Office / Private Wealth Bank'
    ],
    keyUnits: [
      'K.661210.001.01 — Merancang Kebijakan Alokasi Aset Portofolio',
      'K.661210.002.01 — Melakukan Valuasi Aset & Pengelolaan Portofolio Kolektif',
      'K.661210.003.01 — Menerapkan Manajemen Risiko Portofolio & Regulasi MI'
    ],
    waMessage: 'Halo Tim MMI, saya sudah mengisi kuis rekomendasi sertifikasi di website dan hasil rekomendasi saya adalah WMI (Wakil Manajer Investasi). Saya ingin informasi detail silabus SKKNI dan jadwal bimbingan.'
  },
  WPEE: {
    code: 'WPEE',
    name: 'Wakil Penjamin Emisi Efek (WPEE)',
    titleEn: 'Underwriter Representative',
    badge: 'Skema Investment Banking & IPO',
    tagline: 'Lisensi Bergengsi Penjaminan Emisi Efek, IPO Emiten, & Corporate Finance di BEI',
    summary: 'Program WPEE adalah puncak keahlian investment banking di Indonesia, memberikan kewenangan untuk menstrukturkan penawaran umum perdana (IPO), penjaminan obligasi/sukuk, dan restrukturisasi merger & akuisisi korporasi.',
    careerProspects: [
      'Investment Banker & IPO Deal Specialist di Perusahaan Sekuritas',
      'Corporate Finance Director & Capital Market Advisory',
      'Underwriting Risk Analyst di Institusi Keuangan'
    ],
    keyUnits: [
      'K.661310.001.01 — Melakukan Uji Tuntas (Due Diligence) Emiten Calon IPO',
      'K.661310.002.01 — Menetapkan Struktur Harga & Skema Penjaminan Emisi',
      'K.661310.003.01 — Menyusun Dokumen Prospektus & Pendaftaran ke OJK'
    ],
    waMessage: 'Halo Tim MMI, saya sudah mengisi kuis rekomendasi sertifikasi di website dan hasil rekomendasi saya adalah WPEE (Wakil Penjamin Emisi Efek). Saya ingin konsultasi jadwal kelas dan pendaftaran.'
  },
  WAPERD: {
    code: 'WAPERD',
    name: 'Wakil Agen Penjual Efek Reksa Dana (WAPERD)',
    titleEn: 'Mutual Fund Selling Agent',
    badge: 'Skema Wajib Perbankan & Wealth Management',
    tagline: 'Lisensi Resmi untuk Memasarkan & Memberikan Rekomendasi Produk Reksa Dana',
    summary: 'Program WAPERD membekali Anda pengetahuan lengkap tentang instrumen reksa dana, profil risiko investor, dan kepatuhan penjualan sesuai POJK. Sertifikasi ini adalah syarat wajib bagi tenaga pemasar reksa dana di Bank (APERD) dan Fintech.',
    careerProspects: [
      'Priority Banking Officer & Wealth Specialist di Bank Umum',
      'Financial Advisor & Mutual Fund Specialist di Fintech Investasi',
      'Sales Agent APERD berlisensi resmi'
    ],
    keyUnits: [
      'K.661910.001.01 — Menganalisis Karakteristik Produk Reksa Dana',
      'K.661910.002.01 — Melakukan Transaksi Penjualan & Edukasi Reksa Dana',
      'K.661910.003.01 — Menerapkan Kepatuhan APERD & Perlindungan Investor'
    ],
    waMessage: 'Halo Tim MMI, saya sudah mengisi kuis rekomendasi sertifikasi di website dan hasil rekomendasi saya adalah WAPERD. Saya ingin informasi jadwal kelas dan pendaftaran.'
  }
};
