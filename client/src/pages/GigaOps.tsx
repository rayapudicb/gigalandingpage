import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Wrench,
  Users2,
  Boxes,
  PackageCheck,
  Wallet,
  Workflow,
  BarChart3,
  MessageSquare,
  FileSignature,
  MapPin,
  Database,
  CheckCircle2,
  Globe2,
  Smartphone,
  ShieldCheck,
  Check,
  X,
  Minus,
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

const modules = [
  {
    icon: Wrench,
    name: 'Asset & Maintenance',
    slug: 'maintenance',
    desc: 'CMMS, work orders, PM schedules, asset register, MRO parts, reliability analytics',
    category: 'Operations',
  },
  {
    icon: Users2,
    name: 'Workforce Operations',
    slug: 'workforce',
    desc: 'Resource directory, scheduling, dispatch, attendance, compliance, pay-ready exports',
    category: 'Operations',
  },
  {
    icon: Boxes,
    name: 'Inventory & Supply Chain',
    slug: 'inventory',
    desc: 'Product catalogue, multi-warehouse, receiving, lot traceability, cycle counting',
    category: 'Supply Chain',
  },
  {
    icon: PackageCheck,
    name: 'Procurement & Orders',
    slug: 'procurement',
    desc: 'Purchase requisitions, POs, three-way matching, sales orders, AP/AR',
    category: 'Supply Chain',
  },
  {
    icon: Wallet,
    name: 'Finance & Spend',
    slug: 'finance',
    desc: 'Double-entry ledger, subledgers, period close, expense management, financial reporting',
    category: 'Finance',
  },
  {
    icon: Workflow,
    name: 'Workflow & Automation',
    slug: 'automation',
    desc: 'Visual DAG studio, business rules, dynamic forms, state machine orchestration',
    category: 'Platform',
  },
  {
    icon: BarChart3,
    name: 'Analytics & Reporting',
    slug: 'analytics',
    desc: 'KPI dashboards, governed metrics, explore, drill-down, scheduled reports',
    category: 'Platform',
  },
  {
    icon: MessageSquare,
    name: 'Communications',
    slug: 'communications',
    desc: 'Unified inbox, email, SMS, WhatsApp, voice, templates, campaign delivery',
    category: 'Engagement',
  },
  {
    icon: FileSignature,
    name: 'Documents & E-Sign',
    slug: 'documents',
    desc: 'Document capture, scan, structured extraction, e-signature envelopes',
    category: 'Platform',
  },
  {
    icon: MapPin,
    name: 'Geospatial & Places',
    slug: 'geospatial',
    desc: 'Place hierarchies, spatial maps, boundaries, geofence compliance, scope',
    category: 'Operations',
  },
  {
    icon: Database,
    name: 'Data & Integration',
    slug: 'data',
    desc: 'Data contracts, schema mapping, webhook ingestion, connector catalogue, lineage',
    category: 'Platform',
  },
];

const architectureBlocks = [
  {
    icon: Globe2,
    title: 'Web Platform',
    desc: 'Full workbenches for managers, planners and administrators',
    detail: 'Responsive desktop applications with multi-workspace navigation, granular views, data filtering, and bulk actions.',
  },
  {
    icon: Smartphone,
    title: 'Native Mobile',
    desc: 'Offline-first iOS & Android for field workers',
    detail: 'Built with React Native for smooth 60fps performance, biometric login, barcode scanning, GPS capture, and local sync.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Multi-tenant, RBAC, SSO, data isolation',
    detail: 'Tenant isolation at the database layer, role-based access control, SAML/OIDC SSO, and immutable audit event logging.',
  },
  {
    icon: Database,
    title: 'Open Integration',
    desc: 'API-first with data contracts and connector hub',
    detail: 'Idempotent webhook delivery, bidirectional connector catalogue, schema validation, and complete data exportability.',
  },
];

const comparisonData = [
  {
    feature: 'Real-time field mobile',
    gigaOps: { status: 'check', text: 'Full native offline apps' },
    spreadsheets: { status: 'x', text: 'None' },
    legacy: { status: 'partial', text: 'Clunky web wrappers' },
    point: { status: 'partial', text: 'Fragmented apps' },
  },
  {
    feature: 'Offline-first execution',
    gigaOps: { status: 'check', text: 'Complete sync engine' },
    spreadsheets: { status: 'x', text: 'Version sync conflicts' },
    legacy: { status: 'x', text: 'Requires constant VPN' },
    point: { status: 'partial', text: 'Selective online only' },
  },
  {
    feature: 'Visual workflow builder',
    gigaOps: { status: 'check', text: 'Visual DAG studio & rules' },
    spreadsheets: { status: 'x', text: 'Manual macros & scripts' },
    legacy: { status: 'partial', text: 'Costly ABAP / custom code' },
    point: { status: 'partial', text: 'Siloed automations' },
  },
  {
    feature: 'Built-in analytics',
    gigaOps: { status: 'check', text: 'Governed metrics & drill-down' },
    spreadsheets: { status: 'partial', text: 'Fragile manual pivots' },
    legacy: { status: 'partial', text: 'Slow batch BI reports' },
    point: { status: 'partial', text: 'Isolated module metrics' },
  },
  {
    feature: 'Multi-module connected',
    gigaOps: { status: 'check', text: '30+ domains unified' },
    spreadsheets: { status: 'x', text: 'Disconnected workbook silos' },
    legacy: { status: 'check', text: 'Monolithic ERP core' },
    point: { status: 'x', text: 'Custom integration hell' },
  },
  {
    feature: 'Modern deployment',
    gigaOps: { status: 'check', text: 'Instant multi-tenant cloud' },
    spreadsheets: { status: 'x', text: 'No enterprise governance' },
    legacy: { status: 'x', text: '18-month implementations' },
    point: { status: 'check', text: 'Quick point rollout' },
  },
];

export default function GigaOps() {
  return (
    <Layout>
      <div className="bg-white text-gray-900">
        {/* SECTION 1: HERO */}
        <section className="bg-gray-900 py-24 lg:py-32 relative overflow-hidden text-white">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <FadeUp className="max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 text-xs font-semibold text-orange-400 mb-6">
                <span>Enterprise Connected Systems · Powered by GigaOps</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                GigaOps — Enterprise Operations Platform
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A single enterprise platform that connects every business domain — from asset management and workforce dispatch to supply chain, finance, and field execution — with native mobile apps for frontline teams.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-orange-900/50 hover:-translate-y-0.5"
                >
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all"
                >
                  Explore Modules
                </a>
              </div>

              <div className="mt-14 pt-8 border-t border-gray-800 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-400">
                <span>Multi-Tenant Enterprise</span>
                <span className="text-gray-700">·</span>
                <span>Offline-First Field Mobile</span>
                <span className="text-gray-700">·</span>
                <span>30+ Business Modules</span>
                <span className="text-gray-700">·</span>
                <span>100% Audit Trail</span>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SECTION 2: MODULE GRID */}
        <section id="modules" className="bg-white py-24 lg:py-32 scroll-mt-20">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                SaaS Modules Catalogue
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-4">
                All GigaOps Modules
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                From core operations and supply chain to finance and workflow orchestration — each module operates seamlessly on a unified data schema.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m, idx) => {
                const IconComponent = m.icon;
                return (
                  <FadeUp key={m.slug} delay={idx * 0.04}>
                    <Link href={`/gigaops/${m.slug}`} className="block h-full">
                      <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center group-hover:bg-[#FF7200] group-hover:text-white transition-colors duration-200">
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                              {m.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF7200] transition-colors">
                            {m.name}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            {m.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-[#FF7200]">
                          <span>Explore module capabilities</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: PLATFORM ARCHITECTURE */}
        <section className="bg-gray-50/70 py-24 lg:py-32">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                System Topology
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-4">
                Enterprise Platform Architecture
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Built from inception to handle complex operational workflows with security, reliability, and real-time offline synchronization.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {architectureBlocks.map((block, idx) => {
                const IconComponent = block.icon;
                return (
                  <FadeUp key={block.title} delay={idx * 0.08}>
                    <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h3>
                      <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-3">
                        {block.desc}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {block.detail}
                      </p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY GIGAOPS (COMPARISON) */}
        <section className="bg-white py-24 lg:py-32">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Operations Teams Choose GigaOps
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                See how GigaOps compares against legacy ERP suites, fragmented point tools, and manual spreadsheets.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/80 border-b border-gray-200">
                      <th className="py-4 px-6 text-sm font-semibold text-gray-900">Capability</th>
                      <th className="py-4 px-6 text-sm font-bold text-orange-600 bg-orange-50/50">
                        GigaOps Platform
                      </th>
                      <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                        Spreadsheets
                      </th>
                      <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                        Legacy ERP
                      </th>
                      <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                        Point Solutions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          {row.feature}
                        </td>

                        {/* GigaOps */}
                        <td className="py-4 px-6 bg-orange-50/20 font-medium text-gray-900">
                          <div className="flex items-center gap-2">
                            <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                            </span>
                            <span>{row.gigaOps.text}</span>
                          </div>
                        </td>

                        {/* Spreadsheets */}
                        <td className="py-4 px-6 text-gray-500">
                          <div className="flex items-center gap-2">
                            {row.spreadsheets.status === 'x' ? (
                              <span className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                <X className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                                <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            )}
                            <span>{row.spreadsheets.text}</span>
                          </div>
                        </td>

                        {/* Legacy ERP */}
                        <td className="py-4 px-6 text-gray-500">
                          <div className="flex items-center gap-2">
                            {row.legacy.status === 'check' ? (
                              <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            ) : row.legacy.status === 'x' ? (
                              <span className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                <X className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                                <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            )}
                            <span>{row.legacy.text}</span>
                          </div>
                        </td>

                        {/* Point Solutions */}
                        <td className="py-4 px-6 text-gray-500">
                          <div className="flex items-center gap-2">
                            {row.point.status === 'check' ? (
                              <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            ) : row.point.status === 'x' ? (
                              <span className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                <X className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                                <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                              </span>
                            )}
                            <span>{row.point.text}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="bg-orange-500 py-20 text-white">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <FadeUp className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to modernize your operations with GigaOps?
              </h2>
              <p className="mt-5 text-lg text-orange-100 leading-relaxed max-w-2xl mx-auto">
                Schedule a live, architecture-first walkthrough with our engineers. We will show you real workflows running across web and mobile.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-orange-50 transition-all hover:-translate-y-0.5"
                >
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                >
                  Contact Sales
                </Link>
              </div>
              <p className="mt-8 text-sm text-orange-200">
                connect@gigasystech.com · Hyderabad · Delaware, USA
              </p>
            </FadeUp>
          </div>
        </section>
      </div>
    </Layout>
  );
}
