import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Users2,
  TrendingUp,
  BarChart2,
  CalendarCheck,
  Target,
  FileCheck2,
  ArrowRight,
  Zap,
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
    icon: Target,
    title: "Multi-Stage Visual Pipelines",
    desc: "Customizable sales funnels with weighted probabilistic forecasting, deal velocity indicators, and automated SLA warnings.",
  },
  {
    icon: Users2,
    title: "Account & Stakeholder Graphs",
    desc: "Interactive organizational mapping to identify champions, economic buyers, detractors, and technical decision makers.",
  },
  {
    icon: Zap,
    title: "Zero-Touch Activity Logging",
    desc: "Automatically records client emails, Google/Outlook calendar events, and phone call notes without manual sales rep friction.",
  },
  {
    icon: FileCheck2,
    title: "CPQ & Dynamic Proposals",
    desc: "Configure product catalogues, volume discounts, dynamic pricing rules, and generate e-sign proposals in one click.",
  },
  {
    icon: BarChart2,
    title: "Revenue & Cohort Analytics",
    desc: "Deep conversion funnel diagnostics, sales rep win-rates, cohort analysis, and executive revenue pacing dashboards.",
  },
  {
    icon: CalendarCheck,
    title: "Intelligent Lead Scoring",
    desc: "Behavioral intent scoring and rule-based routing ensure high-value enterprise leads are immediately routed to the right rep.",
  },
];

const steps = [
  {
    n: "01",
    title: "Capture & Enrich Leads",
    desc: "Inbound forms, webhooks, and partner networks feed into GigaCRM with automatic company enrichment.",
  },
  {
    n: "02",
    title: "Orchestrate Deal Velocity",
    desc: "Manage multi-stakeholder approval stages, automated follow-up sequences, and quote negotiations.",
  },
  {
    n: "03",
    title: "Close & Retain Accounts",
    desc: "Seamlessly transition signed deals into customer success onboarding workflows with full contract history.",
  },
];

const outcomes = [
  { stat: "35%", label: "Increase in enterprise deal win rates" },
  { stat: "50%", label: "Less time spent on manual CRM data entry" },
  { stat: "2.5x", label: "Faster sales cycle deal velocity" },
  { stat: "98%", label: "Quarterly revenue forecast accuracy" },
];

export default function GigaCRM() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · Customer Relationship Management
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Pipeline Precision. Account Intelligence. Zero Data Clutter.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                Built for complex B2B sales cycles — GigaCRM combines visual deal pipelines, stakeholder relationship graphs, and automated activity logging.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=GigaCRM%20Trial%20Request"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  All Products
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                  alt="GigaCRM sales pipeline platform"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900">CRM Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Give your revenue team clarity, eliminate pipeline leakage, and close high-value enterprise accounts predictably.
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
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900">How GigaCRM Works</h2>
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
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="text-3xl font-bold text-white">Business Outcomes</h2>
              <p className="mt-4 text-gray-400">
                Designed for high-growth B2B companies looking for rigorous sales execution without administrative overhead.
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

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Accelerate your revenue engine with GigaCRM.
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Book a live product consultation tailored to your sales process.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=GigaCRM%20Consultation"
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
