import Link from "next/link";
import { ApplyfastLogo } from "./Logo";

const nav = [
  ["Dashboard", "/dashboard", "⌂"],
  ["Job Analyzer", "/analyzer", "✦"],
  ["Job Matches", "/jobs", "▣"],
  ["Sponsor Explorer", "/sponsors", "◎"],
  ["Resume Tailor", "/resume-tailor", "✎"],
  ["Tracker", "/tracker", "●"],
  ["Settings", "/settings", "⚙"]
];

export function AppShell({ children, active }: { children: React.ReactNode; active: string }) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <Link href="/" aria-label="Applyfast home"><ApplyfastLogo /></Link>
        <nav className="side-nav">
          {nav.map(([label, href, icon]) => (
            <Link className={`side-link ${active === label ? "active" : ""}`} href={href} key={href}>
              <span>{active === label ? "" : icon}</span>{label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-card">
          <strong>Visa-aware job decisions</strong>
          <p className="p white" style={{ marginTop: 8 }}>Analyze sponsor confidence, visa fit, profile match, and the next best action before you waste time.</p>
          <div style={{ marginTop: 16 }}><Link className="btn btn-primary" href="/analyzer">Analyze a job →</Link></div>
        </div>
        <div className="user-pill">
          <div className="user-avatar" />
          <div><strong>Mei Chen</strong><br/><span style={{ color: "rgba(255,255,255,.58)", fontSize: 12 }}>Premium plan</span></div>
        </div>
      </aside>
      <main className="app-main">{children}</main>
    </div>
  );
}
