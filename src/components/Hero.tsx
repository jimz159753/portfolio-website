import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      <div className="main-background relative h-screen">
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
  );
};
