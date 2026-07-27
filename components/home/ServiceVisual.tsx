import type { ServiceIconName } from "@/lib/content";

/**
 * Custom technical visuals — one handcrafted, blueprint-register SVG per service
 * line. Navy line-art on a soft neutral surface with a single red accent and a
 * faint drafting grid. On-brand, unique, zero external dependency, perfect CWV.
 */

const INK = "var(--color-ink)";
const SLATE = "var(--color-slate)";
const RULE = "var(--color-rule)";
const COPPER = "var(--color-copper)";
const SIGNAL = "var(--color-signal)";

function Grid({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M28 0H0V28" fill="none" stroke={RULE} strokeWidth="1" opacity="0.55" />
      </pattern>
    </defs>
  );
}

function Frame({
  children,
  label,
  grid,
}: {
  children: React.ReactNode;
  label: string;
  grid: string;
}) {
  return (
    <div className="media-frame surface aspect-[7/5] w-full">
      <svg viewBox="0 0 700 500" className="h-full w-full" role="img" aria-label={label}>
        <Grid id={grid} />
        <rect x="0" y="0" width="700" height="500" fill={`url(#${grid})`} />
        {children}
        {/* corner tick registration marks */}
        <g stroke={SLATE} strokeWidth="1.25" opacity="0.5">
          <path d="M24 24h20M24 24v20" fill="none" />
          <path d="M676 24h-20M676 24v20" fill="none" />
          <path d="M24 476h20M24 476v-20" fill="none" />
          <path d="M676 476h-20M676 476v-20" fill="none" />
        </g>
      </svg>
    </div>
  );
}

function Drafting() {
  return (
    <Frame label="Plan and profile drafting" grid="g-draft">
      {/* ground line */}
      <line x1="70" y1="360" x2="630" y2="360" stroke={INK} strokeWidth="1.75" />
      {/* three poles */}
      {[160, 350, 540].map((x) => (
        <g key={x} stroke={INK} strokeWidth="1.75" strokeLinecap="round" fill="none">
          <line x1={x} y1={360} x2={x} y2={170} />
          <line x1={x - 34} y1={200} x2={x + 34} y2={200} />
          <line x1={x - 26} y1={188} x2={x - 26} y2={200} />
          <line x1={x + 26} y1={188} x2={x + 26} y2={200} />
        </g>
      ))}
      {/* catenary conductors */}
      <path d="M160 200 Q255 262 350 200" fill="none" stroke={COPPER} strokeWidth="2" />
      <path d="M350 200 Q445 262 540 200" fill="none" stroke={COPPER} strokeWidth="2" />
      {/* dimension line */}
      <g stroke={SLATE} strokeWidth="1.25">
        <line x1="160" y1="410" x2="350" y2="410" />
        <path d="M160 404v12M350 404v12" />
      </g>
      <text x="255" y="400" fill={SLATE} fontSize="15" textAnchor="middle" fontFamily="var(--font-mono)">
        SPAN
      </text>
      {/* title block */}
      <g stroke={RULE} strokeWidth="1.25" fill="none">
        <rect x="500" y="410" width="150" height="60" />
        <line x1="500" y1="440" x2="650" y2="440" />
        <line x1="575" y1="410" x2="575" y2="470" />
      </g>
    </Frame>
  );
}

function Autocad() {
  return (
    <Frame label="AutoCAD design" grid="g-cad">
      {/* plan polylines */}
      <path
        d="M120 380 L120 180 L300 180 L300 120 L520 120 L520 300 L400 300 L400 380 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M160 340 L160 220 L280 220" fill="none" stroke={SLATE} strokeWidth="1.25" />
      {/* crosshair */}
      <g stroke={COPPER} strokeWidth="1.5">
        <line x1="300" y1="180" x2="300" y2="120" opacity="0" />
        <circle cx="520" cy="120" r="9" fill="none" />
        <line x1="500" y1="120" x2="540" y2="120" />
        <line x1="520" y1="100" x2="520" y2="140" />
      </g>
      {/* layer stack indicator */}
      <g>
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={545 - i * 10}
            y={360 - i * 10}
            width="70"
            height="44"
            rx="6"
            fill="var(--color-paper)"
            stroke={i === 0 ? INK : RULE}
            strokeWidth="1.25"
          />
        ))}
        <line x1="560" y1="382" x2="600" y2="382" stroke={COPPER} strokeWidth="2" />
      </g>
    </Frame>
  );
}

function Gis() {
  return (
    <Frame label="GIS and landbase mapping" grid="g-gis">
      {/* parcels */}
      <g fill="none" stroke={INK} strokeWidth="1.5">
        <path d="M90 130 L280 110 L300 250 L110 280 Z" />
        <path d="M300 250 L280 110 L470 130 L500 260 Z" />
        <path d="M110 280 L300 250 L330 400 L140 420 Z" />
        <path d="M330 400 L300 250 L500 260 L520 400 Z" />
      </g>
      {/* road centerline */}
      <path
        d="M70 200 Q300 150 400 300 T650 340"
        fill="none"
        stroke={SLATE}
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      {/* location pin */}
      <g>
        <path
          d="M560 150 c0 26 -26 40 -26 62 a26 26 0 1 1 52 0 c0 -22 -26 -36 -26 -62 Z"
          fill="none"
          stroke={COPPER}
          strokeWidth="2"
          transform="translate(-14 -60)"
        />
        <circle cx="546" cy="150" r="7" fill={COPPER} />
      </g>
    </Frame>
  );
}

function Spidacalc() {
  return (
    <Frame label="SPIDAcalc pole loading analysis" grid="g-spida">
      {/* pole */}
      <g stroke={INK} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1="250" y1="410" x2="250" y2="120" />
        <line x1="205" y1="165" x2="295" y2="165" />
        <line x1="215" y1="230" x2="285" y2="230" />
      </g>
      {/* guy + anchor */}
      <line x1="250" y1="165" x2="360" y2="410" stroke={SLATE} strokeWidth="1.5" strokeDasharray="6 6" />
      {/* load vectors */}
      <g stroke={COPPER} strokeWidth="2">
        <line x1="205" y1="165" x2="150" y2="165" />
        <path d="M150 165 l14 -6 M150 165 l14 6" fill="none" />
        <line x1="295" y1="165" x2="350" y2="165" opacity="0" />
      </g>
      {/* utilization gauge */}
      <g>
        <text x="470" y="180" fill={SLATE} fontSize="14" fontFamily="var(--font-mono)" textAnchor="middle">
          CAPACITY
        </text>
        <rect x="410" y="200" width="180" height="16" rx="8" fill="none" stroke={RULE} strokeWidth="1.5" />
        <rect x="410" y="200" width="128" height="16" rx="8" fill={SIGNAL} opacity="0.9" />
        <g transform="translate(470 270)">
          <circle r="30" fill="none" stroke={RULE} strokeWidth="6" />
          <path d="M0 -30 A30 30 0 1 1 -22 20" fill="none" stroke={SIGNAL} strokeWidth="6" strokeLinecap="round" />
          <path d="M-9 0 l7 8 l14 -18" fill="none" stroke={SIGNAL} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="470" y="330" fill={SIGNAL} fontSize="14" fontFamily="var(--font-mono)" textAnchor="middle">
          PASS
        </text>
      </g>
    </Frame>
  );
}

function Fibre() {
  const nodes: [number, number][] = [
    [110, 150],
    [250, 110],
    [230, 280],
    [390, 200],
    [400, 360],
    [540, 140],
    [560, 300],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 5],
    [3, 6],
    [4, 6],
    [5, 6],
  ];
  const route = [0, 1, 3, 6];
  const inRoute = (a: number, b: number) => {
    for (let i = 0; i < route.length - 1; i++) {
      if (
        (route[i] === a && route[i + 1] === b) ||
        (route[i] === b && route[i + 1] === a)
      )
        return true;
    }
    return false;
  };
  return (
    <Frame label="Telecom and fibre network design" grid="g-fibre">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={inRoute(a, b) ? COPPER : RULE}
          strokeWidth={inRoute(a, b) ? 2.25 : 1.5}
        />
      ))}
      {nodes.map(([x, y], i) => {
        const onRoute = route.includes(i);
        return (
          <g key={i}>
            {onRoute && <circle cx={x} cy={y} r="14" fill="none" stroke={COPPER} strokeWidth="1" opacity="0.35" />}
            <circle
              cx={x}
              cy={y}
              r="7"
              fill={onRoute ? COPPER : "var(--color-paper)"}
              stroke={onRoute ? COPPER : INK}
              strokeWidth="1.75"
            />
          </g>
        );
      })}
    </Frame>
  );
}

const MAP: Record<ServiceIconName, () => React.ReactElement> = {
  drafting: Drafting,
  autocad: Autocad,
  gis: Gis,
  spidacalc: Spidacalc,
  fibre: Fibre,
};

export function ServiceVisual({ name }: { name: ServiceIconName }) {
  const Visual = MAP[name];
  return <Visual />;
}
