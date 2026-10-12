import { Metadata } from "next";
import HomePageContent from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "Home – Museum Development",
  description:
    "A patent-backed digital system transforming historic inventions and sites into immersive, globally accessible experiences, while protecting original physical assets.",
};

export default function HomePage() {
  return <HomePageContent />;
}
