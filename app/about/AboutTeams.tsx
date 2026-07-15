"use client";

import { useId, useState } from "react";

interface Person {
  name: string;
  title: string;
  bio: string;
  meta: string[];
  link?: { label: string; href: string };
}

const indiaTeam: Person[] = [
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

const canadaTeam: Person[] = [
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

function TeamEntry({ person, index }: { person: Person; index: number }) {
  const isEven = index % 2 === 1;

  return (
    <div className={`py-12 md:py-16 ${isEven ? "flex justify-end" : ""}`}>
      <div
        className={`max-w-2xl ${
          isEven
            ? "border-r-2 border-accent pr-6 text-right md:pr-10"
            : "border-l-2 border-accent pl-6 md:pl-10"
        }`}
      >
        <h3 className="font-display text-3xl md:text-4xl">{person.name}</h3>
        <p className="font-mono mt-2 text-sm uppercase tracking-wide text-accent">
          {person.title}
        </p>
        <p className="mt-5 text-ink-soft">{person.bio}</p>
        <div
          className={`font-mono mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-widest text-ink-soft ${
            isEven ? "justify-end" : ""
          }`}
        >
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
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
        open ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="square" />
    </svg>
  );
}

function WingAccordion({
  label,
  team,
  open,
  onToggle,
}: {
  label: string;
  team: Person[];
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-line">
      <h2>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 bg-ink px-6 py-6 text-left text-paper transition-colors hover:bg-ink/90 md:px-10 md:py-8"
        >
          <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono text-sm uppercase tracking-wide md:text-base">
              {label}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
              {team.length} team {team.length === 1 ? "member" : "members"}
            </span>
          </span>
          <ChevronIcon open={open} />
        </button>
      </h2>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-line px-6 md:px-10">
            {team.map((person, index) => (
              <TeamEntry key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** India/Canada wing accordion for the About page, each toggleable independently and closed by default. */
export function AboutTeams() {
  const [indiaOpen, setIndiaOpen] = useState(false);
  const [canadaOpen, setCanadaOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="border-t border-line">
        <WingAccordion
          label="India Wing"
          team={indiaTeam}
          open={indiaOpen}
          onToggle={() => setIndiaOpen((v) => !v)}
        />
        <WingAccordion
          label="Canada Wing"
          team={canadaTeam}
          open={canadaOpen}
          onToggle={() => setCanadaOpen((v) => !v)}
        />
      </div>
    </div>
  );
}
