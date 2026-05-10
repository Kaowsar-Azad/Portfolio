"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value:"kaowsarazad33@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=kaowsarazad33@gmail.com",
    color: "#7c3aed",
    action: "Send Mail",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "01798608539",
    href: "tel:01798608539",
    color: "#06b6d4",
    action: "Call Now",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Comilla , Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=Comilla,+Bangladesh",
    color: "#f59e0b",
    action: "View Map",
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // আপনাকে শুধু এখানে আপনার Formspree ID-টি বসাতে হবে
    // উদাহরণ: "https://formspree.io/f/আপনার_আইডি"
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykozjzb"; 

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-dark/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeDown}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Let's connect</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop a message below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeRight}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, color, action }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 glass rounded-xl p-3 sm:p-4 border border-white/5 hover:border-primary/25 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200 break-all">{value}</div>
                  </div>
                </div>
                
                {/* Action Button */}
                <div 
                  className="px-3 py-1.5 rounded-full text-xs font-semibold sm:block"
                  style={{ background: `${color}15`, color: color, border: `1px solid ${color}30` }}
                >
                  {action}
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="glass rounded-xl p-5 border border-white/5">
              <p className="text-sm text-slate-500 mb-4">Connect on social</p>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: "https://github.com/Kaowsar-Azad", color: "#fff" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kaowsar-azad", color: "#0a66c2" },
                  { icon: FaTwitter, href: "https://x.com/pranto17297", color: "#1da1f2" },
                ].map(({ icon: Icon, href, color }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 border border-white/5 transition-all"
                    style={{ "--hover-color": color }}
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
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass rounded-xl p-5 border border-green-400/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium text-sm">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs mt-2">
                Open for freelance, full-time remote, and collaboration opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeLeft}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-primary/10 space-y-5"
            >
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-2" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 input-glow transition-all focus:bg-white/8"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 input-glow transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry / Collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 input-glow transition-all"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 input-glow transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ripple ${
                  status === "sent"
                    ? "bg-green-500 shadow-lg shadow-green-500/30"
                    : "btn-neon"
                }`}
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <HiPaperAirplane className="rotate-90" />
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {status === "sent" && <span>✅ Message Sent!</span>}
                {status === "error" && <span>❌ Error. Try again.</span>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Notification Overlay */}
      <AnimatePresence>
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-[#0f172a] border border-green-500/30 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-8">
                Thank you for reaching out. I will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all"
              >
                Awesome!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
