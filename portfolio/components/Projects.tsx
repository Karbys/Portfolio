'use client';

import { useState, useMemo } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type ProjectItem = { title: string; description: string };

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t, get } = useLocale();
  const localeItems = (get<ProjectItem[]>('projects.items') ?? []) as ProjectItem[];

  const projectMeta = [
    { id: 1, technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'], category: 'web' as const, liveUrl: '#', githubUrl: '#', featured: true, icon: '🛒' },
    { id: 2, technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'], category: 'web' as const, liveUrl: '#', githubUrl: '#', featured: true, icon: '📋' },
    { id: 3, technologies: ['React', 'API Integration', 'Chart.js', 'CSS3'], category: 'web' as const, liveUrl: '#', githubUrl: '#', featured: false, icon: '🌤️' },
    { id: 4, technologies: ['React Native', 'Firebase', 'Biometrics', 'REST API'], category: 'mobile' as const, liveUrl: '#', githubUrl: '#', featured: true, icon: '🏦' },
    { id: 5, technologies: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket'], category: 'ai' as const, liveUrl: '#', githubUrl: '#', featured: false, icon: '🤖' },
    { id: 6, technologies: ['Vue.js', 'D3.js', 'Python', 'Redis'], category: 'web' as const, liveUrl: '#', githubUrl: '#', featured: false, icon: '📊' }
  ];

  const projects = useMemo(() => projectMeta.map((meta, i) => ({
    ...meta,
    title: localeItems[i]?.title ?? meta.id.toString(),
    description: localeItems[i]?.description ?? ''
  })), [localeItems]);

  const categories = [
    { id: 'all', nameKey: 'projects.all' as const },
    { id: 'web', nameKey: 'projects.categoryWeb' as const },
    { id: 'mobile', nameKey: 'projects.categoryMobile' as const },
    { id: 'ai', nameKey: 'projects.categoryAi' as const }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-slate-100 mb-4">{t('projects.title')}</h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t('projects.subtitle')}
              </p>
            </div>
          </AnimationWrapper>

          {/* Filter Buttons */}
          <AnimationWrapper animation="fadeInUp" delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-lift ${
                    activeFilter === category.id
                      ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover-glow'
                      : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {t(category.nameKey)}
                </button>
              ))}
            </div>
          </AnimationWrapper>

          {/* Projects Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-8 text-center">
              {activeFilter === 'all' ? t('projects.all') : t(categories.find(c => c.id === activeFilter)?.nameKey ?? 'projects.all')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimationWrapper key={project.id} animation="scaleIn" delay={index * 100}>
                  <div
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700 group flex flex-col h-full hover-lift"
                  >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-5xl opacity-90 group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ {t('projects.featured')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description with fixed height */}
                    <div className="flex-grow mb-4">
                      <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 h-16 flex items-start">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies with fixed height */}
                    <div className="flex flex-wrap gap-2 mb-6 min-h-[2.5rem] items-start">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - Always at bottom */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-blue-600 dark:bg-blue-500 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        🚀 {t('projects.liveDemo')}
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg text-sm font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
                      >
                        💻 {t('projects.github')}
                      </a>
                    </div>
                  </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
