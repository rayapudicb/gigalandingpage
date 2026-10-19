import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import { Link } from 'wouter';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  CheckCircle,
  Wrench,
  Users2,
  Boxes,
  PackageCheck,
  BarChart3,
  Workflow,
  MessageSquare,
  Database,
  FileSignature,
  MapPin,
  Wallet,
  Blocks,
  Bot,
  RefreshCw,
  Network,
  BriefcaseBusiness,
  Globe2,
  ShieldCheck,
  Search,
  Check,
  Smartphone,
  Layers,
  Sparkles,
  Sliders,
  Cpu,
  FileCheck2,
  Server,
  WifiOff,
  Wifi,
  QrCode,
  Building2,
  ClipboardCheck,
  Activity,
  HardHat,
  FileSpreadsheet,
  AlertTriangle,
  TrendingUp,
  Clock,
  Lock,
  Shield,
  X,
  Radio,
  FileText,
  BadgeCheck,
  Fingerprint,
} from 'lucide-react';

function FadeUp({
  children,
  delay = 0,
  className = '',
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
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const tickerItems = [
  'ASSET MANAGEMENT',
  'WORKFORCE DISPATCH',
  'CMMS & EAM',
  'SUPPLY CHAIN',
  'FINANCIAL OPERATIONS',
  'OMNICHANNEL COMMS',
  'NATIVE MOBILE',
  'WORKFLOW AUTOMATION',
  'ANALYTICS & REPORTS',
  'DATA INTEGRATION',
  'GEOSPATIAL',
  'E-SIGNATURE',
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-gray-50/90 border-y border-gray-100 py-4 overflow-hidden relative">
      <motion.div
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 flex items-center"
          >
            {item}
            <span className="ml-10 text-[#FF7200]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// 7 Comprehensive Capabilities for the Interactive Navigator & Pagination
interface EnterpriseCapability {
  id: string;
  domain: string;
  badge: string;
  title: string;
  headline: string;
  icon: any;
  problemSolved: string;
  whatWeAutomate: string[];
  erpRigor: string;
  businessOutcomes: { metric: string; label: string }[];
  technicalPills: string[];
  link: string;
  linkText: string;
  simulatedPreview: {
    topStatus: string;
    subStatus: string;
    metrics: { label: string; val: string; statusColor: string }[];
    eventTimeline: { step: string; detail: string; time: string; ok: boolean }[];
  };
}

const enterpriseCapabilities: EnterpriseCapability[] = [
  {
    id: 'cmms',
    domain: 'Asset & Maintenance',
    badge: 'CMMS & Enterprise Asset Management',
    title: 'Autonomous Asset Health & Reliability',
    headline: 'Prevent catastrophic equipment breakdowns with telemetry-triggered PM cycles.',
    icon: Wrench,
    problemSolved: 'Unplanned factory downtime, missing paper maintenance logs, runaway emergency spare purchases, and lack of MTBF/MTTR compliance records.',
    whatWeAutomate: [
      'Real-time SCADA & vibration telemetry evaluation triggering condition-based work orders',
      'Automated parts kit allocation and inventory reservation from storeroom bays',
      'Mobile dispatch to certified technician with mandatory photo evidence & torque logs',
      'Post-completion general ledger journal posting (Dr Maintenance Expense / Cr Inventory)',
    ],
    erpRigor: 'Enforces iDempiere standard document state machine (prepareIt → completeIt) with immutable audit logging and depreciation impact tracking.',
    businessOutcomes: [
      { metric: '42%', label: 'Reduction in reactive line downtime' },
      { metric: '60%', label: 'Faster work order cycle turnaround' },
      { metric: '100%', label: 'Audit-ready maintenance history' },
    ],
    technicalPills: ['iDempiere Asset Twin', 'MRO Spares Kitting', 'MTBF / MTTR Analytics', 'Predictive PM Cycles', 'Offline Field Execution'],
    link: '/gigaops/maintenance',
    linkText: 'Explore CMMS Architecture',
    simulatedPreview: {
      topStatus: 'ASSET RUNNING · TELEMETRY NOMINAL',
      subStatus: 'Flowserve 500HP Pump #P-1082 · Substation Bay 4',
      metrics: [
        { label: 'Overall OEE', val: '94.6%', statusColor: 'text-emerald-600' },
        { label: 'Current MTBF', val: '720 hrs', statusColor: 'text-blue-600' },
        { label: 'Next Auto-PM', val: '48 hrs', statusColor: 'text-orange-600' },
      ],
      eventTimeline: [
        { step: 'Vibration Telemetry Normal', detail: 'Bearing vibration frequency at 0.04mm within tolerance', time: '10:14 AM', ok: true },
        { step: 'Preventive Spares Reserved', detail: 'SKF Bearings x2 staged from Storeroom Bay 4', time: '10:15 AM', ok: true },
        { step: 'Mobile Dispatch Pushed', detail: 'Assigned to Level 3 Certified Millwright on iOS app', time: '10:16 AM', ok: true },
      ],
    },
  },
  {
    id: 'workforce',
    domain: 'Workforce & Dispatch',
    badge: 'Frontline Workforce Management',
    title: 'Frontline on Glass, Management on Web',
    headline: 'Eliminate scheduling conflicts, ghost shifts, and manual timesheet reconciliation.',
    icon: Users2,
    problemSolved: 'Manual spreadsheets, conflicting shift allocations, payroll delays, lack of geo-verification, and disconnected field communications.',
    whatWeAutomate: [
      'Visual drag-and-drop master scheduling with automated skill and certification checking',
      'Polygon geofence GPS 1-tap clock-in/out with offline punch buffering',
      'Peer-to-peer shift swap marketplace with automatic supervisor sign-off',
      'Pay-ready batch journal export directly formatted for enterprise ERP GL posting',
    ],
    erpRigor: 'Segregation of duties (maker-checker DoA), payroll accrual fact creation, and immutable worker time change logs.',
    businessOutcomes: [
      { metric: '50%', label: 'Faster shift dispatch & mobilization' },
      { metric: '30%', label: 'Fewer scheduling exceptions' },
      { metric: 'Zero', label: 'Ghost punches with GPS geofencing' },
    ],
    technicalPills: ['Geofenced GPS Punch', 'Offline Local Buffer', 'Skill Matrix Matching', 'Shift Swap Marketplace', 'Biometric Authentication'],
    link: '/gigaops/workforce',
    linkText: 'Explore Workforce Architecture',
    simulatedPreview: {
      topStatus: 'ROSTER ACTIVE · 18 SHIFTS DISPATCHED',
      subStatus: 'Austin Assembly Plant · Shift 01 (Morning)',
      metrics: [
        { label: 'Shift Fill Rate', val: '99.2%', statusColor: 'text-emerald-600' },
        { label: 'Active On-Site', val: '142 workers', statusColor: 'text-blue-600' },
        { label: 'Punch Compliance', val: '100%', statusColor: 'text-emerald-600' },
      ],
      eventTimeline: [
        { step: 'Geofence Entry Validated', detail: 'Plant Gate North polygon recognized device GPS', time: '07:58 AM', ok: true },
        { step: '1-Tap Clock-In Registered', detail: 'Local biometric verified; buffered & synced to core', time: '08:00 AM', ok: true },
        { step: 'Shift Handover Signed on Glass', detail: 'Digital stylus sign-off archived with SHA-256 hash', time: '08:02 AM', ok: true },
      ],
    },
  },
  {
    id: 'supply',
    domain: 'Supply Chain & Multi-Warehouse',
    badge: 'Universal Inventory & Material Ledger',
    title: 'Double-Entry Material Tracking Everywhere',
    headline: 'Every stock movement balanced, locator-verified, and lot-traceable in real-time.',
    icon: Boxes,
    problemSolved: 'Discrepancies between physical bins and ERP ledgers, blind inter-warehouse transit, expired regulated lots, and production line halts.',
    whatWeAutomate: [
      'Locator-level real-time inventory balances (MStorageOnHand, MStorageReservation)',
      'Directed putaway and wave picking with sub-second barcode & QR camera scans',
      'Complete lot & serial genealogy with FIFO/FEFO expiration tracking',
      'Automated cycle count discrepancy generation with dual-custody approval thresholds',
    ],
    erpRigor: 'Double-entry inventory ledger (MMovement / MInventory): every credit has an equal debit; perpetual inventory valuation with landed cost allocation.',
    businessOutcomes: [
      { metric: '99.8%', label: 'Inventory accuracy across multi-DC networks' },
      { metric: '65%', label: 'Faster warehouse picking and putaway' },
      { metric: 'Zero', label: 'Untracked or unreconciled physical movement' },
    ],
    technicalPills: ['Double-Entry Stock Ledger', 'Locator Hierarchy (Aisle/Bay/Bin)', 'FIFO / FEFO Enforcement', 'Lot & Serial Genealogy', 'Cycle Count Variance'],
    link: '/gigaops/inventory',
    linkText: 'Explore Inventory Architecture',
    simulatedPreview: {
      topStatus: '8 REGIONAL DCS · REAL-TIME SYNC',
      subStatus: 'Central Distribution Hub #2 · Chicago, IL',
      metrics: [
        { label: 'Total SKUs Active', val: '24,850', statusColor: 'text-blue-600' },
        { label: 'Bin Accuracy', val: '99.8%', statusColor: 'text-emerald-600' },
        { label: 'Transfer Legs', val: '12 in transit', statusColor: 'text-orange-600' },
      ],
      eventTimeline: [
        { step: 'PO Receipt Scan at Dock 3', detail: 'Goods matched to PO #8921; Lot #L-9982 assigned', time: '11:20 AM', ok: true },
        { step: 'Double-Entry Ledger Updated', detail: 'Dr Inventory Asset ,500 / Cr GRNI Accrual', time: '11:21 AM', ok: true },
        { step: 'Directed Putaway Route', detail: 'Aisle 14, Rack B, Bin 03 confirmed via mobile QR scan', time: '11:24 AM', ok: true },
      ],
    },
  },
  {
    id: 'procurement',
    domain: 'Procurement & 3-Way Match',
    badge: 'Universal Procurement & Accounts Payable',
    title: 'Touchless Match-to-Pay Governance',
    headline: 'Requisitions, purchase orders, receipts, and invoices reconciled automatically.',
    icon: PackageCheck,
    problemSolved: 'Duplicate vendor invoices, overpayments, slow manual 3-way matching, maverick spend outside company policy, and lost supplier discounts.',
    whatWeAutomate: [
      'Automated requisition approval routing based on company delegation of authority',
      'Real-time budget commitment checking (prevents overspending before PO generation)',
      'Touchless automated Three-Way Match (Purchase Order, Goods Receipt, Vendor Invoice)',
      'Automatic accrual liquidation (GRNI) and purchase price variance (PPV) calculation',
    ],
    erpRigor: "Built on iDempiere's proven MatchPO and MatchInv algorithms. Invoices within tolerance auto-post directly to Accounts Payable (C_Invoice).",
    businessOutcomes: [
      { metric: '72%', label: 'Vendor invoices auto-cleared touchless' },
      { metric: '50%', label: 'Reduction in procure-to-pay cycle time' },
      { metric: '80%', label: 'Elimination of unauthorized maverick spend' },
    ],
    technicalPills: ['Automated 3-Way Match', 'Budget Encumbrance Check', 'GRNI Accrual Liquidation', 'Vendor Scorecarding', 'AP Payment Batches'],
    link: '/gigaops/procurement',
    linkText: 'Explore Procurement Architecture',
    simulatedPreview: {
      topStatus: '3-WAY MATCH ENGINE ACTIVE',
      subStatus: 'Batch Queue: 148 Invoices Processed Today',
      metrics: [
        { label: 'Cleared Today', val: '.48M', statusColor: 'text-emerald-600' },
        { label: 'Auto-Match Ratio', val: '72.4%', statusColor: 'text-emerald-600' },
        { label: 'Held Exceptions', val: '2 for DoA', statusColor: 'text-orange-600' },
      ],
      eventTimeline: [
        { step: 'Vendor Invoice Received (EDI/OCR)', detail: 'Supplier #SUP-104 invoice ,400 ingested', time: '09:30 AM', ok: true },
        { step: 'Automated 3-Way Match Executed', detail: 'Matched PO #PO-4920 and GRN #RC-1102; variance 0.00%', time: '09:31 AM', ok: true },
        { step: 'AP Ledger Entry Posted', detail: 'Dr GRNI ,400 / Cr Accounts Payable ,400', time: '09:32 AM', ok: true },
      ],
    },
  },
  {
    id: 'finance',
    domain: 'Financial Operations & GL',
    badge: 'Audit-Grade Double-Entry ERP General Ledger',
    title: 'From Operational Event to Balanced Fact',
    headline: 'Every inventory movement, field hour, and vendor invoice posts directly to the ledger.',
    icon: Wallet,
    problemSolved: 'Painful multi-week month-end close cycles, detached spreadsheets, audit compliance panic, manual journal entry errors, and disconnected subledgers.',
    whatWeAutomate: [
      'Real-time subledger event ingestion (AP, AR, Inventory, Fixed Assets, Payroll)',
      'Immutable balanced journal facts (MFactAcct) generated per accounting schema',
      'Fiscal period lock enforcement across all operational modules (prevents late-posting drift)',
      'Multi-company currency translation and automated inter-company balance eliminations',
    ],
    erpRigor: '100% compliant with iDempiere double-entry accounting schemas (MAcctSchema), strict audit trail, and instant drill-through from financial statement to source record.',
    businessOutcomes: [
      { metric: '60%', label: 'Faster fiscal period close' },
      { metric: '100%', label: 'Double-entry compliance with immutable trails' },
      { metric: 'Zero', label: 'Manual spreadsheet reconciliation gaps' },
    ],
    technicalPills: ['Balanced MFactAcct Journals', 'Multi-Schema Accounting', 'Strict Subledger Period Locks', 'CAMT.053 Bank Feeds', 'Multi-Company Consolidation'],
    link: '/gigaops/finance',
    linkText: 'Explore Financial Architecture',
    simulatedPreview: {
      topStatus: 'GENERAL LEDGER BALANCED · PERIOD OPEN',
      subStatus: 'Q4 Fiscal Ledger · Entity: Gigasys Industrial Corp',
      metrics: [
        { label: 'Fiscal Period', val: 'Q4-2026', statusColor: 'text-blue-600' },
        { label: 'Subledger Sync', val: '100% Live', statusColor: 'text-emerald-600' },
        { label: 'Unposted Events', val: '0 pending', statusColor: 'text-emerald-600' },
      ],
      eventTimeline: [
        { step: 'Subledger Ingestion Event', detail: 'Inventory issue for Work Order #WO-1842 received', time: '02:15 PM', ok: true },
        { step: 'Balanced Fact Generated', detail: 'Dr Maintenance Expense ,200 / Cr Inventory ,200', time: '02:15 PM', ok: true },
        { step: 'Financial Statement Drill-Down', detail: 'Trial balance updated; drill-through verified to warehouse bin', time: '02:16 PM', ok: true },
      ],
    },
  },
  {
    id: 'workflow',
    domain: 'Workflow & Rules Engine',
    badge: 'Visual DAG Process Studio & State Engine',
    title: 'Agile Business Logic Without Custom Code',
    headline: 'Orchestrate complex cross-module business flows with durable state machines.',
    icon: Workflow,
    problemSolved: 'Rigid legacy ERPs where a single approval rule change requires weeks of expensive consulting and custom code deployments.',
    whatWeAutomate: [
      'Visual drag-and-drop DAG workflow studio for multi-step approval hierarchies',
      'Business rules engine with decision tables, threshold evaluators, and dynamic forms',
      'Durable state machine execution (DocAction) with automated rollback, retry, and compensation',
      'Cross-module event dispatch: work order completion automatically triggers inventory deduction and AP billing',
    ],
    erpRigor: 'Standardized document transitions (prepareIt, completeIt, voidIt, reverseIt) logged with cryptographic actor timestamps.',
    businessOutcomes: [
      { metric: '75%', label: 'Reduction in manual operational handoffs' },
      { metric: 'Minutes', label: 'To deploy new policies instead of months' },
      { metric: '100%', label: 'Execution auditability with actor attribution' },
    ],
    technicalPills: ['Visual DAG Studio', 'Decision Table Rules', 'Dynamic Mobile Forms', 'DocAction State Machine', 'Event-Driven Saga Orchestration'],
    link: '/gigaops/automation',
    linkText: 'Explore Workflow Architecture',
    simulatedPreview: {
      topStatus: 'DAG STUDIO · 42 WORKFLOWS RUNNING',
      subStatus: 'Saga Coordinator · High-Availability Mesh',
      metrics: [
        { label: 'Durable State', val: 'Zero-loss', statusColor: 'text-emerald-600' },
        { label: 'Avg Execution', val: '18ms', statusColor: 'text-blue-600' },
        { label: 'Active Escalations', val: '0 SLA breaches', statusColor: 'text-emerald-600' },
      ],
      eventTimeline: [
        { step: 'High-Value PR Raised (,000)', detail: 'Exceeds standard k limit; routed to VP Operations', time: '03:40 PM', ok: true },
        { step: 'Mobile Dynamic Approval Triggered', detail: 'Push notification sent to VP; approved with biometric key', time: '03:45 PM', ok: true },
        { step: 'Downstream Saga Dispatched', detail: 'PO created, budget encumbered, vendor notified via EDI', time: '03:46 PM', ok: true },
      ],
    },
  },
  {
    id: 'mobile-engine',
    domain: 'Native Mobile Engine',
    badge: 'Dual iOS & Android Offline Architecture',
    title: 'Full Offline & Online Frontline Mobility',
    headline: 'Engineered for harsh industrial environments where cellular signal cannot be guaranteed.',
    icon: Smartphone,
    problemSolved: 'Frontline field workers stranded when connectivity drops underground, in offshore platforms, or in metal-reinforced factories.',
    whatWeAutomate: [
      'On-device encrypted SQLite database keeping active work orders, assets, and parts offline',
      'Local zero-connectivity execution: technicians log labor hours, scan barcodes, and capture signatures',
      'Transparent background bi-directional synchronization with idempotent replay once online',
      'Device-native hardware acceleration: camera barcode scanner, GPS polygon validation, FaceID/TouchID',
    ],
    erpRigor: 'Offline cryptographic punch signatures and reconciliation tokens prevent duplicate or conflicting submissions.',
    businessOutcomes: [
      { metric: '100%', label: 'Offline continuity without cellular signal' },
      { metric: 'Zero', label: 'Data loss during network drops' },
      { metric: '< 2s', label: 'Instant sync on network reconnection' },
    ],
    technicalPills: ['Encrypted Local SQLite', 'Bi-directional Conflict Sync', 'Native iOS & Android (React Native)', 'Camera Barcode / QR OCR', 'E-Signature on Glass'],
    link: '/gigaops',
    linkText: 'Explore Mobile Architecture',
    simulatedPreview: {
      topStatus: 'OFFLINE-FIRST ENGINE ACTIVE · 100% RESILIENT',
      subStatus: 'Hardware Device: iPhone 16 Pro · Enclave Encrypted',
      metrics: [
        { label: 'Sync State', val: 'Buffered (Offline)', statusColor: 'text-amber-600' },
        { label: 'Local SQLite', val: '14.2 MB', statusColor: 'text-blue-600' },
        { label: 'Pending Replay', val: '3 items queued', statusColor: 'text-emerald-600' },
      ],
      eventTimeline: [
        { step: 'Cellular Signal Lost (-115dBm)', detail: 'Engine automatically transitions to local encrypted SQLite', time: '01:05 PM', ok: true },
        { step: 'Work Order Completed Offline', detail: 'Labor hours logged, photo attached, customer signature captured', time: '01:22 PM', ok: true },
        { step: 'Network Restored (5G)', detail: 'Queued mutations replayed with idempotency tokens; 0 conflicts', time: '01:45 PM', ok: true },
      ],
    },
  },
];

// ERP Architectural Comparison Dataset
const erpComparisonFeatures = [
  {
    dimension: 'Frontline Mobility',
    legacyErp: { text: 'Zero or clunky desktop web wrappers', type: 'bad' },
    pointSaas: { text: 'Separate point mobile apps with disconnected logins', type: 'warn' },
    gigaOps: { text: 'Native iOS & Android with 100% offline encrypted SQLite sync', type: 'best' },
  },
  {
    dimension: 'General Ledger Rigor (iDempiere Standard)',
    legacyErp: { text: 'Strong double-entry accounting but isolated from field work', type: 'warn' },
    pointSaas: { text: 'Shallow CSV exports; no true double-entry subledger facts', type: 'bad' },
    gigaOps: { text: 'Audit-grade MFactAcct journals & automated 3-way matching in real time', type: 'best' },
  },
  {
    dimension: 'Workflow & Approval Agility',
    legacyErp: { text: 'Months of hardcoded ABAP / Java consulting to modify rules', type: 'bad' },
    pointSaas: { text: 'Rigid pre-baked workflows limited to one silo', type: 'warn' },
    gigaOps: { text: 'Visual drag-and-drop DAG studio with dynamic forms & rules engine', type: 'best' },
  },
  {
    dimension: 'Data Model & Integration',
    legacyErp: { text: 'Monolithic legacy schema; painful upgrades', type: 'warn' },
    pointSaas: { text: '15 fragmented vendor databases requiring custom brittle glue code', type: 'bad' },
    gigaOps: { text: 'Single contract-governed schema spanning all 30+ operational modules', type: 'best' },
  },
  {
    dimension: 'Deployment Velocity',
    legacyErp: { text: '12 to 18-month high-risk implementations costing millions', type: 'bad' },
    pointSaas: { text: 'Fast setup but creates fragmented shadow IT chaos', type: 'warn' },
    gigaOps: { text: 'Rapid multi-tenant cloud onboarding with zero shared-core code fork', type: 'best' },
  },
];

const products = [
  {
    name: 'nyr',
    category: 'Local Social Platform',
    icon: MapPin,
    desc: 'Privacy-aware local discovery, verified resident circles, neighborhood pulse, ride coordination, and local merchant commerce.',
    tags: ['Zero-Tracking', 'Resident Circles', 'Local Commerce'],
    href: '/products/nyr',
  },
  {
    name: 'TextFly',
    category: 'Omnichannel Communications',
    icon: MessageSquare,
    desc: 'Multi-tenant enterprise messaging platform spanning WhatsApp Business, SMS, Email, Slack, and Voice with a unified inbox.',
    tags: ['Unified Inbox', 'Multi-Carrier Failover', '99.99% SLA'],
    href: '/products/textfly',
  },
  {
    name: 'Swappy',
    category: 'Exchange Commerce',
    icon: RefreshCw,
    desc: 'Provider-governed reservation and entitlement exchange engine for ticketed experiences with dynamic escrow and royalty splits.',
    tags: ['Anti-Scalping', 'Instant Escrow', 'Primary Royalties'],
    href: '/products/swappy',
  },
  {
    name: 'GigaHR / MyNextCV',
    category: 'HR & Recruitment Intelligence',
    icon: BriefcaseBusiness,
    desc: 'Permission-aware talent pipelines and MyNextCV semantic resume parsing intelligence for governed enterprise recruitment.',
    tags: ['Semantic Resume Parsing', 'Lifecycle ATS', 'Skill Pathing'],
    href: '/products/gigahr',
  },
  {
    name: 'GigaCRM',
    category: 'Customer Relationships',
    icon: Users2,
    desc: 'Multi-stage visual deal pipelines, account stakeholder influence graphs, and zero-touch sales activity logging.',
    tags: ['Visual Pipelines', 'Stakeholder Maps', 'CPQ & E-Sign'],
    href: '/products/gigacrm',
  },
  {
    name: 'Giga AI',
    category: 'Voice & Conversational AI',
    icon: Bot,
    desc: 'Ultra-low latency sub-500ms voice agents with PBX telephony, domain knowledge RAG, and live call whisper supervision.',
    tags: ['Sub-500ms Latency', 'PBX Telephony', 'Autonomous Actions'],
    href: '/products/gigaai',
  },
  {
    name: 'OpenFace',
    category: 'Social Identity Infrastructure',
    icon: Network,
    desc: 'Headless identity, verifiable badges, and portable audience graphs for modern decentralized consumer and SaaS apps.',
    tags: ['Cryptographic SSO', 'Portable Graphs', 'Zero Bot Sybil'],
    href: '/products/openface',
  },
];

const industries = [
  {
    name: 'Manufacturing & Industrial',
    desc: 'Predictive PM cycles, equipment telemetry, storeroom spares, and shop floor work order execution.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Energy & Utilities',
    desc: 'Substation asset management, hazardous zone compliance, and automated field dispatch across grids.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Healthcare & Facilities',
    desc: 'Biomedical asset compliance, strict sterilized inventory chains, and auditable hospital shift scheduling.',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Construction & Civil',
    desc: 'Heavy machinery tracking, subcontractor compliance, job-site delivery receipt, and milestone billing.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Transport & Logistics',
    desc: 'Fleet maintenance logs, multi-depot inventory visibility, cross-dock receiving, and carrier dispatch.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop&q=80',
  },
  {
    name: 'Field Services',
    desc: 'Offline-first mobile work orders, GPS geofenced punch, photo evidence capture, and real-time customer ETA.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&auto=format&fit=crop&q=80',
  },
];

export default function Home() {
  const [activeCapIdx, setActiveCapIdx] = useState(0);
  const [mobilePersona, setMobilePersona] = useState<'technician' | 'worker' | 'supervisor'>('technician');

  const currentCap = enterpriseCapabilities[activeCapIdx];

  const handleNextCap = () => {
    setActiveCapIdx((prev) => (prev + 1) % enterpriseCapabilities.length);
  };

  const handlePrevCap = () => {
    setActiveCapIdx((prev) => (prev - 1 + enterpriseCapabilities.length) % enterpriseCapabilities.length);
  };

  return (
    <Layout>
      <div className="bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900">
        
        {/* SECTION 1: HERO (Meta AI style, expansive centered commanding layout) */}
        <section className="bg-white pt-20 pb-24 lg:pt-28 lg:pb-36 relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 text-center">
            
            {/* Pill Badge */}
            <FadeUp>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-orange-50/80 border border-orange-200/60 px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm mb-8 hover:bg-orange-100/70 transition-colors">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Enterprise Connected Systems · Powered by GigaOps</span>
                <span className="text-orange-400">|</span>
                <span className="text-orange-600 font-bold">Release 2026</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.08}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-gray-900 leading-[1.05] max-w-5xl mx-auto">
                The Operating Platform for Complex Industries
              </h1>
            </FadeUp>

            {/* Subline */}
            <FadeUp delay={0.14}>
              <p className="mt-8 text-xl sm:text-2xl text-gray-500 font-normal leading-relaxed max-w-3xl mx-auto">
                GigaOps brings asset management, workforce dispatch, supply chain, finance, and field execution into one enterprise SaaS platform — with native mobile for field teams.
              </p>
            </FadeUp>

            {/* Action Buttons */}
            <FadeUp delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:connect@gigasystech.com?subject=GigaOps%20Enterprise%20Trial"
                  className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all text-base"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/gigaops"
                  className="inline-flex items-center gap-2.5 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all text-base shadow-sm"
                >
                  <Play className="h-4 w-4 text-[#FF7200] fill-[#FF7200]" />
                  See GigaOps in action
                </Link>
              </div>
            </FadeUp>

            {/* Trust Bar: 10 USA Manufacturing Clients */}
            <FadeUp delay={0.25}>
              <div className="mt-16 pt-10 border-t border-gray-100 max-w-5xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">
                  Trusted by operations and manufacturing leaders
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500 font-medium text-sm sm:text-base">
                  <span className="hover:text-gray-900 transition-colors">Caterpillar</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Honeywell</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Emerson Electric</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Parker Hannifin</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Cummins</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">John Deere</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Rockwell Automation</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">General Electric</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">3M</span>
                  <span className="text-gray-300">·</span>
                  <span className="hover:text-gray-900 transition-colors">Boeing</span>
                </div>
              </div>
            </FadeUp>

            {/* Grand Enterprise Workbench Preview Frame */}
            <FadeUp delay={0.3}>
              <div className="mt-16 max-w-[1360px] mx-auto rounded-3xl border border-gray-200/80 shadow-[0_30px_90px_rgba(0,0,0,0.08)] overflow-hidden bg-white text-left">
                {/* Simulated macOS / Enterprise Header */}
                <div className="bg-gray-100/90 border-b border-gray-200/80 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 text-xs font-semibold text-gray-600 hidden sm:inline-block">
                      gigaops.gigasystech.com/enterprise/workbench
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">
                      <Search className="h-3.5 w-3.5 text-gray-400" />
                      <span>Search 142 assets, work orders, ledgers...</span>
                      <kbd className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-400 font-mono">⌘K</kbd>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Telemetry Live</span>
                    </div>
                  </div>
                </div>

                {/* Workbench Top Bar & Metrics Ribbon */}
                <div className="bg-gray-50 border-b border-gray-200/70 p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Overall Equipment (OEE)</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">94.2%</div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1">↑ +6.8% vs last quarter</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">PM Compliance Rate</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">99.1%</div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1">1,842 work orders closed</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Inventory Multi-DC Accuracy</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">99.8%</div>
                    <div className="text-xs text-gray-500 mt-1">8 regional distribution centers</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Three-Way Invoices Cleared</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">.2M</div>
                    <div className="text-xs text-orange-600 font-semibold mt-1">Zero manual touch exceptions</div>
                  </div>
                </div>

                {/* Main Visual Image with contextual dashboard layout */}
                <div className="relative bg-gray-950 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=85"
                    alt="GigaOps Enterprise Command Center"
                    className="w-full h-[480px] lg:h-[580px] object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Context Callout 1 */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-sm hidden sm:block">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-gray-900">Pump #P-1082 Vibration Normal</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug">
                      Predictive PM schedule triggered. Automated parts kit reserved from Warehouse Bay 4.
                    </p>
                  </div>

                  {/* Floating Context Callout 2 */}
                  <div className="absolute top-8 right-8 bg-gray-900/90 text-white backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-800 max-w-xs hidden md:block">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-orange-400">Mobile Field Dispatch</span>
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full">GPS Verified</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-snug">
                      14 certified technicians dispatched on-site. Offline execution sync ready.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </section>

        {/* SECTION 2: TICKER */}
        <Ticker />

        {/* SECTION 3: PLATFORM ARCHITECTURE OVERVIEW (Bento Grid) */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Platform Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
                GigaOps — Your Entire Operation in One Platform
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                A single enterprise platform that connects every business domain — from asset management to financial close — with unified offline-capable mobile for field teams.
              </p>
            </FadeUp>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Bento 1: Large Span 2 Columns */}
              <FadeUp delay={0.05} className="lg:col-span-2">
                <div className="h-full bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-3xl p-8 lg:p-10 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                        <Globe2 className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                        Unified Experience
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      Web Workbench &amp; Offline-First Native Mobile
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                      Operations managers, supply chain leads, and controllers work in a high-density web command center. Field engineers and technicians execute with purpose-built React Native iOS and Android apps that operate without cellular coverage.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200/70 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-gray-900">100%</div>
                      <div className="text-xs text-gray-500 mt-0.5">Offline-first local cache</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">iOS &amp; Android</div>
                      <div className="text-xs text-gray-500 mt-0.5">Native field applications</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">&lt; 100ms</div>
                      <div className="text-xs text-gray-500 mt-0.5">Workbench page latency</div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Bento 2: 30+ Business Modules */}
              <FadeUp delay={0.1}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <Blocks className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">30+ Connected Modules</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Maintenance, scheduling, inventory, procurement, ledger, DAG automation, and GIS mapping — pre-integrated so you never suffer point-solution fragmentation.
                    </p>
                  </div>
                  <Link
                    href="/gigaops"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] hover:text-orange-700 mt-6 group"
                  >
                    <span>View module catalogue</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>

              {/* Bento 3: Multi-Tenant Enterprise */}
              <FadeUp delay={0.15}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Multi-Tenant Isolation</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Strict tenant boundary enforcement, custom RBAC permissions, single sign-on (SAML/OIDC), and SOC 2 Type II audit trail logging for every database transaction.
                    </p>
                  </div>
                  <div className="mt-6 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                    <Check className="h-4 w-4" />
                    <span>SOC 2 Type II · Zero Data Drift</span>
                  </div>
                </div>
              </FadeUp>

              {/* Bento 4: Workflow Automation */}
              <FadeUp delay={0.2}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <Workflow className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Visual Workflow Engine</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Build durable DAG approval flows, SLA escalation paths, dynamic mobile forms, and conditional cross-module triggers without writing a single line of backend code.
                    </p>
                  </div>
                  <Link
                    href="/gigaops/automation"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] hover:text-orange-700 mt-6 group"
                  >
                    <span>Explore Workflow DAG</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>

              {/* Bento 5: Enterprise Data Integration */}
              <FadeUp delay={0.25}>
                <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center mb-6">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Contracts &amp; IoT</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Ingest streaming telemetry from SCADA, IoT sensors, and third-party ERPs through schema contracts, HMAC-verified webhooks, and idempotent journaling.
                    </p>
                  </div>
                  <Link
                    href="/gigaops/data"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7200] hover:text-orange-700 mt-6 group"
                  >
                    <span>View Data Contracts</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>

            </div>
          </div>
        </section>

        {/* SECTION 3.5: INTERACTIVE CAPABILITIES & INDUSTRY AUTOMATION NAVIGATOR (Pagination & Tab System) */}
        <section id="capabilities" className="bg-gray-50/80 py-24 lg:py-32 scroll-mt-20 border-y border-gray-200/80">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            {/* Header with Title and Pagination Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/70 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-700 mb-4">
                  <Sliders className="h-3.5 w-3.5" />
                  <span>Enterprise Capabilities Navigator</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  What We Automate &amp; Solve for Industry
                </h2>
                <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl">
                  Explore how GigaOps combines iDempiere-grade financial and material rigor with automated field actions and real-time ledger synchronization.
                </p>
              </FadeUp>

              {/* Prev / Next Pagination Controls */}
              <FadeUp delay={0.1} className="flex items-center gap-4 shrink-0">
                <div className="text-sm font-mono text-gray-500 font-semibold">
                  <span className="text-gray-900 font-bold text-lg">{String(activeCapIdx + 1).padStart(2, '0')}</span>
                  <span className="mx-1 text-gray-300">/</span>
                  <span>{String(enterpriseCapabilities.length).padStart(2, '0')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevCap}
                    aria-label="Previous capability"
                    className="h-11 w-11 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextCap}
                    aria-label="Next capability"
                    className="h-11 w-11 rounded-full bg-[#FF7200] hover:bg-[#FF8A2B] text-white flex items-center justify-center transition-all shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </FadeUp>
            </div>

            {/* Capability Tabs Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-gray-200/80">
              {enterpriseCapabilities.map((cap, idx) => {
                const IconComponent = cap.icon;
                const isActive = idx === activeCapIdx;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapIdx(idx)}
                    className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-gray-900 text-white shadow-md'
                        : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className={`h-4 w-4 ${isActive ? 'text-[#FF7200]' : 'text-gray-400'}`} />
                    <span>{cap.domain}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-gray-800 text-orange-400' : 'bg-gray-100 text-gray-500'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Capability Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCap.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Left Column: Problem, Automation & Outcomes */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-7 w-7 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF7200]">
                          <currentCap.icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                          {currentCap.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        {currentCap.title}
                      </h3>
                      <p className="text-base text-gray-600 mt-2 font-medium">
                        {currentCap.headline}
                      </p>
                    </div>

                    {/* Industrial Problem Solved Alert Box */}
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4.5 text-xs sm:text-sm text-amber-950 flex gap-3.5 items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[11px] text-amber-800 block mb-1">
                          Industrial Problem Eliminated:
                        </span>
                        <p className="leading-relaxed text-amber-900">{currentCap.problemSolved}</p>
                      </div>
                    </div>

                    {/* What GigaOps Automates */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        What GigaOps Automates Touchless:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                        {currentCap.whatWeAutomate.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="h-4 w-4 text-[#FF7200] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ERP Rigor / iDempiere Standard Callout */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex gap-3 items-start">
                      <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider block mb-0.5">
                          Enterprise ERP &amp; iDempiere Ledger Standard:
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {currentCap.erpRigor}
                        </p>
                      </div>
                    </div>

                    {/* Business Outcomes KPIs */}
                    <div className="pt-2 border-t border-gray-100 grid grid-cols-3 gap-3">
                      {currentCap.businessOutcomes.map((out, oIdx) => (
                        <div key={oIdx} className="bg-gray-50/80 rounded-xl p-3 border border-gray-100">
                          <div className="text-xl sm:text-2xl font-extrabold text-[#FF7200]">{out.metric}</div>
                          <div className="text-[11px] text-gray-500 font-medium leading-tight mt-1">{out.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technical Pills & Action Link */}
                    <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {currentCap.technicalPills.map((pill, plIdx) => (
                          <span key={plIdx} className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                            {pill}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={currentCap.link}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF7200] hover:text-orange-700 transition-colors group"
                      >
                        <span>{currentCap.linkText}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Simulated Operational Workbench Preview */}
                  <div className="lg:col-span-6">
                    <div className="bg-gray-950 rounded-2xl border border-gray-800 p-5 sm:p-7 shadow-2xl text-white">
                      
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-800 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-bold font-mono text-emerald-400 text-[11px]">
                            {currentCap.simulatedPreview.topStatus}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800">
                          Live Telemetry
                        </span>
                      </div>

                      <div className="mt-3 text-xs text-gray-400 font-mono">
                        {currentCap.simulatedPreview.subStatus}
                      </div>

                      {/* Metrics Ribbon */}
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {currentCap.simulatedPreview.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-gray-900/90 border border-gray-800 p-3 rounded-xl">
                            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{m.label}</div>
                            <div className={`text-lg font-bold mt-1 font-mono ${m.statusColor}`}>{m.val}</div>
                          </div>
                        ))}
                      </div>

                      {/* Transaction Timeline */}
                      <div className="mt-6 pt-5 border-t border-gray-800/80">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center justify-between">
                          <span>Authoritative Operational Journal</span>
                          <span className="text-[10px] text-gray-400 font-mono">SHA-256 Verified</span>
                        </div>

                        <div className="space-y-3">
                          {currentCap.simulatedPreview.eventTimeline.map((ev, evIdx) => (
                            <div key={evIdx} className="bg-gray-900 border border-gray-800/80 rounded-xl p-3 flex items-start gap-3">
                              <div className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-bold text-white">{ev.step}</span>
                                  <span className="text-[10px] text-gray-400 font-mono">{ev.time}</span>
                                </div>
                                <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{ev.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Ledger Sign-Off Badge */}
                      <div className="mt-5 pt-3 border-t border-gray-900 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Lock className="h-3 w-3 text-emerald-400" />
                          <span>Ledger Period: Locked &amp; Auditable</span>
                        </div>
                        <span className="text-orange-400 font-semibold">GigaOps Kernel v2026</span>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* SECTION 3.8: ENTERPRISE ERP ARCHITECTURAL HERITAGE & COMPARISON */}
        <section className="bg-white py-24 lg:py-32 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Architectural Advantage
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
                Enterprise ERP Rigor Meets Cloud SaaS Velocity
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Why manufacturing, industrial, and complex physical organizations replace rigid 1990s ERP monoliths and fragmented point solutions with GigaOps.
              </p>
            </FadeUp>

            {/* Comparison Table / Cards */}
            <FadeUp delay={0.1}>
              <div className="rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[760px]">
                    <thead>
                      <tr className="border-b border-gray-200/80 bg-gray-50/80">
                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/4">
                          Operational Dimension
                        </th>
                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/4">
                          Legacy Monoliths (SAP / iDempiere Desktop)
                        </th>
                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/4">
                          Fragmented Point SaaS Tools
                        </th>
                        <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50/50 w-1/4">
                          GigaOps Enterprise Platform
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {erpComparisonFeatures.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50/40 transition-colors">
                          <td className="py-4 px-6 font-bold text-gray-900">
                            {row.dimension}
                          </td>
                          <td className="py-4 px-6 text-gray-500">
                            <div className="flex items-start gap-2">
                              <span className="h-4 w-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                              <span>{row.legacyErp.text}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-500">
                            <div className="flex items-start gap-2">
                              <span className="h-4 w-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</span>
                              <span>{row.pointSaas.text}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 font-semibold text-gray-900 bg-orange-50/30">
                            <div className="flex items-start gap-2">
                              <span className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                              <span className="text-gray-900">{row.gigaOps.text}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    <span>Compliant with GAAP, SOC 2 Type II, and iDempiere standard accounting schema.</span>
                  </div>
                  <Link href="/gigaops" className="font-bold text-[#FF7200] hover:text-orange-700 flex items-center gap-1">
                    <span>Review Full Enterprise Topology</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </FadeUp>

          </div>
        </section>

        {/* SECTION 4: MODULE SHOWCASE (Human-made enterprise layout, expansive cards) */}
        <section id="modules" className="bg-gray-50/70 py-24 lg:py-32 scroll-mt-20 border-t border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <FadeUp className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Core Operations Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-4">
                Every business operation, covered
              </h2>
              <p className="text-lg text-gray-500">
                Click into any module to see complete enterprise capabilities, documented business outcomes, and industry applicability.
              </p>
            </FadeUp>

            {/* Showcase 1: Asset & Maintenance */}
            <FadeUp className="mb-20">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Asset &amp; Maintenance · CMMS &amp; EAM
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      Control Every Asset. Prevent Every Failure.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Complete enterprise CMMS with work order lifecycles, preventive maintenance schedules, digital asset registers, storeroom MRO parts, and MTBF/MTTR reliability analytics.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Work orders with photo evidence, labor timers &amp; sign-off</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Preventive maintenance scheduling &amp; condition threshold alarms</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>MRO inventory &amp; automatic parts kitting against open orders</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/maintenance"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore CMMS Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        40% reduction in reactive downtime
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
                        alt="Asset & Maintenance CMMS"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Digital Twin · Active Equipment Hierarchy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Showcase 2: Workforce Operations */}
            <FadeUp className="mb-20">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                        alt="Workforce Operations"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Shift Dispatch · Skill Matched
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Workforce Operations
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      Right Person. Right Place. Every Shift.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Visual master scheduler, qualification and expiry tracking, conflict-free shift dispatch, and GPS-verified mobile attendance with pay-ready exports.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Qualification-matched automated shift allocation</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>GPS geofenced mobile attendance &amp; compliance verification</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Pay-ready timesheets with ERP GL journal batch generation</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/workforce"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore Workforce Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        50% faster field dispatch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Showcase 3: Inventory & Supply Chain */}
            <FadeUp className="mb-20">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Inventory &amp; Supply Chain
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      One Version of Stock Truth. Everywhere.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Governed product catalogue, multi-warehouse locator tracking (Aisle/Bay/Bin), receiving inspection gates, lot &amp; serial traceability, and scheduled cycle counting.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Multi-warehouse real-time visibility across physical distribution centers</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Full lot genealogy, serial tracking &amp; FIFO/FEFO expiration checks</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Scheduled cycle counts with automated variance approval workflows</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/inventory"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore Supply Chain Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        99.5% stock balance accuracy
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop&q=80"
                        alt="Inventory and Supply Chain"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Multi-Warehouse Live Ledger
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Showcase 4: Finance & Procurement */}
            <FadeUp>
              <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=80"
                        alt="Finance and Procurement"
                        className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-gray-200 shadow-md">
                        Double-Entry Real-time Ledger
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-100/80 px-3 py-1 rounded-full mb-4">
                      Finance &amp; Procurement
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      From Transaction to Financial Truth.
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                      Immutable double-entry general ledger, automated PO three-way matching, fiscal period close checklists, and live drill-through financial statements directly connected to operations.
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Automated three-way matching (PO, Goods Receipt &amp; Vendor Invoice)</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Subledger event auto-posting with zero manual journal friction</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <CheckCircle className="h-5 w-5 text-[#FF7200] shrink-0" />
                        <span>Real-time P&amp;L, balance sheet, and period close governance</span>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center gap-4">
                      <Link
                        href="/gigaops/finance"
                        className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20"
                      >
                        <span>Explore Finance Module</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                        70% invoices auto-cleared
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </section>

        {/* SECTION 5: MOBILE SECTION (Meta AI dark hardware aesthetic with dual offline/online switcher) */}
        <section id="technologies" className="bg-[#0B0F17] py-24 lg:py-36 text-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 text-xs font-bold text-orange-400 mb-6">
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Dual iOS &amp; Android Native Engine</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                    GigaOps Mobile — Built for the Field, Resilient Offline
                  </h2>

                  <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Frontline on glass, management on web. Purpose-built React Native apps for iOS and Android featuring local encrypted SQLite databases. Field technicians complete work orders, scan barcodes, log time, and capture customer e-signatures — with 100% offline continuity.
                  </p>

                  {/* Persona Switcher Tabs */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      { key: 'technician', label: 'Field Technician', icon: Wrench },
                      { key: 'worker', label: 'Frontline Crew', icon: HardHat },
                      { key: 'supervisor', label: 'Supervisor Lite', icon: ShieldCheck },
                    ].map((tab) => {
                      const IconComp = tab.icon;
                      const isSel = mobilePersona === tab.key;
                      return (
                        <button
                          key={tab.key}
                          onClick={() => setMobilePersona(tab.key as any)}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            isSel
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                              : 'bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800'
                          }`}
                        >
                          <IconComp className="h-3.5 w-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Offline-First SQLite Cache', desc: 'Zero data loss when underground or off-grid; transparent sync once reconnected' },
                      { title: 'Polygon Geofence Punch', desc: '1-tap GPS clock-in / out with automatic break tracking and wage compliance' },
                      { title: 'Camera Barcode / QR OCR', desc: 'Sub-second plate and inventory scanner with direct locator bin assignment' },
                      { title: 'E-Signatures on Glass', desc: 'Legally binding digital stylus sign-off with tamper-proof cryptographic hashes' },
                      { title: 'Shift Swap Marketplace', desc: 'Peer-to-peer shift trading with automated supervisor approval routing' },
                      { title: 'Live On-Site Muster', desc: 'Instant emergency roll-call tool for plant safety coordinators & supervisors' },
                    ].map((feature, idx) => (
                      <div key={idx} className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl">
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="h-2 w-2 rounded-full bg-[#FF7200]" />
                          <span className="text-sm font-bold text-white">{feature.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed pl-4.5">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-wrap items-center gap-6 text-xs font-bold tracking-wider uppercase text-gray-400">
                    <span className="text-orange-400 font-extrabold">Encrypted SQLite</span>
                    <span>·</span>
                    <span>Biometric FaceID / TouchID</span>
                    <span>·</span>
                    <span>iOS &amp; Android Native</span>
                    <span>·</span>
                    <span>100% Offline Capable</span>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column: Dynamic Photorealistic Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <FadeUp delay={0.15}>
                  <div className="relative w-[300px] sm:w-[320px] rounded-[48px] border-[6px] border-gray-800 bg-gray-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                    {/* Dynamic Island */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-900 border border-gray-700" />
                    </div>

                    {/* Phone Screen Container */}
                    <div className="rounded-[40px] bg-gray-900 overflow-hidden text-left border border-gray-800 pt-7 pb-4 min-h-[560px] flex flex-col justify-between">
                      
                      {/* Top Header */}
                      <div>
                        {/* Status Bar */}
                        <div className="px-5 py-2 flex items-center justify-between text-[11px] text-gray-400 border-b border-gray-800">
                          <span className="font-bold text-white">9:41</span>
                          <div className="flex items-center gap-1.5">
                            <WifiOff className="h-3 w-3 text-amber-400" />
                            <span className="text-[10px] text-amber-400 font-semibold">Offline Buffer Active</span>
                          </div>
                        </div>

                        {/* App Header */}
                        <div className="bg-[#FF7200] px-4 py-3 text-white flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-orange-200">
                              {mobilePersona === 'technician' ? 'Field CMMS Mode' : mobilePersona === 'worker' ? 'Frontline Ops' : 'Supervisor Lite'}
                            </div>
                            <div className="text-sm font-extrabold">
                              {mobilePersona === 'technician' ? 'Assigned PM Tasks' : mobilePersona === 'worker' ? 'My Schedule & Attendance' : 'Emergency Roll-Call'}
                            </div>
                          </div>
                          <span className="bg-black/20 text-xs px-2.5 py-0.5 rounded-full font-bold">
                            {mobilePersona === 'technician' ? '3 Jobs' : mobilePersona === 'worker' ? 'On Shift' : '142 Muster'}
                          </span>
                        </div>

                        {/* Persona-Specific Screen Content */}
                        <div className="p-3 space-y-2.5">
                          {mobilePersona === 'technician' && (
                            <>
                              <div className="bg-gray-800/90 border border-gray-700 p-3 rounded-2xl shadow-sm">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[11px] font-bold text-orange-400">WO-1842 · Critical PM</span>
                                  <span className="text-[9px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded-full font-bold">Priority 1</span>
                                </div>
                                <div className="text-xs font-semibold text-white">Slurry Pump Vibration Check</div>
                                <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-2">
                                  <span>Bay 4 Substation</span>
                                  <span>•</span>
                                  <span className="text-emerald-400">Offline Cached</span>
                                </div>
                              </div>

                              <div className="bg-gray-800/60 border border-gray-700/60 p-3 rounded-2xl">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[11px] font-bold text-gray-300">WO-1843 · Routine</span>
                                  <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded-full font-bold">In Progress</span>
                                </div>
                                <div className="text-xs font-semibold text-white">Hydraulic Filter Replacement</div>
                              </div>

                              {/* QR Scanner Simulation Card */}
                              <div className="bg-gradient-to-b from-gray-800 to-gray-850 border border-orange-500/40 p-3 rounded-2xl">
                                <div className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                                  <span>Asset Scanner</span>
                                  <QrCode className="h-3 w-3 text-orange-400" />
                                </div>
                                <div className="h-14 bg-black/60 rounded-xl border border-dashed border-orange-400/50 flex flex-col items-center justify-center text-center p-2">
                                  <span className="text-xs font-bold text-white">Asset #PUMP-4091</span>
                                  <span className="text-[9px] text-emerald-400 font-semibold mt-0.5">Matched: Flowserve 500HP</span>
                                </div>
                              </div>
                            </>
                          )}

                          {mobilePersona === 'worker' && (
                            <>
                              <div className="bg-gray-800/90 border border-emerald-500/40 p-3 rounded-2xl">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[11px] font-bold text-emerald-400">1-Tap GPS Clock-In</span>
                                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold">Inside Geofence</span>
                                </div>
                                <div className="text-xs font-semibold text-white">Gate North Polygon Verified</div>
                                <div className="text-[10px] text-gray-400 mt-1">08:00 AM — 04:30 PM Shift</div>
                              </div>

                              <div className="bg-gray-800/70 border border-gray-700 p-3 rounded-2xl">
                                <div className="text-[10px] font-bold text-orange-400 mb-1">Shift Swap Marketplace</div>
                                <div className="text-xs font-semibold text-white">Swap Request with Marcus T.</div>
                                <div className="text-[10px] text-gray-400 mt-0.5">Tomorrow · Bay 2 Morning Shift</div>
                                <div className="mt-2 flex gap-2">
                                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Accept</span>
                                  <span className="bg-gray-700 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded">Decline</span>
                                </div>
                              </div>

                              <div className="bg-gray-800/50 border border-gray-700/60 p-3 rounded-2xl flex items-center justify-between">
                                <div>
                                  <div className="text-xs font-bold text-white">E-Sign Handover Form</div>
                                  <div className="text-[10px] text-gray-400">Finger stylus sign-off ready</div>
                                </div>
                                <FileSignature className="h-4 w-4 text-orange-400" />
                              </div>
                            </>
                          )}

                          {mobilePersona === 'supervisor' && (
                            <>
                              <div className="bg-gray-800/90 border border-orange-500/40 p-3 rounded-2xl">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[11px] font-bold text-orange-400">On-Site Muster Status</span>
                                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold">100% Accounted</span>
                                </div>
                                <div className="text-sm font-extrabold text-white">142 Workers Clocked In</div>
                                <div className="text-[10px] text-gray-400 mt-1">0 missing · Emergency Headcount OK</div>
                              </div>

                              <div className="bg-gray-800/70 border border-gray-700 p-3 rounded-2xl">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] font-bold text-gray-300">Timesheet Approval Queue</span>
                                  <span className="text-[9px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded-full font-bold">14 Pending</span>
                                </div>
                                <div className="text-xs font-semibold text-white">1-Tap Batch Approve Timesheets</div>
                              </div>

                              <div className="bg-red-950/40 border border-red-500/30 p-3 rounded-2xl">
                                <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">Hazard Broadcast</div>
                                <div className="text-[11px] text-gray-300">Alert all active field units on site</div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Bottom Phone Action Button */}
                      <div className="p-3">
                        <div className="bg-[#FF7200] text-white text-center py-2.5 rounded-xl text-xs font-bold shadow-md shadow-orange-900/40 cursor-pointer hover:bg-orange-600 transition-colors">
                          {mobilePersona === 'technician' ? 'Sign-Off & Queue Sync' : mobilePersona === 'worker' ? '1-Tap Clock-Out (GPS)' : 'Broadcast Muster Confirm'}
                        </div>
                      </div>

                    </div>
                  </div>
                </FadeUp>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: STATS */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              <FadeUp delay={0.05} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">30+</div>
                <div className="text-sm font-bold text-gray-900 mt-2">GigaOps Modules</div>
                <div className="text-xs text-gray-500 mt-0.5">Pre-integrated business suite</div>
              </FadeUp>
              <FadeUp delay={0.1} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">9</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Product Lines</div>
                <div className="text-xs text-gray-500 mt-0.5">Specialized enterprise software</div>
              </FadeUp>
              <FadeUp delay={0.15} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">12</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Mobile Capabilities</div>
                <div className="text-xs text-gray-500 mt-0.5">Offline-first React Native</div>
              </FadeUp>
              <FadeUp delay={0.2} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">100%</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Audit Trail Coverage</div>
                <div className="text-xs text-gray-500 mt-0.5">Immutable ledger facts</div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 7: OTHER PRODUCTS (Elevated Meta AI card aesthetics) */}
        <section id="products" className="bg-gray-50/70 py-24 lg:py-32 scroll-mt-20 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Product Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
                Beyond GigaOps — The Gigasys Product Suite
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                In addition to the unified GigaOps enterprise operational platform, Gigasys engineers focused digital products for communications, exchange commerce, identity, and conversational AI.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => {
                const IconComponent = product.icon;
                return (
                  <FadeUp key={product.name} delay={idx * 0.05}>
                    <Link href={product.href} className="block h-full">
                      <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#FF7200] border border-orange-100 flex items-center justify-center group-hover:bg-[#FF7200] group-hover:text-white transition-colors duration-200">
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                              {product.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF7200] transition-colors">
                            {product.name}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            {product.desc}
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-100">
                            {product.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10px] font-semibold bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FF7200]">
                            <span>Explore product specifications</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 8: INDUSTRIES */}
        <section id="industries" className="bg-white py-24 lg:py-32 scroll-mt-20">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Target Sectors
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
                Built for the Industries That Keep the World Running
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Engineered for organizations operating complex physical assets, frontline teams, regulated supply chains, and multi-facility networks.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => (
                <FadeUp key={ind.name} delay={idx * 0.05}>
                  <div className="group relative overflow-hidden rounded-3xl h-64 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                      <h3 className="text-xl font-bold leading-snug group-hover:text-orange-400 transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="bg-[#0B0F17] py-24 lg:py-32 relative overflow-hidden text-white">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 text-xs font-bold text-orange-400 mb-6">
                <span>Enterprise Architecture Consultation</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ready to modernize your operations with GigaOps?
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Schedule a live, architecture-first walkthrough with our engineering leadership. No generic sales decks — just real workflows running live on web and frontline mobile.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:connect@gigasystech.com?subject=GigaOps%20Enterprise%20Demo"
                  className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-orange-900/50 hover:-translate-y-0.5 text-base"
                >
                  Book an Enterprise Demo <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all text-base"
                >
                  Talk to an Engineer
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-500 font-medium">
                <span>connect@gigasystech.com</span>
                <span>•</span>
                <span>Hyderabad, India</span>
                <span>•</span>
                <span>Delaware, United States</span>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </Layout>
  );
}
