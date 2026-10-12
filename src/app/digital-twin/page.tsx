import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { Eye, Compass, PlusCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Twin – Museum Development",
  description:
    "Walk into spaces that were never open to the public. Until now. Spatially accurate, navigable recreations of real historic environments.",
};

export default function DigitalTwinPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="Digital Twin" />

      {/* 2. WALK INTO SPACES */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-8 text-center leading-tight">
            Walk into spaces that were never open to the public. <br className="hidden sm:inline" />
            Until now.
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              There are environments in this collection that no general visitor
              has ever stood inside. Research laboratories locked since the last
              experiment. Prototype workshops frozen at the moment their work was
              finished. Manufacturing floors that defined an industry — and were
              dismantled before most of that industry knew their name. We’ve
              opened every one of them.
            </p>
            <p>
              A digital twin is a spatially accurate, navigable recreation of a
              real physical environment. Not a photograph. Not a reconstruction
              drawing. A space you can move through — where the relationships
              between objects, the scale of the room, and the proximity of one
              artifact to another carry meaning that a flat image cannot.
            </p>
            <p>
              Each environment in our digital twin library was documented with
              precision before, during, or after its physical form changed — in
              some cases before demolition, in others as part of active
              preservation. The result is a growing collection of historic
              environments that exist now only here, accessible to anyone with a
              device and a curiosity about how things were made.
            </p>
          </div>
        </div>
      </section>

      {/* 3. STANDING IN A SPACE CALLOUT */}
      <section className="py-16 bg-[#F6F1E9] border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl font-serif font-semibold text-[#111111] leading-relaxed italic">
            &ldquo;Standing in a space tells you something that no catalogue
            entry can. Scale matters. Proximity matters. The feeling of a room
            matters.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* 4. HOW TO MOVE THROUGH A DIGITAL TWIN */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              How to move through a digital twin
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              Navigation feels spatial and immediate. You move through
              environments the way you’d move through a physical room — turning,
              advancing, looking up and across. Objects that carry particular
              significance are marked with interactive hotspots: open one and you
              step from the visual experience into the documented record.
              Technical diagrams, archival photographs, patent filings,
              engineering notes — the knowledge layer is always just one click
              away, and always optional.
            </p>
            <p>
              You can explore casually, following what catches your attention.
              Or you can engage systematically, working through an environment
              with a specific research question. Both modes are fully supported
              — the twin responds to the depth of curiosity you bring to it.
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE COLLECTION IS STILL GROWING */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center shrink-0">
              <PlusCircle className="w-6 h-6 text-[#997A43]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111111]">
              The collection is still growing
            </h2>
          </div>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify mb-10">
            <p>
              New environments enter the digital twin library as digitisation
              progresses and as institutional partnerships extend the archive.
              Museums, universities, research institutions, and private
              collections that hold significant physical environments can
              contribute to the library through our Enterprise Engagement program
              — placing their spaces within a global context while preserving
              them for perpetual access.
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
