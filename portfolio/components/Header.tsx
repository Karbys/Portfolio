'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(rect.left + rect.width / 2);
    const y = Math.round(rect.top + rect.height / 2);
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (!('startViewTransition' in document)) {
      toggleTheme();
      return;
    }

    const vt = (document as Document & {
      startViewTransition: (cb: () => void) => { ready: Promise<void> };
    }).startViewTransition(() => {
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      toggleTheme();
    });

    vt.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(150vmax at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const menuItems = [
    { key: 'header.nav.home', href: '#home' },
    { key: 'header.nav.about', href: '#about' },
    { key: 'header.nav.projects', href: '#projects' },
    { key: 'header.nav.contact', href: '#contact' },
  ];

  const navTextClass = scrolled
    ? 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
    : 'text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-amber-400';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800 shadow-sm shadow-black/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:shadow-md group-hover:shadow-red-500/30 transition-all duration-200">
              PS
            </div>
            <span className={`text-lg font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
              {t('header.logo')}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/5 ${navTextClass}`}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-1 pl-4 ml-2 border-l border-gray-200/60 dark:border-slate-700/60">
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-lg transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/5 ${scrolled ? 'text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white' : 'text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-amber-400'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="flex items-center rounded-lg border border-gray-200/60 dark:border-slate-700/60 overflow-hidden">
              <button
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${locale === 'en' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white' : 'text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
              >EN</button>
              <button
                onClick={() => setLocale('th')}
                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${locale === 'th' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white' : 'text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
              >TH</button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800' : 'text-gray-700 dark:text-slate-300 hover:bg-white/20'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100/60 dark:border-slate-800/60 pt-3 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-xl mt-2 px-2 shadow-lg">
            {menuItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-800 hover:text-red-600 dark:hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center gap-2 px-4 pt-2">
              <button
                onClick={(e) => { handleThemeToggle(e); setIsMenuOpen(false); }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400"
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button onClick={() => { setLocale('en'); setIsMenuOpen(false); }} className={`flex-1 py-2 rounded-lg text-sm font-semibold text-center ${locale === 'en' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300'}`}>EN</button>
              <button onClick={() => { setLocale('th'); setIsMenuOpen(false); }} className={`flex-1 py-2 rounded-lg text-sm font-semibold text-center ${locale === 'th' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300'}`}>TH</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
