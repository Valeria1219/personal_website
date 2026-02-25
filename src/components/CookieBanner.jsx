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
    <div className="fixed bottom-5 right-5 max-w-80 bg-[var(--header-bg)] border-2 border-[var(--header-border)] rounded p-4 shadow-lg z-[1000] animate-slide-in">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-[var(--header-nav-text)] leading-relaxed">
          This site uses PostHog for analytics to improve your experience.{' '}
          <Link 
            href="/privacy" 
            className="text-[var(--header-nav-active)] hover:underline underline-offset-2"
          >
            Learn more
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 text-sm border border-[var(--header-border)] rounded text-[var(--header-nav-text)] hover:bg-[var(--header-button-bg)] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-1.5 text-sm bg-[var(--header-button-hover)] text-[var(--header-logo-text)] rounded font-medium hover:opacity-90 transition-opacity"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
