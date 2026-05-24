import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Applyfast",
  description: "Terms of Service for Applyfast.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="text-4xl font-black tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-muted-foreground">This is a starter terms page for Applyfast. Replace with production legal terms before launch.</p>
      <section className="mt-10 space-y-4 text-sm leading-7 text-muted-foreground">
        <p>Applyfast provides job-search analysis and workflow tools. It does not guarantee employment, interviews, visa sponsorship, or immigration outcomes.</p>
        <p>Users are responsible for reviewing all AI-generated analysis, résumé changes, and application materials before use.</p>
        <p>Replace this placeholder with a full policy before public launch.</p>
      </section>
    </main>
  )
}
