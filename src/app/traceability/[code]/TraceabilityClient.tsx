"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TRACEABILITY_DATABASE, ARTISANS, TraceabilityRecord, Artisan } from "@/data/artisans";
import {
  QrCode,
  ShieldCheck,
  MapPin,
  Clock,
  Recycle,
  Heart,
  Droplet,
  CloudRain,
  ArrowRight,
  Search,
} from "lucide-react";

export default function TraceabilityClient({ code }: { code: string }) {
  const codeParam = code.toUpperCase();
  const [inputCode, setInputCode] = useState(codeParam);

  // Look up trace record or fallback to default
  const record: TraceabilityRecord =
    TRACEABILITY_DATABASE[codeParam] || TRACEABILITY_DATABASE["SNS-CMH-2026-042"];
  
  const artisan: Artisan =
    ARTISANS[record.artisanId] || ARTISANS["artisan-ani"];

  const handleSearchCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim()) {
      window.location.href = `/traceability/${inputCode.trim().toUpperCase()}`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* =========================================================================
          1. HEADER & QR CODE SCAN SIMULATION STATUS
         ========================================================================= */}
      <div className="bg-[#FAF7F2] rounded-4xl border-3 border-[#3A2E2A] p-8 sm:p-12 shadow-sticker-lg relative overflow-hidden">
        
        {/* Glows */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FFE97D]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="sticker-badge bg-[#FFE97D] text-[#3A2E2A]">
                <QrCode className="w-3.5 h-3.5 text-[#C1694F]" />
                QR STORYTELLER
              </span>
              <span className="sticker-badge bg-emerald-100 text-emerald-800 border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                VERIFIED ORIGIN
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#3A2E2A] tracking-tight leading-tight">
              Cerita di Balik Setiap Jahitan Karyamu
            </h1>

            <p className="text-sm sm:text-base text-[#3A2E2A]/80 font-medium leading-relaxed">
              Selamat datang di sertifikat transparansi STITCHWARE &amp; SPACE. Di sinilah setiap produk membuktikan komitmennya terhadap kelestarian lingkungan dan penghargaan pada martabat tenaga kerja.
            </p>

            {/* Quick search bar for other QR codes */}
            <form onSubmit={handleSearchCode} className="flex items-center gap-2 pt-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3A2E2A]/50" />
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Masukkan kode QR produk..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border-2 border-[#3A2E2A] text-xs font-mono font-bold uppercase focus:outline-none focus:ring-2 focus:ring-[#C1694F]"
                />
              </div>
              <button
                type="submit"
                className="btn-sticker bg-[#C1694F] text-[#FAF7F2] px-4 py-2.5 rounded-xl text-xs font-black"
              >
                Cari Kode
              </button>
            </form>
          </div>

          {/* QR Badge Card */}
          <div className="bg-[#EFE3D0] p-6 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker text-center space-y-3 shrink-0 lg:w-72">
            <div className="w-28 h-28 relative mx-auto rounded-2xl overflow-hidden bg-white p-2 border-2 border-[#3A2E2A]">
              <Image
                src="/images/qr-demo.svg"
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#C1694F] block">PASSPORT PRODUK RESMI</span>
              <span className="text-sm font-mono font-black text-[#3A2E2A] block mt-0.5">{record.code}</span>
              <span className="text-[11px] text-[#3A2E2A]/70 block mt-1">Batch: {record.batchNumber}</span>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          2. THE ARTISAN STORYTELLER CARD (Eks-Pekerja Garmen Jawa Barat)
         ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Artisan Profile Card */}
        <div className="lg:col-span-7 bg-[#FAF7F2] rounded-4xl border-3 border-[#3A2E2A] p-8 sm:p-10 shadow-sticker-lg space-y-6">
          <div className="inline-flex items-center gap-2 sticker-badge bg-[#F0D3D3] text-[#3A2E2A]">
            <Heart className="w-3.5 h-3.5 text-[#C1694F]" />
            DIBUAT DENGAN BANGGA OLEH
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-3 border-[#3A2E2A] shadow-sticker-sm bg-[#FFE97D] shrink-0">
              <Image
                src={artisan.avatar}
                alt={artisan.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A2E2A]">{artisan.name}</h2>
              <span className="text-xs sm:text-sm font-black text-[#C1694F] block">{artisan.role}</span>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3A2E2A]/70 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C1694F]" />
                <span>{artisan.location}</span>
              </div>
              <div className="inline-block bg-[#EFE3D0] px-3 py-1 rounded-lg text-[11px] font-bold text-[#3A2E2A] border border-[#3A2E2A]/30">
                {artisan.formerFactory} • {artisan.experienceYears} Tahun Jam Terbang
              </div>
            </div>
          </div>

          {/* Bio & Quote */}
          <div className="space-y-4 pt-2 border-t-2 border-[#3A2E2A]/10">
            <p className="text-sm text-[#3A2E2A]/85 leading-relaxed font-medium">
              {artisan.bio}
            </p>

            <blockquote className="bg-[#FFE97D]/50 border-l-4 border-[#C1694F] p-4 rounded-r-2xl text-xs sm:text-sm font-bold text-[#3A2E2A] italic">
              &ldquo;{artisan.quote}&rdquo;
            </blockquote>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold bg-[#EFE3D0]/50 p-4 rounded-2xl border border-[#3A2E2A]/20">
              <div>
                <span className="text-[10px] text-[#3A2E2A]/60 block uppercase font-bold">Keahlian Khusus</span>
                <span className="font-bold text-[#3A2E2A]">{artisan.signatureSpecialty}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#3A2E2A]/60 block uppercase font-bold">Total Karya Dirakit</span>
                <span className="font-bold text-[#3A2E2A]">{artisan.craftCount}+ Unit Terverifikasi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Product Spec & Verification Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Atelier & Assembly Box */}
          <div className="bg-[#FAF7F2] rounded-3xl border-3 border-[#3A2E2A] p-6 shadow-sticker space-y-4">
            <h3 className="text-base font-black text-[#3A2E2A] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C1694F]" />
              Lokasi Workshop
            </h3>
            
            <div className="space-y-2 text-xs">
              <div className="bg-[#EFE3D0]/60 p-3 rounded-xl border border-[#3A2E2A]/20">
                <strong className="block text-[#3A2E2A] font-black text-sm">{record.workshopLocation}</strong>
                <span className="text-[#3A2E2A]/70">{record.workshopAddress}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#3A2E2A]/10">
                <span className="text-[#3A2E2A]/60">Tanggal Selesai Rakit:</span>
                <span className="font-bold">{record.productionDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#3A2E2A]/10">
                <span className="text-[#3A2E2A]/60">Quality Control (QC):</span>
                <span className="font-bold">{record.qcInspector} ({record.qcStatus})</span>
              </div>
            </div>
          </div>

          {/* Fabric Scrap Origin Box */}
          <div className="bg-[#FFE97D] rounded-3xl border-3 border-[#3A2E2A] p-6 shadow-sticker space-y-3">
            <h3 className="text-base font-black text-[#3A2E2A] flex items-center gap-2">
              <Recycle className="w-4 h-4 text-[#C1694F]" />
              Sumber Limbah Perca Batch Ini
            </h3>
            <p className="text-xs text-[#3A2E2A]/85 font-medium leading-relaxed">
              <strong>Asal Limbah:</strong> {record.fabricSource}
            </p>
            <p className="text-xs text-[#3A2E2A]/85 font-medium leading-relaxed">
              <strong>Komposisi Material:</strong> {record.fabricType}
            </p>
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#3A2E2A] text-xs font-semibold text-[#3A2E2A]">
              ✓ Melalui proses sortir ketat dan grading produk.
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. NUMERICAL IMPACT TILES (Environmental & Social Footprint)
         ========================================================================= */}
      <div className="bg-[#EFE3D0] rounded-4xl border-3 border-[#3A2E2A] p-8 sm:p-12 shadow-sticker-lg space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase text-[#C1694F] tracking-widest">
            KONTRIBUSI SPESIFIK UNIT INI
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#3A2E2A]">
            Dampak Lingkungan yang Berhasil Tercipta
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-[#FAF7F2] p-5 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center space-y-1">
            <Recycle className="w-6 h-6 mx-auto text-[#C1694F]" />
            <div className="text-3xl font-black text-[#3A2E2A]">{record.wasteDivertedKg} kg</div>
            <span className="text-xs font-bold text-[#C1694F]">Kain Perca Terasorbsi</span>
            <span className="text-[10px] text-[#3A2E2A]/60 block">Bebas dari TPA</span>
          </div>

          <div className="bg-[#FAF7F2] p-5 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center space-y-1">
            <Clock className="w-6 h-6 mx-auto text-[#C1694F]" />
            <div className="text-3xl font-black text-[#3A2E2A]">{record.artisanHoursLogged} Jam</div>
            <span className="text-xs font-bold text-[#C1694F]">Waktu Jahit Berkeadilan</span>
            <span className="text-[10px] text-[#3A2E2A]/60 block">Tarif Rp 398 / menit</span>
          </div>

          <div className="bg-[#FAF7F2] p-5 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center space-y-1">
            <Droplet className="w-6 h-6 mx-auto text-[#C1694F]" />
            <div className="text-3xl font-black text-[#3A2E2A]">{record.impactMetrics.waterSavedLiters} L</div>
            <span className="text-xs font-bold text-[#C1694F]">Air Bersih Dihemat</span>
            <span className="text-[10px] text-[#3A2E2A]/60 block">Siklus tekstil sirkuler</span>
          </div>

          <div className="bg-[#FAF7F2] p-5 rounded-3xl border-2 border-[#3A2E2A] shadow-sticker-sm text-center space-y-1">
            <CloudRain className="w-6 h-6 mx-auto text-[#C1694F]" />
            <div className="text-3xl font-black text-[#3A2E2A]">{record.impactMetrics.carbonOffsetKg} kg</div>
            <span className="text-xs font-bold text-[#C1694F]">CO2 Offset</span>
            <span className="text-[10px] text-[#3A2E2A]/60 block">Emisi pembakaran dicegah</span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          4. EXPLORE OTHER PRODUCTS / CODES
         ========================================================================= */}
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-[#3A2E2A]">
          Coba Simulasi Pindai Kode QR Lainnya:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(TRACEABILITY_DATABASE).map((item) => (
            <Link
              key={item.code}
              href={`/traceability/${item.code}`}
              className={`p-4 rounded-2xl border-2 transition-all ${
                item.code === record.code
                  ? "bg-[#FFE97D] border-[#3A2E2A] shadow-sticker-sm"
                  : "bg-[#FAF7F2] border-[#3A2E2A]/30 hover:border-[#3A2E2A]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#3A2E2A]/30">
                  {item.code}
                </span>
                <span className="text-[10px] font-bold text-[#C1694F]">
                  {item.wasteDivertedKg} kg perca
                </span>
              </div>
              <h4 className="text-xs font-black text-[#3A2E2A] line-clamp-1">{item.productName}</h4>
              <span className="text-[11px] text-[#3A2E2A]/70 block mt-0.5">
                Pengrajin: {ARTISANS[item.artisanId]?.name || "Artisan S&S"}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Back to Shop */}
      <div className="text-center pt-8">
        <Link
          href="/#koleksi"
          className="btn-sticker bg-[#C1694F] text-[#FAF7F2] px-8 py-4 rounded-2xl text-sm font-black inline-flex items-center gap-2"
        >
          <span>Pilih Produk &amp; Bawa Pulang Karyamu</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
