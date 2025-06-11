import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

interface ProjectsGridProps {
  limit?: number;
  showFilters?: boolean;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  limit = 6, 
  showFilters = true 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const projects: Project[] = [
    {
      id: 'ecommerce-redesign',
      title: "E-Commerce Redesign",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Complete redesign of an e-commerce platform, focusing on improving user experience and conversion rates.",
      tags: ['UI/UX', 'Figma', 'Shopify', 'Conversion Optimization'],
      link: "https://example.com/ecommerce"
    },
    {
      id: 'fitness-app',
      title: "Fitness App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Mobile application for fitness tracking with personalized workout plans and nutrition guidance.",
      tags: ['React Native', 'Firebase', 'Health API', 'UX Research'],
      link: "https://example.com/fitness"
    },
    {
      id: 'travel-blog',
      title: "Travel Blog",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Custom travel blog with content management system, interactive maps, and social media integration.",
      tags: ['WordPress', 'Custom Theme', 'SEO', 'Content Strategy'],
      link: "https://example.com/travel"
    },
    {
      id: 'restaurant-branding',
      title: "Restaurant Branding",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      description: "Complete brand identity package for a new restaurant, including logo, menus, signage, and website.",
      tags: ['Branding', 'Print Design', 'Web Design', 'Photography'],
      link: "https://example.com/restaurant"
    },
    {
      id: 'tech-startup',
      title: "Tech Startup",
      category: "Marketing & SEO",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Comprehensive digital marketing strategy for a tech startup, resulting in 200% increase in organic traffic.",
      tags: ['SEO', 'Content Marketing', 'PPC', 'Analytics'],
      link: "https://example.com/techstartup"
    },
    {
      id: 'fashion-lookbook',
      title: "Fashion Lookbook",
      category: "Design & Photography",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      description: "Digital lookbook design for a fashion brand's seasonal collection, including photography direction.",
      tags: ['Photography', 'Digital Design', 'Art Direction', 'E-commerce'],
      link: "https://example.com/fashion"
    },
    {
      id: 'saas-platform',
      title: "SaaS Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description: "Custom dashboard for a SaaS platform with real-time analytics, user management, and reporting features.",
      tags: ['React', 'Node.js', 'Data Visualization', 'UX Design'],
      link: "https://example.com/saas"
    },
    {
      id: 'nonprofit-website',
      title: "Nonprofit Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1",
      description: "Accessible website for a nonprofit organization with donation integration and event management.",
      tags: ['Accessibility', 'WordPress', 'Donation Platform', 'Event Calendar'],
      link: "https://example.com/nonprofit"
    }
  ];

  const categories = [
    'all',
    ...Array.from(new Set(projects.map(project => project.category)))
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects.slice(0, limit));
    } else {
      setFilteredProjects(
        projects
          .filter(project => project.category === activeFilter)
          .slice(0, limit)
      );
    }
  }, [activeFilter, limit]);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === category
                    ? "bg-pollinate-yellow text-pollinate-black"
                    : isDark
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}
        
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: limit }).map((_, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-xl overflow-hidden",
                  isDark ? "bg-white/5" : "bg-gray-100",
                  "animate-pulse"
                )}
                style={{ height: '350px' }}
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={cn(
                  "rounded-xl overflow-hidden group cursor-pointer transition-all duration-300",
                  isDark 
                    ? "bg-white/5 border border-white/10 hover:border-pollinate-yellow/30" 
                    : "bg-white border border-gray-100 hover:border-pollinate-yellow/30 shadow-sm hover:shadow-md"
                )}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-xs text-pollinate-yellow font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-black/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={cn(
                    "text-xl font-bold mb-2 group-hover:text-pollinate-yellow transition-colors",
                    isDark ? "text-white" : "text-pollinate-black"
                  )}>
                    {project.title}
                  </h3>
                  
                  <p className={cn(
                    "text-sm mb-4 line-clamp-2",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          isDark 
                            ? "bg-white/10 text-gray-200" 
                            : "bg-gray-100 text-gray-700"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span 
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          isDark 
                            ? "bg-white/10 text-gray-200" 
                            : "bg-gray-100 text-gray-700"
                        )}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className={cn(
                        "inline-flex items-center text-sm font-medium transition-all duration-300",
                        "text-pollinate-yellow hover:text-yellow-600"
                      )}
                    >
                      View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "p-2 rounded-full transition-all duration-300",
                          isDark 
                            ? "bg-white/10 hover:bg-white/20 text-white" 
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        )}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {limit < projects.length && (
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300",
                "bg-pollinate-yellow text-pollinate-black hover:bg-yellow-600 hover:text-white",
                "hover:shadow-[0_5px_15px_rgba(255,188,63,0.4)] hover:-translate-y-1"
              )}
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />
    </div>
  );
};

export default ProjectsGrid;
