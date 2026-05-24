import {
  Check,
  CheckCircle2,
  Download,
  Edit3,
  ExternalLink,
  FileText,
  Filter,
  Plus,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const queue = [
  ["Stripe", "Product Engineer", "Ready", "San Francisco, CA · On-site", "bg-gradient-to-br from-[#6C5CFF] to-[#3B30CC] text-white"],
  ["Linear", "Design Engineer", "Drafting", "New York, NY · Hybrid", "bg-[#111318] text-white"],
  ["Ramp", "Frontend Infra Engineer", "Drafting", "New York, NY · Hybrid", "bg-[#FFE300] text-[#111318]"],
  ["Anthropic", "Applied AI Engineer", "Submitted", "San Francisco, CA · Hybrid", "bg-[#C7A27F] text-[#111318]"],
]

const diffSections = [
  {
    title: "Professional Summary",
    original: "Full-stack engineer with 5+ years building scalable web applications using React, Node.js, and cloud technologies. Passionate about solving complex problems and delivering great user experiences.",
    tailored: "Product engineer with 5+ years building high-performance, scalable payment and financial infrastructure. Experienced in React, TypeScript, Node.js, and distributed systems. Passionate about solving complex developer experiences.",
    delta: "+3",
  },
  {
    title: "Experience",
    original: "Built responsive UIs with React and improved performance. Collaborated with cross-functional teams to deliver features.",
    tailored: "Built and shipped React/TypeScript features used by millions of developers, improving page load performance by 32%. Collaborated with product, design, and backend teams to ship developer-facing features end-to-end.",
    delta: "+2",
  },
  {
    title: "Backend Systems",
    original: "Developed RESTful APIs with Node.js. Wrote unit and integration tests.",
    tailored: "Designed and implemented RESTful APIs with Node.js and PostgreSQL, serving 50k+ RPS. Increased test coverage to 85% using Jest and Supertest.",
    delta: "+2",
  },
  {
    title: "Cloud",
    original: "Deployed applications on AWS.",
    tailored: "Deployed and scaled services on AWS using Docker, ECS, and Terraform with observability via Datadog and CloudWatch.",
    delta: "+1",
  },
]

const skills = ["React", "TypeScript", "Node.js", "Payments", "Distributed Systems", "APIs", "Scalability", "Performance"]

export default function ResumePage() {
  return (
    <div className="mx-auto grid max-w-[1440px] gap-5 xl:grid-cols-[330px_1fr_330px]">
      <aside className="space-y-5">
        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="mb-5 flex items-center gap-2">
            <h2 className="text-lg font-black uppercase tracking-wide text-[#111318]">Apply Queue</h2>
            <span className="rounded-full bg-[#EEF1EC] px-2 py-1 text-xs font-black">4</span>
          </div>
          <p className="mb-5 text-sm text-[#6B7280]">Prepare, tailor, and submit your applications.</p>
          <div className="mb-5 flex h-11 items-center gap-3 rounded-xl border border-black/8 px-3">
            <FileText className="size-4 text-[#8B949E]" />
            <span className="text-sm text-[#8B949E]">Search jobs...</span>
            <Filter className="ml-auto size-4 text-[#111318]" />
          </div>
          <div className="mb-5 flex gap-4 border-b border-black/8 text-sm font-bold">
            {["All", "Ready", "Drafting", "Submitted"].map((tab, index) => (
              <button key={tab} className={`pb-3 ${index === 0 ? "border-b-2 border-[#65D11A] text-[#111318]" : "text-[#6B7280]"}`}>{tab}</button>
            ))}
          </div>
          <div className="space-y-4">
            {queue.map(([company, role, status, location, tone], index) => (
              <article key={company} className={`rounded-2xl border p-4 ${index === 0 ? "border-[#65D11A] bg-white" : "border-black/8 bg-white"}`}>
                <div className="flex items-start gap-4">
                  <div className={`grid size-12 place-items-center rounded-xl text-lg font-black ${tone}`}>{company[0]}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-black text-[#111318]">{role}</h3>
                        <p className="mt-1 text-sm text-[#4B5563]">{company} <ExternalLink className="inline size-3" /></p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${status === "Ready" ? "bg-[#EAF8DD] text-[#3A8E15]" : status === "Submitted" ? "bg-[#E6F4FF] text-[#276EF1]" : "bg-[#FFF0D7] text-[#B56A00]"}`}>{status}</span>
                    </div>
                    <p className="mt-3 text-xs text-[#6B7280]">{location}</p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-lg bg-[#F3F4F6] px-3 py-1 text-xs">Full-time</span>
                      <span className="rounded-lg bg-[#F3F4F6] px-3 py-1 text-xs">Engineering</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Button variant="outline" className="mt-5 w-full rounded-xl border-black/10 bg-white">
            <Plus className="size-4" /> Add Job
          </Button>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="font-black uppercase tracking-wide text-[#111318]">Queue Summary</h2>
          <div className="mt-5 space-y-4 text-sm">
            {[
              ["Total Jobs", "4"],
              ["Ready to Submit", "1"],
              ["In Draft", "2"],
              ["Submitted", "1"],
              ["Avg. Time to Ready", "18m"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between"><span className="text-[#4B5563]">{label}</span><span className="font-black">{value}</span></div>
            ))}
          </div>
        </section>
      </aside>

      <main className="space-y-5">
        <section className="rounded-2xl border border-black/8 bg-white shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="flex flex-col justify-between gap-4 border-b border-black/8 p-5 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black uppercase tracking-wide text-[#111318]">Resume Tailor</h1>
                <span className="rounded-full bg-[#EAF2FF] px-2 py-1 text-xs font-black text-[#276EF1]">Beta</span>
                <span className="text-xs text-[#8B949E]">Autosaved 2m ago</span>
              </div>
              <p className="mt-2 font-black text-[#111318]">Product Engineer at Stripe</p>
            </div>
            <Button variant="outline" className="rounded-xl border-black/10 bg-white">Switch Template</Button>
          </div>
          <div className="flex gap-8 border-b border-black/8 px-5 text-sm font-bold">
            {["Resume Diff", "ATS & Insights", "History"].map((tab, index) => (
              <button key={tab} className={`py-4 ${index === 0 ? "border-b-2 border-[#65D11A] text-[#111318]" : "text-[#6B7280]"}`}>{tab}</button>
            ))}
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] border-b border-black/8 text-center text-sm font-bold">
            <div className="p-4">Original Resume</div>
            <div className="grid size-10 translate-y-3 place-items-center rounded-full border bg-white text-xs">vs.</div>
            <div className="p-4">Tailored Resume <span className="block text-xs font-medium text-[#6B7280]">Optimized for this role</span></div>
          </div>
          <div className="space-y-5 p-5">
            {diffSections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-3 text-sm font-black uppercase tracking-wide text-[#111318]">{section.title}</h2>
                <div className="grid overflow-hidden rounded-xl border border-black/8 md:grid-cols-2">
                  <div className="relative bg-red-50 p-5 text-sm leading-7 text-red-900/80">
                    <p className="line-through decoration-red-800 decoration-2">{section.original}</p>
                    <span className="absolute bottom-3 right-3 rounded bg-red-100 px-2 py-1 text-xs font-black text-red-700">-2</span>
                  </div>
                  <div className="relative bg-[#F3FCEB] p-5 text-sm leading-7 text-[#1F3A17]">
                    <p>{section.tailored}</p>
                    <span className="absolute bottom-3 right-3 rounded bg-[#DDF8CD] px-2 py-1 text-xs font-black text-[#3A8E15]">{section.delta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="mb-5 font-black uppercase tracking-wide text-[#111318]">ATS & Insights</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-black/8 p-5">
              <h3 className="font-black text-[#111318]">ATS Keyword Coverage</h3>
              <div className="mt-5 flex items-center gap-5">
                <div className="grid size-24 place-items-center rounded-full text-xl font-black" style={{ background: "conic-gradient(#62C814 331deg, #E7EDE3 0deg)" }}>
                  <div className="grid size-18 place-items-center rounded-full bg-white">92%</div>
                </div>
                <div>
                  <p className="font-bold text-[#111318]">Great match! Your resume covers most key requirements.</p>
                  <p className="mt-2 text-sm text-[#6B7280]">Matched 46 / 50 keywords</p>
                  <div className="mt-3 h-2 rounded-full bg-[#E7EDE3]"><span className="block h-full w-[92%] rounded-full bg-[#62C814]" /></div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-black/8 p-5">
              <h3 className="font-black text-[#111318]">Tone Consistency</h3>
              <p className="mt-4 font-bold text-[#111318]">Confident & Impactful</p>
              <p className="mt-2 text-sm text-[#6B7280]">Your tone is consistent with high-performing engineers.</p>
              <div className="mt-8 h-2 rounded-full bg-[#E7EDE3]"><span className="block h-full w-[82%] rounded-full bg-[#62C814]" /></div>
              <div className="mt-2 flex justify-between text-xs text-[#8B949E]"><span>Good</span><span>Excellent</span></div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="inline-flex items-center gap-1 rounded-lg bg-[#EAF8DD] px-3 py-1.5 text-xs font-bold text-[#3A8E15]">
                <Check className="size-3" /> {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <aside className="space-y-5">
        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="font-black uppercase tracking-wide text-[#111318]">Job Description Summary</h2>
          <div className="mt-5">
            <h3 className="text-xl font-black text-[#111318]">Product Engineer</h3>
            <p className="mt-1 font-bold text-[#4B5563]">Stripe <ExternalLink className="inline size-3" /></p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
            {[
              ["Location", "San Francisco, CA"],
              ["Type", "Full-time"],
              ["Experience", "3-6 years"],
              ["Posted", "2 days ago"],
            ].map(([label, value]) => (
              <div key={label} className="contents">
                <span className="font-bold text-[#111318]">{label}</span>
                <span className="text-[#4B5563]">{value}</span>
              </div>
            ))}
          </div>
          <h3 className="mt-6 border-t border-black/8 pt-5 font-black uppercase tracking-wide text-[#111318]">Key Responsibilities</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#4B5563]">
            <li>Build and ship high-quality features for developer and payments products.</li>
            <li>Work across the stack to deliver scalable, reliable systems.</li>
            <li>Collaborate with cross-functional teams to solve complex problems.</li>
          </ul>
          <h3 className="mt-6 font-black uppercase tracking-wide text-[#111318]">Required Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "APIs", "System Design", "PostgreSQL", "AWS"].map((skill) => (
              <span key={skill} className="rounded-lg bg-[#F3F4F6] px-3 py-1.5 text-xs font-bold">{skill}</span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="font-black uppercase tracking-wide text-[#111318]">Why you’re a strong match</h2>
          <div className="mt-4 space-y-3">
            {[
              "5+ years building scalable web applications with React & Node.js",
              "Experience with high-scale APIs and distributed systems",
              "Strong track record delivering developer-focused products",
              "Proven impact on performance, reliability, and developer experience",
            ].map((item) => (
              <p key={item} className="flex gap-2 text-sm leading-6 text-[#4B5563]">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#50B91D]" /> {item}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-black uppercase tracking-wide text-[#111318]">Cover Letter Draft</h2>
            <Button variant="outline" size="sm" className="rounded-lg"><Edit3 className="size-3" /> Personalize</Button>
          </div>
          <p className="text-sm leading-6 text-[#4B5563]">Dear Stripe Engineering Team,</p>
          <p className="mt-3 text-sm leading-6 text-[#4B5563]">I’m excited to apply for the Product Engineer role. With 5+ years building scalable developer and payments-related experiences, I’m drawn to Stripe’s mission to increase the GDP of the internet.</p>
        </section>

        <section className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="mb-4 font-black uppercase tracking-wide text-[#111318]">Primary Actions</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full rounded-xl border-black/10 bg-white">Review Changes</Button>
            <Button className="w-full rounded-xl bg-[#62C814] text-white hover:bg-[#50B91D]"><Check className="size-4" /> Approve</Button>
            <Button variant="outline" className="w-full rounded-xl border-black/10 bg-white"><Download className="size-4" /> Export PDF</Button>
            <Button variant="outline" className="w-full rounded-xl border-black/10 bg-white"><FileText className="size-4" /> Add Cover Letter</Button>
            <Button className="w-full rounded-xl bg-[#0D0F12] text-white hover:bg-[#1F2328]"><Send className="size-4" /> Submit Application</Button>
          </div>
          <p className="mt-4 text-center text-xs text-[#8B949E]">Every submission is reviewed by you. You’re in control-always.</p>
        </section>
      </aside>
    </div>
  )
}
