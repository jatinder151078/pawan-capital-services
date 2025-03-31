
import React from "react";
import { FileText, Send, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

const steps = [
  {
    icon: FileText,
    title: "Select Service",
    description: "Choose from our wide range of financial solutions.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Send,
    title: "Submit Documents",
    description: "Upload or share necessary documents online.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: CheckSquare,
    title: "Get Your Work Done",
    description: "Our experts handle everything while you relax!",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const HowItWorks = () => {
  const handleStartNow = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">How Our Online Services Work</h2>
        <p className="section-subtitle">
          Simple, transparent process to get your financial tasks completed
        </p>

        <div className="relative mt-16">
          {/* Connect line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block transform -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`flex items-center justify-center h-16 w-16 rounded-full mb-6 ${step.color}`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                <div className="bg-white p-2 rounded-full absolute -top-3 text-primary font-bold">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 px-8 py-6 h-auto text-lg"
            onClick={handleStartNow}
          >
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
