"use client";

import { motion } from "framer-motion";
import { Smartphone, Cloud, Layout, FileSpreadsheet } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Ninja Deliveries Customer",
    category: "Production Mobile App",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop", // Modern shopping & delivery
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop", // Cloud & Server backend
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?q=80&w=800&auto=format&fit=crop",
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
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col bg-zinc-900/40 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl transition-all duration-500 ${project.hoverBorder} ${project.hoverGlow}`}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                    Featured Project
                  </div>
                )}

                {/* Status Badge */}
                <div
                  className={`absolute top-6 right-6 px-4 py-1.5 rounded-full bg-gradient-to-r ${project.statsBg} text-white font-bold text-[10px] uppercase tracking-wider shadow-xl`}
                >
                  {project.stats}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow relative">
                {/* Gradient Glow Background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${project.glowBg} transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex items-start gap-5 mb-6">
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
                    <p className="text-purple-400/80 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 text-zinc-400 text-base leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] font-medium text-zinc-300 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Animated Line */}
              <div
                className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r ${project.gradient} transition-all duration-700`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
