import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //10. Add the following to the vite.config.js file to configure vite to use jest-dom to run our tests.
  test: {
    globals: true, 
    environment: 'jsdom',// environment for running tests to simulate the browser
    setupFiles: './src/test/setup.js', // this is where we tell vite to import jest-dom
    css: true,// you might want to disable it, if you don't have tests that rely on CSS since parsing CSS is slow
  },
  optimizeDeps: { exclude: ["fsevents"] },
})
