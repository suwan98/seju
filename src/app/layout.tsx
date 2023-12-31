import type {Metadata} from "next";
import "@/styles/tailwind.css";
import ThemeProviders from "@/components/ThemeProviders";
import Footer from "@/components/layout/Footer";
import METADATA from "@/constants/METADATA";
import Navbar from "@/components/layout/Navbar";
import {Suspense} from "react";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.meta.url),
  title: "seju.blog",
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
        url: `/assets/image/og_image.png`,
        width: 800,
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
      <body className="flex flex-col bg-secondaryColor dark:bg-neutral-800  relative min-h-screen w-full">
        <Suspense>
          <ThemeProviders>
            <Navbar />
            <main className="mx-auto my-auto flex items-center justify-center">
              {children}
            </main>
            <Footer />
          </ThemeProviders>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
