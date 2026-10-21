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
    // 1. PBD (Pentaksiran Bilik Darjah) — 2026 & Rujukan Utama + OPR & Storyboard
    PBD_DASHBOARD_URL: "https://canva.link/mypbd-sktpj3-2026",
    pbdPanduanUrl: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
    pbdTemplatSekolahUrl: "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
    pbdAnalisisUrl: "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
    pbdPelaporanUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
    pbdDskpPanitiaUrl: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
    pbdInstrumenMutuUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    pbdOprUrl: "",
    pbdStoryboardUrl: "",

    // 2. PAJSK (Pentaksiran Aktiviti Jasmani, Sukan & Kokurikulum) + OPR & Storyboard
    PAJSK_DASHBOARD_URL: "",
    pajskPanduanUrl: "https://drive.google.com/drive/folders/10d35wjeyz2LKLvu5f_SEXiDrQv9MAeIk?usp=drive_link",
    pajskBorangRekodUrl: "https://drive.google.com/drive/folders/1KR4rpXGViozoAnd1Mz2mwlpabM20tYy-?usp=drive_link",
    pajskAnalisisUrl: "https://drive.google.com/drive/folders/17H3P_WTmtBS0HWY_EErVzCfQ8onjGbaz?usp=drive_link",
    pajskOprUrl: "",
    pajskStoryboardUrl: "",

    // 3. Matriks Pembelajaran Tahun 4 + Surat Pekeliling, OPR & Storyboard
    MATRIKS_DASHBOARD_URL: "https://canva.link/dashboard-filing-matrik-tahun-4-2026",
    matriksTarikhTakwimUrl: "https://drive.google.com/drive/folders/1BnIP7MTiumL7yY2nd5zr7wubOFSFqABa?usp=drive_link",
    matriksTakwimUrl: "https://drive.google.com/drive/folders/1MJ7Z8or05K5wv46zrqMNowBZizWEpMUO?usp=drive_link",
    matriksJawatankuasaUrl: "https://drive.google.com/drive/folders/1a3oEzpwKd8S1WyCXsBRs0Q1qDtS64gL7?usp=drive_link",
    matriksPengurusanBahanUrl: "https://drive.google.com/drive/folders/1VX1uoZ84ENbBq2q2V5_LVlkmeP37DYs_?usp=drive_link",
    matriksPengawasanKehadiranUrl: "https://drive.google.com/drive/folders/1SQIZgEILLv-Z5T0XRphpKTJ9odhkSyo2?usp=drive_link",
    matriksPemeriksaanUrl: "https://drive.google.com/drive/folders/1uWN0O1mLqE6vIOWdq3JyQfEfb9MBNiXF?usp=drive_link",
    matriksAnalisisPelaporanUrl: "https://drive.google.com/drive/folders/1QRHVIpsEsRE8McDkMtynEvCAo0nKKw8w?usp=drive_link",
    matriksDokumentasiSusulanUrl: "https://drive.google.com/drive/folders/1zv4NYKmlC-ftWXqHM63ALwPzJdwwZdJu?usp=drive_link",
    matriksSuratPekelilingUrl: "https://drive.google.com/drive/folders/1mI3BSEwLu1tkYH6bV6FTo2bbWLIhY4fr?usp=drive_link",
    matriksOprUrl: "https://drive.google.com/drive/folders/1L4p0_6zJ0SYdcb2XlaMq3CxTeqHVz5Iv?usp=drive_link",
    matriksStoryboardUrl: "https://drive.google.com/drive/folders/1zvYF7dcjJdhkujgdmm-JKtC5EQy7lTs5?usp=drive_link",

    // 4. PPsi (Pentaksiran Psikometrik) + OPR & Storyboard
    PPSI_PORTAL_URL: "",
    ppsiPanduanUrl: "https://drive.google.com/drive/folders/1JkX5nR_HrXR62oGIAGAQO1WO9Tq_1QGB?usp=drive_link",
    ppsiInstrumenUrl: "https://drive.google.com/drive/folders/1N0EcKPrmt_ghbr7LucbsvgSu3QCtLp1O?usp=drive_link",
    ppsiDokumenSokonganUrl: "https://drive.google.com/drive/folders/1aoL17_Y9EamUDBGUCNPHDOfiSqBz9P0z?usp=drive_link",
    ppsiMaklumanPelaksanaanUrl: "https://drive.google.com/drive/folders/1vhMnPgS_weiqJA3JzqYZzg23yadbyOgC?usp=drive_link",
    ppsiOprUrl: "https://drive.google.com/drive/folders/14SQ5VR9gUH1ECFyfNE8eoCZX1iys6ATt?usp=drive_link",
    ppsiStoryboardUrl: "https://drive.google.com/drive/folders/1xi-rhEO-4IjyH_QHGZu57IkiIZmlL5GI?usp=drive_link",

    // 5. SEGAK & BMI 5–9 Tahun (Subbahagian Berasingan + OPR & Storyboard masing-masing)
    segakPanduanUrl: "https://drive.google.com/drive/folders/1rFWid-cTQyUOj4k57o5pK-ooOFYVn0T9?usp=drive_link",
    segakInstrumenBorangUrl: "https://drive.google.com/drive/folders/1xVCb2REGlaCUlV1rDce3JeIwYfp5y_I2?usp=drive_link",
    segakRekodAnalisisUrl: "https://drive.google.com/drive/folders/11RUZWRXCG3DmxZwQtPcdjq8JLEtqyTAf?usp=drive_link",
    segakTindakanSusulanUrl: "https://drive.google.com/drive/folders/1tGEUKAsXTf2cbrHkK_pWjq9MyVs3zqOb?usp=drive_link",
    segakOprUrl: "",
    segakStoryboardUrl: "",

    bmiPanduanRujukanUrl: "https://drive.google.com/drive/folders/1i8ZLRieeg6Su7MXSux77JvW0DC-J5lC9?usp=drive_link",
    bmiRekodTemplatUrl: "https://drive.google.com/drive/folders/1T3JXnTCNihjAl8S48DAGY9tZs3khNvn1?usp=drive_link",
    bmiAnalisisPelaporanUrl: "https://drive.google.com/drive/folders/1-JIL9NihIellu7m6I_TWyAMrHAdUSI74?usp=drive_link",
    bmiTindakanSusulanUrl: "https://drive.google.com/drive/folders/1wjE9XgFYyM3Nv108gozNoIIo15isi2fU?usp=drive_link",
    bmiOprUrl: "",
    bmiStoryboardUrl: "",

    // 6. Analisis dan Pelaporan Prasekolah (Menu Utama Baharu + 6 Submenu + OPR & Storyboard)
    PRASEKOLAH_DASHBOARD_URL: "",
    prasekolahDataProfilUrl: "",
    prasekolahPentaksiranPerkembanganUrl: "",
    prasekolahAnalisisPelaporanUrl: "",
    prasekolahIntervensiSokonganUrl: "",
    prasekolahBuktiDokumentasiUrl: "",
    prasekolahTindakanSusulanUrl: "",
    prasekolahOprUrl: "",
    prasekolahStoryboardUrl: "",

    // 7. Intervensi dan Peningkatan Pembelajaran (Menu Utama Baharu: Pemulihan, PLaN, PiT, ARIF + OPR & Storyboard)
    // 7A. Pemulihan
    pemulihanDataAnalisisUrl: "",
    pemulihanPerancanganUrl: "",
    pemulihanBuktiPelaksanaanUrl: "",
    pemulihanAnalisisImpakUrl: "",
    pemulihanTindakanSusulanUrl: "",
    pemulihanLaporanUrl: "",
    pemulihanOprUrl: "",
    pemulihanStoryboardUrl: "",

    // 7B. PLaN
    planDataAnalisisUrl: "",
    planPerancanganUrl: "",
    planBuktiPelaksanaanUrl: "",
    planAnalisisImpakUrl: "",
    planTindakanSusulanUrl: "",
    planLaporanUrl: "",
    planOprUrl: "",
    planStoryboardUrl: "",

    // 7C. PiT
    pitDataAnalisisUrl: "",
    pitPerancanganUrl: "",
    pitBuktiPelaksanaanUrl: "",
    pitAnalisisImpakUrl: "",
    pitTindakanSusulanUrl: "",
    pitLaporanUrl: "",
    pitOprUrl: "",
    pitStoryboardUrl: "",

    // 7D. ARIF
    arifDataAnalisisUrl: "",
    arifPerancanganUrl: "",
    arifBuktiPelaksanaanUrl: "",
    arifAnalisisImpakUrl: "",
    arifTindakanSusulanUrl: "",
    arifLaporanUrl: "",
    arifOprUrl: "",
    arifStoryboardUrl: "",

    // 8. Penjaminan Mutu PBS (6 Komponen + OPR & Storyboard)
    mutuPemantauanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuPengesananUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuPenyelarasanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuPementoranUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
    mutuModerasiUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
    mutuTindakanSusulanUrl: "",
    mutuOprUrl: "",
    mutuStoryboardUrl: "",

    // 9. Senarai Semak Filing (Muat Turun)
    // Hanya aktifkan (true) apabila fail Excel sebenar telah diletakkan di public/docs/
    filingCombinedExcelPath: "public/docs/Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx",
    filingCombinedExcelAvailable: false,
    filingPbsIndividualUrl: "",
    filingPbdIndividualUrl: "",
    filingMatriksIndividualUrl: "",

    // 10. Folder Digital Pengurusan Dokumen
    mainPbsDriveFolderUrl: "",
  },

  /**
   * PENGURUSAN PBD MENGIKUT SESI AKADEMIK / ARKIB TAHUN SEBELUMNYA
   * Lengkap dengan One Page Report (OPR) & Storyboard
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
      oprUrl: "",
      storyboardUrl: "",
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
      oprUrl: "",
      storyboardUrl: "",
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
      oprUrl: "",
      storyboardUrl: "",
    },
  ],

  /**
   * 12 KAD MENU UTAMA (10 Kad Asal + 2 Menu Utama Baharu: Prasekolah & Intervensi)
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
      externalUrlKey: "pajskPanduanUrl",
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
      externalUrlKey: "ppsiPanduanUrl",
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
      externalUrlKey: "segakPanduanUrl",
      icon: "activity",
      theme: "rose",
    },
    {
      id: "06",
      key: "prasekolah",
      title: "Analisis & Pelaporan Prasekolah",
      fullTitle: "Analisis dan Pelaporan Prasekolah",
      summary: "Data profil, pentaksiran perkembangan, analisis, intervensi & dokumentasi Prasekolah",
      actionLabel: "Buka Halaman Prasekolah",
      route: "/prasekolah",
      externalUrlKey: "PRASEKOLAH_DASHBOARD_URL",
      icon: "blocks",
      theme: "sky",
    },
    {
      id: "07",
      key: "intervensi",
      title: "Intervensi & Peningkatan Pembelajaran",
      fullTitle: "Intervensi dan Peningkatan Pembelajaran",
      summary: "Pengurusan program Pemulihan, PLaN, PiT dan ARIF",
      actionLabel: "Buka Halaman Intervensi",
      route: "/intervensi",
      icon: "trending-up",
      theme: "teal",
    },
    {
      id: "08",
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
      id: "09",
      key: "penjaminan-mutu",
      title: "Penjaminan Mutu PBS",
      fullTitle: "Penjaminan Mutu PBS",
      summary: "Pemantauan, pengesanan, penyelarasan, pementoran dan moderasi",
      actionLabel: "Buka Penjaminan Mutu",
      route: "/penjaminan-mutu",
      externalUrlKey: "mutuPemantauanUrl",
      icon: "shield-check",
      theme: "indigo",
    },
    {
      id: "10",
      key: "pusat-rujukan",
      title: "Pusat Rujukan PBS",
      fullTitle: "Pusat Rujukan PBS",
      summary: "Panduan, surat siaran, borang dan instrumen",
      actionLabel: "Buka Pusat Rujukan",
      route: "/pusat-rujukan",
      icon: "library",
      theme: "blue",
    },
    {
      id: "11",
      key: "senarai-semak",
      title: "Senarai Semak Filing",
      fullTitle: "Senarai Semak Filing",
      summary: "Senarai semak filing PBS, PBD dan Matriks",
      actionLabel: "Buka Halaman Muat Turun",
      route: "/senarai-semak",
      icon: "clipboard-check",
      theme: "emerald",
    },
    {
      id: "12",
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
   * 14 ITEM MENU NAVIGASI (12 Item Asal + 2 Menu Utama Baharu: Prasekolah & Intervensi)
   */
  navigationItems: [
    { label: "Laman Utama", route: "/", icon: "home" },
    { label: "Dashboard PBS", route: "/dashboard-pbs", icon: "layout-dashboard" },
    { label: "PBD", route: "/pbd", icon: "book-open-check" },
    { label: "PAJSK", route: "/pajsk", icon: "trophy" },
    { label: "Matriks Pembelajaran Tahun 4", route: "/matriks", icon: "layout-grid" },
    { label: "PPsi", route: "/ppsi", icon: "brain-circuit" },
    { label: "SEGAK & BMI 5–9 Tahun", route: "/segak-bmi", icon: "activity" },
    { label: "Analisis & Pelaporan Prasekolah", route: "/prasekolah", icon: "blocks" },
    { label: "Intervensi & Peningkatan Pembelajaran", route: "/intervensi", icon: "trending-up" },
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
   * Disambungkan dengan semua pautan Google Drive rasmi yang telah dibekalkan oleh pengguna.
   */
  referenceDocumentsData: [
    // PBD
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

    // PAJSK
    {
      id: "doc-pajsk-panduan",
      title: "Buku Panduan Pengurusan & Pentaksiran PAJSK",
      category: "Panduan Pengurusan PBS",
      summary: "Garis panduan rasmi pemarkahan kehadiran, jawatan, penglibatan dan pencapaian aktiviti kokurikulum PAJSK.",
      versionOrDate: "Semasa",
      ownerOrSource: "Unit Kokurikulum / PAJSK SKTPJ3",
      url: "https://drive.google.com/drive/folders/10d35wjeyz2LKLvu5f_SEXiDrQv9MAeIk?usp=drive_link",
    },
    {
      id: "doc-pajsk-borang",
      title: "Borang Rumusan & Rekod Aktiviti PAJSK",
      category: "Borang dan Instrumen",
      summary: "Folder borang rumusan aktiviti kokurikulum, sukan/permainan, kelab/persatuan dan badan beruniform.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Kokurikulum / PAJSK SKTPJ3",
      url: "https://drive.google.com/drive/folders/1KR4rpXGViozoAnd1Mz2mwlpabM20tYy-?usp=drive_link",
    },
    {
      id: "doc-pajsk-analisis",
      title: "Folder Analisis & Pelaporan PAJSK",
      category: "Templat Sekolah",
      summary: "Rumusan data analisis penglibatan dan pencapaian murid dalam PAJSK.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Kokurikulum / PAJSK SKTPJ3",
      url: "https://drive.google.com/drive/folders/17H3P_WTmtBS0HWY_EErVzCfQ8onjGbaz?usp=drive_link",
    },

    // PSIKOMETRIK (PPsi)
    {
      id: "doc-ppsi-panduan",
      title: "Panduan Pelaksanaan Pentaksiran Psikometrik (PPsi)",
      category: "Panduan Pengurusan PBS",
      summary: "Panduan pelaksanaan rasmi Pentaksiran Psikometrik mengikut arahan semasa.",
      versionOrDate: "Semasa",
      ownerOrSource: "Unit Bimbingan & Kaunseling SKTPJ3",
      url: "https://drive.google.com/drive/folders/1JkX5nR_HrXR62oGIAGAQO1WO9Tq_1QGB?usp=drive_link",
    },
    {
      id: "doc-ppsi-instrumen",
      title: "Instrumen PPsi yang Dibenarkan",
      category: "Borang dan Instrumen",
      summary: "Folder instrumen rasmi Pentaksiran Psikometrik yang dibenarkan.",
      versionOrDate: "Semasa",
      ownerOrSource: "Unit Bimbingan & Kaunseling SKTPJ3",
      url: "https://drive.google.com/drive/folders/1N0EcKPrmt_ghbr7LucbsvgSu3QCtLp1O?usp=drive_link",
    },
    {
      id: "doc-ppsi-sokongan",
      title: "Dokumen Sokongan PPsi",
      category: "Dokumen Rujukan Tambahan",
      summary: "Borang pengurusan dan dokumen sokongan pelaksanaan PPsi sekolah.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Bimbingan & Kaunseling SKTPJ3",
      url: "https://drive.google.com/drive/folders/1aoL17_Y9EamUDBGUCNPHDOfiSqBz9P0z?usp=drive_link",
    },
    {
      id: "doc-ppsi-makluman",
      title: "Makluman Pelaksanaan Semasa PPsi",
      category: "Pekeliling / Surat Siaran",
      summary: "Makluman pelaksanaan semasa dan surat siaran berkaitan Pentaksiran Psikometrik.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Bimbingan & Kaunseling SKTPJ3",
      url: "https://drive.google.com/drive/folders/1vhMnPgS_weiqJA3JzqYZzg23yadbyOgC?usp=drive_link",
    },
    {
      id: "doc-ppsi-opr",
      title: "One Page Report (OPR) PPsi",
      category: "Templat Sekolah",
      summary: "Koleksi laporan ringkas One Page Report (OPR) pelaksanaan Pentaksiran Psikometrik.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Bimbingan & Kaunseling SKTPJ3",
      url: "https://drive.google.com/drive/folders/14SQ5VR9gUH1ECFyfNE8eoCZX1iys6ATt?usp=drive_link",
    },
    {
      id: "doc-ppsi-storyboard",
      title: "Storyboard PPsi",
      category: "Dokumen Rujukan Tambahan",
      summary: "Folder papan cerita (Storyboard) dokumentasi aktiviti dan pelaksanaan PPsi.",
      versionOrDate: "2026",
      ownerOrSource: "Unit Bimbingan & Kaunseling SKTPJ3",
      url: "https://drive.google.com/drive/folders/1xi-rhEO-4IjyH_QHGZu57IkiIZmlL5GI?usp=drive_link",
    },

    // MATRIKS PEMBELAJARAN TAHUN 4
    {
      id: "doc-matriks-pekeliling",
      title: "Surat Pekeliling & Arahan Matriks Pembelajaran Tahun 4",
      category: "Pekeliling / Surat Siaran",
      summary: "Folder surat pekeliling dan arahan rasmi berkaitan pelaksanaan Matriks Pembelajaran Tahun 4.",
      versionOrDate: "2026",
      ownerOrSource: "Penyelaras Matriks Tahun 4 SKTPJ3",
      url: "https://drive.google.com/drive/folders/1mI3BSEwLu1tkYH6bV6FTo2bbWLIhY4fr?usp=drive_link",
    },
    {
      id: "doc-matriks-analisis",
      title: "Data, Analisis dan Pelaporan Matriks Pembelajaran Tahun 4",
      category: "Templat Sekolah",
      summary: "Folder data, analisis pencapaian dan pelaporan Matriks Pembelajaran Tahun 4.",
      versionOrDate: "2026",
      ownerOrSource: "Penyelaras Matriks Tahun 4 SKTPJ3",
      url: "https://drive.google.com/drive/folders/1QRHVIpsEsRE8McDkMtynEvCAo0nKKw8w?usp=drive_link",
    },
    {
      id: "doc-matriks-opr",
      title: "One Page Report (OPR) Matriks Pembelajaran Tahun 4",
      category: "Templat Sekolah",
      summary: "Folder laporan One Page Report (OPR) pengurusan dan pelaksanaan Matriks Pembelajaran Tahun 4.",
      versionOrDate: "2026",
      ownerOrSource: "Penyelaras Matriks Tahun 4 SKTPJ3",
      url: "https://drive.google.com/drive/folders/1L4p0_6zJ0SYdcb2XlaMq3CxTeqHVz5Iv?usp=drive_link",
    },
    {
      id: "doc-matriks-storyboard",
      title: "Storyboard Matriks Pembelajaran Tahun 4",
      category: "Dokumen Rujukan Tambahan",
      summary: "Folder papan cerita (Storyboard) dokumentasi Matriks Pembelajaran Tahun 4.",
      versionOrDate: "2026",
      ownerOrSource: "Penyelaras Matriks Tahun 4 SKTPJ3",
      url: "https://drive.google.com/drive/folders/1zvYF7dcjJdhkujgdmm-JKtC5EQy7lTs5?usp=drive_link",
    },

    // SEGAK & BMI 5-9 TAHUN
    {
      id: "doc-segak-panduan",
      title: "Panduan Pelaksanaan SEGAK",
      category: "Panduan Pengurusan PBS",
      summary: "Garis panduan pelaksanaan ujian Standard Kecergasan Fizikal Kebangsaan (SEGAK).",
      versionOrDate: "Semasa",
      ownerOrSource: "Panitia PJPK SKTPJ3",
      url: "https://drive.google.com/drive/folders/1rFWid-cTQyUOj4k57o5pK-ooOFYVn0T9?usp=drive_link",
    },
    {
      id: "doc-segak-instrumen",
      title: "Instrumen / Borang SEGAK",
      category: "Borang dan Instrumen",
      summary: "Folder instrumen dan borang perekodan ujian SEGAK sekolah.",
      versionOrDate: "2026",
      ownerOrSource: "Panitia PJPK SKTPJ3",
      url: "https://drive.google.com/drive/folders/1xVCb2REGlaCUlV1rDce3JeIwYfp5y_I2?usp=drive_link",
    },
    {
      id: "doc-bmi-panduan",
      title: "Panduan dan Rujukan BMI 5–9 Tahun",
      category: "Panduan Pengurusan PBS",
      summary: "Panduan dan rujukan pelaksanaan ukuran Indeks Jisim Badan (BMI) 5–9 Tahun.",
      versionOrDate: "Semasa",
      ownerOrSource: "Panitia PJPK SKTPJ3",
      url: "https://drive.google.com/drive/folders/1i8ZLRieeg6Su7MXSux77JvW0DC-J5lC9?usp=drive_link",
    },
    {
      id: "doc-bmi-rekod",
      title: "Rekod atau Templat BMI 5–9 Tahun",
      category: "Templat Sekolah",
      summary: "Folder rekod dan templat pengukuran BMI 5–9 Tahun.",
      versionOrDate: "2026",
      ownerOrSource: "Panitia PJPK SKTPJ3",
      url: "https://drive.google.com/drive/folders/1T3JXnTCNihjAl8S48DAGY9tZs3khNvn1?usp=drive_link",
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
      title: "Dashboard Filing & Pengurusan Matriks Pembelajaran Tahun 4 (2026)",
      ownerUnit: "Penyelaras Matriks Tahun 4",
      accessNote: "Akses Terkawal (Tanpa Kertas Soalan/Skema Sulit)",
      url: "https://canva.link/dashboard-filing-matrik-tahun-4-2026",
    },
    {
      id: "doc-pajsk",
      code: "FAIL 04",
      category: "PAJSK",
      title: "Folder Buku Panduan, Borang Rumusan & Analisis PAJSK",
      ownerUnit: "Unit Kokurikulum / Penyelaras PAJSK",
      accessNote: "Akses Guru Penasihat & Pentadbir",
      url: "https://drive.google.com/drive/folders/10d35wjeyz2LKLvu5f_SEXiDrQv9MAeIk?usp=drive_link",
    },
    {
      id: "doc-ppsi",
      code: "FAIL 05",
      category: "PPsi",
      title: "Folder Rujukan, Instrumen, OPR & Storyboard Pentaksiran Psikometrik (PPsi)",
      ownerUnit: "Unit Bimbingan & Kaunseling",
      accessNote: "Akses Terkawal GBK & Pentadbir",
      url: "https://drive.google.com/drive/folders/1JkX5nR_HrXR62oGIAGAQO1WO9Tq_1QGB?usp=drive_link",
    },
    {
      id: "doc-segak-bmi",
      code: "FAIL 06",
      category: "SEGAK & BMI 5–9 Tahun",
      title: "Folder Asingan Rujukan SEGAK dan BMI 5–9 Tahun",
      ownerUnit: "Panitia PJPK",
      accessNote: "Akses Guru PJPK & Pentadbir",
      url: "https://drive.google.com/drive/folders/1rFWid-cTQyUOj4k57o5pK-ooOFYVn0T9?usp=drive_link",
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
    {
      id: "doc-prasekolah-idx",
      code: "FAIL 08",
      category: "Analisis & Pelaporan Prasekolah",
      title: "Folder Pengurusan, Pentaksiran, Analisis & Dokumentasi Prasekolah",
      ownerUnit: "Unit Prasekolah",
      accessNote: "Akses Guru Prasekolah & Pentadbir",
      url: "",
    },
    {
      id: "doc-intervensi-idx",
      code: "FAIL 09",
      category: "Intervensi & Peningkatan Pembelajaran",
      title: "Folder Program Intervensi & Peningkatan Pembelajaran (Pemulihan, PLaN, PiT & ARIF)",
      ownerUnit: "Jawatankuasa Intervensi / Kurikulum",
      accessNote: "Akses Guru & Pentadbir",
      url: "",
    },
  ],
};
