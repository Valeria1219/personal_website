'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Valeria1219', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/valéria-pusztai-varga-7b7312288', icon: Linkedin },
  { name: 'Email', href: 'mailto:valeria.varga.erzsebet@gmail.com', icon: Mail },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-header-border bg-header-bg pb-20 sm:pb-6">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-header-button-bg text-header-button-text hover:bg-header-logo-bg hover:text-header-logo-text transition-all duration-200 hover:scale-110"
                  aria-label={item.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-header-nav-text">
              © {currentYear} Valeria Pusztai-Varga. Crafted with ❤️ and a touch of fantasy
            </p>
            <a 
              href="/privacy" 
              className="text-xs text-header-nav-text hover:underline hover:text-header-logo-text"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
