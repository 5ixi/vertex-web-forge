
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient orb effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              <span className="text-primary">Transform</span> Your Online Presence
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 fade-in-delay-1">
              We craft stunning, high-performing websites that elevate your brand and 
              drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-delay-2">
              <Button className="purple-glow text-white px-8 py-6 h-auto bg-primary hover:bg-primary/90">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-white px-8 py-6 h-auto border-primary/50 hover:bg-primary/10">
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center gap-3 text-white/60 mt-4 fade-in-delay-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/80"></div>
                <div className="w-8 h-8 rounded-full bg-primary/60"></div>
                <div className="w-8 h-8 rounded-full bg-primary/40"></div>
              </div>
              <span className="text-sm">Trusted by 100+ businesses</span>
            </div>
          </div>
          
          <div className="hidden lg:block relative fade-in-delay-2">
            <div className="relative p-3 bg-secondary/30 border border-primary/20 rounded-lg overflow-hidden backdrop-blur-sm purple-glow">
              <div className="bg-background/70 rounded-md overflow-hidden">
                <div className="flex items-center gap-1 px-4 py-2 border-b border-primary/10">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 ml-2 h-4 bg-gray-700/50 rounded"></div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="w-1/3 h-6 bg-primary/40 rounded"></div>
                  <div className="w-full h-3 bg-gray-700/50 rounded"></div>
                  <div className="w-full h-3 bg-gray-700/50 rounded"></div>
                  <div className="w-2/3 h-3 bg-gray-700/50 rounded"></div>
                  <div className="py-6"></div>
                  <div className="w-full h-20 bg-gray-800/50 rounded"></div>
                  <div className="w-1/4 h-6 bg-primary/30 rounded mt-4"></div>
                </div>
              </div>
              <div className="absolute -right-3 -bottom-3 bg-primary/80 text-white text-xs font-bold px-4 py-2 rounded-full">
                New
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
