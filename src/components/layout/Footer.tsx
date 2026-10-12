"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Landmark, Shield, Lock, FileText, ArrowUpRight, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const platformPages = [
    { label: "Home", href: "/" },
    { label: "About I³", href: "/about-us" },
    { label: "Physical Museum (Physica)", href: "/physica" },
    { label: "Digital Twin (3D/XR)", href: "/digital-twin" },
    { label: "Information Twin", href: "/information-twin" },
  ];

  const engagementPages = [
    { label: "AI Support & Agent", href: "/ai-support" },
    { label: "I³ Token Purchase", href: "/token-purchase" },
    { label: "Private Auction Model", href: "/private-auction-model" },
    { label: "Enterprise Engagement", href: "/enterprise-engagement" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const collectionAnchors = [
    { label: "Available Models", href: "/#collection" },
    { label: "Ownership Architecture", href: "/#ownership" },
    { label: "Provenance & Custody", href: "/#provenance" },
    { label: "Qualified Participation", href: "/#participate" },
    { label: "Private Viewing & FAQs", href: "/#private-viewing" },
  ];

  return (
    <footer className="bg-[#0D121F] text-[#E5E7EB] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block py-1">
              <div className="relative w-44 sm:w-52 h-14 sm:h-16 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Linkay Museum Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              A permissioned platform for historical American patent models, pairing physical museum custody with verified digital ownership records, 3D WebGL Digital Twins, and institutional governance.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-mono text-[#C5A059]">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Authenticated Provenance
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Insured Vault Custody
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Verified Digital Records
              </span>
            </div>
          </div>

          {/* Quick Nav Links: Museum Platform */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A059] mb-4">
              Museum Platform
            </h4>
            <ul className="space-y-2.5">
              {platformPages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-[#C5A059] transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement & Web3 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A059] mb-4">
              Engagement & Web3
            </h4>
            <ul className="space-y-2.5">
              {engagementPages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-[#C5A059] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Private Inquiries & Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A059] mb-4">
              Private Concierge
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Inquiries regarding direct ownership, condition dossiers, collection participation, or institutional partnerships are handled under private client agreement.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[11.5px]">concierge@linkaythinktank.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+1 (800) 438-1790 (By Appointment)</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C5A059] hover:underline"
              >
                <span>Institutional Inquiry Form</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Disclaimer (Client Mandated) */}
        <div className="py-8 border-b border-white/5 space-y-3 text-[11px] leading-relaxed text-slate-500 font-sans">
          <p className="font-mono text-[#C5A059] text-[10px] uppercase tracking-wider">
            Regulatory Notice & Disclaimer
          </p>
          <p>
            This website is provided for informational purposes only and does not constitute investment, financial, tax, or legal advice. Developed by Linkay Technologies Inc. and Linkay Ventures Inc. under strict governance and ethical preservation standards.
          </p>
          <p>
            Any collection participation, offering, ownership, custody, transfer, or digital-record language is subject to review and approval by qualified legal, compliance, financial, insurance, and custody partners.
          </p>
          <p>
            Availability, eligibility, provenance evidence, condition, custody arrangements, delivery options, and transfer requirements may vary by model and participant. No representation or guarantee is made regarding future value, appreciation, returns, liquidity, or resale opportunities.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>© 2026 Linkay Thinktank Museum Platform & I3 Patent Models. All rights reserved.</span>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/about-us" className="hover:text-slate-400 transition-colors">About Governance</Link>
            <Link href="/physica" className="hover:text-slate-400 transition-colors">Physical Holdings</Link>
            <Link href="/enterprise-engagement" className="hover:text-slate-400 transition-colors">Enterprise Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
