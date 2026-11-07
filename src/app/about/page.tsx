'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ShieldCheck, 
  Eye, 
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

export default function AboutPage() {
  const { locale, t } = useLanguage();

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-dakshina-gold/40 text-dakshina-gold text-xs font-bold uppercase tracking-wider mb-4">
              <Factory size={16} weight="duotone" />
              <span>Dakshina Tel Mill • Hetauda, Nepal</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {locale === 'ne' ? 'हाम्रो परिचय र औद्योगिक प्रोफाइल' : 'Company Profile & Manufacturing Operations'}
            </h1>
            
            <p className="text-base sm:text-lg text-dakshina-cream leading-relaxed font-normal">
              {t.about.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Mill History Section with Real Mill Visuals */}
      <section className="section-padding bg-white border-b border-dakshina-gold/25">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold text-dakshina-gold-dark uppercase tracking-wider block mb-2">
                {locale === 'ne' ? 'उद्योगको स्थापना र पृष्ठभूमि' : 'About Dakshina Tel Mill'}
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-dakshina-brown tracking-tight leading-tight mb-6">
                {t.about.intro.title}
              </h2>
              
              <p className="text-base text-dakshina-text-muted leading-relaxed mb-6 font-normal">
                {t.about.intro.description}
              </p>

              <p className="text-base text-dakshina-text-muted leading-relaxed mb-8 font-normal">
                {locale === 'ne'
                  ? 'हेटौंडाको रणनीतिक औद्योगिक स्थानबाट सञ्चालित हाम्रो मिलले नेपाली भान्साको परम्परागत स्वाद र आधुनिक बजारको मागलाई ध्यानमा राख्दै भुटेको तोरीको तेल (चेपुवा) र स्वास्थ्यवर्धक कच्ची घानी (कोल्ड प्रेस्ड) दुवै प्रकारका तोरीको तेल उत्पादन गर्दछ। हामी ५०० मि.लि. र १००० मि.लि. (१ लिटर) का बहु-तह सुरक्षित पाउचमा उत्पादन गर्दछौं जसले तेलको प्राकृतिक बास्ना र गुणस्तरलाई लामो समयसम्म ताजा राख्दछ।'
                  : 'Operating from the historic manufacturing hub of Hetauda, Nepal, Dakshina Tel Mill produces both Roasted Mustard Oil (Chepuwa) and Cold-Pressed Mustard Oil (Kacchi Ghani). Packaged in 500 ml and 1000 ml food-grade pouches, our products combine time-honored milling recipes with strict packaging hygiene.'}
              </p>

              {/* Direct Proof Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-dakshina-gold/25">
                <div className="p-3.5 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl sm:text-2xl font-extrabold text-dakshina-brown">100%</span>
                  <span className="text-xs text-dakshina-text-muted font-medium">{locale === 'ne' ? 'शुद्ध तोरी' : 'Pure Mustard'}</span>
                </div>
                <div className="p-3.5 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl sm:text-2xl font-extrabold text-dakshina-brown">2 Lines</span>
                  <span className="text-xs text-dakshina-text-muted font-medium">{locale === 'ne' ? 'भुटेको + कच्ची घानी' : 'Roasted & Cold'}</span>
                </div>
                <div className="p-3.5 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl sm:text-2xl font-extrabold text-dakshina-brown">2 Sizes</span>
                  <span className="text-xs text-dakshina-text-muted font-medium">{locale === 'ne' ? '५०० मि.लि. र १ लिटर' : '500ml & 1L Packs'}</span>
                </div>
                <div className="p-3.5 bg-dakshina-gold-50 rounded-xl border border-dakshina-gold/30">
                  <span className="block text-xl sm:text-2xl font-extrabold text-dakshina-brown">Hetauda</span>
                  <span className="text-xs text-dakshina-text-muted font-medium">{locale === 'ne' ? 'मकवानपुर, नेपाल' : 'Direct Mill'}</span>
                </div>
              </div>
            </div>

            {/* Packaging Photograph Box */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border-2 border-dakshina-gold/40 p-8 sm:p-10 text-center shadow-lg relative overflow-hidden">
                <div className="inline-block px-3 py-1 rounded-full bg-dakshina-gold text-dakshina-brown text-xs font-bold uppercase tracking-wider mb-6">
                  {locale === 'ne' ? 'आधिकारिक उत्पादन प्याकेजिङ' : 'Official Packaging'}
                </div>

                <div className="relative w-56 h-80 sm:w-64 sm:h-92 mx-auto my-2">
                  <Image
                    src="/images/products/dakshina-1l.png"
                    alt="Dakshina Mustard Oil Packaging Sample"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-dakshina-gold/20 text-left">
                  <p className="text-xs font-bold text-dakshina-brown uppercase tracking-wide">
                    {locale === 'ne' ? 'प्याकेजिङ विवरण:' : 'Packaging Details:'}
                  </p>
                  <p className="text-xs text-dakshina-text-muted mt-1 leading-relaxed">
                    {locale === 'ne' 
                      ? 'तौल: १००० मि.लि. र ५०० मि.लि. पाउच तथा बलियो थोक कार्टुन बक्स।' 
                      : 'Net Weight: 1000ml & 500ml sealed pouches and heavy-duty shipping cartons.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Large Phosphor Icons */}
      <section className="section-padding bg-dakshina-cream border-b border-dakshina-gold/25">
        <div className="container-custom mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-dakshina-gold-dark uppercase tracking-wider block mb-2">
              {locale === 'ne' ? 'हाम्रो उद्देश्य र दृष्टिकोण' : 'Strategic Orientation'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dakshina-brown tracking-tight">
              {locale === 'ne' ? 'लक्ष्य र दीर्घकालीन दृष्टिकोण' : 'Our Mission & Vision'}
            </h2>
            <div className="w-16 h-1 bg-dakshina-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            
            {/* Mission Card with Bold Large Phosphor Icon */}
            <div className="corp-card p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-dakshina-gold bg-white">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-dakshina-gold/15 border border-dakshina-gold/40 flex items-center justify-center text-dakshina-gold-dark mb-6 shadow-sm">
                  <ShieldCheck size={48} weight="duotone" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-wider text-dakshina-gold-dark block mb-1">
                  {locale === 'ne' ? 'हाम्रो मुख्य लक्ष्य' : 'Corporate Objective'}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-dakshina-brown tracking-tight mb-4">
                  {t.about.mission.title}
                </h3>

                <p className="text-base sm:text-lg text-dakshina-text-muted leading-relaxed font-normal">
                  {t.about.mission.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-dakshina-brown">
                <CheckCircle size={18} weight="fill" className="text-dakshina-green shrink-0" />
                <span>{locale === 'ne' ? 'शुद्धता, स्वच्छता र उपभोक्ता रोजाइ' : 'Purity, Hygiene & Consumer Choice'}</span>
              </div>
            </div>

            {/* Vision Card with Bold Large Phosphor Icon */}
            <div className="corp-card p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-dakshina-brown bg-white">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-dakshina-brown/10 border border-dakshina-brown/20 flex items-center justify-center text-dakshina-brown mb-6 shadow-sm">
                  <Eye size={48} weight="duotone" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-wider text-dakshina-gold-dark block mb-1">
                  {locale === 'ne' ? 'दीर्घकालीन दृष्टिकोण' : 'Future Horizon'}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-dakshina-brown tracking-tight mb-4">
                  {t.about.vision.title}
                </h3>

                <p className="text-base sm:text-lg text-dakshina-text-muted leading-relaxed font-normal">
                  {t.about.vision.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-dakshina-brown">
                <CheckCircle size={18} weight="fill" className="text-dakshina-green shrink-0" />
                <span>{locale === 'ne' ? 'इमानदार मिलिङ र भरपर्दो डिलर नेटवर्क' : 'Honest Milling & Dependable Dealer Networks'}</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
