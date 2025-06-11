import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

// Import client logo images
import clientLogo1 from "../../assets/3.png";
import clientLogo2 from "../../assets/4.png";
import clientLogo3 from "../../assets/5.png";
import clientLogo4 from "../../assets/6.png";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  image,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "group p-8 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden",
        isDark
          ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:bg-white/15 hover:border-pollinate-yellow/30"
          : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-pollinate-yellow/50 hover:shadow-xl"
      )}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="text-pollinate-yellow fill-pollinate-yellow"
          />
        ))}
      </div>

      <blockquote
        className={cn(
          "mb-6 italic relative z-10 transition-colors duration-300",
          isDark
            ? "text-gray-300 group-hover:text-gray-200"
            : "text-gray-700 group-hover:text-gray-800"
        )}
      >
        "{quote}"
      </blockquote>

      <div className="flex items-center relative z-10">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4
            className={cn(
              "font-bold transition-colors duration-300",
              isDark
                ? "text-white group-hover:text-pollinate-yellow"
                : "text-pollinate-black group-hover:text-pollinate-yellow"
            )}
          >
            {author}
          </h4>
          <p
            className={cn(
              "text-sm transition-colors duration-300",
              isDark
                ? "text-gray-400 group-hover:text-gray-300"
                : "text-gray-600 group-hover:text-gray-700"
            )}
          >
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // For the word-by-word animation effect
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Reset animation state when testimonial changes
    setAnimationComplete(false);

    // Auto-advance testimonials every 8 seconds
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const testimonials = [
    {
      quote:
        "Pollinate IQ transformed our digital presence beyond our expectations. Their comprehensive approach to our website redesign, SEO optimization, and social media strategy resulted in a 65% increase in qualified leads and 40% boost in online sales within four months. The team's expertise and dedication are unmatched.",
      author: "Amanda Richardson",
      company: "Richardson Financial Services",
              image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote:
        "Working with Pollinate IQ was a game-changer for our startup. They didn't just create a brand identity; they crafted our entire digital story. From logo design to our mobile app development, every touchpoint reflects our vision perfectly. Our user engagement increased by 85% post-launch.",
      author: "Marcus Thompson",
      company: "EcoTech Innovations",
              image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote:
        "The e-commerce platform developed by Pollinate IQ revolutionized our business operations. The intuitive admin panel, seamless payment integration, and mobile-responsive design have increased our conversion rates by 55%. Their ongoing support and optimization recommendations continue to drive growth.",
      author: "Priya Sharma",
      company: "Artisan Marketplace",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote:
        "Pollinate IQ's digital marketing expertise helped us reach new heights. Their data-driven approach to our PPC campaigns and content strategy generated a 300% ROI in the first quarter. They truly understand how to connect brands with their target audience in meaningful ways.",
      author: "James Mitchell",
      company: "Mitchell & Associates Law Firm",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote:
        "From concept to execution, Pollinate IQ delivered excellence at every stage. Their custom CRM solution streamlined our operations and improved client communication significantly. The team's technical expertise combined with their understanding of our industry needs made all the difference.",
      author: "Lisa Chen",
      company: "Premier Real Estate Group",
              image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      quote:
        "The mobile app developed by Pollinate IQ has transformed how our customers interact with our services. The user experience is flawless, and the backend analytics provide invaluable insights. Our customer retention improved by 45% since the app launch.",
      author: "Robert Davis",
      company: "FitLife Wellness Centers",
              image:
          "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const clientLogos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4];

  // Function to generate a random rotation value for the 3D effect
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isDark ? "bg-pollinate-black" : "bg-gray-200"
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,188,63,0.6) 0%, rgba(255,188,63,0) 70%)",
          top: mousePosition.y - 250,
          left: mousePosition.x - 250,
          transition: "top 0.5s ease-out, left 0.5s ease-out",
          pointerEvents: "none",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
            Client Testimonials
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
              isDark
                ? "from-white via-gray-100 to-gray-300"
                : "from-pollinate-black via-gray-800 to-gray-600"
            )}
          >
            What Our Clients
            <span className="text-pollinate-yellow"> Say</span>
          </h2>

          <p
            className={cn(
              "max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with Pollinate IQ.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Image side with 3D rotation effect */}
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.image}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: index === activeIndex ? 1 : 0.7,
                        scale: index === activeIndex ? 1 : 0.95,
                        z: index === activeIndex ? 0 : -100,
                        rotate: index === activeIndex ? 0 : randomRotateY(),
                        zIndex:
                          index === activeIndex
                            ? 40
                            : testimonials.length + 2 - index,
                        y: index === activeIndex ? [0, -20, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full rounded-3xl object-cover shadow-xl"
                        style={{ objectPosition: "center top" }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Text content side with word-by-word animation */}
            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={activeIndex}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-pollinate-yellow fill-pollinate-yellow"
                    />
                  ))}
                </div>

                <h3
                  className={cn(
                    "text-2xl font-bold",
                    isDark ? "text-white" : "text-pollinate-black"
                  )}
                >
                  {testimonials[activeIndex].author}
                </h3>

                <p
                  className={cn(
                    "text-sm mb-8",
                    isDark ? "text-gray-400" : "text-pollinate-darkGray"
                  )}
                >
                  {testimonials[activeIndex].company}
                </p>

                <motion.p
                  className={cn(
                    "text-lg leading-relaxed",
                    isDark ? "text-gray-300" : "text-pollinate-darkGray"
                  )}
                >
                  {testimonials[activeIndex].quote
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(8px)",
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.03 * index,
                        }}
                        onAnimationComplete={() => {
                          if (
                            index ===
                            testimonials[activeIndex].quote.split(" ").length -
                              1
                          ) {
                            setAnimationComplete(true);
                          }
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                </motion.p>
              </motion.div>

              <div className="flex gap-4 pt-8">
                <button
                  onClick={prevTestimonial}
                  className={cn(
                    "group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                    isDark
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-gray-100 hover:bg-gray-200"
                  )}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft
                    className={cn(
                      "h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1",
                      isDark ? "text-white" : "text-pollinate-black"
                    )}
                  />
                </button>
                <button
                  onClick={nextTestimonial}
                  className={cn(
                    "group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                    isDark
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-gray-100 hover:bg-gray-200"
                  )}
                  aria-label="Next testimonial"
                >
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
                      isDark ? "text-white" : "text-pollinate-black"
                    )}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center">
              <span
                className={cn(
                  "text-5xl font-bold mr-3",
                  isDark ? "text-white" : "text-pollinate-black"
                )}
              >
                13+
              </span>
              <span
                className={cn(
                  "text-xl",
                  isDark ? "text-gray-300" : "text-pollinate-darkGray"
                )}
              >
                Notable Clients
              </span>
            </div>
          </div>

          {/* Client logos with horizontal scrolling */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Define the scrolling animation */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
              @keyframes scrollRightToLeft {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              
              .logo-scroll {
                animation: scrollRightToLeft 40s linear infinite;
                white-space: nowrap;
                display: inline-flex;
              }
              
              .logo-scroll-reverse {
                animation: scrollRightToLeft 35s linear infinite;
                white-space: nowrap;
                display: inline-flex;
              }
            `,
              }}
            />

            {/* First row of logos */}
            <div className="flex items-center mb-8 overflow-hidden">
              <div
                className="flex space-x-16 logo-scroll"
                style={{
                  minWidth: "200%",
                }}
              >
                {/* Duplicate logos for continuous scrolling */}
                {[...clientLogos, ...clientLogos, ...clientLogos].map(
                  (logo, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img
                        src={logo}
                        alt={`Client Logo ${(index % clientLogos.length) + 1}`}
                        className="h-12 md:h-16 object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Second row of logos (scrolling at different speed) */}
            <div className="flex items-center overflow-hidden">
              <div
                className="flex space-x-16 logo-scroll-reverse"
                style={{
                  minWidth: "200%",
                }}
              >
                {/* Duplicate logos for continuous scrolling */}
                {[...clientLogos, ...clientLogos, ...clientLogos].map(
                  (logo, index) => (
                    <div key={index} className="flex-shrink-0">
                      <img
                        src={logo}
                        alt={`Client Logo ${(index % clientLogos.length) + 1}`}
                        className="h-12 md:h-16 object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
