import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Using relative paths for assets
  build: {
    rollupOptions: {
      input: {
        main: path.resolve('index.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  publicDir: 'public',  // This is the default, but we're making it explicit
})
