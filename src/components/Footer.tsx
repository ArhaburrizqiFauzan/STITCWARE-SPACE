import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Heart, Recycle, ShieldCheck, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3A2E2A] text-[#FAF7F2] border-t-4 border-[#C1694F] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Highlight Banner */}
        <div className="bg-[#FAF7F2] text-[#3A2E2A] rounded-3xl p-8 mb-16 border-2 border-[#3A2E2A] shadow-sticker flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#FFE97D] px-3 py-1 rounded-full text-xs font-black uppercase border border-[#3A2E2A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
              Bergabung dengan Gerakan Circular Fashion
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#3A2E2A]">
              Dapatkan Diskon 10% &amp; Member Loyalty Card S&amp;S
            </h3>
            <p className="text-sm text-[#3A2E2A]/80">
              Akses early-release untuk motif perca limited edition dan laporan transparansi bulanan penyerapan limbah kain.
            </p>
          </div>
          <div className="flex w-full md:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Masukkan email kamu..."
              className="px-4 py-3 rounded-2xl bg-[#F5F5F5] border-2 border-[#3A2E2A] text-sm text-[#3A2E2A] placeholder:text-[#3A2E2A]/50 focus:outline-none focus:ring-2 focus:ring-[#C1694F] w-full sm:w-64"
            />
            <button className="btn-sticker bg-[#C1694F] text-[#FAF7F2] px-5 py-3 rounded-2xl text-sm font-black whitespace-nowrap">
              Klaim Promo
            </button>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FAF7F2]/10">

          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C1694F] flex items-center justify-center border-2 border-[#FAF7F2]">
                <Image
                  src="/images/brand-logo.svg"
                  alt="STITCHWARE & SPACE"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xl font-black tracking-tight">STITCHWARE &amp; SPACE</span>
            </div>
            <p className="text-sm text-[#FAF7F2]/75 leading-relaxed">
              Fashion accessories brand berbasis ekonomi sirkuler yang mengubah limbah potongan tekstil bermutu menjadi karya personal bernilai tinggi, sekaligus memberdayakan tenaga kerja terampil eks-buruh garmen Jawa Barat.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="sticker-badge bg-[#EFE3D0] text-[#3A2E2A]">
                <Recycle className="w-3 h-3 text-[#C1694F]" /> SDG 12.5 Limbah
              </span>
              <span className="sticker-badge bg-[#F0D3D3] text-[#3A2E2A]">
                <Heart className="w-3 h-3 text-[#C1694F]" /> SDG 8.5 Upah Layak
              </span>
              <span className="sticker-badge bg-[#FFE97D] text-[#3A2E2A]">
                <ShieldCheck className="w-3 h-3 text-[#3A2E2A]" /> Water-Based PU
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFE97D]">Lini Produk</h4>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80 font-medium">
              <li><Link href="/product/sns-bag-shoulder" className="hover:text-[#FFE97D] transition-colors">Aura Shoulder Bag</Link></li>
              <li><Link href="/product/sns-bag-handbag" className="hover:text-[#FFE97D] transition-colors">Luna Compact Handbag</Link></li>
              <li><Link href="/product/sns-bag-sling" className="hover:text-[#FFE97D] transition-colors">Komorebi Daily Sling</Link></li>
              <li><Link href="/product/sns-wallet-terra" className="hover:text-[#FFE97D] transition-colors">Harmoni Matching Wallet</Link></li>
              <li><Link href="/product/sns-charm-plush" className="hover:text-[#FFE97D] transition-colors">Stitchy Plush Bag Charm</Link></li>
              <li><Link href="/product/sns-keychain-acrylic" className="hover:text-[#FFE97D] transition-colors">Buat Desain Keychain</Link></li>
            </ul>
          </div>

          {/* Traceability & Workshop */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFE97D]">Traceability Hub</h4>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80 font-medium">
              <li>
                <Link href="/traceability/SNS-CMH-2026-042" className="hover:text-[#FFE97D] transition-colors">
                  QR Scanner Storyteller
                </Link>
              </li>
              <li>
                <Link href="/traceability/SNS-CMH-2026-042" className="hover:text-[#FFE97D] transition-colors">
                  Profil Ibu Ani (Cimahi)
                </Link>
              </li>
              <li>
                <Link href="/traceability/SNS-BDG-2026-108" className="hover:text-[#FFE97D] transition-colors">
                  Profil Pak Rahmat (Bandung)
                </Link>
              </li>
              <li>
                <Link href="/traceability/SNS-CMH-2026-204" className="hover:text-[#FFE97D] transition-colors">
                  Profil Teh Lilis (Suede Artisan)
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFE97D]">Workshop Kami</h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C1694F] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAF7F2]">Atelier Melong, Cimahi</strong>
                  <span>Jl. Industri Melong No. 24, Cimahi Selatan, Jawa Barat</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFE97D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAF7F2]">Creative Hub Dipatiukur</strong>
                  <span>Kawasan Dipatiukur No. 88, Kota Bandung, Jawa Barat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
          <p>© 2026 STITCHWARE &amp; SPACE. All rights reserved. Universitas Siliwangi x Sivolution 4.0.</p>
          <div className="flex items-center gap-6">
            <span>Desain UI/UX Gen-Z</span>
            <span>•</span>
            <span>Circular Economy Initiative</span>
            <span>•</span>
            <span>Bandung Raya &amp; Cimahi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
