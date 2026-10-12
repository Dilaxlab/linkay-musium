import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import {
  Landmark,
  Sparkles,
  Globe,
  Scroll,
  Search,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physical – Museum Development",
  description:
    "The museum is a leading institution dedicated to preserving, interpreting, and sharing humanity’s artistic, historical, and scientific heritage.",
};

const specialties = [
  {
    title: "Ancient Civilizations",
    icon: Landmark,
    description:
      "Artifacts from early civilizations, including sculpture, inscriptions, ceremonial objects, and everyday tools that reveal how ancient societies lived, governed, and expressed belief.",
  },
  {
    title: "Art & Sculpture",
    icon: Sparkles,
    description:
      "A wide range of classical and historical artworks, including stone carvings, metalwork, ceramics, and decorative art that demonstrate craftsmanship across cultures.",
  },
  {
    title: "World Cultures",
    icon: Globe,
    description:
      "Collections representing Africa, Asia, Europe, the Middle East, Oceania, and the Americas, highlighting cultural traditions, trade networks, and artistic exchange.",
  },
  {
    title: "Manuscripts & Written Heritage",
    icon: Scroll,
    description:
      "Rare manuscripts, early printed books, and historical documents that illustrate the development of language, knowledge, and communication.",
  },
  {
    title: "Archaeology & History",
    icon: Search,
    description:
      "Objects uncovered through archaeological research that provide insight into daily life, technology, religion, and social structures of past civilizations.",
  },
  {
    title: "Special Exhibitions",
    icon: Layers,
    description:
      "Rotating exhibitions explore specific themes, regions, or historical moments, often combining artifacts, multimedia storytelling, and interactive elements to create immersive experiences.",
  },
];

export default function PhysicaPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="Physical Museum" />

      {/* 2. ABOUT PHYSICAL MUSEUM */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-8">
            About Physical Museum
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify sm:text-center">
            <p>
              The museum is a leading institution dedicated to preserving,
              interpreting, and sharing humanity’s artistic, historical, and
              scientific heritage. It brings together collections from across
              civilizations and time periods, offering visitors a deeper
              understanding of how cultures have evolved and influenced one
              another.
            </p>
            <p>
              Through exhibitions, research, and education, the museum aims to
              inspire curiosity, encourage critical thinking, and promote
              appreciation of global heritage. Its galleries are designed to be
              accessible and engaging for all audiences, from students and
              researchers to families and international visitors.
            </p>
            <p>
              The museum also serves as a center for learning and dialogue,
              connecting the past with the present and supporting the exploration
              of ideas that shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SPECIALITIES & KEY COLLECTIONS */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-4">
              Specialities & Key Collections
            </h2>
            <p className="text-[#54595F] text-base sm:text-lg">
              The museum is internationally recognized for the diversity and
              depth of its collections, which span multiple regions and
              historical periods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-[#E8E8E8] shadow-sm hover:shadow-md hover:border-[#997A43] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6 text-[#997A43]" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#54595F] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
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
