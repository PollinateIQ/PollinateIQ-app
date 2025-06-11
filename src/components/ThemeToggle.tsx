import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed left-4 bottom-8 z-50 p-3 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        theme === "light"
          ? "bg-white/90 border border-gray-200 hover:bg-pollinate-yellow/90"
          : "bg-gray-900/90 border border-gray-600 hover:bg-pollinate-yellow/90"
      }`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
