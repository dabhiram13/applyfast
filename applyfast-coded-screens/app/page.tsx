import Link from "next/link";
import { ApplyfastLogo } from "@/components/Logo";
import { Badge, Card, CompanyLogo, Score } from "@/components/UI";
import { matches } from "@/lib/mock";

export default function LandingPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <header className="nav">
            <ApplyfastLogo />
            <nav className="nav-links">
              <Link href="/analyzer">Product</Link>
              <Link href="/sponsors">Sponsors</Link>
              <Link href="/jobs">How it works</Link>
              <Link href="/settings">Pricing</Link>
              <Link href="/dashboard">Sign in</Link>
              <Link className="btn btn-primary" href="/onboarding">Start free</Link>
            </nav>
          </header>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">✦ Built for international candidates</div>
              <h1 className="h1">Stop applying blind. <span className="green-text">Know where to apply.</span></h1>
              <p className="p white" style={{ maxWidth: 650, fontSize: 18 }}>Applyfast analyzes sponsor confidence, visa fit, profile match, and company signals before you spend hours tailoring another application.</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/onboarding">Start free — 2 min →</Link>
                <Link className="btn btn-ghost" href="/analyzer">Try Job Analyzer ▷</Link>
              </div>
              <div className="pill-row">
                <Badge tone="green">Visa-aware</Badge><Badge tone="green">Sponsor confidence</Badge><Badge>Human-reviewed applications</Badge>
              </div>
            </div>
            <HeroPreview />
          </div>
          <div className="trust-row">
            <span className="muted">Built for students and graduates from</span><span>MIT</span><span>Stanford</span><span>Berkeley</span><span>NYU</span><span>CMU</span><span className="muted">and 500+ more</span>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="grid three">
            <Feature icon="①" title="Complete your visa profile" copy="Tell us your visa type, work authorization, timeline, roles, and target locations." />
            <Feature icon="②" title="Analyze sponsor confidence" copy="Every job gets sponsor evidence, visa compatibility, profile fit, and a clear risk level." />
            <Feature icon="③" title="Apply only where it makes sense" copy="Choose Apply Now, Tailor First, Risky, or Skip. No more guessing." />
          </div>
          <div className="product-band">
            <div className="mini-screen">
              <div className="fake-sidebar"><ApplyfastLogo /><div>Dashboard</div><div>Job Analyzer</div><div>Job Matches</div><div>Sponsor Explorer</div><div>Tracker</div></div>
              <div>
                <div className="list-title"><h3 className="h3">Today’s best visa-fit matches</h3><span className="muted">View all →</span></div>
                <div className="simple-list">
                  {matches.slice(0,3).map((job) => <div className="simple-row" key={job.company}><CompanyLogo color={job.color}>{job.logo}</CompanyLogo><div><strong>{job.role}</strong><br/><span className="muted">{job.company} · {job.location}</span><br/><Badge tone="green">Sponsor Friendly</Badge></div><Score value={job.score}/></div>)}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", alignContent: "center", gap: 18 }}>
              <h2 className="h2">The fastest way to stop wasting applications.</h2>
              <p className="p white">Applyfast is not a generic job board. It is a visa-aware decision engine: sponsor data, visa risk, role fit, resume guidance, and tracking in one focused workspace.</p>
              <Link className="btn btn-primary" href="/analyzer">Analyze a job now →</Link>
            </div>
          </div>
          <div className="grid three home-lower">
            <Card className="card-pad"><h3>AI Résumé Tailor</h3><p className="p">Tailor only after a job passes sponsor and fit checks. See diffs before exporting.</p></Card>
            <Card className="card-pad"><h3>Sponsor Explorer</h3><p className="p">Find companies with strong sponsorship history, recent filings, and realistic response signals.</p></Card>
            <Card className="card-pad"><h3>Application Tracker</h3><p className="p">Track applications, interviews, reminders, and next actions in one clean command center.</p></Card>
          </div>
          <div className="cta-footer">
            <div><h2 className="h2">Your next opportunity should be worth your time.</h2><p className="p white">Start with one job. Know if it deserves your application.</p></div>
            <div style={{ display:"flex", gap: 12, justifyContent:"flex-end" }}><Link className="btn btn-primary" href="/onboarding">Start free →</Link><Link className="btn btn-ghost" href="/sponsors">Explore sponsors</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return <Card className="feature-card"><div className="feature-icon">{icon}</div><h3 className="h3" style={{ marginTop: 18 }}>{title}</h3><p className="p" style={{ marginTop: 10 }}>{copy}</p></Card>;
}

function HeroPreview() {
  return <div className="hero-preview"><div className="preview-head"><strong>Good evening, Mei 👋</strong><Badge tone="green">96% visa-fit avg</Badge></div><div className="stat-grid"><div className="stat"><span className="num">24</span><br/><span className="p white">Analyzed</span></div><div className="stat"><span className="num">7</span><br/><span className="p white">Sponsor-safe</span></div><div className="stat"><span className="num">4</span><br/><span className="p white">Apply now</span></div><div className="stat"><span className="num">2</span><br/><span className="p white">Risky</span></div></div>{matches.slice(0,3).map(job => <div className="job-row" key={job.company}><CompanyLogo color={job.color}>{job.logo}</CompanyLogo><div><strong>{job.role}</strong><br/><span className="p white">{job.company} · {job.location}</span></div><Badge tone="green">{job.score} match</Badge></div>)}</div>
}
