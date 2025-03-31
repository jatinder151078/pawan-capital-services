
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I file my ITR online with Pawan Capital Services?",
    answer: "Filing your ITR with us is simple. Choose our ITR filing service, share your required documents through WhatsApp or email, and our experts will process your return. We'll keep you updated throughout the process and provide the final acknowledgment once completed."
  },
  {
    question: "Is my data safe with you?",
    answer: "Absolutely. We prioritize data security and confidentiality. All your information is protected with industry-standard encryption and is only used for the specific service you've requested. We never share your data with third parties without your explicit consent."
  },
  {
    question: "How long does property valuation take?",
    answer: "Our property valuation typically takes 2-3 business days depending on the complexity and location of the property. For urgent requirements, we also offer expedited services that can be completed within 24 hours."
  },
  {
    question: "Do you provide consultation before service selection?",
    answer: "Yes, we offer free initial consultations to understand your specific needs and recommend the most suitable services. You can schedule a consultation through WhatsApp or by calling our customer service number."
  },
  {
    question: "What documents do I need for MSME registration?",
    answer: "For MSME registration, you'll need your business registration documents, PAN card, Aadhaar card, address proof of the business, bank account details, and details about your business activities and investment. Our team will guide you through the specific requirements based on your business type."
  },
  {
    question: "Do you serve clients outside of India?",
    answer: "While our services are primarily designed for clients in India, we do provide certain international services such as CA Reports for Foreign Files which are often required for immigration purposes. Contact us with your specific requirements, and we'll let you know how we can assist."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Have Questions? We've Got Answers</h2>
        <p className="section-subtitle">
          Find answers to commonly asked questions about our services
        </p>

        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                  <span className="text-primary font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
