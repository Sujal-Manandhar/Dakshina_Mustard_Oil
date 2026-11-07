# Dakshina Mustard Oil — Official Website

Official bilingual (English & Nepali) website for **Dakshina Tel Mill**, manufacturers of **Dakshina Mustard Oil (दक्षिणा भुटेको तोरीको तेल / चेपुवाको तेल)** in Hetauda, Nepal.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Packaging Truth Preserved**: Extracted directly from the official Dakshina packaging photograph. Brand identity, Devanagari lettering, and color tones (Golden Amber `#F5A623`, Dark Brown `#3A2A0A`, Deep Crimson `#C41E1E`, Forest Green `#2D7A3A`) strictly honored.
- **Bilingual Support (English & नेपाली)**: Instant language switching with accurate cultural Nepali Unicode translations across all sections.
- **100% Responsive & Accessible**: Mobile-first navigation, fluid typography, smooth scroll animations, and WCAG AA color contrast.
- **All Core Pages**:
  - `Home` (`/`): Striking hero section with actual product packaging, brand story, manufacturing identity, why choose Dakshina, and quick contact.
  - `About Us` (`/about`): Mill history, vision, mission, core values, and quality commitments.
  - `Our Products` (`/products`): 1000 ml pouch product showcase, packaging specs, and bulk inquiry actions.
  - `Our Process` (`/process`): 7-stage mustard roasting and extraction journey.
  - `Contact` (`/contact`): Inquiry form for retail, wholesale, and distributor partnerships, business hours, and location.
- **SEO Ready**: Dynamic sitemap (`/sitemap.xml`), `robots.txt`, rich OpenGraph metadata, and localized keywords for Nepal.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Architecture

```
├── public/
│   ├── images/
│   │   ├── products/
│   │   │   └── dakshina-1l.png    # Official packaging photo
│   │   └── logo.png               # Official emblem
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── about/page.tsx         # Company profile
│   │   ├── contact/page.tsx       # Interactive inquiry & contacts
│   │   ├── process/page.tsx       # 7-step production journey
│   │   ├── products/page.tsx      # Product catalog
│   │   ├── globals.css            # Tailwind & Google Fonts
│   │   ├── layout.tsx             # Root layout & SEO meta
│   │   ├── page.tsx               # Homepage
│   │   ├── providers.tsx          # Context wrappers
│   │   └── sitemap.ts             # Dynamic XML sitemap
│   ├── components/
│   │   ├── home/                  # Homepage modular sections
│   │   ├── layout/                # Header, Footer, Nav
│   │   └── ui/                    # AnimatedSection, ProductCard, SectionHeader
│   ├── context/
│   │   └── LanguageContext.tsx    # State management for EN/NE
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Intersection Observer animations
│   └── lib/
│       ├── products.ts            # Product data definitions
│       └── translations.ts        # Complete bilingual dictionaries
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📝 Updating Content & Photos

1. **Product Images**: Place new high-resolution pouch pictures into `public/images/products/` and reference them in `src/lib/products.ts`.
2. **Contact Details**: Update the placeholders for phone number and email inside `src/lib/translations.ts` under `contact.info`.
3. **Google Maps**: In `src/app/contact/page.tsx`, replace the location block with your Google Maps embed iframe once the exact coordinates in Hetauda are finalized.

