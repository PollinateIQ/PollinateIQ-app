import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const PricingHero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-pollinate-yellow opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-pollinate-yellow opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className={cn(
              "uppercase tracking-wider text-sm font-medium",
              "text-pollinate-yellow"
            )}>
              PRICING & PACKAGES
            </span>
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-6 relative inline-block",
            isDark ? "text-white" : "text-pollinate-black"
          )}>
            <span className="relative z-10">Transparent & Flexible Pricing</span>
            <span className="absolute -bottom-3 left-0 w-full h-4 bg-pollinate-yellow opacity-20 transform -skew-x-12"></span>
          </h1>
          
          <p className={cn(
            "text-xl max-w-3xl mx-auto mb-8",
            isDark ? "text-gray-300" : "text-pollinate-darkGray"
          )}>
            Choose the perfect package for your business needs. All our pricing is transparent with no hidden costs or surprises.
          </p>
          
          <div className={cn(
            "inline-flex items-center px-5 py-2.5 rounded-full",
            isDark ? "bg-white/10" : "bg-gray-100"
          )}>
            <span className={cn(
              "mr-2",
              isDark ? "text-white" : "text-gray-700"
            )}>All packages include free consultation</span>
            <span className="bg-pollinate-yellow text-xs px-2 py-0.5 rounded-full">New</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
