"use client";

import PrimaryButton from "../buttons/primary-button";
import { useEffect, useState } from "react";

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { label: "Sustainable", href: "/", id: "/01", targetId: "sustainable" },
    { label: "Smart", href: "/", id: "/02", targetId: "smart" },
    { label: "Stylish", href: "/", id: "/03", targetId: "stylish" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height to determine when nav should become sticky
      const heroSection = document.querySelector('[data-hero]');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsSticky(heroBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 120; // Approximate height of sticky nav + padding
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`py-[30px] border-b border-[#A2A2A2] transition-all duration-300 ${
      isSticky 
        ? 'fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md' 
        : 'relative'
    }`}>
      <div className="mx-auto max-w-[1440px] px-[30px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="description-text text-white">
                What's on Display*
              </p>
            </div>
            <div className="flex items-center gap-4">
              {navItems.map((item, index) => (
                <PrimaryButton
                  key={index}
                  name={item.label}
                  number={item.id}
                  onClick={() => scrollToSection(item.targetId)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
