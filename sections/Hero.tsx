"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 pt-24 pb-16 md:pb-20">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />

      {/* Pink Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[100px]" />

    

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center flex-1 flex flex-col items-center justify-center">

        {/* Small Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
          <span className="text-zinc-400 uppercase tracking-[0.35em] text-xs">
            Available for Work
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="leading-[0.9] tracking-tight"
        >
          <span className="text-zinc-500 text-3xl md:text-5xl block mb-5 font-medium">
            I&apos;m
          </span>

          <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white">
            Lakshay 
          </span>

          <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mt-2">
            Saini
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <div className="h-[72px] flex items-center justify-center mt-12">
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
            className="text-2xl md:text-4xl font-semibold text-zinc-300 tracking-wide"
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-9"
        >
          Building scalable web and mobile applications with
          modern technologies like React, Next.js, Firebase,
          Node.js and TypeScript — focused on performance,
          clean architecture and premium user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap gap-6 justify-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-all duration-300 px-7 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105"
          >
            View Projects
            <ArrowRight size={18} />
          </button>

          <a
            href="/resume.pdf"
            download="Lakshay_Saini_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/10 hover:border-purple-500 bg-white/5 backdrop-blur-xl transition-all duration-300 px-7 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
