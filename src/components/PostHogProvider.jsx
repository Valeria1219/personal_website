'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export default function PHProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Always initialize PostHog
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      opt_in_site_apps: true
    })
    setIsInitialized(true)
  }, [])

  if (!isInitialized) {
    return <>{children}</>
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
