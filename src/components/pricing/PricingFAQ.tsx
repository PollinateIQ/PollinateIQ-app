import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={cn(
      "border rounded-lg mb-4 overflow-hidden transition-all duration-300",
      isDark 
        ? isOpen 
          ? "border-pollinate-yellow/30 bg-white/5" 
          : "border-white/10 bg-white/5" 
        : isOpen 
          ? "border-pollinate-yellow/50 bg-white" 
          : "border-gray-200 bg-white"
    )}>
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn(
          "font-medium text-lg",
          isDark ? "text-white" : "text-pollinate-black"
        )}>
          {question}
        </span>
        <span>
          {isOpen ? (
            <ChevronUp className={isDark ? "text-white" : "text-pollinate-black"} />
          ) : (
            <ChevronDown className={isDark ? "text-white" : "text-pollinate-black"} />
          )}
        </span>
      </button>
      <div
        className={cn(
          "px-6 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className={cn(
          "text-base",
          isDark ? "text-gray-300" : "text-gray-700"
        )}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const PricingFAQ: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const faqItems = [
    {
      question: "Do you offer custom pricing for specific projects?",
      answer: "Yes, we understand that every business has unique needs. If our standard packages don't align with your requirements, we're happy to create a custom solution tailored specifically to your project. Please contact us to discuss your needs and get a personalized quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, EFT (Electronic Funds Transfer), and PayPal. For larger projects, we can also arrange flexible payment schedules with installments spread throughout the project timeline."
    },
    {
      question: "Is there a deposit required to start a project?",
      answer: "Yes, we typically require a 50% deposit to commence work on your project. This helps us allocate resources and begin the development process. The remaining balance is due upon project completion, before the final deliverables are handed over."
    },
    {
      question: "What happens if I need additional services after my project is complete?",
      answer: "We offer ongoing support and maintenance packages for all our clients. If you need additional services or modifications after your project is complete, we can provide these at our standard hourly rate or create a new project scope based on your requirements."
    },
    {
      question: "Do your packages include hosting and domain registration?",
      answer: "Our standard packages do not include hosting and domain registration costs. However, we can recommend suitable hosting providers and help you set up your hosting environment for an additional fee. We can also manage the domain registration process on your behalf if needed."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on the scope and complexity of the work. A basic website might take 2-4 weeks, while more complex projects could take 2-3 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 relative inline-block",
            isDark ? "text-white" : "text-pollinate-black"
          )}>
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-pollinate-yellow opacity-20 transform -skew-x-12"></span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg",
            isDark ? "text-gray-300" : "text-pollinate-darkGray"
          )}>
            Find answers to common questions about our pricing and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className={cn(
            "mb-6",
            isDark ? "text-gray-300" : "text-pollinate-darkGray"
          )}>
            Still have questions? We're here to help.
          </p>
          <a 
            href="/contact" 
            className={cn(
              "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300",
              "hover:shadow-lg",
              isDark 
                ? "bg-pollinate-yellow text-pollinate-black" 
                : "bg-pollinate-yellow text-pollinate-black"
            )}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
