/**
 * ============================================================================
 * PENGAWAL APLIKASI & PENGHALAAN (ROUTER) — DASHBOARD PBS PJ3
 * Menguruskan:
 * - Navigasi 12 halaman dengan penanda halaman aktif (active state)
 * - Menu mudah alih responsif (boleh dibuka & ditutup dengan klik/Escape)
 * - Penapisan Takwim Pentaksiran & Carian Pusat Rujukan PBS
 * - Semakan automatik ketersediaan fail Excel Senarai Semak Filing
 * ============================================================================
 */

(function () {
  const config = window.DASHBOARD_PBS_CONFIG;
  const UI = window.PBS_UI;
  const PAGES = window.PBS_PAGES;

  const state = {
    currentRoute: "/",
    mobileMenuOpen: false,
    takwimCategory: "SEMUA",
    refSearchQuery: "",
    refCategory: "SEMUA",
    pbdYear: "2026",
    intervensiProgram: "Pemulihan",
  };

  function normalizeRoute(hashStr) {
    if (!hashStr || hashStr === "#" || hashStr === "#/") return "/";
    const cleaned = hashStr.replace(/^#/, "").trim();
    return cleaned.startsWith("/") ? cleaned : "/" + cleaned;
  }

  function renderDesktopAndMobileNav() {
    const desktopNavEl = document.getElementById("desktopNavContainer");
    const mobileNavEl = document.getElementById("mobileNavContainer");
    if (!desktopNavEl || !mobileNavEl) return;

    const items = config.navigationItems || [];

    desktopNavEl.innerHTML = items
      .map((item) => {
        const isActive = state.currentRoute === item.route;
        return `
          <a
            href="#${UI.escapeHtml(item.route)}"
            aria-current="${isActive ? "page" : "false"}"
            class="px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              isActive
                ? "bg-[#FFC43D] text-[#081C52] shadow-sm font-extrabold"
                : "text-blue-100 hover:bg-white/10 hover:text-white"
            }"
          >
            <i data-lucide="${UI.escapeHtml(item.icon)}" class="w-3.5 h-3.5 shrink-0"></i>
            <span>${UI.escapeHtml(item.label)}</span>
          </a>
        `;
      })
      .join("");

    mobileNavEl.innerHTML = items
      .map((item) => {
        const isActive = state.currentRoute === item.route;
        return `
          <a
            href="#${UI.escapeHtml(item.route)}"
            data-mobile-nav-link="true"
            aria-current="${isActive ? "page" : "false"}"
            class="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-between ${
              isActive
                ? "bg-[#FFC43D] text-[#081C52] font-extrabold shadow-xs"
                : "text-blue-100 hover:bg-white/10 hover:text-white"
            }"
          >
            <span class="flex items-center gap-2.5">
              <i data-lucide="${UI.escapeHtml(item.icon)}" class="w-4 h-4 shrink-0"></i>
              <span>${UI.escapeHtml(item.label)}</span>
            </span>
            ${isActive ? `<span class="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-[#081C52]/15">Aktif</span>` : ""}
          </a>
        `;
      })
      .join("");
  }

  function setMobileMenuOpen(isOpen) {
    state.mobileMenuOpen = Boolean(isOpen);
    const panel = document.getElementById("mobileMenuPanel");
    const toggleBtn = document.getElementById("mobileMenuToggleBtn");
    if (!panel || !toggleBtn) return;

    if (state.mobileMenuOpen) {
      panel.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");
    } else {
      panel.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  function updateDocumentTitle(route) {
    const matched = (config.navigationItems || []).find((i) => i.route === route);
    const baseTitle = "Dashboard PBS PJ3 | SK Taman Permas Jaya 3";
    document.title = matched ? `${matched.label} — ${baseTitle}` : `Halaman Tidak Ditemui — ${baseTitle}`;
  }

  function renderCurrentPage(scrollToTop = true) {
    const appContainer = document.getElementById("appMainContent");
    if (!appContainer) return;

    const r = state.currentRoute;
    let html = "";

    switch (r) {
      case "/":
        html = PAGES.renderHomePage(config);
        break;
      case "/dashboard-pbs":
        html = PAGES.renderDashboardPbsPage(config);
        break;
      case "/pbd":
        html = PAGES.renderPbdPage(config, state.pbdYear);
        break;
      case "/pajsk":
        html = PAGES.renderPajskPage(config);
        break;
      case "/matriks":
        html = PAGES.renderMatriksPage(config);
        break;
      case "/ppsi":
        html = PAGES.renderPpsiPage(config);
        break;
      case "/segak-bmi":
        html = PAGES.renderSegakBmiPage(config);
        break;
      case "/prasekolah":
        html = PAGES.renderPrasekolahPage(config);
        break;
      case "/intervensi":
        html = PAGES.renderIntervensiPage(config, state.intervensiProgram);
        break;
      case "/takwim":
        html = PAGES.renderTakwimPage(config, state.takwimCategory);
        break;
      case "/penjaminan-mutu":
        html = PAGES.renderPenjaminanMutuPage(config);
        break;
      case "/pusat-rujukan":
        html = PAGES.renderPusatRujukanPage(config, {
          searchQuery: state.refSearchQuery,
          category: state.refCategory,
        });
        break;
      case "/senarai-semak":
        html = PAGES.renderSenaraiSemakPage(config);
        break;
      case "/pengurusan-dokumen":
        html = PAGES.renderPengurusanDokumenPage(config);
        break;
      default:
        html = PAGES.renderNotFoundPage(r);
        break;
    }

    appContainer.innerHTML = html;
    renderDesktopAndMobileNav();
    updateDocumentTitle(r);
    bindDynamicPageEvents();

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function bindDynamicPageEvents() {
    // 0. Pemilih Tahun Sesi Akademik / Arkib PBD
    const pbdYearBtns = document.querySelectorAll("[data-pbd-year]");
    pbdYearBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.pbdYear = btn.getAttribute("data-pbd-year") || "2026";
        renderCurrentPage(false);
      });
    });

    // 0B. Pemilih Submenu Program Intervensi (Pemulihan, PLaN, PiT, ARIF)
    const intervensiTabBtns = document.querySelectorAll("[data-intervensi-tab]");
    intervensiTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.intervensiProgram = btn.getAttribute("data-intervensi-tab") || "Pemulihan";
        renderCurrentPage(false);
      });
    });

    // 1. Penapis Takwim Pentaksiran
    const takwimFilterBtns = document.querySelectorAll("[data-takwim-filter]");
    takwimFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.takwimCategory = btn.getAttribute("data-takwim-filter") || "SEMUA";
        renderCurrentPage(false);
      });
    });

    // 2. Penapis Kategori Pusat Rujukan PBS
    const refCatBtns = document.querySelectorAll("[data-ref-category]");
    refCatBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.refCategory = btn.getAttribute("data-ref-category") || "SEMUA";
        renderCurrentPage(false);
      });
    });

    // 3. Input Carian Pusat Rujukan PBS
    const refSearchInput = document.getElementById("refSearchInput");
    if (refSearchInput) {
      refSearchInput.addEventListener("input", (e) => {
        const cursorPos = e.target.selectionStart;
        state.refSearchQuery = e.target.value || "";
        renderCurrentPage(false);
        const newInput = document.getElementById("refSearchInput");
        if (newInput) {
          newInput.focus();
          try {
            newInput.setSelectionRange(cursorPos, cursorPos);
          } catch (_) {}
        }
      });
    }
  }

  /**
   * Semak secara automatik sama ada fail Excel `public/docs/Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx`
   * benar-benar wujud pada pelayan web tempatan / produksi.
   */
  async function verifyExcelChecklistAvailability() {
    const excelPath = config.dashboardLinks.filingCombinedExcelPath;
    if (!excelPath || window.location.protocol === "file:") return;
    try {
      const resp = await fetch(excelPath, { method: "HEAD" });
      if (resp.ok) {
        const contentType = (resp.headers.get("content-type") || "").toLowerCase();
        // Elakkan false-positive jika SPA mengembalikan index.html
        if (!contentType.includes("text/html")) {
          config.dashboardLinks.filingCombinedExcelAvailable = true;
          if (state.currentRoute === "/senarai-semak") {
            renderCurrentPage(false);
          }
        }
      }
    } catch (_) {
      // Kekalkan false jika fail tidak wujud
    }
  }

  function initApp() {
    // Tetapkan laluan awal daripada hash
    state.currentRoute = normalizeRoute(window.location.hash);

    // Dengar perubahan hash navigasi
    window.addEventListener("hashchange", () => {
      state.currentRoute = normalizeRoute(window.location.hash);
      setMobileMenuOpen(false);
      renderCurrentPage(true);
    });

    // Butang menu mudah alih
    const toggleBtn = document.getElementById("mobileMenuToggleBtn");
    const closeBtn = document.getElementById("mobileMenuCloseBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        setMobileMenuOpen(!state.mobileMenuOpen);
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        setMobileMenuOpen(false);
      });
    }

    // Tutup menu mudah alih apabila pautan diklik atau kekunci Escape ditekan
    document.addEventListener("click", (e) => {
      const link = e.target.closest("[data-mobile-nav-link]");
      if (link) {
        setMobileMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    });

    renderCurrentPage(false);
    verifyExcelChecklistAvailability();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
