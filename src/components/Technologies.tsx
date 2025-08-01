import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { technologies } from "../lib/constants";

const Technologies = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const firstLogoItems = marquee.querySelector(".logo_items") as HTMLElement;
    if (!firstLogoItems) return;

    const logoItemsWidth = firstLogoItems.offsetWidth;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(marquee, {
      x: -logoItemsWidth,
      duration: 15,
      ease: "none",
    });

    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="technologies">
      <div className="marquee-container">
        <div className="logos" ref={marqueeRef}>
          <div className="logo_items">
            {technologies.map((icon, index) => (
              <img src={icon.icon} alt="logo" key={index} />
            ))}
          </div>
          <div className="logo_items">
            {technologies.map((icon, index) => (
              <img src={icon.icon} alt="logo" key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
