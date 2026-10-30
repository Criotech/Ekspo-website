import Image from "next/image";
import { site } from "@/content/site";

// A real capture of the Ekspo window mid-meeting, in the site's dark theme.
// Regenerate from the app repo:
//   MA_NO_AUTH=1 MA_SMOKE=1 MA_SMOKE_TAB=hero MA_SMOKE_THEME=dark MA_SMOKE_SHOT=out.png npx electron .
// then `cwebp -lossless` into public/screenshots/app-dark.webp (2280×1280).
export function AppScreenshot() {
  const alt = `The Ekspo window during a live meeting: the transcript on the left, and a suggested answer to "${site.preview.question}" on the right`;
  return (
    <div className="relative">
      {/* Soft glow so the glass window lifts off the horizon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[48px] bg-accent/10 blur-3xl"
      />
      <div className="rounded-[22px] border border-line bg-surface/50 p-1.5 shadow-[0_40px_100px_-40px_rgba(20,40,80,0.5)] backdrop-blur">
        <Image
          src="/screenshots/app-dark.webp"
          alt={alt}
          width={2280}
          height={1280}
          priority
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="block h-auto w-full rounded-[16px]"
        />
      </div>
    </div>
  );
}
