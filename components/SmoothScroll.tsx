"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let activeLenis: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (activeLenis) {
      activeLenis.destroy();
      activeLenis = null;
    }

    const lenis = new Lenis();
    activeLenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (activeLenis === lenis) {
        activeLenis = null;
      }
    };
  }, []);

  return null;
}
