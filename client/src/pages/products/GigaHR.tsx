import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BriefcaseBusiness,
  FileText,
  UserCheck,
  TrendingUp,
  Award,
  ShieldCheck,
  ArrowRight,
  Sparkles,
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
    icon: Sparkles,
    title: "Semantic Resume Parsing & Scoring",
    desc: "AI-powered MyNextCV intelligence extracts candidate skills, experience depth, and career trajectory with zero demographic bias.",
  },
  {
    icon: UserCheck,
    title: "Permission-Aware Talent Pipelines",
    desc: "Governed applicant tracking system (ATS) with role-based candidate review stages, interview scorecards, and hiring manager approvals.",
  },
  {
    icon: TrendingUp,
    title: "Skill Taxonomy & Career Pathing",
    desc: "Map internal workforce capabilities, identify organizational skill gaps, and suggest automated upskilling paths.",
  },
  {
    icon: FileText,
    title: "Automated Onboarding & Document Vault",
    desc: "Digital offer letters, background verification workflows, I-9/tax forms, and encrypted employee document storage.",
  },
  {
    icon: Award,
    title: "Continuous Performance Reviews",
    desc: "OKRs, 360-degree feedback, quarterly check-ins, and automated promotion milestones tied directly to business results.",
  },
  {
    icon: ShieldCheck,
    title: "Global HR & Payroll Compliance",
    desc: "Jurisdiction-specific employment law guardrails, automated leave accruals, and direct sync with enterprise payroll engines.",
  },
];

const steps = [
  {
    n: "01",
    title: "Attract & Screen",
    desc: "Publish open requisitions and let MyNextCV semantic scoring surface the best qualified candidates automatically.",
  },
  {
    n: "02",
    title: "Interview & Onboard",
    desc: "Coordinate team interviews, gather unified scorecards, issue digital offers, and complete onboarding in hours.",
  },
  {
    n: "03",
    title: "Retain & Develop",
    desc: "Track employee growth, conduct continuous performance reviews, and build robust succession pipelines.",
  },
];

const outcomes = [
  { stat: "65%", label: "Faster time-to-hire across technical roles" },
  { stat: "40%", label: "Reduction in external agency recruiting costs" },
  { stat: "95%", label: "First-week employee onboarding satisfaction" },
  { stat: "100%", label: "Compliance audit readiness across jurisdictions" },
];

export default function GigaHR() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · HR &amp; Recruitment Intelligence
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Permission-Aware Talent Journeys &amp; CV Intelligence.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                GigaHR / MyNextCV is the enterprise platform connecting AI resume evaluation, governed applicant tracking, and employee growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=GigaHR%20Demo%20Request"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Schedule a Demo <ArrowRight className="h-4 w-4" />
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                  alt="GigaHR team workplace"
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
                Modern tools engineered to empower people teams, remove recruiting bottlenecks, and build high-performance organizations.
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
              <h2 className="text-3xl font-bold text-gray-900">How GigaHR Works</h2>
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
                Accelerate hiring velocity, cut recruitment spend, and elevate employee retention through intelligent workflows.
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
              Transform your talent acquisition and workforce growth.
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Talk to our HR technology consultants for a custom platform walkthrough.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=GigaHR%20Consultation"
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
