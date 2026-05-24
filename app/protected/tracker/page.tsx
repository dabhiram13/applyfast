import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Send,
  Star,
} from "lucide-react"
import type { ElementType } from "react"
import { Button } from "@/components/ui/button"
import { applications } from "@/lib/applyfast/data"

const stages = [
  { title: "Saved", count: 4, color: "border-t-[#D8DDE5]" },
  { title: "Tailoring", count: 2, color: "border-t-[#8B5CF6]" },
  { title: "Applied", count: 6, color: "border-t-[#4FC313]" },
  { title: "Under Review", count: 4, color: "border-t-[#3B82F6]" },
  { title: "Interview", count: 3, color: "border-t-[#F59E0B]" },
  { title: "Offer", count: 1, color: "border-t-[#22C55E]" },
  { title: "Rejected", count: 4, color: "border-t-[#EF4444]" },
]

const inbox = [
  ["Google Recruiting Team", "Interview update - Software Engineer", "10:42 AM", "G"],
  ["Microsoft Careers", "Invitation: Onsite Interview", "9:18 AM", "▦"],
  ["NVIDIA Recruiting", "Follow-up on Data Scientist application", "Yesterday", "N"],
  ["Netflix Talent Acquisition", "Next steps for Backend Engineer", "May 19", "N"],
  ["Airbnb Recruiting", "Application update", "May 18", "A"],
  ["Spotify Recruiting", "Phone screen feedback", "May 17", "S"],
]

function statCard(label: string, value: string, icon: ElementType, color: string) {
  const Icon = icon
  return (
    <div className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
      <div className="flex items-center gap-4">
        <div className={`grid size-12 place-items-center rounded-xl ${color}`}><Icon className="size-5" /></div>
        <div>
          <p className="text-sm text-[#6B7280]">{label}</p>
          <p className="mt-1 text-2xl font-black text-[#111318]">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-xs font-bold text-[#22A313]">↑ 18% vs Apr</p>
    </div>
  )
}

export default function TrackerPage() {
  return (
    <div className="mx-auto max-w-[1500px] space-y-7">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#111318]">Application Tracker</h1>
          <p className="mt-1 text-sm text-[#6B7280]">Track every application and conversation in one place.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-xl border-black/10 bg-white"><Download className="size-4" /> Export</Button>
          <Button className="rounded-xl bg-[#0D0F12] text-white hover:bg-[#1F2328]"><Plus className="size-4" /> Add Application</Button>
        </div>
      </div>

      <div className="flex items-center gap-7 border-b border-black/8">
        <button className="border-b-2 border-[#62C814] pb-4 text-sm font-black text-[#111318]">Tracker</button>
        <button className="pb-4 text-sm font-bold text-[#6B7280]">Inbox <span className="ml-2 rounded-full bg-[#EEF1EC] px-2 py-1 text-xs">12</span></button>
        <button className="ml-auto mb-3 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-bold text-[#4B5563]">May 1 - May 31, 2025</button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {statCard("Response Rate", "42%", MessageSquare, "bg-[#F4FCEB] text-[#46A80E]")}
        {statCard("Ghost Rate Saved", "23", Bell, "bg-[#F4EDFF] text-[#8B5CF6]")}
        {statCard("Follow-ups Sent", "17", Send, "bg-[#F3F4F6] text-[#111318]")}
        {statCard("Upcoming Interviews", "3", CalendarDays, "bg-[#EAF2FF] text-[#276EF1]")}
        {statCard("Offers", "1", BriefcaseBusiness, "bg-[#F3F4F6] text-[#111318]")}
        {statCard("Applications", "24", FileText, "bg-[#EAF2FF] text-[#276EF1]")}
      </div>

      <section className="grid gap-4 xl:grid-cols-7">
        {stages.map((stage) => (
          <div key={stage.title} className={`min-h-[520px] rounded-2xl border border-black/8 border-t-2 ${stage.color} bg-white/80 p-3 shadow-[0_12px_30px_rgba(13,15,18,0.04)]`}>
            <div className="mb-4 flex items-center justify-between px-1">
              <h2 className="text-sm font-black uppercase tracking-wide text-[#111318]">{stage.title}</h2>
              <span className="font-black text-[#111318]">{stage.count}</span>
            </div>
            <div className="space-y-3">
              {applications
                .filter((app) => app.status === stage.title)
                .concat(stage.title === "Saved" ? [
                  { company: "Snowflake", role: "Software Engineer", status: "Saved", date: "Added 2 days ago", confidence: 84 },
                  { company: "OpenAI", role: "ML Engineer", status: "Saved", date: "Added 1 week ago", confidence: 72 },
                ] : [])
                .concat(stage.title === "Applied" ? [
                  { company: "Meta", role: "Data Engineer", status: "Applied", date: "Applied 5 days ago", confidence: 78 },
                  { company: "Spotify", role: "Software Engineer", status: "Applied", date: "Applied 1 week ago", confidence: 88 },
                  { company: "Airbnb", role: "Backend Engineer", status: "Applied", date: "Applied 1 week ago", confidence: 82 },
                ] : [])
                .concat(stage.title === "Rejected" ? [
                  { company: "Salesforce", role: "Software Engineer", status: "Rejected", date: "3 weeks ago", confidence: 42 },
                  { company: "Cisco", role: "DevOps Engineer", status: "Rejected", date: "1 month ago", confidence: 38 },
                  { company: "Oracle", role: "Software Engineer", status: "Rejected", date: "1 month ago", confidence: 45 },
                ] : [])
                .map((app) => (
                  <article key={`${stage.title}-${app.company}-${app.role}`} className="rounded-xl border border-black/8 bg-white p-4 shadow-sm">
                    <p className="font-black text-[#111318]">{app.company}</p>
                    <p className="mt-1 text-sm text-[#4B5563]">{app.role}</p>
                    <p className="mt-2 text-xs text-[#6B7280]">{app.date}</p>
                    {["Applied", "Under Review", "Interview", "Offer", "Rejected", "Tailoring"].includes(stage.title) ? (
                      <span className={`mt-3 inline-flex rounded-full px-2 py-1 text-[11px] font-black ${stage.title === "Rejected" ? "bg-red-50 text-red-700" : stage.title === "Interview" ? "bg-amber-50 text-amber-700" : "bg-[#EAF8DD] text-[#3A8E15]"}`}>
                        {stage.title === "Tailoring" ? "Resume tailoring" : stage.title}
                      </span>
                    ) : null}
                  </article>
                ))}
            </div>
            <button className="mt-4 flex items-center gap-2 px-2 text-sm font-bold text-[#6B7280]">
              <Plus className="size-4" /> Add Application
            </button>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[330px_1fr_310px]">
        <aside className="rounded-2xl border border-black/8 bg-white shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="border-b border-black/8 p-4">
            <h2 className="font-black text-[#111318]">Inbox <span className="ml-2 rounded-full bg-[#EEF1EC] px-2 py-1 text-xs">12</span></h2>
            <div className="mt-4 flex gap-2">
              {["All Accounts", "All Status", "Newest"].map((filter) => (
                <button key={filter} className="rounded-lg border border-black/8 px-3 py-2 text-xs font-bold text-[#4B5563]">{filter}</button>
              ))}
            </div>
          </div>
          <div className="divide-y divide-black/8">
            {inbox.map(([sender, subject, time, logo], index) => (
              <div key={sender} className={`flex gap-3 p-4 ${index === 0 ? "border-l-2 border-[#62C814] bg-[#F8FCF2]" : ""}`}>
                <div className="grid size-10 place-items-center rounded-xl bg-[#F3F4F6] font-black text-[#111318]">{logo}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-2">
                    <p className="truncate font-bold text-[#111318]">{sender}</p>
                    <span className="text-xs text-[#8B949E]">{time}</span>
                  </div>
                  <p className="truncate text-sm text-[#4B5563]">{subject}</p>
                  <p className="truncate text-xs text-[#8B949E]">Hi Alex, thanks again for speaking with...</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="rounded-2xl border border-black/8 bg-white shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <div className="flex items-center justify-between border-b border-black/8 p-5">
            <div>
              <h2 className="font-black text-[#111318]">Google Recruiting Team</h2>
              <p className="text-sm text-[#6B7280]">Interview update - Software Engineer</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#EAF8DD] px-3 py-1 text-xs font-black text-[#3A8E15]">Interview Scheduled</span>
              <Button variant="outline" size="icon" className="size-9 rounded-xl border-black/10 bg-white"><MoreHorizontal className="size-4" /></Button>
              <Button variant="outline" size="icon" className="size-9 rounded-xl border-black/10 bg-white"><Star className="size-4" /></Button>
            </div>
          </div>
          <div className="space-y-4 p-5">
            <div className="rounded-xl border border-black/8 bg-white p-5">
              <p className="text-sm text-[#6B7280]">Sophia Kim · Recruiter at Google <span className="float-right">10:42 AM</span></p>
              <p className="mt-4 text-sm leading-6 text-[#4B5563]">Hi Alex, thanks again for speaking with our team. We’d like to move forward with the next round. Please choose a time that works best for you for the onsite interview.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Excited to continue!", "Here are my availabilities", "Thank you!"].map((reply) => (
                  <button key={reply} className="rounded-lg border border-black/8 px-3 py-2 text-xs font-bold text-[#4B5563]">{reply}</button>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[#D9EEC6] bg-[#F6FCEB] p-5">
              <p className="text-sm text-[#6B7280]">Alex Rivera · To Sophia Kim <span className="float-right">10:48 AM</span></p>
              <p className="mt-4 text-sm leading-6 text-[#4B5563]">Hi Sophia, that’s great news. I’m excited to continue in the process. I’m available on May 29 or May 30. Please let me know what works best.</p>
            </div>
            <div className="rounded-xl border border-black/8 bg-white p-5">
              <p className="text-sm text-[#6B7280]">Sophia Kim · Recruiter at Google <span className="float-right">11:02 AM</span></p>
              <p className="mt-4 text-sm leading-6 text-[#4B5563]">Perfect. Let’s plan for Thursday, May 29 at 10:00 AM PT. You’ll receive a calendar invite shortly with all the details.</p>
              <div className="mt-5 flex items-center gap-4 rounded-xl border border-black/8 p-4">
                <CalendarDays className="size-8 text-[#8B5CF6]" />
                <div>
                  <p className="font-black text-[#111318]">Onsite Interview</p>
                  <p className="text-sm text-[#6B7280]">Thu, May 29, 2025 · 10:00 AM PT</p>
                </div>
                <Button variant="outline" className="ml-auto rounded-xl border-black/10 bg-white">Add to Calendar</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-black/8 p-4">
            <div className="flex items-center gap-3 rounded-xl border border-black/8 px-4 py-3">
              <span className="flex-1 text-sm text-[#8B949E]">Write a reply...</span>
              <Paperclip className="size-4 text-[#6B7280]" />
              <Send className="size-4 text-[#111318]" />
            </div>
          </div>
        </main>

        <aside className="space-y-5 rounded-2xl border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(13,15,18,0.04)]">
          <h2 className="font-black text-[#111318]">About this application</h2>
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-xl bg-white shadow font-black">G</div>
            <div>
              <p className="font-black text-[#111318]">Google</p>
              <p className="text-sm text-[#6B7280]">Software Engineer</p>
            </div>
          </div>
          <span className="inline-flex rounded-full bg-[#EAF8DD] px-3 py-1 text-xs font-black text-[#3A8E15]">Interview Scheduled</span>
          <div>
            <h3 className="mb-3 font-black text-[#111318]">Conversation summary</h3>
            {["Initial outreach on May 8", "Phone screen on May 15", "Positive feedback received", "Onsite interview scheduled"].map((item) => (
              <p key={item} className="mb-2 text-sm text-[#4B5563]">✓ {item}</p>
            ))}
          </div>
          <div>
            <h3 className="mb-3 font-black text-[#111318]">Smart tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Interview Scheduled", "Replied in 5 days", "Sponsor-Friendly", "High Priority"].map((tag) => (
                <span key={tag} className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-black text-[#111318]">Upcoming & reminders</h3>
            {["Onsite Interview", "Follow up with recruiter", "Check status"].map((item) => (
              <div key={item} className="mb-3 rounded-xl border border-black/8 p-3">
                <p className="font-bold text-[#111318]">{item}</p>
                <p className="text-xs text-[#6B7280]">Google · 10:00 AM PT</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full rounded-xl border-black/10 bg-white">
            View full calendar <ArrowRight className="size-4" />
          </Button>
        </aside>
      </section>
    </div>
  )
}
