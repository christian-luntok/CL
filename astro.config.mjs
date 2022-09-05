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
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'prism',
  },
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});