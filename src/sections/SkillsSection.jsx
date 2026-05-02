"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import Tilt from "react-parallax-tilt";
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiVuedotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiJsonwebtokens,
  SiGithub, SiVercel, SiFigma, SiNpm, SiNetlify, SiGit, SiDaisyui
} from "react-icons/si";
import { FaNetworkWired, FaMagic, FaCode, FaPaintBrush, FaIcons, FaRocket, FaPalette, FaBell } from "react-icons/fa";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaPaintBrush, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#41B883" },
      { name: "Framer Motion", icon: SiFramer, color: "#E91E63" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JSON API", icon: SiJsonwebtokens, color: "#f59e0b" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Hero UI", icon: FaRocket, color: "#000000" },
      { name: "React Icons", icon: FaIcons, color: "#61DAFB" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Daisy UI", icon: SiDaisyui, color: "#1ad1a5" },
      { name: "Toastify", icon: FaBell, color: "#f59e0b" },
    ],
  },
];

/* ── 3D Fan Card ── */
function FanCard({ skill, index, total, inView, multiplier }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate the arc position for the fan effect
  const mid = (total - 1) / 2;
  const offset = index - mid;
  
  // Logic to identify the "Main" card
  // For Tools, it's GitHub. For others, it's the center card.
  const isMainCard = skill.name === "GitHub" || (skill.name !== "GitHub" && Math.abs(offset) <= 0.5);
  
  // Base transforms
  const rotateZ = offset * 8; // Slightly more rotation for a wider fan
  const translateX = offset * multiplier; // Responsive spread
  const translateY = Math.abs(offset) * 12; // Arched position
  const zIndex = 20 - Math.abs(offset);

  const Icon = skill.icon;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 300, rotateZ: 0, rotateX: 0 }}
      animate={inView ? {
        opacity: 1,
        x: translateX,
        y: translateY,
        rotateZ: rotateZ,
        rotateX: -15 // Slight backward tilt for depth
      } : { opacity: 0, y: 300, rotateZ: 0, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: inView ? index * 0.05 : 0
      }}
      whileHover={{ 
        y: translateY - 100, // Lifts much higher
        rotateZ: 0, 
        rotateX: 0, // Straightens out
        scale: 1.25,
        zIndex: 100 
      }}
      className="absolute bottom-4 cursor-pointer"
      style={{
        transformOrigin: "bottom center",
        zIndex: zIndex
      }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={800}
        transitionSpeed={1500}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor={skill.color}
        glarePosition="all"
        className="w-[140px] h-[190px] sm:w-[180px] sm:h-[240px] md:w-[220px] md:h-[300px] rounded-2xl flex flex-col items-center justify-center gap-4 bg-[#0a0f1c]/80 border shadow-2xl transition-colors duration-300 hover:border-opacity-50 hover:bg-[#0a0f1c]/90"
        style={{ borderColor: `${skill.color}40` }}
      >
        {/* Permanent subtle tint background so skill is identifiable without hovering */}
        <div
          className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
          style={{ background: `linear-gradient(to bottom right, ${skill.color}, transparent)` }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl pointer-events-none"
          style={{ background: skill.color }}
        />

        <motion.div
          variants={{
            initial: { filter: "blur(0px)" },
            blurred: { 
              filter: "blur(2.5px)",
              transition: { delay: 3, duration: 1 } 
            },
            clear: { 
              filter: "blur(0px)",
              transition: { duration: 0.3 } 
            }
          }}
          initial="initial"
          animate={isHovered || isMainCard ? "clear" : "blurred"}
          className="flex flex-col items-center justify-center gap-4 z-10"
        >
          <Icon
            className="text-5xl sm:text-6xl md:text-7xl drop-shadow-lg"
            style={{ color: skill.color }}
          />
          <span
            className="text-sm sm:text-base font-bold text-center uppercase tracking-widest px-2"
            style={{ color: skill.color }}
          >
            {skill.name}
          </span>
        </motion.div>
      </Tilt>
    </motion.div>
  );
}

/* ── Main section ── */
export default function SkillsSection() {
  const [active, setActive] = useState("Frontend");
  const [multiplier, setMultiplier] = useState(65);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const current = categories.find((c) => c.label === active);

  // Handle responsive spread for the fan
  useEffect(() => {
    const updateMultiplier = () => {
      if (window.innerWidth < 640) setMultiplier(28); // Mobile
      else if (window.innerWidth < 1024) setMultiplier(45); // Tablet
      else setMultiplier(65); // Desktop
    };
    updateMultiplier();
    window.addEventListener("resize", updateMultiplier);
    return () => window.removeEventListener("resize", updateMultiplier);
  }, []);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#030712]" ref={ref}>
      {/* Unique background for Skills section */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.2em] uppercase block mb-4">
            Tech Arsenal
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm font-mono tracking-widest">
            Hover a card to "pick" it from the fan.
          </p>
        </motion.div>

        {/* category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: inView ? 0.15 : 0 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map(({ label }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300
                ${active === label
                  ? "text-white shadow-lg shadow-primary/30"
                  : "text-slate-400 hover:text-white glass border border-white/5"}`}
            >
              {active === label && (
                <motion.span
                  layoutId="activeTabFan"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                  style={{ zIndex: -1 }}
                />
              )}
              {label}
            </button>
          ))}
        </motion.div>

        {/* 3D Card Fan Container */}
        <div className="relative w-full max-w-5xl h-[250px] sm:h-[300px] md:h-[360px] flex justify-center items-end mt-5 perspective-[1500px]">
          <AnimatePresence mode="wait">
            {current.skills.map((skill, i) => (
              <FanCard
                key={`${active}-${skill.name}`}
                skill={skill}
                index={i}
                total={current.skills.length}
                inView={inView}
                multiplier={multiplier}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
