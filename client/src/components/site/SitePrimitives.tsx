import type { ReactNode } from "react";
import { ArrowUpRight, Check, Circle } from "lucide-react";
import type { Tone } from "@/data/content";

export function SectionHeading({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function Window({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={`ui-window ${className}`}>
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>{label}</span>
        <span className="window-signal">BIDX / DEMO</span>
      </div>
      {children}
    </div>
  );
}

export function TinyTag({ children, tone = "blue" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`tiny-tag tiny-tag-${tone}`}>{children}</span>;
}

export function CheckRow({ children, done = false }: { children: ReactNode; done?: boolean }) {
  return <div className={`check-row ${done ? "check-row-done" : ""}`}><span>{done ? <Check size={13} /> : <Circle size={11} />}</span>{children}</div>;
}

export function ArrowLink({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={15} /></a>;
}
