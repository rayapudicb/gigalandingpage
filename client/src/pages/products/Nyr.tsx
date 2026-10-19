import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Compass,
  Users,
  ShieldCheck,
  Calendar,
  Car,
  Store,
  ArrowRight,
  CheckCircle,
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
    icon: ShieldCheck,
    title: "Verified Resident Circles",
    desc: "Privacy-first community verification ensures discussions and interactions happen among genuine neighbors without data brokering.",
  },
  {
    icon: Store,
    title: "Local Commerce & Discovery",
    desc: "Direct-to-consumer local marketplace for neighborhood merchants, artisan businesses, and trusted home service professionals.",
  },
  {
    icon: Car,
    title: "Community Carpooling & Rides",
    desc: "Coordinate daily school runs, commutes, and shared rides with verified neighbors in your neighborhood circle.",
  },
  {
    icon: Calendar,
    title: "Hyper-Local Events",
    desc: "Discover and organize block parties, volunteer drives, farmers markets, and civic town halls with RSVP tracking.",
  },
  {
    icon: Compass,
    title: "Neighborhood Safety Pulse",
    desc: "Real-time municipal notices, infrastructure alerts, and community-moderated safety updates without sensationalism.",
  },
  {
    icon: Users,
    title: "Zero-Tracking Architecture",
    desc: "Built on cryptographic privacy guarantees. Your location and conversations are never sold to advertisers or third parties.",
  },
];

const steps = [
  {
    n: "01",
    title: "Verify Your Circle",
    desc: "Join your verified local neighborhood circle with private, encrypted resident credentials.",
  },
  {
    n: "02",
    title: "Engage & Connect",
    desc: "Share recommendations, coordinate community rides, support local shops, and organize events.",
  },
  {
    n: "03",
    title: "Strengthen Your Community",
    desc: "Build durable local social infrastructure that empowers residents and local businesses sustainably.",
  },
];

const outcomes = [
  { stat: "100%", label: "Privacy guarantee & zero tracking" },
  { stat: "85%", label: "Neighbor monthly engagement" },
  { stat: "3x", label: "Faster local business discovery" },
  { stat: "Zero", label: "Algorithmic rage-bait or ads" },
];

export default function Nyr() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <FadeUp>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
                Product · Local Social Platform
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Privacy-Aware Local Discovery &amp; Community Pulse.
              </h1>
              <p className="mt-5 text-xl text-gray-500 max-w-lg">
                nyr connects verified neighbors, trusted local merchants, and community coordination — completely free from surveillance capitalism.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:connect@gigasystech.com?subject=nyr%20Inquiry"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                >
                  Request Early Access <ArrowRight className="h-4 w-4" />
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
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80"
                  alt="nyr community platform"
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
              <h2 className="text-3xl font-bold text-gray-900">Platform Capabilities</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Purpose-built tools to revive local community trust, support neighborhood commerce, and empower civic life.
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
              <h2 className="text-3xl font-bold text-gray-900">How nyr Works</h2>
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
              <h2 className="text-3xl font-bold text-white">Impact on Communities</h2>
              <p className="mt-4 text-gray-400">
                Transforming how neighborhoods connect, support local enterprise, and safeguard member privacy.
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
              Bring nyr to your community or municipality.
            </h2>
            <p className="mt-4 text-orange-100 text-lg">
              Partner with us to launch private, verified neighborhood networks.
            </p>
            <a
              href="mailto:connect@gigasystech.com?subject=nyr%20Launch%20Partnership"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
