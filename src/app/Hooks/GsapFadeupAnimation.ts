// hooks/useGsapFadeUp.ts

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Options {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  ease?: string;
  triggerStart?: string; // e.g., "top 80%"
}

export const useGsapFadeUp = (
  refs: (HTMLElement | null)[],
  options?: Options
) => {
  useLayoutEffect(() => {
    const elements = refs.filter(Boolean);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: options?.y ?? 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 0.8,
            ease: options?.ease ?? "power3.out",
            delay: options?.delay ?? 0,
            stagger: options?.stagger ?? 0,
            scrollTrigger: {
              trigger: el,
              start: options?.triggerStart ?? "top 80%",
              toggleActions: "play none none reverse",
              once: false,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [refs, options]);
};
