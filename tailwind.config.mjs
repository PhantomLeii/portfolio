import { defineConfig } from 'tailwindcss'

const tailwindConfig = defineConfig({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})

export default tailwindConfig
