'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
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
        <div className="flex gap-2 justify-end sm:justify-end">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-[var(--header-border)] rounded text-[var(--header-nav-text)] hover:bg-[var(--header-button-bg)] transition-colors flex-1 sm:flex-none"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-[var(--header-button-hover)] text-[var(--header-logo-text)] rounded font-medium hover:opacity-90 transition-opacity flex-1 sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
