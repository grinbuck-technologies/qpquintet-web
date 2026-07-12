import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for inquiries about bulk orders, retail partnerships, or general questions.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">Contact</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">
        Get in touch with {siteConfig.name} for inquiries about bulk orders,
        retail partnerships, or general questions.
      </p>

      <div className="mt-12 border border-line bg-surface px-6 py-8 text-ink-soft">
        A contact form is coming once inquiry routing is decided.
      </div>
    </div>
  );
}
