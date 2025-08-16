import process from "../assets/process.webp";
import { processData } from "../lib/constants";
import { CardProcess } from "./shared/card-process";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeaderWrapper } from "./shared/header-wrapper";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Process = () => {
  useGSAP(() => {
    const splitText = new SplitText(".process-title", {
      type: "words",
    });

    // Optimize animations by creating a single timeline and reducing DOM queries
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#process",
        start: "top center",
        end: "70% center",
        toggleActions: `${isMobile ? "play" : "restart"} none ${
          isMobile ? "none" : "restart"
        } none`,
      },
    });

    // Add image and text animations to the same timeline for better performance
    mainTimeline
      .from(".process-image", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      })
      .from(
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

    // Only pin and animate cards on desktop
    if (!isMobile) {
      // Pin the process section to see animations clearly
      ScrollTrigger.create({
        trigger: "#process",
        start: "top top",
        end: "bottom center",
        pin: true,
        pinSpacing: true,
      });

      // Optimize card animations by batching them together
      const cards = gsap.utils.toArray(".process-card");
      const firstCard = cards[0] as HTMLElement;

      // Create a single timeline for all card animations
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#process",
          start: "top top",
          end: "+=70%",
          scrub: true,
        },
      });

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;

        // Calculate the offset to move each card to the first card's position
        const firstCardRect = firstCard.getBoundingClientRect();
        const cardRect = cardElement.getBoundingClientRect();
        const offsetY = firstCardRect.top - cardRect.top;

        cardTimeline.to(
          cardElement,
          {
            y: offsetY,
            duration: 0.1, // Small duration for scrub effect
          },
          0
        ); // Start all card animations at the same time
      });
    }
  }, []);

  return (
    <section id="process">
      <div className="flex md:flex-row flex-col md:justify-between justify-center lg:h-[100dvh]">
        <div className="process-image md:w-1/2 w-full md:p-0 p-10 relative overflow-hidden rounded-xl ">
          <img
            src={process}
            alt="process"
            className="hover:scale-110 grayscale hover:grayscale-0 transition-all duration-500 h-1/2 w-full rounded-xl h-full"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between gap-4 px-10">
          <HeaderWrapper>How it works</HeaderWrapper>
          <h1 className="process-title text-color-white-50 md:text-6xl text-5xl font-light">
            Process <span className="text-gray-400">is Everything</span>
          </h1>
          <p className="text-gray-400 text-lg">
            crafting bold visuals that inspire and elevate brands with thought
            process.
          </p>
          <div className="w-full border border-gray-500 " />
          <div className="cards-container flex flex-col gap-10 relative md:h-[800px] h-auto">
            {processData.map((item) => (
              <CardProcess
                key={item.step}
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
