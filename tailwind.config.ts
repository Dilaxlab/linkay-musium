import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "museum-gold": "#997A43",
        "museum-gold-hover": "#856835",
        "museum-dark": "#2B2B2B",
        "museum-heading": "#111111",
        "museum-body": "#4B5563",
        "museum-cream": "#F6F1E9",
        "museum-border": "#E8E8E8",
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F8FAFC",
        "accent-gold": "#997A43",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        serif: ["var(--font-lora)", "var(--font-playfair)", "Georgia", "serif"],
        lora: ["var(--font-lora)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "museum": "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        "museum-hover": "0 10px 30px -4px rgba(153, 122, 67, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
