import * as Sentry from '@sentry/nextjs'
import type { ORPCContext } from './context'

// Store context per request using AsyncLocalStorage pattern
// This is a simple module-level store that gets set per request
let currentContext: Partial<ORPCContext> = {}
let currentPath: string = ''

/**
 * Set the current request context for Sentry
 */
export function setSentryRequestContext(context: Partial<ORPCContext>, path: readonly string[]): void {
  currentContext = context
  currentPath = path.join('.')
}

/**
 * Sentry error handler type
 */
type SentryErrorHandler = (error: unknown) => void

/**
 * Sentry middleware factory for error tracking and distributed tracing
 * Uses oRPC's onError hook
 */
export function createSentryMiddleware(): SentryErrorHandler {
  return (error: unknown): void => {
    // Set user if authenticated
    if (currentContext.user) {
      Sentry.setUser({
        id: currentContext.user.id,
        email: currentContext.user.email,
      })
    } else {
      Sentry.setUser(null)
    }

    // Capture with proper tagging
    Sentry.captureException(error, {
      tags: {
        orpc_path: currentPath,
        orpc_request_id: currentContext.requestId,
        orpc_status: 'error',
      },
    })
  }
}

/**
 * Set Sentry context for the current request
 * Call this from a middleware to enable tracing
 */
export function setSentryContext(context: ORPCContext, path: readonly string[]): void {
  setSentryRequestContext(context, path)

  Sentry.setContext('orpc', {
    requestId: context.requestId,
    path: path.join('.'),
    duration: Date.now() - context.startTime,
  })

  if (context.user) {
    Sentry.setUser({
      id: context.user.id,
      email: context.user.email,
    })
  }
}
