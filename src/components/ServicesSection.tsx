
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  delayClass 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delayClass: string;
}) => (
  <Card className={`bg-secondary/50 border-primary/20 backdrop-blur-sm ${delayClass}`}>
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-white/70">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-primary"><Check size={16} /></span>
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 text-white">
        Learn More
      </Button>
    </CardFooter>
  </Card>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative bg-background">
      {/* Gradient effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">Our Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto fade-in-delay-1">
            We offer tailored website solutions to meet your specific needs and help your business thrive online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>}
            title="Website Design"
            description="Beautiful, modern website designs that captivate your audience."
            features={[
              "Custom design tailored to your brand",
              "Responsive for all devices",
              "User experience focused",
              "Modern aesthetics and animations"
            ]}
            delayClass="fade-in"
          />
          
          <ServiceCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>}
            title="E-commerce Solutions"
            description="Powerful online stores that drive sales and growth."
            features={[
              "Secure payment processing",
              "Inventory management",
              "Mobile-optimized shopping",
              "Customer account management"
            ]}
            delayClass="fade-in-delay-1"
          />
          
          <ServiceCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>}
            title="Optimization Services"
            description="Improve your website's speed and search ranking."
            features={[
              "Performance optimization",
              "SEO improvements",
              "Accessibility compliance",
              "Analytics implementation"
            ]}
            delayClass="fade-in-delay-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
