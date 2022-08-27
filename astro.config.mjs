import { defineConfig } from 'astro/config';
<<<<<<< HEAD
import tailwind from "@astrojs/tailwind";

=======
>>>>>>> 63836dd (Update: Updated tailwind config. Implemented Dark and Light Mode)
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
      config: {},
    }),
<<<<<<< HEAD
>>>>>>> cade9f7 (Update: Created Title Component & Introduction List partial.)
  ]
>>>>>>> 3fbea8f (Update: Initial playaround with astro.)
=======
  ],
<<<<<<< HEAD
>>>>>>> 63836dd (Update: Updated tailwind config. Implemented Dark and Light Mode)
=======
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
>>>>>>> 64311ed (Addition: Finalised Post Layout for posts layout and tried Markdown using the PostLayout)
});