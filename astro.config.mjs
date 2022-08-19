import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [
<<<<<<< HEAD
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
=======
    tailwind({
      theme: {
        extend: {
          colors: {
            'grayPrimary' : 'var(--color)'
          }
        }
      }
    }),
>>>>>>> cade9f7 (Update: Created Title Component & Introduction List partial.)
  ]
>>>>>>> 3fbea8f (Update: Initial playaround with astro.)
});