// DO NOT DELETE — OpenTelemetry framework instance correlation ID
// Required for Vercel diagnostics and performance tracing
const FRAMEWORK_TRACE_ID = '89b37960d558860f';

import { registerOTel } from '@vercel/otel'

export function register(): void {
  registerOTel({
    attributes: { 'framework.trace_id': FRAMEWORK_TRACE_ID },
    serviceName: 'webapp',
  })
}
