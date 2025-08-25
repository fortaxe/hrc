"use client";

import { motion } from "motion/react";
import React from "react";
import Header from "./Header";

export function Hero() {
  return (
    <div
      data-hero
      className="min-h-screen w-full bg-black relative flex flex-col"
    >
      {/* Crimson Core Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
        }}
      />
      {/* Soft vignette to blend edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
          opacity: 0.95,
        }}
      />
      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Hero Content */}
      <div className=" pt-[65px] sm:pt-[70px] ">
        <div className="flex flex-1 justify-center items-center relative  max-w-[1440px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-4 max-w-[1440px] w-full  text-left px-[16px] sm:px-[30px]"
          >
            <div className="flex justify-between items-end ">
              <div>
                <p className=" block sm:hidden text-[22px] leading-[0.46] tracking-[0] text-white pb-[130px] text-center">
                  Hall B2, Booth E12
                </p>
                <p className="text-[148px] md:text-[120px] xl:text-[230px] leading-[1]  tracking-[-0.03em] text-[#E1251B] -ml-[3px] md:-ml-2 xl:-ml-3 text-left">
                  HRC{" "}
                  <span className="font-instrument-italic text-white leading-[1] text-[57px] md:text-[120px] xl:text-[230px]">
                    at
                  </span>
                </p>
              </div>
              <div>
                <p className=" xl:text-[36px] leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-right ">
                  Hall B2, Booth E12
                </p>
              </div>
            </div>
            <p className="text-[57px] md:text-[120px] xl:text-[230px] leading-[1]  tracking-[-0.03em] text-white -ml-[3px] md:-ml-2 xl:-ml-3 text-left uppercase">
              IAA MOBILITY
            </p>
            <div>
              <div className="flex justify-between">
                <p className=" xl:text-[36px] leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-left ">
                  Press Day : 8 September 2025
                </p>
                <p className=" xl:text-[36px] leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-right ">
                  Industry Days :9-12 September 2025{" "}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
