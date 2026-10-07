import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDot,
  CloudCog,
  Database,
  Fingerprint,
  Gauge,
  GraduationCap,
  HardDrive,
  Layers3,
  MapPin,
  Network,
  Radio,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Users2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import industrialEngineerImg from "@/assets/industry/industrial-engineer.jpg";
import controlRoomImg from "@/assets/industry/control-room.jpg";
import dataCenterImg from "@/assets/industry/data-center.jpg";
import engineeringTeamImg from "@/assets/industry/engineering-team.jpg";

type CapabilityId =
  | "gigalibs"
  | "workforce"
  | "mobile"
  | "nyr"
  | "opengrads"
  | "core";

type Capability = {
  id: CapabilityId;
  number: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  features: string[];
  tags: string[];
};

const capabilities: Capability[] = [
  {
    id: "gigalibs",
    number: "01",
    label: "GigaLibs CMMS",
    eyebrow: "Asset reliability platform",
    title: "Put every asset, schedule and maintenance action in one operating view.",
    description:
      "GigaLibs brings the equipment hierarchy, preventive maintenance cycles, meter readings and parts inventory together so teams can plan work from the same source of truth.",
    image: controlRoomImg,
    alt: "Industrial control room used to monitor plant operations",
    icon: Wrench,
    features: [
      "Site, area and equipment asset hierarchy",
      "Calendar and meter-based maintenance schedules",
      "Work orders, condition readings and inventory control",
    ],
    tags: ["CMMS", "ASSET REGISTER", "PREVENTIVE MAINTENANCE"],
  },
  {
    id: "workforce",
    number: "02",
    label: "GigaOps Workforce",
    eyebrow: "Connected operations",
    title: "Coordinate supervisors, technicians and field work without the paperwork lag.",
    description:
      "GigaOps connects workforce planning with the work itself: shifts, dispatch, assignments, checklists and status updates across sites and teams.",
    image: industrialEngineerImg,
    alt: "Field engineer carrying a tablet inside an industrial facility",
    icon: Users2,
    features: [
      "Shift planning and technician allocation",
      "Role-aware dispatch and work status visibility",
      "Site and organizational scope controls",
    ],
    tags: ["SCHEDULING", "DISPATCH", "MULTI-SITE"],
  },
  {
    id: "mobile",
    number: "03",
    label: "Native Mobile",
    eyebrow: "Field-ready applications",
    title: "Keep critical workflows available at the edge—even when the network is not.",
    description:
      "Our mobile delivery covers native iOS and Android, Flutter and hybrid systems, with local persistence, background synchronization and device-level security designed into the workflow.",
    image: industrialEngineerImg,
    alt: "Industrial engineer reviewing field information on a tablet",
    icon: Smartphone,
    features: [
      "Offline queues with background synchronization",
      "Biometrics, secure storage and push notifications",
      "Native iOS, Android, Flutter and responsive web delivery",
    ],
    tags: ["OFFLINE-FIRST", "IOS + ANDROID", "SECURE DEVICE"],
  },
  {
    id: "nyr",
    number: "04",
    label: "nyr Network",
    eyebrow: "Trust-first local platform",
    title: "Make nearby discovery useful without turning community into a public feed.",
    description:
      "nyr is designed around private circles, relevant local activity and clear audience boundaries—supporting requests, rides, events, recommendations and local business offers.",
    image: engineeringTeamImg,
    alt: "Product team reviewing a digital platform together",
    icon: MapPin,
    features: [
      "Trusted-circle discovery and audience controls",
      "Local requests, rides, events and recommendations",
      "Business offers, moderation and safety workflows",
    ],
    tags: ["TRUST GRAPH", "LOCAL DISCOVERY", "PRIVACY-FIRST"],
  },
  {
    id: "opengrads",
    number: "05",
    label: "OpenGrads",
    eyebrow: "Interoperable talent network",
    title: "Connect students, institutions and employers through an open opportunity network.",
    description:
      "OpenGrads combines a social-first early-career experience with ONEST and Beckn interoperability, verified credentials, matching and role-specific workflows.",
    image: engineeringTeamImg,
    alt: "Software engineers collaborating in front of a code display",
    icon: GraduationCap,
    features: [
      "Student, college, employer and recruiter journeys",
      "ONEST and Beckn opportunity discovery flows",
      "Credential, assessment, matching and moderation layers",
    ],
    tags: ["ONEST / BECKN", "VERIFIED PROFILES", "AI MATCHING"],
  },
  {
    id: "core",
    number: "06",
    label: "Enterprise Core",
    eyebrow: "Platform engineering",
    title: "Give every product a secure, observable and scalable foundation.",
    description:
      "Shared platform services cover identity, permissions, workflow orchestration, caching, billing and integration so product teams can focus on the domain—not rebuild the core.",
    image: dataCenterImg,
    alt: "Server racks in a modern data center",
    icon: CloudCog,
    features: [
      "Hierarchical RBAC and multi-channel verification",
      "Cache, queue and workflow orchestration services",
      "Billing, ledger and third-party integration foundations",
    ],
    tags: ["IDENTITY", "WORKFLOWS", "CLOUD SERVICES"],
  },
];

const architectureLayers = [
  {
    number: "01",
    icon: Smartphone,
    title: "Experience layer",
    copy: "Web, native mobile and offline field experiences shaped around the job to be done.",
    detail: "WEB / IOS / ANDROID",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Trust & access",
    copy: "Tenant boundaries, role scopes, verification and policy controls applied consistently.",
    detail: "RBAC / OTP / AUDIT",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Workflow core",
    copy: "Deterministic state transitions, business rules and asynchronous execution pipelines.",
    detail: "EVENTS / QUEUES / RULES",
  },
  {
    number: "04",
    icon: Database,
    title: "Data & integration",
    copy: "Operational records, caching, reporting and protocol integrations built for evolution.",
    detail: "DATA / CACHE / APIS",
  },
];

const deliveryPrinciples = [
  {
    icon: Gauge,
    title: "Operational clarity",
    copy: "Interfaces make the next action clear for planners, supervisors and people in the field.",
  },
  {
    icon: HardDrive,
    title: "Resilient by design",
    copy: "Local-first patterns, background jobs and explicit system states protect continuity.",
  },
  {
    icon: Fingerprint,
    title: "Security in the workflow",
    copy: "Identity, permissions and auditability are part of the product model from day one.",
  },
  {
    icon: Layers3,
    title: "Built to extend",
    copy: "Modular services and protocol-aware integrations reduce the cost of the next capability.",
  },
];

export default function Home() {
  const [activeCapability, setActiveCapability] =
    useState<CapabilityId>("gigalibs");

  const selected = capabilities.find(
    (capability) => capability.id === activeCapability,
  )!;
  const SelectedIcon = selected.icon;

  return (
    <Layout>
      <section className="relative min-h-[760px] overflow-hidden bg-[#11110f] text-white lg:min-h-[calc(100vh-72px)]">
        <img
          src={industrialEngineerImg}
          alt="Engineer using a rugged tablet in an industrial facility"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,11,0.98)_0%,rgba(12,12,11,0.91)_40%,rgba(12,12,11,0.38)_72%,rgba(12,12,11,0.2)_100%)]" />
        <div className="absolute inset-0 industrial-grid opacity-25" />
        <div className="absolute right-[7%] top-[12%] hidden h-36 w-36 border-r border-t border-orange-400/70 lg:block" />
        <div className="absolute right-[7%] top-[12%] hidden h-3 w-3 translate-x-[6px] -translate-y-[6px] bg-[#ff7200] lg:block" />

        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] flex-col px-5 pb-9 pt-16 sm:px-8 lg:min-h-[calc(100vh-72px)] lg:px-12 lg:pt-24">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/60 sm:text-xs">
            <span className="h-px w-10 bg-[#ff7200]" />
            Gigasys Technologies / Applied software systems
          </div>

          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-[clamp(3.2rem,7.1vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
              Built for work that cannot stand still.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Gigasys designs and engineers connected operations software,
              field-ready mobile products and secure digital platforms for
              real-world teams.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#capabilities"
                className="inline-flex min-h-[52px] items-center gap-3 bg-[#ff7200] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e96500]"
              >
                Explore our solutions
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-3 border border-white/30 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="mt-auto grid gap-px border border-white/20 bg-white/20 sm:grid-cols-3 lg:max-w-3xl">
            {[
              ["06", "Capability families"],
              ["Web + Mobile", "Delivery surfaces"],
              ["USA + India", "Engineering presence"],
            ].map(([value, label]) => (
              <div key={label} className="bg-black/60 px-5 py-4 backdrop-blur-md">
                <div className="font-mono text-sm font-semibold text-[#ff8a2b]">
                  {value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#ff7200] text-white">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-4">
          {["Asset reliability", "Connected workforce", "Trusted networks", "Platform engineering"].map(
            (item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-white/20 px-5 py-5 md:border-b-0 md:border-r md:last:border-r-0 lg:px-8"
              >
                <span className="font-mono text-xs text-white/70">0{index + 1}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.08em]">
                  {item}
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20 bg-[#f4f3ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="section-label">Capabilities</div>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#161614] sm:text-5xl lg:text-7xl">
                One engineering partner. Six connected solution families.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/60 lg:justify-self-end lg:text-lg">
              The portfolio reflects systems already present across GigaLibs and
              the applications in the Gigasys workspace—not a list of generic
              consulting promises.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)]">
            <div className="border-y border-black/10">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                const isActive = activeCapability === capability.id;

                return (
                  <button
                    key={capability.id}
                    type="button"
                    onClick={() => setActiveCapability(capability.id)}
                    className={`group flex w-full items-center gap-4 border-b border-black/10 px-1 py-5 text-left transition last:border-b-0 ${
                      isActive ? "text-[#ff7200]" : "text-black/60 hover:text-black"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="w-7 font-mono text-[11px]">{capability.number}</span>
                    <span
                      className={`grid h-10 w-10 place-items-center border transition ${
                        isActive
                          ? "border-[#ff7200] bg-[#ff7200] text-white"
                          : "border-black/10 bg-white text-black/70 group-hover:border-black/40"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold uppercase tracking-[0.06em]">
                      {capability.label}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 transition ${isActive ? "translate-x-1" : ""}`}
                    />
                  </button>
                );
              })}
            </div>

            <article className="overflow-hidden border border-black/10 bg-white">
              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
                <img
                  key={selected.id}
                  src={selected.image}
                  alt={selected.alt}
                  className="absolute inset-0 h-full w-full object-cover animate-in fade-in duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-[#ff7200] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white sm:text-xs">
                  <SelectedIcon className="h-4 w-4" />
                  {selected.eyebrow}
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 xl:grid-cols-[1fr_0.72fr] xl:p-10">
                <div>
                  <h3 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#161614] sm:text-4xl">
                    {selected.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
                    {selected.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 bg-[#f4f3ef] px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-black/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-black/10 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                    Core scope
                  </div>
                  <ul className="mt-4 space-y-4">
                    {selected.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-black/70">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#ff7200]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#e56500] hover:text-black"
                  >
                    Discuss this capability
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="section-label">What we deliver</div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#161614] sm:text-5xl lg:text-6xl">
                Software shaped around the operation.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-black/60">
              Product strategy, engineering and ongoing platform evolution—from
              the workflow at the edge to the services behind it.
            </p>
          </div>

          <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Operations & maintenance",
                copy: "CMMS, asset registers, preventive maintenance, work execution and operational reporting.",
                image: controlRoomImg,
                icon: Boxes,
              },
              {
                number: "02",
                title: "Mobile & field systems",
                copy: "Secure, offline-capable experiences for technicians, distributed teams and real-world environments.",
                image: industrialEngineerImg,
                icon: Radio,
              },
              {
                number: "03",
                title: "Digital platforms",
                copy: "Trust-first community, talent and marketplace products with clear roles and governance.",
                image: engineeringTeamImg,
                icon: Network,
              },
              {
                number: "04",
                title: "Enterprise foundations",
                copy: "Cloud APIs, identity, permissions, workflow engines, data services and integrations.",
                image: dataCenterImg,
                icon: CloudCog,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group bg-white">
                  <div className="relative h-64 overflow-hidden sm:h-80">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 border border-white/40 bg-black/30 px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-white backdrop-blur-sm">
                      {item.number}
                    </span>
                  </div>
                  <div className="grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                    <div className="grid h-12 w-12 place-items-center bg-[#ff7200] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#161614]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-black/60">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="architecture" className="scroll-mt-20 overflow-hidden bg-[#141412] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <div className="section-label section-label--dark">System architecture</div>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Connected from field action to platform core.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/60 lg:justify-self-end">
              We treat the product as one operating system: experience, trust,
              workflows and data designed together, with clean boundaries between
              every layer.
            </p>
          </div>

          <div className="relative mt-14 grid gap-px border border-white/20 bg-white/20 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-[63px] hidden h-px bg-[#ff7200]/50 xl:block" />
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <article key={layer.number} className="relative bg-[#191917] p-6 sm:p-8">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-[#ff7200] bg-[#191917] text-[#ff7a12]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                      LAYER {layer.number}
                    </span>
                  </div>
                  <h3 className="mt-9 text-xl font-semibold">{layer.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-white/50">
                    {layer.copy}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.15em] text-[#ff8b35]">
                    {layer.detail}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="bg-[#11110f] p-6">
                  <Icon className="h-5 w-5 text-[#ff7200]" />
                  <h3 className="mt-5 text-base font-semibold">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{principle.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="company" className="scroll-mt-20 bg-[#f4f3ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-2">
            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <img
                src={engineeringTeamImg}
                alt="Engineering team collaborating on software"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-24 text-white sm:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Engineering presence
                </div>
                <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#ff7a12]" /> Dover, Delaware
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#ff7a12]" /> Hyderabad, India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-20">
              <div className="section-label">How we work</div>
              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#161614] sm:text-5xl">
                Domain depth, product thinking and production engineering.
              </h2>
              <p className="mt-6 text-base leading-7 text-black/60">
                We work across the full product path—from understanding the
                operational problem to designing the system, building the
                experience and evolving it after launch.
              </p>

              <div className="mt-8 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                {[
                  ["01", "Discover the real workflow"],
                  ["02", "Design the system boundaries"],
                  ["03", "Build web, mobile and core"],
                  ["04", "Operate, learn and extend"],
                ].map(([number, text]) => (
                  <div key={number} className="bg-[#f9f8f5] p-5">
                    <span className="font-mono text-[10px] text-[#ff7200]">{number}</span>
                    <p className="mt-2 text-sm font-semibold text-black/70">{text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 self-start text-sm font-bold text-[#e56500] hover:text-black"
              >
                More about Gigasys
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ff7200] py-20 text-white md:py-24">
        <div className="absolute inset-0 orange-grid opacity-25" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
              <CircleDot className="h-4 w-4" /> Start a conversation
            </div>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Bring us the operation you need to improve.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
              We’ll help map the workflow, the platform beneath it and the most
              practical path to production.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#141412] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black"
          >
            Talk to engineering
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
