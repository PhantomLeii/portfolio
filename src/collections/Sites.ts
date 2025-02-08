import { CollectionConfig } from 'payload'

export const Sites: CollectionConfig = {
  slug: 'sites',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'pages',
      label: 'Pages',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: true,
    },
  ],
}
