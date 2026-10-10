"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCartPlus, Eye, QrCode, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

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

  return (
    <div className="group relative bg-[#FAF7F2] rounded-3xl border-2 border-[#3A2E2A] p-4 flex flex-col justify-between shadow-sticker hover:-translate-y-1.5 transition-all duration-300">

      {/* Top Media & Badges */}
      <div className="relative aspect-square w-full rounded-2xl bg-[#EFE3D0]/50 overflow-hidden border border-[#3A2E2A]/10 mb-4">

        {/* Main Product Image */}
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.badges.slice(0, 2).map((badge, idx) => (
            <span
              key={idx}
              className={`sticker-badge ${idx === 0
                ? "bg-[#FFE97D] text-[#3A2E2A]"
                : "bg-[#F0D3D3] text-[#3A2E2A]"
                }`}
            >
              <Sparkles className="w-3 h-3 text-[#C1694F]" />
              {badge}
            </span>
          ))}
        </div>

        {/* Traceability QR Badge (clickable) */}
        <div className="absolute bottom-3 right-3 z-10">
          <Link
            href={`/traceability/${product.defaultTraceCode}`}
            className="inline-flex items-center gap-1 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-xl text-[11px] font-bold text-[#3A2E2A] border border-[#3A2E2A] hover:bg-[#FFE97D] transition-colors shadow-sm"
            title="Lihat Jejak Penjahit & Bahan Produk Ini"
          >
            <QrCode className="w-3.5 h-3.5 text-[#C1694F]" />
            <span>Trace</span>
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">

        {/* Category & Colorways */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#C1694F]">
            {product.category === "bags"
              ? "Tas (Include Charm)"
              : product.category === "wallets"
                ? "Dompet Senada"
                : "Aksesoris"}
          </span>
          <div className="flex items-center gap-1.5">
            {product.colorways.map((cw, i) => (
              <span
                key={i}
                className="w-3.5 h-3.5 rounded-full border border-[#3A2E2A]"
                style={{ backgroundColor: cw.hex }}
                title={cw.name}
              />
            ))}
          </div>
        </div>

        {/* Product Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-black text-[#3A2E2A] group-hover:text-[#C1694F] transition-colors leading-snug line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-xs text-[#3A2E2A]/70 line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Impact micro-metric */}
        <div className="bg-[#EFE3D0]/60 rounded-xl px-2.5 py-1.5 mb-4 text-[11px] font-semibold text-[#3A2E2A] flex items-center justify-between">
          <span>♻️ Perca: <strong>{product.impactMetrics.fabricUpcycledKg} kg</strong></span>
          <span>🧵 Upah: <strong>{product.impactMetrics.artisanHours} jam</strong></span>
        </div>

        {/* Price & Action Buttons */}
        <div className="mt-auto pt-2 border-t border-[#3A2E2A]/10 flex items-center justify-between gap-2">
          <div>
            <div className="text-base font-black text-[#C1694F]">
              {formattedPrice}
            </div>
            {formattedOriginalPrice && (
              <div className="text-[11px] line-through text-[#3A2E2A]/40 font-semibold">
                {formattedOriginalPrice}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={`/product/${product.id}`}
              className="p-2.5 rounded-xl bg-[#EFE3D0] hover:bg-[#FFE97D] text-[#3A2E2A] border border-[#3A2E2A] transition-colors"
              aria-label="Lihat Detail Produk"
              title="Lihat Detail"
            >
              <Eye className="w-4 h-4" />
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="btn-sticker bg-[#FFE97D] text-[#3A2E2A] px-3 py-2 rounded-xl text-xs font-black flex items-center gap-1.5"
              aria-label="Tambah ke Keranjang"
            >
              <ShoppingCartPlus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
