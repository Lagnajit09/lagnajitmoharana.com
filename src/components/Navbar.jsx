import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "About", target: "about", type: "section" },
  { label: "Work", target: "experience", type: "section" },
  { label: "Projects", target: "projects", type: "section" },
  { label: "Writing", target: "/blogs", type: "route" },
  { label: "Contact", target: "contact", type: "section" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setMenuOpen(false);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      // wait for home to mount before scrolling
      setTimeout(scroll, 60);
    } else {
      scroll();
    }
  };

  const handleClick = (e, link) => {
    e.preventDefault();
    if (link.type === "route") {
      setMenuOpen(false);
      navigate(link.target);
    } else {
      goToSection(link.target);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="font-display text-2xl tracking-tight text-fg hover:text-accent transition-colors"
        >
          Lagnajit<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.type === "route" ? link.target : `#${link.target}`}
              onClick={(e) => handleClick(e, link)}
              className="text-sm text-muted hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 -mr-2 text-fg"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.type === "route" ? link.target : `#${link.target}`}
                onClick={(e) => handleClick(e, link)}
                className="py-2.5 text-base text-muted hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    aria-label="Toggle theme"
    onClick={toggleTheme}
    className="p-2 rounded-full text-muted hover:text-fg hover:bg-surface transition-colors"
  >
    {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
  </button>
);

export default Navbar;
