import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram, Mail } from "lucide-react";
import { SiTiktok, SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pollinate-black via-gray-900 to-pollinate-black text-white pt-12 pb-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pollinate-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Column 1 - Brand */}
          <div className="lg:pr-8 text-center">
            <div className="mb-6 transform scale-150 flex justify-center">
              <Logo forceLight={true} />
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed text-lg mx-auto max-w-sm">
              Transforming ideas into digital excellence. We craft innovative solutions that elevate your brand and drive meaningful growth in the digital landscape.
            </p>
            
            <div className="flex justify-center space-x-6 mt-2">
              <a
                href="https://tiktok.com/@pollinateiq"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-gray-300 hover:text-pollinate-yellow transition-colors"
              >
                <SiTiktok size={32} />
              </a>
              <a
                href="https://instagram.com/pollinateiq"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-pollinate-yellow transition-colors"
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://facebook.com/pollinateiq"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-pollinate-yellow transition-colors"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://x.com/pollinateiq"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="text-gray-300 hover:text-pollinate-yellow transition-colors"
              >
                <SiX size={32} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-pollinate-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-pollinate-yellow transition-colors"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-pollinate-yellow transition-colors"
                >
                  Pricing
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-pollinate-yellow transition-colors"
                >
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-pollinate-yellow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-pollinate-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-3">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pollinate-yellow transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-pollinate-yellow text-black font-semibold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail size={18} />
                <span>Subscribe</span>
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">
              Join 10,000+ subscribers who trust our insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-6 mt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-sm">
                © 2025 Pollinate IQ. Crafted with passion for digital
                excellence.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-pollinate-yellow transition-all duration-300 hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-pollinate-yellow transition-all duration-300 hover:underline underline-offset-4"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-pollinate-yellow transition-all duration-300 hover:underline underline-offset-4"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
