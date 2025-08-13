import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 2.5,
      ease: "power2.inOut",
    });
  });
  return (
    <div id="hero">
      <div className="relative h-screen overflow-hidden rounded-bl-[100%_100px] rounded-br-[100%_100px]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.2)" }}
        >
          <source src="/src/assets/asteroid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-end">
          <p className="absolute bottom-[10%] left-[10%] font-roboto-flex text-2xl hero-text">
            <span className="font-roboto-flex font-bold text-2x1">LUIS</span>
            <br />
            <span className="font-roboto-flex font-bold text-2xl">JIMENEZ</span>
          </p>
          <p className="font-bold absolute bottom-[10%] right-[10%] text-2xl hero-text">
            SENIOR SOFTWARE <br /> ENGINEER
          </p>
        </div>
      </div>
    </div>
  );
};
