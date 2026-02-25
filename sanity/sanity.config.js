import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import category from './schemas/category'
import post from './schemas/post'
import portfolio from './schemas/portfolio'
import experience from './schemas/experience'

export default defineConfig({
  name: 'default',
  title: 'Personal Website',
  projectId: '1z5i680h',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [category, post, portfolio, experience],
  },
})
