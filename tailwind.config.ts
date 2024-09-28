import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        roboto: 'var(--font-roboto-mono)',
      },

      fontSize: {
        '3xl.5': '2rem',
      },

      height: {
        207.5: '51.875rem',
      },
      maxHeight: {
        215: '53.75rem',
      },
      maxWidth: {
        400: '100rem',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },

      spacing: {
        30: '7.5rem',
      },
    },
  },
  plugins: [],
}
export default config
