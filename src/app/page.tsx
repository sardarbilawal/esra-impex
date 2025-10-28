import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import GalleryPreviewSection from '@/components/GalleryPreviewSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <ContactSection />
    </div>
  );
}