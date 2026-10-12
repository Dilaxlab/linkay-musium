import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/layout/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I³ Museum – Museum Development",
  description:
    "A patent-backed digital system transforming historic inventions and sites into immersive, globally accessible experiences, while protecting original physical assets.",
  icons: {
    icon: "/images/logo-e1770874922369.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-[#2B2B2B] antialiased selection:bg-[#997A43]/20 selection:text-[#997A43]">
        <ScrollProgressBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
