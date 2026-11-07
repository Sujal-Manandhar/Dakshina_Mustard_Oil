'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useLanguage } from '@/context/LanguageContext';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Sparkles,
  Package,
  MessageCircle,
  Layers
} from 'lucide-react';

interface VariantOption {
  id: string;
  type: 'roasted' | 'cold-pressed';
  size: '500ml' | '1000ml';
  titleEn: string;
  titleNe: string;
  subtitleEn: string;
  subtitleNe: string;
  sizeEn: string;
  sizeNe: string;
  image: string;
  badgeEn: string;
  badgeNe: string;
  tagColor: string;
  borderColor: string;
  accentBg: string;
}

const variants: VariantOption[] = [
  {
    id: 'roasted-1l',
    type: 'roasted',
    size: '1000ml',
    titleEn: 'Dakshina Roasted Mustard Oil (Chepuwa)',
    titleNe: 'दक्षिणा भुटेको तोरीको तेल (चेपुवाको तेल)',
    subtitleEn: 'Traditional smoky aroma & sharp bold taste',
    subtitleNe: 'परम्परागत भुटेको बास्ना र मौलिक नेपाली तीखोपन',
    sizeEn: '1000 ml (1 Litre) Sealed Pouch',
    sizeNe: '१००० मि.लि. (१ लिटर) सिल पाउच',
    image: '/images/products/roasted-1l.png',
    badgeEn: 'Roasted Chepuwa 1L',
    badgeNe: 'भुटेको चेपुवा १ लिटर',
    tagColor: 'bg-red-700 text-white',
    borderColor: 'border-red-500/40',
    accentBg: 'from-amber-100/70 via-red-50/40 to-[#FFF8E7]'
  },
  {
    id: 'roasted-500ml',
    type: 'roasted',
    size: '500ml',
    titleEn: 'Dakshina Roasted Mustard Oil (Chepuwa)',
    titleNe: 'दक्षिणा भुटेको तोरीको तेल (चेपुवाको तेल)',
    subtitleEn: 'Compact convenient packaging for retail & homes',
    subtitleNe: 'दैनिक घरायसी तथा खुद्रा बिक्रीका लागि उपयुक्त',
    sizeEn: '500 ml Sealed Pouch',
    sizeNe: '५०० मि.लि. सिल पाउच',
    image: '/images/products/roasted-500ml.png',
    badgeEn: 'Roasted Chepuwa 500ml',
    badgeNe: 'भुटेको चेपुवा ५०० मि.लि.',
    tagColor: 'bg-red-700 text-white',
    borderColor: 'border-red-500/40',
    accentBg: 'from-amber-100/70 via-red-50/40 to-[#FFF8E7]'
  },
  {
    id: 'coldpress-1l',
    type: 'cold-pressed',
    size: '1000ml',
    titleEn: 'Dakshina Cold Pressed Mustard Oil (Kacchi Ghani)',
    titleNe: 'दक्षिणा कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड)',
    subtitleEn: 'Unheated raw antioxidants & natural nutrients',
    subtitleNe: 'बिना ताप प्राकृतिक पोषण, भिटामिन र एन्टिअक्सिडेन्ट',
    sizeEn: '1000 ml (1 Litre) Sealed Pouch',
    sizeNe: '१००० मि.लि. (१ लिटर) सिल पाउच',
    image: '/images/products/coldpress-1l.png',
    badgeEn: 'Kacchi Ghani 1L',
    badgeNe: 'कच्ची घानी १ लिटर',
    tagColor: 'bg-emerald-700 text-white',
    borderColor: 'border-emerald-500/40',
    accentBg: 'from-emerald-50/50 via-amber-50/40 to-[#FFF8E7]'
  },
  {
    id: 'coldpress-500ml',
    type: 'cold-pressed',
    size: '500ml',
    titleEn: 'Dakshina Cold Pressed Mustard Oil (Kacchi Ghani)',
    titleNe: 'दक्षिणा कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड)',
    subtitleEn: 'Pure virgin cold-pressed oil in accessible pack',
    subtitleNe: 'शुद्ध भर्जिन कच्ची घानी तेल सुलभ ५०० मि.लि. पाउचमा',
    sizeEn: '500 ml Sealed Pouch',
    sizeNe: '५०० मि.लि. सिल पाउच',
    image: '/images/products/coldpress-500ml.png',
    badgeEn: 'Kacchi Ghani 500ml',
    badgeNe: 'कच्ची घानी ५०० मि.लि.',
    tagColor: 'bg-emerald-700 text-white',
    borderColor: 'border-emerald-500/40',
    accentBg: 'from-emerald-50/50 via-amber-50/40 to-[#FFF8E7]'
  }
];

export default function HeroSection() {
  const { locale, t } = useLanguage();
  const [selectedType, setSelectedType] = useState<'roasted' | 'cold-pressed'>('roasted');
  const [selectedSize, setSelectedSize] = useState<'500ml' | '1000ml'>('1000ml');
  const [isAnimating, setIsAnimating] = useState(false);

  const heroContentRef = useRef<HTMLDivElement>(null);
  const pouchCardRef = useRef<HTMLDivElement>(null);
  const pouchFloatingRef = useRef<HTMLDivElement>(null);

  // Active matching variant
  const activeVariant = variants.find(
    (v) => v.type === selectedType && v.size === selectedSize
  ) || variants[0];

  // GSAP Entrance and Floating Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Defer to next frame so styles finish computing, preventing forced reflow
      requestAnimationFrame(() => {
        // Stagger in left hero elements
        if (heroContentRef.current) {
          gsap.fromTo(
            heroContentRef.current.children,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
              force3D: true,
            }
          );
        }

        // Smooth entrance for the interactive pouch card
        if (pouchCardRef.current) {
          gsap.fromTo(
            pouchCardRef.current,
            { opacity: 0, y: 35, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              delay: 0.2,
              ease: 'power3.out',
              force3D: true,
            }
          );
        }

        // Gentle continuous floating breathing animation for pouch
        if (pouchFloatingRef.current) {
          gsap.to(pouchFloatingRef.current, {
            y: -8,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            force3D: true,
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  // Trigger smooth pouch pop animation on change
  const handleTypeSelect = (type: 'roasted' | 'cold-pressed') => {
    if (type !== selectedType) {
      setIsAnimating(true);
      setSelectedType(type);
      setTimeout(() => setIsAnimating(false), 350);
    }
  };

  const handleSizeSelect = (size: '500ml' | '1000ml') => {
    if (size !== selectedSize) {
      setIsAnimating(true);
      setSelectedSize(size);
      setTimeout(() => setIsAnimating(false), 350);
    }
  };

  // WhatsApp click-to-chat URL tailored to the active pouch selection
  const whatsAppUrl = generateWhatsAppLink({
    productType: selectedType,
    size: selectedSize,
    inquiryType: locale === 'ne' ? 'थोक तथा डिलर अर्डर' : 'Wholesale & Dealership Order',
    locale,
  });

  return (
    <section className="bg-gradient-to-b from-amber-100/50 via-[#FFF8E7] to-[#FFF8E7] border-b border-amber-500/25 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div ref={heroContentRef} className="lg:col-span-7 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-500/40 text-[#241A0B] text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Dakshina Tel Mill • Hetauda, Nepal</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#241A0B] tracking-tight leading-[1.12] mb-5">
              <span>{t.hero.headline} </span>
              <span className="text-amber-700 block mt-1">
                {t.hero.headlineAccent}
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-[#6B5E4A] leading-relaxed max-w-2xl mb-6 font-normal">
              {t.hero.subheadline}
            </p>

            {/* Direct Action Buttons: Direct WhatsApp Wholesale Inquiry + Explore Products */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a 
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {locale === 'ne' 
                    ? `WhatsApp मा सोधपुछ गर्नुहोस् (${selectedSize === '500ml' ? '५०० मि.लि.' : '१ लिटर'})` 
                    : `Inquire on WhatsApp (${selectedSize === '500ml' ? '500ml' : '1 Litre'})`}
                </span>
              </a>

              <Link 
                href="/products" 
                className="btn-corp-secondary text-sm sm:text-base font-bold py-3.5 px-6"
              >
                <span>{t.hero.exploreProducts}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-amber-500/25">
              
              <div className="p-3 rounded-xl bg-white border border-amber-500/25 shadow-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <Flame className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-bold text-[#241A0B] uppercase">
                    {locale === 'ne' ? 'भुटेको चेपुवा' : 'Roasted Chepuwa'}
                  </span>
                </div>
                <p className="text-[11px] text-[#6B5E4A] leading-tight">
                  {locale === 'ne' ? 'परम्परागत बास्ना र तीखोपन' : 'Intense aroma & bold flavor'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-500/25 shadow-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-[#241A0B] uppercase">
                    {locale === 'ne' ? 'कच्ची घानी' : 'Cold Pressed'}
                  </span>
                </div>
                <p className="text-[11px] text-[#6B5E4A] leading-tight">
                  {locale === 'ne' ? 'बिना ताप प्राकृतिक पोषण' : 'Unheated raw antioxidants'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-amber-500/25 shadow-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <Package className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-[#241A0B] uppercase">
                    {locale === 'ne' ? '५०० मि.लि. र १ लिटर' : '500ml & 1L Packs'}
                  </span>
                </div>
                <p className="text-[11px] text-[#6B5E4A] leading-tight">
                  {locale === 'ne' ? 'सुरक्षित पाउच र थोक कार्टुन' : 'Sealed pouches & cartons'}
                </p>
              </div>

            </div>

          </div>

          {/* Right Hero Interactive Pouch Showcase with Live Transition (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div ref={pouchCardRef} className={`w-full max-w-md bg-white border-2 rounded-2xl p-6 sm:p-7 shadow-xl text-center relative transition-all duration-300 ${activeVariant.borderColor}`}>
              
              {/* Type Switcher Segment (Roasted vs Cold-Pressed) */}
              <div className="flex items-center justify-center p-1 rounded-xl bg-[#FFF8E7] border border-amber-500/30 mb-4 gap-1">
                <button
                  type="button"
                  onClick={() => handleTypeSelect('roasted')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedType === 'roasted'
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-[#241A0B] hover:bg-white/80'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>{locale === 'ne' ? 'भुटेको चेपुवा' : 'Roasted'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTypeSelect('cold-pressed')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedType === 'cold-pressed'
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-[#241A0B] hover:bg-white/80'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{locale === 'ne' ? 'कच्ची घानी' : 'Cold-Pressed'}</span>
                </button>
              </div>

              {/* Size Switcher Pills (500ml vs 1 Litre) */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => handleSizeSelect('1000ml')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    selectedSize === '1000ml'
                      ? 'bg-amber-500 text-[#241A0B] border-amber-600 shadow-sm'
                      : 'bg-white text-[#6B5E4A] border-gray-200 hover:border-amber-400'
                  }`}
                >
                  {locale === 'ne' ? '१००० मि.लि. (१ लिटर)' : '1 Litre (1000 ml)'}
                </button>

                <button
                  type="button"
                  onClick={() => handleSizeSelect('500ml')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    selectedSize === '500ml'
                      ? 'bg-amber-500 text-[#241A0B] border-amber-600 shadow-sm'
                      : 'bg-white text-[#6B5E4A] border-gray-200 hover:border-amber-400'
                  }`}
                >
                  {locale === 'ne' ? '५०० मि.लि.' : '500 ml'}
                </button>
              </div>

              {/* Pouch Display Area with Smooth Scale/Fade Animation */}
              <div ref={pouchFloatingRef} className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto my-3 flex items-center justify-center">
                <div 
                  className={`relative w-full h-full transition-all duration-300 transform ${
                    isAnimating ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <Image
                    src={activeVariant.image}
                    alt={activeVariant.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </div>

              {/* Active Pouch Details & Direct WhatsApp CTA */}
              <div className="pt-3 border-t border-amber-500/20 text-left">
                <div className="flex items-center justify-between text-xs font-bold text-[#241A0B] mb-0.5">
                  <span className="truncate pr-2">
                    {locale === 'ne' ? activeVariant.titleNe : activeVariant.titleEn}
                  </span>
                  <span className="text-amber-700 shrink-0 font-extrabold">
                    {locale === 'ne' ? activeVariant.sizeNe : activeVariant.sizeEn}
                  </span>
                </div>
                
                <p className="text-[11px] text-[#6B5E4A] mb-3">
                  {locale === 'ne' ? activeVariant.subtitleNe : activeVariant.subtitleEn}
                </p>

                {/* Instant WhatsApp Order CTA for Selected Pouch */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>
                    {locale === 'ne' 
                      ? `${activeVariant.badgeNe} को लागि WhatsApp मा अर्डर गर्नुहोस्` 
                      : `Order ${activeVariant.badgeEn} on WhatsApp`}
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
