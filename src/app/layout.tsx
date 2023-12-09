import type {Metadata} from "next";
import "@/styles/tailwind.css";
import ThemeProviders from "../components/ThemeProviders";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Seju Devlog",
  description: "좌충우돌 새싹 개발자 성장기🌱",
  icons: {
    icon: "/assets/icon/pageIcon.png",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <head />
      <body className="flex flex-col bg-secondaryColor antialiased transition-colors delay-75 dark:bg-[#161617] dark:bg-opacity-80 relative min-h-screen">
        <ThemeProviders>
          <Navbar />
          <main className="mx-auto flex items-center justify-center my-auto">
            {children}
          </main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
