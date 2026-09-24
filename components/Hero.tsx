"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";

// Simple typewriter hook
function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypewriter("Halo, saya Muh Zubair.", 70);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16"
      aria-label="Hero Section"
    >
      {/* Ambient background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#7C3AED" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#F97316" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E1B4B] bg-[#12121A] text-sm text-[#94A3B8] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" aria-hidden="true" />
            Terbuka untuk peluang baru
          </motion.div>

          {/* Typewriter Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F1F5F9] mb-4 min-h-[3.5rem]">
            {displayed}
            {!done && (
              <span className="inline-block w-0.5 h-10 bg-[#F97316] ml-1 animate-pulse align-middle" aria-hidden="true" />
            )}
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-medium text-[#7C3AED] mb-4"
          >
            Information Systems &apos;23 | Full-Stack Web Developer &amp; Aspiring MIS Analyst
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#94A3B8] text-base leading-relaxed mb-8 max-w-lg"
          >
            Menggabungkan logika pemrograman <em>full-stack</em> dengan analisis proses bisnis
            untuk menciptakan solusi digital yang efisien dan skalabel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
              aria-label="Lihat proyek saya"
            >
              <FolderOpen size={16} aria-hidden="true" />
              Lihat Proyek
            </button>
            <a
              href="/cv-muhzubair.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#7C3AED] text-[#F1F5F9] hover:bg-[#7C3AED]/10 font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
              aria-label="Unduh CV Muh Zubair (PDF, tab baru)"
            >
              <Download size={16} aria-hidden="true" />
              Unduh CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group cursor-pointer">
            {/* Rotating ring - speeds up slightly on hover */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full group-hover:opacity-80 transition-opacity duration-500"
              style={{
                background:
                  "conic-gradient(from 0deg, #7C3AED, #F97316, #7C3AED)",
                padding: "3px",
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full rounded-full bg-[#0A0A0F]" />
            </motion.div>

            {/* Profile Image Container */}
            <div
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #12121A 0%, #1E1B4B 50%, #12121A 100%)",
              }}
            >
              <motion.img 
                src="/profile.png" 
                alt="Muh Zubair" 
                className="object-cover w-full h-full z-10 transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ filter: "brightness(0.9) contrast(1.1)" }}
              />

              {/* Cyber theme tint overlay (fades on hover) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/30 to-[#F97316]/20 mix-blend-color z-15 transition-opacity duration-500 group-hover:opacity-0" />

              {/* Inner glow overlay */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-20 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #7C3AED33, transparent 60%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-[#12121A] border border-[#1E1B4B] rounded-xl px-3 py-2 text-xs"
            >
              <span className="text-[#F97316] font-semibold">3+</span>
              <span className="text-[#94A3B8] ml-1">Proyek Selesai</span>
            </motion.div>
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#12121A] border border-[#1E1B4B] rounded-xl px-3 py-2 text-xs"
            >
              <span className="text-[#7C3AED] font-semibold">SI</span>
              <span className="text-[#94A3B8] ml-1">&apos;23</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8]"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
