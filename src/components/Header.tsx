import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? isDark
            ? "bg-pollinate-black/90 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
            : "bg-white/95 backdrop-blur-sm shadow-md py-3 border-b border-gray-100"
          : "bg-transparent py-5",
        isDark && !scrolled
          ? "text-white"
          : isDark
          ? "text-white"
          : scrolled
          ? "text-pollinate-black"
          : "text-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="z-50 relative group"
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              className={cn(
                "absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300",
                isDark ? "bg-white/5" : "bg-pollinate-yellow/5"
              )}
            ></div>
            <Logo forceLight={!scrolled || isDark} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              // { path: "/pricing", label: "Pricing" },
              { path: "/about", label: "About" },
              // { path: "/portfolio", label: "Portfolio" },
              { path: "/contact", label: "Contact" },
            ].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center",
                    "hover:bg-pollinate-yellow/10 hover:text-pollinate-yellow",
                    isActive && "text-pollinate-yellow",
                    isDark && !isActive && "text-white",
                    !isDark && scrolled && !isActive && "text-pollinate-black",
                    !isDark && !scrolled && "text-white"
                  )}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {isActive && (
                    <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-pollinate-yellow rounded-full"></div>
                  )}
                  {item.label}
                  {hoveredItem === item.path && (
                    <div className="absolute -inset-1 rounded-lg bg-white/5 -z-10 animate-pulse"></div>
                  )}
                </Link>
              );
            })}
            <a
              href="https://wa.me/27813256906?text=Hi%20Pollinate%20IQ!%20I'm%20interested%20in%20your%20digital%20services."
              target="_blank"
              rel="noreferrer"
              className={cn(
                "ml-2 px-4 py-2 rounded-lg flex items-center font-medium transition-all duration-300 relative group",
                "hover:shadow-lg hover:-translate-y-0.5 hover:scale-105",
                isDark
                  ? "bg-pollinate-yellow text-pollinate-black hover:bg-yellow-600 hover:text-white"
                  : scrolled
                  ? "bg-pollinate-yellow text-pollinate-black hover:bg-yellow-600 hover:text-white"
                  : "bg-pollinate-yellow/90 text-pollinate-black hover:bg-pollinate-yellow"
              )}
              onMouseEnter={() => setHoveredItem("whatsapp")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
              {hoveredItem === "whatsapp" && (
                <div className="absolute inset-0 rounded-lg bg-white/10 -z-10 animate-pulse"></div>
              )}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden z-50 p-2 rounded-lg transition-all duration-300",
              isDark
                ? "text-white hover:bg-white/10"
                : !scrolled
                ? "text-white hover:bg-black/10"
                : "text-pollinate-black hover:bg-gray-100"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500",
          isDark ? "bg-pollinate-black/95" : "bg-black/90",
          "backdrop-blur-md",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-pollinate-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pollinate-yellow/10 rounded-full blur-3xl"></div>

        <nav className="flex flex-col items-center space-y-5 text-xl relative z-10">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            // { path: "/pricing", label: "Pricing" },
            { path: "/about", label: "About" },
            // { path: "/portfolio", label: "Portfolio" },
            { path: "/contact", label: "Contact" },
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={cn(
                  "font-medium text-white transition-all duration-300 px-6 py-2 rounded-lg relative",
                  "hover:text-pollinate-yellow hover:bg-white/5",
                  isActive && "text-pollinate-yellow bg-white/5"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-pollinate-yellow rounded-r-full"></span>
                )}
              </Link>
            );
          })}

          <a
            href="https://wa.me/27813256906?text=Hi%20Pollinate%20IQ!%20I'm%20interested%20in%20your%20digital%20services."
            target="_blank"
            rel="noreferrer"
            className={cn(
              "bg-pollinate-yellow text-pollinate-black px-6 py-3 rounded-lg flex items-center font-medium mt-4 group",
              "hover:bg-yellow-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
