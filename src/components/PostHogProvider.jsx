'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export default function PHProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    const isDev = process.env.NODE_ENV === 'development'
    
    // Initialize if consent is accepted OR in development mode
    if (consent === 'accepted' || isDev) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        opt_in_site_apps: true
      })
      setIsInitialized(true)
    } else if (consent === 'declined' && posthog.__loaded) {
      posthog.opt_out_capturing()
    }
    
    // Handle consent changes via custom event (storage event only fires across tabs)
    const handleConsentChange = (e) => {
      if (e.detail?.consent === 'accepted') {
        if (!posthog.__loaded) {
          posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            opt_in_site_apps: true
          })
        }
        posthog.opt_in_capturing()
        setIsInitialized(true)
      } else if (e.detail?.consent === 'declined' && posthog.__loaded) {
        posthog.opt_out_capturing()
      }
    }
    
    window.addEventListener('cookie-consent-change', handleConsentChange)
    return () => window.removeEventListener('cookie-consent-change', handleConsentChange)
  }, [])

  // Only wrap with PostHogProvider if initialized, otherwise just render children
  if (!isInitialized) {
    return <>{children}</>
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
