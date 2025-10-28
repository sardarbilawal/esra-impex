import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf7f0',
          100: '#fbeee0', 
          200: '#f6dac0',
          300: '#f0c195',
          400: '#e8a268',
          500: '#AF6641',
          600: '#a1532b',
          700: '#863f24',
          800: '#6e3423',
          900: '#5a2d20',
        },
        secondary: {
          50: '#f0f7f4',
          100: '#dcede4',
          200: '#bbdacc', 
          300: '#8fc0a9',
          400: '#5ea082',
          500: '#305D50',
          600: '#2a5447',
          700: '#24453b',
          800: '#1f3731',
          900: '#1b2e2a',
        }
      }
    },
  },
  plugins: [],
}
export default config