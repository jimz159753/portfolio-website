import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const counterNumbersRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!counterRef.current) return;

      // Get all counter number elements
      const numberElements =
        counterRef.current.querySelectorAll(".counter-number");
      counterNumbersRef.current = Array.from(numberElements) as HTMLElement[];

      // Define the target values for each counter
      const targetValues = [52, 96, 8];
      const suffixes = ["+", "%", "+"];

      counterNumbersRef.current.forEach((numberElement, index) => {
        if (!numberElement) return;

        // Set initial value to 0
        gsap.set(numberElement, { innerText: "0" });

        // Create the counting animation
        gsap.to(numberElement, {
          innerText: targetValues[index],
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 }, // Ensures whole numbers
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          // Add the suffix after counting is complete
          onComplete: () => {
            numberElement.textContent = `${targetValues[index]}${suffixes[index]}`;
          },
        });
      });
    },
    { scope: counterRef }
  );

  return (
    <div id="counter" ref={counterRef} className="xl:mt-0 pt-32 flex-center">
      <div className="w-3/4">
        <div className="bg-zinc-900 rounded-lg p-10 flex md:flex-row flex-col gap-4 justify-around w-full rounded-xl ">
          <div className="flex-1">
            <div className="counter-number text-white-50 text-4xl mb-2 flex-center">
              0
            </div>
            <div className="text-gray-400 font-satoshi text-lg flex-center">
              Design projects
            </div>
          </div>
          <div className="md:border-x border-y sm:border-x-0 sm:border-y-0 py-4 sm:py-0 border-gray-400 flex-1">
            <div className="counter-number text-white-50 text-4xl mb-2 flex-center">
              0
            </div>
            <div className="text-gray-400 font-satoshi text-lg flex-center text-center">
              Client satisfaction rate.
            </div>
          </div>
          <div className="flex-1">
            <div className="counter-number text-white-50 text-4xl  mb-2 flex-center">
              0
            </div>
            <div className="text-gray-400 font-satoshi text-lg flex-center">
              Years of experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
