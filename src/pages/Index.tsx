
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
