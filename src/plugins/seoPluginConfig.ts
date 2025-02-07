import { seoPlugin } from '@payloadcms/plugin-seo'

export default seoPlugin({
  tabbedUI: true,
  collections: ['pages'],
  uploadsCollection: 'media',
  generateTitle: ({ doc }) => `Lebogang Phoshoko | ${doc.title}`,
  generateDescription: ({ doc }) => doc.excerpt,
})
