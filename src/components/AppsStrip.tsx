import { site } from "@/content/site";

export function AppsStrip() {
  const { apps } = site;
  return (
    <section aria-label={apps.label} className="px-5 pt-4 pb-4 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <p className="text-xs font-medium tracking-[0.08em] text-muted uppercase">{apps.label}</p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-display text-lg font-semibold tracking-[-0.02em] text-ink/45 sm:text-xl">
          {apps.items.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
