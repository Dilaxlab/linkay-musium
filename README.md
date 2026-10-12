# Linkay Thinktank Museum Development Platform

A Next-Gen Web Application for a digital-physical museum platform bridging physical heritage with digital intelligence via AI, Digital Twins, and Web3.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 App Router + React 18 + TypeScript (strict mode)
- **Styling**: Tailwind CSS v3 with Cyber-Academic Dark Design System & custom CSS variables
- **3D Engine**: Three.js WebGL 2.0 with PBR Shaders, procedural geometries, and Orbit controls
- **Animations**: Framer Motion + GSAP
- **Visualizations**: Recharts (12-month trends, category breakdowns, provenance pie charts)
- **State Management**: Zustand (`src/store/useMuseumStore.ts`)
- **Typography**: `next/font` (Inter, Space Grotesk, JetBrains Mono)
- **Icons**: Lucide React
- **Audio**: Web Audio API ambient drone synthesizer + Web Speech API voice guide

---

## 🎨 Design System — Cyber-Academic Dark

```css
:root {
  --bg-primary: #0A0E1A;        /* Deep sapphire black */
  --bg-secondary: #111827;       /* Elevated surface */
  --glass: rgba(255,255,255,0.04);
  --glass-border: rgba(255,255,255,0.08);
  --accent-gold: #D4AF37;       /* Cyber-Gold */
  --accent-bronze: #CD7F32;     /* Bronze */
  --accent-sapphire: #1E3A8A;   /* Deep Sapphire */
  --accent-neon: #00E5FF;       /* Cyan neon for CTAs */
  --text-primary: #F8FAFC;
  --text-muted: #94A3B8;
  --success: #10B981;
  --danger: #EF4444;
}
```

---

## 🏛️ Application Routes

| # | Route | Title & Functionality |
|---|-------|------------------------|
| 1 | `/` | **Home** — Hero with word-by-word fade-in, Suspense 3D floating artifact, Features grid, live ticker, counters |
| 2 | `/about-us` | **About Us** — Mission/Vision split, 2019-2026 interactive timeline, 8 team cards, advisory board |
| 3 | `/physica` | **Physica** — Smart exhibits, interactive SVG blueprint with clickable zones, location & visiting hours |
| 4 | `/digital-twin` | **Digital Twin** — 3D photogrammetry viewer with model switcher, XR gateway cards, scroll-snap carousel |
| 5 | `/information-twin` | **Information Twin** — Archive search, list/grid toggle, 12-month Recharts, Provenance passport modal |
| 6 | `/ai-support` | **AI Support** — Full-height chat panel, prompt chips, streaming text, voice readout, topics grid |
| 7 | `/token-purchase` | **Token Purchase** — Live price, token distribution pie, utility cards, staking calculator, [Crypto / Fiat] tabs |
| 8 | `/private-auction-model` | **Private Auctions** — 6 AuctionCards, live ticking countdowns, quick bid panel, Tier status, wallet gate |
| 9 | `/enterprise-engagement` | **Enterprise** — 3 B2B offerings, tiered pricing table (Starter/Pro/Enterprise), inquiry form with role selector |

---

## ⚙️ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```
