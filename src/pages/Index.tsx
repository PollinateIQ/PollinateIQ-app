
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
// import ProjectsSection from '../components/home/ProjectsSection';
import ManuvooSection from '../components/home/ManuvooSection';
// import PricingSection from '../components/home/PricingSection';
import CTASection from '../components/home/CTASection';
import TeamSection from '../components/home/TeamSection';
// import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="-mt-20">
        <HeroSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <ManuvooSection />
      <CTASection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </Layout>
  );
};

export default Index;
