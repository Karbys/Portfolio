'use client';

import { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useLocale } from '@/context/LocaleContext';

export default function Contact() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1800);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('contact.email'), value: 'paratthakon.suks@gmail.com',
      href: 'mailto:paratthakon.suks@gmail.com', color: 'red',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('contact.phone'), value: '+66 85-589-4478',
      href: 'tel:+66855894478', color: 'amber',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact.location'), value: 'Bangkok, Thailand',
      href: '#', color: 'orange',
    },
  ];

  const inputBase = 'w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-300 dark:placeholder-slate-500 transition-all duration-200 text-sm outline-none focus:ring-2';
  const inputClass = `${inputBase} border-gray-200 dark:border-slate-700 focus:border-red-500 dark:focus:border-amber-400 focus:ring-red-500/20 dark:focus:ring-amber-400/20`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Grid bg pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      {/* Warm glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-red-400/8 dark:bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{t('contact.title')}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-5 rounded-full"></div>
              <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
            </div>
          </AnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}
            <AnimationWrapper animation="fadeInLeft" delay={100}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-7 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
                {t('contact.connectTitle')}
              </h3>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-amber-700/40 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-200 hover:-translate-y-0.5 card-shimmer"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                      info.color === 'red'    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                      info.color === 'amber'  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' :
                      'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold uppercase tracking-wide">{info.label}</p>
                      <p className="text-gray-800 dark:text-slate-200 font-medium text-sm group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">{info.value}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 dark:text-slate-600 ml-auto group-hover:text-red-400 dark:group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              <div>
                <p className="text-sm font-bold text-gray-700 dark:text-slate-300 mb-4 uppercase tracking-wide">{t('contact.followMe')}</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/p-suksukhon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:paratthakon.suks@gmail.com"
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-sm font-bold rounded-xl border-2 border-gray-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </AnimationWrapper>

            {/* Right — form */}
            <AnimationWrapper animation="fadeInRight" delay={200}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-7 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-amber-500 rounded-full"></span>
                {t('contact.formTitle')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">{t('contact.labelName')}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder={t('contact.placeholderName')} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">{t('contact.labelEmail')}</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder={t('contact.placeholderEmail')} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">{t('contact.labelSubject')}</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder={t('contact.placeholderSubject')} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">{t('contact.labelMessage')}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder={t('contact.placeholderMessage')} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {t('contact.sendMessage')}
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-400 rounded-xl text-sm font-medium">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('contact.successMessage')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-400 rounded-xl text-sm font-medium">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('contact.errorMessage')}
                  </div>
                )}
              </form>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
