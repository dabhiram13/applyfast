import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Filter,
  RefreshCw,
  Share2,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { sponsorCompanies } from "@/lib/applyfast/data"

const companyLogos: Record<string, string> = {
  Stripe: "S",
  Anthropic: "AI",
  Linear: "L",
  Microsoft: "▦",
  Amazon: "a",
}

const logoClasses: Record<string, string> = {
  Stripe: "bg-gradient-to-br from-[#6C5CFF] to-[#3B30CC] text-white",
  Anthropic: "bg-[#C7A27F] text-[#111318]",
  Linear: "bg-white text-[#111318]",
  Microsoft: "bg-white text-[#F25022]",
  Amazon: "bg-[#111318] text-white",
}

const darkFilters = [
  ["Visa Type", "H-1B"],
  ["Industry", "All Industries"],
  ["Headcount", "All Sizes"],
  ["Median Wage", "All"],
  ["Approval Rate", "All"],
  ["Avg. Reply Time", "All"],
]

function SponsorLogo({ company }: { company: string }) {
  return (
    <div className={`grid size-13 shrink-0 place-items-center rounded-xl text-2xl font-black ${logoClasses[company] ?? "bg-[#1F2328] text-white"}`}>
      {companyLogos[company] ?? company[0]}
    </div>
  )
}

export default function SponsorsPage() {
  const selected = sponsorCompanies[0]

  return (
    <div className="-m-5 min-h-[calc(100vh-5rem)] bg-[#060A0E] p-5 text-white md:-m-8 md:p-8">
      <div className="mx-auto grid max-w-[1440px] gap-5 xl:grid-cols-[1fr_420px]">
        <main className="space-y-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-black tracking-tight">Sponsor Explorer</h1>
                <button className="rounded-xl border border-white/10 px-3 py-1 text-sm text-white/70">FY2025</button>
              </div>
              <p className="mt-3 text-sm text-white/62">Discover companies that actively sponsor visas. Data from official government sources.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-xl border-white/15 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white">
                Learn how it works
              </Button>
              <Button variant="outline" className="rounded-xl border-white/15 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white">
                <Share2 className="size-4" /> Share
              </Button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-7">
            {darkFilters.map(([label, value]) => (
              <button key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <span className="block text-xs font-bold text-white/68">{label}</span>
                <span className="mt-3 block text-sm font-black">{value}</span>
              </button>
            ))}
            <button className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="block text-xs font-bold text-white/68">More Filters</span>
              <span className="mt-3 flex items-center gap-2 text-sm font-black"><Filter className="size-4" /> Advanced</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-bold underline underline-offset-4">120 companies found</p>
            <div className="flex items-center gap-4 text-sm">
              <button className="underline underline-offset-4">Clear all</button>
              <span className="text-white/50">Sort by</span>
              <button className="rounded-xl border border-white/15 px-4 py-2 font-bold">H-1B Approvals</button>
            </div>
          </div>

          <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr_0.8fr_1fr] border-b border-white/10 px-5 py-4 text-xs font-bold text-white/62">
              <span>Company</span>
              <span>H-1B Approvals</span>
              <span>Median Wage</span>
              <span>Avg. Reply Time</span>
              <span>Ghost Rate</span>
              <span>Open Roles</span>
              <span className="text-right">Sponsor Friendly</span>
            </div>
            <div className="divide-y divide-white/8">
              {sponsorCompanies.concat([
                { company: "Deloitte", approvals: 2045, medianWage: "$118K", replyTime: "3.7 days", ghostRate: "13%", confidence: 82, openRoles: 186 },
                { company: "Google", approvals: 3332, medianWage: "$161K", replyTime: "2.4 days", ghostRate: "9%", confidence: 81, openRoles: 279 },
                { company: "Acme Corp", approvals: 0, medianWage: "-", replyTime: "-", ghostRate: "-", confidence: 0, openRoles: 0 },
              ]).map((company, index) => (
                <div
                  key={company.company}
                  className={`grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr_0.8fr_1fr] items-center px-5 py-4 text-sm ${index === 0 ? "rounded-xl border border-[#69D316] bg-[#B7F34A]/[0.04]" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <SponsorLogo company={company.company} />
                    <div>
                      <p className="font-black">{company.company}</p>
                      <p className="text-xs text-white/45">San Francisco, CA</p>
                      <span className="mt-1 inline-flex rounded-full bg-white/8 px-2 py-0.5 text-[10px] text-white/70">10K+</span>
                    </div>
                  </div>
                  <span><span className="block text-lg font-black">{company.approvals ? company.approvals.toLocaleString() : "-"}</span><span className="text-xs text-white/45">FY2025</span></span>
                  <span className="font-bold">{company.medianWage}</span>
                  <span><span className="block font-bold">{company.replyTime}</span><span className="text-xs text-white/45">Avg.</span></span>
                  <span>{company.ghostRate}</span>
                  <span>{company.openRoles || "-"}</span>
                  <span className={`justify-self-end rounded-xl border px-3 py-2 text-center text-xs font-black ${company.confidence >= 90 ? "border-[#69D316]/45 bg-[#B7F34A]/[0.08] text-[#B7F34A]" : company.confidence ? "border-amber-400/45 bg-amber-400/[0.08] text-amber-300" : "border-white/10 bg-white/8 text-white/45"}`}>
                    {company.confidence ? `${company.confidence}%` : "Not Verified"}
                    {company.confidence ? <span className="block text-[10px]">Excellent</span> : null}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="grid size-24 place-items-center rounded-full bg-[#B7F34A]/10">
              <img src="/brand/logo/applyfast_mark.svg" alt="" className="size-16" />
            </div>
            <div>
              <h2 className="text-2xl font-black">Don’t see your company?</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">We’re always adding new companies. Request a company and we’ll prioritize verification.</p>
              <Button className="mt-5 rounded-xl bg-[#B7F34A] text-[#0D0F12] hover:bg-[#c8ff63]">
                Request Company <ArrowRight className="size-4" />
              </Button>
            </div>
            <div className="grid gap-4 text-sm text-white/62 md:grid-cols-3">
              {["We verify using official data sources", "You get better job matches", "Everyone wins stronger insights"].map((item) => (
                <p key={item} className="max-w-28">{item}</p>
              ))}
            </div>
          </section>
        </main>

        <aside className="sticky top-24 h-fit rounded-2xl border border-white/10 bg-[#10161D] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="flex justify-end"><X className="size-4 text-white/45" /></div>
          <div className="mt-2 flex items-start gap-4">
            <SponsorLogo company={selected.company} />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-black">{selected.company}</h2>
              <p className="text-sm text-white/48">San Francisco, CA</p>
              <p className="mt-2 text-sm font-bold text-[#B7F34A]">stripe.com</p>
            </div>
            <div className="rounded-2xl border border-[#69D316]/45 bg-[#B7F34A]/[0.08] px-5 py-3 text-center text-[#B7F34A]">
              <p className="text-2xl font-black">{selected.confidence}%</p>
              <p className="text-xs font-bold">Excellent</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/62">Stripe builds economic infrastructure for the internet. We process billions of dollars every year for forward-thinking businesses around the world.</p>
          <div className="mt-5 flex gap-3">
            <span className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold">DOL LCA <span className="ml-2 text-[#B7F34A]">Verified</span></span>
            <span className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold">USCIS I-129 <span className="ml-2 text-[#B7F34A]">Verified</span></span>
          </div>

          <h3 className="mt-7 border-t border-white/10 pt-5 font-black">Sponsor Overview</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              [selected.approvals.toLocaleString(), "H-1B Approvals"],
              [selected.medianWage, "Median Wage"],
              [selected.replyTime, "Avg. Reply Time"],
              [selected.ghostRate, "Ghost Rate"],
              [String(selected.openRoles), "Active Roles"],
              [`${selected.confidence}%`, "Sponsor Friendly"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="font-black">{value}</p>
                <p className="mt-1 text-[11px] text-white/45">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-black">Visa Support History</h3>
              <button className="rounded-lg border border-white/10 px-2 py-1 text-xs text-white/55">H-1B Approvals</button>
            </div>
            <div className="h-40 rounded-xl border border-white/10 bg-[#070A0D] p-4">
              <div className="flex h-full items-end gap-4">
                {[28, 38, 52, 76, 92].map((height, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-2">
                    <span className="w-full rounded-t bg-[#B7F34A]/80" style={{ height: `${height}%` }} />
                    <span className="text-[10px] text-white/42">FY{2021 + index}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h3 className="font-black">Active Open Roles ({selected.openRoles})</h3>
            <div className="mt-3 space-y-3">
              {["Software Engineer, Backend", "Software Engineer, Payments", "Data Engineer"].map((role, index) => (
                <div key={role} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{role}</p>
                    <span className="rounded-full bg-[#B7F34A] px-2 py-0.5 text-[10px] font-black text-[#0D0F12]">New</span>
                  </div>
                  <p className="mt-1 text-xs text-white/45">San Francisco, CA · Full-time <span className="ml-2">{index + 1} days ago</span></p>
                </div>
              ))}
            </div>
            <Link href="/protected/jobs" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/75">
              View all {selected.openRoles} open roles <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/50">
            <div className="flex items-center gap-2 font-bold text-white/70"><RefreshCw className="size-4" /> Data last updated May 7, 2025</div>
            <p className="mt-3">All data is sourced from official government records and updated regularly.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
