/**
 * Careers content. Structured so more openings can be added to `jobs`.
 * Deliberately no salary figures — compensation is discussed at interview.
 */

export const careersIntro =
  "We are a small, standards-driven team producing distribution design for Canadian utilities and engineering consultancies. If you draft carefully, take standards seriously, and want your work reviewed on real North American projects, we would like to hear from you.";

export const CAREERS_EMAIL = "careers@spanex.ca";

export interface Job {
  id: string;
  title: string;
  discipline: string;
  location: string;
  type: string;
  hours: string;
  datePosted: string; // ISO
  employmentType: string; // schema.org value
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  offer: string[];
}

export const jobs: Job[] = [
  {
    id: "autocad-drafter",
    title: "AutoCAD Drafter",
    discipline: "Utility Distribution Drafting",
    location: "Bengaluru, India · On-site",
    type: "Full-time",
    hours: "8:30 AM – 5:00 PM",
    datePosted: "2026-07-24",
    employmentType: "FULL_TIME",
    summary:
      "Produce construction-ready distribution drawings in AutoCAD to Canadian utility standards, on live projects for reputed Canadian utilities and engineering consultancies.",
    responsibilities: [
      "Produce plan-and-profile and construction drawings in AutoCAD to the client's CAD standard.",
      "Draft overhead and underground distribution layouts, pole framing and details.",
      "Incorporate redlines, as-built notes and drawing revisions accurately.",
      "Maintain layering, blocks, xrefs and title blocks to client templates.",
      "Run the project self-check before every submission and close out review comments.",
    ],
    requirements: [
      "Diploma or degree in drafting, civil, electrical or mechanical — or equivalent experience.",
      "Proficiency in AutoCAD (2D drafting).",
      "Understanding of drafting standards: layering, plan-and-profile, title blocks.",
      "Strong attention to detail and accuracy.",
      "Clear written English for review comments and transmittals.",
    ],
    niceToHave: [
      "Experience in electrical or utility distribution drafting.",
      "Exposure to SPIDAcalc, GIS or landbase workflows.",
      "Familiarity with Canadian or North American standards (CSA / NESC).",
    ],
    offer: [
      "Live projects for reputed Canadian utilities and engineering consultancies.",
      "Structured review and mentorship from senior leads.",
      "Clear standards and modern, coordinated workflows.",
      "Fixed working hours, 8:30 AM – 5:00 PM.",
      "Compensation discussed during the interview process.",
    ],
  },
];

export function getJob(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}
