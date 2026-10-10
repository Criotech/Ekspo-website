export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="1" y="5" width="14" height="14" rx="4" fill="currentColor" opacity="0.25" />
        <rect x="7" y="2" width="14" height="14" rx="4" fill="currentColor" />
      </svg>
      <span className="font-display text-[1.35rem] font-semibold tracking-[-0.04em]">
        ekspo
      </span>
    </span>
  );
}
