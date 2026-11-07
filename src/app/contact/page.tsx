'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
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
  Sparkles
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(
        locale === 'ne'
          ? 'कृपया नाम, फोन नम्बर र सन्देश खुलाउनुहोस्।'
          : 'Please complete Name, Phone Number, and Message.'
      );
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'wholesale',
        productInterest: 'both-500-1000',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="bg-[#FFF8E7] min-h-screen">
      
      {/* Clean Corporate FMCG Header Banner */}
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
                <p className="text-xs sm:text-sm text-[#6B5E4A] mb-6">
                  {locale === 'ne' 
                    ? 'हाम्रो हेटौंडास्थित मिल तथा बिक्री विभागसँग सिधै सम्पर्क गर्नुहोस्।' 
                    : 'Connect directly with our mill facility and sales operations in Hetauda.'}
                </p>

                <div className="space-y-5">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#6B5E4A] uppercase tracking-wider">
                        {t.contact.info.address}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.addressValue}
                      </p>
                      <p className="text-xs text-[#6B5E4A] mt-0.5">
                        {locale === 'ne' ? 'हेटौंडा उपमहानगरपालिका, बागमती प्रदेश' : 'Hetauda Sub-Metropolitan, Bagmati Province'}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#6B5E4A] uppercase tracking-wider">
                        {t.contact.info.phone}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.phonePlaceholder}
                      </p>
                      <p className="text-xs text-[#6B5E4A] mt-0.5">
                        {locale === 'ne' ? 'थोक तथा डिलर अर्डर डेस्क' : 'Wholesale & Dealership Order Desk'}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#6B5E4A] uppercase tracking-wider">
                        {t.contact.info.email}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.emailPlaceholder}
                      </p>
                      <p className="text-xs text-[#6B5E4A] mt-0.5">
                        {locale === 'ne' ? 'आधिकारिक पत्राचार' : 'Official Trade Enquiries'}
                      </p>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFBF0] border border-amber-500/20">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-800">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#6B5E4A] uppercase tracking-wider">
                        {t.contact.info.hours}
                      </p>
                      <p className="text-sm font-bold text-[#241A0B] mt-0.5">
                        {t.contact.info.hoursValue}
                      </p>
                      <p className="text-xs text-[#6B5E4A] mt-0.5">
                        {locale === 'ne' ? 'शनिबार मिल बन्द रहनेछ' : 'Saturday Closed'}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Packaging & Distribution Specs */}
                <div className="mt-6 pt-6 border-t border-amber-500/20">
                  <p className="text-xs text-[#6B5E4A] uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-amber-600" />
                    <span>{locale === 'ne' ? 'उत्पादन तथा प्याकिङ ढाँचा' : 'Product & Packaging Formats'}</span>
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-amber-500/30 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <p className="font-bold text-[#241A0B]">{locale === 'ne' ? 'भुटेको चेपुवा' : 'Roasted Chepuwa'}</p>
                        <p className="text-[11px] text-[#6B5E4A]">500 ml & 1000 ml</p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-amber-500/30 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-bold text-[#241A0B]">{locale === 'ne' ? 'कच्ची घानी' : 'Cold-Pressed'}</p>
                        <p className="text-[11px] text-[#6B5E4A]">500 ml & 1000 ml</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Trust Box */}
              <div className="bg-[#241A0B] text-white rounded-xl p-5 border border-amber-500/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {locale === 'ne' ? 'प्रमाणित शुद्धता' : 'Certified Purity'}
                  </p>
                  <p className="text-xs text-amber-100/80 mt-0.5">
                    {locale === 'ne' 
                      ? 'कुनै मिसावट छैन, १००% शुद्ध नेपाली तोरीको तेल।' 
                      : 'Zero adulteration, 100% authentic Nepali mustard oil.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Trade & Order Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-amber-500/25 rounded-xl p-6 sm:p-10 shadow-sm">
                
                <div className="border-b border-amber-500/20 pb-5 mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#241A0B] tracking-tight">
                    {t.contact.form.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B5E4A] mt-1">
                    {locale === 'ne'
                      ? 'थोक अर्डर, खुद्रा पसल वा वितरक सोधपुछका लागि तलको फारम भर्नुहोस्। हाम्रो टोलीले तत्काल सम्पर्क गर्नेछ।'
                      : 'Submit your requirements for wholesale pricing, retail supply, or dealership across Nepal.'}
                  </p>
                </div>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-900 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="text-sm font-semibold">{t.contact.form.successMessage}</p>
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
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all"
                      >
                        <option value="wholesale">{t.contact.form.inquiryTypes.wholesale}</option>
                        <option value="retailer">{t.contact.form.inquiryTypes.retailer}</option>
                        <option value="distributor">{t.contact.form.inquiryTypes.distributor}</option>
                        <option value="product">{t.contact.form.inquiryTypes.product}</option>
                        <option value="general">{t.contact.form.inquiryTypes.general}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productInterest" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                      {t.contact.form.productInterest}
                    </label>
                    <select
                      id="productInterest"
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] transition-all"
                    >
                      <option value="both-500-1000">
                        {locale === 'ne' ? 'भुटेको + कच्ची घानी दुवै (५०० मि.लि. र १ लिटर)' : 'Both Roasted & Cold-Pressed (500ml & 1L)'}
                      </option>
                      <option value="roasted-only">
                        {locale === 'ne' ? 'भुटेको तोरीको तेल मात्र (५०० मि.लि. र १ लिटर)' : 'Roasted Mustard Oil Only (500ml & 1L)'}
                      </option>
                      <option value="cold-pressed-only">
                        {locale === 'ne' ? 'कच्ची घानी तोरीको तेल मात्र (५०० मि.लि. र १ लिटर)' : 'Cold-Pressed Mustard Oil Only (500ml & 1L)'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#241A0B] mb-1.5">
                      {t.contact.form.message} <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-[#241A0B] resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-corp-primary w-full py-3.5 text-sm sm:text-base font-bold shadow-md"
                  >
                    {status === 'submitting' ? (
                      <span>{t.contact.form.sending}</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        {t.contact.form.submit}
                        <Send className="w-4 h-4" />
                      </span>
                    )}
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
