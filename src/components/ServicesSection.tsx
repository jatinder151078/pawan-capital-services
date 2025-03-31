
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Home, FileCheck, Building, Heart, Car, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Income Tax Return (ITR) Filing",
    icon: FileText,
    description: "Hassle-free ITR filing with expert assistance to maximize savings.",
    cta: "File Now",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Property Valuation",
    icon: Home,
    description: "Get accurate property valuation reports for loans, sales, or disputes.",
    cta: "Request Valuation",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "CA Report for Foreign Files",
    icon: FileCheck,
    description: "Professional CA reports for immigration, loans, and foreign compliance.",
    cta: "Get Report",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "MSME Registration",
    icon: Building,
    description: "Register your business as an MSME and unlock benefits.",
    cta: "Register Now",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Health Insurance",
    icon: Heart,
    description: "Find the best health insurance plans for you and your family.",
    cta: "Get Insured",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    title: "Vehicle Insurance",
    icon: Car,
    description: "Secure your vehicle with the best insurance policies.",
    cta: "Get a Quote",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Our Trusted Services</h2>
        <p className="section-subtitle">
          Professional solutions tailored to your specific financial needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card rounded-xl p-6 ${service.color} border border-gray-100 shadow-sm`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${service.color}`}>
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5 w-full justify-between">
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
            <p className="text-lg font-medium text-gray-900">Need a Custom Consultation?</p>
            <Button className="bg-primary hover:bg-primary/90 px-6">
              Chat with an Expert Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
