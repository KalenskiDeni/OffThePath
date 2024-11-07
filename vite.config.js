import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OffThePath/', // Make sure this matches your repository name
  plugins: [react()],
});