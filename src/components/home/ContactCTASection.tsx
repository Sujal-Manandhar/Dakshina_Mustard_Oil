'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, MapPin, Phone, Mail, Package, ShieldCheck, Building2 } from 'lucide-react';

export default function ContactCTASection() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-slate-900 text-white" id="contact-cta">
      <div className="container-custom mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
          <Building2 className="w-3.5 h-3.5" />
          <span>{t.contactSection.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
          {t.contactSection.title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          {t.contactSection.description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-3xl mx-auto text-xs font-bold">
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-md text-slate-200">
            <Package className="w-4 h-4 text-amber-400" />
            <span>{locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच' : '500ml & 1000ml Sealed Pouches'}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-md text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{locale === 'ne' ? 'भुटेको चेपुवा र कच्ची घानी' : 'Roasted & Cold Pressed'}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-md text-slate-200">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{t.contact.info.addressValue}</span>
          </div>
        </div>

        {/* Solid Corporate Action Button */}
        <div>
          <Link
            href="/contact"
            className="btn-corp-primary text-base px-8 py-3.5 font-bold"
          >
            <span>{t.contactSection.getInTouch}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
