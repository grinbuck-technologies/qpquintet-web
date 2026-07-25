import type { ReactNode } from "react";
import { ComingSoonNotice } from "@/components/ComingSoonNotice";

interface ComingSoonPageProps {
  title: string;
  intro: string;
  noticeMessage: string;
  noticeSecondaryMessage?: string;
  children?: ReactNode;
}

/** Shared layout for routes whose feature is still in development: heading, intro line, and a coming-soon notice. */
export function ComingSoonPage({
  title,
  intro,
  noticeMessage,
  noticeSecondaryMessage,
  children,
}: ComingSoonPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-7xl">{title}</h1>

      <p className="mt-6 max-w-2xl text-ink-soft">{intro}</p>

      <div className="mt-12 max-w-2xl space-y-6">
        <ComingSoonNotice
          message={noticeMessage}
          secondaryMessage={noticeSecondaryMessage}
        />
        {children}
      </div>
    </div>
  );
}
