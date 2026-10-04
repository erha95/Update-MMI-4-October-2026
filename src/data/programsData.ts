import { ProgramItem } from '../types';

export const PROGRAMS_DATA: ProgramItem[] = [
  // 1. PENJAMINAN EMISI EFEK (WPEE)
  {
    id: 'wpee',
    code: 'WPEE',
    name: 'Penjaminan Emisi Efek (WPEE)',
    titleEn: 'Underwriting & Investment Banking Representative',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Penjaminan Emisi Efek',
    learningHours: '16 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'underwriting',
    stage: 'stage1',
    stageName: 'Investment Banking & Corporate Finance',
    badge: 'Investment Banking & IPO',
    isPopular: true,
    shortDesc: 'Program penjaminan emisi efek untuk mendukung keberhasilan aksi korporasi dan penguatan fungsi investment banking sesuai SKKNI No. 20/2024.',
    fullDesc: 'Program ini mempersiapkan peserta dengan kompetensi strategis dalam penjaminan emisi efek, untuk mendukung keberhasilan aksi korporasi dan penguatan fungsi investment banking. Program Pelatihan Berbasis Kompetensi Pasar Modal bagi WPEE Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penjaminan Emisi Efek berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Investment Banker, Corporate Finance Officer, dan Equity Capital Market Specialist',
      'Underwriter & Konsultan Keuangan Emiten Penawaran Umum',
      'Profesional Industri Jasa Keuangan yang menangani IPO & Aksi Korporasi',
      'Legal & Compliance Officer terkait Transaksi Pasar Perdana'
    ],
    careerProspects: [
      'Vice President / Director of Investment Banking',
      'Lead Underwriter & Syndicate Manager',
      'Corporate Finance Specialist di Sekuritas Penjamin Emisi',
      'Head of Capital Markets Advisory'
    ],
    duration: '16 Jam Pembelajaran (Public / In House: 16 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Studi Kasus Prospektus IPO',
    schedule: 'Batch BINUS CENTER: 16-30 November 2026 (9 Sesi / 16 Jam) | Executive Evening & Weekend Class',
    investment: 'Rp 3.800.000',
    earlyBird: 'Rp 3.200.000',
    pricing: {
      publicClass: {
        price: 'Rp 3.800.000',
        earlyBird: 'Rp 3.200.000',
        description: 'Kelas Publik (16 Jam) + Bank Soal & Bedah Prospektus'
      },
      privateClass: {
        price: 'Rp 7.000.000',
        earlyBird: 'Rp 6.100.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 2.200.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 6.000.000',
        earlyBird: 'Rp 5.400.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 9.200.000',
        earlyBird: 'Rp 8.300.000'
      }
    },
    unitKompetensi: [
      'UK Melaksanakan Kegiatan Penawaran Jasa Penjamin Pelaksana Emisi Efek dalam Penawaran Umum',
      'UK Melakukan Kegiatan Koordinasi Persiapan Penawaran Umum Efek',
      'UK Mengakomodir Kegiatan Uji Tuntas Kelengkapan Dokumen dan Prospektus untuk Penawaran Umum Efek',
      'UK Menganalisis Sektor Dan Industri',
      'UK Melakukan Evaluasi Fundamental Perusahaan',
      'UK Melakukan Valuasi Efek Berbasis Ekuitas',
      'UK Melakukan Valuasi Efek Pendapatan Tetap',
      'UK Menyusun Usulan Restrukturisasi Keuangan Perusahaan dan/atau Aksi Korporasi Nasabah',
      'UK Mengelola Kegiatan Penawaran Awal dan Penjaminan Emisi Efek',
      'UK Mengelola Kegiatan Pendaftaran Penawaran Umum Efek',
      'UK Mengelola Kegiatan Penawaran Umum dan Pencatatan Efek',
      'UK Melaksanakan Kegiatan Restrukturisasi Keuangan Perusahaan dan/atau Aksi Korporasi Nasabah',
      'UK Menerapkan Pengelolaan Risiko Terkait Kegiatan Perantara Pedagang Efek',
      'UK Merekomendasikan Efek Bersifat Ekuitas kepada Nasabah Perantara Pedagang Efek',
      'UK Merekomendasikan Efek Bersifat Utang dan/atau Sukuk kepada Nasabah Perantara Pedagang Efek',
      'UK Melakukan Transaksi Efek Bersifat Ekuitas Terkait Kegiatan Perantara Pedagang Efek',
      'UK Melakukan Transaksi Efek Bersifat Utang dan/atau Sukuk Terkait Kegiatan Perantara Pedagang Efek',
      'UK Memantau Portofolio Efek Terkait Kegiatan Perantara Pedagang Efek',
      'UK Memantau Penyelesaian Transaksi Efek Terkait Kegiatan Perantara Pedagang Efek'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Penawaran Jasa Penjamin Pelaksana Emisi Efek',
        description: 'Melaksanakan kegiatan penawaran jasa penjamin pelaksana emisi efek dalam penawaran umum.'
      },
      {
        code: 'UK-02',
        title: 'Koordinasi Persiapan Penawaran Umum Efek',
        description: 'Melakukan kegiatan koordinasi persiapan penawaran umum efek lintas profesi penunjang pasar modal.'
      },
      {
        code: 'UK-03',
        title: 'Uji Tuntas (Due Diligence) & Prospektus',
        description: 'Mengakomodir kegiatan uji tuntas kelengkapan dokumen legal, finansial, dan prospektus penawaran umum efek.'
      },
      {
        code: 'UK-04',
        title: 'Valuasi & Restrukturisasi Keuangan',
        description: 'Melakukan valuasi efek ekuitas/pendapatan tetap serta menyusun usulan restrukturisasi keuangan perusahaan nasabah.'
      }
    ],
    persyaratanPeserta: [
      'Minimal SMU/sederajat + pengalaman industri jasa keuangan ≥3 tahun + pelatihan Jenjang 5 Penjaminan Emisi Efek; atau',
      'Minimal D3/sederajat + pelatihan Jenjang 5 Penjaminan Emisi Efek; atau',
      'Pengalaman sebagai manajer di industri jasa keuangan ≥2 tahun; atau',
      'Memiliki sertifikasi BNSP relevan (Jenjang 3/4/5 Pasar Modal) + pelatihan Jenjang 5 Penjaminan Emisi Efek.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (16 Jam)',
      inHouseClass: 'Kelas In House (16 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan 19 Unit Kompetensi WPEE',
      'Tahap 2: Pembekalan Modul Penjaminan Emisi, Due Diligence & IPO (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Bedah Berkas Portofolio APL-01/02 & Simulasi Wawancara Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Bedah prospektus riil IPO Bursa Efek Indonesia',
      'Bimbingan langsung dari praktisi senior Investment Banking',
      'Simulasi CAT dan pendampingan portofolio sampai kompeten',
      'Jejaring profesional pasar modal dan corporate finance'
    ]
  },

  // 2. PENGELOLAAN INVESTASI (WMI)
  {
    id: 'wmi',
    code: 'WMI',
    name: 'Pengelolaan Investasi (WMI)',
    titleEn: 'Investment Management & Fund Portfolio Representative',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Pengelolaan Investasi',
    learningHours: '14 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'investment-mgmt',
    stage: 'stage1',
    stageName: 'Asset Management & Portofolio',
    badge: 'Level Tertinggi Asset Management',
    isPopular: true,
    shortDesc: 'Penguatan kompetensi pengelolaan investasi berbasis analisis dan strategi untuk mengoptimalkan portofolio dan kepercayaan investor.',
    fullDesc: 'Program ini berfokus pada penguatan kompetensi pengelolaan investasi berbasis analisis dan strategi, guna mengoptimalkan kinerja portofolio dan kepercayaan investor. Program Pelatihan Berbasis Kompetensi Pasar Modal bagi WMI Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Pengelolaan Investasi berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Fund Manager, Portfolio Specialist, dan Investment Analyst',
      'Pengelola Dana Pensiun, Asuransi, Family Office, dan Sovereign Wealth Fund',
      'Professional Perbankan Divisi Treasury, Wealth Management & Asset Management',
      'Calon Pimpinan / Direksi Perusahaan Manajer Investasi'
    ],
    careerProspects: [
      'Chief Investment Officer (CIO) / Investment Committee Member',
      'Portfolio Manager / Fund Manager Reksa Dana & KPD',
      'Head of Asset Allocation & Quantitative Research',
      'Investment Advisory Lead'
    ],
    duration: '14 Jam Pembelajaran (Public / In House: 14 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Portofolio Modeling Spreadsheet',
    schedule: 'Batch BINUS CENTER: 16-26 November 2026 (8 Sesi / 14 Jam) | Executive Evening 18.30-20.30 WIB',
    investment: 'Rp 4.500.000',
    earlyBird: 'Rp 3.850.000',
    pricing: {
      publicClass: {
        price: 'Rp 4.500.000',
        earlyBird: 'Rp 3.850.000',
        description: 'Kelas Publik (14 Jam) + Model Valuasi & Portofolio Spreadsheet'
      },
      privateClass: {
        price: 'Rp 8.250.000',
        earlyBird: 'Rp 7.200.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Eksklusif bersama Praktisi Fund Manager'
      },
      examFee: {
        price: 'Rp 2.500.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 7.000.000',
        earlyBird: 'Rp 6.350.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 10.750.000',
        earlyBird: 'Rp 9.700.000'
      }
    },
    unitKompetensi: [
      'UK Melakukan Analisis Peluang dan Risiko Investasi',
      'UK Melakukan Analisis Peluang dan Risiko Investasi Sesuai dengan Prinsip Syariah',
      'UK Menyusun Strategi Pengelolaan Investasi',
      'UK Membuat Kertas Kerja Pengelolaan Portofolio',
      'UK Melakukan Monitoring Kinerja Portofolio',
      'UK Melakukan Transaksi Aset Dasar Portofolio',
      'UK Melakukan Pengelolaan Portofolio Investasi Sesuai dengan Prinsip Syariah',
      'UK Melakukan Penyelesaian Transaksi Efek pada Pengelolaan Investasi',
      'UK Memberikan Jasa Penasihat Investasi kepada Nasabah'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Analisis Peluang & Risiko Investasi (Konvensional & Syariah)',
        description: 'Melakukan analisis peluang dan risiko investasi komprehensif termasuk kepatuhan prinsip syariah.'
      },
      {
        code: 'UK-02',
        title: 'Strategi & Kertas Kerja Pengelolaan Portofolio',
        description: 'Menyusun strategi alokasi aset, formulasi kebijakan investasi (IPS), dan pembuatan kertas kerja portofolio.'
      },
      {
        code: 'UK-03',
        title: 'Eksekusi & Penyelesaian Transaksi Portofolio',
        description: 'Melakukan transaksi aset dasar, rebalancing portofolio, dan penyelesaian transaksi efek.'
      },
      {
        code: 'UK-04',
        title: 'Monitoring Kinerja & Jasa Penasihat Investasi',
        description: 'Evaluasi metrik kinerja Sharpe, Treynor, Alpha, serta pemberian jasa konsultasi investasi.'
      }
    ],
    persyaratanPeserta: [
      'Minimal pendidikan formal Sekolah Menengah Umum (SMU)/Sederajat dan berpengalaman kerja pada Industri Jasa Keuangan minimal 3 tahun dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Pengelolaan Investasi; atau',
      'Minimal pendidikan formal minimal D3/Sederajat dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Pengelolaan Investasi; atau',
      'Berpengalaman sebagai pegawai Industri Jasa Keuangan yang menduduki jabatan sebagai manajer sekurang-kurangnya 2 (dua) tahun; atau',
      'Memiliki Sertifikat Kompetensi Kerja (BNSP) untuk: Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penasihat Investasi dan Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Pengelolaan Investasi.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (14 Jam)',
      inHouseClass: 'Kelas In House (14 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Pengelolaan Investasi',
      'Tahap 2: Pembekalan Modul Alokasi Aset, Portofolio & Kepatuhan (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Kertas Kerja Portofolio & Simulasi Roleplay Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Dipandu mentor praktisi Fund Manager aktif bertaraf triliunan AUM',
      'Spreadsheet template portofolio modeling & risk-return optimization',
      'Garansi bimbingan portofolio sampai kompeten',
      'Akses jejaring profesional industri asset management'
    ]
  },

  // 3. PERANTARA PEDAGANG EFEK (WPPE)
  {
    id: 'wppe',
    code: 'WPPE',
    name: 'Perantara Pedagang Efek (WPPE)',
    titleEn: 'Securities Broker-Dealer Representative',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Perantara Pedagang Efek',
    learningHours: '12 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'brokerage',
    stage: 'stage1',
    stageName: 'Brokerage & Equity Trading',
    badge: 'Paling Populer & Standar Industri',
    isPopular: true,
    shortDesc: 'Meningkatkan kapabilitas profesional dalam aktivitas perdagangan efek secara komprehensif, mendukung keputusan efektif dan berintegritas.',
    fullDesc: 'Program ini dirancang untuk meningkatkan kapabilitas profesional dalam aktivitas perdagangan efek secara komprehensif, mendukung pengambilan keputusan yang efektif dan berintegritas. Program Pelatihan Berbasis Kompetensi Pasar Modal bagi WPPE (WPPE) Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Perantara Pedagang Efek Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Equity Sales, Dealer Saham, Remisier, dan Broker Perusahaan Sekuritas Anggota Bursa',
      'Trader Institusional & Dealing Room Staff',
      'Fresh Graduate & Profesional Keuangan yang ingin berkarier di Pasar Modal',
      'Individu yang ingin melegalkan profesi pialang efek berlisensi BNSP'
    ],
    careerProspects: [
      'Equity Sales & Dealer di Perusahaan Sekuritas (BEI)',
      'Institutional Sales Trader & Dealing Room Specialist',
      'Research & Investment Specialist',
      'Branch Manager Kantor Cabang Sekuritas'
    ],
    duration: '12 Jam Pembelajaran (Public / In House: 12 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Bank Soal CAT Ujian Asesmen',
    schedule: 'Batch BINUS CENTER: 16-24 November 2026 (7 Sesi / 12 Jam) | Executive Evening 18.30-20.30 WIB',
    investment: 'Rp 2.950.000',
    earlyBird: 'Rp 2.450.000',
    pricing: {
      publicClass: {
        price: 'Rp 2.950.000',
        earlyBird: 'Rp 2.450.000',
        description: 'Kelas Publik (12 Jam) + Bank Soal CAT Lengkap'
      },
      privateClass: {
        price: 'Rp 5.500.000',
        earlyBird: 'Rp 4.750.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Fleksibel bersama Master Mentor'
      },
      examFee: {
        price: 'Rp 1.850.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 4.800.000',
        earlyBird: 'Rp 4.300.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 7.350.000',
        earlyBird: 'Rp 6.600.000'
      }
    },
    unitKompetensi: [
      'UK Menyusun Kegiatan Pemasaran Produk Investasi Dasar dan Produk Investasi Dasar Syariah',
      'UK Menyusun Kegiatan Pemasaran Produk Investasi Alternatif dan Produk Investasi Alternatif Syariah',
      'UK Melakukan Promosi Produk Investasi dan Produk Investasi Syariah',
      'UK Memasarkan Efek Bersifat Ekuitas kepada Calon Nasabah Perantara Pedagang Efek',
      'UK Memasarkan Efek Bersifat Utang dan/atau Sukuk kepada Calon Nasabah Perantara Pedagang Efek',
      'UK Memasarkan Produk Investasi Dasar dan Produk Investasi Dasar Syariah',
      'UK Memasarkan Produk Investasi Alternatif dan Produk Investasi Alternatif Syariah',
      'UK Menyusun Laporan Kegiatan Pemasaran Produk Investasi dan Produk Investasi Syariah',
      'UK Merekomendasikan Efek Bersifat Ekuitas kepada Nasabah Perantara Pedagang Efek',
      'UK Merekomendasikan Efek Bersifat Utang dan/atau Sukuk kepada Nasabah Perantara Pedagang Efek',
      'UK Menerapkan Pengelolaan Risiko Terkait Kegiatan Perantara Pedagang Efek',
      'UK Melakukan Pembukaan Rekening Efek untuk Calon Nasabah Perantara Pedagang Efek',
      'UK Melakukan Transaksi Efek Bersifat Ekuitas Terkait Kegiatan Perantara Pedagang Efek',
      'UK Melakukan Transaksi Efek Bersifat Utang dan/atau Sukuk Terkait Kegiatan Perantara Pedagang Efek',
      'UK Memantau Penyelesaian Transaksi Efek Terkait Kegiatan Perantara Pedagang Efek',
      'UK Memantau Portofolio Efek Terkait Kegiatan Perantara Pedagang Efek',
      'UK Melaksanakan Evaluasi Pemasaran Produk Investasi dan Produk Investasi Syariah'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Pemasaran & Promosi Produk Investasi (Saham, Obligasi, Sukuk)',
        description: 'Menyusun strategi pemasaran dan melakukan promosi instrumen pasar modal konvensional maupun syariah.'
      },
      {
        code: 'UK-02',
        title: 'Rekomendasi Efek & Pengelolaan Risiko Transaksi',
        description: 'Memberikan rekomendasi efek berbasis analisis serta menerapkan manajemen risiko nasabah pialang efek.'
      },
      {
        code: 'UK-03',
        title: 'Pembukaan Rekening Efek & Kepatuhan KYC/CDD',
        description: 'Proses verifikasi nasabah, pembukaan SID/SRE, dan kepatuhan anti pencucian uang.'
      },
      {
        code: 'UK-04',
        title: 'Eksekusi & Penyelesaian Transaksi Bursa',
        description: 'Pelaksanaan order transaksi ekuitas, efek hutang, pemantauan portofolio dan settlement bursa.'
      }
    ],
    persyaratanPeserta: [
      'Minimal SMU/sederajat + pengalaman industri jasa keuangan ≥3 tahun + pelatihan Jenjang 5 Perantara Pedagang Efek; atau',
      'Minimal D3/sederajat + pelatihan Jenjang 5 Perantara Pedagang Efek; atau',
      'Pengalaman sebagai manajer di industri jasa keuangan ≥2 tahun; atau',
      'Memiliki sertifikasi BNSP relevan (Jenjang 3/4 Pasar Modal) + pelatihan Jenjang 5 Perantara Pedagang Efek.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (12 Jam)',
      inHouseClass: 'Kelas In House (12 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Penjelasan 17 Unit Kompetensi WPPE',
      'Tahap 2: Pembekalan Modul Perdagangan Efek & Kepatuhan (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Kurasi Berkas APL-01/02 & Simulasi Roleplay Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      '500+ bank soal CAT dan drill ujian terstandar',
      'Bimbingan gratis sampai kompeten (Free Mentoring per Unit)',
      'Konsultasi intensif portofolio APL-01 & APL-02',
      'Jejaring luas pialang saham di Bursa Efek Indonesia'
    ]
  },

  // 4. PERANTARA PEDAGANG EFEK PEMASARAN (WPPE-P)
  {
    id: 'wppe-p',
    code: 'WPPE-P',
    name: 'Perantara Pedagang Efek Pemasaran (WPPE-P)',
    titleEn: 'Securities Marketing Broker Representative',
    qualificationLevel: 'Jenjang Kualifikasi 4',
    subfield: 'Subbidang Perantara Pedagang Efek Pemasaran',
    learningHours: '10 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'brokerage',
    stage: 'stage1',
    stageName: 'Sales & Client Acquisition',
    badge: 'Jalur Cepat Sales & Retail',
    shortDesc: 'Membekali peserta dengan kompetensi pemasaran efek sesuai standar nasional untuk meningkatkan efektivitas akuisisi investor dan kinerja penjualan.',
    fullDesc: 'Program ini dirancang untuk membekali peserta dengan kompetensi pemasaran efek yang sesuai standar nasional, guna meningkatkan efektivitas akuisisi investor dan kinerja penjualan di industri pasar modal. Program Pelatihan Berbasis Kompetensi Pasar Modal bagi WPPE Pemasaran (WPPE P) Jenjang Kualifikasi 4 Bidang Pasar Modal Subbidang Perantara Pedagang Efek Pemasaran Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Sales Officer, Relationship Manager, dan Marketing di Perusahaan Sekuritas',
      'Financial Influencer & Edukator Pasar Modal yang ingin berlisensi resmi',
      'Mahasiswa, Fresh Graduate, dan Profesional pemula di industri sekuritas'
    ],
    careerProspects: [
      'Retail Marketing Officer Perusahaan Sekuritas',
      'Branch Relationship Manager & Customer Acquisition',
      'Investment Specialist di Gallery Investasi BEI',
      'Financial Educator Resmi'
    ],
    duration: '10 Jam Pembelajaran (Public / In House: 10 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Simulasi Pembukaan Rekening Efek',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 2.100.000',
    earlyBird: 'Rp 1.750.000',
    pricing: {
      publicClass: {
        price: 'Rp 2.100.000',
        earlyBird: 'Rp 1.750.000',
        description: 'Kelas Publik (10 Jam) + Bank Soal Pemasaran Efek'
      },
      privateClass: {
        price: 'Rp 3.900.000',
        earlyBird: 'Rp 3.350.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Khusus Strategi Sales'
      },
      examFee: {
        price: 'Rp 1.450.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 3.550.000',
        earlyBird: 'Rp 3.200.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 5.350.000',
        earlyBird: 'Rp 4.800.000'
      }
    },
    unitKompetensi: [
      'UK Menyusun Kegiatan Pemasaran Produk Investasi Dasar dan Produk Investasi Dasar Syariah',
      'UK Melakukan Promosi Produk Investasi dan Produk Investasi Syariah',
      'UK Memasarkan Efek Bersifat Ekuitas kepada Calon Nasabah Perantara Pedagang Efek',
      'UK Memasarkan Efek Bersifat Utang dan/atau Sukuk kepada Calon Nasabah Perantara Pedagang Efek',
      'UK Memasarkan Produk Investasi Dasar dan Produk Investasi Dasar Syariah',
      'UK Menyusun Laporan Kegiatan Pemasaran Produk Investasi dan Produk Investasi Syariah',
      'UK Merekomendasikan Efek Bersifat Ekuitas kepada Nasabah Perantara Pedagang Efek',
      'UK Merekomendasikan Efek Bersifat Utang dan/atau Sukuk kepada Nasabah Perantara Pedagang Efek',
      'UK Melakukan Pembukaan Rekening Efek untuk Calon Nasabah Perantara Pedagang Efek',
      'UK Melakukan Transaksi Efek Bersifat Ekuitas Terkait Kegiatan Perantara Pedagang Efek',
      'UK Melakukan Transaksi Efek Bersifat Utang dan/atau Sukuk Terkait Kegiatan Perantara Pedagang Efek',
      'UK Melaksanakan Evaluasi Pemasaran Produk Investasi dan Produk Investasi Syariah'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Pemasaran & Promosi Produk Investasi Ekuitas/Utang/Sukuk',
        description: 'Menyusun kegiatan pemasaran dan mempromosikan instrumen investasi syariah dan konvensional.'
      },
      {
        code: 'UK-02',
        title: 'Pembukaan Rekening Efek & Rekomendasi Efek Dasar',
        description: 'Memproses dokumen KYC pembukaan rekening efek dan memberikan edukasi rekomendasi efek.'
      },
      {
        code: 'UK-03',
        title: 'Pelaporan & Evaluasi Kinerja Pemasaran Efek',
        description: 'Membuat laporan kegiatan pemasaran dan mengevaluasi efektivitas akuisisi nasabah.'
      }
    ],
    persyaratanPeserta: [
      'Minimal SMU/sederajat + pengalaman industri jasa keuangan ≥2 tahun + pelatihan Jenjang 4 PPPE Pemasaran; atau',
      'Minimal D2/sederajat + pelatihan Jenjang 4 PPPE Pemasaran; atau',
      'Pengalaman sebagai staf/officer industri jasa keuangan ≥3 tahun; atau',
      'Memiliki sertifikasi BNSP pasar modal (Jenjang 3/4) + pelatihan Jenjang 4 PPPE Pemasaran.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (10 Jam)',
      inHouseClass: 'Kelas In House (10 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan 12 Unit Kompetensi WPPE Pemasaran',
      'Tahap 2: Pembekalan Modul Pemasaran Efek & KYC Nasabah (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Portofolio Sales & Simulasi Roleplay Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Materi terfokus pada teknik akuisisi dan penjualan efek yang sesuai regulasi',
      'Bimbingan pengisian formulir APL-01 & APL-02',
      'Latihan soal ujian CAT terbaru'
    ]
  },

  // 5. PENJUALAN EFEK REKSA DANA (WAPERD)
  {
    id: 'waperd',
    code: 'WAPERD',
    name: 'Penjualan Efek Reksa Dana (WAPERD)',
    titleEn: 'Mutual Fund Selling Agent Representative',
    qualificationLevel: 'Jenjang Kualifikasi 4',
    subfield: 'Subbidang Penjualan Efek Reksa Dana',
    learningHours: '6 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'mutual-funds',
    stage: 'stage1',
    stageName: 'Wealth Management & Fintech',
    badge: 'Fintech & Wealth Distribution',
    isPopular: true,
    shortDesc: 'Mengembangkan kompetensi profesional dalam penjualan reksa dana secara tepat, terukur, dan sesuai regulasi guna memperluas distribusi investasi.',
    fullDesc: 'Program ini bertujuan mengembangkan kompetensi profesional dalam penjualan reksa dana secara tepat, terukur, dan sesuai regulasi, sehingga mampu memperluas distribusi produk investasi. Program Pelatihan Berbasis Kompetensi Pasar Modal bagi WAPERD Jenjang Kualifikasi 4 Bidang Pasar Modal Subbidang Penjualan Efek Reksa Dana berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Relationship Manager, Priority Banking Officer, dan Staff Wealth Management Bank APERD',
      'Customer Service, Sales, dan Partnership platform FinTech Agen Penjual Reksa Dana',
      'Financial Planner & Konsultan Perencana Keuangan Independen',
      'Staf Perusahaan Sekuritas dan Manajer Investasi'
    ],
    careerProspects: [
      'Priority Banking Relationship Manager & Wealth Advisor',
      'Mutual Fund Specialist di FinTech / Bank',
      'Sales Distribution Lead Produk Reksa Dana',
      'Certified Wealth Planner'
    ],
    duration: '6 Jam Pembelajaran (Public / In House: 6 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Simulasi Transaksi Reksa Dana',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 1.650.000',
    earlyBird: 'Rp 1.350.000',
    pricing: {
      publicClass: {
        price: 'Rp 1.650.000',
        earlyBird: 'Rp 1.350.000',
        description: 'Kelas Publik (6 Jam) + Bank Soal CAT Reksa Dana'
      },
      privateClass: {
        price: 'Rp 3.200.000',
        earlyBird: 'Rp 2.750.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 1.100.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 2.750.000',
        earlyBird: 'Rp 2.450.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 4.300.000',
        earlyBird: 'Rp 3.850.000'
      }
    },
    unitKompetensi: [
      'UK Menyusun Kegiatan Pemasaran Produk Investasi Dasar dan Produk Investasi Dasar Syariah',
      'UK Melakukan Promosi Produk Investasi dan Produk Investasi Syariah',
      'UK Memasarkan Produk Investasi Dasar dan Produk Investasi Dasar Syariah',
      'UK Menyusun Laporan Kegiatan Pemasaran Produk Investasi dan Produk Investasi Syariah',
      'UK Melaksanakan Evaluasi Pemasaran Produk Investasi dan Produk Investasi Syariah',
      'UK Memproses Pembukaan Rekening dan Transaksi Nasabah'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Pemasaran & Promosi Produk Investasi Reksa Dana',
        description: 'Menyusun strategi dan mempromosikan produk reksa dana konvensional dan syariah.'
      },
      {
        code: 'UK-02',
        title: 'Pembukaan Rekening & Pemrosesan Transaksi Nasabah',
        description: 'Memproses pembukaan rekening reksa dana, subscription, redemption, dan switching.'
      },
      {
        code: 'UK-03',
        title: 'Pelaporan & Evaluasi Distribusi Reksa Dana',
        description: 'Menyusun laporan kegiatan pemasaran serta mengevaluasi capaian distribusi reksa dana.'
      }
    ],
    persyaratanPeserta: [
      'Minimal pendidikan formal Sekolah Menengah Umum (SMU)/Sederajat dan berpengalaman kerja pada Industri Jasa Keuangan minimal 2 tahun dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 4 Bidang Pasar Modal Subbidang Penjualan Efek Reksa Dana; atau',
      'Pendidikan formal minimal D2/Sederajat dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 4 Bidang Pasar Modal Subbidang Penjualan Efek Reksa Dana; atau',
      'Berpengalaman sebagai pegawai industri jasa keuangan yang menduduki jabatan sebagai staf/officer sekurang-kurangnya 3 (tiga) tahun; atau',
      'Memiliki Sertifikat Kompetensi Kerja (BNSP) untuk: Jenjang Kualifikasi 4 Bidang Pasar Modal Subbidang Perantara Pedagang Efek Pemasaran atau Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Perantara Pedagang Efek.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (6 Jam)',
      inHouseClass: 'Kelas In House (6 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan 6 Unit Kompetensi WAPERD',
      'Tahap 2: Pembekalan Modul Reksa Dana, NAB & Regulasi APERD (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Portofolio Penjualan & Simulasi Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Materi sangat praktis dan mudah dipahami tenaga pemasar bank / fintech',
      'Latihan soal ujian CAT LSP IKEPAMI bergaransi bimbingan ulang',
      'Persiapan dokumen uji kompetensi terarah'
    ]
  },

  // 6. DESAIN PRODUK PENGELOLAAN INVESTASI
  {
    id: 'desain-produk',
    code: 'DPPI',
    name: 'Desain Produk Pengelolaan Investasi',
    titleEn: 'Investment Product Design & Structuring Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Desain Produk Pengelolaan Investasi',
    learningHours: '8 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'investment-mgmt',
    stage: 'stage1',
    stageName: 'Product Structuring & Innovation',
    badge: 'Spesialis Inovasi Produk',
    shortDesc: 'Pengembangan kemampuan merancang produk investasi yang inovatif dan sesuai kebutuhan pasar dengan mempertimbangkan risiko, imbal hasil, dan regulasi.',
    fullDesc: 'Program ini berfokus pada pengembangan kemampuan dalam merancang produk investasi yang inovatif dan sesuai dengan kebutuhan pasar, serta mempertimbangkan aspek risiko, imbal hasil, dan regulasi. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Desain Produk Pengelolaan Investasi Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Product Development Officer di Manajer Investasi, Bank Kustodian, dan Sekuritas',
      'Investment Structurer, Financial Engineer, dan Wealth Management Product Lead',
      'Staf R&D Produk Pasar Modal dan FinTech Investasi'
    ],
    careerProspects: [
      'Head of Product Development Manajer Investasi',
      'Structured Product Specialist & Innovator',
      'Investment Solutions Lead',
      'ESG & Alternative Investment Designer'
    ],
    duration: '8 Jam Pembelajaran (Public / In House: 8 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Workshop Perancangan Produk',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 2.850.000',
    earlyBird: 'Rp 2.350.000',
    pricing: {
      publicClass: {
        price: 'Rp 2.850.000',
        earlyBird: 'Rp 2.350.000',
        description: 'Kelas Publik (8 Jam) + Framework Desain Produk'
      },
      privateClass: {
        price: 'Rp 5.200.000',
        earlyBird: 'Rp 4.500.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 1.750.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 4.600.000',
        earlyBird: 'Rp 4.100.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 6.950.000',
        earlyBird: 'Rp 6.250.000'
      }
    },
    unitKompetensi: [
      'UK Menganalisis Kebutuhan dan Kondisi Pasar',
      'UK Merancang Produk Pengelolaan Investasi',
      'UK Merancang Produk Pengelolaan Investasi Alternatif',
      'UK Merancang Produk Pengelolaan Investasi Sesuai dengan Prinsip Syariah',
      'UK Mendaftarkan Produk Pengelolaan Investasi'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Analisis Kebutuhan & Kondisi Pasar',
        description: 'Menganalisis permintaan investor, tren pasar, dan celah produk investasi di industri.'
      },
      {
        code: 'UK-02',
        title: 'Perancangan Produk Investasi (Konvensional, Alternatif, Syariah)',
        description: 'Merancang struktur produk reksa dana, KPD, alternatif, dan produk berbasis syariah.'
      },
      {
        code: 'UK-03',
        title: 'Pendaftaran & Perizinan Produk',
        description: 'Prosedur legal dan dokumen pendaftaran produk pengelolaan investasi ke otoritas terkait.'
      }
    ],
    persyaratanPeserta: [
      'Minimal pendidikan formal Sekolah Menengah Umum (SMU)/sederajat dan berpengalaman kerja pada Industri Jasa Keuangan minimal 3 (tiga) tahun dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Desain Produk Pengelolaan Investasi; atau',
      'Minimal pendidikan formal D3/sederajat dan memiliki sertifikat pelatihan berbasis kompetensi Desain Produk Pengelolaan Investasi; atau',
      'Berpengalaman sebagai pegawai Industri Jasa Keuangan yang menduduki jabatan sebagai staf sekurang-kurangnya 3 (tiga) tahun.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (8 Jam)',
      inHouseClass: 'Kelas In House (8 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Desain Produk',
      'Tahap 2: Pembekalan Metodologi Perancangan Produk & Regulasi (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Dokumen Proposal Produk & Simulasi Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Framework perancangan produk investasi terstruktur dan aplikatif',
      'Studi kasus produk Reksa Dana Tematik, ETF, dan Produk Terstruktur',
      'Bimbingan kurasi dokumen portofolio APL-01 & APL-02'
    ]
  },

  // 7. ANALISIS EFEK EKUITAS
  {
    id: 'analisis-ekuitas',
    code: 'AEE',
    name: 'Analisis Efek Ekuitas',
    titleEn: 'Equity Research & Valuation Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Analisis Efek Ekuitas',
    learningHours: '14 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'analysis',
    stage: 'stage1',
    stageName: 'Equity Research & Valuation',
    badge: 'Equity Analyst Riset',
    shortDesc: 'Mengembangkan kompetensi analisis fundamental terhadap saham, penilaian kinerja perusahaan, valuasi, serta prospek investasi di pasar modal.',
    fullDesc: 'Program ini dirancang untuk mengembangkan kompetensi dalam melakukan analisis fundamental terhadap saham, termasuk penilaian kinerja perusahaan, valuasi, serta prospek investasi di pasar modal. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Analisis Efek Ekuitas Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Research Analyst, Equity Research Associate di Perusahaan Sekuritas',
      'Investment Analyst di Manajer Investasi dan Dana Pensiun',
      'Valuator & Konsultan Corporate Valuation',
      'Trader dan Investor Fundamental yang ingin memiliki lisensi kompetensi resmi'
    ],
    careerProspects: [
      'Senior Equity Research Analyst',
      'Head of Research & Strategy Sekuritas',
      'Investment Banking Financial Modeler',
      'Independent Valuation Consultant'
    ],
    duration: '14 Jam Pembelajaran (Public / In House: 14 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Financial Modeling Excel',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 3.500.000',
    earlyBird: 'Rp 2.950.000',
    pricing: {
      publicClass: {
        price: 'Rp 3.500.000',
        earlyBird: 'Rp 2.950.000',
        description: 'Kelas Publik (14 Jam) + Template Pemodelan Keuangan DCF'
      },
      privateClass: {
        price: 'Rp 6.500.000',
        earlyBird: 'Rp 5.700.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Fleksibel bersama Senior Analyst'
      },
      examFee: {
        price: 'Rp 2.000.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 5.500.000',
        earlyBird: 'Rp 4.950.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 8.500.000',
        earlyBird: 'Rp 7.700.000'
      }
    },
    unitKompetensi: [
      'UK Mengumpulkan Data dan Informasi yang Diperlukan dalam Analisis Efek',
      'UK Menganalisis Makro Ekonomi',
      'UK Menganalisis Sektor dan Industri',
      'UK Menganalisis Kondisi Perusahaan',
      'UK Mengelola Laporan Riset',
      'UK Mengkonstruksi Grafik Harga Efek',
      'UK Menganalisis Kekuatan dan Volatilitas Pergerakan Harga Efek',
      'UK Menganalisis Kecenderungan Pergerakan Harga Efek',
      'UK Menganalisis Indikator Teknikal',
      'UK Melakukan Valuasi Efek Berbasis Ekuitas',
      'UK Melakukan Pemodelan Keuangan',
      'UK Merekomendasikan Efek Bersifat Ekuitas kepada Nasabah Perantara Pedagang Efek'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Analisis Makroekonomi, Sektor & Kondisi Perusahaan',
        description: 'Top-down analysis dari kondisi global/nasional, dinamika industri, hingga laporan keuangan emiten.'
      },
      {
        code: 'UK-02',
        title: 'Pemodelan Keuangan & Valuasi Efek Berbasis Ekuitas',
        description: 'Financial forecasting, DCF modeling, Relative Valuation (PER, PBV, EV/EBITDA).'
      },
      {
        code: 'UK-03',
        title: 'Penyusunan Laporan Riset & Rekomendasi Efek',
        description: 'Mengelola laporan riset emiten dan merumuskan rekomendasi Buy/Hold/Sell yang berdasar.'
      }
    ],
    persyaratanPeserta: [
      'SMU/sederajat, pengalaman ≥3 tahun di Industri Jasa Keuangan, dan sertifikat pelatihan Jenjang 5 Analisis Efek; atau',
      'D3/sederajat dengan sertifikat pelatihan Jenjang 5 Analisis Efek; atau',
      'Pegawai Industri Jasa Keuangan (minimal staf) dengan pengalaman ≥3 tahun; atau',
      'Memiliki sertifikat kompetensi Jenjang 3–5 pada subbidang Analisis Efek/Analisis Teknikal (termasuk Efek Utang/Sukuk) serta sertifikat pelatihan Jenjang 5 Analisis Efek.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (14 Jam)',
      inHouseClass: 'Kelas In House (14 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan 12 Unit Kompetensi Analisis Ekuitas',
      'Tahap 2: Pembekalan Valuasi, Financial Modeling & Riset Saham (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Kurasi Riset Portofolio Emiten & Simulasi Wawancara',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Financial model spreadsheet profesional berstandar industri',
      'Studi kasus laporan keuangan emiten bursa terkini',
      'Garansi bimbingan portofolio riset sampai kompeten'
    ]
  },

  // 8. ANALISIS TEKNIKAL
  {
    id: 'analisis-teknikal',
    code: 'AT',
    name: 'Analisis Teknikal',
    titleEn: 'Technical Analysis Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Analisis Teknikal',
    learningHours: '12 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'analysis',
    stage: 'stage1',
    stageName: 'Technical & Market Timing Analysis',
    badge: 'Chartist & Market Timing',
    shortDesc: 'Membekali peserta kemampuan menganalisis pergerakan harga dan tren pasar menggunakan indikator teknikal untuk keputusan investasi jangka pendek hingga menengah.',
    fullDesc: 'Program ini membekali peserta dengan kemampuan menganalisis pergerakan harga dan tren pasar menggunakan berbagai indikator teknikal sebagai dasar pengambilan keputusan investasi jangka pendek hingga menengah. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Analisis Teknikal Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Technical Analyst di Perusahaan Sekuritas dan Media Keuangan',
      'Trader Aktif, Dealing Room Trader, dan Prop Trader',
      'Financial Educator & Chartist Pasar Modal',
      'Profesional Keuangan yang membutuhkan ketajaman timing entry dan exit'
    ],
    careerProspects: [
      'Technical Analyst di Perusahaan Sekuritas',
      'Proprietary Trader & Market Maker',
      'Head of Trading & Technical Strategy',
      'Konsultan Analisis Pasar Keuangan'
    ],
    duration: '12 Jam Pembelajaran (Public / In House: 12 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Live Charting Tools',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 2.950.000',
    earlyBird: 'Rp 2.450.000',
    pricing: {
      publicClass: {
        price: 'Rp 2.950.000',
        earlyBird: 'Rp 2.450.000',
        description: 'Kelas Publik (12 Jam) + Live Charting Practice'
      },
      privateClass: {
        price: 'Rp 5.500.000',
        earlyBird: 'Rp 4.750.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 1.850.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 4.800.000',
        earlyBird: 'Rp 4.300.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 7.350.000',
        earlyBird: 'Rp 6.600.000'
      }
    },
    unitKompetensi: [
      'UK Mengumpulkan Data dan Informasi yang diperlukan dalam Analisis Efek',
      'UK Menganalisis Sektor dan Industri',
      'UK Menganalisis Kondisi Perusahaan',
      'UK Mengelola Laporan Riset',
      'UK Mengkonstruksi Grafik Harga Efek',
      'UK Menganalisis Kekuatan dan Volatilitas Pergerakan Harga Efek',
      'UK Menganalisis Kecenderungan Pergerakan Harga Efek',
      'UK Menganalisis Indikator Teknikal',
      'UK Merekomendasikan Efek Bersifat Ekuitas kepada Nasabah Perantara Pedagang Efek'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Konstruksi Grafik & Analisis Tren Pergerakan Harga',
        description: 'Chart construction, support-resistance, trendline, dan pola harga (chart patterns).'
      },
      {
        code: 'UK-02',
        title: 'Analisis Indikator Teknikal & Volatilitas Pasar',
        description: 'Penggunaan indikator momentum, osilator, moving averages, volume spread, dan volatilitas.'
      },
      {
        code: 'UK-03',
        title: 'Laporan Riset Teknikal & Rekomendasi Transaksi',
        description: 'Menyusun analisis teknikal berkala dan menetapkan stop-loss serta target price rasional.'
      }
    ],
    persyaratanPeserta: [
      'Pendidikan SMU/sederajat dengan pengalaman kerja di Industri Jasa Keuangan ≥3 tahun dan sertifikat pelatihan Jenjang 5 Analisis Efek; atau',
      'Pendidikan D3/sederajat dengan sertifikat pelatihan Jenjang 5 Analisis Efek; atau',
      'Pegawai Industri Jasa Keuangan (minimal staf) dengan pengalaman ≥3 tahun; atau',
      'Memiliki sertifikat kompetensi Jenjang 3–5 di subbidang Analisis Efek/Analisis Teknikal (termasuk Efek Utang/Sukuk) serta sertifikat pelatihan Jenjang 5 Analisis Efek.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (12 Jam)',
      inHouseClass: 'Kelas In House (12 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Analisis Teknikal',
      'Tahap 2: Pembekalan Charting, Indikator & Manajemen Risiko Trading (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Portofolio Chart Analysis & Simulasi Roleplay Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Latihan riil dengan data harga terkini bursa',
      'Penguasaan strategi risk-to-reward ratio dan money management',
      'Simulasi wawancara dan pembuktian portofolio kompeten'
    ]
  },

  // 9. ANALISIS EFEK BERSIFAT UTANG DAN/ATAU SUKUK
  {
    id: 'analisis-utang-sukuk',
    code: 'ABU-S',
    name: 'Analisis Efek Bersifat Utang dan/atau Sukuk',
    titleEn: 'Fixed Income & Sukuk Analysis Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Analisis Efek Bersifat Utang dan/atau Sukuk',
    learningHours: '12 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'analysis',
    stage: 'stage1',
    stageName: 'Fixed Income & Sukuk',
    badge: 'Fixed Income Specialist',
    shortDesc: 'Mengembangkan kompetensi analisis obligasi korporasi/negara dan sukuk, penilaian kinerja, valuasi yield, serta prospek investasi pendapatan tetap.',
    fullDesc: 'Program ini dirancang untuk mengembangkan kompetensi dalam melakukan analisis terhadap obligasi, termasuk penilaian kinerja perusahaan, valuasi, serta prospek investasi di pasar modal. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Analisis Efek Bersifat Utang dan/atau Sukuk disusun berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Fixed Income Analyst & Dealer di Sekuritas, Bank, dan Asuransi',
      'Pengelola Portofolio Surat Utang Negara (SUN) & Obligasi Korporasi',
      'Spesialis Sukuk & Pembiayaan Syariah Pasar Modal',
      'Credit Risk Analyst & Rating Agency Specialist'
    ],
    careerProspects: [
      'Head of Fixed Income Research',
      'Bond & Sukuk Portfolio Manager',
      'Fixed Income Trader / Dealer Treasury',
      'Credit & Debt Capital Market Specialist'
    ],
    duration: '12 Jam Pembelajaran (Public / In House: 12 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Yield Curve & Bond Pricing Calculator',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 3.300.000',
    earlyBird: 'Rp 2.800.000',
    pricing: {
      publicClass: {
        price: 'Rp 3.300.000',
        earlyBird: 'Rp 2.800.000',
        description: 'Kelas Publik (12 Jam) + Kalkulator Bond Yield & Sukuk'
      },
      privateClass: {
        price: 'Rp 6.000.000',
        earlyBird: 'Rp 5.250.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 1.950.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 5.250.000',
        earlyBird: 'Rp 4.750.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 7.950.000',
        earlyBird: 'Rp 7.200.000'
      }
    },
    unitKompetensi: [
      'UK Menganalisis Sektor dan Industri',
      'UK Menganalisis Kondisi Perusahaan',
      'UK Menganalisis Makro Ekonomi',
      'UK Mengumpulkan Data dan Informasi yang Diperlukan dalam Analisis Efek',
      'UK Mengelola Laporan Riset',
      'UK Mengkonstruksi Grafik Harga Efek',
      'UK Menganalisis Kecenderungan Pergerakan Harga Efek',
      'UK Menganalisis Kekuatan dan Volatilitas Pergerakan Harga Efek',
      'UK Menganalisis Indikator Teknikal',
      'UK Melakukan Valuasi Efek Pendapatan Tetap',
      'UK Merekomendasikan Efek Bersifat Utang dan/atau Sukuk kepada Nasabah Perantara Pedagang Efek'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Analisis Makro, Sektor & Risiko Kredit Perusahaan',
        description: 'Evaluasi suku bunga BI, inflasi, kurva imbal hasil (yield curve), dan credit rating emiten obligasi.'
      },
      {
        code: 'UK-02',
        title: 'Valuasi Efek Pendapatan Tetap & Sukuk',
        description: 'Pricing obligasi, perhitungan YTM, Duration, Convexity, dan akad-akad sukuk (Ijarah, Mudharabah).'
      },
      {
        code: 'UK-03',
        title: 'Laporan Riset & Rekomendasi Efek Utang',
        description: 'Penyusunan rekomendasi investasi obligasi/sukuk bagi nasabah institusional.'
      }
    ],
    persyaratanPeserta: [
      'SMU/sederajat, pengalaman ≥3 tahun di Industri Jasa Keuangan, dan sertifikat pelatihan Jenjang 5 Analisis Efek; atau',
      'D3/sederajat dengan sertifikat pelatihan Jenjang 5 Analisis Efek; atau',
      'Pegawai Industri Jasa Keuangan (minimal staf) dengan pengalaman ≥3 tahun; atau',
      'Memiliki sertifikat kompetensi Jenjang 3–5 pada subbidang Analisis Efek/Analisis Teknikal (termasuk Efek Utang/Sukuk) serta sertifikat pelatihan Jenjang 5 Analisis Efek.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (12 Jam)',
      inHouseClass: 'Kelas In House (12 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Efek Utang & Sukuk',
      'Tahap 2: Pembekalan Modul Valuasi Obligasi, Sukuk & Analisis Kredit (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Portofolio Riset Obligasi & Simulasi Wawancara',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Template spreadsheet pricing obligasi & kalkulasi durasi',
      'Pemahaman mendalam instrumen SUN, PBS, dan Obligasi Korporasi',
      'Pendampingan penyusunan portofolio APL-01 & APL-02 sampai kompeten'
    ]
  },

  // 10. PENASIHAT INVESTASI
  {
    id: 'penasihat-investasi',
    code: 'PI',
    name: 'Penasihat Investasi',
    titleEn: 'Investment Advisory Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Penasihat Investasi',
    learningHours: '10 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'investment-mgmt',
    stage: 'stage1',
    stageName: 'Investment Advisory & Wealth Planning',
    badge: 'Penasihat Berlisensi',
    shortDesc: 'Mempersiapkan peserta untuk memberikan rekomendasi investasi sesuai profil risiko dan tujuan nasabah dengan mengedepankan kepatuhan dan kehati-hatian.',
    fullDesc: 'Program ini mempersiapkan peserta untuk memberikan rekomendasi investasi yang sesuai dengan profil risiko dan tujuan keuangan nasabah, dengan mengedepankan prinsip kehati-hatian dan kepatuhan terhadap regulasi. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penasihat Investasi Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Konsultan Finansial, Wealth Planner, dan Penasihat Investasi Independen',
      'Private Banker & Relationship Manager High Net Worth Individual (HNWI)',
      'Financial Advisor dan Edukator Literasi Keuangan Pasar Modal'
    ],
    careerProspects: [
      'Licensed Investment Advisor (Penasihat Investasi Berizin)',
      'Family Office Wealth Consultant',
      'Head of Private Wealth Advisory',
      'Director of Financial Advisory Firm'
    ],
    duration: '10 Jam Pembelajaran (Public / In House: 10 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Studi Kasus Profiling Nasabah',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 2.950.000',
    earlyBird: 'Rp 2.450.000',
    pricing: {
      publicClass: {
        price: 'Rp 2.950.000',
        earlyBird: 'Rp 2.450.000',
        description: 'Kelas Publik (10 Jam) + Case Study Advisory'
      },
      privateClass: {
        price: 'Rp 5.500.000',
        earlyBird: 'Rp 4.750.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 1.850.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 4.800.000',
        earlyBird: 'Rp 4.300.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 7.350.000',
        earlyBird: 'Rp 6.600.000'
      }
    },
    unitKompetensi: [
      'UK Melakukan Analisis Peluang dan Risiko Investasi',
      'UK Melakukan Analisis Peluang dan Risiko Investasi sesuai dengan Prinsip Syariah',
      'UK Melakukan Analisis Peluang dan Risiko Produk Investasi Alternatif',
      'UK Menganalisis Produk Pengelolaan Investasi Berkelanjutan',
      'UK Menyusun Strategi Pengelolaan Investasi',
      'UK Melakukan Monitoring Kinerja Portofolio',
      'UK Memberikan Jasa Penasihat Investasi kepada Nasabah',
      'UK Mengelola Literasi dan Edukasi Keuangan'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Analisis Peluang, Risiko & Investasi Berkelanjutan (ESG)',
        description: 'Menganalisis instrumen konvensional, syariah, alternatif, dan prinsip investasi berkelanjutan.'
      },
      {
        code: 'UK-02',
        title: 'Penyusunan Strategi & Monitoring Portofolio Nasabah',
        description: 'Merancang strategi investasi sesuai profil risiko nasabah dan pemantauan kinerja berkala.'
      },
      {
        code: 'UK-03',
        title: 'Pemberian Jasa Advisory & Edukasi Literasi Finansial',
        description: 'Etika konsultasi investasi, dokumentasi advis, dan program edukasi literasi keuangan.'
      }
    ],
    persyaratanPeserta: [
      'Minimal pendidikan formal Sekolah Menengah Umum (SMU)/sederajat dan berpengalaman kerja pada Industri Jasa Keuangan minimal 3 (tiga) tahun dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penasihat Investasi ; atau',
      'Minimal pendidikan formal D3/sederajat dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penasihat Investasi; atau',
      'Berpengalaman sebagai pegawai Industri Jasa Keuangan yang menduduki jabatan sebagai staf sekurang-kurangnya 3 (tiga) tahun; atau',
      'Memiliki sertifikat kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Pengelolaan Investasi dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penasihat Investasi.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (10 Jam)',
      inHouseClass: 'Kelas In House (10 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Penasihat Investasi',
      'Tahap 2: Pembekalan Modul Financial Advisory, ESG & Regulasi (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Dokumen Rekomendasi Portofolio & Simulasi Konsultasi',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Template dokumen advisory dan profiling profil risiko berstandar regulasi',
      'Materi terintegrasi investasi ESG dan instrumen alternatif',
      'Bimbingan penuh kurasi berkas portofolio APL-01 & APL-02'
    ]
  },

  // 11. KONSULTASI KEUANGAN PERUSAHAAN
  {
    id: 'konsultasi-keuangan',
    code: 'KKP',
    name: 'Konsultasi Keuangan Perusahaan',
    titleEn: 'Corporate Financial Advisory Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Konsultasi Keuangan Perusahaan',
    learningHours: '12 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'underwriting',
    stage: 'stage1',
    stageName: 'Corporate Finance Advisory & M&A',
    badge: 'Restrukturisasi & M&A',
    shortDesc: 'Membekali peserta kompetensi menganalisis kondisi keuangan perusahaan, identifikasi masalah, dan merumuskan solusi restrukturisasi & aksi korporasi.',
    fullDesc: 'Program ini dirancang untuk membekali peserta dengan kompetensi dalam menganalisis kondisi keuangan perusahaan, mengidentifikasi permasalahan, serta memberikan rekomendasi solusi keuangan yang efektif dan berorientasi pada peningkatan kinerja bisnis. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Konsultasi Keuangan Perusahaan disusun berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Konsultan Keuangan Perusahaan, Auditor, dan Business Valuator',
      'Corporate Finance Specialist di Korporasi dan Konglomerasi',
      'Practitioner M&A (Merger & Akuisisi) dan Restrukturisasi Utang',
      'Advisory Team di Kantor Akuntan Publik dan Firma Hukum Bisnis'
    ],
    careerProspects: [
      'Corporate Finance Advisory Partner / Director',
      'Head of M&A and Corporate Restructuring',
      'Chief Financial Officer (CFO) Strategic Advisor',
      'Independent Corporate Financial Consultant'
    ],
    duration: '12 Jam Pembelajaran (Public / In House: 12 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Bedah Kasus Restrukturisasi Korporasi',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 3.500.000',
    earlyBird: 'Rp 2.950.000',
    pricing: {
      publicClass: {
        price: 'Rp 3.500.000',
        earlyBird: 'Rp 2.950.000',
        description: 'Kelas Publik (12 Jam) + Studi Kasus Aksi Korporasi'
      },
      privateClass: {
        price: 'Rp 6.500.000',
        earlyBird: 'Rp 5.700.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 2.000.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 5.500.000',
        earlyBird: 'Rp 4.950.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 8.500.000',
        earlyBird: 'Rp 7.700.000'
      }
    },
    unitKompetensi: [
      'UK Melaksanakan Kegiatan Penawaran Jasa Konsultasi Keuangan Perusahaan dan Aksi Korporasi Calon Nasabah',
      'UK Melakukan Kegiatan Koordinasi Persiapan Penawaran Umum Efek',
      'UK Melakukan Evaluasi Fundamental Perusahaan',
      'UK Melakukan Valuasi Efek Berbasis Ekuitas',
      'UK Melakukan Valuasi Efek Berbasis Pendapatan Tetap',
      'UK Menyusun Usulan Restrukturisasi Keuangan Perusahaan dan/atau Aksi Korporasi Nasabah',
      'UK Melakukan Kegiatan Restrukturisasi Keuangan Perusahaan dan/atau Aksi Korporasi Nasabah'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Penawaran Jasa Konsultasi & Koordinasi Persiapan Penawaran Efek',
        description: 'Pitching jasa konsultasi keuangan dan koordinasi lintas pihak dalam rencana aksi korporasi.'
      },
      {
        code: 'UK-02',
        title: 'Evaluasi Fundamental & Valuasi Multi-Instrumen',
        description: 'Diagnostik kesehatan keuangan, valuasi berbasis ekuitas dan efek utang perusahaan.'
      },
      {
        code: 'UK-03',
        title: 'Perumusan & Eksekusi Restrukturisasi Keuangan Korporasi',
        description: 'Menyusun skema restrukturisasi utang, rights issue, merger, spin-off, dan akuisisi.'
      }
    ],
    persyaratanPeserta: [
      'SMU/sederajat, pengalaman ≥3 tahun di Industri Jasa Keuangan, dan sertifikat pelatihan Jenjang 5 Desain Produk Pengelolaan Investasi; atau',
      'Minimal D3/sederajat dan sertifikat pelatihan Jenjang 5 Konsultasi Keuangan Perusahaan; atau',
      'Pegawai Industri Jasa Keuangan yang menduduki jabatan sebagai manajer sekurang-kurangnya 2 tahun; atau',
      'Memiliki sertifikat kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Perantara Pedagang Efek atau Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Penjaminan Emisi Efek dan fotokopi pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Konsultasi Keuangan Perusahaan.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (12 Jam)',
      inHouseClass: 'Kelas In House (12 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Konsultasi Keuangan',
      'Tahap 2: Pembekalan Valuasi Korporasi, M&A & Restrukturisasi (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Dokumen Proposal Restrukturisasi & Simulasi Wawancara',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Studi kasus nyata restrukturisasi utang dan aksi korporasi emiten BEI',
      'Template proposal advisory & financial health checkup',
      'Garansi bimbingan portofolio sampai kompeten'
    ]
  },

  // 12. KEPATUHAN PENYEDIA JASA KEUANGAN PASAR MODAL
  {
    id: 'kepatuhan-pasar-modal',
    code: 'KPJK',
    name: 'Kepatuhan Penyedia Jasa Keuangan Pasar Modal',
    titleEn: 'Capital Market Compliance Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 6',
    subfield: 'Subbidang Kepatuhan Penyedia Jasa Keuangan Pasar Modal',
    learningHours: '8 Jam Pembelajaran',
    legalBasis: 'Kerangka Kualifikasi Nasional Indonesia Bidang Kepatuhan nomor KEP-2/D.01/2023',
    category: 'risk-compliance',
    stage: 'stage1',
    stageName: 'Compliance & Regulatory Governance',
    badge: 'Jenjang 6 Manajerial',
    shortDesc: 'Memperkuat kompetensi dalam memastikan kepatuhan terhadap peraturan perundang-undangan dan komitmen kepada otoritas pengawas di sektor pasar modal.',
    fullDesc: 'Program ini bertujuan untuk memperkuat kompetensi dalam memastikan kepatuhan terhadap peraturan perundang-undangan di sektor pasar modal. Program Pelatihan Berbasis Kompetensi Pasar Modal Jenjang Kualifikasi 6 Bidang Pasar Modal Subbidang Kepatuhan Penyedia Jasa Keuangan Pasar Modal Berdasarkan Kerangka Kualifikasi Nasional Indonesia Bidang Kepatuhan nomor KEP-2/D.01/2023.',
    skkniStandard: 'KKNI Bidang Kepatuhan KEP-2/D.01/2023',
    targetAudience: [
      'Compliance Director, Compliance Officer, dan Tim Kepatuhan Sekuritas / Manajer Investasi',
      'Auditor Internal, Head of Legal, dan Regulatory Affairs Officer',
      'Pegawai Industri Jasa Keuangan yang bertugas melakukan koordinasi dengan regulator',
      'Manajer Kepatuhan yang membawahi implementasi fungsi GCG'
    ],
    careerProspects: [
      'Chief Compliance Officer (CCO) di Sektor Pasar Modal',
      'Head of Regulatory Compliance & Anti-Money Laundering',
      'Director of Legal & Compliance',
      'Senior Compliance Consultant'
    ],
    duration: '8 Jam Pembelajaran (Public / In House: 8 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Audit Compliance Matrix',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 3.500.000',
    earlyBird: 'Rp 2.950.000',
    pricing: {
      publicClass: {
        price: 'Rp 3.500.000',
        earlyBird: 'Rp 2.950.000',
        description: 'Kelas Publik (8 Jam) + Compliance Risk Register Template'
      },
      privateClass: {
        price: 'Rp 6.500.000',
        earlyBird: 'Rp 5.700.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 2.200.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 5.700.000',
        earlyBird: 'Rp 5.150.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 8.700.000',
        earlyBird: 'Rp 7.900.000'
      }
    },
    unitKompetensi: [
      'UK Menyusun Strategi dan Rencana Kerja yang Mendukung Implementasi Fungsi Kepatuhan',
      'UK Menyusun Program Pengembangan Kapabilitas Sumber Daya Manusia dalam Mendukung Penerapan Fungsi Kepatuhan',
      'UK Memastikan Kepatuhan Terhadap Ketentuan Peraturan Perundang-Undangan dan Komitmen Penyedia Jasa Keuangan Pasar Modal Kepada Otoritas Pengawas',
      'UK Mengelola Risiko Kepatuhan Penyedia Jasa Keuangan Pasar Modal',
      'UK Memberikan Advis dan/atau Opini Kepatuhan',
      'UK Melaksanakan Koordinasi dengan Regulator dan Pihak Eksternal Lainnya'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Strategi, Rencana Kerja & Pengembangan SDM Kepatuhan',
        description: 'Menyusun roadmap kerja kepatuhan institusi dan program pelatihan kepatuhan bagi seluruh pegawai.'
      },
      {
        code: 'UK-02',
        title: 'Pemenuhan Regulasi, Komitmen Pengawas & Manajemen Risiko Kepatuhan',
        description: 'Audit kepatuhan, pengelolaan compliance risk register, dan mitigasi pelanggaran peraturan pasar modal.'
      },
      {
        code: 'UK-03',
        title: 'Pemberian Opini Kepatuhan & Koordinasi Regulator',
        description: 'Menyusun legal/compliance opinion dan menjadi liaison resmi institusi dengan regulator dan otoritas pengawas.'
      }
    ],
    persyaratanPeserta: [
      'Minimal pendidikan formal Sekolah Menengah Umum (SMU)/sederajat dan berpengalaman kerja pada Industri Jasa Keuangan minimal 3 (tiga) tahun dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 6 Bidang Kepatuhan Subbidang Penyedia Jasa Keuangan Pasar Modal; atau',
      'Minimal pendidikan formal S1/sederajat dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 6 Bidang Kepatuhan Subbidang Penyedia Jasa Keuangan Pasar Modal; atau',
      'Berpengalaman sebagai pegawai Industri Jasa Keuangan yang menduduki jabatan sebagai manajer sekurang-kurangnya 2 (dua) tahun; atau',
      'Memiliki sertifikat kompetensi Jenjang Kualifikasi 5 Bidang Kepatuhan Subbidang Penyedia Jasa Keuangan Pasar Modal dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 6 Bidang Kepatuhan Subbidang Penyedia Jasa Keuangan Pasar Modal.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (8 Jam)',
      inHouseClass: 'Kelas In House (8 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Orientasi Jenjang Kualifikasi 6 Kepatuhan',
      'Tahap 2: Pembekalan Modul Tata Kelola Kepatuhan, Risiko & Regulasi (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Dokumen Portofolio Kebijakan & Simulasi Asesor',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Jenjang Kualifikasi 6 tingkat manajerial bergengsi',
      'Template compliance review matrix & regulatory reporting checklist',
      'Bimbingan penuh kurasi berkas portofolio APL-01 & APL-02 sampai kompeten'
    ]
  },

  // 13. MANAJEMEN RISIKO PASAR MODAL
  {
    id: 'manajemen-risiko',
    code: 'MRPM',
    name: 'Manajemen Risiko Pasar Modal',
    titleEn: 'Capital Market Risk Management Specialist',
    qualificationLevel: 'Jenjang Kualifikasi 5',
    subfield: 'Subbidang Manajemen Risiko Pasar Modal',
    learningHours: '8 Jam Pembelajaran',
    legalBasis: 'Surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI Pasar Modal Nomor KEP-11/D.02/2024',
    category: 'risk-compliance',
    stage: 'stage1',
    stageName: 'Enterprise Risk Management',
    badge: 'Enterprise Risk',
    shortDesc: 'Materi Update SKKNI bagi Manajemen Risiko: menyusun rencana kerja, mengukur, mengendalikan, memantau, dan menentukan kebijakan risiko.',
    fullDesc: 'Materi Update Standar Kompetensi Kerja Nasional Indonesia (SKKNI) bagi Manajemen Risiko, Berdasarkan surat Keputusan Kemenaker RI Nomor 20 Tahun 2024 dan KKNI pasar Modal Nomor KEP-11/D.02/2024.',
    skkniStandard: 'SKKNI Pasar Modal No. 20/2024',
    targetAudience: [
      'Risk Management Officer, Risk Analyst, dan Risk Manager di Sekuritas & Manajer Investasi',
      'Anggota Komite Manajemen Risiko & Internal Audit',
      'Treasury Risk Specialist & Market Risk Controller',
      'Profesional Industri Jasa Keuangan yang menangani mitigasi risiko operasional, pasar, dan likuiditas'
    ],
    careerProspects: [
      'Chief Risk Officer (CRO) di Industri Jasa Keuangan',
      'Head of Enterprise Risk Management (ERM)',
      'Market & Credit Risk Manager',
      'Certified Risk Management Consultant'
    ],
    duration: '8 Jam Pembelajaran (Public / In House: 8 Jam, Private: 6 Jam)',
    format: 'Live Interactive Online / Offline Class + Risk Assessment Matrix Model',
    schedule: 'Executive Evening & Weekend Class',
    investment: 'Rp 2.950.000',
    earlyBird: 'Rp 2.450.000',
    pricing: {
      publicClass: {
        price: 'Rp 2.950.000',
        earlyBird: 'Rp 2.450.000',
        description: 'Kelas Publik (8 Jam) + Risk Matrix & Policy Template'
      },
      privateClass: {
        price: 'Rp 5.500.000',
        earlyBird: 'Rp 4.750.000',
        description: 'Kelas Private 1 on 1 (6 Jam) Intensif Fleksibel'
      },
      examFee: {
        price: 'Rp 1.850.000',
        institution: 'LSP IKEPAMI (Lisensi BNSP)',
        note: 'Biaya asesmen resmi terstandar BNSP'
      },
      totalPublicPlusExam: {
        price: 'Rp 4.800.000',
        earlyBird: 'Rp 4.300.000'
      },
      totalPrivatePlusExam: {
        price: 'Rp 7.350.000',
        earlyBird: 'Rp 6.600.000'
      }
    },
    unitKompetensi: [
      'UK Menyusun Rencana Kerja Manajemen Risiko',
      'UK Mengukur Risiko',
      'UK Melakukan Pengendalian Risiko',
      'UK Melakukan Pemantauan Risiko',
      'UK Mengomunikasikan Risiko',
      'UK Menentukan Kebijakan Manajemen Risiko'
    ],
    skkniUnits: [
      {
        code: 'UK-01',
        title: 'Penyusunan Rencana Kerja & Kebijakan Manajemen Risiko',
        description: 'Menyusun kerangka kerja ERM, risk appetite, risk tolerance, dan kebijakan manajemen risiko pasar modal.'
      },
      {
        code: 'UK-02',
        title: 'Pengukuran & Pengendalian Risiko',
        description: 'Kalkulasi Value at Risk (VaR), stress testing, analisis sensitivitas, dan penetapan limit risiko.'
      },
      {
        code: 'UK-03',
        title: 'Pemantauan & Komunikasi Risiko ke Manajemen',
        description: 'Monitoring indikator peringatan dini (KRI), eskalasi risiko, dan pelaporan berkala ke direksi/komite risiko.'
      }
    ],
    persyaratanPeserta: [
      'Minimal pendidikan formal Sekolah Menengah Umum (SMU)/Sederajat dan berpengalaman kerja pada Industri Jasa Keuangan minimal 3 tahun dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Manajemen Risiko; atau',
      'Pendidikan formal minimal D3/Sederajat dan memiliki sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Manajemen Risiko; atau',
      'Berpengalaman sebagai pegawai Industri Jasa Keuangan yang menduduki jabatan sebagai manajer sekurang-kurangnya 2 (dua) tahun; atau',
      'Memiliki Sertifikat Kompetensi Kerja (BNSP) untuk: Jenjang 4 Bidang Pasar Modal Subbidang Manajemen Risiko atau Jenjang Kualifikasi 3 Bidang Pasar Modal Subbidang Manajemen Risiko dan Sertifikat pelatihan berbasis kompetensi Jenjang Kualifikasi 5 Bidang Pasar Modal Subbidang Manajemen Risiko.'
    ],
    metodePelatihan: {
      publicClass: 'Kelas Publik (8 Jam)',
      inHouseClass: 'Kelas In House (8 Jam)',
      privateClass: 'Kelas Private 1 on 1 (6 Jam)',
      delivery: 'Online / Offline *Tambahan biaya Transportasi',
      language: 'Bahasa / English'
    },
    certificationProcess: [
      'Tahap 1: Technical Meeting & Pemetaan Unit Kompetensi Manajemen Risiko',
      'Tahap 2: Pembekalan Metodologi ERM, Pengukuran & Mitigasi Risiko (Public / In House / Private)',
      'Tahap 3: Persiapan Asesmen: Dokumen Risk Register & Simulasi Wawancara',
      'Tahap 4: Uji Kompetensi Resmi di LSP IKEPAMI (Lisensi BNSP)',
      'Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda Emas'
    ],
    benefits: [
      'Metodologi manajemen risiko berbasis standar industri dan regulasi terkini',
      'Template risk register dan dashboard indikator risiko pasar modal',
      'Bimbingan kurasi dokumen portofolio APL-01 & APL-02 sampai kompeten'
    ]
  }
];
