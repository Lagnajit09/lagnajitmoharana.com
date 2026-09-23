import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import BlogPost from "./Pages/BlogPost";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Routes that show the global navbar. Standalone article pages (/:slug) hide
// it and render only the signature, so the reading view stays clean.
const CHROME_ROUTES = new Set(["/", "/projects", "/blogs"]);

const Chrome = () => {
  const { pathname } = useLocation();
  return CHROME_ROUTES.has(pathname) ? <Navbar /> : null;
};

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Chrome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Self-hosted markdown posts at BASE_URL/<slug>. Static routes above
            still win via React Router's ranking; unknown slugs render a 404. */}
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
