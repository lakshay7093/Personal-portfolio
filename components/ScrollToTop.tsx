"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-110 active:scale-95 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={24}
            className="text-white group-hover:translate-y-[-2px] transition-transform duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
