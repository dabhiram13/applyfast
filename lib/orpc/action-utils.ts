/**
 * oRPC Action Utilities — Non-server-action helpers
 *
 * These are NOT server actions. They're utility functions used BY server action files.
 * Kept separate because every export from a 'use server' file must be async.
 */

import { updateTag } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { ORPCContext, ORPCUser } from './context'

/**
 * Build the oRPC context for server actions.
 * Reads cookies (works in server action context) and resolves the user.
 */
export async function buildActionContext(): Promise<ORPCContext> {
  const supabase = await createClient()
  const { data: claimsData } = await supabase.auth.getClaims()
  const claims = claimsData?.claims
  const sub = claims?.sub as string | undefined
  const email = claims?.email as string | undefined
  const plan = typeof claims?.plan === 'string' ? claims.plan : 'free'

  let user: ORPCUser | undefined
  if (sub) {
    user = { id: sub, email, role: 'user', plan }
  }

  return {
    requestId: crypto.randomUUID(),
    startTime: Date.now(),
    user,
    supabase,
  }
}

/**
 * Create a typed interceptor that invalidates cache tags after successful mutation.
 * The generic ensures type compatibility with any procedure output.
 *
 * Usage: procedure.actionable({ interceptors: [cacheInvalidator<OutputType>('profile')] })
 */
export function cacheInvalidator<T>(...tags: string[]) {
  return async (options: { next: () => Promise<T> }): Promise<T> => {
    const result = await options.next()
    for (const tag of tags) {
      updateTag(tag)
    }
    return result
  }
}
