/**
 * Hero visual — a utility distribution drawing assembling itself: a CAD grid and
 * landbase fade in, poles and conductors draw along a road, a dimension appears,
 * and a SPIDAcalc panel validates a structure to PASS.
 *
 * Pure inline SVG + CSS (globals.css .cad-* classes). Plays once on load,
 * renders fully assembled with JS disabled, and holds its final frame under
 * prefers-reduced-motion. Ink linework, copper for conductors and results.
 * The grid fades toward the edges so it reads as a quiet backdrop.
 */
const POLE_X = [150, 268, 386, 504, 622];
const ROAD_TOP = 302;
const POLE_TOP = 252;

export default function CadHero() {
  const ink = "var(--color-ink)";
  const copper = "var(--color-copper)";
  const green = "var(--color-signal)";
  const rule = "var(--color-rule)";
  const slate = "var(--color-slate)";
  const mono = "var(--font-mono)";

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1000 470"
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="A utility distribution drawing being drafted, with landbase, poles, conductors, a dimension and a SPIDAcalc pole-loading analysis passing."
        fill="none"
        stroke={ink}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <radialGradient id="cadGridFade" cx="40%" cy="52%" r="72%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="62%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="cadGridMask">
            <rect x="0" y="0" width="1000" height="470" fill="url(#cadGridFade)" />
          </mask>
        </defs>

        {/* CAD grid — faint, edge-faded backdrop */}
        <g className="cad-fade" style={{ opacity: 0 }}>
          <g stroke={rule} strokeWidth={1} strokeOpacity={0.5} mask="url(#cadGridMask)">
            {Array.from({ length: 17 }, (_, i) => (
              <line key={`v${i}`} x1={i * 60} y1={0} x2={i * 60} y2={470} />
            ))}
            {Array.from({ length: 8 }, (_, i) => (
              <line key={`h${i}`} x1={0} y1={i * 60} x2={1000} y2={i * 60} />
            ))}
          </g>
        </g>

        {/* North arrow */}
        <g className="cad-fade" style={{ opacity: 0, animationDelay: "0.35s" }} stroke={slate}>
          <line x1="72" y1="92" x2="72" y2="60" />
          <path d="M66 68 L72 58 L78 68" />
          <text x="72" y="110" fill={slate} textAnchor="middle" stroke="none" style={{ fontFamily: mono, fontSize: "11px", letterSpacing: "0.1em" }}>N</text>
        </g>

        {/* Landbase: road + centreline + property lines */}
        <line className="cad-draw" style={{ animationDelay: "0.2s" }} x1="40" y1={ROAD_TOP} x2="700" y2={ROAD_TOP} pathLength={1} stroke={slate} strokeWidth={1.5} />
        <line className="cad-draw" style={{ animationDelay: "0.35s" }} x1="40" y1="348" x2="700" y2="348" pathLength={1} stroke={slate} strokeWidth={1.5} />
        <line className="cad-draw" style={{ animationDelay: "0.6s" }} x1="40" y1="325" x2="700" y2="325" pathLength={1} stroke={rule} strokeWidth={1} strokeDasharray="9 8" />
        <g className="cad-fade" style={{ opacity: 0, animationDelay: "0.85s" }} stroke={rule} strokeWidth={1} strokeDasharray="4 8" strokeOpacity={0.8}>
          {[120, 268, 416, 564].map((x) => (
            <line key={x} x1={x} y1="350" x2={x} y2="404" />
          ))}
        </g>

        {/* Poles */}
        {POLE_X.map((x, i) => (
          <g key={x}>
            <line className="cad-draw" style={{ animationDelay: `${0.95 + i * 0.13}s` }} x1={x} y1={ROAD_TOP} x2={x} y2={POLE_TOP} pathLength={1} strokeWidth={2} />
            <line className="cad-draw" style={{ animationDelay: `${1.02 + i * 0.13}s` }} x1={x - 17} y1="261" x2={x + 17} y2="261" pathLength={1} strokeWidth={2} />
          </g>
        ))}

        {/* Conductors (copper spans) */}
        {POLE_X.slice(0, -1).map((x, i) => {
          const x2 = POLE_X[i + 1];
          const mid = (x + x2) / 2;
          return (
            <path
              key={x}
              className="cad-draw"
              style={{ animationDelay: `${1.75 + i * 0.12}s` }}
              d={`M${x} 254 Q ${mid} 272 ${x2} 254`}
              pathLength={1}
              stroke={copper}
              strokeWidth={2}
            />
          );
        })}

        {/* Pole numbers */}
        <g className="cad-fade" style={{ opacity: 0, animationDelay: "2.15s" }}>
          {POLE_X.map((x, i) => (
            <text key={x} x={x} y="338" fill={slate} textAnchor="middle" stroke="none" style={{ fontFamily: mono, fontSize: "10px", letterSpacing: "0.08em" }}>
              P-{String(i + 1).padStart(2, "0")}
            </text>
          ))}
        </g>

        {/* Dimension line between P-01 and P-02 */}
        <g className="cad-draw" style={{ animationDelay: "2.3s" }} stroke={slate} strokeWidth={1}>
          <line x1={POLE_X[0]} y1="224" x2={POLE_X[1]} y2="224" pathLength={1} />
          <line x1={POLE_X[0]} y1="218" x2={POLE_X[0]} y2="230" pathLength={1} />
          <line x1={POLE_X[1]} y1="218" x2={POLE_X[1]} y2="230" pathLength={1} />
        </g>
        <text className="cad-fade" style={{ opacity: 0, animationDelay: "2.6s", fontFamily: mono, fontSize: "10px", letterSpacing: "0.08em" }} x={(POLE_X[0] + POLE_X[1]) / 2} y="216" fill={slate} textAnchor="middle" stroke="none">
          42.0 m
        </text>

        {/* SPIDAcalc panel */}
        <g>
          <rect className="cad-draw" style={{ animationDelay: "1.15s" }} x="740" y="150" width="228" height="232" pathLength={1} stroke={ink} strokeWidth={1.5} />
          <line className="cad-draw" style={{ animationDelay: "1.55s" }} x1="740" y1="184" x2="968" y2="184" pathLength={1} stroke={rule} strokeWidth={1} />
          <text className="cad-fade" style={{ opacity: 0, animationDelay: "1.6s", fontFamily: mono, fontSize: "11px", letterSpacing: "0.14em" }} x="758" y="174" fill={ink} stroke="none">SPIDAcalc</text>
          <text className="cad-fade" style={{ opacity: 0, animationDelay: "1.65s", fontFamily: mono, fontSize: "9px", letterSpacing: "0.12em" }} x="948" y="174" fill={slate} stroke="none" textAnchor="end">P-03</text>

          {/* Pole elevation inside panel */}
          <g className="cad-draw" style={{ animationDelay: "1.75s" }} strokeWidth={1.75}>
            <line x1="772" y1="212" x2="772" y2="356" pathLength={1} />
            <line x1="754" y1="228" x2="790" y2="228" pathLength={1} />
            <line x1="748" y1="356" x2="812" y2="356" pathLength={1} />
          </g>
          <path className="cad-draw" style={{ animationDelay: "2.0s" }} d="M772 244 L806 356" pathLength={1} stroke={slate} strokeWidth={1} />

          {/* Utilization readout */}
          <text className="cad-fade" style={{ opacity: 0, animationDelay: "2.25s", fontFamily: mono, fontSize: "9px", letterSpacing: "0.12em" }} x="836" y="224" fill={slate} stroke="none">POLE UTILISATION</text>
          <rect className="cad-fade" style={{ opacity: 0, animationDelay: "2.3s" }} x="836" y="232" width="116" height="9" stroke={rule} strokeWidth={1} />
          <rect className="cad-grow" style={{ animationDelay: "2.5s" }} x="836" y="232" width="90" height="9" fill={green} stroke="none" />
          <text className="cad-fade" style={{ opacity: 0, animationDelay: "2.8s", fontFamily: mono, fontSize: "10px", letterSpacing: "0.05em" }} x="836" y="262" fill={green} stroke="none">78% · WITHIN LIMIT</text>

          {/* PASS pill */}
          <g className="cad-fade" style={{ opacity: 0, animationDelay: "3.05s" }}>
            <rect x="836" y="312" width="84" height="26" stroke={green} strokeWidth={1.25} />
            <path d="M848 325 L854 331 L865 318" stroke={green} strokeWidth={1.5} />
            <text x="874" y="329" fill={green} stroke="none" style={{ fontFamily: mono, fontSize: "11px", letterSpacing: "0.14em" }}>PASS</text>
          </g>
        </g>

        {/* Issued caption */}
        <g className="cad-fade-up" style={{ opacity: 0, animationDelay: "3.3s" }}>
          <line x1="40" y1="424" x2="340" y2="424" stroke={rule} strokeWidth={1} />
          <path d="M46 444 L52 450 L63 437" stroke={green} strokeWidth={1.5} />
          <text x="74" y="448" fill={ink} stroke="none" style={{ fontFamily: mono, fontSize: "11px", letterSpacing: "0.14em" }}>DESIGN APPROVED · ISSUED FOR REVIEW</text>
        </g>
      </svg>
    </div>
  );
}
