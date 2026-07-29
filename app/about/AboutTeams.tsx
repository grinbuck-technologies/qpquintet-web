import { PersonAvatar } from "@/components/PersonAvatar";

interface Person {
  name: string;
  title: string;
  bio: string;
  meta: string[];
  link?: { label: string; href: string };
}

const INDIA_TEAM: Person[] = [
  {
    name: "Alokesh Banerjee",
    title: "Co-Founder & COO",
    bio: "Alokesh has spent three decades building companies, not just running them — starting with Machhli Baba Foods, which he founded and grew into a familiar name across Kolkata, and continuing through a term as President of the Calcutta Management Association. At QP Quintet, he runs operations: sourcing, structuring, and making sure the business functions on both sides of the ocean.",
    meta: ["Kolkata, IN", "MBA, IISWBM", "Executive Leadership, IIM Ahmedabad"],
    link: { label: "Check MBF out!", href: "https://machhlibabafries.com/" },
  },
  {
    name: "Dr. Sareeha Abubaker",
    title: "Co-Founder & CEO",
    bio: "Sareeha is a practising Obstetrician and Gynecologist in Kolkata, consulting at Belle Vue, Woodlands, Motherhood, and Medica. She leads QP Quintet alongside her medical practice, bringing the same attentiveness she gives her patients to how the company is run.",
    meta: [
      "Kolkata, IN",
      "Calcutta Medical College",
      "Obstetrics & Gynecology, Medical Oncology",
    ],
    link: {
      label: "Check Dr. Abubaker's website out!",
      href: "https://kolkatagynaecologist.com/",
    },
  },
  {
    name: "Sarnaz Abubaker",
    title: "Co-Founder & Chairperson",
    bio: "Sarnaz has spent two decades inside some of India's sharpest financial institutions, building a career on one skill: turning a single relationship into ten. That instinct for partnerships that compound is exactly what she brings to QP Quintet, where she sets the company's direction and leads its expansion into new markets, one durable relationship at a time.",
    meta: [
      "Gurugram, IN",
      "B.Pharm, Jadavpur University",
      "MBA (Finance), IISWBM, Kolkata",
    ],
  },
  {
    name: "Sarveen Abubaker",
    title: "Co-Founder & Director",
    bio: "Sarveen spent 25 years as a journalist, 23 of them at The Telegraph in Kolkata, before two years at Hindustan Times in New Delhi ahead of her retirement in 2019. She holds an MS in Journalism from Columbia University and a BA/MA in English Literature from Presidency College, Calcutta. Based in Kolkata, she brings that same rigor and clarity to how QP Quintet tells its own story.",
    meta: [
      "Kolkata, IN",
      "MS Journalism, Columbia University",
      "BA/MA English Literature, Presidency College",
    ],
  },
];

const CANADA_TEAM: Person[] = [
  {
    name: "Sarshad Abubaker",
    title: "Co-Founder & President",
    bio: "Sarshad spent nearly a decade as a software developer at Latitude Geographics / VertiGis, building the flagship product for one of the company's core platforms. He holds a Master's in Computer Science from the University of Victoria and a Master's in IT from De Montfort University, and also founded Grinbuck Technologies. At QP Quintet, he leads the technical and operational build-out of the business.",
    meta: [
      "Victoria, CA",
      "MSc Computer Science, University of Victoria",
      "MSc IT, De Montfort University",
    ],
    link: { label: "Check Grinbuck out!", href: "https://grinbuck.com" },
  },
  {
    name: "Kavita Uttam",
    title: "Co-Founder & Director",
    bio: "Kavita built her career in healthcare operations — 17 years across clinical leadership and nuclear medicine safety, work that leaves no room for error. At QP Quintet, she leads research, marketing, and client acquisition, and is usually the one turning a new relationship into a working partnership.",
    meta: ["Victoria, CA", "BSc Biology, UBC", "Honours Degree, BCIT"],
  },
];

/** Small text link to a founder's external site or venture, opened in a new tab. */
function FounderLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono mt-2 block text-xs uppercase tracking-widest text-accent hover:text-accent-deep"
    >
      {label}
    </a>
  );
}

interface PersonCardProps {
  person: Person;
  borderSide: "left" | "right";
}

/** A single person's card: avatar, name, title, bio, credentials, and an optional external link. */
function PersonCard({ person, borderSide }: PersonCardProps) {
  const borderClasses =
    borderSide === "left"
      ? "border-l-2 border-navy pl-6 md:pl-8"
      : "border-r-2 border-navy pr-6 md:pr-8";

  return (
    <div className={borderClasses}>
      <PersonAvatar name={person.name} />
      <h3 className="font-display mt-5 text-2xl md:text-3xl">{person.name}</h3>
      <p className="font-label mt-1 text-xs font-bold uppercase tracking-wide text-accent">
        {person.title}
      </p>
      <p className="mt-4 text-ink-soft">{person.bio}</p>
      <div className="font-mono mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-widest text-ink-soft">
        {person.meta.map((item, i) => (
          <span key={item} className="flex items-center gap-x-3">
            {i > 0 && <span aria-hidden="true">·</span>}
            {item}
          </span>
        ))}
      </div>
      {person.link && (
        <FounderLink label={person.link.label} href={person.link.href} />
      )}
    </div>
  );
}

interface WingSectionProps {
  index: string;
  name: string;
  cities: string[];
  team: Person[];
  borderSide: "left" | "right";
}

/** A numbered wing header (index, name, city list) followed by its person-card grid. */
function WingSection({ index, name, cities, team, borderSide }: WingSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-6">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="font-display text-3xl md:text-5xl">{name}</h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          {cities.map((city, i) => (
            <span key={city}>
              {i > 0 && " · "}
              {city}
            </span>
          ))}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
        {team.map((person) => (
          <PersonCard key={person.name} person={person} borderSide={borderSide} />
        ))}
      </div>
    </section>
  );
}

/** India/Canada wing sections for the About page, always shown together in full. */
export function AboutTeams() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="divide-y divide-line border-t border-line">
        <WingSection
          index="01"
          name="India Wing"
          cities={["Kolkata", "Gurugram"]}
          team={INDIA_TEAM}
          borderSide="left"
        />
        <WingSection
          index="02"
          name="Canada Wing"
          cities={["Victoria"]}
          team={CANADA_TEAM}
          borderSide="right"
        />
      </div>
    </div>
  );
}
