import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ComingSoonNotice } from "@/components/ComingSoonNotice";

export const metadata: Metadata = {
  title: "Retailers",
  description: `Find ${siteConfig.name} products stocked at affiliated retailers.`,
};

/** Retailers page: intro copy plus a coming-soon notice until partnerships are confirmed. */
export default function RetailersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Retailers</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        Our products are stocked at affiliated retailers across British
        Columbia, with distribution expanding as new partnerships are
        confirmed.
      </p>

      <div className="mt-12 max-w-2xl">
        <ComingSoonNotice message="We're finalizing our retailer partnerships across British Columbia." />
      </div>
    </div>
  );
}
