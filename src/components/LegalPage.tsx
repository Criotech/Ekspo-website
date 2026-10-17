import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

// Shared frame for /terms, /privacy, /refunds and /contact: the usual nav and
// footer around one readable column. Body typography lives under `.legal` in
// globals.css so the pages can be written as plain h2/p/ul markup.
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main id="main" className="px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <article className="mx-auto max-w-3xl">
          <header className="rise border-b border-line pb-8">
            <h1 className="font-display text-[2.4rem] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{intro}</p>
            ) : null}
            <p className="mt-5 font-mono text-xs text-muted">Last updated: {site.legal.updated}</p>
          </header>
          <div className="legal rise mt-4" style={{ animationDelay: "80ms" }}>
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
