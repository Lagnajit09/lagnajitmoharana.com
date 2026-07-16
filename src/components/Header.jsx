import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
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
    <header className="pt-28 md:pt-36 pb-14 md:pb-20">
      <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-16">
        {/* Left: intro */}
        <div className="animate-fade-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-3.5 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.15em] text-fg">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display font-black text-fg leading-[0.98] tracking-tight text-5xl sm:text-6xl md:text-7xl">
            Architecting
            <br />
            resilient systems for a{" "}
            <span className="italic font-bold text-accent-deep">scalable</span>{" "}
            future.
          </h1>

          <p className="mt-7 text-lg text-muted max-w-xl leading-relaxed">
            Hey, I'm <span className="font-semibold text-fg">Lagnajit Moharana</span>.
            Full-stack developer exploring the frontier of{" "}
            <span className="text-fg">AI &amp; Machine Learning</span>, with a
            foundation in <span className="text-fg">Cloud Infrastructure</span> and{" "}
            <span className="text-fg">DevOps</span>. App Development Analyst
            @Accenture.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Lagnajit09/lagnajitmoharana.com/raw/master/LagnajitMoharana.pdf"
              download
              className="press inline-flex items-center gap-2 bg-fg text-bg border border-border px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide shadow-hard"
            >
              <FiFileText size={16} /> Résumé
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="press inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-fg bg-bg shadow-hard"
            >
              Get in touch <FiArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 border border-border-soft hover:border-border text-muted hover:text-fg transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: framed photo with orange offset shadow */}
        <div className="order-1 lg:order-2 shrink-0 animate-fade-in mx-auto lg:mx-0">
          <div className="group relative">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 bg-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              aria-hidden="true"
            />
            <img
              src={profile}
              alt="Lagnajit Moharana"
              className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-[24rem] object-cover border border-border grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
