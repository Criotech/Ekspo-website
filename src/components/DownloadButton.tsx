"use client";

import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/content/site";
import { detectPlatform, type Platform } from "@/lib/detectPlatform";
import { Button } from "./Button";
import { installerUrl, matchesPlatform } from "./Download";

// Links straight to the visitor's installer when we can tell which one it is,
// otherwise to the #download section with every option.
export function DownloadButton({ children, className }: { children: ReactNode; className?: string }) {
  const [platform, setPlatform] = useState<Platform | null>(null);
  useEffect(() => setPlatform(detectPlatform()), []);

  const installer = site.download.platforms.find((i) => matchesPlatform(i, platform));
  return (
    <Button href={installer ? installerUrl(installer) : site.downloadHref} className={className}>
      {children}
    </Button>
  );
}
