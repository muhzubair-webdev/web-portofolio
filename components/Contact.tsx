"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Linkedin, Github, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muh-zubair-4b1b01363",
    icon: Linkedin,
    color: "#0077B5",
    bg: "#0077B515",
  },
  {
    label: "GitHub",
    href: "https://github.com/muhzubair-webdev",
    icon: Github,
    color: "#F1F5F9",
    bg: "#F1F5F915",
  },
  {
    label: "Email",
    href: "mailto:muh.zubair.id@gmail.com",
    icon: Mail,
    color: "#F97316",
    bg: "#F9731615",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // TODO: Connect to Google Apps Script Webhook
    // Example:
    // const GAS_WEBHOOK_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
    // await fetch(GAS_WEBHOOK_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    // Simulate network delay for demo purposes — remove when integrating webhook
    await new Promise((res) => setTimeout(res, 1500));
    setFormState("success");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-[#0A0A0F] border border-[#1E1B4B] rounded-xl px-4 py-3 text-sm text-[#F1F5F9] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all duration-200";

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Kontak"
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
            Hubungi Saya
          </p>
          <h2 className="text-3xl font-semibold text-[#F1F5F9]">
            Let&apos;s <span className="text-[#7C3AED]">Connect</span>
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(to right, #7C3AED, #F97316)" }}
            aria-hidden="true"
          />
          <p className="text-[#94A3B8] text-base mt-6 max-w-lg mx-auto">
            Mari berkolaborasi untuk menciptakan solusi digital yang berdampak.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Social Links */}
          <div className="space-y-6">
            <h3 className="text-[#F1F5F9] font-semibold text-lg">Temukan Saya Di:</h3>
            <div className="space-y-4">
              {socialLinks.map(({ label, href, icon: Icon, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-4 bg-[#12121A] border border-[#1E1B4B] hover:border-[#7C3AED]/50 rounded-xl transition-all duration-200 group"
                  aria-label={`Kunjungi profil ${label} saya`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{ background: bg }}
                  >
                    <Icon size={18} style={{ color }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[#F1F5F9] font-medium text-sm">{label}</p>
                    <p className="text-[#94A3B8] text-xs mt-0.5">
                      {label === "LinkedIn" && "linkedin.com/in/muh-zubair-4b1b01363"}
                      {label === "GitHub" && "github.com/muhzubair-webdev"}
                      {label === "Email" && "muh.zubair.id@gmail.com"}
                    </p>
                  </div>
                  <span
                    className="ml-auto text-[#94A3B8] group-hover:text-[#F97316] transition-colors duration-200 text-xs"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="bg-[#12121A] border border-[#1E1B4B] rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-[#F1F5F9]">Tersedia untuk proyek</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Terbuka untuk freelance &amp; kolaborasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#12121A] border border-[#1E1B4B] rounded-2xl p-6">
            <h3 className="text-[#F1F5F9] font-semibold text-lg mb-6">Kirim Pesan</h3>

            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <CheckCircle size={48} className="text-[#10B981]" aria-hidden="true" />
                <h4 className="text-[#F1F5F9] font-semibold text-lg">Pesan Terkirim!</h4>
                <p className="text-[#94A3B8] text-sm">
                  Terima kasih telah menghubungi saya. Saya akan merespons secepatnya.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-2 text-[#7C3AED] text-sm hover:text-[#F97316] transition-colors duration-200 underline"
                >
                  Kirim pesan lain
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    Nama Lengkap <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClass}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    Email <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    Pesan <span className="text-[#F97316]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Halo Zubair, saya ingin berdiskusi tentang..."
                    className={`${inputClass} resize-none`}
                    aria-required="true"
                  />
                </div>

                {formState === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    Terjadi kesalahan. Silakan coba lagi.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2 focus:ring-offset-[#12121A]"
                  aria-label="Kirim pesan"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#1E1B4B]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#94A3B8]">
            © 2026{" "}
            <span className="text-[#F1F5F9] font-medium">Muh Zubair</span>.
            Dibangun dengan{" "}
            <span className="text-[#7C3AED]">Next.js</span> &amp;{" "}
            <span className="text-[#F97316]">Tailwind CSS</span>.
          </div>
          <div className="text-xs text-[#94A3B8]">
            Dirancang dengan{" "}
            <span className="text-[#F97316]">♥</span> di Sulawesi Tenggara
          </div>
        </div>
      </footer>
    </section>
  );
}
