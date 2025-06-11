import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import reginaldImage from "../../assets/reginald Nkabinde.png";

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isDark ? "bg-pollinate-black" : "bg-gray-200"
    )}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pollinate-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              About Pollinate IQ
            </div>

            <h2 className={cn(
                "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
                isDark
                  ? "from-white via-gray-100 to-gray-300"
                  : "from-pollinate-black via-gray-800 to-gray-600"
            )}>
              Empowering African{" "}
              <span className="text-pollinate-yellow">Innovation</span>
            </h2>

            <p className={cn(
              "text-xl leading-relaxed mb-6",
                  isDark ? "text-gray-300" : "text-gray-600"
            )}>
              Founded in 2018, Pollinate IQ emerged from a bold vision to redefine the narrative 
              around African innovation and showcase our continent's technological prowess.
              </p>

            <p className={cn(
              "text-lg leading-relaxed mb-8",
                  isDark ? "text-gray-400" : "text-gray-500"
            )}>
              We craft digital experiences that transform businesses and communities, combining 
              global best practices with local insights to deliver solutions that drive real impact.
            </p>

              <Link
                to="/about"
                className={cn(
                  "group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300",
                  "bg-gradient-to-r from-pollinate-yellow to-yellow-500 text-pollinate-black",
                "hover:shadow-[0_8px_25px_rgba(255,188,63,0.4)] hover:-translate-y-2"
                )}
              >
                Learn More About Us
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
          </motion.div>

          {/* Right column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={cn(
              "relative rounded-2xl overflow-hidden border",
              isDark ? "border-white/20" : "border-gray-200"
            )}>
              <img
                src={reginaldImage}
                alt="Reginald Nkabinde - Founder and CTO"
                className="w-full h-[500px] object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pollinate-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white font-medium text-sm">
                    "Changing the narrative around African innovation"
                  </p>
                  <p className="text-pollinate-yellow text-xs mt-1">
                    — Reginald Nkabinde, Founder and CTO
                  </p>
                </div>
            </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-pollinate-yellow/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
