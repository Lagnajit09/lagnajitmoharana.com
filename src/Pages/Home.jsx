import React from "react";
import Header from "../components/Header";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <div className="relative w-[95%] md:w-[75vw] m-auto md:flex gap-10 justify-between">
        <div className="md:fixed">
          <Header />
        </div>
        <div className="w-full flex flex-col items-end float-right">
          <div className="md:w-[45%] py-20 flex flex-col gap-5">
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
};

export default Home;
