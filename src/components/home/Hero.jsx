'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Sword, FolderOpen, ScrollText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Smooth scroll to experience section
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(10px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/pixel-art/20260301_2003_Image Generation_remix_01kjncfs5sek4t15ec08ek7v4a copy.png"
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={90}
          />
        </motion.div>
      </div>

      {/* Content Layer - Responsive layout */}
      <div className="absolute inset-0 flex flex-col z-20 px-4 sm:px-12 lg:px-20 pt-24 sm:pt-0">
        {/* Title & Subtitle - Top on mobile, right on desktop */}
        <motion.div
          className="flex flex-col items-center sm:items-end justify-start sm:justify-center sm:flex-1 sm:text-right text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="max-w-xl">
            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              variants={textVariants}
            >
              <span className="block text-background drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Welcome to</span>
              <motion.span
                className="block text-orange-200 mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                variants={textVariants}
              >
                My Story
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-xl text-background max-w-md sm:max-w-xl mx-auto sm:mx-0 sm:ml-auto mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              variants={textVariants}
            >
              A regular girl's journey from taming wild workflows to discovering the newest tech artifacts.
            </motion.p>
          </div>
        </motion.div>

        {/* Buttons - Bottom on mobile, left on desktop */}
        <motion.div
          className="flex flex-col items-center justify-start sm:justify-center sm:items-start pb-0 sm:pb-0 sm:absolute sm:inset-0 sm:px-6 sm:px-12 lg:px-20 pt-4 sm:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-xs sm:max-w-none sm:w-48 sm:pt-0">
            <motion.div variants={buttonVariants}>
              <Button
                onClick={scrollToExperience}
                className="gap-2 px-6 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg w-full justify-center text-sm sm:text-base"
              >
                <Sword className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Quests</span>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                asChild
                variant="secondary"
                className="gap-2 px-6 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg w-full justify-center text-sm sm:text-base"
              >
                <Link href="/portfolio">
                  <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Side-quests</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                asChild
                className="gap-2 px-6 py-4 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-lg w-full justify-center text-sm sm:text-base"
              >
                <Link href="/blog">
                  <ScrollText className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Chronicle</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  )
}
