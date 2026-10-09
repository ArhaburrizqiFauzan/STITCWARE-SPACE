const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
const artisansDir = path.join(__dirname, '..', 'public', 'images', 'artisans');
const imagesDir = path.join(__dirname, '..', 'public', 'images');

[productsDir, artisansDir, imagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Helper for SVG wrapper
function svgWrap(content, width = 600, height = 600) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97A5E" />
      <stop offset="100%" stop-color="#C1694F" />
    </linearGradient>
    <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF0A0" />
      <stop offset="100%" stop-color="#FFE97D" />
    </linearGradient>
    <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE1E1" />
      <stop offset="100%" stop-color="#F0D3D3" />
    </linearGradient>
    <linearGradient id="creamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF7F0" />
      <stop offset="100%" stop-color="#EFE3D0" />
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#3A2E2A" flood-opacity="0.12" />
    </filter>
    <filter id="stickerShadow" x="-5%" y="-5%" width="120%" height="120%">
      <feDropShadow dx="4" dy="4" stdDeviation="0" flood-color="#3A2E2A" flood-opacity="1" />
    </filter>
    <pattern id="canvasPattern" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1" fill="#3A2E2A" fill-opacity="0.08" />
      <circle cx="12" cy="12" r="1" fill="#3A2E2A" fill-opacity="0.08" />
    </pattern>
    <pattern id="wovenPatch" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M0 0h10v10H0z" fill="#C1694F" fill-opacity="0.25" />
      <path d="M10 0h10v10H10z" fill="#FFE97D" fill-opacity="0.4" />
      <path d="M0 10h10v10H0z" fill="#F0D3D3" fill-opacity="0.45" />
      <path d="M10 10h10v10H10z" fill="#3A2E2A" fill-opacity="0.15" />
      <path d="M2 5h6M12 5h6M5 12v6M15 12v6" stroke="#3A2E2A" stroke-width="0.8" stroke-dasharray="2 2" stroke-opacity="0.4"/>
    </pattern>
  </defs>
  ${content}
</svg>`;
}

// 1. Shoulder Bag Front
const shoulderBagFront = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="230" fill="#EFE3D0" fill-opacity="0.5" />
  
  <!-- Backdrop sticker badge -->
  <g transform="translate(420, 80) rotate(8)" filter="url(#stickerShadow)">
    <rect width="130" height="34" rx="17" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="65" y="22" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">100% UPCYCLED</text>
  </g>

  <!-- Strap -->
  <path d="M 180 320 C 180 130, 420 130, 420 320" fill="none" stroke="#8F3F29" stroke-width="26" stroke-linecap="round" filter="url(#softShadow)" />
  <path d="M 180 320 C 180 130, 420 130, 420 320" fill="none" stroke="#C1694F" stroke-width="20" stroke-linecap="round" />
  <path d="M 180 320 C 180 130, 420 130, 420 320" fill="none" stroke="#FAF7F2" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round" />

  <!-- D-Rings -->
  <rect x="170" y="300" width="20" height="30" rx="6" fill="#D4AF37" stroke="#3A2E2A" stroke-width="2" />
  <rect x="410" y="300" width="20" height="30" rx="6" fill="#D4AF37" stroke="#3A2E2A" stroke-width="2" />

  <!-- Bag Main Body -->
  <g filter="url(#softShadow)">
    <path d="M 130 330 C 130 290, 470 290, 470 330 L 450 490 C 450 515, 430 535, 405 535 L 195 535 C 170 535, 150 515, 150 490 Z" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3" />
    <path d="M 130 330 C 130 290, 470 290, 470 330 L 450 490 C 450 515, 430 535, 405 535 L 195 535 C 170 535, 150 515, 150 490 Z" fill="url(#canvasPattern)" />
  </g>

  <!-- Perca Woven Patch (Front Pocket) -->
  <path d="M 170 370 L 430 370 L 420 480 C 420 495, 410 505, 395 505 L 205 505 C 190 505, 180 495, 180 480 Z" fill="url(#wovenPatch)" stroke="#3A2E2A" stroke-width="2.5" />
  <line x1="170" y1="370" x2="430" y2="370" stroke="#FAF7F2" stroke-width="3" stroke-dasharray="8 6" />

  <!-- Pocket leather tab & logo -->
  <rect x="260" y="360" width="80" height="22" rx="8" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="2" />
  <text x="300" y="375" font-family="sans-serif" font-weight="900" font-size="9" fill="#3A2E2A" text-anchor="middle" letter-spacing="1">S &amp; S • 2026</text>

  <!-- Bag Charm Doll hanging on Left D-Ring -->
  <g transform="translate(145, 335) rotate(-6)">
    <!-- Ball chain -->
    <path d="M 28 0 C 25 15, 20 30, 20 40" fill="none" stroke="#D4AF37" stroke-width="3" stroke-dasharray="3 3" />
    <!-- Doll Body (Suede Bear) -->
    <ellipse cx="20" cy="72" rx="26" ry="28" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <!-- Doll Ears -->
    <circle cx="2" cy="50" r="10" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <circle cx="38" cy="50" r="10" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <!-- Doll Face -->
    <circle cx="13" cy="68" r="2.5" fill="#3A2E2A" />
    <circle cx="27" cy="68" r="2.5" fill="#3A2E2A" />
    <path d="M 18 74 Q 20 77 22 74" fill="none" stroke="#3A2E2A" stroke-width="1.8" stroke-linecap="round" />
    <!-- Cute Bow -->
    <polygon points="15,88 25,88 20,84" fill="#C1694F" stroke="#3A2E2A" stroke-width="1" />
  </g>

  <!-- Traceability Tag Preview badge -->
  <g transform="translate(60, 480)" filter="url(#stickerShadow)">
    <rect width="140" height="42" rx="12" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    <text x="14" y="20" font-family="sans-serif" font-weight="bold" font-size="10" fill="#C1694F">TRACED TO ARTISAN</text>
    <text x="14" y="34" font-family="monospace" font-size="9" fill="#3A2E2A">#SNS-CMH-2026-042</text>
  </g>
`);

// 2. Shoulder Bag Detail
const shoulderBagDetail = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <rect x="60" y="60" width="480" height="480" rx="24" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  
  <!-- Canvas Texture Zoom -->
  <rect x="80" y="80" width="440" height="240" rx="16" fill="url(#terracottaGrad)" />
  <rect x="80" y="80" width="440" height="240" rx="16" fill="url(#canvasPattern)" />
  
  <!-- Marsoto Weave Details & Stitching -->
  <line x1="80" y1="180" x2="520" y2="180" stroke="#8F3F29" stroke-width="12" />
  <line x1="80" y1="180" x2="520" y2="180" stroke="#FFE97D" stroke-width="3" stroke-dasharray="10 8" />
  
  <text x="100" y="130" font-family="sans-serif" font-weight="bold" font-size="16" fill="#FAF7F2">KANVAS MARSOTO 350 GSM</text>
  <text x="100" y="152" font-family="sans-serif" font-size="12" fill="#EFE3D0">Anyaman padat, kuat, tekstur bintik mikro anti robek</text>

  <!-- Perca Patchwork Zoom -->
  <g transform="translate(80, 340)">
    <rect width="440" height="180" rx="16" fill="url(#wovenPatch)" stroke="#3A2E2A" stroke-width="2" />
    <rect x="20" y="20" width="220" height="140" rx="12" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" filter="url(#stickerShadow)" />
    <text x="36" y="52" font-family="sans-serif" font-weight="bold" font-size="14" fill="#C1694F">WATER-BASED PU TRIM</text>
    <text x="36" y="74" font-family="sans-serif" font-size="11" fill="#3A2E2A">✓ 0% Klorin &amp; Pthalate</text>
    <text x="36" y="94" font-family="sans-serif" font-size="11" fill="#3A2E2A">✓ Low VOC Air Safe</text>
    <text x="36" y="114" font-family="sans-serif" font-size="11" fill="#3A2E2A">✓ Lembut &amp; Tahan Cuaca</text>
    <rect x="260" y="30" width="160" height="120" rx="12" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="276" y="65" font-family="sans-serif" font-weight="900" font-size="28" fill="#3A2E2A">0.84 kg</text>
    <text x="276" y="90" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A">LIMBAH PERCA TERHEMAT</text>
    <text x="276" y="108" font-family="sans-serif" font-size="10" fill="#6B5851">Terserap per 1 unit tas</text>
  </g>
`);

// 3. Shoulder Bag Lifestyle
const shoulderBagLifestyle = svgWrap(`
  <rect width="600" height="600" fill="#F0D3D3" fill-opacity="0.3" rx="32" />
  <!-- Cafe table aesthetic flatlay -->
  <circle cx="300" cy="300" r="260" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="3" />
  
  <!-- Coffee Cup -->
  <g transform="translate(140, 150)">
    <circle cx="40" cy="40" r="34" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2.5" />
    <circle cx="40" cy="40" r="28" fill="#8F3F29" />
    <ellipse cx="40" cy="40" rx="16" ry="12" fill="#FAF7F2" fill-opacity="0.7" />
    <path d="M 68 25 C 85 25, 85 55, 68 55" fill="none" stroke="#FAF7F2" stroke-width="4" />
  </g>

  <!-- Notebook & Pen -->
  <g transform="translate(380, 130) rotate(15)">
    <rect width="110" height="150" rx="8" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    <line x1="20" y1="30" x2="90" y2="30" stroke="#C1694F" stroke-width="2" />
    <line x1="20" y1="50" x2="80" y2="50" stroke="#3A2E2A" stroke-width="1.5" stroke-opacity="0.4" />
    <line x1="20" y1="70" x2="85" y2="70" stroke="#3A2E2A" stroke-width="1.5" stroke-opacity="0.4" />
  </g>

  <!-- The Bag mini representation -->
  <g transform="translate(180, 240)">
    <path d="M 20 100 C 20 40, 220 40, 220 100 L 205 240 C 205 255, 195 265, 180 265 L 60 265 C 45 265, 35 255, 35 240 Z" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3" filter="url(#stickerShadow)" />
    <path d="M 45 130 L 195 130 L 190 220 L 50 220 Z" fill="url(#wovenPatch)" stroke="#3A2E2A" stroke-width="2" />
    <path d="M 50 80 C 50 -10, 190 -10, 190 80" fill="none" stroke="#C1694F" stroke-width="14" />
  </g>

  <!-- Gen Z Sticker Floating -->
  <g transform="translate(240, 480) rotate(-4)" filter="url(#stickerShadow)">
    <rect width="180" height="36" rx="18" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="90" y="23" font-family="sans-serif" font-weight="900" font-size="11" fill="#3A2E2A" text-anchor="middle">CAMPUS TO CAFE VIBE ☕</text>
  </g>
`);

// 4. Luna Handbag
const handbagCream = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="230" fill="#F0D3D3" fill-opacity="0.3" />

  <g transform="translate(390, 70) rotate(-6)" filter="url(#stickerShadow)">
    <rect width="140" height="34" rx="17" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <text x="70" y="22" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">ZERO VIRGIN WASTE</text>
  </g>

  <!-- Handles -->
  <path d="M 230 290 C 230 150, 370 150, 370 290" fill="none" stroke="#C1694F" stroke-width="20" stroke-linecap="round" filter="url(#softShadow)" />
  <path d="M 230 290 C 230 150, 370 150, 370 290" fill="none" stroke="#FFE97D" stroke-width="3" stroke-dasharray="6 6" />

  <!-- Trapezoid Handbag Body -->
  <g filter="url(#softShadow)">
    <polygon points="180,290 420,290 450,510 150,510" fill="url(#creamGrad)" stroke="#3A2E2A" stroke-width="3" />
    <polygon points="180,290 420,290 450,510 150,510" fill="url(#canvasPattern)" />
  </g>

  <!-- Center Decorative Contrast Perca Band -->
  <polygon points="260,290 340,290 355,510 245,510" fill="url(#pinkGrad)" stroke="#3A2E2A" stroke-width="2" />
  <polygon points="275,340 325,340 335,460 265,460" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="2" />

  <!-- Base Trim -->
  <line x1="150" y1="505" x2="450" y2="505" stroke="#C1694F" stroke-width="10" stroke-linecap="round" />

  <!-- S&S Minimalist Badge -->
  <g transform="translate(260, 410)">
    <rect width="80" height="26" rx="8" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="40" y="17" font-family="sans-serif" font-weight="bold" font-size="10" fill="#3A2E2A" text-anchor="middle">LUNA S&amp;S</text>
  </g>
`);

// Handbag detail & lifestyle
const handbagDetail = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <rect x="60" y="60" width="480" height="480" rx="24" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  <text x="300" y="110" font-family="sans-serif" font-weight="bold" font-size="18" fill="#3A2E2A" text-anchor="middle">LUNA HANDBAG CRAFTSMANSHIP</text>

  <g transform="translate(100, 150)">
    <rect width="400" height="150" rx="16" fill="url(#pinkGrad)" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#3A2E2A">DUAL-CARRY ERGONOMICS</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Top-handle pegangan tangan yang empuk dan kokoh</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Kompatibel dengan adjustable shoulder strap</text>
    <text x="30" y="125" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Pengunci magnetis antik jepang bebas macet</text>
  </g>

  <g transform="translate(100, 330)">
    <rect width="400" height="160" rx="16" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#C1694F">ARTISAN BATCH BANDUNG</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Penjahit: Pak Rahmat Hidayat (9 Thn Pengalaman)</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Lokasi: Hub Kreatif Dipatiukur, Bandung Raya</text>
    <text x="30" y="125" font-family="monospace" font-weight="bold" font-size="12" fill="#3A2E2A">TRACE ID: SNS-BDG-2026-108</text>
  </g>
`);

const handbagLifestyle = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="240" fill="#F0D3D3" fill-opacity="0.4" />
  <g transform="translate(160, 160)" filter="url(#stickerShadow)">
    <polygon points="90,130 230,130 250,310 70,310" fill="url(#creamGrad)" stroke="#3A2E2A" stroke-width="3" />
    <path d="M 120 130 C 120 40, 200 40, 200 130" fill="none" stroke="#C1694F" stroke-width="16" />
    <rect x="130" y="210" width="60" height="20" rx="6" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
  </g>
  <g transform="translate(360, 360) rotate(-10)" filter="url(#stickerShadow)">
    <rect width="180" height="50" rx="16" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="90" y="25" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">CLASSY &amp; ETHICAL</text>
    <text x="90" y="40" font-family="sans-serif" font-size="10" fill="#6B5851" text-anchor="middle">STITCHWARE &amp; SPACE</text>
  </g>
`);

// 5. Sling Bag
const slingBagYellow = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="230" fill="#FFE97D" fill-opacity="0.3" />

  <!-- Diagonal Sling Strap -->
  <path d="M 100 80 L 500 480" stroke="#3A2E2A" stroke-width="28" stroke-linecap="round" filter="url(#softShadow)" />
  <path d="M 100 80 L 500 480" stroke="#C1694F" stroke-width="20" stroke-linecap="round" />
  <path d="M 100 80 L 500 480" stroke="#FFE97D" stroke-width="3" stroke-dasharray="8 8" />

  <!-- Bag Main Body -->
  <g filter="url(#softShadow)" transform="translate(170, 200)">
    <rect width="260" height="200" rx="32" fill="url(#yellowGrad)" stroke="#3A2E2A" stroke-width="3" />
    <rect width="260" height="200" rx="32" fill="url(#canvasPattern)" />

    <!-- Front Zipper Pocket with Terracotta Accent -->
    <path d="M 20 70 L 240 70 L 240 170 C 240 185, 225 195, 210 195 L 50 195 C 35 195, 20 185, 20 170 Z" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="2.5" />
    
    <!-- Zipper line -->
    <line x1="40" y1="90" x2="220" y2="90" stroke="#3A2E2A" stroke-width="3" stroke-dasharray="4 3" />
    <circle cx="50" cy="90" r="8" fill="#D4AF37" stroke="#3A2E2A" stroke-width="2" />

    <!-- Badge -->
    <rect x="80" y="125" width="100" height="26" rx="8" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    <text x="130" y="142" font-family="sans-serif" font-weight="900" font-size="10" fill="#3A2E2A" text-anchor="middle">KOMOREBI SLING</text>
  </g>

  <!-- Gen Z Sticker -->
  <g transform="translate(380, 140) rotate(12)" filter="url(#stickerShadow)">
    <rect width="130" height="34" rx="17" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <text x="65" y="22" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">DAILY FAVORITE ⭐</text>
  </g>
`);

const slingBagDetail = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <rect x="60" y="60" width="480" height="480" rx="24" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  <text x="300" y="110" font-family="sans-serif" font-weight="bold" font-size="18" fill="#3A2E2A" text-anchor="middle">KOMOREBI SLING DETAILS</text>

  <g transform="translate(100, 150)">
    <rect width="400" height="150" rx="16" fill="url(#yellowGrad)" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#3A2E2A">SMART QUICK-ACCESS STORAGE</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Kompartemen rahasia belakang anti pencopetan</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Ring kuningan solid tahan beban tarik hingga 20kg</text>
    <text x="30" y="125" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Termasuk 1 Bag Charm boneka lucu senada</text>
  </g>

  <g transform="translate(100, 330)">
    <rect width="400" height="160" rx="16" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#C1694F">TRACED SOCIAL IMPACT</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Penjahit: Ibu Ani Rohani (Cimahi Selatan)</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Waktu Pengerjaan: 180 Menit Upah Layak</text>
    <text x="30" y="125" font-family="monospace" font-weight="bold" font-size="12" fill="#3A2E2A">TRACE ID: SNS-CMH-2026-015</text>
  </g>
`);

const slingBagLifestyle = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="240" fill="#FFE97D" fill-opacity="0.3" />
  <g transform="translate(180, 180)" filter="url(#stickerShadow)">
    <rect width="240" height="180" rx="28" fill="url(#yellowGrad)" stroke="#3A2E2A" stroke-width="3" />
    <rect x="20" y="60" width="200" height="100" rx="16" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="2" />
    <path d="M 0 50 L 240 210" stroke="#C1694F" stroke-width="14" />
  </g>
  <g transform="translate(160, 420) rotate(-4)" filter="url(#stickerShadow)">
    <rect width="280" height="46" rx="23" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    <text x="140" y="28" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">STREETWEAR READY • LIGHTWEIGHT</text>
  </g>
`);

// 6. Matching Wallet
const walletTerra = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="230" fill="#EFE3D0" fill-opacity="0.5" />

  <g transform="translate(400, 80) rotate(8)" filter="url(#stickerShadow)">
    <rect width="130" height="34" rx="17" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="65" y="22" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">MATCHING SET</text>
  </g>

  <!-- Bifold Wallet Body -->
  <g filter="url(#softShadow)" transform="translate(150, 180)">
    <rect width="300" height="240" rx="24" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3" />
    <rect width="300" height="240" rx="24" fill="url(#canvasPattern)" />

    <!-- Flap Perca Woven Accent -->
    <path d="M 0 60 L 300 60 L 300 160 C 250 190, 50 190, 0 160 Z" fill="url(#wovenPatch)" stroke="#3A2E2A" stroke-width="2" />
    
    <!-- Snap Button -->
    <circle cx="150" cy="155" r="14" fill="#D4AF37" stroke="#3A2E2A" stroke-width="2.5" />
    <circle cx="150" cy="155" r="7" fill="#FAF7F2" />

    <!-- S&S Embossed Text -->
    <rect x="90" y="20" width="120" height="24" rx="6" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="1.5" />
    <text x="150" y="36" font-family="sans-serif" font-weight="bold" font-size="10" fill="#3A2E2A" text-anchor="middle">STITCHWARE &amp; SPACE</text>
  </g>

  <!-- Impact Label -->
  <g transform="translate(80, 480)" filter="url(#stickerShadow)">
    <rect width="200" height="42" rx="12" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <text x="100" y="20" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">ZERO-WASTE PATTERN</text>
    <text x="100" y="34" font-family="sans-serif" font-size="9" fill="#6B5851" text-anchor="middle">Menggunakan sisa potong pola tas</text>
  </g>
`);

const walletInside = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <rect x="60" y="60" width="480" height="480" rx="24" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  <text x="300" y="110" font-family="sans-serif" font-weight="bold" font-size="18" fill="#3A2E2A" text-anchor="middle">HARMONI WALLET COMPARTMENTS</text>

  <!-- Opened Bifold Layout -->
  <g transform="translate(100, 150)">
    <rect width="400" height="220" rx="16" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="2.5" />
    <line x1="200" y1="0" x2="200" y2="220" stroke="#3A2E2A" stroke-width="3" stroke-dasharray="6 4" />
    
    <!-- Left: Card Slots -->
    <rect x="20" y="30" width="160" height="40" rx="8" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="1.5" />
    <rect x="20" y="80" width="160" height="40" rx="8" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="1.5" />
    <rect x="20" y="130" width="160" height="40" rx="8" fill="#FFE97D" stroke="#3A2E2A" stroke-width="1.5" />
    <text x="35" y="155" font-family="sans-serif" font-weight="bold" font-size="10" fill="#3A2E2A">6 Card Slots + KTM</text>

    <!-- Right: Coin Pocket & Cash -->
    <rect x="220" y="30" width="160" height="140" rx="12" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="2" />
    <line x1="235" y1="65" x2="365" y2="65" stroke="#3A2E2A" stroke-width="2" stroke-dasharray="4 2" />
    <text x="300" y="110" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">Zippered Coin Pocket</text>
  </g>

  <g transform="translate(100, 400)">
    <rect width="400" height="90" rx="14" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="200" y="40" font-family="sans-serif" font-weight="bold" font-size="13" fill="#3A2E2A" text-anchor="middle">BUNDLING RECOMMENDATION</text>
    <text x="200" y="62" font-family="sans-serif" font-size="11" fill="#6B5851" text-anchor="middle">Beli bersamaan dengan Tas untuk diskon set senada</text>
  </g>
`);

const walletLifestyle = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="240" fill="#F0D3D3" fill-opacity="0.3" />
  <!-- Duo set: Bag & Wallet together -->
  <g transform="translate(100, 160)">
    <path d="M 50 140 C 50 80, 240 80, 240 140 L 225 320 L 65 320 Z" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3" />
  </g>
  <g transform="translate(260, 260)" filter="url(#stickerShadow)">
    <rect width="200" height="160" rx="18" fill="url(#creamGrad)" stroke="#3A2E2A" stroke-width="3" />
    <path d="M 0 40 L 200 40 L 200 100 C 170 120, 30 120, 0 100 Z" fill="url(#pinkGrad)" stroke="#3A2E2A" stroke-width="2" />
    <circle cx="100" cy="95" r="10" fill="#D4AF37" stroke="#3A2E2A" stroke-width="2" />
  </g>
  <g transform="translate(180, 470) rotate(-3)" filter="url(#stickerShadow)">
    <rect width="240" height="42" rx="21" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="120" y="26" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">PERFECT HARMONIOUS DUO ✨</text>
  </g>
`);

// 7. Stitchy Plush Bag Charm
const bagCharmPlush = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="230" fill="#F0D3D3" fill-opacity="0.4" />

  <g transform="translate(400, 70) rotate(10)" filter="url(#stickerShadow)">
    <rect width="130" height="34" rx="17" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="65" y="22" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">SUPER CUTE 🧸</text>
  </g>

  <!-- Gold Lobster Clasp Ring -->
  <g transform="translate(300, 100)" filter="url(#softShadow)">
    <circle cx="0" cy="0" r="28" fill="none" stroke="#D4AF37" stroke-width="8" />
    <path d="M 0 28 L 0 70" stroke="#D4AF37" stroke-width="6" stroke-linecap="round" />
    <rect x="-8" y="70" width="16" height="24" rx="5" fill="#D4AF37" stroke="#3A2E2A" stroke-width="2" />
  </g>

  <!-- Plush Doll Character Body -->
  <g transform="translate(300, 310)" filter="url(#stickerShadow)">
    <!-- Ears -->
    <circle cx="-65" cy="-80" r="32" fill="#C1694F" stroke="#3A2E2A" stroke-width="3" />
    <circle cx="-65" cy="-80" r="18" fill="#F0D3D3" />
    <circle cx="65" cy="-80" r="32" fill="#C1694F" stroke="#3A2E2A" stroke-width="3" />
    <circle cx="65" cy="-80" r="18" fill="#F0D3D3" />

    <!-- Head & Body Suede -->
    <ellipse cx="0" cy="0" rx="95" ry="90" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3.5" />
    
    <!-- Blush cheeks -->
    <circle cx="-50" cy="18" r="16" fill="#F0D3D3" fill-opacity="0.8" />
    <circle cx="50" cy="18" r="16" fill="#F0D3D3" fill-opacity="0.8" />

    <!-- Embroidered eyes -->
    <ellipse cx="-32" cy="-8" rx="8" ry="12" fill="#3A2E2A" />
    <circle cx="-35" cy="-12" r="3.5" fill="#FAF7F2" />
    <ellipse cx="32" cy="-8" rx="8" ry="12" fill="#3A2E2A" />
    <circle cx="29" cy="-12" r="3.5" fill="#FAF7F2" />

    <!-- Cute Nose & Mouth -->
    <ellipse cx="0" cy="12" rx="16" ry="12" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <circle cx="0" cy="8" r="4" fill="#3A2E2A" />
    <path d="M -4 14 Q 0 18 4 14" fill="none" stroke="#3A2E2A" stroke-width="2" stroke-linecap="round" />

    <!-- S&S Fabric Tag on side -->
    <g transform="translate(85, -20) rotate(15)">
      <rect width="40" height="20" rx="4" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="1.5" />
      <text x="20" y="14" font-family="sans-serif" font-weight="900" font-size="8" fill="#C1694F" text-anchor="middle">S&amp;S</text>
    </g>

    <!-- Little stitched belly patch -->
    <ellipse cx="0" cy="55" rx="36" ry="24" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="1.5" stroke-dasharray="4 3" />
  </g>

  <!-- Suede & Dakron Badge -->
  <g transform="translate(180, 490)" filter="url(#stickerShadow)">
    <rect width="240" height="38" rx="19" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    <text x="120" y="24" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">SOFT SUEDE + DAKRON GRADE A</text>
  </g>
`);

const bagCharmDetail = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <rect x="60" y="60" width="480" height="480" rx="24" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  <text x="300" y="110" font-family="sans-serif" font-weight="bold" font-size="18" fill="#3A2E2A" text-anchor="middle">PLUSH CHARM SPECIFICATIONS</text>

  <g transform="translate(100, 150)">
    <rect width="400" height="150" rx="16" fill="url(#pinkGrad)" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#3A2E2A">HYPOALLERGENIC MATERIALS</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• 100% Dakron Grade A non-toxic, anti-debu &amp; anti-kutu</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Kain suede halus sisa industri furnitur &amp; sepatu</text>
    <text x="30" y="125" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Bordir manual tanpa bahan lem kimia berbahaya</text>
  </g>

  <g transform="translate(100, 330)">
    <rect width="400" height="160" rx="16" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#3A2E2A">ARTISAN: TEH LILIS</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Eks-Garmen Tekstil Leuwigajah Cimahi (7 Thn)</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Menjahit 40 menit per boneka secara teliti</text>
    <text x="30" y="125" font-family="monospace" font-weight="bold" font-size="12" fill="#3A2E2A">TRACE ID: SNS-CMH-2026-204</text>
  </g>
`);

const bagCharmOnBag = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="240" fill="#EFE3D0" fill-opacity="0.4" />
  <g transform="translate(150, 100)">
    <path d="M 0 160 L 300 160 L 280 380 L 20 380 Z" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3" />
    <!-- D-Ring on bag -->
    <circle cx="80" cy="160" r="16" fill="none" stroke="#D4AF37" stroke-width="6" />
    <!-- Charm clipped -->
    <g transform="translate(80, 240)" filter="url(#stickerShadow)">
      <ellipse cx="0" cy="0" rx="45" ry="42" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
      <circle cx="-30" cy="-40" r="16" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
      <circle cx="30" cy="-40" r="16" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
      <circle cx="-15" cy="-5" r="4" fill="#3A2E2A" />
      <circle cx="15" cy="-5" r="4" fill="#3A2E2A" />
      <circle cx="-25" cy="8" r="7" fill="#FFE97D" />
      <circle cx="25" cy="8" r="7" fill="#FFE97D" />
    </g>
  </g>
  <g transform="translate(150, 480) rotate(-2)" filter="url(#stickerShadow)">
    <rect width="300" height="42" rx="21" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="150" y="26" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">ATTACH TO ANY S&amp;S BAG OR KEYS</text>
  </g>
`);

// 8. Custom 3mm Acrylic Keychain
const keychainAcrylic = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="230" fill="#FFE97D" fill-opacity="0.3" />

  <g transform="translate(380, 70) rotate(-6)" filter="url(#stickerShadow)">
    <rect width="150" height="34" rx="17" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="75" y="22" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle">LIVE CUSTOMIZER ✨</text>
  </g>

  <!-- Stainless Keyring & Chain -->
  <g transform="translate(300, 130)" filter="url(#softShadow)">
    <circle cx="0" cy="0" r="32" fill="none" stroke="#B0BEC5" stroke-width="7" />
    <circle cx="0" cy="0" r="32" fill="none" stroke="#ECEFF1" stroke-width="3" />
    <line x1="0" y1="32" x2="0" y2="70" stroke="#90A4AE" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 4" />
  </g>

  <!-- 3mm Acrylic Plaque Plate -->
  <g transform="translate(140, 240)" filter="url(#stickerShadow)">
    <!-- 3D Bevel Edge (Thickness effect) -->
    <rect x="6" y="6" width="320" height="150" rx="24" fill="#3A2E2A" fill-opacity="0.2" />
    
    <!-- Transparent Acrylic Surface -->
    <rect width="320" height="150" rx="24" fill="#FAF7F2" fill-opacity="0.85" stroke="#3A2E2A" stroke-width="3" />
    
    <!-- Optical reflection gloss lines -->
    <path d="M 20 20 L 300 20 L 260 50 L 20 50 Z" fill="#FFFFFF" fill-opacity="0.6" />
    
    <!-- Hanging hole -->
    <circle cx="160" cy="30" r="10" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    
    <!-- Engraved Custom Name -->
    <text x="160" y="95" font-family="sans-serif" font-weight="900" font-size="34" fill="#C1694F" text-anchor="middle" letter-spacing="4">LARAS</text>
    <text x="160" y="125" font-family="sans-serif" font-weight="bold" font-size="11" fill="#3A2E2A" text-anchor="middle" letter-spacing="2">STITCHWARE &amp; SPACE • 2026</text>
  </g>

  <!-- Hanging mini charm tag -->
  <g transform="translate(410, 360) rotate(20)" filter="url(#stickerShadow)">
    <circle cx="20" cy="20" r="22" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="20" y="25" font-family="sans-serif" font-weight="bold" font-size="14" fill="#3A2E2A" text-anchor="middle">S&amp;S</text>
  </g>

  <!-- Feature callout -->
  <g transform="translate(160, 480)" filter="url(#stickerShadow)">
    <rect width="280" height="42" rx="21" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
    <text x="140" y="26" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">CAST ACRYLIC 3MM • ANTI-YELLOWING</text>
  </g>
`);

const keychainCustom = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <rect x="60" y="60" width="480" height="480" rx="24" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  <text x="300" y="110" font-family="sans-serif" font-weight="bold" font-size="18" fill="#3A2E2A" text-anchor="middle">INTERACTIVE KEYCHAIN CUSTOMIZER</text>

  <g transform="translate(100, 150)">
    <rect width="400" height="150" rx="16" fill="url(#yellowGrad)" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#3A2E2A">PERSONALIZE YOUR IDENTITY</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Tulis nama/inisial kamu langsung di halaman produk</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Live 3D preview warna akrilik dan grafir</text>
    <text x="30" y="125" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Endowment Effect: barang terasa eksklusif milikmu</text>
  </g>

  <g transform="translate(100, 330)">
    <rect width="400" height="160" rx="16" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
    <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#C1694F">LASER CO2 TECHNOLOGY</text>
    <text x="30" y="75" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Operator: Kang Deden Kurnia (Bandung Selatan)</text>
    <text x="30" y="100" font-family="sans-serif" font-size="13" fill="#3A2E2A">• Pemotongan presisi 0.1mm tanpa tepi tajam</text>
    <text x="30" y="125" font-family="monospace" font-weight="bold" font-size="12" fill="#3A2E2A">TRACE ID: SNS-BDG-2026-301</text>
  </g>
`);

const keychainLifestyle = svgWrap(`
  <rect width="600" height="600" fill="#FAF7F2" rx="32" />
  <circle cx="300" cy="300" r="240" fill="#EFE3D0" fill-opacity="0.4" />
  <g transform="translate(180, 180)" filter="url(#stickerShadow)">
    <rect width="240" height="120" rx="20" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="3" />
    <text x="120" y="70" font-family="sans-serif" font-weight="900" font-size="28" fill="#C1694F" text-anchor="middle" letter-spacing="3">FEBRI</text>
    <circle cx="120" cy="20" r="8" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2" />
  </g>
  <g transform="translate(150, 420) rotate(-3)" filter="url(#stickerShadow)">
    <rect width="300" height="42" rx="21" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="150" y="26" font-family="sans-serif" font-weight="bold" font-size="12" fill="#3A2E2A" text-anchor="middle">GIFT IT TO SOMEONE SPECIAL 🎁</text>
  </g>
`);

// Artisans SVGs
function makeArtisanSvg(name, role, loc, color) {
  return svgWrap(`
    <rect width="600" height="600" fill="#FAF7F2" rx="32" />
    <circle cx="300" cy="270" r="180" fill="${color}" fill-opacity="0.4" />
    
    <!-- Stylized Artisan Portrait Silhouette & Features -->
    <g transform="translate(300, 270)">
      <!-- Body & Apron -->
      <path d="M -110 200 C -110 90, 110 90, 110 200 Z" fill="#C1694F" stroke="#3A2E2A" stroke-width="3" />
      <polygon points="-50,110 50,110 60,200 -60,200" fill="#EFE3D0" stroke="#3A2E2A" stroke-width="2" />
      <line x1="-30" y1="110" x2="-60" y2="200" stroke="#3A2E2A" stroke-width="2" stroke-dasharray="4 4" />
      <line x1="30" y1="110" x2="60" y2="200" stroke="#3A2E2A" stroke-width="2" stroke-dasharray="4 4" />
      
      <!-- Head -->
      <circle cx="0" cy="10" r="65" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="3" />
      <!-- Hair/Hijab/Cap -->
      <path d="M -65 10 C -65 -60, 65 -60, 65 10 C 65 50, -65 50, -65 10 Z" fill="#3A2E2A" />
      <circle cx="0" cy="20" r="45" fill="#FAF7F2" />
      
      <!-- Friendly expression -->
      <path d="M -22 15 Q -15 10 -8 15" fill="none" stroke="#3A2E2A" stroke-width="3" stroke-linecap="round" />
      <path d="M 8 15 Q 15 10 22 15" fill="none" stroke="#3A2E2A" stroke-width="3" stroke-linecap="round" />
      <path d="M -14 35 Q 0 48 14 35" fill="none" stroke="#3A2E2A" stroke-width="3" stroke-linecap="round" />
      <circle cx="-25" cy="28" r="8" fill="#F0D3D3" />
      <circle cx="25" cy="28" r="8" fill="#F0D3D3" />
    </g>

    <!-- Name & Badge Card -->
    <g transform="translate(60, 460)" filter="url(#stickerShadow)">
      <rect width="480" height="95" rx="20" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2.5" />
      <text x="30" y="38" font-family="sans-serif" font-weight="900" font-size="18" fill="#3A2E2A">${name}</text>
      <text x="30" y="60" font-family="sans-serif" font-weight="bold" font-size="12" fill="#C1694F">${role}</text>
      <text x="30" y="80" font-family="sans-serif" font-size="11" fill="#6B5851">📍 ${loc}</text>
    </g>
  `);
}

const artisanAni = makeArtisanSvg("Ibu Ani Rohani", "Master Artisan & Penjahit Pola Kanvas", "Melong, Cimahi Selatan", "#FFE97D");
const artisanRahmat = makeArtisanSvg("Pak Rahmat Hidayat", "Spesialis Anyam Perca & Rekonstruksi", "Dipatiukur, Bandung Raya", "#F0D3D3");
const artisanLilis = makeArtisanSvg("Teh Lilis Suryani", "Artisan Finishing & Miniatur Boneka Suede", "Cimahi Tengah", "#EFE3D0");
const artisanDeden = makeArtisanSvg("Kang Deden Kurnia", "Laser Craft Specialist & QC Inspector", "Soreang, Bandung Selatan", "#C1694F");

// Brand Logo SVG
const brandLogo = svgWrap(`
  <rect width="200" height="200" fill="none" />
  <g transform="translate(100, 100)">
    <!-- Interlocking needle & infinity loop / hands -->
    <circle cx="-25" cy="-10" r="45" fill="none" stroke="#C1694F" stroke-width="14" />
    <circle cx="25" cy="10" r="45" fill="none" stroke="#3A2E2A" stroke-width="14" />
    <!-- Gold stitch accent -->
    <path d="M -40 -30 L 40 30" stroke="#FFE97D" stroke-width="8" stroke-dasharray="10 8" stroke-linecap="round" />
  </g>
`, 200, 200);

// QR Demo SVG
const qrDemo = svgWrap(`
  <rect width="400" height="400" fill="#FAF7F2" rx="24" stroke="#3A2E2A" stroke-width="3" />
  <!-- QR Matrix Mockup with aesthetic styling -->
  <g transform="translate(60, 60)">
    <!-- Corner Finder Patterns -->
    <rect x="0" y="0" width="70" height="70" rx="14" fill="#3A2E2A" />
    <rect x="12" y="12" width="46" height="46" rx="8" fill="#FAF7F2" />
    <rect x="24" y="24" width="22" height="22" rx="4" fill="#C1694F" />

    <rect x="210" y="0" width="70" height="70" rx="14" fill="#3A2E2A" />
    <rect x="222" y="12" width="46" height="46" rx="8" fill="#FAF7F2" />
    <rect x="234" y="24" width="22" height="22" rx="4" fill="#C1694F" />

    <rect x="0" y="210" width="70" height="70" rx="14" fill="#3A2E2A" />
    <rect x="12" y="222" width="46" height="46" rx="8" fill="#FAF7F2" />
    <rect x="24" y="234" width="22" height="22" rx="4" fill="#C1694F" />

    <!-- Center S&S Emblem -->
    <circle cx="140" cy="140" r="34" fill="#FFE97D" stroke="#3A2E2A" stroke-width="3" />
    <text x="140" y="146" font-family="sans-serif" font-weight="900" font-size="14" fill="#3A2E2A" text-anchor="middle">S&amp;S</text>

    <!-- Matrix modules -->
    <rect x="90" y="10" width="16" height="16" rx="4" fill="#3A2E2A" />
    <rect x="120" y="20" width="24" height="14" rx="4" fill="#C1694F" />
    <rect x="160" y="10" width="16" height="24" rx="4" fill="#3A2E2A" />
    <rect x="90" y="50" width="24" height="16" rx="4" fill="#3A2E2A" />

    <rect x="20" y="90" width="16" height="24" rx="4" fill="#C1694F" />
    <rect x="50" y="110" width="24" height="16" rx="4" fill="#3A2E2A" />
    <rect x="10" y="150" width="24" height="16" rx="4" fill="#3A2E2A" />
    <rect x="50" y="160" width="16" height="24" rx="4" fill="#C1694F" />

    <rect x="210" y="100" width="20" height="20" rx="4" fill="#3A2E2A" />
    <rect x="245" y="110" width="24" height="16" rx="4" fill="#C1694F" />
    <rect x="220" y="150" width="20" height="30" rx="4" fill="#3A2E2A" />
    <rect x="255" y="170" width="16" height="16" rx="4" fill="#3A2E2A" />

    <rect x="90" y="210" width="24" height="20" rx="4" fill="#C1694F" />
    <rect x="130" y="220" width="20" height="24" rx="4" fill="#3A2E2A" />
    <rect x="170" y="210" width="24" height="16" rx="4" fill="#3A2E2A" />
    <rect x="100" y="250" width="40" height="20" rx="4" fill="#3A2E2A" />
    <rect x="160" y="250" width="20" height="20" rx="4" fill="#C1694F" />
    <rect x="220" y="220" width="30" height="24" rx="4" fill="#3A2E2A" />
    <rect x="220" y="255" width="24" height="16" rx="4" fill="#FFE97D" stroke="#3A2E2A" stroke-width="1.5" />
  </g>
`, 400, 400);

// Hero Art Banner SVG
const heroArt = svgWrap(`
  <rect width="800" height="600" fill="#FAF7F2" rx="36" />
  <circle cx="400" cy="300" r="280" fill="#FFE97D" fill-opacity="0.3" />
  <circle cx="580" cy="180" r="140" fill="#F0D3D3" fill-opacity="0.5" />
  <circle cx="200" cy="420" r="160" fill="#EFE3D0" fill-opacity="0.6" />

  <!-- Central Bag in High Resolution Style -->
  <g transform="translate(250, 160)" filter="url(#softShadow)">
    <path d="M 50 180 C 50 80, 250 80, 250 180" fill="none" stroke="#C1694F" stroke-width="24" stroke-linecap="round" />
    <path d="M 50 180 C 50 80, 250 80, 250 180" fill="none" stroke="#FFE97D" stroke-width="4" stroke-dasharray="8 8" />
    
    <path d="M 0 190 C 0 140, 300 140, 300 190 L 285 360 C 285 385, 265 405, 240 405 L 60 405 C 35 405, 15 385, 15 360 Z" fill="url(#terracottaGrad)" stroke="#3A2E2A" stroke-width="3.5" />
    <path d="M 0 190 C 0 140, 300 140, 300 190 L 285 360 C 285 385, 265 405, 240 405 L 60 405 C 35 405, 15 385, 15 360 Z" fill="url(#canvasPattern)" />

    <!-- Patchwork band -->
    <path d="M 35 240 L 265 240 L 255 350 C 255 365, 245 375, 230 375 L 70 375 C 55 375, 45 365, 45 350 Z" fill="url(#wovenPatch)" stroke="#3A2E2A" stroke-width="2.5" />

    <!-- Attached Suede Charm Doll -->
    <g transform="translate(10, 180) rotate(-10)">
      <circle cx="15" cy="50" r="24" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
      <circle cx="0" cy="30" r="10" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
      <circle cx="30" cy="30" r="10" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2" />
      <circle cx="9" cy="46" r="3" fill="#3A2E2A" />
      <circle cx="21" cy="46" r="3" fill="#3A2E2A" />
      <circle cx="15" cy="53" r="3" fill="#C1694F" />
    </g>

    <rect x="110" y="230" width="80" height="24" rx="8" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2" />
    <text x="150" y="246" font-family="sans-serif" font-weight="900" font-size="10" fill="#3A2E2A" text-anchor="middle">S&amp;S 2026</text>
  </g>

  <!-- Interactive Floating Stickers -->
  <g transform="translate(100, 110) rotate(-8)" filter="url(#stickerShadow)">
    <rect width="180" height="42" rx="21" fill="#FFE97D" stroke="#3A2E2A" stroke-width="2.5" />
    <text x="90" y="26" font-family="sans-serif" font-weight="900" font-size="12" fill="#3A2E2A" text-anchor="middle">CIRCULAR FASHION ♻️</text>
  </g>

  <g transform="translate(560, 280) rotate(6)" filter="url(#stickerShadow)">
    <rect width="190" height="44" rx="22" fill="#FAF7F2" stroke="#3A2E2A" stroke-width="2.5" />
    <text x="95" y="27" font-family="sans-serif" font-weight="900" font-size="12" fill="#C1694F" text-anchor="middle">FAIR WAGE ARTISANS 🧵</text>
  </g>

  <g transform="translate(140, 470) rotate(5)" filter="url(#stickerShadow)">
    <rect width="180" height="42" rx="21" fill="#F0D3D3" stroke="#3A2E2A" stroke-width="2.5" />
    <text x="90" y="26" font-family="sans-serif" font-weight="900" font-size="12" fill="#3A2E2A" text-anchor="middle">100% WATER-BASED PU ✨</text>
  </g>
`, 800, 600);

// Write all files
const writes = [
  [path.join(productsDir, 'shoulder-bag-terracotta.svg'), shoulderBagFront],
  [path.join(productsDir, 'shoulder-bag-detail.svg'), shoulderBagDetail],
  [path.join(productsDir, 'shoulder-bag-lifestyle.svg'), shoulderBagLifestyle],
  [path.join(productsDir, 'handbag-cream.svg'), handbagCream],
  [path.join(productsDir, 'handbag-detail.svg'), handbagDetail],
  [path.join(productsDir, 'handbag-lifestyle.svg'), handbagLifestyle],
  [path.join(productsDir, 'sling-bag-yellow.svg'), slingBagYellow],
  [path.join(productsDir, 'sling-bag-detail.svg'), slingBagDetail],
  [path.join(productsDir, 'sling-bag-lifestyle.svg'), slingBagLifestyle],
  [path.join(productsDir, 'wallet-terracotta.svg'), walletTerra],
  [path.join(productsDir, 'wallet-inside.svg'), walletInside],
  [path.join(productsDir, 'wallet-lifestyle.svg'), walletLifestyle],
  [path.join(productsDir, 'bag-charm-plush.svg'), bagCharmPlush],
  [path.join(productsDir, 'bag-charm-detail.svg'), bagCharmDetail],
  [path.join(productsDir, 'bag-charm-onbag.svg'), bagCharmOnBag],
  [path.join(productsDir, 'keychain-acrylic.svg'), keychainAcrylic],
  [path.join(productsDir, 'keychain-custom.svg'), keychainCustom],
  [path.join(productsDir, 'keychain-lifestyle.svg'), keychainLifestyle],
  [path.join(artisansDir, 'ibu-ani.svg'), artisanAni],
  [path.join(artisansDir, 'pak-rahmat.svg'), artisanRahmat],
  [path.join(artisansDir, 'teh-lilis.svg'), artisanLilis],
  [path.join(artisansDir, 'kang-deden.svg'), artisanDeden],
  [path.join(imagesDir, 'brand-logo.svg'), brandLogo],
  [path.join(imagesDir, 'qr-demo.svg'), qrDemo],
  [path.join(imagesDir, 'hero-art.svg'), heroArt],
];

writes.forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Generated:', path.basename(filePath));
});

console.log('All 25 SVG assets generated successfully!');
