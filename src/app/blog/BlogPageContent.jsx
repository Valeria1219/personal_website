'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ScrollText, Search as SearchIcon } from 'lucide-react'
import BlogCard from '@/components/blog/BlogCard'
import SearchBar from '@/components/blog/SearchBar'
import TagFilter from '@/components/blog/TagFilter'

export default function BlogPageContent({ initialPosts, initialCategories }) {
  const [posts] = useState(initialPosts || [])
  const [categories] = useState(initialCategories || [])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search filter
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory =
        !selectedCategory ||
        post.categories?.some((cat) => cat._id === selectedCategory)

      return matchesSearch && matchesCategory
    })
  }, [posts, searchQuery, selectedCategory])

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
              <ScrollText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Chronicle</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The <span className="text-primary">Chronicle</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tales and insights from my journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <SearchBar onSearch={setSearchQuery} />
            <TagFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post._id} post={post} index={index} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ScrollText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No posts yet
              </h3>
              <p className="text-muted-foreground">
                Check back soon for new content!
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <SearchIcon className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No posts found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}