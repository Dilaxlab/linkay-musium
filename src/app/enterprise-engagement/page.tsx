import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { Check, Shield, Users, Landmark, Layers, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Engagement – Museum Development",
  description:
    "Your collection is reaching a fraction of the audience it deserves. End-to-end digital transformation and partnership models for museums, universities, and research institutions.",
};

const visitorExpectations = [
  "online access",
  "interactive tours",
  "searchable archives",
  "educational resources",
  "virtual experiences",
];

const conservationDemands = [
  "reduced handling of fragile objects",
  "controlled storage environments",
  "better documentation",
  "risk mitigation",
];

const transformationBenefits = [
  "protect original assets",
  "expand global access",
  "improve educational outreach",
  "generate sustainable revenue",
  "future-proof their collections",
];

const strategyPlanningItems = [
  "assessing collection types (patents, artifacts, documents, labs, sites)",
  "identifying priority items for digitisation",
  "defining visitor and research use cases",
  "planning digital access policies",
  "designing sustainable revenue models",
  "mapping technical infrastructure needs",
];

const revenueModelItems = [
  "virtual ticketing",
  "premium digital exhibitions",
  "memberships",
  "research access programs",
  "token-based participation",
  "sponsorship opportunities",
  "educational licensing",
];

const whoWeWorkWith = [
  "museums",
  "innovation centers",
  "science and technology institutions",
  "universities",
  "research laboratories",
  "archives",
  "libraries",
  "cultural heritage organizations",
];

export default function EnterpriseEngagementPage() {
  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="Enterprise Engagement" />

      {/* 2. FRACTION OF AUDIENCE */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-8 text-center leading-tight">
            Your collection is reaching a fraction of the audience it deserves
          </h2>

          <div className="space-y-6 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify">
            <p>
              This is not a criticism of the institutions that hold cultural and
              scientific heritage. It is a description of a structural reality
              that digital transformation was built to change.
            </p>
            <p>
              Physical collections are constrained by physical facts. Fragile
              objects can’t be handled repeatedly. Galleries hold what they
              hold. Geography determines who can visit. Conservation
              requirements determine what can be displayed. The result is that
              even exceptional collections — ones that took generations to build
              and that hold irreplaceable knowledge — operate well below their
              potential for research, education, and public impact.
            </p>
            <p>
              The world around those institutions has also changed faster than
              many have been able to respond. Visitors now expect remote access.
              Students and researchers expect to work with collections without
              travelling. Funding models built for a previous era are under
              sustained pressure. Conservation standards increasingly require
              documentation that physical-only institutions struggle to produce
              at the required scale.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY ENTERPRISE ENGAGEMENT MATTERS */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9] border-b border-[#E8E8E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-6 text-center">
            Why Enterprise Engagement Matters
          </h2>
          <p className="text-center text-[#54595F] text-base sm:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            Cultural and innovation institutions worldwide are under increasing
            pressure to modernize while protecting their collections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Box 1: Visitors Expect */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8E8E8] shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-6">
                Visitors expect:
              </h3>
              <ul className="space-y-3 text-[#54595F]">
                {visitorExpectations.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#997A43]" />
                    <span className="capitalize">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Conservation Standards Demand */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8E8E8] shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-6">
                At the same time, conservation standards demand:
              </h3>
              <ul className="space-y-3 text-[#54595F]">
                {conservationDemands.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#997A43]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Digital Transformation Solves Both Needs */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E8E8] shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
              Digital transformation solves both needs.
            </h3>
            <p className="text-[#54595F] text-base sm:text-lg mb-6">
              By adopting digital twins, structured information systems, and
              intelligent visitor tools, institutions can:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-[#54595F]">
              {transformationBenefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#997A43]/15 text-[#997A43] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#111111] font-medium border-t border-gray-100 pt-4">
              Enterprise Engagement provides the expertise and infrastructure to
              make this transition practical and achievable.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW WE SUPPORT INSTITUTIONS & STRATEGY & PLANNING */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111] mb-6 text-center">
            How We Support Institutions
          </h2>

          <div className="space-y-4 text-[#54595F] text-base sm:text-lg leading-relaxed text-justify mb-12">
            <p>
              Enterprise Engagement is not a software subscription or generic
              platform license. It is a guided partnership model that combines
              strategy, technology, and operational support.
            </p>
            <p>
              Institutions receive end-to-end assistance across the full
              digitisation journey.
            </p>
          </div>

          {/* Strategy & Planning Card */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#E8E8E8]">
            <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-4">
              Strategy & Planning
            </h3>
            <p className="text-[#54595F] text-base leading-relaxed mb-4">
              We begin by understanding each institution’s goals, collections,
              and constraints.
            </p>
            <p className="text-[#2B2B2B] font-medium mb-4">This includes:</p>
            <ul className="space-y-3 mb-6 text-[#54595F]">
              {strategyPlanningItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#997A43] font-bold text-lg leading-none mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#111111] font-serif italic text-lg border-t border-gray-200 pt-4">
              The result is a clear digital roadmap aligned with the
              institution’s mission and budget.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SUSTAINABLE FUNDING & WHO WE WORK WITH */}
      <section className="py-20 lg:py-28 bg-[#F6F1E9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Sustainable Funding */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E8E8] shadow-sm">
            <h2 className="text-3xl font-serif font-semibold text-[#111111] mb-4">
              Sustainable Funding & Revenue Models
            </h2>
            <p className="text-[#54595F] text-base sm:text-lg leading-relaxed mb-6">
              Digital transformation should strengthen sustainability, not
              increase financial burden.
            </p>
            <p className="text-[#2B2B2B] font-medium mb-4">
              Enterprise partners can implement:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-[#54595F]">
              {revenueModelItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#997A43]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#54595F] text-sm sm:text-base border-t border-gray-100 pt-4">
              These models help fund conservation and future digitisation while
              keeping core access open to the public.
            </p>
          </div>

          {/* Who We Work With */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E8E8] shadow-sm">
            <h2 className="text-3xl font-serif font-semibold text-[#111111] mb-4">
              Who We Work With
            </h2>
            <p className="text-[#2B2B2B] font-medium mb-6">
              Enterprise Engagement is designed for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {whoWeWorkWith.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E8E8] text-center capitalize text-sm font-medium text-[#111111]"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[#54595F] text-base sm:text-lg text-center border-t border-gray-100 pt-4">
              Any institution seeking to preserve knowledge while expanding
              access can benefit from this approach.
            </p>
          </div>

          <div className="text-center">
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
