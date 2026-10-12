import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { Users, Crown, Landmark, TrendingUp, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Token Purchase – Museum Development",
  description:
    "Tokens provide a modern and transparent way for visitors to support preservation while gaining enhanced experiences.",
};

export default function TokenPurchasePage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="I³ Token Purchase" />

      {/* 2. TOKEN PURCHASE INTRO & ACCESS TIERS */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-6">
              Token Purchase
            </h2>
            <p className="text-[#54595F] text-base sm:text-lg leading-relaxed">
              Tokens provide a modern and transparent way for visitors to support
              preservation while gaining enhanced experiences.
            </p>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Public Access */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8E8E8] shadow-sm hover:border-[#997A43] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#997A43]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-6">
                  Public Access
                </h3>
                <ul className="space-y-4 text-[#54595F]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Limited free exploration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Educational previews</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Individual Access */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8E8E8] shadow-sm hover:border-[#997A43] transition-all flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-[#997A43] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Featured
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                  <Crown className="w-6 h-6 text-[#997A43]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-6">
                  Premium Individual Access
                </h3>
                <ul className="space-y-4 text-[#54595F]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Full immersive experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Advanced educational content</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institutional Access */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8E8E8] shadow-sm hover:border-[#997A43] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                  <Landmark className="w-6 h-6 text-[#997A43]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-6">
                  Institutional Access
                </h3>
                <ul className="space-y-4 text-[#54595F]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Schools and universities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Museums and cultural institutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Research bodies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#997A43] hover:bg-[#856835] text-white font-medium px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MONETIZATION & SUSTAINABILITY */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-4">
              Monetization & Sustainability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Revenue Streams */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#000000] text-white flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#997A43]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#111111]">
                  Revenue Streams
                </h3>
              </div>
              <ul className="space-y-3.5 text-[#54595F]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Individual and institutional subscriptions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Licensing of digital assets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Platform adoption fees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Strategic partnerships</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>Context-appropriate digital advertising</span>
                </li>
              </ul>
            </div>

            {/* Asset Valuation */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#000000] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#997A43]" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#111111]">
                    Asset Valuation
                  </h3>
                </div>
                <p className="text-[#54595F] leading-relaxed text-base">
                  A regulated framework supports valuation of physical and
                  digital assets, including future-ready tokenization models
                  compatible with institutional fundraising and IPO pathways.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#997A43] hover:bg-[#856835] text-white font-medium px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
