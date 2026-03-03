'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PortfolioCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/portfolio/${project.slug?.current || project.slug}`}>
        <Card className="relative h-full rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
          {/* Cover Image */}
          <div className="relative h-56 overflow-hidden">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/30">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            
            {/* Quick Links Overlay */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                  }}
                  className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="View live site"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
              {project.repoUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    window.open(project.repoUrl, '_blank', 'noopener,noreferrer')
                  }}
                  className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="View repository"
                >
                  <Github className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {project.shortDescription}
            </p>

            {/* Tech Stack */}
            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </div>
            )}

            {/* View Case Study */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary group/link">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </CardContent>

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-xl glow-box opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
        </Card>
      </Link>
    </motion.article>
  )
}
