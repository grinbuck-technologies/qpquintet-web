import type { Metadata } from "next";
import { routes, siteConfig } from "@/lib/site-config";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { ArrowLink } from "@/components/ArrowLink";

export const metadata: Metadata = {
  title: "Bulk Order",
  description: `Direct bulk ordering from ${siteConfig.name} is in development.`,
};

/** Bulk order page: intro copy plus a coming-soon notice until direct ordering launches. */
export default function BulkOrderPage() {
  return (
    <ComingSoonPage
      title="Bulk Order"
      intro="Direct bulk ordering for businesses is part of our initial trade-line build-out."
      noticeMessage="Bulk ordering is in development."
      noticeSecondaryMessage="Get in touch and we'll notify you as soon as it's live."
    >
      <ArrowLink href={routes.contact}>Get in touch</ArrowLink>
    </ComingSoonPage>
  );
}
