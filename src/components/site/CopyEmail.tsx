"use client";

import { useEffect, useRef, useState } from "react";
import { copyText, selectContents } from "@/lib/clipboard";

type Status = "idle" | "copied" | "failed";

/** Contact-card email with copy and mail actions. */
export function CopyEmail({ email, label, hint }: { email: string; label: string; hint: string }) {
  const emailRef = useRef<HTMLParagraphElement>(null);
  const [local, domain] = email.split("@");
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    window.clearTimeout(timer.current);
    if (await copyText(email)) {
      setStatus("copied");
      timer.current = window.setTimeout(() => setStatus("idle"), 4000);
    } else {
      if (emailRef.current) selectContents(emailRef.current);
      setStatus("failed");
    }
  }

  return (
    <div className="rounded-lg bg-navy p-7 text-on-navy">
      <p id="contact-email-label" className="font-display text-[0.6875rem] font-bold tracking-[0.14em] text-on-navy-muted uppercase">
        {label}
      </p>
      <p
        ref={emailRef}
        aria-labelledby="contact-email-label"
        className="mt-2 font-display text-[clamp(1.125rem,0.95rem+0.8vw,1.5rem)] font-extrabold [overflow-wrap:anywhere]"
      >
        {local}
        <wbr />@{domain}
      </p>
      <div className="mt-[1.125rem] flex flex-wrap gap-2.5">
        <button type="button" onClick={handleCopy} className="btn btn-orange min-w-[8.5rem]">
          {status === "copied" ? "Copied" : "Copy email"}
        </button>
        <a href={`mailto:${email}`} className="btn btn-ghost">
          Open in mail
        </a>
      </div>
      <p role="status" aria-live="polite" className="mt-3 text-sm font-semibold empty:hidden">
        {status === "copied" ? (
          <span className="text-[#7fd4a1]">Email address copied.</span>
        ) : status === "failed" ? (
          <span className="text-orange">
            Couldn&rsquo;t copy automatically. The address is selected: press Ctrl+C or Cmd+C to copy.
          </span>
        ) : null}
      </p>
      <p className="mt-3.5 text-sm text-on-navy-muted">{hint}</p>
    </div>
  );
}
