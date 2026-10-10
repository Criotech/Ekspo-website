import { site } from "@/content/site";
import { Section } from "./Section";
import { Button } from "./Button";

export function Pricing() {
  const { pricing } = site;
  return (
    <Section id="pricing" title={pricing.title} body={pricing.body}>
      <div className="grid gap-4 sm:grid-cols-2">
        {pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl p-7 ${
              plan.featured
                ? "bg-ink text-paper"
                : "border border-line bg-surface"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{plan.name}</h3>
              {plan.badge ? (
                <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-ink">
                  {plan.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold tracking-[-0.04em] tabular-nums">
                {plan.price}
              </span>
              <span className={plan.featured ? "text-paper/60" : "text-muted"}>
                {plan.period}
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-[0.95rem]">
              {plan.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <Check />
                  {perk}
                </li>
              ))}
            </ul>
            <Button
              href={site.downloadHref}
              variant={plan.featured ? "inverted" : "primary"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0 text-accent" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
