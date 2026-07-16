import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-black text-xl tracking-tight text-fg">
            LAGNAJIT<span className="font-mono text-accent">_M</span>
          </p>
          <p className="font-mono text-xs text-subtle leading-relaxed max-w-md mt-3">
            Designed &amp; built by Lagnajit Moharana. React + Tailwind CSS,
            deployed on Firebase. Set in Playfair Display &amp; JetBrains Mono.
          </p>
        </div>
        <div className="flex items-center gap-2">
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
      <p className="font-mono text-xs text-subtle mt-8">
        © {new Date().getFullYear()} Lagnajit Moharana. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
