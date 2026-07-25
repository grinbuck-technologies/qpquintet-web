"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { REDUCED_MOTION_QUERY } from "@/lib/reduced-motion";

let activeLenis: Lenis | null = null;

/**
 * Mounts Lenis smooth-scrolling for the page. Renders nothing; it only
 * wires up the scroll behavior as a side effect and tears it down on
 * unmount. Skipped entirely when the user prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
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
