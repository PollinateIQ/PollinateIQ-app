import React, { useState } from "react";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  popular = false,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Determine which icon to use based on the title
  const getIcon = () => {
    if (title.toLowerCase().includes("bronze")) return Crown;
    if (title.toLowerCase().includes("starter")) return Rocket;
    return Sparkles;
  };

  const Icon = getIcon();

  return (
    <div
      className={cn(
        "group p-6 md:p-8 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden",
        isDark
          ? popular
            ? "bg-gradient-to-br from-white/15 to-white/10 border-pollinate-yellow hover:bg-white/20 hover:border-pollinate-yellow/50"
            : "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
          : popular
          ? "bg-gradient-to-br from-white to-gray-50 border-pollinate-yellow hover:border-pollinate-yellow/70 hover:shadow-2xl"
          : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl"
      )}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {popular && (
        <span className="absolute -top-4 right-4 bg-pollinate-yellow text-xs px-4 py-1.5 rounded-full font-medium shadow-lg">
          Most Popular
        </span>
      )}

      <div className="flex items-center mb-4 relative z-10">
        <div className="p-3 rounded-full bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20 transition-colors duration-300 mr-4">
          <Icon size={24} className="text-pollinate-yellow" />
        </div>
        <h3
          className={cn(
            "text-xl font-bold transition-colors duration-300",
            isDark
              ? "text-white group-hover:text-pollinate-yellow"
              : "text-pollinate-black group-hover:text-pollinate-yellow"
          )}
        >
          {title}
        </h3>
      </div>

      <div className="mb-6 flex items-end">
        <span
          className={cn(
            "text-4xl font-bold",
            isDark ? "text-white" : "text-pollinate-black"
          )}
        >
          R{price}
        </span>
        <span
          className={cn(
            "ml-2 mb-1 text-sm",
            isDark ? "text-gray-400" : "text-gray-500"
          )}
        >
          / project
        </span>
      </div>

      <div
        className={cn(
          "mb-8 py-4 px-2 rounded-lg",
          isDark ? "bg-white/5" : "bg-gray-50"
        )}
      >
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={cn(
                  "p-1 rounded-full mr-2 mt-0.5 flex-shrink-0",
                  isDark ? "bg-pollinate-yellow/20" : "bg-pollinate-yellow/10"
                )}
              >
                <Check size={14} className="text-pollinate-yellow" />
              </div>
              <span className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/contact"
        className={cn(
          "block text-center py-3.5 px-6 rounded-lg font-medium transition-all duration-300",
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

const PricingSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pricingOptions = [
    {
      title: "Logo Design",
      price: "850",
      features: [
        "3 Unique Logo Concepts",
        "Unlimited Revision Rounds",
        "Final Files in All Formats",
        "Brand Style Guide",
        "Copyright Ownership",
        "24/7 Support",
      ],
    },
    {
      title: "Bronze Package",
      price: "5,950",
      features: [
        "Custom Website (5 Pages)",
        "Mobile Responsive Design",
        "Advanced SEO Setup",
        "Contact Form Integration",
        "Social Media Integration",
        "Google Analytics Setup",
        "6 Months Priority Support",
        "Performance Optimization",
      ],
      popular: true,
    },
    {
      title: "Starter Package",
      price: "1,150",
      features: [
        "Social Media Profile Setup",
        "Content Calendar (1 Month)",
        "10 Original Posts",
        "Comprehensive Analytics",
        "Hashtag Research",
        "1 Month Support",
      ],
    },
  ];

  return (
    <section
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isDark ? "bg-pollinate-black" : "bg-gray-200"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
            Transparent Pricing
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
              isDark
                ? "from-white via-gray-100 to-gray-300"
                : "from-pollinate-black via-gray-800 to-gray-600"
            )}
          >
            Our Service
            <span className="text-pollinate-yellow"> Packages</span>
          </h2>

          <p
            className={cn(
              "max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            We create tailored brand experiences that resonate with your
            audience and deliver measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          <div className="md:col-span-3 mb-8 text-center">
            <div
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-full",
                isDark ? "bg-white/10" : "bg-gray-100"
              )}
            >
              <span
                className={cn("mr-2", isDark ? "text-white" : "text-gray-700")}
              >
                All packages include free consultation
              </span>
              <span className="bg-pollinate-yellow text-xs px-2 py-0.5 rounded-full">
                New
              </span>
            </div>
          </div>
          {pricingOptions.map((option, index) => (
            <PricingCard
              key={index}
              title={option.title}
              price={option.price}
              features={option.features}
              popular={option.popular}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p
            className={cn(
              "mb-6 max-w-2xl mx-auto",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Need a custom solution? We offer tailored packages to meet your
            specific requirements.
          </p>
          <Link
            to="/pricing"
            className={cn(
              "inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300",
              "hover:shadow-lg hover:-translate-y-1 transform",
              isDark
                ? "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                : "border border-pollinate-black hover:bg-pollinate-black hover:text-white"
            )}
          >
            View All Pricing Options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
