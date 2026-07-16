import Header from "../components/Header";
import Disciplines from "../components/Disciplines";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const Home = () => {
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-5 sm:px-8">
      <Header />
      <main>
        <Disciplines />
        <About />
        <Experience />
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
