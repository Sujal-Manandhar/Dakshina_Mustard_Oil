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
          
          {/* Packaging Illustration (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 text-center">
              <span className="inline-block px-3 py-1 rounded bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                {locale === 'ne' ? 'हेटौंडा मिल उत्पादन' : 'Hetauda Mill Production'}
              </span>

              <div className="relative w-52 h-76 sm:w-60 sm:h-88 mx-auto my-2">
                <Image
                  src="/images/products/roasted-1l.png"
                  alt={locale === 'ne' ? 'दक्षिणा तोरीको तेल' : 'Dakshina Mustard Oil Pouch'}
                  fill
                  className="object-contain drop-shadow-sm rounded-lg"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4 text-left">
                <p className="text-xs font-bold text-slate-900">
                  {locale === 'ne' ? 'स्वादिलो र सुगन्धित घरेलु मिलबाट उत्पादित' : 'Tasty & Fragrant, Produced from Household Mill'}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच प्याकिङ' : '500ml & 1000ml sealed pouch formats'}
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
