"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import KeychainCustomizer from "@/components/KeychainCustomizer";
import {
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  QrCode,
  ArrowLeft,
  Check,
  Gift,
  Truck,
  RotateCcw,
  Layers,
} from "lucide-react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart, openCheckoutModal } = useCart();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product ? product.colorways[0]?.name : ""
  );
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null;

  const handleAddToCart = () => {
    addToCart(product, {
      quantity,
      selectedColor,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, {
      quantity,
      selectedColor,
    });
    openCheckoutModal();
  };

  // Find related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Back button & Breadcrumb */}
      <div className="flex items-center gap-3 text-xs font-bold text-[#3A2E2A]/70">
        <Link
          href="/#koleksi"
          className="inline-flex items-center gap-1.5 hover:text-[#C1694F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Koleksi</span>
        </Link>
        <span>/</span>
        <span className="uppercase text-[#C1694F] font-black">{product.category}</span>
        <span>/</span>
        <span className="text-[#3A2E2A] truncate max-w-xs">{product.name}</span>
      </div>

      {/* Main Product Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-square w-full rounded-3xl bg-[#FAF7F2] border-3 border-[#3A2E2A] shadow-sticker-lg overflow-hidden group">
            <Image
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />

            {/* Badges on Gallery */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {product.badges.map((b, i) => (
                <span
                  key={i}
                  className={`sticker-badge ${
                    i === 0 ? "bg-[#FFE97D] text-[#3A2E2A]" : "bg-[#F0D3D3] text-[#3A2E2A]"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#C1694F]" />
                  {b}
                </span>
              ))}
            </div>

            {/* Traceability Trigger in Image */}
            <div className="absolute bottom-4 right-4 z-10">
              <Link
                href={`/traceability/${product.defaultTraceCode}`}
                className="btn-sticker bg-[#FAF7F2] text-[#3A2E2A] px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5"
              >
                <QrCode className="w-4 h-4 text-[#C1694F]" />
                <span>Cek Traceability Penjahit</span>
              </Link>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                  activeImageIdx === idx
                    ? "border-[#C1694F] shadow-sticker-sm scale-102"
                    : "border-[#3A2E2A]/20 hover:border-[#3A2E2A]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Traceability Banner Highlight */}
          <div className="bg-[#EFE3D0] p-5 rounded-2xl border-2 border-[#3A2E2A] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#C1694F] flex items-center gap-1.5">
                <QrCode className="w-4 h-4" />
                QR CODE TRACEABILITY READY
              </span>
              <span className="text-[11px] font-mono font-bold bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#3A2E2A]">
                {product.defaultTraceCode}
              </span>
            </div>
            <p className="text-xs text-[#3A2E2A]/80 leading-relaxed">
              Produk ini memiliki kode batch pelacak ke pengrajin pembuatnya. Pindai label dalam tas atau klik tombol di bawah untuk melihat nama penjahit dan lokasi atelier.
            </p>
            <Link
              href={`/traceability/${product.defaultTraceCode}`}
              className="text-xs font-black text-[#C1694F] hover:underline inline-flex items-center gap-1 mt-1"
            >
              Lihat Detail Asal Bahan &amp; Penjahit &rarr;
            </Link>
          </div>
        </div>

        {/* Right: Info & Purchase Controls */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Header Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#C1694F]">
                {product.modelType || product.category}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-[#3A2E2A]">
                <span>⭐ {product.rating}</span>
                <span className="text-[#3A2E2A]/50">({product.reviewCount} ulasan)</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#3A2E2A] tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-[#C1694F]">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-sm line-through text-[#3A2E2A]/40 font-bold">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>

            <p className="text-sm text-[#3A2E2A]/80 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          {/* Bonus Free Bag Charm Notice (For Bags) */}
          {product.category === "bags" && (
            <div className="bg-[#FFE97D] p-4 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border-2 border-[#3A2E2A] flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6 text-[#C1694F]" />
              </div>
              <div className="text-xs">
                <strong className="block text-sm font-black text-[#3A2E2A]">
                  Include 1 FREE Bag Charm Bawaan!
                </strong>
                <span className="text-[#3A2E2A]/80">
                  Tas ini sudah otomatis dilengkapi boneka plush suede lucu bernuansa senada buatan Teh Lilis (Cimahi).
                </span>
              </div>
            </div>
          )}

          {/* Colorway Selection (If applicable) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-black uppercase text-[#3A2E2A]">
              <span>Pilih Nuansa Warna:</span>
              <span className="text-[#C1694F]">{selectedColor}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.colorways.map((cw) => (
                <button
                  key={cw.name}
                  onClick={() => setSelectedColor(cw.name)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 text-xs font-bold transition-all ${
                    selectedColor === cw.name
                      ? "border-[#3A2E2A] bg-[#FAF7F2] shadow-sticker-sm"
                      : "border-[#3A2E2A]/20 bg-white hover:border-[#3A2E2A]"
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-[#3A2E2A]"
                    style={{ backgroundColor: cw.hex }}
                  />
                  <span>{cw.name}</span>
                  {selectedColor === cw.name && <Check className="w-3.5 h-3.5 text-[#3A2E2A]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Customizer for Acrylic Keychain */}
          {product.id === "sns-keychain-acrylic" ? (
            <KeychainCustomizer product={product} />
          ) : (
            /* Standard Purchase Controls */
            <div className="space-y-4 pt-4 border-t-2 border-[#3A2E2A]/10">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border-2 border-[#3A2E2A] rounded-2xl bg-white overflow-hidden shadow-sticker-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2.5 hover:bg-[#FFE97D] text-[#3A2E2A] font-black text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-2.5 text-sm font-black text-[#3A2E2A] min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2.5 hover:bg-[#FFE97D] text-[#3A2E2A] font-black text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="btn-sticker bg-[#FFE97D] text-[#3A2E2A] px-6 py-3.5 rounded-2xl text-sm font-black flex-1 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedNotice ? "✓ Dimasukkan ke Keranjang!" : "Tambah ke Keranjang"}</span>
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="btn-sticker bg-[#C1694F] text-[#FAF7F2] w-full py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-2"
              >
                <span>Beli Sekarang ({new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(product.price * quantity)})</span>
              </button>
            </div>
          )}

          {/* Guarantees Badges */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs pt-4 border-t border-[#3A2E2A]/10">
            <div className="space-y-1">
              <Truck className="w-5 h-5 mx-auto text-[#C1694F]" />
              <span className="block font-bold">Kirim Cepat Jabar</span>
              <span className="text-[10px] text-[#3A2E2A]/60">Sameday &amp; Reguler</span>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-5 h-5 mx-auto text-[#C1694F]" />
              <span className="block font-bold">Garansi Jahitan</span>
              <span className="text-[10px] text-[#3A2E2A]/60">Gratis reparasi 6 bln</span>
            </div>
            <div className="space-y-1">
              <RotateCcw className="w-5 h-5 mx-auto text-[#C1694F]" />
              <span className="block font-bold">Sirkular Buyback</span>
              <span className="text-[10px] text-[#3A2E2A]/60">Tukar tambah daur ulang</span>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          MATERIAL TRANSPARENCY & IMPACT DETAILS (Laporan Bisnis S&S)
         ========================================================================= */}
      <div className="bg-[#FAF7F2] rounded-3xl border-3 border-[#3A2E2A] p-8 sm:p-12 shadow-sticker-lg space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#3A2E2A]/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 sticker-badge bg-[#EFE3D0] text-[#3A2E2A] mb-2">
              <Layers className="w-3.5 h-3.5 text-[#C1694F]" />
              MATERIAL TRANSPARENCY
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3A2E2A]">
              Transparansi Bahan &amp; Spesifikasi Produk
            </h2>
          </div>
          <div className="text-xs font-semibold text-[#3A2E2A]/70 max-w-sm">
            Kami menjunjung tinggi kejujuran bahan. Tidak menyembunyikan material sintetis atau perca yang digunakan.
          </div>
        </div>

        {/* Materials Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.materials.map((mat, i) => (
            <div
              key={i}
              className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-black text-sm text-[#3A2E2A]">{mat.name}</span>
                <span className="bg-[#FFE97D] text-[#3A2E2A] px-2 py-0.5 rounded-lg text-xs font-black border border-[#3A2E2A]">
                  {mat.percentage}
                </span>
              </div>
              <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specs & Dimensions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#EFE3D0]/60 p-6 rounded-2xl border-2 border-[#3A2E2A]">
          <div>
            <span className="text-[11px] font-bold text-[#3A2E2A]/60 block uppercase">Dimensi</span>
            <span className="text-xs sm:text-sm font-black text-[#3A2E2A]">{product.specifications.dimensions}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#3A2E2A]/60 block uppercase">Berat Bersih</span>
            <span className="text-xs sm:text-sm font-black text-[#3A2E2A]">{product.specifications.weight}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#3A2E2A]/60 block uppercase">Pengunci (Hardware)</span>
            <span className="text-xs sm:text-sm font-black text-[#3A2E2A]">{product.specifications.closure}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#3A2E2A]/60 block uppercase">Lapisan Dalam</span>
            <span className="text-xs sm:text-sm font-black text-[#3A2E2A]">{product.specifications.lining}</span>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-[#3A2E2A]">
            Padukan dengan Koleksi Senada
          </h3>
          <Link href="/#koleksi" className="text-xs font-bold text-[#C1694F] hover:underline">
            Lihat Semua &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="bg-[#FAF7F2] p-4 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EFE3D0] mb-3">
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#C1694F]">
                  {p.modelType || p.category}
                </span>
                <h4 className="text-sm font-black text-[#3A2E2A] line-clamp-1">{p.name}</h4>
                <span className="text-xs font-black text-[#3A2E2A] mt-1 block">
                  Rp {p.price.toLocaleString("id-ID")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
