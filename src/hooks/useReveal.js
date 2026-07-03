import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to elements with the `.reveal` class as they scroll
 * into view. Attach the returned ref to a container; all descendant
 * `.reveal` nodes are observed.
 */
export const useReveal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return containerRef;
};
