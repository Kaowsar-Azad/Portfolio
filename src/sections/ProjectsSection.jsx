"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiStar } from "react-icons/hi";

// ==========================================
// ১. প্রজেক্ট লিস্ট (আপনার ডাটাগুলো এখানে রাখা হয়েছে)
// ==========================================
const projects = [
  {
    title: "KeenKeeper – Friends Profile",
    desc: "KeenKeeper – Friends Profile is a modern web application designed to help users manage and track their friendships effectively. Users can view detailed profiles of friends, perform quick interactions such as call, text, or video, and store those activities in a timeline..",
    long: "Built with Next.js 15, PostgreSQL, and Prisma. Features real-time data visualization.",
    tags: ["Next.js", "javaScript", " Tailwind CSS","React Router",],
    github: "https://github.com/Kaowsar-Azad/KeenKeeper-Friends-Profile", // আপনার git লিঙ্ক
    live: "https://singular-cactus-65d0f5.netlify.app/",   // আপনার লাইভ ডেমো লিঙ্ক
    emoji: "https://i.ibb.co.com/FbJcCgbz/Chat-GPT-Image-May-2-2026-11-59-12-PM.png", // প্রজেক্টের ইমেজ লিঙ্ক
    gradient: "from-violet-600 to-purple-900", // কার্ডের ব্যাকগ্রাউন্ড কালার
    accent: "#7c3aed",             // হাইলাইট কালার
    category: "Full Stack",        // ক্যাটাগরি
    stars: 20,                    // স্টারের সংখ্যা
  },
  {
    title: "Nexora Studio ",
    desc: "A modern personal brand and portfolio platform to showcase services, creative work, and professional identity.Crafted with clean design and structured sections to present your story, skills, and projects seamlessly.",
    long: "Powered by Socket.io and WebRTC for peer-to-peer video calls and messaging.",
    tags: ["Html", "Tailwind CSS"],
    github: "https://github.com/Kaowsar-Azad/personal-website",
    live: "https://example.com",
    emoji: "https://i.ibb.co.com/d4PvBZpd/Chat-GPT-Image-May-3-2026-12-16-03-AM.png",
    gradient: "from-cyan-600 to-blue-900",
    accent: "#06b6d4",
    category: "Frontend",
    stars: 30,
  },
  {
    title: "GitHub Issues Tracker",
    desc: "A modern and responsive web application to track and manage project issues efficiently. This project simulates a GitHub-style issue tracking system with clean UI and interactive features.",
    long: "Next.js frontend with Stripe integration and image optimization using Cloudinary.",
    tags: ["JavaScript", "Html", "Tailwind CSS"],
    github: "https://github.com/Kaowsar-Azad/5th-assignment",
    live: "https://kaowsar-azad.github.io/5th-assignment/",
    emoji: "https://i.ibb.co.com/Tx30fG4B/Chat-GPT-Image-May-3-2026-12-10-20-AM.png",
    gradient: "from-emerald-600 to-teal-900",
    accent: "#10b981",
    category: "Full Stack",
    stars: 54,
  }
];

const categories = ["All","Frontend","Full Stack"];

function ProjectCard({ project, i, setSelected }) {
  const [hovered, setHovered] = useState(false);

  // Each card spreads from a different direction based on its grid position
  const col = i % 3;   // 0=left, 1=center, 2=right
  const spreadX = col === 0 ? -60 : col === 2 ? 60 : 0;
  const spreadRotate = col === 0 ? -8 : col === 2 ? 8 : 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 150, x: spreadX, rotate: spreadRotate, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
      viewport={{ once: false, amount: 0, margin: "0px" }}
      transition={{
        duration: 0.75,
        delay: i * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setSelected(project)}
      className="group relative bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-primary/60 transition-all cursor-pointer overflow-hidden"
      style={{ boxShadow: hovered ? `0 24px 60px ${project.accent}30` : "none" }}
    >
      {/* Top shimmer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={hovered ? { x: "200%" } : { x: "-100%" }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent z-10"
      />

      {/* ইমেজ অংশ */}
      <div className="h-60 relative flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${project.accent}15, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {project.emoji.startsWith("http") ? (
            <img
              src={project.emoji}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{project.emoji}</span>
          )}
        </div>
      </div>

      {/* কন্টেন্ট অংশ */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">{project.title}</h3>
          <motion.div whileHover={{ scale: 1.2 }} className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
            <HiStar /> {project.stars}
          </motion.div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 relative bg-[#030712] overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020617] to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent z-0" />
      
      {/* Animated background orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"
      />
      {/* Unique purple glow for Projects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* হেডিং সেকশন */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-secondary font-mono text-sm tracking-widest uppercase"
          >Portfolio</motion.span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white mt-2">
            Featured <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="gradient-text"
            >Projects</motion.span>
          </h2>
          
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.5, duration: 0.5 }}
             className="mt-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs sm:text-sm font-mono text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
               <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
               </span>
               Tap any card to view <span className="text-white font-bold">GitHub</span> & <span className="text-white font-bold">Live Demo</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ফিল্টার ট্যাব */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} i={i} setSelected={setSelected} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* প্রজেক্ট ডিটেইল মোডাল */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0f172a] border border-white/10 rounded-[2rem] max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 relative flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${selected.gradient} opacity-10`} />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {selected.emoji.startsWith("http") ? (
                    <img src={selected.emoji} alt={selected.title} className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="text-8xl">{selected.emoji}</span>
                  )}
                </div>
                <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white text-2xl z-20 bg-black/40 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md">×</button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selected.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{selected.long}</p>
                <div className="mt-8">
                  {/* সুন্দর হিন্টস */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 mb-5"
                  >
                    <span className="h-px bg-gradient-to-r from-transparent to-white/10 flex-1"></span>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </span>
                      Explore Project
                    </span>
                    <span className="h-px bg-gradient-to-l from-transparent to-white/10 flex-1"></span>
                  </motion.div>

                  {/* বাটনসমূহ */}
                  <div className="flex gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={selected.github} 
                      target="_blank" 
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 py-4 rounded-xl text-white hover:bg-white/10 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all group"
                    >
                      <FiGithub className="text-xl group-hover:rotate-12 transition-transform" />
                      <span className="font-medium">Source Code</span>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={selected.live} 
                      target="_blank" 
                      className="flex-1 flex items-center justify-center gap-2 btn-neon py-4 rounded-xl text-white font-bold group"
                    >
                      <span>Live Preview</span>
                      <FiExternalLink className="text-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
