// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/frontend_bookmarks',
  output: 'static',
  integrations: [react()],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 50,
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },
      hmr: {
        overlay: true,
        clientPort: 4321,
      },
    },
    build: {
      emptyOutDir: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
});