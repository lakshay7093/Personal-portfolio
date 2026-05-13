"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Code2, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchGitHubStats, formatStatValue, type GitHubStats as GitHubStatsType } from "@/lib/github";

export default function GitHubStats() {
  const [githubData, setGithubData] = useState<GitHubStatsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats()
      .then(setGithubData)
      .catch((error) => {
        console.error("Failed to load GitHub stats:", error);
        setGithubData(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // Only show stats that have meaningful values (not 0 or null)
  const allStats = [
    {
      label: "Public Repositories",
      value: githubData?.publicRepos || 0,
      displayValue: githubData ? formatStatValue(githubData.publicRepos) : "...",
      Icon: Code2,
      gradient: "from-purple-500 to-pink-500",
      hoverBorder: "hover:border-purple-500/50",
      hoverGlow: "group-hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
      glowBg: "from-purple-500/10 to-pink-500/5",
      iconColor: "group-hover:text-purple-400",
      iconBg: "group-hover:bg-purple-500/15",
    },
    {
      label: "Total Contributions",
      value: githubData?.totalCommits || 0,
      displayValue: githubData ? formatStatValue(githubData.totalCommits) : "...",
      Icon: Activity,
      gradient: "from-cyan-500 to-blue-500",
      hoverBorder: "hover:border-cyan-500/50",
      hoverGlow: "group-hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
      glowBg: "from-cyan-500/10 to-blue-500/5",
      iconColor: "group-hover:text-cyan-400",
      iconBg: "group-hover:bg-cyan-500/15",
    },
    {
      label: "Years Active",
      value: githubData?.yearsActive || 0,
      displayValue: githubData ? `${githubData.yearsActive}+` : "...",
      Icon: Star,
      gradient: "from-orange-500 to-yellow-400",
      hoverBorder: "hover:border-orange-500/50",
      hoverGlow: "group-hover:shadow-[0_0_60px_rgba(251,146,60,0.2)]",
      glowBg: "from-orange-500/10 to-yellow-400/5",
      iconColor: "group-hover:text-orange-400",
      iconBg: "group-hover:bg-orange-500/15",
    },
    {
      label: "Followers",
      value: githubData?.followers || 0,
      displayValue: githubData ? formatStatValue(githubData.followers) : "...",
      Icon: GitBranch,
      gradient: "from-green-500 to-emerald-500",
      hoverBorder: "hover:border-green-500/50",
      hoverGlow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)]",
      glowBg: "from-green-500/10 to-emerald-500/5",
      iconColor: "group-hover:text-green-400",
      iconBg: "group-hover:bg-green-500/15",
    },
  ];

  // Filter out stats with 0 values and sort by value (highest first)
  const stats = allStats
    .filter(stat => stat.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 4); // Take top 4

  const visibleStats = isLoading ? allStats : stats;

  return (
    <section
      id="github"
      className="relative scroll-mt-40 px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 bg-black overflow-hidden"
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
            Open Source
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            GitHub
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {" "}Activity
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6 md:mt-8">
            My contributions to open source and personal projects on GitHub.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className={`grid gap-6 md:gap-8 mb-12 ${visibleStats.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : visibleStats.length === 3 ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-2'}`}>
          {visibleStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-2xl transition-all duration-500 ${stat.hoverBorder} ${stat.hoverGlow} shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${stat.glowBg} transition-opacity duration-500 pointer-events-none`}
              />

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-5 transition-all duration-500 ${stat.iconBg}`}
              >
                <stat.Icon
                  size={24}
                  className={`text-zinc-400 transition-colors duration-300 ${stat.iconColor}`}
                />
              </div>

              {/* Value */}
              <h3
                className={`relative z-10 text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.displayValue}
              </h3>

              {/* Label */}
              <p className="relative z-10 text-zinc-400 text-sm">
                {stat.label}
              </p>

              {/* Bottom Line */}
              <div
                className={`relative z-10 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${stat.gradient} transition-all duration-700 mt-6`}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/10 rounded-[36px] p-8 md:p-12 backdrop-blur-2xl hover:border-purple-500/30 transition-all duration-500 shadow-[0_0_60px_rgba(168,85,247,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)] flex-shrink-0">
                <GitBranch size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  @lakshay7093
                </h3>
                <p className="text-zinc-400 text-base">
                  Explore my open source contributions
                </p>
              </div>
            </div>

            <motion.a
              href="https://github.com/lakshay7093"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-base shadow-[0_0_35px_rgba(168,85,247,0.35)] whitespace-nowrap"
            >
              <GitBranch size={20} />
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
