import React from "react";
import Header from "../components/Header";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";

const Home = () => {
  return (
    <div>
      <div className="relative w-[95%] md:w-[75vw] m-auto md:flex gap-10 justify-between">
        <div className="md:fixed md:w-[40%]">
          <Header />
        </div>
        <div className="w-full flex flex-col items-end float-right">
          <div className="md:w-[45%] pb-10 md:pt-20 md:pb-10 flex flex-col gap-5">
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Projects />
            <Contact />
            <p className=" text-gray-500 text-sm">
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with React.js and Tailwind CSS, deployed with
              Firebase. All text is set in the Inter typeface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
