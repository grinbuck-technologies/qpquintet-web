import Link from "next/link";
import { routes, siteConfig, tradeFacts } from "@/lib/site-config";
import { ArrowLink } from "@/components/ArrowLink";

/** Homepage: hero, trade-facts strip, product teaser, buyer/business split, and about teaser. */
export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <h1 className="font-display max-w-4xl text-6xl leading-none md:text-8xl">
          We move goods from East India to British Columbia.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-ink-soft">
          {siteConfig.name} is an import/export company. Currently, that
          means spices and masalas, sold through affiliated retailers across
          British Columbia, with direct bulk ordering for businesses coming
          soon and the range expanding over time.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={routes.retailers}
            className="bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            Find a Retailer
          </Link>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 font-mono text-sm sm:grid-cols-3">
          {Object.values(tradeFacts).map((fact) => (
            <span key={fact.label}>
              {fact.label} — {fact.value}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-5xl">What we move</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-line p-8 transition-colors hover:border-ink">
            <h3 className="font-display text-xl">Spices</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Whole and ground spices — assortment to be finalized.
            </p>
          </div>
          <div className="border border-line p-8 transition-colors hover:border-ink">
            <h3 className="font-display text-xl">Masalas</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Blended spice mixes — lineup to be finalized.
            </p>
          </div>
          <div className="border border-line p-8 transition-colors hover:border-ink">
            <h3 className="font-display text-xl">Expanding</h3>
            <p className="mt-3 text-sm text-ink-soft">
              The catalog will grow beyond spices and masalas over time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <h2 className="sr-only">Get started</h2>
        <div className="grid grid-cols-1 border border-line md:grid-cols-2">
          <div className="border-b border-line p-10 md:border-b-0 md:border-r">
            <h3 className="font-display text-2xl">For everyday buyers</h3>
            <p className="mt-3 text-ink-soft">
              Find our products stocked at an affiliated retailer near you.
            </p>
            <ArrowLink href={routes.retailers}>Find a retailer</ArrowLink>
          </div>
          <div className="p-10">
            <h3 className="font-display text-2xl">For businesses</h3>
            <p className="mt-3 text-ink-soft">
              Direct bulk ordering is on its way. Get in touch and we&apos;ll
              let you know as soon as it&apos;s live.
            </p>
            <ArrowLink href={routes.contact}>Get in touch</ArrowLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <h2 className="font-display text-3xl md:text-5xl">About</h2>
        <p className="mt-6 max-w-2xl text-ink-soft">
          {siteConfig.name} is run by directors based across India and
          Canada, overseeing sourcing on one side of the Pacific and
          distribution on the other.
        </p>
        <ArrowLink href={routes.about}>More about us</ArrowLink>
      </section>
    </>
  );
}
