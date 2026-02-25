export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the blog post',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A short summary of the post (displayed in cards)',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'The main content of the blog post',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      description: 'Main image displayed at the top of the post',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'Categories this post belongs to',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Tags for filtering and SEO',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      description: 'The date and time this post was published',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      description: 'Whether this post should be highlighted',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      excerpt: 'excerpt',
      media: 'coverImage',
    },
    prepare({ title, excerpt, media }) {
      return {
        title,
        subtitle: excerpt,
        media,
      }
    },
  },
}
