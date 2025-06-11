import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';
import PricingHero from '../components/pricing/PricingHero';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingComparison from '../components/pricing/PricingComparison';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingCTA from '../components/pricing/PricingCTA';
import { useTheme } from '../context/ThemeContext';

const Pricing: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Pricing & Packages | Pollinate IQ';
  }, []);

  return (
    <div className={isDark ? 'bg-pollinate-black text-white' : 'bg-white text-pollinate-black'}>
      <FuturisticBackground />
      <Header />
      
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingFAQ />
        <PricingCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
