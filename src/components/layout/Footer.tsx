'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Package, 
  CheckCircle2,
  PhoneCall,
  Send
} from 'lucide-react';

export default function Footer() {
  const { locale, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241A0B] text-[#FFF8E7] relative overflow-hidden border-t-4 border-amber-500">
      
      {/* Upper Industrial Verification Badges Banner */}
      <div className="bg-[#1C1408] border-b border-amber-500/20 py-8">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
                <Flame className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {locale === 'ne' ? 'भुटेको तोरीको तेल' : 'Roasted Mustard Oil'}
                </p>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  {locale === 'ne' ? 'परम्परागत चेपुवा विधि' : 'Traditional Chepuwa Extraction'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {locale === 'ne' ? 'कच्ची घानी तोरीको तेल' : 'Cold Pressed Mustard Oil'}
                </p>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  {locale === 'ne' ? 'बिना ताप प्राकृतिक पोषण' : 'Unheated Raw Antioxidants'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
                <Package className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {locale === 'ne' ? '५०० मि.लि. र १००० मि.लि.' : '500ml & 1000ml Packs'}
                </p>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  {locale === 'ne' ? 'सुरक्षित सिल पाउच' : 'Multi-Layer Barrier Pouches'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {locale === 'ne' ? 'हेटौंडा मिल उत्पादन' : 'Hetauda Mill Production'}
                </p>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  {locale === 'ne' ? 'थोक तथा खुद्रा आपूर्ति' : 'Wholesale & Retail Ready'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Body with Balanced Spacing */}
      <div className="container-custom mx-auto py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Presentation Column (5 Cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
              <div className="w-12 h-18 sm:w-14 sm:h-20 relative shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/products/roasted-1l.png"
                  alt="Dakshina Mustard Oil Pouch"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif-heading font-bold text-white tracking-wide">
                  {locale === 'ne' ? 'दक्षिणा तेल मिल' : 'Dakshina Tel Mill'}
                </span>
                <span className="block text-xs font-bold text-amber-400 tracking-widest uppercase mt-0.5">
                  {locale === 'ne' ? 'हेटौंडा, मकवानपुर, नेपाल' : 'Hetauda, Makwanpur, Nepal'}
                </span>
              </div>
            </Link>

            <p className="text-amber-100/80 text-sm leading-relaxed mb-6 max-w-md font-normal">
              {t.footer.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/30 max-w-md">
              <p className="text-xs text-amber-300 font-medium italic">
                &ldquo;स्वादिलो र सुगन्धित घरेलु मिलबाट उत्पादित — दक्षिणा तोरीको तेल&rdquo;
              </p>
              <p className="text-[11px] text-amber-400/80 mt-1">
                {locale === 'ne' ? '५०० मि.लि. र १ लिटर पाउच तथा कार्टुन आपूर्ति' : 'Available in 500ml & 1L pouches and bulk cartons'}
              </p>
            </div>
          </div>

          {/* Navigation Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-5 pb-2 border-b border-amber-500/20">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: t.nav.home },
                { href: '/about', label: t.nav.about },
                { href: '/products', label: t.nav.products },
                { href: '/process', label: t.nav.process },
                { href: '/contact', label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-amber-100/80 hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product SKUs (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-5 pb-2 border-b border-amber-500/20">
              {t.footer.ourProducts}
            </h3>
            <ul className="space-y-3 text-sm text-amber-100/80">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors block">
                  {locale === 'ne' ? 'भुटेको तोरी (५०० मि.लि.)' : 'Roasted Chepuwa (500ml)'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors block">
                  {locale === 'ne' ? 'भुटेको तोरी (१००० मि.लि.)' : 'Roasted Chepuwa (1000ml)'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors block">
                  {locale === 'ne' ? 'कच्ची घानी (५०० मि.लि.)' : 'Cold Pressed (500ml)'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors block">
                  {locale === 'ne' ? 'कच्ची घानी (१००० मि.लि.)' : 'Cold Pressed (1000ml)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Mill Contact Info (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-5 pb-2 border-b border-amber-500/20">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-amber-100/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.contact.info.addressValue}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                    {locale === 'ne' ? 'थोक तथा डिलर अर्डर डेस्क' : 'Wholesale & Dealership Desk'}
                  </p>
                  <p className="font-bold text-white">
                    <a href="tel:9845025862" className="hover:text-amber-400">9845025862</a> / <a href="tel:9814277220" className="hover:text-amber-400">9814277220</a>
                  </p>
                  <p className="text-xs text-amber-200/80">
                    <a href="tel:057520589" className="hover:text-amber-400">057-520589</a> (ल्यान्डलाइन / Landline)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.contact.info.emailPlaceholder}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.contact.info.hoursValue}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Back to Top Strip */}
      <div className="border-t border-amber-500/20 bg-black/40 py-5">
        <div className="container-custom mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-200/60 text-center sm:text-left">
            {t.footer.copyright} {t.footer.allRightsReserved}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-[#2D1F07] text-xs font-bold text-amber-300 transition-all cursor-pointer shadow-sm"
            aria-label="Back to Top"
          >
            <span>{locale === 'ne' ? 'माथि जानुहोस्' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
}
