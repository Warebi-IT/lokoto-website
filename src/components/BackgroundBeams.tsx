/**
 * Aceternity UI — Background Beams
 * Reproduit l'effet signature : des faisceaux lumineux qui voyagent
 * le long de courbes SVG via stroke-dashoffset animation CSS.
 */

const BEAM_PATHS = [
  "M-400,200 C-200,100 100,-50 400,80 C700,210 900,50 1200,120 C1400,170 1600,80 1800,20",
  "M-400,280 C-100,180 200,50 500,150 C750,230 1000,80 1300,160 C1500,210 1700,100 1900,60",
  "M-400,360 C-50,260 300,130 600,220 C850,290 1100,130 1400,200 C1580,245 1750,140 1900,100",
  "M-400,440 C0,340 400,200 700,290 C950,360 1150,180 1450,260 C1640,305 1800,180 1900,140",
  "M-400,520 C50,420 450,280 750,370 C1000,440 1200,250 1500,340 C1700,395 1860,250 1900,200",
  "M-400,140 C-150,60 150,-80 450,30 C700,120 950,-20 1250,70 C1460,130 1680,20 1900,-40",
  "M-400,600 C100,490 500,360 800,450 C1050,520 1250,310 1550,410 C1740,465 1880,320 1900,280",
  "M-400,80  C-100,10  200,-100 500,-10 C780,70 1020,-60 1320,40  C1530,100 1730,0 1900,-60",
  "M-400,680 C150,560 600,420 900,520 C1150,600 1350,380 1650,470 C1810,510 1900,390 1900,360",
  "M-200,750 C100,640 500,510 850,600 C1100,665 1380,450 1650,540 C1820,590 1900,450 1900,420",
  "M-400,320 C-50,230 250,100 560,190 C840,265 1080,110 1380,190 C1580,240 1770,120 1900,80",
  "M-400,480 C20,380 380,240 680,330 C940,405 1160,220 1460,310 C1660,365 1840,230 1900,190",
];

interface BeamProps {
  /** Couleur de base du faisceau (hex) */
  color?: string;
  className?: string;
}

const BackgroundBeams = ({ color = '#2ECC71', className = '' }: BeamProps) => {
  return (
    <svg
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      viewBox="0 0 1500 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {BEAM_PATHS.map((_, i) => {
          const hue = i % 3 === 0 ? color : i % 3 === 1 ? '#58D68D' : '#1A8A4A';
          return (
            <linearGradient
              key={i}
              id={`beam-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              x1="0" y1="0" x2="1500" y2="800"
            >
              <stop offset="0%"   stopColor={hue} stopOpacity="0" />
              <stop offset="40%"  stopColor={hue} stopOpacity="0" />
              <stop offset="50%"  stopColor={hue} stopOpacity="0.9" />
              <stop offset="60%"  stopColor={hue} stopOpacity="0" />
              <stop offset="100%" stopColor={hue} stopOpacity="0" />
            </linearGradient>
          );
        })}

        {/* Halo lumineux (blur émulé par second path plus épais) */}
        {BEAM_PATHS.map((_, i) => {
          const hue = i % 3 === 0 ? color : i % 3 === 1 ? '#58D68D' : '#1A8A4A';
          return (
            <linearGradient
              key={`glow-${i}`}
              id={`beam-glow-${i}`}
              gradientUnits="userSpaceOnUse"
              x1="0" y1="0" x2="1500" y2="800"
            >
              <stop offset="0%"   stopColor={hue} stopOpacity="0" />
              <stop offset="45%"  stopColor={hue} stopOpacity="0" />
              <stop offset="50%"  stopColor={hue} stopOpacity="0.25" />
              <stop offset="55%"  stopColor={hue} stopOpacity="0" />
              <stop offset="100%" stopColor={hue} stopOpacity="0" />
            </linearGradient>
          );
        })}
      </defs>

      {BEAM_PATHS.map((path, i) => {
        const duration = 4 + (i % 4) * 1.2;
        const delay = i * 0.38;
        return (
          <g key={i}>
            {/* Halo (trait épais, gradient doux) */}
            <path
              d={path}
              stroke={`url(#beam-glow-${i})`}
              strokeWidth="12"
              fill="none"
              style={{
                strokeDasharray: '220 2800',
                strokeDashoffset: 2800,
                animation: `beamTravel ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
            {/* Faisceau fin (cœur lumineux) */}
            <path
              d={path}
              stroke={`url(#beam-grad-${i})`}
              strokeWidth="1.5"
              fill="none"
              style={{
                strokeDasharray: '220 2800',
                strokeDashoffset: 2800,
                animation: `beamTravel ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default BackgroundBeams;
