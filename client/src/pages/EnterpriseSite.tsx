import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Activity, ArrowRight, BarChart3, Boxes, BriefcaseBusiness, Building2,
  Check, ChevronDown, ChevronRight, ClipboardCheck, Compass, Database,
  Factory, FileCheck2, FileSignature, FlaskConical, HardHat, HeartPulse,
  Landmark, Layers3, Leaf, Mail, MapPin, Menu, MessageSquare, Monitor,
  Pause, Play, Repeat2, Settings2, ShieldCheck, Smartphone, Sparkles,
  Truck, Trophy, Users2, Wifi, WifiOff, Workflow, Wrench, X, Zap, type LucideIcon,
} from "lucide-react";
import Logo from "@/assets/logo.svg";
import { industries, moduleStages, modules, products, solutionByPath, specialistModules, type Solution } from "@/data/solutions";
import { SpeedExperience } from "./EnterpriseDemos";
import { SceneCompany, SceneConnectedWork, SceneIndustry, SceneMobile, SceneModule, ScenePlatform } from "./enterpriseIllustrations";
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
  "/industries/manufacturing": Factory, "/industries/agriculture": Leaf,
  "/industries/sports": Trophy, "/industries/energy": Zap,
  "/industries/healthcare": HeartPulse, "/industries/transport": Truck,
  "/industries/construction": HardHat,
};

const demoPaths = ["/products/speed", "/gigaops/automation", "/gigaops/finance", "/gigaops/workforce"];
const mobileRoadmapPaths = new Set(["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory", "/gigaops/product-catalogue"]);

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
          <Link href="/" className="es-brand" aria-label="GigaOps home" onClick={close}>
            <img src={Logo} alt="" /><span>GigaOps</span>
          </Link>
          <nav className="es-nav" aria-label="Main navigation" ref={navRef}>
            {groups.map((group) => (
              <div className="es-nav-item" key={group.key}>
                <button type="button" className={openDropdown === group.key ? "es-nav-trigger is-open" : "es-nav-trigger"}
                  onClick={() => setOpenDropdown(openDropdown === group.key ? null : group.key)}
                  aria-expanded={openDropdown === group.key} aria-controls={`menu-${group.key}`}>
                  {group.label}<ChevronDown size={14} strokeWidth={1.5} />
                </button>
                {openDropdown === group.key && (
                  <div className="es-mega" id={`menu-${group.key}`}>
                    <div className="es-mega-top"><span>{group.label}</span><Link href={group.lead} onClick={close}>{group.leadLabel}<ArrowRight size={15} strokeWidth={1.5} /></Link></div>
                    <MenuGroup title={group.key === "platform" ? "GigaOps modules" : group.label} items={group.items} close={close} />
                    {group.secondary.length > 0 && <MenuGroup title="Specialist modules" items={group.secondary} close={close} />}
                  </div>
                )}
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
            <div><Link href={group.lead} onClick={close}><ArrowRight size={17} strokeWidth={1.5} />{group.leadLabel}</Link>{[...group.items, ...group.secondary].map((item) => <Link href={item.path} key={item.path} onClick={close}><SolutionIcon path={item.path} size={17} />{item.name}</Link>)}</div>
          </details>)}
          <Link href="/about" onClick={close}>Company <ArrowRight size={15} strokeWidth={1.5} /></Link>
          <Link href="/contact" onClick={close}>Contact <ArrowRight size={15} strokeWidth={1.5} /></Link>
        </nav>}
      </header>
      <main>{children}</main>
      <footer className="es-footer">
        <div className="es-container es-footer-grid">
          <div><Link href="/" className="es-brand es-footer-brand"><img src={Logo} alt="" /><span>GigaOps</span></Link><p>Connected software for the work that runs your organization.</p><a href="mailto:connect@gigasystech.com">connect@gigasystech.com <ArrowRight size={14} strokeWidth={1.5} /></a></div>
          <div><strong>Platform</strong><Link href="/gigaops">GigaOps</Link><Link href="/platform/mobile">Mobile experiences</Link><Link href="/gigaops/automation">Workflow Studio</Link><Link href="/gigaops/data">Data & Integration</Link><Link href="/gigaops/analytics">Analytics</Link></div>
          <div><strong>Products</strong><Link href="/gigaops">GigaOps</Link><Link href="/products/speed">SPEED</Link><Link href="/products/textfly">TextFly</Link><Link href="/products">Explore all</Link></div>
          <div><strong>Company</strong><Link href="/about">About</Link><Link href="/jobs">Careers</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="es-container es-footer-bottom"><span>© {new Date().getFullYear()} Gigasys Technologies</span><span>Enterprise software, designed around action.</span></div>
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
        <small>{moduleStages[item.path] ?? item.category}</small>
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

function ClosingCTA({ title = "See how the work fits together." }: { title?: string }) {
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
  { kicker: "Asset & Maintenance", title: "Know what needs attention before an asset stops work.", metric: "Unplanned downtime", detail: "Hours lost to emergency work, measured against your baseline." },
  { kicker: "Inventory", title: "See every stock movement and the work it supports.", metric: "Stock accuracy", detail: "Physical counts compared with the recorded balance." },
  { kicker: "Workforce", title: "Get the right person to the right work.", metric: "Time to dispatch", detail: "Minutes from request to an accepted assignment." },
  { kicker: "SPEED", title: "See route risk before chemistry moves toward scale-up.", metric: "Screening cycle", detail: "Hours from submitted route to reviewed screen." },
];

const architecture = [
  { href: "/gigaops/data", icon: Zap, title: "Signal", copy: "A system or person reports what changed." },
  { href: "/gigaops/connector-hub", icon: Database, title: "Connect", copy: "Source and identity travel with the event." },
  { href: "/gigaops/ontology", icon: Layers3, title: "Context", copy: "Owning modules supply the permitted facts." },
  { href: "/gigaops/automation", icon: Workflow, title: "Route", copy: "Rules, ownership and approvals shape the next step." },
  { href: "/platform/mobile", icon: Smartphone, title: "Act", copy: "Each person sees the task in their workspace." },
  { href: "/gigaops/analytics", icon: BarChart3, title: "Prove", copy: "The outcome returns to the record and the measure." },
];

export function EnterpriseHome() {
    useEffect(() => { document.title = "GigaOps | Connected enterprise software"; }, []);
  return <EnterpriseShell>
    <Leadspace
      kicker={<span className="es-kicker">GigaOps</span>}
      title="When work changes, the right team already knows."
      copy="Connect maintenance, inventory, procurement, field work and finance around one record, so the next decision is already in front of the right person."
      primary={<Link href="/gigaops" className="es-button es-button-blue">Explore GigaOps <ArrowRight size={16} strokeWidth={1.5} /></Link>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Contact us</Link>}
      visual={<SceneConnectedWork />}
    />
    <section className="es-section" id="overview">
      <div className="es-container">
        <SectionHeading label="Recommended" title="Start with the work that matters." copy="Open a capability, not a screen. Each path is a job your teams already do." />
        <div className="es-pictogram-grid">
          <PictogramLink href="/gigaops/maintenance" icon={Wrench} title="Asset & Maintenance" copy="Bring asset records, planned work, parts and field execution into one work order." />
          <PictogramLink href="/gigaops/inventory" icon={Boxes} title="Inventory" copy="Connect catalogue, locations, receipts and issues to the work they support." />
          <PictogramLink href="/products/speed" icon={FlaskConical} title="SPEED" copy="Screen synthesis routes, keep findings visible and prepare a reviewable dossier." />
          <PictogramLink href="/industries" icon={Factory} title="Industries" copy="See how the same platform holds context for plant, field, venue and care work." />
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading label="How it works" title="From signal to verified action." copy="GigaOps connects source events, shared records, governed workflow, and a receipt when the work is done." ink />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {architecture.map((item) => (
            <PictogramLink key={item.title} href={item.href} icon={item.icon} title={item.title} copy={item.copy} />
          ))}
        </div>
      </div>
    </section>
    <section className="es-section" id="outcomes">
      <div className="es-container">
        <SectionHeading label="What you can measure" title="Make the improvement visible." copy="Agree a baseline in discovery. These are the operational measures the software is built to move." />
        <div className="es-proof-grid">{homeProof.map((card) => <ProofCard key={card.metric} {...card} />)}</div>
      </div>
    </section>
    <section className="es-section es-section-tint" id="mobile">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">Mobile</span>
          <h2>Enterprise work moves with your people.</h2>
          <p>Give field teams assigned work, asset context, procedures and evidence. Online completion first; controlled offline capture when the action is certified.</p>
          <div className="es-pictogram-grid es-pictogram-grid-1">
            <div className="es-pictogram"><Wifi size={32} strokeWidth={1.25} className="es-pic" /><h3>Online</h3><p>Current permissions, task updates and authoritative receipts.</p></div>
            <div className="es-pictogram"><WifiOff size={32} strokeWidth={1.25} className="es-pic" /><h3>Offline, when certified</h3><p>Encrypted drafts, visible queue status and conflict recovery after reconnection.</p></div>
          </div>
          <Link href="/platform/mobile" className="es-button es-button-blue">Explore mobile direction <ArrowRight size={16} strokeWidth={1.5} /></Link>
        </div>
        <SceneMobile />
      </div>
    </section>
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="Choose a direction" title="Go deeper where it matters." ink />
        <div className="es-direction-grid">
          <Link href="/gigaops" className="es-direction" id="modules">
            <div className="es-direction-body"><span>01 / Platform</span><h3>GigaOps</h3><p>Explore connected operations and the modules behind them.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
          <Link href="/products/speed" className="es-direction">
            <div className="es-direction-body"><span>02 / Specialist</span><h3>SPEED</h3><p>Follow a synthesis route from screening to safety review.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
          <Link href="/industries" className="es-direction" id="industries">
            <div className="es-direction-body"><span>03 / Industries</span><h3>Operating context</h3><p>See how products and modules connect for different teams.</p></div>
            <div className="es-direction-foot">Explore <ArrowRight size={18} strokeWidth={1.5} /></div>
          </Link>
        </div>
      </div>
    </section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function MobilePage() {
  useEffect(() => { document.title = "GigaOps Mobile | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      kicker={<span className="es-kicker">GigaOps / Mobile</span>}
      extra={<span className="es-stage">In development</span>}
      title="The right work, wherever your team is."
      copy="Extend GigaOps to iPhone, iPad and Android with role-scoped tasks, current context and a clear record of what happened."
      primary={<a href="#overview" className="es-button es-button-blue">Explore the direction <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Discuss field operations</Link>}
      visual={<SceneMobile />}
    />
    <PageTabs links={[["#overview", "Overview"], ["#capabilities", "Capabilities"], ["#related", "Related"]]} />
    <section className="es-section" id="overview">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">Overview</span>
          <h2>A native view of governed work.</h2>
          <p>The owning module remains the source of truth. Mobile presents the permitted task and returns a receipt when an action is accepted.</p>
        </div>
        <SceneMobile />
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading label="How mobile fits" title="See, capture, recover." ink />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          <div className="es-pictogram"><Smartphone size={40} strokeWidth={1.25} className="es-pic" /><h3>Know what is assigned.</h3><p>Work, place, asset, procedure and freshness appear together for the authorized person.</p></div>
          <div className="es-pictogram"><ClipboardCheck size={40} strokeWidth={1.25} className="es-pic" /><h3>Keep evidence with the task.</h3><p>Readings, photos and notes stay linked to the work that requires them.</p></div>
          <div className="es-pictogram"><ShieldCheck size={40} strokeWidth={1.25} className="es-pic" /><h3>Know what reached the server.</h3><p>Supported offline work is queued locally until the owning module returns a receipt.</p></div>
        </div>
      </div>
    </section>
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="Connected capabilities" title="Start with the work your people do." ink />
        <div className="es-tile-grid es-tile-grid-3">
          {["/gigaops/maintenance", "/gigaops/workforce", "/gigaops/inventory"].map((path) => <CatalogTile key={path} item={solutionByPath.get(path)!} />)}
        </div>
      </div>
    </section>
    <ClosingCTA title="Bring connected work into the field." />
  </EnterpriseShell>;
}

export function ProductIndexPage() {
  useEffect(() => { document.title = "Products | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Products</span></div>}
      title="Products built around clear work."
      copy="Explore GigaOps as the connected enterprise platform, plus focused products for process safety, communications, commerce, talent and customer experiences."
      visual={<ScenePlatform />}
    />
    <section className="es-section">
      <div className="es-container">
        <div className="es-featured">
          <div><span className="es-overline">Platform product</span><h3>GigaOps</h3><p>Connected operations, from signal to action.</p></div>
          <Link href="/gigaops">Explore GigaOps <ArrowRight size={16} strokeWidth={1.5} /></Link>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft">
      <div className="es-container">
        <SectionHeading label="Products" title="Explore the portfolio." copy="Open a product to see its workflow, outcomes and related capabilities." ink />
        <div className="es-tile-grid">{products.filter((item) => item.path !== "/gigaops").map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function IndustriesIndexPage() {
  useEffect(() => { document.title = "Industries | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><span>Industries</span></div>}
      title="See connected work in your world."
      copy="The same platform supports different operating journeys without losing the context each team needs."
      primary={<Link href="/contact" className="es-button es-button-blue">Contact us</Link>}
      visual={<SceneIndustry />}
    />
    <section className="es-section">
      <div className="es-container">
        <SectionHeading label="Industry journeys" title="Choose your operating context." ink />
        <div className="es-tile-grid">{industries.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <ClosingCTA />
  </EnterpriseShell>;
}

export function PlatformPage() {
  const demoChoices = demoPaths.map((path) => solutionByPath.get(path)!);
  const layers = [
    { href: "/gigaops/data", icon: Database, title: "Connect", copy: "Bring records and events from existing systems into a shared context." },
    { href: "/gigaops/automation", icon: Settings2, title: "Configure", copy: "Shape workflows, rules and responsibilities around your operating model." },
    { href: "/gigaops/maintenance", icon: Layers3, title: "Execute", copy: "Put the right next action in front of each team." },
    { href: "/gigaops/documents", icon: ShieldCheck, title: "Govern", copy: "Keep decisions and evidence attached to the work they belong to." },
  ];
  useEffect(() => { document.title = "GigaOps Platform | GigaOps"; }, []);
  return <EnterpriseShell>
    <Leadspace
      breadcrumb={<div className="es-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} strokeWidth={1.5} /><Link href="/products">Products</Link><ChevronRight size={13} strokeWidth={1.5} /><span>GigaOps</span></div>}
      kicker={<span className="es-kicker">The GigaOps platform</span>}
      title="Connected operations, from signal to decision to action."
      copy="GigaOps brings modular workflows, operational records and clear ownership together so teams can act with context."
      primary={<a href="#modules" className="es-button es-button-blue">Explore all modules <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Contact us</Link>}
      visual={<ScenePlatform />}
    />
    <PageTabs links={[["#overview", "Overview"], ["#capabilities", "How it works"], ["#modules", "Modules"], ["#tour", "Product tour"]]} />
    <section className="es-section" id="overview">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">Overview</span>
          <h2>Unify the work across functions.</h2>
          <p>One operational picture for data, workflows, people and evidence. Each module owns its record and hands the next action to the team that can complete it.</p>
        </div>
        <ScenePlatform />
      </div>
    </section>
    <section className="es-section es-section-soft" id="capabilities">
      <div className="es-container">
        <SectionHeading label="How it works" title="Connect the system. Configure the work." ink />
        <div className="es-pictogram-grid">{layers.map((layer) => <PictogramLink key={layer.title} href={layer.href} icon={layer.icon} title={layer.title} copy={layer.copy} />)}</div>
      </div>
    </section>
    <section className="es-section" id="modules">
      <div className="es-container">
        <SectionHeading label="Module catalogue" title="Every capability has its own next action." copy="Open a module to see its workflow, business value and measurements." ink />
        <div className="es-tile-grid">{modules.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
        <div className="es-featured es-mt-32">
          <div><span className="es-overline">Specialist product</span><h3>SPEED process safety</h3><p>Bring route screening and a reviewable dossier into the life sciences journey.</p></div>
          <Link href="/products/speed">Explore SPEED <ArrowRight size={16} strokeWidth={1.5} /></Link>
        </div>
      </div>
    </section>
    <section className="es-section es-section-soft">
      <div className="es-container">
        <SectionHeading label="Specialist modules" title="The modules beneath the platform." ink />
        <div className="es-tile-grid">{specialistModules.map((item) => <CatalogTile key={item.path} item={item} />)}</div>
      </div>
    </section>
    <section className="es-section" id="tour">
      <div className="es-container">
        <SectionHeading label="Product tour" title="Follow an operational journey." copy="Optional. The same interaction pattern applies across the platform." ink />
        <InteractiveWorkspace choices={demoChoices} initialPath="/gigaops/automation" />
      </div>
    </section>
    <ClosingCTA />
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
      extra={<>{moduleStages[item.path] && <span className="es-stage">{moduleStages[item.path]}</span>}<ChannelBadges path={item.path} /></>}
      title={item.headline}
      copy={item.summary}
      primary={<a href="#overview" className="es-button es-button-blue">Explore overview <ArrowRight size={16} strokeWidth={1.5} /></a>}
      secondary={<Link href="/contact" className="es-button es-button-outline">Discuss your use case</Link>}
      visual={visual}
    />
    <PageTabs links={[["#overview", "Overview"], ["#use-cases", "Use cases"], ["#outcomes", "Outcomes"], ["#capabilities", "Capabilities"], ["#related", "Related"]]} />
    <section className="es-section" id="overview">
      <div className="es-container es-split">
        <div className="es-split-copy">
          <span className="es-overline">Overview</span>
          <h2>Unify the work in one place.</h2>
          <p>{item.summary} The working example is {item.scenario}.</p>
        </div>
        {visual}
      </div>
    </section>
    <section className="es-section es-section-soft" id="use-cases">
      <div className="es-container">
        <SectionHeading label="Use cases" title={`Plan, operate and complete ${item.name}.`} ink />
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
        <SectionHeading label="Outcomes" title="Make the improvement measurable." copy="Agree on a baseline and target during discovery." ink />
        <div className="es-proof-grid es-proof-grid-3">
          {item.outcomes.map(([metric, detail]) => <ProofCard key={metric} kicker={item.name} title={detail} metric={metric} detail="Measured against your own baseline." />)}
        </div>
      </div>
    </section>
    <section className="es-section es-section-tint" id="capabilities">
      <div className="es-container">
        <SectionHeading label="Capabilities" title="Give every team a usable next step." />
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {item.capabilities.map((capability, index) => (
            <div className="es-pictogram" key={capability}>
              <Icon size={40} strokeWidth={1.25} className="es-pic" />
              <h3>{capability}</h3>
              <p>{item.steps[Math.min(index, item.steps.length - 1)][1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {isSpeed && <section className="es-section" id="tour"><div className="es-container"><SectionHeading label="Product tour" title="Follow a screening route." ink /><SpeedExperience /></div></section>}
    <section className="es-section" id="related">
      <div className="es-container">
        <SectionHeading label="Related" title="Continue the story." ink />
        <div className="es-tile-grid es-tile-grid-3">{related.map((entry) => <CatalogTile key={entry.path} item={entry} />)}</div>
      </div>
    </section>
    <ClosingCTA title={`Explore ${item.name} with your own use case.`} />
  </EnterpriseShell>;
}

export function CompanyPage({ page }: { page: "about" | "jobs" | "teams" | "contact" }) {
  const content = {
    about: { label: "About Gigasys", title: "Software shaped around the work people actually do.", copy: "Gigasys builds connected enterprise software and focused digital products for teams that need clear decisions, accountable execution and useful context.", cards: [["What we build", "Operational workflows, products and data experiences designed to work together.", Building2], ["How we work", "Start with an operating problem, build a usable path through it and measure the result.", Workflow], ["Where we focus", "Enterprise operations, life sciences, communications, commerce and connected teams.", Landmark]] as [string, string, LucideIcon][] },
    jobs: { label: "Careers", title: "Build software that helps people take action.", copy: "Our work spans product design, engineering and real operational problems. Tell us what you want to build.", cards: [["Product engineering", "Create dependable product experiences and connected systems.", Settings2], ["Design", "Make complex business workflows clear and useful.", Compass], ["Delivery", "Work with teams to translate real operating needs into software.", Users2]] as [string, string, LucideIcon][] },
    teams: { label: "Our teams", title: "Cross-functional teams, working on connected problems.", copy: "The best product decisions come from understanding both software and the work it supports.", cards: [["Product", "Define focused jobs and useful experiences.", Compass], ["Engineering", "Build the systems that make those journeys possible.", Settings2], ["Customer work", "Connect operating context, implementation and feedback.", Users2]] as [string, string, LucideIcon][] },
    contact: { label: "Contact", title: "Show us the work you want to improve.", copy: "Tell us which product, module or operating challenge you are exploring. We will direct the conversation to the right team.", cards: [["Product walkthrough", "See an example journey and discuss the parts that matter to you.", Play], ["Platform conversation", "Explore how modules could connect with your current systems.", Layers3], ["Partnership", "Discuss a focused product or industry use case.", BriefcaseBusiness]] as [string, string, LucideIcon][] },
  }[page];
  const offices = [
    ["Dover, Delaware", "8 The Green, Suite B", "Dover, DE 19901, USA"],
    ["Hyderabad, India", "103, New Mark House, Patrika Nagar", "HITEC City, Hyderabad, Telangana 500081, India"],
    ["Ongole, India", "05-E-Zone, Maruthi Nagar, Kurnool Road (O)", "Prakasam District, Ongole, Andhra Pradesh 523002, India"],
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
    {page === "about" && <section className="es-section es-section-soft"><div className="es-container"><div className="es-facts"><div className="es-fact"><strong>3</strong><span>Offices in the US and India</span></div><div className="es-fact"><strong>1</strong><span>Connected operations platform</span></div><div className="es-fact"><strong>8</strong><span>Industry operating contexts</span></div></div></div></section>}
    <section className="es-section">
      <div className="es-container">
        <div className="es-pictogram-grid es-pictogram-grid-3">
          {content.cards.map(([title, copy, Icon]) => <div className="es-pictogram" key={title}><Icon size={40} strokeWidth={1.25} className="es-pic" /><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </div>
    </section>
    {(page === "about" || page === "contact") && <section className="es-section es-section-soft"><div className="es-container"><SectionHeading label="Locations" title="Connect with the team." copy="We work across the US and India." ink /><div className="es-office-list">{offices.map(([city, line1, line2]) => <div className="es-office" key={city}><MapPin size={24} strokeWidth={1.5} color="#0f62fe" /><h3>{city}</h3><p>{line1}<br />{line2}</p></div>)}</div><div className="es-direct-contact"><a href="mailto:connect@gigasystech.com"><Mail size={16} strokeWidth={1.5} /> connect@gigasystech.com</a><a href="tel:+916303162096">+91-6303162096</a></div></div></section>}
    <ClosingCTA />
  </EnterpriseShell>;
}
