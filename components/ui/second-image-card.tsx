const SecondImageCard = ({image , description}: {image: string, description: string}) => {
    return (
        <div className="sm:px-[40px] sm:pt-[40px]  sm:pb-[30px] px-4 py-4 flex flex-col items-center justify-center bg-[#181818] rounded-[15px] mt-auto">
        <img src={image} alt="sustainable-first" />
        <p className="description mt-[10px] sm:mt-[25px] text-[#F6F6EB]!">
          {description}
        </p>
      </div>
    )
}

export const SustainableImageCard = ({image , description}: {image: string, description: string}) => {
  return (
      <div className="sm:px-[40px] sm:pt-[40px] sm:pb-[30px] px-4 py-4 flex flex-col items-center justify-center bg-[#181818] rounded-[15px] h-full w-full">
      <img src={image} alt="sustainable-first" className="flex-shrink-0 sm:object-contain sm:w-[250px]" />
      <p className="description mt-[10px] sm:mt-[25px] text-[#F6F6EB]! text-center">
        {description}
      </p>
    </div>
  )
}

export default SecondImageCard;
