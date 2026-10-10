import { site } from "@/content/site";
import { Kbd } from "./Kbd";
import { Logo } from "./Logo";

// A drawn mock of the app: a video call, with the ekspo panel floating on top.
export function ProductPreview() {
  const { preview } = site;
  return (
    <div
      role="img"
      aria-label={`ekspo answering "${preview.question}" during a video call`}
      className="relative rounded-[24px] border border-line bg-surface/60 p-2 shadow-[0_40px_100px_-40px_rgba(20,40,80,0.45)] backdrop-blur"
    >
      <div className="overflow-hidden rounded-[18px] border border-line bg-paper">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate text-xs font-medium">{preview.meeting}</span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-muted tabular-nums">
            <span className="size-1.5 rounded-full bg-[#e5484d]" />
            {preview.elapsed}
          </span>
        </div>

        <div className="relative p-3 sm:p-4">
          {/* The call underneath */}
          <div aria-hidden="true" className="grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-3">
            {preview.participants.map((p) => (
              <div
                key={p.name}
                className={`relative grid aspect-square sm:aspect-[16/8] place-items-center rounded-xl bg-sky/45 ${
                  p.speaking ? "ring-2 ring-accent/70" : ""
                }`}
              >
                <span className="grid size-9 place-items-center rounded-full bg-surface font-display text-xs font-semibold text-ink/70 sm:size-16 sm:text-lg">
                  {p.initials}
                </span>
                <span className="absolute bottom-2 left-2 hidden rounded-md sm:block bg-ink/55 px-1.5 py-0.5 text-[10px] font-medium text-paper sm:text-[11px]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          {/* The ekspo panel */}
          <div className="relative mx-auto mt-3 max-w-[27rem] rounded-2xl sm:absolute sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 border border-line bg-surface/85 text-left shadow-[0_24px_60px_-20px_rgba(20,40,80,0.5)] backdrop-blur-xl sm:inset-x-auto sm:right-10">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <Logo className="scale-[0.8] origin-left" />
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                <span className="listening flex h-3 items-end gap-[2px]" aria-hidden="true">
                  <i /><i /><i /><i />
                </span>
                Listening
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 rounded-xl border border-line bg-paper px-3 py-2.5">
                <span className="min-w-0 flex-1 truncate text-sm">{preview.question}</span>
                <span className="flex shrink-0 gap-1">
                  {preview.shortcut.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </span>
              </div>
              <p className="mt-4 text-[11px] font-medium tracking-[0.08em] text-muted uppercase">
                {preview.answerTitle}
              </p>
              <ul className="mt-2.5 space-y-2 text-[13px] leading-snug sm:text-sm">
                {preview.answer.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden items-center gap-4 border-t border-line px-4 py-2.5 text-[11px] text-muted sm:flex">
              {preview.hints.map((h) => (
                <span key={h.label} className="flex items-center gap-1.5">
                  <span className="flex gap-1">
                    {h.keys.map((k) => (
                      <Kbd key={k}>{k}</Kbd>
                    ))}
                  </span>
                  {h.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
