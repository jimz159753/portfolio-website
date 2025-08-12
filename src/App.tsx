import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import AnimatedCounter from "./components/AnimatedCounter";
import Technologies from "./components/Technologies";
import { Process } from "./components/Process";

function App() {
  return (
    <div id="app">
      <div id="content">
        <Navbar />
        <Hero />
        <div className="relative sm:px-4 md:px-14 bg-gradient-to-b bg-gradient-to-b from-black to-gray-800">
          <AnimatedCounter />
          <Process />
          <Testimonials />
          <Technologies />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
