"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

async function writeToClipboard(text: string, input: HTMLInputElement): Promise<boolean> {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path below.
    }
  }
  try {
    input.focus();
    input.select();
    return document.execCommand("copy");
  } catch {
    return false;
  }
}

export function CopyLink({ url, inputId }: { url: string; inputId: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    const input = inputRef.current;
    if (!input) return;
    window.clearTimeout(timer.current);
    const ok = await writeToClipboard(url, input);
    if (ok) {
      setStatus("copied");
      timer.current = window.setTimeout(() => setStatus("idle"), 4000);
    } else {
      input.focus();
      input.select();
      setStatus("failed");
    }
  }

  return (
    <div>
      <label htmlFor={inputId} className="label-caps mb-2 block">
        Referral link
      </label>
      <div className="flex items-stretch gap-2">
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          readOnly
          value={url}
          spellCheck={false}
          aria-describedby={`${inputId}-hint`}
          onFocus={(event) => event.currentTarget.select()}
          className="min-h-11 w-full min-w-0 flex-1 rounded border border-line bg-page px-3 py-2.5 text-[0.9375rem] font-semibold text-ink"
        />
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-orange min-w-[6.5rem] shrink-0 !px-4 text-[0.8125rem]"
        >
          {status === "copied" ? (
            <>
              <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied
            </>
          ) : (
            "Copy link"
          )}
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-2 min-h-[1.5em] text-sm font-semibold empty:mt-0 empty:min-h-0">
        {status === "copied" ? (
          <span className="text-[#1d7a46]">Link copied to your clipboard.</span>
        ) : status === "failed" ? (
          <span className="text-[#a8410a]">
            Couldn&rsquo;t copy automatically. The link is selected: press Ctrl+C (Windows) or Cmd+C
            (Mac), or press and hold to copy on a phone.
          </span>
        ) : null}
      </p>
    </div>
  );
}
