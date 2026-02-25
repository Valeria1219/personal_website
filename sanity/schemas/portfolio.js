export default {
  name: 'portfolio',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'The name of the project',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'A brief summary displayed in portfolio cards',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'caseStudy',
      type: 'array',
      title: 'Case Study Content',
      description: 'Detailed content about the project (shown on project detail page)',
      of: [{ type: 'block' }],
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      description: 'Main image displayed in the portfolio grid',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshots',
      type: 'array',
      title: 'Screenshots',
      description: 'Additional project screenshots',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      description: 'Technologies used in this project',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'liveUrl',
      type: 'url',
      title: 'Live URL',
      description: 'URL to the live project (if available)',
    },
    {
      name: 'repoUrl',
      type: 'url',
      title: 'Repository URL',
      description: 'URL to the source code repository',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      description: 'Whether this project should be highlighted',
      initialValue: false,
    },
    {
      name: 'completedAt',
      type: 'datetime',
      title: 'Completed At',
      description: 'The date this project was completed',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'coverImage',
    },
  },
}
