import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'brand',
          label: 'Brand',
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
              name: 'links',
              label: 'Links',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'label',
                      label: 'label',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'page',
                      label: 'Page',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'social',
          label: 'Social',
          fields: [
            {
              name: 'links',
              label: 'Links',
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
                  name: 'label',
                  label: 'Label',
                  type: 'text',
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
