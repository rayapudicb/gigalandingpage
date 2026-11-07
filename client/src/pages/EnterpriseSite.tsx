import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Activity, ArrowRight, BarChart3, Bot, Boxes, BriefcaseBusiness, Building2,
  Check, ChevronDown, ChevronRight, ClipboardCheck, Code2, Compass, Cpu, Database,
  Factory, FileCheck2, FileSignature, FlaskConical, HardHat, HeartPulse,
  Landmark, Layers3, Leaf, Mail, MapPin, Menu, MessageSquare, Monitor,
  Pause, Play, Repeat2, ScanLine, Settings2, ShieldCheck, ShoppingBag, Smartphone, Sparkles,
  Store, Truck, Trophy, Users2, Wifi, WifiOff, Workflow, Wrench, X, Zap, type LucideIcon,
} from "lucide-react";
import Logo from "@/assets/logo.svg";
import colleaguesReview from "@/assets/industry/colleagues-review.jpg";
import engineeringTeam from "@/assets/industry/engineering-team.jpg";
import industrialEngineer from "@/assets/industry/industrial-engineer.jpg";
import labScientist from "@/assets/industry/lab-scientist.jpg";
import { applyMailto, openings } from "@/data/openings";
import { careerHero, careerLife, consultingCapabilityPhotos, consultingPhoto, frontlinePhoto, photoByPath } from "@/data/solutionPhotos";
import { digitalProducts, enterpriseProducts, industries, modules, products, solutionByPath, specialistModules, type Solution } from "@/data/solutions";
import { SpeedExperience } from "./EnterpriseDemos";
import { SceneCompany, SceneIndustry, SceneModule } from "./enterpriseIllustrations";
import { WorkflowCarousel } from "./WorkflowCarousel";
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
  "/products/nyr": Compass, "/products/mypint": Store,
  "/products/swappy": Repeat2, "/products/gigacrm": BriefcaseBusiness,
  "/products/gigaai": Sparkles, "/industries/pharma": FlaskConical,
  "/industries/manufacturing": Factory, "/industries/retail": ShoppingBag,
  "/industries/agriculture": Leaf, "/industries/sports": Trophy, "/industries/energy": Zap,
  "/industries/healthcare": HeartPulse, "/industries/transport": Truck,
  "/industries/construction": HardHat,
};

const demoPaths = ["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/products/speed"];
const platformMenuPaths = [
  "/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/gigaops/manufacturing",
  "/gigaops/procurement", "/gigaops/finance", "/gigaops/iot", "/gigaops/geospatial",
  "/gigaops/documents", "/gigaops/analytics", "/gigaops/automation", "/products/speed",
];
function solutionsFrom(paths: string[]) {
  return paths.map((path) => solutionByPath.get(path)).filter((item): item is Solution => Boolean(item));
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
            <Link href="/consulting" className="es-nav-simple" onClick={close}>Consulting</Link>
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
          <Link href="/consulting" onClick={close}>Consulting <ArrowRight size={15} strokeWidth={1.5} /></Link>
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
          <div><strong>Platform</strong><Link href="/gigaops">GigaOps</Link><Link href="/gigaops/maintenance">Asset & Maintenance</Link><Link href="/gigaops/workforce">Workforce</Link><Link href="/gigaops/inventory">Inventory</Link><Link href="/platform/mobile">Frontline</Link></div>
          <div><strong>Products</strong><Link href="/gigaops">GigaOps</Link><Link href="/products/speed">SPEED</Link><Link href="/products/mypint">MyPint</Link><Link href="/products">Explore all</Link></div>
          <div><strong>Company</strong><Link href="/about">About</Link><Link href="/jobs">Careers</Link><Link href="/consulting">Consulting</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
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
  const photo = photoByPath[item.path];
  const showPhoto = Boolean(photo) && (item.kind === "industry" || item.kind === "product");
  return (
    <Link href={item.path} className={showPhoto ? "es-tile es-tile-photo" : "es-tile"}>
      {showPhoto && photo && (
        <span className="es-tile-media">
          <img src={photo.src} alt="" />
          <span className="es-tile-icon"><SolutionIcon path={item.path} size={18} /></span>
        </span>
      )}
      <strong>{item.name}</strong>
      <p>{item.summary}</p>
      <div className="es-tile-foot">
        <small>{item.category}</small>
        {!showPhoto && <SolutionIcon path={item.path} size={32} />}
      </div>
    </Link>
  );
}

function LeadPhoto({ src, alt, path }: { src: string; alt: string; path?: string }) {
  return (
    <div className="es-lead-photo">
      <img src={src} alt={alt} />
      {path && <span className="es-lead-photo-icon"><SolutionIcon path={path} size={22} /></span>}
    </div>
  );
}

function solutionVisual(item: Solution) {
  const photo = photoByPath[item.path];
  if (photo) return <LeadPhoto src={photo.src} alt={photo.alt} path={item.path} />;
  const Icon = iconByPath[item.path] ?? Layers3;
  return item.kind === "industry" ? <SceneIndustry /> : <SceneModule Icon={Icon} />;
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
  { icon: MapPin, title: "Punch on site", copy: "Hours on a named person.", pos: "ml" },
  { icon: Boxes, title: "Stores issue", copy: "Reserve, pick, issue.", pos: "mr" },
  { icon: FileSignature, title: "Sign-off", copy: "Close on the record.", pos: "bl" },
  { icon: WifiOff, title: "Offline queue", copy: "Draft until receipt.", pos: "br" },
];

const frontlineCapabilities: { title: string; copy: string; href: string; icon: LucideIcon }[] = [
  { title: "Operator rounds", copy: "A completed route with readings at the checkpoint — not a paper tick that never hit the asset.", href: "/gigaops/maintenance", icon: ClipboardCheck },
  { title: "Work orders", copy: "The same job the planner opened: asset, tasks, parts and close-out on the device.", href: "/gigaops/maintenance", icon: Wrench },
  { title: "Assigned work", copy: "The live job on a named person — not a printed list they left in the cabin.", href: "/gigaops/workforce", icon: Users2 },
  { title: "Punch on site", copy: "Hours on a named person, on the place. Time that payroll can export.", href: "/gigaops/workforce", icon: MapPin },
  { title: "Qualified to start", copy: "Skills on the person. The job will not start if they are not qualified to finish it.", href: "/gigaops/workforce", icon: ShieldCheck },
  { title: "Stores issues", copy: "Issue reserved parts against the job — the bin movement the ledger will defend.", href: "/gigaops/inventory", icon: Boxes },
  { title: "Barcode identity", copy: "The right asset and the right part, scanned at the point of work.", href: "/gigaops/inventory", icon: ScanLine },
  { title: "Meter readings", copy: "A reading written to the meter. Condition that can start the next job.", href: "/gigaops/maintenance", icon: Activity },
  { title: "Evidence on close-out", copy: "Photo, checklist and the place — attached to the work, not parked on a phone.", href: "/gigaops/documents", icon: FileCheck2 },
  { title: "Digital sign-off", copy: "The job is accepted on the record. Close-out is not a clipboard at the gate.", href: "/gigaops/documents", icon: FileSignature },
  { title: "Raise a defect", copy: "A breakdown writes a work order from the floor, not a WhatsApp thread.", href: "/gigaops/maintenance", icon: Repeat2 },
  { title: "Offline queue", copy: "If the plant has no signal, drafts wait until GigaOps accepts them.", href: "/platform/mobile", icon: WifiOff },
];

const syncFlow: { icon: LucideIcon; label: string }[] = [
  { icon: Wifi, label: "Online" },
  { icon: WifiOff, label: "Offline queue" },
  { icon: Monitor, label: "Web sync" },
];

function StaticSyncFlow() {
  return (
    <div className="es-flow-carousel es-flow-static" role="img" aria-label="Online completion, offline queue, then web sync to GigaOps">
      <div className="es-flow-head">
        <strong>Device to desk</strong>
        <p>Online they receipt. Offline they queue. The web user sees the same GigaOps record.</p>
      </div>
      <div className="es-flow-track">
        {syncFlow.map((step, index) => {
          const Icon = step.icon;
          return (
            <Fragment key={step.label}>
              {index > 0 && <div className="es-flow-link is-on"><span /></div>}
              <div className="es-flow-step is-active">
                <span className="es-flow-disc"><Icon size={26} strokeWidth={1.5} /></span>
                <span className="es-flow-tick-slot" />
                <small>{step.label}</small>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

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
  visual?: React.ReactNode;
}) {
  return (
    <section className="es-lead">
      <div className="es-container">
        {breadcrumb}
        {!breadcrumb && kicker && <div className="es-kicker-row">{kicker}{extra}</div>}
        <div className={visual ? "es-lead-grid" : undefined}>
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

function FeatureAnnounce({
  src, alt, kicker, title, href, listLabel, items,
}: {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  href: string;
  listLabel: string;
  items: [string, string][];
}) {
  return (
    <div className="es-announce">
      <div className="es-announce-media">
        <img src={src} alt={alt} />
        <Link href={href} className="es-announce-card">
          <small>{kicker}</small>
          <h3>{title}</h3>
          <span><ArrowRight size={20} strokeWidth={1.5} /></span>
        </Link>
      </div>
      <nav className="es-announce-list" aria-label={listLabel}>
        <h3>{listLabel}</h3>
        {items.map(([label, to]) => (
          to.startsWith("#")
            ? <a href={to} key={label}>{label}<ArrowRight size={16} strokeWidth={1.5} /></a>
            : <Link href={to} key={label}>{label}<ArrowRight size={16} strokeWidth={1.5} /></Link>
        ))}
      </nav>
    </div>
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

const consultingCapabilities: {
  id: string;
  icon: LucideIcon;
  title: string;
  copy: string;
  href: string;
  link: string;
  photo: { src: string; alt: string };
}[] = [
  {
    id: "architecture", icon: Layers3, title: "Architecture",
    copy: "Design how GigaOps modules compose for the site: work, people, parts, places and evidence as one record. Connect what you keep. Do not stand up a second stack beside it.",
    href: "/gigaops", link: "See the GigaOps platform", photo: consultingCapabilityPhotos.architecture,
  },
  {
    id: "industries", icon: Factory, title: "Industries",
    copy: "Manufacturing is the first packaged solution. Plant, store, depot, ward or field — the vocabulary changes. The modules do not fork for the next site.",
    href: "/industries", link: "Explore industry packs", photo: consultingCapabilityPhotos.industries,
  },
  {
    id: "integration", icon: Zap, title: "Integration",
    copy: "Connector Hub keeps the systems that still earn their place — historian, payroll, stores, finance — talking to the operating record. Every handoff has an owner and a journal. We do not invent a second stack beside yours.",
    href: "/gigaops/data", link: "See Data & Integration", photo: consultingCapabilityPhotos.integration,
  },
  {
    id: "customisation", icon: Settings2, title: "Customisation",
    copy: "Industry packs, places, skills, workflows and rules. Configure how the site runs. Do not fork the product when the next plant, depot or ward comes online.",
    href: "/gigaops", link: "How configuration works", photo: consultingCapabilityPhotos.customisation,
  },
  {
    id: "frontline", icon: Smartphone, title: "Frontline operations",
    copy: "One Frontline app for the crew: rounds, work orders, punch, stores and sign-off write to GigaOps. Online they receipt immediately. Offline they queue until the plant accepts them.",
    href: "/platform/mobile", link: "Explore Frontline", photo: consultingCapabilityPhotos.frontline,
  },
  {
    id: "evidence", icon: FileCheck2, title: "Evidence and close-out",
    copy: "Checklists, photos, meters and signatures stay on the work they explain. Documents and e-sign are not a share drive the auditor has to hunt. Close-out is a receipt on the record.",
    href: "/gigaops/documents", link: "See documents and evidence", photo: consultingCapabilityPhotos.evidence,
  },
  {
    id: "process-safety", icon: FlaskConical, title: "Process safety",
    copy: "SPEED screens a chemistry route at the desk before it is politically locked. Energetic and thermal risk on the same platform as the plant record — not a paper pack in a drawer.",
    href: "/products/speed", link: "Explore SPEED", photo: consultingCapabilityPhotos.processSafety,
  },
  {
    id: "lifecycle", icon: Workflow, title: "End-to-end product lifecycle",
    copy: "Walk the site, configure the pack, go-live on the same record the crew writes to, then operate and improve. Discovery, delivery and the live operation are one path.",
    href: "/contact", link: "Start with a walkthrough", photo: consultingCapabilityPhotos.lifecycle,
  },
  {
    id: "ai", icon: Sparkles, title: "AI-driven design",
    copy: "Assisted operations on the GigaOps record: retrieval, classification, a handoff with context. Design the next action so it is obvious under pressure — not a chatbot that invents a work order.",
    href: "/products/gigaai", link: "See Giga AI", photo: consultingCapabilityPhotos.ai,
  },
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
    useEffect(() => { document.title = "GigaOps | Operations software you configure per site"; }, []);
  return <EnterpriseShell>
    <div className="es-home-fold">
      <Leadspace
        kicker={<span className="es-kicker">GigaOps</span>}
        title="Close the operation as one record — not five systems."
        copy="GigaOps is the operating platform for work, people, parts and evidence. You configure how a site runs. You do not rebuild the software for the next plant, depot, ward or field."
        primary={<Link href="/gigaops" className="es-button es-button-blue">Explore GigaOps <ArrowRight size={16} strokeWidth={1.5} /></Link>}
        secondary={<Link href="/contact" className="es-button es-button-outline">Talk about your operation</Link>}
        visual={<WorkflowCarousel />}
      />
      <section className="es-frontline-punch" id="mobile">
        <div className="es-container es-lead-grid">
          <div>
            <span className="es-overline">Frontline</span>
            <h2>Tablet and phone. Online completion. Offline queue.</h2>
            <p>GigaOps mobile stores the workforce journeys — assigned work, punch and defects in the pocket. If the plant has no signal, drafts wait until GigaOps accepts them.</p>
          </div>
          <StaticSyncFlow />
        </div>
      </section>
    </div>
    <section className="es-section es-section-follow" id="journeys">
      <div className="es-container">
        <FeatureAnnounce
          src={frontlinePhoto.src}
          alt={frontlinePhoto.alt}
          kicker="Frontline"
          title="One app for the floor. The record stays in GigaOps."
          href="/platform/mobile"
          listLabel="Mobility journeys"
          items={frontlineCapabilities.map((item) => [item.title, item.href] as [string, string])}
        />
      </div>
    </section>
    <section className="es-section" id="overview">
      <div className="es-container">
        <SectionHeading label="What we solve" title="The jobs that currently live in the wrong tools." copy="Work with no owner. Hours that never bill. Stock that lies. A chemistry route that is still a paper pack." />
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
        <SectionHeading label="How a day actually runs" title="From a broken asset to a number you can defend." copy="Same loop. Plant, depot, ward or field — the pack changes the words, not the modules." ink />
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
            <div className="es-direction-body"><span>03 / First pack</span><h3>Manufacturing</h3><p>The first packaged solution: plant work, people, parts and MRP on one record.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft" id="consulting">
      <div className="es-container">
        <FeatureAnnounce
          src={consultingPhoto.src}
          alt={consultingPhoto.alt}
          kicker="Consulting"
          title="Architecture, packs, Frontline, integration and a live record — not a slide that leaves with us."
          href="/consulting"
          listLabel="Explore consulting"
          items={consultingCapabilities.map((item) => [item.title, `/consulting#${item.id}`] as [string, string])}
        />
      </div>
    </section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function MobilePage() {
  useEffect(() => { document.title = "Frontline | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><Link href="/gigaops">GigaOps</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Frontline</span></div>}
      title="Rounds, work orders and stores — written from the floor, stored in GigaOps."
      copy="Frontline is one app for the crew. A technician, operator or stores person writes to the same record the plant already runs. Online they receipt immediately. If the plant has no signal, drafts queue until GigaOps accepts them."
      primary={<a href="#capabilities" className="es-button es-button-blue">See the journeys <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Discuss field operations</Link>}
      visual={<FieldMobileScene compact />}
    />
    <PageTabs links={[["#overview", "Overview"], ["#capabilities", "Mobility journeys"], ["#related", "System of record"]]} />
    <section className="es-section" id="overview">
      <div className="es-container">
        <div className="es-split-copy">
          <span className="es-overline">The problem</span>
          <h2>Paper rounds, clipboard nameplates and WhatsApp breakdowns.</h2>
          <p>The owning GigaOps module remains the source of truth. Frontline shows the permitted task and returns a receipt when the action is accepted. If the plant has no signal, drafts queue until that receipt exists.</p>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading
          label="Frontline"
          title="Mobility journeys"
          copy="What a crew writes from the floor. One app — online receipt or queued until GigaOps accepts it."
          ink
        />
        <div className="es-pictogram-grid">
          {frontlineCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} className="es-pictogram" key={item.title}>
                <Icon size={40} strokeWidth={1.25} className="es-pic" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span>Explore <ArrowRight size={16} strokeWidth={1.5} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="System of record" title="Frontline writes to these modules. It does not replace them." ink />
        <div className="es-tile-grid es-tile-grid-3">
          {["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory"].map((path) => <CatalogTile key={path} item={solutionByPath.get(path)!} />)}
        </div>
      </div>
    </section>
    <ClosingCTA title="Bring the round, the job or the stores window the crew writes from the floor." />
  </EnterpriseShell>;
}

export function ProductIndexPage() {
  useEffect(() => { document.title = "Products | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Products</span></div>}
      title="Two enterprise products. A clear job for each."
      copy="GigaOps is the operations platform for plants and field organizations. SPEED is process-safety screening for chemistry that has not yet reached the plant. Other Gigasys products sit beside that suite — they are not plant modules."
      visual={<LeadPhoto src={photoByPath["/gigaops"].src} alt={photoByPath["/gigaops"].alt} path="/gigaops" />}
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
        <SectionHeading label="Also from Gigasys" title="Focused products, separate from the operations suite." copy="Retail rewards, community, entitlements and revenue sit here. They are not substitutes for GigaOps maintenance or workforce." ink />
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
      copy="Manufacturing is the first packaged GigaOps solution. Retail, labs, networks, depots, sites, facilities, fields and venues configure places, skills and defaults on the same operating core."
      primary={<Link href="/industries/manufacturing" className="es-button es-button-blue">Start with manufacturing</Link>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Talk about your industry</Link>}
      visual={<LeadPhoto src={photoByPath["/industries/manufacturing"].src} alt={photoByPath["/industries/manufacturing"].alt} path="/industries/manufacturing" />}
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
      title="Configure how the operation runs. Do not rebuild it for every site."
      copy="GigaOps is the operations suite: maintenance, workforce, inventory, procurement, manufacturing, places, evidence and analytics. Each module owns its record. Together they give the next person a job they can actually finish."
      primary={<a href="#modules" className="es-button es-button-blue">See the modules <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Talk about a site</Link>}
      visual={<LeadPhoto src={photoByPath["/gigaops"].src} alt={photoByPath["/gigaops"].alt} path="/gigaops" />}
    />
    <PageTabs links={[["#overview", "The problem"], ["#capabilities", "How it is assembled"], ["#modules", "Modules"], ["#tour", "Product tour"]]} />
    <section className="es-section" id="overview">
      <div className="es-container">
        <div className="es-split-copy">
          <span className="es-overline">The problem</span>
          <h2>CMMS, stores, the shift board, WhatsApp and finance do not share a record.</h2>
          <p>A second plant usually means a second stack. GigaOps is built so you select modules, apply an industry pack, and keep evidence on the work — instead of copying screens for the next customer.</p>
        </div>
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
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><Link href={parent.href}>{parent.label}</Link><ChevronRight size={13} strokeWidth={1.5} /><span>{item.name}</span></div>}
      title={item.headline}
      copy={item.summary}
      primary={<a href="#overview" className="es-button es-button-blue">See the problem we remove</a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Discuss this with your data</Link>}
      visual={solutionVisual(item)}
    />
    <PageTabs links={[["#overview", "The problem"], ["#use-cases", "How it runs"], ["#outcomes", "What you will see"], ["#capabilities", "What it owns"], ["#related", "Related"]]} />
    <section className="es-section" id="overview">
      <div className="es-container">
        <div className="es-split-copy">
          <span className="es-overline">The problem</span>
          <h2>{item.problem}</h2>
          <p>{item.summary} Built for {item.audience}. Working example: {item.scenario}.</p>
        </div>
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
          {item.capabilities.map(([title, copy], index) => {
            const CapIcon = iconByPath[item.related[index]] ?? Icon;
            return (
              <div className="es-pictogram" key={title}>
                <CapIcon size={40} strokeWidth={1.25} className="es-pic" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            );
          })}
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

const careerAreas: [string, string, LucideIcon][] = [
  ["Engineering", "MERN and the contracts a plant can audit.", Code2],
  ["Quality", "Break what operations cannot afford to ship.", ClipboardCheck],
  ["Product", "Turn a site's current tools into a path through GigaOps.", Compass],
  ["People", "Hiring and onboarding for a company that ships to sites.", Users2],
  ["Go to market", "Sell the operating record, not a feature list.", BriefcaseBusiness],
  ["Applied AI", "Assistance on the GigaOps record — not a second system.", Bot],
];

function CareersPage() {
  useEffect(() => { document.title = "Careers | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Careers</span></div>}
      title="Build software a plant can run, not a demo it can watch."
      copy="The work is product, engineering and the messy reality of sites: work orders, qualifications, stock and evidence. Six openings. Apply by mail — we read what you send."
      primary={<a href="#openings" className="es-button es-button-blue">Find openings <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<a href="mailto:connect@gigasystech.com" className="es-button es-button-outline">Email hiring <Mail size={16} strokeWidth={1.5} /></a>}
      visual={<LeadPhoto src={careerHero.src} alt={careerHero.alt} />}
    />
    <section className="es-section">
      <div className="es-container">
        <SectionHeading label="Career areas" title="Bring a craft. The operating problem is shared." copy="From software engineering to sales, the useful work is making the next action obvious under pressure." ink />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {careerAreas.map(([title, copy, Icon]) => <div className="es-pictogram" key={title}><Icon size={40} strokeWidth={1.25} className="es-pic" /><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft" id="openings">
      <div className="es-container">
        <SectionHeading label="Open roles" title="Six seats. Apply in the mail with a CV." copy="Hyderabad. Hybrid where the work allows it. We do not run a black-hole ATS — connect@gigasystech.com is the inbox." ink />
        <div className="es-job-list">
          {openings.map((job) => (
            <article className="es-job" key={job.id}>
              <div>
                <h3>{job.title}</h3>
                <p>{job.summary}</p>
                <small>{job.team} · {job.location} · {job.type}</small>
              </div>
              <a className="es-button es-button-blue" href={applyMailto(job.title)}>Apply by mail <Mail size={16} strokeWidth={1.5} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
    <PeopleSpotlight
      src={careerLife.src}
      alt={careerLife.alt}
      label="Life at Gigasys"
      title="You will sit with the plant, the lab and the review — not only with a backlog."
      copy="Engineering, design, quality and delivery share one operating problem: make the next action obvious under pressure."
    />
    <section className="es-section">
      <div className="es-container">
        <SectionHeading label="How to apply" title="Mail is the application." copy="Use the role button so the subject line is already filled. Attach a CV. Say which site problem you want to work on." />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          <div className="es-pictogram"><Mail size={40} strokeWidth={1.25} className="es-pic" /><h3>1 · Open the role</h3><p>The apply button writes to connect@gigasystech.com with the job in the subject.</p></div>
          <div className="es-pictogram"><FileCheck2 size={40} strokeWidth={1.25} className="es-pic" /><h3>2 · Send a CV</h3><p>A PDF or a LinkedIn URL is enough. We do not ask you to rebuild your life in a portal.</p></div>
          <div className="es-pictogram"><Users2 size={40} strokeWidth={1.25} className="es-pic" /><h3>3 · Talk to the team</h3><p>If the craft fits, you will speak with the people who own the module — not a screening script.</p></div>
        </div>
      </div>
    </section>
    <ClosingCTA title="If none of the six is the seat, still write — tell us the craft." />
  </EnterpriseShell>;
}

export function ConsultingPage() {
  useEffect(() => { document.title = "Consulting | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Consulting</span></div>}
      title="From architecture to a live operating record."
      copy="Gigasys consulting designs how a site runs on GigaOps: the architecture, the industry pack, the connectors you keep, Frontline for the crew, evidence on close-out, SPEED for process safety, and AI that sits on the same record. We do not rent a hundred-thousand-person bench. We sit with the operation until the crew writes to it."
      primary={<Link href="/contact" className="es-button es-button-blue">Talk about a programme <ArrowRight size={16} strokeWidth={1.5} /></Link>}
      secondary={<a href="#capabilities" className="es-button es-button-outline">Explore capabilities</a>}
    />
    <section className="es-section" id="capabilities">
      <div className="es-container">
        <FeatureAnnounce
          src={consultingPhoto.src}
          alt={consultingPhoto.alt}
          kicker="How we deliver"
          title="Lasting capability on your record — not a slide that leaves with us."
          href="/contact"
          listLabel="Explore capabilities"
          items={consultingCapabilities.map((item) => [item.title, `#${item.id}`] as [string, string])}
        />
      </div>
    </section>
    {consultingCapabilities.map((item, index) => {
      const Icon = item.icon;
      return (
        <section className={index % 2 === 0 ? "es-section es-section-soft" : "es-section"} id={item.id} key={item.id}>
          <div className="es-container">
            <div className={index % 2 === 1 ? "es-cap is-flip" : "es-cap"}>
              <div className="es-cap-copy">
                <span className="es-overline">{String(index + 1).padStart(2, "0")} / {item.title}</span>
                <h2 className="is-ink">{item.title}</h2>
                <p>{item.copy}</p>
                <Link href={item.href} className="es-button es-button-blue">{item.link} <ArrowRight size={16} strokeWidth={1.5} /></Link>
              </div>
              <div className="es-cap-photo">
                <img src={item.photo.src} alt={item.photo.alt} />
                <span className="es-cap-icon"><Icon size={22} strokeWidth={1.5} /></span>
              </div>
            </div>
          </div>
        </section>
      );
    })}
    <section className="es-section es-section-soft">
      <div className="es-container">
        <SectionHeading label="The path" title="From a walkthrough to a live record." ink />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          <div className="es-pictogram"><ClipboardCheck size={40} strokeWidth={1.25} className="es-pic" /><h3>1 · Walk the site</h3><p>Work orders, roster and stores. Name the tools you want to retire — and the ones that still earn their place.</p></div>
          <div className="es-pictogram"><Settings2 size={40} strokeWidth={1.25} className="es-pic" /><h3>2 · Configure the pack</h3><p>Architecture, connectors, Frontline and the rules a site actually runs. Not a fork for the next plant.</p></div>
          <div className="es-pictogram"><FileCheck2 size={40} strokeWidth={1.25} className="es-pic" /><h3>3 · Go live on the record</h3><p>Discovery agrees the baseline. The crew writes to the same GigaOps record you designed.</p></div>
        </div>
      </div>
    </section>
    <ClosingCTA title="Bring a site map, a crew list and the tools you want to retire." />
  </EnterpriseShell>;
}

export function CompanyPage({ page }: { page: "about" | "jobs" | "teams" | "contact" }) {
  if (page === "jobs") return <CareersPage />;
  const content = {
    about: { label: "About Gigasys", title: "We build GigaOps so a plant does not need a new stack for every site.", copy: "Gigasys Technologies Inc in the United States and Gigasys Technologies Pvt Ltd in India are the companies behind GigaOps — operations software assembled from modules you configure and reuse. SPEED is the life-sciences product on the same platform.", cards: [["What we build", "An operations platform: maintenance, workforce, materials, places, evidence — and SPEED for process-safety screening.", Building2], ["How we work", "Start with the operating record a site already struggles to keep: work orders, people, parts, or a route pack.", Workflow], ["Where we focus", "Manufacturing first. Then field, network, depot, facilities and lab operations on the same core.", Landmark]] as [string, string, LucideIcon][] },
    teams: { label: "Our teams", title: "People who understand both the module and the shift.", copy: "The useful decisions come from knowing what a planner, a technician and a controller each need from the same record.", cards: [["Product", "Name the job, the owner and the evidence the module must keep.", Compass], ["Engineering", "Kernel, modules and the contracts that stop one site becoming a fork.", Settings2], ["Customer work", "Configuration, industry packs and the baseline you will actually measure.", Users2]] as [string, string, LucideIcon][] },
    contact: { label: "Contact", title: "Bring a site, a process and the tools you want to retire.", copy: "Tell us whether you are evaluating GigaOps for a plant, SPEED for process safety, or another Gigasys product. We will put the right people on the conversation.", cards: [["Plant walkthrough", "Work orders, roster and stores — mapped to the GigaOps record.", Play], ["SPEED conversation", "A route, a gate, and whether desk screening is the gap.", FlaskConical], ["Implementation", "Industry pack, integrations and what must be true before go-live.", BriefcaseBusiness]] as [string, string, LucideIcon][] },
  }[page];
  const offices = [
    { entity: "Gigasys Technologies Inc", city: "Dover, Delaware", line1: "8 The Green, Suite B", line2: "Dover, DE 19901, USA" },
    { entity: "Gigasys Technologies Pvt Ltd", city: "Hyderabad, India", line1: "103, New Mark House, Patrika Nagar", line2: "HITEC City, Hyderabad, Telangana 500081, India" },
    { entity: "Gigasys Technologies Pvt Ltd", city: "Ongole, India", line1: "05-E-Zone, Maruthi Nagar, Kurnool Road (O)", line2: "Prakasam District, Ongole, Andhra Pradesh 523002, India" },
  ];
  useEffect(() => { document.title = `${page[0].toUpperCase() + page.slice(1)} | GigaOps`; }, [page]);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>{content.label}</span></div>}
      title={content.title}
      copy={content.copy}
      primary={<a href="mailto:connect@gigasystech.com" className="es-button es-button-blue">Email our team <Mail size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/gigaops" className="es-button es-button-outline">Explore GigaOps</Link>}
      visual={<SceneCompany />}
    />
    {page === "about" && <section className="es-section es-section-soft"><div className="es-container"><div className="es-facts"><div className="es-fact"><strong>3</strong><span>Offices in the US and India</span></div><div className="es-fact"><strong>1</strong><span>Operations platform — GigaOps</span></div><div className="es-fact"><strong>1st</strong><span>Industry solution: manufacturing</span></div></div></div></section>}
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
