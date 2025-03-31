
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const handleGetExpertAdvice = () => {
    // Open WhatsApp with a message
    const phoneNumber = "918054068520";
    const message = "Hello! I'd like to get expert advice for my financial needs.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleStartService = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                7+ Years of Experience
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
              Reliable Financial & Tax Solutions You Can Trust
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Pawan Capital Services – Serving Clients Across India with Expertise & Transparency
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto"
                onClick={handleGetExpertAdvice}
              >
                Get Expert Advice Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 px-6 py-6 h-auto"
                onClick={handleStartService}
              >
                Start Your Service
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>1000+ Satisfied Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Nationwide Online Services</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Financial Consultant" 
                className="relative z-10 rounded-lg shadow-xl max-w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
              <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-white shadow-lg rounded-lg p-4 z-20">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Verified Consultant</p>
                    <p className="text-xs text-gray-500">100% Secure & Trusted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
