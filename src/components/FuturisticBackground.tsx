import React from "react";
import { useTheme } from "../context/ThemeContext";

const FuturisticBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Rod configurations
  const rods = [
    { width: 3, height: 180, top: 5, left: 10, delay: 0, rotation: -20 },
    { width: 2, height: 220, top: 15, left: 80, delay: 1, rotation: 35 },
    { width: 4, height: 150, top: 50, left: 20, delay: 2, rotation: -50 },
    { width: 2, height: 200, top: 75, left: 65, delay: 3, rotation: 40 },
    { width: 3, height: 170, top: 35, left: 45, delay: 4, rotation: -70 },
    { width: 2, height: 190, top: 10, left: 55, delay: 5, rotation: 55 },
    { width: 3, height: 160, top: 65, left: 85, delay: 6, rotation: -15 },
    { width: 2, height: 210, top: 25, left: 95, delay: 7, rotation: 80 },
    { width: 3, height: 140, top: 90, left: 40, delay: 8, rotation: -65 },
    { width: 2, height: 180, top: 45, left: 5, delay: 9, rotation: 25 },
  ];

  // Card configurations
  const cards = [
    { width: 100, height: 140, top: 10, left: 25, delay: 0, rotation: 20 },
    { width: 80, height: 110, top: 60, left: 75, delay: 2, rotation: -30 },
    { width: 120, height: 160, top: 30, left: 50, delay: 4, rotation: 40 },
    { width: 90, height: 120, top: 80, left: 20, delay: 6, rotation: -15 },
    { width: 110, height: 150, top: 20, left: 85, delay: 8, rotation: 50 },
    { width: 70, height: 100, top: 45, left: 15, delay: 10, rotation: -40 },
    { width: 95, height: 130, top: 70, left: 60, delay: 12, rotation: 25 },
    { width: 85, height: 115, top: 5, left: 70, delay: 14, rotation: -55 },
  ];

  // Circle configurations
  const circles = [
    { size: 60, top: 12, left: 35, delay: 0 },
    { size: 80, top: 55, left: 85, delay: 2 },
    { size: 40, top: 75, left: 10, delay: 4 },
    { size: 100, top: 25, left: 60, delay: 6 },
    { size: 50, top: 85, left: 45, delay: 8 },
    { size: 70, top: 40, left: 25, delay: 10 },
    { size: 45, top: 5, left: 90, delay: 12 },
    { size: 90, top: 65, left: 50, delay: 14 },
  ];

  // Hexagon configurations
  const hexagons = [
    { width: 60, height: 52, top: 18, left: 12, delay: 0 },
    { width: 80, height: 70, top: 70, left: 70, delay: 3 },
    { width: 50, height: 44, top: 35, left: 80, delay: 6 },
    { width: 100, height: 88, top: 50, left: 35, delay: 9 },
    { width: 70, height: 61, top: 10, left: 65, delay: 12 },
    { width: 55, height: 48, top: 80, left: 55, delay: 15 },
    { width: 85, height: 75, top: 60, left: 5, delay: 18 },
    { width: 65, height: 57, top: 25, left: 40, delay: 21 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background container with gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? `radial-gradient(circle at 30% 20%, rgba(40, 40, 60, 0.6) 0%, transparent 40%),
               radial-gradient(circle at 70% 70%, rgba(50, 50, 70, 0.6) 0%, transparent 40%),
               radial-gradient(circle at 10% 90%, rgba(30, 30, 50, 0.5) 0%, transparent 50%),
               linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%)`
            : `radial-gradient(circle at 30% 20%, rgba(200, 200, 220, 0.4) 0%, transparent 40%),
               radial-gradient(circle at 70% 70%, rgba(210, 210, 230, 0.4) 0%, transparent 40%),
               radial-gradient(circle at 10% 90%, rgba(190, 190, 210, 0.3) 0%, transparent 50%),
               linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f4 100%)`,
        }}
      />

      {/* Pattern container */}
      <div
        className={`absolute inset-0 ${isDark ? "opacity-30" : "opacity-40"}`}
      >
        {/* Rods */}
        {rods.map((rod, index) => (
          <div
            key={`rod-${index}`}
            className="absolute"
            style={
              {
                width: `${rod.width}px`,
                height: `${rod.height}px`,
                top: `${rod.top}%`,
                left: `${rod.left}%`,
                background: isDark
                  ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)",
                animation: `float 15s infinite ease-in-out`,
                animationDelay: `${rod.delay}s`,
                transform: `rotate(${rod.rotation}deg)`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Cards */}
        {cards.map((card, index) => (
          <div
            key={`card-${index}`}
            className="absolute rounded-2xl backdrop-blur-sm"
            style={
              {
                width: `${card.width}px`,
                height: `${card.height}px`,
                top: `${card.top}%`,
                left: `${card.left}%`,
                background: isDark
                  ? "rgba(255, 255, 255, 0.03)"
                  : "rgba(0, 0, 0, 0.05)",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.08)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
                animation: `float 20s infinite ease-in-out`,
                animationDelay: `${card.delay}s`,
                transform: `rotate(${card.rotation}deg)`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Circles */}
        {circles.map((circle, index) => (
          <div
            key={`circle-${index}`}
            className="absolute rounded-full"
            style={
              {
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                top: `${circle.top}%`,
                left: `${circle.left}%`,
                background: isDark
                  ? "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(0, 0, 0, 0.08) 0%, transparent 70%)",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "1px solid rgba(0, 0, 0, 0.15)",
                animation: `orbit 25s infinite ease-in-out`,
                animationDelay: `${circle.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Hexagons */}
        {hexagons.map((hexagon, index) => (
          <div
            key={`hexagon-${index}`}
            className="absolute"
            style={
              {
                width: `${hexagon.width}px`,
                height: `${hexagon.height}px`,
                top: `${hexagon.top}%`,
                left: `${hexagon.left}%`,
                background: isDark
                  ? "rgba(255, 255, 255, 0.02)"
                  : "rgba(0, 0, 0, 0.04)",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.06)"
                  : "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "15px / 12px",
                animation: `spin 30s infinite linear`,
                animationDelay: `${hexagon.delay}s`,
              } as React.CSSProperties
            }
          >
            <div
              className="absolute"
              style={{
                content: '""',
                width: "inherit",
                height: "inherit",
                borderRadius: "inherit",
                background: "inherit",
                border: "inherit",
                top: "-1px",
                left: "-1px",
                transform: "rotate(60deg)",
              }}
            />
            <div
              className="absolute"
              style={{
                content: '""',
                width: "inherit",
                height: "inherit",
                borderRadius: "inherit",
                background: "inherit",
                border: "inherit",
                top: "-1px",
                left: "-1px",
                transform: "rotate(-60deg)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0%, 100% {
                transform: translateY(0px) rotate(var(--rotation, 0deg));
              }
              50% {
                transform: translateY(-20px) rotate(var(--rotation, 0deg));
              }
            }
            
            @keyframes orbit {
              0% {
                transform: translateX(0px) translateY(0px);
              }
              25% {
                transform: translateX(10px) translateY(-10px);
              }
              50% {
                transform: translateX(0px) translateY(-20px);
              }
              75% {
                transform: translateX(-10px) translateY(-10px);
              }
              100% {
                transform: translateX(0px) translateY(0px);
              }
            }
            
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `,
        }}
      />
    </div>
  );
};

export default FuturisticBackground;
