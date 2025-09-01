import { TextCardProps } from "@/lib/types";

const TextCard = ({
  heading,
  description,
  secondHeading,
  secondDescription,
  thirdHeading,
  thirdDescription,
  firstHeading,
  firstDescription,
}: TextCardProps) => {
  return (
    <div className="flex flex-col p-4 sm:p-[30px] bg-[#181818] rounded-[10px] sm:rounded-[15px] w-full">
      
      <div>
        <p className="text-[#E1251B] text-[18px] sm:text-[24px] leading-[1] tracking-[0em] font-semibold">{heading}</p>
        {description && (
          <p className="description pt-[15px] sm:pt-[25px]">{description}</p>
        )}
      </div>
     
      {firstHeading && firstDescription && (
        <div className="pt-[20px] sm:pt-[30px]">
          <p className="text-[16px] sm:text-[16px] leading-[1] tracking-[0em] text-[#F6F6EB]">{firstHeading}</p>
          <p className="description pt-[15px]">{firstDescription}</p>
        </div>
      )}
 
      {secondHeading && secondDescription && (
        <div className="pt-[20px] sm:pt-[30px]">
          <p className="text-[16px] sm:text-[16px] leading-[1] tracking-[0em] text-[#F6F6EB]">{secondHeading}</p>
          <p className="description pt-[15px]">{secondDescription}</p>
        </div>
      )}
     
      {thirdHeading && thirdDescription && (
        <div className="pt-[20px] sm:pt-[30px]">
          <p className="text-[16px] sm:text-[16px] leading-[1] tracking-[0em] text-[#F6F6EB]">{thirdHeading}</p>
          <p className="description pt-[15px]">{thirdDescription}</p>
        </div>
      )}
    </div>
  );
};

export default TextCard;
