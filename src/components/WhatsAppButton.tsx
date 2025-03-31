
import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  showNotification?: boolean;
}

const WhatsAppButton = ({ 
  message = "Hello! I'm interested in your financial services.", 
  className = "sticky-whatsapp flex items-center justify-center",
  showNotification = true 
}: WhatsAppButtonProps) => {
  const phoneNumber = "918054068520"; // WhatsApp number without the + sign
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-pulse-light">
        <MessageCircle className="h-6 w-6" />
      </div>
      {showNotification && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          1
        </span>
      )}
    </a>
  );
};

export default WhatsAppButton;
