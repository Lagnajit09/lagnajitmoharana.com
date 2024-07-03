import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className=" w-[60vw] m-auto">
        {/* <ThemeToggle /> */}
        <Header />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
