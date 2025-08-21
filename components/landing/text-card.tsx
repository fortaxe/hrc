import { TextCardProps } from "@/lib/types";

const TextCard = ({ heading, description, secondHeading, secondDescription, thirdHeading, thirdDescription }: TextCardProps) => {
  return (
    <div className="flex flex-col p-[30px] bg-[#181818] rounded-[15px]">
      <div>
        <p className="card-heading text-[#E1251B]!">{heading}</p>
        <p className="description pt-[15px]">
          {description}
        </p>
      </div>
      <div>
        <p className="card-heading pt-[50px]">{secondHeading}</p>
        <p className="description pt-[15px]">
          {secondDescription}
        </p>
      </div>
      <div>
        <p className="card-heading pt-[30px]">{thirdHeading}</p>
        <p className="description pt-[15px]">
          {thirdDescription}
        </p>
      </div>
    </div>
  );
};

export default TextCard;
