'use client'

import { useState, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function SearchBar({ onSearch, initialValue = '' }) {
  const [value, setValue] = useState(initialValue)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value
      setValue(newValue)
      onSearch?.(newValue)
    },
    [onSearch]
  )

  const handleClear = useCallback(() => {
    setValue('')
    onSearch?.('')
  }, [onSearch])

  return (
    <div className="relative w-full max-w-md">
      <div
        className={cn(
          "relative flex items-center rounded-xl bg-card border transition-all duration-200",
          isFocused
            ? "border-primary ring-2 ring-primary/20"
            : "border-border"
        )}
      >
        <Search className="absolute left-4 w-5 h-5 text-muted-foreground z-10" />
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search posts..."
          className="w-full py-3 pl-12 pr-10 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="absolute right-4 p-1 rounded-full hover:bg-secondary transition-colors z-10"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
