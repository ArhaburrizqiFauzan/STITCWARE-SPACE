# STITCHWARE & SPACE

Website demo untuk business plan STITCHWARE & SPACE, brand aksesori fashion sirkuler yang mengolah limbah kain menjadi tas, dompet, dan aksesori. Situs ini memperkenalkan koleksi produk, dampak brand, dan cerita di balik produk serta para pengrajinnya.

> **Status:** Proyek ini merupakan demo/prototipe. Pendaftaran newsletter atau member, pembayaran, dan pemrosesan pesanan belum terhubung ke backend atau layanan eksternal.

## Fitur

- Halaman utama dengan pengenalan brand, katalog, dan filter kategori.
- Halaman detail produk dengan opsi kustomisasi untuk produk tertentu.
- Keranjang belanja demo yang disimpan di `localStorage` browser.
- Halaman traceability untuk melihat cerita produk dan pengrajin.
- Tampilan responsif untuk desktop dan perangkat mobile.

## Teknologi

- Next.js 16 dengan App Router
- React 19 dan TypeScript
- Tailwind CSS 4
- Framer Motion dan Lucide React

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang. Dari direktori proyek, jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser. Perubahan kode akan ditampilkan saat development server berjalan.

## Perintah yang tersedia

```bash
npm run dev    # Menjalankan development server
npm run lint   # Menjalankan ESLint
npm run build  # Membuat production build
npm run start  # Menjalankan production build
```

Untuk mencoba production build secara lokal:

```bash
npm run build
npm run start
```

## Struktur proyek

```text
src/
  app/             Halaman dan route aplikasi
    product/[id]/  Detail produk
    traceability/  Cerita dan informasi traceability
  components/      Komponen antarmuka, termasuk Footer dan kartu produk
  context/         State keranjang belanja
  data/            Data demo produk dan pengrajin
public/
  images/          Gambar dan aset visual
```

Route contoh:

- `/` — halaman utama
- `/product/sns-bag-shoulder` — contoh detail produk
- `/traceability/SNS-CMH-2026-042` — contoh halaman traceability

## Deploy demo ke Vercel

1. Push repository ini ke GitHub.
2. Masuk ke [Vercel](https://vercel.com/) dan impor repository GitHub.
3. Pilih repository proyek ini. Vercel akan mendeteksi Next.js secara otomatis.
4. Gunakan pengaturan build default, lalu pilih **Deploy**.
5. Setelah selesai, Vercel memberikan URL publik untuk dibagikan.

Setiap push ke branch yang terhubung dapat memicu deployment baru. Pastikan tidak memasukkan rahasia atau kredensial ke repository. Untuk detail terbaru, lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
