"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Youtube, Mail } from "lucide-react";

// Custom TikTok Icon since lucide-react doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/collectibles", label: "Collectibles", hasDropdown: true },
  { href: "/token-purchase", label: "Token Purchase" },
  { href: "/private-auction-model", label: "Private Auction Model" },
  { href: "/enterprise-engagement", label: "Enterprise Engagement" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-white ${
        scrolled
          ? "shadow-md py-2"
          : "shadow-sm py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            {/* Placeholder for the Crest Image - Replace src with your actual logo asset */}
            <div className="relative w-12 h-12 flex items-center justify-center">
               <img
                 src="/images/museum-logo-crest.png"
                 alt="Digital Museum Crest"
                 className="w-full h-full object-contain"
               />
            </div>

            <div className="flex flex-col">
              <h1 className="font-serif text-2xl font-bold text-[#C5A059] leading-none tracking-wide">
                DIGITAL MUSEUM
              </h1>
              <div className="flex flex-col items-start mt-0.5">
                <span className="font-serif text-[10px] text-black font-semibold tracking-widest">
                    Historical
                </span>
                <span className="text-[9px] font-sans text-black tracking-wide">
                  Innovation <span className="text-[#C5A059]">•</span> Invention <span className="text-[#C5A059]">•</span> Inspiration
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  pathname === link.href
                    ? "text-black border-b-2 border-black pb-0.5"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {link.label}
                {/* Dropdown Arrow for Collectibles */}
                {link.hasDropdown && (
                  <svg
                    className="w-3 h-3 text-gray-500 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Social Icons (Right Side) */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-black transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-xl absolute w-full left-0">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-all flex justify-between items-center ${
                  pathname === link.href
                    ? "bg-gray-100 text-black"
                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Socials */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      {/* Bottom Border Line (Optional visual flair from image) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </nav>
  );
}
