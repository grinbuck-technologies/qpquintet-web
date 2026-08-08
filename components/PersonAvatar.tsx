import Image from "next/image";

interface PersonAvatarProps {
  name: string;
  imageSrc?: string;
}

/**
 * Derives initials from a person's name (e.g. "Alokesh Banerjee" -> "AB")
 * and renders them centered on a navy square. Honorifics like "Dr." are
 * skipped since they contain a period, so "Dr. Sareeha Abubaker" -> "SA"
 * rather than "DS".
 */
function initialsFromName(name: string): string {
  return name
    .split(" ")
    .filter((part) => part.length > 0 && !part.includes("."))
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Renders a person's photo when imageSrc is provided, falling back to an
 * initials placeholder on a navy square for team members without one yet.
 */
export function PersonAvatar({ name, imageSrc }: PersonAvatarProps) {
  if (imageSrc) {
    return (
      <div className="relative aspect-square w-full overflow-hidden bg-navy">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(min-width: 768px) 320px, 50vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-square w-full items-center justify-center bg-navy">
      <span className="font-display text-4xl font-semibold text-paper md:text-5xl">
        {initialsFromName(name)}
      </span>
    </div>
  );
}
