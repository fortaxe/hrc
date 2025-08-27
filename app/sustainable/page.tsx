"use client"

import React from "react";
import { SustainableAnimated } from "@/components/landing/sustainable-animated";

const Sustainable = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-[30px]">
        <h2 className="text-[30px] md:text-[64px] leading-[34px] sm:leading-[64px] text-white pt-[30px] sm:pt-[50px] sm:pb-[50px]">
          <span className="text-[#E1251B]">Sustainable</span> Ecosystem
          Solutions
        </h2>
      </div>
      <SustainableAnimated />
    </div>
  );
};

export default Sustainable;
