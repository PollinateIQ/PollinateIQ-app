import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-pollinate-yellow" />,
      title: "Email Us",
      details: "hello@pollinateiq.com",
      link: "mailto:hello@pollinateiq.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-pollinate-yellow" />,
      title: "Call Us",
      details: "+27 11 123 4567",
      link: "tel:+27111234567",
    },
    {
      icon: <MapPin className="w-6 h-6 text-pollinate-yellow" />,
      title: "Visit Us",
      details: "Johannesburg, South Africa",
      link: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isDark ? "bg-pollinate-black" : "bg-gray-200"
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,188,63,0.6) 0%, rgba(255,188,63,0) 70%)",
          top: mousePosition.y - 250,
          left: mousePosition.x - 250,
          transition: "top 0.5s ease-out, left 0.5s ease-out",
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
            Get In Touch
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
              isDark
                ? "from-white via-gray-100 to-gray-300"
                : "from-pollinate-black via-gray-800 to-gray-600"
            )}
          >
            Ready to Start Your
            <span className="text-pollinate-yellow"> Next Project?</span>
          </h2>

          <p
            className={cn(
              "text-xl leading-relaxed max-w-3xl mx-auto",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Let's discuss how we can help transform your business with
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={cn(
                "group p-6 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden text-center",
                isDark
                  ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
                  : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl"
              )}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 mb-4 p-3 rounded-full bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20 transition-colors duration-300 mx-auto w-fit">
                {info.icon}
              </div>

              <h3
                className={cn(
                  "text-xl font-bold mb-2 transition-colors duration-300",
                  isDark
                    ? "text-white group-hover:text-pollinate-yellow"
                    : "text-pollinate-black group-hover:text-pollinate-yellow"
                )}
              >
                {info.title}
              </h3>

              <p
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isDark
                    ? "text-gray-400 group-hover:text-gray-300"
                    : "text-gray-600 group-hover:text-gray-700"
                )}
              >
                {info.details}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className={cn(
              "group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300",
              "bg-gradient-to-r from-pollinate-yellow to-yellow-500 text-pollinate-black",
              "hover:shadow-[0_8px_25px_rgba(255,188,63,0.4)] hover:-translate-y-2",
              "border-2 border-transparent hover:border-pollinate-yellow/20"
            )}
          >
            Start Your Project
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

export default ContactSection;
