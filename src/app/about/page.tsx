'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GSAPReveal from '@/components/ui/GSAPReveal';
import { useGsapStagger } from '@/hooks/useGsapStagger';
import { 
  ShieldCheck, 
  Target, 
  Factory, 
  Fire, 
  Sparkle, 
  Package, 
  Flask, 
  CheckCircle, 
  ArrowRight, 
  Certificate, 
  Drop, 
  CheckFat, 
  Scales 
} from '@phosphor-icons/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const missionVisionRef = useGsapStagger<HTMLDivElement>({
    stagger: 0.2,
    fromY: 36,
    fromScale: 0.97,
    duration: 0.9,
    start: 'top 85%',
  });
  const capabilitiesRef = useGsapStagger<HTMLDivElement>({
    stagger: 0.14,
    fromY: 32,
    duration: 0.8,
    start: 'top 85%',
  });

  const manufacturingCapacities = [
    {
      title: locale === 'ne' ? 'परम्परागत भुटेको चेपुवा लाइन' : 'Dedicated Roasted Chepuwa Processing',
      desc: locale === 'ne' 
        ? 'उच्च गुणस्तरको तोरीलाई निश्चित तापक्रममा भुटेर मौलिक नेपाली तीखोपन र बास्ना निकाल्ने प्रणाली।' 
        : 'Automated thermal seed roaster coupled with heavy-duty mechanical expellers for intense aroma and pungency.',
      image: '/images/mill/roasting.png',
      icon: Fire,
      tag: locale === 'ne' ? 'तीखो र सुगन्धित' : 'Smoky & Pungent'
    },
    {
      title: locale === 'ne' ? 'कच्ची घानी कोल्ड प्रेस्ड लाइन' : 'Virgin Cold-Pressed Extraction Line',
      desc: locale === 'ne' 
        ? 'कुनै पनि कृत्रिम ताप बिना कम तापक्रममा पेलिने प्रणाली जसले प्राकृतिक भिटामिन, एन्टिअक्सिडेन्ट र ओमेगा फ्याटी एसिड जोगाउँछ।' 
        : 'Temperature-controlled mechanical crushers operating below 45°C to preserve natural vitamins and antioxidants.',
      image: '/images/mill/pressing.png',
      icon: Sparkle,
      tag: locale === 'ne' ? 'प्राकृतिक पोषणयुक्त' : 'Raw & Unheated'
    },
    {
      title: locale === 'ne' ? 'स्वच्छ स्वचालित पाउच प्याकेजिङ' : 'High-Speed Sealed Pouch Packaging',
      desc: locale === 'ne' 
        ? '५०० मि.लि. र १००० मि.लि. (१ लिटर) का बहु-तह खाद्य-ग्रेड पाउचमा शुद्ध नाइट्रोजन फ्लसिङका साथ अक्सिजन-मुक्त प्याकिङ।' 
        : 'Automated multi-layer pouch fill and seal units handling 500ml and 1000ml SKUs with zero hand contact.',
      image: '/images/mill/packaging.png',
      icon: Package,
      tag: locale === 'ne' ? '५०० मि.लि. र १ लिटर' : '500ml & 1L Packs'
    },
    {
      title: locale === 'ne' ? 'कडा प्रयोगशाला गुणस्तर नियन्त्रण' : 'In-House Laboratory Batch Testing',
      desc: locale === 'ne' 
        ? 'प्रत्येक ब्याचको शुद्धता, घनत्व, आर्द्रता, एसिड भ्यालु र तीखोपनको कडा परीक्षण।' 
        : 'Systematic batch-wise verification for moisture content, free fatty acids (FFA), iodine values, and optical clarity.',
      image: '/images/mill/facility.png',
      icon: Flask,
      tag: locale === 'ne' ? '१००% मिसावटमुक्त' : 'Tested Purity'
    }
  ];

  return (
    <div className="bg-dakshina-cream min-h-screen">
      
      {/* Editorial Header Banner */}
      <section className="bg-dakshina-brown text-white border-b border-dakshina-gold/30 py-16 sm:py-20 relative overflow-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-dakshina-gold/40 text-dakshina-gold text-xs font-bold uppercase tracking-wider mb-4">
              <Factory size={16} weight="duotone" />
              <span>Dakshina Tel Mill • Hetauda, Makwanpur, Nepal</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {locale === 'ne' ? 'हाम्रो बारेमा — तीन पुस्ताको गौरवमय विरासत' : 'About Us – The Legacy of Dakshina Mustard Oil'}
            </h1>
            
            <p className="text-base sm:text-lg text-dakshina-cream leading-relaxed font-normal">
              {locale === 'ne'
                ? 'तीन पुस्ता। एउटै परम्परा। निरन्तर विरासत। सन् १९९० देखि हेटौंडाको मुटुबाट मौलिक नेवारी विधिमा आधारित शुद्ध तोरीको तेल।'
                : 'Three Generations. One Tradition. A Legacy That Continues. Authentic Newari-style mustard oil crafted in Hetauda since 1990.'}
            </p>
          </div>
        </div>
      </section>

      {/* Three Generations Heritage Section */}
      <section className="section-padding bg-white border-b border-dakshina-gold/25">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold text-dakshina-gold-dark uppercase tracking-widest block mb-2">
                {locale === 'ne' ? 'पारिवारिक विरासत र इतिहास' : 'Three Generations of Craftsmanship'}
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-dakshina-brown tracking-tight leading-tight mb-6">
                {locale === 'ne' 
                  ? 'तीन पुस्ता। एउटै परम्परा। निरन्तर विरासत।' 
                  : 'Three Generations. One Tradition. A Legacy That Continues.'}
              </h2>
              
              <p className="text-base sm:text-lg text-[#3A2A0A] leading-relaxed mb-5 font-medium">
                {locale === 'ne'
                  ? 'केही परम्पराहरू केवल काम गर्ने तरिका मात्र होइनन्; ती हाम्रो अस्तित्वको अभिन्न अङ्ग हुन्। दक्षिणा तोरीको तेलमा हाम्रो कथा पारिवारिक विरासत, परम्परागत सीप र नेपाली तोरीको तेलको मौलिक स्वाद जोगाउने अटल समर्पणमा आधारित छ।'
                  : 'Some traditions are more than just a way of doing things; they are a part of who we are. At Dakshina Mustard Oil, our story is built on family heritage, traditional craftsmanship, and a passion for preserving the authentic taste of Nepalese mustard oil.'}
              </p>

              <p className="text-sm sm:text-base text-dakshina-text-muted leading-relaxed mb-6 font-normal">
                {locale === 'ne'
                  ? 'सन् १९९० मा नेपालको हेटौंडा, मकवानपुरको मुटुमा हाम्रा हजुरबुबा धन मानन्धरको दूरदर्शी सोचबाट दक्षिणा तोरीको तेलको यात्रा सुरु भएको थियो। पारिवारिक पेशाको रूपमा सुरु भएको यो यात्रा पुस्तान्तरण हुँदै एक गौरवमय विरासत बन्यो। यस परम्परालाई उनका छोरा राजेश मानन्धरले निरन्तरता दिनुभयो र हाल तेस्रो पुस्ताका सुजल मानन्धरले यसलाई अगाडि बढाइरहनुभएको छ।'
                  : 'Established in 1990, in the heart of Hetauda, Makwanpur, Nepal, Dakshina Mustard Oil began with a vision carried forward by our grandfather, Dhan Manandhar. What started as a family profession gradually became a legacy, passed down from one generation to the next. The tradition was continued by his son, Rajesh Manandhar, and is now carried forward by the third generation, Sujal Manandhar.'}
              </p>

              {/* 3 Generations Lineage Timeline Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 mb-8">
                <div className="p-4 rounded-xl bg-[#FFFBF0] border border-amber-500/30">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block mb-1">
                    1st Gen • Founder (1990)
                  </span>
                  <h4 className="text-base font-extrabold text-[#241A0B]">Dhan Manandhar</h4>
                  <p className="text-xs text-[#6B5E4A] mt-0.5">
                    {locale === 'ne' ? 'संस्थापक हजुरबुबा' : 'The Vision & Founding'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFBF0] border border-amber-500/30">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block mb-1">
                    2nd Gen • Stewardship
                  </span>
                  <h4 className="text-base font-extrabold text-[#241A0B]">Rajesh Manandhar</h4>
                  <p className="text-xs text-[#6B5E4A] mt-0.5">
                    {locale === 'ne' ? 'निरन्तरता र विस्तार' : 'Expansion & Continuity'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/15 border-2 border-amber-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 block mb-1">
                    3rd Gen • Present Day
                  </span>
                  <h4 className="text-base font-extrabold text-[#241A0B]">Sujal Manandhar</h4>
                  <p className="text-xs text-[#6B5E4A] mt-0.5">
                    {locale === 'ne' ? 'आधुनिक विरासत र नेतृत्व' : 'The Legacy Continues'}
                  </p>
                </div>
              </div>

              {/* Direct Proof Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-dakshina-gold/25">
                <div className="p-3 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl font-extrabold text-dakshina-brown">1990</span>
                  <span className="text-[11px] text-dakshina-text-muted font-medium">{locale === 'ne' ? 'स्थापना वर्ष' : 'Established'}</span>
                </div>
                <div className="p-3 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl font-extrabold text-dakshina-brown">3 Gen</span>
                  <span className="text-[11px] text-dakshina-text-muted font-medium">{locale === 'ne' ? 'पारिवारिक विरासत' : 'Generations'}</span>
                </div>
                <div className="p-3 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl font-extrabold text-dakshina-brown">Newari</span>
                  <span className="text-[11px] text-dakshina-text-muted font-medium">{locale === 'ne' ? 'दाउरामा भुटेको चेपुवा' : 'Firewood Roasting'}</span>
                </div>
                <div className="p-3 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl font-extrabold text-dakshina-brown">Hetauda</span>
                  <span className="text-[11px] text-dakshina-text-muted font-medium">{locale === 'ne' ? 'मकवानपुर, नेपाल' : 'Direct Mill'}</span>
                </div>
              </div>
            </div>

            {/* Packaging Photograph Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#FFFBF0] rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 text-center shadow-lg relative overflow-hidden">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500 text-[#241A0B] text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
                  {locale === 'ne' ? 'तीन पुस्ताको विरासत • आधिकारिक प्याकेजिङ' : 'Three Generations of Heritage'}
                </div>

                <div className="relative w-56 h-80 sm:w-64 sm:h-92 mx-auto my-2">
                  <Image
                    src="/images/products/roasted-1l.png"
                    alt="Dakshina Mustard Oil Packaging Sample"
                    fill
                    className="object-contain drop-shadow-md rounded-lg"
                    priority
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-amber-500/20 text-left bg-white p-3.5 rounded-xl border border-amber-500/20">
                  <p className="text-xs font-bold text-dakshina-brown uppercase tracking-wide">
                    {locale === 'ne' ? 'पारम्परिक पहिचान:' : 'Heritage Signature:'}
                  </p>
                  <p className="text-xs text-dakshina-text-muted mt-1 leading-relaxed">
                    {locale === 'ne' 
                      ? 'धन मानन्धर, राजेश मानन्धर हुँदै सुजल मानन्धरसम्म आइपुग्दा तेलको मौलिक बास्ना र शुद्धता कायमै छ।' 
                      : 'From Dhan Manandhar to Rajesh Manandhar to Sujal Manandhar, the genuine aroma and purity remain unchanged.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Traditional Art & Food Traditions Section (Newari Style & Hills vs Terai) */}
      <section className="section-padding bg-[#FFFBF0] border-b border-amber-500/20">
        <div className="container-custom mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Preserving the Art of Traditional Mustard Oil Making */}
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-amber-500/25 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center text-red-700 mb-5">
                  <Fire size={26} weight="duotone" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#241A0B] tracking-tight mb-4">
                  {locale === 'ne' 
                    ? 'परम्परागत तोरीको तेल बनाउने मौलिक कला' 
                    : 'Preserving the Art of Traditional Mustard Oil Making'}
                </h3>

                <p className="text-sm text-[#3A2A0A] leading-relaxed mb-4 font-normal">
                  {locale === 'ne'
                    ? 'दक्षिणामा हामी विश्वास गर्दछौं कि तोरीको तेलको वास्तविक चरित्र त्यसको निर्माण विधिबाट आउँछ। त्यसैले हामी परम्परागत नेवारी शैलीको तोरीको तेल निष्कासन विधिलाई निरन्तरता दिइरहेका छौं, जुन नेपाली संस्कृति र परम्परासँग गहिरो रूपमा जोडिएको छ।'
                    : 'At Dakshina, we believe that the true character of mustard oil comes from the way it is made. That is why we continue to embrace the traditional Newari-style mustard oil extraction method, an age-old craft deeply rooted in Nepalese culture and heritage.'}
                </p>

                <p className="text-sm text-[#6B5E4A] leading-relaxed font-normal">
                  {locale === 'ne'
                    ? 'हाम्रो परम्परागत प्रक्रियामा दाउराको आगोमा तोरीका बीउहरूलाई सावधानीपूर्वक भुटिन्छ। भुटिएका बीउहरूलाई परम्परागत नेवारी काठको कोल/प्रेसमा पेलेर विशिष्ट बास्ना र समृद्ध स्वादको चेपुवा तेल तयार गरिन्छ।'
                    : 'Our traditional process involves roasting mustard seeds over a firewood flame, carefully following the methods passed down through generations. The roasted seeds are then processed using a traditional Newari wooden mustard press, helping produce the distinctive aroma, rich flavour, and familiar character of roasted mustard oil.'}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-amber-500/15 flex items-center gap-2 text-xs font-bold text-red-700">
                <CheckCircle size={16} weight="fill" />
                <span>{locale === 'ne' ? 'दाउराको आगोमा भुटिएको चेपुवा विधि' : 'Traditional Firewood Flame Roasting'}</span>
              </div>
            </div>

            {/* Inspired by Nepal's Diverse Food Traditions */}
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-amber-500/25 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-5">
                  <Drop size={26} weight="duotone" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#241A0B] tracking-tight mb-4">
                  {locale === 'ne' 
                    ? 'नेपालको विविधतापूर्ण खाना परम्पराबाट प्रेरित' 
                    : "Inspired by Nepal's Diverse Food Traditions"}
                </h3>

                <p className="text-sm text-[#3A2A0A] leading-relaxed mb-4 font-normal">
                  {locale === 'ne'
                    ? 'हेटौंडा, मकवानपुरमा अवस्थित दक्षिणा नेपालका पहाड र तराईबीचको एक अद्वितीय संगम स्थलमा उभिएको छ। यी दुवै भूगोलका आ-आफ्ना विशिष्ट पाक परम्परा र तोरीको तेलसम्बन्धी आ-आफ्नै रोजाइ छन्।'
                    : "Located in Hetauda, Makwanpur, Dakshina stands at a unique crossroads between Nepal's hills and the Terai. These regions have their own culinary traditions and preferences when it comes to mustard oil."}
                </p>

                <p className="text-sm text-[#6B5E4A] leading-relaxed font-normal">
                  {locale === 'ne'
                    ? 'पहाडी समुदायमा भुटेको चेपुवा तेलले आफ्नो तीखो बास्ना र स्वादका कारण दैनिक खानामा विशेष स्थान राख्छ भने तराई भेगमा बिना ताप पेलिने कच्ची घानी (कोल्ड प्रेस्ड) तोरीको तेल उत्तिकै लोकप्रिय छ। हामी दुवै परम्परालाई उत्तिकै सम्मान र स्वच्छताका साथ पस्कन्छौं।'
                    : 'In many hill communities, roasted mustard oil holds a special place in everyday cooking because of its rich aroma and traditional flavour. Meanwhile, cold-pressed mustard oil is also popular across many Terai communities, where different cooking preferences and culinary practices shape local tastes.'}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-amber-500/15 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle size={16} weight="fill" />
                <span>{locale === 'ne' ? 'पहाड र तराई दुवैको स्वाद सम्बोधन' : 'Honoring Both Hill & Terai Cuisines'}</span>
              </div>
            </div>

          </div>

          {/* Legacy Motto Banner */}
          <div className="mt-10 max-w-5xl mx-auto bg-[#241A0B] text-amber-300 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/40 text-center shadow-md">
            <h4 className="text-lg sm:text-xl font-serif-heading font-extrabold text-white tracking-wide mb-2">
              Dakshina Mustard Oil – Three Generations of Tradition, One Taste of Heritage.
            </h4>
            <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
              {locale === 'ne' 
                ? 'धन मानन्धर • राजेश मानन्धर • सुजल मानन्धर — सन् १९९० देखि नेपाली भान्साको अटुट विश्वास।' 
                : 'Dhan Manandhar • Rajesh Manandhar • Sujal Manandhar — Since 1990 in Hetauda, Nepal.'}
            </p>
          </div>

        </div>
      </section>

      {/* Modern Compact Executive Mission & Vision Layout */}
      <section className="section-padding bg-[#FFFBF0] border-b border-amber-500/20">
        <div className="container-custom mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 block mb-2">
              {locale === 'ne' ? 'हाम्रो उद्देश्य र दृष्टिकोण' : 'Purpose & Future Horizon'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241A0B] tracking-tight mb-3">
              {locale === 'ne' ? 'लक्ष्य र दीर्घकालीन दृष्टिकोण' : 'Our Mission & Vision'}
            </h2>
            <div className="golden-divider mx-auto" />
          </div>

          {/* Clean 2-Column Corporate Grid with Balanced Proportions */}
          <div ref={missionVisionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Box */}
            <div className="bg-white rounded-2xl border border-amber-500/25 p-7 sm:p-9 shadow-sm hover:border-amber-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-amber-500/15">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 shrink-0">
                    <ShieldCheck size={26} weight="duotone" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block">
                      {locale === 'ne' ? 'हाम्रो प्रतिबद्धता' : 'Strategic Objective'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#241A0B] tracking-tight">
                      {t.about.mission.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#3A2A0A] leading-relaxed mb-6 font-medium">
                  {locale === 'ne'
                    ? 'नेपाली उपभोक्ता र खाद्य व्यवसायहरूलाई भुटेको चेपुवा र कच्ची घानी दुवै प्रकारको शुद्ध तोरीको तेल स्वच्छ र सुलभ ५०० मि.लि. र १ लिटर पाउचमा निरन्तर उपलब्ध गराउनु।'
                    : 'To deliver uncompromised purity and choice to Nepali households and food businesses by producing both roasted and cold-pressed mustard oil in hygienic, accessible packaging formats.'}
                </p>

                {/* Compact Pillars */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-[#241A0B]">
                    <CheckFat size={15} weight="fill" className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#241A0B] font-bold">{locale === 'ne' ? '१००% शुद्धता:' : 'Pure Extraction:'}</strong>{' '}
                      <span className="text-[#6B5E4A]">{locale === 'ne' ? 'कुनै मिसावट, रसायन वा कृत्रिम रंग छैन।' : 'Zero adulteration, zero artificial colors.'}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#241A0B]">
                    <CheckFat size={15} weight="fill" className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#241A0B] font-bold">{locale === 'ne' ? 'दोहोरो उत्पादन:' : 'Dual Choice:'}</strong>{' '}
                      <span className="text-[#6B5E4A]">{locale === 'ne' ? 'भुटेको चेपुवा र प्राकृतिक कच्ची घानी दुवै।' : 'Traditional roasted expeller & cold-pressed.'}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#241A0B]">
                    <CheckFat size={15} weight="fill" className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#241A0B] font-bold">{locale === 'ne' ? 'सुरक्षित पाउच:' : 'Sealed Formats:'}</strong>{' '}
                      <span className="text-[#6B5E4A]">{locale === 'ne' ? '५०० मि.लि. र १००० मि.लि. (१ लिटर) पाउच।' : 'High-barrier 500ml & 1000ml sealed pouches.'}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-amber-500/15 flex items-center justify-between text-[11px] font-bold text-[#6B5E4A]">
                <span>{locale === 'ne' ? 'दैनिक भान्सा र थोक आपूर्ति' : 'Daily Kitchens & Wholesale'}</span>
                <span className="text-emerald-800 font-extrabold flex items-center gap-1">
                  <CheckCircle size={14} weight="fill" />
                  <span>{locale === 'ne' ? 'प्रमाणित गुणस्तर' : 'Verified Standard'}</span>
                </span>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-white rounded-2xl border border-amber-500/25 p-7 sm:p-9 shadow-sm hover:border-amber-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-amber-500/15">
                  <div className="w-12 h-12 rounded-xl bg-[#241A0B] border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                    <Target size={26} weight="duotone" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block">
                      {locale === 'ne' ? 'दीर्घकालीन लक्ष्य' : 'Future Horizon'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#241A0B] tracking-tight">
                      {t.about.vision.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#3A2A0A] leading-relaxed mb-6 font-medium">
                  {locale === 'ne'
                    ? 'इमानदार मिलिङ अभ्यास, उच्च प्रशोधन प्रविधि र भरपर्दो वितरक सञ्जालमार्फत दक्षिणालाई नेपालको अग्रणी र सम्मानित खाद्य तेल ब्राण्डको रूपमा स्थापित गर्नु।'
                    : 'To establish Dakshina as one of Nepal’s premier edible oil brands, admired for honest milling practices, diverse processing capabilities, and dependable dealer networks.'}
                </p>

                {/* Compact Pillars */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-[#241A0B]">
                    <CheckFat size={15} weight="fill" className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#241A0B] font-bold">{locale === 'ne' ? 'इमानदार मिलिङ:' : 'Honest Milling:'}</strong>{' '}
                      <span className="text-[#6B5E4A]">{locale === 'ne' ? 'पारदर्शी उत्पादन र सही तौलको ग्यारेन्टी।' : 'Transparent production and true net weight.'}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#241A0B]">
                    <CheckFat size={15} weight="fill" className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#241A0B] font-bold">{locale === 'ne' ? 'डिलर सञ्जाल:' : 'Dealer Networks:'}</strong>{' '}
                      <span className="text-[#6B5E4A]">{locale === 'ne' ? 'नेपालभर समयमै कार्टुन आपूर्ति र सहकार्य।' : 'Reliable wholesale supply chains across Nepal.'}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#241A0B]">
                    <CheckFat size={15} weight="fill" className="text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#241A0B] font-bold">{locale === 'ne' ? 'ब्राण्ड नेतृत्व:' : 'Brand Leadership:'}</strong>{' '}
                      <span className="text-[#6B5E4A]">{locale === 'ne' ? 'हरेक नेपाली भान्साको मन जित्ने सुगन्ध र स्वाद।' : 'Admired across household and food sectors.'}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-amber-500/15 flex items-center justify-between text-[11px] font-bold text-[#6B5E4A]">
                <span>{locale === 'ne' ? 'गुणस्तर र विश्वासमा आधारित' : 'Built On Heritage & Trust'}</span>
                <span className="text-amber-800 font-extrabold flex items-center gap-1">
                  <CheckCircle size={14} weight="fill" />
                  <span>{locale === 'ne' ? 'नेपालको ब्राण्ड' : 'Nepal Premier'}</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Advanced Manufacturing Capabilities & Operational Pillars WITH IMAGES */}
      <section className="section-padding bg-white border-b border-dakshina-gold/25">
        <div className="container-custom mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-dakshina-gold-dark uppercase tracking-wider block mb-2">
              {locale === 'ne' ? 'औद्योगिक क्षमता र प्रविधि' : 'Manufacturing Infrastructure'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dakshina-brown tracking-tight">
              {locale === 'ne' ? 'हेटौंडा मिलका मुख्य प्राविधिक विशेषताहरू' : 'Our Production Capabilities'}
            </h2>
            <div className="w-16 h-1 bg-dakshina-gold mx-auto mt-4 rounded-full" />
            <p className="text-base text-dakshina-text-muted mt-4 leading-relaxed">
              {locale === 'ne'
                ? 'कच्चा पदार्थको छनोटदेखि स्वचालित प्याकिङसम्म आधुनिक र परम्परागत विधिको सन्तुलित प्रयोग।'
                : 'Combining authentic Nepali oil expelling traditions with modern food-grade packaging automation.'}
            </p>
          </div>

          <div ref={capabilitiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingCapacities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="corp-card overflow-hidden flex flex-col justify-between bg-white border border-dakshina-gold/30">
                  
                  {/* Card Visual Stage */}
                  <div className="bg-dakshina-gold-50/70 p-6 flex items-center justify-center border-b border-dakshina-gold/20 relative min-h-[160px]">
                    <div className="relative w-36 h-36">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 border border-dakshina-gold/30 flex items-center justify-center text-dakshina-gold-dark shadow-sm">
                      <Icon size={22} weight="duotone" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-dakshina-gold-50 border border-dakshina-gold/30 text-dakshina-brown mb-3 self-start">
                      {item.tag}
                    </span>

                    <h3 className="text-lg font-bold text-dakshina-brown mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-dakshina-text-muted leading-relaxed mb-4 font-normal">
                      {item.desc}
                    </p>

                    <div className="pt-3 mt-auto border-t border-dakshina-gold/20 text-xs font-semibold text-dakshina-gold-dark flex items-center gap-1.5">
                      <CheckCircle size={14} weight="fill" className="text-dakshina-green" />
                      <span>{locale === 'ne' ? 'हेटौंडा मिल प्रमाणित' : 'Verified Standard'}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-dakshina-cream border-b border-dakshina-gold/25">
        <div className="container-custom mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-dakshina-gold-dark uppercase tracking-wider block mb-2">
              {locale === 'ne' ? 'हाम्रा मूल मान्यताहरू' : 'Our Guiding Principles'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dakshina-brown tracking-tight">
              {t.about.values.title}
            </h2>
            <div className="w-16 h-1 bg-dakshina-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.items.map((val, idx) => (
              <div key={idx} className="corp-card p-6 flex flex-col justify-between bg-white border border-dakshina-gold/30">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-dakshina-brown text-dakshina-gold font-extrabold text-lg flex items-center justify-center mb-4 shadow-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-dakshina-brown mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-dakshina-text-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quality Commitment CTA Strip */}
      <section className="section-padding bg-dakshina-brown text-white">
        <div className="container-custom mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-dakshina-gold text-xs font-bold uppercase tracking-wider mb-4 border border-dakshina-gold/30">
            <Certificate size={16} weight="duotone" />
            <span>{locale === 'ne' ? 'गुणस्तरको ग्यारेन्टी' : 'Commitment to Excellence'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            {t.about.commitment.title}
          </h2>

          <p className="text-base sm:text-lg text-dakshina-cream leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.about.commitment.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="btn-corp-primary text-sm font-bold">
              <span>{locale === 'ne' ? 'हाम्रा उत्पादनहरू हेर्नुहोस्' : 'Explore Our Products'}</span>
              <ArrowRight size={16} weight="bold" />
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
