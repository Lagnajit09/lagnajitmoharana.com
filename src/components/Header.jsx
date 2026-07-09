import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import profile from "../assets/pfp.jpg";

const socials = [
  { icon: FaGithub, href: "https://github.com/Lagnajit09", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/lagnajitmoharana2004/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/m_lagnajit09", label: "X" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sketchify99/",
    label: "Instagram",
  },
];

function Header() {
  return (
    <header className="pt-28 md:pt-36 pb-14">
      <div className="flex items-center gap-2 mb-8 animate-fade-in">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
        </span>
        <span className="text-sm text-muted">Available for opportunities</span>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8 sm:gap-10">
        <div className="flex-1 animate-fade-up">
          <p className="text-muted text-lg mb-3">Hey, I'm</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-fg">
            Lagnajit
            <br />
            Moharana
          </h1>
          <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
            Full-stack developer exploring the frontier of{" "}
            <span className="text-fg">AI & Machine Learning</span>, with a
            foundation in <span className="text-fg">Cloud Infrastructure</span>{" "}
            and <span className="text-fg">DevOps</span>. <br /> App Development
            Analyst | @Accenture.
          </p>
        </div>

        <div className="shrink-0 animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-accent/10 blur-xl" />
            <img
              src={profile}
              alt="Lagnajit Moharana"
              className="relative w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full ring-1 ring-border"
            />
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up">
        <a
          href="https://github.com/Lagnajit09/lagnajitmoharana.com/raw/master/LagnajitMoharana.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <FiDownload size={16} /> Résumé
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
        >
          Get in touch <FiArrowUpRight size={16} />
        </a>

        <div className="flex items-center gap-1 sm:ml-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full text-muted hover:text-fg hover:bg-surface transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
