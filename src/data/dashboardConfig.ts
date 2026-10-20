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

export interface QuickLinkItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  colorTheme: string;
  url?: string;
  internalRoute?: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string; // Tarikh yang telah disahkan sahaja
  summary: string;
  category: string;
  url: string;
  status: 'published' | 'draft';
}

export interface TakwimItem {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  category: 'PBS' | 'PBD' | 'PAJSK' | 'Matriks Tahun 4' | 'PPsi' | 'SEGAK & BMI' | 'Penjaminan Mutu';
  sourceUrl?: string;
}

export interface ReferenceDocumentItem {
  id: string;
  title: string;
  category:
    | 'Panduan Pengurusan PBS'
    | 'Panduan Pelaksanaan PBD'
    | 'Pekeliling / Surat Siaran'
    | 'Borang dan Instrumen'
    | 'Templat Sekolah'
    | 'Pautan Rasmi KPM / JPN / PPD'
    | 'Dokumen Rujukan Tambahan';
  summary: string;
  versionOrDate?: string;
  ownerOrSource?: string;
  url: string;
}

export interface DocumentIndexItem {
  id: string;
  code: string;
  category: string;
  title: string;
  ownerUnit: string;
  accessNote: string;
  url: string;
}

export const schoolIdentity = {
  siteName: "Dashboard PBS PJ3",
  fullName: "Pusat Rujukan Pentaksiran Berasaskan Sekolah",
  schoolName: "SK Taman Permas Jaya 3",
  schoolCode: "JBA1092",
  identityBadge: "PJ3 BEST",
  slogan: "Kerja Sepasukan Pacu Kecemerlangan",
  introText:
    "Satu pusat rujukan untuk akses dokumen, instrumen, takwim dan pengurusan pentaksiran sekolah.",
  // Nota Aset: Letakkan fail logo rasmi di public/images/logo-pj3.png.
  // Jika dikosongkan ("") atau fail tiada, kotak "LOGO RASMI PJ3" akan dipaparkan.
  officialLogoPath: "public/images/logo-pj3.png",
  heroBannerPath: "public/images/school-hero.jpg",
  footerBannerPath: "public/images/footer-banner.jpg",
};

/**
 * PAUTAN UTAMA PORTAL & MODUL (Isi URL sebenar apabila telah disahkan)
 */
export const dashboardLinks = {
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
};

/**
 * PAUTAN PANTAS LAMAN UTAMA
 */
export const quickLinks: QuickLinkItem[] = [
  {
    id: "ql-pbd",
    title: "Dashboard PBD",
    subtitle: "Akses rekod & pelaporan PBD",
    icon: "book-open-check",
    colorTheme: "blue",
    url: dashboardLinks.PBD_DASHBOARD_URL,
    internalRoute: "/pbd",
  },
  {
    id: "ql-pajsk",
    title: "Portal PAJSK",
    subtitle: "Jasmani, sukan & kokurikulum",
    icon: "trophy",
    colorTheme: "emerald",
    url: dashboardLinks.PAJSK_DASHBOARD_URL,
    internalRoute: "/pajsk",
  },
  {
    id: "ql-matriks",
    title: "Matriks Tahun 4",
    subtitle: "Pengurusan Matriks Pembelajaran",
    icon: "layout-grid",
    colorTheme: "amber",
    url: dashboardLinks.MATRIKS_DASHBOARD_URL,
    internalRoute: "/matriks",
  },
  {
    id: "ql-mutu",
    title: "Penjaminan Mutu",
    subtitle: "Borang pemantauan & pementoran",
    icon: "shield-check",
    colorTheme: "purple",
    internalRoute: "/penjaminan-mutu",
  },
  {
    id: "ql-rujukan",
    title: "Pusat Rujukan",
    subtitle: "Panduan KPM, pekeliling & instrumen",
    icon: "library",
    colorTheme: "rose",
    internalRoute: "/pusat-rujukan",
  },
  {
    id: "ql-semak",
    title: "Senarai Semak Filing",
    subtitle: "Panduan fail PBS, PBD & Matriks",
    icon: "clipboard-check",
    colorTheme: "cyan",
    internalRoute: "/senarai-semak",
  },
];

/**
 * MAKLUMAN TERKINI
 * PENTING: Jangan masukkan makluman rekaan sebagai pengumuman sebenar.
 * Tambah objek ke dalam tatasusunan (array) di bawah apabila ada makluman rasmi.
 */
export const noticesData: NoticeItem[] = [];

/**
 * TAKWIM PENTAKSIRAN
 * PENTING: Semua tarikh mesti datang daripada data yang telah disahkan oleh penyelaras.
 * Jangan masukkan tarikh anggaran atau rekaan.
 */
export const takwimData: TakwimItem[] = [];

/**
 * DOKUMEN PUSAT RUJUKAN PBS
 * PENTING: Jangan reka tajuk pekeliling, tarikh edisi atau URL palsu.
 * Masukkan dokumen sebenar apabila URL/fail telah disahkan oleh penyelaras.
 */
export const referenceDocumentsData: ReferenceDocumentItem[] = [];

/**
 * INDEKS PENGURUSAN DOKUMEN & FOLDER DIGITAL
 * Rangka struktur fail standard PBS PJ3 (tanpa URL palsu).
 */
export const documentManagementIndex: DocumentIndexItem[] = [
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
];
