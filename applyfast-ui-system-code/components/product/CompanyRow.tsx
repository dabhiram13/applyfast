import { ProgressRing, Badge } from '@/components/ui/Core';
import { cn } from '@/lib/utils';

export function CompanyRow({ company, selected=false }: { company: any; selected?: boolean }) {
  return <div className={cn('job-card', selected && 'selected')} style={{gridTemplateColumns:'58px 1fr 86px 110px 110px 40px'}}>
    <div className="company-logo">{company.logo}</div>
    <div><h3 className="h3" style={{margin:'0 0 3px'}}>{company.company} <span style={{color:'#22C55E'}}>●</span></h3><div className="muted" style={{fontSize:14}}>{company.loc} · {company.size}</div></div>
    <div><b>{company.score}%</b><div className="caption">Excellent</div></div>
    <div><b>{company.approvals}</b><div className="caption">H-1B approvals</div></div>
    <div><b>{company.reply}</b><div className="caption">Avg reply</div></div>
    <Badge tone="green">★</Badge>
  </div>
}
