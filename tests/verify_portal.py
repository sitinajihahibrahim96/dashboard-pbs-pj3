import os
import re
import sys
import subprocess
import time
import urllib.request

# Ensure UTF-8 output on Windows
if sys.platform.startswith("win"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read_text(rel_path):
    full_path = os.path.join(ROOT_DIR, rel_path)
    assert os.path.exists(full_path), f"Fail wajib tidak ditemui: {rel_path}"
    with open(full_path, "r", encoding="utf-8") as f:
        return f.read()


def run_static_and_spec_tests():
    print("=== BAHAGIAN 1: UJIAN SPESIFIKASI & STRUKTUR KOD ===")

    # 1. Semak kewujudan fail utama dan aset rujukan
    required_files = [
        "index.html",
        "README.md",
        "package.json",
        "src/data/dashboardConfig.ts",
        "src/data/dashboardConfig.js",
        "src/components/uiComponents.js",
        "src/pages/pageRenderers.js",
        "src/main.js",
        "src/styles/main.css",
        "public/images/logo-pj3.png",
        "public/images/school-hero.jpg",
        "public/images/footer-banner.jpg",
        "public/images/MAIN DASHBOARD SK TAMAN PERMAS JAYA 3.jpeg",
        "public/images/98935489-A711-421F-8776-2F9E85AA2DD7.jpeg",
    ]
    for rf in required_files:
        p = os.path.join(ROOT_DIR, rf)
        assert os.path.exists(p), f"GAGAL: Fail {rf} tidak wujud!"
    print("[LULUS] 1. Semua 14 fail teras dan aset gambar rujukan wujud.")

    # 2. Semak 12 laluan navigasi dalaman dalam dashboardConfig.js & main.js
    config_js = read_text("src/data/dashboardConfig.js")
    main_js = read_text("src/main.js")
    pages_js = read_text("src/pages/pageRenderers.js")
    ui_js = read_text("src/components/uiComponents.js")
    index_html = read_text("index.html")
    css_text = read_text("src/styles/main.css")

    expected_routes = [
        "/",
        "/dashboard-pbs",
        "/pbd",
        "/pajsk",
        "/matriks",
        "/ppsi",
        "/segak-bmi",
        "/prasekolah",
        "/intervensi",
        "/takwim",
        "/penjaminan-mutu",
        "/pusat-rujukan",
        "/senarai-semak",
        "/pengurusan-dokumen",
    ]
    for route in expected_routes:
        assert f'route: "{route}"' in config_js, f"GAGAL: Route {route} tiada dalam navigationItems!"
        assert f'case "{route}":' in main_js, f"GAGAL: Route {route} tidak dikendalikan dalam router main.js!"
    print(f"[LULUS] 2. Kesemua {len(expected_routes)} laluan halaman (routes) wujud dalam navigasi dan router.")

    # 3. Semak hanya URL rasmi yang dibekalkan pengguna wujud dalam dashboardLinks
    allowed_user_urls = {
        # PBD (7 pautan)
        "https://canva.link/mypbd-sktpj3-2026",
        "https://drive.google.com/drive/u/0/folders/1cvSAn7b5I7pJry24yw1mBHEkyTHbm_Dd",
        "https://drive.google.com/drive/folders/1EdDP8fKWwfbKU9zIzzSxUnOCIKazAc41?usp=drive_link",
        "https://drive.google.com/drive/folders/1ajvuRvl0_gHLnoWY-VQTUamCsgO9TJLT?usp=drive_link",
        "https://drive.google.com/drive/folders/16dWavvRqN_HCG4WPrDQuJTufdJj2A3BT?usp=drive_link",
        "https://drive.google.com/drive/folders/1itJqLlhGJdiTGmkgarkJv-QhE5lAQoaB?usp=drive_link",
        "https://drive.google.com/drive/folders/1fuvVolvc0aAv-JnQ-pjNN3W0rMZKjd9T?usp=drive_link",
        # PAJSK (3 pautan)
        "https://drive.google.com/drive/folders/10d35wjeyz2LKLvu5f_SEXiDrQv9MAeIk?usp=drive_link",
        "https://drive.google.com/drive/folders/1KR4rpXGViozoAnd1Mz2mwlpabM20tYy-?usp=drive_link",
        "https://drive.google.com/drive/folders/17H3P_WTmtBS0HWY_EErVzCfQ8onjGbaz?usp=drive_link",
        # PSIKOMETRIK / PPsi (6 pautan)
        "https://drive.google.com/drive/folders/1aoL17_Y9EamUDBGUCNPHDOfiSqBz9P0z?usp=drive_link",
        "https://drive.google.com/drive/folders/1N0EcKPrmt_ghbr7LucbsvgSu3QCtLp1O?usp=drive_link",
        "https://drive.google.com/drive/folders/1vhMnPgS_weiqJA3JzqYZzg23yadbyOgC?usp=drive_link",
        "https://drive.google.com/drive/folders/1JkX5nR_HrXR62oGIAGAQO1WO9Tq_1QGB?usp=drive_link",
        "https://drive.google.com/drive/folders/14SQ5VR9gUH1ECFyfNE8eoCZX1iys6ATt?usp=drive_link",
        "https://drive.google.com/drive/folders/1xi-rhEO-4IjyH_QHGZu57IkiIZmlL5GI?usp=drive_link",
        # MATRIKS PEMBELAJARAN TAHUN 4 (11 pautan)
        "https://canva.link/dashboard-filing-matrik-tahun-4-2026",
        "https://drive.google.com/drive/folders/1BnIP7MTiumL7yY2nd5zr7wubOFSFqABa?usp=drive_link",
        "https://drive.google.com/drive/folders/1MJ7Z8or05K5wv46zrqMNowBZizWEpMUO?usp=drive_link",
        "https://drive.google.com/drive/folders/1a3oEzpwKd8S1WyCXsBRs0Q1qDtS64gL7?usp=drive_link",
        "https://drive.google.com/drive/folders/1VX1uoZ84ENbBq2q2V5_LVlkmeP37DYs_?usp=drive_link",
        "https://drive.google.com/drive/folders/1SQIZgEILLv-Z5T0XRphpKTJ9odhkSyo2?usp=drive_link",
        "https://drive.google.com/drive/folders/1uWN0O1mLqE6vIOWdq3JyQfEfb9MBNiXF?usp=drive_link",
        "https://drive.google.com/drive/folders/1QRHVIpsEsRE8McDkMtynEvCAo0nKKw8w?usp=drive_link",
        "https://drive.google.com/drive/folders/1zv4NYKmlC-ftWXqHM63ALwPzJdwwZdJu?usp=drive_link",
        "https://drive.google.com/drive/folders/1mI3BSEwLu1tkYH6bV6FTo2bbWLIhY4fr?usp=drive_link",
        "https://drive.google.com/drive/folders/1L4p0_6zJ0SYdcb2XlaMq3CxTeqHVz5Iv?usp=drive_link",
        "https://drive.google.com/drive/folders/1zvYF7dcjJdhkujgdmm-JKtC5EQy7lTs5?usp=drive_link",
        # SEGAK (4 pautan)
        "https://drive.google.com/drive/folders/1rFWid-cTQyUOj4k57o5pK-ooOFYVn0T9?usp=drive_link",
        "https://drive.google.com/drive/folders/1xVCb2REGlaCUlV1rDce3JeIwYfp5y_I2?usp=drive_link",
        "https://drive.google.com/drive/folders/11RUZWRXCG3DmxZwQtPcdjq8JLEtqyTAf?usp=drive_link",
        "https://drive.google.com/drive/folders/1tGEUKAsXTf2cbrHkK_pWjq9MyVs3zqOb?usp=drive_link",
        # BMI 5-9T (4 pautan)
        "https://drive.google.com/drive/folders/1i8ZLRieeg6Su7MXSux77JvW0DC-J5lC9?usp=drive_link",
        "https://drive.google.com/drive/folders/1T3JXnTCNihjAl8S48DAGY9tZs3khNvn1?usp=drive_link",
        "https://drive.google.com/drive/folders/1-JIL9NihIellu7m6I_TWyAMrHAdUSI74?usp=drive_link",
        "https://drive.google.com/drive/folders/1wjE9XgFYyM3Nv108gozNoIIo15isi2fU?usp=drive_link",
    }
    links_block_match = re.search(r"dashboardLinks:\s*\{([^}]+)\}", config_js, re.DOTALL)
    assert links_block_match, "GAGAL: Objek dashboardLinks tidak ditemui!"
    links_block = links_block_match.group(1)
    http_matches = set(re.findall(r"https?://[^\s\"']+", links_block))
    unknown_urls = http_matches - allowed_user_urls
    assert len(unknown_urls) == 0, f"GAGAL: Ditemui URL tidak dikenali/rekaan dalam dashboardLinks: {unknown_urls}"
    for u in allowed_user_urls:
        assert u in config_js, f"GAGAL: URL rasmi pengguna tidak ditemui dalam konfigurasi: {u}"
    print(f"[LULUS] 3. Kesemua {len(allowed_user_urls)} URL rasmi (PBD, PAJSK, PPsi, Matriks Tahun 4, SEGAK & BMI 5-9T) telah disambungkan dan tiada URL rekaan.")

    # 4. Semak data makluman dan takwim tidak mengandungi data rekaan, serta arkib tahunan PBD wujud
    assert "noticesData: []" in config_js, "GAGAL: noticesData mestilah kosong secara lalai (tiada makluman rekaan)."
    assert "takwimData: []" in config_js, "GAGAL: takwimData mestilah kosong secara lalai (tiada tarikh rekaan)."
    assert "pbdYearlyArchives:" in config_js, "GAGAL: pbdYearlyArchives (ciri tahun sebelumnya) tidak ditemui!"
    print("[LULUS] 4. Ciri Arkib Tahunan PBD (2026/2025/2024) wujud serta Makluman & Takwim bebas daripada data rekaan.")

    # 5. Semak kandungan khusus halaman mengikut spesifikasi
    required_phrases = [
        ("DASHBOARD", "Tajuk utama Laman Utama"),
        ("Pusat Rujukan Pentaksiran Berasaskan Sekolah", "Subtajuk rasmi"),
        ("Kerja Sepasukan Pacu Kecemerlangan", "Slogan sekolah"),
        ("Buka Dashboard PBD Sedia Ada", "Butang utama halaman PBD"),
        ("Pautan belum ditetapkan", "Label pautan belum ditetapkan"),
        ("Pautan PAJSK akan dikemas kini oleh penyelaras", "Label khusus halaman PAJSK"),
        ("Buka Dashboard Matriks Sedia Ada", "Butang utama halaman Matriks Tahun 4"),
        ("BMI 5–9 Tahun", "Subbahagian berasingan BMI 5-9 Tahun"),
        ("Tiada maklumat takwim dimasukkan", "Keadaan kosong Takwim Pentaksiran"),
        ("Pemantauan", "Komponen 1 Penjaminan Mutu"),
        ("Pengesanan", "Komponen 2 Penjaminan Mutu"),
        ("Penyelarasan", "Komponen 3 Penjaminan Mutu"),
        ("Pementoran", "Komponen 4 Penjaminan Mutu"),
        ("Moderasi", "Komponen 5 Penjaminan Mutu"),
        ("Tindakan Susulan", "Komponen 6 Penjaminan Mutu"),
        ("Senarai Semak Filing PBS", "Kad 1 Senarai Semak"),
        ("Senarai Semak Filing PBD", "Kad 2 Senarai Semak"),
        ("Senarai Semak Filing Matriks Pembelajaran Tahun 4", "Kad 3 Senarai Semak"),
        ("Fail belum dimuat naik", "Status apabila fail Excel belum dimuat naik"),
        ("LOGO RASMI PJ3", "Ruang fallback logo rasmi"),
        ("Analisis dan Pelaporan Prasekolah", "Menu Utama Baharu 1: Prasekolah"),
        ("Data dan Profil Murid", "Submenu 1 Prasekolah"),
        ("Pentaksiran dan Perkembangan Murid", "Submenu 2 Prasekolah"),
        ("Intervensi dan Sokongan Pembelajaran", "Submenu 4 Prasekolah"),
        ("Bukti Pelaksanaan dan Dokumentasi", "Submenu 5 Prasekolah"),
        ("Intervensi dan Peningkatan Pembelajaran", "Menu Utama Baharu 2: Intervensi"),
        ("Pemulihan", "Submenu 1 Intervensi"),
        ("PLaN", "Submenu 2 Intervensi"),
        ("PiT", "Submenu 3 Intervensi"),
        ("ARIF", "Submenu 4 Intervensi"),
        ("Perancangan Intervensi", "Bahagian Perancangan Intervensi"),
        ("Analisis Impak", "Bahagian Analisis Impak"),
        ("One Page Report (OPR)", "Ruang OPR dalam semua komponen"),
        ("Storyboard", "Ruang Storyboard dalam semua komponen"),
    ]
    combined_source = config_js + "\n" + pages_js + "\n" + index_html + "\n" + ui_js
    for phrase, desc in required_phrases:
        assert phrase in combined_source, f"GAGAL: Frasa wajib '{phrase}' ({desc}) tidak ditemui!"
    print(f"[LULUS] 5. Semua {len(required_phrases)} teks, label keadaan kosong, subbahagian dan komponen wajib disahkan.")

    # 6. Semak token warna reka bentuk dalam main.css / index.html
    for token in ["#081C52", "#174EA6", "#FFC43D", "#F4F7FF", "#112455", "#5A688C"]:
        assert token in css_text or token in index_html, f"GAGAL: Token warna {token} tidak ditemui!"
    print("[LULUS] 6. Semua token reka bentuk warna Navy, Biru Diraja dan Emas PJ3 BEST disahkan.")

    # 7. Semak fail Excel Senarai Semak Filing tidak diaktifkan secara palsu jika fail tiada di public/docs/
    excel_file = os.path.join(ROOT_DIR, "public", "docs", "Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx")
    if not os.path.exists(excel_file):
        assert "filingCombinedExcelAvailable: false" in config_js, (
            "GAGAL: filingCombinedExcelAvailable mestilah false apabila fail Excel belum wujud!"
        )
        print("[LULUS] 7. Fail Excel belum wujud di public/docs/ dan status muat turun disahkan memaparkan 'Fail belum dimuat naik'.")


def run_http_integration_tests():
    print("\n=== BAHAGIAN 2: UJIAN INTEGRASI PELAYAN HTTP TEMPATAN ===")
    port = 8199
    proc = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(port)],
        cwd=ROOT_DIR,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    try:
        time.sleep(1.2)
        endpoints = [
            "/index.html",
            "/src/styles/main.css",
            "/src/data/dashboardConfig.js",
            "/src/components/uiComponents.js",
            "/src/pages/pageRenderers.js",
            "/src/main.js",
            "/public/images/logo-pj3.png",
            "/public/images/school-hero.jpg",
            "/public/images/footer-banner.jpg",
        ]
        for ep in endpoints:
            url = f"http://127.0.0.1:{port}{ep}"
            with urllib.request.urlopen(url, timeout=5) as resp:
                status = resp.status
                body_len = len(resp.read())
                assert status == 200, f"GAGAL HTTP {status} pada {ep}"
                assert body_len > 0, f"GAGAL: Kandungan kosong pada {ep}"
                print(f"[LULUS] HTTP 200 OK -> {ep} ({body_len} bait)")
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except Exception:
            proc.kill()


if __name__ == "__main__":
    run_static_and_spec_tests()
    run_http_integration_tests()
    print("\n=== KEPUTUSAN AKHIR: SEMUA UJIAN LULUS SEPENUHNYA (100%) ===")
