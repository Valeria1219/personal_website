import { client, postsQuery, categoriesQuery } from '@/lib/sanity'
import BlogPageContent from './BlogPageContent.jsx'

// Server-side data fetching with no caching for instant updates
async function getBlogData() {
  try {
    const [posts, categories] = await Promise.all([
      client.fetch(postsQuery, {}, { cache: 'no-store' }),
      client.fetch(categoriesQuery, {}, { cache: 'no-store' }),
    ])
    return { posts, categories }
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return { posts: [], categories: [] }
  }
}

export default async function BlogPage() {
  const { posts, categories } = await getBlogData()
  
  return <BlogPageContent initialPosts={posts} initialCategories={categories} />
}
