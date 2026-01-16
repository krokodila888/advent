/*export const BackgroundScene = () => {
  // Для стабильности рендера используем псевдослучайные значения на основе индекса
  function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-12 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-100 to-amber-200 opacity-90"
           style={{ 
             boxShadow: '0 0 80px rgba(255,220,150,0.5), inset -10px -10px 20px rgba(200,180,140,0.3)' 
           }}>
        <div className="absolute top-6 left-8 w-6 h-6 rounded-full bg-gray-300 opacity-20" />
        <div className="absolute top-16 right-12 w-4 h-4 rounded-full bg-gray-300 opacity-15" />
        <div className="absolute bottom-10 left-14 w-5 h-5 rounded-full bg-gray-300 opacity-18" />
      </div>

      {[...Array(80)].map((_, i) => {
        const r = seededRandom(i);
        const r2 = seededRandom(i + 1000);
        const r3 = seededRandom(i + 2000);
        const size = r < 0.7 ? 2 : r < 0.9 ? 3 : 4;
        const twinkle = r2 > 0.5;
        return (
          <div
            key={`star-${i}`}
            className={`absolute rounded-full ${twinkle ? 'star-twinkle' : ''}`}
            style={{
              left: `${r * 100}%`,
              top: `${r2 * 70}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
              boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.8)`,
              animationDelay: `${r3 * 5}s`
            }}
          />
        );
      })}

      {[...Array(6)].map((_, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute cloud-drift"
          style={{
            left: `${i * 20 - 10}%`,
            top: `${10 + i * 8}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${40 + i * 10}s`
          }}
        >
          <svg width="120" height="50" viewBox="0 0 120 50" className="opacity-20">
            <ellipse cx="30" cy="30" rx="25" ry="18" fill="#b8c6db" />
            <ellipse cx="50" cy="25" rx="30" ry="20" fill="#b8c6db" />
            <ellipse cx="75" cy="28" rx="28" ry="19" fill="#b8c6db" />
            <ellipse cx="95" cy="32" rx="22" ry="16" fill="#b8c6db" />
          </svg>
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-25">
        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 400 L200 150 L400 250 L600 100 L800 200 L1000 120 L1200 280 L1200 400 Z" 
                fill="#1a3a52" opacity="0.8"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2/5 opacity-40">
        <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 300 L150 180 L350 220 L500 140 L700 190 L900 160 L1100 240 L1200 200 L1200 300 Z" 
                fill="#2d4a5e"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-60">
        <svg viewBox="0 0 1200 250" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 250 L100 200 L250 170 L400 210 L600 150 L800 180 L1000 160 L1200 220 L1200 250 Z" 
                fill="#1a2a3a"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64">
        {[...Array(25)].map((_, i) => {
          const r = seededRandom(i);
          const r2 = seededRandom(i + 1000);
          const height = 100 + r * 120;
          const left = i * 4.5 + r2 * 3;
          return (
            <svg
              key={`tree-${i}`}
              className="absolute bottom-0"
              style={{
                left: `${left}%`,
                height: `${height}px`,
                width: '50px',
                opacity: 0.3 + seededRandom(i + 2000) * 0.4
              }}
              viewBox="0 0 50 150"
            >
              <rect x="22" y="100" width="6" height="50" fill="#1a1a1a" />
              <path d="M25 10 L10 50 L40 50 Z" fill="#0a2a3a" />
              <path d="M25 35 L8 70 L42 70 Z" fill="#0a2a3a" />
              <path d="M25 55 L5 95 L45 95 Z" fill="#0a2a3a" />
            </svg>
          );
        })}
      </div>

      {[...Array(100)].map((_, i) => {
        const r = seededRandom(i);
        const r2 = seededRandom(i + 1000);
        const r3 = seededRandom(i + 2000);
        const r4 = seededRandom(i + 3000);
        const r5 = seededRandom(i + 4000);
        return (
          <div
            key={`snow-${i}`}
            className="absolute rounded-full snow-particle"
            style={{
              left: `${r * 100}%`,
              width: `${2 + r2 * 5}px`,
              height: `${2 + r3 * 5}px`,
              background: `radial-gradient(circle, rgba(255,255,255,${0.7 + r4 * 0.3}) 0%, rgba(220,230,255,0.4) 60%, transparent 100%)`,
              boxShadow: `0 0 ${3 + r5 * 8}px rgba(255,255,255,0.7)`,
              animationDelay: `${r2 * 15}s`,
              animationDuration: `${12 + r3 * 25}s`
            }}
          />
        );
      })}
    </div>
  );
};*/
