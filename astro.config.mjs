// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://kaburajadulu.com',
  integrations: [react()],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
