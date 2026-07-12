import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bulk Order",
  description: `Order direct from ${siteConfig.name}, starting at a minimum quantity per item.`,
};

export default function BulkOrderPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Bulk Order</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        Businesses can order direct, starting at a minimum quantity per item.
        Full pricing and case details are available once the product catalog
        below is finalized.
      </p>

      {/* TODO: replace with the real SKU list once the product catalog is finalized */}
      <div className="mt-12 divide-y divide-line">
        <div className="manifest-row">
          <span className="font-medium text-ink">Product Name — TBD</span>
          <span className="font-mono text-ink-soft">MOQ — TBD</span>
        </div>
        <div className="manifest-row">
          <span className="font-medium text-ink">Product Name — TBD</span>
          <span className="font-mono text-ink-soft">MOQ — TBD</span>
        </div>
      </div>

      <div className="mt-12 border border-line bg-surface px-6 py-8 text-ink-soft">
        The live order form is coming once the product catalog is finalized.
      </div>
    </div>
  );
}
