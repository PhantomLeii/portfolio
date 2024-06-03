import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import About from "@/components/About";
import Projects from "./components/Projects";

import { aboutDesc, experience, navLinks, projects } from "@/data";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center selection:bg-teal selection:text-ivory">
      <Navbar navLinks={navLinks} />
      <div id="content" className="w-full mt-20">
        <Hero />
        <About aboutDesc={aboutDesc} />
        <Projects projectData={projects} />
        <Experience experienceData={experience} />
        {/* Contact */}
        <Footer navLinks={navLinks} />
      </div>
    </div>
  );
};

export default App;
