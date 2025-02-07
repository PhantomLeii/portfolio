import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

export default nestedDocsPlugin({
  collections: ['pages'],
  generateLabel: (_, doc) => doc.title,
  generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
})
