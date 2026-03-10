'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import posthog from 'posthog-js'

const ConsentContext = createContext({
  consent: null,
  acceptConsent: () => {},
  declineConsent: () => {},
  resetConsent: () => {},
  isPostHogInitialized: false
})

export function useConsent() {
  const context = useContext(ConsentContext)
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider')
  }
  return context
}

export default function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(null)
  const [isPostHogInitialized, setIsPostHogInitialized] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialize consent state from localStorage on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent')
    console.log('[ConsentProvider] Initial consent from localStorage:', storedConsent)
    setConsent(storedConsent)
    setMounted(true)
  }, [])

  // Initialize or update PostHog when consent changes
  useEffect(() => {
    if (!mounted) return

    console.log('[ConsentProvider] Consent state changed:', consent)
    console.log('[ConsentProvider] PostHog key exists:', !!process.env.NEXT_PUBLIC_POSTHOG_KEY)
    console.log('[ConsentProvider] PostHog host:', process.env.NEXT_PUBLIC_POSTHOG_HOST)

    if (consent === 'accepted' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      if (!isPostHogInitialized) {
        console.log('[ConsentProvider] Initializing PostHog...')
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
          opt_in_site_apps: true
        })
        setIsPostHogInitialized(true)
        console.log('[ConsentProvider] PostHog initialized successfully')
      }
    } else if (consent === 'declined' && isPostHogInitialized) {
      // If user had previously accepted and now declines, we should opt out
      console.log('[ConsentProvider] User declined - PostHog opt out')
      posthog.opt_out_capturing()
      setIsPostHogInitialized(false)
    } else if (consent === 'accepted' && isPostHogInitialized) {
      // Re-opt in if previously opted out
      console.log('[ConsentProvider] Re-enabling PostHog capture')
      posthog.opt_in_capturing()
    }
  }, [consent, mounted, isPostHogInitialized])

  const acceptConsent = useCallback(() => {
    console.log('[ConsentProvider] User ACCEPTED cookies')
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
  }, [])

  const declineConsent = useCallback(() => {
    console.log('[ConsentProvider] User DECLINED cookies')
    localStorage.setItem('cookie-consent', 'declined')
    setConsent('declined')
  }, [])

  const resetConsent = useCallback(() => {
    console.log('[ConsentProvider] Resetting consent')
    localStorage.removeItem('cookie-consent')
    if (isPostHogInitialized) {
      posthog.opt_out_capturing()
    }
    setConsent(null)
    setIsPostHogInitialized(false)
  }, [isPostHogInitialized])

  const value = {
    consent,
    acceptConsent,
    declineConsent,
    resetConsent,
    isPostHogInitialized
  }

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  )
}
