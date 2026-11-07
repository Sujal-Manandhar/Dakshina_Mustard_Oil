'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { useLanguage } from '@/context/LanguageContext';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { 
  Flame, 
  Sparkles, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { locale, t } = useLanguage();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const currentSize = product.sizes[selectedSizeIndex];
  const isRoasted = product.type === 'roasted';

  const handleSizeChange = (idx: number) => {
    if (idx !== selectedSizeIndex) {
      setIsChanging(true);
      setSelectedSizeIndex(idx);
      setTimeout(() => setIsChanging(false), 250);
    }
  };

  // Dedicated WhatsApp click-to-chat URL with the currently chosen SKU
  const whatsAppUrl = generateWhatsAppLink({
    productType: product.type,
    size: currentSize.volumeEn.includes('500') ? '500ml' : '1000ml',
    inquiryType: locale === 'ne' ? 'थोक तथा खुद्रा अर्डर सोधपुछ' : 'Wholesale / Retail Trade Inquiry',
    locale,
  });

  return (
    <div className="bg-white rounded-2xl border border-amber-500/25 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300">
      
      {/* Visual Showcase Top Box */}
      <div className={`p-6 relative flex flex-col items-center justify-center min-h-[360px] sm:min-h-[400px] border-b border-amber-500/20 ${
        isRoasted ? 'bg-gradient-to-b from-red-50/50 to-amber-50/20' : 'bg-gradient-to-b from-emerald-50/50 to-amber-50/20'
      }`}>
        
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between absolute top-4 inset-x-4 px-4 z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
            isRoasted ? 'bg-red-700 text-white' : 'bg-emerald-700 text-white'
          }`}>
            {isRoasted ? <Flame className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
            {product.badge[locale]}
          </span>

          <span className="text-xs font-bold text-amber-900 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/40 shadow-sm">
            {locale === 'ne' ? 'हेटौंडा मिल' : 'Hetauda Mill'}
          </span>
        </div>

        {/* Clear Packaging Image Display with Smooth Transition */}
        <div className="relative w-52 h-72 sm:w-60 sm:h-80 my-2">
          <div className={`relative w-full h-full transition-all duration-300 transform ${
            isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100 hover:scale-105'
          }`}>
            <Image
              src={currentSize.image || product.image}
              alt={`${product.name[locale]} - ${currentSize.volumeEn}`}
              fill
              className="object-contain drop-shadow-md"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Live Active Size Pill Display */}
        <div className="absolute bottom-3 bg-white/95 backdrop-blur-sm border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-900 shadow-sm">
          <span>{locale === 'ne' ? currentSize.volumeNe : currentSize.volumeEn}</span>
          <span className="text-slate-400 mx-1.5">•</span>
          <span className="text-slate-600 font-medium">{locale === 'ne' ? 'सिल पाउच' : 'Sealed Pouch'}</span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white">
        
        <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-1">
          {locale === 'ne' ? product.processNe : product.processEn}
        </span>

        <h3 className="text-2xl font-extrabold text-[#2D1F07] tracking-tight mb-1">
          {product.name[locale]}
        </h3>

        <p className="text-xs font-bold text-amber-800 mb-3">
          {product.subtitle[locale]}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
          {product.description[locale]}
        </p>

        {/* Interactive Size Switcher Tabs */}
        <div className="mb-6 bg-slate-50 border border-slate-200 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D1F07] flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-amber-600" />
              <span>{locale === 'ne' ? 'साइज छनोट गर्नुहोस्:' : 'Select Format:'}</span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-700">
              {locale === 'ne' ? 'थोक तथा खुद्रा उपलब्ध' : 'Available in Stock'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {product.sizes.map((sz, szIdx) => {
              const isSelected = szIdx === selectedSizeIndex;
              return (
                <button
                  key={szIdx}
                  type="button"
                  onClick={() => handleSizeChange(szIdx)}
                  className={`p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-500 text-[#2D1F07] border-amber-600 shadow-sm font-bold'
                      : 'bg-white text-slate-700 border-gray-200 hover:border-amber-400'
                  }`}
                >
                  <span className="block text-sm font-extrabold">
                    {locale === 'ne' ? sz.volumeNe : sz.volumeEn}
                  </span>
                  <span className={`block text-[11px] mt-0.5 ${isSelected ? 'text-amber-950 font-semibold' : 'text-slate-500'}`}>
                    {locale === 'ne' ? sz.formatNe : sz.formatEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quality Guarantees */}
        <div className="space-y-2 mb-6 mt-auto text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {isRoasted
                ? (locale === 'ne' ? 'परम्परागत तोरी भुट्ने विधि र चेपुवा निष्कासन' : 'Controlled seed roasting & traditional expeller pressing')
                : (locale === 'ne' ? 'कम तापक्रम कच्ची घानी — १००% प्राकृतिक पोषण' : 'Cold-pressed virgin tori below 45°C without chemicals')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच तथा थोक कार्टुन' : 'Food-grade multi-layer pouches & master shipping cartons'}
            </span>
          </div>
        </div>

        {/* Action Buttons: Direct WhatsApp Enquiry + Contact Form */}
        <div className="flex flex-col gap-2.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>
              {locale === 'ne' 
                ? `${currentSize.volumeNe} को लागि WhatsApp मा सोधपुछ` 
                : `WhatsApp Inquiry for ${currentSize.volumeEn}`}
            </span>
          </a>

          <a
            href="/contact"
            className="btn-corp-secondary w-full text-center text-xs sm:text-sm font-bold py-2.5"
          >
            <span>{t.products.enquireNow}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
