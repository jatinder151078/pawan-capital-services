
import React from "react";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">
          Your trusted financial partner for comprehensive solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mt-10">
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Pawan Capital Services is a trusted financial consulting firm based in Sangrur, 
              serving clients across India online. With <span className="font-semibold text-primary">7+ years of experience</span>, 
              we specialize in Income Tax Returns, Property Valuation, CA Reports for Foreign Files, 
              MSME Registration, and Insurance Services.
            </p>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              <span className="font-semibold text-primary">Led by Rajat Garg (Advocate, B.Tech, MBA, LLB)</span>, 
              we ensure professional, legal, and financial expertise under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Verified Consultant</h3>
                  <p className="text-sm text-gray-600">Recognized and trusted expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">7+ Years of Experience</h3>
                  <p className="text-sm text-gray-600">Wealth of knowledge and insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">1000+ Clients Served</h3>
                  <p className="text-sm text-gray-600">Proven track record of satisfaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">100% Online Services</h3>
                  <p className="text-sm text-gray-600">Hassle-free, from anywhere in India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Financial Experts" 
                className="w-full h-full object-cover object-center"
                style={{ height: "400px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-primary font-bold">7+</span>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Years of Excellence</p>
                    <p className="text-sm opacity-90">Trusted Financial Partner</p>
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

export default AboutSection;
