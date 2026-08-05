import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.colwelllawoffice.com',
  integrations: [
    sitemap({
      // Keep noindex pages (thank-you, 404) out of the sitemap.
      filter: (page) => !page.includes('/contact/thank-you') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
