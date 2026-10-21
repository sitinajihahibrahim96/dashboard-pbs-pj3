/**
 * ============================================================================
 * PENJANA HALAMAN DALAMAN & LAMAN UTAMA — DASHBOARD PBS PJ3
 * Mengandungi kesemua 12 halaman mengikut spesifikasi:
 * 1. Laman Utama (/)
 * 2. Dashboard PBS (/dashboard-pbs)
 * 3. PBD (/pbd)
 * 4. PAJSK (/pajsk)
 * 5. Matriks Pembelajaran Tahun 4 (/matriks)
 * 6. PPsi (/ppsi)
 * 7. SEGAK & BMI 5–9 Tahun (/segak-bmi)
 * 8. Takwim Pentaksiran (/takwim)
 * 9. Penjaminan Mutu PBS (/penjaminan-mutu)
 * 10. Pusat Rujukan PBS (/pusat-rujukan)
 * 11. Senarai Semak Filing (/senarai-semak)
 * 12. Pengurusan Dokumen (/pengurusan-dokumen)
 * + Halaman 404 (Halaman Tidak Ditemui)
 * ============================================================================
 */

window.PBS_PAGES = (function () {
  const UI = window.PBS_UI;

  /**
   * 1. LAMAN UTAMA (HOME)
   */
  function renderHomePage(config) {
    const { schoolIdentity, dashboardLinks, mainMenuCards, noticesData, takwimData } = config;
    const publishedNotices = (noticesData || []).filter((n) => n.status === "published");
    const verifiedTakwim = takwimData || [];

    const cardsHtml = mainMenuCards
      .map((card) => UI.renderDashboardMenuCard(card, dashboardLinks))
      .join("");

    // Pautan Pantas (Seksyen 4.1)
    const quickLinksItems = [
      {
        title: "Dashboard PBD",
        desc: "Buka halaman & pautan PBD",
        icon: "book-open-check",
        route: "/pbd",
        url: dashboardLinks.PBD_DASHBOARD_URL,
        theme: "bg-blue-50 text-blue-700 border-blue-200",
      },
      {
        title: "Portal PAJSK",
        desc: "Jasmani, sukan & kokurikulum",
        icon: "trophy",
        route: "/pajsk",
        url: dashboardLinks.PAJSK_DASHBOARD_URL,
        theme: "bg-emerald-50 text-emerald-700 border-emerald-200",
      },
      {
        title: "Matriks Tahun 4",
        desc: "Pengurusan Matriks Pembelajaran",
        icon: "layout-grid",
        route: "/matriks",
        url: dashboardLinks.MATRIKS_DASHBOARD_URL,
        theme: "bg-amber-50 text-amber-800 border-amber-200",
      },
      {
        title: "Penjaminan Mutu",
        desc: "Pemantauan, penyelarasan & pementoran",
        icon: "shield-check",
        route: "/penjaminan-mutu",
        url: "",
        theme: "bg-purple-50 text-purple-700 border-purple-200",
      },
      {
        title: "Pusat Rujukan PBS",
        desc: "Panduan, pekeliling & instrumen",
        icon: "library",
        route: "/pusat-rujukan",
        url: "",
        theme: "bg-sky-50 text-sky-700 border-sky-200",
      },
      {
        title: "Senarai Semak Filing",
        desc: "Alat kerja penyusunan fail PBS/PBD",
        icon: "clipboard-check",
        route: "/senarai-semak",
        url: "",
        theme: "bg-teal-50 text-teal-700 border-teal-200",
      },
    ];

    const quickLinksHtml = quickLinksItems
      .map((item) => {
        const cleanExt = (item.url || "").trim();
        return `
          <div class="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs transition flex flex-col justify-between gap-2.5">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl ${item.theme} border flex items-center justify-center shrink-0">
                <i data-lucide="${item.icon}" class="w-5 h-5"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs sm:text-sm font-extrabold text-[#112455] leading-tight">${UI.escapeHtml(item.title)}</h4>
                <p class="text-[11px] text-[#5A688C] mt-0.5 leading-snug">${UI.escapeHtml(item.desc)}</p>
              </div>
            </div>
            <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
              <a href="#${item.route}" class="text-[11px] font-bold text-[#174EA6] hover:underline inline-flex items-center gap-1">
                <span>Buka Modul</span>
                <i data-lucide="arrow-right" class="w-3 h-3"></i>
              </a>
              ${
                cleanExt
                  ? `<a href="${UI.escapeHtml(cleanExt)}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 hover:bg-emerald-200 inline-flex items-center gap-1">
                      <span>URL Rasmi</span>
                      <i data-lucide="external-link" class="w-3 h-3"></i>
                    </a>`
                  : `<span class="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500">Rujukan Dalaman</span>`
              }
            </div>
          </div>
        `;
      })
      .join("");

    // Makluman Terkini HTML
    const noticesHtml =
      publishedNotices.length > 0
        ? `<div class="space-y-3">
            ${publishedNotices
              .map(
                (n) => `
              <article class="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div class="flex items-center justify-between gap-2 mb-1.5">
                  <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">${UI.escapeHtml(n.category)}</span>
                  ${n.date ? `<span class="text-xs font-semibold text-slate-500">${UI.escapeHtml(n.date)}</span>` : ""}
                </div>
                <h4 class="text-sm font-extrabold text-[#112455]">${UI.escapeHtml(n.title)}</h4>
                <p class="text-xs text-[#5A688C] mt-1 leading-relaxed">${UI.escapeHtml(n.summary)}</p>
                ${
                  n.url
                    ? `<div class="mt-2.5">
                        <a href="${UI.escapeHtml(n.url)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#174EA6] hover:underline">
                          <span>Buka Lampiran / Pautan</span>
                          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        </a>
                      </div>`
                    : ""
                }
              </article>
            `
              )
              .join("")}
          </div>`
        : UI.renderEmptyState({
            icon: "megaphone",
            title: "Tiada makluman baharu buat masa ini",
            message:
              "Makluman rasmi berkaitan pelaksanaan PBS, PBD, PAJSK, Matriks Pembelajaran Tahun 4 dan PPsi akan dipaparkan di sini selepas dimasukkan oleh penyelaras.",
            configHint: "src/data/dashboardConfig.ts -> noticesData",
          });

    // Takwim Pentaksiran Ringkas HTML
    const takwimPreviewHtml =
      verifiedTakwim.length > 0
        ? `<div class="space-y-3">
            ${verifiedTakwim
              .slice(0, 4)
              .map(
                (t) => `
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 mb-1">${UI.escapeHtml(t.category)}</span>
                  <h4 class="text-xs sm:text-sm font-extrabold text-[#112455]">${UI.escapeHtml(t.title)}</h4>
                  <p class="text-xs text-[#5A688C] mt-0.5">${UI.escapeHtml(t.description)}</p>
                </div>
                <div class="text-right shrink-0">
                  <span class="inline-block px-2.5 py-1 rounded-lg bg-[#081C52] text-[#FFC43D] text-xs font-bold">${UI.escapeHtml(t.startDate)}</span>
                </div>
              </div>
            `
              )
              .join("")}
          </div>`
        : UI.renderEmptyState({
            icon: "calendar-clock",
            title: "Tiada maklumat takwim dimasukkan",
            message:
              "Jadual dan tarikh penting pentaksiran hanya akan dipaparkan selepas disahkan dan dimasukkan oleh penyelaras PBS.",
            configHint: "src/data/dashboardConfig.ts -> takwimData",
          });

    return `
      <!-- HERO BANNER PORTAL PBS PJ3 (Gaya Rujukan MyPENTADBIRAN & PJ3 BEST) -->
      <section class="relative bg-gradient-to-b from-[#081C52] via-[#0c276e] to-[#174EA6] text-white rounded-3xl overflow-hidden border-b-4 border-[#FFC43D] shadow-2xl mb-10">
        <!-- Latar Belakang Gambar Sekolah Asal (dengan overlay navy supaya kontras teks tinggi) -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style="background-image: url('${UI.escapeHtml(schoolIdentity.heroBannerPath)}');"
          aria-hidden="true"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#081C52]/90 via-[#081C52]/75 to-[#174EA6]/85 pointer-events-none" aria-hidden="true"></div>

        <div class="relative z-10 px-5 sm:px-10 py-8 sm:py-12">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            <!-- Kiri: Identiti Sekolah, Tajuk Utama, Subtajuk & Slogan -->
            <div class="text-center lg:text-left max-w-3xl">
              <div class="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
                <span class="px-3 py-1 rounded-full bg-[#FFC43D] text-[#081C52] text-xs font-black tracking-wider uppercase shadow">
                  ${UI.escapeHtml(schoolIdentity.identityBadge)}
                </span>
                <span class="px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs border border-white/25 text-xs font-bold text-amber-200 tracking-wide uppercase">
                  ${UI.escapeHtml(schoolIdentity.schoolName)} • ${UI.escapeHtml(schoolIdentity.schoolCode)}
                </span>
              </div>

              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                <span class="text-white">DASHBOARD </span>
                <span class="text-gold-gradient">PBS PJ3</span>
              </h1>

              <!-- Reben Emas Subtajuk -->
              <div class="mt-4 inline-block">
                <div class="gold-ribbon px-5 sm:px-8 py-2 rounded-full text-[#081C52] font-black text-xs sm:text-base uppercase tracking-wider border border-amber-100">
                  ${UI.escapeHtml(schoolIdentity.fullName)}
                </div>
              </div>

              <!-- Slogan -->
              <p class="mt-4 text-base sm:text-xl font-extrabold italic text-amber-200 tracking-wide">
                “${UI.escapeHtml(schoolIdentity.slogan)}”
              </p>

              <!-- Ayat Pengenalan Ringkas -->
              <p class="mt-2.5 text-xs sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ${UI.escapeHtml(schoolIdentity.introText)}
              </p>

              <!-- Butang Tindakan Pantas Hero -->
              <div class="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#/dashboard-pbs"
                  class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFC43D] hover:bg-amber-400 text-[#081C52] font-extrabold text-xs sm:text-sm shadow-lg transition cursor-pointer"
                >
                  <i data-lucide="layout-grid" class="w-4 h-4"></i>
                  <span>Terokai Modul PBS</span>
                </a>
                <a
                  href="#/pusat-rujukan"
                  class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs sm:text-sm transition cursor-pointer"
                >
                  <i data-lucide="search" class="w-4 h-4 text-[#FFC43D]"></i>
                  <span>Pusat Rujukan & Carian</span>
                </a>
                <a
                  href="#/senarai-semak"
                  class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-300/30 font-bold text-xs sm:text-sm transition cursor-pointer"
                >
                  <i data-lucide="clipboard-check" class="w-4 h-4"></i>
                  <span>Senarai Semak Filing</span>
                </a>
              </div>
            </div>

            <!-- Kanan: Ruang Logo Rasmi Sekolah & Lencana Identiti PJ3 BEST -->
            <div class="shrink-0 flex flex-col items-center">
              <div class="bg-white/95 p-4 sm:p-5 rounded-3xl shadow-2xl border-4 border-[#FFC43D] flex flex-col items-center text-center w-48 sm:w-56">
                <div id="heroLogoSlot" class="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  <img
                    src="${UI.escapeHtml(schoolIdentity.officialLogoPath)}"
                    alt="Logo Rasmi ${UI.escapeHtml(schoolIdentity.schoolName)}"
                    class="w-full h-full object-contain"
                    onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"
                  />
                  <div class="hidden w-full h-full rounded-2xl border-2 border-dashed border-[#081C52] bg-slate-50 flex flex-col items-center justify-center p-2 text-center">
                    <span class="text-[11px] font-black text-[#081C52] uppercase leading-tight">LOGO RASMI PJ3</span>
                    <span class="text-[9px] text-slate-500 mt-0.5">Ruang Logo Sekolah</span>
                  </div>
                </div>
                <span class="mt-2.5 text-xs font-black text-[#081C52] uppercase tracking-wider leading-tight">
                  ${UI.escapeHtml(schoolIdentity.schoolName)}
                </span>
                <span class="mt-1 px-2.5 py-0.5 rounded-full bg-[#081C52] text-[#FFC43D] text-[10px] font-extrabold tracking-widest uppercase">
                  ${UI.escapeHtml(schoolIdentity.identityBadge)}
                </span>
              </div>
            </div>
          </div>

          <!-- 5 Teras Nilai Portal (Gaya Rujukan Gambar Portal PJ3) -->
          <div class="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15">
              <i data-lucide="mouse-pointer-click" class="w-5 h-5 text-[#FFC43D] shrink-0"></i>
              <span class="text-xs font-extrabold tracking-wide uppercase">Mudah Diakses</span>
            </div>
            <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15">
              <i data-lucide="folder-check" class="w-5 h-5 text-[#FFC43D] shrink-0"></i>
              <span class="text-xs font-extrabold tracking-wide uppercase">Dokumen Tersusun</span>
            </div>
            <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15">
              <i data-lucide="shield-check" class="w-5 h-5 text-[#FFC43D] shrink-0"></i>
              <span class="text-xs font-extrabold tracking-wide uppercase">Penjaminan Mutu</span>
            </div>
            <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15">
              <i data-lucide="users" class="w-5 h-5 text-[#FFC43D] shrink-0"></i>
              <span class="text-xs font-extrabold tracking-wide uppercase">Kerja Sepasukan</span>
            </div>
            <div class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 col-span-2 sm:col-span-1">
              <i data-lucide="award" class="w-5 h-5 text-[#FFC43D] shrink-0"></i>
              <span class="text-xs font-extrabold tracking-wide uppercase">Pacu Kecemerlangan</span>
            </div>
          </div>
        </div>
      </section>

      <!-- GRID 10 KAD MENU UTAMA (Seksyen 4.2) -->
      <section aria-labelledby="heading-menu-utama" class="mb-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-8 rounded-full bg-[#081C52] inline-block"></span>
              <h2 id="heading-menu-utama" class="text-xl sm:text-2xl lg:text-3xl font-black text-[#112455] uppercase tracking-tight">
                Modul & Komponen Utama PBS
              </h2>
            </div>
            <p class="text-xs sm:text-sm text-[#5A688C] mt-1 ml-5">
              Pilih kad di bawah untuk membuka halaman komponen, rujukan, takwim, penjaminan mutu atau senarai semak filing.
            </p>
          </div>
          <a
            href="#/pengurusan-dokumen"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081C52] hover:bg-[#174EA6] text-white text-xs font-bold shadow-xs transition self-start sm:self-auto"
          >
            <i data-lucide="folder-kanban" class="w-4 h-4 text-[#FFC43D]"></i>
            <span>Indeks Pengurusan Dokumen</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          ${cardsHtml}
        </div>
      </section>

      <!-- 3 SEKSYEN BAWAH LAMAN UTAMA: MAKLUMAN TERKINI, PAUTAN PANTAS & TAKWIM PENTAKSIRAN -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <!-- 1. Makluman Terkini (4 Lajur) -->
        <div class="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
              <div class="flex items-center gap-2.5">
                <span class="w-9 h-9 rounded-xl bg-[#081C52] text-[#FFC43D] flex items-center justify-center shadow-xs">
                  <i data-lucide="megaphone" class="w-5 h-5"></i>
                </span>
                <div>
                  <h3 class="text-base font-black text-[#112455] uppercase">Makluman Terkini</h3>
                  <p class="text-[11px] text-[#5A688C]">Info & pengumuman rasmi PBS</p>
                </div>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                ${publishedNotices.length} Makluman
              </span>
            </div>
            ${noticesHtml}
          </div>
        </div>

        <!-- 2. Pautan Pantas (4 Lajur) -->
        <div class="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
              <div class="flex items-center gap-2.5">
                <span class="w-9 h-9 rounded-xl bg-amber-500 text-[#081C52] flex items-center justify-center shadow-xs">
                  <i data-lucide="link" class="w-5 h-5"></i>
                </span>
                <div>
                  <h3 class="text-base font-black text-[#112455] uppercase">Pautan Pantas</h3>
                  <p class="text-[11px] text-[#5A688C]">Pintasan navigasi & sistem sedia ada</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${quickLinksHtml}
            </div>
          </div>
        </div>

        <!-- 3. Takwim Pentaksiran (4 Lajur) -->
        <div class="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
              <div class="flex items-center gap-2.5">
                <span class="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs">
                  <i data-lucide="calendar-days" class="w-5 h-5"></i>
                </span>
                <div>
                  <h3 class="text-base font-black text-[#112455] uppercase">Takwim Pentaksiran</h3>
                  <p class="text-[11px] text-[#5A688C]">Tarikh rasmi yang telah disahkan</p>
                </div>
              </div>
              <a
                href="#/takwim"
                class="px-3 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition"
              >
                Lihat Halaman
              </a>
            </div>
            ${takwimPreviewHtml}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * 2. HALAMAN DASHBOARD PBS (/dashboard-pbs)
   * Gambaran keseluruhan komponen PBS (Akademik & Bukan Akademik) + akses ke semua modul.
   */
  function renderDashboardPbsPage(config) {
    const { dashboardLinks, mainMenuCards } = config;
    const cardsHtml = mainMenuCards
      .map((card) => UI.renderDashboardMenuCard(card, dashboardLinks))
      .join("");

    return `
      ${UI.renderPageHeader({
        badge: "Gambaran Keseluruhan PBS",
        title: "Dashboard Induk PBS PJ3",
        subtitle:
          "Pusat navigasi bersepadu bagi komponen Pentaksiran Berasaskan Sekolah (PBS), Matriks Pembelajaran Tahun 4, Penjaminan Mutu dan Pengurusan Fail di SK Taman Permas Jaya 3.",
        icon: "layout-dashboard",
      })}

      <!-- Struktur Komponen PBS & Pentaksiran Sekolah -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div class="bg-white rounded-2xl p-5 border-2 border-blue-200 shadow-xs">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <i data-lucide="book-open-check" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-blue-700">Komponen Akademik</span>
              <h2 class="text-base font-black text-[#112455]">PBD & Matriks Tahun 4</h2>
            </div>
          </div>
          <p class="text-xs text-[#5A688C] leading-relaxed mb-4">
            Merangkumi pelaksanaan Pentaksiran Bilik Darjah (PBD) secara berterusan dan pengurusan Matriks Pembelajaran Tahun 4 mengikut ketetapan semasa.
          </p>
          <div class="flex flex-wrap gap-2">
            <a href="#/pbd" class="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200 transition">Halaman PBD</a>
            <a href="#/matriks" class="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 transition">Matriks Tahun 4</a>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-5 border-2 border-emerald-200 shadow-xs">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <i data-lucide="activity" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-emerald-700">Komponen Bukan Akademik</span>
              <h2 class="text-base font-black text-[#112455]">PAJSK, PPsi, SEGAK & BMI</h2>
            </div>
          </div>
          <p class="text-xs text-[#5A688C] leading-relaxed mb-4">
            Pengurusan aktiviti jasmani, sukan dan kokurikulum (PAJSK), Pentaksiran Psikometrik (PPsi), serta pengurusan berasingan bagi SEGAK dan BMI 5–9 Tahun.
          </p>
          <div class="flex flex-wrap gap-2">
            <a href="#/pajsk" class="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition">PAJSK</a>
            <a href="#/ppsi" class="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200 transition">PPsi</a>
            <a href="#/segak-bmi" class="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200 transition">SEGAK & BMI</a>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-5 border-2 border-indigo-200 shadow-xs">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <i data-lucide="shield-check" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-indigo-700">Tadbir Urus & Kualiti</span>
              <h2 class="text-base font-black text-[#112455]">Penjaminan Mutu & Rujukan</h2>
            </div>
          </div>
          <p class="text-xs text-[#5A688C] leading-relaxed mb-4">
            Pelaksanaan pemantauan, pengesanan, penyelarasan, pementoran, moderasi, pusat rujukan dokumen, senarai semak filing dan indeks dokumen.
          </p>
          <div class="flex flex-wrap gap-2">
            <a href="#/penjaminan-mutu" class="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200 transition">Penjaminan Mutu</a>
            <a href="#/senarai-semak" class="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200 transition">Senarai Semak</a>
          </div>
        </div>
      </div>

      <h2 class="text-xl font-black text-[#112455] uppercase mb-4">Semua Modul Dashboard PBS PJ3</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        ${cardsHtml}
      </div>
    `;
  }

  /**
   * 3. HALAMAN PBD (/pbd) — Seksyen 5.1 Spesifikasi + Ciri Pemilihan Tahun / Arkib Sesi Akademik
   */
  function renderPbdPage(config, selectedYear = "2026") {
    const { dashboardLinks, pbdYearlyArchives } = config;
    const archives = pbdYearlyArchives || [
      {
        year: "2026",
        label: "Sesi Akademik 2026 (Semasa)",
        isCurrent: true,
        dashboardUrl: dashboardLinks.PBD_DASHBOARD_URL,
        rekodTransitUrl: dashboardLinks.pbdTemplatSekolahUrl,
        analisisPbdUrl: dashboardLinks.pbdAnalisisUrl,
        dialogPrestasiUrl: dashboardLinks.pbdPelaporanUrl,
        dskpPanitiaUrl: dashboardLinks.pbdDskpPanitiaUrl,
        instrumenMutuUrl: dashboardLinks.pbdInstrumenMutuUrl,
        panduanPelaksanaanUrl: dashboardLinks.pbdPanduanUrl,
      },
    ];

    const activeYearObj =
      archives.find((a) => a.year === selectedYear) || archives[0];

    const yearTabsHtml = archives
      .map((item) => {
        const isActive = item.year === activeYearObj.year;
        return `
          <button
            type="button"
            data-pbd-year="${UI.escapeHtml(item.year)}"
            class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold border transition cursor-pointer flex items-center gap-2 ${
              isActive
                ? "bg-[#081C52] text-[#FFC43D] border-[#081C52] shadow-md"
                : "bg-white hover:bg-blue-50 text-[#112455] border-slate-200"
            }"
          >
            <i data-lucide="${item.isCurrent ? "calendar-check-2" : "archive"}" class="w-4 h-4"></i>
            <span>Tahun ${UI.escapeHtml(item.year)}</span>
            ${
              item.isCurrent
                ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    isActive ? "bg-[#FFC43D] text-[#081C52]" : "bg-emerald-100 text-emerald-800"
                  }">Semasa</span>`
                : `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? "bg-white/15 text-amber-200" : "bg-slate-100 text-slate-600"
                  }">Arkib</span>`
            }
          </button>
        `;
      })
      .join("");

    // 6 Kad Modul Utama PBD (Rekod Transit, Analisis PBD, Dialog Prestasi, DSKP Panitia, Instrumen Penjaminan Mutu, Panduan Pelaksanaan)
    const pbdResourceCards = [
      {
        num: "01",
        title: "Rekod Transit PBD",
        subtitle: `Sesi Akademik ${activeYearObj.year}`,
        desc: "Folder templat dan perekodan transit PBD guru mengikut aliran tahun dan panitia mata pelajaran.",
        url: activeYearObj.rekodTransitUrl,
        configKey: "pbdTemplatSekolahUrl",
        icon: "file-spreadsheet",
        theme: "blue",
      },
      {
        num: "02",
        title: "Analisis PBD",
        subtitle: `Sesi Akademik ${activeYearObj.year}`,
        desc: "Rumusan analisis tahap penguasaan (TP) murid, data penguasaan aliran dan pelaporan PBD sekolah.",
        url: activeYearObj.analisisPbdUrl,
        configKey: "pbdAnalisisUrl",
        icon: "bar-chart-3",
        theme: "emerald",
      },
      {
        num: "03",
        title: "Dialog Prestasi PBD",
        subtitle: `Sesi Akademik ${activeYearObj.year}`,
        desc: "Bahan pembentangan panitia, rumusan dapatan Dialog Prestasi dan pelan intervensi pengukuhan / pemulihan.",
        url: activeYearObj.dialogPrestasiUrl,
        configKey: "pbdPelaporanUrl",
        icon: "presentation",
        theme: "amber",
      },
      {
        num: "04",
        title: "DSKP Panitia",
        subtitle: "Dokumen Standard Kurikulum & Pentaksiran",
        desc: "Koleksi lengkap DSKP mengikut panitia mata pelajaran dan tahun sebagai rujukan SK, SP dan Standard Prestasi (SPi).",
        url: activeYearObj.dskpPanitiaUrl,
        configKey: "pbdDskpPanitiaUrl",
        icon: "book-marked",
        theme: "purple",
      },
      {
        num: "05",
        title: "Instrumen Penjaminan Mutu PBD",
        subtitle: "Pemantauan, Pengesanan, Penyelarasan & Pementoran",
        desc: "Folder borang dan instrumen rasmi penjaminan kualiti PBD untuk kegunaan SLT, MLT dan Guru Mata Pelajaran.",
        url: activeYearObj.instrumenMutuUrl,
        configKey: "pbdInstrumenMutuUrl",
        icon: "shield-check",
        theme: "indigo",
      },
      {
        num: "06",
        title: "Panduan Pelaksanaan PBD",
        subtitle: "Garis Panduan & Rujukan Rasmi",
        desc: "Buku panduan pelaksanaan Pentaksiran Bilik Darjah, tatacara pertimbangan profesional dan rujukan guru.",
        url: activeYearObj.panduanPelaksanaanUrl,
        configKey: "pbdPanduanUrl",
        icon: "book-open-check",
        theme: "teal",
      },
    ];

    const components = [
      {
        step: "01",
        title: "Perancangan PdP & Pentaksiran",
        desc: "Menentukan Standard Kandungan (SK), Standard Pembelajaran (SP) dan Standard Prestasi (SPi) serta memilih kaedah pentaksiran yang bersesuaian.",
        icon: "compass",
      },
      {
        step: "02",
        title: "Pelaksanaan Pentaksiran",
        desc: "Menjalankan pentaksiran secara berterusan melalui pemerhatian, lisan dan penulisan semasa proses PdP berlangsung.",
        icon: "play-circle",
      },
      {
        step: "03",
        title: "Pengumpulan Evidens",
        desc: "Mengumpul bukti penguasaan murid melalui hasil kerja, lembaran kerja, kuiz, projek atau pemerhatian tingkah laku pembelajaran.",
        icon: "folder-open",
      },
      {
        step: "04",
        title: "Perekodan",
        desc: "Merekod perkembangan dan tahap penguasaan murid secara sistematik dalam rekod transit guru mengikut kesesuaian masa.",
        icon: "clipboard-pen",
      },
      {
        step: "05",
        title: "Pertimbangan Profesional & Pelaporan",
        desc: "Menentukan Tahap Penguasaan (TP) murid secara beretika dan melaporkan perkembangan pembelajaran kepada ibu bapa / penjaga.",
        icon: "file-bar-chart-2",
      },
      {
        step: "06",
        title: "Tindakan Susulan",
        desc: "Merancang dan melaksanakan intervensi pemulihan, pengukuhan atau pengayaan berdasarkan tahap penguasaan murid.",
        icon: "refresh-cw",
      },
    ];

    return `
      ${UI.renderPageHeader({
        badge: "Modul 01 • PBD",
        title: "Pentaksiran Bilik Darjah (PBD)",
        subtitle:
          "Pintu masuk kepada Dashboard MyPBD SKTPJ3, Rekod Transit, Analisis PBD, Dialog Prestasi Panitia, DSKP, Instrumen Penjaminan Mutu serta Arkib Tahunan.",
        icon: "book-open-check",
      })}

      <!-- Makluman Penting Sumber Rekod Utama -->
      <div class="mb-6 p-5 rounded-2xl bg-blue-50 border-l-4 border-[#174EA6] flex items-start gap-3.5">
        <i data-lucide="info" class="w-5 h-5 text-[#174EA6] shrink-0 mt-0.5"></i>
        <div class="text-xs sm:text-sm text-[#112455] leading-relaxed">
          <strong class="font-extrabold">Makluman Penting:</strong>
          Halaman ini berfungsi sebagai pintu masuk navigasi dan rujukan berpusat.
          <strong>Sistem atau dashboard PBD asal sekolah kekal sebagai sumber rekod utama.</strong>
        </div>
      </div>

      <!-- Pemilih Sesi Akademik / Arkib Tahun Sebelumnya (Ciri Inspirasi Portal PBD Sekolah) -->
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-[#174EA6] flex items-center gap-1.5">
              <i data-lucide="history" class="w-4 h-4"></i>
              <span>Pilihan Sesi Akademik & Arkib Tahunan PBD</span>
            </span>
            <p class="text-xs text-[#5A688C] mt-0.5">
              Pilih tahun semasa (<strong>2026</strong>) atau semak rekod tahun sebelumnya (<strong>2025 / 2024</strong>) bagi tujuan perbandingan prestasi panitia.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            ${yearTabsHtml}
          </div>
        </div>
      </div>

      <!-- Pautan Utama Dashboard PBD Sedia Ada -->
      <div class="bg-gradient-to-r from-[#081C52] via-[#0e2a75] to-[#174EA6] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFC43D] shadow-lg mb-10">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <span class="px-3 py-1 rounded-full bg-[#FFC43D] text-[#081C52] text-xs font-black uppercase tracking-wider">
              Pautan Utama Sistem • ${UI.escapeHtml(activeYearObj.label)}
            </span>
            <h2 class="text-xl sm:text-3xl font-black text-white mt-3">
              Dashboard PBD Sedia Ada SK Taman Permas Jaya 3 (${UI.escapeHtml(activeYearObj.year)})
            </h2>
            <p class="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
              Gunakan butang di sebelah untuk membuka terus <strong>MyPBD SKTPJ3 (${UI.escapeHtml(activeYearObj.year)})</strong> bagi urusan pengisian rekod, semakan pelaporan dan analisis PBD sekolah.
            </p>
          </div>
          <div class="shrink-0">
            ${UI.renderExternalActionButton({
              url: activeYearObj.dashboardUrl,
              label: "Buka Dashboard PBD Sedia Ada",
              emptyLabel: `Pautan belum ditetapkan (Arkib ${activeYearObj.year})`,
              configKeyHint: activeYearObj.isCurrent ? "PBD_DASHBOARD_URL" : `pbdYearlyArchives[${activeYearObj.year}]`,
              size: "lg",
              variant: "gold",
            })}
          </div>
        </div>
      </div>

      <!-- Grid 6 Folder & Sumber Utama PBD (Rekod Transit, Analisis, Dialog Prestasi, DSKP, Instrumen Mutu, Panduan) -->
      <div class="mb-10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 class="text-lg sm:text-xl font-black text-[#112455] uppercase flex items-center gap-2">
            <i data-lucide="folder-git-2" class="w-5 h-5 text-[#174EA6]"></i>
            <span>Folder & Bahan Pengurusan PBD (${UI.escapeHtml(activeYearObj.year)})</span>
          </h3>
          <span class="text-xs font-bold text-[#5A688C]">
            Klik butang pada setiap kad untuk membuka folder Google Drive rasmi
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          ${pbdResourceCards
            .map((rc) => {
              const t = UI.getTheme(rc.theme);
              return `
                <section class="bg-white rounded-2xl p-6 border-2 ${t.border} shadow-sm flex flex-col justify-between gap-5">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-3">
                      <span class="px-3 py-1 rounded-lg text-xs font-black ${t.badge}">${rc.num}</span>
                      <div class="w-10 h-10 rounded-xl ${t.iconBox} border flex items-center justify-center">
                        <i data-lucide="${rc.icon}" class="w-5 h-5"></i>
                      </div>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-[#112455] uppercase">${UI.escapeHtml(rc.title)}</h4>
                    <p class="text-xs font-bold text-[#174EA6] mt-0.5">${UI.escapeHtml(rc.subtitle)}</p>
                    <p class="text-xs text-[#5A688C] mt-2 leading-relaxed">${UI.escapeHtml(rc.desc)}</p>
                  </div>

                  <div class="pt-3 border-t border-slate-100">
                    ${UI.renderExternalActionButton({
                      url: rc.url,
                      label: `Buka ${rc.title}`,
                      emptyLabel: "Pautan belum ditetapkan",
                      configKeyHint: rc.configKey,
                      size: "md",
                    })}
                  </div>
                </section>
              `;
            })
            .join("")}
        </div>
      </div>

      <!-- Ringkasan 6 Komponen Pelaksanaan PBD -->
      <div>
        <h3 class="text-lg font-black text-[#112455] uppercase mb-4 flex items-center gap-2">
          <i data-lucide="layers" class="w-5 h-5 text-[#174EA6]"></i>
          <span>Ringkasan 6 Komponen Pelaksanaan PBD</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${components
            .map(
              (c) => `
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-1 rounded-lg bg-[#081C52] text-[#FFC43D] text-xs font-black">${c.step}</span>
                <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#174EA6] flex items-center justify-center">
                  <i data-lucide="${c.icon}" class="w-5 h-5"></i>
                </div>
              </div>
              <h4 class="text-sm sm:text-base font-extrabold text-[#112455]">${UI.escapeHtml(c.title)}</h4>
              <p class="text-xs text-[#5A688C] mt-1.5 leading-relaxed">${UI.escapeHtml(c.desc)}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * 4. HALAMAN PAJSK (/pajsk) — Seksyen 5.2 Spesifikasi
   */
  function renderPajskPage(config) {
    const { dashboardLinks } = config;
    return `
      ${UI.renderPageHeader({
        badge: "Modul 02 • PAJSK",
        title: "Pentaksiran Aktiviti Jasmani, Sukan & Kokurikulum (PAJSK)",
        subtitle:
          "Pusat akses pautan sistem PAJSK serta rujukan pengurusan aktiviti sukan, badan beruniform, kelab/persatuan dan ekstra kurikulum.",
        icon: "trophy",
      })}

      <!-- Kad Utama Pautan PAJSK -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <span class="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase">Sistem & Rekod PAJSK</span>
            <h2 class="text-xl sm:text-2xl font-black text-[#112455] mt-2">
              Pautan Pengurusan PAJSK
            </h2>
            <p class="text-xs sm:text-sm text-[#5A688C] mt-1.5 leading-relaxed">
              Akses terus ke sistem atau dashboard pengurusan PAJSK sekolah untuk perekodan kehadiran, jawatan, penglibatan dan pencapaian kokurikulum murid.
            </p>
          </div>
          <div class="shrink-0">
            ${UI.renderExternalActionButton({
              url: dashboardLinks.PAJSK_DASHBOARD_URL,
              label: "Buka Pautan PAJSK",
              emptyLabel: "Pautan PAJSK akan dikemas kini oleh penyelaras",
              configKeyHint: "PAJSK_DASHBOARD_URL",
              size: "lg",
              variant: "primary",
            })}
          </div>
        </div>
      </div>

      <!-- Ruang Panduan & Dokumen Sokongan PAJSK -->
      <div class="mb-8">
        <h3 class="text-lg font-black text-[#112455] uppercase mb-4 flex items-center gap-2">
          <i data-lucide="file-text" class="w-5 h-5 text-emerald-700"></i>
          <span>Panduan & Dokumen Sokongan PAJSK</span>
        </h3>
        <div class="space-y-3">
          ${UI.renderResourceSlotRow({
            title: "Buku Panduan Pengurusan & Pentaksiran PAJSK Sekolah Rendah",
            description: "Garis panduan pemarkahan kehadiran, jawatan, penglibatan dan pencapaian aktiviti kokurikulum.",
            url: dashboardLinks.pajskPanduanUrl,
            configKey: "pajskPanduanUrl",
            emptyText: "Pautan PAJSK akan dikemas kini oleh penyelaras",
          })}
          ${UI.renderResourceSlotRow({
            title: "Borang Rumusan & Rekod Aktiviti Kokurikulum",
            description: "Templat borang kehadiran dan rekod penglibatan unit beruniform, kelab/persatuan serta sukan/permainan.",
            url: dashboardLinks.pajskBorangRekodUrl,
            configKey: "pajskBorangRekodUrl",
            emptyText: "Pautan PAJSK akan dikemas kini oleh penyelaras",
          })}
        </div>
      </div>

      <!-- Nota Ketepatan & Privasi Data -->
      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-[#5A688C] flex items-center gap-3">
        <i data-lucide="shield-alert" class="w-5 h-5 text-[#081C52] shrink-0"></i>
        <span>
          <strong>Nota Privasi:</strong> Laman ini tidak memaparkan sebarang data peribadi, pencapaian individu atau rekod markah murid secara terbuka. Semua urusan perekodan rasmi dibuat melalui pautan sistem yang dibenarkan.
        </span>
      </div>
    `;
  }

  /**
   * 5. HALAMAN MATRIKS PEMBELAJARAN TAHUN 4 (/matriks) — Seksyen 5.3 Spesifikasi
   */
  function renderMatriksPage(config) {
    const { dashboardLinks, takwimData } = config;
    const matriksTakwim = (takwimData || []).filter((t) => t.category === "Matriks Tahun 4");

    const subsections = [
      {
        num: "01",
        title: "Maklumat Pengurusan & Takwim Ujian",
        desc: "Jadual kerja, tarikh pelaksanaan yang telah disahkan dan garis panduan pengurusan Matriks Pembelajaran Tahun 4.",
        url: dashboardLinks.matriksTakwimUrl,
        key: "matriksTakwimUrl",
        icon: "calendar-check",
      },
      {
        num: "02",
        title: "Jawatankuasa & Agihan Tugas",
        desc: "Senarai jawatankuasa induk, penyelaras aliran, penggubal/penyemak yang dilantik serta perincian bidang tugas.",
        url: dashboardLinks.matriksJawatankuasaUrl,
        key: "matriksJawatankuasaUrl",
        icon: "users",
      },
      {
        num: "03",
        title: "Pengurusan Bahan Ujian & Keselamatan Dokumen",
        desc: "Prosedur kawalan keselamatan instrumen, tatacara cetakan, penyimpanan bahan terkawal dan pematuhan kerahsiaan.",
        url: dashboardLinks.matriksPengurusanBahanUrl,
        key: "matriksPengurusanBahanUrl",
        icon: "lock",
      },
      {
        num: "04",
        title: "Pengawasan & Kehadiran Calon",
        desc: "Jadual pengawasan, tatacara pengendalian di dalam bilik/dewan ujian dan perekodan kehadiran calon.",
        url: dashboardLinks.matriksPengawasanKehadiranUrl,
        key: "matriksPengawasanKehadiranUrl",
        icon: "user-check",
      },
      {
        num: "05",
        title: "Pemeriksaan / Pemarkahan",
        desc: "Penyelarasan panduan penskoran, moderasi pemeriksaan skrip dan ketetapan tempoh semakan.",
        url: dashboardLinks.matriksPemeriksaanUrl,
        key: "matriksPemeriksaanUrl",
        icon: "check-square",
      },
      {
        num: "06",
        title: "Data, Analisis & Pelaporan",
        desc: "Perekodan keputusan, analisis pencapaian mengikut mata pelajaran dan penyediaan laporan kepada pihak pentadbiran.",
        url: dashboardLinks.matriksAnalisisPelaporanUrl,
        key: "matriksAnalisisPelaporanUrl",
        icon: "bar-chart-3",
      },
      {
        num: "07",
        title: "Dokumentasi & Tindakan Susulan",
        desc: "Penyusunan fail pengurusan Matriks Tahun 4, pascanilai (post-mortem) dan perancangan intervensi pembelajaran.",
        url: dashboardLinks.matriksDokumentasiSusulanUrl,
        key: "matriksDokumentasiSusulanUrl",
        icon: "file-check-2",
      },
    ];

    return `
      ${UI.renderPageHeader({
        badge: "Modul 03 • Matriks Tahun 4",
        title: "Matriks Pembelajaran Tahun 4",
        subtitle:
          "Pautan pusat kepada sistem/dashboard Matriks Pembelajaran Tahun 4 sedia ada serta 7 subseksyen pengurusan dan keselamatan dokumen.",
        icon: "layout-grid",
      })}

      <!-- Amaran Keselamatan Dokumen & Bahan Terkawal -->
      <div class="mb-8 p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-500 flex items-start gap-3.5">
        <i data-lucide="shield-alert" class="w-5 h-5 text-amber-700 shrink-0 mt-0.5"></i>
        <div class="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong class="font-extrabold">Peringatan Keselamatan Dokumen & Privasi:</strong>
          Kertas soalan, skema pemarkahan sulit dan data peribadi murid <strong>tidak dipaparkan</strong> di laman terbuka ini. Pautan ke bahan terkawal hanya menggunakan lokasi rasmi yang ditentukan dengan kawalan akses (permission) yang dibenarkan.
        </div>
      </div>

      <!-- Butang Utama Buka Dashboard Matriks Sedia Ada -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <span class="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-extrabold uppercase">Sistem Sedia Ada</span>
            <h2 class="text-xl sm:text-2xl font-black text-[#112455] mt-2">
              Dashboard Matriks Pembelajaran Tahun 4
            </h2>
            <p class="text-xs sm:text-sm text-[#5A688C] mt-1.5 leading-relaxed">
              Klik butang di sebelah untuk membuka sistem atau dashboard pengurusan Matriks Pembelajaran Tahun 4 sedia ada sekolah.
            </p>
          </div>
          <div class="shrink-0">
            ${UI.renderExternalActionButton({
              url: dashboardLinks.MATRIKS_DASHBOARD_URL,
              label: "Buka Dashboard Matriks Sedia Ada",
              emptyLabel: "Pautan belum ditetapkan",
              configKeyHint: "MATRIKS_DASHBOARD_URL",
              size: "lg",
              variant: "primary",
            })}
          </div>
        </div>
      </div>

      <!-- Takwim Disahkan Matriks Tahun 4 -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-8">
        <h3 class="text-base sm:text-lg font-black text-[#112455] uppercase mb-3 flex items-center gap-2">
          <i data-lucide="calendar-days" class="w-5 h-5 text-amber-600"></i>
          <span>Tarikh & Takwim Ujian Matriks Tahun 4 (Disahkan Sahaja)</span>
        </h3>
        ${
          matriksTakwim.length > 0
            ? `<div class="space-y-2.5">
                ${matriksTakwim
                  .map(
                    (t) => `
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                    <div>
                      <h4 class="text-sm font-bold text-[#112455]">${UI.escapeHtml(t.title)}</h4>
                      <p class="text-xs text-[#5A688C]">${UI.escapeHtml(t.description)}</p>
                    </div>
                    <span class="px-3 py-1 rounded-lg bg-[#081C52] text-[#FFC43D] text-xs font-bold">${UI.escapeHtml(t.startDate)}</span>
                  </div>
                `
                  )
                  .join("")}
              </div>`
            : UI.renderEmptyState({
                icon: "calendar-off",
                title: "Tiada tarikh ujian Matriks Tahun 4 dimasukkan",
                message:
                  "Hanya tarikh rasmi yang telah disahkan oleh penyelaras akan dipaparkan di bahagian ini.",
                configHint: "src/data/dashboardConfig.ts -> takwimData",
              })
        }
      </div>

      <!-- 7 Subseksyen Pengurusan Matriks Tahun 4 -->
      <div>
        <h3 class="text-lg font-black text-[#112455] uppercase mb-4 flex items-center gap-2">
          <i data-lucide="list-checks" class="w-5 h-5 text-[#174EA6]"></i>
          <span>Subseksyen Pengurusan Matriks Pembelajaran Tahun 4</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${subsections
            .map(
              (sub) => `
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between gap-4">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="px-2.5 py-1 rounded-lg bg-[#081C52] text-[#FFC43D] text-xs font-black">${sub.num}</span>
                  <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
                    <i data-lucide="${sub.icon}" class="w-5 h-5"></i>
                  </div>
                </div>
                <h4 class="text-base font-extrabold text-[#112455]">${UI.escapeHtml(sub.title)}</h4>
                <p class="text-xs text-[#5A688C] mt-1 leading-relaxed">${UI.escapeHtml(sub.desc)}</p>
              </div>
              <div class="pt-3 border-t border-slate-100">
                ${UI.renderExternalActionButton({
                  url: sub.url,
                  label: "Buka Pautan / Folder",
                  emptyLabel: "Pautan belum ditetapkan",
                  configKeyHint: sub.key,
                  size: "md",
                })}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * 6. HALAMAN PPsi (/ppsi) — Seksyen 5.4 Spesifikasi
   */
  function renderPpsiPage(config) {
    const { dashboardLinks } = config;
    return `
      ${UI.renderPageHeader({
        badge: "Modul 04 • PPsi",
        title: "PPsi",
        subtitle:
          "Ruang rujukan rasmi, panduan, instrumen yang dibenarkan, dokumen sokongan dan makluman pelaksanaan berkaitan Pentaksiran Psikometrik (PPsi).",
        icon: "brain-circuit",
      })}

      <!-- Pautan Utama Rasmi PPsi -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <span class="px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 text-xs font-extrabold uppercase">Pautan Rasmi</span>
            <h2 class="text-xl sm:text-2xl font-black text-[#112455] mt-2">
              Pautan Rasmi Pengurusan PPsi
            </h2>
            <p class="text-xs sm:text-sm text-[#5A688C] mt-1.5 leading-relaxed">
              Akses pautan rasmi yang ditetapkan oleh Unit Bimbingan dan Kaunseling / penyelaras bagi pengurusan PPsi.
            </p>
          </div>
          <div class="shrink-0">
            ${UI.renderExternalActionButton({
              url: dashboardLinks.PPSI_PORTAL_URL,
              label: "Buka Pautan Rasmi PPsi",
              emptyLabel: "Pautan belum ditetapkan",
              configKeyHint: "PPSI_PORTAL_URL",
              size: "lg",
            })}
          </div>
        </div>
      </div>

      <!-- Ruang Pautan Panduan, Instrumen, Dokumen Sokongan & Makluman Pelaksanaan -->
      <div class="space-y-3 mb-6">
        ${UI.renderResourceSlotRow({
          title: "Panduan Pelaksanaan PPsi",
          description: "Rujukan dan garis panduan rasmi pelaksanaan PPsi mengikut arahan semasa.",
          url: dashboardLinks.ppsiPanduanUrl,
          configKey: "ppsiPanduanUrl",
          emptyText: "Pautan belum ditetapkan",
        })}
        ${UI.renderResourceSlotRow({
          title: "Instrumen yang Dibenarkan",
          description: "Pautan kepada instrumen rasmi yang dibenarkan dan disahkan oleh pihak berwajib.",
          url: dashboardLinks.ppsiInstrumenUrl,
          configKey: "ppsiInstrumenUrl",
          emptyText: "Pautan belum ditetapkan",
        })}
        ${UI.renderResourceSlotRow({
          title: "Dokumen Sokongan PPsi",
          description: "Borang pengurusan, rekod pentadbiran dan bahan rujukan sokongan Unit Bimbingan & Kaunseling.",
          url: dashboardLinks.ppsiDokumenSokonganUrl,
          configKey: "ppsiDokumenSokonganUrl",
          emptyText: "Pautan belum ditetapkan",
        })}
        ${UI.renderResourceSlotRow({
          title: "Makluman Pelaksanaan Semasa",
          description: "Surat siaran, jadual pelaksanaan yang disahkan dan makluman semasa berkaitan PPsi.",
          url: dashboardLinks.ppsiMaklumanPelaksanaanUrl,
          configKey: "ppsiMaklumanPelaksanaanUrl",
          emptyText: "Pautan belum ditetapkan",
        })}
      </div>
    `;
  }

  /**
   * 7. HALAMAN SEGAK & BMI 5–9 TAHUN (/segak-bmi) — Seksyen 5.5 Spesifikasi
   * Dua subbahagian yang jelas dan berasingan: SEGAK dan BMI 5–9 Tahun
   */
  function renderSegakBmiPage(config) {
    const { dashboardLinks } = config;
    return `
      ${UI.renderPageHeader({
        badge: "Modul 05 • SEGAK & BMI 5–9 Tahun",
        title: "SEGAK & BMI 5–9 Tahun",
        subtitle:
          "Halaman induk yang memisahkan subbahagian SEGAK dan BMI 5–9 Tahun secara jelas supaya panduan, instrumen dan rekod tidak bercampur.",
        icon: "activity",
      })}

      <!-- Makluman Pemisahan Rekod & Kerahsiaan Data -->
      <div class="mb-8 p-5 rounded-2xl bg-rose-50 border-l-4 border-rose-600 flex items-start gap-3.5">
        <i data-lucide="info" class="w-5 h-5 text-rose-700 shrink-0 mt-0.5"></i>
        <div class="text-xs sm:text-sm text-rose-950 leading-relaxed">
          <strong class="font-extrabold">Pemisahan Subbahagian & Privasi Murid:</strong>
          Data, templat dan instrumen bagi <strong>SEGAK</strong> serta <strong>BMI 5–9 Tahun</strong> diuruskan secara berasingan mengikut kumpulan sasaran dan arahan semasa. Laman ini tidak membuat diagnosis kesihatan automatik dan tidak menyimpan data sensitif murid secara terbuka.
        </div>
      </div>

      <!-- DUA SUBBAHAGIAN BERASINGAN -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- SUBBAHAGIAN A: SEGAK -->
        <section aria-labelledby="heading-segak" class="bg-white rounded-3xl p-6 sm:p-7 border-2 border-blue-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#081C52] text-[#FFC43D] flex items-center justify-center shadow-xs">
                  <i data-lucide="dumbbell" class="w-6 h-6"></i>
                </div>
                <div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-800">Subbahagian 1</span>
                  <h2 id="heading-segak" class="text-xl sm:text-2xl font-black text-[#112455] uppercase mt-0.5">
                    SEGAK
                  </h2>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-[#5A688C] mb-5 leading-relaxed">
              Rujukan khusus bagi pelaksanaan ujian Standard Kecergasan Fizikal Kebangsaan Untuk Murid Sekolah Malaysia (SEGAK).
            </p>

            <div class="space-y-3">
              ${UI.renderResourceSlotRow({
                title: "1. Panduan Pelaksanaan SEGAK",
                description: "Prosedur rasmi, turutan ujian dan tatacara keselamatan pelaksanaan SEGAK.",
                url: dashboardLinks.segakPanduanUrl,
                configKey: "segakPanduanUrl",
              })}
              ${UI.renderResourceSlotRow({
                title: "2. Instrumen / Borang SEGAK",
                description: "Borang skor dan instrumen ujian SEGAK yang diluluskan atau digunakan oleh sekolah.",
                url: dashboardLinks.segakInstrumenBorangUrl,
                configKey: "segakInstrumenBorangUrl",
              })}
              ${UI.renderResourceSlotRow({
                title: "3. Rekod / Analisis SEGAK",
                description: "Pautan ke sistem perekodan rasmi atau rumusan analisis SEGAK (jika disediakan).",
                url: dashboardLinks.segakRekodAnalisisUrl,
                configKey: "segakRekodAnalisisUrl",
              })}
              ${UI.renderResourceSlotRow({
                title: "4. Tindakan Susulan SEGAK",
                description: "Perancangan program intervensi kecergasan dan catatan tindakan susulan Panitia PJPK.",
                url: dashboardLinks.segakTindakanSusulanUrl,
                configKey: "segakTindakanSusulanUrl",
              })}
            </div>
          </div>
        </section>

        <!-- SUBBAHAGIAN B: BMI 5–9 TAHUN -->
        <section aria-labelledby="heading-bmi" class="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                  <i data-lucide="heart-pulse" class="w-6 h-6"></i>
                </div>
                <div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">Subbahagian 2</span>
                  <h2 id="heading-bmi" class="text-xl sm:text-2xl font-black text-[#112455] uppercase mt-0.5">
                    BMI 5–9 Tahun
                  </h2>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-[#5A688C] mb-5 leading-relaxed">
              Rujukan khusus dan berasingan bagi pelaksanaan ukuran Indeks Jisim Badan (BMI) murid berumur 5 hingga 9 tahun mengikut arahan semasa.
            </p>

            <div class="space-y-3">
              ${UI.renderResourceSlotRow({
                title: "1. Panduan & Rujukan BMI 5–9 Tahun",
                description: "Garis panduan pengukuran tinggi dan berat murid 5–9 tahun mengikut arahan semasa.",
                url: dashboardLinks.bmiPanduanRujukanUrl,
                configKey: "bmiPanduanRujukanUrl",
              })}
              ${UI.renderResourceSlotRow({
                title: "2. Rekod atau Templat BMI 5–9 Tahun",
                description: "Templat perekodan ukuran BMI 5–9 tahun yang dibenarkan oleh pihak sekolah / KPM.",
                url: dashboardLinks.bmiRekodTemplatUrl,
                configKey: "bmiRekodTemplatUrl",
              })}
              ${UI.renderResourceSlotRow({
                title: "3. Analisis / Pelaporan BMI 5–9 Tahun",
                description: "Ruang pelaporan dan rumusan data BMI 5–9 tahun mengikut keperluan sekolah.",
                url: dashboardLinks.bmiAnalisisPelaporanUrl,
                configKey: "bmiAnalisisPelaporanUrl",
              })}
              ${UI.renderResourceSlotRow({
                title: "4. Tindakan Susulan BMI 5–9 Tahun",
                description: "Catatan intervensi dan program gaya hidup sihat berdasarkan dapatan sekolah.",
                url: dashboardLinks.bmiTindakanSusulanUrl,
                configKey: "bmiTindakanSusulanUrl",
              })}
            </div>
          </div>
        </section>
      </div>
    `;
  }

  /**
   * 8. HALAMAN TAKWIM PENTAKSIRAN (/takwim) — Seksyen 5.6 Spesifikasi
   */
  function renderTakwimPage(config, selectedCategory = "SEMUA") {
    const { takwimData } = config;
    const allItems = takwimData || [];
    const categories = [
      "SEMUA",
      "PBS",
      "PBD",
      "PAJSK",
      "Matriks Tahun 4",
      "PPsi",
      "SEGAK & BMI",
      "Penjaminan Mutu",
    ];

    const filteredItems =
      selectedCategory === "SEMUA"
        ? allItems
        : allItems.filter((item) => item.category === selectedCategory);

    const filterBtnsHtml = categories
      .map((cat) => {
        const isActive = cat === selectedCategory;
        return `
          <button
            type="button"
            data-takwim-filter="${UI.escapeHtml(cat)}"
            class="px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer border ${
              isActive
                ? "bg-[#081C52] text-[#FFC43D] border-[#081C52] shadow-sm"
                : "bg-white hover:bg-slate-100 text-[#112455] border-slate-200"
            }"
          >
            ${UI.escapeHtml(cat)}
          </button>
        `;
      })
      .join("");

    const listHtml =
      filteredItems.length > 0
        ? `<div class="space-y-3">
            ${filteredItems
              .map(
                (item) => `
              <article class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">${UI.escapeHtml(item.category)}</span>
                    <span class="text-xs font-extrabold text-rose-700">
                      ${UI.escapeHtml(item.startDate)}${item.endDate ? ` – ${UI.escapeHtml(item.endDate)}` : ""}
                    </span>
                  </div>
                  <h3 class="text-base font-extrabold text-[#112455]">${UI.escapeHtml(item.title)}</h3>
                  <p class="text-xs sm:text-sm text-[#5A688C] mt-1">${UI.escapeHtml(item.description)}</p>
                </div>
                ${
                  item.sourceUrl
                    ? `<div class="shrink-0">
                        <a href="${UI.escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081C52] text-white text-xs font-bold">
                          <span>Buka Sumber</span>
                          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        </a>
                      </div>`
                    : ""
                }
              </article>
            `
              )
              .join("")}
          </div>`
        : UI.renderEmptyState({
            icon: "calendar-x-2",
            title: "Tiada maklumat takwim dimasukkan",
            message:
              "Semua tarikh dalam takwim ini mesti datang daripada data rasmi yang telah dimasukkan dan disahkan oleh penyelaras. Tiada tarikh anggaran atau tarikh rekaan dipaparkan.",
            configHint: "src/data/dashboardConfig.ts -> takwimData",
          });

    return `
      ${UI.renderPageHeader({
        badge: "Modul 06 • Takwim Pentaksiran",
        title: "Takwim Pentaksiran PBS PJ3",
        subtitle:
          "Jadual pelaksanaan dan tarikh penting pentaksiran yang telah disahkan oleh pihak sekolah / KPM / JPN / PPD.",
        icon: "calendar-days",
      })}

      <!-- Penapis Kategori Takwim -->
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <span class="text-xs font-extrabold uppercase tracking-wider text-[#112455] flex items-center gap-1.5">
            <i data-lucide="filter" class="w-4 h-4 text-[#174EA6]"></i>
            <span>Tapis Mengikut Kategori Pentaksiran:</span>
          </span>
          <span class="text-xs text-[#5A688C]">Jumlah item disahkan: <strong>${filteredItems.length}</strong></span>
        </div>
        <div class="flex flex-wrap gap-2">
          ${filterBtnsHtml}
        </div>
      </div>

      <!-- Senarai Item Takwim -->
      ${listHtml}
    `;
  }

  /**
   * 9. HALAMAN PENJAMINAN MUTU PBS (/penjaminan-mutu) — Seksyen 5.7 Spesifikasi
   */
  function renderPenjaminanMutuPage(config) {
    const { dashboardLinks } = config;
    const pillars = [
      {
        num: "01",
        title: "Pemantauan",
        subtitle: "Perancangan, instrumen dan rekod pemantauan",
        desc: "Memastikan pelaksanaan PBS mengikut garis panduan dan jadual kerja yang ditetapkan oleh Jawatankuasa PBS sekolah.",
        url: dashboardLinks.mutuPemantauanUrl,
        key: "mutuPemantauanUrl",
        icon: "eye",
        theme: "blue",
      },
      {
        num: "02",
        title: "Pengesanan",
        subtitle: "Dapatan, isu, evidens dan keperluan sokongan",
        desc: "Mengenal pasti kekuatan, isu pelaksanaan, kesesuaian instrumen pentaksiran serta keperluan sokongan guru dan murid.",
        url: dashboardLinks.mutuPengesananUrl,
        key: "mutuPengesananUrl",
        icon: "search-check",
        theme: "emerald",
      },
      {
        num: "03",
        title: "Penyelarasan",
        subtitle: "Dialog prestasi, semak silang dan penyamaan kefahaman",
        desc: "Menyelaras kefahaman guru terhadap Standard Prestasi, rubrik penskoran dan ketekalan pertimbangan profesional.",
        url: dashboardLinks.mutuPenyelarasanUrl,
        key: "mutuPenyelarasanUrl",
        icon: "scale",
        theme: "amber",
      },
      {
        num: "04",
        title: "Pementoran",
        subtitle: "Bimbingan profesional, catatan dan susulan",
        desc: "Memberi bimbingan, latihan dalaman dan sokongan profesional secara berterusan kepada guru dalam melaksanakan pentaksiran.",
        url: dashboardLinks.mutuPementoranUrl,
        key: "mutuPementoranUrl",
        icon: "users",
        theme: "purple",
      },
      {
        num: "05",
        title: "Moderasi / Perbincangan Profesional",
        subtitle: "Pertimbangan profesional dan keseragaman keputusan",
        desc: "Perbincangan profesional antara guru mata pelajaran / panitia bagi memastikan kesahan dan kebolehpercayaan keputusan pentaksiran (jika berkaitan dan dilaksanakan).",
        url: dashboardLinks.mutuModerasiUrl,
        key: "mutuModerasiUrl",
        icon: "messages-square",
        theme: "indigo",
      },
      {
        num: "06",
        title: "Tindakan Susulan",
        subtitle: "Tindakan, pegawai bertanggungjawab, tarikh sasaran dan status",
        desc: "Rekod pelan tindakan penambahbaikan berdasarkan dapatan penjaminan mutu bersama agihan pegawai bertanggungjawab dan tarikh sasaran.",
        url: dashboardLinks.mutuTindakanSusulanUrl,
        key: "mutuTindakanSusulanUrl",
        icon: "clipboard-check",
        theme: "rose",
      },
    ];

    return `
      ${UI.renderPageHeader({
        badge: "Modul 07 • Penjaminan Mutu PBS",
        title: "Penjaminan Mutu PBS",
        subtitle:
          "Pengurusan pemantauan, pengesanan, penyelarasan, pementoran, moderasi / perbincangan profesional serta rekod tindakan susulan.",
        icon: "shield-check",
      })}

      <div class="mb-8 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs sm:text-sm text-[#112455] flex items-start gap-3">
        <i data-lucide="check-circle" class="w-5 h-5 text-indigo-700 shrink-0 mt-0.5"></i>
        <span>
          Setiap bahagian di bawah menyediakan ruang pautan ke borang, instrumen, folder atau templat yang ditetapkan oleh sekolah. Status pautan akan diaktifkan sebaik sahaja URL dimasukkan oleh penyelaras.
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${pillars
          .map((p) => {
            const t = UI.getTheme(p.theme);
            return `
              <section class="bg-white rounded-2xl p-6 border-2 ${t.border} shadow-sm flex flex-col justify-between gap-5">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg text-xs font-black ${t.badge}">${p.num}</span>
                    <div class="w-10 h-10 rounded-xl ${t.iconBox} border flex items-center justify-center">
                      <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                    </div>
                  </div>
                  <h2 class="text-lg font-black text-[#112455] uppercase">${UI.escapeHtml(p.title)}</h2>
                  <p class="text-xs font-bold text-[#174EA6] mt-0.5">${UI.escapeHtml(p.subtitle)}</p>
                  <p class="text-xs text-[#5A688C] mt-2.5 leading-relaxed">${UI.escapeHtml(p.desc)}</p>
                </div>

                <div class="pt-4 border-t border-slate-100">
                  ${UI.renderExternalActionButton({
                    url: p.url,
                    label: "Buka Borang / Instrumen",
                    emptyLabel: "Pautan belum ditetapkan",
                    configKeyHint: p.key,
                    size: "md",
                  })}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    `;
  }

  /**
   * 10. HALAMAN PUSAT RUJUKAN PBS (/pusat-rujukan) — Seksyen 5.8 Spesifikasi
   * Lengkap dengan 7 kategori dokumen + carian ringkas + keadaan kosong jelas
   */
  function renderPusatRujukanPage(config, filterState = { searchQuery: "", category: "SEMUA" }) {
    const { referenceDocumentsData, referenceCategories } = config;
    const docs = referenceDocumentsData || [];
    const q = (filterState.searchQuery || "").trim().toLowerCase();
    const selectedCat = filterState.category || "SEMUA";

    const filteredDocs = docs.filter((d) => {
      const matchCat = selectedCat === "SEMUA" || d.category === selectedCat;
      const matchQuery =
        !q ||
        (d.title && d.title.toLowerCase().includes(q)) ||
        (d.summary && d.summary.toLowerCase().includes(q)) ||
        (d.category && d.category.toLowerCase().includes(q)) ||
        (d.ownerOrSource && d.ownerOrSource.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });

    const categoryCardsHtml = (referenceCategories || [])
      .map((cat) => {
        const count = docs.filter((d) => d.category === cat.name).length;
        const isSelected = selectedCat === cat.name;
        const t = UI.getTheme(cat.color);
        return `
          <button
            type="button"
            data-ref-category="${UI.escapeHtml(cat.name)}"
            class="text-left p-4 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between gap-3 ${
              isSelected
                ? "bg-[#081C52] text-white border-[#FFC43D] shadow-md"
                : `bg-white hover:bg-slate-50 ${t.border}`
            }"
          >
            <div class="flex items-center justify-between gap-2 w-full">
              <div class="w-9 h-9 rounded-xl ${isSelected ? "bg-white/15 text-[#FFC43D]" : t.iconBox} border flex items-center justify-center">
                <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                isSelected ? "bg-[#FFC43D] text-[#081C52]" : "bg-slate-100 text-slate-700"
              }">
                ${count} Dokumen
              </span>
            </div>
            <div>
              <h3 class="text-xs sm:text-sm font-extrabold ${isSelected ? "text-white" : "text-[#112455]"}">
                ${UI.escapeHtml(cat.name)}
              </h3>
              <p class="text-[11px] mt-0.5 leading-snug ${isSelected ? "text-blue-100" : "text-[#5A688C]"}">
                ${UI.escapeHtml(cat.description)}
              </p>
            </div>
          </button>
        `;
      })
      .join("");

    const docsHtml =
      filteredDocs.length > 0
        ? `<div class="space-y-3">
            ${filteredDocs
              .map(
                (doc) => `
              <article class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">${UI.escapeHtml(doc.category)}</span>
                    ${doc.versionOrDate ? `<span class="text-xs font-semibold text-slate-500">Versi/Tarikh: ${UI.escapeHtml(doc.versionOrDate)}</span>` : ""}
                    ${doc.ownerOrSource ? `<span class="text-xs font-semibold text-slate-600">• Sumber: ${UI.escapeHtml(doc.ownerOrSource)}</span>` : ""}
                  </div>
                  <h4 class="text-base font-extrabold text-[#112455]">${UI.escapeHtml(doc.title)}</h4>
                  <p class="text-xs sm:text-sm text-[#5A688C] mt-1 leading-relaxed">${UI.escapeHtml(doc.summary)}</p>
                </div>
                <div class="shrink-0">
                  ${UI.renderExternalActionButton({
                    url: doc.url,
                    label: "Buka / Muat Turun",
                    emptyLabel: "Pautan belum ditetapkan",
                  })}
                </div>
              </article>
            `
              )
              .join("")}
          </div>`
        : UI.renderEmptyState({
            icon: "file-search",
            title:
              docs.length === 0
                ? "Belum ada dokumen rujukan dimasukkan"
                : "Tiada dokumen sepadan dengan carian / kategori",
            message:
              docs.length === 0
                ? "Senarai panduan rasmi, surat siaran, borang, instrumen dan templat sekolah akan dipaparkan di sini selepas pautan sebenar dimasukkan ke dalam fail konfigurasi. Tiada tajuk pekeliling atau URL rekaan dipaparkan."
                : "Cuba kata kunci lain atau pilih kategori 'SEMUA' untuk melihat semula senarai penuh.",
            configHint: "src/data/dashboardConfig.ts -> referenceDocumentsData",
          });

    return `
      ${UI.renderPageHeader({
        badge: "Modul 08 • Pusat Rujukan PBS",
        title: "Pusat Rujukan PBS",
        subtitle:
          "Kumpulan panduan pengurusan PBS, panduan pelaksanaan PBD, pekeliling / surat siaran, borang, instrumen, templat sekolah dan pautan rasmi KPM / JPN / PPD.",
        icon: "library",
      })}

      <!-- Bar Carian & Penapis Kategori -->
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-6">
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div class="relative flex-1">
            <label for="refSearchInput" class="sr-only">Cari dokumen rujukan PBS</label>
            <input
              id="refSearchInput"
              type="search"
              value="${UI.escapeHtml(filterState.searchQuery || "")}"
              placeholder="Cari nama dokumen, kategori, sumber atau kata kunci..."
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-[#112455] focus:bg-white focus:border-[#174EA6] focus:outline-none"
            />
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              data-ref-category="SEMUA"
              class="px-4 py-2.5 rounded-xl text-xs font-extrabold border transition cursor-pointer ${
                selectedCat === "SEMUA"
                  ? "bg-[#081C52] text-[#FFC43D] border-[#081C52]"
                  : "bg-slate-100 hover:bg-slate-200 text-[#112455] border-slate-200"
              }"
            >
              Semua Kategori (${docs.length})
            </button>
          </div>
        </div>
      </div>

      <!-- 7 Kategori Pusat Rujukan PBS -->
      <div class="mb-8">
        <h2 class="text-sm font-black uppercase tracking-wider text-[#112455] mb-3">
          7 Kategori Dokumen Rujukan (Klik untuk tapis)
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          ${categoryCardsHtml}
        </div>
      </div>

      <!-- Senarai Dokumen -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-base sm:text-lg font-black text-[#112455] uppercase">
            Senarai Dokumen: <span class="text-[#174EA6]">${UI.escapeHtml(selectedCat)}</span>
          </h2>
        </div>
        ${docsHtml}
      </div>
    `;
  }

  /**
   * 11. HALAMAN SENARAI SEMAK FILING (/senarai-semak) — Seksyen 5.9 Spesifikasi
   * Mengandungi 3 kad senarai semak (PBS, PBD, Matriks Tahun 4), pemeriksaan fail Excel sebenar,
   * dan paparan mesra cetakan (print).
   */
  function renderSenaraiSemakPage(config) {
    const { dashboardLinks } = config;
    const isExcelReady = Boolean(dashboardLinks.filingCombinedExcelAvailable);

    const checklists = [
      {
        num: "01",
        title: "Senarai Semak Filing PBS",
        subtitle: "Pengurusan Fail Induk Pentaksiran Berasaskan Sekolah",
        urlKey: "filingPbsIndividualUrl",
        url: dashboardLinks.filingPbsIndividualUrl,
        theme: "blue",
        items: [
          "Carta Organisasi & Jawatankuasa Induk PBS Sekolah",
          "Surat Lantikan Jawatankuasa PBS & Penyelaras Komponen",
          "Takwim Tahunan & Jadual Kerja Pelaksanaan PBS",
          "Minit Mesyuarat Jawatankuasa PBS & Maklum Balas",
          "Pekeliling Ikhtisas, Surat Siaran & Garis Panduan Semasa",
          "Rekod Penjaminan Mutu (Pemantauan, Pengesanan, Penyelarasan & Pementoran)",
        ],
      },
      {
        num: "02",
        title: "Senarai Semak Filing PBD",
        subtitle: "Pengurusan Fail & Rekod Pentaksiran Bilik Darjah",
        urlKey: "filingPbdIndividualUrl",
        url: dashboardLinks.filingPbdIndividualUrl,
        theme: "emerald",
        items: [
          "Senarai Penyelaras PBD Mengikut Aliran & Panitia Mata Pelajaran",
          "Dokumen Standard Kurikulum dan Pentaksiran (DSKP) / RPT Rujukan",
          "Templat & Rekod Transit PBD Guru Mata Pelajaran",
          "Rekod Penyelarasan & Moderasi Pertimbangan Profesional Panitia",
          "Rumusan Pelaporan PBD & Bahan Dialog Prestasi",
          "Rekod Tindakan Susulan / Intervensi Pengukuhan & Pemulihan",
        ],
      },
      {
        num: "03",
        title: "Senarai Semak Filing Matriks Pembelajaran Tahun 4",
        subtitle: "Pengurusan Dokumentasi Matriks Pembelajaran Tahun 4",
        urlKey: "filingMatriksIndividualUrl",
        url: dashboardLinks.filingMatriksIndividualUrl,
        theme: "amber",
        items: [
          "Jawatankuasa Pelaksana & Agihan Tugas Matriks Pembelajaran Tahun 4",
          "Takwim & Jadual Pelaksanaan yang Telah Disahkan",
          "Rekod Pengurusan Keselamatan Bahan & Serahan Instrumen",
          "Jadual Pengawasan & Rekod Kehadiran Calon",
          "Rekod Penyelarasan Pemeriksaan / Panduan Penskoran",
          "Laporan Analisis Pencapaian & Tindakan Susulan Panitia",
        ],
      },
    ];

    return `
      ${UI.renderPageHeader({
        badge: "Modul 09 • Senarai Semak Filing",
        title: "Senarai Semak Filing PBS, PBD & Matriks",
        subtitle:
          "Panduan dan senarai semak penyusunan fail bagi menyokong persediaan dokumentasi serta pemantauan berkala.",
        icon: "clipboard-check",
      })}

      <!-- Penerangan & Penafian Mandatori (Seksyen 5.9) -->
      <div class="mb-8 p-5 rounded-2xl bg-teal-50 border-l-4 border-teal-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-start gap-3.5">
          <i data-lucide="info" class="w-5 h-5 text-teal-700 shrink-0 mt-0.5"></i>
          <p class="text-xs sm:text-sm text-teal-950 leading-relaxed">
            <strong>Panduan Penggunaan:</strong> Senarai semak ini ialah <strong>alat kerja</strong> untuk membantu penyusunan fail dan mesti disemak dengan arahan semasa sekolah / KPM / JPN / PPD. Tidak semua item di bawah adalah mandatori bagi setiap situasi.
          </p>
        </div>
        <button
          type="button"
          onclick="window.print()"
          class="no-print shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-teal-100 text-teal-900 border border-teal-300 text-xs font-extrabold shadow-xs transition cursor-pointer"
        >
          <i data-lucide="printer" class="w-4 h-4"></i>
          <span>Cetak Senarai Semak</span>
        </button>
      </div>

      <!-- Kotak Muat Turun Fail Excel Gabungan -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm mb-8 print-card">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <span class="px-2.5 py-1 rounded-md bg-teal-100 text-teal-900 text-xs font-extrabold uppercase">Fail Muat Turun Utama</span>
            <h2 class="text-xl sm:text-2xl font-black text-[#112455] mt-2">
              Senarai Semak Filing Lengkap (Format Excel)
            </h2>
            <p class="text-xs sm:text-sm text-[#5A688C] mt-1 leading-relaxed">
              Lokasi sasaran fail dalam projek: <code class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs">${UI.escapeHtml(dashboardLinks.filingCombinedExcelPath)}</code>
            </p>
          </div>
          <div class="shrink-0 no-print">
            ${
              isExcelReady
                ? `<a
                    href="${UI.escapeHtml(dashboardLinks.filingCombinedExcelPath)}"
                    download
                    class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-extrabold shadow-md transition"
                  >
                    <i data-lucide="download" class="w-4 h-4"></i>
                    <span>Muat Turun Semua Senarai Semak (Excel)</span>
                  </a>`
                : `<div class="flex flex-col sm:flex-row sm:items-center gap-2.5">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-200 text-slate-500 border border-slate-300 text-xs sm:text-sm font-bold cursor-not-allowed select-none"
                    >
                      <i data-lucide="file-x" class="w-4 h-4"></i>
                      <span>Muat Turun Semua Senarai Semak (Excel)</span>
                    </button>
                    <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-extrabold">
                      <i data-lucide="alert-circle" class="w-4 h-4 text-amber-600"></i>
                      <span>Fail belum dimuat naik</span>
                    </span>
                  </div>`
            }
          </div>
        </div>
      </div>

      <!-- 3 Kad Senarai Semak Filing (PBS, PBD & Matriks Tahun 4) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        ${checklists
          .map((c) => {
            const t = UI.getTheme(c.theme);
            return `
              <section class="bg-white rounded-2xl p-6 border-2 ${t.border} shadow-sm flex flex-col justify-between gap-5 print-card">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg text-xs font-black ${t.badge}">${c.num}</span>
                    <span class="text-[11px] font-bold text-[#5A688C]">Alat Kerja Penyusunan Fail</span>
                  </div>
                  <h3 class="text-lg font-black text-[#112455] uppercase">${UI.escapeHtml(c.title)}</h3>
                  <p class="text-xs font-semibold text-[#5A688C] mt-0.5 mb-4">${UI.escapeHtml(c.subtitle)}</p>

                  <ul class="space-y-2.5 border-t border-slate-100 pt-4">
                    ${c.items
                      .map(
                        (itemText) => `
                      <li class="flex items-start gap-2.5 text-xs text-[#112455] leading-relaxed">
                        <span class="w-4 h-4 rounded border border-slate-400 inline-flex items-center justify-center shrink-0 mt-0.5 bg-slate-50"></span>
                        <span>${UI.escapeHtml(itemText)}</span>
                      </li>
                    `
                      )
                      .join("")}
                  </ul>
                </div>

                <div class="pt-4 border-t border-slate-100 no-print">
                  ${UI.renderExternalActionButton({
                    url: c.url,
                    label: "Muat Turun Fail Individu",
                    emptyLabel: "Fail belum dimuat naik",
                    configKeyHint: c.urlKey,
                    size: "md",
                  })}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    `;
  }

  /**
   * 12. HALAMAN PENGURUSAN DOKUMEN (/pengurusan-dokumen) — Seksyen 5.10 Spesifikasi
   */
  function renderPengurusanDokumenPage(config) {
    const { dashboardLinks, documentManagementIndex } = config;
    const rows = documentManagementIndex || [];

    return `
      ${UI.renderPageHeader({
        badge: "Modul 10 • Pengurusan Dokumen",
        title: "Pengurusan Dokumen & Indeks Fail Digital",
        subtitle:
          "Indeks fail dan folder digital PBS PJ3 mengikut kategori, tajuk, pemilik / unit serta kawalan akses.",
        icon: "folder-kanban",
      })}

      <!-- Peringatan Kawalan Akses & Kerahsiaan (Seksyen 5.10 & 8) -->
      <div class="mb-8 p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-500 flex items-start gap-3.5">
        <i data-lucide="shield-lock" class="w-5 h-5 text-amber-700 shrink-0 mt-0.5"></i>
        <div class="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong class="font-extrabold">Perhatian Kawalan Akses & Kerahsiaan:</strong>
          Pastikan tetapan perkongsian (permission) pada Google Drive atau repositori awan disemak terlebih dahulu sebelum menerbitkan pautan. Jangan paparkan pautan ke folder terkawal kepada umum melainkan akses telah dihadkan kepada warga sekolah yang dibenarkan.
        </div>
      </div>

      <!-- Pautan Pantas Folder Induk PBS -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="px-2.5 py-0.5 rounded bg-orange-100 text-orange-800 text-xs font-extrabold uppercase">Repositori Utama</span>
          <h2 class="text-lg sm:text-xl font-black text-[#112455] mt-1">
            Folder Digital Induk PBS SK Taman Permas Jaya 3
          </h2>
          <p class="text-xs text-[#5A688C] mt-0.5">
            Pautan pantas ke lokasi folder utama pengurusan dokumen PBS (apabila ditetapkan oleh penyelaras).
          </p>
        </div>
        <div class="shrink-0">
          ${UI.renderExternalActionButton({
            url: dashboardLinks.mainPbsDriveFolderUrl,
            label: "Buka Folder Digital Induk",
            emptyLabel: "Pautan belum ditetapkan",
            configKeyHint: "mainPbsDriveFolderUrl",
          })}
        </div>
      </div>

      <!-- Jadual / Senarai Indeks Fail & Folder Digital -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div class="p-5 border-b border-slate-200 flex items-center justify-between">
          <h3 class="text-base font-black text-[#112455] uppercase flex items-center gap-2">
            <i data-lucide="table-2" class="w-5 h-5 text-[#174EA6]"></i>
            <span>Indeks Fail & Folder Digital PBS</span>
          </h3>
          <span class="text-xs font-bold text-[#5A688C]">${rows.length} Kategori Fail</span>
        </div>

        <div class="divide-y divide-slate-200">
          ${rows
            .map(
              (row) => `
            <div class="p-5 hover:bg-slate-50/80 transition flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div class="space-y-1 max-w-3xl">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-md bg-[#081C52] text-[#FFC43D] text-xs font-black">${UI.escapeHtml(row.code)}</span>
                  <span class="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold">${UI.escapeHtml(row.category)}</span>
                  <span class="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Unit: ${UI.escapeHtml(row.ownerUnit)}</span>
                </div>
                <h4 class="text-sm sm:text-base font-extrabold text-[#112455] pt-1">${UI.escapeHtml(row.title)}</h4>
                <p class="text-xs text-[#5A688C] flex items-center gap-1.5">
                  <i data-lucide="lock" class="w-3.5 h-3.5 text-amber-600"></i>
                  <span>Kawalan Akses: ${UI.escapeHtml(row.accessNote)}</span>
                </p>
              </div>
              <div class="shrink-0">
                ${UI.renderExternalActionButton({
                  url: row.url,
                  label: "Buka Folder",
                  emptyLabel: "Pautan belum ditetapkan",
                })}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * 13. HALAMAN 404 — HALAMAN TIDAK DITEMUI
   */
  function renderNotFoundPage(unknownRoute) {
    return `
      <div class="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200 shadow-sm text-center max-w-2xl mx-auto my-8">
        <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center mx-auto mb-4">
          <i data-lucide="compass" class="w-8 h-8"></i>
        </div>
        <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold uppercase">Ralat Navigasi 404</span>
        <h1 class="text-2xl sm:text-3xl font-black text-[#112455] mt-3 uppercase">
          Halaman Tidak Ditemui
        </h1>
        <p class="text-xs sm:text-sm text-[#5A688C] mt-2 leading-relaxed">
          Laluan halaman <code class="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-rose-700">${UI.escapeHtml(unknownRoute)}</code> tidak wujud dalam Dashboard PBS PJ3.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#/"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#081C52] hover:bg-[#174EA6] text-white text-xs sm:text-sm font-extrabold shadow-md transition"
          >
            <i data-lucide="home" class="w-4 h-4 text-[#FFC43D]"></i>
            <span>Kembali ke Laman Utama</span>
          </a>
          <a
            href="#/pusat-rujukan"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#112455] text-xs sm:text-sm font-bold transition"
          >
            <i data-lucide="library" class="w-4 h-4"></i>
            <span>Buka Pusat Rujukan PBS</span>
          </a>
        </div>
      </div>
    `;
  }

  return {
    renderHomePage,
    renderDashboardPbsPage,
    renderPbdPage,
    renderPajskPage,
    renderMatriksPage,
    renderPpsiPage,
    renderSegakBmiPage,
    renderTakwimPage,
    renderPenjaminanMutuPage,
    renderPusatRujukanPage,
    renderSenaraiSemakPage,
    renderPengurusanDokumenPage,
    renderNotFoundPage,
  };
})();
