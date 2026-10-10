export function Kbd({ children }: { children: string }) {
  return (
    <kbd className="grid h-5 min-w-5 place-items-center rounded-md border border-line bg-surface px-1 font-mono text-[11px] leading-none text-muted shadow-[0_1px_0_var(--line)]">
      {children}
    </kbd>
  );
}
