"use client";

import { motion } from "motion/react";
import React from "react";
import Header from "./Header";
import { useRouter } from "next/navigation";
import PrimaryButton from "../buttons/primary-button";

export function Hero() {
  const router = useRouter();
  return (
    <div
      data-hero
      className="h-[800px] sm:h-screen w-full bg-black relative flex flex-col"
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
      <div className="flex flex-1 pt-[50px] md:pt-0 justify-center items-center w-full max-w-[1440px] mx-auto relative grow">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col  max-w-[1440px] w-full text-center px-[16px] sm:px-[30px]"
        >
          <div className="flex flex-col items-center max-w-[998px] mx-auto justify-center text-center">
            <div>
            
              <p className="text-[52px] md:text-[76px]  tracking-[-0.03em] leading-[52px] md:leading-[70px] text-white text-center">
              <span className="text-[#E1251B]">HRC</span> at IAA Mobility 2025 – Hall B2, Booth E12
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center sm:py-[30px] py-[20px]   text-center">
              <p className="text-[24px] xl:text-[30px] leading-[26px] md:leading-[1] font-instrument-italic tracking-[0] text-[#bcbcbc] text-center">
                
                <span className="">Advancing</span> Mobility Toward a Greener <span className="">Future</span> with Composite Innovation
              </p>
            </div>
            <PrimaryButton
            name="About us"
            onClick={() => router.push("/#about-us")}
            />
            {/* <p className="description">
              HRC Group is one of the world’s leading composite solution providers. From R&D and engineering to tooling, mass production, and recycling, we deliver advanced carbon fiber solutions that drive sustainable, lightweight, and high-performance mobility.
            </p> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// export function Hero() {
//   return (
//     <div
//       data-hero
//       className="h-[800px] sm:h-screen w-full bg-black relative flex flex-col"
//     >
//       {/* Crimson Core Glow */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background:
//             "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
//         }}
//       />
//       {/* Soft vignette to blend edges */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
//           opacity: 0.95,
//         }}
//       />
//       {/* Header */}
//       <div className="relative z-10">
//         <Header />
//       </div>

//       {/* Hero Content */}
//       <div className="flex flex-1 justify-center items-center w-full max-w-[1440px] mx-auto relative grow">
//         <motion.div
//           initial={{ opacity: 0.0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="flex flex-col gap-5 sm:gap-[15px] max-w-[1440px] w-full text-left px-[16px] sm:px-[30px]"
//         >
//           <div className="flex justify-between items-end ">
//             <div>
//               <p className="font-instrument-italic block sm:hidden text-[22px] leading-[0.46] tracking-[0] text-white pb-[130px] text-center">
//                 Hall B2, Booth E12
//               </p>
//               <p className="text-[148px] md:text-[120px] xl:text-[230px] sm:-ml-[13px] md:-ml-[21px] tracking-[-0.03em] text-[#E1251B] sm:text-left text-center leading-[106px] md:leading-[170px]">
//                 HRC
//                 <span className="font-instrument-italic text-white text-[57px] md:text-[120px] xl:text-[230px] ml-2 sm:ml-5 leading-[42px] md:leading-[170px] ">
//                   at
//                 </span>
//               </p>
//             </div>
//             <div>
//               <p className="hidden sm:block xl:text-[30px] leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-right ">
//                 Hall B2, Booth E12
//               </p>
//             </div>
//           </div>
//           <p className="text-[55px] mobile:text-[57px] md:text-[120px] xl:text-[230px] leading-[42px] md:leading-[170px]  tracking-[-0.03em] text-white  sm:text-left uppercase md:-ml-[21px] text-center">
//             IAA MOBILITY
//           </p>
//           <div>
//             <div className="flex items-center flex-col sm:flex-row sm:justify-between gap-5 sm:gap-0 mt-[130px] sm:mt-0">
//               <p className="text-[22px] xl:text-[30px] leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-left ">
//                 Press Day : 8 September 2025
//               </p>
//               <p className="text-[22px]  xl:text-[30px] leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-right ">
//                 Industry Days :9-12 September 2025{" "}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
