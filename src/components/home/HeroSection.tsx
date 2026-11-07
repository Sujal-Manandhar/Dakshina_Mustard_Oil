'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Sparkles,
  Package
} from 'lucide-react';

export default function HeroSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-amber-100/50 via-[#FFF8E7] to-[#FFF8E7] border-b border-amber-500/25 py-14 sm:py-20 lg:py-24 relative">
      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dakshina-gold/40 text-dakshina-brown text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-dakshina-gold animate-pulse" />
              <span>Dakshina Tel Mill • Hetauda, Nepal</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-dakshina-brown tracking-tight leading-[1.12] mb-6">
              <span>{t.hero.headline} </span>
              <span className="text-dakshina-gold-dark block mt-1">
                {t.hero.headlineAccent}
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-dakshina-text-muted leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Link href="/products" className="btn-corp-primary text-sm font-bold">
                <span>{t.hero.exploreProducts}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-corp-secondary text-sm font-bold">
                <span>{t.hero.contactUs}</span>
              </Link>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-dakshina-gold/30">
              
              <div className="p-3.5 rounded-xl bg-white border border-dakshina-gold/30 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-4 h-4 text-dakshina-red" />
                  <span className="text-xs font-bold text-dakshina-brown uppercase">
                    {locale === 'ne' ? 'भुटेको चेपुवा' : 'Roasted Chepuwa'}
                  </span>
                </div>
                <p className="text-xs text-dakshina-text-muted leading-normal">
                  {locale === 'ne' ? 'परम्परागत बास्ना र तीखोपन' : 'Intense aroma & bold flavor'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-dakshina-gold/30 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-dakshina-green" />
                  <span className="text-xs font-bold text-dakshina-brown uppercase">
                    {locale === 'ne' ? 'कच्ची घानी' : 'Cold Pressed'}
                  </span>
                </div>
                <p className="text-xs text-dakshina-text-muted leading-normal">
                  {locale === 'ne' ? 'बिना ताप प्राकृतिक पोषण' : 'Unheated raw antioxidants'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-dakshina-gold/30 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-dakshina-gold-dark" />
                  <span className="text-xs font-bold text-dakshina-brown uppercase">
                    {locale === 'ne' ? '५०० मि.लि. र १ लिटर' : '500ml & 1L Packs'}
                  </span>
                </div>
                <p className="text-xs text-dakshina-text-muted leading-normal">
                  {locale === 'ne' ? 'सुरक्षित पाउच र थोक कार्टुन' : 'Sealed pouches & cartons'}
                </p>
              </div>

            </div>

          </div>

          {/* Right Hero Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border-2 border-dakshina-gold/40 rounded-2xl p-6 sm:p-8 shadow-xl text-center relative">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-dakshina-gold/20 text-xs">
                <span className="font-extrabold text-dakshina-brown uppercase tracking-wider">
                  {locale === 'ne' ? 'नेपाली गुणस्तर' : 'Nepali Quality'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-dakshina-green/10 text-dakshina-green font-bold border border-dakshina-green/30">
                  {locale === 'ne' ? '१००% शुद्ध' : '100% Pure'}
                </span>
              </div>

              <div className="relative w-56 h-80 sm:w-64 sm:h-92 mx-auto my-2">
                <Image
                  src="/images/products/dakshina-1l.png"
                  alt={locale === 'ne' ? 'दक्षिणा तोरीको तेल आधिकारिक प्याकेजिङ' : 'Dakshina Mustard Oil Official Packaging'}
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>

              <div className="mt-4 pt-4 border-t border-dakshina-gold/20 text-left">
                <div className="flex items-center justify-between text-xs font-bold text-dakshina-brown mb-1">
                  <span>{locale === 'ne' ? 'दक्षिणा ब्राण्ड भुटेको तोरीको तेल' : 'Dakshina Roasted Mustard Oil'}</span>
                  <span className="text-dakshina-gold-dark">1000 ml & 500 ml</span>
                </div>
                <p className="text-xs text-dakshina-text-muted">
                  {locale === 'ne' ? 'हेटौंडास्थित मिलबाट उत्पादित एवं प्याक गरिएको।' : 'Direct mill production and packaging from Hetauda, Nepal.'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
