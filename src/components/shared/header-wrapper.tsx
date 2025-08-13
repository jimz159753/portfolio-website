import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

export const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    const shadows = [
      "0px 0px 50px 0px rgb(255, 255, 255)",
      "0px 0px 2px 0px rgb(255, 255, 255)",
      "0px 0px 80px 0px rgb(255, 255, 255)",
      "0px 0px 1px 0px rgb(255, 255, 255)",
      "0px 0px 0px 0px transparent",
    ];

    shadows.forEach((shadow) => {
      tl.to(".point", {
        boxShadow: shadow,
      });
    });
  });
  return (
    <div className="flex items-center gap-2 border border-white-50 px-3 shadow-md shadow-white-50/20 py-0.5 rounded-full w-fit bg-transparent">
      <div className="point rounded-full w-1.5 h-1.5 bg-white-50 shadow-xl" />
      <p className="text-lg">{children}</p>
    </div>
  );
};
