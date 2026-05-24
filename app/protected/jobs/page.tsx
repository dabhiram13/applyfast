import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  ExternalLink,
  Grid2X2,
  List,
  MoreHorizontal,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { jobs } from "@/lib/applyfast/data"

const filters = [
  ["Role", "All Roles"],
  ["Location", "All Locations"],
  ["Visa Type", "H-1B"],
  ["Work Type", "Remote / Hybrid"],
  ["Salary", "$120k+"],
]

const tabs = [
  ["Best Matches", "126"],
  ["Recent", "32"],
  ["Saved", "18"],
  ["Applied", "9"],
  ["Hidden", "4"],
]

function LogoTile({ logo, className }: { logo: string; className?: string }) {
  return (
    <div className={`grid size-16 shrink-0 place-items-center rounded-xl text-2xl font-black shadow-sm ${className}`}>
      {logo}
    </div>
  )
}

function MatchRing({ value }: { value: number }) {
  return (
    <div
      className="grid size-20 shrink-0 place-items-center rounded-full text-lg font-black text-[#111318]"
      style={{ background: `conic-gradient(#64D11C ${value * 3.6}deg, #E6ECD8 0deg)` }}
    >
      <div className="grid size-15 place-items-center rounded-full bg-white leading-tight">
        <span>{value}%</span>
        <span className="-mt-3 text-[10px] font-bold text-[#6B7280]">Match</span>
      </div>
    </div>
  )
}

export default function JobsPage() {
  const selected = jobs[0]

  return (
    <div className="mx-auto max-w-[1440px] space-y-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-start">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#111318]">Job Matches</h1>
          <p className="mt-1 text-sm text-[#6B7280]">Personalized opportunities based on your profile and preferences.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="h-10 rounded-xl border-black/10 bg-white">
            <ShieldCheck className="size-4" /> How it works
          </Button>
          <Button variant="outline" className="h-10 rounded-xl border-black/10 bg-white">
            <Bookmark className="size-4" /> Save Search
          </Button>
          <Button variant="outline" size="icon" className="size-10 rounded-xl border-black/10 bg-white">
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-black/8 bg-white p-4 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
        <div className="flex h-12 items-center gap-3 rounded-xl border border-black/8 px-4">
          <Search className="size-4 text-[#6B7280]" />
          <span className="text-sm text-[#8B949E]">Search roles, companies, skills...</span>
          <Search className="ml-auto size-4 text-[#111318]" />
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-[repeat(5,1fr)_auto_auto]">
          {filters.map(([label, value]) => (
            <button key={label} className="h-16 rounded-xl border border-black/8 bg-white px-4 text-left">
              <span className="block text-xs font-medium text-[#6B7280]">{label}</span>
              <span className="mt-1 block text-sm font-black text-[#111318]">{value}</span>
            </button>
          ))}
          <Button variant="outline" className="h-16 rounded-xl border-black/8 bg-white">
            More Filters <span className="grid size-5 place-items-center rounded-full bg-[#B7F34A] text-xs font-black text-[#0D0F12]">2</span>
          </Button>
          <Button variant="outline" className="h-16 rounded-xl border-black/8 bg-white">Reset</Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["H-1B", "Remote / Hybrid", "$120k+", "Sponsor friendly only"].map((chip) => (
            <span key={chip} className="inline-flex items-center gap-2 rounded-full bg-[#EEF3FF] px-4 py-2 text-sm font-bold text-[#4E68CC]">
              {chip} <X className="size-3" />
            </span>
          ))}
          <button className="px-3 text-sm font-bold text-[#6B7280]">Clear all</button>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.72fr]">
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-black/8">
            <div className="flex flex-wrap gap-8">
              {tabs.map(([tab, count], index) => (
                <button key={tab} className={`border-b-2 px-1 pb-4 text-sm font-bold ${index === 0 ? "border-[#61C814] text-[#46A80E]" : "border-transparent text-[#6B7280]"}`}>
                  {tab} <span className="ml-2 rounded-full bg-[#EEF1EC] px-2 py-1 text-xs text-[#6B7280]">{count}</span>
                </button>
              ))}
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="outline" className="h-9 rounded-xl border-black/10 bg-white text-sm">Sort by: Best Match</Button>
              <Button variant="outline" size="icon" className="size-9 rounded-xl border-black/10 bg-white"><List className="size-4" /></Button>
              <Button variant="outline" size="icon" className="size-9 rounded-xl border-black/10 bg-white"><Grid2X2 className="size-4" /></Button>
            </div>
          </div>

          <div className="space-y-3">
            {jobs.map((job, index) => (
              <article
                key={job.id}
                className={`grid gap-4 rounded-2xl border bg-white p-4 shadow-[0_10px_24px_rgba(13,15,18,0.04)] md:grid-cols-[1fr_190px_96px] md:items-center ${index === 0 ? "border-[#65D11A] ring-1 ring-[#65D11A]" : "border-black/8"}`}
              >
                <div className="flex min-w-0 gap-4">
                  <LogoTile logo={job.logo} className={job.logoClassName} />
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-black text-[#111318]">{job.role}</h2>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-[#111318]">
                      {job.company} <CheckCircle2 className="size-3.5 fill-[#4FC313] text-white" />
                    </p>
                    <p className="mt-1 text-sm text-[#6B7280]">{job.location}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-md border border-black/8 px-3 py-1 text-xs font-medium">{job.salary}</span>
                      <span className="rounded-md border border-black/8 px-3 py-1 text-xs font-medium">{job.visa}</span>
                      <span className="rounded-md border border-black/8 px-3 py-1 text-xs font-medium">Equity</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-black/8 md:border-l md:pl-6">
                  <div>
                    <p className="text-xs text-[#6B7280]">Ghost rate</p>
                    <p className="mt-1 text-sm font-black text-[#111318]">{job.ghostRate}</p>
                    <span className="mt-2 block h-1 w-16 rounded-full bg-[#65D11A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Reply time</p>
                    <p className="mt-1 text-sm font-black text-[#111318]">{job.replyTime}</p>
                  </div>
                </div>
                <div className="justify-self-start md:justify-self-end">
                  <MatchRing value={job.match} />
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-between py-4 text-sm text-[#6B7280]">
            <span>126 jobs found</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button key={page} className={`grid size-8 place-items-center rounded-lg ${page === 1 ? "bg-[#EAF8DD] font-black text-[#45A511]" : ""}`}>{page}</button>
              ))}
              <ArrowRight className="size-4" />
            </div>
          </div>
        </section>

        <aside className="sticky top-24 h-fit rounded-2xl border border-black/8 bg-white p-5 shadow-[0_14px_34px_rgba(13,15,18,0.06)]">
          <div className="mb-5 flex items-center justify-between text-[#46A80E]">
            <span className="inline-flex items-center gap-2 text-sm font-black"><Star className="size-4 fill-current" /> Best Match</span>
            <X className="size-4 text-[#111318]" />
          </div>
          <div className="flex gap-4">
            <LogoTile logo={selected.logo} className={selected.logoClassName} />
            <div>
              <h2 className="text-2xl font-black text-[#111318]">{selected.role}</h2>
              <p className="mt-1 flex items-center gap-2 text-sm font-bold text-[#111318]">
                {selected.company} <CheckCircle2 className="size-3.5 fill-[#4FC313] text-white" />
              </p>
              <p className="mt-1 text-sm text-[#6B7280]">{selected.location} · 2 days ago</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[selected.salary, selected.visa, "401(k) + Equity"].map((tag) => (
              <span key={tag} className="rounded-lg border border-black/8 px-3 py-1.5 text-sm font-medium text-[#4B5563]">{tag}</span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-[1fr_auto_auto] gap-3">
            <Button className="h-11 rounded-xl bg-[#52C714] text-white hover:bg-[#46B20F]">
              Apply on Stripe <ExternalLink className="size-4" />
            </Button>
            <Button variant="outline" className="h-11 rounded-xl border-black/10 bg-white">
              <Bookmark className="size-4" /> Save
            </Button>
            <Button variant="outline" size="icon" className="size-11 rounded-xl border-black/10 bg-white">
              <MoreHorizontal className="size-4" />
            </Button>
          </div>
          <div className="mt-5 flex gap-7 border-b border-black/8 text-sm font-bold">
            {["Overview", "Why it matches", "Company", "Similar roles"].map((tab, index) => (
              <button key={tab} className={`pb-3 ${index === 0 ? "border-b-2 border-[#62C814] text-[#45A511]" : "text-[#6B7280]"}`}>{tab}</button>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[#4B5563]">
            Build highly reliable and scalable payments infrastructure used by millions of businesses worldwide. Work on systems that power critical financial workflows.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            {[
              ["Department", "Engineering"],
              ["Role Type", "Individual Contributor"],
              ["Experience", "3-6 years"],
              ["Employment Type", "Full-time"],
              ["Work Model", "Hybrid"],
              ["Visa Sponsorship", "H-1B, TN"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-[#8B949E]">{label}</p>
                <p className="mt-1 font-bold text-[#111318]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <h3 className="font-black text-[#111318]">Why this matches you</h3>
            <div className="mt-3 space-y-3">
              {selected.reasons.map((reason) => (
                <p key={reason} className="flex gap-2 text-sm text-[#4B5563]">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#4FC313]" /> {reason}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-[#D9EEC6] bg-[#F4FCEB] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-black text-[#111318]">Top 10% match</p>
                <p className="text-sm text-[#6B7280]">You have 18 of 20 key skills</p>
              </div>
              <Button variant="outline" className="rounded-xl bg-white">View details</Button>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-black text-[#111318]">Visa support evidence</h3>
            <div className="mt-3 space-y-3">
              {["H-1B sponsorship offered for this role", "Prioritizes candidates requiring work authorization", "High sponsorship track record"].map((evidence) => (
                <p key={evidence} className="flex gap-2 text-sm text-[#4B5563]">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#4FC313]" /> {evidence}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Button variant="outline" className="rounded-xl"><FileIcon /> Tailor Resume</Button>
            <Button variant="outline" className="rounded-xl">Add to Queue</Button>
            <Button variant="outline" className="rounded-xl">View Company</Button>
          </div>
          <p className="mt-4 text-xs text-[#8B949E]">Match score is based on your profile, preferences, and past outcomes.</p>
        </aside>
      </div>
    </div>
  )
}

function FileIcon() {
  return <SlidersHorizontal className="size-4" />
}
