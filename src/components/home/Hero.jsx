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
    // Trigger ink bleed animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
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
        staggerChildren: 0.15,
        delayChildren: 0.5,
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
      {/* Ink Bleed SVG Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="ink-bleed-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="4"
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="ink-mask">
            <rect width="100%" height="100%" fill="white" />
            <circle
              cx="50%"
              cy="50%"
              r="0%"
              fill="black"
              className={`transition-all duration-[2000ms] ease-out ${
                isLoaded ? '[r:150%]' : '[r:0%]'
              }`}
            />
          </mask>
        </defs>
      </svg>

      {/* Hero Background Image with Ink Bleed */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.1,
          }}
          transition={{ 
            duration: 2, 
            ease: [0.25, 0.1, 0.25, 1],
          }}
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
        
        {/* Ink Bleed Overlay Effect */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-background"
          style={{
            maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          }}
        />
      </div>

      {/* Content Layer - Title & Subtitle on right */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-end justify-center z-20 px-6 sm:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="text-right max-w-xl -mt-20">
          {/* Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg"
            variants={textVariants}
          >
            <span className="block text-background">Welcome to</span>
            <motion.span 
              className="block text-primary mt-2 drop-shadow-lg"
              variants={textVariants}
            >
              My Story
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-background max-w-xl ml-auto mb-8 drop-shadow-md"
            variants={textVariants}
          >
            A regular girl's journey from taming wild workflows to discovering the newest tech artifacts.
          </motion.p>
        </div>
      </motion.div>

      {/* Buttons Layer - Left side */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-start justify-center z-20 px-6 sm:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex flex-col gap-8 w-48 sm:w-56">
          <motion.div variants={buttonVariants}>
            <Button
              onClick={scrollToExperience}
              className="gap-2 px-6 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg w-full justify-center"
            >
              <Sword className="w-5 h-5" />
              <span>Quests</span>
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button
              asChild
              variant="secondary"
              className="gap-2 px-6 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg w-full justify-center"
            >
              <Link href="/portfolio">
                <FolderOpen className="w-5 h-5" />
                <span>Side-quests</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button
              asChild
              className="gap-2 px-6 py-4 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-lg w-full justify-center"
            >
              <Link href="/blog">
                <ScrollText className="w-5 h-5" />
                <span>Chronicle</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  )
}
