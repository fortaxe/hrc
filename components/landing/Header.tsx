"use client";

import React, { useState } from "react";

import { useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navItems = [
    { label: "Sustainable", href: "/#sustainable", id: "/01" },
    { label: "Smart", href: "/#smart", id: "/02" },
    { label: "Stylish", href: "/#stylish", id: "/03" },
    { label: "Munich, Germany", href: "/", id: "/04" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMenuClose = () => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="relative">
      <nav className="py-4 sm:py-[25px] border-gray-200 relative z-50">
        <div className="flex w-full max-w-[1440px] flex-wrap items-center justify-start  mx-auto px-4 md:px-[30px]">
          {/* Mobile layout: Hamburger (left) + Logo (center) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div
              onClick={() => router.push("/")}
              className="flex gap-[6px] sm:gap-2 items-center"
            >
              <img
                src="/logo.svg"
                alt="logo"
                className=" h-[30px] text-white cursor-pointer "
              />
              <span className="text-[14px] sm:text-[20px] font-instrument-italic leading-none group-hover:text-white cursor-pointer">
                Digital Studio USA
              </span>
            </div>

            <p
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[14px] cursor-pointer text-white leading-1 tracking-0 font-instrument-italic"
            >
              Menu
            </p>
          </div>

          {/* Desktop Logo - Left side */}
          <div className="flex items-center gap-[300px]">
            <div
              onClick={() => router.push("/")}
              className="hidden md:flex gap-[6px] sm:gap-2 items-center"
            >
              <img
                src="/logo.svg"
                alt="logo"
                className=" h-[30px] text-white cursor-pointer "
              />
            </div>

            <ul className="hidden md:flex items-center gap-[209px] ">
              {navItems.map(({ label, href, id }) => {
                return (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-start gap-[10px] font-medium py-2"
                    >
                      <span
                        className={`text-[16px] leading-[1] tracking-[0]  text-white`}
                      >
                        {label}
                        <span className={`font-instrument-italic text-white`}>
                          {id}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile Full Screen Menu */}
        <div
          id="mobile-menu"
          className={`${
            isOpen ? "fixed" : "hidden"
          } md:hidden inset-0 z-[100] flex bg-black`}
        >
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={handleMenuClose}
          ></div>

          {/* Sidebar Menu - Prevent scrolling on this container */}
          <div className="w-full bg-black min-h-screen flex flex-col py-4 pt-4 px-4 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <img
                onClick={() => router.push("/")}
                src="/logo2.svg"
                alt="logo"
                className="  h-[30px] text-white cursor-pointer"
              />
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center  text-white rounded-lg z-50"
              >
                <span className="sr-only">Open main menu</span>
                <span className="text-[14px] cursor-pointer text-white leading-1 tracking-0 font-instrument-italic">
                  Go Back
                </span>
              </button>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col flex-1 mt-6 pt-[75px]">
              {/* Navigation Menu */}
              <div className="">
                <ul className=" ">
                  <li className="border-b border-[#303030] -mx-4">
                    <a
                      href="/"
                      className="block font-instrument-italic px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                      onClick={handleMenuClose}
                    >
                      Home
                    </a>
                  </li>

                  {/* Mobile Services Dropdown */}
                  <li className="border-b border-[#303030] -mx-4">
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className="flex  items-center justify-between w-full py-[15px] text-white text-[28px]  leading-none tracking-0 transition-colors px-4"
                    >
                      <span className="font-instrument-italic">Solutions</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-white font-instrument-italic  leading-none tracking-0">
                          Dropdown
                        </span>
                      </div>
                    </button>
                  </li>

                  <li className="border-b border-[#303030] -mx-4">
                    <a
                      href="/#pricing"
                      className="block font-instrument-italic px-4 py-[15px] text-white text-[28px]  leading-none tracking-0 transition-colors"
                      onClick={handleMenuClose}
                    >
                      Pricing
                    </a>
                  </li>

                  <li className="border-b border-[#303030] -mx-4">
                    <a
                      href="/about-us"
                      className="block font-instrument-italic px-4 py-[15px] text-white text-[28px]  leading-none  tracking-0 transition-colors"
                      onClick={handleMenuClose}
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Footer pushed to bottom */}
              <div className="pt-[25px] space-y-[10px] ">
                <div className="rounded-[10px]">
                  <p className="text-[#C2C2C2] text-[12px] mb-1 font-instrument-italic flex items-center  leading-none tracking-0">
                    <img src="/dot1.svg" className="w-[6px] h-[6px] mr-1" />
                    Address
                  </p>
                  <p className="text-white text-[14px]  leading-none tracking-0 pt-[10px]">
                    2499 Peachtree Rd, Atlanta, Georgia
                  </p>
                </div>

                <div className="rounded-[10px]">
                  <p className="text-[#C2C2C2] text-[12px] mb-1 font-instrument-italic flex items-center  leading-none tracking-0">
                    <img src="/dot2.svg" className="w-[6px] h-[6px] mr-1" />
                    Contact
                  </p>
                  <a
                    href="tel:+16782125786"
                    className="hover:underline text-white text-[14px]  leading-none tracking-0 mt-[10px]"
                  >
                    678 212 5786
                  </a>
                </div>

                <div className="rounded-[10px]">
                  <p className="text-[#C2C2C2] text-[12px] mb-1 font-instrument-italic flex items-center  leading-none tracking-0">
                    <img src="/dot3.svg" className="w-[6px] h-[6px] mr-1" />
                    Email
                  </p>
                  <a
                    href="mailto:DigiStudioUSA@gmail.com"
                    className="hover:underline text-white text-[14px]  leading-none tracking-0 mt-[10px]"
                  >
                    DigiStudioUSA@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
