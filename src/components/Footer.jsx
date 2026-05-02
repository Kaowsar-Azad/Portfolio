"use client";

import { motion } from "framer-motion";
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = {
  Navigation: ["Home", "About", "Skills", "Experience", "Projects", "Contact"],
  Services: ["Web Development", "UI/UX Design", "API Development", "Code Review", "Consulting"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="relative border-t border-primary/10 overflow-hidden"
    >
      {/* Top animated accent line */}
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" 
      />

      {/* Background animated blurs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-64 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-48 h-24 bg-secondary/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center p-1 overflow-hidden"
              >
                <img src="https://i.ibb.co.com/33LrMqc/k-img.png" alt="Kaowsar Logo" className="w-full h-full object-contain mix-blend-screen" />
              </motion.div>
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
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-slate-400 border border-white/5 transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}60`;
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
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div variants={itemVariants} key={category}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => scrollTo(link.split(" ")[0])}
                      className="text-slate-500 hover:text-primary-light text-sm transition-colors duration-200 text-left flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                      {link}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1">
            © {year} DevFolio. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-flex mx-0.5"
            >
              <FaHeart className="text-primary text-xs" />
            </motion.span>
            by Kaowsar azad
          </p>
          <div className="flex gap-6 text-slate-600 text-xs">
            <motion.a whileHover={{ y: -2, color: "#fff" }} href="#" className="transition-colors">Privacy Policy</motion.a>
            <motion.a whileHover={{ y: -2, color: "#fff" }} href="#" className="transition-colors">Terms of Service</motion.a>
            <motion.a whileHover={{ y: -2, color: "#fff" }} href="#" className="transition-colors">Sitemap</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
