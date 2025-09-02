import { Hero } from "@/components/landing/hero";
import ContactUs from "@/components/landing/contact-us";
import AboutUs from "@/components/ui/about-us";
import LightWeightCards from "@/components/ui/light-weight-cards";
import CardImage from "@/components/ui/card-image";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <div id="about-us">
        <AboutUs />
      </div>

      <LightWeightCards />
      <CardImage />
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}
