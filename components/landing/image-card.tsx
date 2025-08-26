import { ImageCardProps } from "@/lib/types";

const ImageCard = ({ image }: ImageCardProps) => {
  return <div className=" sm:px-[40px] bg-[#181818] rounded-[10px] sm:rounded-[15px]">
    <img src={image} alt="image-card" className="sm:h-full sm:w-[570px] " />
  </div>;
};

export default ImageCard;