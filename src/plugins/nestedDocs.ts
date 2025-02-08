import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

export default nestedDocsPlugin({
  collections: ['sites', 'pages'],
  // @ts-ignore
  generateLabel: (_, doc) => doc.title,
  generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
})
