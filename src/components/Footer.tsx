import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const { footer } = site;
  return (
    <footer className="border-t border-line px-5 pt-14 pb-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{footer.blurb}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium tracking-[0.08em] text-muted uppercase">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-ink/80 transition hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {site.company}. {site.name} is made by {site.company}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
