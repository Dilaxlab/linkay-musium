import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { Search, Compass, MessageSquareCode } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Support – Museum Development",
  description:
    "The collection is vast. Your time inside it shouldn't feel that way. Natural language search, personalized discovery, and contextual guidance powered by AI.",
};

export default function AISupportPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="AI Agent" />

      {/* 2. THE COLLECTION IS VAST */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-8 text-center leading-tight">
            The collection is vast. <br className="hidden sm:inline" />
            Your time inside it shouldn&apos;t feel that way.
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              When a collection spans thousands of years and dozens of
              civilisations, the question isn’t whether there’s something
              relevant to what you’re looking for. The question is how to find
              it — and more importantly, how to discover the things you didn’t
              know to search for.
            </p>
            <p className="font-medium text-[#111111]">
              That second kind of discovery — the one that expands what you were
              going to learn — is what our AI support layer was built to enable.
            </p>
            <p>
              Applied carefully, artificial intelligence doesn’t replace
              curatorial expertise or visitor curiosity. It extends both. It
              creates pathways through complexity that would otherwise require
              hours of catalogue navigation, surfacing connections between
              objects, eras, and ideas that even specialised researchers might
              miss.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEARCH THE WAY YOU THINK */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9] border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <Search className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              Search the way you think
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              Query our collections the way you’d describe your interest to a
              knowledgeable colleague — not in catalogue syntax, but in natural
              language. &lsquo;Early electrical storage devices&rsquo; surfaces
              the expected batteries, but also the experimental capacitors, the
              patent disputes that surrounded them, and the correspondence
              between inventors debating whether the technology was safe to
              commercialise.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DISCOVERY THAT FOLLOWS YOUR CURIOSITY */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              Discovery that follows your curiosity
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              Personalised learning paths build as you explore. If you’ve spent
              time in the early computing environments, the system identifies
              connections to the telecommunications archive you might not have
              considered — not because an algorithm is trying to keep your
              attention, but because the historical development of those fields
              was intimately linked.
            </p>
          </div>
        </div>
      </section>

      {/* 5. GUIDANCE AT YOUR LEVEL */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <MessageSquareCode className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              Guidance at your level
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify mb-10">
            <p>
              AI-powered explanation provides contextual guidance calibrated to
              the depth you need. A secondary school student and a doctoral
              researcher can look at the same object and receive guidance suited
              to each. Accessible narrative for general visitors. Technical
              detail for specialists. Curriculum-aligned content for educators.
              Translation support for visitors working in a second or third
              language.
            </p>
            <p>
              Conversational interaction means you can ask questions, request
              comparisons, follow threads, and change direction — the way a
              real conversation with a knowledgeable guide works, rather than the
              way a search engine does.
            </p>
          </div>

          <div className="text-center pt-6">
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
