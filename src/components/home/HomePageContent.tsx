"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ShieldCheck, Lock, FileText, UserCheck, ArrowRight, ChevronDown,
  Sparkles, Check, ExternalLink, HelpCircle, Eye, Landmark, Compass, Play
} from "lucide-react";
import ModelDetailModal, { PatentModel } from "./ModelDetailModal";
import PrivateAccessModal from "./PrivateAccessModal";

// ── Dynamic import for Three.js 3D WebGL component ──
const PatentModel3D = dynamic(() => import("./PatentModel3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] sm:h-[500px] lg:h-[540px] rounded-3xl bg-[#080D1A] border border-cyan-500/20 flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-10 h-10 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin mx-auto" />
        <p className="text-xs font-mono text-cyan-300">
          Loading Interactive 3D Exhibit...
        </p>
      </div>
    </div>
  ),
});

const featuredModels: PatentModel[] = [
  {
    id: "PM-001",
    title: "Mercantile Signal Printer",
    inventor: "Elias Whitmore",
    year: "1874",
    category: "Communication & Market Telemetry",
    materials: "Hand-tooled brass gears, mahogany case, copper contacts, steel escapement",
    dimensions: "12\" × 8\" × 7\" (1:4 Working Scale)",
    patentNo: "US Pat. No. 154,821",
    custodyStatus: "Insured Vault Custody · Vault 01",
    description: "A compact communication model showing how market information could move faster, more clearly, and with greater confidence.",
    engineeringNote: "Demonstrates an early rapid escapement printing cylinder capable of synchronizing financial price feeds across trading floors via telegraphic line pulses.",
    image: "/images/WhatsApp-Image-2026-02-27-at-7.48.58-PM.jpeg",
  },
  {
    id: "PM-002",
    title: "Adjustable Hospital Companion Table",
    inventor: "Clara B. Harlan",
    year: "1882",
    category: "Clinical Care & Ergonomics",
    materials: "Wrought iron cantilever arm, walnut surface, brass geared ratchet gear",
    dimensions: "14\" × 9\" × 11\" (1:6 Scale Prototype)",
    patentNo: "US Pat. No. 261,349",
    custodyStatus: "Insured Vault Custody · Vault 02",
    description: "A practical care model designed around patient comfort, bedside access, and everyday clinical usefulness.",
    engineeringNote: "Pioneered a one-handed counterweighted bevel locking gear, allowing recovering patients to swivel trays effortlessly over bed frames.",
    image: "/images/im1.png",
  },
  {
    id: "PM-003",
    title: "Concert Piano Action Model",
    inventor: "Anton Vale",
    year: "1869",
    category: "Acoustics & Musical Mechanisms",
    materials: "Quarter-sawn maple, cast bronze bracket, felt hammer, silver wire spring",
    dimensions: "10\" × 4\" × 8\" (1:1 Single-Key Action)",
    patentNo: "US Pat. No. 94,118",
    custodyStatus: "Insured Vault Custody · Vault 01",
    description: "A finely built mechanism that turns touch into movement, revealing the engineering hidden inside musical expression.",
    engineeringNote: "Shows the double-escapement repetition lever, enabling rapid key repetitions without waiting for the hammer to return to rest position.",
    image: "/images/im2.png",
  },
  {
    id: "PM-004",
    title: "Urban Rescue Ladder Carriage",
    inventor: "Jonah Merritt",
    year: "1878",
    category: "Public Safety & Municipal Works",
    materials: "Cold-rolled steel trusses, brass rack-and-pinion crank, ash wood wheels",
    dimensions: "16\" × 6\" × 8\" (1:12 Working Scale)",
    patentNo: "US Pat. No. 209,412",
    custodyStatus: "Insured Vault Custody · Vault 03",
    description: "A public-safety model focused on reach, stability, and rapid response in crowded city streets.",
    engineeringNote: "Utilized a telescoping scissor gear with dual-action stabilizing outriggers to prevent carriage tipping during multi-story rescues.",
    image: "/images/im3.png",
  },
  {
    id: "PM-005",
    title: "Portable Roll-Film Camera Model",
    inventor: "Lydia Eastbrook",
    year: "1888",
    category: "Optics & Early Photography",
    materials: "Ebonized mahogany, brass bellows rails, hand-ground doublet lens, tin spool",
    dimensions: "7\" × 5\" × 5\" (1:2 Prototype)",
    patentNo: "US Pat. No. 388,850",
    custodyStatus: "Insured Vault Custody · Vault 02",
    description: "A hand-carried image-making model that points toward photography becoming a simpler and more personal practice.",
    engineeringNote: "Replaced heavy glass wet-plates with an internal tensioned roll spool, demonstrating the transition to democratic, snapshot image capture.",
    image: "/images/Jan-7-2026-06_28_07-PM.png",
  },
  {
    id: "PM-006",
    title: "Iron Prairie Wind Engine",
    inventor: "Samuel Harrow",
    year: "1876",
    category: "Rural Energy & Agricultural Machinery",
    materials: "Die-cast iron blades, brass bevel gears, tubular pump shaft, copper governor",
    dimensions: "18\" × 8\" × 8\" (1:10 Working Model)",
    patentNo: "US Pat. No. 178,924",
    custodyStatus: "Insured Vault Custody · Vault 01",
    description: "A durable rural-power model built for pumping, utility, and dependable work across open country.",
    engineeringNote: "Engineered with a self-governing centrifugal blade brake that automatically feathered turbine angles during prairie severe gale winds.",
    image: "/images/WhatsApp-Image-2026-02-27-at-7.45.33-PM.jpeg",
  },
];

const faqs = [
  {
    q: "What does verified digital ownership mean?",
    a: "It is a digital record connected to a specific physical model. It helps document current ownership, transfer history, and custody information so that the model’s ownership record remains easier to review and verify.",
  },
  {
    q: "Does the digital record replace the physical model?",
    a: "No. The patent model remains the underlying historical object. The digital record supports the documentation and management of ownership; it does not replace the artifact itself.",
  },
  {
    q: "How is provenance authenticated?",
    a: "Each model is reviewed against the evidence available for that object. This may include patent references, collection records, custody history, labels, inscriptions, photographs, condition information, and other supporting documentation. The provenance file should also identify any known limitations or gaps in the available record.",
  },
  {
    q: "Can I review the model before acquiring it?",
    a: "Yes. Private viewing, condition review, supporting documentation, and custody planning may be arranged for qualified prospective buyers.",
  },
  {
    q: "What custody options are available?",
    a: "A model may remain in insured professional custody or be prepared for physical delivery by arrangement. Available options will depend on the model’s condition, location, conservation needs, insurance requirements, and selected ownership path.",
  },
  {
    q: "Do I have to take physical possession immediately?",
    a: "No. An owner may choose to retain the model in approved custody and arrange delivery at a later stage, subject to the applicable verification, compliance, insurance, and transportation requirements.",
  },
  {
    q: "How does ownership transfer work?",
    a: "The parties complete the approved transfer documentation, identity and eligibility checks, and any applicable compliance requirements. The ownership record and custody documentation are then updated to reflect the transfer.",
  },
  {
    q: "Can the physical model be delivered internationally?",
    a: "International delivery may be possible by arrangement. It will depend on the model, destination, insurance availability, transportation requirements, customs rules, and any applicable cultural-property or export restrictions.",
  },
  {
    q: "Is direct ownership different from collection participation?",
    a: "Yes. Direct ownership relates to a specific physical model and its associated ownership record. Collection participation, when available, may provide access to a broader group of models through a qualified pathway managed by approved legal and offering partners.",
  },
  {
    q: "Can I later transfer or sell my model?",
    a: "An approved transfer may be arranged, subject to documentation, custody, eligibility, and compliance requirements. I-3 does not promise a resale market, liquidity, appreciation, or future value.",
  },
  {
    q: "What happens if the model requires conservation?",
    a: "Any known condition concerns will be presented during serious review. Where conservation is advisable, appropriate handling, specialist assessment, and custody arrangements can be discussed before work is authorized.",
  },
  {
    q: "Who can collect through I3?",
    a: "The platform is intended for serious collectors, private clients, institutions, design-led companies, and qualified participants. Certain ownership or participation paths may require additional identity, eligibility, legal, or compliance review.",
  },
];

export default function HomePageContent() {
  const [activeModel, setActiveModel] = useState<PatentModel | null>(null);
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [accessContext, setAccessContext] = useState("Direct Ownership");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenAccess = (context: string) => {
    setAccessContext(context);
    setAccessModalOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#FBF9F5] text-[#2B2B2B]">
      {/* ── 1. HERO SECTION (Full-Screen Viewport Cover) ── */}
      <section className="relative min-h-screen w-full overflow-hidden border-b border-[#E8E2D9] flex items-center bg-[#FBF9F5] pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero.jpeg"
            alt="Classical Museum Sculpture Gallery"
            fill
            priority
            className="object-cover object-[85%_top] sm:object-top scale-100"
          />

          <div
            className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[48%] pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(251, 249, 245, 0.95) 0%, rgba(251, 249, 245, 0.88) 35%, rgba(251, 249, 245, 0.35) 70%, transparent 100%)',
            }}
          />

          <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/85 via-[#FBF9F5]/40 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FBF9F5]/70 to-transparent pointer-events-none" />
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto relative z-10 py-8 sm:py-12 my-auto">
          <div className="max-w-xl xl:max-w-2xl space-y-6 lg:space-y-7">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-[#2B2B2B]">
              <span className="w-4 h-[2.5px] bg-[#2E7D32]" />
              <span className="text-[#2B2B2B] tracking-[0.18em] uppercase text-[11px] sm:text-xs">
                A LIVING DIGITAL COLLECTION
              </span>
              <span className="text-slate-400 font-normal">·</span>
              <span className="text-slate-500 font-medium tracking-widest uppercase text-[10.5px]">
                EST. 2026
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-bold text-[#111111] leading-[1.08] tracking-tight">
              History is not behind us. <br />
              <span className="font-normal italic">It&apos;s waiting to be explored.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-lg font-normal">
              Step inside humanity&apos;s most extraordinary stories — across time, cultures, and
              ideas.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href="#collection"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A56DB] hover:bg-[#1648B8] text-white text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_4px_20px_rgba(26,86,219,0.35)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Enter the Museum</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#collection"
                className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] hover:text-[#1A56DB] underline underline-offset-8 decoration-1 hover:decoration-2 transition-all"
              >
                Explore the collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="bg-[#FAF8F5] border-b border-[#E8E2D9] py-10">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E2D9]">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0 lg:px-6 first:pl-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
                120,000+
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-slate-600 mt-1">
                Artifacts & Patent Records
              </span>
              <span className="text-[11px] font-mono text-[#997A43] mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Authenticated Provenance
              </span>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0 lg:px-6">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
                48
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-slate-600 mt-1">
                Virtual Exhibitions & 3D Twins
              </span>
              <span className="text-[11px] font-mono text-[#997A43] mt-0.5 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Insured Vault Custody
              </span>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0 lg:px-6">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
                32
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-slate-600 mt-1">
                Countries with Institutional Partners
              </span>
              <span className="text-[11px] font-mono text-[#997A43] mt-0.5 flex items-center gap-1">
                <FileText className="w-3 h-3" /> Verified Digital Records
              </span>
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0 lg:px-6 last:pr-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
                ∞
              </span>
              <span className="text-xs sm:text-sm font-sans font-medium text-slate-600 mt-1">
                Open to Serious Collectors & Public
              </span>
              <span className="text-[11px] font-mono text-[#997A43] mt-0.5 flex items-center gap-1">
                <UserCheck className="w-3 h-3" /> Private Specialist Concierge
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EDUCATIONAL INTRODUCTION ── */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E8E2D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#997A43]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                Understanding the Collection
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              What is a patent model?
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed text-justify sm:text-left max-w-3xl mx-auto font-light">
            <p>
              Before detailed technical filings and digital records became the norm, inventors used
              small working models to demonstrate how their ideas functioned. Materials, mechanisms,
              and movement allowed an invention to be inspected in physical form—not simply
              understood through words and drawings.
            </p>
            <p>
              The examples that survive are rare, tangible records of the patent process. Unlike
              modern documentation, each model preserves the hand-built evidence of an
              inventor&apos;s thinking: a concept made physical at the moment it sought recognition.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#provenance"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#997A43] hover:text-[#7d6232] transition-colors"
            >
              <span>Explore the History of Patent Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <a
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-600 hover:text-[#997A43] transition-colors"
            >
              <span>About Linkay I³ Museum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <a
              href="/physica"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-600 hover:text-[#997A43] transition-colors"
            >
              <span>Physical Museum (Physica)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED MODEL CARDS ── */}
      <section id="collection" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#997A43]" />
                <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                  The Collection
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
                Working models with stories worth owning.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Each model is presented as a historical artifact, an engineering story, and a
              documented ownership opportunity. Explore the ideas, materials, mechanisms, and people
              behind objects created to make invention visible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <div
                key={model.id}
                onClick={() => setActiveModel(model)}
                className="museum-glass-card overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white">
                      {model.patentNo}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#997A43]">
                      <span>Inventor: {model.inventor}</span>
                      <span>{model.year}</span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-[#111111] group-hover:text-[#997A43] transition-colors line-clamp-1">
                      {model.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                      {model.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#E8E2D9]/60 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-slate-500 group-hover:text-[#997A43] transition-colors">
                    Inspect Model Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#111625] text-white flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[#997A43]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE 3D VIRTUAL GALLERY BAND ── */}
      <section className="py-20 bg-[#080D1A] text-white border-y border-cyan-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-cyan-400" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  Step Into A New Perspective
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Experience Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-[#C5A059]">
                  Virtual Gallery in 3D
                </span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed max-w-md font-light">
                Explore 3D exhibits, take virtual tours and discover artifacts like never before —
                from anywhere in the world. Rotate, inspect hand-tooled brass gears, and examine the
                inventor&apos;s mechanics in real-time WebGL.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenAccess('Virtual Gallery Tour')}
                  className="px-6 py-3 rounded-full border border-cyan-400/50 hover:border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Start Virtual Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="/digital-twin"
                  className="px-5 py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>Explore Digital Twin Lab</span>
                  <ExternalLink className="w-3 h-3 text-[#C5A059]" />
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-[10.5px] font-mono text-slate-400">
                <span>INTERACTIVE 3D</span>
                <span>·</span>
                <span>SUB-MILLIMETER SCAN</span>
                <span>·</span>
                <span>360° EXPERIENCE</span>
              </div>
            </div>

            {/* Right: Real Three.js WebGL Patent Model Viewer */}
            <div className="lg:col-span-7 min-w-0">
              <PatentModel3D />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. STORY PANEL (PROVENANCE) ── */}
      <section id="provenance" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E8E2D9]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#997A43]" />
                <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                  Provenance
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
                Invention becomes more powerful when you can hold it.
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Brass, wood, glass, gears, levers, keys, and miniature mechanisms gave inventors a
                  way to turn an unseen idea into something that could be examined. Every surviving
                  model carries traces of that transformation: the moment thought became structure,
                  movement, and physical proof.
                </p>
                <p>
                  The collection brings these objects into the present without separating them from
                  their histories. Each model is considered through its design, engineering,
                  condition, provenance, custody, and ownership record.
                </p>
                <p>
                  For collectors, institutions, and companies, the result is a more personal
                  connection to innovation—not as an abstract patent number, but as an object shaped
                  by human ambition and ingenuity.
                </p>

                <div className="pt-2">
                  <a
                    href="/information-twin"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#997A43] hover:text-[#7d6232] transition-colors"
                  >
                    <span>View Information Twin Provenance Dossiers & Archives</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] shadow-sm space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#997A43] block">
                  Material Records
                </span>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9]">
                    <h4 className="font-serif font-bold text-base text-[#111111]">
                      Hand-Tooled Metallurgy
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Solid brass, cast iron, and tempered steel gears showing 19th-century machine
                      shop tolerances.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9]">
                    <h4 className="font-serif font-bold text-base text-[#111111]">
                      Artisan Cabinetry
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      French-polished mahogany, walnut, and cherrywood housings built to withstand
                      patent examiners&apos; scrutiny.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9]">
                    <h4 className="font-serif font-bold text-base text-[#111111]">
                      Patent Office Inscriptions
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Surviving original parchment tags with clerk handwriting, wax seals, and
                      official docket numbers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY COLLECT WITH I3 ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#997A43]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                Why I3
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              A clearer way to collect objects of invention.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Collecting a patent model should involve more than acquiring an object. I-3 brings
              together the historical, physical, and ownership information needed to understand what
              is being collected, how it is protected, and how ownership may be managed over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="museum-glass-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#111625] text-[#C5A059] flex items-center justify-center mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">
                Provenance Before Promotion
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every listed model is reviewed against available provenance material, condition
                information, custody history, patent references, and supporting records. Known
                evidence—and any material gaps—can be made available for serious review.
              </p>
            </div>

            <div className="museum-glass-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#111625] text-[#C5A059] flex items-center justify-center mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">
                One Object, One Clear Ownership Record
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A verified digital record is linked to the physical model, helping make current
                ownership, custody status, and future transfers easier to document and verify.
              </p>
            </div>

            <div className="museum-glass-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#111625] text-[#C5A059] flex items-center justify-center mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">
                Custody Shaped Around the Collector
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Owners may keep a model in insured professional custody or arrange physical delivery
                when the acquisition and ownership requirements are complete.
              </p>
            </div>

            <div className="museum-glass-card p-8 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#111625] text-[#C5A059] flex items-center justify-center mb-4 font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">
                Private Support Throughout the Process
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Private viewing, condition review, acquisition planning, custody arrangements,
                delivery, and approved transfer pathways can be discussed with a specialist before
                ownership is completed.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#ownership"
              className="btn-primary-dark group text-xs uppercase tracking-wider font-semibold"
            >
              <span>Understand the Ownership Process</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. OWNERSHIP FLOW ── */}
      <section id="ownership" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#997A43]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                Ownership Flow
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              From historical object to verified ownership.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#997A43] uppercase">Step 01</div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">Authenticate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The model is reviewed against available provenance material, condition notes,
                custody history, patent references, and supporting records.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#997A43] uppercase">Step 02</div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">Preserve</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The physical object may remain in insured professional custody, with careful
                handling, appropriate environmental controls, and documented status updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#997A43] uppercase">Step 03</div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">Record</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A verified digital ownership record is created to help keep ownership, transfer
                history, and custody information connected to the physical model.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-3 relative">
              <div className="text-xs font-mono font-bold text-[#997A43] uppercase">Step 04</div>
              <h3 className="font-serif font-bold text-xl text-[#111111]">Own or Receive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The owner may retain the model in custody, arrange an approved transfer, or request
                delivery once the applicable ownership, compliance, insurance, and transportation
                requirements are complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. PARTICIPATION SECTIONS ── */}
      <section id="participate" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#997A43]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                Participation Pathways
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              Two distinct acquisition pathways.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="museum-glass-card p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#997A43] font-bold">
                  Pathway A
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#111111]">Direct Ownership</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Own a specific model with a clear provenance file, an insured custody option, and
                  a verified digital record tied to the physical object.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-700 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#997A43] flex-shrink-0 mt-0.5" />
                    <span>
                      Designed for buyers who want a signature object, not a generic collectible.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#997A43] flex-shrink-0 mt-0.5" />
                    <span>
                      Private viewing, condition review, custody planning, and delivery support can
                      be arranged before purchase.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#997A43] flex-shrink-0 mt-0.5" />
                    <span>
                      The ownership record is designed to make future transfer clearer and easier to
                      verify.
                    </span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenAccess('Direct Ownership')}
                className="btn-primary-dark w-full text-xs uppercase tracking-wider py-3.5"
              >
                <span>Explore Direct Ownership</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>
            </div>

            <div className="museum-glass-card p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#997A43] font-bold">
                  Pathway B
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#111111]">
                  Collection Participation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Participate in a curated group of models through a qualified pathway when
                  available.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-700 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#997A43] flex-shrink-0 mt-0.5" />
                    <span>
                      Designed for private-market participants who prefer access to a broader
                      collection strategy rather than ownership of a single model.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#997A43] flex-shrink-0 mt-0.5" />
                    <span>
                      Custody, transfer, eligibility, and compliance checks are handled through
                      approved partners.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-500 font-mono text-[11px] bg-slate-50 p-2.5 rounded-xl border border-[#E8E2D9]">
                    <ShieldCheck className="w-4 h-4 text-[#997A43] flex-shrink-0 mt-0.5" />
                    <span>
                      No representation is made regarding future value, returns, liquidity, or
                      resale opportunities.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleOpenAccess('Collection Participation')}
                  className="btn-outline-pill w-full text-xs uppercase tracking-wider py-3.5 flex items-center justify-center gap-2"
                >
                  <span>Discuss Collection Participation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#997A43]" />
                </button>
                <a
                  href="/token-purchase"
                  className="block text-center text-xs font-mono text-[#997A43] hover:underline py-1"
                >
                  View I³ Token Purchase & Tier Models →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. PROOF POINTS SECTION ── */}
      <section className="py-20 lg:py-24 bg-[#FBF9F5] border-b border-[#E8E2D9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Built around trust, custody, and clarity.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              'Provenance-led presentation for every listed model.',
              'Condition notes and custody documentation available for serious review.',
              'Physical custody and delivery options discussed before transfer.',
              'Digital records designed to make ownership easier to verify.',
              'Private support available throughout the acquisition process.',
            ].map((point, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2D9] flex items-center gap-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-serif font-medium text-slate-800">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CUSTODY BAR ── */}
      <section id="custody" className="py-14 bg-[#111625] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
            Secure Preservation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Vaulted. Insured. Available for delivery by arrangement.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Keep the physical model protected with an approved custody partner, or arrange delivery
            once the ownership path and applicable requirements are complete.
          </p>
        </div>
      </section>

      {/* ── 12. FAQ SECTION ── */}
      <section
        id="private-viewing"
        className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#997A43]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
                Ownership Questions
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              Understanding ownership, provenance, and custody.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8E2D9] bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#111111] group-hover:text-[#997A43] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-transform ${
                      openFaqIndex === idx ? 'rotate-180 bg-[#997A43] text-white' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-[#E8E2D9]/40 pt-4 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. FOOTER CALL TO ACTION ── */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#997A43]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#997A43] uppercase">
              Curatorial Follow-Up
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Which model belongs in your collection?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Tell us whether you are exploring direct ownership, private acquisition, institutional
            placement, or collection participation. A specialist will follow up with the appropriate
            next step.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenAccess('Begin as a Collector')}
              className="btn-primary-dark text-xs uppercase tracking-wider py-4 px-8"
            >
              <span>Begin as a Collector</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>

            <button
              onClick={() => handleOpenAccess('Discuss Participation')}
              className="btn-outline-pill text-xs uppercase tracking-wider py-4 px-8"
            >
              <span>Discuss Participation</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
            <a
              href="/enterprise-engagement"
              className="hover:text-[#997A43] underline transition-colors"
            >
              Enterprise & Institutional Partnerships →
            </a>
            <span className="text-slate-300">·</span>
            <a href="/contact-us" className="hover:text-[#997A43] underline transition-colors">
              Speak With Concierge / Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Modals */}
      <ModelDetailModal
        model={activeModel}
        onClose={() => setActiveModel(null)}
        onRequestInquiry={(title) => handleOpenAccess(`Model Inquiry: ${title}`)}
      />

      <PrivateAccessModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
        initialInterest={accessContext}
      />
    </div>
  );
}
