'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/products';
import { 
  PackageCheck, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Layers,
  Truck
} from 'lucide-react';

export default function ProductsPage() {
  const { locale, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'roasted' | 'cold-pressed'>('all');

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  return (
    <div className="bg-[#FFF8E7] min-h-screen">
      
      {/* Editorial Header Banner */}
      <section className="bg-[#241A0B] text-white border-b border-amber-500/30 py-16 sm:py-20 relative overflow-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">


            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {t.products.title}
            </h1>

            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-normal mb-8">
              {t.products.pageDescription}
            </p>

            {/* Interactive Variant Filter Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-amber-500 text-[#241A0B] shadow-md font-extrabold'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {t.products.allVariants}
              </button>
              <button
                type="button"
                onClick={() => setFilter('roasted')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'roasted'
                    ? 'bg-red-600 text-white shadow-md font-extrabold'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                {t.products.roastedFilter}
              </button>
              <button
                type="button"
                onClick={() => setFilter('cold-pressed')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === 'cold-pressed'
                    ? 'bg-emerald-600 text-white shadow-md font-extrabold'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t.products.coldPressedFilter}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Grid with Spacing & Padding */}
      <section className="section-padding bg-white border-b border-amber-500/25">
        <div className="container-custom mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-2">
              {locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. पाउच' : '500ml & 1000ml Sealed Pouches'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A0B] tracking-tight">
              {locale === 'ne' ? 'आधिकारिक उत्पादन सूची' : 'Official Product Offerings'}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* 2-Column Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-16">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

          {/* Packaging & Carton Specifications Box with Imagery */}
          <div className="max-w-5xl mx-auto corp-card p-6 sm:p-10 bg-[#FFF8E7] border-2 border-amber-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-2">
                  <PackageCheck className="w-4 h-4 text-amber-600" />
                  <span>{locale === 'ne' ? 'प्याकेजिङ र कार्टुन आपूर्ति' : 'Packaging & Carton Supply'}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#241A0B] tracking-tight mb-3">
                  {locale === 'ne' 
                    ? '५०० मि.लि. र १००० मि.लि. पाउच तथा बलियो कार्टुन प्याकिङ' 
                    : 'Food-Grade Multi-Barrier Pouches & Corrugated Master Cartons'}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  {locale === 'ne'
                    ? 'हाम्रो तोरीको तेल विशेष बहु-तह खाद्य-ग्रेड पाउचमा भरिन्छ जसले हावा, आर्द्रता र घामको प्रकाशबाट तेलको प्राकृतिक गुणस्तर र सुगन्धलाई पूर्ण रूपमा सुरक्षित राख्दछ। खुद्रा पसल, सुपरमार्केट र वितरकहरूका लागि सुरक्षित ढुवानीका निम्ति बलियो कार्टुन बक्सहरूमा आपूर्ति गरिन्छ।'
                    : 'All Dakshina mustard oils are sealed in food-grade multi-layer pouches that shield against oxidation, moisture, and UV light degradation. Distributed across Nepal in robust master cartons designed for safe wholesale logistics.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-amber-500/30">
                    <span className="block text-sm font-extrabold text-[#241A0B]">500 ml</span>
                    <span className="text-xs text-slate-600 font-medium">{locale === 'ne' ? 'घरायसी पाउच' : 'Household Pack'}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-amber-500/30">
                    <span className="block text-sm font-extrabold text-[#241A0B]">1000 ml (1L)</span>
                    <span className="text-xs text-slate-600 font-medium">{locale === 'ne' ? 'पारिवारिक पाउच' : 'Family Pouch'}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-amber-500/30">
                    <span className="block text-sm font-extrabold text-[#241A0B]">Master Carton</span>
                    <span className="text-xs text-slate-600 font-medium">{locale === 'ne' ? 'थोक कार्टुन बक्स' : 'Bulk Wholesale'}</span>
                  </div>
                </div>
              </div>

              {/* Photo Showcase in Box */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-52 h-72 relative bg-white rounded-xl border border-amber-500/30 p-2 shadow-sm flex items-center justify-center">
                  <Image
                    src="/images/products/roasted-1l.png"
                    alt="Packaging Carton and Pouch"
                    fill
                    className="object-contain p-2 rounded-lg"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Trade Inquiry CTA Section */}
      <section className="section-padding bg-[#241A0B] text-white text-center">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {locale === 'ne' ? 'थोक तथा खुद्रा विक्रेता सोधपुछ' : 'Wholesale Orders & Dealership Enquiries'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-base text-amber-100/90 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            {locale === 'ne'
              ? 'हेटौंडास्थित दक्षिणा तेल मिलबाट सिधै आकर्षक थोक दर र नियमित आपूर्तिका लागि सम्पर्क गर्नुहोस्।'
              : 'Direct factory dispatch for grocery chains, wholesalers, and regional distributors. Contact our sales office in Hetauda.'}
          </p>
          <Link href="/contact" className="btn-corp-primary text-sm font-bold">
            <span>{t.products.enquireNow}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
