import process from "../assets/process.webp";
import { processData } from "../lib/constants";
import { CardProcess } from "./shared/card-process";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Process = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#process",
        start: "top center",
      },
    });

    timeline.from(".process-image", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });

    timeline.from(
      ".process-card",
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=1.2"
    );
  });

  return (
    <section id="process">
      <div className="flex md:flex-row flex-col md:justify-between justify-center">
        <div className="process-image md:w-1/2 w-full md:p-0 p-10 relative overflow-hidden">
          <img
            src={process}
            alt="process"
            className="hover:scale-110 grayscale hover:grayscale-0 transition-all duration-1000 h-full w-full"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between gap-4 px-10">
          <p className="text-color-white-50">Design Process</p>
          <h1 className="text-color-white-50 text-4xl font-bold">Process</h1>
          <p className="text-color-white-50">
            I follow a systematic process to ensure that the design process is
            efficient and effective.
          </p>
          <button className="bg-white-50 text-black-50 px-4 py-2 rounded-md cursor-pointer">
            See projects
          </button>
          <div className="w-full border border-gray-500 " />
          <div className="flex flex-col gap-10">
            {processData.map((item) => (
              <CardProcess
                step={item.step}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
