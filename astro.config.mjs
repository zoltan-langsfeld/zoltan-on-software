import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // If you're hosting under /zoltan-on-software on GitHub Pages:
  base: '/zoltan-on-software/',

  // Other configuration options...
  trailingSlash: "never",

  integrations: [react()]
});