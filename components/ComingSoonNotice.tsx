interface ComingSoonNoticeProps {
  message: string;
  secondaryMessage?: string;
}

/** Bordered callout for a page whose feature isn't live yet, with an optional supporting line. */
export function ComingSoonNotice({
  message,
  secondaryMessage,
}: ComingSoonNoticeProps) {
  return (
    <div className="border border-line bg-surface px-6 py-8">
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        Coming Soon
      </span>
      <p className="mt-3 text-ink-soft">{message}</p>
      {secondaryMessage && (
        <p className="mt-2 text-sm text-ink-soft">{secondaryMessage}</p>
      )}
    </div>
  );
}
