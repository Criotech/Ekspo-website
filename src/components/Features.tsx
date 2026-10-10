import { site } from "@/content/site";
import { Section } from "./Section";
import { Kbd } from "./Kbd";

type Visual = (typeof site.features.items)[number]["visual"];

export function Features() {
  const { features } = site;
  return (
    <Section id="features" title={features.title} body={features.body}>
      <div className="grid gap-4 md:grid-cols-3">
        {features.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <div className="grid h-40 place-items-center border-b border-line bg-gradient-to-b from-sky/50 to-paper">
              <FeatureVisual kind={item.visual} />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FeatureVisual({ kind }: { kind: Visual }) {
  if (kind === "shortcut") {
    return (
      <div aria-hidden="true" className="flex items-center gap-2">
        <span className="grid h-14 w-14 place-items-center rounded-xl border border-line bg-surface font-mono text-xl shadow-[0_3px_0_var(--line)]">
          ⌘
        </span>
        <span className="text-muted">+</span>
        <span className="grid h-14 w-20 place-items-center rounded-xl border border-line bg-surface font-mono text-xl shadow-[0_3px_0_var(--line)]">
          ↵
        </span>
      </div>
    );
  }
  if (kind === "context") {
    return (
      <div aria-hidden="true" className="w-48 rounded-xl border border-line bg-surface p-3 shadow-sm">
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-line" />
          <div className="h-1.5 w-5/6 rounded-full bg-accent/50" />
          <div className="h-1.5 w-4/6 rounded-full bg-accent/50" />
          <div className="h-1.5 w-3/4 rounded-full bg-line" />
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sky px-2 py-0.5 text-[10px] font-medium">
          <span className="size-1 rounded-full bg-accent" />
          Reading this page
        </div>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="flex flex-col items-center gap-2">
      <svg width="40" height="46" viewBox="0 0 40 46" className="text-ink">
        <rect x="3" y="19" width="34" height="25" rx="7" fill="currentColor" />
        <path d="M11 19v-6a9 9 0 0 1 18 0v6" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="20" cy="31" r="3.5" fill="var(--paper)" />
      </svg>
      <span className="flex items-center gap-1 text-[11px] text-muted">
        Stored on <Kbd>this device</Kbd>
      </span>
    </div>
  );
}
