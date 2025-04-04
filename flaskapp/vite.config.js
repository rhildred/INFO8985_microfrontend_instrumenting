import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "./static",
    rollupOptions: {
      output: {
        entryFileNames: "x-dice.js",
        assetFileNames: "x-dice.[ext]",
      },
    }
  }
})