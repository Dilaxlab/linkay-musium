import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { Gavel, CheckCircle2, Shield, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Auction Model – Museum Development",
  description:
    "The Private Auction model is designed for high-value digital assets and strategic partnerships.",
};

const targetAudience = [
  "Private collectors",
  "Universities and research institutions",
  "Technology companies",
  "Corporate innovation centers",
  "Strategic cultural partners",
];

const auctionIncludes = [
  "Exclusive commercial display rights to a full digital twin",
  "Limited-edition digital recreations of landmark inventions",
  "Institutional licensing of patent archives",
  "Sponsored digitization rights for historically significant collections",
  "White-label digital twin deployment for enterprise clients",
];

const modelBenefits = [
  "High-margin capital inflow",
  "Strategic institutional alliances",
  "Long-term licensing revenue",
  "Sponsorship-backed preservation",
  "Enterprise-level partnerships",
];

export default function PrivateAuctionModelPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="I³ Private Auction Model" />

      {/* 2. MAIN CONTENT */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-8 text-center leading-tight">
            Institutional and High-Net-Worth Engagement
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify mb-12">
            <p>
              The Private Auction model is designed for high-value digital
              assets and strategic partnerships.
            </p>
            <p>
              Certain rare digital twins, exclusive archival sets, or
              institutional-grade research packages may be offered through
              structured private auctions. These offerings are limited in number
              and targeted toward:
            </p>
          </div>

          {/* Targeted toward List */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8E8E8] mb-12">
            <h3 className="text-xl font-serif font-semibold text-[#111111] mb-4">
              Targeted Entities:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#54595F]">
              {targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#997A43]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Private Auctions May Include */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
              Private auctions may include:
            </h3>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E8E8] shadow-sm">
              <ul className="space-y-3.5 text-[#54595F]">
                {auctionIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#997A43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* This model enables */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
              This model enables:
            </h3>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E8E8] shadow-sm">
              <ul className="space-y-3.5 text-[#54595F]">
                {modelBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#997A43] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategic Context & Protection */}
          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify mb-12">
            <p>
              Unlike public tokenization, which drives scale and community
              engagement, private auctions focus on premium positioning and
              capital generation.
            </p>
            <p>
              All auction structures clearly define usage rights, access levels,
              duration, and intellectual property boundaries.
            </p>
            <div className="bg-[#F6F1E9] p-6 rounded-xl border border-[#E8E8E8] flex items-center gap-4">
              <Shield className="w-8 h-8 text-[#997A43] shrink-0" />
              <p className="font-serif font-medium text-[#111111] text-lg">
                Physical artifacts remain under institutional protection at all
                times.
              </p>
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
