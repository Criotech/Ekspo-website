import type { ReactNode } from "react";

export function Section({
  id,
  title,
  body,
  children,
}: {
  id: string;
  title: string;
  body?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:items-end sm:gap-10">
          <h2 className="font-display text-[2.1rem] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl">
            {title}
          </h2>
          {body ? (
            <p className="max-w-md text-[1.05rem] leading-relaxed text-muted sm:justify-self-end">
              {body}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
