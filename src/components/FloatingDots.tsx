import type { CSSProperties } from "react";

const COLORS = ["#0EA5E9", "#38BDF8", "#7DD3FC", "#0284C7"];
const COUNT = 30;

// 고정 시드 난수: 서버·클라이언트에서 같은 값을 내므로 hydration 불일치가 없다.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20261104);
const between = (min: number, max: number) => rand() * (max - min) + min;

const dots = Array.from({ length: COUNT }, (_, i) => ({
  "--x": `${between(0, 100).toFixed(2)}%`,
  "--y": `${between(0, 100).toFixed(2)}%`,
  "--size": `${between(3, 8).toFixed(1)}px`,
  "--color": COLORS[i % COLORS.length],
  "--alpha": between(0.15, 0.45).toFixed(2),
  "--dx": `${between(-60, 60).toFixed(0)}px`,
  "--dy": `${between(-80, 80).toFixed(0)}px`,
  "--dur": `${between(14, 28).toFixed(1)}s`,
  "--delay": `${(-between(0, 28)).toFixed(1)}s`,
})) as CSSProperties[];

export default function FloatingDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* 카드 뒤 은은한 광원 */}
      <div className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-[60%] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.18)_0%,transparent_65%)] blur-[40px]" />

      {dots.map((style, i) => (
        <span
          key={i}
          style={style}
          className="absolute left-(--x) top-(--y) size-(--size) rounded-full bg-(--color) opacity-(--alpha) animate-drift will-change-transform motion-reduce:animate-none"
        />
      ))}
    </div>
  );
}
