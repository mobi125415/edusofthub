"use client";

import { useEffect, useState } from "react";

export default function AmbientVideoBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 900, 1);
        setScrollProgress(progress);
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const videoOpacity = 0.55 - scrollProgress * 0.18;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-50"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          opacity: videoOpacity,
        }}
        className="absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-500"
      >
        <source
          src="/videos/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-white/10" />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-white/5 to-white/20" />

      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-300/10 blur-3xl" />

      <div className="absolute -right-40 top-2/3 h-[500px] w-[500px] rounded-full bg-indigo-300/10 blur-3xl" />
    </div>
  );
}