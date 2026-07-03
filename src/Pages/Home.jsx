import Header from "../components/Header";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const Home = () => {
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto px-5 sm:px-8">
      <Header />
      <main className="divide-y divide-border">
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
