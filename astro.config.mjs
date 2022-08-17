import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
<<<<<<< HEAD
    tailwind({
      config: {},
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
=======
    tailwind({}),
  ]
>>>>>>> 3fbea8f (Update: Initial playaround with astro.)
});