"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useResumeDownload } from "@/lib/useResumeDownload";

export default function Hero() {
  const handleResumeDownload = useResumeDownload();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-5 sm:px-8 pt-28 pb-16 md:pb-20">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
            backgroundImage:
            "linear-gradient(rgba(23,32,27,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(23,32,27,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute top-[-180px] right-[10%] w-[520px] h-[520px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-160px] left-[-120px] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />

    

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center flex-1 flex flex-col items-center justify-center">

        {/* Small Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/15 rounded-full px-4 py-2 mb-10 backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#65d7ff] shadow-[0_0_12px_#65d7ff] animate-pulse" />
          <span className="text-zinc-400 uppercase tracking-[0.25em] text-[10px] md:text-xs">
            Available for select projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="leading-[0.88] tracking-[-0.05em]"
        >
          <span className="text-[#a1ada3] text-lg md:text-2xl block mb-7 font-medium tracking-normal">
            Lakshay Saini <span className="text-[#65d7ff] mx-2">/</span> Full Stack Developer
          </span>

          <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white">
            Turning complex ideas
          </span>

          <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mt-3">
            into reliable digital products.
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <div className="h-[52px] flex items-center justify-center mt-10">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "",
              500,
              "React Native Developer",
              2000,
              "",
              500,
              "Next.js Specialist",
              2000,
              "",
              500,
              "UI/UX Designer",
              2000,
              "",
              500,
              "Firebase Expert",
              2000,
              "",
              500,
              "Mobile App Developer",
              2000,
              "",
              500,
              "TypeScript Enthusiast",
              2000,
              "",
              500,
              "Problem Solver",
              2000,
              "",
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-2xl font-medium text-[#65d7ff] tracking-wide"
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-8"
        >
          I design and ship thoughtful digital products across web and mobile,
          balancing clean engineering with interfaces people actually enjoy using.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-3 bg-[#65d7ff] hover:bg-[#eef3f8] transition-all duration-300 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-[#0b1018]"
          >
            View Projects
            <ArrowRight size={18} />
          </button>

          <a
            href="/resume.pdf"
            onClick={handleResumeDownload}
            className="flex items-center gap-3 border border-white/15 hover:border-[#65d7ff] bg-white/5 backdrop-blur-xl transition-all duration-300 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-600"
        >
          <MapPin size={13} className="text-[#65d7ff]" />
          Himachal Pradesh, India
          <ArrowRight size={13} className="ml-2 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
