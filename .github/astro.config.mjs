import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mathew-sordyl-portfolio.netlify.app',
  output: 'static',
  build: {
    assets: 'assets'
  }
});