export interface Artisan {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  location: string;
  bio: string;
  formerFactory: string;
  avatar: string;
  signatureSpecialty: string;
  craftCount: number;
  favoriteCraft: string;
  quote: string;
}

export interface TraceabilityRecord {
  code: string;
  productName: string;
  productId: string;
  artisanId: string;
  batchNumber: string;
  productionDate: string;
  workshopLocation: string;
  workshopAddress: string;
  fabricSource: string;
  fabricType: string;
  wasteDivertedKg: number;
  artisanHoursLogged: number;
  qcInspector: string;
  qcStatus: "Inspected & Approved" | "Verified Fair Trade";
  storySnippet: string;
  impactMetrics: {
    waterSavedLiters: number;
    carbonOffsetKg: number;
    fairWageIndex: string;
  };
}

export const ARTISANS: Record<string, Artisan> = {
  "artisan-ani": {
    id: "artisan-ani",
    name: "Ibu Ani Rohani",
    role: "Master Artisan & Penjahit Pola Kanvas",
    experienceYears: 12,
    location: "Melong, Cimahi Selatan, Jawa Barat",
    bio: "Pernah bekerja selama lebih dari 10 tahun di industri garmen ekspor Cimahi sebelum terdampak restrukturisasi pabrik. Ibu Ani kini memimpin tim perakitan tas S&S dengan teknik double-stitching yang kokoh.",
    formerFactory: "Eks-Pekerja PT Namnam Fashion Industries Cimahi",
    avatar: "/images/artisans/ibu-ani.svg",
    signatureSpecialty: "Jahitan presisi kanvas marsoto 350g & teknik piping sudut bulat Water-Based PU",
    craftCount: 540,
    favoriteCraft: "Aura Woven Shoulder Bag",
    quote: "Setiap helai kain perca yang dulu dianggap sampah, kini di tangan kami bernilai dan membawa martabat kerja yang adil."
  },
  "artisan-rahmat": {
    id: "artisan-rahmat",
    name: "Pak Rahmat Hidayat",
    role: "Spesialis Anyam Perca & Rekonstruksi Struktur",
    experienceYears: 9,
    location: "Dipatiukur, Bandung Raya, Jawa Barat",
    bio: "Berlatar belakang operator jahit garmen denim di kawasan Bandung. Memiliki kepekaan tinggi dalam menyusun potongan perca beragam warna menjadi komposisi visual harmonis tanpa cacat simetris.",
    formerFactory: "Eks-Buruh Konveksi Ekspor Bandung Raya",
    avatar: "/images/artisans/pak-rahmat.svg",
    signatureSpecialty: "Pola anyaman perca tenun drill-denim & pemasangan zipper antik",
    craftCount: 420,
    favoriteCraft: "Luna Compact Handbag",
    quote: "Di Stitchware & Space, kami tidak hanya menjahit barang, tapi menjahit masa depan keluarga dengan jam kerja manusiawi."
  },
  "artisan-lilis": {
    id: "artisan-lilis",
    name: "Teh Lilis Suryani",
    role: "Artisan Finishing & Miniatur Boneka Tekstil",
    experienceYears: 7,
    location: "Cimahi Tengah, Jawa Barat",
    bio: "Ibu muda terampil yang sebelumnya merakit pakaian anak di pabrik garmen. Di S&S, kecintaannya pada detail dituangkan dalam pembuatan bag charm boneka suede dan aksesoris dompet berpresisi tinggi.",
    formerFactory: "Eks-Garmen Tekstil Leuwigajah Cimahi",
    avatar: "/images/artisans/teh-lilis.svg",
    signatureSpecialty: "Bordir tangan ekspresi wajah boneka suede & isi dakron proporsional",
    craftCount: 680,
    favoriteCraft: "Stitchy Plush Bag Charm & Harmoni Wallet",
    quote: "Bikin boneka bag charm selalu bikin tersenyum. Menyenangkan tahu karya tangan kami digantung bangga oleh anak-anak muda."
  },
  "artisan-deden": {
    id: "artisan-deden",
    name: "Kang Deden Kurnia",
    role: "Laser Craft Specialist & Quality Inspector",
    experienceYears: 5,
    location: "Soreang, Bandung Selatan, Jawa Barat",
    bio: "Ahli operasional laser cutting CO2 dan kontrol kualitas. Mengawasi pemotongan akrilik 3mm tanpa sisa hangus serta memastikan setiap produk yang keluar dari workshop memenuhi standar ekspor.",
    formerFactory: "Eks-Operator Teknik Manufaktur Bandung",
    avatar: "/images/artisans/kang-deden.svg",
    signatureSpecialty: "Kalibrasi laser CO2 presisi 0.1mm untuk akrilik cast 3mm & QC kekuatan tarikan benang",
    craftCount: 890,
    favoriteCraft: "Custom Name 3mm Acrylic Keychain",
    quote: "Presisi adalah kunci. Kustomisasi nama konsumen harus seimbang dengan estetika desain S&S."
  }
};

export const TRACEABILITY_DATABASE: Record<string, TraceabilityRecord> = {
  "SNS-CMH-2026-042": {
    code: "SNS-CMH-2026-042",
    productName: "Aura Woven Shoulder Bag",
    productId: "sns-bag-shoulder",
    artisanId: "artisan-ani",
    batchNumber: "BATCH-2026-W04",
    productionDate: "14 Maret 2026",
    workshopLocation: "Atelier S&S Melong, Cimahi",
    workshopAddress: "Jl. Industri Melong No. 24, Cimahi Selatan, Jawa Barat",
    fabricSource: "Mitra Konsorsium Pabrik Garmen Cimahi (Sisa Roll Potong)",
    fabricType: "Marsoto Canvas (350 GSM) & Perca Woven Drill Eks-Ekspor",
    wasteDivertedKg: 0.84,
    artisanHoursLogged: 3.0,
    qcInspector: "Kang Deden Kurnia",
    qcStatus: "Inspected & Approved",
    storySnippet: "Tas ini dirakit dengan 180 menit dedikasi Ibu Ani. Perca tenun di bagian aksen depan berasal dari sisa potongan katun drill warna terakota dan krem yang diselamatkan dari penimbunan TPA.",
    impactMetrics: {
      waterSavedLiters: 1250,
      carbonOffsetKg: 2.1,
      fairWageIndex: "128% UMK Regional"
    }
  },
  "SNS-BDG-2026-108": {
    code: "SNS-BDG-2026-108",
    productName: "Luna Compact Handbag",
    productId: "sns-bag-handbag",
    artisanId: "artisan-rahmat",
    batchNumber: "BATCH-2026-W05",
    productionDate: "20 Maret 2026",
    workshopLocation: "Hub Kreatif S&S Dipatiukur, Bandung",
    workshopAddress: "Kawasan Kreatif Dipatiukur No. 88, Coblong, Kota Bandung",
    fabricSource: "Mitra Konveksi Lokal Bandung Timur",
    fabricType: "Marsoto Natural Canvas & Sisa Tenun Woven Katun",
    wasteDivertedKg: 0.84,
    artisanHoursLogged: 3.0,
    qcInspector: "Kang Deden Kurnia",
    qcStatus: "Inspected & Approved",
    storySnippet: "Pak Rahmat menyusun 7 strip kain perca warna senada menjadi panel depan handbag ini. Handle dibuat dari Water-Based PU tanpa polutan klorin.",
    impactMetrics: {
      waterSavedLiters: 1180,
      carbonOffsetKg: 1.95,
      fairWageIndex: "128% UMK Regional"
    }
  },
  "SNS-CMH-2026-015": {
    code: "SNS-CMH-2026-015",
    productName: "Komorebi Daily Sling Bag",
    productId: "sns-bag-sling",
    artisanId: "artisan-ani",
    batchNumber: "BATCH-2026-W03",
    productionDate: "05 Maret 2026",
    workshopLocation: "Atelier S&S Melong, Cimahi",
    workshopAddress: "Jl. Industri Melong No. 24, Cimahi Selatan, Jawa Barat",
    fabricSource: "Mitra Perca Terkurasi Kawasan Industri Cimahi",
    fabricType: "Marsoto Canvas Mustard & Perca Tenun Lembut",
    wasteDivertedKg: 0.84,
    artisanHoursLogged: 3.0,
    qcInspector: "Kang Deden Kurnia",
    qcStatus: "Verified Fair Trade",
    storySnippet: "Dibuat khusus untuk menemani gaya hidup aktif Gen-Z. Menghubungkan kenyamanan pakai harian dengan kepedulian nyata terhadap kelestarian lingkungan Jawa Barat.",
    impactMetrics: {
      waterSavedLiters: 1300,
      carbonOffsetKg: 2.2,
      fairWageIndex: "128% UMK Regional"
    }
  },
  "SNS-CMH-2026-077": {
    code: "SNS-CMH-2026-077",
    productName: "Harmoni Matching Wallet",
    productId: "sns-wallet-terra",
    artisanId: "artisan-lilis",
    batchNumber: "BATCH-2026-W06",
    productionDate: "22 Maret 2026",
    workshopLocation: "Atelier S&S Melong, Cimahi",
    workshopAddress: "Jl. Industri Melong No. 24, Cimahi Selatan, Jawa Barat",
    fabricSource: "Potongan Sisa Pola Tas Lini Aura",
    fabricType: "Perca Marsoto & Water-Based PU Trim",
    wasteDivertedKg: 0.43,
    artisanHoursLogged: 1.5,
    qcInspector: "Kang Deden Kurnia",
    qcStatus: "Inspected & Approved",
    storySnippet: "Pola dompet ini dirancang cerdas dengan efisiensi zero-waste, mengambil sisa potong geometris tas agar tidak ada lembar kanvas terbuang percuma.",
    impactMetrics: {
      waterSavedLiters: 620,
      carbonOffsetKg: 1.05,
      fairWageIndex: "128% UMK Regional"
    }
  },
  "SNS-CMH-2026-204": {
    code: "SNS-CMH-2026-204",
    productName: "Stitchy Plush Bag Charm",
    productId: "sns-charm-plush",
    artisanId: "artisan-lilis",
    batchNumber: "BATCH-2026-W02",
    productionDate: "18 Maret 2026",
    workshopLocation: "Atelier S&S Melong, Cimahi",
    workshopAddress: "Jl. Industri Melong No. 24, Cimahi Selatan, Jawa Barat",
    fabricSource: "Sisa Bahan Suede Pabrik Sepatu & Sofa Bandung",
    fabricType: "Ultra-Soft Suede & Dakron Grade A Non-Toxic",
    wasteDivertedKg: 0.15,
    artisanHoursLogged: 0.7,
    qcInspector: "Ibu Ani Rohani",
    qcStatus: "Inspected & Approved",
    storySnippet: "Karakter boneka maskot Stitchware & Space yang dijahit manual satu per satu dengan ketelitian tinggi oleh Teh Lilis.",
    impactMetrics: {
      waterSavedLiters: 220,
      carbonOffsetKg: 0.4,
      fairWageIndex: "128% UMK Regional"
    }
  },
  "SNS-BDG-2026-301": {
    code: "SNS-BDG-2026-301",
    productName: "Custom Name 3mm Acrylic Keychain",
    productId: "sns-keychain-acrylic",
    artisanId: "artisan-deden",
    batchNumber: "BATCH-2026-CUSTOM",
    productionDate: "Live On-Demand",
    workshopLocation: "Studio Laser S&S Dipatiukur, Bandung",
    workshopAddress: "Kawasan Kreatif Dipatiukur No. 88, Coblong, Kota Bandung",
    fabricSource: "Cast Acrylic Industri Bersertifikasi Non-Toxic",
    fabricType: "High Optical Cast Acrylic 3mm + Brass O-Ring",
    wasteDivertedKg: 0.05,
    artisanHoursLogged: 0.2,
    qcInspector: "Kang Deden Kurnia",
    qcStatus: "Inspected & Approved",
    storySnippet: "Diukir secara presisi dengan mesin laser cutting CO2 dan dipoles halus menggunakan tangan agar tepian nyaman dipegang.",
    impactMetrics: {
      waterSavedLiters: 50,
      carbonOffsetKg: 0.15,
      fairWageIndex: "128% UMK Regional"
    }
  }
};

export const IMPACT_OVERVIEW = {
  totalFabricUpcycledKg: 6700, // 6.7 ton per tahun kapasitas penuh dari laporan Bab V
  artisansEmpowered: 15, // 15 tenaga eks-pekerja garmen
  fairHoursCreatedMonthly: 2640, // 158.400 menit / bulan
  zeroVirginPlasticWaste: "100%",
  chlorineFreeWaterPU: "100%",
  partnerFactories: 4,
  locationCoverage: "Bandung Raya & Cimahi"
};
