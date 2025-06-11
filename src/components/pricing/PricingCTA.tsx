import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const PricingCTA: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="bg-pollinate-yellow/50 backdrop-blur-sm py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-pollinate-yellow opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-6",
          isDark ? "text-white" : "text-pollinate-black"
        )}>
          Need a Custom Solution?
        </h2>
        <p className={cn(
          "text-lg mb-8 max-w-2xl mx-auto",
          isDark ? "text-gray-800" : "text-pollinate-darkGray"
        )}>
          Our team can create a tailored package that perfectly fits your business requirements and budget.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/contact" 
            className={cn(
              "bg-pollinate-black text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center",
              "shadow-lg"
            )}
          >
            <MessageSquare size={18} className="mr-2" />
            Schedule a Consultation
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center",
              isDark 
                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20" 
                : "border border-pollinate-black hover:bg-pollinate-black hover:text-white"
            )}
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
