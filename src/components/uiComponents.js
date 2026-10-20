/**
 * ============================================================================
 * KOMPONEN GUNA SEMULA & SISTEM TEMA WARNA — DASHBOARD PBS PJ3
 * ============================================================================
 */

window.PBS_UI = (function () {
  const THEME_MAP = {
    blue: {
      cardBg: "bg-gradient-to-br from-blue-50 via-white to-sky-100/70",
      border: "border-blue-200 hover:border-blue-500",
      badge: "bg-gradient-to-r from-blue-700 to-sky-600 text-white",
      iconBox: "bg-blue-100 text-blue-700 border-blue-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-[#174EA6]",
      pill: "bg-blue-100 text-blue-800 border-blue-200",
    },
    emerald: {
      cardBg: "bg-gradient-to-br from-emerald-50 via-white to-teal-100/70",
      border: "border-emerald-200 hover:border-emerald-500",
      badge: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
      iconBox: "bg-emerald-100 text-emerald-700 border-emerald-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-emerald-700",
      pill: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    amber: {
      cardBg: "bg-gradient-to-br from-amber-50 via-white to-yellow-100/70",
      border: "border-amber-200 hover:border-amber-500",
      badge: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
      iconBox: "bg-amber-100 text-amber-800 border-amber-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-amber-600",
      pill: "bg-amber-100 text-amber-900 border-amber-200",
    },
    purple: {
      cardBg: "bg-gradient-to-br from-purple-50 via-white to-indigo-100/70",
      border: "border-purple-200 hover:border-purple-500",
      badge: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
      iconBox: "bg-purple-100 text-purple-700 border-purple-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-purple-700",
      pill: "bg-purple-100 text-purple-800 border-purple-200",
    },
    rose: {
      cardBg: "bg-gradient-to-br from-rose-50 via-white to-pink-100/70",
      border: "border-rose-200 hover:border-rose-500",
      badge: "bg-gradient-to-r from-rose-600 to-pink-600 text-white",
      iconBox: "bg-rose-100 text-rose-700 border-rose-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-rose-600",
      pill: "bg-rose-100 text-rose-800 border-rose-200",
    },
    red: {
      cardBg: "bg-gradient-to-br from-red-50 via-white to-orange-100/70",
      border: "border-red-200 hover:border-red-500",
      badge: "bg-gradient-to-r from-red-600 to-rose-600 text-white",
      iconBox: "bg-red-100 text-red-700 border-red-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-red-600",
      pill: "bg-red-100 text-red-800 border-red-200",
    },
    indigo: {
      cardBg: "bg-gradient-to-br from-indigo-50 via-white to-violet-100/70",
      border: "border-indigo-200 hover:border-indigo-500",
      badge: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white",
      iconBox: "bg-indigo-100 text-indigo-700 border-indigo-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-indigo-700",
      pill: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
    sky: {
      cardBg: "bg-gradient-to-br from-sky-50 via-white to-cyan-100/70",
      border: "border-sky-200 hover:border-sky-500",
      badge: "bg-gradient-to-r from-sky-600 to-blue-600 text-white",
      iconBox: "bg-sky-100 text-sky-700 border-sky-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-sky-600",
      pill: "bg-sky-100 text-sky-800 border-sky-200",
    },
    teal: {
      cardBg: "bg-gradient-to-br from-teal-50 via-white to-emerald-100/70",
      border: "border-teal-200 hover:border-teal-500",
      badge: "bg-gradient-to-r from-teal-600 to-emerald-600 text-white",
      iconBox: "bg-teal-100 text-teal-700 border-teal-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-teal-700",
      pill: "bg-teal-100 text-teal-800 border-teal-200",
    },
    orange: {
      cardBg: "bg-gradient-to-br from-orange-50 via-white to-amber-100/70",
      border: "border-orange-200 hover:border-orange-500",
      badge: "bg-gradient-to-r from-orange-600 to-amber-600 text-white",
      iconBox: "bg-orange-100 text-orange-700 border-orange-200",
      arrowBtn: "bg-[#081C52] text-white group-hover:bg-orange-600",
      pill: "bg-orange-100 text-orange-800 border-orange-200",
    },
  };

  function getTheme(name) {
    return THEME_MAP[name] || THEME_MAP.blue;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Menghasilkan butang atau status pautan luaran.
   * Jika URL kosong, ia memaparkan "Pautan belum ditetapkan" (atau label tersuai)
   * dan menyahaktifkan butang tanpa ikon anak panah palsu.
   */
  function renderExternalActionButton({
    url,
    label,
    emptyLabel = "Pautan belum ditetapkan",
    configKeyHint = "",
    size = "md",
    variant = "primary",
  }) {
    const cleanUrl = typeof url === "string" ? url.trim() : "";
    const isLarge = size === "lg";
    const padClass = isLarge ? "px-6 py-3.5 text-sm sm:text-base" : "px-4 py-2.5 text-xs sm:text-sm";

    if (cleanUrl.length > 0) {
      const btnStyle =
        variant === "gold"
          ? "bg-[#FFC43D] hover:bg-amber-400 text-[#081C52] border-amber-300 shadow-md"
          : "bg-[#081C52] hover:bg-[#174EA6] text-white border-[#174EA6] shadow-md";
      return `
        <a
          href="${escapeHtml(cleanUrl)}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2.5 ${padClass} rounded-xl font-bold border transition-all cursor-pointer ${btnStyle}"
        >
          <span>${escapeHtml(label)}</span>
          <i data-lucide="external-link" class="w-4 h-4 shrink-0"></i>
        </a>
      `;
    }

    return `
      <div class="inline-flex flex-col sm:flex-row sm:items-center gap-2">
        <button
          type="button"
          disabled
          aria-disabled="true"
          class="inline-flex items-center justify-center gap-2 ${padClass} rounded-xl font-semibold bg-slate-200/80 text-slate-500 border border-slate-300 cursor-not-allowed select-none"
          title="${escapeHtml(emptyLabel)}"
        >
          <i data-lucide="link-2-off" class="w-4 h-4 shrink-0 text-slate-400"></i>
          <span>${escapeHtml(label)}</span>
        </button>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
          <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-600 shrink-0"></i>
          <span>${escapeHtml(emptyLabel)}${configKeyHint ? ` <code class="text-[11px] bg-amber-100/80 px-1 py-0.5 rounded font-mono">(${escapeHtml(configKeyHint)})</code>` : ""}</span>
        </span>
      </div>
    `;
  }

  /**
   * Kad menu utama di Laman Utama / Dashboard PBS.
   * Semua kad membuka halaman dalaman yang sah (`#/...`), jadi mempunyai kawasan klik yang jelas.
   */
  function renderDashboardMenuCard(card, linksObj) {
    const t = getTheme(card.theme);
    const extUrl = card.externalUrlKey && linksObj ? (linksObj[card.externalUrlKey] || "").trim() : "";
    const statusBadge = card.externalUrlKey
      ? extUrl
        ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200"><i data-lucide="check-circle-2" class="w-3 h-3"></i> Pautan Aktif</span>`
        : `<span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">Halaman Rujukan</span>`
      : `<span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${t.pill}">Modul Dalaman</span>`;

    return `
      <a
        href="#${escapeHtml(card.route)}"
        class="pbs-card group relative rounded-2xl p-5 ${t.cardBg} border-2 ${t.border} shadow-sm hover:shadow-xl flex flex-col justify-between text-left cursor-pointer"
        aria-label="${escapeHtml(card.title)} - ${escapeHtml(card.summary)}"
      >
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="px-3 py-1 rounded-lg text-xs font-black tracking-wider ${t.badge} shadow-sm">
              ${escapeHtml(card.id)}
            </span>
            ${statusBadge}
          </div>

          <div class="flex items-start gap-3.5 mb-3">
            <div class="w-12 h-12 rounded-2xl ${t.iconBox} border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <i data-lucide="${escapeHtml(card.icon)}" class="w-6 h-6"></i>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base sm:text-lg font-extrabold text-[#112455] group-hover:text-[#174EA6] transition-colors leading-snug">
                ${escapeHtml(card.title)}
              </h3>
              <p class="text-xs sm:text-sm text-[#5A688C] mt-1 leading-relaxed">
                ${escapeHtml(card.summary)}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-3 mt-2 border-t border-slate-200/70 flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-[#112455] group-hover:text-[#174EA6] transition-colors">
            ${escapeHtml(card.actionLabel)}
          </span>
          <span class="w-8 h-8 rounded-full ${t.arrowBtn} flex items-center justify-center shadow-sm transition-colors shrink-0">
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </span>
        </div>
      </a>
    `;
  }

  /**
   * Komponen Keadaan Kosong (Empty State)
   */
  function renderEmptyState({
    icon = "inbox",
    title,
    message,
    configHint = "",
  }) {
    return `
      <div class="rounded-2xl bg-slate-50/90 border-2 border-dashed border-slate-300 p-6 sm:p-8 text-center my-2">
        <div class="w-12 h-12 rounded-2xl bg-blue-50 text-[#174EA6] border border-blue-200 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="${escapeHtml(icon)}" class="w-6 h-6"></i>
        </div>
        <h4 class="text-sm sm:text-base font-extrabold text-[#112455]">
          ${escapeHtml(title)}
        </h4>
        <p class="text-xs sm:text-sm text-[#5A688C] max-w-xl mx-auto mt-1.5 leading-relaxed">
          ${escapeHtml(message)}
        </p>
        ${
          configHint
            ? `<div class="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 font-mono">
                <i data-lucide="file-code" class="w-3.5 h-3.5 text-[#174EA6]"></i>
                <span>Lokasi Konfigurasi: ${escapeHtml(configHint)}</span>
              </div>`
            : ""
        }
      </div>
    `;
  }

  /**
   * Header Banner Sub-Halaman Dalaman
   */
  function renderPageHeader({
    badge,
    title,
    subtitle,
    icon = "layers",
    backRoute = "/",
    backLabel = "Kembali ke Laman Utama",
  }) {
    return `
      <div class="bg-gradient-to-r from-[#081C52] via-[#0d286d] to-[#174EA6] text-white rounded-3xl p-6 sm:p-8 mb-8 border-b-4 border-[#FFC43D] shadow-lg relative overflow-hidden">
        <div class="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#FFC43D]/10 blur-2xl pointer-events-none"></div>
        <div class="relative z-10">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4 no-print">
            <a
              href="#${escapeHtml(backRoute)}"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-amber-200 border border-white/15 transition"
            >
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              <span>${escapeHtml(backLabel)}</span>
            </a>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC43D]/20 border border-[#FFC43D]/40 text-xs font-extrabold text-[#FFC43D] uppercase tracking-wider">
              ${escapeHtml(badge)}
            </span>
          </div>

          <div class="flex items-start sm:items-center gap-4">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#FFC43D] shadow-inner">
              <i data-lucide="${escapeHtml(icon)}" class="w-7 h-7 sm:w-8 sm:h-8"></i>
            </div>
            <div>
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase">
                ${escapeHtml(title)}
              </h1>
              <p class="text-xs sm:text-sm text-blue-100 mt-1.5 max-w-3xl leading-relaxed">
                ${escapeHtml(subtitle)}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Baris item pautan sumber dalam kad halaman dalaman
   */
  function renderResourceSlotRow({
    title,
    description,
    url,
    configKey,
    emptyText = "Pautan belum ditetapkan",
  }) {
    const cleanUrl = typeof url === "string" ? url.trim() : "";
    return `
      <div class="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 print-card">
        <div class="min-w-0">
          <h4 class="text-sm font-extrabold text-[#112455]">${escapeHtml(title)}</h4>
          <p class="text-xs text-[#5A688C] mt-0.5 leading-relaxed">${escapeHtml(description)}</p>
        </div>
        <div class="shrink-0">
          ${
            cleanUrl
              ? `<a
                  href="${escapeHtml(cleanUrl)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081C52] hover:bg-[#174EA6] text-white text-xs font-bold transition shadow-xs"
                >
                  <span>Buka Pautan</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>`
              : `<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold select-none">
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-600"></i>
                  <span>${escapeHtml(emptyText)}</span>
                  ${configKey ? `<code class="text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-500">${escapeHtml(configKey)}</code>` : ""}
                </div>`
          }
        </div>
      </div>
    `;
  }

  return {
    getTheme,
    escapeHtml,
    renderExternalActionButton,
    renderDashboardMenuCard,
    renderEmptyState,
    renderPageHeader,
    renderResourceSlotRow,
  };
})();
