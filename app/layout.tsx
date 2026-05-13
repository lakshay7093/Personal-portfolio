import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImageUrl = `${siteUrl}/og-image.png?v=2`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lakshay Saini - Full Stack Developer | React Native & Next.js Expert",
  description:
    "Full Stack Developer specializing in React, Next.js, React Native, Firebase, and TypeScript. Building scalable web and mobile applications with 2+ years of experience. Currently pursuing MCA at Government PG College, Dharamshala.",
  keywords: [
    "Lakshay Saini",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Firebase Developer",
    "TypeScript Developer",
    "Web Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Dharamshala Developer",
    "Himachal Pradesh Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Lakshay Saini", url: "https://github.com/lakshay7093" }],
  creator: "Lakshay Saini",
  publisher: "Lakshay Saini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Lakshay Saini - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, React Native, and Firebase. Building scalable applications with modern technologies.",
    siteName: "Lakshay Saini Portfolio",
    images: [
      {
        url: ogImageUrl,
        width: 1731,
        height: 909,
        alt: "Lakshay Saini - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshay Saini - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, React Native, and Firebase.",
    images: [ogImageUrl],
    creator: "@lakshaysaini",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <ScrollProgress />
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
