import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ComingSoonNotice } from "@/components/ComingSoonNotice";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for inquiries about bulk orders, retail partnerships, or general questions.`,
};

/** Contact page: intro copy plus a coming-soon notice until the contact form ships. */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Contact</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        Get in touch with {siteConfig.name} for inquiries about bulk orders,
        retail partnerships, or general questions.
      </p>

      <div className="mt-12 max-w-2xl">
        <ComingSoonNotice
          message="A contact form is on the way."
          secondaryMessage="In the meantime, check our retailer and bulk order pages for updates as those launch."
        />
      </div>
    </div>
  );
}
