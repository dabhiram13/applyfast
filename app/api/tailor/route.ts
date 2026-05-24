import { streamText } from "ai";
import { z } from "zod";

export const maxDuration = 60;

const tailorRequestSchema = z.object({
  resume: z.string().min(50, "Resume is too short.").max(20000, "Resume is too long."),
  jobDescription: z
    .string()
    .min(50, "Job description is too short.")
    .max(15000, "Job description is too long."),
  model: z.string().optional(),
});

const SYSTEM_PROMPT = `You are an expert technical recruiter and career coach.
Given a candidate's resume and a target job description, you produce:

1. A tailored, ATS-friendly version of the resume that mirrors the job's required keywords
   without inventing experience the candidate doesn't have.
2. A concise, specific cover letter (max 250 words) that connects the candidate's real
   experience to the job's stated needs.

Rules:
- Never invent skills, titles, employers, dates, or accomplishments. Only re-frame what's there.
- Quantify impact where the resume already provides numbers; do not fabricate metrics.
- Match the job's tone (technical, executive, creative) without being sycophantic.
- Output in clean Markdown with EXACTLY two top-level sections:
  ## Tailored Resume
  ## Cover Letter
- Inside the resume section, preserve common resume structure (Summary, Experience, Skills, Education).`;

export async function POST(req: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = tailorRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid request." },
      { status: 400 },
    );
  }

  if (!process.env.AI_GATEWAY_API_KEY) {
    return Response.json(
      {
        error:
          "AI_GATEWAY_API_KEY is not set. Get a key at https://vercel.com/ai-gateway and add it to your .env.local.",
      },
      { status: 500 },
    );
  }

  const { resume, jobDescription, model } = parsed.data;

  const result = streamText({
    model: model ?? "openai/gpt-4o-mini",
    system: SYSTEM_PROMPT,
    prompt: `# Job Description\n\n${jobDescription}\n\n# Candidate Resume\n\n${resume}\n\nReturn the tailored resume + cover letter now.`,
  });

  return result.toTextStreamResponse();
}
