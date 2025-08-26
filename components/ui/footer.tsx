
import Link from "next/link";
import { firstColumn, secondColumn, socialMedia } from "@/lib/data";


const Footer = () => {
  return (
    <footer className="bg-[#383737] text-[#F6F6EB] ">
      {/* Upper Section */}
      <div className="container p-4 sm:px-[30px] sm:pb-[111px] pb-[36px] sm:pt-[33px] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0 pb-[50px] sm:pb-0">
            <img src="/logo.svg" alt="HRC" className="w-[180px] h-[80px] sm:w-[250px] sm:h-[110px] md:w-[383px] md:h-[167.73px] " />
          </div>


          {/* Navigation Links */}
          <div className="flex flex-wrap gap-[50px] sm:gap-[100px]">
            {/* First Column */}
            <div className="space-y-3 ">
               {firstColumn.map((item) => (
                <Link
                className="block text-[#F6F6EB]! description hover:text-white transition-colors"
                href={item.link} key={item.title}>
                    {item.title}
                </Link>
               ))}
            </div>
            
            {/* Second Column */}
            <div className="ml-[50px] sm:ml-0 space-y-3">
              {secondColumn.map((item) => (
                <Link       
                className="block text-[#F6F6EB]! description hover:text-white transition-colors"
                href={item.link} key={item.title}>
                    {item.title}
                </Link>
              ))}
              
            </div>

            <div className="flex-shrink-0">
            <h3 className="text-[#F6F6EB]! sm:mb-5 mb-4 description">Follow Us</h3>
            <div className="flex space-x-2">
              {socialMedia.map((item) => (
                <Link 
                className=""
              href={item.link} >
                <img src={item.src} alt="social"  />
              </Link>
              ))}
            </div>
          </div>
          </div>

          {/* Social Media Section */}
         
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-[#4C4B4B] hidden sm:block"></div>

      {/* Lower Section - Copyright */}
      <div className="pb-[45px] sm:pb-0 container sm:px-[30px] px-4  max-w-[1440px] mx-auto">
        <div className="text-[14px] leading-[1] tracking-[0em] text-[#F6F6EB]! sm:py-4">
          Copyright © 2025 HRC All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
