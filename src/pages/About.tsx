import React from 'react';
import Layout from '../components/Layout';
import { AboutCompany } from '../components/about';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Layout>
      <div className="-mt-20">
        <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - Full viewport height */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-black/60"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.3),rgba(0,0,0,0.7))]" />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              About Pollinate IQ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Empowering African{" "}
              <span className="text-pollinate-yellow">Innovation</span>{" "}
              Through Digital Excellence
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
              Learn more about our mission, values, and the passionate team behind our success in transforming businesses across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
      <AboutCompany />
      </div>
    </Layout>
  );
};

export default About;
