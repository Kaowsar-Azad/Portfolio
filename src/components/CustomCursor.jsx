"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 18, stiffness: 180, mass: 0.8 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    const onMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, input, textarea, [role='button']")) {
        setIsHovering(true);
      }
    };

    const onOut = () => setIsHovering(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Fluid Organic Blob — main large glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          filter: "blur(1px)",
        }}
        animate={{
          width: isHovering ? 72 : isClicking ? 24 : 40,
          height: isHovering ? 72 : isClicking ? 24 : 40,
          borderRadius: isHovering
            ? "40% 60% 60% 40% / 60% 40% 60% 40%"
            : isClicking
            ? "50%"
            : "60% 40% 50% 60% / 40% 60% 40% 50%",
          background: isHovering
            ? "radial-gradient(circle, rgba(6,182,212,0.55) 0%, rgba(124,58,237,0.25) 60%, transparent 100%)"
            : "radial-gradient(circle, rgba(124,58,237,0.50) 0%, rgba(6,182,212,0.20) 60%, transparent 100%)",
          boxShadow: isHovering
            ? "0 0 30px 8px rgba(6,182,212,0.25), 0 0 60px 15px rgba(124,58,237,0.12)"
            : "0 0 20px 5px rgba(124,58,237,0.25), 0 0 40px 10px rgba(6,182,212,0.10)",
          rotate: isHovering ? 15 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 280, damping: 18 },
          height: { type: "spring", stiffness: 280, damping: 18 },
          borderRadius: { duration: 0.6, ease: "easeInOut" },
          background: { duration: 0.4 },
          boxShadow: { duration: 0.4 },
          rotate: { duration: 0.6, ease: "easeInOut" },
        }}
      />

      {/* Inner core dot — snappy, instant */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          left: "0",
          top: "0",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          width: 6,
          height: 6,
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 2.5 : 1,
          background: isHovering
            ? "rgba(6,182,212,1)"
            : "rgba(124,58,237,1)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
    </>
  );
}
