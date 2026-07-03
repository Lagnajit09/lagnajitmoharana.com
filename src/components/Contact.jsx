import { useState } from "react";
import { FiMapPin, FiMail, FiArrowUpRight } from "react-icons/fi";
import Section from "./Section";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:2004lagnajitmoharana@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass =
    "mt-1.5 block w-full rounded-lg border border-border bg-surface/40 px-3.5 py-2.5 text-fg placeholder:text-subtle focus:outline-none focus:border-accent transition-colors";

  return (
    <Section id="contact" label="Contact" title="Let's build something">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-muted leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open — I'll try to get back to you.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:2004lagnajitmoharana@gmail.com"
              className="group flex items-center gap-3 text-muted hover:text-fg transition-colors"
            >
              <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                <FiMail size={16} />
              </span>
              2004lagnajitmoharana@gmail.com
            </a>
            <div className="flex items-center gap-3 text-muted">
              <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center">
                <FiMapPin size={16} />
              </span>
              Odisha, India — 753004
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-sm text-muted">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-muted">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`${inputClass} resize-none`}
              required
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-fg text-bg px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Send message
            <FiArrowUpRight
              size={16}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
