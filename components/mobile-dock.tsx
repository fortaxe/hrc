"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";

const MobileDock = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Sustainable", href: "/sustainable" },
    { label: "Smart", href: "/smart" },
    { label: "Stylish", href: "/stylish" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="mx-4 mb-4 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
      >
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.button
                key={item.label}
                onClick={() => router.push(item.href)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileDock;
