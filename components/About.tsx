"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, MapPin, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Tentang Saya"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-2">
            Kenali Saya
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-[#F1F5F9]">
            About <span className="text-[#7C3AED]">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(to right, #7C3AED, #F97316)" }}
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Profile Narrative */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="bg-[#12121A] border border-[#1E1B4B] rounded-2xl p-6">
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Saya adalah mahasiswa program studi{" "}
                <span className="text-[#F1F5F9] font-medium">Sistem Informasi</span> angkatan{" "}
                <span className="text-[#F97316] font-semibold">2023</span> di Kolaka, Sulawesi Tenggara,
                dengan target kelulusan pada tahun{" "}
                <span className="text-[#F97316] font-semibold">2027</span>.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed mt-4">
                Saya memiliki ketertarikan kuat dalam menyeimbangkan keterampilan{" "}
                <em className="text-[#7C3AED]">coding</em> (rekayasa perangkat lunak) dengan manajemen
                operasional TI. Visi jangka panjang saya adalah berkarier di industri berskala besar,
                seperti sektor pertambangan, sebagai{" "}
                <span className="text-[#F1F5F9] font-medium">Operational Data Analyst</span> atau{" "}
                <span className="text-[#F1F5F9] font-medium">MIS Analyst</span>.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Lokasi", value: "Kolaka, Sultra" },
                { icon: Calendar, label: "Angkatan", value: "2023" },
                { icon: Target, label: "Target", value: "Lulus 2027" },
                { icon: GraduationCap, label: "Program", value: "Sistem Informasi" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#12121A] border border-[#1E1B4B] rounded-xl p-4 flex items-start gap-3"
                >
                  <Icon size={18} className="text-[#7C3AED] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#94A3B8]">{label}</p>
                    <p className="text-sm font-medium text-[#F1F5F9]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F1F5F9] flex items-center gap-2">
              <GraduationCap size={20} className="text-[#F97316]" aria-hidden="true" />
              Pendidikan
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#1E1B4B]" aria-hidden="true" />

              <div className="space-y-6 pl-12">
                {/* Current */}
                <div className="relative">
                  <div
                    className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-[#7C3AED] bg-[#7C3AED]"
                    aria-hidden="true"
                  />
                  <div className="bg-[#12121A] border border-[#7C3AED]/40 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#F97316] uppercase tracking-wide">
                        2023 – 2027
                      </span>
                      <span className="text-xs bg-[#7C3AED]/20 text-[#7C3AED] px-2 py-0.5 rounded-full font-medium">
                        Aktif
                      </span>
                    </div>
                    <h4 className="text-[#F1F5F9] font-semibold text-base">S1 Sistem Informasi</h4>
                    <p className="text-[#94A3B8] text-sm mt-1">
                      Kolaka, Sulawesi Tenggara
                    </p>
                    <p className="text-[#94A3B8] text-sm mt-2 leading-relaxed">
                      Fokus pada rekayasa perangkat lunak, manajemen basis data, dan analisis sistem informasi bisnis.
                    </p>
                  </div>
                </div>

                {/* Future Goal */}
                <div className="relative">
                  <div
                    className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-[#F97316] bg-[#0A0A0F]"
                    aria-hidden="true"
                  />
                  <div className="bg-[#12121A] border border-[#1E1B4B] rounded-xl p-5 opacity-60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide">
                        Target 2027
                      </span>
                      <span className="text-xs bg-[#F97316]/10 text-[#F97316] px-2 py-0.5 rounded-full font-medium">
                        Target
                      </span>
                    </div>
                    <h4 className="text-[#F1F5F9] font-semibold text-base">Wisuda & Karier</h4>
                    <p className="text-[#94A3B8] text-sm mt-1">
                      MIS / Operational Data Analyst — Sektor Pertambangan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Language badges */}
            <div className="bg-[#12121A] border border-[#1E1B4B] rounded-xl p-4">
              <p className="text-xs text-[#94A3B8] mb-3 uppercase tracking-wide font-medium">Bahasa</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { lang: "Bahasa Indonesia", level: "Native" },
                  { lang: "English", level: "Working" },
                ].map(({ lang, level }) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-[#0A0A0F] border border-[#1E1B4B] rounded-lg text-sm"
                  >
                    <span className="text-[#F1F5F9] font-medium">{lang}</span>
                    <span className="text-[#94A3B8] ml-1">— {level}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
