'use client';

import { useState, useEffect, useRef } from 'react';
import FloatingElements from './FloatingElements';
import { useLocale } from '@/context/LocaleContext';

type TerminalLine = { cmd: string; out: string };

function TerminalCard({ lines }: { lines: TerminalLine[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length * 2) return;
    const delay = visibleCount === 0 ? 600 : 700;
    const timer = setTimeout(() => setVisibleCount(c => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, lines.length]);

  const renderedItems: { type: 'cmd' | 'out'; text: string }[] = [];
  lines.forEach((line, i) => {
    if (visibleCount > i * 2) renderedItems.push({ type: 'cmd', text: line.cmd });
    if (visibleCount > i * 2 + 1) renderedItems.push({ type: 'out', text: line.out });
  });

  const isCursorVisible = visibleCount < lines.length * 2;

  return (
    <div className="bg-gray-950 dark:bg-black rounded-xl border border-gray-700/60 shadow-2xl overflow-hidden font-mono text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-gray-700/60">
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-80"></span>
        <span className="ml-2 text-gray-400 text-xs tracking-wide">~/portfolio — bash</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-1 min-h-[220px]">
        {renderedItems.map((item, idx) =>
          item.type === 'cmd' ? (
            <p key={idx} className="flex items-center gap-2">
              <span className="text-green-400 select-none">❯</span>
              <span className="text-cyan-300">{item.text}</span>
            </p>
          ) : (
            <div key={idx} className="pl-5 mb-2">
              {item.text.split('\n').map((line, li) => (
                <p key={li} className={li === 0 ? 'text-slate-200' : 'text-blue-300'}>{line}</p>
              ))}
            </div>
          )
        )}
        {isCursorVisible && (
          <p className="flex items-center gap-2">
            <span className="text-green-400 select-none">❯</span>
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse align-middle"></span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, get } = useLocale();
  const roles = (get<string[]>('hero.roles') ?? ['Developer']) as string[];
  const terminalLines = (get<TerminalLine[]>('hero.terminalLines') ?? []) as TerminalLine[];

  const [displayText, setDisplayText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  const rolesKey = roles.join(',');
  useEffect(() => {
    setDisplayText('');
    setRoleIdx(0);
    setPhase('typing');
  }, [rolesKey]);

  useEffect(() => {
    const currentRole = roles[roleIdx % roles.length];
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 110);
      } else {
        timer = setTimeout(() => setPhase('pausing'), 1800);
      }
    } else if (phase === 'pausing') {
      timer = setTimeout(() => setPhase('deleting'), 200);
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(prev => prev.slice(0, -1)), 70);
      } else {
        setRoleIdx(idx => (idx + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timer);
  }, [displayText, phase, roleIdx, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden"
    >
      <FloatingElements />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-violet-400/10 to-cyan-400/10 dark:from-blue-600/5 dark:via-violet-600/5 dark:to-cyan-600/5 animate-gradient-shift pointer-events-none"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text content */}
          <div className="space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-700/50 animate-fadeInUp"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for opportunities
            </div>

            {/* Greeting + Name */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
            >
              <p className="text-lg text-gray-500 dark:text-slate-400 mb-1">{t('hero.greeting')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('hero.name')}
              </h1>
            </div>

            {/* Cycling role typewriter */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-2 text-2xl md:text-3xl font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 dark:from-blue-400 dark:via-violet-400 dark:to-cyan-400 min-w-[2ch]">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-8 bg-blue-500 dark:bg-blue-400 animate-pulse"></span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-gray-600 dark:text-slate-400 leading-relaxed max-w-lg animate-fadeInUp"
              style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
            >
              {t('hero.description')}
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-7 7m7-7l-7-7" />
                </svg>
                {t('hero.ctaWork')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('hero.ctaContact')}
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 pt-2 animate-fadeInUp"
              style={{ animationDelay: '0.85s', animationFillMode: 'both' }}
            >
              <span className="text-sm text-gray-400 dark:text-slate-500">Find me on:</span>
              <a
                href="https://www.linkedin.com/in/p-suksukhon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:paratthakon.suks@gmail.com"
                className="group flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right — Terminal card */}
          <div
            className="hidden lg:block animate-fadeInUp hover-lift"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <TerminalCard lines={terminalLines} />

            {/* Role pills below terminal */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              {['AI Engineer', 'Full-Stack Dev', 'Project Manager', 'LangChain', 'RAG', 'Next.js'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/70 dark:bg-slate-800/70 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-slate-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
