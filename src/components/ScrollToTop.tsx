import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-4 z-50 p-3 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
            theme === "light"
              ? "bg-white/90 border border-gray-200 hover:bg-pollinate-yellow/90"
              : "bg-gray-900/90 border border-gray-600 hover:bg-pollinate-yellow/90"
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp
            className={`w-5 h-5 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
