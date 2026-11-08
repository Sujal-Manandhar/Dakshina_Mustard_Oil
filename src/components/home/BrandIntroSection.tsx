'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import GSAPReveal from '@/components/ui/GSAPReveal';

export default function BrandIntroSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white border-b border-amber-500/15" id="brand-intro">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Packaging Illustration (5 Cols) with Dual Pouch Showcase */}
          <GSAPReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#FFFBF0] border-2 border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-lg">

              <div className="flex items-center justify-between pb-3 mb-5 border-b border-amber-500/20 text-xs">
                <span className="inline-block px-3 py-1 rounded bg-[#241A0B] text-amber-400 font-extrabold uppercase tracking-wider">
                  {locale === 'ne' ? 'हेटौंडा मिल उत्पादन' : 'Hetauda Mill Production'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                  {locale === 'ne' ? '५०० मि.लि. र १ लिटर' : '500ml & 1L Packs'}
                </span>
              </div>

              {/* Side-by-Side Dual Pouch Display (Roasted & Cold-Pressed) */}
              <div className="grid grid-cols-2 gap-3 items-end my-4">

                {/* 1L Roasted Pouch */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-64 sm:h-76 transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/images/products/roasted-1l.png"
                      alt={locale === 'ne' ? 'दक्षिणा भुटेको तोरीको तेल १ लिटर' : 'Dakshina Roasted Mustard Oil 1L'}
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="mt-2 px-2.5 py-1 rounded-md bg-white border border-red-200 text-center w-full">
                    <span className="block text-xs font-extrabold text-red-700">
                      {locale === 'ne' ? 'भुटेको चेपुवा' : 'Roasted Chepuwa'}
                    </span>
                    <span className="text-[11px] text-[#6B5E4A] font-semibold">1000 ml</span>
                  </div>
                </div>

                {/* 500ml Cold-Pressed Pouch */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-56 sm:h-64 transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/images/products/coldpress-500ml.png"
                      alt={locale === 'ne' ? 'दक्षिणा कच्ची घानी ५०० मि.लि.' : 'Dakshina Cold Pressed 500ml'}
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="mt-2 px-2.5 py-1 rounded-md bg-white border border-emerald-200 text-center w-full">
                    <span className="block text-xs font-extrabold text-emerald-700">
                      {locale === 'ne' ? 'कच्ची घानी' : 'Cold Pressed'}
                    </span>
                    <span className="text-[11px] text-[#6B5E4A] font-semibold">500 ml</span>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-amber-500/20 mt-4 text-left bg-white p-3.5 rounded-xl border border-amber-500/20">
                <p className="text-xs font-bold text-[#241A0B]">
                  {locale === 'ne' ? 'स्वादिलो र सुगन्धित घरेलु मिलबाट उत्पादित' : 'Tasty & Fragrant, Produced from Household Mill'}
                </p>
                <p className="text-xs text-[#6B5E4A] mt-0.5">
                  {locale === 'ne'
                    ? '५०० मि.लि. र १००० मि.लि. खाद्य-ग्रेड सिल पाउच तथा थोक कार्टुन प्याकिङ'
                    : '500ml & 1000ml sealed food-grade pouch formats & bulk cartons'}
                </p>
              </div>

            </div>
          </GSAPReveal>

          {/* Narrative Content (7 Cols) */}
          <GSAPReveal direction="right" className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#241A0B] tracking-tight leading-tight mb-2">
              {t.brandIntro.title}
            </h2>

            <p className="text-base sm:text-lg font-bold text-amber-800 mb-4">
              {t.brandIntro.subtitle}
            </p>

            <div className="w-16 h-1 bg-amber-500 mb-5 rounded-full" />

            {/* Concise, Well-Spaced Narrative */}
            <div className="text-sm sm:text-base text-[#5A4D3B] leading-relaxed mb-6 space-y-3 font-normal">
              {t.brandIntro.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature Tagline Callout */}
            {/* {t.brandIntro.tagline && (
              <div className="mb-6 p-3.5 rounded-xl bg-[#FFFBF0] border-l-4 border-amber-500 text-xs sm:text-sm font-bold text-[#241A0B]">
                {t.brandIntro.tagline}
              </div>
            )} */}

            {/* Dual Processing Cards - Compact & Balanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">

              <div className="p-4 sm:p-4.5 rounded-xl bg-[#FFFBF0] border border-amber-500/20 shadow-xs hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center text-red-700 shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-[#241A0B] text-sm leading-snug">
                    {t.brandIntro.roastedTitle}
                  </h4>
                </div>
                <p className="text-xs text-[#5A4D3B] leading-relaxed">
                  {t.brandIntro.roastedDesc}
                </p>
              </div>

              <div className="p-4 sm:p-4.5 rounded-xl bg-[#FFFBF0] border border-amber-500/20 shadow-xs hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-[#241A0B] text-sm leading-snug">
                    {t.brandIntro.coldPressedTitle}
                  </h4>
                </div>
                <p className="text-xs text-[#5A4D3B] leading-relaxed">
                  {t.brandIntro.coldPressedDesc}
                </p>
              </div>

            </div>

            {/* Action CTA */}
            <div>
              <Link href="/about" className="btn-corp-secondary text-sm font-bold inline-flex items-center gap-2 py-3 px-5.5 shadow-xs hover:shadow-md">
                <span>{t.brandIntro.learnMore}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </GSAPReveal>

        </div>
      </div>
    </section>
  );
}
