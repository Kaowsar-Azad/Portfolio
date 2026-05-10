"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiCpu, FiBriefcase, FiLayers, FiMail } from "react-icons/fi";

const navLinks = [
  { href: "#home", label: "Home", icon: FiHome },
  { href: "#about", label: "About", icon: FiUser },
  { href: "#skills", label: "Skills", icon: FiCpu },
  { href: "#experience", label: "Experience", icon: FiBriefcase },
  { href: "#projects", label: "Projects", icon: FiLayers },
  { href: "#contact", label: "Contact", icon: FiMail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "pt-4 px-4 sm:px-6 pointer-events-none" : "pt-0 px-0"
      }`}
    >
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 nav-glass-area ${
          scrolled
            ? "w-full max-w-5xl rounded-full backdrop-blur-xl bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 py-2.5 px-4 sm:px-6"
            : "w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { 
            e.preventDefault(); 
            handleNav("#home"); 
          }}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img src="https://i.ibb.co.com/33LrMqc/k-img.png" alt="Kaowsar Logo" className="w-8 h-8 object-contain mix-blend-screen relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300" />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 group/link ${
                active === link.href
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                <link.icon className={`text-lg transition-transform duration-300 ${active === link.href ? "text-cyan-400 scale-110" : "opacity-70 group-hover/link:opacity-100 group-hover/link:scale-110"}`} />
                <span className="hidden lg:block">{link.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/resume.pdf"
            download
            className="btn-neon px-5 py-2 rounded-full text-sm font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg glass"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto md:hidden glass-strong border-t border-primary/10 w-full max-w-7xl mx-auto"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center gap-3 text-left text-sm font-medium py-2.5 px-4 rounded-xl transition-all ${
                    active === link.href
                      ? "bg-primary/20 text-primary-light"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon className={`text-lg ${active === link.href ? "text-primary-light" : "opacity-50"}`} />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

