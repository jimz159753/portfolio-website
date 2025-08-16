import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export const useScrollSmoother = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect().top;
      let offsetPosition = elementRect + window.pageYOffset - 20;
      if (isMobile) {
        offsetPosition = offsetPosition - 30;
      }
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
