import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaskLine } from "./Reveal";
import { IMAGES } from "../data";
import { scrollTo } from "./Navbar";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen w-full overflow-hidden bg-obsidian">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: imgY, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={IMAGES.heroArm}
          alt="Industrial robotic arm"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-obsidian" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 bg-blue animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
            MACE · Kothamangalam · Kerala
          </span>
        </motion.div>

        <h1 className="font-display font-semibold text-white text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter">
          <MaskLine delay={0.3}>Mechanical &amp; Automation</MaskLine>
          <MaskLine delay={0.5}>
            <span className="text-blue">Robotics</span> Club
          </MaskLine>
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="font-display text-2xl md:text-3xl text-white/90 max-w-xl leading-tight"
          >
            Innovating the Future Through Robotics and Automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="flex flex-wrap gap-3 md:justify-end"
          >
            <button
              data-testid="hero-join-btn"
              onClick={() => scrollTo("join")}
              className="group inline-flex items-center gap-2 bg-blue text-white px-7 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-obsidian transition-colors duration-300 cursor-pointer"
            >
              Join MARC
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </button>
            <button
              data-testid="hero-projects-btn"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            >
              View Projects
            </button>
            <button
              data-testid="hero-events-btn"
              onClick={() => scrollTo("events")}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            >
              Upcoming Events
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-2 text-white/50 font-mono text-[10px] uppercase tracking-widest"
      >
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
