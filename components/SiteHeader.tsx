import Image from "next/image";
import Link from "next/link";
import { navLinks, routes, siteConfig } from "@/lib/site-config";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 translate-z-0 will-change-transform border-b border-line bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={routes.home}>
          <Image
            src="/logo/qp-canada-collapsed.svg"
            alt={siteConfig.name}
            width={220}
            height={130}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wide text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={routes.bulkOrder}
            className="border border-ink px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
          >
            Bulk Order
          </Link>
        </nav>
      </div>
    </header>
  );
}
