import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <div className="relative w-full min-h-[340px] md:min-h-[420px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with museum depth */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            "url('/images/WhatsApp-Image-2026-02-27-at-7.48.58-PM.jpeg')",
        }}
      />
      {/* Dual overlay: Dark vignette + warm museum tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/65 to-black/50" />
      <div className="absolute inset-0 bg-[#997A43]/10 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
        {/* Breadcrumb strip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300 text-xs font-mono">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5A059]" />
          <span className="text-[#C5A059] font-medium">{breadcrumb || title}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FFFEFE] tracking-tight drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom subtle border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
    </div>
  );
}
