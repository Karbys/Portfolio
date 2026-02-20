'use client';

import { useState, useEffect } from 'react';
import FloatingElements from './FloatingElements';
import { useLocale } from '@/context/LocaleContext';

export default function Hero() {
  const { t } = useLocale();
  const fullText = t('hero.title');
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setCurrentText('');
    setTextIndex(0);
    setIsDeleting(false);
  }, [fullText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (textIndex < fullText.length) {
          setCurrentText(fullText.substring(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (textIndex > 0) {
          setCurrentText(fullText.substring(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Animation */}
          <div className="mb-8 animate-scaleIn" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center hover-lift">
                <span className="text-4xl text-gray-600 dark:text-slate-300 animate-float">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Name with Staggered Animation */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 mb-4 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {t('hero.greeting')} <span className="text-blue-600 dark:text-blue-400 hover-glow inline-block">{t('hero.name')}</span>
          </h1>

          {/* Animated Title with Typewriter Effect */}
          <div className="text-2xl md:text-3xl text-gray-600 dark:text-slate-400 mb-8 h-12 flex items-center justify-center animate-fadeInUp font-sans" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <span className="border-r-2 border-blue-600 dark:border-blue-400 pr-2">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description with Fade In */}
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons with Staggered Animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            <a
              href="#projects"
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift hover-glow group relative overflow-hidden"
            >
              <span className="relative z-10">{t('hero.ctaWork')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover-lift relative overflow-hidden group"
            >
              <span className="relative z-10">{t('hero.ctaContact')}</span>
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          {/* Social Links with Animation */}
          <div className="mt-12 flex justify-center space-x-6 animate-fadeInUp" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            {[
              { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", delay: '1.3s' },
              { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", delay: '1.4s' },
              { icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", delay: '1.5s' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover-lift animate-fadeInUp"
                style={{ animationDelay: social.delay, animationFillMode: 'both' }}
              >
                <svg className="w-6 h-6 hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
