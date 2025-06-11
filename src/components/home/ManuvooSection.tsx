import React from 'react';
import { motion } from 'motion/react';
import { Hotel, Users, Calendar, BarChart3, Shield, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const ManuvooSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const features = [
    {
      icon: Hotel,
      title: "Property Management",
      description: "Complete hotel and property management system with real-time updates"
    },
    {
      icon: Users,
      title: "Guest Experience",
      description: "Enhanced guest journey from booking to checkout with personalized service"
    },
    {
      icon: Calendar,
      title: "Booking & Reservations",
      description: "Seamless booking system with automated confirmations and management"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and analytics for data-driven decisions"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for instant responses and smooth operations"
    }
  ];

  return (
    <section className={cn(
      "py-20 md:py-28 relative overflow-hidden",
      isDark ? "bg-pollinate-black" : "bg-gray-200"
    )}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pollinate-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
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
            HOSPITALITY SOLUTION
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
            isDark
              ? "from-white via-gray-100 to-gray-300"
              : "from-pollinate-black via-gray-800 to-gray-600"
          )}>
            Introducing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pollinate-yellow to-orange-500">
              Manuvooo
            </span>
          </h2>
          <p className={cn(
            "text-xl leading-relaxed max-w-3xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Our flagship hospitality solution - an end-to-end platform that revolutionizes 
            how hotels and hospitality businesses operate, manage guests, and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden",
                isDark
                  ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
                  : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl"
              )}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pollinate-yellow to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className={cn(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDark
                  ? "text-white group-hover:text-pollinate-yellow"
                  : "text-pollinate-black group-hover:text-pollinate-yellow"
              )}>
                {feature.title}
              </h3>
              <p className={cn(
                "leading-relaxed transition-colors duration-300",
                isDark
                  ? "text-gray-400 group-hover:text-gray-300"
                  : "text-gray-600 group-hover:text-gray-700"
              )}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-pollinate-black to-gray-900 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Hospitality Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading hospitality businesses who trust Manuvooo to streamline operations, 
            enhance guest experiences, and boost revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pollinate-yellow text-pollinate-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pollinate-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManuvooSection; 