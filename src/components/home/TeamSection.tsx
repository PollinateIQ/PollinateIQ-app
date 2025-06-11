import React, { useState, useRef, useEffect } from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  ChevronDown,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";
// Import the specified images
import image1 from "../../assets/reginald Nkabinde.png";
import image2 from "../../assets/keith.png";
import image3 from "../../assets/Solomon Ramafalo.png";
// Temporarily commented out for debugging
// import AnimatedTestimonialsDemo from '../ui/animated-testimonials-demo';

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  background: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  image,
  background,
  socialLinks,
  index,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "group text-center transition-all duration-700 hover:scale-110 cursor-pointer relative overflow-hidden",
        "flex flex-col items-center max-w-sm mx-auto"
      )}
      style={{
        animationDelay: `${index * 200}ms`,
        animationFillMode: "both",
        animation: "fadeInUp 0.8s ease-out",
      }}
    >
      {/* Circular Image Container with Stunning Effects */}
      <div className="relative mb-8 group-hover:mb-10 transition-all duration-700">
        {/* Outer Glow Ring - Removed animate-pulse to reduce distraction */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pollinate-yellow via-yellow-400 to-pollinate-yellow opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl scale-110"></div>
        
        {/* Main Circular Container */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-pollinate-yellow/50 to-transparent group-hover:border-pollinate-yellow transition-all duration-700 shadow-2xl group-hover:shadow-pollinate-yellow/30">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/20 via-yellow-300/10 to-pollinate-yellow/30"></div>
          
          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            style={{ objectPosition: 'center top' }}
          />
          
          {/* Overlay with Social Links */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="flex space-x-4 bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-pollinate-yellow transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/20"
                >
                  <Github size={20} strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-pollinate-yellow transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/20"
                >
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-pollinate-yellow transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/20"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-pollinate-yellow transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/20"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Removed Floating Particles Effect to reduce distraction */}
      </div>

      {/* Content Card */}
      <div className={cn(
        "relative p-8 rounded-3xl border transition-all duration-700 group-hover:scale-105 backdrop-blur-sm",
        isDark
          ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 group-hover:bg-white/15 group-hover:border-pollinate-yellow/50"
          : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 group-hover:border-pollinate-yellow/50 group-hover:shadow-2xl"
      )}>
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pollinate-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

        <div className="relative z-10">
          <h3
            className={cn(
              "text-2xl font-bold mb-3 transition-all duration-500 group-hover:scale-105",
              isDark
                ? "text-white group-hover:text-pollinate-yellow"
                : "text-pollinate-black group-hover:text-pollinate-yellow"
            )}
          >
            {name}
          </h3>
          <p
            className={cn(
              "text-sm mb-4 font-medium transition-colors duration-300",
              isDark
                ? "text-pollinate-yellow/80 group-hover:text-pollinate-yellow"
                : "text-pollinate-yellow group-hover:text-yellow-600"
            )}
          >
            {position}
          </p>
          <div className="h-[3px] w-20 bg-gradient-to-r from-pollinate-yellow to-yellow-400 mx-auto mb-6 transform transition-all duration-500 group-hover:w-32 rounded-full"></div>
          <p
            className={cn(
              "text-sm leading-relaxed mb-6 px-2 transition-colors duration-300",
              isDark
                ? "text-gray-300 group-hover:text-gray-200"
                : "text-gray-600 group-hover:text-gray-700"
            )}
          >
            {background}
          </p>
          <div className="flex justify-center">
            <button
              className={cn(
                "flex items-center text-sm font-semibold transition-all duration-300 px-6 py-3 rounded-full border-2 border-pollinate-yellow/50 hover:border-pollinate-yellow",
                "text-pollinate-yellow hover:bg-pollinate-yellow hover:text-white transform hover:scale-105 hover:shadow-lg"
              )}
            >
              <span>Connect</span>
              <ChevronDown
                size={16}
                className="ml-2 group-hover:translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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

  const teamMembers = [
    {
      name: "Reginald Nkabinde",
      position: "Founder and CTO",
      image: image1,
      background:
        "Visionary entrepreneur with 8+ years in digital innovation. Led multiple successful tech startups and specializes in strategic business development, emerging technologies, and building high-performance teams.",
      socialLinks: {
        github: "https://github.com/reginald-nkabinde",
        twitter: "https://twitter.com/reginald_nk",
        linkedin: "https://linkedin.com/in/reginald-nkabinde",
        instagram: "https://instagram.com/reginald.nk",
      },
    },
    {
      name: "Keith Mafuwe",
      position: "Lead Full-Stack Developer",
      image: image2,
      background:
        "Full-stack architect with expertise in React, Node.js, and cloud technologies. 6+ years building scalable web applications and leading development teams. Passionate about clean code and innovative solutions.",
      socialLinks: {
        github: "https://github.com/keith-mafuwe",
        twitter: "https://twitter.com/keith_dev",
        linkedin: "https://linkedin.com/in/keith-mafuwe",
      },
    },
    {
      name: "Solomon Ramafalo",
      position: "Creative Director & UI/UX Designer",
      image: image3,
      background:
        "Award-winning creative director with 7+ years in digital design and brand strategy. Specializes in user experience design, visual identity, and creating compelling digital experiences that drive engagement and conversion.",
      socialLinks: {
        github: "https://github.com/solomon-ramafalo",
        twitter: "https://twitter.com/solomon_design",
        linkedin: "https://linkedin.com/in/solomon-ramafalo",
        instagram: "https://instagram.com/solomon.creative",
      },
    },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `,
        }}
      />

      <div className="container mx-auto px-4">
        <div
          className="text-center mb-20"
          style={{
            animation: "fadeIn 0.8s ease-out",
            animationFillMode: "both",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full"></div>
            Our Team
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
              isDark
                ? "from-white via-gray-100 to-gray-300"
                : "from-pollinate-black via-gray-800 to-gray-600"
            )}
            style={{
              animation: "slideInLeft 0.8s ease-out",
              animationFillMode: "both",
            }}
          >
            Meet Our
            <span className="text-pollinate-yellow"> Experts</span>
          </h2>

          <p
            className={cn(
              "max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
            style={{
              animation: "slideInRight 0.8s ease-out",
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            Our diverse team of creative professionals and technical experts
            work together to deliver exceptional results for every project.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12"
          style={{
            animation: "scaleUp 0.8s ease-out",
            animationDelay: "0.3s",
            animationFillMode: "both",
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              position={member.position}
              image={member.image}
              background={member.background}
              socialLinks={member.socialLinks}
              index={index}
            />
          ))}
        </div>

        {/* Temporarily commented out for debugging
        <div className="mt-20 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Team Members Say</h3>
          <AnimatedTestimonialsDemo />
        </div>
        */}

        <div
          className="text-center mt-16"
          style={{
            animation: "fadeInUp 0.8s ease-out",
            animationDelay: "0.6s",
            animationFillMode: "both",
          }}
        >
          <Link
            to="/about"
            className={cn(
              "inline-block px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform",
              isDark
                ? "bg-pollinate-yellow/90 hover:bg-pollinate-yellow text-white"
                : "bg-pollinate-yellow text-white hover:bg-yellow-600"
            )}
          >
            Meet The Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
