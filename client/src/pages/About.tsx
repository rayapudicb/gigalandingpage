import Layout from "@/components/Layout";
import { Link } from "wouter";
import {
  ArrowRight,
  Blocks,
  Building2,
  Check,
  Code2,
  Database,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const facts = [
  {
    value: "11",
    label: "Business capability families",
    detail: "From Asset & Maintenance through Data & Integration",
  },
  {
    value: "09",
    label: "Named portfolio products",
    detail: "Each with a distinct audience, domain and product boundary",
  },
  {
    value: "03",
    label: "Operating locations",
    detail: "Dover, Hyderabad and Ongole",
  },
  {
    value: "02",
    label: "Product surfaces",
    detail: "Enterprise web and native mobile",
  },
];

const capabilities = [
  {
    icon: Blocks,
    number: "01",
    title: "Enterprise SaaS",
    description:
      "GigaLibs brings maintenance, workforce, inventory, procurement, orders, finance, workflow, analytics, documents, communications and data into a modular operating platform.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Native mobile execution",
    description:
      "Task-first mobile journeys extend approvals, field work, documents, scanning, signatures, maps, conversations and reporting to the point of work.",
  },
  {
    icon: Database,
    number: "03",
    title: "Data and integration",
    description:
      "Contracts, mappings, quality controls, lineage, connectors, webhooks and durable workflows connect operating systems without brittle point solutions.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Focused digital products",
    description:
      "The portfolio spans CRM, omnichannel communications, conversational AI, talent, local social experiences, HR, exchange commerce and identity infrastructure.",
  },
];

const principles = [
  "Start with the measurable operating outcome",
  "Keep each product and module boundary explicit",
  "Design web, mobile, services and data as one system",
  "Build permissions, evidence and auditability into the workflow",
];

const offices = [
  {
    city: "Dover, Delaware",
    type: "Headquarters",
    lines: ["8 The Green, Suite B", "Dover, DE 19901, USA"],
  },
  {
    city: "Hyderabad, India",
    type: "Development Center",
    lines: [
      "103, New Mark House, Patrika Nagar",
      "HITEC City, Hyderabad, Telangana 500081, India",
    ],
  },
  {
    city: "Ongole, India",
    type: "Development Center",
    lines: [
      "05-E-Zone, Maruthi Nagar, Kurnool Road (O)",
      "Prakasam District, Ongole, Andhra Pradesh 523002, India",
    ],
  },
];

export default function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#151513] py-20 text-white md:py-28">
        <div className="absolute inset-0 orange-grid opacity-20" />
        <div className="absolute -right-36 top-10 h-[420px] w-[420px] rounded-full border border-[#ff7200]/20" />
        <div className="absolute -right-20 top-24 h-[300px] w-[300px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff8a2b]">About Gigasys Technologies</div>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Product strategy, domain depth and engineering in one team.</h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Gigasys develops enterprise SaaS, native mobile applications and focused digital products. We turn real operating constraints into connected software that teams can adopt, govern and evolve.</p>
        </div>
      </section>

      <section className="bg-[#f3f2ee] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 xl:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white p-6 sm:p-8">
                <div className="font-mono text-4xl font-semibold tracking-[-0.05em] text-[#e76500] sm:text-5xl">{fact.value}</div>
                <h2 className="mt-6 text-base font-semibold tracking-[-0.02em] text-[#161614]">{fact.label}</h2>
                <p className="mt-2 text-sm leading-6 text-black/50">{fact.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-black/45">These figures are direct counts of the capabilities, products, locations and delivery surfaces represented in the current Gigasys portfolio—not estimates of customers, traffic or market reach.</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="section-label">What we build</div>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#161614] sm:text-5xl lg:text-7xl">A portfolio built around operating work.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/60 lg:justify-self-end lg:text-lg">Our capability claims map directly to the products and modules represented across the Gigasys codebase and product portfolio.</p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.number} className="group bg-[#f8f7f3] p-7 transition duration-300 hover:bg-[#151513] hover:text-white sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center bg-[#ff7200] text-white"><Icon className="h-5 w-5" /></span>
                    <span className="font-mono text-[10px] text-black/30 group-hover:text-white/30">{capability.number}</span>
                  </div>
                  <h3 className="mt-12 text-3xl font-semibold tracking-[-0.04em]">{capability.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-black/55 group-hover:text-white/55">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f2ee] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <div className="section-label">How we work</div>
            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#161614] sm:text-5xl">Outcome first. Evidence throughout.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/60">We shape products around the work that needs to improve, then engineer the operating model, experience and technology as a connected whole.</p>
          </div>
          <div className="border-y border-black/10">
            {principles.map((principle, index) => (
              <div key={principle} className="flex items-center gap-5 border-b border-black/10 py-5 last:border-b-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-white text-[#e76500]"><Check className="h-4 w-4" /></span>
                <span className="w-7 font-mono text-[10px] text-black/35">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base font-semibold tracking-[-0.02em] text-black/70">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 border-b border-black/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label">Where we work</div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[#161614] sm:text-5xl">Our locations</h2>
            </div>
            <Building2 className="h-10 w-10 text-[#ff7200]" />
          </div>
          <div className="mt-10 grid gap-px border border-black/10 bg-black/10 lg:grid-cols-3">
            {offices.map((office) => (
              <article key={office.city} className="bg-[#f8f7f3] p-7 sm:p-8">
                <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e76500]">{office.type}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#161614]">{office.city}</h3>
                <div className="mt-7 flex gap-3 border-t border-black/10 pt-5 text-sm leading-6 text-black/55">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#ff7200]" />
                  <p>{office.lines.map((line) => <span key={line} className="block">{line}</span>)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ff7200] py-20 text-white md:py-24">
        <div className="absolute inset-0 orange-grid opacity-25" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70"><ShieldCheck className="h-4 w-4" /> Build with Gigasys</div>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.99] tracking-[-0.05em] sm:text-5xl lg:text-7xl">Bring us the operating problem—not a predetermined feature list.</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#151513] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </Layout>
  );
}
