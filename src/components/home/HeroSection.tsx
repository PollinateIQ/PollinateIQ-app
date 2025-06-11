import React, { useState, useEffect } from "react";
import { ArrowRight, MousePointer2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.01;
    const moveY = (clientY - window.innerHeight / 2) * 0.01;
    setMousePosition({ x: moveX, y: moveY });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Hero Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate(${mousePosition.x * 1.5}px, ${
              mousePosition.y * 1.5 - scrollPosition * 0.08
            }px) scale(${1 + scrollPosition * 0.0003})`,
            transition: "transform 0.15s ease-out",
            filter: "brightness(0.7)",
            willChange: "transform", // Optimize for animations
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
          style={{
            opacity: 0.8 + scrollPosition * 0.001,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.3),rgba(0,0,0,0.7))]" />
      </div>

      {/* No floating elements - removed as requested */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div
            className="flex items-center gap-2 mb-6 backdrop-blur-sm bg-black/10 px-4 py-2 rounded-full inline-flex"
            style={{
              transform: `translateY(${scrollPosition * 0.1}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <div className="h-1 w-12 bg-pollinate-yellow rounded animate-pulse" />
            <span className="text-pollinate-yellow font-medium">
              Digital Agency 2025
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white"
            style={{
              transform: `translateY(${scrollPosition * 0.05}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pollinate-yellow to-white animate-gradient-x drop-shadow-[0_5px_15px_rgba(255,188,63,0.3)]">
              Digital Products
            </span>
            <span className="block text-pollinate-yellow mt-2 animate-fade-in-up drop-shadow-[0_5px_15px_rgba(255,188,63,0.2)]">
              For Future
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-200 backdrop-blur-sm bg-black/10 p-4 rounded-lg"
            style={{
              transform: `translateY(${scrollPosition * 0.02}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            Empower Your Brand's Digital Presence with AI-Driven Solutions and
            Next-Gen Technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className={cn(
                "group bg-pollinate-yellow text-pollinate-black font-medium py-4 px-8 rounded-lg",
                "hover:shadow-[0_0_20px_rgba(255,188,63,0.3)] transition-all duration-300",
                "animate-fade-in-up delay-300 relative overflow-hidden"
              )}
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>

            <Link
              to="/portfolio"
              className={cn(
                "group border border-white/30 text-white font-medium py-4 px-8 rounded-lg",
                "hover:border-pollinate-yellow hover:text-pollinate-yellow transition-all duration-300",
                "backdrop-blur-sm animate-fade-in-up delay-400",
                "flex items-center"
              )}
            >
              <MousePointer2
                className="mr-2 group-hover:-translate-y-1 transition-transform duration-300"
                size={18}
              />
              Explore Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-pollinate-yellow rounded-full mt-2 animate-scroll" />
          </div>
          <ChevronDown className="text-pollinate-yellow mt-1" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
