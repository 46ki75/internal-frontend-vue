import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts', '__tests__/**/*.spec.ts'],
    environment: 'jsdom'
  },
  plugins: [vue()]
})
