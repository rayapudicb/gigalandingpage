import React, { useState } from 'react';
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
  BriefcaseBusiness,
  Globe2,
  ShieldCheck,
  Search,
  Check,
  Smartphone,
  Layers,
  Sparkles,
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
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
    <div className="bg-gray-50/90 border-y border-gray-100 py-4 overflow-hidden relative">
      <motion.div
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 flex items-center"
          >
            {item}
            <span className="ml-10 text-[#FF7200]">◆</span>
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
    desc: 'Privacy-aware local discovery, verified resident circles, neighborhood pulse, ride coordination, and local merchant commerce.',
    tags: ['Zero-Tracking', 'Resident Circles', 'Local Commerce'],
    href: '/products/nyr',
  },
  {
    name: 'TextFly',
    category: 'Omnichannel Communications',
    icon: MessageSquare,
    desc: 'Multi-tenant enterprise messaging platform spanning WhatsApp Business, SMS, Email, Slack, and Voice with a unified inbox.',
    tags: ['Unified Inbox', 'Multi-Carrier Failover', '99.99% SLA'],
    href: '/products/textfly',
  },
  {
    name: 'Swappy',
    category: 'Exchange Commerce',
    icon: RefreshCw,
    desc: 'Provider-governed reservation and entitlement exchange engine for ticketed experiences with dynamic escrow and royalty splits.',
    tags: ['Anti-Scalping', 'Instant Escrow', 'Primary Royalties'],
    href: '/products/swappy',
  },
  {
    name: 'GigaHR / MyNextCV',
    category: 'HR & Recruitment Intelligence',
    icon: BriefcaseBusiness,
    desc: 'Permission-aware talent pipelines and MyNextCV semantic resume parsing intelligence for governed enterprise recruitment.',
    tags: ['Semantic Resume Parsing', 'Lifecycle ATS', 'Skill Pathing'],
    href: '/products/gigahr',
  },
  {
    name: 'GigaCRM',
    category: 'Customer Relationships',
    icon: Users2,
    desc: 'Multi-stage visual deal pipelines, account stakeholder influence graphs, and zero-touch sales activity logging.',
    tags: ['Visual Pipelines', 'Stakeholder Maps', 'CPQ & E-Sign'],
    href: '/products/gigacrm',
  },
  {
    name: 'Giga AI',
    category: 'Voice & Conversational AI',
    icon: Bot,
    desc: 'Ultra-low latency sub-500ms voice agents with PBX telephony, domain knowledge RAG, and live call whisper supervision.',
    tags: ['Sub-500ms Latency', 'PBX Telephony', 'Autonomous Actions'],
    href: '/products/gigaai',
  },
  {
    name: 'OpenFace',
    category: 'Social Identity Infrastructure',
    icon: Network,
    desc: 'Headless identity, verifiable badges, and portable audience graphs for modern decentralized consumer and SaaS apps.',
    tags: ['Cryptographic SSO', 'Portable Graphs', 'Zero Bot Sybil'],
    href: '/products/openface',
  },
];

const industries = [
  {
    name: 'Manufacturing & Industrial',
    desc: 'Predictive PM cycles, equipment telemetry, storeroom spares, and shop floor work order execution.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Energy & Utilities',
    desc: 'Substation asset management, hazardous zone compliance, and automated field dispatch across grids.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Healthcare & Facilities',
    desc: 'Biomedical asset compliance, strict sterilized inventory chains, and auditable hospital shift scheduling.',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Construction & Civil',
    desc: 'Heavy machinery tracking, subcontractor compliance, job-site delivery receipt, and milestone billing.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Transport & Logistics',
    desc: 'Fleet maintenance logs, multi-depot inventory visibility, cross-dock receiving, and carrier dispatch.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Field Services',
    desc: 'Offline-first mobile work orders, GPS geofenced punch, photo evidence capture, and real-time customer ETA.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&auto=format&fit=crop&q=80',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'cmms' | 'workforce' | 'supply' | 'finance'>('cmms');

  return (
    <Layout>
      <div className="bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900">
        
        {/* SECTION 1: HERO (Meta AI style, expansive centered commanding layout) */}
        <section className="bg-white pt-20 pb-24 lg:pt-28 lg:pb-36 relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 text-center">
            
            {/* Pill Badge */}
            <FadeUp>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-orange-50/80 border border-orange-200/60 px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm mb-8 hover:bg-orange-100/70 transition-colors">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Enterprise Connected Systems · Powered by GigaOps</span>
                <span className="text-orange-400">|</span>
                <span className="text-orange-600 font-bold">Release 2026</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.08}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-gray-900 leading-[1.05] max-w-5xl mx-auto">
                The Operating Platform for Complex Industries
              </h1>
            </FadeUp>

            {/* Subline */}
            <FadeUp delay={0.14}>
              <p className="mt-8 text-xl sm:text-2xl text-gray-500 font-normal leading-relaxed max-w-3xl mx-auto">
                GigaOps brings asset management, workforce dispatch, supply chain, finance, and field execution into one enterprise SaaS platform — with native mobile for field teams.
              </p>
            </FadeUp>

            {/* Action Buttons */}
            <FadeUp delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:connect@gigasystech.com?subject=GigaOps%20Enterprise%20Trial"
                  className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all text-base"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/gigaops"
                  className="inline-flex items-center gap-2.5 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all text-base shadow-sm"
                >
                  <Play className="h-4 w-4 text-[#FF7200] fill-[#FF7200]" />
                  See GigaOps in action
                </Link>
              </div>
            </FadeUp>

            {/* Trust Bar: 10 USA Manufacturing Clients */}
            <FadeUp delay={0.25}>
              <div className="mt-16 pt-10 border-t border-gray-100 max-w-5xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">
                  Trusted by operations and manufacturing leaders
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500 font-medium text-sm sm:text-base">
                  <span className="hover:text-gray-900 transition-colors">Caterpillar</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Honeywell</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Emerson Electric</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Parker Hannifin</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Cummins</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">John Deere</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Rockwell Automation</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">General Electric</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">3M</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Boeing</span>
                </div>
              </div>
            </FadeUp>

            {/* Grand Enterprise Workbench Preview Frame */}
            <FadeUp delay={0.3}>
              <div className="mt-16 max-w-[1360px] mx-auto rounded-3xl border border-gray-200/80 shadow-[0_30px_90px_rgba(0,0,0,0.08)] overflow-hidden bg-white text-left">
                {/* Simulated macOS / Enterprise Header */}
                <div className="bg-gray-100/90 border-b border-gray-200/80 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 text-xs font-semibold text-gray-600 hidden sm:inline-block">
                      gigaops.gigasystech.com/enterprise/workbench
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">
                      <Search className="h-3.5 w-3.5 text-gray-400" />
                      <span>Search 142 assets, work orders, ledgers...</span>
                      <kbd className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-400 font-mono">⌘K</kbd>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Telemetry Live</span>
                    </div>
                  </div>
                </div>

                {/* Workbench Top Bar & Metrics Ribbon */}
                <div className="bg-gray-50 border-b border-gray-200/70 p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Overall Equipment (OEE)</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">94.2%</div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1">↑ +6.8% vs last quarter</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">PM Compliance Rate</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">99.1%</div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1">1,842 work orders closed</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Inventory Multi-DC Accuracy</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">99.8%</div>
                    <div className="text-xs text-gray-500 mt-1">8 regional distribution centers</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Three-Way Invoices Cleared</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">$4.2M</div>
                    <div className="text-xs text-orange-600 font-semibold mt-1">Zero manual touch exceptions</div>
                  </div>
                </div>

                {/* Main Visual Image with contextual dashboard layout */}
                <div className="relative bg-gray-950 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=85"
                    alt="GigaOps Enterprise Command Center"
                    className="w-full h-[480px] lg:h-[580px] object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Context Callout 1 */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-sm hidden sm:block">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-gray-900">Pump #P-1082 Vibration Normal</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug">
                      Predictive PM schedule triggered. Automated parts kit reserved from Warehouse Bay 4.
                    </p>
                  </div>

                  {/* Floating Context Callout 2 */}
                  <div className="absolute top-8 right-8 bg-gray-900/90 text-white backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-800 max-w-xs hidden md:block">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-orange-400">Mobile Field Dispatch</span>
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full">GPS Verified</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-snug">
                      14 certified technicians dispatched on-site. Offline execution sync ready.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </section>

        {/* SECTION 2: TICKER */}
        <Ticker />

        {/* SECTION 3: PLATFORM OVERVIEW (Enterprise Bento Grid) */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Unified SaaS Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
                GigaOps — Your Entire Operation in One Platform
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                A single enterprise platform that connects every business domain — from plant asset maintenance to automated period close — with native mobile execution for field teams.
              </p>
            </FadeUp>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Bento 1: Large Span 2 Columns */}
              <FadeUp delay={0.05} className="lg:col-span-2">
                <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-3xl p-8 lg:p-10 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                        <Globe2 className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                        Unified Experience
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      Web Workbench &amp; Offline-First Native Mobile
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                      Operations managers, supply chain leads, and controllers work in a high-density web command center. Field engineers and technicians execute with purpose-built React Native iOS and Android apps that operate without cellular coverage.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200/70 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-gray-900">100%</div>
                      <div className="text-xs text-gray-500 mt-0.5">Offline-first local cache</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">iOS &amp; Android</div>
                      <div className="text-xs text-gray-500 mt-0.5">Native field applications</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">&lt; 100ms</div>
                      <div className="text-xs text-gray-500 mt-0.5">Workbench page latency</div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Bento 2: 30+ Business Modules */}
              <FadeUp delay={0.1}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <Blocks className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">30+ Connected Modules</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Maintenance, scheduling, inventory, procurement, ledger, DAG automation, and GIS mapping — pre-integrated so you never suffer point-solution fragmentation.
                    </p>
                  </div>
                  <Link
                    href="/gigaops"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] hover:text-orange-700 mt-6 group"
                  >
                    <span>View module catalogue</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>

              {/* Bento 3: Multi-Tenant Enterprise */}
              <FadeUp delay={0.15}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Multi-Tenant Isolation</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Strict tenant boundary enforcement, custom RBAC permissions, single sign-on (SAML/OIDC), and SOC 2 Type II audit trail logging for every database transaction.
                    </p>
                  </div>
                  <div className="mt-6 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                    <Check className="h-4 w-4" />
                    <span>SOC 2 Type II · Zero Data Drift</span>
                  </div>
                </div>
              </FadeUp>

              {/* Bento 4: Workflow Automation */}
              <FadeUp delay={0.2}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <Workflow className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Visual Workflow Engine</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Build durable DAG approval flows, SLA escalation paths, dynamic mobile forms, and conditional cross-module triggers without writing a single line of backend code.
                    </p>
                  </div>
                  <Link
                    href="/gigaops/automation"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] hover:text-orange-700 mt-6 group"
                  >
                    <span>Explore Workflow DAG</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>

              {/* Bento 5: Enterprise Integrations */}
              <FadeUp delay={0.25}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Contracts &amp; APIs</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Ingest streaming telemetry from SCADA, IoT sensors, and third-party ERPs through schema contracts, HMAC-verified webhooks, and idempotent journaling.
                    </p>
                  </div>
                  <Link
                    href="/gigaops/data"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] hover:text-orange-700 mt-6 group"
                  >
                    <span>View Data Contracts</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>

            </div>
          </div>
        </section>

        {/* SECTION 4: MODULE SHOWCASE (Human-made enterprise layout, expansive cards) */}
        <section id="modules" className="bg-gray-50/70 py-24 lg:py-32 scroll-mt-20 border-t border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Core Operations Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
                Every business operation, covered
              </h2>
              <p className="text-lg text-gray-500">
                Click into any module to see complete enterprise capabilities, documented business outcomes, and industry applicability.
              </p>
            </FadeUp>

            {/* Showcase 1: Asset & Maintenance */}
            <FadeUp className="mb-20">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Asset &amp; Maintenance · CMMS &amp; EAM
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      Control Every Asset. Prevent Every Failure.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Complete enterprise CMMS with work order lifecycles, preventive maintenance schedules, digital asset registers, storeroom MRO parts, and MTBF/MTTR reliability analytics.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Work orders with photo evidence, labor timers &amp; sign-off</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Preventive maintenance scheduling &amp; condition threshold alarms</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>MRO inventory &amp; automatic parts kitting against open orders</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/maintenance"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore CMMS Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        40% reduction in reactive downtime
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
                        alt="Asset & Maintenance CMMS"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Digital Twin · Active Equipment Hierarchy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Showcase 2: Workforce Operations */}
            <FadeUp className="mb-20">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                        alt="Workforce Operations"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Shift Dispatch · Skill Matched
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Workforce Operations
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      Right Person. Right Place. Every Shift.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Central resource directories, qualification expiration tracking, visual drag-and-drop shift scheduling, intelligent field dispatch, and GPS-verified time and attendance.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Qualification &amp; certification-matched automated dispatch</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>GPS geofenced attendance &amp; hazard compliance tracking</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Pay-ready exports directly integrated into enterprise payroll</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/workforce"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore Workforce Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        50% faster dispatch cycle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Showcase 3: Inventory & Supply Chain */}
            <FadeUp className="mb-20">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Inventory &amp; Supply Chain
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      One Version of Stock Truth. Everywhere.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Governed master product catalogues, multi-warehouse real-time balance tracking, PO-linked receiving gates, full lot and serial genealogy, and auditable cycle counting schedules.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Multi-warehouse bin-level visibility in real time</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Lot genealogy &amp; serialized barcode/QR tracking</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Automated cycle counting with variance reconciliation</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/inventory"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore Supply Chain Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        99.5% stock balance accuracy
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop&q=80"
                        alt="Inventory and Supply Chain"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Multi-Warehouse Live Ledger
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Showcase 4: Finance & Procurement */}
            <FadeUp>
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=80"
                        alt="Finance and Procurement"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Double-Entry Real-time Ledger
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Finance &amp; Procurement
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      From Transaction to Financial Truth.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Immutable double-entry general ledger, automated PO three-way matching, fiscal period close checklists, and live drill-through financial statements directly connected to operations.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Automated three-way matching (PO, Goods Receipt &amp; Vendor Invoice)</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Subledger event auto-posting with zero manual journal friction</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Real-time P&amp;L, balance sheet, and period close governance</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/finance"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore Finance Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        70% invoices auto-cleared
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </section>

        {/* SECTION 5: MOBILE SECTION (Meta AI dark hardware aesthetic, photorealistic mobile mockup) */}
        <section id="technologies" className="bg-[#0B0F17] py-24 lg:py-36 text-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 text-xs font-bold text-orange-400 mb-6">
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Native Field Mobile</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                    GigaOps Mobile — Built for the Field
                  </h2>

                  <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Offline-first React Native applications for iOS and Android. Field workers execute critical work orders, scan barcodes, log time, and capture photo evidence — whether underground or miles off-grid.
                  </p>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Today / My Work', desc: 'Prioritized shift agenda with instant task navigation' },
                      { title: 'CMMS Execution', desc: 'Step-by-step PM checklists with mandatory photo proof' },
                      { title: 'Workforce & Dispatch', desc: 'Real-time job notifications and turn-by-turn routing' },
                      { title: 'Geospatial & Spatial Maps', desc: 'Site maps, hazardous zones, and geofence verification' },
                      { title: 'Documents & Scanner', desc: 'Sub-second camera barcode, QR & equipment plate scanning' },
                      { title: 'E-Sign & Approvals', desc: 'Customer sign-off and instant invoice triggering' },
                    ].map((feature, idx) => (
                      <div key={idx} className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl">
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="h-2 w-2 rounded-full bg-[#FF7200]" />
                          <span className="text-sm font-bold text-white">{feature.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-4.5">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-wrap items-center gap-6 text-xs font-bold tracking-wider uppercase text-gray-400">
                    <span className="text-orange-400 font-extrabold">Offline-First SQLite</span>
                    <span>·</span>
                    <span>React Native Architecture</span>
                    <span>·</span>
                    <span>iOS &amp; Android Native</span>
                    <span>·</span>
                    <span>12 Mobile Modules</span>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column: High-Fidelity Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <FadeUp delay={0.15}>
                  <div className="relative w-[300px] sm:w-[320px] rounded-[48px] border-[6px] border-gray-800 bg-gray-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                    {/* Dynamic Island */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-900 border border-gray-700" />
                    </div>

                    {/* Phone Screen Container */}
                    <div className="rounded-[40px] bg-gray-900 overflow-hidden text-left border border-gray-800 pt-7 pb-4">
                      {/* Status Bar */}
                      <div className="px-5 py-2 flex items-center justify-between text-[11px] text-gray-400 border-b border-gray-800">
                        <span className="font-bold text-white">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[10px] text-emerald-400 font-semibold">Offline Sync Ready</span>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="bg-[#FF7200] px-4 py-3 text-white flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-orange-200">Facility Plant #4</div>
                          <div className="text-sm font-extrabold">Today's Assigned Jobs</div>
                        </div>
                        <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full font-bold">3 Active</span>
                      </div>

                      {/* Work Order Cards */}
                      <div className="p-3 space-y-2.5">
                        <div className="bg-gray-800/90 border border-gray-700 p-3 rounded-2xl shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-bold text-orange-400">WO-1842 · Critical PM</span>
                            <span className="text-[9px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded-full font-bold">Priority 1</span>
                          </div>
                          <div className="text-xs font-semibold text-white">Main Slurry Pump Vibration Check</div>
                          <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-2">
                            <span>Bay 4 Substation</span>
                            <span>•</span>
                            <span className="text-emerald-400">GPS Verified</span>
                          </div>
                        </div>

                        <div className="bg-gray-800/60 border border-gray-700/60 p-3 rounded-2xl">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-bold text-gray-300">WO-1843 · Routine</span>
                            <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded-full font-bold">In Progress</span>
                          </div>
                          <div className="text-xs font-semibold text-white">Hydraulic Filter Replacement</div>
                        </div>

                        {/* QR Scanner Simulation Card */}
                        <div className="bg-gradient-to-b from-gray-800 to-gray-850 border border-orange-500/40 p-3 rounded-2xl">
                          <div className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1.5">Asset Scanner Active</div>
                          <div className="h-16 bg-black/60 rounded-xl border border-dashed border-orange-400/50 flex flex-col items-center justify-center text-center p-2">
                            <span className="text-xs font-bold text-white">Asset #PUMP-4091</span>
                            <span className="text-[9px] text-emerald-400 font-semibold mt-0.5">Matched: Flowserve 500HP</span>
                          </div>
                        </div>

                        {/* Sign-off button */}
                        <div className="bg-[#FF7200] text-white text-center py-2.5 rounded-xl text-xs font-bold shadow-md shadow-orange-900/40">
                          Complete Job &amp; Capture Sign-off
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: STATS */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              <FadeUp delay={0.05} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">30+</div>
                <div className="text-sm font-bold text-gray-900 mt-2">GigaOps Modules</div>
                <div className="text-xs text-gray-500 mt-0.5">Pre-integrated business suite</div>
              </FadeUp>
              <FadeUp delay={0.1} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">9</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Product Lines</div>
                <div className="text-xs text-gray-500 mt-0.5">Specialized enterprise software</div>
              </FadeUp>
              <FadeUp delay={0.15} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">12</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Mobile Capabilities</div>
                <div className="text-xs text-gray-500 mt-0.5">Offline-first native field tools</div>
              </FadeUp>
              <FadeUp delay={0.2} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">100%</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Audit Trail Lineage</div>
                <div className="text-xs text-gray-500 mt-0.5">Immutable financial compliance</div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 7: OTHER PRODUCTS (Beyond GigaOps) */}
        <section id="products" className="bg-gray-50/70 py-24 lg:py-32 scroll-mt-20">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Digital Products Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
                Beyond GigaOps — The Gigasys Product Portfolio
              </h2>
              <p className="text-lg text-gray-500">
                In addition to the GigaOps enterprise platform, Gigasys designs, engineers, and operates focused digital software products for communications, secondary commerce, social infrastructure, and conversational AI.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => {
                const IconComponent = product.icon;
                return (
                  <FadeUp key={product.name} delay={idx * 0.05}>
                    <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center group-hover:bg-[#FF7200] group-hover:text-white transition-colors duration-200">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF7200] transition-colors mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          {product.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] group-hover:translate-x-1 transition-transform"
                        >
                          <span>Explore product</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 8: INDUSTRIES */}
        <section id="industries" className="bg-white py-24 lg:py-32 scroll-mt-20">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Mission-Critical Domains
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
                Built for the Industries That Keep the World Running
              </h2>
              <p className="text-lg text-gray-500">
                GigaOps is designed for organizations operating at scale in complex physical infrastructure and demanding operational environments.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, idx) => (
                <FadeUp key={ind.name} delay={idx * 0.05}>
                  <div className="relative overflow-hidden rounded-3xl h-64 group shadow-sm border border-gray-100">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white font-extrabold text-xl leading-tight">
                        {ind.name}
                      </div>
                      <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="bg-[#0B0F17] py-28 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 rounded-full mb-6">
                Start Your Operational Transformation
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Ready to modernize your operations?
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
                Talk to our systems engineering team for a live walkthrough of GigaOps. No high-level slides. Just an architectural demonstration tailored to your assets and workflows.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:connect@gigasystech.com?subject=GigaOps%20Architecture%20Demo"
                  className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-bold px-9 py-4 rounded-full transition-all shadow-xl shadow-orange-500/20 text-base"
                >
                  Book an Architecture Demo <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-9 py-4 rounded-full hover:bg-white/10 transition-all text-base"
                >
                  Talk to an expert
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800/80 text-xs text-gray-400 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:connect@gigasystech.com" className="text-orange-400 hover:underline">
                  connect@gigasystech.com
                </a>
                <span>•</span>
                <span>Delaware, USA</span>
                <span>•</span>
                <span>Hyderabad, India</span>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </Layout>
  );
}
