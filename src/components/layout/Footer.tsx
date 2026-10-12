import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Youtube, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E8E8] text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4">
            <Link href="/home" className="inline-block">
              <div className="relative h-12 w-52">
                <Image
                  src="/images/logo-e1770874922369.png"
                  alt="I³ Museum"
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[#54595F] leading-relaxed">
              A patent-backed digital system transforming historic inventions
              and sites into immersive, globally accessible experiences, while
              protecting original physical assets.
            </p>
          </div>

          {/* Col 2: Connect Us */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-semibold text-[#111111]">
              Connect Us
            </h2>
            <div className="flex flex-col space-y-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#54595F] hover:text-[#997A43] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#0B0B0B] text-white flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </span>
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#54595F] hover:text-[#997A43] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#0B0B0B] text-white flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </span>
                <span>Twitter</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#54595F] hover:text-[#997A43] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#0B0B0B] text-white flex items-center justify-center">
                  <Youtube className="w-4 h-4" />
                </span>
                <span>Youtube</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-semibold text-[#111111]">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm text-[#54595F]">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[#997A43] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#997A43] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/token-purchase"
                  className="hover:text-[#997A43] transition-colors"
                >
                  Public Access
                </Link>
              </li>
              <li>
                <Link
                  href="/physica"
                  className="hover:text-[#997A43] transition-colors"
                >
                  Physical Museum
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-twin"
                  className="hover:text-[#997A43] transition-colors"
                >
                  Digital Twin
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-semibold text-[#111111]">
              Contact Us
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Developed by Linkay Technologies Inc. and Linkay Ventures Inc.
            </p>
            <div className="space-y-2 text-sm text-[#54595F]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#997A43]" />
                <a
                  href="mailto:info@linkaythinktank.com"
                  className="hover:text-[#997A43] transition-colors"
                >
                  info@linkaythinktank.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#997A43]" />
                <a
                  href="https://museum.linkaythinktank.com"
                  className="hover:text-[#997A43] transition-colors"
                >
                  museum.linkaythinktank.com
                </a>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-block bg-[#997A43] hover:bg-[#856835] text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E8E8E8] text-center text-sm text-[#7A7A7A]">
          <p>© 2026 I³ Museum – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
