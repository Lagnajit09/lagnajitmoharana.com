import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section";
import { certificates } from "../constants/certificates";

const Certifications = () => {
  return (
    <Section id="certifications" label="Credentials" title="Certifications">
      <div className="grid sm:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.verifyLink}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border p-5 hover:border-accent/50 hover:bg-surface transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface ring-1 ring-border flex items-center justify-center shrink-0">
                <img
                  src={cert.logo}
                  alt={cert.company}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-fg leading-snug">{cert.name}</h3>
                  <FiArrowUpRight
                    size={15}
                    className="shrink-0 mt-0.5 text-subtle group-hover:text-accent transition-colors"
                  />
                </div>
                <p className="text-sm text-muted mt-1">{cert.company}</p>
                <p className="text-xs text-subtle mt-1">
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
