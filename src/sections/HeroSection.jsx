"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "Next.js Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

function useTyping(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting
      ? speed / 2
      : charIdx === current.length
      ? pause
      : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIdx, charIdx, deleting, words, speed, pause]);

  return text;
}

// Fixed particle positions to avoid SSR/client hydration mismatch
const PARTICLES = [
  { left: 14, top: 8 }, { left: 73, top: 22 }, { left: 31, top: 61 },
  { left: 89, top: 45 }, { left: 52, top: 83 }, { left: 6, top: 37 },
  { left: 67, top: 71 }, { left: 43, top: 14 }, { left: 91, top: 88 },
  { left: 25, top: 55 }, { left: 78, top: 33 }, { left: 11, top: 79 },
  { left: 59, top: 6 }, { left: 36, top: 92 }, { left: 82, top: 18 },
  { left: 48, top: 47 }, { left: 19, top: 25 }, { left: 64, top: 58 },
  { left: 97, top: 67 }, { left: 3, top: 90 },
];

const DELAYS = [0.3, 1.2, 2.1, 0.7, 3.5, 1.8, 4.2, 0.1, 2.8, 1.5,
                3.0, 0.9, 2.3, 4.7, 1.1, 3.8, 0.5, 2.6, 1.9, 4.0];
const DURATIONS = [3.2, 4.5, 3.8, 5.1, 3.5, 4.8, 3.1, 5.5, 4.2, 3.7,
                   5.0, 4.1, 3.9, 4.6, 3.3, 5.3, 4.4, 3.6, 5.2, 4.9];

export default function HeroSection() {
  const typedRole = useTyping(ROLES);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg grid-bg"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-primary/25 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-24 right-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-2xl"
        />
      </div>

      {/* Floating particles — client-only to avoid hydration mismatch */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {PARTICLES.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary-light/40"
              style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
              animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: DURATIONS[i],
                repeat: Infinity,
                delay: DELAYS[i],
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 w-full">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary-light mb-6 border border-primary/20"
          >
            <FaCode className="text-primary" />
            Available for Work
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg mb-2 font-mono"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-4 leading-tight"
          >
            <span className="gradient-text text-glow">Kaowsar </span>
            <span className="gradient-text text-glow">Azad</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 h-10 flex items-center justify-center lg:justify-start"
          >
            <span className="gradient-text-purple">{typedRole}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            I craft beautiful, high-performance digital experiences. Passionate about
            clean code, modern architectures, and pushing the boundaries of what&apos;s
            possible on the web.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex gap-8 mb-8 justify-center lg:justify-start"
          >
            {[
              { value: "1+", label: "Years Exp" },
              { value: "15+", label: "Projects" },
              { value: "5+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon px-7 py-3.5 rounded-full font-semibold text-white flex items-center gap-2 ripple"
            >
              <span>View My Work</span>
              <HiArrowRight />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-full font-semibold border border-primary/40 text-primary-light flex items-center gap-2 glass hover:border-primary/70 hover:bg-primary/10 transition-all duration-300 ripple"
            >
              <HiDownload />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-secondary/20"
            />

            {/* Blob container */}
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "50% 60% 30% 60% / 30% 60% 70% 40%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
                y: [-12, 12, -12],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 bg-gradient-to-br from-primary/80 via-primary to-secondary overflow-hidden flex items-center justify-center"
            >
              <img 
                src="https://i.ibb.co.com/j9DjZphw/photo-2026-03-09-22-38-12.jpg" 
                alt="Kaowsar Azad" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{ delay: 1, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -left-4 top-16 glass px-3 py-2 rounded-xl text-xs font-medium border border-primary/20"
            >
              <span className="gradient-text font-bold">React</span> Expert
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{ delay: 1.1, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
              className="absolute -right-6 top-24 glass px-3 py-2 rounded-xl text-xs font-medium border border-secondary/20"
            >
              ⚡ Next.js 15
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ delay: 1.2, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              className="absolute -bottom-2 left-8 glass px-3 py-2 rounded-xl text-xs font-medium border border-accent/20"
            >
              🔥 JavaScript
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ delay: 1.3, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
              className="absolute top-0 right-0 glass px-3 py-2 rounded-xl text-xs font-medium border border-green-400/20"
            >
              🟢 Open to Work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{ delay: 1.4, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
              className="absolute -right-10 bottom-12 glass px-3 py-2 rounded-xl text-xs font-medium border border-green-500/20"
            >
              🍃 MongoDB
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-slate-600 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
