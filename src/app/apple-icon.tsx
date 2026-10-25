import { ImageResponse } from "next/og";

// The home-screen icon for iOS, and the fallback Safari uses since it ignores SVG favicons.
// Same mark as src/app/icon.svg; iOS rounds the corners itself, so the tile is square.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2b59f0",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 22 22">
          <rect x="1" y="5" width="14" height="14" rx="4" fill="#ffffff" opacity="0.45" />
          <rect x="7" y="2" width="14" height="14" rx="4" fill="#ffffff" />
        </svg>
      </div>
    ),
    size,
  );
}
