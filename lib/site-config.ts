/**
 * CONTENT RULE: Do not name "spices and masalas" (or any other specific
 * commodity) as the company's current focus, primary activity, or defining
 * category anywhere on the site outside of the Focus Areas section's
 * explicit "starting point, not our identity" framing. The company's
 * positioning is deliberately category-agnostic. When writing new copy,
 * do not reintroduce commodity-specific framing as a shorthand for "what
 * the company does."
 */

/** Core company identity used for page titles, metadata, and body copy. */
export const siteConfig = {
  name: "QP Quintet Ventures Canada Inc.",
  tagline: "Trade & Investment",
  description:
    "QP Quintet Ventures Canada Inc. is a bidirectional trade and investment company building the commercial channels, distribution infrastructure, and capital pathways connecting Canada and India. Our first trade lines are in active development, with capability designed to extend across categories as opportunity leads.",
  contactEmail: "admin@qpquintet.ca",
  headOfficeLocation: "Victoria, Canada",
} as const;

/** Canonical route paths, referenced instead of hardcoded strings throughout the app. */
export const routes = {
  home: "/",
  about: "/about",
  bulkOrder: "/bulk-order",
  contact: "/contact",
} as const;

/** A single entry in the primary site navigation. */
export interface NavLink {
  href: string;
  label: string;
}

/** Links rendered in the primary site navigation, in display order. */
export const navLinks: NavLink[] = [
  { href: routes.about, label: "About" },
  { href: routes.contact, label: "Contact" },
];

/** A single labeled fact shown in the trade-facts strip. */
export interface TradeFact {
  label: string;
  value: string;
}

/** Trade facts displayed in the homepage and footer facts strips. */
export const tradeFacts = {
  corridor: { label: "Trade Corridor", value: "Canada ⇆ India" },
} satisfies Record<string, TradeFact>;
