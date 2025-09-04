import SecondImageCard from "../ui/second-image-card";
import { SustainableImageCard } from "../ui/second-image-card";

export const SustainableFirst = () => {
  return (
    <div className="my-[30px] sm:my-[50px] ">
      <div className="bg-[#0E0E0E] rounded-[10px] sm:rounded-[15px] p-4 sm:p-[30px]">
        <p className="text-[24px] md:text-[30px] leading-[26px] md:leading-[34px] tracking-[0] text-white ">
          Ecological System of Recyclable Composite Material
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-end gap-4 md:gap-[30px]">
          {/* first column */}
          <div className="flex flex-col lg:w-1/3">
            <div className="description py-[20px] sm:py-[30px]">
              HRC utilizes patented recycling technologies to transform carbon
              fiber scrap into recycled carbon fiber (rCF). Through advanced
              thermoplastic processes, this rCF is then converted into
              cost-effective and eco-friendly automotive components.
            </div>
            <div className="flex flex-col gap-[15px] bg-[#181818] p-[20px] rounded-[10px] sm:rounded-[15px]">
              <p className="text-[52px] tracking-[0] text-[#E1251B]">4.7%</p>
              <p className="description">
                The carbon emissions of recycled materials compared to new
                materials
              </p>
            </div>
            <div className="flex flex-col gap-[15px] bg-[#181818] p-[20px] rounded-[10px] sm:rounded-[15px] mt-[15px]">
              <p className="text-[52px] tracking-[0] text-[#E1251B]">95%</p>
              <p className="description">
                Retention of mechanical properties in recycled fibers after
                resin removal and cracking
              </p>
            </div>
          </div>

          {/* second column */}
          <div className="sm:flex flex-col lg:w-1/3  hidden ">
            <p className="text-[24px] md:text-[30px] text-white leading-[1] tracking-[0] pt-5 sm:pt-0">
              HRC's "Waste-To-Product"
            </p>

            <p className="text-[18px] md:text-[24px]  text-[#E1251B] leading-[1] tracking-[0] py-[20px] sm:py-[30px]">
              rCF Intermediate Material
            </p>

            <SustainableImageCard
              image="/sustainable/Non woven fabric (1).png"
              description="Non-woven fabric / TP felt"
            />            
          </div>

          {/* third column */}
          <div className="sm:flex flex-col lg:w-1/3 rounded-[10px] sm:rounded-[15px] bg-[#181818] hidden">
            <SustainableImageCard
              image="/sustainable/injection.png"
              description="Injection molding pellets"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SustainableSecond = () => {
  return (
    <div className="bg-[#0E0E0E] rounded-[10px] sm:rounded-[15px] mb-[30px] sm:mb-[50px]">
      <div className="sm:pb-[30px] pb-4 px-4 sm:px-[30px]">
        <p className="leading-[1] tracking-[0] text-[24px] text-[#E1251B] sm:pt-[50px] sm:pb-[80px]  pt-5 pb-5">
          End Products
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center    gap-5 sm:gap-[30px]">
          <SecondImageCard
            image="/sustainable/fender-decor.png"
            description="Fender decoration panel"
          />
          <SecondImageCard
            image="/sustainable/Fender (1).png"
            description="Fender"
          />
          <SecondImageCard
            image="/sustainable/shift-lever.png"
            description="Shift lever decorative panel plastic part"
          />
          <SecondImageCard
            image="/sustainable/front-bumper.png"
            description="Front bumper left lower air curtain plastic part"
          />
          <SecondImageCard
            image="/sustainable/Backrest upper rear decorative cover plastic part (2).png"
            description="Backrest upper rear decorative cover plastic part
"
          />
          <SecondImageCard
            image="/sustainable/automotive.png"
            description="Automotive underbody panel
"
          />
        </div>
      </div>
    </div>
  );
};

export const SustainableThird = () => {
  return (
    <div className="bg-[#0E0E0E] rounded-[10px] sm:rounded-[15px] sm:hidden  gap-4 p-4 flex flex-col">
    <div className="flex flex-col lg:w-1/3 sm:hidden ">
    <p className="text-[24px] md:text-[30px] text-white leading-[1] tracking-[0]  sm:pt-0">
      HRC's "Waste-To-Product"
    </p>

    <p className="text-[18px] md:text-[24px]  text-[#E1251B] leading-[1] tracking-[0] pt-[20px]  sm:pt-0 pb-[20px] sm:pb-0
    sm:py-[30px]">
      rCF Intermediate Material
    </p>

    <SustainableImageCard
      image="/sustainable/Non woven fabric (1).png"
      description="Non-woven fabric / TP felt"
    />            
  </div>

  {/* third column */}
  <div className="flex flex-col lg:w-1/3 rounded-[10px] sm:rounded-[15px] bg-[#181818] ">
    <SustainableImageCard
      image="/sustainable/injection.png"
      description="Injection molding pellets"
    />
  </div>
</div>
  )
  
}