import Header from "@/components/landing/Header";
import React from "react";
import {
  SustainableFirst,
  SustainableSecond,
  SustainableThird,
} from "@/components/landing/sustainable-first";

const Sustainable = () => {
  return (
    <div>
      <Header />
      <div className=" max-w-[1440px] mx-auto px-4 sm:px-[30px]">
        <h2 className="text-[30px] md:text-[64px] leading-[34px] sm:leading-[64px] text-white pt-[50px]">
          <span className="text-[#E1251B]">Sustainable</span> Ecosystem
          Solutions
        </h2>
        <SustainableFirst />
        <SustainableSecond />
        <SustainableThird />
      </div>
    </div>
  );
};

export default Sustainable;
