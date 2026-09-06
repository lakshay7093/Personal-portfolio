"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useResumeDownload } from "@/lib/useResumeDownload";

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
  const handleResumeDownload = useResumeDownload();

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
        className="fixed top-0 left-0 right-0 w-full z-[10000] bg-[#0b1018] border-b border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.34)]"
      >
        <div className={`absolute inset-0 h-full border-b transition-all duration-500 ${
          scrolled
            ? "bg-[#151d29] border-white/15"
            : "bg-[#0b1018] border-white/10"
        }`} />
        <div className="relative px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 h-[36px]">
              {/* Logo */}
              <button
                onClick={() => scrollTo("hero")}
                className="flex items-center gap-3 group flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-7 h-7 rounded-lg bg-[#65d7ff] rotate-45 transition-transform duration-300 group-hover:rotate-90" />
                  <div className="absolute inset-[7px] rounded-sm bg-[#151d29]" />
                </div>
                <span className="text-[#eef3f8] uppercase tracking-[0.2em] text-xs md:text-sm font-bold transition-colors duration-300">
                  Lakshay Saini
                </span> 
              </button>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.section)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                      active === item.section
                        ? "text-[#65d7ff]"
                        : "text-[#93a1b2] hover:text-[#eef3f8]"
                    }`}
                  >
                    {active === item.section && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-2 bottom-0 h-px bg-[#65d7ff]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {active !== item.section && (
                      <span className="absolute left-4 right-4 -bottom-0.5 h-px w-0 bg-[#65d7ff] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Resume + hamburger */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <motion.a
                  href="/resume.pdf"
                  download="Lakshay_Saini_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 bg-[#65d7ff] hover:bg-[#eef3f8] transition-all duration-300 px-5 py-2.5 rounded-xl font-bold text-sm text-[#0b1018]"
                >
                  <Download size={15} />
                  Resume
                </motion.a>

                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  className="md:hidden text-[#eef3f8] hover:text-[#65d7ff] transition-colors duration-200 p-2 rounded-xl hover:bg-white/10"
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
            className="fixed top-[76px] left-4 right-4 z-[9999] bg-[#151d29] border border-white/15 backdrop-blur-xl rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.section)}
                  className={`flex items-center px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-200 text-left ${
                    active === item.section
                      ? "bg-[#65d7ff] text-[#0b1018]"
                      : "text-[#93a1b2] hover:text-[#eef3f8] hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download="Lakshay_Saini_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
                className="flex items-center gap-2 mt-1 px-5 py-4 rounded-xl bg-[#65d7ff] font-bold text-base justify-center text-[#0b1018]"
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
