'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/products';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import GSAPReveal from '@/components/ui/GSAPReveal';
import { useGsapStagger } from '@/hooks/useGsapStagger';

export default function FeaturedProductsSection() {
  const { locale, t } = useLanguage();
  const productsRef = useGsapStagger<HTMLDivElement>({
    stagger: 0.18,
    fromY: 40,
    fromScale: 0.97,
    duration: 0.9,
    start: 'top 85%',
  });

  return (
    <section className="section-padding bg-white border-b border-amber-500/15" id="featured-products">
      <div className="container-custom mx-auto">

        {/* Section Top Header */}
        <GSAPReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-2">
            {t.products.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A0B] tracking-tight mb-3">
            {t.products.title}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full" />
          <p className="text-base text-[#6B5E4A] leading-relaxed font-normal">
            {t.products.subtitle}
          </p>
        </GSAPReveal>

        {/* 2-Column Balanced Product Catalog Grid */}
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Informative Side-by-Side Comparison Box */}
        <GSAPReveal direction="up" delay={0.1}>
          <div className="max-w-5xl mx-auto rounded-2xl border border-amber-500/20 p-6 sm:p-8 bg-[#FFFBF0]">
            <h3 className="text-sm font-extrabold text-[#241A0B] uppercase tracking-wider mb-4 border-b border-amber-500/20 pb-3">
              {locale === 'ne' ? 'उत्पादन तुलना र प्रयोग निर्देशिका' : 'Product Comparison & Culinary Recommendations'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0 text-red-700">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#241A0B] text-sm">
                    {locale === 'ne' ? 'भुटेको तोरीको तेल (चेपुवा)' : 'Roasted Mustard Oil (Chepuwa)'}
                  </p>
                  <p className="text-xs text-[#6B5E4A] mt-1 leading-relaxed">
                    {locale === 'ne'
                      ? 'परम्परागत नेपाली अचार, मासु, तरकारी र गहिरो बास्नादार परिकारका लागि उत्तम।'
                      : 'Recommended for traditional pickles, spicy meat preparations, curries, and high-heat stir frying requiring authentic pungency.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:border-l md:border-amber-500/20 md:pl-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#241A0B] text-sm">
                    {locale === 'ne' ? 'कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड)' : 'Cold-Pressed Mustard Oil (Kacchi Ghani)'}
                  </p>
                  <p className="text-xs text-[#6B5E4A] mt-1 leading-relaxed">
                    {locale === 'ne'
                      ? 'दैनिक स्वस्थ खाना, सलाद, मालिस र प्राकृतिक पोषक तत्वका लागि उपयुक्त।'
                      : 'Unheated extraction preserving vitamin E, natural antioxidants, and essential fatty acids. Ideal for daily health cooking.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GSAPReveal>

        {/* Trade CTA */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
          >
            <span>{locale === 'ne' ? 'थोक कार्टुन अर्डर वा वितरक बन्न सम्पर्क गर्नुहोस्' : 'Request Wholesale Carton Pricing & Distributor Terms'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
