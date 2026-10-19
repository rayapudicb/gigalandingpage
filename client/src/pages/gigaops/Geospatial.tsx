import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Map, Building2, Navigation, Shield, BarChart3 } from "lucide-react";

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
  { icon: Building2, title: "Place Hierarchies", description: "Define enterprise, region, site, building, floor, zone and equipment hierarchies to structure every operational context." },
  { icon: Map, title: "Maps, Boundaries & Spatial Selection", description: "Interactive maps with polygon boundary drawing, location pinning and spatial filtering for work and asset scope." },
  { icon: Navigation, title: "Location-Aware Assignment", description: "Route workers to the nearest job, filter work orders by site and ensure every assignment has the correct location context." },
  { icon: Shield, title: "Geofence Compliance", description: "Define virtual perimeters around sites, zones and equipment — auto-enforce clock-in policy and trigger alerts on boundary violations." },
  { icon: MapPin, title: "Place Import & Management", description: "Bulk import place hierarchies from GIS files, spreadsheets or CAD floor plans with validation and de-duplication." },
  { icon: BarChart3, title: "Spatial Analytics & Drill-Down", description: "View operational KPIs mapped geographically — drill down from region to site to zone to find underperforming areas." },
];

const steps = [
  { title: "Build your place hierarchy", description: "Import or create your organization's locations from enterprise level down to individual equipment positions and floor zones." },
  { title: "Attach operations to places", description: "Link work orders, assets, workforce assignments and geofence policies to the places where they physically happen." },
  { title: "Enforce and analyze spatially", description: "Use geofence triggers for compliance, route workers with location context, and analyze operational performance by place." },
];

const outcomes = [
  { value: "50%", label: "Faster field navigation and routing" },
  { value: "100%", label: "Location context on every record" },
  { value: "Zero", label: "Out-of-scope work completed" },
  { value: "40%", label: "Improvement in punch compliance" },
];

const industries = ["Manufacturing", "Construction", "Field Services", "Energy & Utilities", "Facilities Management", "Government"];

export default function GeospatialPage() {
  return (
    <Layout>
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">GigaOps · Geospatial & Places</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Every Operation Anchored to a Place.
              </h1>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                GigaOps Geospatial connects your physical world to your operational data — place hierarchies, interactive maps, geofence compliance and location-aware workflows.
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
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf?w=800&auto=format&fit=crop&q=80"
                  alt="Geospatial operations"
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Location intelligence for every operation</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From enterprise hierarchy to individual geofence — places are the foundation of everything.</p>
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
            <h2 className="text-3xl font-bold text-white">Ready to connect your operations to the physical world?</h2>
            <p className="mt-4 text-orange-100">Anchor every workflow, asset and worker to a real place.</p>
            <a href="mailto:connect@gigasystech.com" className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              Book an Architecture Walkthrough <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
