'use client';

import { useLocale } from '@/context/LocaleContext';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: 'header.nav.home',     href: '#home' },
    { key: 'header.nav.about',    href: '#about' },
    { key: 'header.nav.projects', href: '#projects' },
    { key: 'header.nav.contact',  href: '#contact' },
  ];

  return (
    <footer className="bg-gray-950 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle warm gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>
      {/* Warm orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                PS
              </div>
              <span className="text-lg font-bold">P.Suks</span>
            </div>
            <p className="text-gray-400 dark:text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/p-suksukhon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-red-600 hover:to-amber-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:paratthakon.suks@gmail.com"
                className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 dark:text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-red-500 to-amber-400 transition-all duration-200 overflow-hidden rounded-full"></span>
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:paratthakon.suks@gmail.com" className="flex items-center gap-2 text-gray-300 dark:text-slate-400 hover:text-white transition-colors group">
                <svg className="w-3.5 h-3.5 flex-shrink-0 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                paratthakon.suks@gmail.com
              </a>
              <a href="tel:+66855894478" className="flex items-center gap-2 text-gray-300 dark:text-slate-400 hover:text-white transition-colors group">
                <svg className="w-3.5 h-3.5 flex-shrink-0 text-amber-500 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +66 85-589-4478
              </a>
              <span className="flex items-center gap-2 text-gray-300 dark:text-slate-400">
                <svg className="w-3.5 h-3.5 flex-shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bangkok, Thailand
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 dark:border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500 dark:text-slate-600">
          <p>© {year} Paratthakon Suksukhon. {t('footer.rightsReserved')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
