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
  category: 'PBS' | 'PBD' | 'PAJSK' | 'Matriks Tahun 4' | 'PPsi' | 'SEGAK & BMI' | 'Prasekolah' | 'Intervensi' | 'Penjaminan Mutu';
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
  oprUrl?: string;
  storyboardUrl?: string;
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
  pbdOprUrl: "",
  pbdStoryboardUrl: "",

  // 2. PAJSK
  PAJSK_DASHBOARD_URL: "https://drive.google.com/drive/folders/17H3P_WTmtBS0HWY_EErVzCfQ8onjGbaz?usp=drive_link",
  pajskPanduanUrl: "https://drive.google.com/drive/folders/10d35wjeyz2LKLvu5f_SEXiDrQv9MAeIk?usp=drive_link",
  pajskBorangRekodUrl: "https://drive.google.com/drive/folders/1KR4rpXGViozoAnd1Mz2mwlpabM20tYy-?usp=drive_link",
  pajskAnalisisUrl: "https://drive.google.com/drive/folders/17H3P_WTmtBS0HWY_EErVzCfQ8onjGbaz?usp=drive_link",
  pajskOprUrl: "",
  pajskStoryboardUrl: "",

  // 3. Matriks Pembelajaran Tahun 4
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

  // 4. PPsi
  PPSI_PORTAL_URL: "https://drive.google.com/drive/folders/1JkX5nR_HrXR62oGIAGAQO1WO9Tq_1QGB?usp=drive_link",
  ppsiPanduanUrl: "https://drive.google.com/drive/folders/1JkX5nR_HrXR62oGIAGAQO1WO9Tq_1QGB?usp=drive_link",
  ppsiInstrumenUrl: "https://drive.google.com/drive/folders/1N0EcKPrmt_ghbr7LucbsvgSu3QCtLp1O?usp=drive_link",
  ppsiDokumenSokonganUrl: "https://drive.google.com/drive/folders/1aoL17_Y9EamUDBGUCNPHDOfiSqBz9P0z?usp=drive_link",
  ppsiMaklumanPelaksanaanUrl: "https://drive.google.com/drive/folders/1vhMnPgS_weiqJA3JzqYZzg23yadbyOgC?usp=drive_link",
  ppsiOprUrl: "https://drive.google.com/drive/folders/14SQ5VR9gUH1ECFyfNE8eoCZX1iys6ATt?usp=drive_link",
  ppsiStoryboardUrl: "https://drive.google.com/drive/folders/1xi-rhEO-4IjyH_QHGZu57IkiIZmlL5GI?usp=drive_link",

  // 5. SEGAK & BMI 5–9 Tahun
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

  // 6. Analisis dan Pelaporan Prasekolah (Menu Utama Baharu 1)
  PRASEKOLAH_DASHBOARD_URL: "",
  prasekolahDataProfilUrl: "",
  prasekolahPentaksiranPerkembanganUrl: "",
  prasekolahAnalisisPelaporanUrl: "",
  prasekolahIntervensiSokonganUrl: "",
  prasekolahBuktiDokumentasiUrl: "",
  prasekolahTindakanSusulanUrl: "",
  prasekolahOprUrl: "",
  prasekolahStoryboardUrl: "",

  // 7. Intervensi dan Peningkatan Pembelajaran (Menu Utama Baharu 2: Pemulihan, PLaN, PiT, ARIF)
  INTERVENSI_DASHBOARD_URL: "",
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

  // 8. Penjaminan Mutu PBS
  mutuPemantauanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuPengesananUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuPenyelarasanUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuPementoranUrl: "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
  mutuModerasiUrl: "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
  mutuTindakanSusulanUrl: "",
  mutuOprUrl: "",
  mutuStoryboardUrl: "",

  // 9. Senarai Semak Filing
  filingCombinedExcelPath: "public/docs/Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx",
  filingCombinedExcelAvailable: false,
  filingPbsIndividualUrl: "",
  filingPbdIndividualUrl: "",
  filingMatriksIndividualUrl: "",

  // 10. Folder Digital Pengurusan Dokumen
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
];

export const noticesData: NoticeItem[] = [];
export const takwimData: TakwimItem[] = [];
export const referenceDocumentsData: ReferenceDocumentItem[] = [];
