export interface Product {
  id: string;
  slug: string;
  type: 'roasted' | 'cold-pressed';
  name: {
    en: string;
    ne: string;
  };
  subtitle: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  sizes: {
    volumeEn: string;
    volumeNe: string;
    formatEn: string;
    formatNe: string;
    image: string;
  }[];
  packaging: {
    en: string;
    ne: string;
  };
  processEn: string;
  processNe: string;
  image: string;
  badge: {
    en: string;
    ne: string;
  };
  tagline: {
    en: string;
    ne: string;
  };
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'dakshina-roasted-mustard-oil',
    slug: 'roasted-mustard-oil',
    type: 'roasted',
    name: {
      en: 'Dakshina Roasted Mustard Oil (Chepuwa)',
      ne: 'दक्षिणा भुटेको तोरीको तेल (चेपुवाको तेल)',
    },
    subtitle: {
      en: 'Chepuwa ko Tel — Traditional Household Mill Extraction',
      ne: 'चेपुवाको तेल — परम्परागत घरेलु मिलबाट उत्पादित',
    },
    description: {
      en: 'Authentic roasted mustard oil produced by gently roasting high-grade mustard seeds before slow pressing. Renowned for its signature golden-amber warmth, intense aroma, and bold traditional flavor beloved across Nepali kitchens.',
      ne: 'उच्च गुणस्तरको तोरीलाई परम्परागत विधिअनुसार भुटेर निकालिएको चेपुवाको तेल। यसको प्राकृतिक बास्ना, तीखोपन र परम्परागत स्वादले हरेक नेपाली भान्साको परिकारलाई स्वादिलो बनाउँछ।',
    },
    sizes: [
      {
        volumeEn: '500 ml',
        volumeNe: '५०० मि.लि.',
        formatEn: 'Sealed Pouch & Bulk Carton',
        formatNe: 'सिल पाउच र कार्टुन प्याकिङ',
        image: '/images/products/dakshina-500ml.png',
      },
      {
        volumeEn: '1000 ml (1 Litre)',
        volumeNe: '१००० मि.लि. (१ लिटर)',
        formatEn: 'Sealed Pouch & Bulk Carton',
        formatNe: 'सिल पाउच र कार्टुन प्याकिङ',
        image: '/images/products/dakshina-1l.png',
      },
    ],
    packaging: {
      en: 'Hygienic Multi-Layer Pouch (500ml & 1L) & Sturdy Carton Box',
      ne: 'स्वच्छ सुरक्षित पाउच (५०० मि.लि. र १ लिटर) तथा कार्टुन',
    },
    processEn: 'Slow Roasted & Traditional Mill Pressing',
    processNe: 'परम्परागत भुट्ने र घरेलु मिल चेपुवा विधि',
    image: '/images/products/dakshina-1l.png',
    badge: {
      en: 'Signature Roasted',
      ne: 'भुटेको तोरीको तेल',
    },
    tagline: {
      en: 'स्वादिलो र सुगन्धित घरेलु मिलबाट उत्पादित',
      ne: 'स्वादिलो र सुगन्धित घरेलु मिलबाट उत्पादित',
    },
    featured: true,
  },
  {
    id: 'dakshina-cold-pressed-mustard-oil',
    slug: 'cold-pressed-mustard-oil',
    type: 'cold-pressed',
    name: {
      en: 'Dakshina Cold Pressed Mustard Oil (Kacchi Ghani)',
      ne: 'दक्षिणा कच्ची घानी तोरीको तेल (कोल्ड प्रेस्ड)',
    },
    subtitle: {
      en: 'Kacchi Ghani Pure Mustard Oil — Natural Cold Pressed',
      ne: 'कच्ची घानी शुद्ध तोरीको तेल — प्राकृतिक पोषणयुक्त',
    },
    description: {
      en: 'Extracted mechanically at low temperatures without heat treatment or seed roasting to preserve 100% natural antioxidants, essential omega fatty acids, and delicate floral mustard pungency. Pure, pristine, and health-focused.',
      ne: 'कुनै पनि कृत्रिम ताप बिना कम तापक्रममा प्राकृतिक रूपमा पेलिएको कच्ची घानी तोरीको तेल। प्राकृतिक पोषक तत्व, एन्टिअक्सिडेन्ट र स्वास्थ्यवर्धक गुणहरूले भरिपूर्ण।',
    },
    sizes: [
      {
        volumeEn: '500 ml',
        volumeNe: '५०० मि.लि.',
        formatEn: 'Sealed Pouch & Bulk Carton',
        formatNe: 'सिल पाउच र कार्टुन प्याकिङ',
        image: '/images/products/dakshina-500ml.png',
      },
      {
        volumeEn: '1000 ml (1 Litre)',
        volumeNe: '१००० मि.लि. (१ लिटर)',
        formatEn: 'Sealed Pouch & Bulk Carton',
        formatNe: 'सिल पाउच र कार्टुन प्याकिङ',
        image: '/images/products/dakshina-coldpressed-1l.png',
      },
    ],
    packaging: {
      en: 'Hygienic Multi-Layer Pouch (500ml & 1L) & Sturdy Carton Box',
      ne: 'स्वच्छ सुरक्षित पाउच (५०० मि.लि. र १ लिटर) तथा कार्टुन',
    },
    processEn: 'Cold Press (No Heat Treatment / Kacchi Ghani)',
    processNe: 'कच्ची घानी बिना ताप प्राकृतिक निष्कासन',
    image: '/images/products/dakshina-coldpressed-1l.png',
    badge: {
      en: 'Cold Pressed / कच्ची घानी',
      ne: 'कच्ची घानी (कोल्ड प्रेस्ड)',
    },
    tagline: {
      en: 'शुद्ध, प्राकृतिक र स्वास्थ्यवर्धक',
      ne: 'शुद्ध, प्राकृतिक र स्वास्थ्यवर्धक',
    },
    featured: true,
  },
];
