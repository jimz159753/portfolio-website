import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { CardHistory } from "./shared/card-history";
import { CardProfile } from "./shared/card-profile";
import { HeaderWrapper } from "./shared/header-wrapper";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(SplitText);

export const About = () => {
  useGSAP(() => {
    const runAnimation = async () => {
      await (document as Document).fonts.ready;

      const splitText = new SplitText(".introduce-text", {
        type: "words",
      });
      gsap.from(splitText.words, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".introduce-text",
          start: "30% center",
          end: "110% center",
          toggleActions: `${isMobile ? "play" : "restart"} none ${
            isMobile ? "none" : "restart"
          } none`,
        },
      });

      const tl = gsap.timeline({
        repeat: -1,
        duration: 1.8,
        ease: "sine.inOut",
      });

      // Create a smoother pulse effect with better shadow progression
      tl.to(".profile-point", {
        scale: 5.5,
        opacity: 0,
      });
    };

    runAnimation();
  }, []);
  return (
    <section id="about">
      <div className="about-container flex flex-col w-full items-center">
        <div className="flex-center flex-col gap-10 w-4/5">
          <HeaderWrapper>About Me</HeaderWrapper>
          <p className="introduce-text text-color-white-50 text-5xl font-light">
            Luis Jimenez,{" "}
            <span className="text-gray-400">Your Software Engineer</span>
          </p>
          <p className="text-gray-400 text-lg">
            Brief initial presentation of myself and my previous experience.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <CardProfile />
            <CardHistory />
          </div>
        </div>
      </div>
    </section>
  );
};
