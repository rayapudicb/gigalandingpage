import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

const stroke = "#0f62fe";
const muted = "#78a9ff";
const fill = "#d0e2ff";
const wash = "#edf5ff";
const ink = "#161616";

function Frame({ children, label, className }: { children: ReactNode; label: string; className?: string }) {
  return (
    <svg className={["es-scene", className].filter(Boolean).join(" ")} viewBox="0 0 640 400" role="img" aria-label={label}>
      <rect width="640" height="400" fill={wash} />
      {children}
    </svg>
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
