import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  plugins: [react()],
  clearScreen: true,
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
})
