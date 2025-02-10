import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'logo',
          label: 'Logo',
          fields: [
            {
              name: 'logoIcon',
              label: 'Logo Icon',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'logoText',
              label: 'Logo Text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'navigation',
          label: 'Navigation',
          fields: [
            {
              name: 'navItems',
              label: 'Navigation Items',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'socialLinks',
          label: 'Social Links',
          fields: [
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'URL',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
