"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "streaming" | "done" | "error";

export default function TailorPage(): React.ReactElement {
  const [resume, setResume] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setOutput("");
    setErrorMessage("");
    setStatus("streaming");

    try {
      const response = await fetch("/api/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, jobDescription }),
      });

      if (!response.ok) {
        const errorBody = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(errorBody?.error ?? `Request failed with status ${response.status}.`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body to stream.");

      const decoder = new TextDecoder();
      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setOutput(accumulated);
      }
      setStatus("done");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setErrorMessage(message);
      setStatus("error");
    }
  }

  async function handleCopy(): Promise<void> {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  }

  const isStreaming = status === "streaming";
  const canSubmit = resume.trim().length > 50 && jobDescription.trim().length > 50 && !isStreaming;

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
          <Link
            href="https://github.com/dabhiram13/applyfast"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub →
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Tailor your resume</h1>
          <p className="mt-2 text-muted-foreground">
            Paste a job description and your current resume. Get a tailored resume + cover
            letter back in seconds.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Job description</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="job" className="sr-only">
                Job description
              </Label>
              <Textarea
                id="job"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the full job posting here…"
                rows={14}
                className="min-h-[320px] font-mono text-xs"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your resume</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="resume" className="sr-only">
                Your resume
              </Label>
              <Textarea
                id="resume"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="Paste your current resume here (plain text)…"
                rows={14}
                className="min-h-[320px] font-mono text-xs"
              />
            </CardContent>
          </Card>

          <div className="lg:col-span-2 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Uses Vercel AI Gateway → OpenAI gpt-4o-mini by default. Swap models in{" "}
              <code className="rounded bg-muted px-1 py-0.5">app/api/tailor/route.ts</code>.
            </p>
            <Button type="submit" size="lg" disabled={!canSubmit}>
              {isStreaming ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Tailoring…
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  Tailor my resume
                </>
              )}
            </Button>
          </div>
        </form>

        {errorMessage && (
          <div className="mt-8 rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        {output && (
          <Card className="mt-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Tailored output</CardTitle>
              <Button variant="outline" size="sm" onClick={handleCopy} type="button">
                <Copy className="size-3.5" />
                Copy
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-foreground">
                {output}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
