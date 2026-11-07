'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Package, CheckCircle2, Flame, Sparkles, ArrowRight, ShieldCheck, Factory, Layers } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale, t } = useLanguage();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const isRoasted = product.type === 'roasted';
  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  return (
    <div className="corp-card overflow-hidden flex flex-col h-full bg-white border-2 border-amber-500/25 shadow-md hover:border-amber-500/50 transition-all">
      
      {/* Product Image Stage */}
      <div className={`p-8 sm:p-10 flex flex-col items-center justify-center relative min-h-[320px] sm:min-h-[350px] border-b border-amber-500/20 ${
        isRoasted 
          ? 'bg-gradient-to-b from-[#FFF8E7] via-[#FFFBF0] to-white' 
          : 'bg-gradient-to-b from-[#F2FBF4] via-[#F9FCFA] to-white'
      }`}>
        
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between absolute top-4 inset-x-4 px-4 z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
            isRoasted ? 'bg-red-700 text-white' : 'bg-emerald-700 text-white'
          }`}>
            {isRoasted ? <Flame className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
            {product.badge[locale]}
          </span>

          <span className="text-xs font-bold text-amber-900 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/40 shadow-sm">
            {locale === 'ne' ? 'हेटौंडा मिल' : 'Hetauda Mill'}
          </span>
        </div>

        {/* Clear Packaging Image Display */}
        <div className="relative w-52 h-72 sm:w-60 sm:h-80 my-2 transition-transform duration-500 hover:scale-105">
          <Image
            src={currentSize.image || product.image}
            alt={`${product.name[locale]} - ${currentSize.volumeEn}`}
            fill
            className="object-contain drop-shadow-md"
            priority={index === 0}
          />
        </div>

        {/* Live Active Size Pill Display */}
        <div className="absolute bottom-3 bg-white/90 backdrop-blur-sm border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-900 shadow-sm">
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

        <p className="text-xs font-bold text-amber-800/80 mb-4">
          {product.subtitle[locale]}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {product.description[locale]}
        </p>

        {/* Interactive Size Selection Switcher */}
        <div className="mb-6 p-4 rounded-xl bg-[#FFF8E7] border border-amber-500/30">
          <p className="text-xs font-bold text-[#2D1F07] uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Package className="w-4 h-4 text-amber-600" />
              <span>{t.products.availableSizes}</span>
            </span>
            <span className="text-[11px] font-semibold text-amber-700 lowercase">
              {locale === 'ne' ? 'साइज छान्नुहोस्' : 'click to preview'}
            </span>
          </p>

          <div className="grid grid-cols-2 gap-3">
            {product.sizes.map((sz, i) => {
              const isSelected = selectedSizeIndex === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedSizeIndex(i)}
                  className={`p-3 rounded-lg text-center transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-500 text-[#2D1F07] border-amber-600 shadow-sm font-extrabold ring-2 ring-amber-400/50'
                      : 'bg-white border-amber-500/20 text-[#2D1F07] hover:bg-amber-50'
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
        <div className="space-y-2 mb-8 mt-auto text-xs text-slate-700 font-medium">
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

        {/* Action Button */}
        <Link
          href="/contact"
          className="btn-gold-luxury w-full text-center text-sm font-bold shadow-sm"
        >
          <span>{t.products.enquireNow}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </div>
  );
}
