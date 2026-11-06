import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

const stroke = "#0f62fe";
const muted = "#78a9ff";
const fill = "#d0e2ff";
const wash = "#edf5ff";
const ink = "#161616";

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className="es-scene" viewBox="0 0 640 400" role="img" aria-label={label}>
      <rect width="640" height="400" fill={wash} />
      {children}
    </svg>
  );
}

export function SceneConnectedWork() {
  return (
    <Frame label="Connected work across people, assets and decisions">
      <circle cx="320" cy="196" r="46" fill={fill} />
      <circle cx="320" cy="196" r="46" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M320 172v48M296 196h48" stroke={stroke} strokeWidth="2" />
      <line x1="320" y1="150" x2="320" y2="86" stroke={muted} strokeWidth="1.5" />
      <line x1="276" y1="172" x2="168" y2="108" stroke={muted} strokeWidth="1.5" />
      <line x1="364" y1="172" x2="472" y2="108" stroke={muted} strokeWidth="1.5" />
      <line x1="276" y1="220" x2="168" y2="292" stroke={muted} strokeWidth="1.5" />
      <line x1="364" y1="220" x2="472" y2="292" stroke={muted} strokeWidth="1.5" />
      <rect x="292" y="42" width="56" height="44" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M310 56h20M310 66h12M310 76h16" stroke={stroke} strokeWidth="2" />
      <rect x="120" y="72" width="96" height="72" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M148 118v-20l16-10 16 10v20h-32zM164 118v12" stroke={stroke} strokeWidth="2" fill="none" />
      <rect x="424" y="72" width="96" height="72" fill="#fff" stroke={stroke} strokeWidth="2" />
      <circle cx="456" cy="104" r="10" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M456 94v20M448 118c0 8 16 8 16 0M488 96h16v24h-16z" stroke={stroke} strokeWidth="2" fill="none" />
      <rect x="120" y="256" width="96" height="72" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M144 280h48M144 294h32M156 268h24v10h-24z" stroke={stroke} strokeWidth="2" fill="none" />
      <rect x="424" y="256" width="96" height="72" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M448 304V276h20l12 12v16zM480 288h16M448 292h20" stroke={stroke} strokeWidth="2" fill="none" />
    </Frame>
  );
}

export function ScenePlatform() {
  return (
    <Frame label="Platform layers from connect to govern">
      <rect x="88" y="64" width="464" height="64" fill="#fff" stroke={stroke} strokeWidth="2" />
      <rect x="88" y="148" width="464" height="64" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="88" y="232" width="464" height="64" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M120 96h80M120 180h120M120 264h96" stroke={stroke} strokeWidth="2" />
      <circle cx="500" cy="96" r="10" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="500" cy="180" r="10" fill={stroke} />
      <circle cx="500" cy="264" r="10" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M320 128v20M320 212v20" stroke={muted} strokeWidth="2" />
    </Frame>
  );
}

export function SceneModule({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="es-scene es-scene-module" aria-hidden="true">
      <svg viewBox="0 0 640 400">
        <rect width="640" height="400" fill={wash} />
        <rect x="170" y="78" width="300" height="244" fill="#fff" stroke={stroke} strokeWidth="2" />
        <path d="M206 126h228M206 158h160M206 190h188M206 222h120" stroke={muted} strokeWidth="2" />
        <circle cx="470" cy="78" r="36" fill={fill} stroke={stroke} strokeWidth="2" />
      </svg>
      <span className="es-scene-module-icon"><Icon size={28} strokeWidth={1.5} color={stroke} /></span>
    </div>
  );
}

export function SceneIndustry() {
  return (
    <Frame label="Industry operations across plant, field and facilities">
      <path d="M96 280h448" stroke={muted} strokeWidth="2" />
      <path d="M140 280V168h72V280" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M212 168h88l24 48H212z" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="248" y="216" width="120" height="64" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M268 248h80M400 280V132h56v148" fill="#fff" stroke={stroke} strokeWidth="2" />
      <circle cx="500" cy="176" r="36" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M500 140v72M464 176h72" stroke={stroke} strokeWidth="2" />
      <rect x="156" y="188" width="20" height="28" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="180" y="204" width="16" height="12" fill="none" stroke={stroke} strokeWidth="2" />
    </Frame>
  );
}

export function SceneMobile() {
  return (
    <Frame label="Field work on a mobile device">
      <rect x="248" y="36" width="144" height="328" rx="18" fill="#fff" stroke={stroke} strokeWidth="2" />
      <rect x="268" y="68" width="104" height="16" fill={fill} />
      <rect x="268" y="100" width="104" height="72" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M284 124h72M284 140h48" stroke={stroke} strokeWidth="2" />
      <rect x="268" y="188" width="104" height="48" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="268" y="252" width="104" height="48" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="320" cy="336" r="8" fill="none" stroke={stroke} strokeWidth="2" />
    </Frame>
  );
}

export function SceneCompany() {
  return (
    <Frame label="Teams working across connected locations">
      <rect x="80" y="120" width="160" height="160" fill="#fff" stroke={stroke} strokeWidth="2" />
      <rect x="240" y="80" width="160" height="200" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="400" y="140" width="160" height="140" fill="#fff" stroke={stroke} strokeWidth="2" />
      <path d="M104 160h112M104 184h80M264 112h112M264 136h72M424 172h112M424 196h88" stroke={stroke} strokeWidth="2" />
      <circle cx="320" cy="320" r="6" fill={ink} />
      <path d="M160 280v40M320 280v34M480 280v40" stroke={muted} strokeWidth="2" />
    </Frame>
  );
}
