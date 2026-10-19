import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Mail, Phone, Inbox, Users, Zap, BarChart3, CheckCircle2 } from "lucide-react";

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
  { icon: Inbox, title: "Unified Inbox", description: "All customer and workforce conversations from every channel collected in one threaded inbox with assignment, tags and SLA tracking." },
  { icon: Users, title: "Contact Profiles", description: "Customer and workforce contact profiles with conversation history, channel preferences and linked operational context." },
  { icon: Mail, title: "Email, SMS & WhatsApp", description: "Send and receive messages across email, SMS, WhatsApp and voice from a single platform with delivery confirmation." },
  { icon: MessageSquare, title: "Templates & Campaigns", description: "Pre-approved message templates, audience segmentation and reach campaigns with scheduling and delivery analytics." },
  { icon: Zap, title: "Cross-Module Event Triggers", description: "Automatically send notifications when work orders are assigned, deliveries confirmed or approvals completed." },
  { icon: BarChart3, title: "Delivery & SLA Reporting", description: "Track message delivery rates, response times, retry queues and SLA compliance across all channels." },
];

const steps = [
  { title: "Connect your channels", description: "Link your email domain, SMS sender, WhatsApp business account and voice provider to the GigaOps communications hub." },
  { title: "Set up contacts and templates", description: "Import your contact profiles, define message templates and configure automated trigger rules for operational events." },
  { title: "Send, track and escalate", description: "Monitor delivery in real time, auto-retry failed messages and escalate SLA breaches to the right team." },
];

const outcomes = [
  { value: "60%", label: "Faster customer response time" },
  { value: "99%", label: "Message delivery success rate" },
  { value: "1×", label: "Unified inbox for all channels" },
  { value: "Zero", label: "Missed SLA breaches undetected" },
];

const industries = ["Retail & Commerce", "Field Services", "Healthcare", "Logistics", "Manufacturing", "Events & Venues"];

export default function CommunicationsPage() {
  return (
    <Layout>
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">GigaOps · Communications</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Every Channel. One Inbox. Zero Dropped Conversations.
              </h1>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                GigaOps Communications unifies email, SMS, WhatsApp, voice and webhooks in a single governed platform — with event-triggered messaging directly from your operations.
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
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
                  alt="Communications platform"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything your team needs to communicate</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">One platform. Every channel. Full delivery visibility.</p>
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

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp><h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">How it works</h2></FadeUp>
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

      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FadeUp><div className="text-center mb-14"><h2 className="text-3xl font-bold text-white">Measurable business impact</h2></div></FadeUp>
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

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
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

      <section className="bg-orange-500 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <FadeUp>
            <h2 className="text-3xl font-bold text-white">Ready to unify your communications?</h2>
            <p className="mt-4 text-orange-100">Connect every channel and eliminate dropped conversations.</p>
            <a href="mailto:connect@gigasystech.com" className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              Book an Architecture Walkthrough <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
