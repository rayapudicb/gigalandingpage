import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Activity, ArrowRight, BarChart3, Boxes, BriefcaseBusiness, Check,
  ChevronDown, ChevronRight, ClipboardCheck, Compass, Database,
  FileCheck2, FileSignature, FlaskConical, HeartPulse, Layers3, Mail,
  MapPin, Menu, MessageSquare, Monitor, Pause, Play, Repeat2, Settings2, ShieldCheck,
  Smartphone, Sparkles, Truck, Users2, Wifi, WifiOff, Workflow, Wrench, X, Zap, type LucideIcon,
} from "lucide-react";
import Logo from "@/assets/logo.svg";
import { industries, moduleStages, modules, products, solutionByPath, specialistModules, type Solution } from "@/data/solutions";
import "./EnterpriseSite.css";

const iconByPath: Record<string, LucideIcon> = {
  "/gigaops": Layers3,
  "/gigaops/maintenance": Wrench, "/gigaops/workforce": Users2,
  "/gigaops/inventory": Boxes, "/gigaops/procurement": ClipboardCheck,
  "/gigaops/finance": FileCheck2, "/gigaops/automation": Workflow,
  "/gigaops/analytics": BarChart3, "/gigaops/communications": MessageSquare,
  "/gigaops/documents": FileSignature, "/gigaops/geospatial": MapPin,
  "/gigaops/data": Database, "/products/speed": FlaskConical,
  "/gigaops/accounts-receivable": FileCheck2, "/gigaops/autonomous-recovery": ShieldCheck,
  "/gigaops/document-scanner": FileSignature, "/gigaops/esignature": ClipboardCheck,
  "/gigaops/multi-currency": Activity, "/gigaops/ontology": Layers3,
  "/gigaops/process-safety-screening": FlaskConical, "/gigaops/product-catalogue": Boxes,
  "/gigaops/saga-orchestrator": Workflow, "/gigaops/spend-management": BriefcaseBusiness,
  "/gigaops/tax-configuration": FileCheck2, "/gigaops/connector-hub": Zap,
  "/gigaops/data-studio": Database, "/gigaops/orders": Truck,
  "/gigaops/rule-studio": Settings2,
  "/products/nyr": Compass, "/products/textfly": MessageSquare,
  "/products/swappy": Repeat2, "/products/gigahr": Users2,
  "/products/gigacrm": BriefcaseBusiness, "/products/gigaai": Sparkles,
  "/products/openface": ShieldCheck, "/industries/pharma": FlaskConical,
  "/industries/manufacturing": Settings2, "/industries/agriculture": MapPin,
  "/industries/sports": Activity, "/industries/energy": Zap,
  "/industries/healthcare": HeartPulse, "/industries/transport": Truck,
  "/industries/construction": Wrench,
};

const demoPaths = ["/products/speed", "/gigaops/automation", "/gigaops/finance", "/gigaops/workforce"];
const mobileRoadmapPaths = new Set(["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/gigaops/product-catalogue"]);

function ChannelBadges({ path }: { path: string }) {
  if (!path.startsWith("/gigaops/") || !mobileRoadmapPaths.has(path)) return null;
  return <span className="es-channel-badges"><span><Monitor size={12} /> Web</span><span><Smartphone size={12} /> Mobile planned</span></span>;
}

function SolutionIcon({ path, size = 20 }: { path: string; size?: number }) {
  const Icon = iconByPath[path] ?? Layers3;
  return <Icon size={size} strokeWidth={1.75} />;
}

function MenuGroup({ title, items, close }: { title: string; items: Solution[]; close: () => void }) {
  return (
    <div className="es-menu-group">
      <span className="es-menu-label">{title}</span>
      <div className="es-menu-grid">
        {items.map((item) => (
          <Link href={item.path} key={item.path} onClick={close} className="es-menu-link">
            <span className="es-menu-icon"><SolutionIcon path={item.path} size={18} /></span>
            <span><strong>{item.name}</strong><small>{item.category}</small></span>
            {mobileRoadmapPaths.has(item.path) && <span className="es-menu-mobile" title="Native mobile journey is on the roadmap"><Smartphone size={14} /><span className="es-sr-only">Mobile planned</span></span>}
            <ArrowRight size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function EnterpriseShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => { setMenuOpen(false); setOpenDropdown(null); }, [location]);
  useEffect(() => {
    if (!openDropdown && !menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (openDropdown && !navRef.current?.contains(target)) setOpenDropdown(null);
      if (menuOpen && !headerRef.current?.contains(target)) setMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpenDropdown(null); setMenuOpen(false); }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openDropdown, menuOpen]);
  const close = () => { setMenuOpen(false); setOpenDropdown(null); };

  const groups = [
    { key: "platform", label: "Platform", lead: "/gigaops", leadLabel: "Platform overview", items: modules, secondary: specialistModules },
    { key: "products", label: "Products", lead: "/products", leadLabel: "All products", items: products, secondary: [] },
    { key: "industries", label: "Industries", lead: "/industries", leadLabel: "All industries", items: industries, secondary: [] },
  ];

  return (
    <div className="es">
      <header className="es-header" ref={headerRef}>
        <div className="es-header-inner">
          <Link href="/" className="es-brand" aria-label="Gigasys home" onClick={close}>
            <img src={Logo} alt="" /><span>Gigasys</span>
          </Link>
          <nav className="es-nav" aria-label="Main navigation" ref={navRef}>
            {groups.map((group) => (
              <div className="es-nav-item" key={group.key}>
                <button type="button" className={openDropdown === group.key ? "es-nav-trigger is-open" : "es-nav-trigger"}
                  onClick={() => setOpenDropdown(openDropdown === group.key ? null : group.key)}
                  aria-expanded={openDropdown === group.key} aria-controls={`menu-${group.key}`}>
                  {group.label}<ChevronDown size={14} />
                </button>
                {openDropdown === group.key && (
                  <div className="es-mega" id={`menu-${group.key}`}>
                    <div className="es-mega-top"><span>{group.label}</span><Link href={group.lead} onClick={close}>{group.leadLabel}<ArrowRight size={15} /></Link></div>
                    <MenuGroup title={group.key === "platform" ? "GIGAOPS MODULES" : group.label.toUpperCase()} items={group.items} close={close} />
                    {group.secondary.length > 0 && <MenuGroup title="SPECIALIST MODULES" items={group.secondary} close={close} />}
                  </div>
                )}
              </div>
            ))}
            <Link href="/about" className="es-nav-simple" onClick={close}>Company</Link>
          </nav>
          <div className="es-header-actions">
            <Link href="/contact" className="es-header-cta">Talk to us <ArrowRight size={16} /></Link>
            <button type="button" className="es-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="es-mobile-menu" aria-label="Mobile navigation">
          <Link href="/gigaops" onClick={close}>Platform overview <ArrowRight size={15} /></Link>
          {groups.map((group) => <details key={group.key}>
            <summary>{group.label}<ChevronDown size={15} /></summary>
            <div><Link href={group.lead} onClick={close}><ArrowRight size={17} />{group.leadLabel}</Link>{[...group.items, ...group.secondary].map((item) => <Link href={item.path} key={item.path} onClick={close}><SolutionIcon path={item.path} size={17} />{item.name}</Link>)}</div>
          </details>)}
          <Link href="/about" onClick={close}>Company <ArrowRight size={15} /></Link>
          <Link href="/contact" onClick={close}>Contact <ArrowRight size={15} /></Link>
        </nav>}
      </header>
      <main>{children}</main>
      <footer className="es-footer">
        <div className="es-container es-footer-grid">
          <div><Link href="/" className="es-brand es-footer-brand"><img src={Logo} alt="" /><span>Gigasys</span></Link><p>Connected software for the work that runs your organization.</p><a href="mailto:connect@gigasystech.com">connect@gigasystech.com <ArrowRight size={14} /></a></div>
          <div><strong>Platform</strong><Link href="/gigaops">GigaOps</Link><Link href="/platform/mobile">Mobile experiences</Link><Link href="/gigaops/automation">Workflow Studio</Link><Link href="/gigaops/data">Data & Integration</Link><Link href="/gigaops/analytics">Analytics</Link></div>
          <div><strong>Products</strong><Link href="/gigaops">GigaOps</Link><Link href="/products/speed">SPEED</Link><Link href="/products/textfly">TextFly</Link><Link href="/products">Explore all</Link></div>
          <div><strong>Company</strong><Link href="/about">About</Link><Link href="/jobs">Careers</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="es-container es-footer-bottom"><span>© {new Date().getFullYear()} Gigasys Technologies</span><span>Enterprise software, designed around action.</span></div>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="es-section-heading"><span className="es-overline">{label}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function SolutionCard({ item, index }: { item: Solution; index?: number }) {
  return <Link href={item.path} className="es-solution-card">
    <div className="es-card-top"><span>{index === undefined ? item.kind.toUpperCase() : String(index + 1).padStart(2, "0")}</span><SolutionIcon path={item.path} size={23} /></div>
    <div><small>{item.category}</small><h3>{item.name}</h3><p>{item.headline}</p>{moduleStages[item.path] && <span className="es-stage">{moduleStages[item.path]}</span>}<ChannelBadges path={item.path} /></div>
    <span className="es-card-arrow">Explore {item.kind} <ArrowRight size={16} /></span>
  </Link>;
}

function SolutionGrid({ items }: { items: Solution[] }) {
  return <div className="es-solution-grid">{items.map((item, index) => <SolutionCard key={item.path} item={item} index={index} />)}</div>;
}

function InteractiveWorkspace({ choices, initialPath }: { choices: Solution[]; initialPath: string }) {
  const [activePath, setActivePath] = useState(initialPath);
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const active = choices.find((item) => item.path === activePath) ?? choices[0];
  const [stepName, stepDetail] = active.steps[stepIndex];

  useEffect(() => { setActivePath(initialPath); setStepIndex(0); }, [initialPath]);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setStepIndex((index) => (index + 1) % active.steps.length), 2600);
    return () => window.clearInterval(timer);
  }, [active.steps.length, playing]);
  function choose(path: string) { setPlaying(false); setActivePath(path); setStepIndex(0); }

  return <div className="es-workspace" aria-label={`${active.name} interactive walkthrough`}>
    <div className="es-window-bar"><div className="es-dots"><i /><i /><i /></div><span>Gigasys / Interactive walkthrough</span><button type="button" className="es-play-tour" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}>{playing ? <Pause size={13} /> : <Play size={13} />}{playing ? "Pause" : "Play"}</button><span className="es-example-tag">EXAMPLE WORKFLOW</span></div>
    <div className="es-workspace-body">
      <aside className="es-workspace-sidebar">
        <div className="es-workspace-brand"><span>G</span> Workspace</div>
        <small>EXPLORE</small>
        {choices.map((item) => <button type="button" key={item.path} className={active.path === item.path ? "es-choice is-active" : "es-choice"} onClick={() => choose(item.path)} aria-pressed={active.path === item.path}>
          <SolutionIcon path={item.path} size={18} /><span>{item.name}<small>{item.category}</small></span><ChevronRight size={15} />
        </button>)}
        <div className="es-sidebar-foot"><span /> Clear next actions</div>
      </aside>
      <div className="es-workspace-main">
        <div className="es-workspace-breadcrumb">WORKSPACE <ChevronRight size={13} /> {active.name.toUpperCase()} <span>{active.category}</span></div>
        <div className="es-workspace-intro"><div><span className="es-overline">{active.name} / WORKFLOW</span><h3>{active.headline}</h3><p>{active.summary}</p></div><Link href={active.path}>Explore page <ArrowRight size={15} /></Link></div>
        <div className="es-workspace-cards">
          <div className="es-work-card">
            <div className="es-work-card-top"><span>WORK ITEM</span><span className="es-status"><i /> In review</span></div>
            <h4>{active.scenario}</h4><p>Choose an action to see how the work moves forward.</p>
            <div className="es-step-list">{active.steps.map(([label], index) => <button type="button" key={label} className={stepIndex === index ? "es-step is-active" : "es-step"} onClick={() => { setPlaying(false); setStepIndex(index); }} aria-pressed={stepIndex === index}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>{index < stepIndex ? <Check size={15} /> : <ChevronRight size={15} />}
            </button>)}</div>
          </div>
          <div className="es-action-card" aria-live="polite">
            <div className="es-action-top"><span>SELECTED ACTION</span><span>{String(stepIndex + 1).padStart(2, "0")} / {String(active.steps.length).padStart(2, "0")}</span></div>
            <div className="es-action-symbol"><SolutionIcon path={active.path} size={27} /></div>
            <span className="es-overline">{active.category}</span><h4>{stepName}</h4><p>{stepDetail}</p>
            <div className="es-action-bottom"><span><i /> Ready for next step</span><button type="button" onClick={() => { setPlaying(false); setStepIndex((stepIndex + 1) % active.steps.length); }}>Next action <ArrowRight size={15} /></button></div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

const connectedSteps = [
  { name: "Maintenance", path: "/gigaops/maintenance", target: "Inventory", targetPath: "/gigaops/inventory", event: "Urgent repair opened", record: "Work order WO-2048", state: "Asset P-1082 · Site 12", passed: "Asset, fault, priority and required part", action: "Plan the repair and identify the part needed.", next: "Inventory sees the requirement", outcome: "The request begins with the full asset context.", companion: "WO-2048 was opened for asset P-1082 at Site 12. The repair calls for part BRG-6205. Next: check the available stock." },
  { name: "Inventory", path: "/gigaops/inventory", target: "Procurement", targetPath: "/gigaops/procurement", event: "Part shortage found", record: "Part BRG-6205", state: "0 available at this site", passed: "Stock position, shortage and need-by time", action: "Check availability before assigning the repair.", next: "Procurement sees the shortfall", outcome: "The wait for material becomes visible early.", companion: "Part BRG-6205 is unavailable at Site 12. The work order is waiting on material. Next: route a purchase request." },
  { name: "Procurement", path: "/gigaops/procurement", target: "Workforce", targetPath: "/gigaops/workforce", event: "Purchase request routed", record: "Request PR-318", state: "Approval pending", passed: "Approval state, supplier and expected arrival", action: "Route the request to the right approver.", next: "Workforce sees the expected arrival", outcome: "Teams can find where the handoff is waiting.", companion: "Request PR-318 is waiting for approval. The next step is an authorized review before a supplier date can be trusted." },
  { name: "Workforce", path: "/gigaops/workforce", target: "Finance", targetPath: "/gigaops/finance", event: "Technician window aligned", record: "Crew A · Site 12", state: "Planned window 14:00", passed: "Assignment, schedule and execution status", action: "Schedule the right person around part availability.", next: "Finance sees the work completed", outcome: "A technician is not sent without the needed context.", companion: "Crew A has a planned 14:00 window. Confirm the part has arrived before dispatching the assigned technician." },
  { name: "Finance & Analytics", path: "/gigaops/finance", target: "Analytics", targetPath: "/gigaops/analytics", event: "Cost and time reviewed", record: "Work order WO-2048", state: "Material and labor captured", passed: "Actual cost, repair time and part wait", action: "Review what the repair cost and where time was lost.", next: "Leaders see the bottleneck", outcome: "The next decision is grounded in the same trail.", companion: "WO-2048 now has material and labor entries. Review repair time and part wait against the baseline before choosing a follow-up." },
];

function ConnectedJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(() => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (phase < 2) setPhase(phase + 1);
      else { setPhase(0); setActiveIndex((index) => (index + 1) % connectedSteps.length); }
    }, phase === 2 ? 1700 : 1150);
    return () => window.clearTimeout(timer);
  }, [activeIndex, phase, playing]);
  const active = connectedSteps[activeIndex];
  const phaseNames = ["Source event received", "SaaS core checks and routes", "Next module receives context"];
  const chooseStep = (index: number) => { setPlaying(false); setActiveIndex(index); setPhase(0); };
  return <section className="es-section es-connected-section" id="connected-work"><div className="es-container">
    <div className="es-connected-heading"><div><span className="es-overline">CONNECTED WORK, STEP BY STEP</span><h2>One issue. Every team has the context.</h2></div><p>An urgent repair can stall while work, parts, approvals and people sit in separate systems. Watch an example event travel through the GigaOps SaaS core and into the next module.</p></div>
    <div className="es-connected-stage">
      <div className="es-connected-bar"><span><i /> GIGAOPS / SHARED WORK ITEM</span><div><span>ILLUSTRATIVE AUTO-RUN</span><button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause connected workflow" : "Play connected workflow"}>{playing ? <Pause size={13} /> : <Play size={13} />}{playing ? "Pause" : "Play"}</button></div></div>
      <div className="es-connected-mobile-hint">Swipe to explore the modules <ArrowRight size={13} /></div>
      <div className="es-connected-tabs" role="group" aria-label="Explore connected modules">{connectedSteps.map((step, index) => <button type="button" key={step.name} className={activeIndex === index ? "es-connected-tab is-active" : index < activeIndex ? "es-connected-tab is-complete" : "es-connected-tab"} onClick={() => chooseStep(index)} aria-pressed={activeIndex === index}>
        <span className="es-connected-tab-icon"><SolutionIcon path={step.path} size={17} /></span><span><small>{String(index + 1).padStart(2, "0")} / MODULE</small><strong>{step.name}</strong></span>{index < connectedSteps.length - 1 && <ArrowRight size={15} className="es-connected-arrow" />}
      </button>)}</div>
      <div className="es-sync-status"><div><span className="es-sync-pulse" /><strong>{phaseNames[phase]}</strong><span>{active.name} → GigaOps SaaS core → {active.target}</span></div><small>{String(activeIndex + 1).padStart(2, "0")} / {String(connectedSteps.length).padStart(2, "0")} HANDOFF</small></div>
      <div className="es-sync-visual" role="group" aria-label={`Example data flow: ${active.name} through the GigaOps SaaS core to ${active.target}`}>
        <Link href={active.path} className={phase === 0 ? "es-sync-module is-active" : "es-sync-module is-complete"}><span>MODULE / SOURCE</span><div><SolutionIcon path={active.path} size={23} /><strong>{active.name}</strong></div><small>{active.record}</small></Link>
        <div className={phase === 0 ? "es-sync-connector" : phase === 1 ? "es-sync-connector is-active" : "es-sync-connector is-complete"}><span>EVENT</span></div>
        <div className={phase === 1 ? "es-sync-core is-active" : phase === 2 ? "es-sync-core is-complete" : "es-sync-core"}><span>SHARED SAAS FOUNDATION</span><div><Layers3 size={24} /><strong>GigaOps SaaS core</strong></div><p>Tenant scope · permissions · event context · workflow rules · audit trail</p></div>
        <div className={phase === 2 ? "es-sync-connector is-active" : "es-sync-connector"}><span>CONTEXT</span></div>
        <Link href={active.targetPath} className={phase === 2 ? "es-sync-module is-active" : "es-sync-module"}><span>MODULE / RECEIVER</span><div><SolutionIcon path={active.targetPath} size={23} /><strong>{active.target}</strong></div><small>{phase === 2 ? "Context received" : "Waiting for the handoff"}</small></Link>
      </div>
      <div className="es-sync-payload"><span>DATA IN TRANSIT</span><strong>{active.passed}</strong><span>{phase === 0 ? "Captured at source" : phase === 1 ? "Checked against tenant and access rules" : `Delivered to ${active.target}`}</span></div>
      <div className="es-sync-progress" role="progressbar" aria-label="Example workflow progress" aria-valuemin={0} aria-valuemax={connectedSteps.length * 3} aria-valuenow={activeIndex * 3 + phase + 1}><span style={{ width: `${((activeIndex * 3 + phase + 1) / (connectedSteps.length * 3)) * 100}%` }} /></div>
      <div className="es-connected-body" aria-live={playing ? "off" : "polite"}>
        <div className="es-connected-main"><span className="es-overline">{String(activeIndex + 1).padStart(2, "0")} / {active.name.toUpperCase()}</span><h3>{active.event}</h3><p>{active.action}</p><div className="es-connected-record"><span>SHARED RECORD</span><strong>{active.record}</strong><small>{active.state}</small></div><Link href={active.path} className="es-connected-link">Explore {active.name} <ArrowRight size={16} /></Link></div>
        <div className="es-connected-context"><span className="es-overline">THE CONTEXT THAT MOVES</span><div className="es-context-row"><span>01 / DATA PASSED ON</span><strong>{active.passed}</strong></div><div className="es-context-row"><span>02 / NEXT TEAM</span><strong>{active.next}</strong></div><div className="es-context-row"><span>03 / BUSINESS EFFECT</span><strong>{active.outcome}</strong></div><button type="button" className="es-connected-next" onClick={() => chooseStep((activeIndex + 1) % connectedSteps.length)}>Follow the next handoff <ArrowRight size={16} /></button></div>
      </div>
      <div className="es-connected-foot"><span>MEASURE THE JOURNEY</span><strong>Time to repair</strong><strong>Part wait</strong><strong>Approval age</strong><span>From the same work trail</span></div>
    </div>
    <div className="es-companion-story"><div><span className="es-overline">GENERATIVE UI / PRODUCT DIRECTION</span><h3>A companion that follows the case, not just the chat.</h3><p>The planned GigaOps Companion would assemble a case from authorized events, explain what is known with source links, propose a next action and follow the result. People stay in control of changes.</p></div><div className="es-companion-example" aria-live={playing ? "off" : "polite"}><div><Sparkles size={16} /><span>GIGAOPS COMPANION / EXAMPLE</span><span>PLANNED</span></div><p>{active.event}.</p><div><span>{active.companion} Any proposed change still needs the required confirmation.</span><span className="es-companion-source">Source modules: <Link href="/gigaops/maintenance">Maintenance</Link>{active.path !== "/gigaops/maintenance" && <> · <Link href={active.path}>{active.name}</Link></>}</span></div></div></div>
  </div></section>;
}

const architectureStages = [
  { label: "01 / SIGNAL", title: "Trusted event", detail: "A system or person reports what changed.", path: "/gigaops/data", icon: Zap },
  { label: "02 / CONNECT", title: "Connector Hub", detail: "Source and identity travel with the event.", path: "/gigaops/connector-hub", icon: Database },
  { label: "03 / CONTEXT", title: "Shared records", detail: "The owning modules supply permitted facts.", path: "/gigaops/ontology", icon: Layers3 },
  { label: "04 / ROUTE", title: "Workflow Studio", detail: "Rules, ownership and approvals shape the next step.", path: "/gigaops/automation", icon: Workflow },
  { label: "05 / ACT", title: "Web + mobile", detail: "Each person sees the task in their workspace.", path: "/platform/mobile", icon: Smartphone },
  { label: "06 / PROVE", title: "Receipt + insight", detail: "The outcome returns to the record and measure.", path: "/gigaops/analytics", icon: BarChart3 },
];

function ArchitectureFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const [playing, setPlaying] = useState(() => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActiveStage((stage) => (stage + 1) % architectureStages.length), 1650);
    return () => window.clearInterval(timer);
  }, [playing]);
  return <section className="es-section es-architecture-section" id="architecture"><div className="es-container"><div className="es-architecture-heading"><div><span className="es-overline">THE SAAS ARCHITECTURE WORKFLOW</span><h2>From signal to verified action.</h2></div><p>GigaOps connects source events, tenant-scoped records, governed workflow, web and native experiences, and authoritative receipts. Follow the example path as it moves across the platform.</p></div><div className="es-architecture-controls"><span><i /> {playing ? "AUTO-RUNNING" : "PAUSED"} EXAMPLE · {architectureStages[activeStage].title.toUpperCase()}</span><button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause architecture workflow" : "Play architecture workflow"}>{playing ? <Pause size={13} /> : <Play size={13} />}{playing ? "Pause" : "Play"}</button></div><div className="es-architecture-track">{architectureStages.map((stage, index) => <Link href={stage.path} className={activeStage === index ? "es-architecture-node is-active" : index < activeStage ? "es-architecture-node is-passed" : "es-architecture-node"} key={stage.label}><span className="es-architecture-node-top"><stage.icon size={21} /><small>{stage.label}</small></span><strong>{stage.title}</strong><span className="es-architecture-detail">{stage.detail}</span>{index < architectureStages.length - 1 && <ArrowRight className="es-architecture-arrow" size={18} />}</Link>)}</div><div className="es-architecture-bottom"><span><ShieldCheck size={17} /> Permissions and approvals at every action</span><span><Sparkles size={17} /> Companion adds sourced context and proposals</span><span><Activity size={17} /> Events and receipts close the loop</span></div></div></section>;
}

function MobileExperience({ compact = false }: { compact?: boolean }) {
  const [offline, setOffline] = useState(false);
  return <div className={compact ? "es-mobile-experience is-compact" : "es-mobile-experience"}>
    <div className="es-mobile-explainer"><span className="es-overline">GIGAOPS ON MOBILE / PRODUCT DIRECTION</span><h2>Enterprise work moves with your people.</h2><p>Give field teams a focused view of assigned work, asset context, procedures and evidence. The mobile roadmap covers online task completion first, then controlled offline capture and recovery for supported actions.</p><div className="es-mobile-benefits"><div><Wifi size={18} /><span><strong>Online</strong><small>Current permissions, task updates and authoritative receipts.</small></span></div><div><WifiOff size={18} /><span><strong>Offline, when certified</strong><small>Encrypted drafts, visible queue status and conflict recovery after reconnection.</small></span></div><div><Sparkles size={18} /><span><strong>Companion, planned</strong><small>Source-linked case context and proposed next steps for authorized mobile users.</small></span></div></div>{compact && <Link href="/platform/mobile" className="es-mobile-learn">Explore mobile direction <ArrowRight size={16} /></Link>}</div>
    <div className="es-phone-scene"><div className="es-phone-switch" role="group" aria-label="Mobile connectivity example"><button type="button" className={!offline ? "is-active" : ""} onClick={() => setOffline(false)} aria-pressed={!offline}><Wifi size={14} /> Online</button><button type="button" className={offline ? "is-active" : ""} onClick={() => setOffline(true)} aria-pressed={offline}><WifiOff size={14} /> Offline</button></div><div className="es-phone"><div className="es-phone-top"><span>9:41</span><span>{offline ? <WifiOff size={14} /> : <Wifi size={14} />} 100%</span></div><div className="es-phone-app"><div className="es-phone-app-head"><span>G</span><div><small>GIGAOPS MOBILE</small><strong>My work</strong></div><span className={offline ? "es-phone-state is-offline" : "es-phone-state"}>{offline ? "OFFLINE" : "ONLINE"}</span></div><div className="es-phone-date">TODAY / SITE 12</div><div className="es-phone-task"><span>PRIORITY WORK ORDER</span><h3>Inspect asset P-1082</h3><p>WO-2048 · Equipment service</p><div><Link href="/gigaops/maintenance">Asset history</Link><Link href="/gigaops/documents">Procedure</Link><Link href="/gigaops/inventory">Required part</Link></div></div><div className="es-phone-insight"><Sparkles size={14} /><span>COMPANION · PLANNED</span><p>{offline ? "Reconnect to ask about this case." : "Why this task? Asset P-1082 needs an inspection; the work order links its history and procedure."}</p></div><div className="es-phone-evidence"><span>FIELD EVIDENCE</span><strong>Inspection photo and reading</strong><small>{offline ? "Encrypted draft saved on this device" : "Ready to submit to the work order"}</small></div><div className={offline ? "es-phone-receipt is-offline" : "es-phone-receipt"}>{offline ? <WifiOff size={16} /> : <Check size={16} />}<span>{offline ? "Pending sync · no server receipt yet" : "Submitted · receipt attached to WO-2048"}</span></div><div className="es-phone-nav"><Link href="/platform/mobile">Today</Link><Link href="/gigaops/maintenance">Work</Link><Link href="/gigaops/automation">Cases</Link><Link href="/gigaops">More</Link></div></div></div><span className="es-phone-note">INTERACTIVE PRODUCT EXAMPLE · OFFLINE WRITES ARE PLANNED</span></div>
  </div>;
}

function PlatformLayers() {
  const layers = [
    { name: "Connect", icon: Database, copy: "Bring records and events from existing systems into a shared context." },
    { name: "Configure", icon: Settings2, copy: "Shape workflows, rules and responsibilities around your operating model." },
    { name: "Execute", icon: Layers3, copy: "Put the right next action in front of each team." },
    { name: "Govern", icon: ShieldCheck, copy: "Keep decisions and evidence attached to the work they belong to." },
  ];
  return <div className="es-layer-grid">{layers.map((layer, index) => <div className="es-layer" key={layer.name}><div><span>{String(index + 1).padStart(2, "0")}</span><layer.icon size={22} /></div><h3>{layer.name}</h3><p>{layer.copy}</p></div>)}</div>;
}

function ClosingCTA({ title = "See how the work fits together." }: { title?: string }) {
  return <section className="es-closing"><div className="es-container"><span className="es-overline">START A CONVERSATION</span><div><h2>{title}</h2><Link href="/contact" className="es-button es-button-light">Talk to our team <ArrowRight size={17} /></Link></div></div></section>;
}

export function EnterpriseHome() {
  const demoChoices = demoPaths.map((path) => solutionByPath.get(path)!);
  useEffect(() => { document.title = "Gigasys | Connected enterprise software"; }, []);
  return <EnterpriseShell>
    <section className="es-hero es-home-hero"><div className="es-container">
      <span className="es-kicker"><i /> GIGAOPS / ENTERPRISE PLATFORM</span>
      <div className="es-hero-grid"><div><h1>One platform for the work that runs your business.</h1><p>Connect people, processes and data in one governed workspace. Build focused operating journeys for life sciences, finance, field teams and more.</p><div className="es-hero-actions"><a href="#connected-work" className="es-button es-button-dark">See how work connects <ArrowRight size={17} /></a><Link href="/gigaops" className="es-button es-button-outline">Explore the platform</Link></div></div><aside><span>ONE CONNECTED SYSTEM</span><p>Life sciences <i /> Finance <i /> Field work <i /> Workflow automation</p><strong>Purpose-built journeys on a common foundation.</strong></aside></div>
    </div></section>
    <ConnectedJourney />
    <section className="es-section es-section-soft" id="workflows"><div className="es-container"><div className="es-section-row"><SectionHeading label="EXPLORE THE PLATFORM" title="Click through the work." copy="Select a workflow, then follow the decisions and actions that move it forward." /><span className="es-interactive-label"><Play size={15} /> Interactive walkthrough</span></div><InteractiveWorkspace choices={demoChoices} initialPath="/gigaops/automation" /></div></section>
    <ArchitectureFlow />
    <section className="es-section es-mobile-home" id="mobile"><div className="es-container"><MobileExperience compact /></div></section>
    <section className="es-section es-section-dark es-home-index" id="products"><div className="es-container"><SectionHeading label="CHOOSE A DIRECTION" title="Go deeper where it matters." copy="Start with the platform, a specialist product, or the work in your industry." /><div className="es-home-links">
      <Link href="/gigaops" id="modules"><span>01 / PLATFORM PRODUCT</span><div><h3>GigaOps</h3><p>Explore connected operations and the modules behind them.</p></div><ArrowRight size={22} /></Link>
      <Link href="/products/speed"><span>02 / SPECIALIST PRODUCT</span><div><h3>SPEED</h3><p>Follow a synthesis route from screening to safety review.</p></div><ArrowRight size={22} /></Link>
      <Link href="/industries" id="industries"><span>03 / INDUSTRY JOURNEYS</span><div><h3>Find your operating context</h3><p>See how products and modules connect for different teams.</p></div><ArrowRight size={22} /></Link>
    </div></div></section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function MobilePage() {
  useEffect(() => { document.title = "GigaOps Mobile | Gigasys"; }, []);
  return <EnterpriseShell>
    <section className="es-hero es-company-hero"><div className="es-container"><div className="es-kicker-row"><span className="es-kicker"><i /> GIGAOPS / MOBILE EXPERIENCE</span><span className="es-stage">In development</span></div><h1>The right work, wherever your team is.</h1><p>Extend GigaOps to iPhone, iPad and Android with role-scoped tasks, current context and a clear record of what happened.</p><div className="es-hero-actions"><a href="#mobile-experience" className="es-button es-button-dark">Explore the experience <ArrowRight size={17} /></a><Link href="/contact" className="es-button es-button-outline">Discuss field operations</Link></div></div></section>
    <section className="es-section es-mobile-home" id="mobile-experience"><div className="es-container"><MobileExperience /></div></section>
    <section className="es-section"><div className="es-container"><SectionHeading label="HOW MOBILE FITS" title="A native view of governed work." copy="The owning module remains the source of truth. Mobile presents the permitted task and returns a receipt when an action is accepted." /><div className="es-mobile-principles"><div><span>01 / SEE</span><h3>Know what is assigned.</h3><p>Work, place, asset, procedure and freshness appear together for the authorized person.</p></div><div><span>02 / CAPTURE</span><h3>Keep evidence with the task.</h3><p>Readings, photos and notes stay linked to the work that requires them.</p></div><div><span>03 / RECOVER</span><h3>Know what reached the server.</h3><p>Supported offline work is queued locally; sync, conflict and rejection states remain explicit until the owning module returns a receipt.</p></div></div></div></section>
    <section className="es-section es-section-soft"><div className="es-container"><SectionHeading label="CONNECTED CAPABILITIES" title="Start with the work your people do." /><div className="es-related-grid">{["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory"].map((path) => <SolutionCard key={path} item={solutionByPath.get(path)!} />)}</div></div></section>
    <ClosingCTA title="Bring connected work into the field." />
  </EnterpriseShell>;
}

export function ProductIndexPage() {
  useEffect(() => { document.title = "Products | Gigasys"; }, []);
  return <EnterpriseShell>
    <section className="es-hero es-company-hero"><div className="es-container"><span className="es-kicker"><i /> PRODUCT PORTFOLIO</span><h1>Products built around clear work.</h1><p>Explore GigaOps as the connected enterprise platform, plus focused products for process safety, communications, commerce, talent and customer experiences.</p></div></section>
    <section className="es-section es-section-soft"><div className="es-container"><SectionHeading label="PLATFORM PRODUCT" title="Start with GigaOps." copy="One connected foundation for operational journeys across functions." /><div className="es-featured-product"><div><span className="es-overline">GIGAOPS</span><h3>Connected operations, from signal to action.</h3><p>Explore the platform, broad capabilities and specialist modules.</p></div><Link href="/gigaops">Explore GigaOps <ArrowRight size={17} /></Link></div></div></section>
    <section className="es-section"><div className="es-container"><SectionHeading label="PRODUCTS" title="Explore the portfolio." copy="Open a product to see its workflow, business outcomes and related capabilities." /><SolutionGrid items={products.filter((item) => item.path !== "/gigaops")} /></div></section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function IndustriesIndexPage() {
  useEffect(() => { document.title = "Industries | Gigasys"; }, []);
  return <EnterpriseShell>
    <section className="es-hero es-company-hero"><div className="es-container"><span className="es-kicker"><i /> INDUSTRIES</span><h1>See connected work in your world.</h1><p>Explore how the same platform supports different operating journeys without losing the context each team needs.</p></div></section>
    <section className="es-section es-section-soft"><div className="es-container"><SectionHeading label="INDUSTRY JOURNEYS" title="Choose your operating context." /><SolutionGrid items={industries} /></div></section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function PlatformPage() {
  const demoChoices = demoPaths.map((path) => solutionByPath.get(path)!);
  useEffect(() => { document.title = "GigaOps Platform | Gigasys"; }, []);
  return <EnterpriseShell>
    <section className="es-hero"><div className="es-container"><span className="es-kicker"><i /> THE GIGAOPS PLATFORM</span><div className="es-hero-grid"><div><h1>Connected operations, from signal to decision to action.</h1><p>GigaOps brings modular workflows, operational records and clear ownership together so teams can act with context.</p><div className="es-hero-actions"><a href="#modules" className="es-button es-button-dark">Explore all modules <ArrowRight size={17} /></a><Link href="/contact" className="es-button es-button-outline">Talk to us</Link></div></div><aside><span>DESIGNED TO COMPOSE</span><p>Data <i /> Workflows <i /> People <i /> Evidence</p><strong>One operational picture across functions.</strong></aside></div></div></section>
    <section className="es-section" id="model"><div className="es-container"><SectionHeading label="HOW IT WORKS" title="Connect the system. Configure the work." /><PlatformLayers /></div></section>
    <section className="es-section es-section-soft" id="journeys"><div className="es-container"><SectionHeading label="SEE IT IN ACTION" title="Follow an operational journey." copy="The same interaction pattern applies across the platform." /><InteractiveWorkspace choices={demoChoices} initialPath="/gigaops/automation" /></div></section>
    <section className="es-section" id="modules"><div className="es-container"><SectionHeading label="MODULE CATALOGUE" title="Every capability has its own next action." copy="Open a module to see its workflow, business value and measurements." /><SolutionGrid items={modules} /><div className="es-featured-product"><div><span className="es-overline">SPECIALIST PRODUCT</span><h3>SPEED process safety</h3><p>Bring route screening and a reviewable dossier into the life sciences journey.</p></div><Link href="/products/speed">Explore SPEED <ArrowRight size={17} /></Link></div></div></section>
    <section className="es-section es-section-soft" id="specialist-modules"><div className="es-container"><SectionHeading label="SPECIALIST MODULES" title="The modules beneath the platform." copy="Explore the distinct module boundaries in the product portfolio and their current stage." /><SolutionGrid items={specialistModules} /></div></section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function SolutionPage({ path }: { path: string }) {
  const item = solutionByPath.get(path);
  useEffect(() => { document.title = `${item?.name ?? "Page"} | Gigasys`; }, [item?.name]);
  if (!item) return <EnterpriseShell><div className="es-container es-not-found"><h1>Page not found</h1><Link href="/">Return home <ArrowRight size={16} /></Link></div></EnterpriseShell>;
  const related = item.related.map((relatedPath) => solutionByPath.get(relatedPath)).filter((value): value is Solution => Boolean(value));
  return <EnterpriseShell>
    <section className="es-hero es-solution-hero"><div className="es-container">
      <div className="es-breadcrumb"><Link href="/">Gigasys</Link><ChevronRight size={13} /><Link href={item.kind === "module" ? "/gigaops" : item.kind === "product" ? "/products" : "/industries"}>{item.kind === "module" ? "GigaOps" : item.kind === "product" ? "Products" : "Industries"}</Link><ChevronRight size={13} /><span>{item.name}</span></div>
      <div className="es-kicker-row"><span className="es-kicker"><i /> {item.name.toUpperCase()} / {item.category.toUpperCase()}</span>{moduleStages[item.path] && <span className="es-stage">{moduleStages[item.path]}</span>}<ChannelBadges path={item.path} /></div>
      <div className="es-hero-grid"><div><h1>{item.headline}</h1><p>{item.summary}</p><div className="es-hero-actions"><a href="#experience" className="es-button es-button-dark">See the workflow <ArrowRight size={17} /></a><Link href="/contact" className="es-button es-button-outline">Discuss your use case</Link></div></div><aside><span>{item.kind.toUpperCase()} / {item.name.toUpperCase()}</span><div className="es-hero-aside-icon"><SolutionIcon path={item.path} size={37} /></div><strong>From context to the next clear action.</strong></aside></div>
    </div></section>
    <div className="es-page-tabs"><div className="es-container"><a href="#experience">Experience</a><a href="#outcomes">Outcomes</a><a href="#capabilities">Capabilities</a><a href="#approach">Why Gigasys</a></div></div>
    <section className="es-section es-section-soft" id="experience"><div className="es-container"><div className="es-section-row"><SectionHeading label="INTERACTIVE EXPERIENCE" title={`Work through ${item.name}.`} copy="Select each action to see how this journey moves from a work item to a decision." /><span className="es-interactive-label"><Play size={15} /> Clickable workflow</span></div><InteractiveWorkspace key={item.path} choices={[item]} initialPath={item.path} /></div></section>
    <section className="es-section" id="outcomes"><div className="es-container"><SectionHeading label="BUSINESS OUTCOMES" title="Make the improvement measurable." copy="Agree on a baseline and target during discovery. These are the operational measures this solution is built to improve." /><div className="es-outcome-grid">{item.outcomes.map(([name, description], index) => <div className="es-outcome" key={name}><span>0{index + 1} / MEASURE</span><h3>{name}</h3><p>{description}</p></div>)}</div></div></section>
    <section className="es-section es-section-dark" id="capabilities"><div className="es-container"><SectionHeading label="WHAT THE SOFTWARE ENABLES" title="Give every team a usable next step." /><div className="es-capability-grid">{item.capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span><Check size={21} /><h3>{capability}</h3><p>{item.steps[Math.min(index, item.steps.length - 1)][1]}</p></div>)}</div></div></section>
    <section className="es-section" id="approach"><div className="es-container es-approach-grid"><SectionHeading label="WHY GIGASYS" title="A system that keeps the work connected." copy="The value comes from a clear workflow, the context to act, and a record of what happened." /><div>{[["01", "Start with the work", `The ${item.name} experience starts with an actual operational task, not a generic dashboard.`], ["02", "Connect the context", "People, records and decisions are visible in the same flow."], ["03", "Prove the result", `Use ${item.outcomes[0][0].toLowerCase()} and related measures to assess improvement against your own baseline.`]].map(([num, name, copy]) => <div className="es-reason" key={num}><span>{num}</span><div><h3>{name}</h3><p>{copy}</p></div></div>)}</div></div></section>
    <section className="es-section es-section-soft"><div className="es-container"><SectionHeading label="CONNECTED JOURNEYS" title="Continue the story." /><div className="es-related-grid">{related.map((entry) => <SolutionCard key={entry.path} item={entry} />)}</div></div></section>
    <ClosingCTA title={`Explore ${item.name} with your own use case.`} />
  </EnterpriseShell>;
}

export function CompanyPage({ page }: { page: "about" | "jobs" | "teams" | "contact" }) {
  const content = {
    about: { label: "ABOUT GIGASYS", title: "Software shaped around the work people actually do.", copy: "Gigasys builds connected enterprise software and focused digital products for teams that need clear decisions, accountable execution and useful context.", cards: [["What we build", "Operational workflows, products and data experiences designed to work together."], ["How we work", "Start with an operating problem, build a usable path through it and measure the result."], ["Where we focus", "Enterprise operations, life sciences, communications, commerce and connected teams."]] },
    jobs: { label: "CAREERS", title: "Build software that helps people take action.", copy: "Our work spans product design, engineering and real operational problems. Tell us what you want to build.", cards: [["Product engineering", "Create dependable product experiences and connected systems."], ["Design", "Make complex business workflows clear and useful."], ["Delivery", "Work with teams to translate real operating needs into software."]] },
    teams: { label: "OUR TEAMS", title: "Cross-functional teams, working on connected problems.", copy: "The best product decisions come from understanding both software and the work it supports.", cards: [["Product", "Define focused jobs and useful experiences."], ["Engineering", "Build the systems that make those journeys possible."], ["Customer work", "Connect operating context, implementation and feedback."]] },
    contact: { label: "CONTACT", title: "Show us the work you want to improve.", copy: "Tell us which product, module or operating challenge you are exploring. We will direct the conversation to the right team.", cards: [["Product walkthrough", "See an example journey and discuss the parts that matter to you."], ["Platform conversation", "Explore how modules could connect with your current systems."], ["Partnership", "Discuss a focused product or industry use case."]] },
  }[page];
  const offices = [
    ["Dover, Delaware", "8 The Green, Suite B", "Dover, DE 19901, USA"],
    ["Hyderabad, India", "103, New Mark House, Patrika Nagar", "HITEC City, Hyderabad, Telangana 500081, India"],
    ["Ongole, India", "05-E-Zone, Maruthi Nagar, Kurnool Road (O)", "Prakasam District, Ongole, Andhra Pradesh 523002, India"],
  ];
  useEffect(() => { document.title = `${page === "jobs" ? "Careers" : page[0].toUpperCase() + page.slice(1)} | Gigasys`; }, [page]);
  return <EnterpriseShell>
    <section className="es-hero es-company-hero"><div className="es-container"><span className="es-kicker"><i /> {content.label}</span><h1>{content.title}</h1><p>{content.copy}</p><div className="es-hero-actions"><a href="mailto:connect@gigasystech.com" className="es-button es-button-dark">Email our team <Mail size={17} /></a><Link href="/gigaops" className="es-button es-button-outline">Explore GigaOps</Link></div></div></section>
    <section className="es-section es-section-soft"><div className="es-container es-outcome-grid">{content.cards.map(([title, copy], index) => <div className="es-outcome" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
    {(page === "about" || page === "contact") && <section className="es-section"><div className="es-container"><SectionHeading label="OUR LOCATIONS" title="Connect with the team." copy="We work across the US and India." /><div className="es-outcome-grid es-office-grid">{offices.map(([city, line1, line2]) => <div className="es-outcome" key={city}><MapPin size={21} /><h3>{city}</h3><p>{line1}<br />{line2}</p></div>)}</div><div className="es-direct-contact"><a href="mailto:connect@gigasystech.com"><Mail size={18} /> connect@gigasystech.com</a><a href="tel:+916303162096">+91-6303162096</a></div></div></section>}
    <ClosingCTA />
  </EnterpriseShell>;
}
