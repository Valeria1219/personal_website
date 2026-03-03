'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Sparkles, Scale, Compass, Flame } from 'lucide-react'

const moralValues = [
  {
    icon: Shield,
    title: 'Honesty',
    description: "True solutions aren't built on sugar-coated updates. I believe in radical transparency—with data, with teams, and with myself. I’d rather fix a difficult truth than maintain a comfortable flaw.",
  },
  {
    icon: Sparkles,
    title: 'Curiosity',
    description: "The 'impossible' is just a system I haven't mapped yet. I treat every technical hurdle as an invitation to learn, whether it’s mastering a new AI framework or digging into the raw logic of a failing workflow.",
  },
  {
    icon: Heart,
    title: 'Fairness',
    description: "Systems exist to serve people, not the other way around. I build environments where knowledge is shared freely and every 'adventurer' has the tools and the support they need to level up alongside me.",
  },
  {
    icon: Scale,
    title: 'Balance',
    description: "Efficiency is meaningless if it costs our humanity. I architect workflows that make life more peaceful, not just faster. I thrive at the intersection of high-level digital magic and the quiet, grounded reality of the physical world.",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const headerVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function MoralCode() {
  return (
    <section id="oath" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            variants={headerVariants}
          >
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Hero's Foundation</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            variants={headerVariants}
          >
            Oath of the <span className="text-primary">Witch</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={headerVariants}
          >
            The guiding principles that shape every quest and define the path forward
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {moralValues.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border">
            <Flame className="w-5 h-5 text-accent-foreground" />
            <p className="text-sm text-muted-foreground italic">
              "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
