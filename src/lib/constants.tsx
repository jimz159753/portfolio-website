import type { NavItem } from "./interfaces";
import minerva from "../assets/minerva.webp";
import victor from "../assets/victor.webp";
import oscar from "../assets/oscar.webp";
import max from "../assets/max.webp";
import tommy from "../assets/tommy.webp";
import jimmy from "../assets/jimmy.webp";

import {
  ListCheck,
  Lightbulb,
  Rocket,
  Code,
  Search,
  ChartLine,
  Shield,
  Figma,
  ShoppingBag,
  Landmark,
  Database,
  Megaphone,
} from "lucide-react";

export const testimonials = [
  {
    name: "Minerva Becerra",
    mentions: "@mnrvbecerra",
    review:
      "I can’t say enough good things about Luis. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: minerva,
  },
  {
    name: "Victor Diaz",
    mentions: "@vict.diaz",
    review:
      "Working with Luis was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: victor,
  },
  {
    name: "Oscar Vallin",
    mentions: "@oscar.vallin",
    review:
      "Collaborating with Luis was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Luis's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Luis is the ideal partner.",
    imgPath: oscar,
  },
  {
    name: "Max D. Hardwell",
    mentions: "@mxd.hardwell",
    review:
      "Luis was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: max,
  },
  {
    name: "Tommy Velez",
    mentions: "@tommy.velez",
    review:
      "Luis’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: tommy,
  },
  {
    name: "Jimmy McMillan",
    mentions: "@jimmy.mcmillan",
    review:
      "Luis was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: jimmy,
  },
];

export const navigationItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
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

export const skillsData = [
  "Product Design",
  "UX Design",
  "Fullstack Development",
  "DevOps",
  "Cloud Computing",
  "Database Management",
  "API Development",
  "Mobile App Development",
];

export const industries = [
  {
    name: "Ecommerce",
  },
  {
    name: "Real Estate",
  },
  {
    name: "Healthcare",
  },
  {
    name: "Education",
  },
  {
    name: "Finance",
  },
  {
    name: "Marketing",
  },
  {
    name: "Technology",
  },
  {
    name: "Entertainment",
  },
];

export const technologies = [
  {
    name: "Optimizations",
    icon: <Lightbulb />,
  },
  {
    name: "Custom Code",
    icon: <Code />,
  },

  {
    name: "SEO",
    icon: <Search />,
  },

  {
    name: "Performance",
    icon: <ChartLine />,
  },
  {
    name: "Security",
    icon: <Shield />,
  },
];

export const skills = [
  {
    name: "Figma",
    icon: <Figma />,
  },
  {
    name: "Ecommerce",
    icon: <ShoppingBag />,
  },
  {
    name: "Landing Page",
    icon: <Landmark />,
  },
  {
    name: "Databases",
    icon: <Database />,
  },
  {
    name: "Marketing",
    icon: <Megaphone />,
  },
];

export const projects = [
  {
    name: "Project 1",
    image: "/images/project1.png",
  },
];
