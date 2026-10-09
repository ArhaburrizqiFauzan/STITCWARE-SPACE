"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Sparkles, ShoppingBag, ShieldCheck, Check } from "lucide-react";

interface KeychainCustomizerProps {
  product: Product;
}

export default function KeychainCustomizer({ product }: KeychainCustomizerProps) {
  const { addToCart } = useCart();
  const [customText, setCustomText] = useState("LARAS");
  const [selectedTint, setSelectedTint] = useState("Crystal Clear");
  const [fontStyle, setFontStyle] = useState<"bold" | "clean" | "mono">("bold");
  const [ringType, setRingType] = useState<"brass" | "silver">("brass");
  const [addedSuccess, setAddedSuccess] = useState(false);

  const tints = [
    { name: "Crystal Clear", bg: "rgba(255, 255, 255, 0.75)", border: "#3A2E2A", text: "#C1694F" },
    { name: "Frosted Rose Pink", bg: "rgba(240, 211, 211, 0.85)", border: "#3A2E2A", text: "#3A2E2A" },
    { name: "Neon Mellow Amber", bg: "rgba(255, 233, 125, 0.85)", border: "#3A2E2A", text: "#3A2E2A" },
    { name: "Terracotta Earth", bg: "rgba(193, 105, 79, 0.9)", border: "#3A2E2A", text: "#FAF7F2" },
  ];

  const currentTint = tints.find((t) => t.name === selectedTint) || tints[0];

  const handleAddToCart = () => {
    addToCart(product, {
      quantity: 1,
      selectedColor: selectedTint,
      customText: customText.toUpperCase() || "S&S",
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="bg-[#FAF7F2] rounded-3xl border-3 border-[#3A2E2A] p-6 sm:p-8 shadow-sticker-lg space-y-6">
      
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE97D] text-xs font-black border border-[#3A2E2A]">
          <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
          LIVE 3D ACRYLIC ENGRAVER
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#3A2E2A]">
          Personalisasi Nama / Inisial Kamu
        </h3>
        <p className="text-xs text-[#3A2E2A]/70">
          Laser cutting CO2 presisi 0.1mm pada akrilik cast tebal 3mm anti-menguning.
        </p>
      </div>

      {/* Live Visual 3D Preview Box */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl bg-[#EFE3D0]/60 border-2 border-[#3A2E2A] flex items-center justify-center p-6 overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#3A2E2A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        {/* Realistic Acrylic Keyring Visual */}
        <div className="relative flex flex-col items-center">
          
          {/* Keyring Loop */}
          <div className="relative -mb-3 z-20 flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full border-4 ${
                ringType === "brass"
                  ? "border-[#D4AF37] shadow-[inset_0_0_8px_rgba(212,175,55,0.6)]"
                  : "border-[#B0BEC5] shadow-[inset_0_0_8px_rgba(176,190,197,0.6)]"
              }`}
            />
            <div className="w-2 h-4 bg-[#3A2E2A] rounded-full -mt-1" />
          </div>

          {/* 3mm Cast Acrylic Plaque */}
          <div
            className="relative px-8 py-5 rounded-2xl border-2 shadow-sticker-lg backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center min-w-[220px] max-w-[320px]"
            style={{
              backgroundColor: currentTint.bg,
              borderColor: currentTint.border,
              boxShadow: "5px 5px 0px 0px #3A2E2A, inset 0 1px 3px rgba(255,255,255,0.8)",
            }}
          >
            {/* Gloss reflection line */}
            <div className="absolute top-2 left-4 right-4 h-1.5 bg-white/70 rounded-full blur-[0.5px]" />

            {/* Hanging Hole */}
            <div className="w-3.5 h-3.5 rounded-full border border-[#3A2E2A] bg-white/40 mb-2" />

            {/* Engraved Live Name */}
            <div
              className={`text-2xl sm:text-3xl tracking-widest text-center uppercase select-none transition-all ${
                fontStyle === "bold"
                  ? "font-black"
                  : fontStyle === "clean"
                  ? "font-semibold tracking-wider"
                  : "font-mono font-bold tracking-tight"
              }`}
              style={{
                color: currentTint.text,
                textShadow: "1px 1px 0px rgba(58, 46, 42, 0.2)",
              }}
            >
              {customText.toUpperCase() || "NAMA KAMU"}
            </div>

            {/* Brand Signature Mini Stamping */}
            <div
              className="text-[9px] font-black tracking-widest uppercase mt-1 select-none"
              style={{ color: currentTint.text, opacity: 0.8 }}
            >
              STITCHWARE &amp; SPACE • 3MM CAST
            </div>
          </div>
        </div>

        {/* Live Badge in Preview */}
        <div className="absolute bottom-3 right-3 text-[10px] font-bold bg-[#FAF7F2] text-[#3A2E2A] px-2.5 py-1 rounded-lg border border-[#3A2E2A] shadow-sm">
          Tebal 3.0 mm • Cast Optik
        </div>
      </div>

      {/* Customizer Controls */}
      <div className="space-y-4">
        
        {/* Name Input */}
        <div>
          <label className="block text-xs font-black uppercase text-[#3A2E2A] mb-1.5">
            1. Tuliskan Nama / Inisial (Maks. 10 Huruf):
          </label>
          <input
            type="text"
            maxLength={10}
            value={customText}
            onChange={(e) => setCustomText(e.target.value.slice(0, 10))}
            placeholder="Ketik inisial atau nama kamu..."
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#3A2E2A] font-black text-base text-[#3A2E2A] uppercase placeholder:normal-case placeholder:font-normal placeholder:text-[#3A2E2A]/40 focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
          />
          <div className="flex justify-between text-[11px] text-[#3A2E2A]/60 mt-1">
            <span>Contoh: LARAS, FEBRI, S&amp;S, AURA</span>
            <span>{customText.length}/10 Karakter</span>
          </div>
        </div>

        {/* Color Tint Selection */}
        <div>
          <label className="block text-xs font-black uppercase text-[#3A2E2A] mb-1.5">
            2. Pilih Warna &amp; Finish Akrilik:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {tints.map((tint) => (
              <button
                key={tint.name}
                type="button"
                onClick={() => setSelectedTint(tint.name)}
                className={`p-2.5 rounded-xl border-2 text-xs font-bold transition-all text-left flex items-center justify-between ${
                  selectedTint === tint.name
                    ? "border-[#3A2E2A] bg-[#FFE97D] shadow-sticker-sm"
                    : "border-[#3A2E2A]/20 bg-white hover:border-[#3A2E2A]"
                }`}
              >
                <span className="truncate">{tint.name}</span>
                {selectedTint === tint.name && <Check className="w-3.5 h-3.5 text-[#3A2E2A] shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Typography & Ring Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase text-[#3A2E2A] mb-1.5">
              3. Gaya Huruf:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFontStyle("bold")}
                className={`flex-1 py-2 rounded-xl border-2 text-xs font-black transition-all ${
                  fontStyle === "bold"
                    ? "bg-[#C1694F] text-[#FAF7F2] border-[#3A2E2A]"
                    : "bg-white text-[#3A2E2A] border-[#3A2E2A]/20"
                }`}
              >
                BOLD
              </button>
              <button
                type="button"
                onClick={() => setFontStyle("clean")}
                className={`flex-1 py-2 rounded-xl border-2 text-xs font-semibold transition-all ${
                  fontStyle === "clean"
                    ? "bg-[#C1694F] text-[#FAF7F2] border-[#3A2E2A]"
                    : "bg-white text-[#3A2E2A] border-[#3A2E2A]/20"
                }`}
              >
                CLEAN
              </button>
              <button
                type="button"
                onClick={() => setFontStyle("mono")}
                className={`flex-1 py-2 rounded-xl border-2 text-xs font-mono font-bold transition-all ${
                  fontStyle === "mono"
                    ? "bg-[#C1694F] text-[#FAF7F2] border-[#3A2E2A]"
                    : "bg-white text-[#3A2E2A] border-[#3A2E2A]/20"
                }`}
              >
                CYBER
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-[#3A2E2A] mb-1.5">
              4. Warna O-Ring Gantungan:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setRingType("brass")}
                className={`flex-1 py-2 rounded-xl border-2 text-xs font-bold transition-all ${
                  ringType === "brass"
                    ? "bg-[#FFE97D] text-[#3A2E2A] border-[#3A2E2A]"
                    : "bg-white text-[#3A2E2A] border-[#3A2E2A]/20"
                }`}
              >
                Kuningan Gold
              </button>
              <button
                type="button"
                onClick={() => setRingType("silver")}
                className={`flex-1 py-2 rounded-xl border-2 text-xs font-bold transition-all ${
                  ringType === "silver"
                    ? "bg-[#FFE97D] text-[#3A2E2A] border-[#3A2E2A]"
                    : "bg-white text-[#3A2E2A] border-[#3A2E2A]/20"
                }`}
              >
                Stainless Silver
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Add To Cart CTA */}
      <div className="pt-4 border-t-2 border-[#3A2E2A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs text-[#3A2E2A]/60 font-semibold block">Harga Custom:</span>
          <span className="text-2xl font-black text-[#C1694F]">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="btn-sticker bg-[#C1694F] text-[#FAF7F2] px-6 py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>
            {addedSuccess ? "✓ Ditambahkan ke Keranjang!" : "Pesan Keychain Custom Ini"}
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-[#3A2E2A]/70 pt-1 justify-center sm:justify-start">
        <ShieldCheck className="w-4 h-4 text-[#C1694F]" />
        <span>Diukir personal satu per satu oleh Kang Deden (Bandung Selatan)</span>
      </div>

    </div>
  );
}
