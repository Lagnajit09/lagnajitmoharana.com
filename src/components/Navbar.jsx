import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "About", target: "about", type: "section" },
  { label: "Work", target: "experience", type: "section" },
  { label: "Stack", target: "skills", type: "section" },
  { label: "Projects", target: "projects", type: "section" },
  { label: "Writing", target: "/blogs", type: "route" },
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
          ? "backdrop-blur-md bg-bg/85 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-[70px] flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="font-display font-black text-xl sm:text-2xl tracking-tight text-fg hover:text-accent transition-colors"
        >
          LAGNAJIT<span className="font-mono font-bold text-accent">_M</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.type === "route" ? link.target : `#${link.target}`}
              onClick={(e) => handleClick(e, link)}
              className="font-mono text-[0.8rem] font-medium uppercase tracking-wider text-muted hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => goToSection("contact")}
            className="press font-mono text-[0.8rem] font-semibold uppercase tracking-wider bg-accent text-white border border-border px-4 py-2 inline-flex items-center gap-1.5 shadow-hard-sm"
          >
            Connect <FiArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
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
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.type === "route" ? link.target : `#${link.target}`}
                onClick={(e) => handleClick(e, link)}
                className="py-2.5 font-mono text-sm uppercase tracking-wider text-muted hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => goToSection("contact")}
              className="mt-2 font-mono text-sm font-semibold uppercase tracking-wider bg-accent text-white border border-border px-4 py-2.5 inline-flex items-center justify-center gap-1.5 shadow-hard-sm"
            >
              Connect <FiArrowUpRight size={15} />
            </button>
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
    className="p-2 border border-border-soft hover:border-border text-muted hover:text-fg transition-colors"
  >
    {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
  </button>
);

export default Navbar;
