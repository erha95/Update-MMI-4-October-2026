export type Language = 'id' | 'en';

export interface Translations {
  common: {
    language: string;
    indonesian: string;
    english: string;
    waConsultation: string;
    waConsultationDirect: string;
    close: string;
    viewDetails: string;
    freeConsultation: string;
    allPrograms: string;
    popular: string;
    learningHours: string;
    publicClass: string;
    privateClass: string;
    inHouseClass: string;
    examFeeLsp: string;
    totalPackage: string;
    earlyBirdDiscount: string;
    curriculumSyllabus: string;
    officialStandard: string;
    accreditationLsp: string;
    viewSyllabus: string;
    registerNow: string;
    back: string;
    next: string;
    finish: string;
    restartQuiz: string;
    certifiedBnsp: string;
    skkniStandard: string;
    fastResponse: string;
    noObligation: string;
    flexibleSchedule: string;
  };
  nav: {
    brandSubtitle: string;
    programs: string;
    methodsAndStandards: string;
    guidanceFlow: string;
    bnspFlow: string;
    faq: string;
    consultWaBtn: string;
    mobilePrograms: string;
    mobileQuiz: string;
  };
  hero: {
    badge: string;
    quote: string;
    headlinePart1: string;
    headlineHighlight: string;
    subheadline: string;
    btnConsult: string;
    btnQuiz: string;
    schemesHeader: string;
    badgeSkkni: string;
    badgeAccreditation: string;
    badgePassRate: string;
    badgeSchedule: string;
    schemes: {
      code: string;
      name: string;
      role: string;
      duration: string;
      desc: string;
    }[];
  };
  philosophy: {
    badge: string;
    title: string;
    desc: string;
    strategicValueTitle: string;
    strategicValueDesc: string;
    pillars: {
      title: string;
      desc: string;
      footer: string;
    }[];
  };
  stages: {
    badge: string;
    title: string;
    desc: string;
    summaryCards: {
      step: string;
      title: string;
      desc: string;
    }[];
    tabOverview: string;
    tabCurriculum: string;
    tabDeliverables: string;
    items: {
      id: 'stage1' | 'stage2' | 'stage3' | 'stage4';
      number: number;
      name: string;
      subtitle: string;
      badge: string;
      focus: string;
      quote: string;
      description: string;
      whyThisStage: string;
      deliverables: string[];
      workshopTitle: string;
      workshopDesc: string;
      workshopTopics: string[];
      mentoringTitle: string;
      mentoringDesc: string;
      mentoringFeatures: string[];
    }[];
  };
  catalog: {
    badge: string;
    title: string;
    desc: string;
    categories: {
      all: string;
      brokerage: string;
      investmentMgmt: string;
      underwriting: string;
      analysis: string;
      mutualFunds: string;
      riskCompliance: string;
    };
    publicClassTab: string;
    privateClassTab: string;
    selectFormat: string;
    trainingMethodsTitle: string;
    unitCount: string;
    careerProspectTitle: string;
    btnDetail: string;
    btnConsultCard: string;
    officialTrainingMethod: string;
    onlineOfflineBadge: string;
  };
  quiz: {
    badge: string;
    title: string;
    subtitle: string;
    stepIndicator: string;
    questionNumber: string;
    recommendedResultTitle: string;
    recommendedBadge: string;
    targetRoleLabel: string;
    keyUnitsLabel: string;
    btnConsultResult: string;
    btnRetake: string;
    questions: {
      id: number;
      question: string;
      subtitle: string;
      options: {
        text: string;
        tag: string;
      }[];
    }[];
    results: Record<
      string,
      {
        tagline: string;
        summary: string;
        careerProspects: string[];
        keyUnits: string[];
        waMessage: string;
      }
    >;
  };
  roadmap: {
    badge: string;
    title: string;
    desc: string;
    steps: {
      step: string;
      title: string;
      institution: string;
      desc: string;
      badge: string;
    }[];
  };
  stats: {
    items: {
      num: string;
      label: string;
      sub: string;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    desc: string;
    items: {
      id: string;
      name: string;
      role: string;
      company: string;
      program: string;
      quote: string;
      avatarText: string;
      badgeColor: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    categories: {
      all: string;
      sertifikasi: string;
      asesmen: string;
      pembelajaran: string;
      umum: string;
    };
    items: {
      id: string;
      category: 'sertifikasi' | 'asesmen' | 'pembelajaran' | 'umum';
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    badge: string;
    title: string;
    desc: string;
    btnWa: string;
    btnForm: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  footer: {
    brandDesc: string;
    waLabel: string;
    address: string;
    navTitle: string;
    schemesTitle: string;
    copyright: string;
    standards: string;
    accreditation: string;
    consultation: string;
  };
  modals: {
    consultation: {
      badge: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      programLabel: string;
      formatLabel: string;
      backgroundLabel: string;
      backgroundOptions: string[];
      notesLabel: string;
      notesPlaceholder: string;
      submitBtn: string;
      disclaimer: string;
    };
    detail: {
      close: string;
      tabs: {
        desc: string;
        units: string;
        requirements: string;
        methods: string;
      };
      targetAudienceTitle: string;
      careerProspectsTitle: string;
      unitsTitle: string;
      requirementsTitle: string;
      methodsTitle: string;
      pricingTitle: string;
      deliveryModeLabel: string;
      languageLabel: string;
      btnCheckQualification: string;
      btnConsultScheme: string;
    };
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  id: {
    common: {
      language: 'Bahasa',
      indonesian: 'Indonesia',
      english: 'English',
      waConsultation: 'Konsultasi WhatsApp',
      waConsultationDirect: 'Konsultasi via WhatsApp',
      close: 'Tutup',
      viewDetails: 'Lihat Rincian & Silabus',
      freeConsultation: 'Konsultasi Gratis',
      allPrograms: 'Semua Program',
      popular: 'Skema Populer',
      learningHours: 'Jam Pembelajaran',
      publicClass: 'Kelas Publik',
      privateClass: 'Kelas Private 1 on 1',
      inHouseClass: 'Kelas In House Korporasi',
      examFeeLsp: 'Biaya Uji Asesmen LSP IKEPAMI',
      totalPackage: 'Total Biaya (Pelatihan + Uji LSP)',
      earlyBirdDiscount: 'Tarif Early Bird',
      curriculumSyllabus: 'Silabus Unit SKKNI',
      officialStandard: 'Standar Resmi SKKNI No. 20/2024',
      accreditationLsp: 'Uji Asesmen LSP IKEPAMI (BNSP)',
      viewSyllabus: 'Bedah Silabus & Unit',
      registerNow: 'Daftar / Tanya Jadwal',
      back: 'Kembali',
      next: 'Lanjut',
      finish: 'Selesai',
      restartQuiz: 'Ulangi Kuis',
      certifiedBnsp: 'Terakreditasi BNSP',
      skkniStandard: 'Standar SKKNI No. 20/2024',
      fastResponse: 'Respons cepat pada jam kerja',
      noObligation: '100% Gratis tanpa ikatan komitmen',
      flexibleSchedule: 'Jadwal fleksibel (Malam & Akhir Pekan)'
    },
    nav: {
      brandSubtitle: 'Pusat Pelatihan & Sertifikasi Profesi Pasar Modal Indonesia (SKKNI No. 20/2024)',
      programs: 'Program Sertifikasi',
      methodsAndStandards: 'Metode & Standar',
      guidanceFlow: 'Alur Bimbingan',
      bnspFlow: 'Alur BNSP',
      faq: 'FAQ',
      consultWaBtn: 'Konsultasi WA',
      mobilePrograms: 'Program Sertifikasi (WPPE, WPPE-P, WMI, WPEE, WAPERD)',
      mobileQuiz: '🎯 Kuis: Rekomendasi Sertifikasi Anda'
    },
    hero: {
      badge: 'Pusat Sertifikasi Profesi Pasar Modal Indonesia',
      quote: '"Karier profesional di pasar modal membutuhkan kompetensi teruji dan legalitas izin resmi."',
      headlinePart1: 'Raih Sertifikat Kompetensi BNSP di ',
      headlineHighlight: 'LSP IKEPAMI',
      subheadline:
        'Pusat pelatihan intensif profesi pasar modal berstandar SKKNI No. 20/2024. Bimbingan tuntas 4 tahapan mulai dari Technical Meeting, Kelas Interaktif (Public & Private 1 on 1), Roleplay Wawancara & Portofolio APL-01/02, hingga Uji Asesmen resmi di LSP IKEPAMI.',
      btnConsult: 'Konsultasi WA Resmi (0851-2106-7147)',
      btnQuiz: 'Ikuti Kuis Rekomendasi Sertifikasi',
      schemesHeader: 'PILIH SKEMA UTAMA PASAR MODAL:',
      badgeSkkni: '13 Skema SKKNI No. 20/2024',
      badgeAccreditation: 'Asesmen Resmi LSP IKEPAMI (BNSP)',
      badgePassRate: '98.4% Tingkat Kelulusan Alumni',
      badgeSchedule: 'Kelas Online & Offline Fleksibel',
      schemes: [
        {
          code: 'WPPE',
          name: 'Wakil Perantara Pedagang Efek',
          role: 'Pialang Saham & Equity Dealer (BEI)',
          duration: '12 Jam Pembelajaran',
          desc: 'Lisensi wajib untuk eksekusi transaksi efek, dealing room, analisis teknikal/fundamental, dan pialang di perusahaan sekuritas anggota bursa.'
        },
        {
          code: 'WPPE-P',
          name: 'WPPE Pemasaran',
          role: 'Sales Retail & Edukator Efek',
          duration: '10 Jam Pembelajaran',
          desc: 'Jalur sertifikasi cepat untuk akuisisi nasabah saham ritel, KYC nasabah, dan pemasaran efek di kantor cabang sekuritas atau fintech.'
        },
        {
          code: 'WMI',
          name: 'Wakil Manajer Investasi',
          role: 'Portfolio Manager & Fund Manager',
          duration: '14 Jam Pembelajaran',
          desc: 'Level tertinggi pengelolaan portofolio kolektif (Reksadana, KPD, ETF) dan alokasi aset institusional di perusahaan Manajer Investasi.'
        },
        {
          code: 'WPEE',
          name: 'Wakil Penjamin Emisi Efek',
          role: 'Investment Banker & IPO Lead',
          duration: '16 Jam Pembelajaran',
          desc: 'Spesialisasi underwriting emisi IPO saham, penerbitan obligasi korporasi, due diligence, dan restrukturisasi corporate finance.'
        },
        {
          code: 'WAPERD',
          name: 'Wakil Agen Penjual Efek Reksa Dana',
          role: 'Wealth Specialist & Sales APERD',
          duration: '6 Jam Pembelajaran',
          desc: 'Sertifikasi wajib untuk memasarkan produk reksa dana di Bank (Priority / Wealth Management) dan platform FinTech APERD.'
        }
      ]
    },
    philosophy: {
      badge: 'Standar Regulasi & Kepatuhan',
      title: 'Mengapa Sertifikasi Standar SKKNI Begitu Krusial?',
      desc: 'Di industri pasar modal Indonesia, profesionalisme dan kompetensi teruji diatur ketat. Bekerja sebagai pialang, analis, manajer investasi, penjamin emisi, atau pemasar reksadana membutuhkan pengakuan kompetensi resmi berstandar nasional SKKNI No. 20/2024.',
      strategicValueTitle: 'Nilai Strategis yang Anda Dapatkan:',
      strategicValueDesc:
        '1. Sertifikat Kompetensi Kerja berlogo Garuda dari BNSP melalui uji resmi di LSP IKEPAMI.\n2. Portofolio Keahlian Teruji yang diakui oleh sekuritas, bank umum, dan manajer investasi nasional.',
      pillars: [
        {
          title: 'SKKNI No. 20/2024',
          desc: 'Kurikulum paling mutakhir disesuaikan dengan unit kompetensi aktif dan bank soal Computer Assisted Test (CAT) LSP Pasar Modal.',
          footer: '✓ 100% Sesuai Silabus'
        },
        {
          title: 'Asesmen LSP IKEPAMI',
          desc: 'Lembaga Sertifikasi Profesi resmi terakreditasi Badan Nasional Sertifikasi Profesi (BNSP) untuk uji kompetensi pasar modal berstandar nasional.',
          footer: '✓ Lisensi Resmi BNSP'
        },
        {
          title: 'Metode Bimbingan 4 Tahap',
          desc: 'Mendampingi dari Technical Meeting, Kelas Teori & Soal (Public/Private), hingga Roleplay Wawancara & Portofolio APL-01/02 sebelum ujian.',
          footer: '✓ Pendampingan Tuntas'
        }
      ]
    },
    stages: {
      badge: 'ROADMAP 4 TAHAPAN SERTIFIKASI PROFESI',
      title: '4 Tahapan Menuju Sertifikat Kompetensi LSP IKEPAMI Berlisensi BNSP',
      desc: 'Metode pendampingan end-to-end terstruktur: mulai dari Technical Meeting, Tahap Pelatihan (Public & Private Class), Tahap Persiapan Ujian (Roleplay & Dokumen), hingga Ujian Sertifikasi di LSP IKEPAMI dan penerbitan Sertifikat BNSP resmi.',
      summaryCards: [
        {
          step: 'TAHAP 01',
          title: 'Technical Meeting',
          desc: 'Penjelasan skema & alur lisensi'
        },
        {
          step: 'TAHAP 02',
          title: 'Tahap Pelatihan',
          desc: 'Public Class & Private Class 1 on 1'
        },
        {
          step: 'TAHAP 03',
          title: 'Persiapan Ujian',
          desc: 'Roleplay wawancara & dokumen portofolio'
        },
        {
          step: 'TAHAP 04',
          title: 'Ujian LSP IKEPAMI',
          desc: 'Asesmen resmi BNSP di LSP IKEPAMI'
        }
      ],
      tabOverview: 'Ringkasan & Filosofi',
      tabCurriculum: 'Silabus Sesi Bimbingan',
      tabDeliverables: 'Capaian & Fasilitas Peserta',
      items: [
        {
          id: 'stage1',
          number: 1,
          name: 'Tahap 1: Technical Meeting',
          subtitle: 'Penjelasan Skema, Alur Sertifikasi, Standar SKKNI & Matriks Kompetensi',
          badge: 'TAHAP 1',
          focus: 'Fokus: Orientasi Skema & Standar Kompetensi SKKNI No. 20/2024',
          quote:
            '"Langkah awal yang terarah: memahami secara menyeluruh skema kompetensi pasar modal, persyaratan portofolio dokumen, jadwal asesmen, hingga standar kelulusan di LSP IKEPAMI."',
          description:
            'Sesi pengenalan dan pemetaan komprehensif bagi seluruh peserta untuk memahami skema sertifikasi pilihan (WPPE, WPPE-P, WMI, WPEE, WAPERD), regulasi SKKNI No. 20/2024, standar asesmen LSP IKEPAMI, serta roadmap sertifikasi kompetensi.',
          whyThisStage:
            'Orientasi yang jelas memastikan setiap peserta memiliki ekspektasi yang tepat, memahami jadwal, dan siap secara administratif sejak hari pertama.',
          deliverables: [
            'Panduan lengkap peta skema sertifikasi pasar modal (WPPE, WPPE-P, WMI, WPEE, WAPERD)',
            'Penjelasan matriks unit kompetensi berstandar SKKNI No. 20/2024',
            'Roadmap terstruktur: Pelatihan → Persiapan Ujian → Uji Kompetensi di LSP IKEPAMI (BNSP)',
            'Checklist berkas awal dan syarat administrasi pendaftaran',
            'Distribusi modul materi pelatihan resmi (Online / Offline) & grup bimbingan'
          ],
          workshopTitle: 'Sesi Orientasi & Bedah Roadmap Sertifikasi',
          workshopDesc:
            'Sesi pemaparan interaktif yang mengupas tuntas seluruh tahapan sertifikasi profesi pasar modal Indonesia.',
          workshopTopics: [
            'Pengenalan Skema Sertifikasi Pasar Modal & Profil Jabatan Kerja Terkait',
            'Struktur Regulasi Pasar Modal Indonesia & Standar Mutu SKKNI No. 20/2024',
            'Alur Asesmen Uji Kompetensi di Lembaga Sertifikasi Profesi (LSP IKEPAMI)',
            'Persiapan Berkas Administrasi Portofolio Asesmen (APL-01 & APL-02)',
            'Mekanisme Pelatihan Online / Offline, Distribusi Materi, dan Jadwal Pembelajaran'
          ],
          mentoringTitle: 'Konsultasi Pemetaan Skema & Administrasi',
          mentoringDesc:
            'Sesi tanya-jawab untuk memastikan kesesuaian skema dengan target karier serta kelengkapan dokumen awal.',
          mentoringFeatures: [
            'Pemetaan skema yang paling relevan dengan profil pendidikan & target profesi',
            'Verifikasi awal berkas administrasi dan riwayat pengalaman peserta',
            'Panduan instalasi perangkat & aplikasi pendukung pembelajaran',
            'Penetapan jadwal kelas pelatihan (Public Class atau Private Class)'
          ]
        },
        {
          id: 'stage2',
          number: 2,
          name: 'Tahap 2: Tahap Pelatihan (Public & Private Class)',
          subtitle: 'Public Class (Kelas Besar) & Private Class (Kelas 1 on 1 Intensif)',
          badge: 'TAHAP 2',
          focus: 'Fokus: Penguasaan Materi Teori, Analisis & Regulasi',
          quote:
            '"Fleksibilitas belajar dengan dua opsi terbaik: Public Class untuk kolaborasi interaktif kelas besar, atau Private Class untuk pendampingan eksklusif 1 on 1 bersama master mentor."',
          description:
            'Pembekalan materi komprehensif teori pasar modal, regulasi bursa, mekanisme transaksi, analisis fundamental/teknikal, dan kode etik profesi melalui format Public Class (kelas besar) atau Private Class (1 on 1).',
          whyThisStage:
            'Fondasi teori dan pemahaman regulasi yang kuat adalah modal utama untuk lulus ujian CAT dan asesmen wawancara dengan nilai optimal.',
          deliverables: [
            'Pilihan format belajar: Public Class (kelas besar interaktif) atau Private Class (1 on 1)',
            'Penguasaan materi teori & studi kasus pasar modal sesuai standar SKKNI No. 20/2024',
            'Modul digital lengkap, rangkuman rumus, dan slide presentasi materi',
            'Akses 24/7 ke rekaman kelas dan platform simulasi ujian CAT (Computer Assisted Test)',
            'Bank soal latihan dengan pembahasan detail dan analisis tipe soal jebakan'
          ],
          workshopTitle: 'Public Class (Kelas Besar Interaktif)',
          workshopDesc:
            'Webinar interaktif intensif malam hari (Executive Evening) atau akhir pekan (Weekend) dengan diskusi kasus riil.',
          workshopTopics: [
            'Mekanisme Perdagangan Efek & Struktur Kelembagaan Bursa (BEI, KPEI, KSEI, OJK)',
            'Analisis Fundamental Keuangan Emiten, Valuasi Saham & Indikator Makroekonomi',
            'Analisis Teknikal Pasar, Price Action, Chart Patterns & Market Sentiment',
            'Regulasi Kepatuhan, UU Pasar Modal, UU P2SK & Kode Etik Profesi Standar SKKNI',
            'Simulasi Soal Ujian CAT Interaktif per Unit Kompetensi'
          ],
          mentoringTitle: 'Private Class (Kelas 1 on 1 Intensif Eksklusif)',
          mentoringDesc:
            'Sesi mentoring eksklusif satu-lawan-satu dengan waktu yang fleksibel dan pendalaman materi sesuai kebutuhan peserta.',
          mentoringFeatures: [
            'Jadwal belajar fleksibel disesuaikan dengan kesibukan profesional / eksekutif',
            'Pendalaman materi 1 on 1 pada topik-topik yang dirasa paling menantang',
            'Bedah studi kasus riil portofolio transaksi dan analisa spesifik',
            'Drill soal CAT terarah dengan feedback personal instan dari mentor'
          ]
        },
        {
          id: 'stage3',
          number: 3,
          name: 'Tahap 3: Tahap Persiapan Ujian (Roleplay & Dokumen)',
          subtitle: 'Penyusunan Portofolio Berkas APL-01/02 & Simulasi Roleplay Asesor',
          badge: 'TAHAP 3',
          focus: 'Fokus: Kurasi Portofolio & Mock Interview Asesor',
          quote:
            '"Kunci kelulusan asesmen BNSP terletak pada keselarasan bukti portofolio dan kelancaran saat wawancara asesor. Di tahap ini, kami mengawal Anda hingga zero-defect."',
          description:
            'Tahap krusial pendampingan individual dalam melengkapi formulir APL-01 & APL-02, audit kecukupan bukti kerja, dan simulasi wawancara (roleplay) sebelum nama peserta didaftarkan ke LSP IKEPAMI.',
          whyThisStage:
            'Banyak peserta gagal asesmen bukan karena kurang pintar, tapi karena berkas portofolio tidak valid atau gugup saat wawancara asesor. Tahap ini menghilangkan risiko tersebut.',
          deliverables: [
            'Audit dan finalisasi dokumen pendaftaran APL-01 (Aplikasi Permohonan Sertifikasi)',
            'Penyusunan bukti kompetensi APL-02 (Asesmen Mandiri) dengan evidence portofolio valid',
            'Sesi Roleplay / Mock Interview menirukan situasi asesmen wawancara asesor sesungguhnya',
            'Koreksi langsung dan rekomendasi perbaikan berkas dari tim kurator sertifikasi MMI',
            'Penerbitan surat rekomendasi kesiapan uji ke Lembaga Sertifikasi Profesi (LSP IKEPAMI)'
          ],
          workshopTitle: 'Klinik Kurasi Portofolio Dokumen APL-01/02',
          workshopDesc:
            'Bedah detail cara penyusunan bukti kerja (evidence), ijazah, sertifikat pelatihan, dan portofolio analisis.',
          workshopTopics: [
            'Kriteria Validitas Bukti Portofolio Asesmen (Valid, Asli, Terkini, Memadai - VATM)',
            'Teknik Pengisian Formulir Asesmen Mandiri APL-02 Sesuai Kriteria Unjuk Kerja (KUK)',
            'Penyusunan Laporan Analisis Transaksi / Valuasi Portofolio sebagai Bukti Tambahan',
            'Manajemen Waktu & Etika Profesional Selama Sesi Wawancara Tatap Muka Asesor',
            'Mitigasi Pertanyaan Jebakan Seputar Integritas dan Regulasi OJK'
          ],
          mentoringTitle: 'Simulasi Roleplay Wawancara 1:1 Asesor',
          mentoringDesc:
            'Simulasi uji wawancara satu per satu bersama instruktur senior bersertifikat asesor BNSP.',
          mentoringFeatures: [
            'Simulasi tanya-jawab mendalam terkait unit kompetensi skema yang diambil',
            'Evaluasi kelancaran komunikasi, ketegasan argumen, dan logika regulasi',
            'Skor kesiapan asesmen dan checklist catatan perbaikan sebelum hari H ujian',
            'Sesi penguatan mental dan tips praktis menghadapi berbagai karakteristik asesor'
          ]
        },
        {
          id: 'stage4',
          number: 4,
          name: 'Tahap 4: Tahap Ujian Sertifikasi (LSP IKEPAMI)',
          subtitle: 'Pelaksanaan Asesmen Uji Kompetensi Resmi di LSP IKEPAMI Berlisensi BNSP',
          badge: 'TAHAP 4',
          focus: 'Fokus: Uji Kompetensi Resmi & Penerbitan Sertifikat BNSP',
          quote:
            '"Puncak pembuktian kompetensi: mengikuti asesmen resmi berstandar nasional di LSP IKEPAMI untuk meraih Sertifikat Kompetensi Kerja berlogo Garuda Emas."',
          description:
            'Pelaksanaan asesmen uji kompetensi resmi oleh Lembaga Sertifikasi Profesi (LSP) IKEPAMI yang terlisensi oleh Badan Nasional Sertifikasi Profesi (BNSP), meliputi ujian tertulis CAT dan wawancara portofolio.',
          whyThisStage:
            'Inilah gerbang resmi pengakuan negara atas kompetensi profesi Anda, membuka pintu legalitas izin kerja di industri keuangan dan pasar modal.',
          deliverables: [
            'Nomor Peserta Ujian Resmi di Lembaga Sertifikasi Profesi (LSP IKEPAMI)',
            'Pelaksanaan ujian Computer Assisted Test (CAT) dan verifikasi portofolio langsung oleh asesor',
            'Berita Acara Keputusan Asesmen: Rekomendasi Kompeten (K)',
            'Penerbitan Sertifikat Kompetensi Kerja Nasional (BNSP) berlogo Garuda Emas (Masa berlaku 3 tahun)',
            'Garansi Bimbingan Ulang Gratis (Free Repeat Mentoring) jika ada unit kompetensi yang perlu diulang'
          ],
          workshopTitle: 'Briefing Teknis Pelaksanaan Uji Asesmen LSP IKEPAMI',
          workshopDesc:
            'Panduan tata tertib dan persiapan hari H asesmen resmi di LSP IKEPAMI.',
          workshopTopics: [
            'Prosedur Log-in & Navigasi Sistem Ujian CAT Resmi LSP IKEPAMI',
            'Tata Tertib Pelaksanaan Ujian (Daring / Luring) & Verifikasi Identitas Asesi',
            'Mekanisme Sesi Wawancara Tatap Muka Bersama Asesor Kompetensi',
            'Prosedur Pengumuman Hasil Rekomendasi Asesmen (Kompeten / Belum Kompeten)',
            'Alur Penerbitan dan Pengiriman Sertifikat Fisik BNSP Berlogo Garuda Emas'
          ],
          mentoringTitle: 'Pendampingan Hari H & Garansi Bimbingan Ulang',
          mentoringDesc:
            'Tim MMI siap siaga mendampingi kesiapan teknis Anda hingga sertifikat terbit di tangan.',
          mentoringFeatures: [
            'Helpdesk teknis siaga selama proses asesmen berlangsung',
            'Pendampingan administrasi verifikasi berita acara asesmen',
            'Garansi Free Repeat Mentoring jika ada unit kompetensi yang dinyatakan Belum Kompeten (BK)',
            'Konsultasi lanjutan mengenai prosedur perizinan perorangan dan pengembangan karier'
          ]
        }
      ]
    },
    catalog: {
      badge: 'Pusat Pelatihan & Sertifikasi Profesi Pasar Modal',
      title: '13 Skema Sertifikasi Profesi Pasar Modal Resmi',
      desc: 'Daftar lengkap 13 skema sertifikasi berstandar SKKNI No. 20/2024 & KKNI Pasar Modal. Setiap skema dilengkapi: (1) Deskripsi Pelatihan Resmi, (2) Unit Kompetensi Lengkap, (3) Syarat Peserta, serta (4) Metode Pelatihan (Kelas Publik, In House, & Private 1 on 1). Konsultasi kurasi portofolio APL-01/02 & jadwal asesmen LSP IKEPAMI (BNSP) dilayani langsung via WhatsApp.',
      categories: {
        all: 'Semua Program',
        brokerage: 'Brokerage (WPPE & WPPE-P)',
        investmentMgmt: 'Pengelolaan Investasi & Produk',
        underwriting: 'Penjaminan Emisi & Korporasi',
        analysis: 'Analisis Efek & Riset',
        mutualFunds: 'Reksadana (WAPERD)',
        riskCompliance: 'Risiko & Kepatuhan'
      },
      publicClassTab: 'Kelas Publik',
      privateClassTab: 'Kelas Private 1:1',
      selectFormat: 'Pilih Format Pelatihan:',
      trainingMethodsTitle: 'Metode Pelatihan:',
      unitCount: 'Unit SKKNI',
      careerProspectTitle: 'Prospek Jabatan & Profesi:',
      btnDetail: 'Lihat Rincian & Silabus',
      btnConsultCard: 'Konsultasi WhatsApp',
      officialTrainingMethod: 'Metode Pengantaran:',
      onlineOfflineBadge: 'Kelas Online & Offline'
    },
    quiz: {
      badge: 'DIAGNOSTIK KARIER PASAR MODAL',
      title: 'Kuis Rekomendasi Skema Sertifikasi Pasar Modal',
      subtitle:
        'Jawab 4 pertanyaan singkat untuk menemukan skema sertifikasi SKKNI No. 20/2024 yang paling tepat sesuai target karier, pengalaman, dan peran profesional impian Anda.',
      stepIndicator: 'Pertanyaan',
      questionNumber: 'Pertanyaan ke-',
      recommendedResultTitle: 'Rekomendasi Skema Sertifikasi Anda',
      recommendedBadge: 'HASIL ANALISIS SKKNI NO. 20/2024',
      targetRoleLabel: 'Profil Jabatan / Peran Utama:',
      keyUnitsLabel: 'Contoh Unit Kompetensi Kunci SKKNI:',
      btnConsultResult: 'Konsultasi Hasil Kuis via WhatsApp',
      btnRetake: 'Ulangi Kuis',
      questions: [
        {
          id: 1,
          question: 'Apa target peran utama yang ingin Anda jalani di industri pasar modal?',
          subtitle: 'Pilihlah fokus karier yang paling sesuai dengan minat dan tujuan profesional Anda.',
          options: [
            {
              text: 'Menjadi Pialang Saham, Equity Sales/Trader, atau Dealer di Perusahaan Sekuritas',
              tag: 'Brokerage & Equity Trading'
            },
            {
              text: 'Menjadi Sales Retail / Marketing Pemasaran Efek di Sekuritas atau Fintech Investasi',
              tag: 'Sales & Client Acquisition'
            },
            {
              text: 'Mengelola Dana Nasabah, Analis Riset, atau Portofolio Fund Manager di Manajer Investasi',
              tag: 'Asset Management & Funds'
            },
            {
              text: 'Menjadi Investment Banker, Penjamin Emisi IPO Saham/Obligasi Emiten di Bursa Efek',
              tag: 'Investment Banking & Corporate Finance'
            },
            {
              text: 'Menjadi Wealth Specialist atau Relationship Manager Produk Reksa Dana di Perbankan / Fintech APERD',
              tag: 'Wealth Management & Mutual Funds'
            }
          ]
        },
        {
          id: 2,
          question: 'Bagaimana latar belakang pendidikan dan pengalaman kerja Anda saat ini?',
          subtitle: 'Kualifikasi awal membantu menentukan pemenuhan syarat berkas portofolio APL-01/02.',
          options: [
            {
              text: 'Mahasiswa Tingkat Akhir / Fresh Graduate / Pemula Tanpa Pengalaman Pasar Modal',
              tag: 'Entry Level / Career Starter'
            },
            {
              text: 'Karyawan Perbankan / Asuransi / Keuangan yang Ingin Ekspansi ke Produk Reksa Dana & Efek',
              tag: 'Cross-Financial Industry'
            },
            {
              text: 'Trader Saham Aktif / Investor Mandiri / Pialang Saham yang Ingin Melegalkan Lisensi Resmi',
              tag: 'Active Trader / Securities Practitioner'
            },
            {
              text: 'Analis Keuangan / Corporate Finance / Legal M&A Berpengalaman 2+ Tahun di Pasar Modal',
              tag: 'Experienced Financial Professional'
            }
          ]
        },
        {
          id: 3,
          question: 'Format pembelajaran seperti apa yang paling sesuai dengan ketersediaan waktu Anda?',
          subtitle: 'MMI menyediakan opsi Public Class interaktif dan pendampingan Private 1 on 1 intensif.',
          options: [
            {
              text: 'Public Class Interaktif (Webinar Malam Hari / Akhir Pekan) dengan Diskusi Studi Kasus Kelompok',
              tag: 'Interactive Public Webinar'
            },
            {
              text: 'Private Class 1 on 1 Eksklusif dengan Waktu Fleksibel Bersama Master Mentor',
              tag: 'Executive 1:1 Mentoring'
            },
            {
              text: 'In House Class Korporasi Bersama Rekan Satu Perusahaan / Divisi Sekuritas',
              tag: 'Corporate In-House Batch'
            },
            {
              text: 'Pilihan Kelas Online & Offline Fleksibel (Malam / Akhir Pekan) dengan Modul Lengkap',
              tag: 'Executive Learning Schedule'
            }
          ]
        },
        {
          id: 4,
          question: 'Kapan target waktu Anda untuk mengikuti asesmen resmi di LSP IKEPAMI (BNSP)?',
          subtitle: 'MMI menyelenggarakan batch bimbingan intensif rutin setiap bulannya.',
          options: [
            {
              text: 'Secepat Mungkin (Batch Bulan Ini / 2–4 Minggu Mendatang)',
              tag: 'Fast Track (Next Available Batch)'
            },
            {
              text: '1–2 Bulan Mendatang (Butuh Waktu Belajar Lebih Rileks Sambil Bekerja)',
              tag: 'Standard Pacing (1-2 Months)'
            },
            {
              text: '3–6 Bulan Mendatang (Merencanakan Upgrade Karier / Syarat Promosi Jabatan)',
              tag: 'Strategic Planning (Quarterly Target)'
            },
            {
              text: 'Fleksibel, Menunggu Evaluasi Kesesuaian Portofolio & CV oleh Tim MMI',
              tag: 'Assessment-Ready Consultation'
            }
          ]
        }
      ],
      results: {
        WPPE: {
          tagline: 'Jalur Utama Menjadi Pialang Saham Berlisensi Resmi di Bursa Efek Indonesia',
          summary:
            'Berdasarkan profil dan minat karier Anda, skema WPPE (Wakil Perantara Pedagang Efek) adalah pilihan paling tepat. Lisensi ini adalah fondasi legalitas wajib bagi setiap profesional yang ingin bertransaksi, mengeksekusi order efek nasabah, dan berkarier di perusahaan sekuritas anggota BEI.',
          careerProspects: [
            'Equity Sales & Broker Dealer di Perusahaan Sekuritas',
            'Institutional & Retail Equity Trader',
            'Dealing Room Specialist & Technical Market Analyst',
            'Head of Branch / Branch Manager Kantor Cabang Sekuritas'
          ],
          keyUnits: [
            'Menerapkan Pengelolaan Risiko Terkait Kegiatan Perantara Pedagang Efek',
            'Merekomendasikan Efek Bersifat Ekuitas kepada Nasabah',
            'Melakukan Transaksi Efek Bersifat Ekuitas Terkait Kegiatan Perantara Pedagang Efek',
            'Memantau Portofolio Efek & Penyelesaian Transaksi Efek'
          ],
          waMessage:
            'Halo Tim Money Maker Institute (MMI), saya baru saja menyelesaikan kuis rekomendasi sertifikasi dan mendapatkan hasil rekomendasi skema WPPE (Wakil Perantara Pedagang Efek). Saya ingin berkonsultasi mengenai jadwal kelas dan biaya investasi terdekat.'
        },
        'WPPE-P': {
          tagline: 'Sertifikasi Tercepat untuk Karier Penjualan, Akuisisi Nasabah & Edukator Saham',
          summary:
            'Skema WPPE-P (WPPE Pemasaran) sangat cocok bagi Anda yang fokus pada sisi pemasaran, edukasi, akuisisi nasabah ritel, dan operasional sales di sekuritas maupun platform fintech pasar modal dengan silabus yang lebih ringkas dan terarah.',
          careerProspects: [
            'Retail Equity Sales Specialist di Perusahaan Sekuritas',
            'Fintech Investment Educator & Acquisition Officer',
            'Customer Relationship Officer Pasar Modal',
            'Financial Content Creator & Community Ambassador Sekuritas'
          ],
          keyUnits: [
            'Melakukan Pemasaran Efek Bersifat Ekuitas',
            'Melakukan Pembukaan Rekening Efek Nasabah (KYC & Administrasi)',
            'Memberikan Edukasi Pengenalan Pasar Modal kepada Calon Nasabah',
            'Mematuhi Kode Etik Pemasaran & Regulasi Perlindungan Konsumen OJK'
          ],
          waMessage:
            'Halo Tim Money Maker Institute (MMI), hasil kuis saya merekomendasikan skema WPPE-P (WPPE Pemasaran). Mohon info jadwal kelas terdekat dan format pelatihan yang tersedia.'
        },
        WMI: {
          tagline: 'Kasta Tertinggi Pengelolaan Portofolio Investasi & Reksadana Institusional',
          summary:
            'Skema WMI (Wakil Manajer Investasi) adalah kualifikasi paling prestisius untuk memimpin pengelolaan dana nasabah, merancang strategi alokasi portofolio multi-aset, dan mengelola Kontrak Pengelolaan Dana (KPD) maupun produk reksa dana.',
          careerProspects: [
            'Portfolio Manager & Fund Manager di Perusahaan Manajer Investasi',
            'Chief Investment Officer (CIO) Family Office / Dana Pensiun',
            'Research Director & Senior Equity/Fixed Income Analyst',
            'Investment Committee Member Perusahaan Asuransi & Pengelola Aset'
          ],
          keyUnits: [
            'Menyusun Rencana Alokasi Aset & Kebijakan Investasi Portofolio (IPS)',
            'Menganalisis Efek Bersifat Ekuitas & Surat Utang/Sukuk',
            'Melakukan Eksekusi & Penyeimbangan Kembali (Rebalancing) Portofolio',
            'Mengevaluasi Kinerja Portofolio & Menerapkan Manajemen Risiko Investasi'
          ],
          waMessage:
            'Halo Tim Money Maker Institute (MMI), hasil kuis saya merekomendasikan skema WMI (Wakil Manajer Investasi). Saya ingin konsultasi kurasi berkas APL-01/02 dan jadwal bimbingan terdekat.'
        },
        WPEE: {
          tagline: 'Sertifikasi Spesialis Investment Banking, IPO & Corporate Finance Advisory',
          summary:
            'Skema WPEE (Wakil Penjamin Emisi Efek) mengasah keahlian strategis Anda dalam penjaminan emisi efek penawaran umum (IPO saham & obligasi), restrukturisasi keuangan korporasi, dan legal financial due diligence.',
          careerProspects: [
            'Investment Banker & Corporate Finance Officer di Sekuritas Penjamin Emisi',
            'Lead Underwriter & Syndicate Manager Penawaran Umum Efek',
            'Capital Market Legal & Compliance Specialist',
            'Corporate Advisor Aksi Korporasi (Right Issue, Obligasi, M&A)'
          ],
          keyUnits: [
            'Melaksanakan Penawaran Jasa Penjamin Pelaksana Emisi Efek',
            'Mengakomodir Uji Tuntas (Due Diligence) & Dokumen Prospektus Penawaran Umum',
            'Melakukan Valuasi Efek Berbasis Ekuitas & Pendapatan Tetap Emiten',
            'Mengelola Kegiatan Penawaran Umum dan Pencatatan Efek di Bursa'
          ],
          waMessage:
            'Halo Tim Money Maker Institute (MMI), hasil kuis saya merekomendasikan skema WPEE (Wakil Penjamin Emisi Efek). Mohon informasi rincian jadwal bimbingan dan asesmen LSP IKEPAMI.'
        },
        WAPERD: {
          tagline: 'Sertifikasi Wajib Tenaga Pemasar Reksa Dana di Perbankan & Platform APERD',
          summary:
            'Skema WAPERD (Wakil Agen Penjual Efek Reksa Dana) adalah kualifikasi legalitas yang diwajibkan OJK bagi setiap tenaga pemasar di Bank (Priority & Wealth Management), asuransi, dan fintech yang mendistribusikan produk reksa dana kepada publik.',
          careerProspects: [
            'Priority Banking Wealth Specialist & Relationship Manager',
            'Mutual Fund Sales Consultant di Bank Umum APERD',
            'Fintech Mutual Fund Advisory & Customer Success Officer',
            'Financial Planner Independen Berlisensi'
          ],
          keyUnits: [
            'Memahami Karakteristik Produk Reksa Dana & Profil Risiko Nasabah',
            'Melakukan Pemasaran dan Penjualan Efek Reksa Dana',
            'Menerapkan Prinsip Perlindungan Konsumen & Anti-Pencucian Uang (APU-PPT)',
            'Mematuhi Kode Etik Agen Penjual Efek Reksa Dana'
          ],
          waMessage:
            'Halo Tim Money Maker Institute (MMI), hasil kuis saya merekomendasikan skema WAPERD. Saya ingin berkonsultasi mengenai persiapan ujian dan jadwal bimbingan terdekat.'
        }
      }
    },
    roadmap: {
      badge: 'Legalitas & Akreditasi',
      title: 'Alur Terstruktur Sertifikasi BNSP di LSP IKEPAMI',
      desc: 'Setiap langkah bimbingan di Money Maker Institute dirancang selaras dengan standar operasional asesmen BNSP untuk menjamin kesiapan kelulusan peserta.',
      steps: [
        {
          step: '01',
          title: 'Technical Meeting & Orientasi',
          institution: 'Money Maker Institute',
          desc: 'Penjelasan menyeluruh alur skema sertifikasi, matriks unit SKKNI No. 20/2024, persiapan berkas, dan roadmap lisensi.',
          badge: 'Tahap 1: Orientasi'
        },
        {
          step: '02',
          title: 'Pelatihan (Public / Private Class)',
          institution: 'Money Maker Institute',
          desc: 'Penguasaan materi teori, analisis instrumen pasar modal, bedah soal CAT via Public Class (webinar) atau Private Class 1 on 1.',
          badge: 'Tahap 2: Public / Private'
        },
        {
          step: '03',
          title: 'Persiapan Ujian: Roleplay & Dokumen',
          institution: 'Mentoring 1:1 MMI',
          desc: 'Kurasi & audit dokumen portofolio APL-01/02 serta simulasi roleplay mock interview asesor hingga zero-error.',
          badge: 'Tahap 3: Roleplay & Dokumen'
        },
        {
          step: '04',
          title: 'Ujian Sertifikasi di LSP IKEPAMI',
          institution: 'LSP IKEPAMI (Lisensi BNSP)',
          desc: 'Pelaksanaan asesmen resmi tertulis (CAT) & wawancara portofolio oleh asesor berwenang LSP IKEPAMI.',
          badge: 'Tahap 4: LSP IKEPAMI'
        },
        {
          step: '05',
          title: 'Sertifikat BNSP Garuda Emas',
          institution: 'Badan Nasional Sertifikasi Profesi',
          desc: 'Penerbitan Sertifikat Kompetensi Kerja resmi bertaraf nasional berlogo Garuda emas (Masa berlaku 3 tahun).',
          badge: 'Legalitas Kompetensi'
        },
        {
          step: '06',
          title: 'Konsultasi Personal & Jejaring Alumni',
          institution: 'Money Maker Institute Network',
          desc: 'Bimbingan personal 1 on 1 via WhatsApp mengenai langkah karier industri pasar modal, optimalisasi sertifikat, dan jejaring alumni.',
          badge: 'Bimbingan Pasca-Kelulusan'
        }
      ]
    },
    stats: {
      items: [
        { num: '4', label: 'Tahapan Bimbingan', sub: 'TM, Pelatihan, Persiapan & Uji LSP' },
        { num: 'IKEPAMI', label: 'Ujian di LSP IKEPAMI', sub: 'Terlisensi Resmi oleh BNSP' },
        { num: '1:1', label: 'Roleplay & Portofolio', sub: 'Bedah Dokumen & Mock Interview' },
        { num: 'Free', label: 'Repeat Guarantee', sub: 'Bebas Biaya Bimbingan Ulang' },
        { num: 'BNSP', label: 'Sertifikat Nasional', sub: 'Standar Mutu SKKNI 20/2024' }
      ]
    },
    testimonials: {
      badge: 'TESTIMONI ALUMNI',
      title: 'Cerita Keberhasilan Alumni Meraih Sertifikat BNSP',
      desc: 'Para profesional dan eksekutif yang telah membuktikan metode bimbingan terstruktur Money Maker Institute.',
      items: [
        {
          id: 't-1',
          name: 'Dimas Prasetyo, WPPE',
          role: 'Institutional Equity Sales',
          company: 'PT Mirae Asset Sekuritas Indonesia',
          program: 'Program WPPE (Pialang Saham)',
          quote:
            'Metode pembelajarannya to the point dan simulasi asesmennya mirip sekali dengan ujian asli LSP. Saya yang awalnya bukan dari jurusan akuntansi bisa lulus kompeten dalam sekali uji di LSP IKEPAMI.',
          avatarText: 'DP',
          badgeColor: '#4FAE58'
        },
        {
          id: 't-2',
          name: 'Sarah Amanda, WMI',
          role: 'Associate Portfolio Manager',
          company: 'PT Mandiri Manajemen Investasi',
          program: 'Program WMI (Manajer Investasi)',
          quote:
            'Materi alokasi aset dan evaluasi kinerja portofolionya diajarkan langsung oleh Fund Manager senior. Tidak cuma rumus teori, tapi insight nyata industri pengelolaan dana yang sangat berguna di pekerjaan sehari-hari.',
          avatarText: 'SA',
          badgeColor: '#B8860B'
        },
        {
          id: 't-3',
          name: 'Rian Hidayat, S.E.',
          role: 'Founder & Managing Partner',
          company: 'Artha Capital Advisory',
          program: 'Mentoring Lisensi & Eksekutif 1:1',
          quote:
            'Setelah 6 tahun bekerja di sekuritas, saya memutuskan membangun boutique advisory firm. Bimbingan MMI membantu saya menyusun SOP kepatuhan, pemahaman regulasi terkini, dan penguatan lisensi profesi.',
          avatarText: 'RH',
          badgeColor: '#8FDE00'
        },
        {
          id: 't-4',
          name: 'Jessica Clarissa, WAPERD',
          role: 'Priority Banking Wealth Specialist',
          company: 'PT Bank Central Asia Tbk',
          program: 'Program WAPERD (Pemasar Reksa Dana)',
          quote:
            'Sesi kelas malamnya sangat membantu saya yang sibuk kerja. Bank soal ujiannya akurat, mentornya sabar membimbing konsep profil risiko reksadana hingga sukses meraih sertifikat kompetensi BNSP.',
          avatarText: 'JC',
          badgeColor: '#4FAE58'
        },
        {
          id: 't-5',
          name: 'Budi Santoso',
          role: 'Private Investor & Ex-VP Finance',
          company: 'Independent Family Office',
          program: 'Workshop Analisis & Investasi Portofolio',
          quote:
            'Filosofi tahapan MMI sangat masuk akal. Saya belajar bagaimana mendiversifikasi aset dari bisnis aktif ke portofolio multi-aset yang tahan inflasi dengan framework analisis terukur.',
          avatarText: 'BS',
          badgeColor: '#B8860B'
        }
      ]
    },
    faq: {
      badge: 'Pertanyaan Umum',
      title: 'Frequently Asked Questions (FAQ)',
      desc: 'Semua hal yang perlu Anda ketahui mengenai sertifikasi pasar modal, standar SKKNI No. 20/2024, uji kompetensi di LSP IKEPAMI, dan metode belajar di Money Maker Institute.',
      searchPlaceholder: 'Cari pertanyaan seputar sertifikasi, LSP IKEPAMI, atau metode belajar...',
      categories: {
        all: 'Semua Pertanyaan',
        sertifikasi: 'Sertifikasi BNSP',
        asesmen: 'Asesmen & Kelulusan',
        pembelajaran: 'Metode & Retake',
        umum: 'Jadwal & Konsultasi'
      },
      items: [
        {
          id: 'faq-1',
          category: 'sertifikasi',
          question: 'Apa saja 4 tahapan bimbingan sertifikasi di Money Maker Institute?',
          answer:
            'MMI menerapkan 4 tahapan bimbingan terstruktur: (1) Technical Meeting: orientasi skema sertifikasi hingga matriks unit kompetensi SKKNI; (2) Tahap Pelatihan: pilihan Public Class (kelas besar interaktif) & Private Class (1 on 1 intensif); (3) Tahap Persiapan Ujian: kurasi dokumen portofolio APL-01/02 & simulasi roleplay wawancara asesor; (4) Tahap Ujian Sertifikasi: pelaksanaan asesmen resmi di LSP IKEPAMI hingga perolehan Sertifikat Kompetensi BNSP berlogo Garuda Emas.'
        },
        {
          id: 'faq-2',
          category: 'sertifikasi',
          question: 'Apa itu LSP IKEPAMI dan apa keabsahan sertifikat yang diterbitkan?',
          answer:
            'LSP IKEPAMI (Lembaga Sertifikasi Profesi Ikatan Konsultan & Eksekutif Pasar Modal Indonesia) adalah lembaga pelaksana uji kompetensi resmi yang terlisensi oleh Badan Nasional Sertifikasi Profesi (BNSP). Sertifikat yang diterbitkan berlogo Garuda emas, berlaku nasional selama 3 tahun, dan merupakan standar pengakuan kompetensi profesi pasar modal resmi di Indonesia.'
        },
        {
          id: 'faq-3',
          category: 'pembelajaran',
          question: 'Apa perbedaan antara Public Class dan Private Class pada Tahap Pelatihan?',
          answer:
            'Public Class diselenggarakan dalam format kelas webinar interaktif (Executive Evening & Weekend) yang dinamis dengan studi kasus lintas peserta. Sedangkan Private Class adalah bimbingan eksklusif 1 on 1 bersama instruktur master dengan jadwal fleksibel yang dapat disesuaikan dengan kesibukan eksekutif atau profesional.'
        },
        {
          id: 'faq-4',
          category: 'pembelajaran',
          question: 'Bagaimana pelaksanaan Tahap Persiapan Ujian (Roleplay & Dokumen)?',
          answer:
            'Pada tahap ini, peserta dibimbing secara detail dalam melengkapi berkas APL-01 & APL-02, mengurasi bukti portofolio kerja/analisis, dan mengikuti sesi simulasi Roleplay (Mock Interview) menirukan skenario wawancara asesor LSP IKEPAMI. Kami memastikan kesiapan dokumen dan mental sebelum nama Anda didaftarkan ke jadwal ujian resmi.'
        },
        {
          id: 'faq-5',
          category: 'sertifikasi',
          question: 'Apakah pemula atau lulusan non-ekonomi bisa mengikuti sertifikasi WPPE / WMI / WAPERD?',
          answer:
            'Sangat bisa! Kurikulum kami dirancang mulai dari konsep paling mendasar dengan metode analogi praktis dan studi kasus riil. Lebih dari 45% alumni kami berasal dari latar belakang Teknik, Hukum, Komunikasi, Sastra, dan berbagai disiplin non-ekonomi yang kini sukses berkarier di industri sekuritas dan manajer investasi.'
        },
        {
          id: 'faq-6',
          category: 'asesmen',
          question: 'Bagaimana alur dan bimbingan setelah dinyatakan Kompeten (K) di LSP IKEPAMI?',
          answer:
            'Setelah dinyatakan Kompeten (K) oleh asesor LSP IKEPAMI, BNSP akan menerbitkan Sertifikat Kompetensi Kerja berlogo Garuda Emas. Terkait langkah lanjutan pengembangan karier dan konsultasi personal, tim MMI siap memberikan panduan terarah melalui sesi konsultasi personal via WhatsApp.'
        },
        {
          id: 'faq-7',
          category: 'pembelajaran',
          question: 'Bagaimana jika saya belum kompeten pada salah satu unit saat ujian di LSP IKEPAMI?',
          answer:
            'Kami memberikan komitmen Free Repeat Mentoring! Jika ada unit kompetensi yang dinyatakan Belum Kompeten (BK), Anda berhak mengikuti sesi bimbingan khusus untuk unit tersebut tanpa biaya tambahan hingga Anda siap dan dinyatakan Kompeten (K).'
        },
        {
          id: 'faq-8',
          category: 'umum',
          question: 'Bagaimana cara mendapatkan informasi jadwal kelas, biaya investasi, dan pendaftaran?',
          answer:
            'Seluruh informasi jadwal angkatan terdekat (Executive Evening & Weekend), pilihan format kelas (Public Class / Private Class 1 on 1), rincian biaya investasi pelatihan & uji asesmen LSP IKEPAMI, serta fasilitas penawaran khusus dilayani melalui konsultasi resmi WhatsApp kami di 0851-2106-7147.'
        }
      ]
    },
    finalCta: {
      badge: 'KONSULTASI SERTIFIKASI GRATIS',
      title: 'Siap Memulai Langkah Menuju Sertifikasi Profesi Pasar Modal?',
      desc: 'Konsultasikan pilihan skema sertifikasi (WPPE, WPPE-P, WMI, WPEE, WAPERD), jadwal kelas terdekat, atau bedah silabus SKKNI No. 20/2024 bersama tim konsultan MMI — 100% gratis tanpa komitmen.',
      btnWa: 'Konsultasi via WhatsApp (0851-2106-7147)',
      btnForm: 'Formulir Konsultasi Program',
      feature1: 'Respons cepat di jam operasional',
      feature2: 'Bimbingan 4 Tahapan Tuntas',
      feature3: 'Garansi Bimbingan Ulang (Free Repeat)'
    },
    footer: {
      brandDesc:
        'Pusat pelatihan intensif dan sertifikasi profesi pasar modal Indonesia berstandar SKKNI No. 20/2024. Membimbing peserta menguasai kompetensi bursa, persiapan dokumen portofolio APL-01/02, dan meraih sertifikat kompetensi resmi BNSP di LSP IKEPAMI.',
      waLabel: 'WhatsApp: +62 851-2106-7147',
      address: 'Jakarta, Indonesia',
      navTitle: 'Navigasi Cepat',
      schemesTitle: 'Skema Sertifikasi Pasar Modal',
      copyright: '© 2026 Money Maker Institute (MMI). Seluruh hak cipta dilindungi.',
      standards: 'Standar SKKNI No. 20/2024',
      accreditation: 'Uji Asesmen LSP IKEPAMI (BNSP)',
      consultation: 'Konsultasi Personal 1:1'
    },
    modals: {
      consultation: {
        badge: 'KONSULTASI SERTIFIKASI & PENDAFTARAN',
        title: 'Konsultasi Sertifikasi Pasar Modal',
        subtitle:
          'Diskusikan skema sertifikasi SKKNI No. 20/2024 dan persiapan asesmen LSP IKEPAMI bersama konsultan MMI via WhatsApp.',
        nameLabel: 'Nama Lengkap Anda',
        namePlaceholder: 'Contoh: Dimas Aditya, S.E.',
        programLabel: 'Pilihan Skema Sertifikasi',
        formatLabel: 'Pilihan Format Pelatihan',
        backgroundLabel: 'Latar Belakang Pendidikan / Pekerjaan',
        backgroundOptions: [
          'Profesional / Karyawan Keuangan',
          'Mahasiswa / Fresh Graduate',
          'Investor / Trader Mandiri',
          'Pialang Saham / Praktisi Sekuritas',
          'Lainnya (Non-Ekonomi)'
        ],
        notesLabel: 'Catatan atau Pertanyaan Tambahan (Opsional)',
        notesPlaceholder: 'Tuliskan pertanyaan Anda mengenai jadwal, syarat portofolio, atau biaya...',
        submitBtn: 'Lanjutkan Konsultasi ke WhatsApp Resmi',
        disclaimer: 'Formulir ini akan menghubungkan Anda langsung ke WhatsApp resmi Money Maker Institute.'
      },
      detail: {
        close: 'Tutup',
        tabs: {
          desc: '1. Deskripsi & Prospek',
          units: '2. Unit Kompetensi SKKNI',
          requirements: '3. Syarat Peserta',
          methods: '4. Metode Pelatihan & Biaya'
        },
        targetAudienceTitle: 'Target Peserta Program:',
        careerProspectsTitle: 'Peluang Jabatan & Prospek Karier:',
        unitsTitle: 'Daftar Lengkap Unit Kompetensi',
        requirementsTitle: 'Persyaratan Peserta Uji Kompetensi',
        methodsTitle: 'Metode Pelatihan & Skema Penyelenggaraan',
        pricingTitle: 'Informasi Biaya Investasi & Jadwal',
        deliveryModeLabel: 'MODA PENGANTARAN:',
        languageLabel: 'BAHASA PENGANTAR:',
        btnCheckQualification: 'Cek Kualifikasi CV',
        btnConsultScheme: 'Konsultasikan Skema Ini via WhatsApp'
      }
    }
  },
  en: {
    common: {
      language: 'Language',
      indonesian: 'Indonesia',
      english: 'English',
      waConsultation: 'WhatsApp Consultation',
      waConsultationDirect: 'Consult via WhatsApp',
      close: 'Close',
      viewDetails: 'View Details & Syllabus',
      freeConsultation: 'Free Consultation',
      allPrograms: 'All Programs',
      popular: 'Popular Scheme',
      learningHours: 'Learning Hours',
      publicClass: 'Public Class',
      privateClass: 'Private 1-on-1 Class',
      inHouseClass: 'Corporate In-House Class',
      examFeeLsp: 'LSP IKEPAMI Assessment Exam Fee',
      totalPackage: 'Total Package (Training + LSP Exam)',
      earlyBirdDiscount: 'Early Bird Rate',
      curriculumSyllabus: 'SKKNI Unit Syllabus',
      officialStandard: 'Official SKKNI No. 20/2024 Standard',
      accreditationLsp: 'LSP IKEPAMI Assessment (BNSP)',
      viewSyllabus: 'Review Syllabus & Units',
      registerNow: 'Enroll / Inquire Schedule',
      back: 'Back',
      next: 'Next',
      finish: 'Finish',
      restartQuiz: 'Retake Quiz',
      certifiedBnsp: 'BNSP Accredited',
      skkniStandard: 'SKKNI No. 20/2024 Standard',
      fastResponse: 'Fast response during business hours',
      noObligation: '100% Free with zero obligation',
      flexibleSchedule: 'Flexible schedule (Evenings & Weekends)'
    },
    nav: {
      brandSubtitle: 'Indonesia Capital Market Professional Training & Certification Center (SKKNI No. 20/2024)',
      programs: 'Certification Programs',
      methodsAndStandards: 'Methods & Standards',
      guidanceFlow: 'Guidance Stages',
      bnspFlow: 'BNSP Flow',
      faq: 'FAQ',
      consultWaBtn: 'WA Consultation',
      mobilePrograms: 'Certification Schemes (WPPE, WPPE-P, WMI, WPEE, WAPERD)',
      mobileQuiz: '🎯 Quiz: Your Recommended Certification'
    },
    hero: {
      badge: 'Indonesian Capital Market Professional Certification Center',
      quote: '"A distinguished career in capital markets demands proven competencies and official regulatory licenses."',
      headlinePart1: 'Earn Your Official BNSP Competency Certificate at ',
      headlineHighlight: 'LSP IKEPAMI',
      subheadline:
        'Premier intensive training center for Indonesian capital market professions compliant with SKKNI No. 20/2024. Comprehensive 4-stage guidance from Technical Meeting, Interactive Classes (Public & Private 1-on-1), Interview Roleplay & Portfolio APL-01/02 Audit, through official competency assessment at LSP IKEPAMI.',
      btnConsult: 'Official WhatsApp Consultation (+62 851-2106-7147)',
      btnQuiz: 'Take Certification Recommendation Quiz',
      schemesHeader: 'SELECT KEY CAPITAL MARKET SCHEME:',
      badgeSkkni: '13 SKKNI No. 20/2024 Schemes',
      badgeAccreditation: 'Official LSP IKEPAMI (BNSP) Assessment',
      badgePassRate: '98.4% Alumni Passing Rate',
      badgeSchedule: 'Flexible Online & Offline Classes',
      schemes: [
        {
          code: 'WPPE',
          name: 'Securities Broker-Dealer Representative',
          role: 'Equity Broker & Dealing Room Trader (IDX)',
          duration: '12 Learning Hours',
          desc: 'Mandatory license for securities order execution, dealing room trading, technical/fundamental analysis, and brokerage operations at exchange member brokerages.'
        },
        {
          code: 'WPPE-P',
          name: 'Broker-Dealer Marketing Representative',
          role: 'Retail Equity Sales & Market Educator',
          duration: '10 Learning Hours',
          desc: 'Fast-track certification for retail client acquisition, customer onboarding KYC, and equity marketing across brokerage branch offices and investment fintechs.'
        },
        {
          code: 'WMI',
          name: 'Investment Manager Representative',
          role: 'Portfolio Manager & Senior Fund Manager',
          duration: '14 Learning Hours',
          desc: 'Highest professional credential for managing collective investment schemes (Mutual Funds, KPD, ETFs) and institutional asset allocation at Asset Management firms.'
        },
        {
          code: 'WPEE',
          name: 'Underwriting & Investment Banking Representative',
          role: 'Investment Banker & IPO Syndicate Lead',
          duration: '16 Learning Hours',
          desc: 'Specialized underwriting credentials for equity IPOs, corporate debt issuances, comprehensive due diligence, and corporate finance restructuring.'
        },
        {
          code: 'WAPERD',
          name: 'Mutual Fund Selling Agent Representative',
          role: 'Wealth Specialist & APERD Sales Consultant',
          duration: '6 Learning Hours',
          desc: 'Mandatory regulatory license for marketing mutual fund products at commercial banks (Priority / Wealth Management) and licensed APERD fintech platforms.'
        }
      ]
    },
    philosophy: {
      badge: 'Regulatory Standards & Compliance',
      title: 'Why Are SKKNI Standard Certifications Crucial?',
      desc: 'In the Indonesian capital market, professional standards and verified competencies are strictly governed. Operating as a broker, research analyst, fund manager, underwriter, or mutual fund sales agent requires formal national recognition aligned with SKKNI No. 20/2024.',
      strategicValueTitle: 'Strategic Value Delivered to You:',
      strategicValueDesc:
        '1. National Certificate of Competence bearing the Golden Garuda emblem from BNSP through LSP IKEPAMI examinations.\n2. Verified professional competency portfolio recognized across securities firms, commercial banks, and national asset managers.',
      pillars: [
        {
          title: 'SKKNI No. 20/2024',
          desc: 'Most up-to-date curriculum mapped directly to active competency units and Computer Assisted Test (CAT) question banks.',
          footer: '✓ 100% Syllabus Aligned'
        },
        {
          title: 'LSP IKEPAMI Assessment',
          desc: 'Official Professional Certification Body accredited by the National Professional Certification Board (BNSP) for national financial standards.',
          footer: '✓ Official BNSP License'
        },
        {
          title: '4-Stage Guidance Methodology',
          desc: 'Guiding candidates from Technical Meeting, Theory & Mock Exams (Public/Private), to Interview Roleplay & APL-01/02 Portfolio audits.',
          footer: '✓ Complete End-to-End Care'
        }
      ]
    },
    stages: {
      badge: '4-STAGE PROFESSIONAL CERTIFICATION ROADMAP',
      title: '4 Proven Stages Toward Your BNSP-Licensed LSP IKEPAMI Certificate',
      desc: 'Structured end-to-end mentoring: from Technical Meeting, Training Phase (Public & Private Class), Exam Prep Phase (Roleplay & Portfolio Documents), to official Competency Assessment at LSP IKEPAMI and issuance of the national BNSP certificate.',
      summaryCards: [
        {
          step: 'STAGE 01',
          title: 'Technical Meeting',
          desc: 'Scheme briefing & licensing roadmap'
        },
        {
          step: 'STAGE 02',
          title: 'Training Phase',
          desc: 'Public Class & Private 1-on-1 Class'
        },
        {
          step: 'STAGE 03',
          title: 'Exam Preparation',
          desc: 'Mock interview roleplay & portfolio audit'
        },
        {
          step: 'STAGE 04',
          title: 'LSP IKEPAMI Exam',
          desc: 'Official BNSP competency assessment'
        }
      ],
      tabOverview: 'Overview & Philosophy',
      tabCurriculum: 'Session Syllabus',
      tabDeliverables: 'Deliverables & Candidate Benefits',
      items: [
        {
          id: 'stage1',
          number: 1,
          name: 'Stage 1: Technical Meeting',
          subtitle: 'Scheme Briefing, Certification Roadmap, SKKNI Standards & Competency Matrix',
          badge: 'STAGE 1',
          focus: 'Focus: Scheme Orientation & SKKNI No. 20/2024 Standards',
          quote:
            '"A clear beginning: thoroughly understanding capital market competency schemes, administrative portfolio requirements, assessment schedules, and passing benchmarks at LSP IKEPAMI."',
          description:
            'Comprehensive onboarding and mapping session for all candidates to understand their chosen certification scheme (WPPE, WPPE-P, WMI, WPEE, WAPERD), SKKNI No. 20/2024 regulations, and LSP IKEPAMI examination guidelines.',
          whyThisStage:
            'Precise orientation ensures every participant sets realistic expectations, clarifies key milestones, and is administratively prepared from day one.',
          deliverables: [
            'Complete mapping guide for capital market certification schemes (WPPE, WPPE-P, WMI, WPEE, WAPERD)',
            'Detailed competency unit matrix compliant with SKKNI No. 20/2024',
            'Structured roadmap: Training → Exam Prep → Assessment at LSP IKEPAMI (BNSP)',
            'Administrative checklist and enrollment prerequisite review',
            'Official course modules distribution (Online / Offline) & dedicated mentoring group access'
          ],
          workshopTitle: 'Orientation & Certification Roadmap Briefing',
          workshopDesc:
            'Interactive briefing dissecting every phase of the Indonesian capital market professional certification process.',
          workshopTopics: [
            'Overview of Capital Market Schemes & Corresponding Career Profiles',
            'Indonesian Capital Market Regulatory Structure & SKKNI No. 20/2024 Standards',
            'Competency Assessment Workflow at Professional Certification Body (LSP IKEPAMI)',
            'Administrative Portfolio Documentation Preparation (APL-01 & APL-02)',
            'Online / Offline Delivery Mechanisms, Module Distribution, and Learning Schedule'
          ],
          mentoringTitle: 'Scheme Mapping & Administrative Advisory',
          mentoringDesc:
            'Dedicated Q&A session to confirm scheme alignment with career targets and initial document completeness.',
          mentoringFeatures: [
            'Tailored scheme mapping matching educational profile and target role',
            'Pre-assessment audit of participant credentials and professional background',
            'Setup guidance for testing tools and digital learning materials',
            'Scheduling confirmation for training classes (Public Class or Private Class)'
          ]
        },
        {
          id: 'stage2',
          number: 2,
          name: 'Stage 2: Training Phase (Public & Private Class)',
          subtitle: 'Public Class (Interactive Large Class) & Private Class (Intensive 1-on-1)',
          badge: 'STAGE 2',
          focus: 'Focus: Theory Mastery, Financial Analysis & Exchange Regulations',
          quote:
            '"Ultimate learning flexibility: join interactive Public Classes for peer collaboration, or choose exclusive Private Classes for 1-on-1 mastery with a senior practitioner."',
          description:
            'Comprehensive immersion in capital market theory, exchange trading mechanisms, fundamental and technical valuation, and professional ethics delivered through interactive Public Classes or customized 1-on-1 Private Classes.',
          whyThisStage:
            'A rock-solid theoretical foundation and regulatory mastery are non-negotiable for acing the CAT exam and assessor interviews.',
          deliverables: [
            'Flexible format options: Public Class (interactive cohort) or Private Class (1-on-1)',
            'Complete mastery of capital market theory & case studies per SKKNI No. 20/2024 standards',
            'Full digital course modules, formula reference cheat-sheets, and slide decks',
            '24/7 access to class recordings and Computer Assisted Test (CAT) simulation platform',
            'Extensive practice question bank with detailed rationales and trick question analyses'
          ],
          workshopTitle: 'Public Class (Interactive Cohort Sessions)',
          workshopDesc:
            'Intensive evening webinars (Executive Evening) or weekend cohorts featuring real market case studies.',
          workshopTopics: [
            'Securities Trading Mechanics & Institutional Market Infrastructure (IDX, KPEI, KSEI, OJK)',
            'Corporate Fundamental Financial Analysis, Equity Valuation & Macroeconomic Indicators',
            'Technical Market Analysis, Price Action, Chart Patterns & Sentiment Dynamics',
            'Regulatory Compliance, Capital Market Act, Financial Omnibus Act & SKKNI Code of Ethics',
            'Interactive CAT Mock Exam Simulations per Competency Unit'
          ],
          mentoringTitle: 'Private Class (Exclusive 1-on-1 Mentorship)',
          mentoringDesc:
            'Personalized one-on-one deep-dive sessions with flexible scheduling tailored to executive commitments.',
          mentoringFeatures: [
            'Flexible scheduling accommodating busy executive and professional agendas',
            'Dedicated 1-on-1 focus on topics you find most demanding or challenging',
            'In-depth dissection of real-world portfolio transactions and custom valuations',
            'Targeted CAT drills accompanied by immediate personal mentor feedback'
          ]
        },
        {
          id: 'stage3',
          number: 3,
          name: 'Stage 3: Exam Prep Phase (Roleplay & Documents)',
          subtitle: 'APL-01/02 Portfolio Assembly & Assessor Mock Interview Roleplay',
          badge: 'STAGE 3',
          focus: 'Focus: Portfolio Curation & Assessor Mock Interview',
          quote:
            '"The key to passing BNSP assessments lies in airtight portfolio evidence and fluid communication during assessor interviews. We ensure zero defects."',
          description:
            'Crucial individualized coaching to complete APL-01 & APL-02 forms, audit work portfolio evidence, and run simulated mock interviews before your official registration at LSP IKEPAMI.',
          whyThisStage:
            'Many candidates fail not from lack of intelligence, but from incomplete portfolio evidence or nervousness during assessor questioning. This phase eliminates that vulnerability.',
          deliverables: [
            'Full audit and finalization of APL-01 (Application for Certification) paperwork',
            'Structured completion of APL-02 (Self-Assessment) supported by validated work evidence',
            'Realistic Roleplay / Mock Interview replicating actual LSP IKEPAMI assessor interviews',
            'Direct corrective feedback and portfolio polishing from MMI certification curators',
            'Official candidate readiness recommendation issued to LSP IKEPAMI'
          ],
          workshopTitle: 'APL-01/02 Portfolio Evidence Clinic',
          workshopDesc:
            'Detailed walkthrough on structuring work evidence, diplomas, training certificates, and valuation reports.',
          workshopTopics: [
            'Evidence Quality Criteria (Valid, Authentic, Current, Sufficient - VATM)',
            'Techniques for Formulating Self-Assessment Responses Aligned with Performance Criteria',
            'Structuring Valuation and Transaction Analysis Reports as Supplementary Evidence',
            'Time Management & Professional Ethics During Face-to-Face Assessor Sessions',
            'Mitigating Challenging Questions on Integrity and OJK Capital Market Regulations'
          ],
          mentoringTitle: '1-on-1 Assessor Mock Interview Simulation',
          mentoringDesc:
            'Individual mock assessment sessions conducted by senior instructors certified as BNSP assessors.',
          mentoringFeatures: [
            'In-depth questioning reflecting exact competency units of your scheme',
            'Evaluation of communication clarity, argument conviction, and regulatory logic',
            'Readiness score rating and personalized action checklist prior to exam day',
            'Mental readiness coaching and practical advice for engaging diverse assessor profiles'
          ]
        },
        {
          id: 'stage4',
          number: 4,
          name: 'Stage 4: Certification Assessment (LSP IKEPAMI)',
          subtitle: 'Official Competency Examination at BNSP-Licensed LSP IKEPAMI',
          badge: 'STAGE 4',
          focus: 'Focus: Official Assessment & BNSP Certificate Issuance',
          quote:
            '"The culmination of your hard work: taking the official national competency assessment at LSP IKEPAMI to secure your Golden Garuda Certificate of Competence."',
          description:
            'Official examination conducted by LSP IKEPAMI licensed by the National Professional Certification Board (BNSP), featuring written Computer Assisted Tests (CAT) and formal portfolio interviews.',
          whyThisStage:
            'The official gateway to state recognition of your professional competency, unlocking licensing eligibility across the financial and securities industry.',
          deliverables: [
            'Official Examination Registration ID with LSP IKEPAMI',
            'Written Computer Assisted Test (CAT) and direct assessor portfolio evaluation',
            'Official Assessment Recommendation: Competent (K) status',
            'Issuance of National Certificate of Competence (BNSP) with Golden Garuda emblem (3-year validity)',
            'Free Repeat Mentoring commitment should any individual competency unit require retake'
          ],
          workshopTitle: 'LSP IKEPAMI Assessment Technical Briefing',
          workshopDesc:
            'Protocol briefing and day-of-assessment guidelines for LSP IKEPAMI examinations.',
          workshopTopics: [
            'Log-in Protocols & Navigation for Official LSP IKEPAMI CAT Testing Engine',
            'Exam Regulations (Online / Offline) & Candidate Identity Verification',
            'Assessor Interview Protocols & Presentation Expectations',
            'Assessment Result Announcement Protocol (Competent / Not Yet Competent)',
            'BNSP Certificate Issuance, Verification, and Physical Delivery Workflow'
          ],
          mentoringTitle: 'Exam Day Support & Free Retake Guarantee',
          mentoringDesc:
            'MMI team remains on standby ensuring seamless technical execution until your certificate is received.',
          mentoringFeatures: [
            'Dedicated technical helpdesk standing by throughout assessment hours',
            'Administrative assistance with official assessment report sign-off',
            'Free Repeat Mentoring Guarantee if any specific unit requires supplementary coaching',
            'Post-certification guidance on individual licensing and capital market career progression'
          ]
        }
      ]
    },
    catalog: {
      badge: 'Capital Market Professional Training & Certification',
      title: '13 Official Capital Market Professional Certification Schemes',
      desc: 'Complete list of 13 certification schemes compliant with SKKNI No. 20/2024 & Capital Market National Qualifications Framework (KKNI). Each scheme includes: (1) Official Training Description, (2) Complete Competency Units, (3) Candidate Prerequisites, and (4) Training Methods (Public Class, In-House, & Private 1-on-1). Portfolio APL-01/02 curation & LSP IKEPAMI assessment schedules supported directly via WhatsApp.',
      categories: {
        all: 'All Programs',
        brokerage: 'Brokerage (WPPE & WPPE-P)',
        investmentMgmt: 'Investment Mgmt & Products',
        underwriting: 'Underwriting & Corporate',
        analysis: 'Securities Analysis & Research',
        mutualFunds: 'Mutual Funds (WAPERD)',
        riskCompliance: 'Risk & Compliance'
      },
      publicClassTab: 'Public Class',
      privateClassTab: 'Private 1:1 Class',
      selectFormat: 'Select Training Format:',
      trainingMethodsTitle: 'Training Methods:',
      unitCount: 'SKKNI Units',
      careerProspectTitle: 'Career Prospects & Roles:',
      btnDetail: 'View Details & Syllabus',
      btnConsultCard: 'WhatsApp Consultation',
      officialTrainingMethod: 'Delivery Method:',
      onlineOfflineBadge: 'Online & Offline Classes'
    },
    quiz: {
      badge: 'CAPITAL MARKET CAREER DIAGNOSTIC',
      title: 'Capital Market Certification Recommendation Quiz',
      subtitle:
        'Answer 4 brief questions to pinpoint the ideal SKKNI No. 20/2024 certification scheme matching your career goals, background, and aspirational industry roles.',
      stepIndicator: 'Question',
      questionNumber: 'Question #',
      recommendedResultTitle: 'Your Recommended Certification Scheme',
      recommendedBadge: 'SKKNI NO. 20/2024 ANALYSIS RESULT',
      targetRoleLabel: 'Key Role / Job Profile:',
      keyUnitsLabel: 'Core SKKNI Competency Units:',
      btnConsultResult: 'Consult Quiz Results via WhatsApp',
      btnRetake: 'Retake Quiz',
      questions: [
        {
          id: 1,
          question: 'What is your primary target role in the capital market industry?',
          subtitle: 'Select the career focus that best aligns with your professional aspirations.',
          options: [
            {
              text: 'Equity Broker, Dealer, or Sales Trader at an Exchange Member Securities Firm',
              tag: 'Brokerage & Equity Trading'
            },
            {
              text: 'Retail Sales Specialist or Client Acquisition Officer at Brokerages or Fintech Platforms',
              tag: 'Sales & Client Acquisition'
            },
            {
              text: 'Portfolio Manager, Research Analyst, or Fund Manager at an Asset Management Firm',
              tag: 'Asset Management & Funds'
            },
            {
              text: 'Investment Banker, Equity/Debt IPO Underwriter, or Corporate Finance Specialist',
              tag: 'Investment Banking & Corporate Finance'
            },
            {
              text: 'Wealth Specialist or Relationship Manager for Mutual Funds in Banking / APERD Fintech',
              tag: 'Wealth Management & Mutual Funds'
            }
          ]
        },
        {
          id: 2,
          question: 'What is your current educational background and work experience?',
          subtitle: 'Your starting profile helps assess eligibility for APL-01/02 portfolio prerequisites.',
          options: [
            {
              text: 'Final-Year Student / Fresh Graduate / Beginner with no prior capital market experience',
              tag: 'Entry Level / Career Starter'
            },
            {
              text: 'Banking / Insurance / Financial Services Professional seeking expansion into securities',
              tag: 'Cross-Financial Industry'
            },
            {
              text: 'Active Equity Trader / Self-Directed Investor / Broker seeking formal regulatory credentials',
              tag: 'Active Trader / Securities Practitioner'
            },
            {
              text: 'Financial Analyst / Corporate Finance / M&A Legal Professional with 2+ years experience',
              tag: 'Experienced Financial Professional'
            }
          ]
        },
        {
          id: 3,
          question: 'Which learning schedule and format best fits your availability?',
          subtitle: 'MMI provides interactive Public Cohorts and exclusive Private 1-on-1 mentorship.',
          options: [
            {
              text: 'Interactive Public Class (Executive Evening / Weekend Webinars) with group case studies',
              tag: 'Interactive Public Webinar'
            },
            {
              text: 'Exclusive Private 1-on-1 Class with flexible scheduling alongside a Master Mentor',
              tag: 'Executive 1:1 Mentoring'
            },
            {
              text: 'Corporate In-House Class for colleagues within the same company or securities division',
              tag: 'Corporate In-House Batch'
            },
            {
              text: 'Flexible Online & Offline Sessions (Evenings / Weekends) with comprehensive modules',
              tag: 'Executive Learning Schedule'
            }
          ]
        },
        {
          id: 4,
          question: 'When do you aim to take the official assessment at LSP IKEPAMI (BNSP)?',
          subtitle: 'MMI hosts recurring monthly intensive preparation cohorts.',
          options: [
            {
              text: 'As Soon As Possible (This Month / Next 2–4 Weeks)',
              tag: 'Fast Track (Next Available Batch)'
            },
            {
              text: 'Within 1–2 Months (Steady learning pace alongside work commitments)',
              tag: 'Standard Pacing (1-2 Months)'
            },
            {
              text: 'Within 3–6 Months (Strategic career advancement / promotion prerequisite)',
              tag: 'Strategic Planning (Quarterly Target)'
            },
            {
              text: 'Flexible, pending portfolio assessment and CV evaluation by MMI experts',
              tag: 'Assessment-Ready Consultation'
            }
          ]
        }
      ],
      results: {
        WPPE: {
          tagline: 'Premier Gateway to Becoming a Licensed Securities Broker on the Indonesia Stock Exchange',
          summary:
            'Based on your profile, the WPPE (Securities Broker-Dealer Representative) scheme is your ideal pathway. This license is the mandatory legal prerequisite for executing securities orders, trading client assets, and working across brokerage dealing rooms.',
          careerProspects: [
            'Equity Sales & Broker Dealer at Securities Brokerages',
            'Institutional & Retail Equity Trader',
            'Dealing Room Specialist & Technical Market Analyst',
            'Securities Branch Manager / Office Head'
          ],
          keyUnits: [
            'Applying Risk Management in Securities Brokerage Operations',
            'Recommending Equity Securities to Retail and Institutional Clients',
            'Executing Equity Securities Orders within Brokerage Frameworks',
            'Monitoring Securities Portfolios & Clearing/Settlement Procedures'
          ],
          waMessage:
            'Hello Money Maker Institute (MMI) Team, I completed the certification quiz and received the WPPE (Securities Broker-Dealer Representative) recommendation. I would like to consult on the upcoming schedule and enrollment fees.'
        },
        'WPPE-P': {
          tagline: 'Fast-Track Certification for Securities Marketing, Client Acquisition & Education',
          summary:
            'The WPPE-P (Broker-Dealer Marketing Representative) scheme is tailored for professionals specializing in client acquisition, investor onboarding (KYC), retail branch operations, and investment fintech community building.',
          careerProspects: [
            'Retail Equity Sales Specialist at Securities Firms',
            'Fintech Investment Educator & Client Acquisition Officer',
            'Capital Market Customer Relationship Officer',
            'Financial Content Creator & Securities Brand Ambassador'
          ],
          keyUnits: [
            'Marketing Equity Securities Products to Retail Clients',
            'Opening Client Securities Accounts (KYC & Administrative Compliance)',
            'Delivering Capital Market Educational Briefings to Prospective Investors',
            'Complying with Marketing Codes of Conduct and OJK Consumer Protection Rules'
          ],
          waMessage:
            'Hello Money Maker Institute (MMI) Team, my quiz result recommended WPPE-P (Broker-Dealer Marketing Representative). Please share upcoming cohort dates and available class options.'
        },
        WMI: {
          tagline: 'Premier Credential for Asset Management, Collective Funds & Wealth Portfolios',
          summary:
            'The WMI (Investment Manager Representative) scheme is the most prestigious qualification for directing investment strategy, managing collective investment funds (Mutual Funds, ETFs), and overseeing institutional portfolios.',
          careerProspects: [
            'Portfolio Manager & Senior Fund Manager at Asset Management Firms',
            'Chief Investment Officer (CIO) at Family Offices & Pension Funds',
            'Research Director & Senior Equity/Fixed Income Analyst',
            'Investment Committee Member for Insurers and Sovereign Wealth Funds'
          ],
          keyUnits: [
            'Formulating Asset Allocation Plans & Investment Policy Statements (IPS)',
            'Conducting Deep Equity & Debt/Sukuk Valuation Analyses',
            'Executing Portfolio Rebalancing and Trade Strategies',
            'Evaluating Portfolio Performance and Applying Risk Mitigation Frameworks'
          ],
          waMessage:
            'Hello Money Maker Institute (MMI) Team, my quiz recommended the WMI (Investment Manager Representative) scheme. I would like to consult on APL-01/02 portfolio curation and class dates.'
        },
        WPEE: {
          tagline: 'Elite Certification for Investment Banking, IPO Underwriting & Corporate Finance',
          summary:
            'The WPEE (Underwriting Representative) credential refines strategic capabilities in public offering underwriting (Equity IPOs & Corporate Bonds), balance sheet restructuring, and transaction due diligence.',
          careerProspects: [
            'Investment Banker & Corporate Finance Officer at Underwriting Brokerages',
            'Lead Underwriter & Syndicate Manager for Public Offerings',
            'Capital Market Legal & Compliance Specialist',
            'Corporate Advisor for Corporate Actions (Rights Issues, Bonds, M&A)'
          ],
          keyUnits: [
            'Executing Lead Underwriting Service Proposals for Public Offerings',
            'Coordinating Due Diligence and Prospectus Assembly for Securities Issuance',
            'Conducting Comprehensive Equity & Fixed-Income Valuations for Issuers',
            'Managing Public Offerings and Exchange Listing Workflows'
          ],
          waMessage:
            'Hello Money Maker Institute (MMI) Team, my quiz result recommended WPEE (Underwriting Representative). Please share details regarding cohort schedules and LSP IKEPAMI assessment procedures.'
        },
        WAPERD: {
          tagline: 'Mandatory Credential for Mutual Fund Distribution in Banking & APERD Platforms',
          summary:
            'The WAPERD (Mutual Fund Selling Agent Representative) license is mandatory under OJK regulations for any relationship manager or sales consultant distributing mutual funds at commercial banks, wealth managers, and fintech platforms.',
          careerProspects: [
            'Priority Banking Wealth Specialist & Relationship Manager',
            'Mutual Fund Sales Consultant at Licensed Commercial Banks',
            'Fintech Mutual Fund Advisory & Wealth Success Officer',
            'Licensed Independent Financial Planner'
          ],
          keyUnits: [
            'Mastering Mutual Fund Product Structures & Client Risk Profiling',
            'Executing Mutual Fund Advisory and Sales Engagement',
            'Applying Consumer Protection and Anti-Money Laundering (AML/CFT) Mandates',
            'Adhering to Professional Ethical Standards for Mutual Fund Agents'
          ],
          waMessage:
            'Hello Money Maker Institute (MMI) Team, my quiz result recommended WAPERD. I would like to consult on exam preparation and upcoming class cohorts.'
        }
      }
    },
    roadmap: {
      badge: 'Legality & Accreditation',
      title: 'Structured BNSP Certification Roadmap at LSP IKEPAMI',
      desc: 'Every guidance phase at Money Maker Institute is engineered in lockstep with official BNSP assessment standards to ensure candidate confidence and optimal passing outcomes.',
      steps: [
        {
          step: '01',
          title: 'Technical Meeting & Orientation',
          institution: 'Money Maker Institute',
          desc: 'Comprehensive briefing on scheme pathways, SKKNI No. 20/2024 competency units, prerequisite verification, and licensing milestones.',
          badge: 'Stage 1: Orientation'
        },
        {
          step: '02',
          title: 'Training (Public / Private Class)',
          institution: 'Money Maker Institute',
          desc: 'Theoretical mastery, capital market instrument analytics, and CAT mock exam dissection via Public webinars or 1-on-1 Private coaching.',
          badge: 'Stage 2: Public / Private'
        },
        {
          step: '03',
          title: 'Exam Prep: Roleplay & Documents',
          institution: '1:1 MMI Mentoring',
          desc: 'Curating & auditing APL-01/02 portfolio evidence alongside realistic mock assessor interview simulations to ensure zero defects.',
          badge: 'Stage 3: Roleplay & Portfolio'
        },
        {
          step: '04',
          title: 'Assessment at LSP IKEPAMI',
          institution: 'LSP IKEPAMI (BNSP Licensed)',
          desc: 'Official Computer Assisted Test (CAT) and formal portfolio assessment interviews conducted by authorized LSP IKEPAMI assessors.',
          badge: 'Stage 4: LSP IKEPAMI'
        },
        {
          step: '05',
          title: 'BNSP Golden Garuda Certificate',
          institution: 'National Professional Certification Board',
          desc: 'Issuance of official National Certificate of Competence bearing the Golden Garuda emblem (3-year national validity).',
          badge: 'Verified Credential'
        },
        {
          step: '06',
          title: 'Personal Mentoring & Alumni Network',
          institution: 'Money Maker Institute Network',
          desc: 'Ongoing 1-on-1 WhatsApp career guidance covering individual regulatory licensing, credential maximization, and executive alumni connections.',
          badge: 'Post-Graduation Support'
        }
      ]
    },
    stats: {
      items: [
        { num: '4', label: 'Guidance Stages', sub: 'TM, Training, Exam Prep & LSP Exam' },
        { num: 'IKEPAMI', label: 'LSP IKEPAMI Exams', sub: 'Officially Licensed by BNSP' },
        { num: '1:1', label: 'Roleplay & Portfolio', sub: 'Evidence Audit & Mock Interview' },
        { num: 'Free', label: 'Repeat Guarantee', sub: 'Zero-Cost Retake Mentoring' },
        { num: 'BNSP', label: 'National Certificate', sub: 'SKKNI 20/2024 Quality Standard' }
      ]
    },
    testimonials: {
      badge: 'ALUMNI SUCCESS STORIES',
      title: 'Real Stories from Professionals Earning BNSP Credentials',
      desc: 'Financial professionals and executives who proved the effectiveness of Money Maker Institute’s structured 4-stage methodology.',
      items: [
        {
          id: 't-1',
          name: 'Dimas Prasetyo, WPPE',
          role: 'Institutional Equity Sales',
          company: 'PT Mirae Asset Sekuritas Indonesia',
          program: 'WPPE Program (Equity Broker)',
          quote:
            'The learning approach was direct and the assessment simulations were identical to the real LSP exams. Even without an accounting background, I passed as Competent on my very first attempt at LSP IKEPAMI.',
          avatarText: 'DP',
          badgeColor: '#4FAE58'
        },
        {
          id: 't-2',
          name: 'Sarah Amanda, WMI',
          role: 'Associate Portfolio Manager',
          company: 'PT Mandiri Manajemen Investasi',
          program: 'WMI Program (Investment Manager)',
          quote:
            'Asset allocation models and portfolio performance attribution were taught directly by senior fund managers. Not merely abstract formulas, but real industry insights that apply directly to my everyday responsibilities.',
          avatarText: 'SA',
          badgeColor: '#B8860B'
        },
        {
          id: 't-3',
          name: 'Rian Hidayat, S.E.',
          role: 'Founder & Managing Partner',
          company: 'Artha Capital Advisory',
          program: '1:1 Executive & Licensing Mentoring',
          quote:
            'After 6 years in brokerage, I launched my own boutique advisory firm. MMI’s guidance helped me establish compliance standard operating procedures, master latest regulations, and strengthen our professional credentials.',
          avatarText: 'RH',
          badgeColor: '#8FDE00'
        },
        {
          id: 't-4',
          name: 'Jessica Clarissa, WAPERD',
          role: 'Priority Banking Wealth Specialist',
          company: 'PT Bank Central Asia Tbk',
          program: 'WAPERD Program (Mutual Fund Agent)',
          quote:
            'Evening cohorts were a lifesaver for my demanding workday. The mock question bank was accurate, and the mentors patiently guided mutual fund risk profiling until I successfully secured my BNSP certificate.',
          avatarText: 'JC',
          badgeColor: '#4FAE58'
        },
        {
          id: 't-5',
          name: 'Budi Santoso',
          role: 'Private Investor & Ex-VP Finance',
          company: 'Independent Family Office',
          program: 'Portfolio Analysis & Investment Workshop',
          quote:
            'MMI’s stage methodology is completely logical. I learned how to diversify assets from active businesses into resilient multi-asset portfolios utilizing measurable analytical frameworks.',
          avatarText: 'BS',
          badgeColor: '#B8860B'
        }
      ]
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Frequently Asked Questions (FAQ)',
      desc: 'Everything you need to understand regarding Indonesian capital market certifications, SKKNI No. 20/2024 benchmarks, assessments at LSP IKEPAMI, and learning formats at Money Maker Institute.',
      searchPlaceholder: 'Search questions on certification, LSP IKEPAMI, or learning methods...',
      categories: {
        all: 'All Questions',
        sertifikasi: 'BNSP Certification',
        asesmen: 'Assessment & Passing',
        pembelajaran: 'Methods & Retakes',
        umum: 'Schedule & Inquiries'
      },
      items: [
        {
          id: 'faq-1',
          category: 'sertifikasi',
          question: 'What are the 4 guidance stages at Money Maker Institute?',
          answer:
            'MMI applies 4 structured guidance stages: (1) Technical Meeting: scheme orientation through SKKNI competency unit matrices; (2) Training Phase: interactive Public Cohorts and intensive 1-on-1 Private Classes; (3) Exam Prep Phase: APL-01/02 portfolio curation and assessor mock interview roleplays; (4) Certification Assessment: official examination at LSP IKEPAMI culminating in the issuance of the national Golden Garuda BNSP Competency Certificate.'
        },
        {
          id: 'faq-2',
          category: 'sertifikasi',
          question: 'What is LSP IKEPAMI and what legal validity does its certificate carry?',
          answer:
            'LSP IKEPAMI (Lembaga Sertifikasi Profesi Ikatan Konsultan & Eksekutif Pasar Modal Indonesia) is an official professional certification body licensed by the National Professional Certification Board (BNSP). Certificates issued carry the Golden Garuda emblem, are valid nationally for 3 years, and serve as the authoritative standard for capital market competence in Indonesia.'
        },
        {
          id: 'faq-3',
          category: 'pembelajaran',
          question: 'What is the difference between Public Class and Private Class?',
          answer:
            'Public Class is conducted as dynamic cohort webinars (Executive Evenings & Weekends) featuring cross-candidate case studies. Private Class offers exclusive 1-on-1 mentorship with a senior master instructor on a flexible timetable customized around executive and professional schedules.'
        },
        {
          id: 'faq-4',
          category: 'pembelajaran',
          question: 'How is the Exam Prep Phase (Roleplay & Documents) conducted?',
          answer:
            'In this phase, participants receive hands-on curation for completing APL-01 & APL-02 forms, verifying portfolio evidence, and undertaking simulated roleplays replicating actual LSP IKEPAMI assessor interviews. We ensure zero administrative and communication defects prior to exam scheduling.'
        },
        {
          id: 'faq-5',
          category: 'sertifikasi',
          question: 'Can beginners or non-economics graduates take WPPE / WMI / WAPERD certifications?',
          answer:
            'Absolutely! Our curriculum starts from core concepts using practical analogies and real market cases. Over 45% of our successful alumni hold degrees in Engineering, Law, Communication, Arts, and other non-economic disciplines who now thrive in securities and investment management.'
        },
        {
          id: 'faq-6',
          category: 'asesmen',
          question: 'What support is provided after being recommended Competent (K) at LSP IKEPAMI?',
          answer:
            'Once recommended Competent (K) by LSP IKEPAMI assessors, BNSP issues your physical certificate bearing the Golden Garuda emblem. For career advancement advisory and personalized consulting, MMI experts remain available via 1-on-1 WhatsApp guidance.'
        },
        {
          id: 'faq-7',
          category: 'pembelajaran',
          question: 'What if I am assessed as Not Yet Competent (BK) on a specific unit at LSP IKEPAMI?',
          answer:
            'We provide a Free Repeat Mentoring guarantee! If any competency unit is assessed as Not Yet Competent (BK), you are entitled to supplementary coaching for that specific unit at zero additional cost until you are fully prepared and certified Competent (K).'
        },
        {
          id: 'faq-8',
          category: 'umum',
          question: 'How can I obtain the latest schedule, tuition fees, and registration details?',
          answer:
            'All upcoming cohort dates (Executive Evening & Weekend), training format options (Public vs. Private 1-on-1), tuition breakdowns, and promotional offers are serviced directly via our official WhatsApp consultation line at +62 851-2106-7147.'
        }
      ]
    },
    finalCta: {
      badge: 'FREE CERTIFICATION CONSULTATION',
      title: 'Ready to Take the Decisive Step in Capital Market Certification?',
      desc: 'Consult your certification scheme options (WPPE, WPPE-P, WMI, WPEE, WAPERD), upcoming cohort dates, or review the SKKNI No. 20/2024 syllabus with MMI advisors — 100% free with zero obligation.',
      btnWa: 'Consult via WhatsApp (+62 851-2106-7147)',
      btnForm: 'Program Consultation Form',
      feature1: 'Prompt response during business hours',
      feature2: 'Complete 4-Stage Guidance',
      feature3: 'Free Repeat Mentoring Guarantee'
    },
    footer: {
      brandDesc:
        'Premier intensive training and certification center for Indonesian capital market professions compliant with SKKNI No. 20/2024. Mentoring candidates to master exchange competencies, assemble APL-01/02 portfolios, and attain official BNSP credentials at LSP IKEPAMI.',
      waLabel: 'WhatsApp: +62 851-2106-7147',
      address: 'Jakarta, Indonesia',
      navTitle: 'Quick Links',
      schemesTitle: 'Capital Market Schemes',
      copyright: '© 2026 Money Maker Institute (MMI). All rights reserved.',
      standards: 'SKKNI No. 20/2024 Standard',
      accreditation: 'LSP IKEPAMI Assessment (BNSP)',
      consultation: '1:1 Personal Consultation'
    },
    modals: {
      consultation: {
        badge: 'CERTIFICATION ADVISORY & ENROLLMENT',
        title: 'Capital Market Certification Consultation',
        subtitle:
          'Discuss SKKNI No. 20/2024 certification schemes and LSP IKEPAMI assessment preparations with an MMI advisor via WhatsApp.',
        nameLabel: 'Your Full Name',
        namePlaceholder: 'e.g., Jonathan Davis, CFA',
        programLabel: 'Certification Scheme Choice',
        formatLabel: 'Preferred Training Format',
        backgroundLabel: 'Educational / Professional Background',
        backgroundOptions: [
          'Finance & Banking Professional',
          'Student / Fresh Graduate',
          'Independent Trader / Investor',
          'Equity Broker / Securities Practitioner',
          'Other (Non-Economics Background)'
        ],
        notesLabel: 'Additional Notes or Questions (Optional)',
        notesPlaceholder: 'Enter your inquiries regarding schedules, portfolio requirements, or fees...',
        submitBtn: 'Proceed to Official WhatsApp Consultation',
        disclaimer: 'This form connects you directly to the official WhatsApp line of Money Maker Institute.'
      },
      detail: {
        close: 'Close',
        tabs: {
          desc: '1. Description & Prospects',
          units: '2. SKKNI Competency Units',
          requirements: '3. Candidate Requirements',
          methods: '4. Training Methods & Fees'
        },
        targetAudienceTitle: 'Target Program Audience:',
        careerProspectsTitle: 'Career Opportunities & Target Roles:',
        unitsTitle: 'Complete List of Competency Units',
        requirementsTitle: 'Assessment Candidate Prerequisites',
        methodsTitle: 'Training Delivery Methods & Schemes',
        pricingTitle: 'Investment & Schedule Details',
        deliveryModeLabel: 'DELIVERY MODE:',
        languageLabel: 'INSTRUCTION LANGUAGE:',
        btnCheckQualification: 'Evaluate CV Qualifications',
        btnConsultScheme: 'Inquire About This Scheme via WhatsApp'
      }
    }
  }
};
