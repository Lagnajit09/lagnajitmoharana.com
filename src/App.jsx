import React, { useState } from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const gradientStyle = {
    // background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #14295d, #0b152f)`,
  };

  return (
    <div style={gradientStyle} className="w-full" onMouseMove={handleMouseMove}>
      <Navbar />
      <div className="relative w-[75vw] m-auto flex gap-10 justify-between">
        <div className="fixed">
          <Header />
        </div>
        <div className="w-full flex flex-col items-end float-right">
          <div className="w-[45%] py-20 flex flex-col gap-5">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <p className=" text-gray-500 text-sm">
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with React.js and Tailwind CSS, deployed with Vercel.
              All text is set in the Inter typeface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
