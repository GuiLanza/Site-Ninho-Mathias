import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/calendar.ics': {
        target: 'https://calendar.google.com',
        changeOrigin: true,
        rewrite: () => '/calendar/ical/ninhomathias.nm%40gmail.com/public/basic.ics',
      },
    },
  },
  preview: {
    proxy: {
      '/api/calendar.ics': {
        target: 'https://calendar.google.com',
        changeOrigin: true,
        rewrite: () => '/calendar/ical/ninhomathias.nm%40gmail.com/public/basic.ics',
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
