import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Button({ children, variant='primary', className }: { children: ReactNode; variant?: 'primary'|'dark'|'secondary'|'ghost'; className?: string }) {
  const map = { primary: 'primary', dark: 'darkbtn', secondary: 'secondary', ghost: 'ghost' } as const;
  return <button className={cn('btn', map[variant], className)}>{children}</button>;
}
export function Card({ children, dark=false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <div className={cn('card', dark && 'dark-card', className)}>{children}</div>;
}
export function Badge({ children, tone='default' }: { children: ReactNode; tone?: 'default'|'green'|'blue'|'orange'|'red' }) {
  return <span className={cn('badge', tone !== 'default' && tone)}>{children}</span>;
}
export function Input({ placeholder, value }: { placeholder?: string; value?: string }) {
  return <input className="input" placeholder={placeholder} defaultValue={value} />;
}
export function ProgressRing({ value, label='Match' }: { value: number; label?: string }) {
  return <div style={{ ['--p' as string]: value }} className="ring"><span>{value}%</span><small style={{position:'absolute',marginTop:42,zIndex:1,fontSize:10,color:'#4B5563'}}>{label}</small></div>;
}
export function MetricCard({ icon, label, value, change }: { icon: string; label: string; value: string; change: string }) {
  return <Card><div className="metric"><div className="metric-icon">{icon}</div><div><div className="caption">{label}</div><div className="metric-value">{value}</div><div className="small" style={{color:'#4d8c00'}}>▲ {change}</div></div></div></Card>;
}
