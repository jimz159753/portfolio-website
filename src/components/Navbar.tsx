import { navigationItems } from "../lib/constants";
import type { NavItem } from "../lib/interfaces";
import { useScrollSmoother } from "../hooks/navbar";

const NavItem: React.FC<{
  item: NavItem;
  onClick: (sectionId: string) => void;
  className?: string;
}> = ({ item, onClick, className = "" }) => (
  <li>
    <button
      onClick={() => onClick(item.id)}
      className={`hover:text-white-50 transition-colors duration-300 cursor-pointer ${className}`}
    >
      {item.label}
    </button>
  </li>
);

export const Navbar = () => {
  const { isMobileMenuOpen, scrollToSection, toggleMobileMenu } =
    useScrollSmoother();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
      {/* Logo/Brand */}
      <div className="text-xl font-bold text-white">Portfolio</div>

      {/* Desktop Navigation - Right side */}
      <ul className="hidden md:flex gap-8">
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
                className="w-full text-left text-white hover:text-white-50 transition-colors duration-300 cursor-pointer py-2"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
