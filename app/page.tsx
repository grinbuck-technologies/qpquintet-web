import { routes, siteConfig, tradeFacts } from "@/lib/site-config";
import { SectionHeading } from "@/components/SectionHeading";
import { TradeGlobe } from "@/components/TradeGlobe";
import { ArrowLink } from "@/components/ArrowLink";

/** A single capability column shown in the "Focus Areas" section. */
interface FocusArea {
  label: string;
  heading: string;
  body: string;
}

/** The two ends of QP Quintet's trade mandate — an active focus and the wider room to grow into. */
const FOCUS_AREAS: FocusArea[] = [
  {
    label: "Agri-Food & Commodities",
    heading: "Capability, Not a Category",
    body: `${siteConfig.name} is built to source across agri-food and commodities, wherever the trade economics between Canada and India favor movement. We are not locked into a single product line. Spices and masalas are our starting point, with retail relationships in Canada currently in development and the same sourcing discipline carried through as the category set expands.`,
  },
  {
    label: "Natural Resources & Beyond",
    heading: "A Wider Mandate by Design",
    body: "The same infrastructure extends to natural resources and other categories as the corridor matures. We are positioned to expand wherever the strongest trade opportunity emerges, not according to a fixed roadmap. The underlying infrastructure — sourcing relationships, logistics, compliance, and capital structuring — is category-agnostic by design, built to extend rather than be rebuilt.",
  },
];

/** Homepage: hero with the animated trade-route globe, positioning statement, focus areas, and contact. */
export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-label flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-deep"
              />
              Canada ⇆ India — Trade &amp; Investment
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.95] md:text-7xl">
              Building bridges between economies.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              {siteConfig.name} is building the commercial channels,
              distribution infrastructure, and capital pathways that will
              move goods and capital between Canada and India. We are
              engineering a trade corridor, from day one, to run both ways.
            </p>
          </div>

          <div className="mx-auto aspect-square w-full max-w-md">
            <TradeGlobe />
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center font-mono text-xs uppercase tracking-widest">
          {Object.values(tradeFacts).map((fact) => (
            <span key={fact.label} className="text-paper/70">
              <span className="text-paper/40">{fact.label}</span> —{" "}
              {fact.value}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading label="Positioning" title="A corridor, not a one-way channel." />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {siteConfig.name} is a bidirectional trade and investment vehicle,
          not an importer or exporter alone. We are building the commercial
          relationships, distribution infrastructure, and capital flow that
          will move goods and investment both ways across the Canada–India
          corridor, positioned to capitalize on the India-Canada
          Comprehensive Economic Partnership Agreement (CEPA) as it
          accelerates bilateral trade. Our first trade lines are in active
          development.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
          That means two coordinated functions, not one: on the trade side,
          sourcing, quality assurance, and logistics that get products to
          market; on the investment side, capital and partnership structures
          that help promising businesses on either side of the Pacific scale
          into the other market. Both functions are designed to run in
          either direction as the corridor matures.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          label="Focus Areas"
          title="Wherever the trade opportunity is strongest."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.label}
              className="shadow-raised border border-line bg-surface p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-navy">
                {area.label}
              </p>
              <h3 className="font-display mt-3 text-xl md:text-2xl">
                {area.heading}
              </h3>
              <p className="mt-3 text-sm text-ink-soft">{area.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
        <SectionHeading label="Contact" title="Let's open a corridor together." />
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          If you represent a producer, distributor, investor, or trade office
          in Canada or India, we want to talk cross-border commerce, not
          small talk.
        </p>
        <ArrowLink href={routes.contact}>Get in touch</ArrowLink>
      </section>
    </>
  );
}
