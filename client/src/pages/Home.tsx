import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Database,
  Factory,
  Film,
  FlaskConical,
  Gauge,
  Globe2,
  GraduationCap,
  HardHat,
  HeartPulse,
  MapPin,
  MessageSquareMore,
  Network,
  Pause,
  Play,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Sprout,
  Store,
  Ticket,
  TrainFront,
  Trophy,
  Users2,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import industrialEngineerImg from "@/assets/industry/industrial-engineer.jpg";
import controlRoomImg from "@/assets/industry/control-room.jpg";
import dataCenterImg from "@/assets/industry/data-center.jpg";
import engineeringTeamImg from "@/assets/industry/engineering-team.jpg";

type SuiteId =
  | "maintenance"
  | "workforce"
  | "commerce"
  | "finance"
  | "intelligence"
  | "experience";

type Suite = {
  id: SuiteId;
  number: string;
  label: string;
  kicker: string;
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
  modules: string[];
};

const heroSlides = [
  {
    eyebrow: "GigaLibs enterprise SaaS",
    title: "Run the work. Connect the business.",
    copy: "A modular operating platform for assets, workforce, supply chain, finance, data and field execution—delivered across web and native mobile.",
    image: controlRoomImg,
    alt: "Industrial control room monitoring connected operations",
    marker: "01 / OPERATIONS CLOUD",
  },
  {
    eyebrow: "Asset & field operations",
    title: "From maintenance plan to verified field action.",
    copy: "Bring assets, work orders, preventive maintenance, meters, MRO inventory, technicians and evidence into one governed operating flow.",
    image: industrialEngineerImg,
    alt: "Field engineer working with a tablet in an industrial facility",
    marker: "02 / CMMS + MOBILE",
  },
  {
    eyebrow: "Commerce & financial operations",
    title: "Connect product, order, inventory and cash movement.",
    copy: "Coordinate catalogue, warehouses, procurement, fulfillment, invoicing, spend and finance through modular business applications.",
    image: dataCenterImg,
    alt: "Modern data centre supporting enterprise software services",
    marker: "03 / BUSINESS SYSTEMS",
  },
  {
    eyebrow: "Digital product portfolio",
    title: "Build intelligent experiences beyond the enterprise core.",
    copy: "Gigasys also develops AI, communications, CRM, talent, social and exchange products—each with a focused domain and product identity.",
    image: engineeringTeamImg,
    alt: "Engineering team collaborating on a digital product",
    marker: "04 / AI + DIGITAL PRODUCTS",
  },
] as const;

const suites: Suite[] = [
  {
    id: "maintenance",
    number: "01",
    label: "Asset & Maintenance",
    kicker: "GigaLibs CMMS / EAM",
    title: "Control the complete maintenance lifecycle from asset context to reliable completion.",
    description:
      "A multi-tenant maintenance system for physical operations, connecting equipment, work execution, preventive plans, materials and reliability insight.",
    outcome:
      "Reduce reactive coordination, make maintenance history trustworthy and give planners and technicians the same operating context.",
    icon: Wrench,
    modules: [
      "Work orders & execution history",
      "Assets, classifications & digital twin context",
      "CAFM spaces, sites & floor operations",
      "Preventive maintenance schedules",
      "Meters, readings & condition triggers",
      "MRO parts, storerooms & stock movements",
      "Reliability analytics & downtime insight",
      "Floor kiosk and field workflows",
    ],
  },
  {
    id: "workforce",
    number: "02",
    label: "Workforce Operations",
    kicker: "GigaOps workforce",
    title: "Match qualified people to operational demand and keep every shift accountable.",
    description:
      "Workforce planning and execution for distributed operations, from the resource directory and qualifications to dispatch, time, compliance and pay-ready outputs.",
    outcome:
      "Shorten assignment handling, expose coverage gaps earlier and reduce qualification, attendance and payroll exceptions.",
    icon: Users2,
    modules: [
      "Resource, team & pool directory",
      "Jobs, positions & organization context",
      "Skills, capabilities & qualifications",
      "Availability and absence",
      "Scheduling, shifts & dispatch",
      "Assignments and staffing requests",
      "Time, attendance & place policy",
      "Compliance and expiry controls",
      "Pay-ready outputs",
      "Workforce analytics & reports",
    ],
  },
  {
    id: "commerce",
    number: "03",
    label: "Commerce & Supply Chain",
    kicker: "Connected commercial operations",
    title: "Carry demand from product and quote through stock, fulfillment and invoice.",
    description:
      "Composable commercial modules link the product catalogue, warehouses, purchasing, customer orders and accounts receivable without collapsing them into one rigid application.",
    outcome:
      "Improve stock visibility, preserve approval controls and reduce handoff gaps across buying, selling, fulfillment and billing.",
    icon: ShoppingBag,
    modules: [
      "Product catalogue, units & price lists",
      "Warehouses, locations, lots & balances",
      "Receiving, transfers, reservations & counts",
      "Requisitions, purchase orders & vendors",
      "Three-way matching & payables controls",
      "Quotes, sales orders & allocation",
      "Fulfillment, returns & credit memos",
      "Customer invoicing & receivables",
    ],
  },
  {
    id: "finance",
    number: "04",
    label: "Finance & Spend",
    kicker: "Governed financial operations",
    title: "Connect operational transactions to auditable financial outcomes.",
    description:
      "Finance capabilities cover books, journals, subledgers, spend, currency, tax, reconciliation and close workflows with governed roles and durable records.",
    outcome:
      "Create a clearer path from operating event to financial review, reporting and reconciliation across business units.",
    icon: WalletCards,
    modules: [
      "Books, chart of accounts & fiscal periods",
      "Double-entry journals & immutable reversals",
      "AP, AR and inventory subledger ingestion",
      "Trial balance and financial statements",
      "Spend, expenses & approval policy",
      "Bank statement reconciliation",
      "Multi-currency and tax configuration",
      "Budgeting, period close & forecasting",
    ],
  },
  {
    id: "intelligence",
    number: "05",
    label: "Automation & Intelligence",
    kicker: "Build, automate and understand",
    title: "Turn repeatable business logic into governed workflows, decisions and insight.",
    description:
      "Studios for workflows, rules, forms, analytics, data and connectors help teams adapt the platform without losing control of permissions, lineage or execution state.",
    outcome:
      "Replace disconnected manual steps with visible workflows and move from static reporting toward actionable operational intelligence.",
    icon: Sparkles,
    modules: [
      "Workflow Studio & durable orchestration",
      "Business rules and decision tables",
      "Dynamic forms and configuration studio",
      "Analytics explore, dashboards & reports",
      "Data sources, metrics & lineage",
      "Connector hub and integration catalogue",
      "Document scanning and extraction",
      "AI-assisted product and service experiences",
    ],
  },
  {
    id: "experience",
    number: "06",
    label: "Experience & Trust",
    kicker: "One governed experience layer",
    title: "Give every role the right surface, scope and communication channel.",
    description:
      "Tenant-aware access, place context, documents, signatures and omnichannel communication extend core workflows to employees, field teams, customers and partners.",
    outcome:
      "Reduce context switching while keeping tenant, organization, place and role boundaries explicit across every channel.",
    icon: ShieldCheck,
    modules: [
      "Tenant access and role-based permissions",
      "Organization hierarchy and spatial scope",
      "Places, maps and geospatial context",
      "Documents, evidence and scanner flows",
      "Cryptographic e-signature journeys",
      "TextFly unified inbox",
      "Email, SMS, WhatsApp, voice & webhooks",
      "Templates, campaigns and event triggers",
    ],
  },
];

const mobileCapabilities = [
  "Today / My Work",
  "Workforce",
  "CMMS field execution",
  "Places & Maps",
  "Actions & Approvals",
  "Documents & Scanner",
  "TextFly conversations",
  "Analytics",
  "Generated Reports",
  "Spend & Expenses",
  "E-signature",
  "Profile & Security",
];

const webCapabilities = [
  "Executive control tower",
  "Operational workbenches",
  "Scheduling and dispatch",
  "Configuration and forms studios",
  "Analytics and report authoring",
  "Finance and commercial controls",
  "Tenant, role and organization administration",
  "Connector and communication management",
];

const technologyGroups = [
  { label: "Web experience", icon: Code2, technologies: ["Next.js", "React", "TypeScript", "Tailwind", "ECharts", "SWR"] },
  { label: "Native mobile", icon: Smartphone, technologies: ["React Native", "Expo", "Expo Router", "TanStack Query", "SecureStore", "Zod"] },
  { label: "Services & data", icon: Database, technologies: ["Node.js", "Fastify", "PostgreSQL", "OpenAPI", "AsyncAPI", "Event workers"] },
  { label: "Delivery quality", icon: ShieldCheck, technologies: ["Playwright", "Vitest", "Contract tests", "Audit trails", "Health checks", "CI gates"] },
];

const outcomes = [
  { number: "01", title: "Faster work-to-action cycles", copy: "Prioritized work, clear ownership and mobile execution reduce the time between assignment, action and decision.", measure: "Assignment-to-start · submission-to-decision" },
  { number: "02", title: "Less duplicate administration", copy: "Capture evidence once at the point of work and carry authoritative status through approvals, reporting and financial processes.", measure: "Active administration time · re-entry rate" },
  { number: "03", title: "More reliable operations", copy: "Planned maintenance, qualified staffing, material availability and visible exceptions help teams protect continuity.", measure: "Completion cycle · overdue work · exceptions" },
  { number: "04", title: "Better first-time-right work", copy: "Configured forms, required evidence and governed task flows reduce incomplete submissions and repeat visits.", measure: "Accepted submissions · correction rate" },
  { number: "05", title: "Audit-ready business records", copy: "Permissions, history, receipts and durable transaction records make operational and financial decisions easier to reconstruct.", measure: "Audit preparation time · evidence completeness" },
];

const portfolioProducts = [
  { name: "GigaLibs", category: "Enterprise operations SaaS", copy: "A modular product suite for assets, workforce, commerce, finance, automation, data and governed business operations.", icon: Blocks },
  { name: "GigaCRM", category: "Customer relationships", copy: "Lead and deal workspaces, sales activity, communication context and adaptable pipelines for modern teams.", icon: BriefcaseBusiness },
  { name: "TextFly", category: "Omnichannel communications", copy: "A multi-tenant communication platform spanning email, SMS, WhatsApp, Slack, voice, webhooks and a unified inbox.", icon: MessageSquareMore },
  { name: "WhooCrew AI", category: "Voice & conversational AI", copy: "Voice-agent and chatbot experiences with live call visibility, product APIs and enterprise communication services.", icon: Bot },
  { name: "nyr", category: "Local social platform", copy: "Privacy-aware local discovery, trusted circles, requests, rides, events, recommendations and business offers.", icon: MapPin },
  { name: "OpenGrads", category: "Talent & opportunity network", copy: "A social-first network for students, institutions, employers and recruiters with ONEST and Beckn interoperability.", icon: GraduationCap },
  { name: "GigaHR / MyNextCV", category: "HR & recruitment intelligence", copy: "Permission-aware HR journeys and recruitment intelligence built for governed, configurable SaaS delivery.", icon: Building2 },
  { name: "Swappy", category: "Exchange commerce", copy: "A provider-governed reservation and entitlement exchange engine for ticketed experiences and multi-party transactions.", icon: RefreshCw },
  { name: "OpenFace", category: "Social identity infrastructure", copy: "Headless identity, credibility, audience and engagement capabilities for portable social experiences.", icon: Network },
];

const portfolioLayers = [
  {
    number: "01",
    label: "Technology capabilities",
    title: "How we engineer",
    copy: "Web, native mobile, cloud services, data, integration, security, testing and delivery disciplines.",
    icon: Code2,
  },
  {
    number: "02",
    label: "Business modules",
    title: "What businesses operate",
    copy: "Maintenance, workforce, inventory, procurement, orders, finance, analytics and communications.",
    icon: Blocks,
  },
  {
    number: "03",
    label: "Industry solutions",
    title: "Where the work happens",
    copy: "Domain workflows for manufacturing, entertainment, sports, mobility, healthcare and other industries.",
    icon: Building2,
  },
  {
    number: "04",
    label: "Named products",
    title: "What customers adopt",
    copy: "GigaLibs, TextFly, Swappy, GigaCRM, WhooCrew AI and the wider Gigasys product portfolio.",
    icon: Sparkles,
  },
];

const industryDomains = [
  {
    name: "Industrial Manufacturing",
    icon: Factory,
    copy: "Asset reliability, plant workforce, LOTO handovers, MRO materials, production support and operational analytics.",
    capabilities: ["CMMS / EAM", "PLANT WORKFORCE", "MRO"],
  },
  {
    name: "Entertainment & Live Events",
    icon: Ticket,
    copy: "Event crewing, call sheets, venue operations, rigging safety, audience communications and ticketed experiences.",
    capabilities: ["CREWING", "VENUE OPS", "TICKETING"],
  },
  {
    name: "Sports & Venues",
    icon: Trophy,
    copy: "Stadium staffing, event operations, seat and entitlement context, attendee journeys and provider-governed exchanges.",
    capabilities: ["STADIUM OPS", "FAN JOURNEYS", "EXCHANGE"],
  },
  {
    name: "Cinema, Media & Ticketing",
    icon: Film,
    copy: "Show and venue context, assigned-seat experiences, participant verification, messaging and safe transaction recovery.",
    capabilities: ["SHOWS", "SEATS", "ENGAGEMENT"],
  },
  {
    name: "Travel & Mobility",
    icon: TrainFront,
    copy: "Provider-aware journeys for buses and flights, time-bound reservations, assignments, operations and customer communication.",
    capabilities: ["BUS", "AIR", "RESERVATIONS"],
  },
  {
    name: "Pharma & Life Sciences",
    icon: FlaskConical,
    copy: "Cleanroom access, aseptic protocol, qualification controls, environmental readings and auditable sign-offs.",
    capabilities: ["GMP", "CLEANROOM", "COMPLIANCE"],
  },
  {
    name: "Construction & Infrastructure",
    icon: HardHat,
    copy: "Site mobilization, pre-start controls, qualified crews, equipment, inspections, documents and field evidence.",
    capabilities: ["SITE OPS", "SAFETY", "FIELD WORK"],
  },
  {
    name: "Agriculture & Field Operations",
    icon: Sprout,
    copy: "Distributed workforce coordination, harvest and yield capture, place-aware tasks and low-connectivity mobile work.",
    capabilities: ["FIELD CREWS", "YIELD", "MOBILE"],
  },
  {
    name: "Healthcare & Clinical Operations",
    icon: HeartPulse,
    copy: "Scoped clinical field workflows, workforce qualifications, evidence capture, approvals and compliance records.",
    capabilities: ["CLINICAL OPS", "CREDENTIALS", "AUDIT"],
  },
  {
    name: "Education & Talent",
    icon: GraduationCap,
    copy: "Student, institution, employer and recruiter experiences with verified credentials and opportunity discovery.",
    capabilities: ["TALENT", "CREDENTIALS", "ONEST"],
  },
  {
    name: "Retail & Ecommerce",
    icon: Store,
    copy: "Product catalogues, price lists, inventory, procurement, orders, fulfillment, returns and customer engagement.",
    capabilities: ["CATALOGUE", "ORDER TO CASH", "FULFILLMENT"],
  },
  {
    name: "Professional & Field Services",
    icon: BriefcaseBusiness,
    copy: "Customer relationships, resource scheduling, assignments, time, expenses, approvals and service communication.",
    capabilities: ["CRM", "SCHEDULING", "SERVICE OPS"],
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeHero, setActiveHero] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeSuite, setActiveSuite] = useState<SuiteId>("maintenance");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!autoPlay || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [autoPlay, reduceMotion]);

  const selectedSuite = suites.find((suite) => suite.id === activeSuite)!;
  const SelectedSuiteIcon = selectedSuite.icon;
  const slide = heroSlides[activeHero];

  return (
    <Layout>
      <section className="relative min-h-[760px] overflow-hidden bg-[#11110f] text-white lg:min-h-[calc(100vh-72px)]" aria-roledescription="carousel" aria-label="Gigasys capabilities">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 7.5, ease: "linear" } }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,0.99)_0%,rgba(10,10,9,0.92)_42%,rgba(10,10,9,0.48)_72%,rgba(10,10,9,0.25)_100%)]" />
        <div className="absolute inset-0 industrial-grid opacity-25" />
        <div className="hero-signal absolute right-[7%] top-[11%] hidden h-40 w-40 border-r border-t border-orange-400/75 lg:block" />

        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] flex-col px-5 pb-8 pt-14 sm:px-8 lg:min-h-[calc(100vh-72px)] lg:px-12 lg:pt-20">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/60 sm:text-xs">
            <span className="h-px w-10 bg-[#ff7200]" /> Gigasys Technologies / Enterprise software products
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeHero}
              className="max-w-5xl"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8a2b]">{slide.eyebrow}</div>
              <h1 className="max-w-5xl text-[clamp(3rem,6.4vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">{slide.title}</h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{slide.copy}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#modules" className="inline-flex min-h-[52px] items-center gap-3 bg-[#ff7200] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e96500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Explore capabilities <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="inline-flex min-h-[52px] items-center gap-3 border border-white/35 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black">
              Talk to our team
            </Link>
          </div>

          <div className="mt-auto grid gap-7 pt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid gap-px border border-white/20 bg-white/20 sm:grid-cols-3 lg:max-w-3xl">
              {[["20+", "Modular capabilities"], ["Web + Native", "Product surfaces"], ["Cloud + Customer", "Delivery options"]].map(([value, label]) => (
                <div key={label} className="bg-black/65 px-5 py-4 backdrop-blur-md">
                  <div className="font-mono text-sm font-semibold text-[#ff8a2b]">{value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2" aria-label="Carousel controls">
              <button type="button" onClick={() => setActiveHero((current) => (current - 1 + heroSlides.length) % heroSlides.length)} className="grid h-12 w-12 place-items-center border border-white/30 bg-black/35 text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black" aria-label="Previous slide"><ArrowLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => setAutoPlay((playing) => !playing)} className="grid h-12 w-12 place-items-center border border-white/30 bg-black/35 text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black" aria-label={autoPlay ? "Pause carousel" : "Play carousel"}>
                {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button type="button" onClick={() => setActiveHero((current) => (current + 1) % heroSlides.length)} className="grid h-12 w-12 place-items-center border border-white/30 bg-black/35 text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black" aria-label="Next slide"><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-2" role="tablist" aria-label="Select hero slide">
            {heroSlides.map((item, index) => (
              <button key={item.marker} type="button" onClick={() => setActiveHero(index)} className="group text-left" role="tab" aria-selected={activeHero === index} aria-label={`Show slide ${index + 1}: ${item.eyebrow}`}>
                <span className="block h-[2px] overflow-hidden bg-white/20">
                  {activeHero === index && (
                    <motion.span key={`${activeHero}-${autoPlay}`} className="block h-full bg-[#ff7200]" initial={{ width: "0%" }} animate={{ width: autoPlay && !reduceMotion ? "100%" : "18%" }} transition={{ duration: autoPlay && !reduceMotion ? 7 : 0.25, ease: "linear" }} />
                  )}
                </span>
                <span className={`mt-2 hidden font-mono text-[9px] tracking-[0.12em] sm:block ${activeHero === index ? "text-white" : "text-white/35"}`}>{item.marker}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-black/10 bg-[#ff7200] text-white" aria-label="Capability summary">
        <div className="capability-marquee">
          <div className="capability-marquee__track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                {["Asset reliability", "Workforce operations", "Supply chain", "Finance", "Native mobile", "Analytics", "AI products", "Social platforms"].map((item, index) => (
                  <div key={`${copy}-${item}`} className="flex items-center gap-4 border-r border-white/25 px-6 py-5 lg:px-8">
                    <span className="font-mono text-[10px] text-white/65">0{index + 1}</span>
                    <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.1em]">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <div className="section-label">Enterprise portfolio model</div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#161614] sm:text-5xl lg:text-6xl">
                Four distinct layers. One coherent technology company.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-black/60 lg:justify-self-end lg:text-lg">
              Technologies describe how we build. Business modules describe reusable capabilities.
              Industries apply those capabilities to domain workflows. Products package them into experiences customers can adopt.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-4">
            {portfolioLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Reveal key={layer.number} className="group bg-[#f8f7f3] p-7 transition duration-300 hover:bg-[#151513] hover:text-white sm:p-8" delay={index * 0.06}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center bg-[#ff7200] text-white"><Icon className="h-5 w-5" /></span>
                    <span className="font-mono text-[10px] text-black/35 group-hover:text-white/35">{layer.number}</span>
                  </div>
                  <div className="mt-14 font-mono text-[9px] uppercase tracking-[0.16em] text-[#d95f00] group-hover:text-[#ff8a2b]">{layer.label}</div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{layer.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-black/55 group-hover:text-white/55">{layer.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="modules" className="scroll-mt-20 bg-[#f3f2ee] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <div>
              <div className="section-label">GigaLibs business modules</div>
              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#161614] sm:text-5xl lg:text-7xl">Reusable business capabilities for every critical operating loop.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/60 lg:justify-self-end lg:text-lg">Explore the modules already represented across the GigaLibs web, service and mobile codebases. Each family can stand alone or work as part of a connected operating platform.</p>
          </Reveal>

          <div className="mt-10 grid gap-8 xl:grid-cols-[390px_minmax(0,1fr)]">
            <Reveal className="border-y border-black/10">
              {suites.map((suite) => {
                const Icon = suite.icon;
                const isActive = activeSuite === suite.id;
                return (
                  <button key={suite.id} type="button" onClick={() => setActiveSuite(suite.id)} className={`group flex w-full items-center gap-4 border-b border-black/10 px-1 py-5 text-left transition last:border-b-0 ${isActive ? "text-[#e76500]" : "text-black/55 hover:text-black"}`} aria-pressed={isActive}>
                    <span className="w-7 font-mono text-[10px]">{suite.number}</span>
                    <span className={`grid h-10 w-10 place-items-center border transition ${isActive ? "border-[#ff7200] bg-[#ff7200] text-white" : "border-black/10 bg-white text-black/65 group-hover:border-black/35"}`}><Icon className="h-4 w-4" /></span>
                    <span className="flex-1 text-sm font-semibold tracking-[-0.01em]">{suite.label}</span>
                    <ChevronRight className={`h-4 w-4 transition ${isActive ? "translate-x-1" : ""}`} />
                  </button>
                );
              })}
            </Reveal>

            <AnimatePresence mode="wait">
              <motion.article key={selectedSuite.id} initial={reduceMotion ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden border border-black/10 bg-white shadow-[0_24px_70px_rgba(20,20,18,0.08)]">
                <div className="grid gap-8 border-b border-black/10 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:p-11">
                  <div>
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e76500]">{selectedSuite.kicker}</div>
                    <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#161614] sm:text-4xl lg:text-5xl">{selectedSuite.title}</h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-black/60">{selectedSuite.description}</p>
                  </div>
                  <div className="grid h-20 w-20 place-items-center bg-[#151513] text-[#ff7a12]"><SelectedSuiteIcon className="h-8 w-8" /></div>
                </div>

                <div className="grid lg:grid-cols-[1fr_0.6fr]">
                  <div className="p-6 sm:p-9 lg:p-11">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">Included modules</div>
                    <div className="mt-5 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                      {selectedSuite.modules.map((item) => (
                        <div key={item} className="flex gap-3 border-t border-black/10 py-4 text-sm leading-6 text-black/70"><Check className="mt-1 h-4 w-4 shrink-0 text-[#ff7200]" />{item}</div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-black/10 bg-[#f7f6f2] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e76500]">Business outcome</div>
                    <p className="mt-5 text-xl font-medium leading-8 tracking-[-0.02em] text-[#242421]">{selectedSuite.outcome}</p>
                    <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#d95f00] hover:text-black">Discuss this suite <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="mobile" className="scroll-mt-20 overflow-hidden bg-[#151513] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="section-label section-label--dark">Web + native mobile</div>
              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.99] tracking-[-0.045em] sm:text-5xl lg:text-7xl">The full operating environment—from control room to point of work.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/60 lg:justify-self-end">Complex planning and administration stay powerful on web. Bounded, task-first journeys move securely to the field on iOS and Android.</p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-white/15 bg-white/15 lg:grid-cols-2">
            <Reveal className="relative overflow-hidden bg-[#1a1a18] p-7 sm:p-10" delay={0.05}>
              <div className="absolute right-0 top-0 h-36 w-36 border-b border-l border-[#ff7200]/35" />
              <div className="flex items-center justify-between gap-4"><div className="grid h-12 w-12 place-items-center bg-[#ff7200] text-white"><Globe2 className="h-5 w-5" /></div><span className="font-mono text-[10px] tracking-[0.18em] text-white/35">WEB OPERATIONS</span></div>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em]">Plan, configure and govern.</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">Role-aware workspaces for executives, planners, supervisors, administrators and specialists.</p>
              <div className="mt-8 grid gap-x-7 sm:grid-cols-2">
                {webCapabilities.map((item) => <div key={item} className="flex gap-3 border-t border-white/10 py-4 text-sm text-white/70"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#ff7200]" />{item}</div>)}
              </div>
            </Reveal>

            <Reveal className="relative overflow-hidden bg-[#10100f] p-7 sm:p-10" delay={0.12}>
              <div className="absolute inset-0 orange-radial opacity-30" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4"><div className="grid h-12 w-12 place-items-center border border-[#ff7200] text-[#ff8a2b]"><Smartphone className="h-5 w-5" /></div><span className="font-mono text-[10px] tracking-[0.18em] text-white/35">IOS + ANDROID</span></div>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em]">Act, capture and decide.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">A tenant-aware native shell with secure sessions, scoped capability delivery and field-focused journeys.</p>
                <div className="mt-8 grid grid-cols-2 gap-px bg-white/10">
                  {mobileCapabilities.map((item, index) => <div key={item} className="bg-[#141412] px-4 py-4 text-xs font-medium text-white/70"><span className="mr-2 font-mono text-[9px] text-[#ff7a12]">{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4" delay={0.16}>
            {[
              [ShieldCheck, "Scoped by design", "Tenant, permission, organization and place context determine every visible capability."],
              [RefreshCw, "Resilient execution", "Bounded requests, explicit conflicts and recoverable work protect field continuity."],
              [ScanLine, "Evidence at source", "Forms, documents, scanner and signatures capture proof inside the owning workflow."],
              [Activity, "Outcome telemetry", "Measure delay, rework, completion and decision cycles—not just screen usage."],
            ].map(([Icon, title, copy]) => {
              const ItemIcon = Icon as LucideIcon;
              return <article key={title as string} className="bg-[#11110f] p-6"><ItemIcon className="h-5 w-5 text-[#ff7200]" /><h3 className="mt-5 text-base font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-white/50">{copy as string}</p></article>;
            })}
          </Reveal>
        </div>
      </section>

      <section id="saas" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div><div className="section-label">Enterprise SaaS</div><h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#161614] sm:text-5xl lg:text-6xl">Modular where it matters. Unified where it counts.</h2></div>
            <p className="max-w-2xl text-base leading-7 text-black/60 lg:justify-self-end lg:text-lg">GigaLibs is designed as a family of independent operational products, with governed entitlements and consistent experience across the suite.</p>
          </Reveal>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: Blocks, title: "Composable modules", copy: "Adopt focused products by business need without forcing every team into the entire suite.", tag: "MODULAR PRODUCTS" },
              { icon: ShieldCheck, title: "Tenant governance", copy: "Roles, permissions, organization and spatial scope shape access across applications.", tag: "CONTROLLED ACCESS" },
              { icon: Cloud, title: "Flexible delivery", copy: "Support for suite, customer-cloud and self-contained delivery patterns where product boundaries allow.", tag: "DEPLOYMENT CHOICE" },
              { icon: Smartphone, title: "Tenant-ready mobile", copy: "One native product foundation can deliver approved capabilities and tenant-branded profiles.", tag: "MOBILE SAAS" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="group bg-[#f8f7f3] p-7 transition duration-300 hover:bg-[#151513] hover:text-white sm:p-8" delay={index * 0.06}>
                  <div className="flex items-center justify-between"><Icon className="h-6 w-6 text-[#ff7200]" /><span className="font-mono text-[9px] tracking-[0.16em] text-black/35 group-hover:text-white/35">0{index + 1}</span></div>
                  <h3 className="mt-16 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-black/55 group-hover:text-white/55">{item.copy}</p>
                  <div className="mt-8 border-t border-black/10 pt-4 font-mono text-[9px] tracking-[0.15em] text-[#d95f00] group-hover:border-white/10 group-hover:text-[#ff8a2b]">{item.tag}</div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-20 border-y border-black/10 bg-[#f3f2ee] py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 lg:grid-cols-[0.65fr_1fr]">
            <div><div className="section-label">Technology foundation</div><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#161614] sm:text-5xl">Modern tools. Production discipline.</h2><p className="mt-5 max-w-xl text-base leading-7 text-black/60">The technologies below come directly from the active GigaLibs web, service and mobile workspaces.</p></div>
            <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
              {technologyGroups.map((group) => {
                const Icon = group.icon;
                return <article key={group.label} className="bg-white p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center bg-[#ff7200] text-white"><Icon className="h-4 w-4" /></span><h3 className="text-base font-semibold">{group.label}</h3></div><div className="mt-6 flex flex-wrap gap-2">{group.technologies.map((technology) => <span key={technology} className="border border-black/10 bg-[#f7f6f2] px-3 py-2 font-mono text-[10px] text-black/60">{technology}</span>)}</div></article>;
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="industries" className="scroll-mt-20 overflow-hidden bg-[#151513] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <div>
              <div className="section-label section-label--dark">Industry domains</div>
              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.99] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Domain-specific workflows—not generic software with a new label.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/55 lg:justify-self-end">
              Reusable Gigasys modules are configured around the vocabulary, roles,
              safety controls, evidence and business outcomes of each industry.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2 xl:grid-cols-3">
            {industryDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <Reveal key={domain.name} className="group min-h-[300px] bg-[#1b1b19] p-7 transition duration-300 hover:bg-[#22221f] sm:p-8" delay={(index % 3) * 0.05}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-[#ff7200]/60 text-[#ff8a2b] transition group-hover:bg-[#ff7200] group-hover:text-white"><Icon className="h-5 w-5" /></span>
                    <span className="font-mono text-[9px] tracking-[0.16em] text-white/25">IND / {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-9 text-2xl font-semibold tracking-[-0.03em]">{domain.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/50">{domain.copy}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {domain.capabilities.map((capability) => (
                      <span key={capability} className="border border-white/10 px-2.5 py-1.5 font-mono text-[8px] tracking-[0.12em] text-white/45">{capability}</span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="outcomes" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="section-label">Business outcomes</div>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#161614] sm:text-5xl lg:text-6xl">Built to change the operating result—not just digitize a form.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/60">We avoid invented ROI claims. Every implementation starts with a baseline, an operational owner and measures that can be observed before and after change.</p>
            </Reveal>
            <div className="border-t border-black/10">
              {outcomes.map((outcome, index) => (
                <Reveal key={outcome.number} delay={index * 0.04}>
                  <article className="group grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[70px_1fr] sm:py-10">
                    <span className="font-mono text-xs text-[#e76500]">{outcome.number}</span>
                    <div><h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#1a1a18] transition group-hover:text-[#e76500] sm:text-3xl">{outcome.title}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">{outcome.copy}</p><div className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-black/45"><Gauge className="h-4 w-4 text-[#ff7200]" /> Measure: {outcome.measure}</div></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 overflow-hidden bg-[#151513] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <div><div className="section-label section-label--dark">Gigasys product portfolio</div><h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.99] tracking-[-0.045em] sm:text-5xl lg:text-7xl">Enterprise depth. Consumer-grade product thinking.</h2></div>
            <p className="max-w-xl text-base leading-7 text-white/55 lg:justify-self-end">Each product has a defined audience and domain boundary—from enterprise operations to CRM, communications, AI, talent, social identity and exchange commerce.</p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2 xl:grid-cols-3">
            {portfolioProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <Reveal key={product.name} className="group relative min-h-[320px] overflow-hidden bg-[#1b1b19] p-7 transition duration-300 hover:bg-[#ff7200]" delay={(index % 4) * 0.05}>
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10 transition duration-500 group-hover:scale-150 group-hover:border-white/25" />
                  <div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center border border-white/15 text-[#ff8a2b] transition group-hover:border-white/45 group-hover:text-white"><Icon className="h-5 w-5" /></span><span className="font-mono text-[9px] tracking-[0.16em] text-white/25 group-hover:text-white/60">{String(index + 1).padStart(2, "0")}</span></div><div className="mt-auto pt-16"><div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#ff8a2b] group-hover:text-white/75">{product.category}</div><h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">{product.name}</h3><p className="mt-4 text-sm leading-6 text-white/50 group-hover:text-white/80">{product.copy}</p></div></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="company" className="scroll-mt-20 bg-[#f3f2ee] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-2">
            <div className="relative min-h-[430px] lg:min-h-[620px]"><img src={engineeringTeamImg} alt="Engineering team collaborating on enterprise software" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-28 text-white sm:p-9"><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">Engineering presence</div><div className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ff7a12]" /> Dover, Delaware</span><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ff7a12]" /> Hyderabad, India</span></div></div></div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-20"><div className="section-label">How we work</div><h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#161614] sm:text-5xl">Product strategy, domain depth and production engineering in one team.</h2><p className="mt-6 text-base leading-7 text-black/60">We translate real operating constraints into focused products, then carry them across web, mobile, services, data and long-term evolution.</p><div className="mt-8 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">{[["01", "Understand the operating outcome"], ["02", "Shape the product and module scope"], ["03", "Build across web, mobile and services"], ["04", "Measure, govern and evolve"]].map(([number, text]) => <div key={number} className="bg-[#f8f7f3] p-5"><span className="font-mono text-[10px] text-[#ff7200]">{number}</span><p className="mt-2 text-sm font-semibold text-black/70">{text}</p></div>)}</div><Link href="/about" className="mt-8 inline-flex items-center gap-2 self-start text-sm font-bold text-[#d95f00] hover:text-black">More about Gigasys <ArrowRight className="h-4 w-4" /></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ff7200] py-20 text-white md:py-24">
        <div className="absolute inset-0 orange-grid opacity-25" />
        <Reveal className="relative mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70"><CircleDot className="h-4 w-4" /> Start a conversation</div><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.99] tracking-[-0.05em] sm:text-5xl lg:text-7xl">Start with the business outcome. Build the right product around it.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/80">Talk to us about your operation, SaaS product or digital platform—and the result it needs to create.</p></div>
          <Link href="/contact" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#151513] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </Layout>
  );
}
