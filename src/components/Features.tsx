import { site } from "@/content/site";
import { Section } from "./Section";
import { Kbd } from "./Kbd";

type Visual = (typeof site.features.items)[number]["visual"];

export function Features() {
  const { features } = site;
  return (
    <Section id="features" title={features.title} body={features.body}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <div
              aria-hidden="true"
              className="grid h-40 place-items-center border-b border-line bg-gradient-to-b from-sky/50 to-paper px-6"
            >
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

const card = "rounded-xl border border-line bg-surface shadow-sm";
const label = "text-[9px] font-medium tracking-[0.08em] uppercase";

function FeatureVisual({ kind }: { kind: Visual }) {
  switch (kind) {
    case "answer":
      return (
        <div className={`w-52 space-y-2 p-3 ${card}`}>
          <div className="rounded-lg rounded-tl-sm bg-sky/70 px-2 py-1.5 text-[10px] leading-tight">
            Why do you want this role?
          </div>
          <p className={`${label} text-accent`}>Answer</p>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded-full bg-ink/15" />
            <div className="h-1.5 w-5/6 rounded-full bg-ink/15" />
            <div className="h-1.5 w-2/5 rounded-full bg-accent/50" />
          </div>
        </div>
      );
    case "screen":
      return (
        <div className={`relative w-52 p-3 font-mono text-[9px] leading-[1.7] text-muted ${card}`}>
          <p>function twoSum(nums, t) {"{"}</p>
          <p className="pl-3">// return indices…</p>
          <p>{"}"}</p>
          <div className="absolute inset-x-2 top-2 bottom-5 rounded-md border-2 border-dashed border-accent/70 bg-accent/5" />
          <span className="absolute -right-2 -bottom-3 flex gap-0.5">
            <Kbd>⌃</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>R</Kbd>
          </span>
        </div>
      );
    case "profile":
      return (
        <div className="flex items-center gap-3">
          <div className={`w-20 space-y-1.5 p-2.5 ${card}`}>
            <p className={`${label} text-muted`}>Resume</p>
            <div className="h-1 w-full rounded-full bg-ink/15" />
            <div className="h-1 w-4/5 rounded-full bg-ink/15" />
            <div className="h-1 w-full rounded-full bg-ink/15" />
          </div>
          <span className="text-muted">→</span>
          <div className={`w-24 space-y-1.5 p-2.5 ${card}`}>
            <p className={`${label} text-accent`}>Key points</p>
            <div className="h-1 w-full rounded-full bg-accent/50" />
            <div className="h-1 w-3/4 rounded-full bg-accent/50" />
            <div className="h-1 w-5/6 rounded-full bg-accent/50" />
          </div>
        </div>
      );
    case "local":
      return (
        <div className="flex flex-col items-center gap-2.5">
          <div className="flex h-8 items-center gap-[3px]">
            {[30, 60, 90, 50, 100, 70, 40, 80, 55, 30, 65, 45].map((h, i) => (
              <span key={i} className="w-[3px] rounded-full bg-ink/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="rounded-full border border-line bg-surface px-2.5 py-1 text-[10px] font-medium">
            Transcribed on this computer
          </span>
        </div>
      );
    case "stealth":
      return (
        <div className="flex items-end gap-3">
          <div className="text-center">
            <div className={`relative h-16 w-24 ${card}`}>
              <div className="absolute top-2 right-2 h-8 w-12 rounded-md border border-line bg-sky" />
            </div>
            <p className="mt-1.5 text-[9px] text-muted">Your screen</p>
          </div>
          <div className="text-center">
            <div className={`relative h-16 w-24 ${card}`}>
              <div className="absolute top-2 right-2 h-8 w-12 rounded-md border border-dashed border-line" />
            </div>
            <p className="mt-1.5 text-[9px] text-muted">What they see</p>
          </div>
        </div>
      );
    case "models":
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1.5">
            {["Haiku", "Sonnet", "Opus"].map((m) => (
              <span
                key={m}
                className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                  m === "Opus" ? "border-ink bg-ink text-paper" : "border-line bg-surface"
                }`}
              >
                {m}
              </span>
            ))}
          </div>
          <span className="text-[10px] text-muted">or your Claude, ChatGPT or Gemini plan</span>
        </div>
      );
  }
}
