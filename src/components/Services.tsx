import { HeaderWrapper } from "./shared/header-wrapper";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Figma, Headset, PanelsTopLeft, ShoppingBag } from "lucide-react";
import bitcoins from "../assets/bitcoins.webp";
import { CardDesign } from "./shared/card-design";
import ecommerce1 from "../assets/ecommerce1.webp";
import ecommerce2 from "../assets/ecommerce3.webp";
import ecommerce3 from "../assets/ecommerce2.webp";
import { ImageCarousel } from "./shared/ImageCarousel";
import { technologies, skills } from "../lib/constants";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(SplitText);

export const Services = () => {
  useGSAP(() => {
    const splitText = new SplitText(".services-title", {
      type: "words",
    });
    gsap.from(splitText.words, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "sine2.inOut",
      scrollTrigger: {
        trigger: "#services",
        start: "top center",
        end: "70% center",
        toggleActions: `${isMobile ? "play" : "restart"} none ${
          isMobile ? "none" : "restart"
        } none`,
      },
    });

    gsap.from(".card-design", {
      opacity: 0,
      x: -100,
      stagger: 0.2,
      duration: 0.8,
      ease: "sine2.inOut",
      scrollTrigger: {
        trigger: ".services-container",
        start: "top center",
        end: "70% center",
        toggleActions: `${isMobile ? "play" : "restart"} none ${
          isMobile ? "none" : "restart"
        } none`,
      },
    });

    gsap.from(".carousel-fade", {
      opacity: 0,
      duration: 2,
      ease: "sine2.inOut",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".services-container",
        start: "top center",
        end: "70% center",
        toggleActions: `${isMobile ? "play" : "restart"} none ${
          isMobile ? "none" : "restart"
        } none`,
      },
    });
  });
  return (
    <section
      id="services"
      className="services-container flex flex-col w-full items-center"
    >
      <div className="flex flex-col w-3/4 gap-4">
        <HeaderWrapper>Services</HeaderWrapper>
        <h1 className="services-title text-color-white-50 text-6xl font-light">
          Development <span className="text-gray-400">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <CardDesign
              icon={<PanelsTopLeft />}
              title="Web Development"
              description="Developing web applications, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand."
            >
              <img
                src={bitcoins}
                alt="bitcoins"
                className="w-full rounded-xl object-cover grayscale-50"
              />
            </CardDesign>
            <CardDesign
              icon={<Figma />}
              title="UI/UX Design"
              description="Creating intuitive, visually appealing interfaces that enhance user experience and drive engagement."
            />
          </div>
          <div className="flex flex-col gap-4">
            <CardDesign
              icon={<Headset />}
              title="Support"
              description="Providing ongoing technical assistance, troubleshooting, and maintenance to ensure your applications run smoothly and efficiently."
            />
            <CardDesign
              icon={<ShoppingBag />}
              title="Ecommerce"
              description="Building secure, scalable online stores that integrate seamlessly with your business, offering a seamless shopping experience for your customers."
            >
              <ImageCarousel
                images={[ecommerce1, ecommerce2, ecommerce3]}
                altText="ecommerce showcase"
                autoPlay={true}
                direction="left"
              />
            </CardDesign>
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-4">
          <ImageCarousel
            classNameCarousel="carousel-fade"
            tags={technologies}
            altText="technologies"
            autoPlay={true}
            direction="left"
          />
          <ImageCarousel
            classNameCarousel="carousel-fade"
            tags={skills}
            altText="skills"
            autoPlay={true}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};
