"use client";

import { useEffect, useState } from "react";

function format(n: number, pad = 2) {
  return n.toString().padStart(pad, "0");
}

/**
 * A running timecode readout — HH:MM:SS:FF — styled like a
 * non-linear editor's scrub bar. Ticks continuously while the
 * page is open, a small nod to "time spent editing."
 */
export default function Timecode({ className = "" }: { className?: string }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = () => {
      const elapsedMs = performance.now() - start;
      setFrame(Math.floor((elapsedMs / 1000) * 24)); // 24fps
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const totalSeconds = Math.floor(frame / 24);
  const ff = frame % 24;
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const hh = Math.floor(totalSeconds / 3600);

  return (
    <span className={`font-mono tabular-nums tracking-widest ${className}`}>
      {format(hh)}:{format(mm)}:{format(ss)}:{format(ff)}
    </span>
  );
}
