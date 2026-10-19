import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  ShoppingCart,
  CheckSquare,
  Building,
  ShoppingBag,
  CreditCard,
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
    icon: FileText,
    title: "Purchase Requisitions",
    description:
      "Employee requests with multi-level approval, delegation of authority, budget checking.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Orders",
    description:
      "PO from approved PRs, vendor acknowledgement, change order management.",
  },
  {
    icon: CheckSquare,
    title: "Three-Way Matching",
    description:
      "Auto GR/IR match, tolerance-based exception flagging, approval routing.",
  },
  {
    icon: Building,
    title: "Vendor Management",
    description:
      "Vendor profiles, scorecards, contacts and performance tracking.",
  },
  {
    icon: ShoppingBag,
    title: "Sales Orders & Fulfillment",
    description:
      "Quote-to-order, ATP, inventory allocation, delivery confirmation.",
  },
  {
    icon: CreditCard,
    title: "AP & Vendor Invoices",
    description:
      "Invoice registration, PO/GR match, approval, payment scheduling.",
  },
];

const steps = [
  {
    number: "01",
    title: "Request to approval",
    description:
      "Workers raise PRs, system routes by value/category/policy.",
  },
  {
    number: "02",
    title: "Order to delivery",
    description:
      "Approved PRs become POs, vendors acknowledge, goods received and matched.",
  },
  {
    number: "03",
    title: "Match to pay",
    description:
      "Three-way match auto-clears; exceptions route for human review.",
  },
];

const outcomes = [
  {
    value: "70%",
    label: "Invoices auto-cleared via 3-way matching",
  },
  {
    value: "50%",
    label: "Faster purchase order lifecycle turnaround",
  },
  {
    value: "80%",
    label: "Reduction in off-contract maverick spend",
  },
  {
    value: "45%",
    label: "Faster vendor onboarding & compliance qualification",
  },
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Government",
  "Retail",
  "Construction",
  "Energy",
];

export default function Procurement() {
  return (
    <Layout>
      <div className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-white pt-24 pb-16 lg:pt-28 lg:pb-24 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    GigaOps · Procurement & Orders
                  </div>
                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                    Purchase Smarter. Pay Faster. Never Lose Control.
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl max-w-2xl">
                    GigaOps Procurement connects requisitions, approvals, purchase orders, three-way matching and vendor payments in one governed workflow.
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
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80"
                        alt="Purchase Smarter. Pay Faster. Never Lose Control."
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
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                  Capabilities
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Governed Source-to-Pay Capabilities
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  Enforce expenditure policies, eliminate invoice friction, and strengthen strategic vendor partnerships.
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
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                  Workflow
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How It Works
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  Transparent procurement execution from internal requisition to verified accounts payable clearance.
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
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <FadeUp>
                  <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-400">
                    Business Outcomes
                  </div>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Disciplined spend control and automated efficiency.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-gray-400">
                    Replace manual reconciliation and paperwork delays with rigorous policy controls and touchless matching.
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
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                  Target Industries
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Built for Enterprise Purchasing Demands
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Enforce regulatory audit trails, complex delegations of authority, and contract terms across diverse sectors.
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
                Ready to streamline your procurement process?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed">
                Empower your finance and procurement leaders with automated 3-way matching and complete spend visibility.
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
