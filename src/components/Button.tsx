import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "inverted";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:opacity-85",
  inverted: "bg-paper text-ink hover:opacity-85",
  ghost: "text-ink ring-1 ring-line ring-inset bg-surface/60 hover:bg-surface",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.95rem] font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
