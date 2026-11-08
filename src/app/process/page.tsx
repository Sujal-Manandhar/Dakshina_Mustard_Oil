'use client';

import React from 'react';
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
  PackageCheck,
  Scale,
  Factory,
  Layers,
  Sparkle,
  Gauge,
  Filter,
  RefreshCw,
  FlaskConical,
  Boxes
} from 'lucide-react';

export default function ProcessPage() {
  const { locale, t } = useLanguage();

  // The 9 specific production stages requested
  const processTimeline = [
    {
      step: '01',
      titleEn: 'Raw mustard seed receiving',
      titleNe: 'तोरी प्राप्त गर्ने र तौल गर्ने',
      descEn: 'Receive mustard seeds and record their weight.',
      descNe: 'उत्कृष्ट तोरीका बीउहरू प्राप्त गरी सही तौल तथा भण्डारण रेकर्ड राखिन्छ।',
      icon: Scale,
      badgeEn: 'Weight & Intake',
      badgeNe: 'तौल तथा प्राप्ति',
      spec: locale === 'ne' ? 'डिजिटल तौल प्रमाणीकरण' : 'Digital Weighbridge & Moisture Verification'
    },
    {
      step: '02',
      titleEn: 'Seed cleaning',
      titleNe: 'तोरी सफा गर्ने',
      descEn: 'Remove dust, stones, dirt and unwanted materials.',
      descNe: 'आधुनिक मेसिनबाट धुलो, ढुंगा, भुस र अवांछित फोहोर पूर्ण रूपमा हटाइन्छ।',
      icon: Filter,
      badgeEn: 'Screening & Destoning',
      badgeNe: 'सरसफाइ तथा छनाइ',
      spec: locale === 'ne' ? 'मल्टि-स्टेज स्क्रिनिङ र म्याग्नेटिक सेपरेटर' : 'Multi-Stage Vibratory Sieve & Magnetic Separator'
    },
    {
      step: '03',
      titleEn: 'Seed preparation',
      titleNe: 'तोरी तयार गर्ने',
      descEn: 'Prepare the cleaned seeds for machine processing.',
      descNe: 'सफा गरिएको तोरीलाई पेल्ने मेसिनमा पठाउनका लागि उपयुक्त रूपमा तयार गरिन्छ।',
      icon: Flame,
      badgeEn: 'Pre-Processing & Roasting',
      badgeNe: 'प्रशोधन तयारी र रोस्टिङ',
      spec: locale === 'ne' ? 'चेपुवाका लागि रोस्टिङ / घानीका लागि प्राकृतिक' : 'Controlled Roasting for Chepuwa / Raw for Cold Pressed'
    },
    {
      step: '04',
      titleEn: 'Oil extraction',
      titleNe: 'तेल पेल्ने',
      descEn: 'Feed seeds into the oil expeller and extract mustard oil.',
      descNe: 'तयार तोरीलाई तेल पेल्ने एक्स्पेलर मेसिनमा हालेर शुद्ध तोरीको तेल निकालिन्छ।',
      icon: Factory,
      badgeEn: 'Mechanical Expeller Pressing',
      badgeNe: 'एक्स्पेलर निष्कासन',
      spec: locale === 'ne' ? 'हेभी-ड्युटी मेकानिकल क्रसर' : 'Continuous Screw Press with Temperature Monitoring'
    },
    {
      step: '05',
      titleEn: 'Thick oil separation',
      titleNe: 'बाक्लो तेल छुट्याउने',
      descEn: 'Separate the thick oil from the initial extracted oil.',
      descNe: 'पहिलो चरणमा निस्किएको तेलबाट बाक्लो तेल र हल्का तेललाई सावधानीपूर्वक छुट्याइन्छ।',
      icon: Layers,
      badgeEn: 'Phase Separation',
      badgeNe: 'तेल पृथकीकरण',
      spec: locale === 'ne' ? 'गुरुत्वाकर्षण तथा सेडिमेन्टेसन ट्याङ्क' : 'Gravity Separation & Primary Settling Chambers'
    },
    {
      step: '06',
      titleEn: 'Oil reprocessing',
      titleNe: 'बाक्लो तेल पुनः प्रशोधन गर्ने',
      descEn: 'Reprocess separated thick oil through the machine as per our production method.',
      descNe: 'छुट्याइएको बाक्लो तेललाई उत्पादन विधि अनुसार पुनः मेसिनमा प्रशोधन गरिन्छ।',
      icon: RefreshCw,
      badgeEn: 'Refined Reprocessing',
      badgeNe: 'पुनः प्रशोधन',
      spec: locale === 'ne' ? 'थप निष्कासन र तेलको उच्चतम रिकभरी' : 'Secondary Pass to Maximize Natural Yield & Consistency'
    },
    {
      step: '07',
      titleEn: 'Oil settling and filtration',
      titleNe: 'तेल थिग्राउने र छान्ने',
      descEn: 'Allow suspended particles to settle and filter the oil as required.',
      descNe: 'तेलमा रहेका कणहरूलाई प्राकृतिक रूपमा थिग्रिन दिएर आवश्यकता अनुसार छानेर कञ्चन पारिन्छ।',
      icon: Sparkles,
      badgeEn: 'Settling & Micro-Filtration',
      badgeNe: 'थिग्राउने र फिल्टर',
      spec: locale === 'ne' ? 'प्राकृतिक सेटलिङ र मल्टि-लेयर फिल्टर' : 'Natural Clarification & High-Density Filter Press'
    },
    {
      step: '08',
      titleEn: 'Quality checking',
      titleNe: 'गुणस्तर जाँच गर्ने',
      descEn: 'Check appearance, smell, clarity and batch quality.',
      descNe: 'तेलको रंग, सुगन्ध, स्वच्छता र ब्याच अनुसारको सम्पूर्ण गुणस्तर कडा रूपमा जाँच गरिन्छ।',
      icon: FlaskConical,
      badgeEn: 'Lab Batch Verification',
      badgeNe: 'गुणस्तर प्रमाणीकरण',
      spec: locale === 'ne' ? 'एसिड भ्यालु, बास्ना र शुद्धता परीक्षण' : 'Aroma, Free Fatty Acid (FFA) & Clarity Quality Check'
    },
    {
      step: '09',
      titleEn: 'Packaging',
      titleNe: 'प्याकिङ गर्ने',
      descEn: 'Fill 500 ml and 1 litre pouches, seal and pack into cartons.',
      descNe: 'स्वचालित मेसिनबाट ५०० मि.लि. र १ लिटर पाउचमा तेल भरी, सिल गरी सुरक्षित कार्टुनमा प्याक गरिन्छ।',
      icon: Boxes,
      badgeEn: '500ml & 1L Cartons',
      badgeNe: '५०० मि.लि. र १ लिटर पाउच',
      spec: locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच तथा थोक कार्टुन' : 'Food-Grade Multi-Layer Nitrogen-Sealed Pouches'
    }
  ];

  return (
    <div className="bg-[#FFF8E7] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#241A0B] text-white border-b border-amber-500/30 py-16 sm:py-20 relative">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
      

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {locale === 'ne' ? 'हाम्रो चरणबद्ध उत्पादन विधि' : 'Our Complete Manufacturing Process'}
            </h1>

            <div className="golden-divider mb-6" />

            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-normal">
              {locale === 'ne'
                ? 'कच्चा तोरी प्राप्त गर्नेदेखि ५०० मि.लि. र १ लिटर पाउच प्याकिङसम्मका सम्पूर्ण ९ चरणहरूको विस्तृत विवरण।'
                : 'From raw mustard seed receiving and destoning to expeller pressing, settling, and automated pouch packaging.'}
            </p>
          </div>
        </div>
      </section>

      {/* 9-Stage Manufacturing Sequence Section */}
      <section className="section-padding bg-[#FFF8E7]">
        <div className="container-custom mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-2">
              {locale === 'ne' ? '९ चरणको वैज्ञानिक प्रक्रिया' : '9-Stage Production Sequence'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A0B] tracking-tight">
              {locale === 'ne' ? 'तोरीको तेल उत्पादन टाइमलाइन' : 'Manufacturing Timeline'}
            </h2>
            <div className="golden-divider mx-auto mt-4" />
            <p className="text-base text-[#6B5E4A] mt-4 leading-relaxed font-normal">
              {locale === 'ne'
                ? 'हेटौंडास्थित हाम्रो मिलमा प्रत्येक चरणमा स्वच्छता, प्राविधिक मापदण्ड र शुद्धता सुनिश्चित गरिन्छ।'
                : 'Every single batch follows strict physical and hygienic control parameters from seed intake to final sealed cartons.'}
            </p>
          </div>

          {/* Stepped Process Cards Grid */}
          <div className="max-w-5xl mx-auto space-y-6">
            {processTimeline.map((item, idx) => {
              const StepIcon = item.icon;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-amber-500/25 p-6 sm:p-8 shadow-sm hover:border-amber-500/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Step Number & Icon Badge (3 Cols) */}
                    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-4 border-b lg:border-b-0 lg:border-r border-amber-500/20 pb-4 lg:pb-0 lg:pr-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#241A0B] text-amber-400 font-extrabold text-base shadow-sm">
                          {item.step}
                        </span>
                        <div className="w-11 h-11 rounded-lg bg-[#FFFBF0] border border-amber-500/30 flex items-center justify-center text-amber-700">
                          <StepIcon className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <span className="px-3 py-1 rounded text-[11px] font-bold bg-[#FFFBF0] border border-amber-500/40 text-amber-900 uppercase tracking-wider">
                        {locale === 'ne' ? item.badgeNe : item.badgeEn}
                      </span>
                    </div>

                    {/* Middle: Step Titles & Narrative (6 Cols) */}
                    <div className="lg:col-span-6 space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#241A0B] tracking-tight">
                        {locale === 'ne' ? item.titleNe : item.titleEn}
                      </h3>
                      
                      <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                        {locale === 'ne' ? item.titleEn : item.titleNe}
                      </p>

                      <p className="text-sm text-[#3A2A0A] leading-relaxed font-normal">
                        {locale === 'ne' ? item.descNe : item.descEn}
                      </p>
                    </div>

                    {/* Right: Technical Specification & Verification (3 Cols) */}
                    <div className="lg:col-span-3 lg:border-l border-amber-500/20 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
                      <div className="bg-[#FFFBF0] rounded-lg p-3.5 border border-amber-500/20">
                        <p className="text-[11px] font-bold text-[#6B5E4A] uppercase tracking-wider mb-1">
                          {locale === 'ne' ? 'प्राविधिक मानक' : 'Technical Standard'}
                        </p>
                        <p className="text-xs font-semibold text-[#241A0B] leading-snug">
                          {item.spec}
                        </p>
                      </div>

                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{locale === 'ne' ? 'गुणस्तर प्रमाणित' : 'Verified Batch'}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="section-padding bg-[#241A0B] text-white text-center">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {locale === 'ne' ? 'हाम्रा शुद्ध तोरीको तेलका उत्पादनहरू हेर्नुहोस्' : 'Explore Our Packaged Mustard Oils'}
          </h2>
          <div className="golden-divider mx-auto mb-6" />
          <p className="text-base text-amber-100/90 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            {locale === 'ne'
              ? '५०० मि.लि. र १००० मि.लि. (१ लिटर) पाउच तथा कार्टुनमा भुटेको चेपुवा र कच्ची घानी दुवै तोरीको तेल उपलब्ध छ।'
              : 'Available in 500ml and 1000ml sealed pouches and sturdy cartons for wholesale and retail.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-corp-primary text-sm font-bold">
              <span>{t.nav.products}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-corp-secondary text-sm font-bold">
              <span>{t.nav.contact}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
