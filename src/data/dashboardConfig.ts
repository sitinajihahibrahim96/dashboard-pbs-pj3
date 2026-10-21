/**
 * ============================================================================
 * KONFIGURASI BERPUSAT: DASHBOARD PBS PJ3 (SK TAMAN PERMAS JAYA 3)
 * ============================================================================
 * Fail ini menguruskan semua pautan URL, dokumen rujukan, makluman terkini,
 * takwim pentaksiran, senarai semak filing dan indeks pengurusan dokumen.
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
  date: string;
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

export interface PbdYearlyArchiveItem {
  year: string;
  label: string;
  isCurrent: boolean;
  dashboardUrl: string;
  rekodTransitUrl: string;
  analisisPbdUrl: string;
  dialogPrestasiUrl: string;
  dskpPanitiaUrl: string;
  instrumenMutuUrl: string;
  panduanPelaksanaanUrl: string;
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
  officialLogoPath: "public/images/logo-pj3.png",
  heroBannerPath: "public/images/school-hero.jpg",
  footerBannerPath: "public/images/footer-banner.jpg",
};

export const dashboardLinks = {
  // 1. PBD (Pentaksiran Bilik Darjah)
  PBD_DASHBOARD_URL: "https://canva.link/mypbd-sktpj3-2026",
  pbdPanduanUrl: "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
  pbdTemplatSekolahUrl: "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
  pbdAnalisisUrl: "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
  pbdPelaporanUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
  pbdDskpPanitiaUrl: "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
  pbdInstrumenMutuUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",

  // 2. PAJSK
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

  // 4. PPsi
  PPSI_PORTAL_URL: "",
  ppsiPanduanUrl: "",
  ppsiInstrumenUrl: "",
  ppsiDokumenSokonganUrl: "",
  ppsiMaklumanPelaksanaanUrl: "",

  // 5. SEGAK & BMI 5–9 Tahun
  segakPanduanUrl: "",
  segakInstrumenBorangUrl: "",
  segakRekodAnalisisUrl: "",
  segakTindakanSusulanUrl: "",

  bmiPanduanRujukanUrl: "",
  bmiRekodTemplatUrl: "",
  bmiAnalisisPelaporanUrl: "",
  bmiTindakanSusulanUrl: "",

  // 6. Penjaminan Mutu PBS
  mutuPemantauanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuPengesananUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuPenyelarasanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuPementoranUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuModerasiUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
  mutuTindakanSusulanUrl: "",

  // 7. Senarai Semak Filing
  filingCombinedExcelPath: "public/docs/Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx",
  filingCombinedExcelAvailable: false,
  filingPbsIndividualUrl: "",
  filingPbdIndividualUrl: "",
  filingMatriksIndividualUrl: "",

  // 8. Folder Digital Pengurusan Dokumen
  mainPbsDriveFolderUrl: "",
};

export const pbdYearlyArchives: PbdYearlyArchiveItem[] = [
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
];

export const noticesData: NoticeItem[] = [];
export const takwimData: TakwimItem[] = [];
export const referenceDocumentsData: ReferenceDocumentItem[] = [];
