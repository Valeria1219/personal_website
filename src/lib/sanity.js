import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Validate required environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
if (!projectId) {
  throw new Error(
    'VERCEL DEPLOYMENT ERROR: Missing required environment variable "NEXT_PUBLIC_SANITY_PROJECT_ID".\n' +
    'Please add it in your Vercel dashboard: Project Settings → Environment Variables\n' +
    'Your Sanity Project ID can be found at: https://www.sanity.io/manage'
  )
}

export const config = {
  projectId: projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disable CDN for instant updates
}

export const client = createClient(config)

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// GROQ queries for blog posts
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  categories[]->{ _id, title },
  tags,
  publishedAt,
  featured,
  "readTime": round(length(pt::text(content)) / 5 / 180)
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  categories[]->{ _id, title },
  tags,
  publishedAt,
  content,
  "readTime": round(length(pt::text(content)) / 5 / 180)
}`

export const categoriesQuery = `*[_type == "category"] {
  _id,
  title
}`

// GROQ queries for portfolio
export const portfolioQuery = `*[_type == "portfolio"] | order(completedAt desc) {
  _id,
  title,
  slug,
  shortDescription,
  coverImage,
  techStack,
  liveUrl,
  repoUrl,
  featured,
  completedAt
}`

export const portfolioItemQuery = `*[_type == "portfolio" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  caseStudy,
  coverImage,
  screenshots,
  techStack,
  liveUrl,
  repoUrl,
  featured,
  completedAt
}`

// GROQ queries for experience
export const experienceQuery = `*[_type == "experience"] | order(startDate desc) {
  _id,
  company,
  companyUrl,
  role,
  logo,
  description,
  introParagraph,
  accordionSections,
  softSkills,
  tools,
  startDate,
  endDate,
  level,
  xpGained,
  icon
}`
