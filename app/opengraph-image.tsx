import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SPANEX — Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Catenary path for the OG canvas, same cosh geometry as the hero.
function ogCatenary(): string {
  const XL = 120,
    XR = 1080,
    YT = 300,
    K = 1.9,
    sag = 150;
  const xc = (XL + XR) / 2,
    half = (XR - XL) / 2,
    coshK = Math.cosh(K);
  let d = "";
  const N = 48;
  for (let i = 0; i <= N; i++) {
    const x = XL + (i / N) * (XR - XL);
    const u = (x - xc) / half;
    const y = YT + sag * ((coshK - Math.cosh(K * u)) / (coshK - 1));
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d.trim();
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}
        >
          <span style={{ color: "#1c2237", fontWeight: 700, letterSpacing: -1 }}>
            SPANEX
          </span>
          <span style={{ width: 8, height: 8, background: "#e92c1a" }} />
          <span
            style={{
              color: "#5a6b7a",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Engineering
          </span>
        </div>

        <svg width="1040" height="360" viewBox="0 0 1200 500" style={{ position: "absolute", left: 80, top: 130, opacity: 0.9 }}>
          <rect x="114" y="294" width="12" height="12" fill="#1c2237" />
          <rect x="1074" y="294" width="12" height="12" fill="#1c2237" />
          <path d={ogCatenary()} fill="none" stroke="#e92c1a" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#1c2237",
              fontSize: 58,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.02,
              maxWidth: 900,
            }}
          >
            Utility distribution drafting, designed with precision.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
