import { site } from "@/content/site";
import { Section } from "./Section";

export function Steps() {
  const { steps } = site;
  return (
    <Section id="how-it-works" title={steps.title}>
      <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        {steps.items.map((step, i) => (
          <li key={step.title} className="border-t border-ink pt-5">
            <span className="font-mono text-xs text-muted">Step {i + 1}</span>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
