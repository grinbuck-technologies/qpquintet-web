import Link from "next/link";
import type { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
}

/** Accent-colored text link with a trailing arrow, used for secondary in-page calls to action. */
export function ArrowLink({ href, children }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className="mt-6 inline-block text-sm font-medium uppercase tracking-wide text-accent hover:text-accent-deep"
    >
      {children} →
    </Link>
  );
}
