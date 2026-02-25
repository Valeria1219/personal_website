'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, FolderOpen } from 'lucide-react'
import PortfolioCard from '@/components/portfolio/PortfolioCard'

export default function PortfolioPageContent({ initialProjects }) {
  const [projects] = useState(initialProjects || [])

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Side-quests</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Side-quests</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mini-adventures and projects completed along the main journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Empty State */}
      {projects.length === 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <Trophy className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No projects yet
            </h3>
            <p className="text-muted-foreground">
              Check back soon for new projects!
            </p>
          </motion.div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8"
            >
              <Trophy className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <PortfolioCard key={project._id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8"
            >
              <FolderOpen className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Other Projects</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <PortfolioCard key={project._id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}