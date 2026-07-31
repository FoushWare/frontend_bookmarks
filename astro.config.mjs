// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/frontend_bookmarks',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      emptyOutDir: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
});