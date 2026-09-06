"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Ninja Deliveries Customer",
    category: "Production Mobile App",
    image: "/1.png",
    description:
      "Production-level food delivery and service booking application with realtime workflows, push notifications, order tracking and secure payments.",
    tech: ["React Native", "Firebase", "Node.js", "Razorpay"],
    href: "https://github.com/lakshay7093",
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
    title: "SkillCert AI",
    category: "Skill Assessment Platform",
    image: "https://skillcert-ai.vercel.app/web-app-manifest-512x512.png",
    description:
      "Live AI-powered assessment platform where developers test their skills, receive instant feedback, and earn downloadable certificates with secure verification.",
    tech: ["Next.js", "TypeScript", "Prisma", "MySQL", "Firebase"],
    href: "https://skillcert-ai.vercel.app/",
    gradient: "from-cyan-500 to-blue-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    glowBg: "from-cyan-500/10 to-blue-500/5",
    statsBg: "from-cyan-500 to-blue-500",
    stats: "Live Project",
    Icon: BadgeCheck,
    iconColor: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/15",
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    category: "Full Stack Web Application",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    description:
      "Responsive portfolio website showcasing projects, technical skills and achievements with SEO, GitHub integration, contact form and performance-focused UI.",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    href: "https://lakshaysaini.vercel.app",
    gradient: "from-indigo-500 to-purple-500",
    hoverBorder: "hover:border-indigo-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(99,102,241,0.2)]",
    glowBg: "from-indigo-500/10 to-purple-500/5",
    statsBg: "from-indigo-500 to-purple-500",
    stats: "Live Portfolio",
    Icon: Monitor,
    iconColor: "group-hover:text-indigo-400",
    iconBg: "group-hover:bg-indigo-500/15",
    featured: true,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group relative flex min-h-[610px] flex-col bg-[#151d29] border border-white/15 rounded-[24px] overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30 shadow-[0_24px_70px_rgba(0,0,0,0.28)] ${project.hoverBorder} ${project.hoverGlow}`}
            >
              {/* Image Container */}
              <div className="relative h-60 sm:h-64 md:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized={project.title === "SkillCert AI"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`${project.title === "SkillCert AI" ? "object-contain bg-[radial-gradient(circle_at_center,#242052_0%,#080b1c_72%)] p-14" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                
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
                      size={28}
                      strokeWidth={1.8}
                      aria-hidden="true"
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
                    {project.featured && (
                      <span className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold text-purple-300">
                        Featured Project
                      </span>
                    )}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
