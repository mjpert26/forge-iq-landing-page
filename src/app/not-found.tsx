import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = { title: "Page not found · Forge Capital Advisory" };

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main" className="flex-1 bg-navy text-on-navy">
        <div className="container-site py-20 nav:py-28">
          <p className="eyebrow !tracking-[0.18em] !text-orange">404</p>
          <h1 className="headline mt-3 text-[clamp(2.75rem,1.4rem+5vw,5.25rem)] !leading-[0.95]">
            Page not found.
          </h1>
          <p className="mt-5 max-w-[38em] text-[1.1875rem] text-on-navy-muted">
            The page you were looking for doesn&rsquo;t exist or has moved.
          </p>
          <Link href="/" className="btn btn-orange mt-8">
            Back to home
          </Link>
        </div>
        <div className="h-2.5 bg-orange" aria-hidden="true" />
      </main>
      <SiteFooter />
    </div>
  );
}
