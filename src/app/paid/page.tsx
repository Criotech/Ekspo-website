import type { Metadata } from "next";
import { site, SUPPORT_EMAIL } from "@/content/site";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: `Payment received · ${site.name}`,
  robots: { index: false },
};

// Paystack sends the browser here after checkout (PAYSTACK_CALLBACK_URL), adding
// ?trxref=…&reference=…. The plan itself is turned on by the paystack-webhook function, not
// by this page, so it only confirms and points the user back to the app.
export default async function PaidPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string }>;
}) {
  const { reference, trxref } = await searchParams;
  const ref = reference || trxref;

  return (
    <main className="grid min-h-dvh place-items-center bg-[radial-gradient(80%_60%_at_50%_0%,var(--sky),transparent_70%)] px-5 py-16">
      <div className="rise w-full max-w-sm">
        <a href="/" aria-label={`${site.name} home`} className="mb-8 flex justify-center">
          <Logo />
        </a>
        <div className="rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_80px_-40px_rgba(20,40,80,0.45)] sm:p-8">
          <h1 className="font-display text-[1.7rem] leading-tight font-semibold tracking-[-0.03em]">
            Payment received
          </h1>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
            Thank you. Go back to {site.name} and your new plan will show within a minute. You can
            close this tab.
          </p>
          <div className="mt-6">
            {/* Opening the app with no path just brings its window forward. */}
            <Button href="ekspo://" className="w-full">
              Open {site.name}
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted">
            Plan not showing after a few minutes? Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}${ref ? `?subject=${encodeURIComponent(`Payment ${ref}`)}` : ""}`} className="text-accent">
              {SUPPORT_EMAIL}
            </a>
            {ref ? " with your payment reference:" : "."}
          </p>
          {ref ? (
            <code className="mt-3 block truncate rounded-xl bg-paper px-3 py-2.5 font-mono text-[0.8rem]">{ref}</code>
          ) : null}
        </div>
      </div>
    </main>
  );
}
