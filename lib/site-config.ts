/** Core company identity used for page titles, metadata, and body copy. */
export const siteConfig = {
  name: "QP Quintet Ventures Canada Inc.",
  tagline: "Import & Export",
  description:
    "QP Quintet Ventures Canada Inc. imports goods from East India to British Columbia, currently spices and masalas, supplying affiliated retailers and fulfilling bulk orders direct.",
} as const;

/** Canonical route paths, referenced instead of hardcoded strings throughout the app. */
export const routes = {
  home: "/",
  about: "/about",
  bulkOrder: "/bulk-order",
  retailers: "/retailers",
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
  { href: routes.retailers, label: "Retailers" },
  { href: routes.contact, label: "Contact" },
];

/** A single labeled fact shown in the trade-facts strip. */
export interface TradeFact {
  label: string;
  value: string;
}

/** Trade facts displayed in the homepage and footer facts strips. */
export const tradeFacts = {
  origin: { label: "Origin", value: "Kolkata, IN" },
  destination: { label: "Destination", value: "British Columbia, CA" },
  currentCategory: { label: "Current Category", value: "Spices & Masalas" },
} satisfies Record<string, TradeFact>;
