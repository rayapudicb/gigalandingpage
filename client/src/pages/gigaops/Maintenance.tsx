import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Building2,
  CalendarCheck,
  Gauge,
  Package,
  BarChart3,
} from "lucide-react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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
    icon: Wrench,
    title: "Work Orders & Execution",
    description:
      "Create, assign, track and close work orders with history, labour logs, parts consumed and photo evidence.",
  },
  {
    icon: Building2,
    title: "Asset Register & Digital Twin",
    description:
      "Equipment catalogue with specs, hierarchy, warranty, documents and live condition context.",
  },
  {
    icon: CalendarCheck,
    title: "Preventive Maintenance",
    description:
      "Trigger-based and calendar PM plans with auto-generation, parts kitting and notifications.",
  },
  {
    icon: Gauge,
    title: "Meters & Condition Monitoring",
    description:
      "Log readings, define thresholds and trigger work orders when conditions exceed tolerance.",
  },
  {
    icon: Package,
    title: "MRO Inventory & Parts",
    description:
      "Storeroom management, issue parts against work orders, min/max stock and purchase requests.",
  },
  {
    icon: BarChart3,
    title: "Reliability Analytics",
    description:
      "MTBF, MTTR, planned vs reactive ratios and downtime trends with exportable dashboards.",
  },
];

const steps = [
  {
    number: "01",
    title: "Register your assets",
    description:
      "Import your register, define hierarchies, and link assets directly to physical locations and facilities.",
  },
  {
    number: "02",
    title: "Plan maintenance",
    description:
      "Set PM schedules, configure parts kits, and assign certified technicians by specialized skill set.",
  },
  {
    number: "03",
    title: "Execute in the field",
    description:
      "Mobile offline execution, photo evidence capture, labour logging, and digital customer sign-off.",
  },
];

const outcomes = [
  {
    value: "40%",
    label: "Reduction in reactive maintenance",
  },
  {
    value: "60%",
    label: "Faster work order cycle time",
  },
  {
    value: "100%",
    label: "Audit-ready asset & compliance history",
  },
  {
    value: "35%",
    label: "Increase in planned preventive maintenance",
  },
];

const industries = [
  "Manufacturing",
  "Energy",
  "Healthcare",
  "Facilities",
  "Construction",
  "Transport",
];

export default function Maintenance() {
  return (
    <Layout>
      <div className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-white pt-24 pb-16 lg:pt-28 lg:pb-24 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    GigaOps · Asset Management
                  </div>
                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                    Control Every Asset. Prevent Every Failure.
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl max-w-2xl">
                    GigaOps CMMS gives maintenance teams complete visibility from work order creation to asset history — built for industrial operations at scale.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="mailto:connect@gigasystech.com"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition duration-200 hover:bg-orange-600 hover:shadow-orange-500/35"
                    >
                      Request a Demo
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Contact Team
                    </Link>
                  </div>
                </FadeUp>
              </div>

              <div className="lg:col-span-5">
                <FadeUp delay={0.15}>
                  <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                    <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-2xl shadow-gray-200/50">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
                        alt="Control Every Asset. Prevent Every Failure."
                        className="h-[360px] sm:h-[420px] lg:h-[460px] w-full object-cover object-center transition duration-500 hover:scale-105"
                        loading="eager"
                      />
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-gray-50 py-24 border-b border-gray-200/60">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                  Capabilities
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  End-to-End Asset & Maintenance Lifecycle
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  Designed for heavy machinery, distributed physical assets, and high-uptime facilities.
                </p>
              </div>
            </FadeUp>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item, idx) => (
                <FadeUp key={item.title} delay={idx * 0.08}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/5">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 transition group-hover:text-orange-600">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-24 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                  Workflow
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How It Works
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  Transition from chaotic reactive repairs to disciplined, data-driven maintenance.
                </p>
              </div>
            </FadeUp>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, idx) => (
                <FadeUp key={step.number} delay={idx * 0.1}>
                  <div className="relative h-full rounded-2xl border border-gray-100 bg-gray-50/70 p-8 sm:p-10 transition duration-200 hover:border-orange-300 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5">
                    <div className="font-mono text-5xl font-black text-gray-300/90 sm:text-6xl">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Business Outcomes */}
        <section className="bg-gray-900 py-24 text-white">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <FadeUp>
                  <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-400">
                    Business Outcomes
                  </div>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Proven reliability and cost performance.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-gray-400">
                    Eliminate downtime, streamline compliance audits, and maximize equipment longevity across your critical physical infrastructure.
                  </p>
                </FadeUp>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {outcomes.map((stat, idx) => (
                    <FadeUp key={stat.label} delay={idx * 0.08}>
                      <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-7 sm:p-8 backdrop-blur transition hover:border-orange-500/40">
                        <div className="font-mono text-4xl sm:text-5xl font-extrabold text-orange-500">
                          {stat.value}
                        </div>
                        <div className="mt-3 text-sm font-medium text-gray-400 leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                  Target Industries
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Built for Asset-Intensive Industries
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Standardized compliance and field-ready maintenance workflows tailored to industry demands.
                </p>
              </div>
            </FadeUp>

            <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {industries.map((ind, idx) => (
                <FadeUp key={ind} delay={idx * 0.04}>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:border-orange-500 hover:bg-orange-50/50 hover:text-orange-950">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>{ind}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-20 text-white relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to modernize your maintenance operations?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed">
                Connect with our asset management specialists to see how GigaOps can eliminate unplanned downtime across your plants and facilities.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-orange-600 shadow-xl shadow-orange-700/20 transition hover:bg-orange-50 hover:scale-105 active:scale-95"
                >
                  Schedule a Personalized Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </Layout>
  );
}
