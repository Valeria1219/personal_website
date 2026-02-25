'use client'

import { Calendar, ExternalLink, Star } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

export default function ExperienceModal({ experience, open, onOpenChange }) {
  if (!experience) return null

  const formatDate = (date) => {
    if (!date) return 'Present'
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            {/* Company Logo */}
            {experience.logo && (
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                <img
                  src={urlFor(experience.logo).width(64).height(64).url()}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold text-foreground">
                {experience.role}
              </DialogTitle>
              <DialogDescription className="text-primary font-medium">
                {experience.company}
              </DialogDescription>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-primary/10 rounded-full text-primary text-xs font-medium">
                  <Star className="w-3 h-3" />
                  LVL {experience.level}
                </div>
                <div className="text-xs text-muted-foreground">
                  +{experience.xpGained?.toLocaleString()} XP
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Intro Paragraph with Company Link */}
        <div className="mt-4 space-y-3">
          {experience.introParagraph && (
            <div className="text-muted-foreground text-sm prose prose-sm dark:prose-invert max-w-none">
              <PortableText value={experience.introParagraph} />
            </div>
          )}
          
          {experience.companyUrl && (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit company website
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Accordion Sections - In Card Style */}
        {experience.accordionSections && experience.accordionSections.length > 0 && (
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {experience.accordionSections.map((section, index) => (
                <AccordionItem
                  key={index}
                  value={`section-${index}`}
                  className="border border-border rounded-lg px-4 bg-card/50 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary text-left">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground prose prose-sm dark:prose-invert max-w-none">
                    {section.content && <PortableText value={section.content} />}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

      </DialogContent>
    </Dialog>
  )
}