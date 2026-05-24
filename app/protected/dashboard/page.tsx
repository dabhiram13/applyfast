import Link from "next/link"
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MessageCircle,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { jobs, sponsorCompanies } from "@/lib/applyfast/data"

const stats = [
  { label: "New Matches", value: "24", delta: "26%", icon: TrendingUp, tone: "bg-[#E9FADC] text-[#2BAE13]" },
  { label: "In Review", value: "12", delta: "9%", icon: Clock3, tone: "bg-[#FFF4D6] text-[#D28B00]" },
  { label: "Replies", value: "6", delta: "50%", icon: MessageCircle, tone: "bg-[#EAF2FF] text-[#276EF1]" },
  { label: "Match Average", value: "86%", delta: "6 pts", icon: TrendingUp, tone: "bg-[#E9FADC] text-[#2BAE13]" },
]

const activities = [
  "You applied to Product Designer at Figma",
  "Stripe viewed your application",
  "New match: Product Engineer at Stripe",
  "Interview scheduled with Linear",
  "Anthropic moved you to In Review",
]

const tasks = [
  ["Tailor résumé for Stripe", "Today"],
  ["Follow up with Anthropic", "Tomorrow"],
  ["Prepare for interview with Linear", "May 16"],
  ["Update portfolio for Figma", "May 17"],
]

const quickActions: Array<[LucideIcon, string]> = [
  [Search, "Find jobs"],
  [Users, "Find sponsors"],
  [FileText, "Add to queue"],
  [TrendingUp, "Track"],
  [BriefcaseBusiness, "Tailor"],
  [ShieldCheck, "View tracker"],
  [CalendarDays, "Interview prep"],
  [ArrowRight, "Message"],
]

function LogoTile({ logo, className }: { logo: string; className?: string }) {
  return (
    <div className={`grid size-12 shrink-0 place-items-center rounded-xl text-lg font-black shadow-sm ${className}`}>
      {logo}
    </div>
  )
}

function MatchRing({ value }: { value: number }) {
  return (
    <div
      className="grid size-16 place-items-center rounded-full text-sm font-black text-[#111318]"
      style={{ background: `conic-gradient(#63D414 ${value * 3.6}deg, #E7EDE3 0deg)` }}
    >
      <div className="grid size-12 place-items-center rounded-full bg-white">
        {value}%
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1380px] space-y-7">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-[34px] font-black tracking-tight text-[#111318]">Back to it, Mei.</h1>
          <p className="mt-2 text-base text-[#6B7280]">You’ve got great momentum. Let’s keep it going.</p>
        </div>
        <Button asChild className="h-11 rounded-xl bg-[#0D0F12] px-5 text-white hover:bg-[#1F2328]">
          <Link href="/protected/analyzer">Analyze a job <ArrowRight className="size-4" /></Link>
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
            <div className={`mb-5 grid size-11 place-items-center rounded-full ${stat.tone}`}>
              <stat.icon className="size-5" />
            </div>
            <p className="text-sm font-medium text-[#4B5563]">{stat.label}</p>
            <div className="mt-2 flex items-end gap-3">
              <p className="text-4xl font-black tracking-tight text-[#111318]">{stat.value}</p>
              <p className="pb-1 text-sm font-bold text-[#22A313]">↑ {stat.delta}</p>
            </div>
            <p className="mt-1 text-xs text-[#8B949E]">vs last 7 days</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black text-[#111318]">Today’s best matches</h2>
            <Link href="/protected/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#6B7280]">
              View all <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-[1.4fr_1fr_1fr_0.7fr] border-b border-black/8 pb-3 text-sm font-bold text-[#111318]">
            <span>Role</span>
            <span>Salary</span>
            <span>Location</span>
            <span className="text-right">Match</span>
          </div>
          <div className="divide-y divide-black/8">
            {jobs.slice(0, 3).map((job) => (
              <div key={job.id} className="grid grid-cols-[1.4fr_1fr_1fr_0.7fr] items-center gap-4 py-5">
                <div className="flex min-w-0 items-center gap-4">
                  <LogoTile logo={job.logo} className={job.logoClassName} />
                  <div className="min-w-0">
                    <p className="truncate font-bold text-[#111318]">{job.role}</p>
                    <p className="text-sm text-[#6B7280]">{job.company}</p>
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#EAF8DD] px-2.5 py-1 text-xs font-bold text-[#3A8E15]">
                      <ShieldCheck className="size-3" /> Sponsor Friendly
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#111318]">{job.salary}</p>
                <p className="text-sm text-[#111318]">{job.location.split(" · ")[0]}<span className="block text-[#8B949E]">{job.location.split(" · ")[1]}</span></p>
                <div className="justify-self-end"><MatchRing value={job.match} /></div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-[#6B7280]">
            <span>Based on your profile, preferences, and activity</span>
            <button className="inline-flex items-center gap-2 font-bold"><Search className="size-4" /> Refresh matches</button>
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="text-xl font-black text-[#111318]">Recent activity</h2>
          <div className="mt-6 space-y-5">
            {activities.map((activity, index) => (
              <div key={activity} className="relative flex gap-4">
                {index < activities.length - 1 ? <span className="absolute left-5 top-10 h-8 w-px bg-black/10" /> : null}
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EAF8DD] text-[#3A8E15]">
                  {index === 0 ? <CheckCircle2 className="size-4" /> : <span className="text-xs font-black">{index + 1}</span>}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-5 text-[#111318]">{activity}</p>
                  <p className="mt-1 text-xs text-[#8B949E]">{index < 3 ? `${index + 2}h ago` : "1d ago"}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/protected/tracker" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6B7280]">
            View all activity <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.95fr_0.75fr]">
        <section className="rounded-2xl border border-black/5 bg-[#060A0E] p-6 text-white shadow-[0_18px_40px_rgba(13,15,18,0.12)]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-black">Application activity</h2>
            <span className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70">Last 7 days</span>
          </div>
          <p className="text-4xl font-black">24 <span className="text-base font-medium text-white/70">applications sent</span></p>
          <p className="mt-2 text-sm font-bold text-[#B7F34A]">↑ 14% vs previous 7 days</p>
          <div className="mt-8 flex h-32 items-end gap-3 border-b border-l border-white/12 pl-3">
            {[34, 50, 42, 62, 84, 74, 96, 66, 78, 70, 88, 100].map((height, index) => (
              <span key={index} className="w-full rounded-t bg-[#B7F34A]/85" style={{ height: `${height}%` }} />
            ))}
          </div>
          <Link href="/protected/tracker" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
            View full analytics <ArrowRight className="size-4" />
          </Link>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black text-[#111318]">Upcoming tasks</h2>
            <Link href="/protected/tracker" className="text-sm font-bold text-[#6B7280]">View all</Link>
          </div>
          <div className="space-y-5">
            {tasks.map(([task, due]) => (
              <label key={task} className="flex items-center justify-between gap-4 text-sm">
                <span className="flex items-center gap-3">
                  <span className="size-5 rounded-md border border-[#9CA3AF]" />
                  <span><span className="block font-medium text-[#111318]">{task}</span><span className="text-xs text-[#8B949E]">Product Engineer</span></span>
                </span>
                <span className={due === "Today" ? "font-bold text-[#22A313]" : "text-[#6B7280]"}>{due}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="text-lg font-black text-[#111318]">Queue summary</h2>
          <div className="mt-6 divide-y divide-black/8">
            {[
              ["Applications in queue", "8"],
              ["Awaiting review", "12"],
              ["Follow up due", "5"],
              ["Interviews", "3"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between py-4 text-sm">
                <span className="text-[#4B5563]">{label}</span>
                <span className="font-black text-[#111318]">{value}</span>
              </div>
            ))}
          </div>
          <Link href="/protected/tracker" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#6B7280]">
            View queue <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.85fr_1fr_0.85fr]">
        <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="mb-5 text-lg font-black text-[#111318]">Quick actions</h2>
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map(([Icon, label]) => (
              <Link key={label} href="/protected/jobs" className="grid min-h-20 place-items-center rounded-2xl border border-black/8 text-center text-xs font-medium text-[#4B5563] hover:border-[#B7F34A] hover:bg-[#F4FCEB]">
                <Icon className="mb-2 size-5 text-[#111318]" />
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black text-[#111318]">Top sponsors</h2>
            <Link href="/protected/sponsors" className="text-sm font-bold text-[#6B7280]">View all</Link>
          </div>
          <div className="space-y-4">
            {sponsorCompanies.slice(0, 3).map((sponsor) => (
              <div key={sponsor.company} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-[#F3F4F6] font-black">{sponsor.company[0]}</div>
                  <div>
                    <p className="font-bold text-[#111318]">{sponsor.company}</p>
                    <p className="text-xs text-[#8B949E]">{sponsor.openRoles} open roles</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#EAF8DD] px-3 py-1 text-xs font-black text-[#3A8E15]">High impact</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="text-lg font-black text-[#111318]">Reminders</h2>
          <div className="mt-5 space-y-3">
            {[
              ["3 resumes need tailoring", "Increase match score", "bg-red-50 text-red-700"],
              ["5 follow ups due", "Keep your momentum", "bg-amber-50 text-amber-700"],
              ["2 interviews this week", "Prepare to succeed", "bg-blue-50 text-blue-700"],
            ].map(([title, copy, tone]) => (
              <div key={title} className={`rounded-2xl p-4 ${tone}`}>
                <p className="font-black">{title}</p>
                <p className="text-xs opacity-75">{copy}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
