"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Position within a group; adds a small capped stagger. */
  index?: number;
};

type State = "static" | "pending" | "shown";

/**
 * Restrained scroll reveal (pattern recommended by React Bits). Content is
 * fully visible in server HTML and without JS. After hydration, only elements
 * that are still below the fold are hidden, then faded in once on entry.
 * Disabled entirely for prefers-reduced-motion.
 */
export function Reveal({ children, as: Tag = "div", className, index = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("pending");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={state === "static" ? undefined : state}
      style={
        index ? ({ "--reveal-delay": `${Math.min(index, 5) * 60}ms` } as React.CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}
