"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section",
  ".pageHero",
  ".cta",
  ".contactIntro",
  ".contactForm",
  ".footerTop",
  ".serviceCard",
  ".industryCard",
  ".detailCard",
  ".outcomeItem",
  ".whyGrid > div",
  ".solutionList > span",
  ".pillCloud > span",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(revealSelector));

    items.forEach((item) => {
      item.classList.add("scrollRevealItem");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          element.classList.add("isVisible");
          observer.unobserve(element);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 70}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
