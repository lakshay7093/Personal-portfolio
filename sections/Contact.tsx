"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { useState } from "react";

// GitHub SVG icon
const GithubSVG = ({ className }: { className?: string }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// LinkedIn SVG icon
const LinkedinSVG = ({ className }: { className?: string }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// WhatsApp SVG icon
const WhatsAppSVG = ({ className }: { className?: string }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

type ContactLink = {
  title: string;
  value: string;
  href: string;
  hoverBorder: string;
  hoverGlow: string;
  iconColor: string;
  iconBg: string;
  lineGradient: string;
  glowBg: string;
  renderIcon: (cls: string) => React.ReactNode;
};

const contactLinks: ContactLink[] = [
  {
    title: "Email",
    value: "lakshaysaini181@gmail.com",
    href: "mailto:lakshaysaini181@gmail.com",
    hoverBorder: "hover:border-purple-500/60",
    hoverGlow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]",
    iconColor: "group-hover:text-purple-400",
    iconBg: "group-hover:bg-purple-500/15",
    lineGradient: "from-purple-500 to-pink-500",
    glowBg: "from-purple-500/10 to-pink-500/5",
    renderIcon: (cls) => <Mail size={36} className={cls} />,
  },
  {
    title: "WhatsApp",
    value: "+91 88375 78244",
    href: "https://wa.me/918837578244",
    hoverBorder: "hover:border-green-500/60",
    hoverGlow: "group-hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]",
    iconColor: "group-hover:text-green-400",
    iconBg: "group-hover:bg-green-500/15",
    lineGradient: "from-green-500 to-emerald-500",
    glowBg: "from-green-500/10 to-emerald-500/5",
    renderIcon: (cls) => <WhatsAppSVG className={cls} />,
  },
  {
    title: "GitHub",
    value: "github.com/lakshay7093",
    href: "https://github.com/lakshay7093",
    hoverBorder: "hover:border-zinc-400/60",
    hoverGlow: "group-hover:shadow-[0_0_50px_rgba(161,161,170,0.2)]",
    iconColor: "group-hover:text-white",
    iconBg: "group-hover:bg-white/10",
    lineGradient: "from-zinc-400 to-zinc-600",
    glowBg: "from-zinc-400/10 to-zinc-600/5",
    renderIcon: (cls) => <GithubSVG className={cls} />,
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/lakshay-saini-6905b728a/",
    hoverBorder: "hover:border-blue-500/60",
    hoverGlow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]",
    iconColor: "group-hover:text-blue-400",
    iconBg: "group-hover:bg-blue-500/15",
    lineGradient: "from-blue-500 to-cyan-400",
    glowBg: "from-blue-500/10 to-cyan-400/5",
    renderIcon: (cls) => <LinkedinSVG className={cls} />,
  },
];

type FormState = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.12)] text-base";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setFormState("error");
        return;
      }

      setFormState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-40 px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-18"
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] mb-5 text-sm">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Let&apos;s Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Amazing</span>
          </h2>

          <p className="text-zinc-400 mt-8 text-lg max-w-3xl mx-auto leading-8">
            I&apos;m always open to discussing new opportunities,
            collaborations and innovative projects. Drop me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Main Grid — Form + Links */}
        <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-start">

          {/* Contact Form — takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[36px] p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.06)]">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none rounded-[36px]" />

              <h3 className="relative z-10 text-2xl font-bold mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-zinc-400 text-sm font-medium" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Lakshay Saini"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={formState === "loading" || formState === "success"}
                      className={inputBase}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-zinc-400 text-sm font-medium" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={formState === "loading" || formState === "success"}
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-zinc-400 text-sm font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project collaboration, freelance work..."
                    value={form.subject}
                    onChange={handleChange}
                    required
                    disabled={formState === "loading" || formState === "success"}
                    className={inputBase}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-zinc-400 text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={formState === "loading" || formState === "success"}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Feedback messages */}
                <AnimatePresence mode="wait">
                  {formState === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-2xl px-5 py-4 text-green-400"
                    >
                      <CheckCircle size={20} className="flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Message sent! I&apos;ll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {formState === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl px-5 py-4 text-red-400"
                    >
                      <AlertCircle size={20} className="flex-shrink-0" />
                      <span className="text-sm font-medium">{errorMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === "loading" || formState === "success"}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-base shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : formState === "success" ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

          {/* Contact Links — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6, scale: 1.02 }}
                className={`group relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-2xl transition-all duration-500 ${contact.hoverBorder} ${contact.hoverGlow} flex items-center gap-6`}
              >
                {/* Hover Glow Background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${contact.glowBg} transition-opacity duration-500 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 transition-all duration-500 ${contact.iconBg}`}
                >
                  {contact.renderIcon(
                    `text-zinc-400 transition-colors duration-300 ${contact.iconColor}`
                  )}
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 min-w-0">
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-1">
                    {contact.title}
                  </p>
                  <p className="text-white font-semibold text-sm truncate">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={16}
                  className="relative z-10 text-zinc-600 group-hover:text-zinc-300 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                />

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${contact.lineGradient} transition-all duration-500`}
                />
              </motion.a>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] p-7 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-50" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Available for Work</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Open to freelance & full-time roles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28"
        >
          {/* Top divider with gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Col 1 — Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <span className="text-white font-black text-sm">LS</span>
                </div>
                <span className="text-white font-bold text-lg">Lakshay Saini</span>
              </div>
              <p className="text-zinc-500 text-sm leading-7 max-w-xs">
                Full Stack Developer crafting scalable web & mobile experiences with React, Next.js and React Native.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/lakshay7093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-400 group-hover:text-white transition-colors">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/lakshay-saini-6905b728a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-400 group-hover:text-blue-400 transition-colors">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:lakshaysaini181@gmail.com"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail size={14} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a
                  href="https://wa.me/918837578244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-400 group-hover:text-green-400 transition-colors">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2 — Quick Nav */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em]">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "GitHub Activity", href: "#github" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-400 transition-colors duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Tech & Admin */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em]">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Next.js 16", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
                  { name: "React 19", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
                  { name: "TypeScript", color: "text-sky-400 border-sky-500/30 bg-sky-500/5" },
                  { name: "Tailwind v4", color: "text-teal-400 border-teal-500/30 bg-teal-500/5" },
                  { name: "Framer Motion", color: "text-purple-400 border-purple-500/30 bg-purple-500/5" },
                  { name: "MySQL", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 rounded-lg border text-xs font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>


            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-zinc-600 text-xs">
              © 2026 Lakshay Saini — All rights reserved
            </p>
            <p className="text-zinc-700 text-xs flex items-center gap-1.5">
              Made with
              <span className="text-pink-500">♥</span>
              in India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
