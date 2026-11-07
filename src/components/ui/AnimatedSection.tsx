'use client';

import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible
          ? `opacity-100 translate-y-0 translate-x-0`
          : animation === 'fade-in-up'
          ? 'opacity-0 translate-y-8'
          : animation === 'slide-in-left'
          ? 'opacity-0 -translate-x-8'
          : animation === 'slide-in-right'
          ? 'opacity-0 translate-x-8'
          : 'opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
