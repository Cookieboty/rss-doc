/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4DD4',
        secondary: '#151621',
        dark: {
          100: '#15151B',
          200: '#1D1E2B',
          300: '#292A35',
          400: '#393A4B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D2D3E0',
          muted: '#858699',
          subtle: '#6B6F76',
        }
      },
    },
  },
  plugins: [],
} 