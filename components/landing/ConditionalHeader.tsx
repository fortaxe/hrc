"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const ConditionalHeader = () => {
  const pathname = usePathname();
  
  // Don't render header on home page (it's handled by Hero component)
  if (pathname === "/") {
    return null;
  }
  
  // Render header for all other pages
  return <Header />;
};

export default ConditionalHeader;
