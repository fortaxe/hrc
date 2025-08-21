"use client";

import TextCard from "./text-card";
import ImageCard from "./image-card";
import { smartCards ,styleCards} from "@/lib/data";
import { SmartCardProps } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const SustainableCompleteCard = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    });

    return (
      <div 
        ref={sectionRef} 
        id="sustainable"
        className="relative" 
        style={{ height: `${smartCards.length * 100}vh` }}
      >
        <section className="w-full h-screen sticky top-0 overflow-hidden bg-black">
          <div className="w-full mx-auto max-w-[1440px] px-[30px] h-full flex flex-col">
            <motion.div
              className="py-[50px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[64px] leading-[64px] text-white pb-[50px]">
                Sustainable Ecosystem Solutions   
              </h2>
            </motion.div>

            <div className="relative flex-1 perspective-1000">
              {smartCards.map((card: SmartCardProps, i: number) => {
                const cardStart = i / smartCards.length;
                const cardEnd = (i + 1) / smartCards.length;
                
                const opacity = useTransform(
                  scrollYProgress,
                  [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                  [0, 1, 1, 0]
                );
                
                const y = useTransform(
                  scrollYProgress,
                  [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                  [100, 0, 0, -100]
                );
                
                const scale = useTransform(
                  scrollYProgress,
                  [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                  [0.8, 1, 1, 0.8]
                );
                
                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 bg-[#0E0E0E] p-[30px] rounded-[15px] flex flex-row gap-[30px] shadow-xl"
                    style={{
                      zIndex: i + 1,
                      opacity,
                      y,
                      scale,
                    }}
                    whileHover={{ 
                     
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="w-[50%] flex">
                      <TextCard
                        heading={card.heading}
                        description={card.description}
                        secondHeading={card.secondHeading}
                        secondDescription={card.secondDescription}
                        thirdHeading={card.thirdHeading}
                        thirdDescription={card.thirdDescription}
                      />
                    </div>
                    <div className="w-[50%] flex">
                      <ImageCard image="/smart/1.png" />
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

export const SmartCard = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    });

    return (
      <div 
        ref={sectionRef} 
        id="smart"
        className="relative" 
        style={{ height: `${smartCards.length * 100}vh` }}
      >
        <section className="w-full h-screen sticky top-0 overflow-hidden bg-black">
          <div className="w-full mx-auto max-w-[1440px] px-[30px] h-full flex flex-col">
            <motion.div
              className="py-[50px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-[64px] leading-[64px] text-white pb-[50px]">
                Smart Innovations in Lightweighting        
              </h2>
            </motion.div>

            <div className="relative flex-1 perspective-1000">
              {smartCards.map((card: SmartCardProps, i: number) => {
                const cardStart = i / smartCards.length;
                const cardEnd = (i + 1) / smartCards.length;
                
                const opacity = useTransform(
                  scrollYProgress,
                  [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                  [0, 1, 1, 0]
                );
                
                const y = useTransform(
                  scrollYProgress,
                  [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                  [100, 0, 0, -100]
                );
                
                const scale = useTransform(
                  scrollYProgress,
                  [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                  [0.8, 1, 1, 0.8]
                );
                
                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 bg-[#0E0E0E] p-[30px] rounded-[15px] flex flex-row gap-[30px] shadow-xl"
                    style={{
                      zIndex: i + 1,
                      opacity,
                      y,
                      scale,
                    }}
                    whileHover={{ 
                     
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="w-[50%] flex">
                      <TextCard
                        heading={card.heading}
                        description={card.description}
                        secondHeading={card.secondHeading}
                        secondDescription={card.secondDescription}
                        thirdHeading={card.thirdHeading}
                        thirdDescription={card.thirdDescription}
                      />
                    </div>
                    <div className="w-[50%] flex">
                      <ImageCard image="/smart/1.png" />
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

export const StyleCompleteCard = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    });

    return (
        <div 
          ref={sectionRef} 
          id="stylish"
          className="relative" 
          style={{ height: `${styleCards.length * 100}vh` }}
        >
          <section className="w-full h-screen sticky top-0 overflow-hidden bg-black">
            <div className="w-full mx-auto max-w-[1440px] px-[30px] h-full flex flex-col">
              <motion.div
                className="py-[50px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-[64px] leading-[64px] text-white pb-[50px]">
                  Stylish Composites Excellence
                </h2>
              </motion.div>
        
              <div className="relative flex-1 perspective-1000">
                {styleCards.map((card: SmartCardProps, i: number) => {
                  const cardStart = i / styleCards.length;
                  const cardEnd = (i + 1) / styleCards.length;
                  
                  const opacity = useTransform(
                    scrollYProgress,
                    [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                    [0, 1, 1, 0]
                  );
                  
                  const y = useTransform(
                    scrollYProgress,
                    [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                    [100, 0, 0, -100]
                  );
                  
                  const scale = useTransform(
                    scrollYProgress,
                    [cardStart - 0.1, cardStart, cardEnd, cardEnd + 0.1],
                    [0.8, 1, 1, 0.8]
                  );
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 bg-[#0E0E0E] p-[30px] rounded-[15px] flex flex-row gap-[30px] shadow-xl"
                      style={{
                        zIndex: i + 1,
                        opacity,
                        y,
                        scale,
                      }}
                      whileHover={{ 
                       
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <div className="w-[50%] flex">
                        <TextCard
                          heading={card.heading}
                          description={card.description}
                          secondHeading={card.secondHeading}
                          secondDescription={card.secondDescription}
                          thirdHeading={card.thirdHeading}
                          thirdDescription={card.thirdDescription}
                        />
                      </div>
                      <div className="w-[50%] flex">
                        {/* same image for all */}
                        <ImageCard image="/smart/1.png" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      );
}




