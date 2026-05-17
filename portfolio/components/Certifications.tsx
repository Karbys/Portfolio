'use client';

import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type CertItem = { name: string; date: string; type: string; role: string };

export default function Certifications() {
  const { t, get } = useLocale();
  const items = (get<CertItem[]>('certifications.items') ?? []) as CertItem[];

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {t('certifications.title')}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-5 rounded-full"></div>
              <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
                {t('certifications.subtitle')}
              </p>
            </div>
          </AnimationWrapper>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((cert, index) => (
              <AnimationWrapper key={index} animation="scaleIn" delay={index * 80}>
                <div className="group relative flex flex-col gap-4 p-6 bg-gray-50 dark:bg-slate-800/60 rounded-2xl border-2 border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-amber-700/40 hover:shadow-xl hover:shadow-red-500/10 dark:hover:shadow-amber-900/10 transition-all duration-300 hover:-translate-y-1.5 card-shimmer overflow-hidden">

                  {/* Decorative corner gradient */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-2xl pointer-events-none group-hover:from-red-500/20 transition-all duration-300"></div>

                  {/* Top row: icon + badges */}
                  <div className="flex items-start justify-between">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {cert.type === 'masterclass' ? '🎓' : '🏆'}
                    </span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {cert.role === 'leader' && (
                        <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-900 shadow-sm animate-badge-pop">
                          👑 {t('certifications.teamLeader')}
                        </span>
                      )}
                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                        cert.type === 'masterclass'
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50'
                          : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/50'
                      }`}>
                        {cert.type === 'masterclass' ? 'Masterclass' : 'Hackathon'}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Date with calendar icon */}
                  <div className="flex items-center gap-1.5 mt-auto pt-1 border-t border-gray-100 dark:border-slate-700/50">
                    <svg className="w-3.5 h-3.5 text-red-400 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">{cert.date}</span>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
