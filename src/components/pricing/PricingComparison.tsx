import React from 'react';
import { Check, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

interface FeatureComparisonProps {
  feature: string;
  starter: boolean;
  growth: boolean;
  enterprise: boolean;
  custom: boolean;
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ 
  feature, 
  starter, 
  growth, 
  enterprise, 
  custom 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const renderCheckmark = (included: boolean) => {
    if (included) {
      return (
        <div className="flex justify-center">
          <div className={cn(
            "p-1 rounded-full",
            isDark ? "bg-pollinate-yellow/20" : "bg-pollinate-yellow/10"
          )}>
            <Check size={16} className="text-pollinate-yellow" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center">
          <X size={16} className={isDark ? "text-gray-500" : "text-gray-400"} />
        </div>
      );
    }
  };

  return (
    <tr className={cn(
      "border-b",
      isDark ? "border-white/10" : "border-gray-200"
    )}>
      <td className={cn(
        "py-4 px-4",
        isDark ? "text-gray-300" : "text-gray-700"
      )}>
        {feature}
      </td>
      <td className="py-4 px-4">{renderCheckmark(starter)}</td>
      <td className="py-4 px-4">{renderCheckmark(growth)}</td>
      <td className="py-4 px-4">{renderCheckmark(enterprise)}</td>
      <td className="py-4 px-4">{renderCheckmark(custom)}</td>
    </tr>
  );
};

const PricingComparison: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    { 
      feature: "Responsive Website Design", 
      starter: true, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Content Management System", 
      starter: false, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "SEO Optimization", 
      starter: true, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Social Media Integration", 
      starter: true, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "E-commerce Functionality", 
      starter: false, 
      growth: false, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Custom API Integration", 
      starter: false, 
      growth: false, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Email Marketing Setup", 
      starter: false, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Analytics Dashboard", 
      starter: false, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Priority Support", 
      starter: false, 
      growth: true, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Dedicated Project Manager", 
      starter: false, 
      growth: false, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Regular Strategy Sessions", 
      starter: false, 
      growth: false, 
      enterprise: true, 
      custom: true 
    },
    { 
      feature: "Custom Development", 
      starter: false, 
      growth: false, 
      enterprise: false, 
      custom: true 
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
            <span className="relative z-10">Compare Our Packages</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-pollinate-yellow opacity-20 transform -skew-x-12"></span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg",
            isDark ? "text-gray-300" : "text-pollinate-darkGray"
          )}>
            See which package best fits your business needs
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className={cn(
            "w-full min-w-full border-collapse",
            isDark ? "bg-white/5 backdrop-blur-md" : "bg-white"
          )}>
            <thead>
              <tr className={cn(
                "border-b",
                isDark ? "border-white/20" : "border-gray-200"
              )}>
                <th className={cn(
                  "py-4 px-4 text-left",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Features
                </th>
                <th className={cn(
                  "py-4 px-4 text-center",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Starter
                </th>
                <th className={cn(
                  "py-4 px-4 text-center",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Growth
                </th>
                <th className={cn(
                  "py-4 px-4 text-center",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Enterprise
                </th>
                <th className={cn(
                  "py-4 px-4 text-center",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Custom
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={cn(
                "border-b",
                isDark ? "border-white/10" : "border-gray-200",
                "bg-pollinate-yellow/10"
              )}>
                <td className={cn(
                  "py-4 px-4 font-medium",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Price
                </td>
                <td className={cn(
                  "py-4 px-4 text-center font-medium",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  R1,950
                </td>
                <td className={cn(
                  "py-4 px-4 text-center font-medium",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  R5,950
                </td>
                <td className={cn(
                  "py-4 px-4 text-center font-medium",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  R12,950
                </td>
                <td className={cn(
                  "py-4 px-4 text-center font-medium",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  Custom
                </td>
              </tr>
              
              {features.map((item, index) => (
                <FeatureComparison 
                  key={index}
                  feature={item.feature}
                  starter={item.starter}
                  growth={item.growth}
                  enterprise={item.enterprise}
                  custom={item.custom}
                />
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <p className={cn(
            "mb-6",
            isDark ? "text-gray-300" : "text-pollinate-darkGray"
          )}>
            Need help choosing the right package? Our team is here to assist you.
          </p>
          <a 
            href="/contact" 
            className={cn(
              "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300",
              "hover:shadow-lg",
              isDark 
                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20" 
                : "border border-pollinate-black hover:bg-pollinate-black hover:text-white"
            )}
          >
            Get Expert Advice
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
