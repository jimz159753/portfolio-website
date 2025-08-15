import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      duration: 2,
      stagger: 0.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none restart none",
      },
    });
  });
  return (
    <div id="hero">
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.2)" }}
        >
          <source src="/src/assets/processor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute sm:w-3/4 w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto-flex text-2xl flex flex-col gap-4 items-center">
          <p className="hero-text text-white md:text-6xl text-4xl font-light">
            Scale Bussiness to drive Results
          </p>
          <p className="hero-text text-gray-300 sm:text-sm text-base text-center w-3/4 font-light">
            Manage all your data and workflows in one place. Automate processes,
            gain insights, and scale your business with ease.
          </p>
        </div>
      </div>
    </div>
  );
};
