"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Target, Zap, Code, Users } from "lucide-react";

const achievements = [
  {
    title: "Academic Excellence",
    description: "Maintained CGPA of 8.10 in BCA and 8.0 in MCA, demonstrating consistent academic performance.",
    Icon: Award,
    gradient: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    glowBg: "from-purple-500/10 to-pink-500/5",
    iconColor: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/15",
    year: "2021-2026",
  },
  {
    title: "Production App Development",
    description: "Successfully developed and deployed Ninja Deliveries app serving 1000+ active users with 30% performance improvement.",
    Icon: Zap,
    gradient: "from-cyan-500 to-blue-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    glowBg: "from-cyan-500/10 to-blue-500/5",
    iconColor: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/15",
    year: "2026",
  },
  {
    title: "Full Stack Expertise",
    description: "Mastered 12+ modern technologies including React, Next.js, React Native, Firebase, Node.js, and TypeScript.",
    Icon: Code,
    gradient: "from-orange-500 to-yellow-400",
    hoverBorder: "hover:border-orange-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(251,146,60,0.2)]",
    glowBg: "from-orange-500/10 to-yellow-400/5",
    iconColor: "group-hover:text-orange-400",
    iconBg: "group-hover:bg-orange-500/15",
    year: "2024-2026",
  },
  {
    title: "Professional Training",
    description: "Completed intensive 3-month training program at Ninja Deliveries, gaining real-world development experience.",
    Icon: Target,
    gradient: "from-green-500 to-emerald-500",
    hoverBorder: "hover:border-green-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)]",
    glowBg: "from-green-500/10 to-emerald-500/5",
    iconColor: "group-hover:text-green-400",
    iconBg: "group-hover:bg-green-500/15",
    year: "2025",
  },
  {
    title: "Workshop Participation",
    description: "Attended workshops on Cyber Security, AI, Blockchain, and Cloud Computing, staying updated with emerging technologies.",
    Icon: Users,
    gradient: "from-pink-500 to-red-500",
    hoverBorder: "hover:border-pink-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]",
    glowBg: "from-pink-500/10 to-red-500/5",
    iconColor: "group-hover:text-pink-400",
    iconBg: "group-hover:bg-pink-500/15",
    year: "2024",
  },
  {
    title: "Open Source Contributions",
    description: "Active GitHub contributor with 15+ public repositories, 100+ contributions, and growing community engagement.",
    Icon: Trophy,
    gradient: "from-yellow-400 to-orange-500",
    hoverBorder: "hover:border-yellow-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(250,204,21,0.2)]",
    glowBg: "from-yellow-400/10 to-orange-500/5",
    iconColor: "group-hover:text-yellow-400",
    iconBg: "group-hover:bg-yellow-500/15",
    year: "2023-2026",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen scroll-mt-40 px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

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
            Achievements
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Milestones &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {" "}Accomplishments
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6 md:mt-8">
            Key achievements and milestones throughout my journey as a developer
            and student.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 ${achievement.hoverBorder} ${achievement.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${achievement.glowBg} transition-opacity duration-500 pointer-events-none`}
              />

              {/* Year Badge */}
              <div
                className={`relative z-10 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white font-semibold text-xs shadow-lg mb-6`}
              >
                {achievement.year}
              </div>

              {/* Icon */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 transition-all duration-500 ${achievement.iconBg}`}
              >
                <achievement.Icon
                  size={32}
                  className={`text-zinc-400 transition-colors duration-300 ${achievement.iconColor}`}
                />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl md:text-2xl font-bold mb-4">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-zinc-400 text-base leading-7">
                {achievement.description}
              </p>

              {/* Bottom Line */}
              <div
                className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${achievement.gradient} transition-all duration-700 mt-8`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
