"use client";

import TextCard from "./text-card";
import ImageCard from "./image-card";
import { smartCards, styleCards } from "@/lib/data";
import { SmartCardProps } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const SmartCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 640px is the sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div id="smart" className="w-full bg-black">
        <div className="w-full mx-auto max-w-[1440px] px-4">
          {/* <div className="py-[30px]">
            <h2 className="text-[30px] leading-[34px] text-white">
              <span className="text-[#E1251B]">Smart</span> Innovations in
              Lightweighting
            </h2>
          </div> */}

          <div className="space-y-6 pb-[30px]">
            {smartCards.map((card: SmartCardProps, i: number) => (
              <motion.div className="bg-[#0E0E0E] p-4 rounded-[10px] flex flex-col gap-4 ">
                <div className="flex ">
                  <TextCard {...card} />
                </div>
                <div className="flex">
                  <ImageCard image={card.img} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="smart" className="w-full bg-black">
      <div className="w-full mx-auto max-w-[1440px] px-4 sm:px-[30px] ">
        {/* <div className="py-[30px] sm:py-[50px]">
          <h2 className="text-[30px] md:text-[64px] leading-[34px] sm:leading-[64px] text-white">
            <span className="text-[#E1251B]">Smart</span> Innovations in
            Lightweighting
          </h2>
        </div> */}

        <div className="space-y-6 pb-[30px] sm:pb-[50px]">
          {smartCards.map((card: SmartCardProps, i: number) => (
            <div
              key={i}
              className="bg-[#0E0E0E] p-4 sm:p-[30px] rounded-[10px] sm:rounded-[15px] flex flex-col lg:flex-row gap-4 sm:gap-[30px]"
            >
              <div className="lg:w-[50%] flex">
                <TextCard {...card} />
              </div>
              <div className="lg:w-[50%] flex">
                <ImageCard image={card.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StyleCompleteCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 640px is the sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div id="smart" className="w-full bg-black">
        <div className="w-full px-4">
          {/* <div className="py-[30px]">
            <h2 className="text-[30px] leading-[34px] text-white">
              <span className="text-[#E1251B]">Stylish</span> Composites
              Excellence
            </h2>
          </div> */}

          <div className="space-y-6 pb-[30px]">
            {styleCards.map((card: SmartCardProps, i: number) => (
              <motion.div className="bg-[#0E0E0E] p-4 rounded-[10px] flex flex-col gap-4">
                <div className="flex">
                  <TextCard {...card} />
                </div>
                <div className="flex">
                  <ImageCard image={card.img} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="stylish" className="w-full bg-black">
      <div className="w-full  px-4 sm:px-[30px]">
        {/* <div className="py-[30px] sm:py-[50px]">
          <h2 className="text-[30px] md:text-[64px] leading-[34px] sm:leading-[64px] text-white">
            <span className="text-[#E1251B]">Stylish</span> Composites
            Excellence
          </h2>
        </div> */}

        <div className="space-y-6 pb-[30px] sm:pb-[50px]">
          {styleCards.map((card: SmartCardProps, i: number) => (
            <div
              key={i}
              className="bg-[#0E0E0E] p-4 sm:p-[30px] rounded-[10px] sm:rounded-[15px] flex flex-col lg:flex-row gap-4 sm:gap-[30px]"
            >
              <div className="lg:w-[50%] flex">
                <TextCard {...card} />
              </div>
              <div className="lg:w-[50%] flex">
                <ImageCard image={card.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//   <div
//   ref={sectionRef}
//   id="smart"
//   className="relative"
//   style={{ height: `${smartCards.length * 100}vh` }}
// >
//   <section className="w-full h-screen sticky top-0 overflow-hidden bg-black sm:mb-[50px]">
//     <div className="w-full  px-4 sm:px-[30px] h-full flex flex-col">
//       <motion.div
//         className="py-[30px] sm:py-[50px]"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <h2 className="text-[30px] md:text-[64px] leading-[34px] sm:leading-[64px] text-white ">
//          <span className="text-[#E1251B]">Smart</span> Innovations in Lightweighting
//         </h2>
//       </motion.div>

//       <div className="relative flex-1 perspective-1000">
//         {smartCards.map((card: SmartCardProps, i: number) => {
//           return (
//             <motion.div
//               key={i}
//               className="absolute inset-0 bg-[#0E0E0E] p-4 sm:p-[30px] rounded-[10px] sm:rounded-[15px] flex flex-col lg:flex-row gap-4 sm:gap-[30px]"
//               style={{
//                 zIndex: i + 1,
//                 y: transforms[i],
//               }}
//             >
//               <div className="lg:w-[50%] flex">
//                 <TextCard {...card} />
//               </div>
//               <div className="lg:w-[50%] flex">
//                 <ImageCard image={card.img} />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   </section>
// </div>
