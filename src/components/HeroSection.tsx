
import React from 'react';
import { Button } from '@/components/ui/button';
import EmailCapture from './EmailCapture';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-grid pt-20 overflow-hidden">
      {/* Gradient orb effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Web Development <span className="gradient-text">Reinvented</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 fade-in-delay-1">
            Elevate your online presence with Vertex. We create stunning, high-performance websites 
            that drive results and leave lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 fade-in-delay-2">
            <Button className="purple-glow text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90">
              View Our Work
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 h-auto border-primary/50 text-white hover:bg-primary/10">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 mx-auto max-w-lg fade-in-delay-3">
            <EmailCapture />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-delay-3">
        <a href="#services" className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
