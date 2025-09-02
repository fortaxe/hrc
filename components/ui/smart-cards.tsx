import { PreviewImageCard } from "./second-image-card";
import { smartCards } from "@/lib/data";


export const SmartPreviewCards = () => {
    return (
      <div className="w-full mx-auto max-w-[1440px] px-4 sm:px-[30px]">
          <div className="py-[30px] sm:py-[50px]">
          <h2 className="text-[30px] md:text-[64px] leading-[34px] sm:leading-[64px] text-white">
            <span className="text-[#E1251B]">Smart</span>  Innovations in Lightweighting
          </h2>
        </div>
        <div className="bg-[#0E0E0E] rounded-[10px] sm:rounded-[15px] px-4 sm:px-[30px]">
          
          <div className="sm:pb-[30px] pb-4">
            <p className="leading-[1] tracking-[0] text-[24px] text-[#E1251B] sm:pt-[30px]   pt-5 pb-5">
              End Products
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 justify-center    gap-5 sm:gap-[30px]">
              {smartCards.map((card) => (
                <PreviewImageCard
                  key={card.heading}
                  image={card.img}
                  description={card.heading}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };