import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star, Zap, Target, Lightbulb, Code, Rocket, CheckCircle, Users, Clock, Shield, Layers, Database, Cloud, Smartphone, Globe, Settings } from 'lucide-react';
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
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
        to="/contact"
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 mt-auto",
          "text-pollinate-yellow hover:text-yellow-400"
        )}
      >
        Get Started
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
};

const ServicesList: React.FC = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Our Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              Our Process
            </div>
            <h3 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isDark ? "text-white" : "text-pollinate-black"
            )}>
              How We{" "}
              <span className="text-pollinate-yellow">Deliver Excellence</span>
            </h3>
            <p className={cn(
              "text-lg max-w-3xl mx-auto",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              Our proven methodology ensures every project is delivered on time, within budget, 
              and exceeds expectations through careful planning and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business needs, challenges, and goals to create a comprehensive project roadmap.",
                icon: <Target className="w-6 h-6 text-pollinate-yellow" />
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Create detailed wireframes, prototypes, and technical specifications with your feedback at every step.",
                icon: <Lightbulb className="w-6 h-6 text-pollinate-yellow" />
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build your solution using agile methodologies with continuous testing and quality assurance.",
                icon: <Code className="w-6 h-6 text-pollinate-yellow" />
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy your solution and provide ongoing support, maintenance, and optimization services.",
                icon: <Rocket className="w-6 h-6 text-pollinate-yellow" />
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative p-6 rounded-2xl border",
                  isDark
                    ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20"
                    : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pollinate-yellow/10 border-2 border-pollinate-yellow/20">
                    <span className="text-lg font-bold text-pollinate-yellow">{process.step}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-pollinate-yellow/10">
                    {process.icon}
                  </div>
                </div>
                <h4 className={cn(
                  "text-xl font-bold mb-3",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  {process.title}
                </h4>
                <p className={cn(
                  "text-sm leading-relaxed",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}>
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              Technology Stack
            </div>
            <h3 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isDark ? "text-white" : "text-pollinate-black"
            )}>
              Cutting-Edge{" "}
              <span className="text-pollinate-yellow">Technologies</span>
            </h3>
            <p className={cn(
              "text-lg max-w-3xl mx-auto",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              We leverage the latest technologies and frameworks to build scalable, 
              secure, and high-performance solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                icon: <Smartphone className="w-8 h-8 text-pollinate-yellow" />,
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
              },
              {
                category: "Backend Development", 
                icon: <Database className="w-8 h-8 text-pollinate-yellow" />,
                technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis"]
              },
              {
                category: "Cloud & DevOps",
                icon: <Cloud className="w-8 h-8 text-pollinate-yellow" />,
                technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]
              },
              {
                category: "Mobile Development",
                icon: <Globe className="w-8 h-8 text-pollinate-yellow" />,
                technologies: ["React Native", "Flutter", "iOS", "Android", "PWA", "Ionic"]
              },
              {
                category: "Data & Analytics",
                icon: <Layers className="w-8 h-8 text-pollinate-yellow" />,
                technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "TensorFlow"]
              },
              {
                category: "Security & Testing",
                icon: <Shield className="w-8 h-8 text-pollinate-yellow" />,
                technologies: ["OAuth", "JWT", "SSL/TLS", "Jest", "Cypress", "Selenium"]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-6 rounded-2xl border",
                  isDark
                    ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20"
                    : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pollinate-yellow/10">
                    {tech.icon}
                  </div>
                  <h4 className={cn(
                    "text-lg font-bold",
                    isDark ? "text-white" : "text-pollinate-black"
                  )}>
                    {tech.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        isDark
                          ? "bg-pollinate-yellow/20 text-pollinate-yellow"
                          : "bg-pollinate-yellow/10 text-pollinate-black"
                      )}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className={cn(
            "p-12 rounded-3xl border relative overflow-hidden",
            isDark
              ? "bg-gradient-to-br from-pollinate-yellow/10 via-pollinate-yellow/5 to-transparent border-pollinate-yellow/20"
              : "bg-gradient-to-br from-pollinate-yellow/5 via-white to-gray-50 border-pollinate-yellow/30"
          )}>
            <div className="absolute top-8 right-8 w-32 h-32 bg-pollinate-yellow/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-pollinate-yellow/15 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
                  <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
                  Why Choose Pollinate IQ
                </div>
                <h3 className={cn(
                  "text-3xl md:text-4xl font-bold mb-6",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  The Pollinate IQ{" "}
                  <span className="text-pollinate-yellow">Advantage</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Users className="w-6 h-6 text-pollinate-yellow" />,
                    title: "Expert Team",
                    description: "Seasoned professionals with deep expertise across multiple technologies and industries."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-pollinate-yellow" />,
                    title: "On-Time Delivery",
                    description: "Proven track record of delivering projects on schedule without compromising quality."
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-pollinate-yellow" />,
                    title: "Security First",
                    description: "Built-in security measures and best practices to protect your data and users."
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-pollinate-yellow" />,
                    title: "Scalable Solutions",
                    description: "Future-proof architectures that grow with your business needs and user base."
                  },
                  {
                    icon: <Settings className="w-6 h-6 text-pollinate-yellow" />,
                    title: "Ongoing Support",
                    description: "Comprehensive maintenance and support services to keep your solutions running smoothly."
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-pollinate-yellow" />,
                    title: "African Excellence",
                    description: "Proudly showcasing African innovation and talent on the global technology stage."
                  }
                ].map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="mb-4 p-3 rounded-full bg-pollinate-yellow/10 w-fit mx-auto">
                      {advantage.icon}
                    </div>
                    <h4 className={cn(
                      "text-lg font-bold mb-3",
                      isDark ? "text-white" : "text-pollinate-black"
                    )}>
                      {advantage.title}
                    </h4>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      isDark ? "text-gray-400" : "text-gray-600"
                    )}>
                      {advantage.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className={cn(
            "text-2xl md:text-3xl font-bold mb-4",
            isDark ? "text-white" : "text-pollinate-black"
          )}>
            Ready to Transform Your{" "}
            <span className="text-pollinate-yellow">Business?</span>
          </h3>
          <p className={cn(
            "text-lg mb-8 max-w-2xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Let's discuss your project and explore how we can help you achieve your digital transformation goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-pollinate-yellow to-yellow-500 text-pollinate-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
