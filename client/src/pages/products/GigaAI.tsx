import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Bot,
  Mic,
  Zap,
  PhoneForwarded,
  BrainCircuit,
  ShieldCheck,
  ArrowRight,
  Headphones,
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
    icon: Mic,
    title: "Sub-500ms Voice Latency",
    desc: "Natural human-like speech synthesis and instant streaming recognition with zero unnatural conversational delays.",
  },
  {
    icon: BrainCircuit,
    title: "Enterprise Knowledge Grounding",
    desc: "Train voice models securely on your technical documentation, product catalogues, and internal SOPs with full provenance.",
  },
  {
    icon: PhoneForwarded,
    title: "Direct SIP & PBX Telephony",
    desc: "Integrate directly with Twilio, Cisco, Genesys, or Asterisk phone systems while preserving caller ID and routing rules.",
  },
  {
    icon: Zap,
    title: "Autonomous Tool Execution",
    desc: "Voice agents can autonomously check inventory, reschedule appointments, process returns, and trigger GigaOps workflows.",
  },
  {
    icon: Headphones,
    title: "Live Call Whisper & Supervision",
    desc: "Supervisors can monitor ongoing voice calls in real time, view live audio transcripts, and whisper advice to agents.",
  },
  {
    icon: ShieldCheck,
    title: "Graceful Human Escalation",
    desc: "When an issue requires human empathy, the AI transfers the caller seamlessly with a complete summary and emotional context.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ground Domain Knowledge",
    desc: "Upload knowledge bases, FAQs, and API definitions to ground your conversational AI in verified company facts.",
  },
  {
    n: "02",
    title: "Configure Voice & Persona",
    desc: "Select neural voices, define tone guardrails, and test conversational handling in our real-time interactive studio.",
  },
  {
    n: "03",
    title: "Deploy Across Phone & Web",
    desc: "Go live with automated inbound phone lines, outbound reminder campaigns, and interactive web voice widgets.",
  },
];

const outcomes = [
  { stat: "70%", label: "First-contact resolution rate on voice calls" },
  { stat: "60%", label: "Reduction in tier-1 support operations cost" },
  { stat: "24/7", label: "Autonomous multilingual phone coverage" },
  { stat: "4.8/5", label: "Average caller satisfaction rating" },
];

export default function GigaAI() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · Voice &amp; Conversational AI Platform
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Enterprise Voice Agents &amp; Conversational Intelligence.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                Giga AI delivers ultra-low latency voice agents and chatbots grounded in your business knowledge — ready for production telephony.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=Giga%20AI%20Voice%20Demo"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Listen to Voice Demo <ArrowRight className="h-4 w-4" />
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
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
                  alt="Giga AI voice platform"
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
              <h2 className="text-3xl font-bold text-gray-900">Voice AI Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Purpose-built for mission-critical enterprise customer service, dispatch coordination, and sales qualification.
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
              <h2 className="text-3xl font-bold text-gray-900">How Giga AI Works</h2>
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
                Deliver responsive, 24/7 intelligent voice assistance without ballooning support headcount or sacrificing brand quality.
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
              Experience the power of autonomous voice agents.
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Get an interactive voice demo connected directly to your test phone number.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=Giga%20AI%20Live%20Call%20Test"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
            >
              Test a Live Call <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
