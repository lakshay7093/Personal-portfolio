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

const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Lakshay Saini | Full Stack Developer Portfolio | React Native & Next.js",

  description:
    "Lakshay Saini is a Full Stack Developer specializing in React, Next.js, React Native, Firebase, TypeScript, and scalable web & mobile applications.",

  keywords: [
    "Lakshay Saini",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Firebase Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Web Developer",
    "Mobile App Developer",
    "Freelance Developer",
    "Portfolio Website",
    "Software Engineer",
    "India Full Stack Developer",
    "Next.js Portfolio",
  ],

  authors: [
    {
      name: "Lakshay Saini",
      url: "https://github.com/lakshay7093",
    },
  ],

  creator: "Lakshay Saini",
  publisher: "Lakshay Saini",

  alternates: {
    canonical: "https://lakshaysaini.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,

    title:
      "Lakshay Saini | Full Stack Developer Portfolio",

    description:
      "Full Stack Developer specializing in React, Next.js, React Native, Firebase, and TypeScript.",

    siteName: "Lakshay Saini Portfolio",

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Lakshay Saini Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Lakshay Saini | Full Stack Developer",

    description:
      "React, Next.js, React Native & TypeScript Developer Portfolio.",

    images: [ogImageUrl],
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

  category: "technology",
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