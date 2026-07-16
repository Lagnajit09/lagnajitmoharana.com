import { useState, useEffect } from "react";
import {
  FiMapPin,
  FiMail,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const WORKER_URL = import.meta.env.VITE_CONTACT_WORKER_URL;

const Toast = ({ status }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status === "sent" || status === "error") {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(t);
    }
  }, [status]);

  if (!visible) return null;
  const isSuccess = status === "sent";

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 border bg-surface px-4 py-3 text-sm shadow-hard transition-all duration-300 ${
        isSuccess ? "border-border" : "border-red-500"
      }`}
    >
      {isSuccess ? (
        <FiCheckCircle size={16} className="text-accent shrink-0" />
      ) : (
        <FiAlertCircle size={16} className="text-red-500 shrink-0" />
      )}
      <span className="text-fg">
        {isSuccess
          ? "Message sent — I'll get back to you soon."
          : "Something went wrong. Please try again."}
      </span>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("non-2xx");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2200);
    }
  };

  const labelClass =
    "font-mono text-xs font-semibold uppercase tracking-[0.15em] text-fg";
  const inputClass =
    "mt-2 block w-full border border-border bg-bg px-4 py-3 text-fg placeholder:text-subtle placeholder:font-normal focus:outline-none focus:shadow-hard-sm focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all";

  return (
    <section id="contact" className="py-14 md:py-20 reveal">
      <div className="flex items-center gap-4 mb-10">
        <span className="eyebrow whitespace-nowrap">Contact</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="flex flex-col gap-8">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-fg leading-[0.95] tracking-tight">
            Let's build something{" "}
            <span className="italic text-accent-deep">extraordinary</span>.
          </h2>

          <p className="text-muted leading-relaxed max-w-md">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open — I'll try to get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:2004lagnajitmoharana@gmail.com"
              className="group flex items-center gap-3 font-mono text-sm text-muted hover:text-fg transition-colors"
            >
              <span className="w-10 h-10 border border-border flex items-center justify-center text-accent-deep group-hover:shadow-hard-sm group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <FiMail size={16} />
              </span>
              2004lagnajitmoharana@gmail.com
            </a>
            <div className="flex items-center gap-3 font-mono text-sm text-muted">
              <span className="w-10 h-10 border border-border flex items-center justify-center text-accent-deep">
                <FiMapPin size={16} />
              </span>
              Odisha, India — 753004
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-border bg-surface p-6 sm:p-8 shadow-hard-lg flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Tell me about your project…"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="press mt-1 inline-flex items-center justify-center gap-2 bg-fg text-bg border border-border px-5 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] shadow-hard disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            {status !== "sending" && <FiSend size={15} />}
          </button>
        </form>
      </div>
      <Toast status={status} />
    </section>
  );
};

export default Contact;
