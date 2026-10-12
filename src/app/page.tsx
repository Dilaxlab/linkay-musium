import { Metadata } from "next";
import HomePageContent from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "I3 Patent Models — Verified Historical Patent Models & Digital Ownership",
  description:
    "Explore a curated collection of original patent models, authenticated for provenance and paired with a verified digital ownership record. Hold the physical object, preserve it in insured custody, or explore qualified participation.",
};

export default function RootPage() {
  return <HomePageContent />;
}
