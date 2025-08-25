
import { Hero } from "@/components/landing/hero";
import StickyNav from "@/components/ui/sticky-nav";
import { SustainableCompleteCard, SmartCard, StyleCompleteCard } from "@/components/landing/complete-card";
import SustainableFirst from "@/components/landing/sustainable-first";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      {/* <StickyNav /> */}
      <SustainableFirst />
      {/* <div className="bg-black">
        <div id="sustainable">
       
        </div>
        <div id="smart">
          <SmartCard />
        </div>
        <div id="stylish">
          <StyleCompleteCard />
        </div>
      </div> */}
    </div>
  );
}
