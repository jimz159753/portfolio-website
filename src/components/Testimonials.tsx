import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CardWrapper from "./shared/card-wrapper";
import { testimonials } from "../lib/constants";

export const Testimonials = () => {
  useGSAP(() => {
    const cardWrappers = document.querySelectorAll("#card-wrapper");

    gsap.from(cardWrappers, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 90%",
        end: "bottom center",
      },
    });
  });
  return (
    <section id="testimonials">
      <div className="flex-center">
        <p className="header-text text-color-white-50">Testimonials</p>
      </div>
      <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
        {testimonials.map((testimonial, index) => (
          <CardWrapper
            key={index}
            index={index}
            review={testimonial.review}
            children={
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={testimonial.imgPath}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
};
