"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Kaowsar-Azad",
    label: "GitHub",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.4)",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kaowsar-azad",
    label: "LinkedIn",
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.6)",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/pranto17297",
    label: "Twitter",
    color: "#1da1f2",
    glow: "rgba(29,161,242,0.6)",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kaowsar_azad?igsh=MWE3OXY2ZnJ5NDN0dA==",
    label: "Instagram",
    color: "#e1306c",
    glow: "rgba(225,48,108,0.6)",
  },
];

export default function SocialLinks() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
    <motion.div
      key="social-links"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
    >
      {/* Vertical line top */}
      <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />

      {socialLinks.map(({ icon: Icon, href, label, color, glow }, i) => (
        <motion.div key={label} className="relative group">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.3, x: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = color;
              e.currentTarget.style.boxShadow = `0 0 20px ${glow}`;
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <Icon size={16} />
          </motion.a>

          {/* Tooltip */}
          <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-dark-card border border-primary/20 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
            {label}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-dark-card" />
          </div>
        </motion.div>
      ))}

      {/* Vertical line bottom */}
      <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
    </motion.div>
      )}
    </AnimatePresence>
  );
}
