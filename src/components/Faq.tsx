import { site } from "@/content/site";
import { Section } from "./Section";

export function Faq() {
  const { faq } = site;
  return (
    <Section id="faq" title={faq.title}>
      <div className="divide-y divide-line border-y border-line">
        {faq.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
