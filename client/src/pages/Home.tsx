import React, { useState, useEffect, useRef } from 'react';
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
  Pill,
  Factory,
  Wheat,
  Trophy,
  Zap,
  HeartPulse,
  Truck,
  Eye,
  Gauge,
  Thermometer,
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
    erpRigor: 'Enforces standardized operational document lifecycles (prepare → approve → complete) with immutable audit logging and depreciation impact tracking.',
    businessOutcomes: [
      { metric: '42%', label: 'Reduction in reactive line downtime' },
      { metric: '60%', label: 'Faster work order cycle turnaround' },
      { metric: '100%', label: 'Audit-ready maintenance history' },
    ],
    technicalPills: ['Asset Digital Twin', 'MRO Spares Kitting', 'MTBF / MTTR Analytics', 'Predictive PM Cycles', 'Offline Field Execution'],
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
      'Polygon geofence GPS 1-tap clock-in/out with on-device local punch buffering',
      'Peer-to-peer shift swap marketplace with automatic supervisor sign-off',
      'Pay-ready batch journal export directly formatted for enterprise general ledger posting',
    ],
    erpRigor: 'Segregation of duties (maker-checker delegation of authority), payroll accrual fact creation, and immutable worker time change logs.',
    businessOutcomes: [
      { metric: '50%', label: 'Faster shift dispatch & mobilization' },
      { metric: '30%', label: 'Fewer scheduling exceptions' },
      { metric: 'Zero', label: 'Ghost punches with GPS geofencing' },
    ],
    technicalPills: ['Geofenced GPS Punch', 'On-Device Local Buffer', 'Skill Matrix Matching', 'Shift Swap Marketplace', 'Biometric Authentication'],
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
        { step: 'Shift Handover Signed on Glass', detail: 'Digital stylus sign-off archived with cryptographic hash', time: '08:02 AM', ok: true },
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
    problemSolved: 'Discrepancies between physical bins and general ledgers, blind inter-warehouse transit, expired regulated lots, and production line halts.',
    whatWeAutomate: [
      'Locator-level real-time inventory balances across warehouses, aisles, bays, and bins',
      'Directed putaway and wave picking with sub-second barcode & QR camera scans',
      'Complete lot & serial genealogy with FIFO/FEFO expiration tracking',
      'Automated cycle count discrepancy generation with dual-custody approval thresholds',
    ],
    erpRigor: 'Double-entry inventory ledger: every credit has an equal debit; perpetual inventory valuation with landed cost allocation.',
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
        { step: 'Double-Entry Ledger Updated', detail: 'Dr Inventory Asset $42,500 / Cr GRNI Accrual', time: '11:21 AM', ok: true },
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
    erpRigor: 'Automated 3-way reconciliation engine. Invoices within tolerance auto-post directly to Accounts Payable subledgers with zero human friction.',
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
        { label: 'Cleared Today', val: '$1.48M', statusColor: 'text-emerald-600' },
        { label: 'Auto-Match Ratio', val: '72.4%', statusColor: 'text-emerald-600' },
        { label: 'Held Exceptions', val: '2 for DoA', statusColor: 'text-orange-600' },
      ],
      eventTimeline: [
        { step: 'Vendor Invoice Received (EDI/OCR)', detail: 'Supplier #SUP-104 invoice $38,400 ingested', time: '09:30 AM', ok: true },
        { step: 'Automated 3-Way Match Executed', detail: 'Matched PO #PO-4920 and GRN #RC-1102; variance 0.00%', time: '09:31 AM', ok: true },
        { step: 'AP Ledger Entry Posted', detail: 'Dr GRNI $38,400 / Cr Accounts Payable $38,400', time: '09:32 AM', ok: true },
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
      'Immutable balanced journal facts generated per accounting schema',
      'Fiscal period lock enforcement across all operational modules (prevents late-posting drift)',
      'Multi-company currency translation and automated inter-company balance eliminations',
    ],
    erpRigor: '100% compliant double-entry accounting schema, strict audit trail, and instant drill-through from financial statement to source operational transaction.',
    businessOutcomes: [
      { metric: '60%', label: 'Faster fiscal period close' },
      { metric: '100%', label: 'Double-entry compliance with immutable trails' },
      { metric: 'Zero', label: 'Manual spreadsheet reconciliation gaps' },
    ],
    technicalPills: ['Balanced Journal Facts', 'Multi-Schema Accounting', 'Strict Subledger Period Locks', 'Bank Statement Reconciler', 'Multi-Company Consolidation'],
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
        { step: 'Balanced Fact Generated', detail: 'Dr Maintenance Expense $3,200 / Cr Inventory $3,200', time: '02:15 PM', ok: true },
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
    problemSolved: 'Rigid legacy software where a single approval rule change requires weeks of expensive consulting and custom code deployments.',
    whatWeAutomate: [
      'Visual drag-and-drop DAG workflow studio for multi-step approval hierarchies',
      'Business rules engine with decision tables, threshold evaluators, and dynamic forms',
      'Durable state machine execution with automated rollback, retry, and compensation',
      'Cross-module event dispatch: work order completion automatically triggers inventory deduction and AP billing',
    ],
    erpRigor: 'Standardized operational document transitions logged with cryptographic actor timestamps and role verification.',
    businessOutcomes: [
      { metric: '75%', label: 'Reduction in manual operational handoffs' },
      { metric: 'Minutes', label: 'To deploy new policies instead of months' },
      { metric: '100%', label: 'Execution auditability with actor attribution' },
    ],
    technicalPills: ['Visual DAG Studio', 'Decision Table Rules', 'Dynamic Mobile Forms', 'State Machine Engine', 'Event-Driven Saga Mesh'],
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
        { step: 'High-Value PR Raised ($85,000)', detail: 'Exceeds standard $25k limit; routed to VP Operations', time: '03:40 PM', ok: true },
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
      'On-device encrypted local store keeping active work orders, assets, and parts offline',
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
    technicalPills: ['On-Device Encrypted Store', 'Bi-directional Conflict Sync', 'Native iOS & Android', 'Camera Barcode / QR OCR', 'E-Signature on Glass'],
    link: '/gigaops',
    linkText: 'Explore Mobile Architecture',
    simulatedPreview: {
      topStatus: 'OFFLINE-FIRST ENGINE ACTIVE · 100% RESILIENT',
      subStatus: 'Hardware Device: iPhone 16 Pro · Enclave Encrypted',
      metrics: [
        { label: 'Sync State', val: 'Buffered (Offline)', statusColor: 'text-amber-600' },
        { label: 'Local Store', val: '14.2 MB', statusColor: 'text-blue-600' },
        { label: 'Pending Replay', val: '3 items queued', statusColor: 'text-emerald-600' },
      ],
      eventTimeline: [
        { step: 'Cellular Signal Lost (-115dBm)', detail: 'Engine automatically transitions to on-device encrypted store', time: '01:05 PM', ok: true },
        { step: 'Work Order Completed Offline', detail: 'Labor hours logged, photo attached, customer signature captured', time: '01:22 PM', ok: true },
        { step: 'Network Restored (5G)', detail: 'Queued mutations replayed with idempotency tokens; 0 conflicts', time: '01:45 PM', ok: true },
      ],
    },
  },
];

// Rugged Monitoring Style Gallery Cards ("RM EYE" Showcase)
const unifiedIntelligenceCards = [
  {
    id: 'dfi',
    tag: '• DFI · Field Execution',
    title: 'Digital Field Inspector',
    desc: 'Mobile inspection checklists, sub-second photo proof, and torque measurement logs with on-device offline continuity.',
    img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
    stat: '100% Offline Ready',
  },
  {
    id: 'apm',
    tag: '• APM · Predictive AI Center',
    title: 'Asset Performance Management',
    desc: 'Predictive vibration alarms, automated preventive maintenance generation, and live MTBF/MTTR reliability telemetry.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop&q=80',
    isHero: true,
    hudData: {
      healthIndex: '98%',
      healthLabel: 'Very Good',
      totalAssets: '142',
      healthy: '128',
      warnings: '10',
      critical: '4',
    },
  },
  {
    id: 'ivm',
    tag: '• IVM · Thermal & Intrusion',
    title: 'IR & Condition Diagnostics',
    desc: 'Thermal infrared runaway detection and automated threshold breach dispatch for transformers and rotating machinery.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    stat: 'Real-Time Thermography',
  },
  {
    id: 'sas',
    tag: '• SAS · Telemetry Mesh',
    title: 'Plant & Grid Automation',
    desc: 'Direct sensor telemetry ingestion through schema contracts, SCADA protocol adapters, and automated alarm routing.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
    stat: 'Sub-Second Telemetry',
  },
  {
    id: 'inp',
    tag: '• INP · Multi-DC Inventory',
    title: 'Inventory & Warehouse Planner',
    desc: 'Locator-level real-time inventory balances (Aisle/Bay/Bin), double-entry stock journals, and cycle count variance control.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80',
    stat: '99.8% Bin Accuracy',
  },
  {
    id: 'dtn',
    tag: '• DTN · Digital Twin',
    title: 'Digital Twin & Asset Lifecycle',
    desc: 'High-density 3D equipment twin, depreciation schedule, maintenance cost history, and capital replacement forecasting.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    stat: 'Full Asset Lifecycle',
  },
];

// ERP Architectural Comparison Dataset (Cleaned of open-source/technical leaks)
const erpComparisonFeatures = [
  {
    dimension: 'Frontline Mobility',
    legacyErp: { text: 'Zero or clunky desktop web wrappers; fails offline', type: 'bad' },
    pointSaas: { text: 'Separate point mobile apps with disconnected logins', type: 'warn' },
    gigaOps: { text: 'Native iOS & Android with 100% offline encrypted local sync', type: 'best' },
  },
  {
    dimension: 'General Ledger Rigor',
    legacyErp: { text: 'Strong double-entry accounting but isolated from frontline work', type: 'warn' },
    pointSaas: { text: 'Shallow CSV exports; no true double-entry subledger facts', type: 'bad' },
    gigaOps: { text: 'Audit-grade balanced journals & automated 3-way matching in real time', type: 'best' },
  },
  {
    dimension: 'Workflow & Approval Agility',
    legacyErp: { text: 'Months of hardcoded custom code consulting to modify rules', type: 'bad' },
    pointSaas: { text: 'Rigid pre-baked workflows limited to one silo', type: 'warn' },
    gigaOps: { text: 'Visual drag-and-drop DAG studio with dynamic forms & rules engine', type: 'best' },
  },
  {
    dimension: 'Data Model & Integration',
    legacyErp: { text: 'Monolithic legacy schema; painful upgrade migrations', type: 'warn' },
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

// Ordered exact as requested: Pharma, Manufacturing, Agriculture, Sports, Energy, Healthcare, Transport, Construction
const industriesData = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Life Sciences',
    badge: 'FDA 21 CFR Part 11 · GMP Validated',
    icon: Pill,
    headline: 'Cleanroom Validation, Cold-Chain & Electronic Batch Records',
    desc: 'Validated asset management for cleanrooms, biopharma reactors, and continuous serialization. Complete compliance with FDA 21 CFR Part 11 electronic signatures and immutable audit trails.',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Calibration CMMS & Instruments',
      'Cleanroom Environmental Telemetry',
      'Electronic Batch Production Records',
      'FDA 21 CFR Part 11 E-Signature',
      'Lot Genealogy & FEFO Cold-Chain',
    ],
    outcome: '100% audit-ready FDA inspection history & zero batch contamination',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    badge: 'OEE Telemetry · Discrete & Process',
    icon: Factory,
    headline: 'Predictive PM, Shop Floor Telemetry & MRO Spares',
    desc: 'Telemetry-driven preventive maintenance, equipment OEE analytics, automated storeroom parts kitting, and shop floor work order execution for discrete and continuous plants.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Asset Performance Management',
      'MRO Spares Kitting & Storeroom',
      'SCADA Telemetry Ingestion Mesh',
      'Automated 3-Way Match AP',
      'Offline Field Work Orders',
    ],
    outcome: '42% reduction in unplanned line stoppages & 99.8% storeroom accuracy',
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Agri-Tech',
    badge: 'Irrigation Telemetry · Heavy Fleet',
    icon: Wheat,
    headline: 'Fleet Maintenance, Multi-Silo Storage & Seasonal Crews',
    desc: 'Heavy tractor and combine telematics, irrigation pump telemetry, multi-silo grain inventory locators, and dynamic seasonal workforce scheduling across distributed acreage.',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Heavy Fleet Preventive CMMS',
      'Multi-Silo Grain Stock Ledger',
      'Irrigation IoT Telemetry Ingestion',
      'Seasonal Crew Shift Dispatch',
      'Geofenced Acreage Time Punch',
    ],
    outcome: 'Zero harvest-window downtime & 35% savings in seasonal crew logistics',
  },
  {
    id: 'sports',
    name: 'Sports, Venues & Entertainment',
    badge: 'Stadium Operations · Crowd Logistics',
    icon: Trophy,
    headline: 'Turnstile Telemetry, Multi-Gate Staffing & Ticketing Commerce',
    desc: 'Large-scale stadium facility maintenance, turnstile access telemetry, multi-zone security and concession crew dispatch, paired with Swappy provider-governed secondary ticket exchange.',
    img: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Stadium Facilities & Turnstile CMMS',
      'Multi-Gate Staffing & Crowd Dispatch',
      'Swappy Secondary Ticketing Engine',
      'Concession Multi-Bar Inventory',
      'Emergency On-Site Muster Mode',
    ],
    outcome: '100% turnstile uptime on event days & sub-minute crowd dispatch',
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    badge: 'High-Voltage Telemetry · Substation Twins',
    icon: Zap,
    headline: 'Substation Diagnostics, Grid Mapping & High-Risk Permits',
    desc: 'High-voltage transformer condition monitoring, spatial grid GIS hierarchies, automated lockout/tagout permits, and rapid crew mobilization during grid disruptions.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Substation Automation (SAS) Ingestion',
      'Lockout / Tagout High-Risk Permits',
      'Spatial Grid Geospatial Mapping',
      'Thermal Infrared Anomaly Alarms',
      'Offline Grid Field Inspection',
    ],
    outcome: '55% faster outage restoration & zero unpermitted high-voltage entries',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Facilities',
    badge: 'Biomedical Compliance · Sterile Supply',
    icon: HeartPulse,
    headline: 'Biomedical Calibration, Sterile Chains & Clinical Rosters',
    desc: 'Hospital facility asset maintenance, medical device calibration schedules, sterile room environment monitoring, and credentialed clinical nursing shift dispatch.',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Biomedical Calibration CMMS',
      'Sterile Room Lot & Expiry Tracking',
      'Credentialed Nurse Shift Dispatch',
      'Hospital Environmental Sensors',
      'Mobile Handover Sign-Off on Glass',
    ],
    outcome: '100% Joint Commission compliance & zero missing critical equipment',
  },
  {
    id: 'transport',
    name: 'Transport & Logistics',
    badge: 'Fleet Telematics · Cross-Dock Hubs',
    icon: Truck,
    headline: 'Fleet Maintenance, Multi-Depot Stock & Carrier Routing',
    desc: 'Heavy commercial vehicle maintenance logs, tire and engine telematics, multi-hub cross-dock inventory locators, and pay-ready driver mileage and trip calculations.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Fleet Preventive CMMS & Telematics',
      'Depot Cross-Dock Locators (Bin/Dock)',
      'Driver GPS Geofenced Attendance',
      'Tire & Component Lot Traceability',
      'Camera Expense & Fuel Receipts',
    ],
    outcome: '28% lower fleet operating cost per mile & 99.4% on-time departure',
  },
  {
    id: 'construction',
    name: 'Field Services & Construction',
    badge: 'Heavy Plant · Civil Contractor Ops',
    icon: HardHat,
    headline: 'Heavy Equipment Inspection, Job-Site Logistics & Client Sign-Off',
    desc: 'Heavy yellow-iron machinery telemetry, subcontractor compliance tracking, mobile work orders with customer digital signatures on glass, and milestone progress billing.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
    adaptedModules: [
      'Heavy Yellow-Iron Plant Inspection',
      'Subcontractor Compliance Tracking',
      'Offline Mobile Work Orders',
      'Customer Sign-Off on Glass',
      'Milestone Progress Billing',
    ],
    outcome: '60% faster customer sign-off & zero disputes on subcontractor hours',
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

export default function Home() {
  const [activeCapIdx, setActiveCapIdx] = useState(0);
  const [activeIndustryId, setActiveIndustryId] = useState('pharma');
  const [mobilePersona, setMobilePersona] = useState<'technician' | 'worker' | 'supervisor'>('technician');

  const galleryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelectIndustry = (e: any) => {
      if (e.detail && industriesData.some((ind) => ind.id === e.detail)) {
        setActiveIndustryId(e.detail);
      }
    };
    window.addEventListener('select-industry', handleSelectIndustry);
    return () => window.removeEventListener('select-industry', handleSelectIndustry);
  }, []);

  const currentCap = enterpriseCapabilities[activeCapIdx];
  const currentIndustry = industriesData.find((ind) => ind.id === activeIndustryId) || industriesData[0];

  const handleNextCap = () => {
    setActiveCapIdx((prev) => (prev + 1) % enterpriseCapabilities.length);
  };

  const handlePrevCap = () => {
    setActiveCapIdx((prev) => (prev - 1 + enterpriseCapabilities.length) % enterpriseCapabilities.length);
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      galleryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900">
        
        {/* SECTION 1: HERO (MaintainX / Meta About style commanding split presentation) */}
        <section className="bg-white pt-20 pb-20 lg:pt-28 lg:pb-32 relative overflow-hidden">
          
          {/* Subtle Ambient Background Motion (Meta style) */}
          <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[140px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Thesis & CTAs */}
              <div className="lg:col-span-6 text-left">
                <FadeUp>
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-orange-50/90 border border-orange-200 px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm mb-6">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Enterprise Connected Platform · Powered by GigaOps</span>
                    <span className="text-orange-300">|</span>
                    <span className="text-orange-600 font-bold">Release 2026</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-gray-950 leading-[1.08]">
                    The Operating Platform for Complex Industries
                  </h1>

                  <p className="mt-6 text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-xl">
                    GigaOps unifies asset reliability, frontline workforce dispatch, multi-warehouse supply chain, and governed financial ledgers into one connected SaaS platform — with zero-signal offline mobile execution.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="mailto:connect@gigasystech.com?subject=GigaOps%20Enterprise%20Trial"
                      className="inline-flex items-center gap-2 bg-[#FF7200] hover:bg-[#FF8A2B] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all text-base"
                    >
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#unified-intelligence"
                      className="inline-flex items-center gap-2.5 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all text-base shadow-sm"
                    >
                      <Play className="h-4 w-4 text-[#FF7200] fill-[#FF7200]" />
                      See GigaOps in action
                    </a>
                  </div>

                  {/* Enterprise Governance Assurance Ribbon (Replaced fake logos) */}
                  <div className="mt-12 pt-8 border-t border-gray-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-500">
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <BadgeCheck className="h-4 w-4 text-emerald-600" />
                      <span>SOC 2 Type II Architecture</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>GAAP &amp; IFRS General Ledger</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <Lock className="h-4 w-4 text-[#FF7200]" />
                      <span>On-Device Encrypted Local Store</span>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column: MaintainX Style Interactive Command Center */}
              <div className="lg:col-span-6">
                <FadeUp delay={0.15}>
                  <div className="relative mx-auto rounded-3xl border border-gray-200/90 shadow-[0_30px_90px_rgba(0,0,0,0.1)] overflow-hidden bg-white text-left">
                    
                    {/* Simulated OS Header */}
                    <div className="bg-gray-100/90 border-b border-gray-200/80 px-5 py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        <span className="ml-3 text-xs font-semibold text-gray-600 hidden sm:inline-block">
                          gigaops.gigasystech.com/enterprise/workbench
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Mesh Live</span>
                        </div>
                      </div>
                    </div>

                    {/* MaintainX Style Live Operational HUD */}
                    <div className="p-5 sm:p-6 bg-gradient-to-b from-gray-50/50 to-white">
                      
                      {/* Top Metric Cards */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Equipment Health</div>
                          <div className="text-2xl font-black text-emerald-600 mt-1">98.4%</div>
                          <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">↑ +4.2% vs target</div>
                        </div>

                        <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">PM Compliance</div>
                          <div className="text-2xl font-black text-gray-900 mt-1">99.1%</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">1,842 closed</div>
                        </div>

                        <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">3-Way Match AP</div>
                          <div className="text-2xl font-black text-[#FF7200] mt-1">72.4%</div>
                          <div className="text-[10px] text-orange-600 font-semibold mt-0.5">Touchless clear</div>
                        </div>
                      </div>

                      {/* Split Operator Photo + Active Live Telemetry */}
                      <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-950 h-[300px]">
                        <img
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
                          alt="Operator using GigaOps"
                          className="w-full h-full object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent pointer-events-none" />

                        {/* Floating Live Card: MaintainX / Meta HUD Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200/80 shadow-lg flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                              <span className="text-xs font-bold text-gray-900">Main Slurry Pump #P-1082</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Vibration: 0.04mm (Normal) · PM scheduled in 48 hrs · Parts reserved
                            </p>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                            Auto-Dispatched
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </FadeUp>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: RUGGED MONITORING STYLE "RM EYE" GALLERY ("Where Operations Meet Unified Intelligence") */}
        <section id="unified-intelligence" className="bg-gray-950 py-24 lg:py-32 text-white relative overflow-hidden">
          
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <FadeUp>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-3.5 py-1 text-xs font-bold text-orange-400 mb-4">
                  <Eye className="h-3.5 w-3.5" />
                  <span>Unified Intelligence Architecture</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Where Operations Meet Unified Intelligence
                </h2>
                <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
                  14+ interconnected modules bring asset data, health, diagnostics, workflows, and double-entry operations into one digital environment.
                </p>
              </FadeUp>

              {/* Gallery Scroll Buttons */}
              <FadeUp delay={0.1} className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => scrollGallery('left')}
                  aria-label="Scroll left"
                  className="h-11 w-11 rounded-full border border-gray-800 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollGallery('right')}
                  aria-label="Scroll right"
                  className="h-11 w-11 rounded-full bg-[#FF7200] hover:bg-[#FF8A2B] text-white flex items-center justify-center transition-all shadow-md shadow-orange-900/40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </FadeUp>
            </div>

            {/* Scrolling Cards Gallery */}
            <div
              ref={galleryScrollRef}
              className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
            >
              {unifiedIntelligenceCards.map((card) => (
                <div
                  key={card.id}
                  className={`snap-start shrink-0 rounded-3xl overflow-hidden relative border border-gray-800 group transition-all duration-300 hover:border-orange-500/50 ${
                    card.isHero ? 'w-[380px] sm:w-[460px]' : 'w-[320px] sm:w-[360px]'
                  }`}
                >
                  {/* Background Image */}
                  <div className="h-[420px] relative">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-black/30" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-orange-400 border border-gray-800">
                      {card.tag}
                    </div>

                    {/* Center Spotlight Card with Rugged Monitoring Style HUD */}
                    {card.isHero && card.hudData && (
                      <div className="absolute inset-x-4 top-16 bg-gray-900/85 backdrop-blur-md rounded-2xl border border-gray-700/80 p-5 shadow-2xl text-white">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                          System Health Index
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-4xl font-black text-emerald-400 font-mono">
                              {card.hudData.healthIndex}
                            </div>
                            <div className="text-xs text-gray-300 font-semibold">
                              {card.hudData.healthLabel}
                            </div>
                          </div>

                          <div className="h-12 w-12 rounded-full border-4 border-emerald-400 flex items-center justify-center font-bold text-xs text-emerald-400">
                            ✓
                          </div>
                        </div>

                        {/* Status Grid */}
                        <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-gray-800 text-center font-mono">
                          <div>
                            <div className="text-[9px] text-gray-500">TOTAL</div>
                            <div className="text-sm font-bold">{card.hudData.totalAssets}</div>
                          </div>
                          <div>
                            <div className="text-[9px] text-emerald-500">HEALTHY</div>
                            <div className="text-sm font-bold text-emerald-400">{card.hudData.healthy}</div>
                          </div>
                          <div>
                            <div className="text-[9px] text-yellow-500">WARNING</div>
                            <div className="text-sm font-bold text-yellow-400">{card.hudData.warnings}</div>
                          </div>
                          <div>
                            <div className="text-[9px] text-red-500">CRITICAL</div>
                            <div className="text-sm font-bold text-red-400">{card.hudData.critical}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 inset-x-0 p-6 text-left">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                        {card.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs">
                        <span className="text-orange-400 font-semibold">
                          {card.stat || 'Enterprise Connected'}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: MULTI-INDUSTRY ADAPTATION ENGINE (Pharma, Manufacturing, Agriculture, Sports, etc.) */}
        <section id="industries" className="bg-white py-24 lg:py-32 scroll-mt-20 border-b border-gray-100">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            
            <FadeUp className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full">
                Multi-Industry Adaptability
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-4 mb-4">
                Built for the Industries That Keep the World Running
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                GigaOps is not limited to manufacturing. One universal operational chassis adapts to 8 critical physical industries — configuring modules, compliance packs, and workflows without forking code.
              </p>
            </FadeUp>

            {/* Industry Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
              {industriesData.map((ind) => {
                const IconComp = ind.icon;
                const isSelected = activeIndustryId === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustryId(ind.id)}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-gray-950 border-gray-950 text-white shadow-lg scale-105'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-orange-50/30'
                    }`}
                  >
                    <IconComp className={`h-5 w-5 mb-2 ${isSelected ? 'text-[#FF7200]' : 'text-gray-500'}`} />
                    <span className="text-xs font-bold leading-tight line-clamp-2">{ind.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Industry Interactive Deep-Dive Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 via-white to-orange-50/20 border border-gray-200/90 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column: Sector Details & Modules */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                        <currentIndustry.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                          {currentIndustry.badge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                          {currentIndustry.name}
                        </h3>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-950 leading-snug">
                      {currentIndustry.headline}
                    </h4>

                    <p className="text-base text-gray-600 leading-relaxed">
                      {currentIndustry.desc}
                    </p>

                    {/* Adapted Modules Checklist */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        GigaOps Modules Configured for this Sector:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentIndustry.adaptedModules.map((mod, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-xs">
                            <CheckCircle className="h-4 w-4 text-[#FF7200] shrink-0" />
                            <span>{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sector ROI Outcome */}
                    <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
                        <TrendingUp className="h-4 w-4" />
                        <span>{currentIndustry.outcome}</span>
                      </div>

                      <a
                        href="mailto:connect@gigasystech.com?subject=Sector%20Architecture%20Inquiry"
                        className="inline-flex items-center gap-2 bg-gray-950 hover:bg-[#FF7200] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors shrink-0"
                      >
                        <span>Request {currentIndustry.name} Blueprint</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: High-Res Industry Imagery */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl relative h-[380px] group">
                      <img
                        src={currentIndustry.img}
                        alt={currentIndustry.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400 mb-1">
                          Sector Deployment Pack
                        </div>
                        <div className="text-base font-extrabold">
                          {currentIndustry.name} Verified Architecture
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* SECTION 4: CAPABILITIES MATRIX & INDUSTRY AUTOMATION NAVIGATOR (Pagination & Tab System) */}
        <section id="capabilities" className="bg-gray-50/80 py-24 lg:py-32 scroll-mt-20 border-b border-gray-200/80">
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
                  Explore how GigaOps combines audit-grade financial and material rigor with automated field actions and real-time ledger synchronization.
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
                  <div className="lg:col-span-6 space-y-6 text-left">
                    
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

                    {/* ERP Rigor Callout */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex gap-3 items-start">
                      <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider block mb-0.5">
                          Enterprise General Ledger Standard:
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
                    <div className="bg-gray-950 rounded-2xl border border-gray-800 p-5 sm:p-7 shadow-2xl text-white text-left">
                      
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
                          <span className="text-[10px] text-gray-400 font-mono">Cryptographically Verified</span>
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

        {/* SECTION 5: ENTERPRISE ERP ARCHITECTURAL HERITAGE & COMPARISON */}
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
                Why manufacturing, industrial, life sciences, and physical organizations replace rigid 1990s ERP monoliths and fragmented point solutions with GigaOps.
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
                          Legacy Monoliths (SAP / Traditional ERP)
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
                    <span>Compliant with GAAP, IFRS, SOC 2 Type II, and standard accrual accounting schemas.</span>
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

        {/* SECTION 6: MOBILE SECTION (Meta AI dark hardware aesthetic with dual offline/online switcher) */}
        <section id="technologies" className="bg-[#0B0F17] py-24 lg:py-36 text-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 text-left">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-1.5 text-xs font-bold text-orange-400 mb-6">
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Dual iOS &amp; Android Native Engine</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                    GigaOps Mobile — Built for the Field, Resilient Offline
                  </h2>

                  <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Frontline on glass, management on web. Purpose-built native applications for iOS and Android featuring on-device encrypted local stores. Field technicians complete work orders, scan barcodes, log time, and capture customer e-signatures — with 100% offline continuity.
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
                      { title: 'On-Device Encrypted Store', desc: 'Zero data loss when underground or off-grid; transparent sync once reconnected' },
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
                    <span className="text-orange-400 font-extrabold">On-Device Encrypted Vault</span>
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

        {/* SECTION 7: STATS */}
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
                <div className="text-xs text-gray-500 mt-0.5">Offline-first native field apps</div>
              </FadeUp>
              <FadeUp delay={0.2} className="pt-6 lg:pt-0">
                <div className="text-5xl lg:text-6xl font-extrabold text-[#FF7200] tracking-tight">100%</div>
                <div className="text-sm font-bold text-gray-900 mt-2">Audit Trail Coverage</div>
                <div className="text-xs text-gray-500 mt-0.5">Immutable general ledger facts</div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 8: OTHER PRODUCTS */}
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
                      <div className="h-full bg-white border border-gray-200/80 rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between text-left">
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
