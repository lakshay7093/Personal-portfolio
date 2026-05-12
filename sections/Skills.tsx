"use client";

import { motion } from "framer-motion";

// Brand-accurate SVG icons as inline components
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
    <circle cx="12" cy="12" r="10" fill="white" />
    <path d="M7 17V7l9 10V7" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 7h3" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path d="M13.5 12H11v6H9.5v-6H7v-1.5h6.5V12z" fill="white" />
    <path d="M14.5 16.5c.4.3.9.5 1.5.5.7 0 1.2-.3 1.2-.8 0-.5-.3-.7-1.1-1l-.4-.1c-1.1-.4-1.7-.9-1.7-1.9 0-1.1.9-1.8 2.2-1.8.6 0 1.2.1 1.7.4l-.4 1.1c-.4-.2-.8-.3-1.3-.3-.6 0-.9.3-.9.7 0 .4.3.6 1 .9l.4.1c1.2.4 1.8 1 1.8 2 0 1.2-.9 1.9-2.3 1.9-.7 0-1.4-.2-1.9-.5l.2-1.2z" fill="white" />
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3V11h1.8v6.5c0 2-1.2 2.9-2.9 2.9-1.5 0-2.4-.8-2.9-1.7L7 17.5z" fill="#323330" />
    <path d="M14 17.3c.5.8 1.2 1.4 2.4 1.4 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.6-.3c-1.9-.8-3.1-1.8-3.1-3.8 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-1.9 1.2c-.4-.7-1-.9-1.6-.9-.7 0-1.1.4-1.1.9 0 .6.4.9 1.5 1.4l.6.3c2.2.9 3.4 1.9 3.4 4 0 2.3-1.8 3.5-4.2 3.5-2.3 0-3.8-1.1-4.5-2.6l2.1-1.7z" fill="#323330" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <path d="M5.5 19L8 8l3.5 4L14 4l4.5 15H5.5z" fill="#FFA000" />
    <path d="M14 4l-2.5 8L8 8l-2.5 11h13L14 4z" fill="#F57C00" />
    <path d="M5.5 19l2.5-6 4 2.5L14 4l4.5 15H5.5z" fill="#FFCA28" />
  </svg>
);

const NodejsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" />
    <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#6CC24A" />
    <path d="M9 13.5v-3l3 1.5 3-1.5v3L12 15l-3-1.5z" fill="white" />
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <rect width="24" height="24" rx="3" fill="#1a1a1a" />
    <text x="3" y="16" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">exp</text>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <path d="M12 2C9 6 7 9 7 13c0 2.8 2.2 5 5 5s5-2.2 5-5c0-4-2-7-5-11z" fill="#47A248" />
    <path d="M12 18v4" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 2c1.5 3 2.5 5.5 2.5 8" stroke="#3D8B3D" strokeWidth="0.8" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C13.24 10.39 14.177 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C15.26 7.01 14.323 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C8.74 15.79 9.677 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C10.76 12.41 9.823 11.4 7.5 11.4z" fill="#38BDF8" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    <rect x="9" y="18" width="6" height="3" rx="1" fill="#61DAFB" opacity="0.5" />
  </svg>
);

const ExpoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <circle cx="12" cy="12" r="10" fill="#000020" stroke="#fff" strokeWidth="0.5" />
    <path d="M5 16c2-4 4-7 7-8 3 1 5 4 7 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="12" cy="10" r="1.5" fill="white" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const skills = [
  {
    name: "React",
    Icon: ReactIcon,
    color: "from-cyan-400 to-blue-500",
    hoverBorder: "hover:border-cyan-400/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
    iconBg: "group-hover:bg-cyan-500/10",
    textColor: "group-hover:text-cyan-400",
  },
  {
    name: "Next.js",
    Icon: NextjsIcon,
    color: "from-white to-zinc-400",
    hoverBorder: "hover:border-white/40",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]",
    iconBg: "group-hover:bg-white/10",
    textColor: "group-hover:text-white",
  },
  {
    name: "TypeScript",
    Icon: TypeScriptIcon,
    color: "from-blue-500 to-indigo-500",
    hoverBorder: "hover:border-blue-500/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
    iconBg: "group-hover:bg-blue-500/10",
    textColor: "group-hover:text-blue-400",
  },
  {
    name: "JavaScript",
    Icon: JavaScriptIcon,
    color: "from-yellow-400 to-orange-400",
    hoverBorder: "hover:border-yellow-400/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]",
    iconBg: "group-hover:bg-yellow-400/10",
    textColor: "group-hover:text-yellow-400",
  },
  {
    name: "Firebase",
    Icon: FirebaseIcon,
    color: "from-orange-500 to-yellow-400",
    hoverBorder: "hover:border-orange-400/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(251,146,60,0.25)]",
    iconBg: "group-hover:bg-orange-500/10",
    textColor: "group-hover:text-orange-400",
  },
  {
    name: "Node.js",
    Icon: NodejsIcon,
    color: "from-green-500 to-emerald-400",
    hoverBorder: "hover:border-green-500/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]",
    iconBg: "group-hover:bg-green-500/10",
    textColor: "group-hover:text-green-400",
  },
  {
    name: "Express.js",
    Icon: ExpressIcon,
    color: "from-zinc-300 to-zinc-500",
    hoverBorder: "hover:border-zinc-400/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(161,161,170,0.2)]",
    iconBg: "group-hover:bg-zinc-400/10",
    textColor: "group-hover:text-zinc-300",
  },
  {
    name: "MongoDB",
    Icon: MongoDBIcon,
    color: "from-green-600 to-lime-400",
    hoverBorder: "hover:border-green-600/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(71,162,72,0.25)]",
    iconBg: "group-hover:bg-green-600/10",
    textColor: "group-hover:text-green-500",
  },
  {
    name: "Tailwind CSS",
    Icon: TailwindIcon,
    color: "from-cyan-400 to-sky-500",
    hoverBorder: "hover:border-sky-400/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]",
    iconBg: "group-hover:bg-sky-400/10",
    textColor: "group-hover:text-sky-400",
  },
  {
    name: "React Native",
    Icon: ReactNativeIcon,
    color: "from-cyan-500 to-purple-500",
    hoverBorder: "hover:border-cyan-500/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    iconBg: "group-hover:bg-cyan-500/10",
    textColor: "group-hover:text-cyan-400",
  },
  {
    name: "Expo",
    Icon: ExpoIcon,
    color: "from-zinc-200 to-zinc-500",
    hoverBorder: "hover:border-zinc-300/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(228,228,231,0.15)]",
    iconBg: "group-hover:bg-zinc-300/10",
    textColor: "group-hover:text-zinc-200",
  },
  {
    name: "Git & GitHub",
    Icon: GitHubIcon,
    color: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]",
    iconBg: "group-hover:bg-purple-500/10",
    textColor: "group-hover:text-purple-400",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Technologies &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {" "}Tools
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-8">
            Modern technologies and development tools I use
            to build scalable, performant and premium digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-2xl transition-all duration-500 ${skill.hoverBorder} ${skill.hoverGlow} shadow-[0_0_40px_rgba(255,255,255,0.03)] cursor-default`}
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.08] bg-gradient-to-br ${skill.color} transition-opacity duration-500 pointer-events-none`}
              />

              {/* Icon Container */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 transition-all duration-500 ${skill.iconBg}`}
              >
                <skill.Icon />
              </div>

              {/* Skill Name */}
              <h3 className={`relative z-10 text-xl font-bold text-zinc-200 transition-colors duration-300 ${skill.textColor}`}>
                {skill.name}
              </h3>

              {/* Bottom Gradient Line */}
              <div
                className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${skill.color} transition-all duration-700 mt-6`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
