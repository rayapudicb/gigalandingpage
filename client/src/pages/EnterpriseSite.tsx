import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Activity, ArrowRight, BarChart3, Boxes, BriefcaseBusiness, Building2,
  Check, ChevronDown, ChevronRight, ClipboardCheck, Compass, Cpu, Database,
  Factory, FileCheck2, FileSignature, FlaskConical, HardHat, HeartPulse,
  Landmark, Layers3, Leaf, Mail, MapPin, Menu, MessageSquare, Monitor,
  Pause, Play, Repeat2, Settings2, ShieldCheck, Smartphone, Sparkles,
  Truck, Trophy, Users2, Wifi, WifiOff, Workflow, Wrench, X, Zap, type LucideIcon,
} from "lucide-react";
import Logo from "@/assets/logo.svg";
import colleaguesReview from "@/assets/industry/colleagues-review.jpg";
import engineeringTeam from "@/assets/industry/engineering-team.jpg";
import fieldCrew from "@/assets/industry/field-crew.jpg";
import industrialEngineer from "@/assets/industry/industrial-engineer.jpg";
import labScientist from "@/assets/industry/lab-scientist.jpg";
import { digitalProducts, enterpriseProducts, industries, modules, products, solutionByPath, specialistModules, type Solution } from "@/data/solutions";
import { SpeedExperience } from "./EnterpriseDemos";
import { SceneCompany, SceneConnectedWork, SceneIndustry, SceneModule, ScenePlatform } from "./enterpriseIllustrations";
import "./EnterpriseSite.css";

const iconByPath: Record<string, LucideIcon> = {
  "/gigaops": Layers3,
  "/gigaops/maintenance": Wrench, "/gigaops/workforce": Users2,
  "/gigaops/inventory": Boxes, "/gigaops/procurement": ClipboardCheck,
  "/gigaops/manufacturing": Factory, "/gigaops/iot": Cpu, "/gigaops/projects": BriefcaseBusiness,
  "/gigaops/finance": FileCheck2, "/gigaops/automation": Workflow,
  "/gigaops/analytics": BarChart3, "/gigaops/communications": MessageSquare,
  "/gigaops/documents": FileSignature, "/gigaops/geospatial": MapPin,
  "/gigaops/data": Database, "/gigaops/returns": Repeat2, "/products/speed": FlaskConical,
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
  "/industries/manufacturing": Factory, "/industries/agriculture": Leaf,
  "/industries/sports": Trophy, "/industries/energy": Zap,
  "/industries/healthcare": HeartPulse, "/industries/transport": Truck,
  "/industries/construction": HardHat,
};

const demoPaths = ["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/products/speed"];
const mobileRoadmapPaths = new Set(["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/gigaops/product-catalogue"]);
const platformMenuPaths = [
  "/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/gigaops/manufacturing",
  "/gigaops/procurement", "/gigaops/finance", "/gigaops/iot", "/gigaops/geospatial",
  "/gigaops/documents", "/gigaops/analytics", "/gigaops/automation", "/products/speed",
];
function solutionsFrom(paths: string[]) {
  return paths.map((path) => solutionByPath.get(path)).filter((item): item is Solution => Boolean(item));
}

function ChannelBadges({ path }: { path: string }) {
  if (!path.startsWith("/gigaops/") || !mobileRoadmapPaths.has(path)) return null;
  return <span className="es-channel-badges"><span><Monitor size={12} strokeWidth={1.5} /> Web</span><span><Smartphone size={12} strokeWidth={1.5} /> Mobile planned</span></span>;
}

function SolutionIcon({ path, size = 20 }: { path: string; size?: number }) {
  const Icon = iconByPath[path] ?? Layers3;
  return <Icon size={size} strokeWidth={1.5} />;
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
            {mobileRoadmapPaths.has(item.path) && <span className="es-menu-mobile" title="Native mobile journey is on the roadmap"><Smartphone size={14} strokeWidth={1.5} /><span className="es-sr-only">Mobile planned</span></span>}
            <ArrowRight size={14} strokeWidth={1.5} />
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
  useEffect(() => { setMenuOpen(false); setOpenDropdown(null); }, [location]);
  useEffect(() => {
    if (!openDropdown && !menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (headerRef.current?.contains(target)) return;
      setOpenDropdown(null);
      setMenuOpen(false);
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
    { key: "platform", label: "Platform", lead: "/gigaops", leadLabel: "Platform overview", items: solutionsFrom(platformMenuPaths), feature: { href: "/industries/manufacturing", image: engineeringTeam, title: "Manufacturing", copy: "The first packaged solution: work, people, parts and production on one plant record." } },
    { key: "products", label: "Products", lead: "/products", leadLabel: "All products", items: products, feature: { href: "/products/speed", image: labScientist, title: "SPEED", copy: "Desk-side process-safety screening before chemistry moves toward the plant." } },
    { key: "industries", label: "Industries", lead: "/industries", leadLabel: "All industries", items: industries, feature: { href: "/contact", image: colleaguesReview, title: "Talk to the team", copy: "Bring a site map, a crew list and the tools you want to retire." } },
  ];
  const activeGroup = groups.find((group) => group.key === openDropdown);

  return (
    <div className="es">
      <header className="es-header" ref={headerRef}>
        <div className="es-header-inner">
          <Link href="/" className="es-brand" aria-label="GigaOps home" onClick={close}>
            <img src={Logo} alt="" /><span>GigaOps</span>
          </Link>
          <nav className="es-nav" aria-label="Main navigation">
            {groups.map((group) => (
              <div className="es-nav-item" key={group.key}>
                <button type="button" className={openDropdown === group.key ? "es-nav-trigger is-open" : "es-nav-trigger"}
                  onClick={() => setOpenDropdown(openDropdown === group.key ? null : group.key)}
                  aria-expanded={openDropdown === group.key} aria-controls={`menu-${group.key}`}>
                  {group.label}<ChevronDown size={14} strokeWidth={1.5} />
                </button>
              </div>
            ))}
            <Link href="/about" className="es-nav-simple" onClick={close}>Company</Link>
          </nav>
          <div className="es-header-actions">
            <Link href="/contact" className="es-header-cta">Contact <ArrowRight size={16} strokeWidth={1.5} /></Link>
            <button type="button" className="es-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="es-mobile-menu" aria-label="Mobile navigation">
          <Link href="/gigaops" onClick={close}>Platform overview <ArrowRight size={15} strokeWidth={1.5} /></Link>
          {groups.map((group) => <details key={group.key}>
            <summary>{group.label}<ChevronDown size={15} strokeWidth={1.5} /></summary>
            <div><Link href={group.lead} onClick={close}><ArrowRight size={17} strokeWidth={1.5} />{group.leadLabel}</Link>{group.items.map((item) => <Link href={item.path} key={item.path} onClick={close}><SolutionIcon path={item.path} size={17} />{item.name}</Link>)}</div>
          </details>)}
          <Link href="/about" onClick={close}>Company <ArrowRight size={15} strokeWidth={1.5} /></Link>
          <Link href="/contact" onClick={close}>Contact <ArrowRight size={15} strokeWidth={1.5} /></Link>
        </nav>}
        {activeGroup && (
          <div className="es-mega" id={`menu-${activeGroup.key}`}>
            <div className="es-container">
              <div className="es-mega-top"><span>{activeGroup.label}</span><Link href={activeGroup.lead} onClick={close}>{activeGroup.leadLabel}<ArrowRight size={15} strokeWidth={1.5} /></Link></div>
              <div className="es-mega-layout">
                <MenuGroup title={activeGroup.key === "platform" ? "GigaOps modules" : activeGroup.label} items={activeGroup.items} close={close} />
                <Link href={activeGroup.feature.href} onClick={close} className="es-mega-feature">
                  <img src={activeGroup.feature.image} alt="" />
                  <strong>{activeGroup.feature.title}</strong>
                  <p>{activeGroup.feature.copy}</p>
                  <span>Explore <ArrowRight size={16} strokeWidth={1.5} /></span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {openDropdown && <button type="button" className="es-mega-scrim" aria-label="Close menu" onClick={close} />}
      <main>{children}</main>
      <footer className="es-footer">
        <div className="es-container es-footer-grid">
          <div><Link href="/" className="es-brand es-footer-brand"><img src={Logo} alt="" /><span>GigaOps</span></Link><p>Operations software for plants, field teams and regulated work — one record for the job, the person, the part and the evidence.</p><a href="mailto:connect@gigasystech.com">connect@gigasystech.com <ArrowRight size={14} strokeWidth={1.5} /></a></div>
          <div><strong>Platform</strong><Link href="/gigaops">GigaOps</Link><Link href="/gigaops/maintenance">Asset & Maintenance</Link><Link href="/gigaops/workforce">Workforce</Link><Link href="/gigaops/inventory">Inventory</Link><Link href="/platform/mobile">Frontline mobile</Link></div>
          <div><strong>Products</strong><Link href="/gigaops">GigaOps</Link><Link href="/products/speed">SPEED</Link><Link href="/products/textfly">TextFly</Link><Link href="/products">Explore all</Link></div>
          <div><strong>Company</strong><Link href="/about">About</Link><Link href="/jobs">Careers</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="es-container es-footer-bottom"><span>© {new Date().getFullYear()} Gigasys Technologies Inc · Gigasys Technologies Pvt Ltd</span><span>Configure the operation. Do not fork the product.</span></div>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title, copy, ink = false }: { label: string; title: string; copy?: string; ink?: boolean }) {
  return <div className="es-section-heading"><span className="es-overline">{label}</span><h2 className={ink ? "is-ink" : undefined}>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function PictogramLink({ href, icon: Icon, title, copy }: { href: string; icon: LucideIcon; title: string; copy: string }) {
  return (
    <Link href={href} className="es-pictogram">
      <Icon className="es-pic" size={40} strokeWidth={1.25} />
      <h3>{title}</h3>
      <p>{copy}</p>
      <span>Explore <ArrowRight size={16} strokeWidth={1.5} /></span>
    </Link>
  );
}

function CatalogTile({ item }: { item: Solution }) {
  return (
    <Link href={item.path} className="es-tile">
      <strong>{item.name}</strong>
      <p>{item.summary}</p>
      <div className="es-tile-foot">
        <small>{item.category}</small>
        <SolutionIcon path={item.path} size={32} />
      </div>
    </Link>
  );
}

function ProofCard({ kicker, title, metric, detail }: { kicker: string; title: string; metric: string; detail: string }) {
  return (
    <article className="es-proof">
      <div className="es-proof-body"><small>{kicker}</small><h3>{title}</h3></div>
      <div className="es-proof-foot"><strong>{metric}</strong><p>{detail}</p></div>
    </article>
  );
}

function PeopleSpotlight({ src, alt, label, title, copy }: { src: string; alt: string; label: string; title: string; copy: string }) {
  return (
    <section className="es-section">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">{label}</span>
          <h2 className="is-ink">{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="es-spotlight"><img src={src} alt={alt} /></div>
      </div>
    </section>
  );
}

const fieldModules: { icon: LucideIcon; title: string; copy: string; pos: string }[] = [
  { icon: ClipboardCheck, title: "Operator rounds", copy: "Route, checkpoint, reading.", pos: "tl" },
  { icon: Wrench, title: "Work orders", copy: "Asset, tasks, close-out.", pos: "tr" },
  { icon: Boxes, title: "Parts issue", copy: "Reserve, pick, issue.", pos: "ml" },
  { icon: FileCheck2, title: "Evidence", copy: "Photo, checklist, sign.", pos: "mr" },
  { icon: WifiOff, title: "Offline queue", copy: "Draft until receipt.", pos: "bl" },
  { icon: MapPin, title: "Site & asset", copy: "The place on the record.", pos: "br" },
];

function FieldMobileScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "es-field is-compact" : "es-field"} role="img" aria-label="Frontline mobile modules around a technician on the plant floor">
      {fieldModules.map((item) => {
        const Icon = item.icon;
        return (
          <div className={`es-field-label es-field-${item.pos}`} key={item.title}>
            <span className="es-field-icon"><Icon size={16} strokeWidth={1.5} /></span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.copy}</small>
            </span>
          </div>
        );
      })}
      <div className="es-field-photo">
        <img src={industrialEngineer} alt="Maintenance technician on the plant floor holding a tablet" />
      </div>
    </div>
  );
}

function ClosingCTA({ title = "Bring a plant, a process and the tools you run today." }: { title?: string }) {
  return <section className="es-closing"><div className="es-container"><span className="es-overline">Start a conversation</span><div><h2>{title}</h2><Link href="/contact" className="es-button es-button-light">Talk to our team <ArrowRight size={16} strokeWidth={1.5} /></Link></div></div></section>;
}

function PageTabs({ links }: { links: [string, string][] }) {
  return (
    <div className="es-page-tabs">
      <div className="es-container">
        {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        <Link href="/contact" className="es-tab-cta">Book a conversation</Link>
      </div>
    </div>
  );
}

function Leadspace({
  breadcrumb, kicker, extra, title, copy, primary, secondary, visual,
}: {
  breadcrumb?: React.ReactNode;
  kicker?: React.ReactNode;
  extra?: React.ReactNode;
  title: string;
  copy: string;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <section className="es-lead">
      <div className="es-container">
        {breadcrumb}
        {kicker && <div className="es-kicker-row">{kicker}{extra}</div>}
        <div className="es-lead-grid">
          <div>
            <h1>{title}</h1>
            <p>{copy}</p>
            {(primary || secondary) && <div className="es-lead-actions">{primary}{secondary}</div>}
          </div>
          {visual}
        </div>
      </div>
    </section>
  );
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

  return <div className="es-workspace" aria-label={`${active.name} product tour`}>
    <div className="es-window-bar"><span>Product tour</span><button type="button" className="es-play-tour" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}>{playing ? <Pause size={13} strokeWidth={1.5} /> : <Play size={13} strokeWidth={1.5} />}{playing ? "Pause" : "Play"}</button><span className="es-example-tag">Example workflow</span></div>
    <div className="es-workspace-body">
      <aside className="es-workspace-sidebar">
        <div className="es-workspace-brand"><span>G</span> Workspace</div>
        <small>Explore</small>
        {choices.map((item) => <button type="button" key={item.path} className={active.path === item.path ? "es-choice is-active" : "es-choice"} onClick={() => choose(item.path)} aria-pressed={active.path === item.path}>
          <SolutionIcon path={item.path} size={18} /><span>{item.name}<small>{item.category}</small></span><ChevronRight size={15} strokeWidth={1.5} />
        </button>)}
        <div className="es-sidebar-foot"><span /> Clear next actions</div>
      </aside>
      <div className="es-workspace-main">
        <div className="es-workspace-breadcrumb">Workspace <ChevronRight size={13} strokeWidth={1.5} /> {active.name} <span>{active.category}</span></div>
        <div className="es-workspace-intro"><div><span className="es-overline">{active.name}</span><h3>{active.headline}</h3><p>{active.summary}</p></div><Link href={active.path}>Explore page <ArrowRight size={15} strokeWidth={1.5} /></Link></div>
        <div className="es-workspace-cards">
          <div className="es-work-card">
            <div className="es-work-card-top"><span>Work item</span><span className="es-status">In review</span></div>
            <h4>{active.scenario}</h4><p>Choose an action to see how the work moves forward.</p>
            <div className="es-step-list">{active.steps.map(([label], index) => <button type="button" key={label} className={stepIndex === index ? "es-step is-active" : "es-step"} onClick={() => { setPlaying(false); setStepIndex(index); }} aria-pressed={stepIndex === index}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>{index < stepIndex ? <Check size={15} strokeWidth={1.5} /> : <ChevronRight size={15} strokeWidth={1.5} />}
            </button>)}</div>
          </div>
          <div className="es-action-card" aria-live="polite">
            <div className="es-action-top"><span>Selected action</span><span>{String(stepIndex + 1).padStart(2, "0")} / {String(active.steps.length).padStart(2, "0")}</span></div>
            <div className="es-action-symbol"><SolutionIcon path={active.path} size={27} /></div>
            <span className="es-overline">{active.category}</span><h4>{stepName}</h4><p>{stepDetail}</p>
            <div className="es-action-bottom"><span>Ready for next step</span><button type="button" onClick={() => { setPlaying(false); setStepIndex((stepIndex + 1) % active.steps.length); }}>Next action <ArrowRight size={15} strokeWidth={1.5} /></button></div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

const homeProof = [
  { kicker: "Asset & Maintenance", title: "Stop running breakdowns on WhatsApp and planned work on a spreadsheet.", metric: "Unplanned downtime", detail: "Hours lost to emergency work, measured against the baseline we agree with you." },
  { kicker: "Workforce", title: "Put a named, qualified person on the job — then export time that payroll can use.", metric: "Time to dispatch", detail: "Minutes from a staffing request to an accepted booking." },
  { kicker: "Inventory", title: "Do not send a technician to a bin that was already empty.", metric: "Stock accuracy", detail: "Physical count versus recorded balance, including reservations against work." },
  { kicker: "SPEED", title: "See energetic and thermal risk while the route can still change.", metric: "Screening cycle", detail: "Hours from a submitted route to a reviewed process-safety screen." },
];

const architecture = [
  { href: "/gigaops/maintenance", icon: Wrench, title: "The asset needs work", copy: "Open the register, the PM schedule and the work order on the real site." },
  { href: "/gigaops/workforce", icon: Users2, title: "A qualified person is booked", copy: "Workforce answers with a named person, not a comment on the job." },
  { href: "/gigaops/inventory", icon: Boxes, title: "Parts are reserved", copy: "ATP cannot go negative. Issues leave the stores against that work order." },
  { href: "/gigaops/documents", icon: FileCheck2, title: "The job closes with evidence", copy: "Checklists, meters and signatures stay on the record — not on a phone." },
  { href: "/gigaops/iot", icon: Cpu, title: "Condition can start the work", copy: "A critical sensor breach can write a meter and open downtime on the asset." },
  { href: "/gigaops/analytics", icon: BarChart3, title: "The number opens the record", copy: "A downtime spike still drills to the work orders that caused it." },
];

export function EnterpriseHome() {
    useEffect(() => { document.title = "GigaOps | Operations software for plants and field work"; }, []);
  return <EnterpriseShell>
    <Leadspace
      kicker={<span className="es-kicker">GigaOps</span>}
      title="Run the plant as one operation — not five systems."
      copy="GigaOps is the operating platform for maintenance, people, parts and evidence. You configure how a site works. You do not rebuild the software for the next plant, depot or lab."
      primary={<Link href="/gigaops" className="es-button es-button-blue">Explore GigaOps <ArrowRight size={16} strokeWidth={1.5} /></Link>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Talk about your operation</Link>}
      visual={<SceneConnectedWork />}
    />
    <section className="es-section" id="overview">
      <div className="es-container">
        <SectionHeading label="What we solve" title="The jobs that currently live in the wrong tools." copy="Start where the plant already loses time: work orders, people, parts, or a chemistry route that is still a paper pack." />
        <div className="es-pictogram-grid">
          <PictogramLink href="/gigaops/maintenance" icon={Wrench} title="Asset & Maintenance" copy="One work order for the asset, the parts and the person who can finish it." />
          <PictogramLink href="/gigaops/workforce" icon={Users2} title="Workforce" copy="Skills, bookings and pay-ready time that can staff maintenance work." />
          <PictogramLink href="/gigaops/inventory" icon={Boxes} title="Inventory" copy="Reservations and issues that cannot over-commit the bin the job is counting on." />
          <PictogramLink href="/products/speed" icon={FlaskConical} title="SPEED" copy="Desk-side process-safety screening before a route is politically locked." />
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading label="How a day actually runs" title="From a broken asset to a number you can defend." copy="This is the manufacturing operating loop. Other industries configure the same modules — plant, depot, ward or field — without a fork." ink />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {architecture.map((item) => (
            <PictogramLink key={item.title} href={item.href} icon={item.icon} title={item.title} copy={item.copy} />
          ))}
        </div>
      </div>
    </section>
    <section className="es-section" id="outcomes">
      <div className="es-container">
        <SectionHeading label="What you will be able to see" title="Measures taken from the operating record." copy="We agree a baseline in discovery. We do not publish someone else's percentages as yours." />
        <div className="es-proof-grid">{homeProof.map((card) => <ProofCard key={card.metric} {...card} />)}</div>
      </div>
    </section>
    <section className="es-section es-section-tint" id="mobile">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">Frontline</span>
          <h2>The record stays in GigaOps. The phone is how the crew writes to it.</h2>
          <p>Operator rounds, work orders, stores issues and evidence are the first frontline journeys. Online completion is the default. Offline capture is a controlled queue — not a second system of record on a device.</p>
          <div className="es-pictogram-grid es-pictogram-grid-1">
            <div className="es-pictogram"><Wifi size={32} strokeWidth={1.25} className="es-pic" /><h3>Assigned work, live</h3><p>The person sees the job, the asset, the place and what is already known.</p></div>
            <div className="es-pictogram"><WifiOff size={32} strokeWidth={1.25} className="es-pic" /><h3>Queued when the plant has no signal</h3><p>Drafts wait for a receipt from the owning module. Conflicts are visible, not silent.</p></div>
          </div>
          <Link href="/platform/mobile" className="es-button es-button-blue">See the frontline direction <ArrowRight size={16} strokeWidth={1.5} /></Link>
        </div>
        <FieldMobileScene />
      </div>
    </section>
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="Choose a buying path" title="Platform, specialist product, or your industry." ink />
        <div className="es-direction-grid">
          <Link href="/gigaops" className="es-direction" id="modules">
            <div className="es-direction-body"><span>01 / Platform</span><h3>GigaOps</h3><p>The operations suite: maintenance, workforce, materials, places and evidence.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
          <Link href="/products/speed" className="es-direction">
            <div className="es-direction-body"><span>02 / Life sciences</span><h3>SPEED</h3><p>Screen a synthesis route at the desk before it moves toward the plant.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
          <Link href="/industries/manufacturing" className="es-direction" id="industries">
            <div className="es-direction-body"><span>03 / First industry</span><h3>Manufacturing</h3><p>The first packaged solution: plant work, people, parts and MRP on one record.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
        </div>
      </div>
    </section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function MobilePage() {
  useEffect(() => { document.title = "Frontline mobile | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      kicker={<span className="es-kicker">GigaOps / Frontline</span>}
      extra={<span className="es-stage">In development</span>}
      title="Rounds, work orders and stores — written from the floor, stored in GigaOps."
      copy="Frontline mobile is how a technician, operator or stores person writes to the same record the plant already runs. It is not a second CMMS on a phone. Operator inspection rounds are the first native build."
      primary={<a href="#overview" className="es-button es-button-blue">See the journeys <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Discuss field operations</Link>}
      visual={<FieldMobileScene compact />}
    />
    <PageTabs links={[["#overview", "Overview"], ["#capabilities", "Journeys"], ["#related", "System of record"]]} />
    <section className="es-section" id="overview">
      <div className="es-container">
        <div className="es-split-copy">
          <span className="es-overline">The problem</span>
          <h2>Paper rounds, clipboard nameplates and WhatsApp breakdowns.</h2>
          <p>The owning GigaOps module remains the source of truth. The device shows the permitted task and returns a receipt when the action is accepted. If the plant has no signal, drafts queue until that receipt exists.</p>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading label="First journeys" title="What a crew should be able to do from the floor." ink />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          <div className="es-pictogram"><ClipboardCheck size={40} strokeWidth={1.25} className="es-pic" /><h3>Operator rounds</h3><p>Walk a scheduled route, capture readings at the checkpoint, and stop a round that was only ticked on paper.</p></div>
          <div className="es-pictogram"><Wrench size={40} strokeWidth={1.25} className="es-pic" /><h3>Work orders</h3><p>See the asset, the tasks, the parts and close with evidence — the same work order the planner opened.</p></div>
          <div className="es-pictogram"><Boxes size={40} strokeWidth={1.25} className="es-pic" /><h3>Stores issues</h3><p>Issue reserved parts against the job, not a verbal pickup that never hit the ledger.</p></div>
        </div>
      </div>
    </section>
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="System of record" title="Mobile writes to these modules. It does not replace them." ink />
        <div className="es-tile-grid es-tile-grid-3">
          {["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory"].map((path) => <CatalogTile key={path} item={solutionByPath.get(path)!} />)}
        </div>
      </div>
    </section>
    <ClosingCTA title="Show us the round, the job or the stores window you want on a device." />
  </EnterpriseShell>;
}

export function ProductIndexPage() {
  useEffect(() => { document.title = "Products | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Products</span></div>}
      title="Two enterprise products. A clear job for each."
      copy="GigaOps is the operations platform for plants and field organizations. SPEED is process-safety screening for chemistry that has not yet reached the plant. Other Gigasys products sit beside that suite — they are not plant modules."
      visual={<ScenePlatform />}
    />
    <section className="es-section">
      <div className="es-container">
        <div className="es-featured">
          <div><span className="es-overline">Operations platform</span><h3>GigaOps</h3><p>Maintenance, workforce, inventory, procurement, manufacturing, places and evidence — configured per site, not forked.</p></div>
          <Link href="/gigaops">Explore GigaOps <ArrowRight size={16} strokeWidth={1.5} /></Link>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft">
      <div className="es-container">
        <SectionHeading label="Enterprise products" title="What an operations or EHS buyer is here to evaluate." copy="Open a product to see the problem it removes, the workflow, and the measures it is built to move." ink />
        <div className="es-tile-grid">{enterpriseProducts.filter((item) => item.path !== "/gigaops").map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <section className="es-section">
      <div className="es-container">
        <SectionHeading label="Also from Gigasys" title="Focused products, separate from the plant suite." copy="These solve communications, community, talent and identity problems. They are not substitutes for GigaOps maintenance or workforce." ink />
        <div className="es-tile-grid">{digitalProducts.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <ClosingCTA title="Tell us whether you are buying a plant operation or a specialist product." />
  </EnterpriseShell>;
}

export function IndustriesIndexPage() {
  useEffect(() => { document.title = "Industries | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Industries</span></div>}
      title="Same modules. Your vocabulary. No fork for the next site."
      copy="Manufacturing is the first packaged GigaOps solution. Other industries — labs, networks, depots, sites, facilities, fields and venues — configure places, skills and defaults on the same operating core."
      primary={<Link href="/industries/manufacturing" className="es-button es-button-blue">Start with manufacturing</Link>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Talk about your industry</Link>}
      visual={<SceneIndustry />}
    />
    <section className="es-section">
      <div className="es-container">
        <SectionHeading label="Industry solutions" title="Choose the operating context you run." copy="Each page names the problem, the GigaOps modules that remove it, and the measures a buyer should expect to see." ink />
        <div className="es-tile-grid">{industries.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <ClosingCTA title="Bring a site map, a crew list and the tools you want to retire." />
  </EnterpriseShell>;
}

export function PlatformPage() {
  const demoChoices = demoPaths.map((path) => solutionByPath.get(path)!);
  const layers = [
    { href: "/gigaops/maintenance", icon: Wrench, title: "Operate", copy: "Assets, work orders, people, parts and production on one plant record." },
    { href: "/gigaops/geospatial", icon: MapPin, title: "Scope", copy: "Every record sits on a place. Managers see their site, not the whole tenant." },
    { href: "/gigaops/automation", icon: Settings2, title: "Configure", copy: "Industry packs, workflows and rules change how a site runs — they do not fork the product." },
    { href: "/gigaops/documents", icon: ShieldCheck, title: "Prove", copy: "Checklists, signatures, meters and measures stay attached to the work they explain." },
  ];
  useEffect(() => { document.title = "GigaOps platform | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><Link href="/products">Products</Link><ChevronRight size={13} strokeWidth={1.5} /><span>GigaOps</span></div>}
      kicker={<span className="es-kicker">The GigaOps platform</span>}
      title="Configure how the operation runs. Do not rebuild it for every site."
      copy="GigaOps is the operations suite: maintenance, workforce, inventory, procurement, manufacturing, places, evidence and analytics. Each module owns its record. Together they give the next person a job they can actually finish."
      primary={<a href="#modules" className="es-button es-button-blue">See the modules <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Talk about a site</Link>}
      visual={<ScenePlatform />}
    />
    <PageTabs links={[["#overview", "The problem"], ["#capabilities", "How it is assembled"], ["#modules", "Modules"], ["#tour", "Product tour"]]} />
    <section className="es-section" id="overview">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">The problem</span>
          <h2>CMMS, stores, the shift board, WhatsApp and finance do not share a record.</h2>
          <p>A second plant usually means a second stack. GigaOps is built so you select modules, apply an industry pack, and keep evidence on the work — instead of copying screens for the next customer.</p>
        </div>
        <ScenePlatform />
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading label="How it is assembled" title="A platform you configure, with modules you can name." ink />
        <div className="es-pictogram-grid">{layers.map((layer) => <PictogramLink key={layer.title} href={layer.href} icon={layer.icon} title={layer.title} copy={layer.copy} />)}</div>
      </div>
    </section>
    <section className="es-section" id="modules">
      <div className="es-container">
        <SectionHeading label="Operating modules" title="Start with the plant loop." copy="These are the capabilities a maintenance, operations or stores leader should evaluate first." ink />
        <div className="es-tile-grid">{modules.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
        <div className="es-featured es-mt-32">
          <div><span className="es-overline">Life sciences product</span><h3>SPEED process safety</h3><p>Desk-side route screening for chemistry that has not yet reached the plant — on the same platform, as an optional module.</p></div>
          <Link href="/products/speed">Explore SPEED <ArrowRight size={16} strokeWidth={1.5} /></Link>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft">
      <div className="es-container">
        <SectionHeading label="Commercial, finance and platform modules" title="The rest of the operating record." copy="Orders, catalogue, receivables, tax, rules and connectors sit here. Open a module to see what it actually owns — and what it does not claim." ink />
        <div className="es-tile-grid">{specialistModules.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <section className="es-section" id="tour">
      <div className="es-container">
        <SectionHeading label="Product tour" title="Walk a work order, a booking, a parts issue or a route screen." copy="Example workflows. Your baseline and your sites belong in a conversation, not in this illustration." ink />
        <InteractiveWorkspace choices={demoChoices} initialPath="/gigaops/maintenance" />
      </div>
    </section>
    <ClosingCTA title="Bring one site’s work orders, roster and stores list." />
  </EnterpriseShell>;
}

export function SolutionPage({ path }: { path: string }) {
  const item = solutionByPath.get(path);
      useEffect(() => { document.title = `${item?.name ?? "Page"} | GigaOps`; }, [item?.name]);
  if (!item) return <EnterpriseShell><div className="es-container es-not-found"><h1>Page not found</h1><Link href="/">Return home <ArrowRight size={16} strokeWidth={1.5} /></Link></div></EnterpriseShell>;
  const isSpeed = item.path === "/products/speed";
  const related = item.related.map((relatedPath) => solutionByPath.get(relatedPath)).filter((value): value is Solution => Boolean(value));
  const parent = item.kind === "module" ? { href: "/gigaops", label: "GigaOps" } : item.kind === "product" ? { href: "/products", label: "Products" } : { href: "/industries", label: "Industries" };
  const Icon = iconByPath[item.path] ?? Layers3;
  const visual = item.kind === "industry" ? <SceneIndustry /> : <SceneModule Icon={Icon} />;
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><Link href={parent.href}>{parent.label}</Link><ChevronRight size={13} strokeWidth={1.5} /><span>{item.name}</span></div>}
      kicker={<span className="es-kicker">{item.name} / {item.category}</span>}
      extra={<ChannelBadges path={item.path} />}
      title={item.headline}
      copy={item.summary}
      primary={<a href="#overview" className="es-button es-button-blue">See the problem we remove</a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Discuss this with your data</Link>}
      visual={visual}
    />
    <PageTabs links={[["#overview", "The problem"], ["#use-cases", "How it runs"], ["#outcomes", "What you will see"], ["#capabilities", "What it owns"], ["#related", "Related"]]} />
    <section className="es-section" id="overview">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">The problem</span>
          <h2>{item.problem}</h2>
          <p>{item.summary} Built for {item.audience}. Working example: {item.scenario}.</p>
        </div>
        {visual}
      </div>
    </section>
    <section className="es-section es-section-soft" id="use-cases">
      <div className="es-container">
        <SectionHeading label="How it runs" title={`The ${item.name} path a buyer should recognise.`} ink />
        <div className="es-pictogram-grid">
          {item.steps.map(([title, copy], index) => {
            const icons = [ClipboardCheck, Workflow, Users2, FileCheck2];
            const StepIcon = icons[index] ?? Check;
            return <div className="es-pictogram" key={title}><StepIcon size={40} strokeWidth={1.25} className="es-pic" /><h3>{title}</h3><p>{copy}</p></div>;
          })}
        </div>
      </div>
    </section>
    <section className="es-section" id="outcomes">
      <div className="es-container">
        <SectionHeading label="What you will see" title="Measures taken from this record — against your baseline." copy="We do not invent a customer percentage. Discovery agrees the starting point; the software is built to move these numbers." ink />
        <div className="es-proof-grid es-proof-grid-3">
          {item.outcomes.map(([metric, detail]) => <ProofCard key={metric} kicker={item.name} title={detail} metric={metric} detail="Measured against your own operation." />)}
        </div>
      </div>
    </section>
    <section className="es-section es-section-tint" id="capabilities">
      <div className="es-container">
        <SectionHeading label="What it owns" title={item.kind === "industry" ? "The GigaOps modules this industry actually runs." : item.kind === "product" ? "What this product is responsible for." : "The record this module is responsible for."} />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {item.capabilities.map(([title, copy]) => (
            <div className="es-pictogram" key={title}>
              <Icon size={40} strokeWidth={1.25} className="es-pic" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {isSpeed && <section className="es-section" id="tour"><div className="es-container"><SectionHeading label="Product tour" title="Follow a screening route." ink /><SpeedExperience /></div></section>}
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="Related" title="What a buyer usually evaluates next." ink />
        <div className="es-tile-grid es-tile-grid-3">{related.map((entry) => <CatalogTile key={entry.path} item={entry} />)}</div>
      </div>
    </section>
    <ClosingCTA title={`Bring this ${item.name} process — and the tools you want it to replace.`} />
  </EnterpriseShell>;
}

export function CompanyPage({ page }: { page: "about" | "jobs" | "teams" | "contact" }) {
  const content = {
    about: { label: "About Gigasys", title: "We build GigaOps so a plant does not need a new stack for every site.", copy: "Gigasys Technologies Inc in the United States and Gigasys Technologies Pvt Ltd in India are the companies behind GigaOps — operations software assembled from modules you configure and reuse. SPEED is the life-sciences product on the same platform.", cards: [["What we build", "An operations platform: maintenance, workforce, materials, places, evidence — and SPEED for process-safety screening.", Building2], ["How we work", "Start with the operating record a site already struggles to keep: work orders, people, parts, or a route pack.", Workflow], ["Where we focus", "Manufacturing first. Then field, network, depot, facilities and lab operations on the same core.", Landmark]] as [string, string, LucideIcon][] },
    jobs: { label: "Careers", title: "Build software a plant can run, not a demo it can watch.", copy: "The work is product, engineering and the messy reality of sites: work orders, qualifications, stock and evidence. Tell us what you want to build.", cards: [["Product engineering", "Modules with contracts, persistence and a record someone can audit.", Settings2], ["Design", "Make a work order, a roster and a stores issue obvious under pressure.", Compass], ["Delivery", "Sit with operations people and turn their current tools into a path through GigaOps.", Users2]] as [string, string, LucideIcon][] },
    teams: { label: "Our teams", title: "People who understand both the module and the shift.", copy: "The useful decisions come from knowing what a planner, a technician and a controller each need from the same record.", cards: [["Product", "Name the job, the owner and the evidence the module must keep.", Compass], ["Engineering", "Kernel, modules and the contracts that stop one site becoming a fork.", Settings2], ["Customer work", "Configuration, industry packs and the baseline you will actually measure.", Users2]] as [string, string, LucideIcon][] },
    contact: { label: "Contact", title: "Bring a site, a process and the tools you want to retire.", copy: "Tell us whether you are evaluating GigaOps for a plant, SPEED for process safety, or another Gigasys product. We will put the right people on the conversation.", cards: [["Plant walkthrough", "Work orders, roster and stores — mapped to the GigaOps record.", Play], ["SPEED conversation", "A route, a gate, and whether desk screening is the gap.", FlaskConical], ["Implementation", "Industry pack, integrations and what must be true before go-live.", BriefcaseBusiness]] as [string, string, LucideIcon][] },
  }[page];
  const offices = [
    { entity: "Gigasys Technologies Inc", city: "Dover, Delaware", line1: "8 The Green, Suite B", line2: "Dover, DE 19901, USA" },
    { entity: "Gigasys Technologies Pvt Ltd", city: "Hyderabad, India", line1: "103, New Mark House, Patrika Nagar", line2: "HITEC City, Hyderabad, Telangana 500081, India" },
    { entity: "Gigasys Technologies Pvt Ltd", city: "Ongole, India", line1: "05-E-Zone, Maruthi Nagar, Kurnool Road (O)", line2: "Prakasam District, Ongole, Andhra Pradesh 523002, India" },
  ];
  useEffect(() => { document.title = `${page === "jobs" ? "Careers" : page[0].toUpperCase() + page.slice(1)} | GigaOps`; }, [page]);
  return <EnterpriseShell>
    <Leadspace
      kicker={<span className="es-kicker">{content.label}</span>}
      title={content.title}
      copy={content.copy}
      primary={<a href="mailto:connect@gigasystech.com" className="es-button es-button-blue">Email our team <Mail size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/gigaops" className="es-button es-button-outline">Explore GigaOps</Link>}
      visual={<SceneCompany />}
    />
    {page === "about" && <section className="es-section es-section-soft"><div className="es-container"><div className="es-facts"><div className="es-fact"><strong>3</strong><span>Offices in the US and India</span></div><div className="es-fact"><strong>1</strong><span>Operations platform — GigaOps</span></div><div className="es-fact"><strong>1st</strong><span>Industry solution: manufacturing</span></div></div></div></section>}
    {page === "jobs" && (
      <PeopleSpotlight
        src={fieldCrew}
        alt="A site supervisor with a tablet walking a crew through the work in front of them"
        label="Life at Gigasys"
        title="You will sit with the plant, the lab and the review — not only with a backlog."
        copy="Engineering, design and delivery share one operating problem: make the next action obvious under pressure."
      />
    )}
    <section className="es-section">
      <div className="es-container">
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {content.cards.map(([title, copy, Icon]) => <div className="es-pictogram" key={title}><Icon size={40} strokeWidth={1.25} className="es-pic" /><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>
    {(page === "about" || page === "contact") && <section className="es-section es-section-soft"><div className="es-container"><SectionHeading label="Locations" title="Two companies. Three offices." copy="Gigasys Technologies Inc in the United States. Gigasys Technologies Pvt Ltd in India." ink /><div className="es-office-list">{offices.map((office) => <div className="es-office" key={office.city}><MapPin size={24} strokeWidth={1.5} color="#0f62fe" /><h3>{office.city}</h3><p>{office.line1}<br />{office.line2}</p><small>{office.entity}</small></div>)}</div><div className="es-direct-contact"><a href="mailto:connect@gigasystech.com"><Mail size={16} strokeWidth={1.5} /> connect@gigasystech.com</a><a href="tel:+916303162096">+91-6303162096</a></div></div></section>}
    <ClosingCTA />
  </EnterpriseShell>;
}
