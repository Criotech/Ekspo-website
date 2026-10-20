"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Nav() {
  // Fully transparent over the hero; a light frosted bar once the page scrolls.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-line/50 bg-paper/40 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="/" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm text-muted md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href={site.downloadHref} className="h-9 px-4 text-sm">
            Download
          </Button>
          {/* Mobile menu: a native disclosure, no JavaScript needed */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Open menu"
              className="grid size-9 cursor-pointer list-none place-items-center rounded-full ring-1 ring-line ring-inset [&::-webkit-details-marker]:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="group-open:hidden">
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="hidden group-open:block">
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-3 flex w-52 flex-col rounded-2xl border border-line bg-surface p-2 shadow-[0_20px_50px_-20px_rgba(20,40,80,0.4)]"
            >
              {site.nav.map((item) => (
                <a key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 text-[0.95rem] hover:bg-paper">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
