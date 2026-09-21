import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muh Zubair | Full-Stack Developer & MIS Analyst",
  description:
    "Portofolio Muh Zubair, Mahasiswa Sistem Informasi 2023. Spesialisasi pada Full-Stack Web Development (Laravel, Next.js) dan Analisis Data Operasional (MIS).",
  openGraph: {
    title: "Muh Zubair | Full-Stack Developer & MIS Analyst",
    description:
      "Portofolio Muh Zubair, Mahasiswa Sistem Informasi 2023. Spesialisasi pada Full-Stack Web Development (Laravel, Next.js) dan Analisis Data Operasional (MIS).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A0F] text-[#F1F5F9] antialiased`}>
        {children}
      </body>
    </html>
  );
}
