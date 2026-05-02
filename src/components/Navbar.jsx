"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-dark/80 shadow-lg shadow-primary/10 border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { 
            e.preventDefault(); 
            handleNav("#home"); 
          }}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1 overflow-hidden">
            <img src="https://i.ibb.co.com/33LrMqc/k-img.png" alt="Kaowsar Logo" className="w-full h-full object-contain mix-blend-screen" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight">
            <span className="text-white">Kaow</span>
            <span className="gradient-text">sar</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative nav-link text-sm font-medium transition-colors duration-200 pb-1 ${
                active === link.href
                  ? "text-primary-light"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="activeLink"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              )}
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
            className="md:hidden glass-strong border-t border-primary/10"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                    active === link.href
                      ? "bg-primary/20 text-primary-light"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="btn-neon text-center px-5 py-2 rounded-full text-sm font-semibold text-white mt-2"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
