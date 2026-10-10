import { site } from "@/content/site";
import { Button } from "./Button";

export function CallToAction() {
  const { cta } = site;
  return (
    <section id="download" className="scroll-mt-20 px-5 pb-24 sm:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-b from-sky to-paper px-6 py-20 text-center ring-1 ring-line ring-inset">
        <h2 className="font-display text-[2.4rem] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[1.05rem] text-muted">{cta.body}</p>
        <div className="mt-8 flex justify-center">
          <Button href={site.downloadHref}>{cta.button}</Button>
        </div>
      </div>
    </section>
  );
}
