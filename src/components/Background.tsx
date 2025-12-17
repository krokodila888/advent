import { useEffect, useState } from 'react';

export function Background() {
  // (no active fireplace ref required currently)

  type Star = { left: string; top: string; animationDelay: string; opacity: number };
  const [stars, setStars] = useState<Star[]>([]);

  type Cloud = {
    left: string;
    top: string;
    width: string;
    height: string;
    opacity: number;
    color: string;
    borderRadius: string;
    duration: number;
    delay: number;
  };
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    // deterministic pseudo-random based on index
    const makeRand = (seed: number) => (n: number) => {
      const x = Math.sin(seed * 9301 + n * 49297) * 43758.5453;
      return x - Math.floor(x);
    };

    const generatedStars: Star[] = Array.from({ length: 60 }).map((_, idx) => {
      const rand = makeRand(idx + 1);
      return {
        left: `${Math.floor(rand(1) * 100)}%`,
        top: `${Math.floor(rand(2) * 70)}%`,
        animationDelay: `${(rand(3) * 3).toFixed(2)}s`,
        opacity: +(0.3 + rand(4) * 0.7).toFixed(2)
      };
    });

    const cloudColors = [
      'rgba(255,255,255,VAR)',
      'rgba(245,250,255,VAR)',
      'rgba(230,240,250,VAR)',
      'rgba(210,225,235,VAR)'
    ];

    const generatedClouds: Cloud[] = Array.from({ length: 4 }).map((_, idx) => {
      const rand = makeRand(100 + idx);
      let wPct = 30 + Math.floor(rand(1) * 60); // 30-90vw
      let hPct = Math.max(10, Math.floor(rand(2) * 30)); // height in vh-ish terms
      const colorTemplate = cloudColors[idx % cloudColors.length];
      const opacity = +(0.35 + rand(3) * 0.55).toFixed(2);
      const color = colorTemplate.replace('VAR', String(opacity));
      const borderRadius = `${40 + Math.floor(rand(4) * 30)}% ${30 + Math.floor(rand(5) * 30)}%`;
      const duration = 40 + Math.floor(rand(6) * 40); // 40-80s
      const delay = Math.floor(rand(7) * 20); // 0-20s
      const left = -20 + Math.floor(rand(8) * 140); // start left between -20% and 120%
      let topNum = 5 + Math.floor(rand(9) * 40);

      // Slightly raise and reduce the first cloud to avoid it being cut off
      if (idx === 0) {
        topNum = Math.max(2, topNum - 8);
        wPct = Math.max(20, Math.floor(wPct * 0.85));
        hPct = Math.max(8, Math.floor(hPct * 0.8));
      }

      return {
        left: `${left}%`,
        top: `${topNum}%`,
        width: `${wPct}vw`,
        height: `${hPct}vh`,
        opacity,
        color,
        borderRadius,
        duration,
        delay
      };
    });

    window.requestAnimationFrame(() => {
      setStars(generatedStars);
      setClouds(generatedClouds);
    });
  }, []);

  return (
    <div className="background-scene">
      {/* Layer 1: Night sky */}
      <div className="layer layer-sky">
        <div className="moon"></div>
        <div className="stars">
          {stars.map((s, i) => (
            <div
              key={i}
              className="star"
              style={{ left: s.left, top: s.top, animationDelay: s.animationDelay, opacity: s.opacity }}
            />
          ))}
        </div>
      </div>

      {/* Layer 2: Clouds */}
      <div className="layer layer-clouds">
        {clouds.map((c, i) => (
          <div
            key={i}
            className={`cloud cloud-${i + 1}`}
            style={{
              position: 'absolute',
              left: c.left,
              top: c.top,
              width: c.width,
              height: c.height,
              background: c.color,
              opacity: c.opacity,
              borderRadius: c.borderRadius,
              filter: 'blur(6px)',
              transform: 'translateX(-30%)',
              animation: `cloud-drift ${c.duration}s linear ${c.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* Layer 3: Mountains */}
      <div className="layer layer-mountains">
        <svg viewBox="0 0 1200 400" className="mountain-svg">
          <path 
            d="M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z" 
            fill="#1a2332"
          />
          <path 
            d="M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z" 
            fill="#0f1419"
          />
        </svg>
      </div>

      {/* Layer 4: Trees */}
      <div className="layer layer-trees">
        <svg viewBox="0 0 1200 300" className="trees-svg">
          {[100, 250, 400, 550, 700, 850, 1000, 1100].map((x, i) => (
            <g key={i}>
              <polygon 
                points={`${x},300 ${x-20},250 ${x-15},250 ${x-30},200 ${x-25},200 ${x-40},150 ${x+40},150 ${x+25},200 ${x+30},200 ${x+15},250 ${x+20},250`}
                fill="#1f2937"
              />
              <rect x={x-5} y="280" width="10" height="20" fill="#111827" />
            </g>
          ))}
        </svg>
      </div>

      {/* Layer 5: Deer */}
      <div className="layer layer-deer">
        <svg viewBox="0 0 100 100" className="deer deer-1" style={{ left: '20%', bottom: '15%' }}>
          <g fill="#2d3748">
            <ellipse cx="50" cy="60" rx="15" ry="20" />
            <ellipse cx="65" cy="50" rx="10" ry="12" />
            <line x1="58" y1="35" x2="62" y2="25" stroke="#2d3748" strokeWidth="2" />
            <line x1="72" y1="35" x2="76" y2="25" stroke="#2d3748" strokeWidth="2" />
            <rect x="45" y="75" width="3" height="15" />
            <rect x="52" y="75" width="3" height="15" />
            <rect x="58" y="75" width="3" height="15" />
            <rect x="65" y="75" width="3" height="15" />
          </g>
        </svg>
        <svg viewBox="0 0 100 100" className="deer deer-2" style={{ right: '25%', bottom: '18%' }}>
          <g fill="#374151">
            <ellipse cx="50" cy="60" rx="12" ry="16" />
            <ellipse cx="38" cy="52" rx="8" ry="10" />
            <line x1="35" y1="38" x2="32" y2="28" stroke="#374151" strokeWidth="2" />
            <line x1="42" y1="38" x2="39" y2="28" stroke="#374151" strokeWidth="2" />
            <rect x="45" y="72" width="2" height="12" />
            <rect x="50" y="72" width="2" height="12" />
            <rect x="55" y="72" width="2" height="12" />
            <rect x="60" y="72" width="2" height="12" />
          </g>
        </svg>
      </div>

      {/* Layer 6: Fireplace */}
      <div 
        className="layer layer-fireplace"
        //onMouseEnter={() => handleFireplaceHover(true)}
        //onMouseLeave={() => handleFireplaceHover(false)}
      >
        <svg viewBox="0 0 120 150" className="fireplace-svg">
          <rect x="10" y="60" width="100" height="80" fill="#4a3933" stroke="#2d1f1a" strokeWidth="2" />
          <rect x="30" y="80" width="60" height="50" fill="#1a1410" />
          <g className="fire">
            <ellipse cx="60" cy="110" rx="15" ry="20" fill="#ff6b35" opacity="0.8">
              <animate attributeName="ry" values="20;25;20" dur="1s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="55" cy="105" rx="10" ry="15" fill="#ffd93d" opacity="0.9">
              <animate attributeName="ry" values="15;20;15" dur="0.8s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="65" cy="108" rx="8" ry="12" fill="#ffd93d" opacity="0.9">
              <animate attributeName="ry" values="12;18;12" dur="1.2s" repeatCount="indefinite" />
            </ellipse>
          </g>
          <rect x="5" y="55" width="110" height="8" fill="#5a4943" />
        </svg>
      </div>
    </div>
  );
}
