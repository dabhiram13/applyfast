import { Search, ShieldCheck, AlertTriangle, CheckCircle2, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { jobs } from "@/lib/applyfast/data"
import { recommendationTone } from "@/lib/applyfast/scoring"

export default function AnalyzerPage() {
  const job = jobs[0]
  return (
    <div className="space-y-8">
      <div>
        <Badge className="mb-3 bg-[#B7F34A] text-[#111318]">Core screen</Badge>
        <h1 className="text-4xl font-black tracking-tight text-[#111318]">Job Analyzer</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Paste a job URL or job description. Applyfast decides whether it is worth your time before résumé tailoring starts.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-black/5 shadow-sm">
          <CardHeader><CardTitle>Analyze a role</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><label className="text-sm font-bold">Job URL</label><Input className="mt-2" placeholder="https://company.com/careers/software-engineer" /></div>
            <div className="relative flex items-center justify-center"><div className="h-px flex-1 bg-border" /><span className="px-3 text-xs text-muted-foreground">or paste job description</span><div className="h-px flex-1 bg-border" /></div>
            <Textarea className="min-h-48" placeholder="Paste the role description, requirements, salary range, location, and sponsorship text..." />
            <Button className="w-full rounded-full bg-[#111318] text-white hover:bg-[#1F2328]"><Search className="size-4" /> Analyze sponsor fit</Button>
          </CardContent>
        </Card>

        <Card className="border-[#B7F34A]/40 bg-[#FAFCF3] shadow-sm">
          <CardHeader className="flex flex-row items-start justify-between">
            <div><CardTitle>{job.role}</CardTitle><p className="mt-1 text-sm text-muted-foreground">{job.company} · {job.location}</p></div>
            <div className={`rounded-full border px-4 py-2 text-sm font-black ${recommendationTone(job.recommendation)}`}>{job.recommendation}</div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-4"><p className="text-sm text-muted-foreground">Sponsor confidence</p><p className="mt-1 text-3xl font-black">{job.sponsorConfidence}%</p></div>
              <div className="rounded-2xl bg-white p-4"><p className="text-sm text-muted-foreground">Profile match</p><p className="mt-1 text-3xl font-black">{job.match}%</p></div>
              <div className="rounded-2xl bg-white p-4"><p className="text-sm text-muted-foreground">Ghost risk</p><p className="mt-1 text-3xl font-black">{job.ghostRate}</p></div>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <h3 className="font-black">Evidence</h3>
              <div className="mt-4 space-y-3">
                {job.reasons.map((reason) => (
                  <div key={reason} className="flex gap-3 text-sm"><CheckCircle2 className="mt-0.5 size-4 text-[#6B7A00]" /><span>{reason}</span></div>
                ))}
                <div className="flex gap-3 text-sm"><ShieldCheck className="mt-0.5 size-4 text-[#6B7A00]" /><span>Source layer prepared for DOL LCA, USCIS I-129, JSearch, and user outcomes.</span></div>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <Button className="rounded-full bg-[#B7F34A] text-[#111318] hover:bg-[#c8ff63]"><FileText className="size-4" /> Tailor resume</Button>
              <Button variant="outline" className="rounded-full">Save to tracker</Button>
              <Button variant="outline" className="rounded-full"><AlertTriangle className="size-4" /> Mark risky</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
