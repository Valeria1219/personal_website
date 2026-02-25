'use client'

import { useState } from 'react'
import { Calendar, Star, Zap, Shield, Sword, Users, Wrench } from 'lucide-react'
import ExperienceModal from './ExperienceModal'

const iconMap = {
  Star,
  Zap,
  Shield,
  Sword,
}

export default function Experience({ initialExperiences }) {
  const [experiences] = useState(initialExperiences || [])
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalXP = experiences.reduce((acc, exp) => acc + (exp.xpGained || 0), 0)

  const handleViewDetails = (experience) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quest <span className="text-primary">Log</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A chronicle of my professional adventures and the skills acquired along the way
            </p>
            
            {/* Total XP Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Total XP: {totalXP.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const IconName = exp.icon || (iconMap[Object.keys(iconMap)[index % 4]])
                const Icon = typeof IconName === 'string' ? iconMap[IconName] || Star : IconName
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={exp._id || exp.id}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div 
                        onClick={() => handleViewDetails(exp)}
                        className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer"
                      >
                        {/* Level Badge */}
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          LVL {exp.level}
                        </div>

                        {/* XP Gained */}
                        <div className="absolute top-4 right-8 text-xs text-muted-foreground">
                          +{exp.xpGained} XP
                        </div>

                        {/* Content */}
                        <div className="pt-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium mt-1">{exp.company}</p>
                          
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                {' - '}
                                {exp.endDate 
                                  ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                                  : 'Present'
                                }
                              </span>
                            </div>
                          </div>

                          {/* Description - show first block only for Sanity data or string for placeholder */}
                          <p className="mt-4 text-muted-foreground text-sm line-clamp-3">
                            {exp.description && Array.isArray(exp.description) 
                              ? exp.description.map(block => block.children?.map(child => child.text).join('')).join(' ')
                              : typeof exp.description === 'string' ? exp.description : ''
                            }
                          </p>

                          {/* Soft Skills */}
                          {exp.softSkills?.length > 0 && (
                            <div className="mt-4">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                Soft Skills:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {exp.softSkills.slice(0, 4).map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                                  >
                                    {skill}
                                  </span>
                                ))}
                                {exp.softSkills.length > 4 && (
                                  <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20">
                                    +{exp.softSkills.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Tools & Technologies */}
                          {exp.tools?.length > 0 && (
                            <div className="mt-4">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                                <Wrench className="w-3 h-3" />
                                Tools & Technologies:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {exp.tools.slice(0, 4).map((tool) => (
                                  <span
                                    key={tool}
                                    className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                                  >
                                    {tool}
                                  </span>
                                ))}
                                {exp.tools.length > 4 && (
                                  <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                                    +{exp.tools.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  )
}
