import { Badge, ProgressRing } from '@/components/ui/Core';
import { cn } from '@/lib/utils';

export function JobCard({ job, selected=false }: { job: any; selected?: boolean }) {
  return <div className={cn('job-card', selected && 'selected')}>
    <div className="company-logo">{job.logo}</div>
    <div>
      <h3 className="h3" style={{margin:'0 0 3px'}}>{job.role}</h3>
      <div className="muted" style={{fontSize:14}}>{job.company} · {job.loc}</div>
      <div className="row" style={{justifyContent:'flex-start', marginTop:9}}><Badge tone="green">{job.visa}</Badge><Badge>{job.salary}</Badge><Badge tone={job.risk==='Low'?'green':'orange'}>{job.risk} risk</Badge></div>
    </div>
    <ProgressRing value={job.score}/>
  </div>
}
