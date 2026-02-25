'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-header-logo-bg rounded-lg opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-header-logo-text leading-none pb-0.5">
              VP
            </span>
          </div>
          <span className="hidden sm:block text-lg font-semibold tracking-tight text-header-name-text">
            Valeria Pusztai-Varga
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative px-3 py-2 text-sm font-medium transition-colors hover:text-header-name-text',
                pathname === item.href ? 'text-header-nav-active' : 'text-header-nav-text'
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-header-nav-active"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="lg:hidden bg-header-button-bg text-header-button-text hover:bg-header-button-hover"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[300px] bg-header-bg border-header-border">
            <SheetHeader>
              <SheetTitle className="text-left text-header-name-text">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-header-logo-bg text-header-logo-text'
                      : 'text-header-nav-text hover:bg-header-button-bg'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
