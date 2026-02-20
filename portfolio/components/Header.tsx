'use client';

import { useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { key: 'header.nav.home', href: '#home' },
    { key: 'header.nav.about', href: '#about' },
    { key: 'header.nav.projects', href: '#projects' },
    { key: 'header.nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm dark:shadow-slate-950/50 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-slate-100">
            <span className="text-blue-600 dark:text-blue-400">{t('header.logo')}</span>
          </div>

          {/* Desktop Menu + Language Switcher + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center gap-2 border-l border-gray-200 dark:border-slate-700 pl-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => setLocale('th')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${locale === 'th' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                aria-label="ไทย"
              >
                TH
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => { setLocale('en'); setIsMenuOpen(false); }}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium ${locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => { setLocale('th'); setIsMenuOpen(false); }}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium ${locale === 'th' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300'}`}
                >
                  TH
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
