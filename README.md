# Portofolio Airin Nur Azizah

Website portofolio pribadi [Airin Nur Azizah](https://airinazizah19.github.io), mahasiswa Statistika di Universitas Cenderawasih. Situs ini menampilkan profil, bidang minat, pendidikan, keterampilan, serta proyek dan karya dalam satu tempat.
- Situs: https://github.io
- Github Pages: https:airinazizah19.github.io
- Gudang: https://github.com/airinazizah19/airinazizah19.github.io
- Nama tema: Astro Academia
- Pembuat: Matteo Barbero
- Tema repositori: https://github.com/maiobarbero/astro_academia
- Lisensi: MIT

## Fitur utama

- Halaman profil dan bidang minat Statistika dan Analisis Data.
- Informasi pendidikan, pengalaman, keterampilan, serta proyek dan karya.
- Blog dengan kategori tag dan navigasi halaman.
- Pencarian konten, pilihan tema terang/gelap, dan tata letak responsif.
- RSS feed dan sitemap untuk mendukung distribusi serta indeksasi konten.
- Build statis dan deployment ke GitHub Pages melalui GitHub Actions.

## Struktur proyek

```text
.
├── .github/workflows/astro.yml # Build dan deployment GitHub Pages
├── src/
│   ├── assets/                 # Foto profil dan aset gambar
│   ├── components/             # Komponen antarmuka
│   ├── content/BlogPosts/      # Konten blog dalam Markdown
│   ├── data/                   # Data CV, karya, dan bidang minat
│   ├── layouts/                # Kerangka halaman
│   ├── lib/                    # Utilitas dan fungsi pencarian
│   ├── pages/                  # Halaman dan endpoint situs
│   ├── styles/                 # CSS global dan tema
│   ├── types/                  # Definisi tipe TypeScript
│   ├── content.config.ts       # Skema koleksi konten
│   └── settings.ts             # Profil dan pengaturan situs
├── astro.config.mjs            # Konfigurasi Astro
├── package.json                # Dependensi dan perintah npm
└── README.md                   # Dokumentasi proyek
```

## Teknologi

- [Astro](https://astro.build/) untuk membangun situs statis.
- TypeScript dan React untuk komponen serta fungsionalitas antarmuka.
- Tailwind CSS dan DaisyUI untuk styling dan tema.
- npm untuk mengelola dependensi, serta GitHub Pages untuk hosting.

## Mengelola konten

- Ubah nama, profil, tautan sosial, dan pengaturan situs di `src/settings.ts`.
- Perbarui data pendidikan, pengalaman, keterampilan, dan karya di `src/data/cv.ts`.
- Tambahkan tulisan baru sebagai file Markdown di `src/content/BlogPosts/`. Setiap tulisan memerlukan `title`, `date`, dan `excerpt`; `tags` bersifat opsional.

Contoh format tulisan blog:

```markdown
---
title: "Judul tulisan"
date: "2026-11-22"
excerpt: "Ringkasan singkat tulisan."
tags: ["belajar", "statistika"]
---

Isi tulisan ditulis menggunakan Markdown.
```

## Menjalankan secara lokal

Pastikan [Node.js 22](https://nodejs.org/) dan npm sudah terpasang. Klon repositori, lalu jalankan perintah berikut dari direktori proyek:

```sh
npm ci
npm run dev
```

Buka alamat lokal yang ditampilkan di terminal (biasanya `http://localhost:4321`). Untuk membuat build produksi dan melihat pratinjaunya:

```sh
npm run build
npm run preview
```

## Pemeriksaan

Jalankan perintah berikut sebelum mengirim perubahan untuk menjalankan tes, memeriksa kualitas kode, dan memvalidasi Astro serta TypeScript:

```sh
npm test
npm run lint
npm run check
```
