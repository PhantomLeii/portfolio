import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'
import theme from './colorTheme'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    heroui({
      prefix: 'heroui',
      defaultTheme: 'dark',
      addCommonColors: false,
      defaultExtendTheme: 'dark',
      layout: {
        fontSize: {
          large: '1.8rem',
          medium: '1.4rem',
          small: '1.2rem',
          tiny: '1rem',
        },
        radius: {
          large: '0.4rem',
          medium: '0.2rem',
          small: '0.1rem',
        },
      },
      themes: { dark: theme },
    }),
  ],
} satisfies Config
