'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import GSAPReveal from '@/components/ui/GSAPReveal';
import { useGsapStagger } from '@/hooks/useGsapStagger';

export default function ManufacturingSection() {
  const { locale, t } = useLanguage();
  const linesRef = useGsapStagger<HTMLDivElement>({
    stagger: 0.18,
    fromY: 40,
    fromScale: 0.97,
    duration: 0.85,
    start: 'top 85%',
  });

  return (
    <section className="section-padding bg-[#1C1408] text-white border-b border-amber-500/20" id="manufacturing">
      <div className="container-custom mx-auto">
        
        <GSAPReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block mb-2">
            {t.manufacturing.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.manufacturing.title}
          </h2>
          
          <div className="golden-divider mx-auto mb-4" />
          
          <p className="text-base text-amber-100/80 leading-relaxed font-normal">
            {t.manufacturing.subtitle}
          </p>
        </GSAPReveal>

        {/* Dual Manufacturing Lines */}
        <div ref={linesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Roasted Line */}
          <div className="bg-[#241A0B] border border-amber-500/30 rounded-2xl p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-900/40 border border-red-500/50 flex items-center justify-center text-red-400">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-amber-500/30">
                  {locale === 'ne' ? 'प्रकार ०१' : 'Type 01'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {locale === 'ne' ? 'भुटेको तोरीको तेल (चेपुवा)' : 'Roasted Chepuwa Processing'}
              </h3>

              <p className="text-sm text-amber-100/80 leading-relaxed mb-6 font-normal">
                {locale === 'ne'
                  ? 'तोरीका बीउहरूलाई निश्चित तापक्रममा सुस्तरी भुटेर तेल निकालिन्छ। यस विधिले नेपाली भान्साको मनपर्ने तीखोपन, गाढा सुनौलो रंग र गहिरो बास्ना प्रदान गर्छ।'
                  : 'Thermal seed roaster gently preheats selected tori seeds before slow pressing, developing trademark Nepali aroma, dark golden clarity, and pungent punch.'}
              </p>
            </div>

            <ul className="space-y-2 text-xs text-amber-200/80 font-medium pt-4 border-t border-amber-500/20">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{locale === 'ne' ? 'विधिपूर्वक तोरी भुट्ने प्रणाली' : 'Carefully controlled seed roasting'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच प्याकेजिङ' : 'Available in 500ml & 1000ml pouches'}</span>
              </li>
            </ul>
          </div>

          {/* Cold-Pressed Line */}
          <div className="bg-[#241A0B] border border-amber-500/30 rounded-2xl p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-900/40 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-amber-500/30">
                  {locale === 'ne' ? 'प्रकार ०२' : 'Type 02'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {locale === 'ne' ? 'कच्ची घानी (कोल्ड प्रेस्ड)' : 'Pure Cold-Pressed (Kacchi Ghani)'}
              </h3>

              <p className="text-sm text-amber-100/80 leading-relaxed mb-6 font-normal">
                {locale === 'ne'
                  ? 'कुनै ताप बिना कम तापक्रममा प्राकृतिक रूपमा पेलिएको तेल। यसले प्राकृतिक पोषक तत्व, भिटामिन ई र ओमेगा फ्याटी एसिडलाई पूर्ण सुरक्षित राख्छ।'
                  : 'Virgin mechanical extraction without thermal heating, safeguarding natural vitamin E, omega fatty acids, and wholesome vitality.'}
              </p>
            </div>

            <ul className="space-y-2 text-xs text-amber-200/80 font-medium pt-4 border-t border-amber-500/20">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{locale === 'ne' ? 'कम तापक्रममा प्राकृतिक निष्कासन' : 'Cold-pressed virgin extraction below 45°C'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच प्याकेजिङ' : 'Available in 500ml & 1000ml pouches'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Process Page Link */}
        <div className="text-center">
          <Link
            href="/process"
            className="btn-corp-primary text-sm font-bold shadow-md"
          >
            <span>{locale === 'ne' ? 'सम्पूर्ण उत्पादन विधि र चरणहरू हेर्नुहोस्' : 'Explore Full Manufacturing Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
