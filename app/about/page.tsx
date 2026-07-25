import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { AboutTeams } from "./AboutTeams";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, a Canada-India trade and investment company connecting businesses across both countries.`,
};

/** About page: hero intro followed by the India/Canada wing sections. */
export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <h1 className="font-display text-6xl leading-none md:text-8xl">
          About our team
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-ink-soft">
          {siteConfig.name} is a Canada-India trade and investment company,
          run by two teams working across both countries — one in India, one
          in Canada.
        </p>
      </section>

      <AboutTeams />

      <div className="h-16 md:h-24" />
    </div>
  );
}
