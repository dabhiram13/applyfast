// PROTECTED — APPEND ONLY. Add new sidebar nav items; do not modify existing items or layout structure.
import { createClient } from "@/lib/supabase/server"
import { getAvatarUrl, getEmail, getName, getPlan } from "@/lib/auth/utils"
import { AppSidebar } from "./app-sidebar"

export async function AppSidebarServer() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    return (
      <AppSidebar
        email="alex@example.com"
        name="Alex Rivera"
        avatarUrl=""
        plan="free"
      />
    )
  }

  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const claims = (data?.claims ?? {}) as Record<string, unknown>

  return (
    <AppSidebar
      email={getEmail(claims)}
      name={getName(claims)}
      avatarUrl={getAvatarUrl(claims)}
      plan={getPlan(claims)}
    />
  )
}
