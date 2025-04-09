
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-primary w-8 h-8 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="font-bold text-xl md:text-2xl text-white tracking-tight">Vertex</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
            <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
          </ul>
          <Button className="purple-glow bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border py-4 fade-in">
          <ul className="flex flex-col container mx-auto px-4">
            <li><a href="#services" className="block py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#pricing" className="block py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
            <li><a href="#contact" className="block py-2 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            <li className="mt-2">
              <Button className="w-full purple-glow bg-primary hover:bg-primary/90" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
