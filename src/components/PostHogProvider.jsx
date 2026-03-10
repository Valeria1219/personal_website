'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useConsent } from './ConsentProvider'

export default function PostHogProvider({ children }) {
  const { isPostHogInitialized } = useConsent()

  // Only wrap with PostHogProvider if initialized
  if (typeof window !== 'undefined' && isPostHogInitialized && posthog.__loaded) {
    return <PHProvider client={posthog}>{children}</PHProvider>
  }

  return <>{children}</>
}
