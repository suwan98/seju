import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/styles/tailwind.css";
import ThemeProviders from "../components/ThemeProviders";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Seju Devlog",
  description: "좌충우돌 새싹 개발자 성장기🌱",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" className="ont-sans">
      <head />
      <body className="mx-2 flex flex-col bg-slate-50 antialiased transition-colors delay-75 dark:bg-slate-800">
        <ThemeProviders>
          <Navbar />
          <main className="mx-auto mt-14 w-full max-w-2xl px-4">
            {children}
          </main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
