"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { detectPlatform, type Platform } from "@/lib/detectPlatform";

type Installer = (typeof site.download.platforms)[number];

export const installerUrl = (installer: Installer) => `${site.downloadBaseUrl}/${installer.file}`;

export function matchesPlatform(installer: Installer, platform: Platform | null) {
  return (
    platform !== null &&
    installer.os === platform.os &&
    (platform.variant === undefined || installer.variant === platform.variant)
  );
}

export function Download() {
  const { cta, download } = site;
  // Detected after mount so the server render and first client render match.
  const [platform, setPlatform] = useState<Platform | null>(null);
  useEffect(() => setPlatform(detectPlatform()), []);

  return (
    <section id="download" className="scroll-mt-20 px-5 pb-24 sm:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-b from-sky to-paper px-6 py-20 text-center ring-1 ring-line ring-inset">
        <h2 className="font-display text-[2.4rem] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[1.05rem] text-muted">{cta.body}</p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
          {download.platforms.map((installer) => {
            const recommended = matchesPlatform(installer, platform);
            return (
              <a
                key={installer.file}
                href={installerUrl(installer)}
                download
                className={`group flex flex-col rounded-2xl p-5 transition ${
                  recommended
                    ? "bg-ink text-paper hover:opacity-90"
                    : "bg-surface/80 ring-1 ring-line ring-inset hover:bg-surface"
                }`}
              >
                <div className="flex h-6 items-center justify-between gap-2">
                  <OsIcon os={installer.os} />
                  {recommended ? (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-ink">
                      Your computer
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 font-medium">
                  {installer.name} <span className={recommended ? "text-paper/60" : "text-muted"}>· {installer.variant}</span>
                </p>
                <p className={`mt-1 text-sm ${recommended ? "text-paper/60" : "text-muted"}`}>{installer.requirement}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                  <DownloadIcon />
                  Download {installer.file.split(".").pop()} · {installer.size}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mx-auto mt-6 max-w-2xl space-y-2 text-xs leading-relaxed text-muted">
          <p>{download.notes.mac}</p>
          <p>{download.notes.windows}</p>
          <p>Version {download.version}</p>
        </div>
      </div>
    </section>
  );
}

function OsIcon({ os }: { os: Installer["os"] }) {
  return os === "mac" ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.62c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.59 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.16c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21z" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.1l7.4-1v7.2H3V5.1zm8.3-1.1L21 2.7v8.6h-9.7V4zM3 12.3h7.4v7.2L3 18.5v-6.2zm8.3 0H21v8.7l-9.7-1.3v-7.4z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13.5h11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
