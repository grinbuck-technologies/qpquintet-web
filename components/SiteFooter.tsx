import Link from "next/link";
import { routes, siteConfig, tradeFacts } from "@/lib/site-config";

/** Site-wide footer with the QP wordmark, corridor fact, a tucked-away bulk-order mention, and copyright line. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-10 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-wordmark text-gradient-accent text-3xl font-semibold">
            QP
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
            {siteConfig.name}
          </span>
        </div>

        <p className="border-b border-paper/20 pb-6 font-mono text-sm">
          {tradeFacts.corridor.label} — {tradeFacts.corridor.value}
        </p>

        <p className="font-mono text-xs text-paper/50">
          Bulk ordering for businesses — coming soon.{" "}
          <Link href={routes.bulkOrder} className="underline hover:text-paper/80">
            Learn more
          </Link>
        </p>

        <p className="text-xs text-paper/70">
          &copy; {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
