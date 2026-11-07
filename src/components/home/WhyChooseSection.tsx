'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Flame, Sparkles, MapPin, ShieldCheck, Package, Building2 } from 'lucide-react';

export default function WhyChooseSection() {
  const { t } = useLanguage();

  const iconMap = [Flame, Package, MapPin, ShieldCheck];

  return (
    <section className="section-padding bg-white border-b border-slate-200" id="why-choose">
      <div className="container-custom mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-2">
            {t.whyChoose.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {t.whyChoose.title}
          </h2>
          
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full" />
          
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {t.whyChoose.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChoose.reasons.map((reason, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={index}
                className="corp-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 text-xs font-bold text-slate-400">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
