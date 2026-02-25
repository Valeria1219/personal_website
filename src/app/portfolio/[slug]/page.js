import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, ExternalLink, Github, Folder } from 'lucide-react'
import { client, portfolioItemQuery, portfolioQuery } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export async function generateStaticParams() {
  const projects = await client.fetch(portfolioQuery)
  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

export async function generateMetadata({ params }) {
  const project = await client.fetch(portfolioItemQuery, { slug: params.slug })
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.shortDescription,
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

export default async function PortfolioItemPage({ params }) {
  const project = await client.fetch(portfolioItemQuery, { slug: params.slug })

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          {/* Featured Badge */}
          {project.featured && (
            <div className="mb-4">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                ⭐ Featured Project
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6">
            {project.shortDescription}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {project.completedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  Completed: {new Date(project.completedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          {project.techStack?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <img
              src={urlFor(project.coverImage).width(1200).height(630).url()}
              alt={project.title}
              className="w-full rounded-xl border border-border"
            />
          </div>
        </section>
      )}

      {/* Case Study Content */}
      {project.caseStudy && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText value={project.caseStudy} components={portableTextComponents} />
            </div>
          </div>
        </section>
      )}

      {/* Screenshots */}
      {project.screenshots?.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Folder className="w-5 h-5 text-primary" />
              Screenshots
            </h2>
            <div className="grid gap-6">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={urlFor(screenshot).width(1200).url()}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-xl border border-border"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
