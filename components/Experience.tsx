"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, FileText } from "lucide-react";

type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  type: "organization" | "work";
};

const experiences: ExperienceItem[] = [
  {
    organization: "LSO Create Centre",
    role: "Anggota Aktif — Divisi Teknologi",
    period: "2023 – Sekarang",
    description:
      "Lembaga Semi Otonom (LSO) di bawah Fakultas Teknologi Informasi yang berfokus pada pengembangan kreativitas dan inovasi teknologi mahasiswa.",
    highlights: [
      "Menyusun Product Requirement Document (PRD) untuk proyek web portofolio.",
      "Merancang prompt AI berbasis UI/UX dengan tema deep cyber purple & vibrant orange.",
      "Berkontribusi pada perencanaan dan eksekusi proyek teknologi internal organisasi.",
    ],
    type: "organization",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12121A]"
      aria-label="Pengalaman dan Organisasi"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-2">
            Perjalanan Saya
          </p>
          <h2 className="text-3xl font-semibold text-[#F1F5F9]">
            Experience <span className="text-[#7C3AED]">&amp; Organizations</span>
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(to right, #7C3AED, #F97316)" }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #7C3AED, #1E1B4B)" }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.organization}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: i * 0.2 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-[#7C3AED] bg-[#7C3AED] hidden sm:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F1F5F9]" />
                </div>

                {/* Card */}
                <div className="bg-[#0A0A0F] border border-[#1E1B4B] hover:border-[#7C3AED]/50 rounded-2xl p-6 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#7C3AED20" }}
                    >
                      {exp.type === "organization" ? (
                        <Briefcase size={22} className="text-[#7C3AED]" aria-hidden="true" />
                      ) : (
                        <FileText size={22} className="text-[#F97316]" aria-hidden="true" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#F1F5F9] font-semibold text-lg leading-tight">
                        {exp.organization}
                      </h3>
                      <p className="text-[#7C3AED] text-sm font-medium mt-0.5">{exp.role}</p>
                      <span className="inline-block mt-1.5 text-xs text-[#94A3B8] bg-[#12121A] border border-[#1E1B4B] px-2.5 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2" aria-label="Pencapaian dan kontribusi">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0 mt-2"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[#94A3B8] leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
