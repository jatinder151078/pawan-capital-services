
import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Pawan Capital</h3>
            <p className="text-gray-400 mb-6">
              Trusted financial consulting firm offering comprehensive solutions across India.
            </p>
            <div className="flex items-center text-secondary">
              <span className="mr-2">✓</span>
              <p>7+ Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Income Tax Return Filing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Property Valuation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  CA Report for Foreign Files
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  MSME Registration
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Insurance Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-1" />
                <a href="tel:+918054068520" className="text-gray-400 hover:text-white transition-colors">
                  +91 8054068520
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-1" />
                <a href="mailto:tallgarg152@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  tallgarg152@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <span className="text-gray-400">
                  Sangrur, Punjab<br />
                  Serving All Over India Online
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Pawan Capital Services. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
