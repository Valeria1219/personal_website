'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show banner only once per session
    const dismissed = sessionStorage.getItem('cookie-banner-dismissed')
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem('cookie-banner-dismissed', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:bottom-5 sm:left-auto sm:right-5 sm:max-w-sm bg-[var(--header-bg)] border-t-2 sm:border-2 border-[var(--header-border)] sm:rounded-lg p-4 shadow-lg z-[1000] animate-slide-in">
      <div className="flex flex-col gap-3 max-w-7xl mx-auto sm:max-w-none">
        <p className="text-sm text-[var(--header-nav-text)] leading-relaxed">
          This site uses PostHog for analytics to improve your experience.{' '}
          <Link 
            href="/privacy" 
            className="text-[var(--header-nav-active)] hover:underline underline-offset-2"
          >
            Learn more
          </Link>
        </p>
        <div className="flex justify-end">
          <button
            onClick={handleDismiss}
            className="px-4 py-2 text-sm bg-[var(--header-button-hover)] text-[var(--header-logo-text)] rounded font-medium hover:opacity-90 transition-opacity"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
