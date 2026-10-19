import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Network,
  KeyRound,
  ShieldCheck,
  UserCheck,
  Share2,
  FileBadge,
  ArrowRight,
  Fingerprint,
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
    icon: Fingerprint,
    title: "Headless Identity & Passkeys",
    desc: "Universal cryptographic authentication supporting WebAuthn, biometric passkeys, and OAuth2/OIDC without vendor lock-in.",
  },
  {
    icon: FileBadge,
    title: "Verifiable Badges & Credentials",
    desc: "Issue tamper-proof cryptographic credentials, licenses, certifications, and enterprise trust badges verifiable anywhere.",
  },
  {
    icon: Share2,
    title: "Portable Audience & Social Graphs",
    desc: "Allow users and creators to carry their followers, reputation scores, and trust networks across different consumer and SaaS apps.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Knowledge Sybil Defense",
    desc: "Prove human uniqueness and eradicate AI bots without harvesting invasive selfies, biometrics, or sensitive government IDs.",
  },
  {
    icon: Network,
    title: "Drop-in Social Component SDKs",
    desc: "Embed comments, upvoting, discussion threads, member directories, and reputation ranking into any web or mobile app in minutes.",
  },
  {
    icon: KeyRound,
    title: "Fine-Grained Consent Control",
    desc: "Empower users with granular data authorization, revocable access scopes, and decentralized profile privacy.",
  },
];

const steps = [
  {
    n: "01",
    title: "Embed SDK / APIs",
    desc: "Install the OpenFace React/Node/iOS SDK or configure standard OIDC endpoints into your frontend stack.",
  },
  {
    n: "02",
    title: "Issue Credentials",
    desc: "Mint verifiable badges, reputation attributes, and community roles with cryptographic signatures.",
  },
  {
    n: "03",
    title: "Enable Portable Trust",
    desc: "Users authenticate seamlessly across partner ecosystems with persistent reputation and portable audience graphs.",
  },
];

const outcomes = [
  { stat: "10x", label: "Faster integration of community identity features" },
  { stat: "99.8%", label: "Reduction in automated bot accounts" },
  { stat: "100%", label: "User cryptographic data sovereignty" },
  { stat: "Zero", label: "Third-party tracking cookies or lock-in" },
];

export default function OpenFace() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · Social Identity Infrastructure
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Headless Identity, Credibility &amp; Audience Graphs.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                OpenFace decouples identity, social graphs, and reputation from closed platforms — providing cryptographic proof of trust for modern apps.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=OpenFace%20Developer%20Access"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Get Developer Keys <ArrowRight className="h-4 w-4" />
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
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"
                  alt="OpenFace digital identity infrastructure"
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
              <h2 className="text-3xl font-bold text-gray-900">Infrastructure Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Decentralized building blocks that make identity, reputation, and social interaction modular, portable, and secure.
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
              <h2 className="text-3xl font-bold text-gray-900">How OpenFace Works</h2>
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
              <h2 className="text-3xl font-bold text-white">Engineering Outcomes</h2>
              <p className="mt-4 text-gray-400">
                Empowering product teams to launch enterprise-grade community and identity features without reinventing auth or risking data leaks.
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
              Build with portable, cryptographic identity.
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Explore developer documentation, sandbox APIs, and client SDKs.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=OpenFace%20Developer%20Sandbox"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
            >
              Request Developer Access <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
