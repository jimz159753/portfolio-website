import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Github, Linkedin, MessageSquare } from "lucide-react";
import { isMobile } from "react-device-detect";

export const Footer = () => {
  useGSAP(() => {
    // Animate footer elements on scroll
    gsap.from(".footer-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        end: "bottom center",
        toggleActions: `${isMobile ? "play" : "restart"} none ${
          isMobile ? "none" : "restart"
        } none`,
      },
    });

    gsap.from(".footer-link", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        end: "bottom center",
        toggleActions: `${isMobile ? "play" : "restart"} none ${
          isMobile ? "none" : "restart"
        } none`,
      },
    });
  }, []);

  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect + window.pageYOffset - 20;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.log(`Section ${sectionId} not found`);
    }
  };

  const handleFooterLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer id="footer" className="bg-black-100 border-t border-black-50 py-16">
      <div className="footer-content max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Luis Jimenez</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web
              solutions that drive business growth and deliver exceptional user
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/luisjimz/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/jimz159753"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://wa.me/523315027257"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <MessageSquare size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "testimonials")}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "services")}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "services")}
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "services")}
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => handleFooterLinkClick(e, "services")}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black-50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Luis Jimenez. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="footer-link text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
