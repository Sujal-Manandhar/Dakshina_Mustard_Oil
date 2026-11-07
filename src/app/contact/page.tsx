'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { generateWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Package, 
  ShieldCheck,
  Flame,
  Sparkles,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

export default function ContactPage() {
  const { locale, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'wholesale',
    productInterest: 'both-500-1000',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inquiryLabels: Record<string, { en: string; ne: string }> = {
    wholesale: { en: 'Wholesale Purchase / थोक खरिद', ne: 'थोक खरिद' },
    retailer: { en: 'Retail Store Supply / खुद्रा पसल', ne: 'खुद्रा पसल आपूर्ति' },
    distributor: { en: 'Dealership / वितरक सोधपुछ', ne: 'डिलर / वितरक सोधपुछ' },
    product: { en: 'Product Information / जानकारी', ne: 'उत्पादन जानकारी' },
    general: { en: 'General Inquiry / सामान्य सोधपुछ', ne: 'सामान्य सोधपुछ' },
  };

  const productLabels: Record<string, { en: string; ne: string }> = {
    'both-500-1000': {
      en: 'Both Roasted & Cold-Pressed (500ml & 1L)',
      ne: 'भुटेको + कच्ची घानी दुवै (५०० मि.लि. र १ लिटर)',
    },
    'roasted-1000': {
      en: 'Roasted Mustard Oil 1 Litre (1000 ml)',
      ne: 'भुटेको तोरीको तेल १ लिटर (१००० मि.लि.)',
    },
    'roasted-500': {
      en: 'Roasted Mustard Oil 500 ml',
      ne: 'भुटेको तोरीको तेल ५०० मि.लि.',
    },
    'coldpress-1000': {
      en: 'Cold-Pressed Mustard Oil 1 Litre (1000 ml)',
      ne: 'कच्ची घानी तोरीको तेल १ लिटर (१००० मि.लि.)',
    },
    'coldpress-500': {
      en: 'Cold-Pressed Mustard Oil 500 ml',
      ne: 'कच्ची घानी तोरीको तेल ५०० मि.लि.',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage(
        locale === 'ne'
          ? 'कृपया कम्तिमा नाम र फोन नम्बर खुलाउनुहोस्।'
          : 'Please provide at least your Name and Phone Number.'
      );
      return;
    }

    setStatus('submitting');

    // Generate formatted WhatsApp message URL
    const inqType = inquiryLabels[formData.inquiryType]?.[locale] || formData.inquiryType;
    const selectedProd = productLabels[formData.productInterest]?.[locale] || formData.productInterest;

    const waUrl = generateWhatsAppLink({
      productType: formData.productInterest.includes('roasted') ? 'roasted' : formData.productInterest.includes('cold') ? 'cold-pressed' : 'both',
      size: formData.productInterest.includes('500') ? '500ml' : formData.productInterest.includes('1000') ? '1000ml' : 'both',
      name: formData.name,
      phone: formData.phone,
      inquiryType: inqType,
      message: `${selectedProd}${formData.message ? ` — ${formData.message}` : ''}`,
      locale,
    });

    // Open WhatsApp in new tab with the pre-filled details
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    setStatus('success');
  };

  return (
    <div className="bg-[#FFF8E7] min-h-screen">
      
      {/* Clean Corporate Header Banner */}
      <section className="bg-[#241A0B] text-white border-b border-amber-500/30 py-16 sm:py-20 relative">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-4 h-4" />
              <span>{locale === 'ne' ? 'व्यापारिक तथा सामान्य सोधपुछ' : 'Trade & General Inquiries'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {t.contact.pageTitle}
            </h1>

            <div className="golden-divider mb-6" />

            <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-normal">
              {t.contact.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form & Contact Information Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Mill Contact Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-amber-500/25 rounded-xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-[#241A0B] mb-2 tracking-tight">
                  {t.contact.info.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#3A2A0A] mb-6">
                  {locale === 'ne' 
                    ? 'हाम्रो हेटौंडास्थित मिल तथा बिक्री विभागसँग सिधै सम्पर्क गर्नुहोस्।' 
                    : 'Connect directly with our mill facility and sales operations in Hetauda.'}
                </p>

                {/* Direct WhatsApp Callout Card */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between hover:bg-[#25D366]/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#241A0B]">
                        {locale === 'ne' ? 'आधिकारिक WhatsApp डेस्क' : 'Official WhatsApp Trade Desk'}
                      </p>
                      <p className="text-sm font-extrabold text-[#1EBE5D]">
                        9814277220
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1EBE5D] group-hover:translate-x-1 transition-transform">
                    {locale === 'ne' ? 'च्याट सुरु गर्नुहोस् →' : 'Chat Now →'}
                  </span>
                </a>

                <div className="space-y-4">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#3A2A0A] uppercase tracking-wider">
                        {t.contact.info.address}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.addressValue}
                      </p>
                    </div>
                  </div>

                  {/* Contact Numbers with Wholesale & Dealership Desk */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold text-[#3A2A0A] uppercase tracking-wider">
                          {t.contact.info.phone}
                        </p>
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-900 border border-amber-500/30">
                          {locale === 'ne' ? 'थोक तथा डिलर डेस्क' : 'Wholesale Desk'}
                        </span>
                      </div>

                      <div className="space-y-1 pt-0.5">
                        <a 
                          href="tel:9845025862" 
                          className="flex items-center justify-between text-sm font-extrabold text-[#241A0B] hover:text-amber-700 transition-colors"
                        >
                          <span>9845025862</span>
                          <span className="text-[11px] font-semibold text-[#3A2A0A]">{locale === 'ne' ? '(मोबाइल)' : '(Mobile)'}</span>
                        </a>

                        <a 
                          href="tel:9814277220" 
                          className="flex items-center justify-between text-sm font-extrabold text-[#241A0B] hover:text-amber-700 transition-colors"
                        >
                          <span className="text-emerald-800">9814277220</span>
                          <span className="text-[11px] font-semibold text-emerald-800">{locale === 'ne' ? '(WhatsApp / मोबाइल)' : '(WhatsApp / Mobile)'}</span>
                        </a>

                        <a 
                          href="tel:057520589" 
                          className="flex items-center justify-between text-sm font-extrabold text-[#241A0B] hover:text-amber-700 transition-colors"
                        >
                          <span>057-520589</span>
                          <span className="text-[11px] font-semibold text-[#3A2A0A]">{locale === 'ne' ? '(ल्यान्डलाइन)' : '(Landline)'}</span>
                        </a>
                      </div>

                      <p className="text-[11px] font-bold text-amber-900 pt-1 border-t border-amber-500/20">
                        {locale === 'ne' ? 'थोक तथा डिलरसिप अर्डर डेस्क' : 'Wholesale & Dealership Order Desk'}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#3A2A0A] uppercase tracking-wider">
                        {t.contact.info.email}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.emailPlaceholder}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#3A2A0A] uppercase tracking-wider">
                        {t.contact.info.hours}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.hoursValue}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Purity Guarantee Box */}
              <div className="bg-[#241A0B] text-white rounded-xl p-5 border border-amber-500/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {locale === 'ne' ? 'प्रमाणित १००% शुद्ध तोरीको तेल' : '100% Certified Pure Mustard Oil'}
                  </p>
                  <p className="text-xs text-amber-100/80 mt-0.5">
                    {locale === 'ne' 
                      ? 'कुनै मिसावट छैन, ५०० मि.लि. र १ लिटर पाउचमा सुरक्षित प्याकिङ।' 
                      : 'Zero adulteration, hygienic food-grade pouches in 500ml & 1L formats.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Trade Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-amber-500/25 rounded-xl p-6 sm:p-10 shadow-sm">
                
                <div className="border-b border-amber-500/20 pb-5 mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#241A0B] tracking-tight">
                    {t.contact.form.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B5E4A] mt-1">
                    {locale === 'ne'
                      ? 'फारम भर्नासाथ विवरण सिधै हाम्रो आधिकारिक WhatsApp (9814277220) मा पठाइनेछ।'
                      : 'Submit to send all specified product, size, and quantity details directly to WhatsApp (9814277220).'}
                  </p>
                </div>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-900 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">
                        {locale === 'ne' ? 'WhatsApp मा सन्देश पठाइँदैछ!' : 'Redirecting to WhatsApp!'}
                      </p>
                      <p className="text-xs text-green-800 mt-0.5">
                        {locale === 'ne'
                          ? 'यदि स्वतः नखुलेमा तलको बटन थिचेर सिधै च्याट गर्न सक्नुहुन्छ।'
                          : 'If WhatsApp did not open automatically, check your popup settings or message 9814277220.'}
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <p className="text-sm font-semibold">{errorMessage || t.contact.form.errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                        {t.contact.form.name} <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                        {t.contact.form.phone} <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                        {t.contact.form.inquiryType}
                      </label>
                      <div className="relative">
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 pr-10 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all appearance-none cursor-pointer"
                        >
                          <option value="wholesale">{t.contact.form.inquiryTypes.wholesale}</option>
                          <option value="retailer">{t.contact.form.inquiryTypes.retailer}</option>
                          <option value="distributor">{t.contact.form.inquiryTypes.distributor}</option>
                          <option value="product">{t.contact.form.inquiryTypes.product}</option>
                          <option value="general">{t.contact.form.inquiryTypes.general}</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-amber-700 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Explicit Product & Specific Size Selector */}
                  <div>
                    <label htmlFor="productInterest" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                      {locale === 'ne' ? 'उत्पादन तथा साइज रोज्नुहोस्' : 'Select Product & Size Format'} <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="productInterest"
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 pr-10 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option value="both-500-1000">
                          {locale === 'ne' ? 'भुटेको + कच्ची घानी दुवै (५०० मि.लि. र १ लिटर)' : 'Both Roasted & Cold-Pressed (500ml & 1L)'}
                        </option>
                        <option value="roasted-1000">
                          {locale === 'ne' ? '🔥 भुटेको तोरीको तेल (चेपुवा) — १ लिटर (१००० मि.लि.) पाउच' : '🔥 Roasted Mustard Oil (Chepuwa) — 1 Litre (1000 ml)'}
                        </option>
                        <option value="roasted-500">
                          {locale === 'ne' ? '🔥 भुटेको तोरीको तेल (चेपुवा) — ५०० मि.लि. पाउच' : '🔥 Roasted Mustard Oil (Chepuwa) — 500 ml Pouch'}
                        </option>
                        <option value="coldpress-1000">
                          {locale === 'ne' ? '🌿 कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड) — १ लिटर (१००० मि.लि.) पाउच' : '🌿 Cold-Pressed Mustard Oil (Kacchi Ghani) — 1 Litre (1000 ml)'}
                        </option>
                        <option value="coldpress-500">
                          {locale === 'ne' ? '🌿 कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड) — ५०० मि.लि. पाउच' : '🌿 Cold-Pressed Mustard Oil (Kacchi Ghani) — 500 ml Pouch'}
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-amber-700 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                      {t.contact.form.message} ({locale === 'ne' ? 'कार्टुन संख्या वा विवरण' : 'Quantity or Notes'})
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={locale === 'ne' ? 'उदाहरण: २० कार्टुन १ लिटर र १० कार्टुन ५०० मि.लि. आवश्यक...' : 'E.g. Required 20 cartons of 1L and 10 cartons of 500ml...'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] resize-none transition-all"
                    />
                  </div>

                  {/* WhatsApp Submission Action Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>
                      {locale === 'ne' 
                        ? 'WhatsApp (9814277220) मा सोधपुछ पठाउनुहोस्' 
                        : 'Send Details to WhatsApp (9814277220)'}
                    </span>
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
