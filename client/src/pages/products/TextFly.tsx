import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  MessageSquare,
  Send,
  Bot,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  PhoneCall,
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
    icon: MessageSquare,
    title: "Unified Omnichannel Inbox",
    desc: "Aggregate live conversations across WhatsApp Business, SMS, Email, Slack, RCS, and Webchat into one single collaborative workspace.",
  },
  {
    icon: Send,
    title: "Smart Campaign Dispatch",
    desc: "Orchestrate targeted bulk notifications, transactional updates, and promotional messages with rate limiting and automated delivery failover.",
  },
  {
    icon: Bot,
    title: "Autonomous Conversational Bots",
    desc: "Deploy AI-powered chatbots and interactive WhatsApp flows that resolve inquiries, collect form inputs, and route complex issues to human agents.",
  },
  {
    icon: Zap,
    title: "Multi-Carrier Redundancy",
    desc: "Direct carrier routes across Tier-1 telecom providers with automated fallback routing for guaranteed 99.99% global message delivery.",
  },
  {
    icon: Layers,
    title: "CRM & Webhook Sync",
    desc: "Bi-directional real-time sync with Salesforce, HubSpot, GigaCRM, and internal ERP systems via governed webhooks and REST APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Global Compliance & DND",
    desc: "Built-in consent management, opt-out automation, TCPA/GDPR compliance, and TRAI DLT template registry management.",
  },
];

const steps = [
  {
    n: "01",
    title: "Connect Channels",
    desc: "Link your WhatsApp Business API, SMS shortcodes, email domains, and telephony numbers in minutes.",
  },
  {
    n: "02",
    title: "Design Flows & Campaigns",
    desc: "Create dynamic message templates, automated interactive bot workflows, and targeted customer segments.",
  },
  {
    n: "03",
    title: "Scale Customer Engagement",
    desc: "Monitor real-time delivery stats, response times, agent performance, and conversation analytics.",
  },
];

const outcomes = [
  { stat: "99.99%", label: "Message delivery reliability SLA" },
  { stat: "4x", label: "Faster customer response time" },
  { stat: "40%", label: "Reduction in messaging telecom costs" },
  { stat: "100%", label: "Automated compliance audit trail" },
];

export default function TextFly() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · Omnichannel Communications SaaS
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                One Unified Inbox. Every Channel. Complete Customer Context.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                TextFly is the enterprise messaging platform spanning WhatsApp, SMS, Email, and Slack — built for modern customer operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=TextFly%20Demo%20Request"
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
                  src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&auto=format&fit=crop&q=80"
                  alt="TextFly omnichannel communication"
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
              <h2 className="text-3xl font-bold text-gray-900">Communication Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Connect your business with customers across their favorite channels with complete auditability, speed, and intelligence.
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
              <h2 className="text-3xl font-bold text-gray-900">How TextFly Works</h2>
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
                Enterprises switch to TextFly to eliminate fragmented communication silos, improve response SLA, and drive conversions.
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
              Ready to unify your customer communications?
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Talk to our communications team for an enterprise walkthrough and API sandbox access.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=TextFly%20Enterprise%20Inquiry"
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
