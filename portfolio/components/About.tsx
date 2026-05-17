'use client';

import { useState, useEffect, useRef } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

type SkillGroup = { id: string; category: string; icon: string; skills: string[] };
type ExperienceItem = { title: string; company: string; period: string; type: string; description: string };
type EducationItem = { school: string; degree: string; period: string; icon: string };

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1000;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function About() {
  const { t, get } = useLocale();
  const skillGroups = (get<SkillGroup[]>('skillGroups') ?? []) as SkillGroup[];
  const experiences = (get<ExperienceItem[]>('experiences') ?? []) as ExperienceItem[];
  const education = (get<EducationItem[]>('education') ?? []) as EducationItem[];

  const tabKeys = ['web', 'ai', 'db', 'lang', 'tools'] as const;
  const tabLabels: Record<string, string> = {
    web:   t('about.skillTabWeb'),
    ai:    t('about.skillTabAI'),
    db:    t('about.skillTabDB'),
    lang:  t('about.skillTabLang'),
    tools: t('about.skillTabTools'),
  };

  const [activeTab, setActiveTab] = useState('web');
  const activeGroup = skillGroups.find(g => g.id === activeTab);

  const stats = [
    { target: 3, suffix: '+', label: t('about.support'), color: 'red' },
    { target: 10, suffix: '+', label: t('about.projectsCompleted'), color: 'amber' },
    { target: 6, suffix: '', label: t('about.happyClients'), color: 'orange' },
    { target: 3, suffix: '', label: t('about.yearsExperience'), color: 'yellow' },
  ];

  const expColors = [
    {
      dot: 'bg-red-500', line: 'border-red-200 dark:border-red-900/40',
      badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/40',
    },
    {
      dot: 'bg-amber-500', line: 'border-amber-200 dark:border-amber-900/40',
      badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/40',
    },
    {
      dot: 'bg-orange-500', line: 'border-orange-200 dark:border-orange-900/40',
      badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/40',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{t('about.title')}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-5 rounded-full"></div>
              <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">{t('about.subtitle')}</p>
            </div>
          </AnimationWrapper>

          {/* Bio + Stats */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <AnimationWrapper animation="fadeInLeft" delay={100} className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
                {t('about.myStory')}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-slate-400 leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fadeInRight" delay={200} className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2 lg:justify-end">
                <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
                {t('about.achievementsTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`group text-center p-5 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg card-shimmer ${
                      stat.color === 'red'    ? 'bg-red-50 dark:bg-red-900/15 border-red-100 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-600/50 hover:shadow-red-100 dark:hover:shadow-red-900/20' :
                      stat.color === 'amber'  ? 'bg-amber-50 dark:bg-amber-900/15 border-amber-100 dark:border-amber-800/30 hover:border-amber-300 dark:hover:border-amber-600/50' :
                      stat.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/15 border-orange-100 dark:border-orange-800/30 hover:border-orange-300 dark:hover:border-orange-600/50' :
                      'bg-yellow-50 dark:bg-yellow-900/15 border-yellow-100 dark:border-yellow-800/30 hover:border-yellow-300 dark:hover:border-yellow-600/50'
                    }`}
                  >
                    <div className={`text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300 ${
                      stat.color === 'red'    ? 'text-red-600 dark:text-red-400' :
                      stat.color === 'amber'  ? 'text-amber-600 dark:text-amber-400' :
                      stat.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      <CountUp target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          </div>

          {/* Skills (tabbed) */}
          <AnimationWrapper animation="fadeInUp" delay={150}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
              {t('about.skillsTitle')}
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabKeys.map(key => {
                const group = skillGroups.find(g => g.id === key);
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white border-transparent shadow-md shadow-red-500/20 scale-105'
                        : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 border-gray-100 dark:border-slate-700 hover:border-red-200 dark:hover:border-amber-700/50 hover:text-red-600 dark:hover:text-amber-400'
                    }`}
                  >
                    <span className="text-base">{group?.icon}</span>
                    <span>{tabLabels[key]}</span>
                  </button>
                );
              })}
            </div>

            {/* Skill tags */}
            {activeGroup && (
              <div className="flex flex-wrap gap-2 p-5 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border-2 border-gray-100 dark:border-slate-700/50 min-h-[96px]">
                {activeGroup.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-slate-600 hover:border-red-400 dark:hover:border-amber-500 hover:text-red-600 dark:hover:text-amber-400 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-150 cursor-default animate-fadeInUp"
                    style={{ animationDelay: `${i * 25}ms`, animationFillMode: 'both' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </AnimationWrapper>

          {/* Work Experience */}
          <AnimationWrapper animation="fadeInUp" delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
              {t('about.experienceTitle')}
            </h3>
            <div className="space-y-0">
              {experiences.map((exp, i) => {
                const c = expColors[i % expColors.length];
                return (
                  <div key={i} className={`relative pl-8 ${i < experiences.length - 1 ? `border-l-2 ${c.line} pb-8` : 'pb-2'}`}>
                    <div className={`absolute -left-2.5 top-2 w-5 h-5 rounded-full ${c.dot} ring-4 ring-white dark:ring-slate-900 shadow-sm`}></div>
                    <div className="group bg-white dark:bg-slate-800/60 rounded-2xl p-5 border-2 border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-amber-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 dark:hover:shadow-amber-500/5 hover:-translate-y-0.5 card-shimmer">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-base group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">{exp.title}</h4>
                          <p className="text-red-600 dark:text-amber-400 font-medium text-sm">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-xs text-gray-400 dark:text-slate-500 whitespace-nowrap font-medium">{exp.period}</span>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${c.badge}`}>{exp.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimationWrapper>

          {/* Education */}
          <AnimationWrapper animation="fadeInUp" delay={250}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
              {t('about.educationTitle')}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-5 bg-white dark:bg-slate-800/60 rounded-2xl border-2 border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-amber-700/40 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 hover:-translate-y-1 card-shimmer"
                >
                  <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{edu.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">{edu.school}</h4>
                    <p className="text-gray-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">{edu.degree}</p>
                    <p className="text-red-600 dark:text-amber-400 text-xs mt-1.5 font-semibold">{edu.period}</p>
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
