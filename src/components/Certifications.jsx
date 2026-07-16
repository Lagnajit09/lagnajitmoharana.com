import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section";
import { certificates } from "../constants/certificates";

const Certifications = () => {
  return (
    <Section id="certifications" label="Credentials" title="Certifications">
      <div className="grid sm:grid-cols-2 gap-5">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.verifyLink}
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-surface p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white border border-border flex items-center justify-center shrink-0">
                <img
                  src={cert.logo}
                  alt={cert.company}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-bold text-fg leading-snug">
                    {cert.name}
                  </h3>
                  <FiArrowUpRight
                    size={17}
                    className="shrink-0 mt-0.5 text-subtle group-hover:text-accent transition-colors"
                  />
                </div>
                <p className="text-sm text-muted mt-1">{cert.company}</p>
                <p className="font-mono text-xs text-subtle mt-1.5">
                  {cert.issuedDate} — {cert.expiredDate}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
