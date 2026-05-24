import type { CSSProperties, ReactNode } from "react";

export function Badge({ children, tone = "" }: { children: ReactNode; tone?: "green" | "blue" | "orange" | "red" | "purple" | "" }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

export function Button({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "dark" | "ghost" | "outline" | "soft" }) {
  const classes = { primary: "btn-primary", dark: "btn-dark", ghost: "btn-ghost", outline: "btn-outline", soft: "btn-soft" }[variant];
  return <button className={`btn ${classes}`}>{children}</button>;
}

export function Card({ children, dark = false, className = "", style }: { children: ReactNode; dark?: boolean; className?: string; style?: CSSProperties }) {
  return <section className={`${dark ? "card card-dark" : "card"} ${className}`} style={style}>{children}</section>;
}

export function Metric({ label, value, change, icon }: { label: string; value: string; change?: string; icon?: string }) {
  return (
    <div className="metric">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="metric-label">{label}</span>
        {icon && <span className="activity-dot">{icon}</span>}
      </div>
      <div className="metric-value">{value}</div>
      {change && <div className="metric-up">▲ {change}</div>}
    </div>
  );
}

export function CompanyLogo({ children, color = "linear-gradient(135deg,#6857ff,#8a72ff)" }: { children: ReactNode; color?: string }) {
  return <div className="company-logo" style={{ background: color }}>{children}</div>;
}

export function Score({ value }: { value: string }) {
  return <div className="score-ring">{value}</div>;
}
