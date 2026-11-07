import { Fragment, useEffect, useState } from "react";
import {
  Activity, Ban, Boxes, Check, ClipboardCheck, FileCheck2, FileSignature, FlaskConical,
  MapPin, ShieldCheck, Truck, Users2, Wrench, type LucideIcon,
} from "lucide-react";

type FlowStep = { icon: LucideIcon; label: string };
type Workflow = { id: string; name: string; copy: string; steps: FlowStep[] };
type Phase = "ring" | "tick" | "travel";

const workflows: Workflow[] = [
  {
    id: "maintain",
    name: "Maintain",
    copy: "Work with an owner, a person and a spare — then evidence.",
    steps: [
      { icon: ClipboardCheck, label: "Request" },
      { icon: Wrench, label: "Work order" },
      { icon: Users2, label: "Book person" },
      { icon: MapPin, label: "Punch on site" },
      { icon: Boxes, label: "Issue spare" },
      { icon: FileCheck2, label: "Sign-off" },
    ],
  },
  {
    id: "labour",
    name: "Bill labour",
    copy: "Hours on a named person, approved, then pay-ready.",
    steps: [
      { icon: Users2, label: "Book" },
      { icon: MapPin, label: "Punch" },
      { icon: FileCheck2, label: "Approve week" },
      { icon: FileSignature, label: "Pay-ready export" },
    ],
  },
  {
    id: "stock",
    name: "Stock promise",
    copy: "Promise only what ATP can keep. Oversell is a refuse.",
    steps: [
      { icon: Boxes, label: "Promise" },
      { icon: ShieldCheck, label: "Reserve ATP" },
      { icon: Ban, label: "Refuse oversell" },
      { icon: Truck, label: "Issue / receive" },
    ],
  },
  {
    id: "speed",
    name: "SPEED",
    copy: "Screen the route at the desk before chemistry is politically locked.",
    steps: [
      { icon: FlaskConical, label: "Define route" },
      { icon: Activity, label: "Screen" },
      { icon: ClipboardCheck, label: "Own findings" },
      { icon: FileSignature, label: "Gate dossier" },
    ],
  },
];

const RING_MS = 900;
const TICK_MS = 450;
const TRAVEL_MS = 900;

export function WorkflowCarousel() {
  const [flowIndex, setFlowIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("ring");
  const [paused, setPaused] = useState(false);
  const flow = workflows[flowIndex];
  const last = flow.steps.length - 1;

  useEffect(() => {
    if (paused) return;
    const timers: number[] = [];

    if (phase === "ring") {
      timers.push(window.setTimeout(() => setPhase("tick"), RING_MS));
    } else if (phase === "tick") {
      timers.push(window.setTimeout(() => {
        setPhase("travel");
        if (stepIndex < last) setTokenIndex(stepIndex + 1);
      }, TICK_MS));
    } else if (stepIndex >= last) {
      timers.push(window.setTimeout(() => {
        setFlowIndex((index) => (index + 1) % workflows.length);
        setStepIndex(0);
        setTokenIndex(0);
        setPhase("ring");
      }, TRAVEL_MS));
    } else {
      timers.push(window.setTimeout(() => {
        setStepIndex((index) => index + 1);
        setPhase("ring");
      }, TRAVEL_MS));
    }

    return () => { timers.forEach((id) => window.clearTimeout(id)); };
  }, [phase, stepIndex, last, paused, flowIndex]);

  function choose(index: number) {
    setFlowIndex(index);
    setStepIndex(0);
    setTokenIndex(0);
    setPhase("ring");
  }

  return (
    <div
      className="es-flow-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="GigaOps operating workflows"
    >
      <div className="es-flow-head">
        <strong>{flow.name}</strong>
        <p>{flow.copy}</p>
      </div>
      <div
        className="es-flow-track"
        aria-hidden="true"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {flow.steps.map((step, index) => {
          const Icon = step.icon;
          const done = index < stepIndex;
          const ticked = done || (index === stepIndex && (phase === "tick" || phase === "travel"));
          const circling = index === stepIndex && phase === "ring";
          const active = index === stepIndex && phase !== "travel";
          const leaving = index === stepIndex && phase === "travel";
          const state = [
            done && "is-done",
            circling && "is-circling",
            ticked && index === stepIndex && "is-ticked",
            active && "is-active",
            leaving && "is-leaving",
          ].filter(Boolean).join(" ");
          return (
            <Fragment key={`${flow.id}-${step.label}`}>
              {index > 0 && (
                <div className={["es-flow-link", tokenIndex >= index && "is-on", phase === "travel" && tokenIndex === index && "is-live"].filter(Boolean).join(" ")}>
                  <span />
                </div>
              )}
              <div className={`es-flow-step ${state}`}>
                <span className="es-flow-disc">
                  <svg className="es-flow-ring" viewBox="0 0 52 52">
                    <circle className="es-flow-ring-track" cx="26" cy="26" r="24" pathLength="100" />
                    <circle className="es-flow-ring-draw" cx="26" cy="26" r="24" pathLength="100" />
                  </svg>
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <span className="es-flow-tick-slot">
                  {ticked && <Check className="es-flow-tick" size={16} strokeWidth={2} />}
                </span>
                <small>{step.label}</small>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="es-flow-dots" role="tablist" aria-label="Workflows">
        {workflows.map((item, index) => (
          <button
            type="button"
            key={item.id}
            role="tab"
            aria-selected={index === flowIndex}
            className={index === flowIndex ? "is-active" : undefined}
            onClick={() => choose(index)}
          >
            <span className="es-sr-only">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
