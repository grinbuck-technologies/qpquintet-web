import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about trade, investment, or partnership.`,
};

/** Contact page: a working contact form alongside a welcome note, direct email, and a positioning reminder. */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Contact</h1>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr]">
        <ContactForm />

        <div className="space-y-8 md:border-l md:border-line md:pl-12">
          <p className="text-ink-soft">
            If you represent a producer, distributor, investor, or trade
            office in Canada or India, we want to hear from you — tell us a
            bit about what you&apos;re working on.
          </p>

          <div className="border-t border-line pt-6">
            <p className="font-label text-xs font-bold uppercase tracking-widest text-navy">
              Direct
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-display mt-3 block text-2xl text-accent hover:text-accent-deep"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink-soft">
              {siteConfig.headOfficeLocation}
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <p className="font-label text-xs font-bold uppercase tracking-widest text-navy">
              Positioning
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              {siteConfig.name} is building the trade and investment
              corridor between Canada and India — sourcing, distribution,
              and capital infrastructure designed to move across categories
              as opportunity leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
