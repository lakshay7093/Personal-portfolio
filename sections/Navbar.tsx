"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", section: "hero" },
  { name: "About", section: "about" },
  { name: "Services", section: "services" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section);
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (section: string) => {
    setMobileOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 w-full z-[10000]"
      >
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]" 
            : "bg-white/95 backdrop-blur-md"
        }`} />
        <div className="relative px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
              {/* Logo */}
              <button
                onClick={() => scrollTo("hero")}
                className="flex items-center gap-3 group flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_22px_rgba(168,85,247,0.9)]" />
                  <div className="absolute inset-0 w-5 h-5 rounded-full bg-purple-500 animate-ping opacity-40" />
                </div>
                <span className="text-black uppercase tracking-[0.3em] text-sm font-bold transition-colors duration-300">
                  Lakshay Saini
                </span> 
              </button>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.section)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                      active === item.section
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {active === item.section && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-gray-100 border border-gray-200"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {active !== item.section && (
                      <span className="absolute left-5 right-5 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 group-hover:w-[calc(100%-2.5rem)] rounded-full" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Resume + hamburger */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-all duration-300 px-7 py-3 rounded-xl font-bold text-sm shadow-[0_0_30px_rgba(168,85,247,0.45)] text-white"
                >
                  <Download size={15} />
                  Resume
                </motion.a>

                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  className="md:hidden text-gray-700 hover:text-black transition-colors duration-200 p-2 rounded-xl hover:bg-gray-100"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[90px] left-4 right-4 z-[9999] bg-white border border-gray-200 backdrop-blur-xl rounded-[24px] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.section)}
                  className={`flex items-center px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-200 text-left ${
                    active === item.section
                      ? "bg-gray-100 text-black border border-gray-200"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 mt-1 px-5 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 font-bold text-base justify-center text-white"
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
