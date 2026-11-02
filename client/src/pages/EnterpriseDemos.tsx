import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, BarChart3, Boxes, Check, ChevronRight, ClipboardCheck,
  FileCheck2, FlaskConical, Layers3, Pause, Play, ShieldCheck,
  Sparkles, Users2, Wrench, type LucideIcon,
} from "lucide-react";
import "./EnterpriseDemos.css";

type StoryStep = {
  name: string;
  path: string;
  icon: LucideIcon;
  event: string;
  status: string;
  record: string;
  fields: [string, string][];
  payload: string;
  target: string;
  targetPath: string;
  action: string;
  companion: string;
  trail: [string, string, string];
};

const storySteps: StoryStep[] = [
  {
    name: "Maintenance", path: "/gigaops/maintenance", icon: Wrench,
    event: "Urgent repair opened", status: "Needs a part", record: "WO-2048",
    fields: [["Asset", "P-1082"], ["Site", "12"], ["Priority", "Urgent"]],
    payload: "Asset P-1082 · urgent repair · part BRG-6205",
    target: "Inventory", targetPath: "/gigaops/inventory",
    action: "Check whether the required part is available before assigning the repair.",
    companion: "The repair needs part BRG-6205. Check the stock position before committing a technician window.",
    trail: ["Work order created", "Required part linked", "Inventory receives context"],
  },
  {
    name: "Inventory", path: "/gigaops/inventory", icon: Boxes,
    event: "Part shortage identified", status: "Stock unavailable", record: "BRG-6205",
    fields: [["On hand", "0 at Site 12"], ["Needed for", "WO-2048"], ["Stock state", "Shortage"]],
    payload: "Part BRG-6205 · zero on hand · work order WO-2048",
    target: "Procurement", targetPath: "/gigaops/procurement",
    action: "Route the shortage with the work order and its need-by context.",
    companion: "There is no stock at Site 12. A purchase request can carry the part and work order context to Procurement.",
    trail: ["Stock checked", "Shortage recorded", "Procurement receives need"],
  },
  {
    name: "Procurement", path: "/gigaops/procurement", icon: ClipboardCheck,
    event: "Purchase request routed", status: "Approval required", record: "PR-318",
    fields: [["Part", "BRG-6205"], ["For", "WO-2048"], ["Decision", "Pending review"]],
    payload: "Request PR-318 · approval state · expected arrival pending",
    target: "Workforce", targetPath: "/gigaops/workforce",
    action: "A reviewer decides whether the request can move to the supplier.",
    companion: "PR-318 is awaiting an authorized decision. The crew should see that arrival is unconfirmed until approval and ordering finish.",
    trail: ["Request assembled", "Approval requested", "Crew sees the dependency"],
  },
  {
    name: "Workforce", path: "/gigaops/workforce", icon: Users2,
    event: "Crew window aligned", status: "Schedule planned", record: "Crew A",
    fields: [["Work order", "WO-2048"], ["Site", "12"], ["Window", "14:00 planned"]],
    payload: "Crew A · planned window · material dependency",
    target: "Finance", targetPath: "/gigaops/finance",
    action: "Dispatch with the asset history, procedure and part state in view.",
    companion: "Crew A has a planned window. Confirm the part receipt before the work is dispatched.",
    trail: ["Crew selected", "Part state checked", "Completion reaches Finance"],
  },
  {
    name: "Finance", path: "/gigaops/finance", icon: BarChart3,
    event: "Cost and delay reviewed", status: "Ready to measure", record: "WO-2048",
    fields: [["Material", "Linked to work"], ["Labor", "Captured"], ["Delay", "Part wait visible"]],
    payload: "Material cost · labor time · part wait · work receipt",
    target: "Analytics", targetPath: "/gigaops/analytics",
    action: "Review actual repair cost and the time lost waiting for the part.",
    companion: "The work trail now connects material, labor and delay. Compare the result with your baseline before choosing a follow-up.",
    trail: ["Costs attached", "Wait time visible", "Leaders see the bottleneck"],
  },
];

function useVisibleDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(() => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible, playing, setPlaying };
}

export function GigaOpsHeroDemo() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const { ref, visible, playing, setPlaying } = useVisibleDemo();
  useEffect(() => {
    if (!playing || !visible) return;
    const timer = window.setTimeout(() => {
      if (phase < 2) setPhase(phase + 1);
      else { setPhase(0); setIndex((current) => (current + 1) % storySteps.length); }
    }, phase === 2 ? 1550 : 1150);
    return () => window.clearTimeout(timer);
  }, [index, phase, playing, visible]);
  const active = storySteps[index];
  const choose = (next: number) => { setPlaying(false); setIndex(next); setPhase(0); };
  const next = () => choose((index + 1) % storySteps.length);

  return <div className="gd-demo" id="connected-work" ref={ref} aria-label="Illustrative GigaOps connected work walkthrough">
    <div className="gd-toolbar">
      <div className="gd-toolbar-title"><span className="gd-mark">G</span><strong>GigaOps</strong><span className="gd-toolbar-divider" /> <span>Connected work / Site 12</span></div>
      <div className="gd-toolbar-actions"><span className="gd-example-label">INTERACTIVE EXAMPLE · SAMPLE DATA</span><button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause GigaOps walkthrough" : "Play GigaOps walkthrough"}>{playing ? <Pause size={13} /> : <Play size={13} />}{playing ? "Pause" : "Play"}</button></div>
    </div>
    <div className="gd-stepbar" role="group" aria-label="Explore the connected modules">
      {storySteps.map((step, stepIndex) => <button type="button" key={step.name} className={`gd-stepbar-item ${index === stepIndex ? "is-active" : ""} ${stepIndex < index ? "is-passed" : ""}`} onClick={() => choose(stepIndex)} aria-pressed={index === stepIndex}>
        <span className="gd-stepbar-number">0{stepIndex + 1}</span><step.icon size={16} /><span>{step.name}</span>{stepIndex < storySteps.length - 1 && <ChevronRight size={13} className="gd-stepbar-arrow" />}
      </button>)}
    </div>
    <div className="gd-app">
      <aside className="gd-sidebar" aria-label="GigaOps workspace areas">
        <small>WORKSPACE</small>
        <div className="gd-sidebar-case"><span className="gd-sidebar-case-icon"><Wrench size={17} /></span><span><strong>Repair at Site 12</strong><small>WO-2048 · In progress</small></span></div>
        <small>CONNECTED MODULES</small>
        {storySteps.map((step, stepIndex) => <button type="button" key={step.name} className={index === stepIndex ? "gd-sidebar-link is-active" : "gd-sidebar-link"} onClick={() => choose(stepIndex)}><step.icon size={16} /><span>{step.name}</span>{index === stepIndex && <span className="gd-sidebar-dot" />}</button>)}
        <div className="gd-sidebar-foot"><ShieldCheck size={16} /><span>Role-scoped example</span></div>
      </aside>
      <div className="gd-main" aria-live={playing ? "off" : "polite"}>
        <div className="gd-breadcrumb">WORK / <span>{active.name.toUpperCase()}</span><span className="gd-breadcrumb-record">{active.record}</span></div>
        <div className="gd-case-heading"><div><span>SHARED WORK ITEM</span><h3>{active.event}</h3></div><span className="gd-status"><i />{active.status}</span></div>
        <p className="gd-case-copy">{active.action}</p>
        <div className="gd-record-fields">{active.fields.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
        <div className="gd-handoff"><div className="gd-handoff-top"><span>THE CONTEXT MOVING NOW</span><span>{phase === 0 ? "01 / CAPTURED" : phase === 1 ? "02 / GOVERNED" : "03 / DELIVERED"}</span></div><strong>{active.payload}</strong><div className="gd-handoff-track"><span className={phase === 0 ? "is-active" : "is-done"}>{active.name}</span><i className={phase >= 1 ? "is-active" : ""} /><span className={phase === 1 ? "is-active" : phase === 2 ? "is-done" : ""}><Layers3 size={13} /> SaaS core</span><i className={phase === 2 ? "is-active" : ""} /><span className={phase === 2 ? "is-active" : ""}>{active.target}</span></div><small>Tenant scope · permissions · workflow rules · audit trail</small></div>
        <div className="gd-main-bottom"><Link href={active.path}>Explore {active.name} <ArrowRight size={15} /></Link><button type="button" onClick={next}>Next handoff <ArrowRight size={15} /></button></div>
      </div>
      <aside className="gd-inspector" aria-live={playing ? "off" : "polite"}>
        <div className="gd-inspector-head"><Sparkles size={16} /><strong>GigaOps Companion</strong><span>PLANNED</span></div>
        <div className="gd-inspector-content"><small>CASE CONTEXT · {active.record}</small><h4>What changed?</h4><p>{active.companion}</p><div className="gd-suggested"><span>PROPOSED NEXT STEP</span><strong>{active.action}</strong><small>People approve governed actions.</small></div></div>
        <div className="gd-trail"><span>WORK TRAIL</span>{active.trail.map((entry, entryIndex) => <div key={entry} className={entryIndex <= phase ? "is-current" : ""}><span>{entryIndex < phase ? <Check size={12} /> : String(entryIndex + 1)}</span><small>{entry}</small></div>)}</div>
        <Link href={active.targetPath} className="gd-inspector-link">Open {active.target} <ArrowRight size={14} /></Link>
      </aside>
    </div>
    <div className="gd-demo-foot"><span><i /> {playing ? "AUTOMATIC WALKTHROUGH" : "PAUSED · SELECT A MODULE"}</span><span>One work trail, from request to result</span><div className="gd-progress"><span style={{ width: `${((index * 3 + phase + 1) / (storySteps.length * 3)) * 100}%` }} /></div></div>
  </div>;
}

type SpeedStage = {
  label: string;
  title: string;
  status: string;
  intro: string;
  points: [string, string][];
  next: string;
};

const speedStages: SpeedStage[] = [
  { label: "Define route", title: "The route becomes a reviewable record.", status: "Route drafted", intro: "Record the operations, materials and conditions behind the proposed synthesis route.", points: [["Route", "PS-017"], ["Operations", "Charge → React → Work up → Isolate"], ["Evidence", "Conditions and material records linked"]], next: "Screen the route" },
  { label: "Screen", title: "Bring open safety questions into view.", status: "Findings open", intro: "Review thermal, energetic and interaction signals operation by operation. Missing evidence remains visible.", points: [["Thermal behavior", "Data review required"], ["Material interaction", "Open question"], ["Evidence", "Source and assumptions retained"]], next: "Assign controls" },
  { label: "Control", title: "Put an owner on every serious finding.", status: "Reviewer action", intro: "Assign a control, record the reason and keep the unresolved questions visible at the gate.", points: [["Thermal behavior", "Control proposed"], ["Material interaction", "Reviewer follow-up"], ["Decision", "Human review required"]], next: "Prepare dossier" },
  { label: "Prepare dossier", title: "Take the decision trail to the gate.", status: "Review packet", intro: "Bring the route, screening results, controls and remaining gaps into one review packet.", points: [["Route record", "Included"], ["Screening findings", "Included with status"], ["Open questions", "Listed for decision"]], next: "Review from the start" },
];

const routeOperations = ["Charge", "React", "Work up", "Isolate"];

export function SpeedExperience() {
  const [index, setIndex] = useState(0);
  const { ref, visible, playing, setPlaying } = useVisibleDemo();
  useEffect(() => {
    if (!playing || !visible) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % speedStages.length), 4200);
    return () => window.clearInterval(timer);
  }, [playing, visible]);
  const active = speedStages[index];
  const choose = (next: number) => { setPlaying(false); setIndex(next); };
  return <div className="sd-demo" ref={ref} aria-label="Illustrative SPEED route safety walkthrough">
    <div className="sd-toolbar"><div><span className="sd-mark"><FlaskConical size={18} /></span><strong>SPEED</strong><span className="sd-toolbar-divider" /><span>Route PS-017 / Process safety</span></div><div><span>INTERACTIVE EXAMPLE · SAMPLE DATA</span><button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause SPEED walkthrough" : "Play SPEED walkthrough"}>{playing ? <Pause size={13} /> : <Play size={13} />}{playing ? "Pause" : "Play"}</button></div></div>
    <div className="sd-stage-tabs" role="group" aria-label="Explore SPEED review stages">{speedStages.map((stage, stageIndex) => <button type="button" key={stage.label} onClick={() => choose(stageIndex)} className={index === stageIndex ? "is-active" : stageIndex < index ? "is-passed" : ""} aria-pressed={index === stageIndex}><span>0{stageIndex + 1}</span><strong>{stage.label}</strong>{stageIndex < index && <Check size={15} />}</button>)}</div>
    <div className="sd-body">
      <div className="sd-route-pane"><div className="sd-pane-title"><span>ROUTE WORKBENCH</span><span>PS-017 · EXAMPLE ROUTE</span></div><div className="sd-route-heading"><div><small>PROPOSED SYNTHESIS ROUTE</small><h3>Make each step inspectable.</h3></div><span className="sd-route-state"><i />{active.status}</span></div><div className="sd-route-map">{routeOperations.map((operation, operationIndex) => <div className={`sd-route-operation ${operationIndex === Math.min(index, routeOperations.length - 1) ? "is-focused" : ""}`} key={operation}><span>0{operationIndex + 1} / OPERATION</span><FlaskConical size={21} /><strong>{operation}</strong><small>{operationIndex < index ? "In review packet" : operationIndex === index ? "Selected for review" : "Route context"}</small></div>)}</div><div className="sd-findings"><div><span>SCREENING RECORD</span><small>Each question stays attached to its route step</small></div><div className="sd-finding-row"><span><i className="sd-finding-dot" /> Thermal behavior</span><strong>{index < 1 ? "Awaiting screen" : index === 1 ? "Needs review" : "Control proposed"}</strong></div><div className="sd-finding-row"><span><i className="sd-finding-dot is-muted" /> Material interaction</span><strong>{index < 1 ? "Awaiting screen" : index === 3 ? "Listed in dossier" : "Open question"}</strong></div></div><div className="sd-route-footer"><ShieldCheck size={16} /><span>Finding source, assumptions and reviewer decision stay with the route.</span></div></div>
      <aside className="sd-review-pane" aria-live={playing ? "off" : "polite"}><div className="sd-review-top"><span>GATE REVIEW / 0{index + 1}</span><FileCheck2 size={20} /></div><h3>{active.title}</h3><p>{active.intro}</p><div className="sd-review-details">{active.points.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="sd-review-decision"><span>{index === 3 ? "DOSSIER PREVIEW" : "NEXT REVIEW ACTION"}</span><strong>{index === 3 ? "Route, findings, controls and gaps together" : active.next}</strong><small>{index === 2 ? "A person must confirm the control and gate decision." : "Illustrative product flow; no live safety assessment is being run."}</small></div><button type="button" onClick={() => choose((index + 1) % speedStages.length)}>{active.next} <ArrowRight size={16} /></button></aside>
    </div>
    <div className="sd-demo-foot"><span><i /> {playing ? "AUTOMATIC ROUTE WALKTHROUGH" : "PAUSED · SELECT A STAGE"}</span><span>Define → Screen → Control → Dossier</span><div><span style={{ width: `${((index + 1) / speedStages.length) * 100}%` }} /></div></div>
  </div>;
}
