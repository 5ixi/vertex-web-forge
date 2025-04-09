
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PricingCard = ({ 
  title, 
  price, 
  features, 
  isPopular, 
  delayClass 
}: { 
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delayClass: string;
}) => {
  const [purchasing, setPurchasing] = useState(false);

  const handlePurchase = () => {
    setPurchasing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for your purchase!",
        description: "We'll contact you shortly to get started on your project.",
      });
      setPurchasing(false);
    }, 1500);
  };

  return (
    <Card className={`relative bg-secondary/50 border-primary/20 backdrop-blur-sm ${delayClass} ${isPopular ? 'border-primary/50 purple-glow' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className={isPopular ? 'pt-8' : ''}>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-white/70">Perfect for {title.toLowerCase()} websites</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-white/70 ml-1">one-time</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary"><Check size={16} /></span>
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handlePurchase}
          disabled={purchasing}
          className={`w-full ${isPopular ? 'bg-primary hover:bg-primary/90 purple-glow' : 'bg-primary/80 hover:bg-primary/70'}`}
        >
          {purchasing ? 'Processing...' : 'Purchase Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative bg-background">
      {/* Gradient effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">Transparent Pricing</h2>
          <p className="text-white/70 max-w-2xl mx-auto fade-in-delay-1">
            Choose the perfect package for your business needs. All prices include design, development, and 3 months of support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="499"
            features={[
              "1-5 page website",
              "Responsive design",
              "Contact form",
              "Basic SEO setup",
              "1 round of revisions",
              "3 months support"
            ]}
            delayClass="fade-in"
          />
          
          <PricingCard
            title="Professional"
            price="999"
            features={[
              "5-10 page website",
              "Advanced responsive design",
              "Contact form with validation",
              "Comprehensive SEO setup",
              "3 rounds of revisions",
              "Content management system",
              "6 months support"
            ]}
            isPopular={true}
            delayClass="fade-in-delay-1"
          />
          
          <PricingCard
            title="Enterprise"
            price="1,999"
            features={[
              "10+ page website",
              "Premium responsive design",
              "Advanced forms & features",
              "Full SEO optimization",
              "Unlimited revisions",
              "E-commerce functionality",
              "Custom admin dashboard",
              "12 months priority support"
            ]}
            delayClass="fade-in-delay-2"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm max-w-2xl mx-auto fade-in-delay-3">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact us</a> for a tailored quote based on your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
