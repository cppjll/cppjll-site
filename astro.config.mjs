import {
  defineConfig,
  passthroughImageService,
  sharpImageService,
} from "astro/config";
import { fileURLToPath } from "node:url";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://cpp-jll.com",
  integrations: [react(), tailwind(), sitemap()],

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },

  image: {
    domains: ["api.cpp-jll.com"],
  },

  output: "static",
});
