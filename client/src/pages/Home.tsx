import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Link } from 'wouter';
import {
  ArrowRight,
  ChevronRight,
  Play,
  CheckCircle,
  Wrench,
  Users2,
  Boxes,
  PackageCheck,
  BarChart3,
  Workflow,
  MessageSquare,
  Database,
  FileSignature,
  MapPin,
  Wallet,
  Blocks,
  Bot,
  RefreshCw,
  Network,
  GraduationCap,
  BriefcaseBusiness,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const tickerItems = [
  'ASSET MANAGEMENT',
  'WORKFORCE DISPATCH',
  'CMMS & EAM',
  'SUPPLY CHAIN',
  'FINANCIAL OPERATIONS',
  'OMNICHANNEL COMMS',
  'NATIVE MOBILE',
  'WORKFLOW AUTOMATION',
  'ANALYTICS & REPORTS',
  'DATA INTEGRATION',
  'GEOSPATIAL',
  'E-SIGNATURE',
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-gray-900 py-4 overflow-hidden relative">
      <motion.div
        className="flex gap-8 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 flex items-center"
          >
            {item}
            <span className="ml-8 text-orange-500">{'\u25C6'}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const products = [
  {
    name: 'nyr',
    category: 'Local Social Platform',
    icon: MapPin,
    desc: 'Privacy-aware local discovery, trusted circles, ride requests, events and business recommendations.',
    href: '/products/nyr',
  },
  {
    name: 'TextFly',
    category: 'Omnichannel Communications',
    icon: MessageSquare,
    desc: 'Multi-tenant messaging platform spanning email, SMS, WhatsApp, Slack and voice with unified inbox.',
    href: '/products/textfly',
  },
  {
    name: 'Swappy',
    category: 'Exchange Commerce',
    icon: RefreshCw,
    desc: 'Provider-governed reservation and entitlement exchange engine for ticketed experiences.',
    href: '/products/swappy',
  },
  {
    name: 'GigaHR / MyNextCV',
    category: 'HR & Recruitment Intelligence',
    icon: BriefcaseBusiness,
    desc: 'Permission-aware HR journeys and recruitment intelligence for governed SaaS delivery.',
    href: '/products/gigahr',
  },
  {
    name: 'GigaCRM',
    category: 'Customer Relationships',
    icon: Users2,
    desc: 'Lead and deal workspaces, sales activity tracking and adaptable pipelines for modern teams.',
    href: '/products/gigacrm',
  },
  {
    name: 'Giga AI',
    category: 'Voice & Conversational AI',
    icon: Bot,
    desc: 'Voice-agent and chatbot experiences with live call visibility and enterprise communication APIs.',
    href: '/products/gigaai',
  },
  {
    name: 'OpenFace',
    category: 'Social Identity Infrastructure',
    icon: Network,
    desc: 'Headless identity, credibility, audience and engagement for portable social experiences.',
    href: '/products/openface',
  },
];

const industries = [
  {
    name: 'Manufacturing',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Energy & Utilities',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Healthcare',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Construction',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Transport & Logistics',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Field Services',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="bg-white text-gray-900">
        {/* SECTION 1: HERO */}
        <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
              {/* Left Column */}
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-600 border border-orange-200/60 mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>Enterprise Connected Systems · Powered by GigaOps</span>
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]">
                    The Operating Platform for Complex Industries
                  </h1>

                  <p className="text-xl text-gray-500 mt-6 max-w-lg leading-relaxed">
                    GigaOps brings asset management, workforce dispatch, supply chain, finance and field execution into one enterprise SaaS platform — with native mobile for field teams.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:connect@gigasystech.com"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-orange-200 transition-all hover:shadow-orange-300 hover:-translate-y-0.5"
                    >
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="/gigaops"
                      className="inline-flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3.5 rounded-full transition-all hover:border-gray-400"
                    >
                      <Play className="h-4 w-4 text-orange-500 fill-orange-500" />
                      See GigaOps in action
                    </Link>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                      Trusted by operations and manufacturing teams
                    </p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 font-medium text-sm">
                      <span>Caterpillar</span>
                      <span className="text-gray-300">·</span>
                      <span>Honeywell</span>
                      <span className="text-gray-300">·</span>
                      <span>Emerson Electric</span>
                      <span className="text-gray-300">·</span>
                      <span>Parker Hannifin</span>
                      <span className="text-gray-300">·</span>
                      <span>Cummins</span>
                      <span className="text-gray-300">·</span>
                      <span>John Deere</span>
                      <span className="text-gray-300">·</span>
                      <span>Rockwell Automation</span>
                      <span className="text-gray-300">·</span>
                      <span>General Electric</span>
                      <span className="text-gray-300">·</span>
                      <span>3M</span>
                      <span className="text-gray-300">·</span>
                      <span>Boeing</span>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column */}
              <FadeUp delay={0.15}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80"
                      alt="GigaOps enterprise dashboard"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2.5 text-xs font-semibold text-gray-900">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>GigaOps Platform — Live</span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 2: TICKER */}
        <Ticker />

        {/* SECTION 3: PLATFORM OVERVIEW */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                GigaOps — Your Entire Operation in One Platform
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                A single enterprise platform that connects every business domain — from asset management to financial close — with unified mobile for field teams.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              <FadeUp delay={0.05}>
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Web & Native Mobile</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Full web workbench for operations managers. Native iOS and Android apps for field workers, offline-first.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                    <Blocks className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">30+ Business Modules</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Asset management, workforce, supply chain, finance, analytics and more — all connected.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Tenant Enterprise</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Workspace isolation, RBAC, org hierarchy and per-tenant configuration from day one.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Workflow Automation</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Visual workflow builder, business rules engine and dynamic forms — no code required.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Integrations</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Data contracts, webhook ingestion, connector catalogue and idempotent event dispatch.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-5">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Built-in Analytics</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Governed metrics, KPI dashboards, scheduled reports and place-level drill-down.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 4: MODULE SHOWCASE */}
        <section id="modules" className="bg-gray-50 py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Every business operation, covered
              </h2>
              <p className="text-lg text-gray-500">
                Click into any module to see full capabilities, outcomes and industry fit.
              </p>
            </FadeUp>

            {/* Module 1: Asset & Maintenance (image right, text left) */}
            <FadeUp>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24 last:mb-0">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/70 px-3.5 py-1 text-xs font-semibold text-orange-700 mb-4">
                    Asset & Maintenance
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    Control Every Asset. Prevent Every Failure.
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    Complete CMMS with work orders, PM schedules, asset registers, MRO parts and reliability analytics.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Work orders with photo evidence</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Preventive maintenance scheduling</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>MRO inventory & parts management</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/gigaops/maintenance"
                      className="inline-flex items-center gap-1.5 text-orange-600 font-semibold hover:text-orange-700 group"
                    >
                      <span>Explore CMMS module</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&auto=format&fit=crop&q=80"
                    alt="Asset and Maintenance CMMS"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </FadeUp>

            {/* Module 2: Workforce Operations (image left, text right) */}
            <FadeUp>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24 last:mb-0">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80"
                    alt="Workforce Operations"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/70 px-3.5 py-1 text-xs font-semibold text-orange-700 mb-4">
                    Workforce Operations
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    Right Person. Right Place. Every Shift.
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    Resource directories, qualification tracking, visual scheduling, dispatch and GPS-verified time.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Qualification-matched dispatch</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>GPS attendance & compliance</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Pay-ready time exports</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/gigaops/workforce"
                      className="inline-flex items-center gap-1.5 text-orange-600 font-semibold hover:text-orange-700 group"
                    >
                      <span>Explore Workforce module</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Module 3: Inventory & Supply Chain (image right, text left) */}
            <FadeUp>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24 last:mb-0">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/70 px-3.5 py-1 text-xs font-semibold text-orange-700 mb-4">
                    Inventory & Supply Chain
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    One Version of Stock Truth. Everywhere.
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    Governed product catalogue, real-time stock across warehouses, lot traceability and cycle counting.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Multi-warehouse real-time visibility</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Lot & serial traceability</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Cycle counting with audit trail</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/gigaops/inventory"
                      className="inline-flex items-center gap-1.5 text-orange-600 font-semibold hover:text-orange-700 group"
                    >
                      <span>Explore Supply Chain module</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&auto=format&fit=crop&q=80"
                    alt="Inventory and Supply Chain"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </FadeUp>

            {/* Module 4: Finance & Procurement (image left, text right) */}
            <FadeUp>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24 last:mb-0">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&auto=format&fit=crop&q=80"
                    alt="Finance and Procurement"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/70 px-3.5 py-1 text-xs font-semibold text-orange-700 mb-4">
                    Finance & Procurement
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    From Transaction to Financial Truth.
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    Double-entry ledger, three-way matching, period close and financial reporting — connected to your operations.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Double-entry compliance</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Automated three-way matching</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span>Real-time financial statements</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/gigaops/finance"
                      className="inline-flex items-center gap-1.5 text-orange-600 font-semibold hover:text-orange-700 group"
                    >
                      <span>Explore Finance module</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SECTION 5: MOBILE SECTION */}
        <section id="technologies" className="bg-gray-900 py-24 text-white scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 text-xs font-semibold text-orange-400 mb-6">
                    Native Mobile
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                    GigaOps Mobile — Built for the Field
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
                    Offline-first React Native apps for iOS and Android. Field workers execute work orders, scan assets, log time and capture evidence — with or without signal.
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Today / My Work',
                      'CMMS field execution',
                      'Workforce & dispatch',
                      'Geospatial & maps',
                      'Documents & scanner',
                      'E-signature & approvals',
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider uppercase text-white/80">
                    <span>Offline-First</span>
                    <span className="text-gray-600">·</span>
                    <span>React Native</span>
                    <span className="text-gray-600">·</span>
                    <span>iOS & Android</span>
                    <span className="text-gray-600">·</span>
                    <span>12 Mobile Modules</span>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column: Phone Mockup */}
              <FadeUp delay={0.15}>
                <div className="relative mx-auto w-64">
                  <div className="rounded-[2.5rem] border-4 border-gray-700 bg-gray-800 overflow-hidden shadow-2xl">
                    <div className="bg-orange-500 h-8 flex items-center px-4">
                      <span className="text-white text-xs font-bold">GigaOps</span>
                      <span className="ml-auto text-white text-xs">9:41</span>
                    </div>
                    <div className="p-3 space-y-2">
                      {['WO-1842 · Pump Inspection', 'WO-1843 · Filter Change', 'WO-1844 · Meter Reading'].map(
                        (item, i) => (
                          <div key={i} className="bg-gray-700 rounded-xl p-3">
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  i === 0
                                    ? 'bg-orange-400'
                                    : i === 1
                                    ? 'bg-yellow-400'
                                    : 'bg-green-400'
                                }`}
                              />
                              <span className="text-white text-xs">{item}</span>
                            </div>
                          </div>
                        )
                      )}
                      <div className="bg-gray-700 rounded-xl p-3 mt-2">
                        <div className="text-gray-400 text-xs mb-1">Asset Scan</div>
                        <div className="bg-gray-600 rounded h-16 flex items-center justify-center">
                          <span className="text-orange-400 text-xs">Tap to scan QR/barcode</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 6: STATS */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <FadeUp delay={0.05}>
                <div className="text-5xl font-bold gradient-text">30+</div>
                <div className="text-sm font-medium text-gray-500 mt-2">GigaOps modules</div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="text-5xl font-bold gradient-text">9</div>
                <div className="text-sm font-medium text-gray-500 mt-2">Product lines</div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="text-5xl font-bold gradient-text">12</div>
                <div className="text-sm font-medium text-gray-500 mt-2">Mobile capabilities</div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="text-5xl font-bold gradient-text">100%</div>
                <div className="text-sm font-medium text-gray-500 mt-2">Audit trail coverage</div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 7: OTHER PRODUCTS */}
        <section id="products" className="bg-gray-50 py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Beyond GigaOps — The Gigasys Product Portfolio
              </h2>
              <p className="text-lg text-gray-500">
                In addition to the GigaOps enterprise platform, Gigasys builds focused digital products for communications, commerce, social and AI.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => {
                const IconComponent = product.icon;
                return (
                  <FadeUp key={product.name} delay={idx * 0.05}>
                    <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all group flex flex-col justify-between">
                      <div>
                        <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="text-xs text-orange-600 uppercase tracking-widest font-semibold mb-1">
                          {product.category}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          {product.desc}
                        </p>
                      </div>
                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 8: INDUSTRIES */}
        <section id="industries" className="bg-white py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for the Industries That Keep the World Running
              </h2>
              <p className="text-lg text-gray-500">
                GigaOps is designed for organizations operating at scale in complex physical industries.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => (
                <FadeUp key={ind.name} delay={idx * 0.05}>
                  <div className="relative overflow-hidden rounded-2xl h-48 group shadow-sm">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
                    <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                      {ind.name}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="bg-gray-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <FadeUp>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Ready to modernize your operations?
              </h2>
              <p className="mt-5 text-lg text-gray-400">
                Talk to our team for a live walkthrough of GigaOps. No slides. Just a real architecture discussion tailored to your operation.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-400 transition-colors shadow-lg shadow-orange-900/40"
                >
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                >
                  Talk to an expert
                </Link>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                connect@gigasystech.com · Hyderabad · Delaware, USA
              </p>
            </FadeUp>
          </div>
        </section>
      </div>
    </Layout>
  );
}
