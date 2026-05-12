"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development using React, Next.js, Node.js and modern databases. Building scalable, performant and maintainable solutions.",
    Icon: Code2,
    gradient: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    glowBg: "from-purple-500/10 to-pink-500/5",
    iconColor: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/15",
    features: [
      "React & Next.js Applications",
      "RESTful API Development",
      "Database Design & Integration",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native and Expo. Creating smooth, native-like experiences for iOS and Android platforms.",
    Icon: Smartphone,
    gradient: "from-cyan-500 to-blue-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    glowBg: "from-cyan-500/10 to-blue-500/5",
    iconColor: "group-hover:text-cyan-400",
    iconBg: "group-hover:bg-cyan-500/15",
    features: [
      "React Native Development",
      "iOS & Android Apps",
      "Push Notifications",
      "App Store Deployment",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, responsive and accessible user interfaces with focus on user experience. Creating designs that are both beautiful and functional.",
    Icon: Palette,
    gradient: "from-pink-500 to-orange-500",
    hoverBorder: "hover:border-pink-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]",
    glowBg: "from-pink-500/10 to-orange-500/5",
    iconColor: "group-hover:text-pink-400",
    iconBg: "group-hover:bg-pink-500/15",
    features: [
      "Responsive Design",
      "Figma to Code",
      "Design Systems",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Robust server-side applications with Node.js, Express and modern databases. Building secure, scalable and efficient backend systems.",
    Icon: Database,
    gradient: "from-green-500 to-emerald-500",
    hoverBorder: "hover:border-green-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)]",
    glowBg: "from-green-500/10 to-emerald-500/5",
    iconColor: "group-hover:text-green-400",
    iconBg: "group-hover:bg-green-500/15",
    features: [
      "Node.js & Express APIs",
      "MongoDB & Firebase",
      "Real-time Data Sync",
      "API Security",
    ],
  },
  {
    title: "Firebase Integration",
    description:
      "Complete Firebase solutions including Authentication, Firestore, Cloud Functions, Storage and real-time database integration.",
    Icon: Cloud,
    gradient: "from-orange-500 to-yellow-400",
    hoverBorder: "hover:border-orange-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(251,146,60,0.2)]",
    glowBg: "from-orange-500/10 to-yellow-400/5",
    iconColor: "group-hover:text-orange-400",
    iconBg: "group-hover:bg-orange-500/15",
    features: [
      "Firebase Authentication",
      "Firestore Database",
      "Cloud Functions",
      "Firebase Storage",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing application performance, reducing load times and improving user experience through best practices.",
    Icon: Zap,
    gradient: "from-yellow-400 to-red-500",
    hoverBorder: "hover:border-yellow-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(250,204,21,0.2)]",
    glowBg: "from-yellow-400/10 to-red-500/5",
    iconColor: "group-hover:text-yellow-400",
    iconBg: "group-hover:bg-yellow-500/15",
    features: [
      "Code Splitting",
      "Lazy Loading",
      "Bundle Optimization",
      "Performance Audits",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen scroll-mt-40 px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

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
            Services
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            What I
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {" "}Offer
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6 md:mt-8">
            Comprehensive development services to bring your ideas to life with
            modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 ${service.hoverBorder} ${service.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.glowBg} transition-opacity duration-500 pointer-events-none`}
              />

              {/* Icon */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 transition-all duration-500 ${service.iconBg}`}
              >
                <service.Icon
                  size={32}
                  className={`text-zinc-400 transition-colors duration-300 ${service.iconColor}`}
                />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-zinc-400 text-base leading-7 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative z-10 space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-zinc-300 text-sm"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom Line */}
              <div
                className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${service.gradient} transition-all duration-700 mt-8`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
