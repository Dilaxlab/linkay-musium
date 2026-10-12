"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Menu,
  X,
  Landmark,
  ChevronDown,
  Box,
  Compass,
  FileText,
  Sparkles,
  Coins,
  Gavel,
  Briefcase,
  PhoneCall,
  Search,
} from "lucide-react";
import PrivateAccessModal from "@/components/home/PrivateAccessModal";

interface NavbarProps {
  onRequestAccess?: (context?: string) => void;
}

export default function Navbar({ onRequestAccess }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectiblesOpen, setCollectiblesOpen] = useState(false);
  const [digitalSubOpen, setDigitalSubOpen] = useState(false);
  const [mobileCollectiblesOpen, setMobileCollectiblesOpen] = useState(false);
  const [mobileDigitalOpen, setMobileDigitalOpen] = useState(true);
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCollectiblesOpen(false);
        setDigitalSubOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRequestClick = (source: string) => {
    if (onRequestAccess) {
      onRequestAccess(source);
    } else {
      setInternalModalOpen(true);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isCollectiblesActive =
    pathname.startsWith("/physica") ||
    pathname.startsWith("/digital-twin") ||
    pathname.startsWith("/information-twin") ||
    pathname.startsWith("/ai-support");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FBF9F5]/98 backdrop-blur-md border-b border-[#E8E2D9] shadow-sm py-3"
            : "bg-[#FBF9F5]/90 backdrop-blur-sm border-b border-[#E8E2D9]/70 py-4"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
          <div className="flex items-center justify-between gap-4">

            {/* 1. BRAND LOGO - Large Logo without text */}
            <Link href="/" className="flex items-center shrink-0 group py-1">
              <div className="relative w-36 sm:w-44 md:w-48 h-11 sm:h-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Linkay Museum Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* 2. DESKTOP NAVIGATION (Spaced, Uncluttered, Hierarchy-based) */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {/* Home */}
              <Link
                href="/"
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 ${
                  pathname === "/" ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#997A43] transition-all duration-300 ${
                    pathname === "/" ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>

              {/* About Us */}
              <Link
                href="/about-us"
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 ${
                  pathname.startsWith("/about-us") ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                }`}
              >
                About Us
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#997A43] transition-all duration-300 ${
                    pathname.startsWith("/about-us") ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>

              {/* COLLECTIBLES NESTED DROPDOWN:
                  1. Physical
                  2. Digital
                     2.1 Digital Twin
                     2.2 Information Twin
                     2.3 AI Agent
              */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setCollectiblesOpen(true)}
              >
                <button
                  onClick={() => setCollectiblesOpen(!collectiblesOpen)}
                  className={`text-[13.5px] font-medium tracking-wide flex items-center gap-1.5 py-1 transition-colors ${
                    isCollectiblesActive ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                  }`}
                >
                  <span>Collectibles</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      collectiblesOpen ? "rotate-180 text-[#997A43]" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {collectiblesOpen && (
                  <div
                    onMouseLeave={() => {
                      setCollectiblesOpen(false);
                      setDigitalSubOpen(false);
                    }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#FBF9F5] border border-[#E8E2D9] shadow-2xl p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-left"
                  >
                    {/* Header Label */}
                    <div className="px-3 py-1.5 border-b border-[#E8E2D9]/70 mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#997A43] font-bold">
                        Curatorial Architecture
                      </span>
                    </div>

                    {/* 1. PHYSICAL */}
                    <Link
                      href="/physica"
                      onClick={() => setCollectiblesOpen(false)}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                        pathname.startsWith("/physica")
                          ? "bg-white border border-[#997A43]/40 shadow-sm"
                          : "hover:bg-white hover:border hover:border-[#E8E2D9]/70"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#111625] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-[#997A43] font-bold">1.</span>
                          <span className="text-xs font-serif font-bold text-[#111111]">
                            Physical (Physica)
                          </span>
                        </div>
                        <span className="block text-[11px] text-slate-500 leading-tight mt-0.5 font-sans">
                          Smart exhibits, IoT tracking & material holdings
                        </span>
                      </div>
                    </Link>

                    {/* 2. DIGITAL (Parent Category with Sub-items) */}
                    <div className="mt-2 pt-2 border-t border-[#E8E2D9]/60">
                      <div className="px-3 py-1 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-[#997A43] font-bold">2.</span>
                          <span className="text-xs font-serif font-bold text-[#111111] uppercase tracking-wider">
                            Digital
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#997A43] bg-[#997A43]/10 px-1.5 py-0.5 rounded">
                          3 Disciplines
                        </span>
                      </div>

                      {/* Sub-items Indented Under Digital */}
                      <div className="pl-3 pr-1 py-1 space-y-1">
                        {/* 2.1 Digital Twin */}
                        <Link
                          href="/digital-twin"
                          onClick={() => setCollectiblesOpen(false)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                            pathname.startsWith("/digital-twin")
                              ? "bg-white border border-[#997A43]/40 shadow-sm"
                              : "hover:bg-white hover:border hover:border-[#E8E2D9]/70"
                          }`}
                        >
                          <div className="w-6 h-6 rounded-md bg-[#111625]/80 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                            <Compass className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-[10.5px] font-mono text-[#997A43] font-semibold">2.1</span>
                              <span className="text-xs font-serif font-semibold text-[#111111]">
                                Digital Twin
                              </span>
                            </div>
                            <span className="block text-[10.5px] text-slate-500 leading-tight">
                              Interactive WebGL & 3D/XR tours
                            </span>
                          </div>
                        </Link>

                        {/* 2.2 Information Twin */}
                        <Link
                          href="/information-twin"
                          onClick={() => setCollectiblesOpen(false)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                            pathname.startsWith("/information-twin")
                              ? "bg-white border border-[#997A43]/40 shadow-sm"
                              : "hover:bg-white hover:border hover:border-[#E8E2D9]/70"
                          }`}
                        >
                          <div className="w-6 h-6 rounded-md bg-[#111625]/80 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                            <FileText className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-[10.5px] font-mono text-[#997A43] font-semibold">2.2</span>
                              <span className="text-xs font-serif font-semibold text-[#111111]">
                                Information Twin
                              </span>
                            </div>
                            <span className="block text-[10.5px] text-slate-500 leading-tight">
                              Archival records & provenance dossiers
                            </span>
                          </div>
                        </Link>

                        {/* 2.3 AI Agent */}
                        <Link
                          href="/ai-support"
                          onClick={() => setCollectiblesOpen(false)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                            pathname.startsWith("/ai-support")
                              ? "bg-white border border-[#997A43]/40 shadow-sm"
                              : "hover:bg-white hover:border hover:border-[#E8E2D9]/70"
                          }`}
                        >
                          <div className="w-6 h-6 rounded-md bg-[#111625]/80 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-[10.5px] font-mono text-[#997A43] font-semibold">2.3</span>
                              <span className="text-xs font-serif font-semibold text-[#111111]">
                                AI Agent
                              </span>
                            </div>
                            <span className="block text-[10.5px] text-slate-500 leading-tight">
                              Interactive curatorial guide & natural queries
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tokens */}
              <Link
                href="/token-purchase"
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 ${
                  pathname.startsWith("/token-purchase") ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                }`}
              >
                Tokens
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#997A43] transition-all duration-300 ${
                    pathname.startsWith("/token-purchase") ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>

              {/* Private Auction */}
              <Link
                href="/private-auction-model"
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 ${
                  pathname.startsWith("/private-auction-model") ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                }`}
              >
                Auctions
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#997A43] transition-all duration-300 ${
                    pathname.startsWith("/private-auction-model") ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>

              {/* Enterprise */}
              <Link
                href="/enterprise-engagement"
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 ${
                  pathname.startsWith("/enterprise-engagement") ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                }`}
              >
                Enterprise
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#997A43] transition-all duration-300 ${
                    pathname.startsWith("/enterprise-engagement") ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 ${
                  pathname.startsWith("/contact-us") ? "text-[#997A43] font-semibold" : "text-[#2B2B2B] hover:text-[#997A43]"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#997A43] transition-all duration-300 ${
                    pathname.startsWith("/contact-us") ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            </nav>

            {/* 3. RIGHT CONTROLS: Search Icon + Plan a Visit / Request Access Button */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              {/* Subtle Search Button (as in Reference Image 1) */}
              

              {/* Primary Pill Button (as in Reference Image 1 "Plan a Visit") */}
              <button
                onClick={() => handleRequestClick("Navigation Bar")}
                className="btn-primary-dark group text-xs tracking-wider uppercase font-semibold py-2.5 px-5 shadow-sm"
              >
                <span>Request Private Access</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C5A059]" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[#2B2B2B] hover:text-[#997A43] transition-colors rounded-lg"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── MOBILE ACCORDION DRAWER ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E8E2D9] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1 mb-5">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname === "/" ? "bg-[#997A43]/10 text-[#997A43] font-bold" : "text-[#2B2B2B]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname.startsWith("/about-us") ? "bg-[#997A43]/10 text-[#997A43] font-bold" : "text-[#2B2B2B]"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Collectibles Section */}
              <div className="border-y border-[#E8E2D9]/70 py-1.5 my-1">
                <button
                  onClick={() => setMobileCollectiblesOpen(!mobileCollectiblesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-[#111111] py-2 px-3 rounded-lg"
                >
                  <span className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-[#997A43]" />
                    <span>Collectibles</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileCollectiblesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileCollectiblesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1.5 bg-white/70 rounded-xl my-1 border border-[#E8E2D9]/50">
                    {/* 1. Physical */}
                    <Link
                      href="/physica"
                      onClick={() => setMobileOpen(false)}
                      className={`block text-xs font-semibold py-1.5 px-2 rounded-md ${
                        pathname.startsWith("/physica") ? "text-[#997A43] font-bold bg-[#997A43]/10" : "text-slate-800"
                      }`}
                    >
                      1. Physical (Physica)
                    </Link>

                    {/* 2. Digital Parent Header */}
                    <div className="pt-1 border-t border-[#E8E2D9]/40">
                      <span className="text-[11px] font-mono font-bold text-[#997A43] px-2 block">
                        2. Digital
                      </span>
                      <div className="pl-3 space-y-1 mt-1">
                        <Link
                          href="/digital-twin"
                          onClick={() => setMobileOpen(false)}
                          className={`block text-xs py-1.5 px-2 rounded-md ${
                            pathname.startsWith("/digital-twin") ? "text-[#997A43] font-bold bg-[#997A43]/10" : "text-slate-700"
                          }`}
                        >
                          2.1 Digital Twin
                        </Link>
                        <Link
                          href="/information-twin"
                          onClick={() => setMobileOpen(false)}
                          className={`block text-xs py-1.5 px-2 rounded-md ${
                            pathname.startsWith("/information-twin") ? "text-[#997A43] font-bold bg-[#997A43]/10" : "text-slate-700"
                          }`}
                        >
                          2.2 Information Twin
                        </Link>
                        <Link
                          href="/ai-support"
                          onClick={() => setMobileOpen(false)}
                          className={`block text-xs py-1.5 px-2 rounded-md ${
                            pathname.startsWith("/ai-support") ? "text-[#997A43] font-bold bg-[#997A43]/10" : "text-slate-700"
                          }`}
                        >
                          2.3 AI Agent
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/token-purchase"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname.startsWith("/token-purchase") ? "bg-[#997A43]/10 text-[#997A43] font-bold" : "text-[#2B2B2B]"
                }`}
              >
                Token Purchase
              </Link>
              <Link
                href="/private-auction-model"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname.startsWith("/private-auction-model") ? "bg-[#997A43]/10 text-[#997A43] font-bold" : "text-[#2B2B2B]"
                }`}
              >
                Private Auction
              </Link>
              <Link
                href="/enterprise-engagement"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname.startsWith("/enterprise-engagement") ? "bg-[#997A43]/10 text-[#997A43] font-bold" : "text-[#2B2B2B]"
                }`}
              >
                Enterprise
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname.startsWith("/contact-us") ? "bg-[#997A43]/10 text-[#997A43] font-bold" : "text-[#2B2B2B]"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            <button
              onClick={() => {
                setMobileOpen(false);
                handleRequestClick("Mobile Navigation");
              }}
              className="w-full btn-primary-dark text-xs uppercase tracking-wider py-3.5 shadow-sm"
            >
              <span>Request Private Access</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>
        )}
      </header>

      {/* Internal Modal when called from navbar */}
      <PrivateAccessModal
        isOpen={internalModalOpen}
        onClose={() => setInternalModalOpen(false)}
        initialInterest="Navigation Direct Request"
      />
    </>
  );
}
