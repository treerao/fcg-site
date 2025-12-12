import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#030712', // slate-950
          surface: '#0f172a', // slate-900
          accent: '#06b6d4', // cyan-500
          glow: '#22d3ee', // cyan-400
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
