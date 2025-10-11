import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer Portfolio",
  description: "Portfolio of John Doe, a passionate Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch!",
  keywords: ["portfolio", "developer", "react", "nextjs", "typescript", "web development"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    title: "John Doe - Full Stack Developer Portfolio",
    description: "Portfolio of John Doe, a passionate Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://johndoe.dev",
    siteName: "John Doe Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer Portfolio",
    description: "Portfolio of John Doe, a passionate Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
