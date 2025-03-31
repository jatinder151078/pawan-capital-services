
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Let's Get in Touch</h2>
        <p className="section-subtitle">
          Have questions or ready to get started? We're here to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+918054068520" className="text-primary hover:underline">
                      +91 8054068520
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Email</p>
                    <a href="mailto:tallgarg152@gmail.com" className="text-primary hover:underline">
                      tallgarg152@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Location</p>
                    <p className="text-gray-700">Sangrur<br />Serving All Over India Online</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">Working Hours</h4>
                <p className="text-gray-700">Monday to Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  >
                    <option value="">Select a service</option>
                    <option value="itr">Income Tax Return Filing</option>
                    <option value="property">Property Valuation</option>
                    <option value="ca-report">CA Report for Foreign Files</option>
                    <option value="msme">MSME Registration</option>
                    <option value="health">Health Insurance</option>
                    <option value="vehicle">Vehicle Insurance</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 py-6 h-auto">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
