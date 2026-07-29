interface SectionHeadingProps {
  label: string;
  title: string;
}

/** Section heading with a navy, bold-label eyebrow above the display title. */
export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div>
      <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-navy">
        {label}
      </p>
      <h2 className="font-display mt-3 text-3xl md:text-5xl">{title}</h2>
    </div>
  );
}
