"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ImpactCounter from "@/components/ImpactCounter";
import {
  Sparkles,
  ArrowRight,
  Recycle,
  Heart,
  ShieldCheck,
  Gift,
  QrCode,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts: Product[] =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">

      {/* =========================================================================
          1. HERO SECTION (Gen-Z Aesthetic, Sticker Badges, Dual CTA)
         ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#FFE97D]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#F0D3D3]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Badges Cluster */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="sticker-badge bg-[#FFE97D] text-[#3A2E2A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
                  CIRCULAR FASHION 2026
                </span>
                <span className="sticker-badge bg-[#FAF7F2] text-[#3A2E2A]">
                  🌱 0% VIRGIN PLASTIC
                </span>
                <span className="sticker-badge bg-[#F0D3D3] text-[#3A2E2A]">
                  🧵 CRAFTED IN CIMAHI &amp; BANDUNG
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#3A2E2A] tracking-tight leading-[1.08] font-sans">
                Ubah Limbah Kain Jadi Gaya{" "}
                <span className="inline-block relative">
                  <span className="relative z-10 text-[#C1694F] italic">Otentikmu.</span>
                  <span className="absolute bottom-1 left-0 right-0 h-4 bg-[#FFE97D] -rotate-1 -z-0 rounded-md" />
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-xl text-[#3A2E2A]/80 font-medium leading-relaxed max-w-2xl">
                STITCHWARE &amp; SPACE mengubah potongan perca menjadi koleksi tas, dompet, dan aksesoris lain. Setiap karya dibuat dengan dedikasi para pribadi terampil.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#koleksi"
                  className="btn-sticker bg-[#C1694F] text-[#FAF7F2] px-8 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2 group"
                >
                  <span>Jelajahi Koleksi</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#impact"
                  className="btn-sticker bg-[#FAF7F2] text-[#3A2E2A] px-7 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2 hover:bg-[#FFE97D]"
                >
                  <span>Kontribusi Kami</span>
                  <Recycle className="w-5 h-5 text-[#C1694F]" />
                </a>
              </div>

              {/* Free Gift Notification Pill */}
              <div className="inline-flex items-center gap-3 bg-[#EFE3D0]/80 border-2 border-[#3A2E2A] px-4 py-2.5 rounded-2xl text-xs font-bold text-[#3A2E2A]">
                <Gift className="w-4 h-4 text-[#C1694F] shrink-0" />
                <span>
                  <strong>Special Offer:</strong> Setiap pembelian tas sudah include{" "}
                  <span className="text-[#C1694F] font-black">1 FREE Bag Charm senada!</span>
                </span>
              </div>

            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto rounded-4xl bg-[#FAF7F2] border-3 border-[#3A2E2A] shadow-sticker-lg p-4 overflow-hidden group">
                <Image
                  src="/images/hero-art.webp"
                  alt="STITCHWARE & SPACE Hero Visual"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Floating Micro-Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="sticker-badge bg-[#FFE97D] text-[#3A2E2A] shadow-sticker-sm text-[11px]">
                    ⭐ Signature Collection
                  </div>
                </div>

                {/* Direct Scan QR Trigger */}
                <div className="absolute bottom-4 right-4 z-10">
                  <Link
                    href="/traceability/SNS-CMH-2026-042"
                    className="btn-sticker bg-[#FAF7F2] text-[#3A2E2A] px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sticker-sm"
                  >
                    <QrCode className="w-4 h-4 text-[#C1694F]" />
                    <span>Cerita Produk</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRODUCT GRID & CATEGORY FILTER
         ========================================================================= */}
      <section id="koleksi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title & Filter bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 sticker-badge bg-[#F0D3D3] text-[#3A2E2A] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
              Katalog Produk
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3A2E2A] tracking-tight">
              Koleksi STITCHWARE &amp; SPACE
            </h2>
            <p className="text-sm text-[#3A2E2A]/75 font-medium mt-1">
              Pilihan tas, dompet, bag charm boneka, dan keychain akrilik custom.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#EFE3D0]/60 p-2 rounded-2xl border-2 border-[#3A2E2A]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${selectedCategory === cat.id
                  ? "bg-[#C1694F] text-[#FAF7F2] shadow-sticker-sm"
                  : "text-[#3A2E2A] hover:bg-[#FAF7F2]"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

      {/* =========================================================================
          3. VALUE PROPOSITION BANNER (4 Main Pillars from S&S Business Proposal)
         ========================================================================= */}
      <section id="filosofi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFE97D] rounded-4xl p-8 sm:p-12 border-3 border-[#3A2E2A] shadow-sticker-lg">

          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#C1694F]">
              4 NILAI DASAR STITCHWARE &amp; SPACE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#3A2E2A] tracking-tight">
              Mengapa Produk S&amp;S Berbeda dari Brand Biasa?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Pillar 1 */}
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C1694F] text-[#FAF7F2] flex items-center justify-center font-black text-xl border-2 border-[#3A2E2A]">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#3A2E2A]">Ekonomi Sirkuler Nyata</h3>
              <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
                Menyerap limbah perca industri garmen Jawa Barat yang selama ini berakhir dibakar atau mencemari lingkungan, diolah menjadi aksesoris berkualitas tinggi.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0D3D3] text-[#3A2E2A] flex items-center justify-center font-black text-xl border-2 border-[#3A2E2A]">
                <Heart className="w-6 h-6 text-[#C1694F]" />
              </div>
              <h3 className="text-base font-black text-[#3A2E2A]">Pemberdayaan Eks-Buruh</h3>
              <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
                Membuka kembali peluang kerja layak bagi mantan buruh pabrik garmen terdampak PHK (misal Cimahi &amp; Bandung) dengan upah terhormat dan jaminan BPJS.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EFE3D0] text-[#3A2E2A] flex items-center justify-center font-black text-xl border-2 border-[#3A2E2A]">
                <ShieldCheck className="w-6 h-6 text-[#3A2E2A]" />
              </div>
              <h3 className="text-base font-black text-[#3A2E2A]">Water-Based PU Leather</h3>
              <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
                Transparansi material 100%: Menggunakan kulit sintetis water-based bebas klorin dengan emisi pelarut VOC mendekati nol, jauh lebih ramah lingkungan dari PVC.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE97D] text-[#3A2E2A] flex items-center justify-center font-black text-xl border-2 border-[#3A2E2A]">
                <Gift className="w-6 h-6 text-[#C1694F]" />
              </div>
              <h3 className="text-base font-black text-[#3A2E2A]">Bonus Bag Charm Lucu</h3>
              <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
                Setiap pembelian produk tas langsung dilengkapi bag charm boneka suede senada tanpa biaya tambahan, mencerminkan identitas playful Gen-Z.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. REAL TIME IMPACT COUNTER WIDGET
         ========================================================================= */}
      <ImpactCounter />

      {/* =========================================================================
          5. TRACEABILITY STORYTELLER HIGHLIGHT (Simulasi QR Code)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-4xl border-3 border-[#3A2E2A] shadow-sticker-lg p-8 sm:p-14 overflow-hidden relative">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 sticker-badge bg-[#FFE97D] text-[#3A2E2A]">
                <QrCode className="w-3.5 h-3.5 text-[#C1694F]" />
                TRANSPARENCY TECHNOLOGY
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#3A2E2A] tracking-tight leading-snug">
                Pindai QR Code di Koleksimu, Temui Penjahit di Baliknya
              </h2>

              <p className="text-sm sm:text-base text-[#3A2E2A]/80 font-medium leading-relaxed">
                Setiap tas dan dompet STITCHWARE &amp; SPACE dilengkapi QR Code yang menghubungkanmu ke identitas koleksimu yang menampilkan:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#3A2E2A] font-semibold">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C1694F] shrink-0" />
                  <span>Foto &amp; profil artisan penjahit</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C1694F] shrink-0" />
                  <span>Lokasi para penjahit</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C1694F] shrink-0" />
                  <span>Batch kain perca</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C1694F] shrink-0" />
                  <span>Kontribusi limbah yang berhasil kamu selamatkan dari TPA</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/traceability/SNS-CMH-2026-042"
                  className="btn-sticker bg-[#C1694F] text-[#FAF7F2] px-7 py-4 rounded-2xl text-sm font-black inline-flex items-center gap-2"
                >
                  <span>Coba Simulasi Scan QR Storyteller</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#EFE3D0] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker space-y-4">

                {/* Simulated Product Tag */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border-2 border-[#3A2E2A] flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#3A2E2A] bg-white p-1 shrink-0">
                    <Image
                      src="/images/qr-demo.svg"
                      alt="QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#C1694F]">INNER LABEL QR TAG</span>
                    <h4 className="text-sm font-black text-[#3A2E2A]">Aura Shoulder Bag</h4>
                    <span className="text-xs font-mono font-bold text-[#3A2E2A]/70 block">
                      CODE: SNS-CMH-2026-042
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">
                      ✓ QC Verified &amp; Traced
                    </span>
                  </div>
                </div>

                {/* Artisan Snippet */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border-2 border-[#3A2E2A] flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#3A2E2A] shrink-0 bg-[#FFE97D]">
                    <Image
                      src="/images/artisans/ibu-ani.svg"
                      alt="Ibu Ani"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <strong className="block text-sm font-black text-[#3A2E2A]">Ibu Ani Rohani</strong>
                    <span className="text-[#C1694F] font-bold">Master Penjahit Pola Cimahi</span>
                    <p className="text-[11px] text-[#3A2E2A]/70 line-clamp-1 mt-0.5">
                      &ldquo;180 menit dedikasi jahit kanvas marsoto.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-bold text-[#3A2E2A]/60">
                    Menghubungkan pembeli langsung dengan pembuat karyanya.
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. LIVE CUSTOMIZER BANNER TEASER (Endowment Effect)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0D3D3] rounded-4xl border-3 border-[#3A2E2A] shadow-sticker-lg p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="sticker-badge bg-[#FAF7F2] text-[#3A2E2A]">
              ✨ MAKE IT YOURS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#3A2E2A] tracking-tight">
              Ingin Sentuhan Personal? Custom Nama di Gantungan Akrilik 3mm
            </h2>
            <p className="text-sm text-[#3A2E2A]/80 font-medium">
              Gunakan interactive customizer untuk cetak inisial atau nama panggilanmu langsung di atas cast acrylic tebal anti-menguning. Cocok jadi pelengkap tas atau hadiah manis!
            </p>
          </div>
          <Link
            href="/product/sns-keychain-acrylic"
            className="btn-sticker bg-[#3A2E2A] text-[#FAF7F2] px-8 py-4 rounded-2xl text-sm font-black whitespace-nowrap hover:bg-[#C1694F]"
          >
            Buka Live Customizer &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
