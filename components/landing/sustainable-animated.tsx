"use client";

import { motion } from "framer-motion";
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
    { component: SustainableThird, id: "sustainable-third" },
    { component: SustainableSecond, id: "sustainable-second" },

  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 640px is the sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



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
    <div id="sustainable" className="w-full bg-black">
      <div className="w-full mx-auto max-w-[1440px] px-4 sm:px-[30px]">
        <div className="space-y-6 ">
          {sustainableComponents.map(({ component: Component, id }, i) => (
            <div key={id} className="w-full">
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
