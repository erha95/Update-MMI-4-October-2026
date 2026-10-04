import { StageInfo } from '../types';

export const STAGES_DATA: StageInfo[] = [
  {
    id: 'stage1',
    number: 1,
    slug: 'technical-meeting',
    name: 'Tahap 1: Technical Meeting',
    subtitle: 'Penjelasan Skema, Alur Sertifikasi, Standar SKKNI & Matriks Kompetensi',
    ageBadge: 'TAHAP 1',
    focusFlag: 'Fokus: Orientasi Skema & Standar Kompetensi SKKNI No. 20/2024',
    flagType: 'stage1',
    accentColor: '#4FAE58',
    quote: '"Langkah awal yang terarah: memahami secara menyeluruh skema kompetensi pasar modal, persyaratan portofolio dokumen, jadwal asesmen, hingga standar kelulusan di LSP IKEPAMI."',
    description: 'Sesi pengenalan dan pemetaan komprehensif bagi seluruh peserta untuk memahami skema sertifikasi pilihan (WPPE, WPPE-P, WMI, WPEE, WAPERD), regulasi SKKNI No. 20/2024, standar asesmen LSP IKEPAMI, serta roadmap sertifikasi kompetensi.',
    longDescription: 'Pada Technical Meeting, tim instruktur dan konsultan MMI memandu Anda membedah alur program secara terstruktur. Kami menjelaskan peta unit kompetensi aktif, persiapan berkas administrasi APL-01/02, jadwal pelatihan, mekanisme latihan soal CAT, serta panduan teknis menghadapi asesmen di LSP IKEPAMI.',
    whyThisStage: 'Orientasi yang jelas memastikan setiap peserta memiliki ekspektasi yang tepat, memahami jadwal, dan siap secara administratif sejak hari pertama.',
    keyDeliverables: [
      'Panduan lengkap peta skema sertifikasi pasar modal (WPPE, WPPE-P, WMI, WPEE, WAPERD)',
      'Penjelasan matriks unit kompetensi berstandar SKKNI No. 20/2024',
      'Roadmap terstruktur: Pelatihan → Persiapan Ujian → Uji Kompetensi di LSP IKEPAMI (BNSP)',
      'Checklist berkas awal dan syarat administrasi pendaftaran',
      'Distribusi modul materi pelatihan resmi (Online / Offline) & grup bimbingan'
    ],
    workshop: {
      title: 'Sesi Orientasi & Bedah Roadmap Sertifikasi',
      description: 'Sesi pemaparan interaktif yang mengupas tuntas seluruh tahapan sertifikasi profesi pasar modal Indonesia.',
      topics: [
        'Pengenalan Skema Sertifikasi Pasar Modal & Profil Jabatan Kerja Terkait',
        'Struktur Regulasi Pasar Modal Indonesia & Standar Mutu SKKNI No. 20/2024',
        'Alur Asesmen Uji Kompetensi di Lembaga Sertifikasi Profesi (LSP IKEPAMI)',
        'Persiapan Berkas Administrasi Portofolio Asesmen (APL-01 & APL-02)',
        'Mekanisme Pelatihan Online / Offline, Distribusi Materi, dan Jadwal Pembelajaran'
      ]
    },
    mentoring: {
      title: 'Konsultasi Pemetaan Skema & Administrasi',
      description: 'Sesi tanya-jawab untuk memastikan kesesuaian skema dengan target karier serta kelengkapan dokumen awal.',
      features: [
        'Pemetaan skema yang paling relevan dengan profil pendidikan & target profesi',
        'Verifikasi awal berkas administrasi dan riwayat pengalaman peserta',
        'Panduan instalasi perangkat & aplikasi pendukung pembelajaran',
        'Penetapan jadwal kelas pelatihan (Public Class atau Private Class)'
      ]
    }
  },
  {
    id: 'stage2',
    number: 2,
    slug: 'tahap-pelatihan',
    name: 'Tahap 2: Tahap Pelatihan (Public & Private Class)',
    subtitle: 'Public Class (Kelas Besar) & Private Class (Kelas 1 on 1 Intensif)',
    ageBadge: 'TAHAP 2',
    focusFlag: 'Fokus: Penguasaan Materi Teori, Analisis & Regulasi',
    flagType: 'stage2',
    accentColor: '#8FDE00',
    quote: '"Fleksibilitas belajar dengan dua opsi terbaik: Public Class untuk kolaborasi interaktif kelas besar, atau Private Class untuk pendampingan eksklusif 1 on 1 bersama master mentor."',
    description: 'Pembekalan materi komprehensif teori pasar modal, regulasi bursa, mekanisme transaksi, analisis fundamental/teknikal, dan kode etik profesi melalui format Public Class (kelas besar) atau Private Class (1 on 1).',
    longDescription: 'Peserta dibimbing langsung oleh praktisi pasar modal berlisensi dan berpengalaman. Materi dikemas secara sistematis berbasis SKKNI No. 20/2024 dan dilengkapi ribuan bank soal Computer Assisted Test (CAT). Bagi yang membutuhkan privasi dan fleksibilitas jadwal, tersedia opsi Private Class 1 on 1 dengan kurikulum yang di-customize khusus.',
    whyThisStage: 'Fondasi teori dan pemahaman regulasi yang kuat adalah modal utama untuk lulus ujian CAT dan asesmen wawancara dengan nilai optimal.',
    keyDeliverables: [
      'Pilihan format belajar: Public Class (kelas besar interaktif) atau Private Class (1 on 1)',
      'Penguasaan materi teori & studi kasus pasar modal sesuai standar SKKNI No. 20/2024',
      'Modul digital lengkap, rangkuman rumus, dan slide presentasi materi',
      'Akses 24/7 ke rekaman kelas dan platform simulasi ujian CAT (Computer Assisted Test)',
      'Bank soal latihan dengan pembahasan detail dan analisis tipe soal jebakan'
    ],
    workshop: {
      title: 'Public Class (Kelas Besar Interaktif)',
      description: 'Webinar interaktif intensif malam hari (Executive Evening) atau akhir pekan (Weekend) dengan diskusi kasus riil.',
      topics: [
        'Mekanisme Perdagangan Efek & Struktur Kelembagaan Bursa (BEI, KPEI, KSEI, OJK)',
        'Analisis Fundamental Keuangan Emiten, Valuasi Saham & Indikator Makroekonomi',
        'Analisis Teknikal Pasar, Price Action, Chart Patterns & Market Sentiment',
        'Regulasi Kepatuhan, UU Pasar Modal, UU P2SK & Kode Etik Profesi Standar SKKNI',
        'Simulasi Soal Ujian CAT Interaktif per Unit Kompetensi'
      ]
    },
    mentoring: {
      title: 'Private Class (Kelas 1 on 1 Intensif Eksklusif)',
      description: 'Sesi mentoring eksklusif satu-lawan-satu dengan waktu yang fleksibel dan pendalaman materi sesuai kebutuhan peserta.',
      features: [
        'Jadwal belajar fleksibel disesuaikan dengan kesibukan profesional / eksekutif',
        'Pendalaman materi 1 on 1 pada topik-topik yang dirasa paling menantang',
        'Bedah studi kasus riil portofolio transaksi dan analisa spesifik',
        'Drill soal CAT terarah dengan feedback personal instan dari mentor'
      ]
    }
  },
  {
    id: 'stage3',
    number: 3,
    slug: 'persiapan-ujian',
    name: 'Tahap 3: Tahap Persiapan Ujian (Roleplay & Dokumen)',
    subtitle: 'Penyusunan Portofolio Berkas APL-01/02 & Simulasi Roleplay Asesor',
    ageBadge: 'TAHAP 3',
    focusFlag: 'Fokus: Kurasi Portofolio & Mock Interview Asesor',
    flagType: 'stage3',
    accentColor: '#B8860B',
    quote: '"Kunci kelulusan asesmen BNSP terletak pada keselarasan bukti portofolio dan kelancaran saat wawancara asesor. Di tahap ini, kami mengawal Anda hingga zero-defect."',
    description: 'Pendampingan intensif kurasi dokumen bukti kompetensi (Portofolio APL-01 & APL-02) serta simulasi roleplay wawancara asesor (Mock Assessment) agar peserta percaya diri dan siap 100%.',
    longDescription: 'Banyak peserta mengalami kendala bukan karena tidak memahami teori, melainkan karena penyusunan dokumen portofolio yang kurang tepat atau grogi saat diuji asesor. Di tahap ini, mentor kami memeriksa satu per satu dokumen bukti kerja Anda, membimbing simulasi roleplay tanya-jawab asesor, dan memberikan catatan perbaikan langsung hingga berkas dinyatakan siap uji.',
    whyThisStage: 'Simulasi roleplay dan verifikasi dokumen portofolio yang ketat meminimalisir risiko status Belum Kompeten (BK) pada saat asesmen resmi.',
    keyDeliverables: [
      'Penyusunan dan validasi lengkap berkas portofolio bukti kompetensi (APL-01 & APL-02)',
      'Dokumen pendukung (Laporan Analisis Efek, Form Transaksi, Profiling Nasabah, dll)',
      'Sesi simulasi Roleplay / Mock Interview 1 on 1 menirukan skenario asesmen riil',
      'Evaluasi detail dan feedback kesiapan sebelum didaftarkan ke LSP IKEPAMI',
      'Jaminan Free Repeat Mentoring jika memerlukan bimbingan tambahan'
    ],
    workshop: {
      title: 'Workshop: Bedah Portofolio & Standar Bukti Kompetensi',
      description: 'Panduan teknis pengumpulan dan penyusunan bukti relevan (Portofolio) yang diakui oleh asesor uji kompetensi.',
      topics: [
        'Standar Format & Verifikasi Berkas APL-01 (Permohonan) & APL-02 (Asesmen Mandiri)',
        'Penyusunan Bukti Portofolio Transaksi Efek, Analisis Riset & Pelayanan Nasabah',
        'Teknik Menjawab Pertanyaan Studi Kasus & Pertanyaan Lisan Asesor',
        'Etika Profesional, Gesture & Tata Krama dalam Sesi Wawancara Asesmen',
        'Checklist Final Pra-Pendaftaran Ujian Sertifikasi'
      ]
    },
    mentoring: {
      title: 'Mentoring 1:1: Roleplay & Simulasi Wawancara Asesor',
      description: 'Simulasi roleplay satu-lawan-satu secara mendalam menirukan pertanyaan asli asesor LSP IKEPAMI.',
      features: [
        'Simulasi roleplay wawancara asesor 1 on 1 hingga lancar dan menguasai materi',
        'Audit dan review per lembar dokumen portofolio oleh mentor ahli',
        'Latihan studi kasus penyelesaian sengketa transaksi efek & etika pasar modal',
        'Rekomendasi kelayakan resmi sebelum jadwal ujian LSP IKEPAMI diterbitkan'
      ]
    }
  },
  {
    id: 'stage4',
    number: 4,
    slug: 'ujian-lsp-ikepami',
    name: 'Tahap 4: Tahap Ujian Sertifikasi di LSP IKEPAMI',
    subtitle: 'Pelaksanaan Asesmen Resmi di LSP IKEPAMI & Penerbitan Sertifikat BNSP',
    ageBadge: 'TAHAP 4',
    focusFlag: 'Fokus: Uji LSP IKEPAMI & Sertifikat Kompetensi BNSP',
    flagType: 'stage4',
    accentColor: '#0F2415',
    quote: '"Puncak pencapaian: dinyatakan Kompeten (K) di LSP IKEPAMI dan menerima Sertifikat Kompetensi Profesi resmi BNSP berlogo Garuda Emas."',
    description: 'Pelaksanaan ujian asesmen kompetensi resmi di LSP IKEPAMI (Lembaga Sertifikasi Profesi Ikatan Konsultan & Eksekutif Pasar Modal Indonesia / terlisensi BNSP) untuk meraih sertifikasi keahlian standar nasional.',
    longDescription: 'Peserta mengikuti rangkaian asesmen resmi di LSP IKEPAMI (ujian tertulis CAT dan wawancara portofolio bersama asesor profesional). Setelah dinyatakan Kompeten (K), BNSP menerbitkan Sertifikat Kompetensi Kerja berlogo Garuda emas yang berlaku dan diakui secara nasional. Tim MMI senantiasa mendampingi konsultasi personal bagi alumni.',
    whyThisStage: 'Sertifikat Kompetensi resmi BNSP dari LSP IKEPAMI adalah pengakuan kompetensi profesi standar nasional yang diakui oleh seluruh industri pasar modal Indonesia.',
    keyDeliverables: [
      'Pelaksanaan ujian asesmen resmi terstandar di LSP IKEPAMI',
      'Hasil Asesmen resmi: Dinyatakan Kompeten (K) pada seluruh unit kompetensi',
      'Sertifikat Kompetensi Profesi resmi BNSP berlogo Garuda (Masa berlaku 3 tahun)',
      'Konsultasi personal pasca-pelatihan bersama master mentor MMI',
      'Akses komunitas alumni profesional pasar modal Money Maker Institute'
    ],
    workshop: {
      title: 'Briefing Teknis Pelaksanaan Ujian LSP IKEPAMI',
      description: 'Panduan teknis tata tertib ujian, perangkat asesmen, dan rundown pelaksanaan ujian resmi di LSP IKEPAMI.',
      topics: [
        'Tata Tertib & Prosedur Pelaksanaan Uji Kompetensi di LSP IKEPAMI',
        'Mekanisme Pengerjaan Ujian Tertulis CAT & Sesi Asesmen Wawancara',
        'Prosedur Banding & Pengumuman Hasil Asesmen Kelulusan',
        'Alur Penerbitan Sertifikat Kompetensi BNSP Berlogo Garuda',
        'Sesi Evaluasi & Bimbingan Pasca-Ujian Bersama Mentor'
      ]
    },
    mentoring: {
      title: 'Pendampingan Hari Ujian & Helpdesk Asesmen',
      description: 'Support teknis komprehensif pada hari pelaksanaan ujian di LSP IKEPAMI dan bimbingan kelulusan.',
      features: [
        'Helpdesk pendampingan teknis saat pelaksanaan ujian di LSP IKEPAMI',
        'Garansi Free Repeat Mentoring jika terdapat unit kompetensi yang perlu diulang',
        'Verifikasi kelengkapan berkas uji portofolio sebelum diserahkan ke asesor',
        'Konsultasi personal pasca-ujian melalui sesi direct mentoring WhatsApp',
        'Akses eksklusif ke jejaring alumni MMI & informasi industri pasar modal'
      ],
      certificationNotice: 'Uji kompetensi diselenggarakan resmi oleh LSP IKEPAMI (Lembaga Sertifikasi Profesi Ikatan Konsultan & Eksekutif Pasar Modal Indonesia) berlisensi BNSP.'
    }
  }
];
