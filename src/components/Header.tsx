
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleGetExpertAdvice = () => {
    const phoneNumber = "918054068520";
    const message = "Hello! I'd like to get expert advice for my financial needs.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-montserrat font-bold text-primary">
              Pawan Capital
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">Home</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-secondary transition-colors">About</a>
            <a href="#services" className="font-medium text-gray-700 hover:text-secondary transition-colors">Services</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-secondary transition-colors">Contact</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+918054068520">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden lg:inline">+91 8054068520</span>
              </Button>
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={handleGetExpertAdvice}
            >
              Get Expert Advice
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pt-2 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">Home</a>
              <a href="#about" className="font-medium text-gray-700 hover:text-secondary transition-colors" onClick={toggleMenu}>About</a>
              <a href="#services" className="font-medium text-gray-700 hover:text-secondary transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#contact" className="font-medium text-gray-700 hover:text-secondary transition-colors" onClick={toggleMenu}>Contact</a>
              
              <div className="flex flex-col space-y-2 pt-2">
                <a href="tel:+918054068520" className="w-full">
                  <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                    <Phone size={16} />
                    <span>+91 8054068520</span>
                  </Button>
                </a>
                <Button 
                  className="bg-primary hover:bg-primary/90 w-full"
                  onClick={handleGetExpertAdvice}
                >
                  Get Expert Advice
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
