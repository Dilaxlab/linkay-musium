import React from "react";

interface PageBannerProps {
  title: string;
}

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <div className="relative w-full min-h-[360px] md:min-h-[460px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/WhatsApp-Image-2026-02-27-at-7.48.58-PM.jpeg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#FFFEFE] tracking-tight drop-shadow-md">
          {title}
        </h1>
      </div>
    </div>
  );
}
