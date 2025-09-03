import { LightWeightCardProps } from "@/lib/types";
import PrimaryButton from "../buttons/primary-button";
import { useRouter } from "next/navigation";

const LightWeightCard = ({
  buttonName,
  buttonLink,
  img,
  heading,
}: LightWeightCardProps) => {
  const router = useRouter();
  return (
    <>
      {/* Desktop Layout */}
      <div
        onClick={() => router.push(buttonLink)}
        className="hidden sm:flex flex-col w-[275px] p-[30px] bg-[#0E0E0E] rounded-[10px] border border-gray-600/30 h-[305px] justify-center cursor-pointer"
      >
        {/* Button at the very top */}
        <div className="mb-4 flex justify-center items-center">
          <PrimaryButton
            name={buttonName}
            onClick={() => router.push(buttonLink)}
          />
        </div>
        {/* Centered image */}
        <div className="mb-5 flex flex-1 items-center justify-center">
          <img className="size-[60px]" src={img} alt={buttonName} />
        </div>
        <div className="mt-auto text-center flex justify-center items-center">
          <p className="description">{heading}</p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        onClick={() => router.push(buttonLink)}
        className="flex sm:hidden items-center justify-between w-full pr-4 bg-[#0E0E0E] rounded-[10px] border border-gray-600/30 cursor-pointer"
      >
        {/* Left side - Icon */}
        <div className="flex items-center justify-center size-[72px] bg-[#1A1A1A] rounded-tl-[10px]
        rounded-bl-[10px]">
          <img 
          className="size-[24px]" 
          src={img} alt={buttonName} />
        </div>
        
        {/* Center - Text content */}
        <div className="flex-1 ml-4">
          <h3 className="text-white text-[16px]  leading-[20px] mb-1">{buttonName}</h3>
          <p className="text-gray-400 text-[14px] leading-[18px]">{heading}</p>
        </div>
        
        {/* Right side - Arrow */}
        <div className="flex items-center justify-center w-[32px] h-[32px]">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default LightWeightCard;
