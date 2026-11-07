export type Locale = 'en' | 'ne';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    process: string;
    contact: string;
    enquireNow: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    exploreProducts: string;
    contactUs: string;
    tagline: string;
    roastedBadge: string;
    coldPressedBadge: string;
    sizesBadge: string;
  };
  brandIntro: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    learnMore: string;
    roastedTitle: string;
    roastedDesc: string;
    coldPressedTitle: string;
    coldPressedDesc: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    pageDescription: string;
    viewProduct: string;
    enquireNow: string;
    volume: string;
    packaging: string;
    availableSizes: string;
    allVariants: string;
    roastedFilter: string;
    coldPressedFilter: string;
  };
  whyChoose: {
    badge: string;
    title: string;
    subtitle: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
  manufacturing: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    dualProcessTitle: string;
    dualProcessDesc: string;
  };
  brandStory: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  contactSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    getInTouch: string;
  };
  about: {
    pageTitle: string;
    pageDescription: string;
    intro: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      items: { title: string; description: string }[];
    };
    commitment: {
      title: string;
      description: string;
    };
  };
  process: {
    pageTitle: string;
    pageDescription: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
      method: string;
    }[];
  };
  contact: {
    pageTitle: string;
    pageDescription: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      inquiryType: string;
      selectInquiryType: string;
      productInterest: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successMessage: string;
      errorMessage: string;
      inquiryTypes: {
        general: string;
        product: string;
        retailer: string;
        wholesale: string;
        distributor: string;
      };
    };
    info: {
      title: string;
      address: string;
      addressValue: string;
      phone: string;
      phonePlaceholder: string;
      deskLabel?: string;
      email: string;
      emailPlaceholder: string;
      hours: string;
      hoursValue: string;
      followUs: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    ourProducts: string;
    contactInfo: string;
    copyright: string;
    allRightsReserved: string;
    roastedMustardOil: string;
    coldPressedMustardOil: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    process: 'Our Process',
    contact: 'Contact',
    enquireNow: 'Trade Enquiry',
  },
  hero: {
    badge: 'Dakshina Tel Mill • Hetauda, Nepal',
    headline: 'Mastering the Art of',
    headlineAccent: 'Pure Mustard Oil',
    subheadline: 'Crafted in Hetauda, Nepal — available in both Traditional Roasted (Chepuwa) and Pure Cold-Pressed (Kacchi Ghani) varieties in 500 ml & 1 Litre hygienic packs.',
    exploreProducts: 'Explore Both Variants',
    contactUs: 'Request Wholesale Quote',
    tagline: 'Authentic Taste • 500ml & 1L Packs • Wholesale & Retail',
    roastedBadge: '🔥 Roasted Chepuwa',
    coldPressedBadge: '🌿 Cold Pressed (Kacchi Ghani)',
    sizesBadge: '500ml & 1000ml Available',
  },
  brandIntro: {
    badge: 'Our Heritage & Philosophy',
    title: 'Dakshina Tel Mill',
    subtitle: 'Two Distinct Culinary Traditions, One Uncompromising Standard',
    description: 'Based in Hetauda, Nepal, Dakshina Tel Mill is dedicated to processing high-grade mustard seeds with unmatched care. Whether you prefer the intense aroma and fiery depth of traditional roasted Chepuwa oil or the nutrient-dense purity of natural cold-pressed Kacchi Ghani oil, Dakshina delivers authentic excellence to every kitchen and merchant.',
    learnMore: 'Discover Our Mill Story',
    roastedTitle: 'Traditional Roasted (भुटेको चेपुवा)',
    roastedDesc: 'Slow-roasted seeds pressed for robust aroma, pungent punch, and deep golden color.',
    coldPressedTitle: 'Pure Cold-Pressed (कच्ची घानी)',
    coldPressedDesc: 'Pressed without thermal degradation to safeguard essential fatty acids and antioxidants.',
  },
  products: {
    badge: 'Our Complete Range',
    title: 'Dakshina Mustard Oil Collection',
    subtitle: 'Available in 500 ml & 1000 ml Pouches & Bulk Cartons',
    pageDescription: 'Choose between our Signature Roasted Mustard Oil and our Pure Cold Pressed Kacchi Ghani Oil. Sealed in multi-layer protective packaging for lasting flavor, pungency, and freshness.',
    viewProduct: 'View Details',
    enquireNow: 'Enquire for Bulk / Retail',
    volume: 'Available Sizes',
    packaging: 'Packaging',
    availableSizes: '500 ml & 1 Litre (1000 ml)',
    allVariants: 'All Varieties',
    roastedFilter: 'Roasted (भुटेको)',
    coldPressedFilter: 'Cold Pressed (कच्ची घानी)',
  },
  whyChoose: {
    badge: 'Why Partners & Households Trust Us',
    title: 'The Dakshina Difference',
    subtitle: 'Engineered for Purity, Trusted Across Nepal',
    reasons: [
      {
        title: 'Both Roasted & Cold-Pressed',
        description: 'We cater to all culinary preferences — intense roasted flavor for curries and pickle-making, or cold-pressed for clean, nutrient-rich daily cooking.',
      },
      {
        title: '500 ml & 1 Litre Formats',
        description: 'Available in consumer-friendly 500 ml pouches as well as standard 1000 ml family pouches, with strong master cartons for distributors.',
      },
      {
        title: 'Hetauda Mill Production',
        description: 'Directly manufactured at our facility in Hetauda, ensuring consistent freshness, transparent quality checks, and dependable supply lines.',
      },
      {
        title: 'Multi-Layer Barrier Packaging',
        description: 'Pouch packaging protects oil from oxidation, UV light, and aroma loss so every drop tastes freshly pressed.',
      },
    ],
  },
  manufacturing: {
    badge: 'Factory & Mill Operations',
    title: 'Precision Milling in Hetauda',
    subtitle: 'From Selected Mustard Seeds to Sealed Cartons',
    description: 'Our manufacturing premises in Hetauda house dedicated lines for both roasted and cold extraction techniques. We enforce strict seed cleanliness, controlled moisture levels, and automated hygienic pouch packaging.',
    dualProcessTitle: 'Dual-Line Processing Capability',
    dualProcessDesc: 'Equipped to process both roasted and unheated virgin mustard seeds under strict hygienic conditions.',
  },
  brandStory: {
    badge: 'Three Generations of Heritage',
    title: 'The Legacy of Dakshina Mustard Oil',
    subtitle: 'Three Generations. One Tradition. A Legacy That Continues.',
    description: 'Established in 1990 in Hetauda, Makwanpur, Dakshina Mustard Oil began with the vision of grandfather Dhan Manandhar, continued by Rajesh Manandhar, and carried forward today by Sujal Manandhar. Preserving the traditional Newari-style firewood roasting and wooden expeller extraction methods to deliver authentic mustard oil to households across Nepal.',
  },
  contactSection: {
    badge: 'Partner With Dakshina',
    title: 'Ready to Experience Dakshina?',
    subtitle: 'Direct Mill Supply for Retailers, Wholesalers & Distributors',
    description: 'Whether you are stocking shelves, ordering bulk cartons for distribution across Nepal, or looking for premium mustard oil for your home, our team in Hetauda is at your service.',
    getInTouch: 'Send Business Enquiry',
  },
  about: {
    pageTitle: 'About Us – The Legacy of Dakshina Mustard Oil',
    pageDescription: 'Three Generations. One Tradition. A Legacy That Continues. Established in 1990 in Hetauda, Makwanpur by Dhan Manandhar, continued by Rajesh Manandhar, and preserved today by Sujal Manandhar.',
    intro: {
      title: 'Three Generations. One Tradition. A Legacy That Continues.',
      description: 'Some traditions are more than just a way of doing things; they are a part of who we are. At Dakshina Mustard Oil, our story is built on family heritage, traditional craftsmanship, and a passion for preserving the authentic taste of Nepalese mustard oil.',
    },
    mission: {
      title: 'Our Mission',
      description: 'To deliver uncompromised purity and choice to Nepali households and food businesses by producing both roasted and cold-pressed mustard oil in hygienic, accessible packaging formats.',
    },
    vision: {
      title: 'Our Vision',
      description: 'To establish Dakshina as one of Nepal’s premier edible oil brands, admired for honest milling practices, diverse processing capabilities, and dependable dealer networks.',
    },
    values: {
      title: 'Core Values',
      items: [
        {
          title: 'Culinary Choice',
          description: 'Offering both roasted (Chepuwa) and cold-pressed varieties in multiple volumes (500ml & 1L) to meet all market needs.',
        },
        {
          title: 'Uncompromised Purity',
          description: 'Zero artificial dyes, zero additives, and strict adherence to pure mustard seed extraction.',
        },
        {
          title: 'Dealer & Retailer Trust',
          description: 'Transparent wholesale pricing, punctual deliveries, and consistent stock support from our Hetauda mill.',
        },
        {
          title: 'Local Empowerment',
          description: 'Proudly rooted in Hetauda, creating local employment and contributing to Nepal\'s indigenous FMCG ecosystem.',
        },
      ],
    },
    commitment: {
      title: 'Our Commitment to Quality & Safety',
      description: 'Every batch of Dakshina Mustard Oil is tested for clarity, pungency, and density. Sealed immediately at the mill, our multi-layer pouches safeguard oil against contamination and UV exposure from our factory floor to your table.',
    },
  },
  process: {
    pageTitle: 'Our Manufacturing Journey',
    pageDescription: 'Explore our dual-extraction approach: Seed Selection, Roasting or Cold-Pressing, Mechanical Separation, Quality Control, and Automated Pouch Packing.',
    subtitle: 'Dual Process: Roasted Chepuwa vs. Pure Cold Pressed',
    steps: [
      {
        title: 'Seed Sourcing & Grading',
        method: 'All Varieties',
        description: 'Selected mustard seeds (tori) undergo rigorous screening, destoning, and air cleaning to remove all dust, chaff, and impurities.',
      },
      {
        title: 'Seed Roasting (Roasted Line Only)',
        method: 'Roasted Chepuwa',
        description: 'Clean seeds are gently roasted at controlled temperatures, developing the signature smoky undertones and pungent aromatics unique to Nepali Chepuwa oil.',
      },
      {
        title: 'Cold Condition Conditioning (Cold-Pressed Line)',
        method: 'Cold Pressed',
        description: 'For our Kacchi Ghani line, seeds are kept at ambient temperature with zero heating, preserving all raw nutrients, vitamins, and natural pungency.',
      },
      {
        title: 'Mechanical Pressing & Extraction',
        method: 'All Varieties',
        description: 'Clean mechanical pressing extracts the oil without harmful chemical solvents, keeping the liquid natural and unadulterated.',
      },
      {
        title: 'Natural Sedimentation & Filtration',
        method: 'All Varieties',
        description: 'Extracted oil undergoes settling and multi-stage micro-filtration to achieve crystal-clear golden amber brilliance without stripping vital nutrients.',
      },
      {
        title: 'Hermetic Pouch Packaging (500ml & 1L)',
        method: 'All Varieties',
        description: 'Oil is metered into food-grade 500 ml and 1000 ml pouches, sealed hermetically under strict clean conditions, and packed into sturdy shipping cartons.',
      },
      {
        title: 'Dispatch Across Nepal',
        method: 'All Varieties',
        description: 'Finished cartons are staged for delivery to retail stores, wholesalers, and distribution partners across Hetauda and nationwide.',
      },
    ],
  },
  contact: {
    pageTitle: 'Contact Dakshina Tel Mill',
    pageDescription: 'Connect with our sales and distribution team in Hetauda for wholesale pricing, distributorship terms, and trade partnerships.',
    form: {
      title: 'Send a Trade or Product Inquiry',
      name: 'Your Name / Business Name',
      namePlaceholder: 'e.g. Sujal Traders / Rajesh Shrestha',
      phone: 'Contact Number',
      phonePlaceholder: 'e.g. 98XXXXXXXX',
      email: 'Email (Optional)',
      emailPlaceholder: 'you@company.com',
      inquiryType: 'Inquiry Category',
      selectInquiryType: 'Select category',
      productInterest: 'Product & Size Interest',
      message: 'Inquiry Details / Order Quantity',
      messagePlaceholder: 'Please mention your location, required quantities (500ml / 1L pouches or cartons), and business details...',
      submit: 'Submit Trade Inquiry',
      sending: 'Submitting...',
      successMessage: 'Thank you! Your trade inquiry has been received. Our team in Hetauda will contact you shortly.',
      errorMessage: 'Failed to submit. Please check required fields or contact us directly.',
      inquiryTypes: {
        general: 'General Customer Inquiry',
        product: 'Product Information',
        retailer: 'Retail Store Supply',
        wholesale: 'Wholesale Carton Orders',
        distributor: 'Regional Distributorship',
      },
    },
    info: {
      title: 'Mill & Office Details',
      address: 'Mill Location',
      addressValue: 'Hetauda, Makwanpur, Bagmati Province, Nepal',
      phone: 'Contact Numbers',
      phonePlaceholder: '9845025862 / 9814277220 / 057-520589',
      deskLabel: 'Wholesale & Dealership Order Desk',
      email: 'Official Inquiries',
      emailPlaceholder: 'info@dakshinamustardoil.com',
      hours: 'Mill Operating Hours',
      hoursValue: 'Sunday – Friday: 8:00 AM – 6:00 PM',
      followUs: 'Connect With Dakshina',
    },
  },
  footer: {
    description: 'Dakshina Tel Mill manufactures high-grade Roasted Chepuwa and Pure Cold-Pressed Mustard Oil in 500 ml & 1000 ml pouches. Proudly serving Nepali households, retailers, and distributors from Hetauda, Nepal.',
    quickLinks: 'Navigation',
    ourProducts: 'Our Mustard Oils',
    contactInfo: 'Mill Contact',
    copyright: '© 2024 Dakshina Tel Mill.',
    allRightsReserved: 'All rights reserved.',
    roastedMustardOil: 'Roasted Mustard Oil (500ml & 1L)',
    coldPressedMustardOil: 'Cold-Pressed Mustard Oil (500ml & 1L)',
  },
};

const ne: Translations = {
  nav: {
    home: 'गृहपृष्ठ',
    about: 'हाम्रो बारेमा',
    products: 'उत्पादनहरू',
    process: 'उत्पादन विधि',
    contact: 'सम्पर्क',
    enquireNow: 'व्यापारिक सोधपुछ',
  },
  hero: {
    badge: 'दक्षिणा तेल मिल • हेटौंडा, मकवानपुर, नेपाल',
    headline: 'शुद्ध तोरीको तेलको',
    headlineAccent: 'परम्परा र उत्कृष्टता',
    subheadline: 'हेटौंडामा उत्पादित — परम्परागत भुटेको तोरीको तेल (चेपुवा) र स्वास्थ्यवर्धक कच्ची घानी (कोल्ड प्रेस्ड) दुवै प्रकारमा ५०० मि.लि. र १ लिटरका सुरक्षित पाउचमा उपलब्ध।',
    exploreProducts: 'दुवै प्रकारका तेल हेर्नुहोस्',
    contactUs: 'थोक दरका लागि सोधपुछ',
    tagline: 'प्रामाणिक स्वाद • ५०० मि.लि. र १ लिटर • थोक तथा खुद्रा आपूर्ति',
    roastedBadge: '🔥 भुटेको चेपुवाको तेल',
    coldPressedBadge: '🌿 कच्ची घानी (कोल्ड प्रेस्ड)',
    sizesBadge: '५०० मि.लि. र १००० मि.लि. दुवैमा उपलब्ध',
  },
  brandIntro: {
    badge: 'हाम्रो परम्परा र मूल्यमान्यता',
    title: 'दक्षिणा तेल मिल',
    subtitle: 'दुई विशिष्ट उत्पादन, एउटै उच्च गुणस्तर',
    description: 'हेटौंडा, मकवानपुर, नेपालमा अवस्थित दक्षिणा तेल मिलले उत्कृष्ट तोरीका बीउहरूबाट परम्परागत भुटेको चेपुवा तेल र आधुनिक स्वास्थ्य अनुकूल कच्ची घानी (कोल्ड प्रेस्ड) तोरीको तेल उत्पादन गर्दछ। तपाईंको स्वाद र स्वास्थ्यको आवश्यकता अनुसार ५०० मि.लि. र १ लिटरका सुरक्षित पाउचहरूमा उपलब्ध गराउँछौं।',
    learnMore: 'हाम्रो कथा र मिलबारे जान्नुहोस्',
    roastedTitle: 'परम्परागत भुटेको तोरीको तेल (चेपुवा)',
    roastedDesc: 'तोरीलाई विधिपूर्वक भुटेर निकालिएको, तीखो बास्ना र समृद्ध परम्परागत स्वाद।',
    coldPressedTitle: 'प्राकृतिक कच्ची घानी (कोल्ड प्रेस्ड)',
    coldPressedDesc: 'कुनै ताप बिना कम तापक्रममा पेलिएको, प्राकृतिक पोषण र एन्टिअक्सिडेन्टले भरिपूर्ण।',
  },
  products: {
    badge: 'हाम्रा उत्पादनहरू',
    title: 'दक्षिणा तोरीको तेल संग्रह',
    subtitle: '५०० मि.लि. र १००० मि.लि. सिल पाउच तथा थोक कार्टुनमा उपलब्ध',
    pageDescription: 'हाम्रो हस्ताक्षर भुटेको तोरीको तेल र शुद्ध कच्ची घानी कोल्ड प्रेस्ड तेलमध्ये छनोट गर्नुहोस्। सुरक्षित बहु-तह पाउचमा प्याक गरिएको।',
    viewProduct: 'विस्तृत विवरण',
    enquireNow: 'थोक / खुद्रा अर्डर गर्नुहोस्',
    volume: 'उपलब्ध साइजहरू',
    packaging: 'प्याकेजिङ',
    availableSizes: '५०० मि.लि. र १ लिटर (१००० मि.लि.)',
    allVariants: 'सबै उत्पादनहरू',
    roastedFilter: 'भुटेको तोरी (चेपुवा)',
    coldPressedFilter: 'कच्ची घानी (कोल्ड प्रेस्ड)',
  },
  whyChoose: {
    badge: 'नेपाली ग्राहक तथा व्यापारीहरूको विश्वास',
    title: 'दक्षिणा किन रोज्ने?',
    subtitle: 'प्रत्येक भान्सा र व्यापारका लागि शुद्धता र विविधता',
    reasons: [
      {
        title: 'भुटेको र कच्ची घानी दुवै उपलब्ध',
        description: 'परम्परागत स्वाद मन पराउनेका लागि भुटेको चेपुवा र स्वास्थ्य सचेतहरूका लागि कच्ची घानी कोल्ड प्रेस्ड दुवै विकल्प उपलब्ध।',
      },
      {
        title: '५०० मि.लि. र १ लिटर साइज',
        description: 'साना घरपरिवारका लागि ५०० मि.लि. र नियमित प्रयोगका लागि १ लिटरका स्वच्छ पाउचहरू तथा थोक व्यापारीका लागि कार्टुन प्याकिङ।',
      },
      {
        title: 'हेटौंडाको प्रत्यक्ष मिल उत्पादन',
        description: 'हेटौंडामा आफ्नै मिलमा प्रत्यक्ष उत्पादन, जसले ताजापन, विश्वसनीय गुणस्तर र नियमित आपूर्तिको सुनिश्चितता गर्छ।',
      },
      {
        title: 'सुरक्षित सिल पाउच प्याकेजिङ',
        description: 'तेलको प्राकृतिक बास्ना र गुणस्तर हावा तथा घामबाट जोगाउन विशेष बहु-तह पाउचमा सुरक्षित प्याक गरिएको।',
      },
    ],
  },
  manufacturing: {
    badge: 'मिल तथा प्रशोधन',
    title: 'हेटौंडामा आधुनिक र परम्परागत मिल',
    subtitle: 'छानिएका तोरीका बीउदेखि सुरक्षित कार्टुन प्याकिङसम्म',
    description: 'हाम्रो हेटौंडास्थित मिलमा भुटेको तोरीको तेल र कच्ची घानी दुवैका लागि छुट्टाछुट्टै उत्पादन प्रणाली छ। तोरीको छनोट, सरसफाइ र स्वचालित प्याकेजिङका साथ उच्च स्वच्छता कायम गरिन्छ।',
    dualProcessTitle: 'दोहोरो उत्पादन क्षमता',
    dualProcessDesc: 'भुटेको र बिना-ताप कच्ची घानी दुवै विधिबाट तेल निकाल्ने आधुनिक व्यवस्था।',
  },
  brandStory: {
    badge: 'तीन पुस्ताको विरासत',
    title: 'दक्षिणा तोरीको तेलको गौरवमय विरासत',
    subtitle: 'तीन पुस्ता। एउटै परम्परा। निरन्तर विरासत।',
    description: 'सन् १९९० मा हेटौंडा, मकवानपुरमा हजुरबुबा धन मानन्धरको दूरदर्शी सोचबाट सुरु भएको दक्षिणा तोरीको तेल राजेश मानन्धरद्वारा निरन्तर बनाइएको र आज तेस्रो पुस्ताका सुजल मानन्धरद्वारा अगाडि बढाइएको छ। परम्परागत नेवारी शैलीको दाउराको आगोमा भुट्ने र काठको कोलले पेल्ने विधि अपनाएर नेपालभरका घरपरिवारमा प्रामाणिक तोरीको तेल पुर्‍याउने हाम्रो प्रतिबद्धता छ।',
  },
  contactSection: {
    badge: 'व्यापारिक सहकार्य',
    title: 'दक्षिणासँग जोडिनुहोस्',
    subtitle: 'किराना, थोक विक्रेता तथा वितरकहरूका लागि प्रत्यक्ष मिल आपूर्ति',
    description: 'आफ्नो पसल वा वितरण व्यवसायका लागि आकर्षक मिल दर र नियमित आपूर्तिको लागि हेटौंडास्थित हाम्रो कार्यालयमा सम्पर्क गर्नुहोस्।',
    getInTouch: 'व्यापारिक सोधपुछ पठाउनुहोस्',
  },
  about: {
    pageTitle: 'हाम्रो बारेमा — दक्षिणा तोरीको तेलको गौरवमय विरासत',
    pageDescription: 'तीन पुस्ता, एउटै परम्परा, निरन्तर विरासत। सन् १९९० मा हेटौंडा, मकवानपुरमा हजुरबुबा धन मानन्धरद्वारा स्थापित, राजेश मानन्धरद्वारा विस्तारित र सुजल मानन्धरद्वारा संरक्षित।',
    intro: {
      title: 'तीन पुस्ता। एउटै परम्परा। निरन्तर विरासत।',
      description: 'केही परम्पराहरू केवल काम गर्ने तरिका मात्र होइनन्; ती हाम्रो अस्तित्वको अभिन्न अङ्ग हुन्। दक्षिणा तोरीको तेलमा हाम्रो कथा पारिवारिक विरासत, परम्परागत सीप र नेपाली तोरीको तेलको मौलिक स्वाद जोगाउने अटल समर्पणमा आधारित छ।',
    },
    mission: {
      title: 'हाम्रो लक्ष्य',
      description: 'नेपाली उपभोक्तालाई भुटेको र कच्ची घानी दुवै प्रकारको शुद्ध, ताजा र मिसावटमुक्त तोरीको तेल सुलभ र सुरक्षित प्याकिङमा निरन्तर उपलब्ध गराउनु।',
    },
    vision: {
      title: 'हाम्रो दृष्टिकोण',
      description: 'नेपालभर प्रामाणिक स्वाद, गुणस्तरीय उत्पादन र विश्वसनीय व्यापारिक सम्बन्धका लागि परिचित अग्रणी तोरीको तेल ब्राण्ड बन्नु।',
    },
    values: {
      title: 'हाम्रा मुख्य सिद्धान्तहरू',
      items: [
        {
          title: 'ग्राहकको रोजाइ',
          description: 'भुटेको र कच्ची घानी दुवै प्रकार तथा ५०० मि.लि. र १ लिटर दुवै परिमाणमा उपलब्धता।',
        },
        {
          title: '१००% शुद्धता',
          description: 'कुनै पनि कृत्रिम रंग वा मिसावट बिना केवल शुद्ध तोरीका बीउबाट उत्पादन।',
        },
        {
          title: 'व्यापारीहरूसँगको विश्वास',
          description: 'पारदर्शी दर, नियमित आपूर्ति र भरपर्दो सहकार्य।',
        },
        {
          title: 'स्थानीय उत्पादनको गौरव',
          description: 'हेटौंडामा सञ्चालित भएर स्थानीय अर्थतन्त्र र रोजगारीमा सकारात्मक योगदान।',
        },
      ],
    },
    commitment: {
      title: 'गुणस्तर र स्वच्छतामा हाम्रो प्रतिबद्धता',
      description: 'दक्षिणा तोरीको तेलको प्रत्येक ब्याचको शुद्धता र तीखोपन परीक्षण गरिन्छ। हाम्रो आधुनिक बहु-तह पाउचले बास्ना र ताजगीलाई भान्सासम्म ताजा राख्दछ।',
    },
  },
  process: {
    pageTitle: 'उत्पादन विधि तथा चरणहरू',
    pageDescription: 'तोरीको छनोट, भुट्ने वा कोल्ड प्रेस गर्ने विधि, प्राकृतिक छनाइ र सुरक्षित पाउच प्याकिङको सम्पूर्ण विवरण।',
    subtitle: 'भुटेको चेपुवा र कच्ची घानी दुवैको वैज्ञानिक प्रक्रिया',
    steps: [
      {
        title: 'तोरीको बीउ छनोट र सरसफाइ',
        method: 'दुवै प्रकारका लागि',
        description: 'उत्कृष्ट तोरीका बीउहरूलाई आधुनिक मेसिनबाट धुलो, भुस र ढुंगा हटाएर पूर्ण सफा गरिन्छ।',
      },
      {
        title: 'तोरी भुट्ने विधि (भुटेको तेलका लागि)',
        method: 'भुटेको चेपुवा',
        description: 'सफा तोरीलाई निश्चित तापक्रममा भुटिन्छ जसले परम्परागत चेपुवा तेलको विशेष सुगन्ध र तीखो स्वाद दिन्छ।',
      },
      {
        title: 'कम तापक्रम निष्कासन (कच्ची घानीका लागि)',
        method: 'कोल्ड प्रेस्ड',
        description: 'कच्ची घानीका लागि तोरीलाई नभुटी कम तापक्रममा पेलिन्छ जसले प्राकृतिक भिटामिन र पोषक तत्व सुरक्षित राख्छ।',
      },
      {
        title: 'मिलमा तेल निष्कासन',
        method: 'दुवै प्रकारका लागि',
        description: 'कुनै पनि रासायनिक सल्भेन्ट बिना परम्परागत मेकानिकल मिलिङबाट शुद्ध तेल निकालिन्छ।',
      },
      {
        title: 'प्राकृतिक छनाइ र स्थिरीकरण',
        method: 'दुवै प्रकारका लागि',
        description: 'तेललाई प्राकृतिक रूपमा थिग्रिन दिएर सूक्ष्म फिल्टरबाट छानेर पारदर्शी सुनौलो रंग प्राप्त गरिन्छ।',
      },
      {
        title: 'सुरक्षित पाउच प्याकिङ (५०० मि.लि. र १ लिटर)',
        method: 'दुवै प्रकारका लागि',
        description: 'पूर्ण स्वचालित प्रणालीबाट ५०० मि.लि. र १००० मि.लि. पाउचमा सिल गरी कार्टुनमा प्याक गरिन्छ।',
      },
      {
        title: 'बजार तथा वितरक आपूर्ति',
        method: 'दुवै प्रकारका लागि',
        description: 'हेटौंडास्थित मिलबाट सिधै किराना पसल, थोक व्यापारी र वितरकहरूलाई सुरक्षित ढुवानी गरिन्छ।',
      },
    ],
  },
  contact: {
    pageTitle: 'सम्पर्क — दक्षिणा तेल मिल',
    pageDescription: 'थोक खरिद, डिलरसिप र खुद्रा आपूर्तिका लागि हेटौंडास्थित हाम्रो कार्यालयमा सम्पर्क गर्नुहोस्।',
    form: {
      title: 'व्यापारिक वा उत्पादन सोधपुछ फारम',
      name: 'तपाईंको नाम / पसलको नाम',
      namePlaceholder: 'उदा. सुजल ट्रेडर्स / राजेश श्रेष्ठ',
      phone: 'सम्पर्क फोन नम्बर',
      phonePlaceholder: 'उदा. ९८XXXXXXXX',
      email: 'इमेल (ऐच्छिक)',
      emailPlaceholder: 'you@example.com',
      inquiryType: 'सोधपुछको प्रकार',
      selectInquiryType: 'प्रकार छान्नुहोस्',
      productInterest: 'रुचि भएको उत्पादन र साइज',
      message: 'विस्तृत सोधपुछ वा अर्डर परिमाण',
      messagePlaceholder: 'तपाईंको ठेगाना, चाहिने परिमाण (५०० मि.लि. वा १ लिटर पाउच/कार्टुन) र विवरण खुलाउनुहोस्...',
      submit: 'सोधपुछ पठाउनुहोस्',
      sending: 'पठाउँदैछ...',
      successMessage: 'धन्यवाद! तपाईंको सोधपुछ प्राप्त भएको छ। हेटौंडाको हाम्रो टोलीले चाँडै सम्पर्क गर्नेछ।',
      errorMessage: 'कृपया आवश्यक विवरणहरू भरेर पुन: प्रयास गर्नुहोस्।',
      inquiryTypes: {
        general: 'सामान्य सोधपुछ',
        product: 'उत्पादन जानकारी',
        retailer: 'किराना तथा खुद्रा पसल आपूर्ति',
        wholesale: 'थोक कार्टुन अर्डर',
        distributor: 'क्षेत्रीय वितरक (डिलरसिप)',
      },
    },
    info: {
      title: 'मिल तथा सम्पर्क विवरण',
      address: 'मिलको ठेगाना',
      addressValue: 'हेटौंडा, मकवानपुर, बागमती प्रदेश, नेपाल',
      phone: 'सम्पर्क नम्बरहरू',
      phonePlaceholder: '९८४५०२५८६२ / ९८१४२७७२२० / ०५७-५२०५८९',
      deskLabel: 'थोक तथा डिलर अर्डर डेस्क',
      email: 'आधिकारिक इमेल',
      emailPlaceholder: 'info@dakshinamustardoil.com',
      hours: 'कार्यालय समय',
      hoursValue: 'आइतबार – शुक्रबार: बिहान ८:०० – साँझ ६:००',
      followUs: 'हामीसँग जोडिनुहोस्',
    },
  },
  footer: {
    description: 'दक्षिणा तेल मिलले हेटौंडाबाट उच्च गुणस्तरको भुटेको तोरीको तेल (चेपुवा) र कच्ची घानी (कोल्ड प्रेस्ड) ५०० मि.लि. र १ लिटर पाउचमा उत्पादन गर्दछ।',
    quickLinks: 'नेभिगेसन',
    ourProducts: 'हाम्रा तोरीका तेलहरू',
    contactInfo: 'सम्पर्क',
    copyright: '© २०२४ दक्षिणा तेल मिल।',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    roastedMustardOil: 'भुटेको तोरीको तेल (५०० मि.लि. र १ लिटर)',
    coldPressedMustardOil: 'कच्ची घानी तोरीको तेल (५०० मि.लि. र १ लिटर)',
  },
};

export const translations: Record<Locale, Translations> = { en, ne };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
