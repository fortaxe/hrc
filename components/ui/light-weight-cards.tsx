"use client";

import LightWeightCard from "./light-weight-card";
import { lightWeightCards } from "@/lib/data";

const LightWeightCards = () => {
    return (
        <div className="w-full mx-auto max-w-[1440px] px-4 sm:px-[30px] sm:mb-[50px]">
            <div className="text-center mb-[30px]  ">
                <h1 className="text-[30px] leading-[34px] text-white  mb-4 sm:mb-[30px] ">
                    Booth Highlights
                </h1>
                <p className="description max-w-[842px] mx-auto mb-[30px] sm:mb-[50px]">
                Discover innovative carbon fiber components designed for performance, efficiency, and sustainability.
                </p>
            </div>
            
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-8">
                {lightWeightCards.map((card, index) => (
                    <LightWeightCard
                        key={card.buttonName}
                        buttonName={card.buttonName}
                        buttonLink={card.buttonLink}
                        img={card.img}
                        heading={card.heading}
                    />
                ))}
            </div>
        </div>
    );
};

export default LightWeightCards;
