
import { Hero } from "@/components/landing/hero";
import StickyNav from "@/components/ui/sticky-nav";
import { SustainableCompleteCard, SmartCard, StyleCompleteCard } from "@/components/landing/complete-card";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <StickyNav />
      <div className="bg-black">
        <SustainableCompleteCard />
        <SmartCard />
        <StyleCompleteCard />
      </div>
    </div>
  );
}
