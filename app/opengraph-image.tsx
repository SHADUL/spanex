import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "SPANEX Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Link-share card: the SPANEX logo centred on the brand navy. Used for Open
 * Graph / Twitter previews across the site.
 */
export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "spanex-logo-white.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C2237",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={660} height={195} alt="" />
        <div
          style={{
            marginTop: 44,
            color: "#AEB4C0",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Utility Distribution Drafting &amp; Design
        </div>
      </div>
    ),
    { ...size },
  );
}
