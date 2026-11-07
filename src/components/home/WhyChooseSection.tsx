'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Flame, Package, MapPin, ShieldCheck } from 'lucide-react';
import { useGsapStagger } from '@/hooks/useGsapStagger';
import GSAPReveal from '@/components/ui/GSAPReveal';

export default function WhyChooseSection() {
  const { t } = useLanguage();
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.13, fromY: 36, duration: 0.8 });

  const iconMap = [Flame, Package, MapPin, ShieldCheck];

  return (
    <section className="section-padding bg-[#FFFBF0] border-b border-amber-500/20" id="why-choose">
      <div className="container-custom mx-auto">

        <GSAPReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-2">
            {t.whyChoose.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A0B] tracking-tight mb-3">
            {t.whyChoose.title}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full" />
          <p className="text-base text-[#6B5E4A] leading-relaxed font-normal">
            {t.whyChoose.subtitle}
          </p>
        </GSAPReveal>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChoose.reasons.map((reason, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-amber-500/20 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-700 mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#241A0B] mb-2">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B5E4A] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-amber-500/15 text-xs font-extrabold text-amber-800/50">
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
