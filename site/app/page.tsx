'use client';

import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { InteractiveDemoSection } from '@/components/sections/InteractiveDemoSection';
import { WidgetTourSection } from '@/components/sections/WidgetTourSection';
import { FitPassSection } from '@/components/sections/FitPassSection';
import { DashboardSection } from '@/components/sections/DashboardSection';
import { PerformanceSection } from '@/components/sections/PerformanceSection';
import { KioskSection } from '@/components/sections/KioskSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { DevelopersSection } from '@/components/sections/DevelopersSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <BenefitsSection />
        <HowItWorksSection />
        <InteractiveDemoSection />
        <WidgetTourSection />
        <FitPassSection />
        <DashboardSection />
        <PerformanceSection />
        <KioskSection />
        <PricingSection />
        <DevelopersSection />
        <ResultsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
