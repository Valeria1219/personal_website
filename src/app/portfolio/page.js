import { client, portfolioQuery } from '@/lib/sanity'
import PortfolioPageContent from './PortfolioPageContent.jsx'

// Server-side data fetching with no caching for instant updates
async function getPortfolioData() {
  try {
    const projects = await client.fetch(portfolioQuery, {}, { cache: 'no-store' })
    return { projects }
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    return { projects: [] }
  }
}

export default async function PortfolioPage() {
  const { projects } = await getPortfolioData()
  
  return <PortfolioPageContent initialProjects={projects} />
}
