'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/context/LocaleContext';

type TerminalLine = { cmd: string; out: string };

function TerminalCard({ lines }: { lines: TerminalLine[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length * 2) return;
    const delay = visibleCount === 0 ? 700 : 750;
    const timer = setTimeout(() => setVisibleCount(c => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, lines.length]);

  const renderedItems: { type: 'cmd' | 'out'; text: string }[] = [];
  lines.forEach((line, i) => {
    if (visibleCount > i * 2)     renderedItems.push({ type: 'cmd', text: line.cmd });
    if (visibleCount > i * 2 + 1) renderedItems.push({ type: 'out', text: line.out });
  });

  return (
    <div className="bg-gray-950 dark:bg-black rounded-xl border border-gray-700/60 shadow-2xl shadow-red-900/10 overflow-hidden font-mono text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/90 border-b border-gray-700/60">
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-90"></span>
        <span className="w-3 h-3 rounded-full bg-amber-400 opacity-90"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-90"></span>
        <span className="ml-2 text-gray-400 text-xs tracking-wide">~/portfolio — bash</span>
      </div>
      {/* Body */}
      <div className="p-5 space-y-1 min-h-[220px]">
        {renderedItems.map((item, idx) =>
          item.type === 'cmd' ? (
            <p key={idx} className="flex items-center gap-2">
              <span className="text-red-400 select-none">❯</span>
              <span className="text-amber-300">{item.text}</span>
            </p>
          ) : (
            <div key={idx} className="pl-5 mb-2">
              {item.text.split('\n').map((line, li) => (
                <p key={li} className={li === 0 ? 'text-slate-200' : 'text-amber-400/80'}>{line}</p>
              ))}
            </div>
          )
        )}
        {visibleCount < lines.length * 2 && (
          <p className="flex items-center gap-2">
            <span className="text-red-400 select-none">❯</span>
            <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse align-middle"></span>
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
    setDisplayText(''); setRoleIdx(0); setPhase('typing');
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
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium border border-red-200 dark:border-red-700/50 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for opportunities
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
              <p className="text-lg text-gray-500 dark:text-slate-400 mb-1">{t('hero.greeting')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('hero.name')}
              </h1>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-2xl md:text-3xl font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-400 dark:via-orange-400 dark:to-amber-400 min-w-[2ch]">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-8 bg-red-500 dark:bg-amber-400 animate-pulse"></span>
              </div>
            </div>

            <p
              className="text-base md:text-lg text-gray-600 dark:text-slate-400 leading-relaxed max-w-lg animate-fadeInUp"
              style={{ animationDelay: '0.55s' }}
            >
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-7 7m7-7l-7-7" />
                </svg>
                {t('hero.ctaWork')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-red-600 dark:border-amber-400 text-red-600 dark:text-amber-400 font-semibold rounded-xl hover:bg-red-600 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('hero.ctaContact')}
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 animate-fadeInUp" style={{ animationDelay: '0.85s' }}>
              <span className="text-sm text-gray-400 dark:text-slate-500">Find me on:</span>
              <a
                href="https://www.linkedin.com/in/p-suksukhon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-amber-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:paratthakon.suks@gmail.com"
                className="group flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right — terminal */}
          <div className="hidden lg:block animate-fadeInUp hover-lift" style={{ animationDelay: '0.5s' }}>
            <TerminalCard lines={terminalLines} />
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              {['AI Engineer', 'Full-Stack Dev', 'Project Manager', 'LangChain', 'RAG', 'Next.js'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 dark:bg-slate-800/80 text-gray-600 dark:text-slate-300 border border-red-100 dark:border-slate-700 backdrop-blur-sm hover:border-red-300 dark:hover:border-amber-600 hover:text-red-600 dark:hover:text-amber-400 transition-colors cursor-default"
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
