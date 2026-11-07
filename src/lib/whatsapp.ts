/**
 * Helper to build pre-filled WhatsApp click-to-chat URL with Nepali / English trade inquiry details
 * Target WhatsApp: 9814277220 (Nepal +977)
 */
export const WHATSAPP_NUMBER = '9779814277220';

export interface WhatsAppInquiryParams {
  productType?: 'roasted' | 'cold-pressed' | 'both';
  size?: '500ml' | '1000ml' | 'both';
  name?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  locale?: 'en' | 'ne';
}

export function generateWhatsAppLink(params: WhatsAppInquiryParams): string {
  const isNe = params.locale === 'ne';

  const productLabel = 
    params.productType === 'roasted'
      ? (isNe ? 'दक्षिणा भुटेको तोरीको तेल (चेपुवा)' : 'Dakshina Roasted Mustard Oil (Chepuwa)')
      : params.productType === 'cold-pressed'
      ? (isNe ? 'दक्षिणा कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड)' : 'Dakshina Cold Pressed Mustard Oil (Kacchi Ghani)')
      : (isNe ? 'दक्षिणा भुटेको तथा कच्ची घानी दुवै तोरीको तेल' : 'Dakshina Both Roasted & Cold Pressed Mustard Oil');

  const sizeLabel = 
    params.size === '500ml'
      ? (isNe ? '५०० मि.लि. (500 ml) सिल पाउच' : '500 ml Sealed Pouch')
      : params.size === '1000ml'
      ? (isNe ? '१ लिटर (1000 ml) सिल पाउच' : '1 Litre (1000 ml) Sealed Pouch')
      : (isNe ? '५०० मि.लि. र १ लिटर दुवै साइज' : 'Both 500ml & 1L Sizes');

  let text = isNe
    ? `नमस्ते दक्षिणा तेल मिल,\nम व्यापारिक / थोक अर्डर सोधपुछ गर्न चाहन्छु:\n\n`
    : `Hello Dakshina Tel Mill,\nI would like to make a trade / wholesale enquiry:\n\n`;

  text += isNe
    ? `• उत्पादन: ${productLabel}\n• साइज: ${sizeLabel}\n`
    : `• Product: ${productLabel}\n• Size Format: ${sizeLabel}\n`;

  if (params.inquiryType) {
    text += isNe ? `• सोधपुछ प्रकार: ${params.inquiryType}\n` : `• Inquiry Type: ${params.inquiryType}\n`;
  }

  if (params.name) {
    text += isNe ? `• नाम: ${params.name}\n` : `• Name: ${params.name}\n`;
  }

  if (params.phone) {
    text += isNe ? `• सम्पर्क नम्बर: ${params.phone}\n` : `• Contact Phone: ${params.phone}\n`;
  }

  if (params.message) {
    text += isNe ? `• सन्देश / विवरण: ${params.message}\n` : `• Details: ${params.message}\n`;
  }

  text += isNe
    ? `\nकृपया थोक मूल्य तथा आपूर्ति सम्बन्धी जानकारी उपलब्ध गराइदिनुहोला। धन्यवाद!`
    : `\nPlease provide wholesale pricing and supply details. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

