import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import {
  Globe2,
  Palette,
  Compass,
  BookOpen,
  Cpu,
  Pickaxe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Museum Development",
  description:
    "I³ is developed by Linkay Technologies Inc. and Linkay Ventures Inc. to preserve, protect, and globally share historically significant inventions and sites.",
};

const collections = [
  {
    title: "Ancient Civilisations",
    icon: Globe2,
    description:
      "Artifacts from the earliest human societies — sculpture, ceremonial objects, inscriptions, tools. These objects carry information that no text does: about labour, belief, and the physical experience of worlds long before written record. Our ancient civilisations collection spans Mesopotamia, the Nile Valley, the Indus, early East Asia, and the pre-Columbian Americas.",
  },
  {
    title: "Art & Craft Across Cultures",
    icon: Palette,
    description:
      "Classical and historical works in stone, metal, ceramic, textile, and mixed media. We approach craft as a form of knowledge transfer — how an object was made tells us as much about its culture as what it depicts. Our holdings include documented production sequences for many significant works.",
  },
  {
    title: "World Cultures & Exchange Networks",
    icon: Compass,
    description:
      "Collections representing six continents with emphasis on the connections between them. Cultural history is not a sequence of isolated chapters — it is a network of exchange, and our collections document those exchanges in material form: trade goods, diplomatic gifts, cross-cultural adaptations of style and technique.",
  },
  {
    title: "Manuscripts & Written Heritage",
    icon: BookOpen,
    description:
      "Rare manuscripts, early printed books, and historical documents tracing the development of language and the technology of knowledge transmission. These are the primary sources through which civilisations understood themselves — and through which we now understand them.",
  },
  {
    title: "Science, Technology & Invention",
    icon: Cpu,
    description:
      "Scientific instruments, prototype devices, patent models, and the physical record of technological development from early mechanical invention through the early industrial period. This collection forms the primary basis for our digital twin environments — many of the spaces you can explore began here.",
  },
  {
    title: "Archaeology & Material Culture",
    icon: Pickaxe,
    description:
      "Objects recovered through documented archaeological research, providing direct evidence of daily life, governance, religion, and social structure. Where texts describe what people believed, archaeology shows what they actually built, ate, used, and buried.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="About I³" />

      {/* 2. ABOUT I³ INTRO */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#997A43] font-serif text-lg tracking-widest uppercase block mb-3">
            About I³
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#111111] leading-tight mb-8">
            Innovation <br /> Invention <br /> Inspiration
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify sm:text-center max-w-3xl mx-auto">
            <p>
              I³ is developed by Linkay Technologies Inc. and Linkay Ventures Inc.
            </p>
            <p>
              The platform operates under strict governance, ethical preservation
              standards, and intellectual property protections to ensure public
              trust and long-term value creation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HISTORY DIDN'T HAPPEN IN ONE PLACE & THE COLLECTION IS REAL */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Part A */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E8E8] shadow-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#111111] mb-6 leading-snug">
              History didn&apos;t happen in one place. <br />
              Now it doesn&apos;t have to stay there.
            </h2>
            <div className="space-y-4 text-[#54595F] text-base sm:text-lg leading-relaxed">
              <p>
                For most of human existence, the objects that carry
                civilisation’s memory have been held in institutions that most
                people will never visit. Not because the institutions were
                unwelcoming — because the world is large, and the buildings are
                few.
              </p>
              <p>
                The Physical Museum was built with a different premise: that the
                depth of human history belongs to everyone who’s curious about it.
              </p>
            </div>
          </div>

          {/* Part B */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E8E8] shadow-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#111111] mb-6 leading-snug">
              The collection is real. The access is global.
            </h2>
            <div className="space-y-4 text-[#54595F] text-base sm:text-lg leading-relaxed">
              <p>
                Our galleries hold thousands of years of material culture —
                artifacts, manuscripts, sculptures, scientific instruments, and
                objects of everyday life drawn from across six continents and
                dozens of civilisations. They’ve been researched, documented,
                and contextualised with the depth that institutions of this kind
                spend generations accumulating.
              </p>
              <p>
                And now, through digital environments that go far beyond
                photographs or scanned documents, that depth is navigable from
                anywhere. A student in Nairobi, a researcher in Seoul, a school
                class in a small town without a museum for a hundred miles — all
                of them can walk through the same spaces, engage with the same
                objects, and access the same layers of knowledge as someone
                standing in our galleries today.
              </p>
            </div>
          </div>

          {/* Standout Callout Banner */}
          <div className="bg-[#997A43] text-white p-8 sm:p-12 rounded-2xl shadow-lg text-center">
            <p className="font-serif italic text-2xl sm:text-3xl leading-relaxed">
              &ldquo;This isn&apos;t a digital approximation of the museum experience.
              It is an extension of it.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEY COLLECTIONS GRID */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111]">
              Curatorial Holdings & Collections
            </h2>
            <p className="mt-4 text-[#54595F] max-w-2xl mx-auto text-base sm:text-lg">
              Explore the documented material culture and scientific advancements
              curated within our physical and digital archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8E8E8] hover:border-[#997A43] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6 text-[#997A43]" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#54595F] text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
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
