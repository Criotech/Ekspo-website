import type { Metadata } from "next";
import { site } from "@/content/site";
import { Logo } from "@/components/Logo";
import { DesktopLogin } from "@/components/DesktopLogin";

export const metadata: Metadata = {
  title: `Sign in · ${site.name}`,
  robots: { index: false },
};

export default function DesktopLoginPage() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[radial-gradient(80%_60%_at_50%_0%,var(--sky),transparent_70%)] px-5 py-16">
      <div className="rise w-full max-w-sm">
        <a href="/" aria-label={`${site.name} home`} className="mb-8 flex justify-center">
          <Logo />
        </a>
        <DesktopLogin />
      </div>
    </main>
  );
}
