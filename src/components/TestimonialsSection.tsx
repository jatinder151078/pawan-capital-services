
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Kumar",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "The best service for ITR filing! Quick and hassle-free. Highly recommended!",
  },
  {
    name: "Neha Sharma",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Trusted property valuation service! Helped me with bank loans smoothly.",
  },
  {
    name: "Rajesh Verma",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5,
    text: "Got my MSME registration done quickly. Very professional and knowledgeable team!",
  },
  {
    name: "Priya Patel",
    location: "Ahmedabad",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 5,
    text: "Excellent service for CA reports. Timely delivery and accurate documentation.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it — hear from our satisfied clients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-medium">Based on 100+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
