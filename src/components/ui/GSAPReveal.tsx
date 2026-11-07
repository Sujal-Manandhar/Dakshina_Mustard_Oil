'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function GSAPReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 35,
}: GSAPRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let xVal = 0;
    let yVal = 0;
    let scaleVal = 1;

    if (direction === 'up') yVal = distance;
    if (direction === 'down') yVal = -distance;
    if (direction === 'left') xVal = -distance;
    if (direction === 'right') xVal = distance;
    if (direction === 'zoom') scaleVal = 0.92;

    const ctx = gsap.context(() => {
      // Use requestAnimationFrame to prevent synchronous layout thrashing / forced reflow
      requestAnimationFrame(() => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: xVal,
            y: yVal,
            scale: scaleVal,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [direction, delay, duration, distance]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}

