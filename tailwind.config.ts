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
        navy: {
          DEFAULT: '#0D1B3E',
          deep: '#0A1628',
          light: '#162047',
        },
        electric: {
          DEFAULT: '#2B7BE8',
          light: '#5BA4F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #0D1B3E 50%, #0A1628 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'electric-gradient': 'linear-gradient(135deg, #2B7BE8 0%, #5BA4F5 100%)',
      },
      boxShadow: {
        'electric': '0 0 20px rgba(43, 123, 232, 0.4)',
        'electric-lg': '0 0 40px rgba(43, 123, 232, 0.6)',
        'card': '0 4px 32px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(43,123,232,0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(43,123,232,0.8)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
