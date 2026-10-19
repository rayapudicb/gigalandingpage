import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  RefreshCw,
  Ticket,
  ShieldCheck,
  DollarSign,
  QrCode,
  Lock,
  ArrowRight,
  TrendingUp,
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
    icon: Ticket,
    title: "Entitlement & Reservation Tokenization",
    desc: "Transform static reservations, hotel stays, memberships, and event tickets into dynamic, verified digital entitlements.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Scalping & Price Caps",
    desc: "Enforce programmatic price caps, anti-bot purchase restrictions, and KYC-verified secondary exchanges to eliminate gouging.",
  },
  {
    icon: DollarSign,
    title: "Primary-Issuer Royalty Splits",
    desc: "Automatically route a guaranteed percentage of every secondary resale transaction back to the original event organizer or venue.",
  },
  {
    icon: Lock,
    title: "Dynamic Escrow Settlement",
    desc: "Instant escrow verification invalidates the seller's barcode and generates a brand-new cryptographically signed barcode for the buyer.",
  },
  {
    icon: QrCode,
    title: "Mobile Wallet Integration",
    desc: "Native Apple Wallet and Google Pay pass distribution with real-time push updates for gate changes, seat upgrades, and time adjustments.",
  },
  {
    icon: TrendingUp,
    title: "Secondary Market Analytics",
    desc: "Gain complete transparency into secondary demand trends, true market clearing prices, and fan demographic insights.",
  },
];

const steps = [
  {
    n: "01",
    title: "Issue Entitlements",
    desc: "Event organizers and venues mint digital access rights with issuer-defined transfer rules and royalty rates.",
  },
  {
    n: "02",
    title: "Facilitate Governed Resale",
    desc: "Fans list and buy passes within price-capped limits, protected by instant cryptographic barcode re-generation.",
  },
  {
    n: "03",
    title: "Instant Royalty Payouts",
    desc: "Secondary revenues settle automatically between buyers, sellers, and original rights-holders with zero chargebacks.",
  },
];

const outcomes = [
  { stat: "0%", label: "Fraudulent tickets & counterfeit passes" },
  { stat: "100%", label: "Issuer royalty compliance guarantee" },
  { stat: "92%", label: "Fully automated settlement rate" },
  { stat: "5x", label: "Faster entitlement transfer speed" },
];

export default function Swappy() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · Exchange Commerce Engine
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Provider-Governed Reservation &amp; Entitlement Exchange.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                Swappy is the secondary commerce engine for ticketed experiences, hotel bookings, and memberships with automated royalty splits.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=Swappy%20Platform%20Inquiry"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
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
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80"
                  alt="Swappy entitlement commerce"
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
              <h2 className="text-3xl font-bold text-gray-900">Exchange Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Built to protect primary issuers, eliminate black-market scalping, and provide fans with trusted, guaranteed liquidity.
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
              <h2 className="text-3xl font-bold text-gray-900">How Swappy Works</h2>
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
                Venues, festivals, sports franchises, and ticketing companies unlock new secondary revenue streams while eliminating counterfeit losses.
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
              Unlock governed secondary commerce for your ticketing business.
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Integrate the Swappy API into your primary ticketing or booking flow in days.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=Swappy%20Integration%20Discussion"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
            >
              Contact Our Team <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
