"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// ssr: false is only allowed in Client Components in Next.js 15
// This page is intentionally a Client Component to enable this pattern
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
