import { client, experienceQuery } from '@/lib/sanity'
import Experience from './Experience'

// Fallback placeholder data when no Sanity data exists
const placeholderExperiences = [
  {
    id: 1,
    level: 5,
    company: 'Current Company',
    role: 'Senior Developer',
    description: 'Leading frontend architecture and mentoring junior developers. Crafting scalable solutions for complex problems.',
    softSkills: ['Team Leadership', 'Mentoring', 'Communication', 'Problem Solving'],
    tools: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    startDate: '2023-01',
    endDate: null,
    xpGained: 2500,
    icon: 'Star',
    introParagraph: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'As a Senior Developer at Current Company, I lead the frontend architecture team and mentor junior developers. This role has allowed me to grow both technically and as a leader.',
            marks: [],
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    accordionSections: [
      {
        title: 'Key Achievements',
        content: [
          {
            _type: 'block',
            children: [
              { _type: 'span', text: '• Led migration of legacy codebase to Next.js, improving performance by 40%', marks: [] },
            ],
            markDefs: [],
            style: 'normal',
          },
          {
            _type: 'block',
            children: [
              { _type: 'span', text: '• Mentored 5 junior developers, with 2 receiving promotions', marks: [] },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
      },
      {
        title: 'Projects',
        content: [
          {
            _type: 'block',
            children: [
              { _type: 'span', text: '• E-commerce Platform - Full redesign and implementation', marks: [] },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    level: 4,
    company: 'Previous Company',
    role: 'Full-Stack Developer',
    description: 'Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved performance.',
    softSkills: ['Project Management', 'Collaboration', 'Code Review'],
    tools: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    startDate: '2021-06',
    endDate: '2022-12',
    xpGained: 2000,
    icon: 'Shield',
  },
  {
    id: 3,
    level: 3,
    company: 'Startup Inc.',
    role: 'Frontend Developer',
    description: 'Built responsive web applications from scratch. Collaborated with design team to implement pixel-perfect UIs.',
    softSkills: ['Agile', 'Design Collaboration', 'Adaptability'],
    tools: ['Vue.js', 'CSS/SCSS', 'REST APIs', 'Git'],
    startDate: '2020-01',
    endDate: '2021-05',
    xpGained: 1500,
    icon: 'Sword',
  },
  {
    id: 4,
    level: 2,
    company: 'Agency Co.',
    role: 'Junior Developer',
    description: 'Started my journey in web development. Learned fundamentals and best practices while contributing to various projects.',
    softSkills: ['Learning', 'Time Management', 'Attention to Detail'],
    tools: ['JavaScript', 'HTML/CSS', 'Git', 'WordPress'],
    startDate: '2019-01',
    endDate: '2019-12',
    xpGained: 1000,
    icon: 'Zap',
  },
]

// Server-side data fetching with no caching for instant updates
async function getExperienceData() {
  try {
    const data = await client.fetch(experienceQuery, {}, { 
      cache: 'no-store' // Disable caching for instant updates
    })
    
    if (data && data.length > 0) {
      return data
    }
    return placeholderExperiences
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return placeholderExperiences
  }
}

export default async function ExperienceWrapper() {
  const experiences = await getExperienceData()
  
  return <Experience initialExperiences={experiences} />
}
