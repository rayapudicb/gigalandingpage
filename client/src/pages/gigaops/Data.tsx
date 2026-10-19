import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Database,
  Link as LinkIcon,
  ShieldCheck,
  RefreshCw,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";

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
  {
    icon: Database,
    title: "Data Contracts & Schema Discovery",
    desc: "Contract-first integration with schema validation, field mapping and normalization rules enforced at ingestion boundaries.",
  },
  {
    icon: LinkIcon,
    title: "Connector Catalogue",
    desc: "Pre-built connectors and a tenant connection hub for ERP, HRMS, IoT and third-party systems with credential vault.",
  },
  {
    icon: ShieldCheck,
    title: "Webhook Ingestion",
    desc: "HMAC-verified webhook endpoint with idempotency, deduplication and journaling so every event is processed exactly once.",
  },
  {
    icon: RefreshCw,
    title: "Quality Assertions & Drift Detection",
    desc: "Automated quality rules, drift alerts and schema change notifications catch data issues before they reach downstream modules.",
  },
  {
    icon: Zap,
    title: "Delta Sync & Event Dispatch",
    desc: "Incremental sync, change data capture and cross-module workflow dispatch — only move what changed, every time.",
  },
  {
    icon: BarChart3,
    title: "Data Lineage & Audit",
    desc: "Full lineage from source event to transformed record with ingestion history, replay capability and audit trail.",
  },
];

const steps = [
  { n: "01", title: "Define Contracts", desc: "Author data contracts with schemas, field mappings and quality rules for each source system." },
  { n: "02", title: "Connect Sources", desc: "Select connectors from the catalogue or register a webhook endpoint for real-time push ingestion." },
  { n: "03", title: "Monitor Quality", desc: "Live quality assertions surface drift and failures instantly with actionable alerts before pipelines break." },
];

const outcomes = [
  { stat: "60%", label: "Faster integration onboarding" },
  { stat: "Zero", label: "Schema drift failures" },
  { stat: "100%", label: "Idempotent processing" },
  { stat: "Full", label: "Data lineage & audit" },
];

const industries = [
  "Manufacturing", "Healthcare", "Government", "Retail", "Financial Services", "Technology",
];

export default function Data() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                GigaOps · Data &amp; Integration
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Connect Systems Through Governed Contracts, Not Brittle Point Integrations.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                GigaOps Data &amp; Integration gives every module a governed ingestion boundary — with schema contracts, quality assertions and full event lineage.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Get a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/gigaops"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  All GigaOps Modules
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
                  alt="Data integration platform"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900">Platform Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Everything you need to connect, govern and monitor data flowing between systems at enterprise scale.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 0.06}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:shadow-md transition-all h-full">
                  <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                    <cap.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-100 mb-4">{step.n}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="text-3xl font-bold text-white">Business Outcomes</h2>
              <p className="mt-4 text-gray-400">
                Customers using GigaOps Data &amp; Integration report dramatic reductions in integration failures and onboarding time.
              </p>
            </FadeUp>
            <div className="grid grid-cols-2 gap-6">
              {outcomes.map((o, i) => (
                <FadeUp key={o.label} delay={i * 0.07}>
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-orange-400">{o.stat}</div>
                    <div className="text-sm text-gray-400 mt-1">{o.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 text-center">
          <FadeUp>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((ind) => (
                <span key={ind} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {ind}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to connect your systems through governed data contracts?
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Talk to our integration specialists for a tailored walkthrough.
            </p>
            <a
              href="mailto:connect@gigasystech.com"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
