"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { HiLocationMarker } from "react-icons/hi";

const LINES = [
  { text: "$ kaowsar --init workspace",        color: "#a78bfa", delay: 0    },
  { text: "✓ Loading React 19...",              color: "#34d399", delay: 600  },
  { text: "✓ Next.js 15 ready",                color: "#34d399", delay: 1100 },
  { text: "✓ Tailwind CSS configured",         color: "#34d399", delay: 1600 },
  { text: "$ install backend",                 color: "#a78bfa", delay: 2200 },
  { text: "✓ Node.js + Express loaded",        color: "#34d399", delay: 2800 },
  { text: "✓ MongoDB connected",               color: "#34d399", delay: 3300 },
  { text: "$ deploy --platform=aws",           color: "#a78bfa", delay: 3900 },
  { text: "✓ Docker container running",        color: "#34d399", delay: 4500 },
  { text: "✓ All systems operational 🚀",      color: "#67e8f9", delay: 5100 },
];

function TerminalBlock({ inView }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, line.delay);
    });
  }, [inView, started]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-8 rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "rgba(8, 12, 24, 0.92)" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
        style={{ background: "rgba(255,255,255,0.03)" }}>
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-[11px] text-slate-500 font-mono">kaowsar@portfolio ~ zsh</span>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-3 font-mono text-[11px] space-y-1 min-h-[140px]">
        {LINES.slice(0, visibleCount).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        {visibleCount < LINES.length && (
          <span className="inline-block w-2 h-3.5 bg-primary/80 animate-pulse align-middle" />
        )}
        {visibleCount >= LINES.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 mt-2"
          >
            █ ready
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const facts = [
  { icon: "🎓", label: "Education", value: "B.Sc. Computer Science" },
  { icon: "🟢", label: "Availability", value: "Open to Work" },
  { icon: "💼", label: "Experience", value: "1+ Years" },
  { icon: "🚀", label: "Projects", value: "5+ Delivered" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-dark/40" ref={ref}>
      {/* Animated floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="relative"
          >
            {/* Main card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden border border-primary/15 group/card"
            >
              {/* Animated shimmer border */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              {/* Avatar section */}
              <div className="flex items-center gap-6 mb-8">
                <motion.div
                  whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-primary/20 border border-white/10 flex items-center justify-center bg-dark">
                    <img 
                      src="https://i.ibb.co.com/j9DjZphw/photo-2026-03-09-22-38-12.jpg" 
                      alt="Kaowsar Azad" 
                      className="w-full h-full object-cover object-center scale-110 transition-transform duration-700 group-hover/card:scale-125"
                    />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-dark"
                  />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Kaowsar Azad</h3>
                  <p className="text-primary-light text-sm">Full Stack Developer</p>
                  <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs">
                    <HiLocationMarker size={12} />
                    Bangladesh
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <div className="text-5xl text-primary/30 font-serif absolute -top-2 -left-1">"</div>
                <p className="text-slate-300 text-sm leading-relaxed pl-5 italic">
                  Code is poetry. I write it with precision, passion, and purpose — 
                  turning complex problems into elegant solutions that scale.
                  <span className="text-4xl text-primary/30 font-serif inline-block ml-1 translate-y-2 rotate-180">"</span>
                </p>
              </div>

              {/* Quick facts grid */}
              <div className="grid grid-cols-2 gap-3">
                {facts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <motion.span
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      className="text-xl inline-block"
                    >{fact.icon}</motion.span>
                    <div className="text-xs text-slate-500 mt-1">{fact.label}</div>
                    <div className="text-sm font-semibold text-white">{fact.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating orbs */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right: Story text */}
          <div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display font-bold text-2xl text-white mb-4"
              >
                Crafting Digital Experiences <span className="gradient-text">Since 2025</span>
              </motion.h3>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                {[
                  "Hi! I'm a passionate full-stack developer with over 1 years of experience building scalable web applications. I specialize in React, Next.js, and Node.js.",
                  "My journey began with a curiosity for how websites work, which evolved into a career building products that millions of people use daily. I thrive at the intersection of design and engineering — creating interfaces that are both beautiful and technically robust.",
                  "When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring the latest developments in AI.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Animated Terminal Block */}
            <TerminalBlock inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}


