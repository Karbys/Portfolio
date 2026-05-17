'use client';

import { useState, useMemo } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type ProjectItem = { title: string; description: string };

const projectMeta = [
  { id: 1, technologies: ['Next.js', 'FastAPI', 'LangChain', 'RAG', 'Gemini API', 'OpenAI'], category: 'ai' as const, liveUrl: '#', githubUrl: '#', featured: true,  icon: '🤖', gradient: 'from-red-500 via-orange-500 to-amber-500' },
  { id: 2, technologies: ['React', 'Node.js', 'LangGraph', 'MongoDB', 'Firebase', 'REST API'], category: 'web' as const, liveUrl: '#', githubUrl: '#', featured: true,  icon: '💬', gradient: 'from-orange-500 via-amber-500 to-yellow-500' },
  { id: 3, technologies: ['HTML/CSS/JS', 'Python', 'Prophet Meta', 'Yahoo Finance API'],      category: 'ai' as const, liveUrl: '#', githubUrl: '#', featured: true,  icon: '📈', gradient: 'from-rose-500 via-red-500 to-orange-500' },
  { id: 4, technologies: ['Python', 'Steganography', 'Cryptography', 'Tkinter'],              category: 'web' as const, liveUrl: '#', githubUrl: '#', featured: false, icon: '🔐', gradient: 'from-amber-600 via-orange-500 to-red-500' },
  { id: 5, technologies: ['Unity', 'C#', 'Arduino', 'Blender', 'Arduino IDE'],                category: 'other' as const, liveUrl: '#', githubUrl: '#', featured: false, icon: '🎮', gradient: 'from-red-600 via-rose-500 to-pink-500' },
  { id: 6, technologies: ['C', 'Linked List', 'Stack', 'Queue', 'CLI'],                       category: 'other' as const, liveUrl: '#', githubUrl: '#', featured: false, icon: '🏪', gradient: 'from-yellow-600 via-amber-500 to-orange-500' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t, get } = useLocale();
  const localeItems = (get<ProjectItem[]>('projects.items') ?? []) as ProjectItem[];

  const projects = useMemo(
    () => projectMeta.map((meta, i) => ({
      ...meta,
      title: localeItems[i]?.title ?? `Project ${meta.id}`,
      description: localeItems[i]?.description ?? '',
    })),
    [localeItems]
  );

  const categories = [
    { id: 'all',   label: t('projects.all') },
    { id: 'ai',    label: t('projects.categoryAi') },
    { id: 'web',   label: t('projects.categoryWeb') },
    { id: 'other', label: t('projects.categoryOther') },
  ];

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Grid bg pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{t('projects.title')}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-5 rounded-full"></div>
              <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
            </div>
          </AnimationWrapper>

          {/* Filter */}
          <AnimationWrapper animation="fadeInUp" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeFilter === cat.id
                      ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md shadow-red-500/25 scale-105'
                      : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 border-2 border-gray-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-amber-600/50 hover:text-red-600 dark:hover:text-amber-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimationWrapper>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <AnimationWrapper key={project.id} animation="scaleIn" delay={index * 80}>
                <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-amber-700/40 shadow-sm hover:shadow-xl hover:shadow-red-500/10 dark:hover:shadow-amber-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full card-shimmer">

                  {/* Header gradient */}
                  <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    {/* Decorative circles */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-lg">{project.icon}</span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-md animate-badge-pop">
                          ⭐ {t('projects.featured')}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                        project.category === 'ai'    ? 'bg-red-600/80 text-white' :
                        project.category === 'web'   ? 'bg-amber-500/80 text-white' :
                        'bg-gray-700/80 text-white'
                      }`}>
                        {project.category === 'ai' ? 'AI/ML' : project.category === 'web' ? 'Web' : 'Other'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 min-h-[2rem]">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-md font-medium border border-gray-200 dark:border-slate-600 group-hover:border-red-200/60 dark:group-hover:border-amber-700/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white text-xs font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-500/20"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {t('projects.liveDemo')}
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 border-2 border-gray-200 dark:border-slate-600 text-gray-600 dark:text-slate-300 text-xs font-bold rounded-xl hover:border-red-400 dark:hover:border-amber-500 hover:text-red-600 dark:hover:text-amber-400 hover:bg-red-50 dark:hover:bg-slate-700 transition-all duration-200"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {t('projects.github')}
                      </a>
                    </div>
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
