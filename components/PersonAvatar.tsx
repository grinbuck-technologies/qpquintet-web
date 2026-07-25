interface PersonAvatarProps {
  name: string;
}

/**
 * Derives initials from a person's name (e.g. "Alokesh Banerjee" -> "AB")
 * and renders them centered on a navy square. Honorifics like "Dr." are
 * skipped since they contain a period, so "Dr. Sareeha Abubaker" -> "SA"
 * rather than "DS".
 */
export function PersonAvatar({ name }: PersonAvatarProps) {
  const initials = name
    .split(" ")
    .filter((part) => part.length > 0 && !part.includes("."))
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex aspect-square w-full items-center justify-center bg-navy">
      <span className="font-display text-4xl font-semibold text-paper md:text-5xl">
        {initials}
      </span>
    </div>
  );
}
