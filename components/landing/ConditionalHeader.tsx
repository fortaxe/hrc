"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";

const ConditionalHeader = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Ensure this only runs on the client after hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything during SSR/hydration to prevent mismatch
  if (!mounted) {
    return <div className="h-[95px] sm:h-[90px]" />; // Placeholder to maintain layout
  }
  
  // Don't render header on home page (it's handled by Hero component)
  if (pathname === "/") {
    return <div className="h-0" />; // Placeholder to maintain layout
  }
  
  // Render header for all other pages with fixed positioning
  return (
    <div className=" z-50 bg-black">
      <Header />
    </div>
  );
};

export default ConditionalHeader;
