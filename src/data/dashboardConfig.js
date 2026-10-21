/**
 * ============================================================================
 * KONFIGURASI BERPUSAT: DASHBOARD PBS PJ3 (SK TAMAN PERMAS JAYA 3)
 * ============================================================================
 * Fail ini menguruskan semua pautan URL, dokumen rujukan, makluman terkini,
 * takwim pentaksiran, senarai semak filing dan indeks pengurusan dokumen.
 *
 * PANDUAN KEMAS KINI UNTUK PENYELARAS:
 * 1. Masukkan pautan URL sebenar di dalam tanda petikan "" pada nilai yang berkenaan.
 * 2. Biarkan nilai sebagai "" (kosong) jika pautan belum ditetapkan.
 *    Sistem akan memaparkan status "Pautan belum ditetapkan" secara automatik
 *    dan menyahaktifkan butang supaya tiada pautan palsu atau rosak.
 * 3. Jangan letakkan data peribadi murid, kertas soalan sulit atau skema
 *    pemarkahan terkawal pada pautan terbuka.
 * ============================================================================
 */

window.DASHBOARD_PBS_CONFIG = {
  schoolIdentity: {
    siteName: "Dashboard PBS PJ3",
    fullName: "Pusat Rujukan Pentaksiran Berasaskan Sekolah",
    schoolName: "SK Taman Permas Jaya 3",
    schoolCode: "JBA1092",
    identityBadge: "PJ3 BEST",
    slogan: "Kerja Sepasukan Pacu Kecemerlangan",
    introText:
      "Satu pusat rujukan untuk akses dokumen, instrumen, takwim dan pengurusan pentaksiran sekolah.",
    // Nota Aset: Letakkan fail logo rasmi di public/images/logo-pj3.png.
    // Jika dikosongkan ("") atau imej gagal dimuatkan, kotak "LOGO RASMI PJ3" akan dipaparkan secara automatik.
    officialLogoPath: "public/images/logo-pj3.png",
    heroBannerPath: "public/images/school-hero.jpg",
    footerBannerPath: "public/images/footer-banner.jpg",
  },

  /**
   * PAUTAN UTAMA PORTAL & MODUL (Isi URL sebenar apabila telah disahkan)
   */
  dashboardLinks: {
    // 1. PBD (Pentaksiran Bilik Darjah) — 2026 & Rujukan Utama
    PBD_DASHBOARD_URL: "https://canva.link/mypbd-sktpj3-2026",
    pbdPanduanUrl: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    pbdTemplatSekolahUrl: "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
    pbdAnalisisUrl: "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
    pbdPelaporanUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
    pbdDskpPanitiaUrl: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
    pbdInstrumenMutuUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",

    // 2. PAJSK (Pentaksiran Aktiviti Jasmani, Sukan & Kokurikulum)
    PAJSK_DASHBOARD_URL: "",
    pajskPanduanUrl: "",
    pajskBorangRekodUrl: "",

    // 3. Matriks Pembelajaran Tahun 4
    MATRIKS_DASHBOARD_URL: "",
    matriksTakwimUrl: "",
    matriksJawatankuasaUrl: "",
    matriksPengurusanBahanUrl: "",
    matriksPengawasanKehadiranUrl: "",
    matriksPemeriksaanUrl: "",
    matriksAnalisisPelaporanUrl: "",
    matriksDokumentasiSusulanUrl: "",

    // 4. PPsi (Pentaksiran Psikometrik)
    PPSI_PORTAL_URL: "",
    ppsiPanduanUrl: "",
    ppsiInstrumenUrl: "",
    ppsiDokumenSokonganUrl: "",
    ppsiMaklumanPelaksanaanUrl: "",

    // 5. SEGAK & BMI 5–9 Tahun (Subbahagian Berasingan)
    segakPanduanUrl: "",
    segakInstrumenBorangUrl: "",
    segakRekodAnalisisUrl: "",
    segakTindakanSusulanUrl: "",

    bmiPanduanRujukanUrl: "",
    bmiRekodTemplatUrl: "",
    bmiAnalisisPelaporanUrl: "",
    bmiTindakanSusulanUrl: "",

    // 6. Penjaminan Mutu PBS (6 Komponen)
    mutuPemantauanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuPengesananUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuPenyelarasanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuPementoranUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuModerasiUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
    mutuTindakanSusulanUrl: "",

    // 7. Senarai Semak Filing (Muat Turun)
    // Hanya aktifkan (true) apabila fail Excel sebenar telah diletakkan di public/docs/
    filingCombinedExcelPath: "public/docs/Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx",
    filingCombinedExcelAvailable: false,
    filingPbsIndividualUrl: "",
    filingPbdIndividualUrl: "",
    filingMatriksIndividualUrl: "",

    // 8. Folder Digital Pengurusan Dokumen
    mainPbsDriveFolderUrl: "",
  },

  /**
   * PENGURUSAN PBD MENGIKUT SESI AKADEMIK / ARKIB TAHUN SEBELUMNYA
   * Membolehkan guru menyemak Rekod Transit, Analisis PBD dan Dialog Prestasi
   * mengikut tahun semasa (2026) serta arkib tahun-tahun sebelumnya (2025, 2024).
   */
  pbdYearlyArchives: [
    {
      year: "2026",
      label: "Sesi Akademik 2026 (Semasa)",
      isCurrent: true,
      dashboardUrl: "https://canva.link/mypbd-sktpj3-2026",
      rekodTransitUrl: "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
      analisisPbdUrl: "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
      dialogPrestasiUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
      dskpPanitiaUrl: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
      instrumenMutuUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
      panduanPelaksanaanUrl: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    },
    {
      year: "2025",
      label: "Arkib Sesi Akademik 2025",
      isCurrent: false,
      dashboardUrl: "",
      rekodTransitUrl: "",
      analisisPbdUrl: "",
      dialogPrestasiUrl: "",
      dskpPanitiaUrl: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
      instrumenMutuUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
      panduanPelaksanaanUrl: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    },
    {
      year: "2024",
      label: "Arkib Sesi Akademik 2024",
      isCurrent: false,
      dashboardUrl: "",
      rekodTransitUrl: "",
      analisisPbdUrl: "",
      dialogPrestasiUrl: "",
      dskpPanitiaUrl: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
      instrumenMutuUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
      panduanPelaksanaanUrl: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    },
  ],

  /**
   * 10 KAD MENU UTAMA (Mengikut jadual Seksyen 4.2 Spesifikasi)
   */
  mainMenuCards: [
    {
      id: "01",
      key: "pbd",
      title: "PBD",
      fullTitle: "Pentaksiran Bilik Darjah (PBD)",
      summary: "Rekod, pelaporan dan panduan PBD",
      actionLabel: "Buka Halaman & Pautan PBD",
      route: "/pbd",
      externalUrlKey: "PBD_DASHBOARD_URL",
      icon: "book-open-check",
      theme: "blue",
    },
    {
      id: "02",
      key: "pajsk",
      title: "PAJSK",
      fullTitle: "Pentaksiran Aktiviti Jasmani, Sukan & Kokurikulum",
      summary: "Pentaksiran aktiviti jasmani, sukan dan kokurikulum",
      actionLabel: "Buka Halaman & Pautan PAJSK",
      route: "/pajsk",
      externalUrlKey: "PAJSK_DASHBOARD_URL",
      icon: "trophy",
      theme: "emerald",
    },
    {
      id: "03",
      key: "matriks",
      title: "Matriks Pembelajaran Tahun 4",
      fullTitle: "Matriks Pembelajaran Tahun 4",
      summary: "Pengurusan pentaksiran yang sedia ada",
      actionLabel: "Buka Pengurusan Matriks",
      route: "/matriks",
      externalUrlKey: "MATRIKS_DASHBOARD_URL",
      icon: "layout-grid",
      theme: "amber",
    },
    {
      id: "04",
      key: "ppsi",
      title: "PPsi",
      fullTitle: "Pentaksiran Psikometrik (PPsi)",
      summary: "Pautan dan bahan rujukan berkaitan PPsi",
      actionLabel: "Buka Halaman PPsi",
      route: "/ppsi",
      externalUrlKey: "PPSI_PORTAL_URL",
      icon: "brain-circuit",
      theme: "purple",
    },
    {
      id: "05",
      key: "segak-bmi",
      title: "SEGAK & BMI 5–9 Tahun",
      fullTitle: "SEGAK & BMI 5–9 Tahun",
      summary: "Halaman induk dengan subbahagian SEGAK dan BMI yang berasingan",
      actionLabel: "Buka Halaman Khusus",
      route: "/segak-bmi",
      icon: "activity",
      theme: "rose",
    },
    {
      id: "06",
      key: "takwim",
      title: "Takwim Pentaksiran",
      fullTitle: "Takwim Pentaksiran",
      summary: "Jadual dan tarikh penting yang telah disahkan",
      actionLabel: "Buka Halaman Takwim",
      route: "/takwim",
      icon: "calendar-days",
      theme: "red",
    },
    {
      id: "07",
      key: "penjaminan-mutu",
      title: "Penjaminan Mutu PBS",
      fullTitle: "Penjaminan Mutu PBS",
      summary: "Pemantauan, pengesanan, penyelarasan, pementoran dan moderasi",
      actionLabel: "Buka Penjaminan Mutu",
      route: "/penjaminan-mutu",
      icon: "shield-check",
      theme: "indigo",
    },
    {
      id: "08",
      key: "pusat-rujukan",
      title: "Pusat Rujukan PBS",
      fullTitle: "Pusat Rujukan PBS",
      summary: "Panduan, surat siaran, borang dan instrumen",
      actionLabel: "Buka Pusat Rujukan",
      route: "/pusat-rujukan",
      icon: "library",
      theme: "sky",
    },
    {
      id: "09",
      key: "senarai-semak",
      title: "Senarai Semak Filing",
      fullTitle: "Senarai Semak Filing",
      summary: "Senarai semak filing PBS, PBD dan Matriks",
      actionLabel: "Buka Halaman Muat Turun",
      route: "/senarai-semak",
      icon: "clipboard-check",
      theme: "teal",
    },
    {
      id: "10",
      key: "pengurusan-dokumen",
      title: "Pengurusan Dokumen",
      fullTitle: "Pengurusan Dokumen",
      summary: "Folder digital, indeks dan pautan dokumen",
      actionLabel: "Buka Pengurusan Dokumen",
      route: "/pengurusan-dokumen",
      icon: "folder-kanban",
      theme: "orange",
    },
  ],

  /**
   * 12 ITEM MENU NAVIGASI (Seksyen 4 Spesifikasi)
   */
  navigationItems: [
    { label: "Laman Utama", route: "/", icon: "home" },
    { label: "Dashboard PBS", route: "/dashboard-pbs", icon: "layout-dashboard" },
    { label: "PBD", route: "/pbd", icon: "book-open-check" },
    { label: "PAJSK", route: "/pajsk", icon: "trophy" },
    { label: "Matriks Pembelajaran Tahun 4", route: "/matriks", icon: "layout-grid" },
    { label: "PPsi", route: "/ppsi", icon: "brain-circuit" },
    { label: "SEGAK & BMI 5–9 Tahun", route: "/segak-bmi", icon: "activity" },
    { label: "Takwim Pentaksiran", route: "/takwim", icon: "calendar-days" },
    { label: "Penjaminan Mutu PBS", route: "/penjaminan-mutu", icon: "shield-check" },
    { label: "Pusat Rujukan PBS", route: "/pusat-rujukan", icon: "library" },
    { label: "Senarai Semak Filing", route: "/senarai-semak", icon: "clipboard-check" },
    { label: "Pengurusan Dokumen", route: "/pengurusan-dokumen", icon: "folder-kanban" },
  ],

  /**
   * MAKLUMAN TERKINI
   * PENTING: Kosong secara lalai supaya tidak memaparkan berita atau pengumuman rekaan.
   */
  noticesData: [],

  /**
   * TAKWIM PENTAKSIRAN
   * PENTING: Kosong secara lalai. Semua tarikh mesti datang daripada data yang telah disahkan pengguna.
   */
  takwimData: [],

  /**
   * DOKUMEN PUSAT RUJUKAN PBS
   * Disambungkan dengan pautan Google Drive rasmi yang telah dibekalkan oleh pengguna.
   */
  referenceDocumentsData: [
    {
      id: "doc-panduan-pbd",
      title: "Folder Panduan Pelaksanaan Pentaksiran Bilik Darjah (PBD)",
      category: "Panduan Pelaksanaan PBD",
      summary: "Koleksi buku panduan pelaksanaan PBD, garis panduan pertimbangan profesional dan rujukan pelaksanaan guru.",
      versionOrDate: "Semasa",
      ownerOrSource: "Unit PBD SK Taman Permas Jaya 3",
      url: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    },
    {
      id: "doc-dskp-panitia",
      title: "Folder DSKP Mengikut Panitia Mata Pelajaran",
      category: "Panduan Pelaksanaan PBD",
      summary: "Himpunan Dokumen Standard Kurikulum dan Pentaksiran (DSKP) mengikut panitia dan aliran tahun.",
      versionOrDate: "Semasa",
      ownerOrSource: "Panitia Mata Pelajaran SKTPJ3",
      url: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
    },
    {
      id: "doc-instrumen-mutu-pbd",
      title: "Folder Instrumen Penjaminan Mutu PBD",
      category: "Borang dan Instrumen",
      summary: "Borang dan instrumen rasmi bagi pelaksanaan pemantauan, pengesanan, penyelarasan dan pementoran PBD.",
      versionOrDate: "Semasa",
      ownerOrSource: "Jawatankuasa Penjaminan Mutu PBS SKTPJ3",
      url: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    },
    {
      id: "doc-rekod-transit-pbd",
      title: "Folder Rekod Transit PBD Sekolah",
      category: "Templat Sekolah",
      summary: "Folder templat dan perekodan transit PBD mengikut kelas dan mata pelajaran.",
      versionOrDate: "2026",
      ownerOrSource: "Penyelaras PBD SKTPJ3",
      url: "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
    },
    {
      id: "doc-analisis-pbd",
      title: "Folder Analisis & Rumusan Data PBD",
      category: "Templat Sekolah",
      summary: "Folder analisis penguasaan murid dan rumusan pelaporan PBD peringkat sekolah.",
      versionOrDate: "2026",
      ownerOrSource: "Penyelaras PBD SKTPJ3",
      url: "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
    },
    {
      id: "doc-dialog-prestasi-pbd",
      title: "Folder Dialog Prestasi PBD",
      category: "Dokumen Rujukan Tambahan",
      summary: "Bahan pembentangan, rumusan dapatan dan pelan intervensi Dialog Prestasi PBD mengikut panitia.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Kurikulum & PBD SKTPJ3",
      url: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
    },
  ],

  /**
   * KATEGORI PUSAT RUJUKAN PBS
   */
  referenceCategories: [
    {
      id: "cat-panduan-pbs",
      name: "Panduan Pengurusan PBS",
      description: "Panduan pengurusan induk Pentaksiran Berasaskan Sekolah yang digunakan oleh sekolah.",
      icon: "book-marked",
      color: "blue",
    },
    {
      id: "cat-panduan-pbd",
      name: "Panduan Pelaksanaan PBD",
      description: "Rujukan pelaksanaan Pentaksiran Bilik Darjah, pertimbangan profesional dan pelaporan.",
      icon: "book-open-check",
      color: "emerald",
    },
    {
      id: "cat-pekeliling",
      name: "Pekeliling / Surat Siaran",
      description: "Pekeliling ikhtisas, surat siaran dan arahan rasmi berkaitan pentaksiran.",
      icon: "file-badge",
      color: "amber",
    },
    {
      id: "cat-borang",
      name: "Borang dan Instrumen",
      description: "Borang pemantauan, pengesanan, penyelarasan, pementoran dan instrumen penjaminan mutu.",
      icon: "clipboard-list",
      color: "purple",
    },
    {
      id: "cat-templat",
      name: "Templat Sekolah",
      description: "Templat rekod transit, pelaporan, analisis dan dokumentasi peringkat sekolah.",
      icon: "file-spreadsheet",
      color: "rose",
    },
    {
      id: "cat-kpm",
      name: "Pautan Rasmi KPM / JPN / PPD",
      description: "Pautan portal dan sumber rujukan rasmi KPM, JPN Johor dan PPD Pasir Gudang.",
      icon: "globe",
      color: "indigo",
    },
    {
      id: "cat-tambahan",
      name: "Dokumen Rujukan Tambahan",
      description: "Bahan bacaan, slaid taklimat dalaman dan rujukan sokongan warga pendidik.",
      icon: "folder-plus",
      color: "teal",
    },
  ],

  /**
   * INDEKS PENGURUSAN DOKUMEN & FOLDER DIGITAL
   */
  documentManagementIndex: [
    {
      id: "doc-induk-pbs",
      code: "FAIL 01",
      category: "Pengurusan Induk PBS",
      title: "Fail Induk Pengurusan Pentaksiran Berasaskan Sekolah (PBS)",
      ownerUnit: "Setiausaha PBS",
      accessNote: "Akses Terkawal Warga Sekolah",
      url: "",
    },
    {
      id: "doc-induk-pbd",
      code: "FAIL 02",
      category: "Pentaksiran Bilik Darjah (PBD)",
      title: "Dashboard Utama MyPBD SKTPJ3 2026",
      ownerUnit: "Penyelaras PBD",
      accessNote: "Akses Guru & Pentadbir",
      url: "https://canva.link/mypbd-sktpj3-2026",
    },
    {
      id: "doc-rekod-transit",
      code: "FAIL 02A",
      category: "Pentaksiran Bilik Darjah (PBD)",
      title: "Folder Rekod Transit PBD Mengikut Kelas & Mata Pelajaran",
      ownerUnit: "Penyelaras PBD / Guru Mata Pelajaran",
      accessNote: "Akses Guru & Pentadbir",
      url: "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
    },
    {
      id: "doc-analisis-pbd-idx",
      code: "FAIL 02B",
      category: "Pentaksiran Bilik Darjah (PBD)",
      title: "Folder Analisis & Pelaporan PBD",
      ownerUnit: "Penyelaras PBD",
      accessNote: "Akses Guru & Pentadbir",
      url: "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
    },
    {
      id: "doc-dialog-prestasi-idx",
      code: "FAIL 02C",
      category: "Pentaksiran Bilik Darjah (PBD)",
      title: "Folder Dialog Prestasi PBD",
      ownerUnit: "Unit Kurikulum & Panitia",
      accessNote: "Akses Guru & Pentadbir",
      url: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
    },
    {
      id: "doc-dskp-idx",
      code: "FAIL 02D",
      category: "Pentaksiran Bilik Darjah (PBD)",
      title: "Folder DSKP Panitia Mata Pelajaran",
      ownerUnit: "Ketua Panitia",
      accessNote: "Akses Warga Pendidik",
      url: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
    },
    {
      id: "doc-panduan-pbd-idx",
      code: "FAIL 02E",
      category: "Pentaksiran Bilik Darjah (PBD)",
      title: "Folder Panduan Pelaksanaan PBD",
      ownerUnit: "Penyelaras PBD",
      accessNote: "Akses Warga Pendidik",
      url: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    },
    {
      id: "doc-matriks-t4",
      code: "FAIL 03",
      category: "Matriks Pembelajaran Tahun 4",
      title: "Folder Pengurusan & Dokumentasi Matriks Pembelajaran Tahun 4",
      ownerUnit: "Penyelaras Matriks Tahun 4",
      accessNote: "Akses Terkawal (Tanpa Kertas Soalan/Skema Sulit)",
      url: "",
    },
    {
      id: "doc-pajsk",
      code: "FAIL 04",
      category: "PAJSK",
      title: "Folder Panduan & Dokumentasi Pengurusan PAJSK",
      ownerUnit: "Unit Kokurikulum / Penyelaras PAJSK",
      accessNote: "Akses Guru Penasihat & Pentadbir",
      url: "",
    },
    {
      id: "doc-ppsi",
      code: "FAIL 05",
      category: "PPsi",
      title: "Folder Rujukan & Pengurusan Pentaksiran Psikometrik (PPsi)",
      ownerUnit: "Unit Bimbingan & Kaunseling",
      accessNote: "Akses Terkawal GBK & Pentadbir",
      url: "",
    },
    {
      id: "doc-segak-bmi",
      code: "FAIL 06",
      category: "SEGAK & BMI 5–9 Tahun",
      title: "Folder Asingan Rujukan SEGAK dan BMI 5–9 Tahun",
      ownerUnit: "Panitia PJPK",
      accessNote: "Akses Guru PJPK & Pentadbir",
      url: "",
    },
    {
      id: "doc-penjaminan-mutu",
      code: "FAIL 07",
      category: "Penjaminan Mutu PBS",
      title: "Folder Instrumen Penjaminan Mutu PBD (Pemantauan, Pengesanan, Penyelarasan & Pementoran)",
      ownerUnit: "Jawatankuasa Penjaminan Mutu PBS",
      accessNote: "Akses SLT, MLT & Penyelaras",
      url: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    },
  ],
};
