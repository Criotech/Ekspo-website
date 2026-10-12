import { site } from "@/content/site";
import { Button } from "./Button";
import { AppScreenshot } from "./AppScreenshot";
import { DownloadButton } from "./DownloadButton";

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
          <DownloadButton>{hero.primaryCta}</DownloadButton>
          <Button href="#how-it-works" variant="ghost">
            {hero.secondaryCta}
          </Button>
        </div>
        <p className="rise mt-4 text-xs text-muted" style={{ animationDelay: "300ms" }}>
          {hero.note}
        </p>
      </div>

      <div className="rise mx-auto mt-16 max-w-5xl" style={{ animationDelay: "380ms" }}>
        <AppScreenshot />
      </div>
    </section>
  );
}
