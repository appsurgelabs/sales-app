import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/sales-app/', // Replace 'your-repo-name' with your actual repository name
  plugins: [react()],
});

