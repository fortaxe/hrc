import { LightWeightCardProps } from "@/lib/types";
import PrimaryButton from "../buttons/primary-button";
import { useRouter } from "next/navigation";

const LightWeightCard = ({ buttonName, buttonLink, img, heading }: LightWeightCardProps) => {
    const router = useRouter();
    return (
        <div 
        onClick={() => router.push(buttonLink)}
        className="flex flex-col sm:w-[275px] py-[30px] sm:p-[30px] bg-[#0E0E0E] rounded-[10px] border border-gray-600/30 sm:h-[305px] justify-center w-full h-full">
            {/* Button at the very top */}
            <div className="mb-4 sm:flex justify-center items-center hidden ">
                <PrimaryButton name={buttonName} onClick={() => router.push(buttonLink)} />
            </div>
            {/* Centered image */}
            <div className="mb-5 flex flex-1 items-center justify-center">
                <img 
                className="sm:size-auto size-[42px] "
                src={img} alt={buttonName} />
            </div>
                <div className="mt-auto text-center sm:flex justify-center items-center hidden">
                    <p className="description">{heading}</p>
                </div>
                <div className="mt-auto text-center flex justify-center items-center sm:hidden">
                    <p className="description text-[12px]!">{buttonName}</p>
                </div>
        </div>
    )
}

export default LightWeightCard;