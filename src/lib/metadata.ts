import type { Metadata } from "next";

/** Per-page title, description, canonical path and social tags. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  // Every page sets its own canonical URL from its path.
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
