import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { FileText, Cpu, BookOpenCheck, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Information Twin – Museum Development",
  description:
    "Every object has a history. Most displays only show you the surface. The Information Twin was built to close that gap.",
};

export default function InformationTwinPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="Information Twin" />

      {/* 2. EVERY OBJECT HAS A HISTORY */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-8 text-center leading-tight">
            Every object has a history. <br className="hidden sm:inline" />
            Most displays only show you the surface.
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              A label tells you what something is called, where it’s from, and
              approximately when it was made. It doesn’t tell you what problem it
              was solving. It doesn’t tell you how many earlier versions failed.
              It doesn’t tell you whose hands made it, or whose life changed
              because of it.
            </p>
            <p className="font-medium text-[#111111]">
              The Information Twin was built to close that gap.
            </p>
            <p>
              Where a digital twin shows you a space as it looks — spatially,
              dimensionally, visually — an Information Twin shows you what that
              space means. Every object in our collection is connected to a
              structured knowledge profile that transforms it from a display item
              into a complete educational resource. Not a richer label. A
              different kind of knowledge entirely.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE ANATOMY OF AN INFORMATION TWIN PROFILE */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9] border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              The anatomy of an Information Twin profile
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              Think of an Information Twin as a curated biography of an object —
              one that places it inside the full context of its creation,
              development, and impact. For a technological artifact, that profile
              includes the original patent filing and the problems it was
              designed to solve, the inventor’s background and institutional
              context, the engineering challenges overcome during development,
              and the downstream effects on science, industry, or medicine.
            </p>
            <p>
              For an archaeological object, it might include the site conditions
              at discovery, the social role this type of object played in the
              community that made it, the parallel finds from other excavations
              that recontextualise it, and the scholarly debates its existence
              has contributed to.
            </p>
          </div>

          {/* Standout Callout Banner */}
          <div className="mt-12 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-sm text-center">
            <p className="font-serif italic text-xl sm:text-2xl text-[#111111] leading-relaxed">
              &ldquo;A microchip prototype becomes the story of how personal
              computing became possible. An early surgical instrument becomes the
              story of how medicine learned to save lives it previously
              lost.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. FROM DISPLAY TO EDUCATION */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <BookOpenCheck className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              From display to education
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              The practical difference between a display and an educational
              resource is depth. A display confirms that something exists. An
              educational resource explains why it matters — and gives you enough
              context to form your own informed view of what it changed.
            </p>
            <p>
              Our Information Twins make that transformation for every object in
              the collection. A person looking at an early semiconductor device
              doesn’t just see a piece of silicon — they see the design sketches
              that preceded it, the manufacturing challenges that nearly stopped
              it, and the direct line between that object and every programmable
              device in use today. A researcher examining a medieval surgical
              instrument doesn’t just encounter a tool — they find the clinical
              records, the documented mortality rates, and the evidence of design
              changes driven by patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 5. A DYNAMIC KNOWLEDGE BASE */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              A dynamic knowledge base
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify mb-10">
            <p>
              Information Twin profiles are not static. As new research is
              published, as archival materials are digitised, and as
              institutional partnerships bring new documentary evidence,
              profiles are updated and expanded. A researcher returning to an
              object they studied last year may find it substantially richer —
              not because the object has changed, but because our understanding
              of it has.
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
