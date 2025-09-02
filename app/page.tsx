import { Hero } from "@/components/landing/hero";
import ContactUs from "@/components/landing/contact-us";
import AboutUs from "@/components/ui/about-us";
import LightWeightCards from "@/components/ui/light-weight-cards";
import CardImage from "@/components/ui/card-image";
import ParallaxText from "@/components/ui/paradox-text";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <div id="about-us">
        <AboutUs />
      </div>

      <LightWeightCards />
      <CardImage />
      <section className="pt-[50px] sm:pt-[140px] sm:not-first:pb-[70px]">
      <ParallaxText baseVelocity={-5}>IAA Mobility 2025 </ParallaxText>
      <ParallaxText baseVelocity={5}>IAA Mobility 2025</ParallaxText>
    </section>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}
