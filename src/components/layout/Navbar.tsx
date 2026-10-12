'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

/* ── Social icon SVG paths ── */
const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="#000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Collectibles',
    href: '#',
    children: [
      { label: 'Physical', href: '/physical' },
      { label: 'Digital', href: '/digital-twin' },
    ],
  },
  { label: 'Token Purchase', href: '/token-purchase' },
  { label: 'Private Auction Model', href: '/private-auction-model' },
  { label: 'Enterprise Engagement', href: '/enterprise-engagement' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-200 ${
          scrolled ? 'shadow-md py-1' : 'py-2'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* ── COL 1: Logo ── */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="relative block h-[60px] w-[220px]">
                <Image
                  src="/images/logo.png" /* Replace with your actual logo path */
                  alt="I³ Digital Museum"
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                  priority
                />
              </Link>
            </div>

            {/* ── COL 2: Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
              {NAV_LINKS.map((item) => {
                const hasChildren = !!item.children;
                const active =
                  isActive(item.href) || (hasChildren && pathname.includes('collectibles'));

                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 text-[15px] font-serif text-gray-800 hover:text-black transition-colors ${
                        active ? 'font-semibold' : ''
                      }`}
                    >
                      {item.label}
                      {hasChildren && <ChevronDown className="w-4 h-4 ml-0.5" />}

                      {/* Underline styling matching the image */}
                      <span
                        className={`absolute -bottom-2 left-0 right-0 h-[2px] bg-black transition-transform duration-300 origin-left ${
                          active ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-100 shadow-lg py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ── COL 3: Social Icons ── */}
            <div className="hidden lg:flex items-center gap-3">
              <SocialButton href="https://facebook.com" icon={<FbIcon />} label="Facebook" />
              <SocialButton href="https://youtube.com" icon={<YtIcon />} label="YouTube" />
              <SocialButton href="/contact" icon={<PhoneIcon />} label="Phone" />
              <SocialButton href="/contact" icon={<MailIcon />} label="Email" />
            </div>

            {/* ── Mobile Menu Toggle ── */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
                className="p-2 text-gray-800"
              >
                {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-6 py-4 flex flex-col space-y-4">
              {NAV_LINKS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={`block text-lg font-serif py-2 border-b border-gray-100 ${
                      isActive(item.href) ? 'text-black font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-md font-serif text-gray-600 py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-4 pt-4 pb-2 border-t border-gray-100">
                <SocialButton href="https://facebook.com" icon={<FbIcon />} label="Facebook" />
                <SocialButton href="https://youtube.com" icon={<YtIcon />} label="YouTube" />
                <SocialButton href="/contact" icon={<PhoneIcon />} label="Phone" />
                <SocialButton href="/contact" icon={<MailIcon />} label="Email" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ── Reusable Social Button Component ── */
function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center justify-center w-[34px] h-[34px] bg-[#0B0B0B] text-white rounded-[4px] hover:bg-gray-800 transition-colors"
    >
      {icon}
    </Link>
  );
}
