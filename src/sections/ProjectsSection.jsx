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
    emoji: "https://i.ibb.co.com/JSrW7tH/Screenshot-2026-05-02-001914.png", // প্রজেক্টের ইমেজ লিঙ্ক
    gradient: "from-violet-600 to-purple-900", // কার্ডের ব্যাকগ্রাউন্ড কালার
    accent: "#7c3aed",             // হাইলাইট কালার
    category: "Full Stack",        // ক্যাটাগরি
    stars: 20,                    // স্টারের সংখ্যা
  },
  {
    title: " Personal portfolio website",
    desc: "A modern and responsive personal portfolio website showcasing services, projects, and professional information with a clean and minimal design.",
    long: "Powered by Socket.io and WebRTC for peer-to-peer video calls and messaging.",
    tags: ["Html", "Tailwind CSS"],
    github: "https://github.com/Kaowsar-Azad/personal-website",
    live: "https://example.com",
    emoji: "https://i.ibb.co.com/Z6nsgx52/Screenshot-2026-05-02-002927.png",
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
    emoji: "https://camo.githubusercontent.com/92c51694713d31c9e7d60852a32670cd57e804937fe20969a4335f3e365dd7d1/68747470733a2f2f692e6962622e636f2e636f6d2f37504e426276302f77656270616765312e706e67",
    gradient: "from-emerald-600 to-teal-900",
    accent: "#10b981",
    category: "Full Stack",
    stars: 54,
  }
];

const categories = ["All","Frontend","Full Stack"];

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
      
      {/* Unique purple glow for Projects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* হেডিং সেকশন */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* ফিল্টার ট্যাব */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -10 }} 
                onClick={() => setSelected(project)}
                className="group relative bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
              >
                {/* ইমেজ অংশ */}
                <div className="h-60 relative flex items-center justify-center overflow-hidden border-b border-white/5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                  
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {project.emoji.startsWith("http") ? (
                      <img 
                        src={project.emoji} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                      <HiStar /> {project.stars}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
                <div className="flex gap-4">
                  <a href={selected.github} target="_blank" className="flex-1 bg-white/5 py-4 rounded-xl text-center text-white hover:bg-white/10 border border-white/10 transition-all">GitHub</a>
                  <a href={selected.live} target="_blank" className="flex-1 btn-neon py-4 rounded-xl text-center text-white font-bold">Live Demo</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
