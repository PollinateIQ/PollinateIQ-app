import React, { useState } from "react";
import { ArrowRight, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with enhanced effects */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pollinate-yellow/90 text-pollinate-black backdrop-blur-sm border border-pollinate-yellow/20">
            {category}
          </span>
        </div>

        {/* View count indicator */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs">
            <Eye size={12} />
            <span>View</span>
          </div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-pollinate-yellow transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          Explore this innovative project showcasing our expertise in{" "}
          {category.toLowerCase()}.
        </p>
      </div>

      {/* Interactive overlay */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 z-30",
          isHovered
            ? "bg-pollinate-black/80 backdrop-blur-sm opacity-100"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={`/portfolio/${title.toLowerCase().replace(/\s/g, "-")}`}
            className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-pollinate-yellow to-yellow-500 text-pollinate-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            View Project
            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>

          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            <ExternalLink size={18} />
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Marketing Website",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      className={cn(
        "py-20 md:py-28 relative overflow-hidden",
        isDark ? "bg-pollinate-black" : "bg-gray-200"
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pollinate-yellow/10 blur-3xl"></div>
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-pollinate-yellow/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pollinate-yellow/20 to-pollinate-yellow/10 text-pollinate-yellow font-medium text-sm mb-6 border border-pollinate-yellow/20">
            <div className="w-2 h-2 bg-pollinate-yellow rounded-full animate-pulse"></div>
            Our Portfolio
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r bg-clip-text text-transparent",
              isDark
                ? "from-white via-gray-100 to-gray-300"
                : "from-pollinate-black via-gray-800 to-gray-600"
            )}
          >
            Featured
            <span className="text-pollinate-yellow"> Projects</span>
          </h2>

          <p
            className={cn(
              "max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Explore our diverse portfolio of successful projects that showcase
            our expertise across various industries and technologies.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  activeFilter === category
                    ? "bg-pollinate-yellow text-pollinate-black shadow-lg scale-105"
                    : cn(
                        "border-2 hover:scale-105",
                        isDark
                          ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                          : "border-gray-300 text-pollinate-black hover:bg-gray-50 hover:border-pollinate-yellow/50"
                      )
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center">
          <div
            className={cn(
              "inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl border backdrop-blur-sm",
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200"
            )}
          >
            <div className="text-center sm:text-left">
              <h3
                className={cn(
                  "text-xl font-bold mb-2",
                  isDark ? "text-white" : "text-pollinate-black"
                )}
              >
                Ready to see more?
              </h3>
              <p
                className={cn(
                  "text-sm",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                Explore our complete portfolio and discover how we can transform
                your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-pollinate-yellow to-yellow-500 text-pollinate-black hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                View All Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/contact"
                className={cn(
                  "group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:-translate-y-1",
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                    : "border-gray-300 text-pollinate-black hover:bg-gray-50 hover:border-pollinate-yellow/50"
                )}
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
