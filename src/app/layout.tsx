import type {Metadata} from "next";
import "@/styles/tailwind.css";
import ThemeProviders from "../components/ThemeProviders";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import METADATA from "@/constants/METADATA";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.meta.url),
  title: "Seju Devlog",
  description: "좌충우돌 새싹 개발자 성장기🌱",
  icons: {
    icon: "/assets/icon/favicon.ico",
  },
  keywords: "프론트엔드 기술 블로그",
  applicationName: "Seju.blog",
  openGraph: {
    title: METADATA.headerTitle,
    description: METADATA.meta.description,
    url: METADATA.meta.url,
    siteName: "Next.js",
    images: [
      {
        url: `/assets/image/og_image.jpg`,
        width: 600,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <head />
      <body className="flex flex-col bg-secondaryColor antialiased transition-colors delay-75 dark:bg-[#161617] dark:bg-opacity-80 relative min-h-screen w-full">
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

// {
//     description: Minsang's Tech Blog
//     image: https://minsang-blog.vercel.app/blogSc.png
//     image:height: 370
//     image:width: 968
//     locale: ko_KR
//     site_name: Next.js
//     title: Minsang.dev
//     type: website
//     url: https://minsang-blog.vercel.app/
//     }
