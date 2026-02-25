'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Sword, FolderOpen, ScrollText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms for different layers
  // Layer 1 (background) moves slowest, Layer 4 (foreground) moves fastest
  // Castle layer in front of clouds (between Layer 2 and Layer 3)
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const castleY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 450])
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, 600])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Smooth scroll to experience section
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Layer 1 - Background (sky/mountains - furthest back) */}
      <motion.div
        style={{ y: layer1Y }}
        className="absolute inset-0 parallax-layer"
      >
        <Image
          src="/pixel-art/nature_4/1.png"
          alt="Background layer"
          fill
          sizes="100vw"
          className="pixelated object-cover object-center"
          priority
        />
      </motion.div>

      {/* Layer 2 - Mid-background (clouds) */}
      <motion.div
        style={{ y: layer2Y }}
        className="absolute inset-0 parallax-layer"
      >
        <Image
          src="/pixel-art/nature_4/2.png"
          alt="Mid-background layer"
          fill
          sizes="100vw"
          className="pixelated object-cover object-center"
          priority
        />
      </motion.div>

      {/* Castle Layer - In front of clouds */}
      <motion.div
        style={{ y: castleY }}
        className="absolute inset-0 parallax-layer flex items-end justify-center"
      >
        <Image
          src="/pixel-art/castle.png"
          alt="Castle layer"
          width={400}
          height={400}
          sizes="(max-width: 640px) 300px, 400px"
          className="pixelated object-contain object-bottom mb-20"
          priority
        />
      </motion.div>

      {/* Layer 3 - Mid-foreground */}
      <motion.div
        style={{ y: layer3Y }}
        className="absolute inset-0 parallax-layer"
      >
        <Image
          src="/pixel-art/nature_4/3.png"
          alt="Mid-foreground layer"
          fill
          sizes="100vw"
          className="pixelated object-cover object-center"
          priority
        />
      </motion.div>

      {/* Layer 4 - Foreground (closest) */}
      <motion.div
        style={{ y: layer4Y }}
        className="absolute inset-0 parallax-layer"
      >
        <Image
          src="/pixel-art/nature_4/4.png"
          alt="Foreground layer"
          fill
          sizes="100vw"
          className="pixelated object-cover object-center"
          priority
        />
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex flex-col items-center justify-start z-10 pt-32 sm:pt-40"
      >
        <div className="text-center px-6 py-10">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="block text-foreground">Welcome to</span>
            <span className="block text-primary mt-2">My Story</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto mb-8">
            A regular girl's journey from taming wild workflows to discovering the newest tech artifacts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToExperience}
              className="gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              <Sword className="w-5 h-5" />
              <span>Quests</span>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              <Link href="/portfolio">
                <FolderOpen className="w-5 h-5" />
                <span>Side-quests</span>
              </Link>
            </Button>
            <Button
              asChild
              className="gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-lg"
            >
              <Link href="/blog">
                <ScrollText className="w-5 h-5" />
                <span>Chronicle</span>
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  )
}
