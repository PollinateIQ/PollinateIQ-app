import React, { useState } from 'react';
import { Check, Sparkles, Crown, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  tier: 'basic' | 'standard' | 'premium' | 'custom';
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  tier
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Determine which icon to use based on the tier
  const getIcon = () => {
    switch(tier) {
      case 'basic': return Rocket;
      case 'standard': return Crown;
      case 'premium': return Sparkles;
      case 'custom': return Zap;
      default: return Sparkles;
    }
  };
  
  const Icon = getIcon();
  
  return (
    <div 
      className={cn(
        "p-6 md:p-8 rounded-xl transition-all duration-500",
        "transform hover:-translate-y-2",
        isDark 
          ? popular 
            ? "bg-white/15 backdrop-blur-md border-2 border-pollinate-yellow relative" 
            : "bg-white/10 backdrop-blur-md border border-white/10" 
          : popular 
            ? "bg-white border-2 border-pollinate-yellow relative" 
            : "bg-white border border-gray-100",
        "shadow-lg hover:shadow-xl h-full flex flex-col"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <span className="absolute -top-4 right-4 bg-pollinate-yellow text-xs px-4 py-1.5 rounded-full font-medium shadow-lg">
          Most Popular
        </span>
      )}
      
      <div className="flex items-center mb-4">
        <div className={cn(
          "p-3 rounded-full mr-4",
          isDark 
            ? "bg-pollinate-yellow/20" 
            : "bg-pollinate-yellow/10"
        )}>
          <Icon size={24} className={cn("text-pollinate-yellow", isHovered && "animate-pulse")} />
        </div>
        <h3 className={cn(
          "text-xl font-bold",
          isDark ? "text-white" : "text-pollinate-black"
        )}>{title}</h3>
      </div>
      
      <div className="mb-4 flex items-end">
        <span className={cn(
          "text-4xl font-bold",
          isDark ? "text-white" : "text-pollinate-black"
        )}>R{price}</span>
        <span className={cn(
          "ml-2 mb-1 text-sm",
          isDark ? "text-gray-400" : "text-gray-500"
        )}>/ project</span>
      </div>

      <p className={cn(
        "mb-6 text-sm",
        isDark ? "text-gray-300" : "text-gray-600"
      )}>
        {description}
      </p>
      
      <div className={cn(
        "mb-8 py-4 px-2 rounded-lg flex-grow",
        isDark ? "bg-white/5" : "bg-gray-50"
      )}>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={cn(
                "p-1 rounded-full mr-2 mt-0.5 flex-shrink-0",
                isDark ? "bg-pollinate-yellow/20" : "bg-pollinate-yellow/10"
              )}>
                <Check size={14} className="text-pollinate-yellow" />
              </div>
              <span className={cn(
                "text-sm",
                isDark ? "text-gray-300" : "text-gray-700"
              )}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link 
        to="/contact" 
        className={cn(
          "block text-center py-3.5 px-6 rounded-lg font-medium transition-all duration-300 mt-auto",
          "transform hover:scale-105",
          popular 
            ? isDark 
              ? "bg-pollinate-yellow text-pollinate-black hover:shadow-lg" 
              : "bg-pollinate-yellow text-pollinate-black hover:shadow-lg"
            : isDark 
              ? "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20" 
              : "border border-pollinate-black hover:bg-pollinate-black hover:text-white"
        )}
      >
        Get Started
      </Link>
    </div>
  );
};

const PricingPlans: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const pricingOptions = [
    {
      title: "Starter",
      price: "1,950",
      description: "Perfect for small businesses just getting started with digital marketing.",
      tier: "basic" as const,
      features: [
        "Logo Design (3 Concepts)",
        "Basic Website (3 Pages)",
        "Mobile Responsive Design",
        "Social Media Setup",
        "Contact Form Integration",
        "1 Month Support",
        "Google Analytics Setup"
      ]
    },
    {
      title: "Growth",
      price: "5,950",
      description: "Ideal for established businesses looking to expand their digital presence.",
      tier: "standard" as const,
      features: [
        "Custom Website (5 Pages)",
        "Mobile Responsive Design",
        "Advanced SEO Setup",
        "Content Management System",
        "Social Media Integration",
        "Email Newsletter Setup",
        "Google Analytics Setup",
        "6 Months Priority Support",
        "Performance Optimization"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "12,950",
      description: "Comprehensive solution for businesses requiring advanced digital capabilities.",
      tier: "premium" as const,
      features: [
        "Custom Website (10+ Pages)",
        "E-commerce Functionality",
        "Advanced SEO & Analytics",
        "Content Management System",
        "Social Media Strategy",
        "Email Marketing Automation",
        "Customer Portal Integration",
        "12 Months Priority Support",
        "Performance Optimization",
        "Monthly Strategy Sessions"
      ]
    },
    {
      title: "Custom Solution",
      price: "Custom",
      description: "Tailored solutions for unique business requirements and complex projects.",
      tier: "custom" as const,
      features: [
        "Tailored Digital Strategy",
        "Custom Development",
        "Enterprise Integration",
        "API Development",
        "Advanced Security Features",
        "Dedicated Project Manager",
        "Ongoing Maintenance",
        "Priority Support",
        "Regular Strategy Reviews",
        "Scalable Infrastructure"
      ]
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <PricingCard 
              key={index}
              title={option.title}
              price={option.price}
              description={option.description}
              features={option.features}
              popular={option.popular}
              tier={option.tier}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className={cn(
            "mb-6 max-w-2xl mx-auto",
            isDark ? "text-gray-400" : "text-gray-600"
          )}>
            All prices are in South African Rand (ZAR). Need a custom solution? Contact us for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
