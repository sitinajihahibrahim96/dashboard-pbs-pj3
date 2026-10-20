# Dashboard PBS PJ3 — SK Taman Permas Jaya 3

**Pusat Rujukan Pentaksiran Berasaskan Sekolah (PBS)**  
**Identiti Sekolah:** PJ3 BEST  
**Slogan:** *“Kerja Sepasukan Pacu Kecemerlangan”*

Portal sehenti yang menghimpunkan pautan ke dashboard sedia ada, rujukan pentaksiran (PBD, PAJSK, Matriks Pembelajaran Tahun 4, PPsi, SEGAK & BMI 5–9 Tahun), takwim pentaksiran, pengurusan penjaminan mutu, pusat rujukan dokumen, senarai semak filing serta indeks pengurusan dokumen.

---

## 1. Struktur Fail Projek

```text
website pbs/
├── index.html                                    # Laman aplikasi utama (12 laluan halaman responsif)
├── package.json                                  # Konfigurasi projek & skrip pelayan
├── README.md                                     # Dokumentasi projek & panduan kemas kini
├── tests/
│   └── verify_portal.py                          # Skrip ujian automatik struktur, pautan & spesifikasi
├── public/
│   ├── images/
│   │   ├── logo-pj3.png                          # Logo rasmi SK Taman Permas Jaya 3
│   │   ├── school-hero.jpg                       # Gambar bangunan sekolah sebenar
│   │   ├── footer-banner.jpg                     # Sepanduk footer rasmi PJ3
│   │   ├── MAIN DASHBOARD SK TAMAN PERMAS JAYA 3.jpeg
│   │   └── 98935489-A711-421F-8776-2F9E85AA2DD7.jpeg
│   └── docs/
│       └── (Letakkan Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx di sini)
└── src/
    ├── data/
    │   ├── dashboardConfig.ts                    # Definisi TypeScript & konfigurasi berpusat
    │   └── dashboardConfig.js                    # Fail konfigurasi aktif (URL, takwim, makluman, dokumen)
    ├── components/
    │   └── uiComponents.js                       # Komponen kad, butang URL, header & keadaan kosong
    ├── pages/
    │   └── pageRenderers.js                      # Penjana 12 halaman & halaman 404
    ├── styles/
    │   └── main.css                              # Token warna PJ3 BEST, gaya cetakan & kebolehcapaian
    └── main.js                                   # Penghalaan (router), menu mudah alih & penapis carian
```

---

## 2. Cara Menjalankan Projek Secara Setempat (Local)

Projek ini dibina supaya boleh dijalankan terus pada mana-mana komputer tanpa memerlukan pemasangan pelayan belakang (backend) atau pangkalan data:

### Kaedah A: Menggunakan Pelayan Web Python (Disyorkan)
1. Buka terminal / PowerShell di dalam folder projek ini.
2. Jalankan arahan berikut:
   ```powershell
   python -m http.server 8080
   ```
3. Buka pelayar web (Chrome / Edge) dan layari:
   `http://localhost:8080`

### Kaedah B: Membuka Fail `index.html` Secara Terus
1. Klik dua kali (*double-click*) pada fail `index.html` di dalam File Explorer.
2. Semua 12 halaman dalaman (`#/`, `#/dashboard-pbs`, `#/pbd`, `#/pajsk`, `#/matriks`, `#/ppsi`, `#/segak-bmi`, `#/takwim`, `#/penjaminan-mutu`, `#/pusat-rujukan`, `#/senarai-semak`, `#/pengurusan-dokumen`) berfungsi sepenuhnya.

### Kaedah C: Menggunakan Node.js / Vite (Jika Node.js dipasang)
```bash
npm install
npm run dev
npm run build
```

---

## 3. Cara Mengemas Kini Pautan (URL), Makluman & Takwim

Semua pautan dan kandungan diuruskan secara berpusat di dalam fail:
- `src/data/dashboardConfig.js` (dan rujukan TypeScript di `src/data/dashboardConfig.ts`)

### 3.1 Mengemas Kini URL Dashboard Sedia Ada
Buka `src/data/dashboardConfig.js` dan masukkan URL rasmi di dalam objek `dashboardLinks`:
```javascript
dashboardLinks: {
  PBD_DASHBOARD_URL: "https://...",      // Masukkan URL Dashboard PBD sedia ada
  PAJSK_DASHBOARD_URL: "https://...",    // Masukkan URL PAJSK apabila disahkan
  MATRIKS_DASHBOARD_URL: "https://...",  // Masukkan URL Matriks Pembelajaran Tahun 4
  PPSI_PORTAL_URL: "https://...",        // Masukkan URL rasmi PPsi
  // ...
}
```
Apabila URL dimasukkan, status **"Pautan belum ditetapkan"** akan bertukar secara automatik menjadi butang aktif yang membuka pautan di tab baharu (`target="_blank"` dengan `rel="noopener noreferrer"`).

### 3.2 Mengaktifkan Muat Turun Excel Senarai Semak Filing
1. Letakkan fail Excel sebenar di:
   `public/docs/Senarai_Semak_Filing_PBS_PBD_Matriks_PJ3.xlsx`
2. Jika dijalankan melalui pelayan web (`http://`), sistem akan mengesan kewujudan fail tersebut secara automatik, atau anda boleh menukar nilai berikut di dalam `src/data/dashboardConfig.js`:
   ```javascript
   filingCombinedExcelAvailable: true
   ```

---

## 4. Cara Menguji & Menerbitkan (Deploy) Laman Web

### Menjalankan Ujian Pengesahan Automatik
Jalankan skrip ujian Python yang disediakan untuk mengesahkan semua 12 laluan halaman, ketiadaan URL palsu, dan pematuhan spesifikasi:
```powershell
python tests/verify_portal.py
```

### Menerbitkan (Deploy) ke GitHub Pages / Netlify / Vercel
Oleh sebab laman ini adalah aplikasi statik mandiri:
- **GitHub Pages:** Muat naik keseluruhan kandungan repositori ke cawangan `main` dan aktifkan GitHub Pages pada folder root (`/`).
- **Netlify / Vercel:** Seret dan lepaskan (*drag and drop*) folder projek atau sambungkan ke repositori GitHub tanpa sebarang tetapan pelayan tambahan.
- **Peringatan Keselamatan:** Sebelum menerbitkan laman, pastikan semua pautan Google Drive mempunyai tetapan kebenaran (*permission*) yang sesuai dan tiada data peribadi murid atau kertas soalan sulit didedahkan kepada umum.
