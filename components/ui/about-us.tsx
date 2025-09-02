"use client"


import React from "react";
import PrimaryButton from "../buttons/primary-button";
import { useRouter } from "next/navigation";


const AboutUs = () => {
  const router = useRouter();
 
  return (
    <div className="flex flex-col items-center justify-center py-[50px] sm:py-[70px] mx-auto max-w-[1440px] px-4 sm:px-[30px] gap-[30px]">
      <img src="/logo.svg" />
      <p className="description max-w-[716px] text-center">
        HRC Group is one of the world’s leading composite solution providers.
        From R&D and engineering to tooling, mass production, and recycling, we
        deliver advanced carbon fiber solutions that drive sustainable,
        lightweight, and high-performance mobility.
      </p>

      <PrimaryButton
        name="Contact us"
        onClick={() => router.push("/#contact")}
      />

      <img 
        src="/hrc.png"
        alt="about-us"
        className="rounded-[10px] sm:rounded-[15px]"
      />
    </div>
  );
};

export default AboutUs;
