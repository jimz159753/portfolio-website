import type { NavItem } from "./interfaces";
import react from "../assets/react.png";
import next from "../assets/next.png";
import tailwindcss from "../assets/tailwindcss.png";
import typescript from "../assets/typescript.png";
import aws from "../assets/aws.png";
import docker from "../assets/docker.png";
import google from "../assets/google.png";
import stripe from "../assets/stripe.png";
import { ListCheck, Lightbulb, Rocket } from "lucide-react";

export const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

export const navigationItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "technologies", label: "Technologies" },
  { id: "contact", label: "Contact" },
];

export const technologies = [
  {
    icon: next,
  },
  {
    icon: react,
  },
  {
    icon: tailwindcss,
  },
  {
    icon: typescript,
  },
  {
    icon: aws,
  },
  {
    icon: docker,
  },
  {
    icon: google,
  },
  {
    icon: stripe,
  },
];

export const processData = [
  {
    step: "1",
    title: "Define Your Vision",
    description:
      "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
    icon: <Lightbulb size={24} />,
  },
  {
    step: "2",
    title: "Submit Your Requirements",
    description:
      "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
    icon: <ListCheck size={24} />,
  },
  {
    step: "3",
    title: "Project Delivery",
    description:
      "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.",
    icon: <Rocket size={24} />,
  },
];
