'use client'

import { motion } from 'framer-motion'
import { ActivityIcon, CodeIcon, CogIcon, Sparkles, Terminal } from 'lucide-react'

const skills = [
  { name: 'Workflow Architecture', level: 85, icon: CogIcon },
  { name: 'AI Logic and Theory', level: 80, icon: ActivityIcon },
  { name: 'Scripting', level: 75, icon: CodeIcon },
  { name: 'Advanced Problem Solving', level: 95, icon: Sparkles },
]

const inProgressSkills = [
  { name: 'Python', level: 60, icon: CodeIcon },
  { name: 'Workflow Automation', level: 70, icon: Terminal },
  { name: 'AI Engineering', level: 65, icon: ActivityIcon },
]

const stats = [
  { label: 'Years experience', value: '3+' },
  { label: 'Average CSAT', value: '90%' },
  { label: 'Processes mastered', value: '100+' },
  { label: 'Problems banished', value: '∞' },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const slideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const progressVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About the <span className="text-primary">Adventurer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every hero has an origin story. Here's mine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Info */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Character Card */}
            <motion.div 
              className="relative p-6 rounded-xl bg-card border border-border"
              variants={slideInLeftVariants}
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Level 5 Solution Witch
              </div>
              
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Valeria Pusztai-Varga
                </h3>
                <p className="text-muted-foreground mb-4">
                  Customer OPS Specialist & Tech Enthusiast
                </p>
                
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-muted-foreground">
                    Welcome, adventurer! You've stumbled upon a rare waypoint: Based in a small village in Hungary, at a place that is truly out of a storybook, is where our scene takes place. The hero spends half of her day navigating the country-side life, and the other exploring the tech-world. 
                    Trying to be a girl who has automated her life in a village to be as efficient as a Silicon Valley startup, so she has more time to spend in the garden in overalls and boots.
                    My life is a blend between a sci-fi movie with self-hosted tools, AI agents and trying to keep the traditions of our grandparents alive, while fighting the slugs eating my tomatoes. 

                  </p>
                  <p className="text-muted-foreground mt-4">
                    Here, I'm exploring how to live in harmony with the digital world through curated tech; tools that make life more peaceful, not faster, intentional remote work; the reality of building a global career from a quiet home base,
                    and a human side; keeping things weird and magical because for me, technology is the magic that brings our human stories to life.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-lg bg-secondary text-center"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-6"
              variants={slideInRightVariants}
            >
              Character Stats
            </motion.h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Tech Stack */}
            <motion.div
              className="pt-6"
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Equipped Technologies
              </h4>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {['n8n', 'JS', 'React', 'Docker', 'Bash', 'OpenClaw', 'Airtable', 'Notion', 'Confluence'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    variants={itemVariants}
                    custom={index}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills in Training */}
            <motion.div 
              className="pt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4 
                className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2"
                variants={itemVariants}
              >
                <Sparkles className="w-4 h-4 text-accent-foreground" />
                Skills in Training
              </motion.h4>
              <div className="space-y-3">
                {inProgressSkills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      variants={itemVariants}
                      custom={index}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-accent-foreground" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Leveling up...
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full bg-accent rounded-full"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
