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
  title: "Paratthakon Suksukhon – AI Engineer & Full-Stack Developer",
  description: "Portfolio of Paratthakon Suksukhon, a Computer Engineering graduate from KMUTT specializing in AI Engineering (LangChain, RAG, LLM), Full-Stack Development (Next.js, FastAPI), and Project Management.",
  keywords: ["portfolio", "AI engineer", "full-stack developer", "LangChain", "RAG", "Next.js", "FastAPI", "LangGraph", "KMUTT", "Thailand"],
  authors: [{ name: "Paratthakon Suksukhon" }],
  creator: "Paratthakon Suksukhon",
  openGraph: {
    title: "Paratthakon Suksukhon – AI Engineer & Full-Stack Developer",
    description: "Computer Engineering graduate building AI agents, RAG systems, and full-stack web applications.",
    url: "https://p-suksukhon.dev",
    siteName: "Paratthakon Suksukhon Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paratthakon Suksukhon – AI Engineer & Full-Stack Developer",
    description: "Computer Engineering graduate building AI agents, RAG systems, and full-stack web applications.",
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
