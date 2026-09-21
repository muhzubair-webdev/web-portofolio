"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Tag } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  statusColor: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Sistem Digitalisasi Perizinan Instansi (DPMPTSP)",
    description:
      "Mengotomatisasi dan mendigitalkan alur kerja birokrasi perizinan instansi pemerintah. Sistem ini mengurangi proses manual dan mempercepat waktu penyelesaian berkas izin secara signifikan.",
    tags: ["Google Apps Script", "AppSheet"],
    status: "Implementasi Birokrasi",
    statusColor: "#10B981",
    github: "https://github.com/muhzubair",
    demo: undefined,
  },
  {
    title: "Sistem Manajemen Penjualan Peternakan",
    description:
      "Aplikasi manajemen penjualan berbasis web untuk usaha peternakan single-seller. Mencakup fitur inventaris, transaksi, laporan, dan arsitektur migrasi database yang terstruktur.",
    tags: ["Laravel 12", "MySQL", "Tailwind CSS"],
    status: "Pengembangan Aktif",
    statusColor: "#F97316",
    github: "https://github.com/muhzubair",
    demo: undefined,
  },
  {
    title: "Platform Web Hari Ozon Sedunia 2026",
    description:
      "Platform web berbasis konten saintifik untuk kompetisi karya tulis ilmiah bertema pengurangan gas rumah kaca dan pelestarian lapisan ozon. Dirancang dengan pendekatan UI/UX modern.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    status: "Konsep Kompetisi",
    statusColor: "#7C3AED",
    github: "https://github.com/muhzubair",
    demo: undefined,
  },
  {
    title: "Sistem Pengajuan & Pengarsipan Surat",
    description:
      "Proposal sistem informasi untuk pengelolaan surat-menyurat digital. Mengimplementasikan enkripsi AES-256 bit untuk keamanan data arsip yang tinggi sesuai standar keamanan informasi.",
    tags: ["Laravel", "MySQL", "AES-256 Encryption"],
    status: "Proposal Sistem",
    statusColor: "#6366F1",
    github: "https://github.com/muhzubair",
    demo: undefined,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Proyek Unggulan"
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
            Portofolio Saya
          </p>
          <h2 className="text-3xl font-semibold text-[#F1F5F9]">
            Featured <span className="text-[#7C3AED]">Projects</span>
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(to right, #7C3AED, #F97316)" }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Project Grid */}
        <div
          className="grid sm:grid-cols-2 gap-6"
          role="list"
          aria-label="Daftar proyek"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              role="listitem"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative group bg-[#12121A] border rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 overflow-hidden"
              style={{
                borderColor: hovered === i ? "#7C3AED" : "#1E1B4B",
                boxShadow:
                  hovered === i
                    ? "0 0 30px #7C3AED25, 0 0 60px #7C3AED10"
                    : "none",
                transform: hovered === i ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Top row: status badge */}
              <div className="flex items-start justify-between gap-2">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    color: project.statusColor,
                    background: `${project.statusColor}15`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#F1F5F9] font-semibold text-base leading-snug group-hover:text-[#7C3AED] transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2" aria-label="Teknologi yang digunakan">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-[#0A0A0F] border border-[#1E1B4B] text-[#94A3B8]"
                  >
                    <Tag size={10} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Overlay Actions */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-3 pt-2 border-t border-[#1E1B4B]"
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] transition-colors duration-200"
                        aria-label={`Lihat kode ${project.title} di GitHub`}
                      >
                        <Github size={14} aria-hidden="true" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F97316] hover:text-[#EA580C] transition-colors duration-200"
                        aria-label={`Lihat demo ${project.title}`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                    <span className="ml-auto text-xs text-[#94A3B8] flex items-center gap-1">
                      <ExternalLink size={10} aria-hidden="true" />
                      Lihat Detail
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
