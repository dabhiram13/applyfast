import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-4xl font-black tracking-tight text-[#111318]">Settings</h1><p className="mt-2 text-muted-foreground">Service configuration placeholders for Supabase, Resend, Inngest, PostHog, Sentry, JSearch, and AI Gateway.</p></div>
      <Card className="border-black/5 shadow-sm"><CardHeader><CardTitle>Integration readiness</CardTitle></CardHeader><CardContent className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{['Supabase Auth + DB', 'Supabase Storage', 'Resend emails', 'Inngest jobs', 'PostHog analytics', 'Sentry errors', 'JSearch jobs', 'Vercel AI Gateway', 'Stripe later'].map((item) => <div key={item} className="flex items-center justify-between rounded-2xl border p-4"><span className="font-medium">{item}</span><Badge variant="outline">Planned</Badge></div>)}</CardContent></Card>
    </div>
  )
}
