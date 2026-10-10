import { site } from "@/content/site";
import { Button } from "./Button";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-12 sm:px-8 sm:pt-40">
      {/* Pale horizon: sky fading into the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] bg-gradient-to-b from-sky via-sky/40 to-transparent"
      />
      {/* Soft clouds on the horizon */}
      <div aria-hidden="true" className="clouds pointer-events-none absolute inset-x-0 top-[22rem] -z-10 h-80" />
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-medium text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {hero.badge}
        </span>
        <h1
          className="rise mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.045em] sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {hero.title}
        </h1>
        <p
          className="rise mt-6 max-w-xl text-[1.1rem] leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          {hero.body}
        </p>
        <div
          className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <Button href={site.downloadHref}>
            <AppleGlyph />
            {hero.primaryCta}
          </Button>
          <Button href="#how-it-works" variant="ghost">
            {hero.secondaryCta}
          </Button>
        </div>
        <p className="rise mt-4 text-xs text-muted" style={{ animationDelay: "300ms" }}>
          {hero.note}
        </p>
      </div>

      <div className="rise mx-auto mt-16 max-w-4xl" style={{ animationDelay: "380ms" }}>
        <ProductPreview />
      </div>
    </section>
  );
}

function AppleGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.73c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66ZM14.1 5.97c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.52 2.68-1.27Z" />
    </svg>
  );
}
