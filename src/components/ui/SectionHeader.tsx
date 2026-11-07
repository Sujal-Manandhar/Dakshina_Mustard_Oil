'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className={`text-sm sm:text-base font-semibold uppercase tracking-wider mb-3 ${
          light ? 'text-dakshina-gold' : 'text-dakshina-gold-dark'
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`section-heading ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      <div className={`golden-divider mt-5 ${centered ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`section-subheading mt-5 ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : ''
        }`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
