import { useState, useEffect } from "react";
import { ScrollSmoother } from "gsap/all";

export const useScrollSmoother = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the ScrollSmoother instance
      const smoother = ScrollSmoother.get();
      if (smoother) {
        // Use GSAP ScrollSmoother for smooth scrolling
        smoother.scrollTo(element, true, "top top");
      } else {
        // Fallback to native smooth scroll if ScrollSmoother is not available
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log(`Section ${sectionId} not found`);
    }
    // Close mobile menu after clicking a link
    closeMobileMenu();
  };

  const openMobileMenu = () => {
    setIsAnimating(true);
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  // Reset animation state after transition completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match the CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return {
    isMobileMenuOpen,
    isAnimating,
    scrollToSection,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
