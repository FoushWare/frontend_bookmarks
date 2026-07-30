import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/frontend_bookmarks',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4321,
    watch: {
      usePolling: true,
      interval: 50,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    },
    hmr: {
      overlay: true,
    },
  },
})
