"use client";

import { motion } from "framer-motion";
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = {
  Navigation: ["Home", "About", "Skills", "Experience", "Projects", "Contact"],
  Services: ["Web Development", "UI/UX Design", "API Development", "Code Review", "Consulting"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative border-t border-primary/10 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background blurs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-24 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1 overflow-hidden">
                <img src="https://i.ibb.co.com/33LrMqc/k-img.png" alt="Kaowsar Logo" className="w-full h-full object-contain mix-blend-screen" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                <span className="text-white">Kaow</span>
                <span className="gradient-text">sar</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Crafting digital experiences that leave a lasting impression. Full-stack developer with a passion for clean code and beautiful interfaces.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/Kaowsar-Azad", color: "#fff" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/kaowsar-azad", color: "#0a66c2" },
                { icon: FaTwitter, href: "https://x.com/pranto17297", color: "#1da1f2" },
              ].map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-slate-400 border border-white/5 transition-all"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link.split(" ")[0])}
                      className="text-slate-500 hover:text-primary-light text-sm transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1">
            © {year} DevFolio. Made with
            <FaHeart className="text-primary text-xs mx-0.5 animate-pulse" />
            by Kaowsar azad pranto
          </p>
          <div className="flex gap-6 text-slate-600 text-xs">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
