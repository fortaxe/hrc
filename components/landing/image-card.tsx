import { ImageCardProps } from "@/lib/types";

const ImageCard = ({ image }: ImageCardProps) => {
  return <div className=" px-[30px] bg-[#181818] rounded-[15px]">
    <img src={image} alt="image-card" />
  </div>;
};

export default ImageCard;