"use client";

import { useSyncExternalStore } from "react";
import { REDUCED_MOTION_QUERY } from "@/lib/reduced-motion";

/** Subscribes a callback to changes in the user's reduced-motion preference. */
function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

/** Reads the user's current reduced-motion preference. */
function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/** Server has no media-query access, so default to the animated (non-reduced) state. */
function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Minimal wireframe globe with two distinct, dashed animated routes between
 * Canada and India, each ending in a labeled dot, its dash pattern flowing
 * continuously along its own path to suggest ongoing two-way movement. The
 * animation (not the visual) is skipped for users who prefer reduced
 * motion. Uses useSyncExternalStore, rather than an effect that calls
 * setState, to read matchMedia without a hydration mismatch.
 */
export function TradeGlobe() {
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of two-way trade routes between Canada and India"
    >
      <defs>
        <linearGradient
          id="tradeRouteGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-deep)" />
        </linearGradient>
        {/* Same hues as tradeRouteGradient at reduced stop-opacity, so the return route reads as related but visually secondary. */}
        <linearGradient
          id="tradeRouteGradientMuted"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent-deep)" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <g className="stroke-navy" fill="none" opacity="0.18">
        <circle cx="200" cy="200" r="150" />
        <ellipse cx="200" cy="200" rx="55" ry="150" />
        <ellipse cx="200" cy="200" rx="105" ry="150" />
        <ellipse cx="200" cy="200" rx="150" ry="55" />
        <ellipse cx="200" cy="200" rx="150" ry="105" />
        <ellipse cx="200" cy="200" rx="150" ry="12" />
      </g>

      {/* Canada -> India */}
      <path
        d="M 90 172 Q 195 110 300 232"
        fill="none"
        stroke="url(#tradeRouteGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        className={reducedMotion ? undefined : "trade-route-dashed"}
      />

      {/* India -> Canada: a distinct, offset curve (different bulge height) so the two routes read as two lanes rather than one retraced line. */}
      <path
        d="M 310 218 Q 205 90 100 158"
        fill="none"
        stroke="url(#tradeRouteGradientMuted)"
        strokeWidth="3"
        strokeLinecap="round"
        className={reducedMotion ? undefined : "trade-route-dashed"}
      />

      <g className="fill-ink font-mono">
        <circle cx="95" cy="165" r="5" className="fill-accent" />
        {/* Offset up and to the left of the dot, clear of both routes converging around (90-100, 158-172). */}
        <text x="78" y="138" textAnchor="end" fontSize="11" letterSpacing="1">
          CANADA
        </text>

        <circle cx="305" cy="225" r="5" className="fill-accent-deep" />
        {/* Offset down and to the right of the dot, clear of both routes converging around (300-310, 218-232). */}
        <text x="322" y="254" textAnchor="start" fontSize="11" letterSpacing="1">
          INDIA
        </text>
      </g>
    </svg>
  );
}
