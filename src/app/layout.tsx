import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "STITCHWARE & SPACE | Circular Fashion Accessories & Pemberdayaan Eks-Pekerja Garmen",
  description:
    "STITCHWARE & SPACE (S&S) mengolah limbah kain tekstil berkualitas menjadi fashion accessories estetik Gen-Z, didukung transparansi QR Traceability dan pemberdayaan eks-pekerja garmen Jawa Barat.",
  keywords: [
    "STITCHWARE & SPACE",
    "Circular Fashion",
    "Tas Upcycled",
    "Ekonomi Sirkuler",
    "Eks Pekerja Garmen",
    "Kanvas Marsoto",
    "Water Based PU",
    "Gen Z Aesthetic",
    "Traceability QR",
    "Bandung Fashion",
  ],
  authors: [{ name: "Tim Hore - Universitas Siliwangi" }],
  openGraph: {
    title: "STITCHWARE & SPACE - Fashion Accessories Sirkuler",
    description:
      "Ubah limbah kain menjadi karya bernilai tinggi & berdayakan eks-pekerja garmen Jawa Barat bersama STITCHWARE & SPACE.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#F5F5F5] text-[#3A2E2A] min-h-screen flex flex-col antialiased selection:bg-[#FFE97D] selection:text-[#3A2E2A]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <CheckoutModal />
        </CartProvider>
      </body>
    </html>
  );
}
