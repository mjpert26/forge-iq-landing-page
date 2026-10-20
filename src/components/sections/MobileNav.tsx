"use client";

import { useEffect, useId, useRef, useState } from "react";
import { navLinks, referCta } from "@/config/site";

/** Small-screen navigation: the referral CTA stays visible, other links sit in a disclosure menu. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 48rem)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <a href={referCta.href} className="btn btn-primary !min-h-11 !px-4 text-[0.9375rem]">
        {referCta.label}
      </a>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-md border-2 border-on-navy/30 text-on-navy transition-colors hover:border-on-navy"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-navy-line bg-navy shadow-[0_18px_30px_-18px_rgb(0_0_0/0.6)]"
      >
        <nav aria-label="Main" className="container-page flex flex-col py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-navy-line text-base font-semibold text-on-navy no-underline last:border-b-0 hover:text-orange-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
