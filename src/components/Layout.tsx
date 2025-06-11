import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FuturisticBackground from "./FuturisticBackground";
import ThemeToggle from "./ThemeToggle";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Pollinate IQ - Digital Agency",
  description = "Empower Your Brand's Digital Presence with AI-Driven Solutions and Next-Gen Technology",
  keywords = "digital agency, web development, AI solutions, branding, technology",
}) => {
  // Set document title and meta tags
  React.useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);
  }, [title, description, keywords]);
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Futuristic background applied to the entire site */}
      <FuturisticBackground />

      {/* Theme toggle button */}
      <ThemeToggle />

      {/* Scroll to top button */}
      <ScrollToTop />

      <Header />
      <main
        className="flex-grow pt-20 relative z-10"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
