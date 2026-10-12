// Best-effort guess at the visitor's computer, used only to put the right
// installer first. Browsers don't expose CPU type directly: Chrome and Firefox
// name the GPU through WebGL ("Apple M2" vs "Intel Iris"), Safari doesn't, so
// a Mac defaults to Apple Silicon unless the GPU says Intel.
export type Platform = { os: "mac" | "windows" | "other"; variant?: "Apple Silicon" | "Intel" };

export function detectPlatform(): Platform {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const platform = nav.userAgentData?.platform || nav.platform || nav.userAgent;

  if (/win/i.test(platform)) return { os: "windows" };
  // iPads ask for desktop sites as "Macintosh"; touch support gives them away.
  if (/mac/i.test(platform) && navigator.maxTouchPoints < 2) {
    return { os: "mac", variant: /intel/i.test(gpuName()) ? "Intel" : "Apple Silicon" };
  }
  return { os: "other" };
}

function gpuName(): string {
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    const ext = gl?.getExtension("WEBGL_debug_renderer_info");
    return (ext && gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL)) || "";
  } catch {
    return "";
  }
}
