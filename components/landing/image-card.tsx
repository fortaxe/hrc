import { ImageCardProps } from "@/lib/types";

const ImageCard = ({ image }: ImageCardProps) => {
  return <div className=" sm:px-[40px] bg-[#181818] rounded-[10px] sm:rounded-[15px]">
    <img src={image} alt="image-card" className="h-[530px] w-full object-contain" />
  </div>;
};

export default ImageCard;