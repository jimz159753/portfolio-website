import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import AnimatedCounter from "./components/AnimatedCounter";
import ScrollToTop from "./components/ScrollToTop";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      wrapper: "#app",
      content: "#content",
      smoothTouch: true,
    });
  });

  return (
    <div id="app">
      <div id="content">
        <Navbar />
        <Hero />
        <div className="relative px-14 bg-gradient-to-b bg-gradient-to-b from-gray-800 to-black">
          <AnimatedCounter />
          <About />
          <Testimonials />
          <Contact />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
