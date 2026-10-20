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
    // 1. PBD (Pentaksiran Bilik Darjah)
    PBD_DASHBOARD_URL: "",
    pbdPanduanUrl: "",
    pbdTemplatSekolahUrl: "",
    pbdPelaporanUrl: "",

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
    mutuPemantauanUrl: "",
    mutuPengesananUrl: "",
    mutuPenyelarasanUrl: "",
    mutuPementoranUrl: "",
    mutuModerasiUrl: "",
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
   * Contoh format objek:
   * {
   *   id: "notis-1",
   *   title: "Tajuk Makluman",
   *   date: "Tarikh Disahkan",
   *   summary: "Ringkasan makluman...",
   *   category: "PBD",
   *   url: "",
   *   status: "published" // atau "draft"
   * }
   */
  noticesData: [],

  /**
   * TAKWIM PENTAKSIRAN
   * PENTING: Kosong secara lalai. Semua tarikh mesti datang daripada data yang telah disahkan pengguna.
   * Contoh format objek:
   * {
   *   id: "takwim-1",
   *   title: "Nama Pentaksiran / Aktiviti",
   *   startDate: "Tarikh Mula Disahkan",
   *   endDate: "Tarikh Akhir (Jika Ada)",
   *   description: "Penerangan ringkas dan kumpulan sasaran",
   *   category: "PBD", // PBS | PBD | PAJSK | Matriks Tahun 4 | PPsi | SEGAK & BMI | Penjaminan Mutu
   *   sourceUrl: ""
   * }
   */
  takwimData: [],

  /**
   * DOKUMEN PUSAT RUJUKAN PBS
   * PENTING: Kosong secara lalai. Jangan reka tajuk dokumen rasmi, tarikh edisi, nombor pekeliling atau URL.
   * Kategori yang disokong:
   * - "Panduan Pengurusan PBS"
   * - "Panduan Pelaksanaan PBD"
   * - "Pekeliling / Surat Siaran"
   * - "Borang dan Instrumen"
   * - "Templat Sekolah"
   * - "Pautan Rasmi KPM / JPN / PPD"
   * - "Dokumen Rujukan Tambahan"
   */
  referenceDocumentsData: [],

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
      title: "Folder Pengurusan, Penyelarasan & Pelaporan PBD",
      ownerUnit: "Penyelaras PBD",
      accessNote: "Akses Guru & Pentadbir",
      url: "",
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
      title: "Folder Instrumen Pemantauan, Pengesanan, Penyelarasan & Pementoran",
      ownerUnit: "Jawatankuasa Penjaminan Mutu PBS",
      accessNote: "Akses SLT, MLT & Penyelaras",
      url: "",
    },
  ],
};
