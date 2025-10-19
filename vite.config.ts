import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/restro-project/' : '/', // Only use base path for production builds
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
