"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { PartyPopper, Lock, Sprout, HandCoins, X, Plus, Minus, Trash2, ShoppingBag, Sparkles, ArrowRight, Heart } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalImpact,
    addToCart,
    openCheckoutModal,
  } = useCart();

  if (!isOpen) return null;

  // Add-on recommendations (keychain and charm)
  const addOnProducts = PRODUCTS.filter((p) => p.category === "accessories");

  const formattedSubtotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const freeShippingThreshold = 300000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const diffToFree = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3A2E2A]/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l-4 border-[#3A2E2A] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b-2 border-[#3A2E2A]/10 bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FFE97D] border-2 border-[#3A2E2A] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#3A2E2A]" />
              </div>
              <h2 className="text-xl font-black text-[#3A2E2A]">
                Keranjang ({items.length})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-xl bg-[#EFE3D0] hover:bg-[#FFE97D] text-[#3A2E2A] border border-[#3A2E2A] transition-colors"
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Environmental Impact Live Bar */}
          <div className="bg-[#EFE3D0] px-6 py-3 border-b border-[#3A2E2A]/10 text-xs">
            <div className="flex items-center justify-between font-bold text-[#3A2E2A] mb-1">
              <span className="flex items-center gap-1.5 text-[#C1694F]">
                <Heart className="w-3.5 h-3.5 fill-current" />
                Dampak Lingkungan Pesanan Ini
              </span>
              <span>{totalImpact.fabricKg} kg Limbah</span>
            </div>
            <div className="flex justify-between text-[11px] text-[#3A2E2A]/70">
              <span className="flex items-center gap-1.5"><HandCoins className="w-3.5 h-3.5 text-[#C1694F]" />Upah Layak: <strong>{totalImpact.artisanHours} jam</strong></span>
              <span className="flex items-center gap-1.5"><Sprout className="w-3.5 h-3.5 text-[#4FC162]" />Karbon: <strong>{totalImpact.co2Kg} kg</strong></span>
            </div>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#FAF7F2] px-6 py-2.5 border-b border-[#3A2E2A]/10 text-xs">
            <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-[#3A2E2A]">
              <span>
                {diffToFree <= 0
                  ? <span className="flex items-center gap-1.5 text-[#C1694F]">
                    <PartyPopper className="w-3.5 h-3.5" />"Selamat! Kamu Mendapat Bebas Ongkir"
                    </span>
                  : `Tambah Rp ${diffToFree.toLocaleString("id-ID")} lagi untuk Bebas Ongkir`}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#EFE3D0] h-2 rounded-full overflow-hidden border border-[#3A2E2A]/20">
              <div
                className="bg-[#C1694F] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Scrollable Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#EFE3D0] rounded-full mx-auto flex items-center justify-center border-2 border-[#3A2E2A]">
                  <ShoppingBag className="w-8 h-8 text-[#C1694F]" />
                </div>
                <h3 className="text-lg font-bold text-[#3A2E2A]">Keranjangmu Masih Kosong</h3>
                <p className="text-xs text-[#3A2E2A]/70 max-w-xs mx-auto">
                  Yuk jelajahi koleksi tas dan aksesoris ramah lingkungan buatan pengrajin Jawa Barat!
                </p>
                <button
                  onClick={closeCart}
                  className="btn-sticker bg-[#FFE97D] text-[#3A2E2A] px-5 py-2.5 rounded-xl text-xs font-black"
                >
                  Mulai Belanja
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FAF7F2] p-4 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm flex gap-3.5 relative"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl bg-[#EFE3D0] overflow-hidden border border-[#3A2E2A]/20 shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-black text-[#3A2E2A] leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#3A2E2A]/50 hover:text-[#C1694F] p-1"
                          aria-label="Hapus item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Variant & Custom text info */}
                      <div className="text-[11px] text-[#3A2E2A]/70 mt-0.5 space-y-0.5">
                        {item.selectedColor && (
                          <div>Warna: <span className="font-semibold text-[#3A2E2A]">{item.selectedColor}</span></div>
                        )}
                        {item.customText && (
                          <div className="text-[#C1694F] font-bold">
                            Grafir Nama: &ldquo;{item.customText}&rdquo;
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price and Quantity Controller */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#3A2E2A]/10">
                      <span className="text-xs font-black text-[#C1694F]">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        }).format(item.product.price * item.quantity)}
                      </span>

                      <div className="flex items-center border border-[#3A2E2A] rounded-xl bg-[#FAF7F2] overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-[#FFE97D] text-[#3A2E2A]"
                          aria-label="Kurangi kuantitas"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-black text-[#3A2E2A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-[#FFE97D] text-[#3A2E2A]"
                          aria-label="Tambah kuantitas"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Quick Add-on Recommendations */}
            {items.length > 0 && (
              <div className="pt-4 border-t-2 border-[#3A2E2A]/10 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#3A2E2A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
                  <span>Lengkapi dengan Add-on Populer:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {addOnProducts.map((addon) => (
                    <div
                      key={addon.id}
                      className="bg-[#EFE3D0]/60 p-2.5 rounded-xl border border-[#3A2E2A]/30 flex flex-col justify-between"
                    >
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-white mb-2 border border-[#3A2E2A]/10">
                        <Image
                          src={addon.images[0]}
                          alt={addon.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] font-black text-[#3A2E2A] line-clamp-1">
                          {addon.name}
                        </div>
                        <div className="text-[10px] font-bold text-[#C1694F]">
                          Rp {addon.price.toLocaleString("id-ID")}
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(addon)}
                        className="btn-sticker bg-[#FFE97D] text-[#3A2E2A] mt-2 py-1 px-2 rounded-lg text-[10px] font-black w-full"
                      >
                        + Tambah
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-[#FAF7F2] border-t-2 border-[#3A2E2A]/10 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-sm font-medium text-[#3A2E2A]/80">
                  <span>Subtotal:</span>
                  <span className="font-black text-lg text-[#3A2E2A]">{formattedSubtotal}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#3A2E2A]/60">
                  <span>Ongkir:</span>
                  <span>{diffToFree <= 0 ? "Gratis" : "Dihitung saat checkout"}</span>
                </div>
              </div>

              <button
                onClick={openCheckoutModal}
                className="btn-sticker bg-[#C1694F] text-[#FAF7F2] w-full py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-2"
              >
                <span>Lanjut ke Pembayaran</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#3A2E2A]/60 font-medium">
                <span className="flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3 text-[#C1694F]" />Pembayaran aman QRIS, VA &amp; Terjamin 100%
                </span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
