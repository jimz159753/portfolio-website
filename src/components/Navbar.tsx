import { navigationItems } from "../lib/constants";
import type { NavItem } from "../lib/interfaces";
import { useScrollSmoother } from "../hooks/navbar";
import React from "react";

const NavItem: React.FC<{
  item: NavItem;
  onClick: (sectionId: string) => void;
  className?: string;
}> = ({ item, onClick, className = "" }) => (
  <li className="relative">
    <button
      onClick={() => onClick(item.id)}
      className={`text-white transition-colors duration-300 cursor-pointer relative group/item ${className}`}
    >
      {item.label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-700 transition-all duration-300 group-hover/item:w-full"></span>
    </button>
  </li>
);

export const Navbar = () => {
  const { isMobileMenuOpen, scrollToSection, toggleMobileMenu } =
    useScrollSmoother();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs border-b border-gray-700 flex justify-between items-center px-6 py-4">
      {/* Logo/Brand */}
      <div className="text-xl font-bold text-white">Portfolio</div>

      {/* Desktop Navigation - Right side */}
      <ul className="hidden md:flex gap-8 group">
        {navigationItems.map((item) => (
          <NavItem key={item.id} item={item} onClick={scrollToSection} />
        ))}
      </ul>
      {/* Mobile menu button - Right side */}
      <button className="md:hidden text-white" onClick={toggleMobileMenu}>
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm md:hidden z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6">
          {navigationItems.map((item, index) => (
            <li
              key={item.id}
              className={`transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform -translate-x-4"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer py-2 relative"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
