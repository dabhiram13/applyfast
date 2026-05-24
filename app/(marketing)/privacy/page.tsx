import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Applyfast",
  description: "Privacy Policy for Applyfast.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">Applyfast handles sensitive career, résumé, and visa-context data. This starter page is a placeholder and must be reviewed by legal counsel before production launch.</p>
      <section className="mt-10 space-y-4 text-sm leading-7 text-muted-foreground">
        <p>We collect account information, profile preferences, résumé uploads, analyzed jobs, saved applications, and analytics events required to operate the product.</p>
        <p>We do not sell user data. Résumé and visa-related context should remain user-scoped and protected by Supabase RLS before production.</p>
        <p>Replace this placeholder with a full policy before public launch.</p>
      </section>
    </main>
  )
}
