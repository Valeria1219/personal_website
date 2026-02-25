export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company',
      description: 'The name of the company',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companyUrl',
      type: 'url',
      title: 'Company Website URL',
      description: 'Link to the company website',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      description: 'Your job title/position',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Company Logo',
      description: 'Logo of the company (displayed as guild emblem)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'array',
      title: 'Short Description',
      description: 'A brief description shown in the timeline card',
      of: [{ type: 'block' }],
    },
    {
      name: 'introParagraph',
      type: 'array',
      title: 'Introduction Paragraph',
      description: 'A brief intro about the role displayed at the top of the modal',
      of: [{ type: 'block' }],
    },
    {
      name: 'accordionSections',
      type: 'array',
      title: 'Accordion Sections',
      description: 'Flexible sections for detailed role information (e.g., Key Achievements, Projects, Responsibilities)',
      of: [
        {
          type: 'object',
          title: 'Accordion Section',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Section Title',
              description: 'e.g., Key Achievements, Projects, Responsibilities',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              type: 'array',
              title: 'Section Content',
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    },
    {
      name: 'softSkills',
      type: 'array',
      title: 'Soft Skills',
      description: 'Interpersonal and professional skills (e.g., Team Leadership, Communication, Problem Solving)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'tools',
      type: 'array',
      title: 'Tools & Technologies',
      description: 'Technical tools and technologies used (e.g., React, Node.js, AWS)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'startDate',
      type: 'string',
      title: 'Start Date',
      description: 'When you started this position (format: YYYY-MM, e.g., 2023-01)',
      validation: (Rule) =>
        Rule.required().regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
          name: 'YYYY-MM format',
          invert: false,
        }),
    },
    {
      name: 'endDate',
      type: 'string',
      title: 'End Date',
      description: 'When you ended this position (format: YYYY-MM, e.g., 2023-06). Leave empty if current.',
      validation: (Rule) =>
        Rule.optional().regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
          name: 'YYYY-MM format',
          invert: false,
        }),
    },
    {
      name: 'level',
      type: 'number',
      title: 'Level Number',
      description: 'RPG-style level number for progression display',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'xpGained',
      type: 'number',
      title: 'XP Gained',
      description: 'Experience points gained during this role',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Icon to display for this experience',
      options: {
        list: [
          { title: 'Star', value: 'Star' },
          { title: 'Zap', value: 'Zap' },
          { title: 'Shield', value: 'Shield' },
          { title: 'Sword', value: 'Sword' },
        ],
        layout: 'radio',
      },
      initialValue: 'Star',
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'role',
      media: 'logo',
    },
  },
}
