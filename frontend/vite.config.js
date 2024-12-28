import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase size limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'chakra': ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          // Split other large dependencies into separate chunks
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
