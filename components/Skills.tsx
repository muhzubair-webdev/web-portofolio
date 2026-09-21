"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Settings,
  LayoutDashboard,
  Globe,
  Server,
  Cpu,
  FileText,
  Search,
  Workflow,
  Triangle,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ElementType;
};

type SkillCategory = {
  title: string;
  color: string;
  bg: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Full-Stack Development",
    color: "#7C3AED",
    bg: "#7C3AED15",
    skills: [
      { name: "CodeIgniter 3", icon: Code2 },
      { name: "Laravel 12", icon: Code2 },
      { name: "Node.js", icon: Server },
      { name: "React", icon: Triangle },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: LayoutDashboard },
    ],
  },
  {
    title: "Database & Cloud",
    color: "#F97316",
    bg: "#F9731615",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "Vercel", icon: Cloud },
      { name: "Supabase", icon: Database },
      { name: "InfinityFree", icon: Server },
    ],
  },
  {
    title: "Management & Automation",
    color: "#06B6D4",
    bg: "#06B6D415",
    skills: [
      { name: "Google Apps Script", icon: Workflow },
      { name: "IT Service Management", icon: Settings },
      { name: "PRD Creation", icon: FileText },
      { name: "Database Architecture", icon: Cpu },
      { name: "Analisis Kebutuhan", icon: Search },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12121A]"
      aria-label="Keahlian dan Alat"
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
            Teknologi & Alat
          </p>
          <h2 className="text-3xl font-semibold text-[#F1F5F9]">
            Skills <span className="text-[#7C3AED]">&amp; Tools</span>
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(to right, #7C3AED, #F97316)" }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: category.color, background: category.bg }}
                >
                  {category.title}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: `${category.color}30` }}
                  aria-hidden="true"
                />
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-wrap gap-3"
                role="list"
                aria-label={`Keahlian ${category.title}`}
              >
                {category.skills.map(({ name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    role="listitem"
                    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-default"
                    style={{
                      background: "#12121A",
                      borderColor: "#1E1B4B",
                    }}
                    whileHover={{
                      borderColor: category.color,
                      background: category.bg,
                      scale: 1.05,
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: category.color }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[#94A3B8] group-hover:text-[#F1F5F9] transition-colors duration-200">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
