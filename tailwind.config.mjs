/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Teal primary color palette
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Surface colors for light/dark themes
        surface: {
          light: '#ffffff',
          DEFAULT: '#f8fafc',
          dark: '#0f172a',
          'dark-card': '#1e293b',
        },
        // Theme colors using CSS variables
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        border: 'var(--border-color)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        surface: {
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
        },
        code: {
          bg: 'var(--code-bg)',
          text: 'var(--code-text)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
