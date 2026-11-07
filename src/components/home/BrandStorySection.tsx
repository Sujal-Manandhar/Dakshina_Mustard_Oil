'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Quote } from 'lucide-react';
import GSAPReveal from '@/components/ui/GSAPReveal';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BrandStorySection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[#FFFBF0]" id="brand-story">
      <div className="container-custom mx-auto">
        <GSAPReveal direction="up">
          <SectionHeader
            title={t.brandStory.title}
            subtitle={t.brandStory.subtitle}
          />
        </GSAPReveal>

        <GSAPReveal direction="zoom" delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm border border-amber-500/25 relative overflow-hidden">
              {/* Decorative amber glow top-right */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-400/8 blur-3xl pointer-events-none" />
              
              <Quote className="w-10 h-10 text-amber-500/40 mb-6" aria-hidden="true" />

              <p className="text-lg sm:text-xl text-[#241A0B] leading-relaxed font-medium italic">
                &ldquo;{t.brandStory.description}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                <div>
                  <p className="font-bold text-[#241A0B] text-base sm:text-lg">
                    {t.brandIntro.title}
                  </p>
                  <p className="text-xs text-[#6B5E4A]">
                    {t.contact.info.addressValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GSAPReveal>
      </div>
    </section>
  );
}
