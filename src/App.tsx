import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import AnimatedCounter from "./components/AnimatedCounter";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div id="app">
      <div id="content" className="bg-gradient-to-b bg-black">
        <Navbar />
        <Hero />
        <div className="relative sm:px-4 md:px-14">
          <About />
          <Process />
          <AnimatedCounter />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
