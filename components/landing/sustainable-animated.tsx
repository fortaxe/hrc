"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  SustainableFirst,
  SustainableSecond,
  SustainableThird,
} from "./sustainable-first";

export const SustainableAnimated = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Array of the three sustainable components
  const sustainableComponents = [
    { component: SustainableFirst, id: "sustainable-first" },
    { component: SustainableSecond, id: "sustainable-second" },
    { component: SustainableThird, id: "sustainable-third" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 640px is the sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Pre-calculate all transforms to ensure consistent hook calls
  const transforms = sustainableComponents.map((_, i) => {
    const cardStart = i / sustainableComponents.length;
    const cardEnd = (i + 1) / sustainableComponents.length;
    
    return useTransform(
      scrollYProgress,
      [cardStart - 0.1, cardStart, cardEnd],
      ["100%", "0%", "0%"]
    );
  });

  if (isMobile) {
    return (
      <div id="sustainable" className="w-full bg-black">
        <div className="w-full mx-auto max-w-[1440px] px-4">
          <div className="space-y-6 pb-[30px]">
            {sustainableComponents.map(({ component: Component, id }, i) => (
              <motion.div key={id} className="w-full">
                <Component />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      id="sustainable"
      className="relative"
      style={{ height: `${sustainableComponents.length * 100}vh` }}
    >
      <section className="w-full h-screen sticky top-0 overflow-hidden bg-black sm:mb-[50px]">
        <div className="w-full mx-auto max-w-[1440px] px-4 sm:px-[30px] h-full flex flex-col">
          <div className="relative flex-1 perspective-1000">
            {sustainableComponents.map(({ component: Component, id }, i) => {
              return (
                <motion.div
                  key={id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    zIndex: i + 1,
                    y: transforms[i],
                  }}
                >
                  <div className="w-full">
                    <Component />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
