"use client";

import React, { useState } from "react";
import { Recycle, Users, Clock, Leaf, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ImpactCounter() {
  const [bagCount, setBagCount] = useState(2);

  // Dynamic calculations based on S&S business proposal metrics
  const fabricSaved = (bagCount * 0.84).toFixed(2);
  const artisanHours = (bagCount * 3.0).toFixed(1);
  const waterSavedLiters = (bagCount * 1250).toLocaleString("id-ID");
  const co2Offset = (bagCount * 2.1).toFixed(1);

  return (
    <section id="impact" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFE97D]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#F0D3D3]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 sticker-badge bg-[#FFE97D] text-[#3A2E2A]">
            <Sparkles className="w-3.5 h-3.5 text-[#C1694F]" />
            DAMPAK UNTUK SOSIAL MASYARAKAT &amp; KELESTARIAN BUMI
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#3A2E2A] tracking-tight leading-tight">
            Setiap Jahitan Menyerap Limbah, Menghidupkan Martabat
          </h2>
          <p className="text-base sm:text-lg text-[#3A2E2A]/75 font-medium leading-relaxed">
            Mengonversi ancaman krisis limbah tekstil Jawa Barat dan gelombang PHK industri garmen menjadi ekosistem ekonomi sirkuler yang nyata.
          </p>
        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Card 1 */}
          <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE97D] border-2 border-[#3A2E2A] flex items-center justify-center mb-4">
              <Recycle className="w-6 h-6 text-[#3A2E2A]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C1694F]">Target Penuh Tahunan</span>
            <div className="text-4xl font-black text-[#3A2E2A] mt-1 mb-2">±6,7 Ton</div>
            <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
              Limbah kain perca terserap dan dialihkan dari pembuangan TPA atau pembakaran terbuka.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-[#F0D3D3] border-2 border-[#3A2E2A] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#C1694F]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C1694F]">Pemberdayaan</span>
            <div className="text-4xl font-black text-[#3A2E2A] mt-1 mb-2">15 Pengrajin</div>
            <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
              Tenaga kerja terampil eks-buruh garmen diperkerjakan dengan upah adil &amp; mendapatkan fasilitas BPJS.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE3D0] border-2 border-[#3A2E2A] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#3A2E2A]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C1694F]">Jam Kerja Adil</span>
            <div className="text-4xl font-black text-[#3A2E2A] mt-1 mb-2">2.640 Jam</div>
            <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
              Jam kerja layak tercipta per bulan dengan standar tarif produksi.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-[#C1694F] border-2 border-[#3A2E2A] flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-[#FAF7F2]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFE97D]">Eco Material Trim</span>
            <div className="text-3xl font-black text-[#3A2E2A] mt-1 mb-2">100% Non-PVC</div>
            <p className="text-xs text-[#3A2E2A]/75 leading-relaxed">
              Water-Based PU Leather bebas klorin &amp; emisi VOC sangat rendah.
            </p>
          </div>

        </div>

        {/* Interactive Impact Calculator Box */}
        <div className="bg-[#EFE3D0] rounded-4xl p-8 sm:p-12 border-3 border-[#3A2E2A] shadow-sticker-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Interactive Slider */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] rounded-full text-xs font-black text-[#3A2E2A] border border-[#3A2E2A]">
                KALKULATOR DAMPAK LINGKUNGAN
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#3A2E2A] tracking-tight">
                Hitung Kontribusi Dampak Belanjamu
              </h3>
              <p className="text-sm text-[#3A2E2A]/80 font-medium">
                Tentukan jumlah tas STITCHWARE &amp; SPACE yang kamu miliki, lihat dan rasakan dampak yang kamu ciptakan:
              </p>

              {/* Slider Input */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border-2 border-[#3A2E2A] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#3A2E2A]">Jumlah Koleksi Tas S&amp;S:</span>
                  <span className="text-2xl font-black text-[#C1694F] bg-[#FFE97D] px-4 py-1 rounded-xl border border-[#3A2E2A]">
                    {bagCount} Pcs
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  value={bagCount}
                  onChange={(e) => setBagCount(parseInt(e.target.value) || 1)}
                  className="w-full accent-[#C1694F] cursor-pointer h-2 bg-[#EFE3D0] rounded-lg"
                />

                <div className="flex justify-between text-[11px] font-bold text-[#3A2E2A]/60">
                  <span>1 Tas (Starter)</span>
                  <span>5 Tas (Squad Circle)</span>
                  <span>10 Tas (Eco Warrior)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Computed Metrics Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center">
                <span className="text-xs font-bold text-[#C1694F] uppercase">Limbah Kain Perca</span>
                <div className="text-3xl font-black text-[#3A2E2A] my-1">{fabricSaved} kg</div>
                <span className="text-[11px] text-[#3A2E2A]/70">Didaur ulang dari TPA</span>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center">
                <span className="text-xs font-bold text-[#C1694F] uppercase">Upah Layak Terbayar</span>
                <div className="text-3xl font-black text-[#3A2E2A] my-1">{artisanHours} Jam</div>
                <span className="text-[11px] text-[#3A2E2A]/70">Jam kerja yang adil</span>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center">
                <span className="text-xs font-bold text-[#C1694F] uppercase">Air Bersih Dihemat</span>
                <div className="text-3xl font-black text-[#3A2E2A] my-1">{waterSavedLiters} L</div>
                <span className="italic text-[11px] text-[#3A2E2A]/70">Virtual water textile</span>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center">
                <span className="text-xs font-bold text-[#C1694F] uppercase">Emisi Karbon</span>
                <div className="text-3xl font-black text-[#3A2E2A] my-1">{co2Offset} kg</div>
                <span className="text-[11px] text-[#3A2E2A]/70">Emisi karbon dicegah</span>
              </div>

              <div className="col-span-2 pt-2">
                <Link
                  href="/traceability/SNS-CMH-2026-042"
                  className="btn-sticker bg-[#C1694F] text-[#FAF7F2] w-full py-3.5 rounded-2xl text-sm font-black flex items-center justify-center gap-2"
                >
                  <span>Cek Bukti Nyata di Traceability Storyteller</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
