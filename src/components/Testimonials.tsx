import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CardWrapper from "./shared/card-wrapper";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem amet consectetur adipisicing elit. lorem amet consectetur adipisicing elit. lorem",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    title: "Project 4 ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing eliLorem ipsum dolor sit amet consectetur adipisicing eliLorem ipsum dolor sit amet consectetur adipisicing eli Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ",
  },
];

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
        {projects.map((project, index) => (
          <CardWrapper
            key={index}
            index={index}
            children={<p>{project.description}</p>}
          />
        ))}
      </div>
    </section>
  );
};
