"use client"

import { SmartCard } from "@/components/landing/complete-card";
import { SmartPreviewCards } from "@/components/ui/smart-cards";

const Smart = () => {
  return (
    <div >
     
      <SmartPreviewCards />
      <div className="mt-[30px] sm:mt-[50px]">
      <SmartCard />
      </div>
    </div>
  );
};

export default Smart;
