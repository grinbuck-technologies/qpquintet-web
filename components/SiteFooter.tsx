import { siteConfig, tradeFacts } from "@/lib/site-config";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-10 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <span className="font-display text-2xl font-semibold">
          {siteConfig.name}
        </span>

        <div className="manifest-row font-mono text-sm">
          <span>
            {tradeFacts.origin.label} — {tradeFacts.origin.value}
          </span>
          <span>
            {tradeFacts.destination.label} — {tradeFacts.destination.value}
          </span>
        </div>

        <p className="text-xs text-paper/70">
          &copy; {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
