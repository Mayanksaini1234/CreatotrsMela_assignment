import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const RADIUS = 54;
const STROKE = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * FitScoreRing — the page's signature element.
 * A single glanceable composite score (engagement + audience match +
 * reliability) so a brand manager gets a verdict before reading a single stat.
 * Memoized: score never changes after mount, so this never needs to re-render
 * when sibling hero content updates.
 */
function FitScoreRing({ score, note }) {
  const prefersReducedMotion = useReducedMotion();
  const [displayScore, setDisplayScore] = useState(prefersReducedMotion ? score : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayScore(score);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayScore(Math.round(score * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [score, prefersReducedMotion]);

  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-32 w-32 shrink-0">
        <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
          <defs>
            <linearGradient id="fitScoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B4A" />
              <stop offset="100%" stopColor="#FFB23E" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            className="text-ink-100"
            strokeWidth={STROKE}
          />
          <motion.circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="url(#fitScoreGradient)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-semibold text-ink-900 tabular-nums">
            {displayScore}
          </span>
          <span className="text-[10px] uppercase tracking-wide text-ink-400">/ 100</span>
        </div>
      </div>
      <div className="max-w-[10rem]">
        <p className="text-sm font-semibold text-ink-900">Collab Fit Score</p>
        <p className="text-xs text-ink-500 leading-snug mt-0.5">{note}</p>
      </div>
    </div>
  );
}

export default memo(FitScoreRing);