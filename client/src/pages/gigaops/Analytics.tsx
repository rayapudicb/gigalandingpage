import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Table, Download, CheckCircle2 } from "lucide-react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const capabilities = [
  { icon: BarChart3, title: "KPI Dashboards", description: "Executive overview dashboards with configurable KPI cards, trend lines and real-time operational metrics." },
  { icon: TrendingUp, title: "Governed Metrics & Measures", description: "Centralized metric definitions ensure every team uses the same calculations and business rules." },
  { icon: LineChart, title: "Explore & Ad-hoc Analysis", description: "Interactive explorer with filters, formulas, grouping and saved chart configurations for any dataset." },
  { icon: PieChart, title: "Place-Level Drill-Down", description: "Roll up KPIs from equipment to zone to site to region — drill down to source records in one click." },
  { icon: Table, title: "Scheduled Reports", description: "Define report templates, set delivery schedules and auto-distribute to stakeholders via email or in-app." },
  { icon: Download, title: "Data Export & Lineage", description: "Export to CSV, trace metric lineage back to source events and document data provenance for compliance." },
];

const steps = [
  { title: "Define your metrics", description: "Set up governed metric definitions with consistent formulas, dimensions and business rules used across all teams." },
  { title: "Build your dashboards", description: "Drag-and-drop KPI cards, charts and place rollups into purpose-built dashboards for each role or function." },
  { title: "Distribute and act", description: "Schedule reports to stakeholders, enable drill-down from symptom to source and drive accountable action." },
];

const outcomes = [
  { value: "70%", label: "Faster recurring report preparation" },
  { value: "1×", label: "Single governed metric definition" },
  { value: "80%", label: "Reduction in data disputes" },
  { value: "Real-time", label: "Operational KPI visibility" },
];

const industries = ["Manufacturing", "Energy & Utilities", "Healthcare", "Facilities", "Construction", "Retail"];

export default function AnalyticsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">GigaOps · Analytics & Reporting</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                From Trusted Facts to Accountable Decisions.
              </h1>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                GigaOps Analytics gives operations and finance leaders governed metrics, live KPI dashboards and scheduled reports — all connected to the source transactions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:connect@gigasystech.com" className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-md shadow-orange-200">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/gigaops" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                  View All Modules
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                  alt="Analytics dashboards"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything your operations need to see</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">One intelligence workspace for metrics, exploration, dashboards and reporting.</p>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-orange-100 hover:shadow-md transition-all h-full">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                    <cap.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">{cap.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">How it works</h2>
          </FadeUp>
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.1}>
                <div>
                  <div className="text-6xl font-bold text-gray-100">0{i + 1}</div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white">Measurable business impact</h2>
              <p className="mt-3 text-gray-400">What GigaOps Analytics delivers for your team.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((o, i) => (
              <FadeUp key={o.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400">{o.value}</div>
                  <div className="mt-2 text-sm text-gray-400">{o.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Industries served</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span key={ind} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">{ind}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <FadeUp>
            <h2 className="text-3xl font-bold text-white">Ready to drive decisions with data?</h2>
            <p className="mt-4 text-orange-100">Join operations teams who run on GigaOps Analytics.</p>
            <a href="mailto:connect@gigasystech.com" className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              Book an Architecture Walkthrough <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
