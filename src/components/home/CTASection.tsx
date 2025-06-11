import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const CTASection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={cn(
      "py-20 md:py-28 relative overflow-hidden",
      isDark 
        ? "bg-gradient-to-br from-pollinate-black via-gray-900 to-pollinate-black" 
        : "bg-gradient-to-br from-gray-100 via-white to-gray-50"
    )}>
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pollinate-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pollinate-yellow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
            READY TO GET STARTED?
          </div>
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
            isDark
              ? "from-white via-gray-100 to-gray-300"
              : "from-pollinate-black via-gray-800 to-gray-600"
          )}>
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pollinate-yellow to-orange-500">
              Amazing
            </span>{' '}
            Together
          </h2>
          <p className={cn(
            "text-xl leading-relaxed max-w-3xl mx-auto mb-12",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Transform your business with our cutting-edge digital solutions. 
            From web development to hospitality management, we're here to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={cn(
              "rounded-3xl p-8 border backdrop-blur-sm",
              isDark
                ? "bg-gradient-to-br from-white/10 to-white/5 border-white/10"
                : "bg-gradient-to-br from-white to-gray-50 border-gray-200"
            )}
          >
            <h3 className={cn(
              "text-2xl font-bold mb-4",
              isDark ? "text-white" : "text-pollinate-black"
            )}>
              Start Your Digital Journey
            </h3>
            <p className={cn(
              "mb-8 leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              Ready to elevate your business? Let's discuss your project and create a 
              tailored solution that drives results and exceeds expectations.
            </p>
            <div className="space-y-4">
              <Link
                to="/contact"
                className="w-full bg-pollinate-yellow text-pollinate-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className={cn(
                "w-full border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300",
                isDark
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-gray-300 text-pollinate-black hover:bg-gray-100"
              )}>
                Schedule Free Consultation
              </button>
            </div>
          </motion.div>

          {/* Right side - Contact options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={cn(
              "text-2xl font-bold mb-6",
              isDark ? "text-white" : "text-pollinate-black"
            )}>
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              <a
                href="tel:+27813256906"
                className={cn(
                  "flex items-center p-4 rounded-xl border transition-all duration-300 group",
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                )}
              >
                <div className="w-12 h-12 bg-pollinate-yellow/20 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-pollinate-yellow" />
                </div>
                <div>
                  <p className={cn(
                    "font-semibold",
                    isDark ? "text-white" : "text-pollinate-black"
                  )}>Call Us</p>
                  <p className={cn(
                    "text-sm",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>+27 81 325 6906</p>
                </div>
                <ArrowRight className={cn(
                  "w-5 h-5 ml-auto group-hover:text-pollinate-yellow group-hover:translate-x-1 transition-all duration-300",
                  isDark ? "text-gray-400" : "text-gray-500"
                )} />
              </a>

              <a
                href="mailto:info@pollinateiq.co.za"
                className={cn(
                  "flex items-center p-4 rounded-xl border transition-all duration-300 group",
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                )}
              >
                <div className="w-12 h-12 bg-pollinate-yellow/20 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-pollinate-yellow" />
                </div>
                <div>
                  <p className={cn(
                    "font-semibold",
                    isDark ? "text-white" : "text-pollinate-black"
                  )}>Email Us</p>
                  <p className={cn(
                    "text-sm",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>info@pollinateiq.co.za</p>
                </div>
                <ArrowRight className={cn(
                  "w-5 h-5 ml-auto group-hover:text-pollinate-yellow group-hover:translate-x-1 transition-all duration-300",
                  isDark ? "text-gray-400" : "text-gray-500"
                )} />
              </a>

              <a
                href="https://wa.me/27813256906?text=Hi%20Pollinate%20IQ!%20I'm%20interested%20in%20your%20digital%20services."
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "flex items-center p-4 rounded-xl border transition-all duration-300 group hover:scale-105",
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-pollinate-yellow/30"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-pollinate-yellow/30"
                )}
              >
                <div className="w-12 h-12 bg-pollinate-yellow/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-pollinate-yellow/30 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-pollinate-yellow group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className={cn(
                    "font-semibold",
                    isDark ? "text-white" : "text-pollinate-black"
                  )}>WhatsApp</p>
                  <p className={cn(
                    "text-sm",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>Chat with us instantly</p>
                </div>
                <ArrowRight className={cn(
                  "w-5 h-5 ml-auto group-hover:text-pollinate-yellow group-hover:translate-x-1 transition-all duration-300",
                  isDark ? "text-gray-400" : "text-gray-500"
                )} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-pollinate-yellow mb-2">50+</div>
            <div className={cn(
              "text-sm",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pollinate-yellow mb-2">24/7</div>
            <div className={cn(
              "text-sm",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pollinate-yellow mb-2">100%</div>
            <div className={cn(
              "text-sm",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pollinate-yellow mb-2">5★</div>
            <div className={cn(
              "text-sm",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 