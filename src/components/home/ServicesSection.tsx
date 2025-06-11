import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Zap,
  Target,
  Lightbulb,
  Code,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "../../context/ThemeContext";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  featured?: boolean;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "group p-6 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden",
        isDark
          ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
          : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl",
        "flex flex-col items-center text-center"
      )}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 mb-4 p-3 rounded-full bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20 transition-colors duration-300">
        {React.cloneElement(service.icon as React.ReactElement, {
          className: "w-6 h-6 text-pollinate-yellow",
        })}
      </div>

      <div
        className={cn(
          "text-xl font-bold mb-2 transition-colors duration-300",
          isDark
            ? "text-white group-hover:text-pollinate-yellow"
            : "text-pollinate-black group-hover:text-pollinate-yellow"
        )}
      >
        {service.title}
      </div>
      <div
        className={cn(
          "text-sm font-medium mb-4 transition-colors duration-300",
          isDark
            ? "text-gray-400 group-hover:text-gray-300"
            : "text-gray-600 group-hover:text-gray-700"
        )}
      >
        {service.description}
      </div>

      {/* Learn More Link */}
      <Link
        to="/services"
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 mt-auto",
          "text-pollinate-yellow hover:text-yellow-400"
        )}
      >
        Learn More
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services: Service[] = [
    {
      title: "Strategic Planning & Research",
      description:
        "Deep industry analysis and strategic planning to understand your unique challenges and craft tailored solutions that deliver essential value.",
      category: "Strategy",
      featured: true,
      icon: <Target className="w-8 h-8 text-pollinate-yellow" />,
    },
    {
      title: "Solution Synthesis & Design",
      description:
        "Synthesizing research insights into cohesive, industry-specific solutions with intuitive interfaces that prioritize essential functionality.",
      category: "Design",
      icon: <Lightbulb className="w-8 h-8 text-pollinate-yellow" />,
    },
    {
      title: "Custom Software Development",
      description:
        "Building robust, scalable applications tailored to your specific business needs using cutting-edge technologies and best practices.",
      category: "Development",
      featured: true,
      icon: <Code className="w-8 h-8 text-pollinate-yellow" />,
    },
    {
      title: "Digital Transformation",
      description:
        "Modernizing legacy systems and processes to improve efficiency, reduce costs, and enhance user experience across your organization.",
      category: "Strategy",
      icon: <Rocket className="w-8 h-8 text-pollinate-yellow" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Enhancing application speed, reliability, and scalability through advanced optimization techniques and modern architecture patterns.",
      category: "Development",
      icon: <Zap className="w-8 h-8 text-pollinate-yellow" />,
    },
    {
      title: "Consulting & Advisory",
      description:
        "Expert guidance on technology strategy, architecture decisions, and best practices to ensure your projects succeed from conception to deployment.",
      category: "Strategy",
      icon: <Star className="w-8 h-8 text-pollinate-yellow" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isDark ? "bg-pollinate-black" : "bg-gray-200"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16",
            isVisible ? "animate-fadeInUp" : "opacity-0"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
            Our Services
          </div>
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Comprehensive Solutions for
            <span className="text-pollinate-yellow"> Your Business</span>
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            From strategic planning to execution, we provide end-to-end
            solutions that drive growth and innovation for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            isVisible ? "animate-fadeInUp" : "opacity-0"
          )}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={cn(
            "text-center mt-16",
            isVisible ? "animate-fadeInUp" : "opacity-0"
          )}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-pollinate-yellow to-yellow-500 text-pollinate-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            View All Services
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
