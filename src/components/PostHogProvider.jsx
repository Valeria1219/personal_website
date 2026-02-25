'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export default function PHProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check for cookie consent before initializing PostHog
    const consent = localStorage.getItem('cookie-consent')
    
    if (consent === 'accepted' && typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        opt_in_site_apps: true
      })
      setIsInitialized(true)
    } else if (consent === 'declined') {
      // If declined, ensure PostHog is not tracking
      if (typeof window !== 'undefined' && posthog.__loaded) {
        posthog.opt_out_capturing()
      }
    }
    
    // Listen for storage changes (in case consent changes in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'cookie-consent') {
        if (e.newValue === 'accepted' && typeof window !== 'undefined') {
          posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            opt_in_site_apps: true
          })
          posthog.opt_in_capturing()
          setIsInitialized(true)
        } else if (e.newValue === 'declined' && posthog.__loaded) {
          posthog.opt_out_capturing()
        }
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return <PostHogProvider client={isInitialized ? posthog : null}>{children}</PostHogProvider>
}
