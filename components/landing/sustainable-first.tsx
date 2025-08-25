const SustainableFirst = () => {
  return (
    <div className="bg-[#0E0E0E] max-w-[1440px] mx-auto ">
      <div className="flex flex-row items-center justify-center p-[30px] rounded-[15px] gap-[30px]">
        {/* first column */}
        <div className="flex flex-col w-[1/3] ">
          <p className="text-[30px] leading-[34px] tracking-[0] text-white ">
            Ecological System of Recyclable Composite Material
          </p>
          <div className="description py-[30px]">
            HRC utilizes patented recycling technologies to transform carbon
            fiber scrap into recycled carbon fiber (rCF). Through advanced
            thermoplastic processes, this rCF is then converted into
            cost-effective and eco-friendly automotive components.
          </div>
          <div className="flex flex-col gap-[15px] bg-[#181818] p-[20px] rounded-[15px]">
            <p className="text-[52px] tracking-[0] text-[#E1251B]">4.7%</p>
            <p className="description">
              The carbon emissions of recycled materials compared to new
              materials
            </p>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#181818] p-[20px] rounded-[15px] mt-[15px]">
            <p className="text-[52px] tracking-[0] text-[#E1251B]">95%</p>
            <p className="description">
              Retention of mechanical properties in recycled fibers after resin
              removal and cracking
            </p>
          </div>
        </div>

        {/* second column */}
        <div className="flex flex-col w-[1/3]">
          <p className="text-[30px] text-white leading-[1] tracking-[0]">
            HRC's "Waste-To-Product"
          </p>

          <p className="text-[24px]  text-[#E1251B] leading-[1] tracking-[0] py-[30px]">
          rCF Intermediate Material 
          </p>

          <div className="px-[40px] pt-[40px]  pb-[30px] flex flex-col items-center justify-center bg-[#181818] rounded-[15px]">
            <img src="/smart/1.png" alt="sustainable-first" />
            <p className="description">Non-woven fabric / TP felt</p>
          </div>
        </div>

        {/* third column */}
        <div className="flex flex-col w-[1/3]">
         

          <div className="px-[40px] pt-[40px]  pb-[30px] flex flex-col items-center justify-center ">
            <img src="/smart/1.png" alt="sustainable-first" />
            <p className="description">Non-woven fabric / TP felt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableFirst;
