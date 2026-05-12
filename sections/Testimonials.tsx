"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ninja Deliveries Team",
    role: "Project Lead",
    company: "Ninja Deliveries",
    content:
      "Lakshay demonstrated exceptional skills in React Native development. His work on the Services Module and Food Delivery features significantly improved our app's performance and user experience. A dedicated and talented developer.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    glowBg: "from-purple-500/10 to-pink-500/5",
    avatar: "ND",
  },
  {
    name: "Development Logics",
    role: "Industry Visit Program",
    company: "Development Logics",
    content:
      "The visit to Development Logics gave us a clear picture of how IT companies function in the real world. We saw how projects move from planning to execution, and it was inspiring to watch professionals solve challenges. This experience gave me confidence about stepping into the industry.",
    rating: 5,
    gradient: "from-orange-500 to-yellow-400",
    hoverBorder: "hover:border-orange-500/50",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(251,146,60,0.2)]",
    glowBg: "from-orange-500/10 to-yellow-400/5",
    avatar: "DL",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Testimonials
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            What People
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {" "}Say About Me
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6 md:mt-8">
            Feedback from colleagues, mentors and team members I&apos;ve had the
            privilege to work with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 ${testimonial.hoverBorder} ${testimonial.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${testimonial.glowBg} transition-opacity duration-500 pointer-events-none`}
              />

              {/* Quote Icon */}
              <div className="relative z-10 mb-6">
                <Quote
                  size={40}
                  className="text-zinc-700 group-hover:text-zinc-600 transition-colors duration-300"
                />
              </div>

              {/* Rating */}
              <div className="relative z-10 flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="relative z-10 text-zinc-300 text-base leading-8 mb-8">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${testimonial.gradient} font-bold text-white text-lg shadow-lg`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <div
                className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${testimonial.gradient} transition-all duration-700 mt-8`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
