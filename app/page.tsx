import Link from "next/link";
import { ArrowRight, Github, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="size-4" />
            </div>
            <span className="font-semibold tracking-tight">applyfast</span>
          </div>
          <Link
            href="https://github.com/dabhiram13/applyfast"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <Github className="size-4" />
            GitHub
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-16 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Open source · Fork it · Add 1 API key · Ship it
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Tailor your resume to any job{" "}
          <span className="text-primary">in 10 seconds</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          Paste a job description. Paste your resume. Get a tailored, ATS-friendly resume + a
          custom cover letter back — instantly streamed from any LLM you want.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/tailor">
              <Sparkles className="size-4" />
              Try the demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href="https://github.com/dabhiram13/applyfast"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
              Fork on GitHub
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-24 sm:grid-cols-3">
        <FeatureCard
          title="One API key"
          body="Add AI_GATEWAY_API_KEY and you're done. Swap providers (OpenAI, Anthropic, Google, etc.) by changing one string."
        />
        <FeatureCard
          title="Zero database"
          body="No Supabase, no Postgres, no auth setup. Pure stateless API + streaming UI. Add persistence later if you want."
        />
        <FeatureCard
          title="Fork-and-ship"
          body="Next.js 16 + Tailwind v4 + shadcn + AI SDK v6. Ship to Vercel in one click. Built for solo devs and indie hackers."
        />
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>Built with Claude Code · MIT licensed</p>
          <Link
            href="https://github.com/dabhiram13/applyfast"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            github.com/dabhiram13/applyfast
          </Link>
        </div>
      </footer>
    </main>
  );
}

interface FeatureCardProps {
  title: string;
  body: string;
}

function FeatureCard({ title, body }: FeatureCardProps): React.ReactElement {
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-6">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
