import Link from "next/link";
import { Zap, Twitter, Github, Linkedin, Globe } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/physica", label: "Physica" },
    { href: "/digital-twin", label: "Digital Twin" },
    { href: "/information-twin", label: "Information Twin" },
    { href: "/ai-support", label: "AI Support" },
  ],
  Web3: [
    { href: "/token-purchase", label: "Token Purchase" },
    { href: "/private-auction-model", label: "Private Auctions" },
  ],
  Company: [
    { href: "/about-us", label: "About Us" },
    { href: "/enterprise-engagement", label: "Enterprise" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-cyber-gold/10 bg-dark-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-gold to-cyber-bronze flex items-center justify-center">
                <Zap className="w-4 h-4 text-dark-bg" />
              </div>
              <span className="font-bold text-white text-lg">
                Linkay<span className="text-cyber-gold">TT</span> Museum
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Bridging physical heritage with digital intelligence. A next-generation museum platform powered by AI, Blockchain & XR technology.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-500 hover:text-cyber-gold hover:border-cyber-gold/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-cyber-gold text-xs font-mono uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Linkay Thinktank Museum Development Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
