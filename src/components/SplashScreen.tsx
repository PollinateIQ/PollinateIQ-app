import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  // Variants for container animation
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        when: "afterChildren" 
      }
    }
  };

  // Variants for logo animation
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      scale: 1.2, 
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  // Variants for text animation
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Variants for progress bar
  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%",
      transition: { 
        duration: duration / 1000 - 0.5,
        ease: "linear"
      }
    }
  };

  // Variants for particles
  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (custom: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0.8],
      x: custom * 100,
      y: custom * 70,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
        delay: custom * 0.2
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center",
            isDark ? "bg-pollinate-black" : "bg-white"
          )}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute rounded-full",
                  isDark ? "bg-pollinate-yellow" : "bg-pollinate-yellow"
                )}
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.2
                }}
                variants={particleVariants}
                initial="initial"
                animate="animate"
                custom={(Math.random() - 0.5) * 2}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="mb-6 relative"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className={cn(
              "w-24 h-24 rounded-full flex items-center justify-center",
              isDark ? "bg-white" : "bg-pollinate-black"
            )}>
              <span className={cn(
                "text-4xl font-bold",
                isDark ? "text-pollinate-black" : "text-white"
              )}>
                P
              </span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pollinate-yellow animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-pollinate-yellow animate-ping" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className={cn(
              "text-3xl md:text-4xl font-bold mb-2",
              isDark ? "text-white" : "text-pollinate-black"
            )}>
              Pollinate IQ
            </h1>
            <p className={cn(
              "text-lg opacity-80",
              isDark ? "text-gray-300" : "text-pollinate-darkGray"
            )}>
              Digital Solutions for Growth
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-12 w-64 h-1 bg-gray-200 rounded-full overflow-hidden mt-8">
            <motion.div
              className="h-full bg-pollinate-yellow"
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
