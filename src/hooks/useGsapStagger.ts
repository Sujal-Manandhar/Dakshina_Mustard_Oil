'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGsapStaggerOptions {
  /** Child selector or class – e.g. '.stagger-child'. Pass nothing to stagger direct children. */
  childSelector?: string;
  fromY?: number;
  fromX?: number;
  fromScale?: number;
  fromOpacity?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  /** start scroll trigger position, e.g. 'top 85%' */
  start?: string;
}

/**
 * Attach a ref to a wrapper element; children animate in with GSAP stagger on scroll.
 */
export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapStaggerOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    childSelector,
    fromY = 32,
    fromX = 0,
    fromScale = 1,
    fromOpacity = 0,
    stagger = 0.1,
    duration = 0.75,
    delay = 0,
    ease = 'power3.out',
    start = 'top 88%',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el.children;

    const ctx = gsap.context(() => {
      // Defer execution to avoid synchronous forced reflow during mount
      requestAnimationFrame(() => {
        gsap.fromTo(
          Array.from(targets),
          { opacity: fromOpacity, y: fromY, x: fromX, scale: fromScale },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            stagger,
            duration,
            delay,
            ease,
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [childSelector, fromY, fromX, fromScale, fromOpacity, stagger, duration, delay, ease, start]);

  return ref;
}

