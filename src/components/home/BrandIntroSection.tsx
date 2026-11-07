'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Flame, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function BrandIntroSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white border-b border-slate-200" id="brand-intro">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Packaging Illustration (5 Cols) with Dual Pouch Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
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
          </div>

          {/* Narrative Content (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.brandIntro.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {t.brandIntro.title}
            </h2>

            <p className="text-base sm:text-lg font-bold text-amber-700 mb-5">
              {t.brandIntro.subtitle}
            </p>

            <div className="w-16 h-1 bg-amber-500 mb-6 rounded-full" />

            <p className="text-base text-slate-600 leading-relaxed mb-8 font-normal">
              {t.brandIntro.description}
            </p>

            {/* Dual Processing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-3 text-red-700">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  {t.brandIntro.roastedTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.brandIntro.roastedDesc}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3 text-emerald-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  {t.brandIntro.coldPressedTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.brandIntro.coldPressedDesc}
                </p>
              </div>

            </div>

            <Link href="/about" className="btn-corp-secondary text-sm font-bold">
              <span>{t.brandIntro.learnMore}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
