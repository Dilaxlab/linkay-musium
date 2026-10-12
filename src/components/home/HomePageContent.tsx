import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, GraduationCap, Coins, Check } from "lucide-react";

export default function HomePageContent() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top]"
          style={{
            backgroundImage:
              "url('/images/WhatsApp-Image-2026-02-27-at-7.48.58-PM.jpeg')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFFEFE] leading-tight drop-shadow-md max-w-4xl mx-auto">
            Preserving the past to inspire the future
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#F6F1E9] max-w-3xl mx-auto leading-relaxed font-light">
            A patent-backed digital system transforming historic inventions and
            sites into immersive, globally accessible experiences, while
            protecting original physical assets.
          </p>

          <div className="mt-10">
            <Link
              href="/digital-twin"
              className="inline-block bg-[#997A43] hover:bg-[#856835] text-white font-medium px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Explore Digital Collections
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE COLLECTION IS REAL. THE ACCESS IS GLOBAL. */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] leading-tight">
            The collection is real. The access is global.
          </h2>

          <div className="mt-8 space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify sm:text-center">
            <p>
              I³ is a digital museum system designed to preserve, protect, and
              globally share historically significant inventions and sites while
              ensuring original physical assets remain securely stored within
              protected locations.
            </p>
            <p>
              Built on an awarded patent, I³ provides a controlled, scalable, and
              IP-secure platform for digitizing original patent models and
              historic properties into high fidelity digital twins.
            </p>
            <p>
              The platform removes geographic and physical barriers to access,
              enabling global education, research, and cultural engagement
              without compromising asset integrity.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/about-us"
              className="inline-block bg-[#997A43] hover:bg-[#856835] text-white font-medium px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Explore More About I³
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111]">
              Core Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1: Preserve */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#997A43]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
                Preserve
              </h3>
              <p className="text-[#54595F] leading-relaxed text-sm sm:text-base">
                High-fidelity digital twins safeguard fragile inventions and
                historic properties while minimizing physical handling.
              </p>
            </div>

            {/* Pillar 2: Experience */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#997A43]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
                Experience
              </h3>
              <p className="text-[#54595F] leading-relaxed text-sm sm:text-base">
                Immersive multimedia experiences including virtual tours,
                interactive avatars, and narrated technical demonstrations.
              </p>
            </div>

            {/* Pillar 3: Educate */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#997A43]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
                Educate
              </h3>
              <p className="text-[#54595F] leading-relaxed text-sm sm:text-base">
                Curriculum-ready STEM learning that connects historical
                innovation to modern science and engineering.
              </p>
            </div>

            {/* Pillar 4: Sustain */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0C0C0C] text-white flex items-center justify-center mb-6">
                <Coins className="w-6 h-6 text-[#997A43]" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
                Sustain
              </h3>
              <p className="text-[#54595F] leading-relaxed text-sm sm:text-base">
                A self-sustaining financial model built on subscriptions,
                licensing, and institutional partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIGITAL COLLECTIONS & IMMERSIVE EXPERIENCES (2 COLUMNS) */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Col 1 */}
            <div className="bg-[#FAF8F5] p-8 sm:p-12 rounded-2xl border border-[#E8E8E8]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#111111] mb-6">
                Digital Collections & Historic Sites
              </h2>

              <p className="text-[#2B2B2B] font-medium mb-3">
                Explore authenticated digital collections including:
              </p>
              <ul className="space-y-2 mb-8 text-[#54595F]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Original patent prototype models</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Historically significant inventions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Protected historic properties and land parcels</span>
                </li>
              </ul>

              <p className="text-[#2B2B2B] font-medium mb-3">
                Each digital asset includes:
              </p>
              <ul className="space-y-2 text-[#54595F]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>High-resolution 3D representation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Multimedia archival materials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Narrated technical explanations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Historical context and societal impact</span>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="bg-[#FAF8F5] p-8 sm:p-12 rounded-2xl border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#111111] mb-6">
                  Immersive Experiences
                </h2>

                <p className="text-[#2B2B2B] font-medium mb-3">
                  I³ delivers experiences beyond static displays. Users can engage through:
                </p>
                <ul className="space-y-2 mb-8 text-[#54595F]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>Guided virtual tours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>Interactive digital avatars</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>Holographic-style visualizations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>Time-based reconstructions of how inventions worked and evolved</span>
                  </li>
                </ul>

                <p className="text-[#111111] font-serif italic text-lg sm:text-xl border-l-2 border-[#997A43] pl-4 py-1">
                  Each experience is designed to explain how, why, and why it mattered.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/physica"
                  className="inline-block bg-[#997A43] hover:bg-[#856835] text-white text-sm font-medium px-8 py-3.5 rounded-xl shadow-md transition-all"
                >
                  Explore Virtual & Physical Galleries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRESERVATION & TRUST */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111]">
              Preservation & Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Asset Protection */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full bg-[#1A1A1A]">
                <Image
                  src="/images/im1.png"
                  alt="Asset Protection"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-3">
                  Asset Protection
                </h3>
                <p className="text-[#54595F] leading-relaxed">
                  Original physical assets remain secured in protected locations
                  with minimal handling.
                </p>
              </div>
            </div>

            {/* Card 2: Digital Integrity */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full bg-[#1A1A1A]">
                <Image
                  src="/images/im2.png"
                  alt="Digital Integrity"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-3">
                  Digital Integrity
                </h3>
                <p className="text-[#54595F] leading-relaxed">
                  High-fidelity digitization, archival standards, and
                  version-controlled records ensure long-term preservation.
                </p>
              </div>
            </div>

            {/* Card 3: Governance */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full bg-[#1A1A1A]">
                <Image
                  src="/images/im3.png"
                  alt="Governance"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-3">
                  Governance
                </h3>
                <p className="text-[#54595F] leading-relaxed">
                  Patent-backed architecture ensures controlled deployment, IP
                  protection, and institutional trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
