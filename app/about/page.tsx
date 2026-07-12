import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, an import/export company shipping goods from East India to British Columbia.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">About</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        {siteConfig.name} is an import/export company shipping goods from
        East India to British Columbia, connecting sourcing in India with
        distribution across Canada.
      </p>

      {/* TODO: replace with real director/owner names and roles once confirmed */}
      <div className="mt-12 divide-y divide-line">
        <div className="manifest-row">
          <span className="font-medium text-ink">Director/Owner 1 — TBD</span>
          <span className="text-ink-soft">Role — TBD</span>
          <span className="text-ink-soft">Base City — TBD</span>
        </div>
        <div className="manifest-row">
          <span className="font-medium text-ink">Director/Owner 2 — TBD</span>
          <span className="text-ink-soft">Role — TBD</span>
          <span className="text-ink-soft">Base City — TBD</span>
        </div>
        <div className="manifest-row">
          <span className="font-medium text-ink">Director/Owner 3 — TBD</span>
          <span className="text-ink-soft">Role — TBD</span>
          <span className="text-ink-soft">Base City — TBD</span>
        </div>
      </div>
    </div>
  );
}
