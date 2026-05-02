"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import all sections with SSR disabled
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const SocialLinks = dynamic(() => import("@/components/SocialLinks"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const HeroSection = dynamic(() => import("@/sections/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/sections/AboutSection"), { ssr: false });
const SkillsSection = dynamic(() => import("@/sections/SkillsSection"), { ssr: false });
const ExperienceSection = dynamic(() => import("@/sections/ExperienceSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/sections/ProjectsSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/sections/ContactSection"), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="gradient-bg min-h-screen flex items-center justify-center bg-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#7c3aed30] border-t-[#7c3aed] rounded-full animate-spin"></div>
          <p className="text-slate-400 font-mono text-sm animate-pulse">Loading Portfolio...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />
      <SocialLinks />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
