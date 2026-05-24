import { createClient } from "@/lib/supabase/server"
import { getPlan } from "@/lib/auth/utils"
import { PlanProvider } from "@/features/_shared/providers/plan-provider"

export async function PlanProviderServer({
  children,
}: {
  children: React.ReactNode
}) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    return <PlanProvider plan="free">{children}</PlanProvider>
  }

  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const claims = (data?.claims ?? {}) as Record<string, unknown>
  const plan = getPlan(claims)

  return <PlanProvider plan={plan}>{children}</PlanProvider>
}
