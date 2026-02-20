'use client';

import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type SkillItem = { name: string; level: string; experience: string };
type ExperienceItem = { title: string; company: string; period: string; description: string };

export default function About() {
  const { t, get } = useLocale();
  const skills = (get<SkillItem[]>('skills') ?? []) as SkillItem[];
  const experiences = (get<ExperienceItem[]>('experiences') ?? []) as ExperienceItem[];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'from-green-500 to-emerald-600';
      case 'intermediate':
        return 'from-blue-500 to-cyan-600';
      case 'beginner':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'advanced':
        return '🚀';
      case 'intermediate':
        return '💪';
      case 'beginner':
        return '🌱';
      default:
        return '📚';
    }
  };

  const levelLabelKey = (level: string) => {
    const key = level.charAt(0).toUpperCase() + level.slice(1);
    return `about.level${key}` as const;
  };

  const stats = [
    { number: '5+', labelKey: 'about.yearsExperience' as const, color: 'blue', bg: 'bg-blue-50 dark:bg-blue-900/30', hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-900/50' },
    { number: '50+', labelKey: 'about.projectsCompleted', color: 'purple', bg: 'bg-purple-50 dark:bg-purple-900/30', hoverBg: 'hover:bg-purple-100 dark:hover:bg-purple-900/50' },
    { number: '30+', labelKey: 'about.happyClients', color: 'green', bg: 'bg-green-50 dark:bg-green-900/30', hoverBg: 'hover:bg-green-100 dark:hover:bg-green-900/50' },
    { number: '24/7', labelKey: 'about.support', color: 'orange', bg: 'bg-orange-50 dark:bg-orange-900/30', hoverBg: 'hover:bg-orange-100 dark:hover:bg-orange-900/50' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-slate-100 mb-4">{t('about.title')}</h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t('about.subtitle')}
              </p>
            </div>
          </AnimationWrapper>

          {/* Grid Layout 2x2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Top Left - My Story */}
            <AnimationWrapper animation="fadeInLeft" delay={200}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-6">{t('about.myStory')}</h3>
                <div className="space-y-4 text-gray-600 dark:text-slate-400 leading-relaxed">
                  <p>{t('about.storyP1')}</p>
                  <p>{t('about.storyP2')}</p>
                  <p>{t('about.storyP3')}</p>
                </div>
              </div>
            </AnimationWrapper>

            {/* Top Right - Skills & Technologies */}
            <AnimationWrapper animation="fadeInRight" delay={400}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-6">{t('about.skillsTitle')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="group bg-gray-50 dark:bg-slate-800 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover-lift">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{getLevelIcon(skill.level)}</span>
                          <div>
                            <div className="font-semibold text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-slate-400">{skill.experience}</div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          skill.level === 'advanced' ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300' :
                          skill.level === 'intermediate' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300' :
                          'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300'
                        }`}>
                          {t(levelLabelKey(skill.level))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>

            {/* Bottom Left - Experience Timeline */}
            <AnimationWrapper animation="fadeInLeft" delay={600}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-6">{t('about.experienceTitle')}</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 group">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full animate-pulse-glow"></div>
                      <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-slate-500 mb-2">{exp.period}</p>
                        <p className="text-gray-600 dark:text-slate-400">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>

            {/* Bottom Right - Stats */}
            <AnimationWrapper animation="fadeInRight" delay={800}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-6">{t('about.achievementsTitle')}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className={`text-center p-6 ${stat.bg} rounded-lg ${stat.hoverBg} transition-all duration-300 hover-lift hover-glow group`}>
                      <div className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 dark:text-slate-400 group-hover:text-gray-800 dark:group-hover:text-slate-200 transition-colors">{t(stat.labelKey)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
