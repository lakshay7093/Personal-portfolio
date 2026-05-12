"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FolderGit2, GraduationCap, Layers, Database,
  ArrowRight, Download, Briefcase, BookOpen,
  CheckCircle2, Building2, Calendar,
} from "lucide-react";

// ─── Stat cards ───────────────────────────────────────────────────────────────
const stats = [
  { value: "15+",    title: "Projects Built",     Icon: FolderGit2,    color: "text-purple-400", hoverBorder: "hover:border-purple-500/40", hoverGlow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]", glowBg: "from-purple-500/15 to-pink-500/5",   iconBg: "group-hover:bg-purple-500/15", lineGradient: "from-purple-500 to-pink-500" },
  { value: "2+",     title: "Years Experience",   Icon: GraduationCap, color: "text-pink-400",   hoverBorder: "hover:border-pink-500/40",   hoverGlow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]", glowBg: "from-pink-500/15 to-orange-500/5",  iconBg: "group-hover:bg-pink-500/15",   lineGradient: "from-pink-500 to-orange-500" },
  { value: "12+",    title: "Tech Stack",         Icon: Layers,        color: "text-cyan-400",   hoverBorder: "hover:border-cyan-500/40",   hoverGlow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]", glowBg: "from-cyan-500/15 to-blue-500/5",    iconBg: "group-hover:bg-cyan-500/15",   lineGradient: "from-cyan-500 to-blue-500" },
  { value: "100+",   title: "GitHub Commits",     Icon: Database,      color: "text-orange-400", hoverBorder: "hover:border-orange-500/40", hoverGlow: "group-hover:shadow-[0_0_40px_rgba(251,146,60,0.2)]", glowBg: "from-orange-500/15 to-yellow-500/5",iconBg: "group-hover:bg-orange-500/15", lineGradient: "from-orange-500 to-yellow-400" },
];

// ─── Technologies ─────────────────────────────────────────────────────────────
const technologies = [
  { name: "React & React Native", level: 90, label: "Expert",   stroke: "#22d3ee", gradient: "from-cyan-400 to-blue-500",    textColor: "text-cyan-400",   icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/></svg> },
  { name: "Firebase",             level: 85, label: "Advanced", stroke: "#fb923c", gradient: "from-orange-400 to-yellow-400", textColor: "text-orange-400", icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M5.5 19L8 8l3.5 4L14 4l4.5 15H5.5z" fill="#FFA000"/><path d="M14 4l-2.5 8L8 8l-2.5 11h13L14 4z" fill="#F57C00"/><path d="M5.5 19l2.5-6 4 2.5L14 4l4.5 15H5.5z" fill="#FFCA28"/></svg> },
  { name: "Next.js",              level: 85, label: "Advanced", stroke: "#ffffff", gradient: "from-white to-zinc-400",        textColor: "text-white",      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><circle cx="12" cy="12" r="10" fill="white"/><path d="M7 17V7l9 10V7" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 7h3" stroke="black" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { name: "Node.js & Express",    level: 80, label: "Advanced", stroke: "#4ade80", gradient: "from-green-400 to-emerald-500", textColor: "text-green-400",  icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933"/><path d="M12 2L3 7l9 5 9-5-9-5z" fill="#6CC24A"/><path d="M9 13.5v-3l3 1.5 3-1.5v3L12 15l-3-1.5z" fill="white"/></svg> },
  { name: "TypeScript",           level: 82, label: "Advanced", stroke: "#60a5fa", gradient: "from-blue-400 to-indigo-500",   textColor: "text-blue-400",   icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><rect width="24" height="24" rx="3" fill="#3178C6"/><path d="M13.5 12H11v6H9.5v-6H7v-1.5h6.5V12z" fill="white"/><path d="M14.5 16.5c.4.3.9.5 1.5.5.7 0 1.2-.3 1.2-.8 0-.5-.3-.7-1.1-1l-.4-.1c-1.1-.4-1.7-.9-1.7-1.9 0-1.1.9-1.8 2.2-1.8.6 0 1.2.1 1.7.4l-.4 1.1c-.4-.2-.8-.3-1.3-.3-.6 0-.9.3-.9.7 0 .4.3.6 1 .9l.4.1c1.2.4 1.8 1 1.8 2 0 1.2-.9 1.9-2.3 1.9-.7 0-1.4-.2-1.9-.5l.2-1.2z" fill="white"/></svg> },
  { name: "Tailwind CSS",         level: 92, label: "Expert",   stroke: "#38bdf8", gradient: "from-sky-400 to-cyan-500",      textColor: "text-sky-400",    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C13.24 10.39 14.177 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C15.26 7.01 14.323 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C8.74 15.79 9.677 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C10.76 12.41 9.823 11.4 7.5 11.4z" fill="#38BDF8"/></svg> },
];

// ─── Resume data ──────────────────────────────────────────────────────────────
const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "Government PG College, Dharamshala", duration: "2024 – 2026", status: "Pursuing", grade: "CGPA: 8.0",           gradient: "from-purple-500 to-pink-500", hoverBorder: "hover:border-purple-500/50", hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]", glowBg: "from-purple-500/10 to-pink-500/5",  statsBg: "from-purple-500 to-pink-500", iconColor: "group-hover:text-purple-400", iconBg: "group-hover:bg-purple-500/15", statusColor: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "Himachal Pradesh University, Shimla", duration: "2021 – 2024", status: "Completed", grade: "CGPA: 8.10 | O+", gradient: "from-cyan-500 to-blue-500",   hoverBorder: "hover:border-cyan-500/50",   hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",   glowBg: "from-cyan-500/10 to-blue-500/5",    statsBg: "from-cyan-500 to-blue-500",   iconColor: "group-hover:text-cyan-400",   iconBg: "group-hover:bg-cyan-500/15",   statusColor: "text-green-400 border-green-500/30 bg-green-500/10" },
];

const experience = [
  { role: "IT & Software Developer Intern", company: "Ninja Deliveries", duration: "Jan 2026 – Present", type: "Internship", points: ["Developed Services Module — electrician, plumber, salon, car wash, and more.", "Built and enhanced Food Delivery Feature for real users.", "Improved application performance and reduced load time by ~30%.", "Integrated Firebase — Authentication, Firestore, and backend services.", "Implemented real-time data handling and optimized app responsiveness.", "Collaborated in agile team workflows and feature deployments."], techStack: ["React Native", "Firebase", "Expo CLI", "Node.js", "TypeScript", "Postman"], gradient: "from-pink-500 to-orange-500", hoverBorder: "hover:border-pink-500/50", hoverGlow: "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]", glowBg: "from-pink-500/10 to-orange-500/5", statsBg: "from-pink-500 to-orange-500", iconColor: "group-hover:text-pink-400", iconBg: "group-hover:bg-pink-500/15" },
  { role: "Software Development Trainee", company: "Ninja Deliveries", duration: "3 Months Training", type: "Training", points: ["Learned real-world full-stack development using React and Firebase.", "Gained hands-on experience with APIs, UI development, and backend integration.", "Worked with Git/GitHub and debugging techniques in a collaborative setup."], techStack: ["React", "Firebase", "Git", "GitHub", "REST APIs"], gradient: "from-green-500 to-emerald-500", hoverBorder: "hover:border-green-500/50", hoverGlow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)]", glowBg: "from-green-500/10 to-emerald-500/5", statsBg: "from-green-500 to-emerald-500", iconColor: "group-hover:text-green-400", iconBg: "group-hover:bg-green-500/15" },
];

const certificates = [
  { title: "Training – Ninja Deliveries", issuer: "Ninja Deliveries", year: "2025", description: "Hands-on training in real-world full-stack development — React, Firebase, APIs, UI development, backend integration, Git/GitHub and collaborative debugging.", gradient: "from-purple-500 to-pink-500", hoverBorder: "hover:border-purple-500/50", hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]", glowBg: "from-purple-500/10 to-pink-500/5", statsBg: "from-purple-500 to-pink-500", iconColor: "group-hover:text-purple-400", iconBg: "group-hover:bg-purple-500/15" },
  { title: "Workshop on Cyber Security & IT Fundamentals", issuer: "Workshop", year: "2024", description: "Attended workshop covering cybersecurity principles, IT fundamentals, network security and best practices for secure software development.", gradient: "from-cyan-500 to-blue-500", hoverBorder: "hover:border-cyan-500/50", hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]", glowBg: "from-cyan-500/10 to-blue-500/5", statsBg: "from-cyan-500 to-blue-500", iconColor: "group-hover:text-cyan-400", iconBg: "group-hover:bg-cyan-500/15" },
  { title: "Workshops on AI, Blockchain & Cloud Computing", issuer: "Workshop", year: "2024", description: "Participated in workshops on Artificial Intelligence, Blockchain technology and Cloud Computing — exploring emerging tech trends and real-world applications.", gradient: "from-orange-500 to-yellow-400", hoverBorder: "hover:border-orange-500/50", hoverGlow: "group-hover:shadow-[0_0_60px_rgba(251,146,60,0.2)]", glowBg: "from-orange-500/10 to-yellow-400/5", statsBg: "from-orange-500 to-yellow-400", iconColor: "group-hover:text-orange-400", iconBg: "group-hover:bg-orange-500/15" },
];

// ─── Circular Progress ────────────────────────────────────────────────────────
const R = 36;
const CIRC = 2 * Math.PI * R;

function CircleProgress({ level, stroke, delay }: { level: number; stroke: string; delay: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const offset = CIRC - (level / 100) * CIRC;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" className="rotate-[-90deg]">
      <circle cx="44" cy="44" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
      <motion.circle
        ref={ref}
        cx="44" cy="44" r={R}
        fill="none"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={CIRC}
        initial={{ strokeDashoffset: CIRC }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRC }}
        transition={{ duration: 1.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ filter: `drop-shadow(0 0 6px ${stroke}88)` }}
      />
    </svg>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function ResumeHeading({ label, title, gradient }: { label: string; title: string; gradient: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
      <p className="text-purple-400 uppercase tracking-[0.4em] mb-4 text-xs md:text-sm">{label}</p>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{title}</h2>
    </motion.div>
  );
}

// ─── Generic zigzag card ──────────────────────────────────────────────────────
function ZigzagCard({ children, index, hoverBorder, hoverGlow, glowBg, gradient }: {
  children: React.ReactNode;
  index: number;
  hoverBorder: string;
  hoverGlow: string;
  glowBg: string;
  gradient: string;
}) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-0 items-stretch"
    >
      {/* Connector line — desktop only */}
      <div className={`hidden md:flex items-center ${isLeft ? "order-1 justify-end pr-8" : "order-2 justify-start pl-8"}`}>
        <div className="flex flex-col items-center gap-2">
          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradient} shadow-[0_0_14px_rgba(168,85,247,0.7)] flex-shrink-0`} />
          <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent min-h-[40px]" />
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className={`${isLeft ? "order-2" : "order-1"} group relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] md:rounded-[36px] p-6 md:p-10 backdrop-blur-2xl transition-all duration-500 ${hoverBorder} ${hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${glowBg} transition-opacity duration-500 pointer-events-none`} />
        {children}
        <div className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${gradient} transition-all duration-700 mt-8`} />
      </motion.div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
  id="about"
  className="relative scroll-mt-40 px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 bg-black overflow-hidden"
>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Intro + Stats ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, delay: 0.2 }} 
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                  <img 
                    src="/images/1.jpg" 
                    alt="Lakshay Saini" 
                    className="w-full h-full object-cover scale-[1.00]"
                    style={{ objectPosition: '70% 8%' }}
                  />
                </div>
              </div>
            </motion.div>

            <p className="text-purple-400 uppercase tracking-[0.45em] mb-5 text-xs md:text-sm">About Me</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Building Modern
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mt-2">Digital Experiences</span>
            </h2>
            <p className="text-zinc-400 mt-8 text-base md:text-lg leading-9">
              I&apos;m a passionate Full Stack Developer with 2+ years of experience, specializing in building scalable web and mobile applications. 
              Currently pursuing my Master of Computer Applications (MCA) at Government PG College, Dharamshala, I combine academic excellence with real-world development expertise.
            </p>
            <p className="text-zinc-500 mt-4 text-sm md:text-base leading-8">
              My journey includes hands-on experience as an IT & Software Developer Intern at Ninja Deliveries, where I&apos;ve developed comprehensive service modules, 
              enhanced food delivery features, and optimized application performance by ~30%. I specialize in React, React Native, Next.js, Firebase, Node.js, and TypeScript, 
              with a strong focus on creating premium user experiences and scalable solutions.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-10">
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-all duration-300 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-semibold text-sm md:text-base shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-105">
                View Projects <ArrowRight size={16} />
              </button>
              <a href="/resume.pdf" download className="flex items-center gap-2 border border-white/10 hover:border-purple-500 bg-white/5 backdrop-blur-xl transition-all duration-300 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl text-sm md:text-base hover:scale-105">
                <Download size={16} /> Resume
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ y: -10, scale: 1.03 }} className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[24px] md:rounded-[28px] p-5 md:p-7 backdrop-blur-2xl transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.03)] ${stat.hoverBorder} ${stat.hoverGlow}`}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${stat.glowBg} transition-opacity duration-500 pointer-events-none`} />
                <div className={`relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-4 md:mb-5 transition-all duration-500 ${stat.iconBg}`}>
                  <stat.Icon size={18} className={`${stat.color} transition-colors duration-300`} />
                </div>
                <h3 className={`relative z-10 text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</h3>
                <p className="relative z-10 text-zinc-400 mt-1.5 text-xs md:text-sm">{stat.title}</p>
                <div className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${stat.lineGradient} transition-all duration-700 mt-5 md:mt-6`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Technologies — Circular Progress ── */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-14">
            <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-4">Expertise</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">Technologies</span></h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[24px] p-5 md:p-6 backdrop-blur-2xl transition-all duration-400 hover:border-white/25 flex flex-col items-center gap-3"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/[0.04] to-transparent transition-opacity duration-500 pointer-events-none" />

                {/* Circle with icon inside */}
                <div className="relative z-10 flex-shrink-0">
                  <CircleProgress level={tech.level} stroke={tech.stroke} delay={index * 0.1 + 0.2} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {tech.icon}
                  </div>
                </div>

                {/* Name + % */}
                <div className="relative z-10 text-center">
                  <p className="text-white font-semibold text-xs md:text-sm leading-tight">{tech.name}</p>
                  <p className={`text-xs font-bold mt-1 ${tech.textColor}`}>{tech.level}%</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{tech.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Education — Zigzag ── */}
        <div className="mb-16 md:mb-20">
          <ResumeHeading label="Education" title="Academic Background" gradient="from-cyan-400 to-blue-500" />
          <div className="relative">
            {/* Center vertical line desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-white/10 to-transparent -translate-x-1/2" />
            <div className="flex flex-col gap-8 md:gap-12">
              {education.map((edu, index) => (
                <ZigzagCard key={index} index={index} hoverBorder={edu.hoverBorder} hoverGlow={edu.hoverGlow} glowBg={edu.glowBg} gradient={edu.gradient}>
                  <div className="relative z-10 flex items-start justify-between mb-5 gap-3 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${edu.iconBg}`}>
                        <GraduationCap size={22} className={`text-zinc-400 transition-colors duration-300 ${edu.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">Education</p>
                        <h3 className="text-lg md:text-xl font-bold mt-1.5 leading-tight">{edu.degree}</h3>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-xl border ${edu.statusColor}`}>{edu.status}</span>
                  </div>
                  <div className="relative z-10 space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm"><Building2 size={13} className="text-zinc-600 flex-shrink-0" />{edu.institution}</div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm"><Calendar size={13} className="text-zinc-600 flex-shrink-0" />{edu.duration}</div>
                  </div>
                  <div className={`relative z-10 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${edu.statsBg} text-white font-semibold text-sm shadow-lg`}>{edu.grade}</div>
                </ZigzagCard>
              ))}
            </div>
          </div>
        </div>

        {/* ── Experience — Zigzag ── */}
        <div className="mb-16 md:mb-20">
          <ResumeHeading label="Experience" title="Work Experience" gradient="from-pink-400 to-orange-400" />
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/30 via-white/10 to-transparent -translate-x-1/2" />
            <div className="flex flex-col gap-8 md:gap-12">
              {experience.map((exp, index) => (
                <ZigzagCard key={index} index={index} hoverBorder={exp.hoverBorder} hoverGlow={exp.hoverGlow} glowBg={exp.glowBg} gradient={exp.gradient}>
                  <div className="relative z-10 flex items-start justify-between mb-5 gap-3 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${exp.iconBg}`}>
                        <Briefcase size={22} className={`text-zinc-400 transition-colors duration-300 ${exp.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">{exp.type}</p>
                        <h3 className="text-lg md:text-xl font-bold mt-1.5 leading-tight">{exp.role}</h3>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 px-3 py-1.5 rounded-xl bg-gradient-to-r ${exp.statsBg} text-white font-semibold text-xs shadow-lg whitespace-nowrap`}>{exp.duration}</div>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 text-zinc-400 text-sm mb-5"><Building2 size={13} className="text-zinc-600 flex-shrink-0" />{exp.company}</div>
                  <ul className="relative z-10 space-y-3 mb-6">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {exp.techStack.map((tech, j) => (
                      <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-zinc-300">{tech}</span>
                    ))}
                  </div>
                </ZigzagCard>
              ))}
            </div>
          </div>
        </div>

        {/* ── Certificates — Zigzag ── */}
        <div>
          <ResumeHeading label="Certifications" title="Certificates & Training" gradient="from-yellow-400 to-orange-400" />
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/30 via-white/10 to-transparent -translate-x-1/2" />
            <div className="flex flex-col gap-8 md:gap-12">
              {certificates.map((cert, index) => (
                <ZigzagCard key={index} index={index} hoverBorder={cert.hoverBorder} hoverGlow={cert.hoverGlow} glowBg={cert.glowBg} gradient={cert.gradient}>
                  <div className="relative z-10 flex items-start justify-between mb-6 gap-3 flex-wrap">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${cert.iconBg}`}>
                        <BookOpen size={22} className={`text-zinc-400 transition-colors duration-300 ${cert.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">{cert.issuer}</p>
                        <h3 className="text-lg md:text-xl font-bold mt-1.5 leading-tight">{cert.title}</h3>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 px-3 py-1.5 rounded-xl bg-gradient-to-r ${cert.statsBg} text-white font-semibold text-xs shadow-lg`}>{cert.year}</div>
                  </div>
                  <p className="relative z-10 text-zinc-400 text-sm md:text-base leading-7 md:leading-8">{cert.description}</p>
                </ZigzagCard>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
