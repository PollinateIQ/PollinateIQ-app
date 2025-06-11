import React from "react";
import { useTheme } from "../context/ThemeContext";
import LogoSvg from "../assets/Logo.svg";

interface LogoProps {
  forceLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ forceLight = false }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const shouldInvert = forceLight || isDark;

  return (
    <div className="flex items-center">
      <div className="mr-2">
        <img
          src={LogoSvg}
          alt="Pollinate IQ Logo"
          className={`w-9 h-8 ${shouldInvert ? "filter invert" : ""}`}
        />
      </div>
      <div
        className={`font-heading font-bold text-xl tracking-wide ${
          shouldInvert ? "text-white" : "text-gray-900"
        }`}
      >
        POLLINATE IQ
      </div>
    </div>
  );
};

export default Logo;
