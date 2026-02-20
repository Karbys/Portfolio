import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kanit.variable} antialiased bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 font-sans`}
      >
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
