import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ScanLine, FileSignature, Shield, Clock, CheckCircle2 } from "lucide-react";

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
  { icon: ScanLine, title: "Document Capture & Scanning", description: "Mobile and desktop scanning with structured extraction, quality review and automated classification." },
  { icon: FileText, title: "Record-Linked Evidence", description: "Attach documents directly to work orders, assets, invoices, contracts and any operational record." },
  { icon: FileSignature, title: "E-Signature Envelopes", description: "Create signing envelopes, define signer order and collect legally binding digital signatures from any device." },
  { icon: Clock, title: "Signature Progress Tracking", description: "Monitor signer status in real time, send automated reminders and track completion history end to end." },
  { icon: Shield, title: "Document Compliance Controls", description: "Define document types, required evidence rules and expiry policies that enforce completeness before tasks close." },
  { icon: CheckCircle2, title: "Audit Trail & Records", description: "Full audit trail of document access, edits, approvals and signature events for compliance and legal review." },
];

const steps = [
  { title: "Capture at the point of work", description: "Field teams scan documents, upload photos and capture signatures directly from the mobile app — even offline." },
  { title: "Link to operational records", description: "Documents attach automatically to the relevant work order, asset, invoice or contract with version control." },
  { title: "Track, sign and close", description: "Route envelopes to signers in sequence, auto-remind on SLA breaches and generate signed completion certificates." },
];

const outcomes = [
  { value: "80%", label: "Faster document turnaround" },
  { value: "Zero", label: "Missing evidence at close" },
  { value: "100%", label: "Signature audit trail" },
  { value: "60%", label: "Reduction in manual follow-up" },
];

const industries = ["Field Services", "Construction", "Healthcare", "Legal & Professional", "Energy", "Government"];

export default function DocumentsPage() {
  return (
    <Layout>
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">GigaOps · Documents & E-Sign</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Capture Evidence. Complete Agreements. Stay Compliant.
              </h1>
              <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                GigaOps Documents connects capture, scanning, approval workflows and legally binding e-signatures to every operational record — from work orders to vendor contracts.
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
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=80"
                  alt="Document management"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Complete document lifecycle management</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">From mobile scan to signed completion — every step tracked.</p>
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
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
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
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
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
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
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
            <h2 className="text-3xl font-bold text-white">Ready to eliminate paper-based processes?</h2>
            <p className="mt-4 text-orange-100">Capture, sign and track every document connected to your operations.</p>
            <a href="mailto:connect@gigasystech.com" className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              Book an Architecture Walkthrough <ArrowRight className="h-4 w-4" />
            </a>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
