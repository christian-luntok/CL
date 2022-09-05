import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://cjluntok.com',
  integrations: [tailwind({
    config: {}
  }), sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});