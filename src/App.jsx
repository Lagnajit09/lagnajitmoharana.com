import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
