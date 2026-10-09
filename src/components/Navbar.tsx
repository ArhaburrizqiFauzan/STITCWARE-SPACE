"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, Sparkles, QrCode, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#3A2E2A] text-[#FAF7F2] text-xs font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="bg-[#FFE97D] text-[#3A2E2A] px-2 py-0.5 rounded-full text-[10px] font-black uppercase">
          Circular Fashion
        </span>
        <span>
          Setiap Pembelian Tas Termasuk <strong>1 FREE Bag Charm</strong> &amp; Mendukung Eks-Pekerja Garmen Jabar
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#3A2E2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo & Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-[104px] group-hover:-translate-y-0.5 transition-transform">
              <Image
                src="/images/brand-logo.svg"
                alt="STITCHWARE & SPACE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#3A2E2A]">
            <Link
              href="/#koleksi"
              className="hover:text-[#C1694F] transition-colors relative py-1"
            >
              Koleksi Produk
            </Link>
            <Link
              href="/#filosofi"
              className="hover:text-[#C1694F] transition-colors relative py-1"
            >
              Ekonomi Sirkuler
            </Link>
            <Link
              href="/#impact"
              className="hover:text-[#C1694F] transition-colors relative py-1"
            >
              Dampak Sosial
            </Link>
            <Link
              href="/traceability/SNS-CMH-2026-042"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE3D0] hover:bg-[#FFE97D] text-[#3A2E2A] border border-[#3A2E2A] transition-all"
            >
              <QrCode className="w-3.5 h-3.5 text-[#C1694F]" />
              <span>QR Storyteller</span>
            </Link>
            <Link
              href="/product/sns-keychain-acrylic"
              className="inline-flex items-center gap-1.5 text-[#C1694F] hover:text-[#AA573F] transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Customizer</span>
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative btn-sticker bg-[#FFE97D] text-[#3A2E2A] px-4 py-2 rounded-2xl flex items-center gap-2"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-4 h-4 text-[#3A2E2A]" />
              <span className="hidden sm:inline text-xs font-black uppercase">Keranjang</span>
              <span className="w-5 h-5 bg-[#C1694F] text-[#FAF7F2] rounded-full text-[11px] font-black flex items-center justify-center border border-[#3A2E2A]">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border-2 border-[#3A2E2A] bg-[#FAF7F2] text-[#3A2E2A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b-2 border-[#3A2E2A] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-3 font-bold text-base text-[#3A2E2A]">
              <Link
                href="/#koleksi"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-[#3A2E2A]/10 hover:text-[#C1694F]"
              >
                Koleksi Produk (Bags, Wallets, Charms)
              </Link>
              <Link
                href="/#filosofi"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-[#3A2E2A]/10 hover:text-[#C1694F]"
              >
                Ekonomi Sirkuler &amp; Material
              </Link>
              <Link
                href="/#impact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-[#3A2E2A]/10 hover:text-[#C1694F]"
              >
                Dampak Lingkungan &amp; Penjahit
              </Link>
              <Link
                href="/traceability/SNS-CMH-2026-042"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-[#3A2E2A]/10 text-[#C1694F]"
              >
                <span>Simulasi QR Traceability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/product/sns-keychain-acrylic"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-[#3A2E2A] bg-[#FFE97D] px-4 rounded-xl border border-[#3A2E2A]"
              >
                <span>Custom Acrylic Keychain</span>
                <Sparkles className="w-4 h-4 text-[#C1694F]" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
