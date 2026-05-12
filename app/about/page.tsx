"use client";

import { motion } from "framer-motion";
import BackgroundEffects from "@/sections/BackgroundEffects";
import Link from "next/link";
import {
  ArrowRight, Download, MapPin, Mail, Phone,
  Briefcase, GraduationCap, Award, User,
  ExternalLink, CheckCircle2, Calendar,
  Building2, BookOpen,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// REAL RESUME DATA
// ─────────────────────────────────────────────────────────────────────────────

const profileSummary =
  "Full Stack Developer with hands-on experience in building scalable web and mobile applications using React, Node.js, and Firebase. Contributed to a live production app used by 1,000+ users, with a focus on performance optimization, clean architecture, and user-centric design.";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Government PG College, Dharamshala",
    university: "Himachal Pradesh Technical University",
    duration: "2024 – 2026",
    status: "Pursuing",
    grade: "CGPA: 8.0",
    gradient: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    glowBg: "from-purple-500/10 to-pink-500/5",
    statsBg: "from-purple-500 to-pink-500",
    iconColor: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/15",
    statusColor: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Himachal Pradesh University, Shimla",
    university: "Himachal Pradesh University",
    duration: "2021 – 2024",
    status: "Completed",
    grade: "CGPA: 8.10 | Grade: O+",
    gradient: "from-cyan-500 to-blue-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    glowBg: "from-cyan-500/10 to-blue-500/5",
    statsBg: "from-cyan-500 to-blue-500",
    iconColor: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/15",
    statusColor: "text-green-400 border-green-500/30 bg-green-500/10",
  },
];

const experience = [
  {
    role: "IT & Software Developer Intern",
    company: "Ninja Deliveries",
    duration: "Jan 2026 – Present",
    type: "Internship",
    points: [
      "Developed Services Module — electrician, plumber, salon, car wash, and more.",
      "Built and enhanced Food Delivery Feature for real users.",
      "Improved application performance and reduced load time by ~30%.",
      "Integrated Firebase — Authentication, Firestore, and backend services.",
      "Implemented real-time data handling and optimized app responsiveness.",
      "Collaborated in agile team workflows and feature deployments.",
    ],
    techStack: ["React Native", "Firebase", "Expo CLI", "Node.js", "TypeScript", "Postman"],
    gradient: "from-pink-500 to-orange-500",
    hoverBorder: "hover:border-pink-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]",
    glowBg: "from-pink-500/10 to-orange-500/5",
    statsBg: "from-pink-500 to-orange-500",
    iconColor: "group-hover:text-pink-400",
    iconBg: "group-hover:bg-pink-500/15",
  },
  {
    role: "Software Development Trainee",
    company: "Ninja Deliveries",
    duration: "3 Months Training",
    type: "Training",
    points: [
      "Learned real-world full-stack development using React and Firebase.",
      "Gained hands-on experience with APIs, UI development, and backend integration.",
      "Worked with Git/GitHub and debugging techniques in a collaborative setup.",
    ],
    techStack: ["React", "Firebase", "Git", "GitHub", "REST APIs"],
    gradient: "from-green-500 to-emerald-500",
    hoverBorder: "hover:border-green-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)]",
    glowBg: "from-green-500/10 to-emerald-500/5",
    statsBg: "from-green-500 to-emerald-500",
    iconColor: "group-hover:text-green-400",
    iconBg: "group-hover:bg-green-500/15",
  },
];

const certificates = [
  {
    title: "Training – Ninja Deliveries",
    issuer: "Ninja Deliveries",
    year: "2025",
    description:
      "Hands-on training in real-world full-stack development — React, Firebase, APIs, UI development, backend integration, Git/GitHub and collaborative debugging.",
    gradient: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    glowBg: "from-purple-500/10 to-pink-500/5",
    statsBg: "from-purple-500 to-pink-500",
    iconColor: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/15",
  },
  {
    title: "Workshop on Cyber Security & IT Fundamentals",
    issuer: "Workshop",
    year: "2023",
    description:
      "Attended workshop covering cybersecurity principles, IT fundamentals, network security and best practices for secure software development.",
    gradient: "from-cyan-500 to-blue-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    glowBg: "from-cyan-500/10 to-blue-500/5",
    statsBg: "from-cyan-500 to-blue-500",
    iconColor: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/15",
  },
  {
    title: "Workshops on AI, Blockchain & Cloud Computing",
    issuer: "Workshop",
    year: "2024",
    description:
      "Participated in workshops on Artificial Intelligence, Blockchain technology and Cloud Computing — exploring emerging tech trends and their real-world applications.",
    gradient: "from-orange-500 to-yellow-400",
    hoverBorder: "hover:border-orange-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(251,146,60,0.2)]",
    glowBg: "from-orange-500/10 to-yellow-400/5",
    statsBg: "from-orange-500 to-yellow-400",
    iconColor: "group-hover:text-orange-400",
    iconBg: "group-hover:bg-orange-500/15",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION HEADING
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeading({ label, title, gradient }: { label: string; title: string; gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <p className="text-purple-400 uppercase tracking-[0.4em] mb-4 text-sm">{label}</p>
      <h2 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
        {title}
      </h2>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">
      <BackgroundEffects />

      <div className="fixed top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── Hero ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <p className="text-purple-400 uppercase tracking-[0.45em] text-xs mb-5">About Me</p>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-8">
              Lakshay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                Saini
              </span>
            </h1>

            {/* Contact info */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
              <a href="tel:+918837578244" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                <Phone size={13} className="text-purple-400" /> +91 8837578244
              </a>
              <a href="mailto:lakshaysaini181@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                <Mail size={13} className="text-pink-400" /> lakshaysaini181@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-cyan-400" /> Kangra, Himachal Pradesh
              </span>
              <a href="https://github.com/lakshay7093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                <ExternalLink size={13} /> github.com/lakshay7093
              </a>
              <a href="https://www.linkedin.com/in/lakshay-saini-6905b728a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
                <ExternalLink size={13} /> LinkedIn
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for Work</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 hover:scale-105 transition-all duration-300 px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <Download size={15} /> Download Resume
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-white/10 hover:border-purple-500 bg-white/5 backdrop-blur-xl transition-all duration-300 px-7 py-3.5 rounded-2xl text-sm hover:scale-105"
              >
                Contact Me <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* ── 1. Profile Summary ── */}
          <div className="mb-24">
            <SectionHeading label="01" title="Profile Summary" gradient="from-purple-400 to-pink-500" />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(168,85,247,0.15)] shadow-[0_0_50px_rgba(255,255,255,0.03)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/8 to-pink-500/5 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 group-hover:bg-purple-500/15 transition-all duration-500">
                  <User size={26} className="text-zinc-400 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.25em]">Overview</p>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1">Who I Am</h3>
                </div>
              </div>

              <p className="relative z-10 text-zinc-300 text-base md:text-lg leading-9">{profileSummary}</p>

              <div className="relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 mt-10" />
            </motion.div>
          </div>

          {/* ── 2. Education ── */}
          <div className="mb-24">
            <SectionHeading label="02" title="Education" gradient="from-cyan-400 to-blue-500" />

            <div className="grid lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-2xl transition-all duration-500 ${edu.hoverBorder} ${edu.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${edu.glowBg} transition-opacity duration-500 pointer-events-none`} />

                  {/* Top row */}
                  <div className="relative z-10 flex items-start justify-between mb-6 gap-4">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${edu.iconBg}`}>
                        <GraduationCap size={26} className={`text-zinc-400 transition-colors duration-300 ${edu.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.25em]">Education</p>
                        <h3 className="text-xl md:text-2xl font-bold mt-2 leading-tight">{edu.degree}</h3>
                      </div>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-xl border ${edu.statusColor}`}>
                      {edu.status}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                      <Building2 size={14} className="text-zinc-600 flex-shrink-0" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                      <Calendar size={14} className="text-zinc-600 flex-shrink-0" />
                      {edu.duration}
                    </div>
                  </div>

                  {/* Grade badge */}
                  <div className={`relative z-10 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${edu.statsBg} text-white font-semibold text-sm shadow-lg`}>
                    {edu.grade}
                  </div>

                  <div className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${edu.gradient} transition-all duration-700 mt-8`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── 3. Experience ── */}
          <div className="mb-24">
            <SectionHeading label="03" title="Experience" gradient="from-pink-400 to-orange-400" />

            <div className="flex flex-col gap-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-2xl transition-all duration-500 ${exp.hoverBorder} ${exp.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${exp.glowBg} transition-opacity duration-500 pointer-events-none`} />

                  {/* Top row */}
                  <div className="relative z-10 flex items-start justify-between mb-6 gap-4">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${exp.iconBg}`}>
                        <Briefcase size={26} className={`text-zinc-400 transition-colors duration-300 ${exp.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.25em]">{exp.type}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">{exp.role}</h3>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r ${exp.statsBg} text-white font-semibold text-xs shadow-lg whitespace-nowrap`}>
                      {exp.duration}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 text-zinc-400 text-sm mb-8">
                    <Building2 size={14} className="text-zinc-600 flex-shrink-0" />
                    {exp.company}
                  </div>

                  <ul className="relative z-10 space-y-4 mb-8">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-base leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 flex flex-wrap gap-3">
                    {exp.techStack.map((tech, j) => (
                      <span key={j} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-zinc-300 backdrop-blur-xl">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${exp.gradient} transition-all duration-700 mt-10`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── 4. Certificates & Training ── */}
          <div className="mb-24">
            <SectionHeading label="04" title="Certificates & Training" gradient="from-yellow-400 to-orange-400" />

            <div className="grid lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-2xl transition-all duration-500 ${cert.hoverBorder} ${cert.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${cert.glowBg} transition-opacity duration-500 pointer-events-none`} />

                  {/* Top row */}
                  <div className="relative z-10 flex items-start justify-between mb-8 gap-4">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0 transition-all duration-500 ${cert.iconBg}`}>
                        <BookOpen size={26} className={`text-zinc-400 transition-colors duration-300 ${cert.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-[0.25em]">{cert.issuer}</p>
                        <h3 className="text-lg md:text-xl font-bold mt-2 leading-tight">{cert.title}</h3>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r ${cert.statsBg} text-white font-semibold text-xs shadow-lg`}>
                      {cert.year}
                    </div>
                  </div>

                  <p className="relative z-10 text-zinc-400 text-base leading-8">{cert.description}</p>

                  <div className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${cert.gradient} transition-all duration-700 mt-10`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[36px] p-12 backdrop-blur-2xl text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
              <h2 className="relative z-10 text-3xl md:text-4xl font-black mb-4">
                Interested in working{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  together?
                </span>
              </h2>
              <p className="relative z-10 text-zinc-500 text-base mb-8 max-w-md mx-auto">
                Open to internships, freelance projects, full-time roles and exciting collaborations.
              </p>
              <div className="relative z-10 flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                  Get In Touch <ArrowRight size={16} />
                </Link>
                <Link href="/projects" className="flex items-center gap-2 border border-white/10 hover:border-purple-500 bg-white/5 backdrop-blur-xl transition-all duration-300 px-8 py-4 rounded-2xl hover:scale-105">
                  View Projects <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
