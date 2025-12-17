export function Snowfall() {
  return (
    <div className="snowfall">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 10}s`, // Slower: 10-18 seconds
            animationDelay: `${Math.random() * 8}s`,
            width: `${Math.random() * 6 + 4}px`, // 4-10px diameter
            height: `${Math.random() * 6 + 4}px`,
          }}
        />
      ))}
    </div>
  );
}