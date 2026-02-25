'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { urlFor } from '@/lib/sanity'

export default function BlogCard({ post, index }) {
  // Convert Sanity image object to URL
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage).width(600).height(300).url() : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug?.current || post.slug}`}>
        <Card className="relative h-full rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
          {/* Cover Image */}
          {coverImageUrl && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={coverImageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <CardContent className="p-6">
            {/* Category */}
            {post.categories?.length > 0 && (
              <div className="mb-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {post.categories[0].title}
                </Badge>
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>
          </CardContent>

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-xl glow-box opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
        </Card>
      </Link>
    </motion.article>
  )
}
