import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  FlaskConical,
  ThermometerSun,
  AlertTriangle,
  Layers,
  FileCheck2,
  ShieldCheck,
  Clock,
  FileText,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Users2,
  BadgeCheck,
  Microscope,
  Atom,
  ClipboardList,
  Lock,
  Activity,
} from "lucide-react";

function FadeUp({
  children,
  delay = 0,
  className = "",
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const capabilities = [
  {
    icon: Atom,
    title: "Chemistry-First Material Balance",
    desc: "No result is trusted until each step's material balance closes. Every atom accounted for, every intermediate validated before the screen continues.",
  },
  {
    icon: ThermometerSun,
    title: "Thermal Runaway Prediction",
    desc: "Calculates reaction heat, maximum temperature if cooling fails, and onset of decomposition. Assigns an industry-standard criticality class 1–5 for every step.",
  },
  {
    icon: AlertTriangle,
    title: "Energetic Material Detection",
    desc: "Calculates oxygen balance and detects functional groups known to make compounds unstable — before the first gram is weighed out.",
  },
  {
    icon: Layers,
    title: "Dangerous Combination Checking",
    desc: "Every material pair in each step is checked against your versioned, cited hazard library. A documented control is required for every serious finding before the route can proceed.",
  },
  {
    icon: TrendingUp,
    title: "Process Economics Alongside Safety",
    desc: "Process mass intensity, waste factor, atom economy, and yield are shown side-by-side with safety results so cheaper, greener routes win earlier in development.",
  },
  {
    icon: FileCheck2,
    title: "Tamper-Evident Dossier Delivery",
    desc: "A Word and PDF report with tamper-evident checksums, actions to take before the kilo-lab, and the test plan for the laboratory — ready for safety and quality sign-off.",
  },
  {
    icon: BookOpen,
    title: "Versioned Criteria & Hazard Libraries",
    desc: "Every criterion and hazard entry is versioned, cited, and put in force on purpose by process safety specialists. Nothing changes without an audit record.",
  },
  {
    icon: ClipboardList,
    title: "Complete Evidence Retention",
    desc: "Every change is recorded with who, when, and why. Full immutable history for every route, every version, every screening decision — ready for regulatory inspection.",
  },
];

const outcomes = [
  { metric: "~2 hrs", label: "Route screened, vs. days of expert time" },
  { metric: "100%", label: "Routes with audit-ready dossier before kilo-lab" },
  { metric: "Zero", label: "Scale-up surprises from undetected hazards" },
  { metric: "Earlier", label: "Cost & sustainability visible at route selection" },
];

const personas = [
  {
    icon: FlaskConical,
    role: "R&D & Process Chemists",
    desc: "Enter a synthesis route and get answers in minutes. No specialist knowledge required to run the screen — the system guides every step.",
  },
  {
    icon: Activity,
    role: "Process Engineers",
    desc: "Use thermal risk class and detailed decomposition data to make scale-up decisions with evidence, not intuition.",
  },
  {
    icon: ShieldCheck,
    role: "Process Safety Specialists",
    desc: "Own the hazard library and decision criteria. Review flagged routes and approve dossiers. Full control over what the system knows.",
  },
  {
    icon: BadgeCheck,
    role: "Quality Assurance",
    desc: "Receive a complete audit trail and a signed dossier for every route screened. No gaps, no missing evidence, no interpretation required.",
  },
  {
    icon: Microscope,
    role: "R&D, CMC & Site Leadership",
    desc: "See the whole development portfolio and where the risk sits. Make portfolio decisions with safety data, not gut feel.",
  },
  {
    icon: Users2,
    role: "CDMOs & External Partners",
    desc: "Deliver a defensible safety screening package to sponsor companies as part of every process development engagement.",
  },
];

const industries = [
  "Pharmaceutical Process Development",
  "CDMOs & Contract Synthesis",
  "Agrochemicals",
  "Fine & Specialty Chemicals",
  "API Manufacturing",
  "Clinical & Pre-Clinical CMC",
];

export default function Speed() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        {/* Subtle ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[700px] h-[500px] bg-teal-50/60 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 xl:col-span-5">
              <FadeUp>
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-xs font-bold text-teal-700 mb-6">
                  <FlaskConical className="h-3.5 w-3.5" />
                  <span>Pharma Process Safety · Powered by GigaOps</span>
                </div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]">
                  SPEED
                </h1>
                <p className="text-xl lg:text-2xl font-semibold text-teal-700 mt-2 mb-6">
                  Process Safety Screening
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Find a chemical route's hazards on paper, before the first experiment.
                  SPEED screens each proposed synthesis route step by step in about two hours —
                  showing which routes are safe, which need tests first, and what each route
                  costs in materials. Every route ends in a signed-off-ready dossier your
                  safety and quality teams can trust.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:connect@gigasystech.com?subject=SPEED%20Process%20Safety%20Screening%20-%2030min%20Demo"
                    className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-teal-900/20 transition-all hover:-translate-y-0.5"
                  >
                    See a Route Screened Live
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/gigaops/maintenance"
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-semibold px-8 py-4 rounded-full transition-all"
                  >
                    GigaOps Platform
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-teal-600" /> FDA 21 CFR Part 11 Ready</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-teal-600" /> GMP Validated</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-teal-600" /> Tamper-Evident Audit Trail</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-teal-600" /> Deployable In Your Environment</span>
                </div>
              </FadeUp>
            </div>

            {/* Right: Hero visual — process lab */}
            <div className="lg:col-span-6 xl:col-span-7">
              <FadeUp delay={0.12}>
                <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-gray-200/70">
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&auto=format&fit=crop&q=80"
                    alt="Pharmaceutical process development laboratory"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

                  {/* Floating HUD overlay */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/80 p-5 shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">SPEED · Active Screen</div>
                        <div className="text-sm font-bold text-gray-900 mt-0.5">Route 04-B · Suzuki Coupling → Amide Formation</div>
                      </div>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">2h 14m</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-center">
                      <div className="bg-gray-50 rounded-xl p-2.5">
                        <div className="text-[9px] font-bold uppercase text-gray-400">Criticality</div>
                        <div className="text-lg font-black text-teal-700 mt-0.5">2</div>
                        <div className="text-[9px] text-teal-600 font-semibold">Low Risk</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5">
                        <div className="text-[9px] font-bold uppercase text-gray-400">Δ T<sub>max</sub></div>
                        <div className="text-lg font-black text-amber-600 mt-0.5">+38°C</div>
                        <div className="text-[9px] text-amber-600 font-semibold">Controlled</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5">
                        <div className="text-[9px] font-bold uppercase text-gray-400">PMI</div>
                        <div className="text-lg font-black text-gray-900 mt-0.5">18.4</div>
                        <div className="text-[9px] text-gray-500 font-semibold">kg/kg API</div>
                      </div>
                      <div className="bg-teal-700 rounded-xl p-2.5">
                        <div className="text-[9px] font-bold uppercase text-teal-200">Status</div>
                        <div className="text-lg font-black text-white mt-0.5">✓</div>
                        <div className="text-[9px] text-teal-200 font-semibold">Dossier Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-gray-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-4 py-1.5 text-xs font-bold text-red-400 mb-6">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>The Problem Process Teams Face Today</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Hazards discovered late cost weeks, batches, and sometimes safety incidents
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Process hazards are usually discovered in the kilo-lab, during scale-up, or at technology transfer.
                Each late surprise costs weeks of delay, failed batches, and rework. Today, screening lives in spreadsheets
                and in a few experts' heads — and it is nearly impossible to audit.
              </p>
              <div className="space-y-4">
                {[
                  "Hazards found at scale-up, not at route selection",
                  "Screening knowledge locked in experts' heads, not systems",
                  "Spreadsheet-based screens with no audit trail",
                  "Cost and environmental impact invisible at route selection",
                  "Technology transfer surprises from incomplete safety data",
                ].map((pain, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">✕</span>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{pain}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&auto=format&fit=crop&q=80"
                  alt="Thermal safety in pharmaceutical process chemistry"
                  className="w-full h-[420px] object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700 p-5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Without SPEED</div>
                    <div className="space-y-2">
                      {[
                        { label: "Scale-up safety review", timing: "Kilo-lab stage", color: "text-red-400" },
                        { label: "Technology transfer risk", timing: "Plant hand-over", color: "text-red-400" },
                        { label: "Hazard data availability", timing: "Inconsistent", color: "text-amber-400" },
                        { label: "Audit trail completeness", timing: "None", color: "text-red-400" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-gray-300">{item.label}</span>
                          <span className={`font-bold ${item.color}`}>{item.timing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full">
              What SPEED Does
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
              Eight capabilities. One screening session.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              SPEED runs every check in a structured, repeatable sequence. Nothing is skipped.
              No finding can be dismissed without a documented control.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.04}>
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-7 hover:border-teal-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-11 w-11 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-5 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{cap.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{cap.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24 lg:py-32 border-t border-b border-gray-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full">
                Step by Step
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-6 mb-8 leading-tight">
                One route, fully screened,<br />in about two hours
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Enter the route",
                    desc: "R&D or process chemists enter synthesis steps, materials, and conditions. No chemistry specialist knowledge required to run the screen — SPEED guides the input.",
                  },
                  {
                    step: "02",
                    title: "SPEED checks automatically",
                    desc: "Material balances close first. Then thermal parameters, energetic groups, compatibility pairs, and economics are calculated in sequence — every check visible in real time.",
                  },
                  {
                    step: "03",
                    title: "Findings need controls",
                    desc: "Every serious hazard finding is flagged and must have a documented control assigned before the route can advance. Nothing is silently passed.",
                  },
                  {
                    step: "04",
                    title: "Dossier generated",
                    desc: "A tamper-evident Word and PDF dossier is produced with checksums, the test plan for the lab, and actions for before the kilo-lab — ready for safety and quality sign-off.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-5xl font-black text-gray-100 leading-none shrink-0 w-14 text-right">{step.step}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&auto=format&fit=crop&q=80"
                  alt="Chemical compatibility and process safety data visualisation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

                {/* Floating compatibility matrix card */}
                <div className="absolute top-6 right-6 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700 p-4 w-56">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Compatibility Matrix · Step 2</div>
                  <div className="grid grid-cols-5 gap-1 mb-2">
                    {["teal","teal","amber","teal","teal","teal","teal","teal","red","teal","amber","teal","teal","teal","teal","teal","teal","teal","teal","teal","teal","red","teal","teal","teal"].map((color, i) => (
                      <div key={i} className={`h-4 w-full rounded-sm ${color === 'teal' ? 'bg-teal-600/50' : color === 'amber' ? 'bg-amber-500/60' : 'bg-red-500/70'}`} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-semibold mt-2">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-red-500" />Serious Finding</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-amber-500" />Review</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 p-4">
                    <div className="text-[10px] font-bold uppercase text-gray-400 mb-2">Route 04-B · Final Assessment</div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-700 font-black text-sm shrink-0">2</div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Criticality Class 2 — Low Thermal Risk</div>
                        <div className="text-xs text-teal-700 font-semibold mt-0.5">Safe to proceed. 2 test actions before kilo-lab.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* BUSINESS OUTCOMES */}
      <section className="bg-gray-900 py-24 lg:py-32">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 rounded-full">
                Business Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-6 mb-4 leading-tight">
                Hazards found before the first experiment.<br className="hidden lg:block" /> Not at scale-up.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                SPEED doesn't replace laboratory testing and calorimetry — it tells you which tests to run first,
                and makes sure no route reaches the kilo-lab without a complete safety record.
              </p>
              <div className="space-y-4">
                {[
                  "Hazards identified on paper, before the first experiment",
                  "Every route screened in about 2 hours, not days of expert time",
                  "Every new route reaches the kilo-lab with a complete dossier",
                  "Cost and sustainability visible when the route is chosen",
                  "Fewer surprises at technology transfer and plant hand-over",
                  "Full portfolio view of where risk sits across all active routes",
                ].map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="grid grid-cols-2 gap-5">
              {outcomes.map((o, idx) => (
                <div key={idx} className="bg-gray-800/60 border border-gray-700/80 rounded-3xl p-8 text-center">
                  <div className="text-4xl lg:text-5xl font-black text-teal-400 leading-none mb-3">{o.metric}</div>
                  <div className="text-sm text-gray-400 leading-snug">{o.label}</div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHO USES IT */}
      <section className="bg-white py-24 lg:py-32 border-b border-gray-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full">
              Who Uses SPEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
              Every stakeholder in the route lifecycle
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              SPEED is built for the whole process development team, not just safety specialists.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personas.map((p, idx) => {
              const Icon = p.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-7 hover:border-teal-200 hover:bg-white hover:shadow-md transition-all duration-300 h-full">
                    <div className="h-10 w-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{p.role}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENTERPRISE DEPLOYMENT */}
      <section className="bg-gray-50 py-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Built for the Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-6 mb-6 leading-tight">
                SPEED runs inside GigaOps.<br />Your data never leaves your environment.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Single sign-on, roles, and site-level access across a multi-site organisation.
                SPEED can be deployed in your own environment. Every number traces back to its
                calculation version, criteria, and citations — for inspection and audit, at any time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: "On-Premises or Private Cloud", desc: "Deploy in your regulated environment" },
                  { icon: ShieldCheck, title: "Role-Based Access", desc: "SSO, site-level permissions, RBAC" },
                  { icon: FileText, title: "Versioned Calculations", desc: "Every number traces to its version" },
                  { icon: BadgeCheck, title: "Inspection Ready", desc: "Full audit trail for regulatory review" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-3 items-start">
                      <div className="h-8 w-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80"
                  alt="R&D and process safety leadership reviewing portfolio data"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 p-4">
                  <div className="text-[10px] font-bold uppercase text-gray-400 mb-2">Portfolio Safety Overview · Multi-site</div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xl font-black text-gray-900">47</div>
                      <div className="text-[10px] text-gray-500 font-semibold">Routes Active</div>
                    </div>
                    <div>
                      <div className="text-xl font-black text-teal-700">44</div>
                      <div className="text-[10px] text-gray-500 font-semibold">Dossier Complete</div>
                    </div>
                    <div>
                      <div className="text-xl font-black text-amber-600">3</div>
                      <div className="text-[10px] text-gray-500 font-semibold">Pending Controls</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <FadeUp>
            <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest text-sm">Industries</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind, i) => (
                <span key={i} className="text-sm font-semibold bg-gray-50 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full hover:border-teal-300 hover:bg-teal-50/40 transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[600px] rounded-full bg-teal-500/15 blur-[130px]" />
          </div>
        </div>
        <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 bg-teal-500/20 border border-teal-500/30 px-4 py-1.5 rounded-full">
              See SPEED in Action
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mt-6 mb-4">
              See one of your routes screened<br className="hidden sm:block" /> end to end in 30 minutes.
            </h2>
            <p className="text-teal-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Bring a synthesis route — even a rough one. We will run it through SPEED live,
              show you the thermal risk class, flag any compatibility issues, and deliver a dossier
              before the call ends.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:connect@gigasystech.com?subject=SPEED%20-%2030min%20Live%20Route%20Screening%20Demo"
                className="inline-flex items-center gap-2 bg-white text-teal-900 font-bold px-10 py-4 rounded-full hover:bg-teal-50 transition-colors shadow-lg shadow-teal-950/30"
              >
                Book a 30-Minute Live Screen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:connect@gigasystech.com"
                className="inline-flex items-center gap-2 border border-teal-400/50 text-teal-100 font-semibold px-10 py-4 rounded-full hover:bg-teal-800 transition-colors"
              >
                Talk to Process Safety Team
              </a>
            </div>
            <p className="mt-8 text-sm text-teal-400">connect@gigasystech.com · Hyderabad · Delaware, USA</p>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
