import { ScrollSmoother } from "gsap/all";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the ScrollSmoother instance
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(element, true, "center center");
      } else {
        // Fallback to normal scroll if ScrollSmoother is not available
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log(`Section ${sectionId} not found`);
    }
  };

  return (
    <nav>
      <div className="text-xl font-bold">Portfolio</div>
      <ul className="hidden md:flex gap-8">
        <li>
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-white-50 transition-colors duration-300 cursor-pointer"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white-50 transition-colors duration-300 cursor-pointer"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-white-50 transition-colors duration-300 cursor-pointer"
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-white-50 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button className="md:hidden text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
