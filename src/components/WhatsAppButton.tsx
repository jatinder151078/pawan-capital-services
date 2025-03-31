
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918054068520"; // WhatsApp number without the + sign
  const message = "Hello! I'm interested in your financial services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-whatsapp flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-pulse-light">
        <MessageCircle className="h-6 w-6" />
      </div>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
