"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center">
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 blur-3xl opacity-50">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/30 rounded-full animate-pulse delay-75" />
        </div>

        {/* Logo and spinner */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]" />
            <div className="absolute inset-0 w-20 h-20 rounded-full bg-purple-500 animate-ping opacity-40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Lakshay Saini
            </h2>
            <p className="text-zinc-400 text-sm uppercase tracking-[0.3em]">
              Loading Portfolio
            </p>
          </motion.div>

          {/* Animated dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
