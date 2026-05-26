"use client";

import { motion } from "framer-motion";
import { Smartphone, Cloud, Layout, FileSpreadsheet } from "lucide-react";

const projects = [
  {
    title: "Ninja Deliveries Customer",
    category: "Production Mobile App",
    description:
      "A scalable food delivery and service booking application with realtime Firebase integration, authentication, responsive UI and optimized performance for real-world users.",
    tech: ["React Native", "Firebase", "Expo", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    glowBg: "from-purple-500/10 to-pink-500/5",
    statsBg: "from-purple-500 to-pink-500",
    stats: "1000+ Users",
    Icon: Smartphone,
    iconColor: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/15",
    featured: true,
  },
  {
    title: "Ninja Deliveries Functions",
    category: "Backend Infrastructure",
    description:
      "Cloud Functions and backend APIs powering realtime notifications, authentication flows and application automation for production systems.",
    tech: ["Firebase Functions", "Node.js", "REST APIs"],
    gradient: "from-cyan-500 to-blue-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    glowBg: "from-cyan-500/10 to-blue-500/5",
    statsBg: "from-cyan-500 to-blue-500",
    stats: "Realtime Backend",
    Icon: Cloud,
    iconColor: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/15",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    category: "Full Stack Web Application",
    description:
      "Modern portfolio website built with Next.js 16, featuring dynamic GitHub stats, contact form with email integration, and smooth animations powered by Framer Motion.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Framer Motion"],
    gradient: "from-indigo-500 to-purple-500",
    hoverBorder: "hover:border-indigo-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(99,102,241,0.2)]",
    glowBg: "from-indigo-500/10 to-purple-500/5",
    statsBg: "from-indigo-500 to-purple-500",
    stats: "Live Portfolio",
    Icon: Layout,
    iconColor: "group-hover:text-indigo-400",
    iconBg: "group-hover:bg-indigo-500/15",
    featured: true,
  },
  {
    title: "Insta_Post",
    category: "Frontend UI Project",
    description:
      "Modern social-media inspired frontend application focused on responsive layouts, smooth animations and premium user experience.",
    tech: ["React", "Tailwind", "UI/UX"],
    gradient: "from-pink-500 to-orange-500",
    hoverBorder: "hover:border-pink-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]",
    glowBg: "from-pink-500/10 to-orange-500/5",
    statsBg: "from-pink-500 to-orange-500",
    stats: "Modern Interface",
    Icon: Layout,
    iconColor: "group-hover:text-pink-400",
    iconBg: "group-hover:bg-pink-500/15",
    featured: false,
  },
  {
    title: "CSV Excel to PDF Converter",
    category: "Utility Application",
    description:
      "A productivity-focused utility application for converting CSV and Excel data into clean, structured and downloadable PDF documents.",
    tech: ["React", "PDF", "File Processing"],
    gradient: "from-green-500 to-emerald-500",
    hoverBorder: "hover:border-green-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)]",
    glowBg: "from-green-500/10 to-emerald-500/5",
    statsBg: "from-green-500 to-emerald-500",
    stats: "Document Automation",
    Icon: FileSpreadsheet,
    iconColor: "group-hover:text-green-400",
    iconBg: "group-hover:bg-green-500/15",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-40 px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-18"
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] mb-5 text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {" "}Projects
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6 md:mt-8">
            A collection of production-ready applications and
            modern digital products focused on scalability,
            performance and premium user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] md:rounded-[36px] p-6 md:p-10 backdrop-blur-2xl transition-all duration-500 ${project.hoverBorder} ${project.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${project.glowBg} transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between mb-8 gap-4">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${project.iconBg}`}
                  >
                    <project.Icon
                      size={26}
                      className={`text-zinc-400 transition-colors duration-300 ${project.iconColor}`}
                    />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-[0.25em]">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`flex-shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r ${project.statsBg} text-white font-semibold text-xs shadow-lg`}
                >
                  {project.stats}
                </div>
              </div>

              {/* Description */}
              <p className="relative z-10 text-zinc-400 text-base leading-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-zinc-300 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div
                className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${project.gradient} transition-all duration-700 mt-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
