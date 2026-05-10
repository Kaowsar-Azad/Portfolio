"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// ==========================================
// ডাটা - আপনার অভিজ্ঞতার তালিকা
// ==========================================
const experiences = [
  {
    year: "2026 — PRESENT",
    role: "Full Stack Developer",
    company: "Self Learning & Projects",
    desc: "Building full-stack web applications using modern technologies like React, Next.js, and backend tools. Focused on scalable architecture, performance, and real-world problem solving.",
    icon: "🚀",
  },
  {
    year: "2025 — PRESENT",
    role: "Frontend Web Developer",
    company: "Self Learning",
    desc: "Developing responsive and interactive user interfaces using React and Next.js. Focused on UI/UX, performance optimization, and modern web practices.",
    icon: "💻",
  },
  {
    year: "2023 — 2024",
    role: "Programming Fundamentals",
    company: "Self Learning",
    desc: "Gained basic knowledge in Python and Java. Developed problem-solving skills, logical thinking, and understanding of core programming concepts.",
    icon: "🧠",
  },
  {
    year: "2023 — PRESENT",
    role: "Computer Science Student (Diploma)",
    company: "Diploma in CST",
    desc: "Pursuing Diploma in Computer Science and Technology (2023–2027). Learning programming, software development, and core computer science fundamentals.",
    icon: "🎓",
  }
];

// ==========================================
// কার্ড কম্পোনেন্ট
// ==========================================
function ExperienceCard({ exp, index }) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: 25, y: 80 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: { 
        duration: 1.2, 
        type: "spring",
        bounce: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    margin: "-45% 0px -45% 0px", // স্ক্রিনের একদম মাঝখানে থাকলে ট্রিগার হবে
    once: false 
  });

  return (
    <motion.div 
      ref={cardRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-20 md:mb-32 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} group z-10 perspective-1000 ${isInView ? "active-card" : ""}`}
    >
      {/* সেন্টার আইকন - গ্লোয়িং ইফেক্ট সহ */}
      <div className="absolute left-4 md:left-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#030712] border border-white/10 md:-translate-x-6 flex items-center justify-center text-lg md:text-xl z-20 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
         <div className="absolute inset-0 rounded-full bg-cyan-400/5 animate-pulse" />
         {exp.icon}
      </div>

      <div className="w-full md:w-1/2 pl-16 md:pl-0 z-10">
        <div className="relative p-[1px] rounded-2xl md:rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0)] group-[.active-card]:shadow-[0_0_50px_rgba(34,211,238,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 group-[.active-card]:opacity-100 transition-opacity duration-700" />
          
          <div className="relative h-full bg-[#050914]/90 backdrop-blur-3xl p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 transition-all duration-500 group-[.active-card]:bg-[#0a1128]">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs font-bold mb-6">
               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
               {exp.year}
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-black mb-3 text-white leading-tight">
              {exp.role}
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-purple-400 font-semibold mb-6 tracking-widest text-xs sm:text-sm uppercase">
              {exp.company}
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
              {exp.desc}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block" />
    </motion.div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="pt-10 pb-32 relative bg-[#030712] overflow-hidden">
      {/* Background patterns and glows */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020617] to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent z-0" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase block mb-4">My Journey</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            EXPERIENCE
          </h2>
        </motion.div>
        <div className="relative">
          {/* অত্যন্ত চিকন ড্যাশড লাইন (১ পিক্সেল) */}
          <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-[0.5px] bg-white/5 z-0">
            <div className="w-full h-full border-l border-dashed border-white/20" />
            <motion.div 
              style={{ scaleY }} 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400 to-purple-500 origin-top shadow-[0_0_10px_#22d3ee]" 
            />
          </div>

          {/* স্ক্রোল কণা */}
          <motion.div
            style={{ 
              top,
              left: "50%",
              translateX: "-50%"
            }}
            className="absolute w-3 h-3 z-20 hidden md:block"
          >
            <div className="w-full h-full bg-white rounded-full blur-[1px] shadow-[0_0_15px_#22d3ee]" />
          </motion.div>

          <div className="relative pt-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}