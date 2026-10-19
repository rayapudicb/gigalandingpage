import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Factory,
  FileSignature,
  Gauge,
  Globe2,
  GraduationCap,
  HardHat,
  HeartPulse,
  MapPin,
  MessageSquareMore,
  Network,
  PackageCheck,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Ticket,
  TrainFront,
  Trophy,
  Users2,
  WalletCards,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────── Animation helpers ─────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────── Animated Mesh Gradient ─────────────────── */
function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Orb 1 - orange brand */}
      <motion.div
        className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,114,0,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orb 2 - indigo */}
      <motion.div
        className="absolute top-20 right-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orb 3 - amber glow */}
      <motion.div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(251,146,60,0.10) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}

/* ─────────────────── Ticker / Marquee ─────────────────── */
const tickerItems = [
  "Asset Management",
  "Workforce Dispatch",
  "CMMS & EAM",
  "Supply Chain",
  "Financial Operations",
  "Omnichannel Comms",
  "Native Mobile",
  "Workflow Automation",
  "Analytics & Reports",
  "Data Integration",
];

function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-3">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30"
          >
            {item}
            <span className="ml-12 text-orange-500/40">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────── Data ─────────────────── */
type Suite = {
  id: string;
  number: string;
  label: string;
  kicker: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: LucideIcon;
  modules: string[];
};

const suites: Suite[] = [
  {
    id: "maintenance",
    number: "01",
    label: "Asset & Maintenance",
    kicker: "GigaLibs CMMS / EAM",
    title: "Control the complete maintenance lifecycle.",
    description:
      "A multi-tenant maintenance system for physical operations, connecting equipment, work execution, preventive plans, materials and reliability insight.",
    outcomes: [
      "Less reactive work and avoidable downtime",
      "Faster plan-to-completion cycles",
      "Complete, auditable asset history",
    ],
    icon: Wrench,
    modules: [
      "Work orders & execution history",
      "Assets & digital twin context",
      "CAFM spaces & floor operations",
      "Preventive maintenance schedules",
      "Meters, readings & condition triggers",
      "MRO parts & storerooms",
      "Reliability analytics",
      "Field kiosk workflows",
    ],
  },
  {
    id: "workforce",
    number: "02",
    label: "Workforce Operations",
    kicker: "GigaOps workforce",
    title: "Match qualified people to demand, keep every shift accountable.",
    description:
      "Workforce planning and execution for distributed operations, from resource directory and qualifications to dispatch, time, compliance and pay-ready outputs.",
    outcomes: [
      "Faster qualified staffing and dispatch",
      "Fewer scheduling & compliance exceptions",
      "Clearer workforce capacity and utilization",
    ],
    icon: Users2,
    modules: [
      "Resource, team & pool directory",
      "Skills, capabilities & qualifications",
      "Availability and absence",
      "Scheduling, shifts & dispatch",
      "Assignments & staffing requests",
      "Time, attendance & place policy",
      "Compliance and expiry controls",
      "Pay-ready outputs",
    ],
  },
  {
    id: "products",
    number: "03",
    label: "Products & Inventory",
    kicker: "Catalogue and warehouse operations",
    title: "One governed product and stock foundation for every commercial flow.",
    description:
      "Product definitions, units, price lists, warehouses, balances and material movements stay consistent from commercial planning through physical execution.",
    outcomes: [
      "Consistent products, units and governed pricing",
      "Real-time visibility across warehouses",
      "Fewer shortages, count variances and disputes",
    ],
    icon: Boxes,
    modules: [
      "Product catalogue, units & price lists",
      "Warehouses, locations & balances",
      "Receiving, putaway, transfers & issues",
      "Reservations & maintenance kits",
      "Cycle counts & adjustments",
      "Lot, serial and barcode traceability",
    ],
  },
  {
    id: "procurement",
    number: "04",
    label: "Procurement & Orders",
    kicker: "Source-to-pay and order-to-cash",
    title: "Connect purchasing, selling and fulfillment without losing control.",
    description:
      "Governed requisitions and purchase orders work alongside quotations, customer orders, inventory allocation, fulfillment, returns and invoicing.",
    outcomes: [
      "Faster requisition, approval and purchasing cycles",
      "Fewer receiving and invoice exceptions",
      "More predictable fulfillment and billing",
    ],
    icon: PackageCheck,
    modules: [
      "Purchase requisitions & delegation of authority",
      "Purchase orders, vendors & acknowledgements",
      "Goods receipts & three-way match",
      "Sales quotes, orders & available-to-promise",
      "Inventory allocation & fulfillment",
      "Customer invoices, returns & credit memos",
    ],
  },
  {
    id: "finance",
    number: "05",
    label: "Finance & Spend",
    kicker: "Governed financial operations",
    title: "Connect operational transactions to auditable financial outcomes.",
    description:
      "Finance capabilities cover books, journals, subledgers, spend, currency, tax, reconciliation and close workflows with governed roles and durable records.",
    outcomes: [
      "Faster reconciliation and period close",
      "Trusted financial statements with drill-through",
      "Improved spend, budget and treasury control",
    ],
    icon: WalletCards,
    modules: [
      "Books, chart of accounts & fiscal periods",
      "Double-entry journals & immutable reversals",
      "AP, AR and inventory subledger ingestion",
      "Trial balance and financial statements",
      "Spend, expenses & approval policy",
      "Multi-currency and tax configuration",
    ],
  },
  {
    id: "automation",
    number: "06",
    label: "Workflow & Automation",
    kicker: "Governed business automation",
    title: "Turn repeatable operating logic into durable workflows.",
    description:
      "Workflow orchestration, policy rules and dynamic forms let teams adapt processes while preserving execution state, approvals and an evaluation trail.",
    outcomes: [
      "Shorter process and approval cycle times",
      "Consistent policy application across teams",
      "Fewer manual handoffs and exceptions",
    ],
    icon: Workflow,
    modules: [
      "Workflow Studio & durable orchestration",
      "Visual DAG canvas & state machines",
      "Business rules, policies & decision tables",
      "Checkpointing, replay & compensation",
      "Dynamic forms and configuration studio",
      "Evaluation and execution audit trails",
    ],
  },
  {
    id: "analytics",
    number: "07",
    label: "Analytics & Reporting",
    kicker: "Operational intelligence",
    title: "From trusted operational facts to decisions and dashboards.",
    description:
      "Analytics Studio brings metrics, datasets, place rollups, governed measures, exploration, dashboards and generated reporting into one intelligence workspace.",
    outcomes: [
      "Faster recurring reporting and executive review",
      "One governed definition for critical measures",
      "Quicker drill-down from KPI to source",
    ],
    icon: BarChart3,
    modules: [
      "Executive overview & KPI snapshots",
      "Metrics, datasets & governed measures",
      "Explore, filters, formulas & saved charts",
      "Dashboards and place-level rollups",
      "Scheduled and generated reports",
      "CSV outputs, sources & lineage",
    ],
  },
  {
    id: "communications",
    number: "08",
    label: "Communications",
    kicker: "TextFly omnichannel engagement",
    title: "Coordinate conversations across every approved channel.",
    description:
      "A unified inbox, contact context, templates, campaigns, event triggers and durable delivery connect enterprise workflows to email, SMS, WhatsApp, voice and webhooks.",
    outcomes: [
      "Faster response and case progression",
      "Consistent communication across channels",
      "Visible delivery, retry and escalation status",
    ],
    icon: MessageSquareMore,
    modules: [
      "Unified inbox and conversation threads",
      "Customer and workforce contact profiles",
      "Email, SMS, WhatsApp, voice & webhooks",
      "Templates, audiences & reach campaigns",
      "Cross-module event triggers",
      "Delivery queues, retries & SLA escalation",
    ],
  },
];

const portfolioProducts = [
  { name: "GigaLibs", category: "Enterprise operations SaaS", copy: "A modular suite for assets, workforce, commerce, finance and governed business operations.", icon: Blocks },
  { name: "GigaCRM", category: "Customer relationships", copy: "Lead and deal workspaces, sales activity, communication context and adaptable pipelines.", icon: BriefcaseBusiness },
  { name: "TextFly", category: "Omnichannel communications", copy: "Multi-tenant platform spanning email, SMS, WhatsApp, Slack, voice, webhooks and a unified inbox.", icon: MessageSquareMore },
  { name: "Giga AI", category: "Voice & conversational AI", copy: "Voice-agent and chatbot experiences with live call visibility, product APIs and communication services.", icon: Bot },
  { name: "nyr", category: "Local social platform", copy: "Privacy-aware local discovery, trusted circles, requests, rides, events and recommendations.", icon: MapPin },
  { name: "OpenGrads", category: "Talent & opportunity network", copy: "Social-first network for students, institutions, employers and recruiters with ONEST interoperability.", icon: GraduationCap },
  { name: "GigaHR / MyNextCV", category: "HR & recruitment intelligence", copy: "Permission-aware HR journeys and recruitment intelligence for governed SaaS delivery.", icon: Building2 },
  { name: "Swappy", category: "Exchange commerce", copy: "Provider-governed reservation and entitlement exchange engine for ticketed experiences.", icon: RefreshCw },
  { name: "OpenFace", category: "Social identity infrastructure", copy: "Headless identity, credibility, audience and engagement for portable social experiences.", icon: Network },
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Gauge, label: "Energy & Utilities" },
  { icon: HardHat, label: "Construction & EPC" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Globe2, label: "Government & Public" },
  { icon: TrainFront, label: "Transport & Logistics" },
  { icon: Trophy, label: "Sports & Entertainment" },
  { icon: Ticket, label: "Events & Venues" },
  { icon: Store, label: "Retail & Commerce" },
  { icon: ScanLine, label: "Field Services" },
  { icon: Cloud, label: "Technology" },
  { icon: Activity, label: "Facilities Management" },
];

const techGroups = [
  { label: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind", "ECharts"] },
  { label: "Mobile", items: ["React Native", "Expo", "Expo Router", "TanStack Query", "SecureStore"] },
  { label: "Services", items: ["Node.js", "Fastify", "PostgreSQL", "OpenAPI", "AsyncAPI"] },
  { label: "Quality", items: ["Playwright", "Vitest", "Contract tests", "Audit trails", "CI gates"] },
];

/* ─────────────────── Suite Card ─────────────────── */
function SuiteCard({ suite, index }: { suite: Suite; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = suite.icon;

  return (
    <FadeUp delay={index * 0.05}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 cursor-pointer"
        whileHover={{ borderColor: "rgba(255,114,0,0.25)", backgroundColor: "rgba(255,255,255,0.05)" }}
        transition={{ duration: 0.2 }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Hover glow */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(255,114,0,0.06), transparent)" }} />

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
              <Icon className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                {suite.number} — {suite.kicker}
              </div>
              <h3 className="mt-1 text-[15px] font-semibold text-white/90 leading-snug">{suite.label}</h3>
            </div>
          </div>
          <ChevronRight
            className={`h-4 w-4 shrink-0 text-white/30 transition-transform duration-300 ${expanded ? "rotate-90 text-orange-400" : ""}`}
          />
        </div>

        <p className="mt-4 text-[13px] leading-relaxed text-white/45">{suite.description}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-white/[0.06] pt-5">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-400/70">Outcomes</div>
                <ul className="space-y-1.5">
                  {suite.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-[12px] text-white/50">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-400/70">Modules</div>
                <div className="flex flex-wrap gap-1.5">
                  {suite.modules.map((m) => (
                    <span key={m} className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/40">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeUp>
  );
}

/* ─────────────────── Bento Product Card ─────────────────── */
function ProductCard({
  product,
  index,
  large,
}: {
  product: (typeof portfolioProducts)[0];
  index: number;
  large?: boolean;
}) {
  const Icon = product.icon;
  return (
    <FadeUp delay={index * 0.06} className={large ? "col-span-2 row-span-1" : ""}>
      <motion.div
        className="group relative h-full min-h-[180px] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6"
        whileHover={{ borderColor: "rgba(255,114,0,0.2)", backgroundColor: "rgba(255,255,255,0.05)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
          <Icon className="h-5 w-5 text-orange-400" />
        </div>
        <div className="mt-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">{product.category}</div>
          <h3 className="mt-1 text-base font-semibold text-white/90">{product.name}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/40">{product.copy}</p>
        </div>
      </motion.div>
    </FadeUp>
  );
}

/* ─────────────────── Section label ─────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-400/80">{children}</span>
    </div>
  );
}

/* ─────────────────── Main Page ─────────────────── */
export default function Home() {
  // Mouse-follow glow for cards
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>(".group").forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <MeshGradient />

        <div className="relative z-10 mx-auto max-w-5xl px-5 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Enterprise Connected Systems</SectionLabel>
          </motion.div>

          <motion.h1
            className="mt-8 text-[clamp(2.8rem,8vw,7rem)] font-bold leading-[1.03] tracking-[-0.04em] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Run the work.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF7200 0%, #FF8A2B 50%, #FFB347 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
            {" "}the business.
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-2xl text-[clamp(1rem,2vw,1.3rem)] leading-relaxed text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            A modular operating platform for assets, workforce, supply chain, finance,
            data and field execution — delivered across web and native mobile.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <a
              href="mailto:connect@gigasystech.com"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,114,0,0.35)] transition hover:bg-orange-400 hover:shadow-[0_0_60px_rgba(255,114,0,0.5)]"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Explore modules
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="mt-20 flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              { value: "11+", label: "Business modules" },
              { value: "9", label: "Product lines" },
              { value: "100%", label: "Offline-first mobile" },
              { value: "Multi-tenant", label: "Enterprise SaaS" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-white/30">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-8 w-5 rounded-full border border-white/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white/40 mx-auto animate-[bounce_2s_infinite]" />
          </div>
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── PRODUCTS BENTO ── */}
      <section id="products" className="bg-[#050505] py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionLabel>Product portfolio</SectionLabel>
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.04em] text-white">
              Nine products.{" "}
              <span className="text-white/40">One engineering team.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/40">
              From enterprise ERP to social platforms, every Gigasys product shares a common
              design language, identity system and technology foundation.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProducts.map((p, i) => (
              <ProductCard key={p.name} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS MODULES ── */}
      <section id="modules" className="relative bg-[#050505] py-32">
        {/* Section background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #FF7200, transparent 70%)", filter: "blur(100px)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionLabel>Business modules</SectionLabel>
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.04em] text-white">
              Every operating domain,{" "}
              <span className="text-white/40">modular by design.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/40">
              GigaLibs is built as 11 independently deployable, deeply connected business
              modules. Use what you need. Expand when you are ready.
            </p>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {suites.map((suite, i) => (
              <SuiteCard key={suite.id} suite={suite} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE CAPABILITY ── */}
      <section className="bg-[#050505] py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <SectionLabel>Native mobile</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-[-0.04em] text-white">
                Built for the field.{" "}
                <br />
                <span className="text-white/40">Works without signal.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/40">
                GigaLibs ships a React Native iOS + Android application with offline-first
                architecture. Field staff execute, capture evidence and sign without needing
                a network connection. Sync happens automatically when connectivity returns.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
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
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-[13px] text-white/50">
                    <span className="h-1 w-1 rounded-full bg-orange-500" />
                    {cap}
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeIn delay={0.15}>
              <div className="relative mx-auto max-w-sm">
                {/* Phone mockup */}
                <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-px shadow-[0_0_80px_rgba(255,114,0,0.12)]">
                  <div className="rounded-[2.4rem] overflow-hidden bg-[#0a0a0a]">
                    <div className="bg-gradient-to-b from-orange-500/20 to-transparent px-6 py-8">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-orange-400/60 mb-2">GigaLibs Mobile</div>
                      <div className="text-lg font-semibold text-white">Today — 12 tasks</div>
                      <div className="mt-4 space-y-2">
                        {["PM-0824 · Filter inspection", "WO-1103 · Pump seal replacement", "WO-1092 · Visual inspection"].map((t, i) => (
                          <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-3">
                            <div className={`h-2 w-2 rounded-full ${i === 0 ? "bg-orange-400" : i === 1 ? "bg-yellow-400" : "bg-green-400"}`} />
                            <span className="text-[12px] text-white/60">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/20">Recent Activity</div>
                      <div className="space-y-2">
                        {["Asset scan verified · 09:41", "Labour logged · 09:18", "Photo evidence uploaded · 08:54"].map((a, i) => (
                          <div key={i} className="text-[11px] text-white/30">{a}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 -z-10 rounded-[2.5rem] blur-3xl opacity-20"
                  style={{ background: "radial-gradient(circle, #FF7200, transparent 60%)" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="bg-[#050505] py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp className="text-center">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.04em] text-white">
              Operational software for{" "}
              <span className="text-white/40">the physical world.</span>
            </h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <FadeUp key={ind.label} delay={i * 0.04}>
                  <motion.div
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center"
                    whileHover={{ borderColor: "rgba(255,114,0,0.2)", backgroundColor: "rgba(255,255,255,0.04)" }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon className="h-6 w-6 text-orange-400/70 group-hover:text-orange-400 transition-colors" />
                    <span className="text-[11px] font-medium text-white/40 group-hover:text-white/60 transition-colors">{ind.label}</span>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section id="technologies" className="relative bg-[#050505] py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)", filter: "blur(80px)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeUp>
              <SectionLabel>Technology foundation</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-[-0.04em] text-white">
                Modern stack.{" "}
                <span className="text-white/40">Production-grade delivery.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/40">
                Every module is built on the same React, TypeScript, Node.js and PostgreSQL
                foundation with Playwright end-to-end journey coverage and contract-tested APIs.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {techGroups.map((group, i) => (
                  <FadeUp key={group.label} delay={i * 0.08}>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-400/60">{group.label}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((tech) => (
                          <span key={tech} className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/40">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>

            <FadeIn delay={0.2}>
              <div className="space-y-3">
                {[
                  { label: "Multi-tenant architecture", desc: "Workspace isolation, RBAC, org hierarchy and per-tenant configuration from day one." },
                  { label: "Offline-first mobile", desc: "React Native with local SQLite sync — field execution works without connectivity." },
                  { label: "Event-driven integrations", desc: "Webhook ingestion, HMAC verification, idempotency and workflow dispatch built in." },
                  { label: "Double-entry financial ledger", desc: "Immutable journal entries, subledger ingestion and period close from the core." },
                  { label: "Journey-tested coverage", desc: "Playwright E2E journeys cover the full workflow end-to-end on every deploy." },
                ].map((item, i) => (
                  <FadeUp key={item.label} delay={i * 0.08}>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                        <div>
                          <div className="text-[14px] font-semibold text-white/80">{item.label}</div>
                          <div className="mt-1 text-[13px] leading-relaxed text-white/40">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── COMPANY ── */}
      <section id="company" className="bg-[#050505] py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeUp>
              <SectionLabel>About Gigasys</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-[-0.04em] text-white">
                A product company building the operating infrastructure{" "}
                <span className="text-white/40">for complex industries.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/40">
                Gigasys is a software company focused on enterprise connected systems and
                field infrastructure. We build GigaLibs — a modular SaaS platform for
                operations — and a portfolio of digital products spanning communications,
                commerce, social and AI.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/40">
                We design for organizations operating at scale across physical facilities,
                distributed workforces and complex supply chains. Our platform ships as
                multi-tenant SaaS with native mobile execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">
                  connect@gigasystech.com
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/20">
                  About us
                </a>
              </div>
            </FadeUp>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Enterprise SaaS", desc: "Multi-tenant, role-governed, configuration-first architecture." },
                  { title: "Native Mobile", desc: "iOS and Android applications built with React Native and offline-first sync." },
                  { title: "Field Operations", desc: "Designed for workers in the field, not just managers at a desk." },
                  { title: "Open Integration", desc: "Data contracts, connectors and event dispatch to your existing systems." },
                  { title: "India + Global", desc: "Built for global compliance and localization from day one." },
                  { title: "Product Thinking", desc: "Domain-focused products with clear identities, not feature factories." },
                ].map((card, i) => (
                  <FadeUp key={card.title} delay={i * 0.06}>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
                      <div className="text-[14px] font-semibold text-white/80">{card.title}</div>
                      <div className="mt-2 text-[12px] leading-relaxed text-white/35">{card.desc}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden bg-[#050505] py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,114,0,0.14) 0%, transparent 65%)", filter: "blur(80px)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <FadeUp>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
              Ready to connect your operations?
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-white/45">
              Talk to our team to understand how GigaLibs or any Gigasys product
              fits your operating context. No pitch decks — just a real architecture discussion.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:connect@gigasystech.com"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-[15px] font-semibold text-white shadow-[0_0_60px_rgba(255,114,0,0.4)] transition hover:bg-orange-400 hover:shadow-[0_0_80px_rgba(255,114,0,0.6)]"
              >
                connect@gigasystech.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/20">
              Hyderabad · India · Global delivery
            </p>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
