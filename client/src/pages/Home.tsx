import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Activity,
  Server,
  ShieldCheck,
  Smartphone,
  Cpu,
  Gauge,
  Zap,
  Workflow,
  Layers,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Terminal,
  Sliders,
  Database,
  Network,
  Clock,
  BarChart3,
  ChevronRight,
  Lock,
  Wrench,
  Boxes,
  Users2,
  CalendarCheck,
  Globe2,
  HardDrive,
  Receipt,
  Sparkles,
} from "lucide-react";

// Product Screenshots from verified gigalibs production run
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

// Atmosphere high-tech backgrounds
import dataCenterImg from "@/assets/hero/data-center.png";

export default function Home() {
  const [activePlatformTab, setActivePlatformTab] = useState<
    "cmms" | "workforce" | "mobile" | "infra" | "ledger" | "iam"
  >("cmms");

  const [activeMobileView, setActiveMobileView] = useState<
    "orders" | "workers" | "dashboard"
  >("orders");

  return (
    <Layout>
      {/* 1. TOP TELEMETRY STRIP (Okamura / Rugged Monitoring Style) */}
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

      {/* 2. INDUSTRIAL HERO VIEWPORT */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-border bg-[#080C14]">
        {/* Subtle grid landscaping */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mission-Critical Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                <Cpu className="w-3.5 h-3.5" />
                Enterprise Connected Systems &amp; Field Infrastructure
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.1]">
                Mission-Critical Software for{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                  High-Precision Operations.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Gigasys engineers industrial-grade platforms across CMMS asset
                reliability, connected mobile workforce dispatch, double-entry
                fintech ledgers, and sub-millisecond core caching systems.
              </p>

              {/* Feature highlight bullet pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Offline-First Mobile</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Predictive CMMS</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Double-Entry Ledger</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#platforms">
                  <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-6 shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all">
                    Explore Capabilities Matrix
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-slate-700 hover:bg-slate-800/80 text-slate-200 px-6 py-6 font-mono text-xs tracking-wider uppercase"
                  >
                    Consult System Architects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Hardware-Grade Terminal Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950/90 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
                {/* Viewport Header */}
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

                {/* Primary Hero Asset Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={workforceOverviewImg}
                    alt="Gigasys Workforce Platform Overview"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Floating Telemetry Badge */}
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

                {/* Micro Metric Grid */}
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

      {/* 3. INNOVAPPTIVE-STYLE CAPABILITIES MATRIX (Zero Dummy Data) */}
      <section id="platforms" className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              Enterprise Capabilities Matrix
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Engineered Modules Built for Operational Superiority.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore our core platform suites tested and validated in live
              industrial and SaaS production environments.
            </p>
          </div>

          {/* Platform Tab Navigation Buttons */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800 font-mono text-xs">
            {[
              { id: "cmms", label: "01. CMMS Maintenance", icon: Wrench },
              { id: "workforce", label: "02. GigaOps Workforce", icon: Users2 },
              { id: "mobile", label: "03. Mobile Field App", icon: Smartphone },
              { id: "infra", label: "04. Core Caching & Telemetry", icon: HardDrive },
              { id: "ledger", label: "05. FinTech Ledger", icon: Receipt },
              { id: "iam", label: "06. Security & IAM", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activePlatformTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePlatformTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                    isActive
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-semibold"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="mt-10">
            {/* TAB 1: CMMS Maintenance */}
            {activePlatformTab === "cmms" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                      GigaCMMS™ // Industrial Asset Reliability
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                      Predictive Maintenance &amp; Equipment Lifecycle Tracking
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Complete digital asset register with spatial unit scoping,
                      preventative maintenance schedule triggers, meter readings,
                      and spare parts inventory control.
                    </p>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <Boxes className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          Asset Registry &amp; Spatial Scoping
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Hierarchy-based asset assignment across Sites, Areas, and Equipment spaces.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <Clock className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          PM Scheduling &amp; Recurring Cycles
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Automated calendar and meter-based work order generation.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <Gauge className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          Condition Meters &amp; Inventory Sync
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Real-time threshold telemetry triggering preventative maintenance.
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase font-mono px-5">
                      Request CMMS Architecture Walkthrough
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg group">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>ASSET REGISTER</span>
                      <span className="text-cyan-400">GIGALIBS CMMS</span>
                    </div>
                    <img
                      src={cmmsAssetRegisterImg}
                      alt="CMMS Asset Registry"
                      className="rounded-lg w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg group">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>PREVENTATIVE SCHEDULES</span>
                      <span className="text-cyan-400">AUTOMATION</span>
                    </div>
                    <img
                      src={cmmsSchedulesImg}
                      alt="CMMS Schedules"
                      className="rounded-lg w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg group">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>CONDITION METERS</span>
                      <span className="text-cyan-400">TELEMETRY</span>
                    </div>
                    <img
                      src={cmmsMetersImg}
                      alt="CMMS Meters"
                      className="rounded-lg w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg group">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>SPARE PARTS &amp; INVENTORY</span>
                      <span className="text-cyan-400">STOCK CONTROL</span>
                    </div>
                    <img
                      src={cmmsInventoryImg}
                      alt="CMMS Inventory"
                      className="rounded-lg w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: GigaOps Workforce */}
            {activePlatformTab === "workforce" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                      GigaOps™ // Connected Workforce
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                      Workforce Scheduling, Shifts &amp; Resource Allocation
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Orchestrate plant supervisors, technicians, and field
                      specialists with dynamic shift rosters, real-time job
                      dispatch, and automated attendance tracking.
                    </p>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <CalendarCheck className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          Visual Shift &amp; Job Scheduling
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Calendar timeline allocating workforce resources to active work orders.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <Users2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          Resource Roster &amp; Skill Pairing
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Role-specific assignment (Supervisors, Techs, Approvers, Auditors).
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase font-mono px-5">
                      Consult Workforce Operations
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>WORKFORCE OVERVIEW &amp; ROSTER</span>
                      <span className="text-cyan-400">ADMINISTRATOR VIEW</span>
                    </div>
                    <img
                      src={workforceOverviewImg}
                      alt="Workforce Overview"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>WORKFORCE TIMELINE SCHEDULING</span>
                      <span className="text-cyan-400">DISPATCH CALENDAR</span>
                    </div>
                    <img
                      src={workforceSchedulingImg}
                      alt="Workforce Scheduling"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Mobile Field App */}
            {activePlatformTab === "mobile" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                      GigaMobile™ // Phone-Width Operator Engine
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                      Offline-First Field Execution for Frontline Technicians
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Built specifically for rugged handhelds and smartphones on
                      unreliable plant Wi-Fi. Technicians execute work orders, update
                      asset meters, and log field notes with immediate local
                      persistence.
                    </p>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <Smartphone className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          Phone-Width Compact Viewport
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Ergonomic single-thumb navigation designed for industrial environments.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/50">
                      <RefreshCw className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-200 block">
                          Optimistic Local-First Sync
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          Works 100% offline; queues work order state transitions until connection restores.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 font-mono text-xs">
                    <Button
                      variant={activeMobileView === "orders" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveMobileView("orders")}
                      className={
                        activeMobileView === "orders"
                          ? "bg-cyan-400 text-slate-950 font-bold"
                          : "border-slate-800 text-slate-300"
                      }
                    >
                      Work Orders
                    </Button>
                    <Button
                      variant={activeMobileView === "workers" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveMobileView("workers")}
                      className={
                        activeMobileView === "workers"
                          ? "bg-cyan-400 text-slate-950 font-bold"
                          : "border-slate-800 text-slate-300"
                      }
                    >
                      Worker Roster
                    </Button>
                    <Button
                      variant={activeMobileView === "dashboard" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveMobileView("dashboard")}
                      className={
                        activeMobileView === "dashboard"
                          ? "bg-cyan-400 text-slate-950 font-bold"
                          : "border-slate-800 text-slate-300"
                      }
                    >
                      Field Dashboard
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-7 flex justify-center">
                  {/* Phone Mockup Frame */}
                  <div className="relative w-full max-w-[340px] rounded-[36px] border-4 border-slate-700 bg-slate-950 p-2 shadow-[0_0_60px_rgba(0,240,255,0.2)]">
                    {/* Speaker notch */}
                    <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                    <div className="rounded-[28px] overflow-hidden border border-slate-800 bg-slate-900">
                      {activeMobileView === "orders" && (
                        <img
                          src={mobileWorkOrdersImg}
                          alt="Mobile Work Orders View"
                          className="w-full h-auto object-cover"
                        />
                      )}
                      {activeMobileView === "workers" && (
                        <img
                          src={mobileWorkersImg}
                          alt="Mobile Workers View"
                          className="w-full h-auto object-cover"
                        />
                      )}
                      {activeMobileView === "dashboard" && (
                        <img
                          src={mobileDashboardImg}
                          alt="Mobile Dashboard View"
                          className="w-full h-auto object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Core Caching & Infrastructure */}
            {activePlatformTab === "infra" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                      CacheService &amp; Performance Telemetry
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                      Sub-Millisecond In-Memory Caching &amp; API Profiling
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Platform-independent modules built to eliminate openat(2)
                      syscalls, reduce database connection pressure, and deliver
                      real-time p99 latency telemetry across distributed enterprise
                      nodes.
                    </p>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                      <div className="flex justify-between text-slate-400 text-[11px]">
                        <span>MODULE: CacheService.ts</span>
                        <span className="text-cyan-400">IN-MEMORY L1/L2</span>
                      </div>
                      <div className="text-slate-200">
                        • Namespace-based TTL cache partitioning
                        <br />• Automated cache invalidation on entity mutations
                        <br />• Hit/Miss telemetry tracking &amp; memory budget enforcement
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                      <div className="flex justify-between text-slate-400 text-[11px]">
                        <span>MODULE: performanceMonitor.ts</span>
                        <span className="text-emerald-400">TELEMETRY</span>
                      </div>
                      <div className="text-slate-200">
                        • Real-time query execution profiling &amp; slow-query alerts
                        <br />• Request/Response latency percentile distributions
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 shadow-lg">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>ENTERPRISE MODULE SWITCHER &amp; ENTITLEMENTS</span>
                      <span className="text-cyan-400">PRODUCTION SCREEN</span>
                    </div>
                    <img
                      src={platformModulesImg}
                      alt="Gigasys Platform Modules"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: FinTech & Ledger */}
            {activePlatformTab === "ledger" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                      Double-Entry FinTech Ledger &amp; Tax Engine
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                      Multi-Currency Wallet &amp; Automated Proration Billing
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Zero-reconciliation ledger framework supporting double-entry
                      bookkeeping, multi-provider payment routing (Stripe, Razorpay,
                      PayPal), and multi-jurisdiction tax calculations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        walletService.ts
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        Double-entry transaction ledger with audit immutability.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        plansService.ts
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        Usage-based metering, proration logic &amp; tier upgrades.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        TaxCalculatorService.ts
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        Multi-jurisdiction automated VAT, GST, and sales tax rules.
                      </span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        countryController.ts
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        250+ country locales, phone codes &amp; currency rules.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 font-mono text-xs space-y-4">
                  <div className="text-slate-400 border-b border-slate-800 pb-2 flex justify-between">
                    <span>TRANSACTION LEDGER KERNEL</span>
                    <span className="text-emerald-400">VERIFIED ACCURACY</span>
                  </div>
                  <pre className="text-cyan-300 text-[11px] overflow-x-auto bg-slate-900/60 p-4 rounded-lg">
{`// Gigasys Immutable Double-Entry Ledger
class WalletService {
  async executeTransfer(params: LedgerTransfer): Promise<LedgerReceipt> {
    return await db.transaction(async (tx) => {
      // 1. Debit Source Account
      await tx.insert(ledgerEntries).values({
        accountId: params.sourceAccount,
        entryType: "DEBIT",
        amount: params.amount,
        currency: params.currency,
      });
      // 2. Credit Destination Account
      await tx.insert(ledgerEntries).values({
        accountId: params.destAccount,
        entryType: "CREDIT",
        amount: params.amount,
        currency: params.currency,
      });
      // 3. Balance verification assertion
      assert(debits === credits, "Zero-variance invariant");
    });
  }
}`}
                  </pre>
                  <p className="text-slate-400 text-[11px]">
                    Built into enterprise core, preventing double-spend and
                    unreconciled balances across cross-border operations.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 6: Security & IAM */}
            {activePlatformTab === "iam" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                      Enterprise IAM &amp; Organizational Hierarchy
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                      Dynamic RBAC, Spatial Scopes &amp; Multi-Channel OTP
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Hierarchical permission trees tailored for enterprise
                      organizations. Enforces role inheritance, unit-level spatial
                      isolation, and behavioral trust scoring.
                    </p>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        Dynamic Role Hierarchy (RBAC)
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        Tenant Admin, Supervisor, Technician, Approver, Auditor with policy caching.
                      </span>
                    </div>

                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        ASAS &amp; TrustScore Engine
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        Algorithmic user trust ratings and anti-spam protection at the protocol layer.
                      </span>
                    </div>

                    <div className="p-3 rounded-lg border border-slate-800 bg-slate-950">
                      <strong className="text-cyan-400 block mb-1">
                        Multi-Channel OTP (circleOtpService)
                      </strong>
                      <span className="text-slate-400 text-[11px]">
                        Time-based OTP verification with automated SMS/Email failover delivery.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 shadow-lg">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 px-1 flex justify-between">
                      <span>ORGANIZATION HIERARCHY TREE</span>
                      <span className="text-cyan-400">SPATIAL SCOPING</span>
                    </div>
                    <img
                      src={orgHierarchyImg}
                      alt="Organization Hierarchy"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. EXPANDED MOBILE CAPABILITIES SECTION (User Requested!) */}
      <section id="mobile-apps" className="py-20 md:py-28 bg-[#080C14] border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              Frontline Mobile Architecture
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Purpose-Built for Rugged Devices &amp; Remote Operators.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Designed for industrial technicians who cannot afford app freezes,
              network dropouts, or complex desktop layouts while in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Card 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Offline-First Data Engine
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Work orders, asset meters, and technician checklists persist
                instantly to local device storage. State transitions sync
                transparently as soon as cellular or Wi-Fi reconnects.
              </p>
              <div className="pt-2 rounded-xl overflow-hidden border border-slate-800/80">
                <img
                  src={mobileWorkOrdersImg}
                  alt="Mobile Work Order Execution"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile Card 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Technician Roster &amp; Dispatch
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Real-time field visibility. Supervisors broadcast urgent work
                orders, monitor technician check-ins, and track equipment round
                completions directly from handheld screens.
              </p>
              <div className="pt-2 rounded-xl overflow-hidden border border-slate-800/80">
                <img
                  src={mobileWorkersImg}
                  alt="Mobile Workforce Management"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile Card 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Single-Thumb Ergonomics
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Tested against phone-width constraints. High-contrast typography,
                oversized tap targets, and glove-compatible inputs ensure zero
                friction during critical plant operations.
              </p>
              <div className="pt-2 rounded-xl overflow-hidden border border-slate-800/80">
                <img
                  src={mobileDashboardImg}
                  alt="Mobile Field Dashboard"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RUGGED MONITORING STYLE ARCHITECTURE TOPOLOGY */}
      <section id="architecture" className="py-20 md:py-28 bg-[#0B0F19] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
            >
              System Topology // End-To-End Architecture
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              From Edge Handhelds to Scaled Cloud Core.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Deterministic, event-driven topology separating transaction
              processing, identity defense, and asynchronous queues.
            </p>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 relative group hover:border-cyan-500/50 transition-colors">
              <div className="text-xs font-mono text-cyan-400 mb-2">LAYER 01</div>
              <h4 className="text-lg font-bold text-slate-100 mb-2">
                Mobile &amp; Edge Clients
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Native iOS/Android and offline-first web clients capturing work
                orders, sensor meter readings, and technician biometric sessions.
              </p>
              <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800 pt-3">
                PROTO: HTTP/2 + WSS
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 relative group hover:border-cyan-500/50 transition-colors">
              <div className="text-xs font-mono text-cyan-400 mb-2">LAYER 02</div>
              <h4 className="text-lg font-bold text-slate-100 mb-2">
                IAM &amp; Gateway Shield
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Dynamic RBAC role evaluation, multi-channel OTP delivery, ASAS
                anti-spam throttling, and spatial tenant isolation.
              </p>
              <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800 pt-3">
                AUTH: JWT + BCRYPT
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 relative group hover:border-cyan-500/50 transition-colors">
              <div className="text-xs font-mono text-cyan-400 mb-2">LAYER 03</div>
              <h4 className="text-lg font-bold text-slate-100 mb-2">
                Core Engine &amp; Cache
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Sub-millisecond CacheService with namespace TTL, deterministic
                state-machine workflow engine, and multi-currency ledger transactions.
              </p>
              <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800 pt-3">
                SPEED: P99 &lt; 12ms
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/90 relative group hover:border-cyan-500/50 transition-colors">
              <div className="text-xs font-mono text-cyan-400 mb-2">LAYER 04</div>
              <h4 className="text-lg font-bold text-slate-100 mb-2">
                Analytics Studio &amp; Mesh
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Real-time operational KPI aggregation, slow-query telemetry,
                automated email/SMS transactional dispatch, and webhook event sinks.
              </p>
              <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800 pt-3">
                OUTPUT: 250+ COUNTRIES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUANTIFIED ENGINEERING PROOF (Okamura-Style Metrics) */}
      <section className="py-16 md:py-24 bg-[#080C14] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
            <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-950/50">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-1">
                99.995%
              </div>
              <div className="text-xs text-slate-300 font-semibold mb-1">
                Core Engine Uptime
              </div>
              <div className="text-[11px] text-slate-500">
                High-availability SLAs
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-950/50">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-1">
                &lt; 12ms
              </div>
              <div className="text-xs text-slate-300 font-semibold mb-1">
                P99 Cache Latency
              </div>
              <div className="text-[11px] text-slate-500">
                Namespace TTL optimization
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-950/50">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-400 mb-1">
                250+
              </div>
              <div className="text-xs text-slate-300 font-semibold mb-1">
                Country Jurisdictions
              </div>
              <div className="text-[11px] text-slate-500">
                Automated tax &amp; currency
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-950/50">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-1">
                0 Var
              </div>
              <div className="text-xs text-slate-300 font-semibold mb-1">
                Zero Ledger Variance
              </div>
              <div className="text-[11px] text-slate-500">
                Strict double-entry invariants
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXECUTIVE CALL TO ACTION */}
      <section className="py-20 md:py-28 bg-[#0B0F19] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00F0FF12,transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <Badge
            variant="outline"
            className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 font-mono uppercase text-xs"
          >
            Engineering Partnership &amp; Implementation
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Ready to Deploy High-Precision Enterprise Infrastructure?
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discuss your technical architecture requirements with our system
            engineers. From custom CMMS modules to high-throughput mobile
            workforce platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-8 py-6 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                Talk to System Architects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-slate-700 hover:bg-slate-800 text-slate-300 px-6 py-6 font-mono text-xs uppercase"
              >
                Our Engineering Pedigree
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
