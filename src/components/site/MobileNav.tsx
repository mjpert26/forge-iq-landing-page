"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type MobileLink = { href: string; label: string };

/**
 * Small-screen menu: a disclosure button that reveals the links.
 * `trackActive` marks the current page (site pages); in-page anchor menus omit it.
 */
export function MobileNav({
  links,
  trackActive = false,
  label = "Site",
}: {
  links: MobileLink[];
  trackActive?: boolean;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 56.25rem)").matches) setOpen(false);
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
    <div className="nav:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded border-[1.5px] border-white/35 text-on-navy transition-colors hover:border-on-navy"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          {open ? (
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-navy-line bg-navy shadow-[0_18px_30px_-18px_rgb(0_0_0/0.6)]"
      >
        <nav aria-label={label} className="container-site flex flex-col pb-3">
          {links.map((link) => {
            const active = trackActive && pathname === link.href;
            const className = `flex min-h-12 items-center border-t border-navy-line font-display text-[0.8125rem] font-bold tracking-[0.08em] uppercase no-underline hover:text-on-navy ${
              active ? "text-on-navy" : "text-on-navy-muted"
            }`;
            return link.href.startsWith("#") ? (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={className}>
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={className}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
