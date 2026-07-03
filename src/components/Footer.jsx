import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm text-subtle leading-relaxed max-w-md">
          Designed & built by Lagnajit Moharana. Made with React and Tailwind
          CSS, deployed on Firebase. Set in Inter & Instrument Serif.
        </p>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Lagnajit09"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full text-muted hover:text-fg hover:bg-surface transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/lagnajitmoharana2004/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full text-muted hover:text-fg hover:bg-surface transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/m_lagnajit09"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="p-2.5 rounded-full text-muted hover:text-fg hover:bg-surface transition-colors"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
      <p className="text-xs text-subtle mt-6">
        © {new Date().getFullYear()} Lagnajit Moharana. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
