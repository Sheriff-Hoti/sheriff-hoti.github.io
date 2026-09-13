import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo'],
    },
  },
});
