'use client';

import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type CertItem = { name: string; date: string; type: string; role: string };

export default function Certifications() {
  const { t, get } = useLocale();
  const items = (get<CertItem[]>('certifications.items') ?? []) as CertItem[];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {t('certifications.title')}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mb-5 rounded-full"></div>
              <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
                {t('certifications.subtitle')}
              </p>
            </div>
          </AnimationWrapper>

          {/* Cert grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((cert, index) => (
              <AnimationWrapper key={index} animation="scaleIn" delay={index * 80}>
                <div className="group relative flex flex-col gap-3 p-5 bg-gray-50 dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-700/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5">

                  {/* Icon + type badge */}
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">
                      {cert.type === 'masterclass' ? '🎓' : '🏆'}
                    </span>
                    <div className="flex gap-1.5">
                      {cert.role === 'leader' && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/50">
                          👑 {t('certifications.teamLeader')}
                        </span>
                      )}
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        cert.type === 'masterclass'
                          ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50'
                          : 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800/50'
                      }`}>
                        {cert.type === 'masterclass' ? 'Masterclass' : 'Hackathon'}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 mt-auto">
                    <svg className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-gray-400 dark:text-slate-500">{cert.date}</span>
                  </div>

                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
