'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, MapPin, Phone, Mail, Package, ShieldCheck, Building2 } from 'lucide-react';
import GSAPReveal from '@/components/ui/GSAPReveal';

export default function ContactCTASection() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-[#241A0B] text-white border-t-2 border-amber-500/30" id="contact-cta">
      <div className="container-custom mx-auto text-center">
        <GSAPReveal direction="up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30 shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.contactSection.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
          {t.contactSection.title}
        </h2>

        <p className="text-amber-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          {t.contactSection.description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-3xl mx-auto text-xs font-bold">
          <div className="flex items-center gap-2 bg-[#1C1408] border border-amber-500/30 px-4 py-2.5 rounded-xl text-amber-100">
            <Package className="w-4 h-4 text-amber-400" />
            <span>{locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच' : '500ml & 1000ml Sealed Pouches'}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1C1408] border border-amber-500/30 px-4 py-2.5 rounded-xl text-amber-100">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{locale === 'ne' ? 'भुटेको चेपुवा र कच्ची घानी' : 'Roasted & Cold Pressed'}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1C1408] border border-amber-500/30 px-4 py-2.5 rounded-xl text-amber-100">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{t.contact.info.addressValue}</span>
          </div>
        </div>

        {/* Solid Corporate Action Button */}
        <div>
          <Link
            href="/contact"
            className="btn-corp-primary text-base px-8 py-3.5 font-bold shadow-lg"
          >
            <span>{t.contactSection.getInTouch}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        </GSAPReveal>
      </div>
    </section>
  );
}
