import { ApplyfastLogo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Core';
import Link from 'next/link';
import type { ReactNode } from 'react';

const main = [
  ['⌂','Dashboard','/dashboard'],['▣','Job Matches','/jobs'],['◎','Applications','/tracker'],['●','Tracker','/tracker'],['◌','Inbox','/tracker'],['▤','Apply Queue','/resume-tailor'],['◎','Sponsors','/sponsors'],['✎','Resume Tailor','/resume-tailor'],['⚙','Settings','/settings']
];
const tools = [['✦','Job Analyzer','/analyzer'],['🛂','Visa Tracker','/onboarding'],['▥','Salary Insights','/sponsors'],['◇','Company Radar','/sponsors']];

export function AppShell({ children, active='Dashboard' }: { children: ReactNode; active?: string }) {
  return <div className="app-shell"><aside className="sidebar"><ApplyfastLogo />
    <nav className="sidebar-nav"><div className="nav-section">Main</div>{main.map(([i,l,h])=><Link key={l} href={h} className={`nav-item ${active===l?'active':''}`}>{active===l?<span className="nav-dot"/>:<span>{i}</span>}<span>{l}</span>{l==='Inbox'&&<span className="badge green" style={{marginLeft:'auto'}}>12</span>}</Link>)}<div className="nav-section">Tools</div>{tools.map(([i,l,h])=><Link key={l} href={h} className={`nav-item ${active===l?'active':''}`}>{active===l?<span className="nav-dot"/>:<span>{i}</span>}<span>{l}</span>{l==='Job Analyzer'&&<span className="badge green" style={{marginLeft:'auto'}}>Core</span>}</Link>)}</nav>
    <div style={{marginTop:'auto'}} className="stack"><div className="sidebar-card"><h3 style={{margin:'0 0 8px'}}>Analyze any job in seconds</h3><p className="caption" style={{color:'#d6dae0'}}>Paste a job URL to get sponsor signals and personalized recommendations.</p><Button>Try it now →</Button></div><div className="surface" style={{background:'rgba(255,255,255,.06)',borderColor:'rgba(255,255,255,.12)',padding:14,color:'white'}}><b>Mei Chen</b><div className="caption">Premium Plan</div></div></div>
  </aside><main className="app-main">{children}</main></div>
}

export function TopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div className="topbar"><div><h1 className="h1" style={{margin:0}}>{title}</h1>{subtitle&&<p className="muted" style={{margin:'6px 0 0'}}>{subtitle}</p>}</div><div className="row"><input className="search" placeholder="Search jobs, companies, or sponsors..."/><Button variant="secondary">Share</Button><Button variant="dark">+ Add</Button></div></div>
}
