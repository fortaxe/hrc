"use client"

import { StyleCompleteCard } from "@/components/landing/complete-card";
import { StylishPreviewCards } from "@/components/ui/stylish-cards";

const Style = () => {
    return (
        <div className="mx-auto max-w-[1440px]">
        <StylishPreviewCards />
        <div className="mt-[30px] sm:mt-[50px]">
        <StyleCompleteCard />
        </div>
        </div>
    )
}

export default Style;