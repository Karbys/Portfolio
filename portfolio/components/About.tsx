'use client';

import { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type SkillGroup = { id: string; category: string; icon: string; skills: string[] };
type ExperienceItem = { title: string; company: string; period: string; type: string; description: string };
type EducationItem = { school: string; degree: string; period: string; icon: string };

export default function About() {
  const { t, get } = useLocale();
  const skillGroups = (get<SkillGroup[]>('skillGroups') ?? []) as SkillGroup[];
  const experiences = (get<ExperienceItem[]>('experiences') ?? []) as ExperienceItem[];
  const education = (get<EducationItem[]>('education') ?? []) as EducationItem[];

  const tabKeys = ['web', 'ai', 'db', 'lang', 'tools'] as const;
  const tabLabels: Record<string, string> = {
    web: t('about.skillTabWeb'),
    ai: t('about.skillTabAI'),
    db: t('about.skillTabDB'),
    lang: t('about.skillTabLang'),
    tools: t('about.skillTabTools'),
  };

  const [activeTab, setActiveTab] = useState('web');

  const activeGroup = skillGroups.find(g => g.id === activeTab);

  const stats = [
    { number: '3+', label: t('about.support'), color: 'blue' },
    { number: '10+', label: t('about.projectsCompleted'), color: 'violet' },
    { number: '6', label: t('about.happyClients'), color: 'cyan' },
    { number: '3', label: t('about.yearsExperience'), color: 'green' },
  ];

  const expColors = [
    { dot: 'bg-violet-500', line: 'border-violet-200 dark:border-violet-800', badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300' },
    { dot: 'bg-blue-500', line: 'border-blue-200 dark:border-blue-800', badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' },
    { dot: 'bg-cyan-500', line: 'border-cyan-200 dark:border-cyan-800', badge: 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* ── Section header ── */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{t('about.title')}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mb-5 rounded-full"></div>
              <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">{t('about.subtitle')}</p>
            </div>
          </AnimationWrapper>

          {/* ── Bio + Stats ── */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <AnimationWrapper animation="fadeInLeft" delay={100} className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">{t('about.myStory')}</h3>
              <div className="space-y-4 text-gray-600 dark:text-slate-400 leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fadeInRight" delay={200} className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 lg:text-right">{t('about.achievementsTitle')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`text-center p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                      stat.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40 hover:shadow-blue-100 dark:hover:shadow-blue-900/30' :
                      stat.color === 'violet' ? 'bg-violet-50 dark:bg-violet-900/20 border-violet-100 dark:border-violet-800/40' :
                      stat.color === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-100 dark:border-cyan-800/40' :
                      'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/40'
                    } hover:shadow-lg`}
                  >
                    <div className={`text-3xl font-bold mb-1 ${
                      stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      stat.color === 'violet' ? 'text-violet-600 dark:text-violet-400' :
                      stat.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>{stat.number}</div>
                    <div className="text-sm text-gray-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          </div>

          {/* ── Skills (tabbed) ── */}
          <AnimationWrapper animation="fadeInUp" delay={150}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.skillsTitle')}</h3>

            {/* Tab bar */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabKeys.map(key => {
                const group = skillGroups.find(g => g.id === key);
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{group?.icon}</span>
                    <span>{tabLabels[key]}</span>
                  </button>
                );
              })}
            </div>

            {/* Skill tags */}
            {activeGroup && (
              <div className="flex flex-wrap gap-2 p-5 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700/50 min-h-[96px]">
                {activeGroup.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm transition-all duration-150 cursor-default animate-fadeInUp"
                    style={{ animationDelay: `${i * 30}ms`, animationFillMode: 'both' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </AnimationWrapper>

          {/* ── Work Experience ── */}
          <AnimationWrapper animation="fadeInUp" delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t('about.experienceTitle')}</h3>
            <div className="space-y-0">
              {experiences.map((exp, i) => {
                const c = expColors[i % expColors.length];
                return (
                  <div key={i} className={`relative pl-8 ${i < experiences.length - 1 ? `border-l-2 ${c.line} pb-8` : 'pb-2'}`}>
                    <div className={`absolute -left-2 top-1 w-4 h-4 rounded-full ${c.dot} ring-4 ring-white dark:ring-slate-900`}></div>
                    <div className="bg-gray-50 dark:bg-slate-800/60 rounded-xl p-5 border border-gray-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 transition-colors duration-200 hover:shadow-md">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-base">{exp.title}</h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs text-gray-400 dark:text-slate-500 whitespace-nowrap">{exp.period}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>{exp.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimationWrapper>

          {/* ── Education ── */}
          <AnimationWrapper animation="fadeInUp" delay={250}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.educationTitle')}</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="text-3xl flex-shrink-0">{edu.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">{edu.school}</h4>
                    <p className="text-gray-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">{edu.degree}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-xs mt-1.5 font-medium">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>

        </div>
      </div>
    </section>
  );
}
