"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

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
    <section id="about" className="py-28 relative overflow-hidden bg-dark/40" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

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
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden border border-primary/15">
              {/* Card shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Avatar section */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-primary/20 border border-white/10 flex items-center justify-center bg-dark">
                    <img 
                      src="https://i.ibb.co.com/j9DjZphw/photo-2026-03-09-22-38-12.jpg" 
                      alt="Kaowsar Azad" 
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-dark animate-pulse" />
                </div>
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
                    className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-xl">{fact.icon}</span>
                    <div className="text-xs text-slate-500 mt-1">{fact.label}</div>
                    <div className="text-sm font-semibold text-white">{fact.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

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
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Crafting Digital Experiences <span className="gradient-text">Since 2019</span>
              </h3>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  Hi! I'm a passionate full-stack developer with over 1 years of experience building 
                  scalable web applications. I specialize in React, Next.js, and Node.js.
                </p>
                <p>
                  My journey began with a curiosity for how websites work, which evolved into a career 
                  building products that millions of people use daily. I thrive at the intersection of 
                  design and engineering — creating interfaces that are both beautiful and technically 
                  robust.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source, writing technical 
                  articles, or exploring the latest developments in AI.
                </p>
              </div>
            </motion.div>

            {/* What I do cards */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { icon: FaCode, title: "Frontend", desc: "React, Next.js", color: "from-primary to-primary/50" },
                { icon: FaServer, title: "Backend", desc: "Node.js, Express, APIs", color: "from-secondary to-secondary/50" },
                { icon: FaDatabase, title: "Database", desc: "PostgreSQL, MongoDB, Redis", color: "from-accent to-accent/50" },
                { icon: FaTools, title: "DevOps", desc: "Docker, AWS, CI/CD", color: "from-green-500 to-green-500/50" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-primary/30 transition-all cursor-default"
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon className="text-white text-sm" />
                  </div>
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
