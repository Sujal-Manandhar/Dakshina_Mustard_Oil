import HeroSection from '@/components/home/HeroSection';
import BrandIntroSection from '@/components/home/BrandIntroSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ManufacturingSection from '@/components/home/ManufacturingSection';
import BrandStorySection from '@/components/home/BrandStorySection';
import ContactCTASection from '@/components/home/ContactCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <FeaturedProductsSection />
      <WhyChooseSection />
      <ManufacturingSection />
      <BrandStorySection />
      <ContactCTASection />
    </>
  );
}

