// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import sharp from 'sharp'

import { Sites } from './collections/Sites'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Media } from './collections/Media'

import nestedDocs from './plugins/nestedDocs'
import seoConfig from './plugins/seoConfig'
import { Header } from './globals/Header'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin:
      process.env.NODE_ENV !== 'production'
        ? {
            email: 'admin@email.com',
            password: 'admin',
            prefillOnly: true,
          }
        : false,
  },
  globals: [Header],
  collections: [Sites, Pages, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [nestedDocs, seoConfig],
})
