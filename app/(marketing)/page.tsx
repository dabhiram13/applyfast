import Link from "next/link"
import {
  ArrowRight,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  FileSearch,
  FileText,
  Globe2,
  ListChecks,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import { ApplyfastLogo } from "@/components/brand/applyfast-logo"

const heroStats = [
  ["Applications Sent", "24", "+18% vs last 30 days"],
  ["Interview Rate", "18%", "+6% vs last 30 days"],
  ["Sponsor Responses", "7", "+3 vs last 30 days"],
  ["Shortlisted", "5", "+2 vs last 30 days"],
]

const dashboardJobs = [
  ["Spotify", "Software Engineer", "98% match", "S", "bg-[#1DB954] text-[#0D0F12]"],
  ["Visa", "Data Analyst", "96% match", "V", "bg-[#2457FF] text-white"],
  ["Microsoft", "Backend Engineer", "94% match", "M", "bg-white text-[#F25022]"],
]

const schools = ["MIT", "Stanford", "Berkeley", "Northwestern", "Carnegie Mellon", "NYU"]

const steps = [
  {
    icon: FileSearch,
    title: "Upload your resume",
    copy: "Import your resume and tell us your visa status, skills, and job goals.",
  },
  {
    icon: Search,
    title: "Find the right jobs",
    copy: "We surface roles that match your profile and sponsor international talent.",
  },
  {
    icon: ListChecks,
    title: "Review, then apply",
    copy: "Tailor each application. You review the final version before it goes out.",
  },
]

const featureCards = [
  {
    icon: Sparkles,
    title: "AI Resume Tailor",
    copy: "Instantly tailor your resume and cover letter to each role and company.",
    bullets: ["ATS-optimized", "Role-specific keywords", "Personalized to you"],
    cta: "Learn more",
    dark: false,
  },
  {
    icon: Search,
    title: "Sponsor Explorer",
    copy: "Discover companies with a proven track record of visa sponsorship.",
    bullets: ["H-1B, TN, O-1 & more", "Sponsorship rate insights", "Verified company data"],
    cta: "Explore sponsors",
    dark: true,
  },
  {
    icon: ListChecks,
    title: "Apply Queue",
    copy: "Manage every application in one smart, organized workspace.",
    bullets: ["Track progress", "Get status updates", "Never miss a follow-up"],
    cta: "Learn more",
    dark: false,
  },
]

function GhostMascot() {
  return (
    <div className="absolute -right-[58px] top-[64px] hidden h-[82px] w-[68px] rounded-t-[34px] rounded-b-2xl border border-[#B7F34A]/30 bg-[#B7F34A]/35 shadow-[0_0_48px_rgba(183,243,74,0.68)] backdrop-blur lg:block">
      <span className="absolute left-[18px] top-[28px] size-2.5 rounded-full bg-[#0D0F12]/45" />
      <span className="absolute right-[18px] top-[28px] size-2.5 rounded-full bg-[#0D0F12]/45" />
      <span className="absolute bottom-0 left-0 h-[18px] w-[17px] rounded-tr-2xl bg-[#020405]" />
      <span className="absolute bottom-0 left-[17px] h-[18px] w-[17px] rounded-t-2xl bg-[#020405]" />
      <span className="absolute bottom-0 left-[34px] h-[18px] w-[17px] rounded-t-2xl bg-[#020405]" />
      <span className="absolute bottom-0 right-0 h-[18px] w-[17px] rounded-tl-2xl bg-[#020405]" />
    </div>
  )
}

function MiniDashboard() {
  return (
    <div className="relative w-full lg:-mt-[20px] lg:w-[493px]">
      <GhostMascot />
      <div className="overflow-hidden rounded-[18px] border border-white/20 bg-white/[0.06] p-3 shadow-[0_0_72px_rgba(183,243,74,0.16)] backdrop-blur lg:h-[339px]">
        <div className="grid overflow-hidden rounded-[14px] border border-white/12 bg-[#11161C]/95 lg:grid-cols-[42px_1fr]">
          <aside className="hidden border-r border-white/10 px-2.5 py-4 lg:block">
            <img src="/brand/logo/applyfast_mark.svg" alt="" className="h-4 w-auto" />
            <div className="mt-7 space-y-3 text-white/55">
              {[BriefcaseBusiness, FileText, ShieldCheck, Bookmark].map((Icon, index) => (
                <div
                  key={index}
                  className={`grid size-6 place-items-center rounded-md ${
                    index === 0 ? "bg-[#B7F34A]/18 text-[#B7F34A]" : ""
                  }`}
                >
                  <Icon className="size-3.5" />
                </div>
              ))}
            </div>
          </aside>
          <div className="p-3.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-black text-white">Good evening, Aisha 👋</p>
                <p className="mt-1 text-[10px] text-white/58">Your next career move is one click away.</p>
              </div>
              <Bell className="size-4 text-[#B7F34A]" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
              {heroStats.map(([label, value, delta]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1.5">
                  <p className="h-5 text-[7.5px] leading-[10px] text-white/55">{label}</p>
                  <p className="text-xl font-black leading-none text-white">{value}</p>
                  <p className="mt-1 whitespace-nowrap text-[7px] font-black text-[#B7F34A]">{delta}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] font-black text-white">Recommended for you</p>
            <div className="mt-2 divide-y divide-white/8 overflow-hidden rounded-lg border border-white/10">
              {dashboardJobs.map(([company, role, match, logo, tone]) => (
                <div
                  key={company}
                  className="grid grid-cols-[1fr_auto] items-center gap-2 bg-white/[0.03] px-3 py-1.5 md:grid-cols-[1fr_auto_auto]"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className={`grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-black ${tone}`}>
                      {logo}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-black leading-4 text-white">{role}</p>
                      <p className="truncate text-[8px] text-white/46">{company} · New York, USA</p>
                    </div>
                  </div>
                  <span className="whitespace-nowrap text-[10px] font-black text-[#B7F34A]">{match}</span>
                  <button className="hidden rounded-full bg-white/[0.08] px-3 py-1.5 text-[8px] font-black text-white md:inline-flex">
                    Apply now
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-2.5 text-center text-[8px] font-bold text-white/62">View all recommended jobs →</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppPreview() {
  return (
    <div className="grid overflow-hidden rounded-[12px] border border-[#0D0F12] bg-[#05080B] text-white lg:h-[216px] lg:grid-cols-[232px_360px_1fr]">
      <aside className="border-r border-white/10 p-5">
        <ApplyfastLogo dark textClassName="h-5" />
        <div className="mt-5 space-y-1.5 text-[11px] text-white/62">
          {["Dashboard", "Job Matches", "Applications", "Sponsors", "Resume Tailor", "Messages", "Settings"].map((item, index) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 ${index === 0 ? "bg-[#B7F34A]/14 font-black text-[#B7F34A]" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
      <section className="bg-white p-5 text-[#111318]">
        <h3 className="text-sm font-black">Job Matches</h3>
        <div className="mt-3 space-y-3">
          {[
            ["NVIDIA", "Data Scientist", "96% Match", "bg-[#76B900] text-[#0D0F12]"],
            ["Amazon", "ML Engineer", "94% Match", "bg-[#111318] text-white"],
          ].map(([company, role, match, tone]) => (
            <div key={company} className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-4 py-3">
              <div className="flex items-center gap-3">
                <div className={`grid size-10 place-items-center rounded-xl text-sm font-black ${tone}`}>{company[0]}</div>
                <div>
                  <p className="text-sm font-black">{role}</p>
                  <p className="text-xs text-[#6B7280]">{company} · Santa Clara, CA</p>
                  <span className="mt-1 inline-flex rounded-full bg-[#EAF8DD] px-2 py-0.5 text-[10px] font-bold text-[#3A8E15]">
                    Sponsor Friendly
                  </span>
                </div>
              </div>
              <span className="text-sm font-black text-[#45A511]">{match}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="p-6">
        <h2 className="max-w-[310px] text-xl font-black leading-tight">Everything you need to land a visa-sponsored job.</h2>
        <div className="mt-3 space-y-1.5 text-[11px] text-white/70">
          {["Smart job matching", "AI-powered personalization", "Sponsor insights", "Application tracking"].map((item) => (
            <p key={item} className="flex items-center gap-2">
              <Check className="size-3.5 text-[#B7F34A]" /> {item}
            </p>
          ))}
        </div>
        <Link href="/auth/sign-up" className="mt-3 inline-flex h-9 items-center gap-3 rounded-full bg-[#B7F34A] px-6 text-xs font-black text-[#0D0F12] hover:bg-[#C8FF63]">
          Start free — 2 min <ArrowRight className="size-3.5" />
        </Link>
      </section>
    </div>
  )
}

function PricingCard() {
  return (
    <div id="pricing" className="overflow-hidden rounded-xl border border-black/10 bg-white p-5 shadow-[0_12px_28px_rgba(13,15,18,0.04)] lg:h-[220px]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-black">Simple pricing</h3>
        <span className="rounded-full bg-[#F0FAE6] px-2 py-1 text-[9px] font-black text-[#52A90E]">Save 20%</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-black/10 p-3">
          <p className="text-[10px] font-bold text-[#6B7280]">Free</p>
          <p className="text-2xl font-black">$0</p>
          <p className="mt-2 text-[9px] text-[#6B7280]">For students getting started</p>
        </div>
        <div className="rounded-lg border border-[#B7F34A] bg-[#F9FFF0] p-3">
          <p className="text-[10px] font-bold text-[#6B7280]">Pro</p>
          <p className="text-2xl font-black">$9.99</p>
          <p className="mt-2 text-[9px] text-[#6B7280]">For serious job seekers</p>
        </div>
      </div>
      <Link href="/auth/sign-up" className="mt-3 inline-flex h-9 w-full items-center justify-center rounded-lg bg-[#B7F34A] text-xs font-black text-[#0D0F12]">
        Start free
      </Link>
    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="bg-[#F6F7F3] text-[#111318]">
      <section className="relative overflow-hidden bg-[#020405] px-6 pb-12 pt-[86px] text-white md:px-10 lg:h-[466px] lg:px-0 lg:pb-0 lg:pt-[66px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_89%_22%,rgba(183,243,74,0.24),transparent_20%),radial-gradient(circle_at_48%_8%,rgba(255,255,255,0.10),transparent_22%)]" />
        <div className="relative mx-auto grid gap-10 lg:max-w-[978px] lg:grid-cols-[420px_493px] lg:gap-[65px] lg:pt-[28px]">
          <div className="min-w-0">
            <p className="mb-2.5 inline-flex items-center gap-2 text-[12px] font-black text-[#B7F34A]">
              <Globe2 className="size-4" />
              Built for international students
            </p>
            <h1 className="text-[50px] font-black leading-[1.04] tracking-normal sm:text-[58px] lg:text-[57px]">
              <span className="block whitespace-nowrap">The fastest way</span>
              <span className="block whitespace-nowrap">
                to get <span className="text-[#B7F34A]">hired.</span>
              </span>
            </h1>
            <p className="mt-3 max-w-[390px] text-[15px] leading-[22px] text-white/84">
              Upload your resume, find roles that actually sponsor visas, tailor each application with AI, and apply after you review.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/sign-up"
                className="inline-flex h-[38px] items-center justify-center gap-3 rounded-full bg-[#B7F34A] px-7 text-xs font-black text-[#0D0F12] shadow-[0_0_26px_rgba(183,243,74,0.28)] hover:bg-[#C8FF63]"
              >
                Start free — 2 min <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="#how"
                className="inline-flex h-[38px] items-center justify-center gap-3 rounded-full border border-white/24 bg-transparent px-7 text-xs font-black text-white hover:bg-white/10"
              >
                See how it works <Play className="size-3.5 fill-current" />
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/68 sm:gap-x-5">
              {["10K+ students placed", "Visa sponsorship focused", "5-star student rating"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Star className="size-3.5 fill-[#B7F34A] text-[#B7F34A]" /> {item}
                </span>
              ))}
            </div>
          </div>
          <MiniDashboard />
        </div>
      </section>

      <section className="relative z-10 -mt-[27px] px-6 md:px-10 lg:px-0">
        <div className="mx-auto flex min-h-[58px] max-w-[1028px] flex-wrap items-center justify-between gap-4 rounded-xl border border-black/10 bg-white px-8 py-3 shadow-[0_22px_54px_rgba(13,15,18,0.10)]">
          <p className="max-w-[130px] text-[11px] leading-4 text-[#4B5563]">Trusted by students and graduates from</p>
          {schools.map((school) => (
            <span key={school} className="text-lg font-black tracking-tight text-[#111318]">
              {school}
            </span>
          ))}
          <span className="text-xs font-black text-[#6B7280]">and 500+ more</span>
        </div>
      </section>

      <section id="how" className="px-6 pb-8 pt-7 md:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[930px] gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className={`grid grid-cols-[60px_1fr] gap-4 ${index > 0 ? "md:border-l md:border-black/10 md:pl-7" : ""}`}>
              <div className="grid size-[54px] place-items-center rounded-xl border border-black/10 bg-white shadow-sm">
                <step.icon className="size-6 text-[#62C814]" />
              </div>
              <div>
                <h3 className="text-sm font-black">{step.title}</h3>
                <p className="mt-1 text-[10px] leading-4 text-[#6B7280]">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="product" className="px-6 pb-0 md:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[930px] gap-7 md:grid-cols-3">
          {featureCards.map((feature) => (
            <div
              key={feature.title}
              className="grid min-h-[164px] grid-cols-[72px_1fr] gap-3 overflow-hidden rounded-xl border border-black/10 bg-white p-3.5 shadow-[0_12px_28px_rgba(13,15,18,0.04)] lg:h-[164px]"
            >
              <div className={`grid size-[68px] place-items-center rounded-xl border ${feature.dark ? "bg-[#171B20] text-white" : "bg-[#F4FCEB] text-[#63C814]"}`}>
                <feature.icon className="size-7" />
              </div>
              <div>
                <h3 className="text-sm font-black">{feature.title}</h3>
                <p className="mt-1 text-[9px] leading-[14px] text-[#6B7280]">{feature.copy}</p>
                <div className="mt-2.5 space-y-0.5">
                  {feature.bullets.map((bullet) => (
                    <p key={bullet} className="flex items-center gap-1.5 text-[8px] text-[#4B5563]">
                      <Check className="size-3 text-[#62C814]" /> {bullet}
                    </p>
                  ))}
                </div>
                <Link href="/protected/dashboard" className="mt-2.5 inline-flex items-center gap-2 text-[9px] font-black">
                  {feature.cta} <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-1 pt-[18px] md:px-10 lg:px-0">
        <div className="mx-auto max-w-[986px]">
          <AppPreview />
        </div>
      </section>

      <section id="blog" className="px-6 pb-1 pt-1.5 md:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[986px] gap-3 lg:grid-cols-[1.1fr_.85fr_1fr_.85fr]">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white p-5 shadow-[0_12px_28px_rgba(13,15,18,0.04)] lg:h-[220px]">
            <h3 className="text-sm font-black">Loved by international talent</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Applyfast helped me go from hundreds of job searches to multiple interviews in weeks.", "The AI tailoring is incredible. I get more responses now than I ever did before."].map((quote, index) => (
                <div key={quote} className="rounded-lg border border-black/10 p-3">
                  <p className="text-[10px] leading-4 text-[#4B5563]">"{quote}"</p>
                  <p className="mt-3 text-[10px] font-black">{index === 0 ? "Priya S." : "Arjun M."}</p>
                  <div className="mt-2 flex text-[11px] text-[#63C814]">★★★★★</div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white p-5 shadow-[0_12px_28px_rgba(13,15,18,0.04)] lg:h-[220px]">
            <h3 className="text-sm font-black">Why students choose Applyfast</h3>
            <div className="mt-4 divide-y divide-black/10 text-[10px]">
              {["Visa sponsorship focus", "AI resume tailoring", "Application tracking", "Sponsor verified data"].map((row) => (
                <div key={row} className="grid grid-cols-[1fr_auto_auto] gap-4 py-2.5">
                  <span>{row}</span>
                  <CheckCircle2 className="size-3.5 text-[#62C814]" />
                  <span className="text-[#9CA3AF]">x</span>
                </div>
              ))}
            </div>
          </div>
          <PricingCard />
          <div id="faq" className="overflow-hidden rounded-xl border border-black/10 bg-white p-5 shadow-[0_12px_28px_rgba(13,15,18,0.04)] lg:h-[220px]">
            <h3 className="text-sm font-black">FAQ</h3>
            <div className="mt-4 space-y-2">
              {["Is Applyfast free to use?", "Do you guarantee visa sponsorship?", "Which visa types do you support?", "How does reviewed apply work?"].map((question) => (
                <button key={question} className="flex w-full items-center justify-between rounded-lg border border-black/10 px-3 py-2.5 text-left text-[9px] font-black">
                  {question} <ArrowRight className="size-3" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 pt-3 md:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[986px] gap-6 rounded-xl bg-[#05080B] p-7 text-white md:grid-cols-[1fr_1fr_auto] md:items-center lg:h-[134px]">
          <div>
            <h2 className="max-w-[330px] text-3xl font-black leading-tight">Your next opportunity is one application away.</h2>
            <p className="mt-2 max-w-[330px] text-xs leading-5 text-white/65">Join 10,000+ international students building their careers abroad with Applyfast.</p>
          </div>
          <div>
            <div className="flex h-11 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <input className="min-w-0 flex-1 bg-transparent px-4 text-xs text-white outline-none placeholder:text-white/38" placeholder="Enter your university email" />
              <Link href="/auth/sign-up" className="inline-flex items-center gap-2 bg-[#B7F34A] px-6 text-xs font-black text-[#0D0F12]">
                Start free — 2 min <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="mt-3 flex gap-5 text-[10px] text-white/55">
              <span>No credit card required</span>
              <span>Setup in 2 minutes</span>
            </div>
          </div>
          <div className="hidden border-l border-white/12 pl-8 md:block">
            <p className="max-w-[140px] text-xs leading-5 text-white/65">We're here to help you build your future.</p>
            <ApplyfastLogo dark textClassName="mt-4 h-7" />
          </div>
        </div>
      </section>
    </main>
  )
}
