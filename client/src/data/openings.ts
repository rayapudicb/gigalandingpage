export type Opening = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

export const openings: Opening[] = [
  {
    id: "mern",
    title: "MERN Stack Engineer",
    team: "Engineering",
    location: "Hyderabad · hybrid",
    type: "Full-time",
    summary: "Build GigaOps modules with a record someone can audit — work orders, bookings, stock and evidence — not a demo that dies in a slide.",
  },
  {
    id: "qa",
    title: "QA Engineer",
    team: "Quality",
    location: "Hyderabad · hybrid",
    type: "Full-time",
    summary: "Prove the contracts: never-negative ATP, a completed checklist, a signature when the job requires it. Break what operations cannot afford to ship.",
  },
  {
    id: "ba",
    title: "Business Analyst",
    team: "Product",
    location: "Hyderabad · hybrid",
    type: "Full-time",
    summary: "Sit with a plant, a depot or a lab and turn their current tools into a path through GigaOps. Name the job, the owner and the evidence.",
  },
  {
    id: "hr",
    title: "HR Generalist",
    team: "People",
    location: "Hyderabad",
    type: "Full-time",
    summary: "Run hiring, onboarding and the people record for a product company that ships to sites — not a campus brochure.",
  },
  {
    id: "sales",
    title: "Sales",
    team: "Go to market",
    location: "Hyderabad · India travel",
    type: "Full-time",
    summary: "Bring a site map and the tools they want to retire. Sell the operating record, not a feature list. Manufacturing first; other packs follow.",
  },
  {
    id: "aiml",
    title: "AI / ML Engineer",
    team: "Engineering",
    location: "Hyderabad · hybrid",
    type: "Full-time",
    summary: "Assisted operations on the GigaOps record — retrieval, classification, a handoff with context. Not a chatbot that invents a work order.",
  },
];

export function applyMailto(title: string) {
  const subject = `Application — ${title}`;
  const body = `I am applying for ${title} at Gigasys.\n\nName:\nPhone:\nLocation:\nLinkedIn or CV:\n\nWhy this role:\n`;
  return `mailto:connect@gigasystech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
