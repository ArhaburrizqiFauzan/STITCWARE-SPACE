export interface Product {
  id: string;
  name: string;
  category: "bags" | "wallets" | "accessories";
  modelType?: "Shoulder Bag" | "Handbag" | "Sling Bag" | "Bifold Wallet" | "Zip Wallet" | "Plush Charm" | "Acrylic Keychain";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  story: string;
  images: string[];
  badges: string[];
  materials: {
    name: string;
    description: string;
    percentage: string;
  }[];
  specifications: {
    dimensions: string;
    weight: string;
    closure: string;
    lining: string;
  };
  features: string[];
  defaultTraceCode: string;
  colorways: {
    name: string;
    hex: string;
  }[];
  isCustomizable?: boolean;
  impactMetrics: {
    fabricUpcycledKg: number;
    artisanHours: number;
    co2SavedKg: number;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "sns-bag-shoulder",
    name: "Aura Woven Shoulder Bag",
    category: "bags",
    modelType: "Shoulder Bag",
    price: 499900,
    originalPrice: 599000,
    rating: 4.9,
    reviewCount: 128,
    description: "Shoulder bag bergaya Gen-Z estetik dengan siluet proporsional dan aksen perca tenun presisi. Cocok untuk hangout dari kelas ke kafe hingga meeting santai.",
    story: "Dirakit oleh Ibu Ani di Cimahi menggunakan Kanvas Marsoto 350g kokoh bertekstur bintik halus serta perca tenun drill daur ulang industri garmen Bandung Barat.",
    images: [
      "/images/products/shoulder-bag-terracotta.svg",
      "/images/products/shoulder-bag-detail.svg",
      "/images/products/shoulder-bag-lifestyle.svg"
    ],
    badges: ["100% Upcycled", "Free Bag Charm", "Limited Perca Edition"],
    materials: [
      {
        name: "Kanvas Marsoto (350 gsm)",
        description: "Bahan utama tebal dan kokoh dengan tekstur bintik halus premium, tahan bentuk.",
        percentage: "60%"
      },
      {
        name: "Kain Perca Woven (Denim & Drill)",
        description: "Limbah garmen terkurasi dari industri Jawa Barat, dijahit rapat tanpa melar.",
        percentage: "25%"
      },
      {
        name: "Water-Based PU Leather",
        description: "Kulit sintetis ramah lingkungan bebas klorin & rendah emisi VOC untuk strap & piping.",
        percentage: "15%"
      }
    ],
    specifications: {
      dimensions: "28 cm x 18 cm x 9 cm",
      weight: "380 gram",
      closure: "YKK Antique Brass Zipper",
      lining: "Upcycled Cotton Twill"
    },
    features: [
      "Include 1 Bag Charm Bawaan boneka suede senada",
      "Strap ergonomis bahan Water-Based PU lembut di pundak",
      "Kompartemen utama lega muat iPad Mini, dompet, & make-up kit",
      "Dilengkapi kode QR traceability unik di label dalam"
    ],
    defaultTraceCode: "SNS-CMH-2026-042",
    colorways: [
      { name: "Terracotta Warm", hex: "#C1694F" },
      { name: "Cream & Pastel Pink", hex: "#EFE3D0" },
      { name: "Soft Sunset Yellow", hex: "#FFE97D" }
    ],
    isCustomizable: false,
    impactMetrics: {
      fabricUpcycledKg: 0.84,
      artisanHours: 3.0,
      co2SavedKg: 1.68
    }
  },
  {
    id: "sns-bag-handbag",
    name: "Luna Compact Handbag",
    category: "bags",
    modelType: "Handbag",
    price: 499900,
    originalPrice: 589000,
    rating: 4.8,
    reviewCount: 94,
    description: "Handbag elegan bernuansa hangat dengan handle Water-Based PU lembut dan sentuhan geometris perca tenun kontras. Sempurna untuk casual chic Gen-Z look.",
    story: "Dikerjakan teliti oleh Pak Rahmat di workshop Bandung Raya. Menggabungkan potongan perca denim dan kanvas sisa produksi lokal yang disortir dan dicuci steril.",
    images: [
      "/images/products/handbag-cream.svg",
      "/images/products/handbag-detail.svg",
      "/images/products/handbag-lifestyle.svg"
    ],
    badges: ["Crafted by Artisans", "Free Bag Charm", "Zero Virgin Waste"],
    materials: [
      {
        name: "Kanvas Marsoto Heavy Duty",
        description: "Struktur kaku yang mempertahankan bentuk tas saat diletakkan di meja.",
        percentage: "55%"
      },
      {
        name: "Woven Scrap Patchwork",
        description: "Paduan perca katun tenun warna pastel lembut yang artistik.",
        percentage: "30%"
      },
      {
        name: "Water-Based PU Leather Trim",
        description: "Handle ergonomis tanpa racun pelarut kimia konvensional.",
        percentage: "15%"
      }
    ],
    specifications: {
      dimensions: "26 cm x 21 cm x 10 cm",
      weight: "410 gram",
      closure: "Magnetic Snap & Zip Pocket",
      lining: "Upcycled Organic Canvas"
    },
    features: [
      "Include 1 Bag Charm boneka lucu S&S",
      "Dua pilihan style: Top Handle atau Shoulder Carry",
      "Lapisan dalam dengan saku slip khusus smartphone",
      "QR traceability terhubung langsung ke profil pembuat"
    ],
    defaultTraceCode: "SNS-BDG-2026-108",
    colorways: [
      { name: "Warm Cream & Pink", hex: "#F0D3D3" },
      { name: "Terracotta Earth", hex: "#C1694F" },
      { name: "Pastel Mellow", hex: "#FFE97D" }
    ],
    isCustomizable: false,
    impactMetrics: {
      fabricUpcycledKg: 0.84,
      artisanHours: 3.0,
      co2SavedKg: 1.68
    }
  },
  {
    id: "sns-bag-sling",
    name: "Komorebi Daily Sling Bag",
    category: "bags",
    modelType: "Sling Bag",
    price: 499900,
    originalPrice: 579000,
    rating: 4.9,
    reviewCount: 156,
    description: "Sling bag kasual minimalis dengan tali selempang yang dapat diatur. Ringan, fungsional, dan memberikan aksen visual ceria untuk mobilitas harian kampus.",
    story: "Setiap jengkal jahitan dirakit dengan presisi tinggi oleh Ibu Ani, memberikan penghidupan mandiri berkelanjutan bagi eks-buruh garmen Cimahi.",
    images: [
      "/images/products/sling-bag-yellow.svg",
      "/images/products/sling-bag-detail.svg",
      "/images/products/sling-bag-lifestyle.svg"
    ],
    badges: ["Best Seller", "Free Bag Charm", "Fair Wages Certified"],
    materials: [
      {
        name: "Kanvas Marsoto Premium",
        description: "Permukaan kain dengan tekstur bintik halus tahan gesek.",
        percentage: "58%"
      },
      {
        name: "Perca Tenun Woven Strip",
        description: "Aksen garis vertikal perca estetik di sisi depan.",
        percentage: "27%"
      },
      {
        name: "Water-Based PU Strap Accent",
        description: "Aksen sabuk dan pengunci tahan aus ramah lingkungan.",
        percentage: "15%"
      }
    ],
    specifications: {
      dimensions: "24 cm x 16 cm x 8 cm",
      weight: "320 gram",
      closure: "Heavy-duty Zip Closure",
      lining: "Smooth Cotton Perca"
    },
    features: [
      "Include 1 Bag Charm Bawaan Senada",
      "Tali selempang adjustable dengan ring kuningan antik",
      "Saku rahasia di bagian belakang untuk kartu transportasi & e-money",
      "QR tag interaktif per produk"
    ],
    defaultTraceCode: "SNS-CMH-2026-015",
    colorways: [
      { name: "Pastel Soft Yellow", hex: "#FFE97D" },
      { name: "Terracotta Classic", hex: "#C1694F" },
      { name: "Off-White Cream", hex: "#EFE3D0" }
    ],
    isCustomizable: false,
    impactMetrics: {
      fabricUpcycledKg: 0.84,
      artisanHours: 3.0,
      co2SavedKg: 1.68
    }
  },
  {
    id: "sns-wallet-terra",
    name: "Harmoni Matching Wallet",
    category: "wallets",
    modelType: "Bifold Wallet",
    price: 299900,
    originalPrice: 359000,
    rating: 4.9,
    reviewCount: 88,
    description: "Dompet pasangan senada dengan koleksi tas S&S dalam bahasa desain dan warna yang serasi. Tampil kompak sebagai kesatuan estetik terkurasi.",
    story: "Dibuat dari kain perca presisi potongan sisa tas, memanfaatkan 100% material tanpa limbah buang. Dikerjakan tangan oleh Teh Lilis di Cimahi.",
    images: [
      "/images/products/wallet-terracotta.svg",
      "/images/products/wallet-inside.svg",
      "/images/products/wallet-lifestyle.svg"
    ],
    badges: ["Matching Set", "Zero Waste Pattern", "Handcrafted"],
    materials: [
      {
        name: "Kanvas Marsoto 350g",
        description: "Badan luar kokoh dan tahan lama.",
        percentage: "50%"
      },
      {
        name: "Kain Perca Woven Sisa Pola",
        description: "Aksen flap depan dengan corak perca tenun unik.",
        percentage: "35%"
      },
      {
        name: "Water-Based PU Trim & Edging",
        description: "Piping pinggiran rapi tanpa serat berantakan.",
        percentage: "15%"
      }
    ],
    specifications: {
      dimensions: "12 cm x 9.5 cm x 2 cm",
      weight: "110 gram",
      closure: "Snap button closure",
      lining: "Twill fabric lining"
    },
    features: [
      "6 slot kartu ATM/KTM",
      "1 kompartemen uang kertas berukuran standar",
      "1 saku koin berisleting lancar",
      "Cocok dipasangkan sempurna dengan tas S&S"
    ],
    defaultTraceCode: "SNS-CMH-2026-077",
    colorways: [
      { name: "Terracotta & Cream", hex: "#C1694F" },
      { name: "Pastel Pink & Mellow", hex: "#F0D3D3" }
    ],
    isCustomizable: false,
    impactMetrics: {
      fabricUpcycledKg: 0.43,
      artisanHours: 1.5,
      co2SavedKg: 0.86
    }
  },
  {
    id: "sns-charm-plush",
    name: "Stitchy Plush Bag Charm",
    category: "accessories",
    modelType: "Plush Charm",
    price: 79900,
    originalPrice: 99000,
    rating: 5.0,
    reviewCount: 215,
    description: "Bag charm boneka kecil menggemaskan bertekstur kain suede halus dengan isian dakron non-toxic Grade A. Menambah vibe playful dan identitas personal tasmu.",
    story: "Setiap boneka dijahit manual dengan detail bordir mata dan aksen logo S&S oleh Teh Lilis, eks-pekerja garmen spesialis boneka & aksesoris tekstil.",
    images: [
      "/images/products/bag-charm-plush.svg",
      "/images/products/bag-charm-detail.svg",
      "/images/products/bag-charm-onbag.svg"
    ],
    badges: ["Super Cute", "Dakron Grade A", "Soft Suede Texture"],
    materials: [
      {
        name: "Kain Suede Halus",
        description: "Bahan luar beludru lembut tidak mudah berbulu.",
        percentage: "70%"
      },
      {
        name: "Dakron Non-Toxic Grade A",
        description: "Isian empuk, higienis, dan aman bersentuhan dengan kulit.",
        percentage: "30%"
      }
    ],
    specifications: {
      dimensions: "9 cm x 8 cm x 4 cm",
      weight: "45 gram",
      closure: "Gold Lobster Clasp Ring",
      lining: "Hypoallergenic filling"
    },
    features: [
      "Tekstur suede sangat lembut dipegang",
      "Gantungan clasp putar 360 derajat tahan karat",
      "Bordir ekspresi wajah handmade yang unik",
      "Dapat digantung di tas, tote bag, atau tempat pensil"
    ],
    defaultTraceCode: "SNS-CMH-2026-204",
    colorways: [
      { name: "Terracotta Bear", hex: "#C1694F" },
      { name: "Mellow Yellow Bunny", hex: "#FFE97D" },
      { name: "Blush Pink Kitty", hex: "#F0D3D3" }
    ],
    isCustomizable: true,
    impactMetrics: {
      fabricUpcycledKg: 0.15,
      artisanHours: 0.7,
      co2SavedKg: 0.3
    }
  },
  {
    id: "sns-keychain-acrylic",
    name: "Custom Name 3mm Acrylic Keychain",
    category: "accessories",
    modelType: "Acrylic Keychain",
    price: 39900,
    originalPrice: 49000,
    rating: 4.9,
    reviewCount: 310,
    description: "Gantungan kunci akrilik cast tebal 3mm dengan laser cutting presisi dan live customizer nama/inisial pilihanmu. Anti menguning dan tahan benturan.",
    story: "Diproses menggunakan mesin laser cutting CO2 dan dirakit tangan oleh Kang Deden di Bandung Raya. Memberikan sentuhan personal eksklusif (Endowment Effect).",
    images: [
      "/images/products/keychain-acrylic.svg",
      "/images/products/keychain-custom.svg",
      "/images/products/keychain-lifestyle.svg"
    ],
    badges: ["Live Customizer", "Cast Acrylic 3mm", "Laser Engraved"],
    materials: [
      {
        name: "Cast Acrylic 3mm Premium",
        description: "Bahan akrilik optik bening jernih standar industri, tidak menguning.",
        percentage: "85%"
      },
      {
        name: "Kuningan Antik / Stainless O-Ring",
        description: "Ring gantungan kokoh anti karat berdiameter 25mm.",
        percentage: "15%"
      }
    ],
    specifications: {
      dimensions: "Maksimal 6.5 cm x 3.5 cm (sesuai panjang nama)",
      weight: "20 gram",
      closure: "Stainless Steel Keyring & Ballchain",
      lining: "UV Gloss Coating"
    },
    features: [
      "Custom nama/inisial hingga 10 huruf secara langsung",
      "Teknologi laser CO2 beresolusi tinggi dengan tepian halus",
      "Dilengkapi bandul mini logo siluet STITCHWARE & SPACE",
      "Packaging kardus karton daur ulang + kartu nama personal"
    ],
    defaultTraceCode: "SNS-BDG-2026-301",
    colorways: [
      { name: "Crystal Clear + Terracotta Ink", hex: "#C1694F" },
      { name: "Frosted Pastel Pink", hex: "#F0D3D3" },
      { name: "Neon Mellow Amber", hex: "#FFE97D" }
    ],
    isCustomizable: true,
    impactMetrics: {
      fabricUpcycledKg: 0.05,
      artisanHours: 0.2,
      co2SavedKg: 0.1
    }
  }
];

export const CATEGORIES = [
  { id: "all", name: "Semua Produk", badge: "Koleksi Lengkap" },
  { id: "bags", name: "Tas (Bags)", badge: "Free Bag Charm" },
  { id: "wallets", name: "Dompet (Wallets)", badge: "Matching Set" },
  { id: "accessories", name: "Aksesoris & Custom", badge: "Personalized" },
];
