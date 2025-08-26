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
    { label: "Sustainable", href: "/sustainable", id: "/01" },
    { label: "Smart", href: "/smart", id: "/02" },
    { label: "Stylish", href: "/stylish", id: "/03" },
    { label: "Munich, Germany", href: "", id: "/04" },
  ];


  const mobileNavItems = [
    { label: "Sustainable", href: "/sustainable", id: "/01" },
    { label: "Smart", href: "/smart", id: "/02" },
    { label: "Stylish", href: "/stylish", id: "/03" },
   
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
    <header className="relative ">
      <nav className="pt-[25px] sm:pt-[30px] border-gray-200 relative z-50">
        <div className="flex w-full max-w-[1440px] flex-wrap items-center justify-start  mx-auto px-4 md:px-[30px]">
          {/* Mobile layout: Hamburger (left) + Logo (center) */}
          <div className="md:hidden flex items-center justify-end w-full">
            <p
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[14px] cursor-pointer text-white leading-1 tracking-0 font-instrument-italic"
            >
              Menu
            </p>
          </div>

          {/* Desktop Logo - Left side */}
          <div className="flex items-center gap-[50px] xl:gap-[50px] 3xl:gap-[300px]">
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

            <ul className="hidden md:flex items-center gap-[50px] xl:gap-[209px] ">
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
            <div className="flex items-center justify-end w-full">
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

            <div className="pt-[70px]">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-[373px]  h-[150.77px] text-white cursor-pointer"
              />
            </div>
            {/* Content Wrapper */}
            <div className="flex flex-col  pt-[70px]">
              {/* Navigation Menu */}
              <div className="">
                <ul className=" ">
                  {mobileNavItems.map((item) => (
                    <li key={item.label} className="border-b border-[#303030] -mx-4">
                      <a
                        href={item.href}
                        className="block font-instrument-italic px-4 py-[15px] text-white text-[28px] leading-none tracking-0 transition-colors"
                        onClick={handleMenuClose}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 
              The reason the dates and "Munich, Germany" are bottom-aligned is because
              the parent container uses "flex flex-col flex-1", and this block is after the flex-1 grow block.
              So it will always be pushed to the bottom of the sidebar, regardless of mt-[70px].
              mt-[70px] just adds margin-top, but the flex-1 above takes all available space, pushing this block down.
              If you want this block to not be bottom-aligned, remove flex-1 from the above div.
            */}
            <div className="flex items-start flex-col sm:flex-row sm:justify-between gap-5 sm:gap-0 mt-[70px] sm:mt-0">
              <p className="text-[22px]  leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-white   text-left ">
                Munich, Germany
              </p>
              <p className="text-[22px]  leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-[#797979]   text-left ">
                Press Day : 8 September 2025
              </p>
              <p className="text-[22px]   leading-[1] md:leading-[1] font-instrument-italic  tracking-[0] text-[#797979]   text-right ">
                Industry Days :9-12 September 2025{" "}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
