import React from 'react';

interface BinusCenterLogoProps {
  className?: string;
  height?: number | string;
}

export const BinusCenterLogo: React.FC<BinusCenterLogoProps> = ({
  className = '',
  height = 38
}) => {
  return (
    <svg
      viewBox="0 0 940 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: height, width: 'auto' }}
      className={`select-none inline-block ${className}`}
      aria-label="Official BINUS CENTER Logo"
    >
      <defs>
        {/* Sphere 3D gradient */}
        <radialGradient id="binusSphereGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFA726" />
          <stop offset="50%" stopColor="#FB8C00" />
          <stop offset="85%" stopColor="#F57C00" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
      </defs>

      {/* 1. Crosshair Black Lines */}
      {/* Horizontal Line */}
      <line x1="66" y1="124" x2="560" y2="124" stroke="#111111" strokeWidth="2.5" />
      {/* Vertical Line */}
      <line x1="200" y1="28" x2="200" y2="222" stroke="#111111" strokeWidth="2.5" />

      {/* 2. Four Red Terminal Dots */}
      <circle cx="66" cy="124" r="5" fill="#D8232A" />
      <circle cx="560" cy="124" r="5" fill="#D8232A" />
      <circle cx="200" cy="28" r="5" fill="#D8232A" />
      <circle cx="200" cy="222" r="5" fill="#D8232A" />

      {/* 3. Orbital Silver Ring (Tilted elliptical swoosh around the orb) */}
      <path
        d="M 265 74 C 230 45, 140 45, 115 88 C 92 128, 120 168, 175 174 C 220 178, 255 152, 260 135"
        stroke="#9E9E9E"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/* 4. Digital Pixel Grid Dispersal (Upper-Right Scattering) */}
      {/* Column A (x ~ 265) */}
      <rect x="264" y="105" width="7" height="7" fill="#9E9E9E" />
      <rect x="264" y="115" width="7" height="7" fill="#757575" />
      <rect x="264" y="125" width="7" height="7" fill="#BDBDBD" />

      {/* Column B (x ~ 276) */}
      <rect x="276" y="92" width="7" height="7" fill="#9E9E9E" />
      <rect x="276" y="102" width="7" height="7" fill="#757575" />
      <rect x="276" y="112" width="7" height="7" fill="#757575" />
      <rect x="276" y="122" width="7" height="7" fill="#BDBDBD" />
      <rect x="276" y="132" width="7" height="7" fill="#E0E0E0" />

      {/* Column C (x ~ 288) */}
      <rect x="288" y="78" width="7" height="7" fill="#BDBDBD" />
      <rect x="288" y="88" width="7" height="7" fill="#9E9E9E" />
      <rect x="288" y="98" width="7" height="7" fill="#757575" />
      <rect x="288" y="108" width="7" height="7" fill="#757575" />
      <rect x="288" y="118" width="7" height="7" fill="#9E9E9E" />
      <rect x="288" y="128" width="7" height="7" fill="#BDBDBD" />

      {/* Column D (x ~ 300) */}
      <rect x="300" y="65" width="7" height="7" fill="#BDBDBD" />
      <rect x="300" y="75" width="7" height="7" fill="#9E9E9E" />
      <rect x="300" y="85" width="7" height="7" fill="#757575" />
      <rect x="300" y="95" width="7" height="7" fill="#9E9E9E" />
      <rect x="300" y="105" width="7" height="7" fill="#BDBDBD" />

      {/* Column E (x ~ 312) */}
      <rect x="312" y="72" width="7" height="7" fill="#9E9E9E" />
      <rect x="312" y="82" width="7" height="7" fill="#BDBDBD" />
      <rect x="312" y="92" width="7" height="7" fill="#E0E0E0" />

      {/* Column F (x ~ 324) */}
      <rect x="324" y="60" width="7" height="7" fill="#9E9E9E" />
      <rect x="324" y="70" width="7" height="7" fill="#BDBDBD" />
      <rect x="324" y="80" width="7" height="7" fill="#9E9E9E" />
      <rect x="324" y="90" width="7" height="7" fill="#BDBDBD" />

      {/* Upper floating pixels */}
      <rect x="345" y="62" width="6" height="6" fill="#9E9E9E" />
      <rect x="345" y="72" width="6" height="6" fill="#757575" />
      <rect x="345" y="82" width="6" height="6" fill="#BDBDBD" />
      <rect x="355" y="52" width="6" height="6" fill="#BDBDBD" />
      <rect x="365" y="72" width="6" height="6" fill="#9E9E9E" />

      {/* 5. Glowing Orange Orb */}
      <circle cx="200" cy="124" r="35" fill="url(#binusSphereGrad)" />
      {/* Specular White Highlight Dot */}
      <ellipse
        cx="187"
        cy="111"
        rx="5.5"
        ry="4"
        transform="rotate(-30 187 111)"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* 6. Typography: "BINUS" (Black Bold) + "CENTER" (Orange Bold) */}
      {/* "BINUS" */}
      <text
        x="250"
        y="222"
        fill="#111111"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="900"
        fontSize="80"
        letterSpacing="-1.5px"
      >
        BINUS
      </text>

      {/* "CENTER" */}
      <text
        x="650"
        y="222"
        fill="#FF5500"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="800"
        fontSize="76"
        letterSpacing="1px"
      >
        CENTER
      </text>
    </svg>
  );
};
