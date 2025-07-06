// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Contery_web/', // 👈 repo name same hona chahiye
  plugins: [react()],
});
