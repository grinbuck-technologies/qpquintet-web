import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Retailers",
  description: `Find ${siteConfig.name} products stocked at affiliated retailers.`,
};

export default function RetailersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Retailers</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        Our products are stocked at affiliated retailers across British
        Columbia, with distribution expanding as new partnerships are
        confirmed.
      </p>

      <div className="mt-12 border border-line bg-surface px-6 py-8 text-ink-soft">
        The retailer list is pending confirmed partnerships.
      </div>
    </div>
  );
}
