import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Clock, Zap, Check, Target, Globe, Lightbulb, Rocket, DollarSign, Heart, Wheat, BookOpen, ShoppingCart, Battery } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import africaVisionImage from "../../assets/18.png";

const AboutCompany: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-pollinate-yellow" />,
      value: "6+",
      label: "Years Experience",
      description: "Delivering excellence since 2018"
    },
    {
      icon: <Zap className="w-6 h-6 text-pollinate-yellow" />,
      value: "500+",
      label: "Projects Completed",
      description: "Successful digital transformations"
    },
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5 text-pollinate-yellow" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver future-ready solutions"
    },
    {
      icon: <Globe className="w-5 h-5 text-pollinate-yellow" />,
      title: "Global Impact",
      description: "Showcasing African excellence on the world stage"
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-pollinate-yellow" />,
      title: "Creative Solutions",
      description: "Transforming complex challenges into elegant digital experiences"
    },
    {
      icon: <Rocket className="w-5 h-5 text-pollinate-yellow" />,
      title: "Growth Focused",
      description: "Every solution is designed to accelerate your business growth"
    }
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
    <div ref={sectionRef} className={cn(
      "py-8 md:py-12 relative overflow-hidden",
      isDark ? "bg-pollinate-black" : "bg-gray-200"
    )}>
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-pollinate-yellow/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-pollinate-yellow/15 to-transparent rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company story */}
          <div
            className={cn(
              isVisible ? "animate-fadeIn" : "opacity-0",
              "space-y-8"
            )}
          >
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              About Our Company
            </div>

            <h2
              className={cn(
                "text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r bg-clip-text text-transparent",
                isDark
                  ? "from-white via-gray-100 to-gray-300"
                  : "from-pollinate-black via-gray-800 to-gray-600"
              )}
            >
              Welcome to{" "}
              <span className="text-pollinate-yellow">Pollinate IQ</span>
            </h2>

            <div
              className={cn(
                "relative p-8 rounded-2xl border-l-4 border-l-pollinate-yellow backdrop-blur-sm",
                isDark
                  ? "bg-gradient-to-r from-pollinate-yellow/10 to-white/5 border border-white/10"
                  : "bg-gradient-to-r from-pollinate-yellow/5 to-white/80 border border-gray-200 shadow-lg"
              )}
            >
              <div className="absolute top-4 left-4 w-3 h-3 bg-pollinate-yellow rounded-full animate-pulse"></div>
              <blockquote
                className={cn(
                  "text-xl font-medium italic leading-relaxed pl-4",
                  isDark ? "text-gray-200" : "text-gray-700"
                )}
              >
                "Building is a process that takes time. We build you solutions
                using tech so we can give you back that time, something
                priceless... Time."
              </blockquote>
              <cite
                className={cn(
                  "block text-base mt-4 pl-4 font-bold",
                  isDark ? "text-pollinate-yellow" : "text-pollinate-black"
                )}
              >
                — Reginald Nkabinde, Founder and CTO
              </cite>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <p
                className={cn(
                  "text-xl leading-relaxed",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}
              >
                Founded in 2018 by{" "}
                <span className="font-semibold text-pollinate-yellow">
                  Reginald Nkabinde
                </span>
                , Pollinate IQ emerged from a bold vision to{" "}
                <span className="font-semibold text-pollinate-yellow">
                  redefine the narrative
                </span>{" "}
                around African innovation and showcase our continent's technological prowess.
              </p>

              <p
                className={cn(
                  "text-lg leading-relaxed",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}
              >
                We're not just building digital solutions – we're crafting experiences that 
                transform businesses and communities. Our team combines global best practices 
                with local insights to deliver solutions that drive real impact and sustainable growth.
              </p>

              <p
                className={cn(
                  "text-lg leading-relaxed font-medium",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}
              >
                From startups to enterprises, we partner with visionary leaders who believe 
                in the power of technology to create positive change.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className={cn(
                "text-xl font-bold mb-6",
                isDark ? "text-white" : "text-pollinate-black"
              )}>
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={cn(
                      "group p-4 rounded-xl border transition-all duration-300 hover:scale-105",
                      isDark
                        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-pollinate-yellow/30"
                        : "bg-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-lg"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20 transition-colors duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className={cn(
                          "font-semibold mb-1 group-hover:text-pollinate-yellow transition-colors duration-300",
                          isDark ? "text-white" : "text-pollinate-black"
                        )}>
                          {value.title}
                        </h4>
                        <p className={cn(
                          "text-sm leading-relaxed",
                          isDark ? "text-gray-400" : "text-gray-600"
                        )}>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats and image */}
          <div
            className={cn(
              isVisible ? "animate-fadeIn" : "opacity-0",
              "space-y-8"
            )}
          >
            <div className="mt-12 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-orange-400">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Team Collaboration - Building Africa's Digital Future Together"
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: "center center" }}
                />
                {/* Image overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t transition-opacity duration-300",
                    isDark
                      ? "from-black/50 via-transparent to-transparent"
                      : "from-black/30 via-transparent to-transparent"
                  )}
                ></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-semibold text-pollinate-black">
                    Our Amazing Team
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "group p-6 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer",
                    isDark
                      ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
                      : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl",
                    "flex flex-col items-center text-center relative overflow-hidden"
                  )}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 mb-4 p-3 rounded-full bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20 transition-colors duration-300">
                    {stat.icon}
                  </div>
                    <div
                      className={cn(
                      "text-4xl font-bold mb-2 transition-colors duration-300",
                      isDark
                        ? "text-white group-hover:text-pollinate-yellow"
                        : "text-pollinate-black group-hover:text-pollinate-yellow"
                      )}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={cn(
                      "text-sm font-medium mb-2 transition-colors duration-300",
                        isDark
                        ? "text-gray-300 group-hover:text-gray-200"
                        : "text-gray-700 group-hover:text-gray-800"
                      )}
                    >
                      {stat.label}
                    </div>
                  <div
                    className={cn(
                      "text-xs text-center leading-relaxed transition-colors duration-300",
                      isDark
                        ? "text-gray-500 group-hover:text-gray-400"
                        : "text-gray-500 group-hover:text-gray-600"
                    )}
                  >
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission statement with better typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 rounded-2xl border relative overflow-hidden",
                isDark
                  ? "bg-gradient-to-br from-pollinate-yellow/10 via-pollinate-yellow/5 to-transparent border-pollinate-yellow/20"
                  : "bg-gradient-to-br from-pollinate-yellow/5 via-white to-gray-50 border-pollinate-yellow/30"
              )}
            >
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-pollinate-yellow/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-pollinate-yellow/20 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-pollinate-yellow rounded-full animate-pulse"></div>
                  <span className={cn(
                    "text-sm font-semibold uppercase tracking-wider",
                    isDark ? "text-pollinate-yellow" : "text-pollinate-black"
                  )}>
                    Our Mission
                  </span>
                </div>
                
                <blockquote
                  className={cn(
                    "text-xl font-medium leading-relaxed mb-4",
                    isDark ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  "To pollinate businesses across Africa and beyond with intelligent, 
                  innovative solutions that drive sustainable growth, foster digital transformation, 
                  and showcase the exceptional talent of our continent."
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-pollinate-yellow"></div>
                  <cite
                    className={cn(
                      "text-sm font-semibold",
                      isDark ? "text-pollinate-yellow" : "text-pollinate-black"
                    )}
                  >
                    Pollinate IQ Vision
                  </cite>
                </div>
            </div>
            </motion.div>
          </div>
        </div>

        {/* African Leadership Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* African Vision Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={africaVisionImage}
                  alt="Africa - Our Vision"
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t transition-opacity duration-300",
                  isDark
                    ? "from-black/60 via-transparent to-transparent"
                    : "from-black/40 via-transparent to-transparent"
                )}>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-pollinate-yellow/90 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-semibold text-pollinate-black">
                    Leading Africa's Digital Future
                  </span>
                </div>
              </div>
            </div>

            {/* Vision Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm border border-pollinate-yellow/20">
                <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
                Our African Vision
              </div>

              <h3 className={cn(
                "text-3xl md:text-4xl font-bold leading-tight",
                isDark ? "text-white" : "text-pollinate-black"
              )}>
                Pioneering Africa's{" "}
                <span className="text-pollinate-yellow">Digital Renaissance</span>
              </h3>

              <div className="space-y-6">
                <p className={cn(
                  "text-lg leading-relaxed",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  Africa is not just our home – it's our inspiration. We believe the continent holds 
                  untapped potential that can reshape the global digital landscape. Our mission extends 
                  beyond borders, but our roots remain firmly planted in African soil.
                </p>

                <p className={cn(
                  "text-lg leading-relaxed",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  From Cape Town to Cairo, Lagos to Nairobi, we're building bridges between 
                  traditional African wisdom and cutting-edge technology. Every solution we create 
                  carries the spirit of Ubuntu – we are because we are.
                </p>

                <div className={cn(
                  "p-6 rounded-xl border-l-4 border-l-pollinate-yellow",
                  isDark
                    ? "bg-gradient-to-r from-pollinate-yellow/10 to-white/5 border border-white/10"
                    : "bg-gradient-to-r from-pollinate-yellow/5 to-white/80 border border-gray-200"
                )}>
                  <p className={cn(
                    "text-lg font-medium italic",
                    isDark ? "text-pollinate-yellow" : "text-pollinate-black"
                  )}>
                    "We're not just building for Africa – we're building FROM Africa, 
                    showcasing our continent's brilliance to the world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industries We Transform */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              Research & Development Focus
            </div>
            <h3 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isDark ? "text-white" : "text-pollinate-black"
            )}>
              Pipeline Industries &{" "}
              <span className="text-pollinate-yellow">Future Solutions</span>
            </h3>
            <p className={cn(
              "text-lg max-w-3xl mx-auto",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              While we currently focus on our flagship project Manuvoo, we're actively researching 
              and developing solutions across multiple industries to drive Africa's digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Services",
                description: "Researching innovative banking, fintech, and payment solutions for Africa",
                icon: <DollarSign className="w-8 h-8 text-pollinate-yellow" />,
                status: "Research Phase"
              },
              {
                title: "Healthcare & MedTech",
                description: "Developing digital health solutions for rural clinics to urban hospitals",
                icon: <Heart className="w-8 h-8 text-pollinate-yellow" />,
                status: "R&D Pipeline"
              },
              {
                title: "Agriculture & AgriTech",
                description: "Creating smart farming solutions to feed Africa's growing population",
                icon: <Wheat className="w-8 h-8 text-pollinate-yellow" />,
                status: "Concept Phase"
              },
              {
                title: "Education & EdTech",
                description: "Building platforms to democratize quality education across Africa",
                icon: <BookOpen className="w-8 h-8 text-pollinate-yellow" />,
                status: "Planning Stage"
              },
              {
                title: "E-commerce & Retail",
                description: "Designing Africa's next-generation digital marketplace infrastructure",
                icon: <ShoppingCart className="w-8 h-8 text-pollinate-yellow" />,
                status: "Research Phase"
              },
              {
                title: "Energy & Sustainability",
                description: "Innovating clean energy solutions for Africa's sustainable future",
                icon: <Battery className="w-8 h-8 text-pollinate-yellow" />,
                status: "Early Research"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group p-6 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer",
                  isDark
                    ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
                    : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl"
                )}
              >
                <div className="mb-4 p-3 rounded-full bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20 transition-colors duration-300 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h4 className={cn(
                  "text-xl font-bold mb-3 group-hover:text-pollinate-yellow transition-colors duration-300",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  {industry.title}
                </h4>
                <p className={cn(
                  "text-sm leading-relaxed mb-4",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}>
                  {industry.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-xs font-semibold px-3 py-1 rounded-full",
                    isDark
                      ? "bg-pollinate-yellow/20 text-pollinate-yellow"
                      : "bg-pollinate-yellow/10 text-pollinate-black"
                  )}>
                    {industry.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Reach Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className={cn(
            "p-12 rounded-3xl border relative overflow-hidden",
            isDark
              ? "bg-gradient-to-br from-pollinate-yellow/10 via-pollinate-yellow/5 to-transparent border-pollinate-yellow/20"
              : "bg-gradient-to-br from-pollinate-yellow/5 via-white to-gray-50 border-pollinate-yellow/30"
          )}>
            {/* Background decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-pollinate-yellow/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-pollinate-yellow/15 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
                <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
                Global Impact
              </div>
              
              <h3 className={cn(
                "text-3xl md:text-4xl font-bold mb-6",
                isDark ? "text-white" : "text-pollinate-black"
              )}>
                From Africa to the World
              </h3>
              
              <p className={cn(
                "text-lg leading-relaxed mb-8 max-w-4xl mx-auto",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                While our heart beats for Africa, our solutions reach every corner of the globe. 
                We've successfully delivered projects across 15+ countries, proving that African 
                innovation knows no boundaries. Our clients span from Fortune 500 companies to 
                emerging startups, all united by a shared vision of digital excellence.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {[
                  { number: "15+", label: "Countries Served" },
                  { number: "3", label: "Continents" },
                  { number: "50+", label: "Global Partners" },
                  { number: "24/7", label: "Support Coverage" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={cn(
                      "text-3xl md:text-4xl font-bold mb-2",
                      isDark ? "text-pollinate-yellow" : "text-pollinate-black"
                    )}>
                      {stat.number}
                    </div>
                    <div className={cn(
                      "text-sm font-medium",
                      isDark ? "text-gray-400" : "text-gray-600"
                    )}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <blockquote className={cn(
                "text-xl font-medium italic leading-relaxed",
                isDark ? "text-gray-200" : "text-gray-800"
              )}>
                "We're not just exporting solutions – we're exporting African excellence, 
                one innovative project at a time."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `,
        }}
      />
    </div>
  );
};

export default AboutCompany;
