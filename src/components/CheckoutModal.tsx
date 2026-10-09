"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, CheckCircle2, ShieldCheck, Heart, Sparkles, QrCode } from "lucide-react";
import Link from "next/link";

export default function CheckoutModal() {
  const {
    isCheckoutModalOpen,
    closeCheckoutModal,
    items,
    subtotal,
    totalImpact,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<"form" | "success">("form");
  const [name, setName] = useState("Laras Ayu Novianti");
  const [phone, setPhone] = useState("089663678955");
  const [address, setAddress] = useState("Jl. Dipatiukur No. 42, Coblong, Kota Bandung");
  const [courier, setCourier] = useState("paxel");
  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [orderId, setOrderId] = useState("");

  if (!isCheckoutModalOpen) return null;

  const shippingCost = subtotal >= 300000 ? 0 : 15000;
  const grandTotal = subtotal + shippingCost;

  const formattedSubtotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const formattedShipping =
    shippingCost === 0
      ? "GRATIS ONGKIR"
      : new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(shippingCost);

  const formattedGrandTotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(grandTotal);

  const handleProcessOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SNS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep("success");
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3A2E2A]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl border-3 border-[#3A2E2A] shadow-sticker-lg p-6 sm:p-8 text-[#3A2E2A]">
        
        {/* Close Button */}
        <button
          onClick={closeCheckoutModal}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#EFE3D0] hover:bg-[#FFE97D] text-[#3A2E2A] border border-[#3A2E2A] transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE97D] text-xs font-black border border-[#3A2E2A]">
                <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
                CHECKOUT CIRKULER S&amp;S
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A2E2A]">
                Selesaikan Pesanan &amp; Dukung Pengrajin
              </h2>
              <p className="text-xs text-[#3A2E2A]/70">
                Data pesananmu diproses langsung menuju workshop perakitan Jawa Barat.
              </p>
            </div>

            {/* Environmental & Social Impact Summary Banner */}
            <div className="bg-[#EFE3D0] p-4 rounded-2xl border-2 border-[#3A2E2A] mb-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-[#C1694F] uppercase tracking-wide">
                <Heart className="w-4 h-4 text-[#C1694F]" />
                Sertifikat Dampak Nyata Pembelian Ini:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#FAF7F2] p-2 rounded-xl border border-[#3A2E2A]">
                  <span className="block font-black text-sm text-[#3A2E2A]">{totalImpact.fabricKg} kg</span>
                  <span className="text-[10px] text-[#3A2E2A]/70">Limbah Perca Didaur Ulang</span>
                </div>
                <div className="bg-[#FAF7F2] p-2 rounded-xl border border-[#3A2E2A]">
                  <span className="block font-black text-sm text-[#3A2E2A]">{totalImpact.artisanHours} jam</span>
                  <span className="text-[10px] text-[#3A2E2A]/70">Upah Layak Eks-Garmen</span>
                </div>
                <div className="bg-[#FAF7F2] p-2 rounded-xl border border-[#3A2E2A]">
                  <span className="block font-black text-sm text-[#3A2E2A]">{totalImpact.co2Kg} kg</span>
                  <span className="text-[10px] text-[#3A2E2A]/70">Jejak CO2 Dicegah</span>
                </div>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="space-y-3 mb-6">
              <h3 className="text-xs font-black uppercase text-[#3A2E2A]/70">Ringkasan Barang ({items.length})</h3>
              <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs bg-[#FAF7F2] p-2.5 rounded-xl border border-[#3A2E2A]/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#3A2E2A]/20 shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-black text-[#3A2E2A]">{item.product.name}</div>
                        <div className="text-[11px] text-[#3A2E2A]/70">
                          {item.quantity}x {item.selectedColor ? `• ${item.selectedColor}` : ""}
                          {item.customText ? ` (Grafir: "${item.customText}")` : ""}
                        </div>
                      </div>
                    </div>
                    <div className="font-black text-[#C1694F]">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleProcessOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2E2A] mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border-2 border-[#3A2E2A] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3A2E2A] mb-1">Nomor WhatsApp</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border-2 border-[#3A2E2A] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3A2E2A] mb-1">Alamat Pengiriman</label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border-2 border-[#3A2E2A] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
                />
              </div>

              {/* Kurir & Payment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2E2A] mb-1">Pilihan Kurir</label>
                  <select
                    value={courier}
                    onChange={(e) => setCourier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border-2 border-[#3A2E2A] text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
                  >
                    <option value="paxel">Paxel Sameday / Nextday (Eco Box)</option>
                    <option value="jnt">J&amp;T Express (Reguler)</option>
                    <option value="sicepat">SiCepat Halur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2E2A] mb-1">Metode Pembayaran</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border-2 border-[#3A2E2A] text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
                  >
                    <option value="qris">QRIS (GoPay, OVO, ShopeePay, BCA)</option>
                    <option value="bca">BCA Virtual Account</option>
                    <option value="mandiri">Mandiri Livin' VA</option>
                  </select>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="pt-2 border-t border-[#3A2E2A]/10 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#3A2E2A]/70">Subtotal Produk:</span>
                  <span className="font-bold">{formattedSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#3A2E2A]/70">Biaya Pengiriman:</span>
                  <span className={`font-bold ${shippingCost === 0 ? "text-[#C1694F]" : ""}`}>
                    {formattedShipping}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black pt-2 border-t border-[#3A2E2A]/10">
                  <span>Total Pembayaran:</span>
                  <span className="text-[#C1694F] text-base">{formattedGrandTotal}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-sticker bg-[#C1694F] text-[#FAF7F2] w-full py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-2 mt-4"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Bayar Sekarang ({formattedGrandTotal})</span>
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#FFE97D] rounded-full border-3 border-[#3A2E2A] flex items-center justify-center mx-auto shadow-sticker">
              <CheckCircle2 className="w-9 h-9 text-[#C1694F]" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D0] text-xs font-black border border-[#3A2E2A]">
                ORDER BERHASIL • KODE: {orderId}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A2E2A]">
                Terima Kasih, {name}!
              </h2>
              <p className="text-xs sm:text-sm text-[#3A2E2A]/80 max-w-md mx-auto">
                Pesananmu telah masuk ke antrean jahit atelier Cimahi/Bandung. Bersama S&amp;S, kamu telah berkontribusi nyata pada ekonomi sirkuler.
              </p>
            </div>

            {/* QR Simulation Card */}
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker max-w-sm mx-auto space-y-4">
              <div className="w-32 h-32 relative mx-auto border-2 border-[#3A2E2A] rounded-2xl overflow-hidden bg-white p-2">
                <Image
                  src="/images/qr-demo.svg"
                  alt="QR Code Traceability"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-[#C1694F]">Tag QR Traceability</span>
                <p className="text-[11px] text-[#3A2E2A]/70 mt-1">
                  Tag QR ini akan dijahit di dalam produkmu agar kamu bisa mengecek identitas penjahit dan sumber bahan kapan pun.
                </p>
              </div>
              <Link
                href="/traceability/SNS-CMH-2026-042"
                onClick={closeCheckoutModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C1694F] hover:underline"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Simulasikan Halaman Traceability Penjahit &rarr;</span>
              </Link>
            </div>

            <button
              onClick={closeCheckoutModal}
              className="btn-sticker bg-[#FFE97D] text-[#3A2E2A] px-8 py-3 rounded-2xl text-xs font-black"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
