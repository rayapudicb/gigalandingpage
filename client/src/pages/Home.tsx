import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Activity,
  Server,
  ShieldCheck,
  Smartphone,
  Cpu,
  Gauge,
  Workflow,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  HardDrive,
  Receipt,
  Wrench,
  Boxes,
  Users2,
  CalendarCheck,
  Globe2,
  Lock,
  Building2,
  Send,
  AlertCircle,
  FileSpreadsheet,
  Layers,
  ChevronRight,
  TrendingDown,
  Sparkles,
  ClipboardList,
  Check,
  X,
  Minus,
} from "lucide-react";

// Verified production screenshots
import workforceOverviewImg from "@/assets/products/workforce-overview.png";
import workforceSchedulingImg from "@/assets/products/workforce-scheduling.png";
import cmmsAssetRegisterImg from "@/assets/products/cmms-asset-register.png";
import cmmsSchedulesImg from "@/assets/products/cmms-schedules.png";
import cmmsMetersImg from "@/assets/products/cmms-meters.png";
import cmmsInventoryImg from "@/assets/products/cmms-inventory.png";
import mobileWorkOrdersImg from "@/assets/products/mobile-work-orders.png";
import mobileWorkersImg from "@/assets/products/mobile-workers.png";
import mobileDashboardImg from "@/assets/products/mobile-dashboard.png";
import platformModulesImg from "@/assets/products/platform-modules.png";
import orgHierarchyImg from "@/assets/products/org-hierarchy.png";

export default function Home() {
  const { toast } = useToast();
  const [activePlatformTab, setActivePlatformTab] = useState<
    "cmms" | "workforce" | "mobile" | "infra" | "ledger" | "iam"
  >("cmms");

  const [activeMobileView, setActiveMobileView] = useState<
    "orders" | "workers" | "dashboard"
  >("orders");

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    facilityType: "",
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      toast({
        title: "Walkthrough Scheduled",
        description:
          "Our system architects will contact you within 2 business hours with calendar invites.",
      });
      setFormData({ name: "", email: "", company: "", facilityType: "" });
    }, 1000);
  };

  const partnerClients = [
    "Caterpillar",
    "Rockwell Automation",
    "Honeywell Industrial",
    "Eaton Corp",
    "Cummins Inc",
    "Emerson Electric",
    "Parker Hannifin",
    "GE Aerospace & Power",
    "Deere & Company",
    "3M Industrial Systems",
  ];

  return (
    <Layout>
      {/* ─── LIVE TELEMETRY STRIP ───────────────────────────────────── */}
      <div className="border-b border-border bg-slate-950/80 backdrop-blur-md text-xs font-mono py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ACTIVE
            </span>
            <span className="hidden sm:inline text-slate-400">
              SPEC: GIGALIBS_ENTERPRISE_V4
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-cyan-400" />
              <span>P99 CACHE: &lt; 12ms</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>UPTIME: 99.995%</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>250+ LOCALES</span>
            </span>
          </div>
        </div>
      </div>

      {/* ─── 1. HERO: WHAT WE DO & FOR WHOM ─────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-border bg-[#080C14]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                <Cpu className="w-3.5 h-3.5" />
                Connected Workforce &amp; Asset Reliability Platform
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.1]">
                Connect your frontline workers, equipment, and operations on{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                  one unified platform.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Gigasys gives maintenance leaders and technicians a single
                system for work orders, preventative scheduling, and asset
                telemetry—built to work offline on any mobile device.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% Offline Mobile</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated CMMS</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Shift &amp; Job Dispatch</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#book-walkthrough">
                  <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-7 py-6 text-sm shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all">
                    Book an Architecture Walkthrough
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="#why">
                  <Button
                    variant="outline"
                    className="border-slate-700 hover:bg-slate-800/80 text-slate-200 px-6 py-6 font-mono text-xs tracking-wider uppercase"
                  >
                    See The Operational Gap ↓
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950/90 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-semibold text-slate-200">
                      GigaOps Core Engine // Production
                    </span>
                  </div>
                  <span className="text-[10px] text-cyan-400">LIVE INSTANCE</span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={workforceOverviewImg}
                    alt="Gigasys Workforce Platform Overview"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-mono text-cyan-400 text-[11px] font-semibold">
                        GigaOps™ Shift Dispatch &amp; CMMS
                      </p>
                      <p className="text-slate-400 text-[11px]">
                        Multi-site spatial scope active
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-emerald-500/40 text-emerald-400 bg-emerald-500/10 font-mono text-[10px]"
                    >
                      SYNCHRONIZED
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 bg-slate-900/50 p-3 text-center text-xs font-mono">
                  <div>
                    <div className="text-cyan-400 font-bold text-sm">250+</div>
                    <div className="text-[10px] text-slate-400">Territories</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-bold text-sm">100%</div>
                    <div className="text-[10px] text-slate-400">Double-Entry</div>
                  </div>
                  <div>
                    <div className="text-sky-400 font-bold text-sm">&lt;12ms</div>
                    <div className="text-[10px] text-slate-400">P99 Cache</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. THE PROBLEM (Visitor's Current Situation) ───────────── */}
      <section id="why" className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <Badge
              variant="outline"
              className="border-red-500/30 text-red-400 bg-red-500/10 font-mono uppercase text-xs"
            >
              The Operational Gap
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Your field teams are doing mission-critical work with disconnected tools.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              When maintenance schedules, shift rosters, and equipment telemetry live in separate spreadsheets, paper binders, and slow legacy screens, operations stall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/70 space-y-4 hover:border-red-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Lost Data in Connectivity Dead Zones
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Technicians lose work order access, manuals, and meter logs the moment they step into basement boiler rooms, remote pump stations, or heavy industrial enclosures.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/70 space-y-4 hover:border-red-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Blind Scheduling &amp; Dispatching
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Supervisors assign emergency repairs without real-time insight into who is on shift, which technician holds safety certifications, or where crews are currently stationed.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/70 space-y-4 hover:border-red-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Delayed, Reactive Maintenance
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Equipment is serviced after catastrophic breakdown rather than on meter thresholds or runtime hours, multiplying unplanned downtime and spare parts costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OUR SOLUTION (Three Primary Benefits) ────────────────── */}
      <section id="solution" className="py-20 md:py-28 bg-[#080C14] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              The Gigasys Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              One mobile-first system from morning shift dispatch to asset sign-off.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Replace point-solution silos with a modern system frontline operators adopt enthusiastically on day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                1. Zero-Downtime Offline Mobile
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Frontline operators execute work orders, log meter measurements, and verify checklist steps completely offline. State synchronizes automatically when connection returns.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                2. Automated Predictive CMMS
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Preventative maintenance schedules generate automatically based on runtime hours and meter triggers, stopping unexpected failures and extending equipment longevity.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                3. Closed-Loop Shift Execution
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Supervisors allocate workforce rosters, dispatch emergency work orders, and reconcile spare parts inventory in real-time across multiple facility sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. VALIDATION: CLIENT LOGOS & 3 KEY NUMBERS ────────────── */}
      <section className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              Enterprise Validation
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Trusted across heavy industry, manufacturing, and multi-site facilities.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Engineered to support global asset reliability standards and mission-critical uptime.
            </p>
          </div>

          {/* 10 USA Manufacturing Clients / Partners Grid */}
          <div className="space-y-4">
            <p className="text-center font-mono text-xs text-slate-400 tracking-wider uppercase">
              Selected USA Industrial &amp; Manufacturing Ecosystem Partners
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {partnerClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 flex items-center justify-center text-center font-mono text-xs text-slate-300 font-semibold hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5 mr-2 text-cyan-400/80 shrink-0" />
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Standalone Key Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">
                &lt; 12ms
              </div>
              <div className="text-sm text-slate-200 font-semibold mb-1">
                P99 Memory Cache Latency
              </div>
              <div className="text-xs text-slate-500">
                Instant asset queries on low-bandwidth networks
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80">
              <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">
                100%
              </div>
              <div className="text-sm text-slate-200 font-semibold mb-1">
                Offline Continuity
              </div>
              <div className="text-xs text-slate-500">
                Zero data loss across dead-zone facilities
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80">
              <div className="text-4xl sm:text-5xl font-bold text-sky-400 mb-2">
                250+
              </div>
              <div className="text-sm text-slate-200 font-semibold mb-1">
                Global Regional Locales
              </div>
              <div className="text-xs text-slate-500">
                Automated multi-jurisdiction compliance
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <a href="#book-walkthrough">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-8 py-6 text-sm shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                Book an Architecture Walkthrough →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 5. HOW IT WORKS: 3 STEPS WITH REAL VISUALS ─────────────── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-[#080C14] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              The 3-Step Execution Loop
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              From work order creation to verified resolution in three steps.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              How dispatchers, technicians, and approvers work together without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-3">
                <span>STEP 01</span>
                <span>DISPATCH &amp; SCHEDULE</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                Schedule &amp; Allocate Resources
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Supervisors review technician skill tags, active shift rosters, and equipment spaces to assign work orders in a single calendar view.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-800 pt-2 bg-slate-900">
                <img
                  src={workforceSchedulingImg}
                  alt="Workforce Scheduling Console"
                  className="w-full h-44 object-cover object-top"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-3">
                <span>STEP 02</span>
                <span>FIELD EXECUTION</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                Execute Offline on Mobile
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Technicians open work orders on their rugged phones, check step-by-step procedures, record meter readings, and log replacement parts offline.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-800 pt-2 bg-slate-900">
                <img
                  src={mobileWorkOrdersImg}
                  alt="Mobile Work Order Screen"
                  className="w-full h-44 object-cover object-top"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-3">
                <span>STEP 03</span>
                <span>INVENTORY RECONCILIATION</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                Reconcile Parts &amp; History
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consumed parts are instantly deducted from the inventory ledger, work order history attaches to the asset record, and reports publish.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-800 pt-2 bg-slate-900">
                <img
                  src={cmmsInventoryImg}
                  alt="CMMS Inventory Register"
                  className="w-full h-44 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. WHO IT'S FOR: ROLES & USE CASES ─────────────────────── */}
      <section id="use-cases" className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              Tailored Personas
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Designed specifically for the roles maintaining industrial infrastructure.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Role-tailored spatial scoping and permission levels for your whole organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <Badge variant="outline" className="font-mono text-xs text-cyan-400 border-cyan-500/30">
                ROLE: OPERATIONS DIRECTORS
              </Badge>
              <h3 className="text-xl font-bold text-slate-100">
                Cross-Facility Uptime &amp; Asset Visibility
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Monitor multi-site operational health, track open work order backlogs, and verify workforce utilization across all geographic plants.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <Badge variant="outline" className="font-mono text-xs text-cyan-400 border-cyan-500/30">
                ROLE: MAINTENANCE SUPERVISORS
              </Badge>
              <h3 className="text-xl font-bold text-slate-100">
                Automated PMs &amp; Dynamic Dispatch
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Eliminate manual schedule coordination. Assign emergency work orders with confidence based on real technician availability and skill certifications.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <Badge variant="outline" className="font-mono text-xs text-cyan-400 border-cyan-500/30">
                ROLE: FIELD TECHNICIANS
              </Badge>
              <h3 className="text-xl font-bold text-slate-100">
                Frictionless Phone-Width Mobile App
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Zero training needed. Technicians follow clear checklist steps, capture photos, record meter numbers, and sign off jobs in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. HOW WE ENGAGE / ROLLOUT MODEL ───────────────────────── */}
      <section id="pricing" className="py-20 md:py-28 bg-[#080C14] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              Engagement &amp; Rollout Model
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Deploy modular capabilities in weeks, not 18-month consulting cycles.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Predictable, transparent per-facility or active-operator licensing with white-glove engineering onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <div className="text-cyan-400 text-sm font-bold">01. MODULAR ACTIVATION</div>
              <h3 className="text-base font-bold text-slate-100 font-sans">
                Start with What You Need
              </h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Activate GigaCMMS, Workforce Scheduling, or Mobile Work Orders independently. Add modules as your digital maturity expands without ripping out existing tools.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <div className="text-cyan-400 text-sm font-bold">02. REST &amp; WEBHOOK INTEGRATION</div>
              <h3 className="text-base font-bold text-slate-100 font-sans">
                Connects into Existing Systems
              </h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Connects seamlessly into ERP backbones (SAP, Oracle, or SQL stores) through documented REST endpoints and real-time webhook event pipelines.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4">
              <div className="text-cyan-400 text-sm font-bold">03. SYSTEMS ARCHITECT ONBOARDING</div>
              <h3 className="text-base font-bold text-slate-100 font-sans">
                Hands-On Engineering Support
              </h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Our core architects work directly with your team on initial asset register import, spatial hierarchy modeling, and operator round template creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. MEASURABLE RESULTS (Case Study Outcomes) ─────────────── */}
      <section id="results" className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-mono uppercase text-xs"
            >
              Measured Outcomes
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              The measurable difference between clipboards and connected operations.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Real operational benchmarks achieved after deploying Gigasys mobile workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
              <div className="text-4xl font-bold text-cyan-400 font-mono">-45%</div>
              <h3 className="text-lg font-bold text-slate-100">
                Work Order Resolution Time
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct mobile dispatch and pre-populated asset histories eliminate phone tags and travel back to dispatch offices for paper work orders.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
              <div className="text-4xl font-bold text-emerald-400 font-mono">Zero</div>
              <h3 className="text-lg font-bold text-slate-100">
                Lost Field Records &amp; Logs
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Offline-first data replication ensures every technician measurement, inspection photo, and sign-off is preserved locally and synced automatically.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
              <div className="text-4xl font-bold text-sky-400 font-mono">+30%</div>
              <h3 className="text-lg font-bold text-slate-100">
                PM Schedule Compliance
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Meter-driven preventative scheduling guarantees equipment servicing occurs on time, preventing costly secondary component damage.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <a href="#book-walkthrough">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-8 py-6 text-sm shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                Book an Architecture Walkthrough →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. WHY US VS THE ALTERNATIVES (Honest Comparison) ──────── */}
      <section id="comparison" className="py-20 md:py-28 bg-[#080C14] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              The Comparison
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Why operations teams choose Gigasys over legacy software.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Compare how we compare to paper binders and heavyweight legacy desktop ERPs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans text-sm">
              <thead>
                <tr className="border-b border-slate-800 font-mono text-xs text-slate-400">
                  <th className="py-4 px-6">CAPABILITY</th>
                  <th className="py-4 px-6">PAPER &amp; SPREADSHEETS</th>
                  <th className="py-4 px-6">LEGACY DESKTOP ERP</th>
                  <th className="py-4 px-6 text-cyan-400 bg-cyan-950/20 border-l border-r border-cyan-500/30">
                    GIGASYS PLATFORM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-100">
                    Mobile Experience
                  </td>
                  <td className="py-4 px-6 text-slate-500">None (Paper clipboard)</td>
                  <td className="py-4 px-6 text-slate-400">
                    Clunky desktop ports; difficult in field
                  </td>
                  <td className="py-4 px-6 font-medium text-cyan-300 bg-cyan-950/10 border-l border-r border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" /> Native phone-width &amp; ergonomic
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-100">
                    Offline Capability
                  </td>
                  <td className="py-4 px-6 text-slate-500">Paper damages &amp; gets lost</td>
                  <td className="py-4 px-6 text-slate-400">
                    Freezes when connection drops
                  </td>
                  <td className="py-4 px-6 font-medium text-cyan-300 bg-cyan-950/10 border-l border-r border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" /> 100% offline local-first sync
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-100">
                    Implementation Speed
                  </td>
                  <td className="py-4 px-6 text-slate-500">Immediate, but unscalable</td>
                  <td className="py-4 px-6 text-slate-400">
                    9 to 18 months expensive rollout
                  </td>
                  <td className="py-4 px-6 font-medium text-cyan-300 bg-cyan-950/10 border-l border-r border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" /> Live in 2 to 4 weeks
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-100">
                    CMMS &amp; Workforce Roster
                  </td>
                  <td className="py-4 px-6 text-slate-500">Disconnected manual silos</td>
                  <td className="py-4 px-6 text-slate-400">
                    Requires separate add-on licenses
                  </td>
                  <td className="py-4 px-6 font-medium text-cyan-300 bg-cyan-950/10 border-l border-r border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" /> Unified core architecture
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-100">
                    Pricing Transparency
                  </td>
                  <td className="py-4 px-6 text-slate-500">Hidden manual labor overhead</td>
                  <td className="py-4 px-6 text-slate-400">
                    Massive multi-year lock-ins
                  </td>
                  <td className="py-4 px-6 font-medium text-cyan-300 bg-cyan-950/10 border-l border-r border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-cyan-400" /> Predictable modular licensing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 10. ABOUT US / PEDIGREE (Kept Short) ─────────────────────── */}
      <section id="about" className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
              >
                Engineering Pedigree
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
                Engineered by systems architects for high-concurrency reliability.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Gigasys Technologies was built to bridge the gap between heavy industrial operations and modern cloud software. Our core engine powers enterprise systems across 250+ regional jurisdictions with double-entry ledger precision, dynamic RBAC security, and sub-millisecond memory caching.
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2 text-slate-400">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="text-cyan-400 font-bold mb-1">HEADQUARTERS</div>
                  <div>Dover, Delaware, USA</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="text-cyan-400 font-bold mb-1">R&amp;D CENTER</div>
                  <div>Hitech City, Hyderabad, India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h4 className="font-bold text-slate-100">
                      Enterprise Compliance
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      Security-first architecture
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every deployment runs with tenant isolation, strict role hierarchies, and automated time-based OTP delivery to ensure continuous audit readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. TESTIMONIAL & TRUST PROOF ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#080C14] border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge
            variant="outline"
            className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
          >
            What Operations Leaders Say
          </Badge>

          <blockquote className="text-2xl sm:text-3xl font-medium text-slate-100 leading-snug tracking-tight">
            “Gigasys gave our plant supervisors real-time visibility into technician schedules and asset meters without making our field crews type through complicated desktop ERP menus. The offline mobile app paid for itself in week one.”
          </blockquote>

          <div className="space-y-1">
            <p className="font-semibold text-slate-200">
              Marcus Vance
            </p>
            <p className="text-sm font-mono text-cyan-400">
              VP of Operations &amp; Plant Reliability // Industrial Manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL CTA: SINGLE DECISION ─────────────────────────── */}
      <section id="book-walkthrough" className="py-20 md:py-28 bg-[#0B0F19] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00F0FF15,transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 text-center">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              Get Started
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Ready to see how Gigasys works in your facilities?
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Eliminate clipboard delays and disconnected legacy screens. Schedule an architecture walkthrough with our core engineering team.
            </p>
          </div>

          {/* Interactive Walkthrough Form */}
          <div className="max-w-xl mx-auto p-8 rounded-2xl border border-cyan-500/30 bg-slate-950/90 shadow-[0_0_40px_rgba(0,240,255,0.15)] text-left">
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Work Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Company Name
                  </label>
                  <Input
                    required
                    placeholder="Industrial Corp"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Facility / Industry
                  </label>
                  <Input
                    required
                    placeholder="e.g. Manufacturing / Energy"
                    value={formData.facilityType}
                    onChange={(e) =>
                      setFormData({ ...formData, facilityType: e.target.value })
                    }
                    className="bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={formSubmitting}
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-6 text-sm uppercase font-mono shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                {formSubmitting ? "Reserving Schedule..." : "Book Architecture Walkthrough →"}
              </Button>
            </form>

            <div className="pt-4 border-t border-slate-800/80 mt-6 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
              <span>✓ No sales push</span>
              <span>✓ Direct systems architect discussion</span>
              <span>✓ Custom workflow demonstration</span>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Prefer direct email? Reach our team directly at{" "}
              <a href="mailto:connect@gigasystech.com" className="text-cyan-400 hover:underline font-mono">
                connect@gigasystech.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
