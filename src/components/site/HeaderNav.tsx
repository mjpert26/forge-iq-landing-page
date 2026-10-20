"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/config/site";

/** Desktop site navigation with the current page marked. */
export function HeaderNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Site" className="hidden items-center gap-[1.625rem] nav:flex">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`py-2 font-display text-[0.78125rem] font-bold tracking-[0.08em] uppercase no-underline transition-colors hover:text-on-navy ${
              active ? "text-on-navy underline decoration-orange decoration-2 underline-offset-[6px]" : "text-on-navy-muted"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
