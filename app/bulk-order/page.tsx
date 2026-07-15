import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ComingSoonNotice } from "@/components/ComingSoonNotice";

export const metadata: Metadata = {
  title: "Bulk Order",
  description: `Order direct from ${siteConfig.name}, starting at a minimum quantity per item.`,
};

/** Bulk order page: intro copy plus a coming-soon notice until direct ordering launches. */
export default function BulkOrderPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Bulk Order</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        Businesses will be able to order direct from us, starting at a
        minimum quantity per item, once bulk ordering launches.
      </p>

      <div className="mt-12 max-w-2xl">
        <ComingSoonNotice message="Direct bulk ordering for businesses is launching soon." />
      </div>
    </div>
  );
}
