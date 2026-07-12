import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import CalculatorSection from '@/components/CalculatorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProductsSection />
        <CalculatorSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
}
