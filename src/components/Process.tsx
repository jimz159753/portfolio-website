import process from "../assets/process.webp";
import { processData } from "../lib/constants";
import { CardProcess } from "./shared/card-process";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeaderWrapper } from "./shared/header-wrapper";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const Process = () => {
  useGSAP(() => {
    const splitText = new SplitText(".process-title", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#process",
        start: "30% center",
        end: "70% center",
        toggleActions: "restart none restart none",
      },
    });

    timeline.from(".process-image", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });

    timeline.from(
      splitText.words,
      {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "sine2.inOut",
      },
      "-=0.8"
    );

    timeline.from(
      ".process-card",
      {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "-=1"
    );
  });

  return (
    <section id="process">
      <div className="flex md:flex-row flex-col md:justify-between justify-center">
        <div className="process-image md:w-1/2 w-full md:p-0 p-10 relative overflow-hidden rounded-xl ">
          <img
            src={process}
            alt="process"
            className="hover:scale-110 grayscale hover:grayscale-0 transition-all duration-500 h-full w-full rounded-xl"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between gap-4 px-10">
          <HeaderWrapper>How it works</HeaderWrapper>
          <h1 className="process-title text-color-white-50 text-6xl font-light">
            Process <span className="text-gray-400">is Everything</span>
          </h1>
          <p className="text-gray-400 text-lg">
            crafting bold visuals that inspire and elevate brands with thought
            process.
          </p>
          <button className="bg-transparent border border-white-50 shadow-lg hover:shadow-white-50/20 transition-all duration-300 w-fit p-2 text-white-50 px-4 py-2 rounded-lg cursor-pointer">
            See Projects
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
