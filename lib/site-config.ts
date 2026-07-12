export const siteConfig = {
  name: "QP Quintet Ventures Canada Inc.",
  tagline: "Import & Export",
  description:
    "QP Quintet Ventures Canada Inc. imports goods from East India to British Columbia, currently spices and masalas, supplying affiliated retailers and fulfilling bulk orders direct.",
} as const;

export const routes = {
  home: "/",
  about: "/about",
  bulkOrder: "/bulk-order",
  retailers: "/retailers",
  contact: "/contact",
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: routes.about, label: "About" },
  { href: routes.retailers, label: "Retailers" },
  { href: routes.contact, label: "Contact" },
];

export interface TradeFact {
  label: string;
  value: string;
}

export const tradeFacts = {
  origin: { label: "Origin", value: "Kolkata, IN" },
  destination: { label: "Destination", value: "British Columbia, CA" },
  currentCategory: { label: "Current Category", value: "Spices & Masalas" },
  bulkMinimum: { label: "Bulk Minimum", value: "TBD per item" },
} satisfies Record<string, TradeFact>;
