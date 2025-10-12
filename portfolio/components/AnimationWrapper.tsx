'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn' | 'slideInUp';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimationWrapper({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 600,
  className = '' 
}: AnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fadeInUp: `transform translate-y-8 opacity-0 transition-all duration-${duration} ease-out ${isVisible ? 'translate-y-0 opacity-100' : ''}`,
    fadeInLeft: `transform -translate-x-8 opacity-0 transition-all duration-${duration} ease-out ${isVisible ? 'translate-x-0 opacity-100' : ''}`,
    fadeInRight: `transform translate-x-8 opacity-0 transition-all duration-${duration} ease-out ${isVisible ? 'translate-x-0 opacity-100' : ''}`,
    fadeIn: `opacity-0 transition-all duration-${duration} ease-out ${isVisible ? 'opacity-100' : ''}`,
    scaleIn: `transform scale-95 opacity-0 transition-all duration-${duration} ease-out ${isVisible ? 'scale-100 opacity-100' : ''}`,
    slideInUp: `transform translate-y-12 opacity-0 transition-all duration-${duration} ease-out ${isVisible ? 'translate-y-0 opacity-100' : ''}`,
  };

  return (
    <div ref={ref} className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  );
}
